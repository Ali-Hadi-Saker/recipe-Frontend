import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
    const { id } = useParams(); 
    console.log('id'+id)
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost/recipe-Backend/api/get-recipe-by-id.php?recipe_id=${id}`);
                const data = await response.json();
                console.log(data)
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <p>{recipe.steps}</p>
        </div>
    );
};

export default RecipePage;
