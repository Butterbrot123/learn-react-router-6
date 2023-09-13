1. What is a route/url parameter?

A route/url parameter is a variable part of a URL segment that can be used to pass extra information to a given route.

------------
2. Add a route parameter called `productId` to the Route path below:


<Route path="/products:productId" element={<ProductDetail />} />


------------
3. Add whatever you need to add for the component below to display
   the route parameter in the <h1>

import { useParams } from "react-router-dom"

function ProductDetail() {
    const { productId } = useParams()
    return <h1>Product id is {productId}</h1>
}
