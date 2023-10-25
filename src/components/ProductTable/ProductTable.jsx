import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import BorderColorIcon from "@mui/icons-material/BorderColor"
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "@mui/material/Modal";
import { useState } from 'react';
import { TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "spacearound",
  m: 0,
};


export default function ProductTable({addItems,setSendItems}) {
  console.log(addItems);
  const[errors,setErrors]=useState({})
  const [openModal, setOpenModal] =useState(false);
  const[editOpenModal,setEditOpenModal]=useState(false)
  const[image,setImage]=useState("")
  const[pid,setPid]=useState("")
  const[productName,setProductName]=useState("")
  const [items, setItems] =useState({
    name: "",
    details: "",
    price: "",
    
  });
  const newErrors={}
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const editHandleOpen=()=>setEditOpenModal(true)
  const editHandleClose=()=>setEditOpenModal(false)

  const changeHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const validationForm=()=>{
    if(!items.name){
      newErrors.name="Product name is required"
    }
    if(!items.details){
      newErrors.details="Product description is required"
    }
    if(!items.price){
      newErrors.price="Product price is required"
    }
    else if(isNaN(items.price)){
      newErrors.price="Product must be number"
    }
    setErrors(newErrors)
  return Object.keys(newErrors).length===0
  }
  const addHandler = (e) => {
    e.preventDefault();
    if(validationForm()){
      const newItems =addItems.map(eachProduct=>{
        if(eachProduct.id===pid){
         const updatedProduct = {
          id:pid,
          name:items.name,
          details:items.details,
          price:items.price
         }
         return updatedProduct
        }
         return eachProduct 
      
      })
      setSendItems(newItems)
     
      console.log(items)
      setItems({
        name:"",
        details:"",
        price:""
      })
    }
  
  };
  const deleteProduct=(id)=>{
       const updatedProducts=addItems.filter(item=>item.id!==id)
       setSendItems(updatedProducts)
       console.log(id,"delete")
       console.log(addItems)
  }
  const displayImage=(id)=>{
    handleOpen()
    const img=addItems[id-1].image 
    const pname=addItems[id-1].name
    setImage(img)
    setProductName((pname))

  }
  const modify=(id)=>{
  editHandleOpen()
  setPid(id)
  
 }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Product Title',
      align:"center",
      headerAlign:"center",
      width: 150,
      editable: true,
    },
    {
      field: 'details',
      headerName: 'Product Description',
      headerAlign:"center",
      width: 150,
      editable: true,
      align:"center",
    },
    {
      field: 'price',
      headerName: 'Price($)',
      headerAlign:"center",
      type: 'number',
      width: 110,
      editable: true,
      align:"center",
    },
    {
      field: 'image',
      headerName: 'Image',
      headerAlign:"center",
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      align:"center",
      width: 160,
      renderCell:(params)=>(
        <>
        <Button variant="text" onClick={()=>displayImage(params.id)}>Preview</Button>
        </>
      )

    },

    {
      field:"actions",
      type:"Edit",
      headerName:"Actions",
      headerAlign:"Center",
      renderCell:(params)=>(
        <>
        <span>
          <button style={{color:"blue",borderWidth:"0",backgroundColor:"transparent",outline:"0"}}  onClick={()=>modify(params.id)}> 
          <BorderColorIcon/>
          </button>
         
        </span>
        <span >
        <button style={{color:"red",borderWidth:"0",backgroundColor:"transparent",outline:"0"}} onClick={()=>deleteProduct(params.id)}>
        <DeleteIcon />
        </button>
         
        </span>
        </>
      )
    }
  ];
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={addItems}
        columns={columns}

      />
       <Modal
            open={editOpenModal}
            onClose={editHandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1>Edit Product Details</h1>

                <button
                  onClick={editHandleClose}
                  style={{ backgroundColor: "transparent", border: "0" }}
                >
                  <ClearIcon style={{ fontSize: "40px" }} />
                </button>
              </div>
              <form autoComplete="off" className="form-container-addproduct">
                <div>
                  <label>Product Name:</label>
                  <TextField
                   id="outlined-required"
                    type="text"
                    label="Enter Product Name"
                    helperText={errors.name}
                    error={Boolean(errors.name)}
                    onChange={changeHandler}
                    className="product-input"
                    name="name"
                    value={items.name}
                   
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <label>Product Description: </label>
                  <TextField
                    type="text"
                    label="Enter Product Description"
                    onChange={changeHandler}
                    helperText={errors.details}
                    error={Boolean(errors.details)}
                    className="product-input"
                    name="details"
                    value={items.details}
                  />
                </div>
                <div>
                  <label>Product Price:</label>
                  <TextField
                    type="text"
                    label="Enter Product Price"
                    onChange={changeHandler}
                    helperText={errors.price}
                    error={Boolean(errors.price)}
                    className="product-input"
                    name="price"
                    value={items.price}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <button className="btn btn-secondary" onClick={editHandleClose}>
                    Cancel
                  </button>
                  <Button onClick={addHandler} variant="contained" sx={{marginLeft:"51%"}}>
                    Add
                  </Button>
                </div>
              </form>
            </Box>
          </Modal>

          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1>{productName}</h1>

                <button
                  onClick={handleClose}
                  style={{ backgroundColor: "transparent", border: "0" }}
                >
                  <ClearIcon style={{ fontSize: "40px" }} />
                </button>
              </div>

              <div>
                  <img src={image} alt='product-img' style={{height:"300px",width:"70%"}}/>

              </div>
              </Box>
              </Modal>
    </Box>
  );
}