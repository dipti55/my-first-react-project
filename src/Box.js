import "./App.css"
const Box = ({para, para1})=>{
    return(
        <span className="box">What is React?
        <hr />
         {para}
         {para1}
        <hr />
         <button id="readMore">Read more</button></span>
    )
}

export default Box;