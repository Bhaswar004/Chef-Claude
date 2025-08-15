import chefLogo from "/src/images/chef.svg" 
export default function Header(){
    return (
        <header>
            <img src = {chefLogo} alt="chef logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}