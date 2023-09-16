import "./RegisterForm.css"

const RegisterForm = ()=>{
    return(
   <>
   
   <div className="registerForm-parent">
    <form action="">
    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name"/>

    <label for="email">E-Mail: </label>
    <input type="email" id="email"name = "lastname" placeholder="E-mail"/>

    <label for="password">Password: </label>
    <input type="password" id="lname" name="lastname" placeholder="Enter Password"/>
    
      <input type="submit" value="Register"/>
      </form>
  
   </div>
   </>
    )
}

export default RegisterForm;
