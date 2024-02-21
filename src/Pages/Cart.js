import { Button, Col, Container,Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import FullCard from "../Components/FullCard/FullCard";
import { useContext } from "react";
export default function Cart(){
    const {cartData,totalPrice,resetCart}=useContext(CartContext);
    return(
        <Container>
            {
                cartData.map((item)=>{
                    return(
                        <FullCard item={item}></FullCard>
                        
                    )
                })
            }
            <div className="d-flex flex-column justify-items-center">
            <p className="fs-3 text-center fw-bolder">{cartData.length<1?"The Cart is Empty":`Total Price : $${totalPrice}`}</p>
            {
                cartData.length<1?"":<Button
                onClick={()=>{
                    alert("purchase successfuly");
                    resetCart();
                }}
                className="text-center m-auto px-5 fs-4"
                variant="primary">
                    Check Out
                </Button>
            }
            </div>
        </Container>
    )
}