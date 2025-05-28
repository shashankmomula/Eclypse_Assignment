import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

// API health check
app.get('/api/health', (req, res) => {
  res.send('API is running');
});

// Outfit Generation Endpoint
app.post('/api/generate-outfit', async (req: Request, res: Response) => {
  try {
    const { productName, productDescription, productCategory } = req.body;

    const prompt = `Given this dress:
    Name: ${productName}
    Description: ${productDescription}
    Category: ${productCategory}
    
    Suggest 2 accessories that would complement this dress. For each accessory, provide:
    1. A name
    2. A brief description
    3. A realistic price range
    4. A relevant image URL from Pexels (use format: https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg)
    
    Important:
    - Use only Pexels image URLs
    - Make sure the image URLs are complete and valid
    - Choose images that are high quality and relevant to the accessory
    - If you can't find a suitable image, dont pass the image field
    
    Format the response as a JSON array of objects with these properties:
    {
      "accessories": [
        {
          "name": "accessory name",
          "description": "brief description",
          "price": "price range",
          "image": "pexels image URL"
        }
      ]
    }`;

    

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0].message.content;
    

    let accessories = [];
    
    try {
      const cleanedResponse = response?.replace(/```json|```/g, '').trim();
      accessories = JSON.parse(cleanedResponse || '{"accessories":[]}').accessories;

      
      
      // Validate and clean up image URLs
      accessories = accessories.map((accessory: any) => ({
        ...accessory,
        image: accessory.image || 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg'
      }));
     
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      accessories = [];
    }

    res.json({ accessories });
  } catch (error) {
    console.error('Error generating outfit:', error);
    res.status(500).json({ error: 'Failed to generate outfit suggestions' });
  }
});

// Catch-all route to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 