from math import prod
from fastapi import FastAPI
import time
app = FastAPI()

@app.get('/')
async def home():
    return {'msg':'Hare Krsna'}

@app.get('/api/products')
async def home(q : str = None):
    time.sleep(2) 
    products = [
        {
            'id':1,
            'name':'Laptop',
            'price':80000,
            'image':'https://www.pexels.com/photo/rustic-autumn-harvest-with-red-apples-and-peppers-34100157/',
        },
        {
            'id':2,
            'name':'Mobile',
            'price':20000,
            'image':'https://www.pexels.com/photo/rustic-autumn-harvest-with-red-apples-and-peppers-34100157/',  
        },
        {
            'id':3,
            'name':'Tablet',
            'price':30000,
            'image':'https://www.pexels.com/photo/rustic-autumn-harvest-with-red-apples-and-peppers-34100157/',  
        },
        {
            'id':4,
            'name':'Monitor',
            'price':25000,
            'image':'https://www.pexels.com/photo/rustic-autumn-harvest-with-red-apples-and-peppers-34100157/',  
        },
        {
            'id':5,
            'name':'Keyboard',
            'price':5000,
            'image':'https://www.pexels.com/photo/rustic-autumn-harvest-with-red-apples-and-peppers-34100157/',
        },
        {
            'id':6,
            'name':'Mouse',
            'price':3000,
            'image':'https://www.pexels.com/photo/rustic-autumn-harvest-with-red-apples-and-peppers-34100157/',
        },
    ]
    if q:
        filteredProducts = filter(lambda product : q.lower() in product['name'].lower(), products)
        return list(filteredProducts)
    
    if not q:
        return products