function ProductPreview(props) {
    return(
        <ul>
            <li>id: {props.post.productId}</li>
            <li>type: {props.post.type}</li>
            <li>description: {props.post.description}</li>
            <li>color: {props.post.colour}</li>
        </ul>
    )
}
export default ProductPreview;