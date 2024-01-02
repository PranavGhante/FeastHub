import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Sell() {
    const [foodItem, setFoodItem] = useState({ CategoryName: "", name: "", img: "", options: "", description: "" });

    let navigate = useNavigate();
    let arr = [];
    const handleSubmit = async (e) => {
        e.preventDefault();
        arr.push(JSON.parse(foodItem.options));
        const response = await fetch("http://localhost:5000/api/addItem", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ CategoryName: foodItem.CategoryName, name: foodItem.name, img: foodItem.img, options: arr, description: foodItem.description })
        })
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        navigate('/')
    }


    const onChange = (e) => {
        setFoodItem({ ...foodItem, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <>
                <div className="container mt-4 ">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Categoryname" className="form-label">Category Name</label>
                            <input type="text" className="form-control" name='CategoryName' value={foodItem.CategoryName} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={foodItem.name} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img_link" className="form-label">Img Link</label>
                            <input type="text" className="form-control" name='img' value={foodItem.img} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Options" className="form-label">Options</label>
                            <input type="text" className="form-control" name='options' value={foodItem.options} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Description" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' value={foodItem.description} onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </>
        </div>
    )
}
