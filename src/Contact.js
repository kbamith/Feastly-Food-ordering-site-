const Contact=()=>{
    return <div>
        <h2 className="text-4xl text-gray-800">Contact Us</h2>
        <form className="m-2.5">
            <label htmlFor="fname" className="ml-1.5 text-gray-800">Full Name</label>
            <div>
            <input id="fname" type="text" className="border border-gray-400 p-2 m-2" placeholder="FirstName"/>
            <input type="text" className="border border-gray-400 p-2 m-2" placeholder="LastName"/><br/>
            </div>
            <label htmlFor="email" className="ml-1.5 text-gray-800">Email</label>
            <div>
            <input  id="email"  type="text" className="border border-gray-400 p-2 m-2" placeholder="example@gmail.com"/>
            </div>
           <label htmlFor="message" className="ml-1.5 text-gray-800">Message</label>
            <div>
            <textarea  id="message"   className="border border-gray-400 p-2 m-2" />
            </div>

            <button className="border border-gray-400 p-2 m-2 rounded-lg bg-gray-900  cursor-pointer text-white" onClick={(e)=>e.preventDefault()}>Submit</button>
        </form>
    </div>
}
export default Contact;