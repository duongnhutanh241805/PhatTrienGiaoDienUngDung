import React, { useState, useEffect } from 'react';
import { filterProps, motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import luuIcon from '../img/luuIcon.png'

const recipes = [
  { 
    id: 1, 
    title: 'Italian-style tomato salad', 
    category: 'Salads',
    image: 'https://png.pngtree.com/background/20250103/original/pngtree-background-beautiful-wallpaper-image-picture-image_15491298.jpg',
    rating: 4.5
  },
  { 
    id: 2, 
    title: 'Vegetable and shrimp spaghetti', 
    category: 'Pasta',
    image: '/api/placeholder/300/200?text=Shrimp+Spaghetti',
    rating: 4.7
  },
  { 
    id: 3, 
    title: 'Lotus delight salad', 
    category: 'Salads',
    image: '/api/placeholder/300/200?text=Lotus+Salad',
    rating: 4.3
  },
  { 
    id: 4, 
    title: 'Snack cakes', 
    category: 'Desserts',
    image: '/api/placeholder/300/200?text=Snack+Cakes',
    rating: 4.2
  },
  { 
    id: 5, 
    title: 'Salad with cabbage and shrimp', 
    category: 'Salads',
    image: '/api/placeholder/300/200?text=Cabbage+Salad',
    rating: 4.6
  },
  { 
    id: 6, 
    title: 'Beans, shrimp, and potato salad', 
    category: 'Salads',
    image: '/api/placeholder/300/200?text=Bean+Salad',
    rating: 4.4
  },
  { 
    id: 7, 
    title: 'Sunny-side up fried eggs', 
    category: 'Breakfast',
    image: '/api/placeholder/300/200?text=Fried+Eggs',
    rating: 4.8
  },
  { 
    id: 8, 
    title: 'Lotus delight salad', 
    category: 'Salads',
    image: '/api/placeholder/300/200?text=Another+Salad',
    rating: 4.5
  }
];


const RecipeBoxPage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // api 
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('https://67c8247e0acf98d070851861.mockapi.io/newAPI') 
      .then(response => response.json())
      .then(data => {
        setItem(data); 
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);



  const toggleFavorite = (recipeId) => {
    setFavoriteRecipes(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const categories = ['All', ...new Set(recipes.map(recipe => recipe.category))];

  const filteredRecipes = selectedCategory === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div className="grid grid-cols-4 container px-4 py-8  text-start">
        <div className=' border '>
            <h3>FILTERS</h3>
            <div className="drop -">
               hi
            </div>
             
        </div>
        <div className='col-span-3 '>
            <h2 className='content-start'>Salad (32)</h2>
            <div className='grid  md:grid-cols-3 gap-6 '>
              {filteredRecipes.map((recipes) => (
                <div className='w-60 m-auto rounded-4xl'>
                    <img src={recipes.image} className='w-60 h-60' />
                    <div className='flex justify-between mt-2 w-60 h-15 '>
                       <h2>{recipes.title}</h2>
                        <button className='border bg-amber-700 rounded-3xl w-7 h-7 text-center'>
                            <img src={luuIcon} className='w-5 h-5 m-auto' />
                        </button>
                    </div>
                  <h3 className='w-25 h-5 m-2 bg-amber-600 rounded-3xl text-center'>32 minutes</h3>

                </div>

              ))}
            </div>
        </div>
    </div>
  );
};

export default RecipeBoxPage;