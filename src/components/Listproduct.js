function Listproduct (props){
 
    const products = props.contentList;

    const handleDelete = (index) =>{
    props.onDelete(index);
  

    }
    const handleEdit = (product, index) =>{
        props.onEdit(product, index);
    }

    return(
        <div>
        { products !== null && products.map((product, index) =>{
            return(
                <div key={index}>
                <div id="notes" className="row container-fluid">
                    <label>{index +1}</label>
                    <label>{product.content}</label>
                    <label>
                    <button type="button" class="btn btn-warning" onClick={() => handleEdit(product, index)}>Edit</button>
                        <button type="button" class="btn btn-danger m-2" onClick={() =>handleDelete(index)}>Delete</button>
                    </label>
                </div>
                <hr/>   
                </div>

            )
        })

        }       

        </div>

    )
}
export default Listproduct;