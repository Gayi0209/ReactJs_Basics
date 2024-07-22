function arrPrint(){
    var arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div>
            <h2>Numbers: </h2>
            {arr.map((num) => {
                return <p>{num}</p>
            })}
        </div>
    );

    // const branches = ["IT","CSE","AIML","AIDS","Cys"];
    // const branchList = branches.map((branch,index) => <li>{branch}</li>);
    // return (
    //     <div>
    //         <h2>Branches: </h2>
    //         <ul>{branchList}</ul>
    //     </div>
    // )
    
}
export default arrPrint