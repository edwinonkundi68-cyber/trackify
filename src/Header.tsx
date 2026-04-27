interface HeaderProps{
    user:string;
}
// "prop"
const Header=(props:HeaderProps)=>{
    return(
        <header>
            <h1>TRACKIFY APP</h1>
            <p>User:{props.user}</p>
        </header>
    );
}
export default Header