const Order=require('../modals/orderModals')

exports.createAOrderController= async(req,res)=>{
    console.log("createAOrderController ");
    try{
      const newOrder=await Order(req.body)
      const saveOrder=await newOrder.save()
        res.status(200).json(saveOrder)    
    }catch(err){ 
        console.log("error Creating order",err);
        
        res.status(401).json(err)
    }
}

exports.getAOrderByEmailController= async(req,res)=>{
    console.log("getOrderByEmailController ");
    try{
      const {email}=req.params 
const orders= await Order.find({email}).sort({createdAt:-1})
if(!orders){
    return res.status(404).json({message:"Order not Found"})
}res.status(200).json(orders)
    }catch(err){ 
        console.log("error fetch order",err);
        
        res.status(401).json(err)
    }
}

