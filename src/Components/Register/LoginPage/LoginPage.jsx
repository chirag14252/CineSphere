
const LoginPage = ()=>{
    return(
        <div className="registerForm-parent">
        <form action="">
    
        <label for="email">E-Mail: </label>
        <input type="email" id="email"name = "lastname" placeholder="E-mail"/>
    
        <label for="password">Password: </label>
        <input type="password" id="lname" name="lastname" placeholder="Enter Password"/>
        
          <input type="submit" value="Login"/>
          </form>
      
       </div>
    )
}

export default LoginPage;