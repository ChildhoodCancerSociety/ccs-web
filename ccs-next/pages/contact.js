import React from "react";






const Contact=()=>{
 
 
  return(
    <section>
    <div className="container">
      

      <div className="frontC">
        
      <h1 className="--text-center">Contact Us!</h1>
        
      <div className="--ContactInfo">
        <div className="info">
        
        <div className="infoBlock">
          <div className="iconC"> </div>
        <h3 className="--Cinfo">Call Us</h3>
        <p className="--ContactP"> +1 (848) 200-2111</p>
       </div>
        
      <div className="infoBlock">
          <div className="iconC"> </div>
          <h3 className="--Cinfo">Write Us</h3>
          <p className="--ContactP"> Childhood Cancer Society P.O. Box 221 189 Berdan Ave. Wayne, NJ 07407</p>
      </div>
           <div className="infoBlock">
  <div className="iconC"> </div>
            
          <h3 className="--Cinfo">Email Us</h3>
              <p className="--ContactP"> email@ccs.org </p>
           </div>


          
        </div>
      </div>
      </div>




      <div className="formC">
      <form  ref={form} 

      
        className="--form --flex-center --dir-column">
      <input type="text"
        placeholder="Name"
        name="full_name"
         required/>
        
      
         <input type="email"
        placeholder="Email"
        name="user_email" required/>
        
        <input type="text"
        placeholder="Phone"
        name="phone_number" required/>
        
        
        <textarea name="message" placeholder="
          Your message"
          cols="30" rows="3"></textarea>

        <button type="submit" classname="--btn --btn-primary">Add Comment</button>
      
      </form>
      </div>
    </div>
    </section>
  )
}

export default Contact