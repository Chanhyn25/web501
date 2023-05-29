import Header from "../components/Header";
import { products as data } from "../dataFake";
import { useEffect, useState } from "../lib";
const ProductPage = () => {
    const [products, setProducts] = useState(data);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            console.log(btn);
        }
    });
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Product Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Nội dung</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${products
                        .map(
                            (product, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${product.name}</td>
                                <td>${product.content}</td>
                                <td>
                                    <button class="btn btn-remove">Remove</button>
                                </td>
                            </tr>
                    `
                        )
                        .join("")}
                    
                </tbody>
            </table>
                
        </div>
    `;
};
export default ProductPage;
