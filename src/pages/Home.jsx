import Card from "../components/Card";


function Home(){
    return(
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mt-10">Lost something?</h1>
                <h1 className="text-2xl text-center mt-4">Report it here and we'll help you find it!</h1>
                <p className="text-center mt-4">A community-driven platform to help you recover lost items.</p>
            </div>
            <div className="border mt-6">
                <h1 className="text-2xl font-bold  mt-2 flex items-start ml-4">Recently Found Items</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <Card />
                    <Card />
                    <Card />
                </div> 
            </div>
        </div>
     
     
    );
}
export default Home;