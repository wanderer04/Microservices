import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Artisanal Burger",
    description:
      "Hand-crafted beef patty with aged cheddar and caramelized onions",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Mediterranean Salad",
    description:
      "Fresh mixed greens with feta, olives, and house-made vinaigrette",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wood-Fired Pizza",
    description: "Margherita pizza with fresh basil and buffalo mozzarella",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Grilled Salmon",
    description: "Wild-caught salmon with lemon herb butter",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [orders, setOrders] = useState<number[]>([]);

  const handleOrder = async (itemId: number) => {
    setOrders([...orders, itemId]);
    const url = "http://localhost:5000/confirm-order";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON format
      },
      body: JSON.stringify({
        email: "adarshmohapatra10@gmail.com",
        food: "Artisanal Burger",
      }),
      // ...
    });
    alert(
      "Confirmed order!! Artisanal Burger will be Delivered shortly\nThis message was sent from microservice 1"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Software Engineering Implementation Demo
          </h1>
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            {orders.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {orders.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <span className="text-lg font-medium text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <button
                  onClick={() => handleOrder(item.id)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
