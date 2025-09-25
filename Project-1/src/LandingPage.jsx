import Dashboard from './Dashboard'

function LandingPage(prop){
    console.log(prop);
    let num = prop.data;

    return(
        <div>
            <hr />
            <h1>The num in LandingPage is : {num}</h1>
            <Dashboard count = {num}/>
        </div>
    )
}
export default LandingPage;