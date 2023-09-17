import "./RegisterForm.css"

const RegisterForm = ()=>{
    return(
 
   
   <div className="registerForm-parent">
    <form action="">
    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name"/>

    <label for="email">E-Mail: </label>
    <input type="email" id="email"name = "email" placeholder="E-mail"/>

    <label for="password">Password: </label>
    <input type="password" id="password" name="password" placeholder="Enter Password"/>

    <label for="cnfPassword">Password: </label>
    <input type="password" id="cnfPassword" name="cnfPassword" placeholder="Re-enter Password again"/>
    <input type="submit" value="Register"/>
      </form>
  
   </div>

    )
}

export default RegisterForm;
