import Day5 from "./Header.js";
import Test1 from "./Test1.js";
import Test2 from "./Test2.js";
import Test3 from "./Test3.js";
import imgTest1 from'../img/frontend_technologies.png'

const ExDay5 = () => {
    return (
        <div className='Day5'>
        <Day5 />
        <Test1 imgTest1={imgTest1}/>
        <Test2 />
        <Test3 />
        </div>
    )
}

export default ExDay5