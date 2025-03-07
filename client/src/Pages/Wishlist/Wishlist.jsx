import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import useStore from "../../Context/StoreContext"; // ✅ Wishlist store import kiya

const Wishlist = () => {
  const { wishlist = [], addToWishlist, removeFromWishlist } = useStore(); // ✅ Default empty array to prevent undefined error

  return (
    <div className='mt-35 ml-15'>
      <h1 className='text-center text-5xl'>Wishlist</h1>
      <div className='flex gap-10 flex-wrap h-full'>
        {wishlist.length > 0 ? wishlist.map(item => (
          <Card key={item.id} className="w-80 mt-10">
            <CardHeader shadow={false} floated={false} className="h-64">
              <img src={item.image_link} alt="card-image" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">{item.name}</Typography>
                <Typography color="black" className=" font-bold">₹{item.price}</Typography>
              </div>
              <Typography variant="small" color="gray" className="font-normal opacity-75">
                Original Price: <span className="line-through">₹{item.originalPrice}</span>
                <br />
                Discount: {item.discount}%
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
              <Button 
                ripple={false} 
                fullWidth={true} 
                className="bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
              <Button 
                ripple={false} 
                className="bg-red-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        )) : <p className='text-center text-gray-500 mt-10'>No items in wishlist</p>}
      </div>
    </div>
  );
};

export default Wishlist;
