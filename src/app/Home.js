import { Button, Col, Row } from 'antd';
import { Input } from 'antd';
import { useNavigate  } from "react-router";
import {
    ShoppingCartOutlined
  } from '@ant-design/icons';
function Home(){
    const { Search } = Input;
    const history = useNavigate();
    let offer1,offer2,offer3=0;
    let UserValue=0;
    const inputTypedCheck=(typed)=>{
        console.log("typed:",typed)
        UserValue=typed;
        offerCalc()

    }
    const offerCalc=()=>{
        offer1=(UserValue*10)/100;
        offer2=(UserValue*20)/100;
        offer3=(UserValue*25)/100;
    }
    return <>
    <Row >
      <Col span={24}><h2> This is a homepage</h2></Col>
      </Row>
      <Row>
        <Col  span={12}><Search placeholder="Input a Number" type='number' min={1}  enterButton onSearch={e=>inputTypedCheck(e)} onChange={e=>inputTypedCheck(e.target.value)}/></Col>
        <Col  span={12}><Button onClick={()=>history("/offer1", {
        state: {
            offer:offer1
        },})}><ShoppingCartOutlined />Coupon 1</Button><Button onClick={()=>history("/offer2", {
            state: {
                offer:offer2
            },})}><ShoppingCartOutlined />Coupon 2</Button ><Button onClick={()=>history("/offer3", {
                state: {
                    offer:offer3
                },})}><ShoppingCartOutlined />Coupon 3</Button></Col>
      </Row>
     
    </>
    
    

}
    
 
  export default Home;