import CardUI from "./card"
function CardListUI(){
    const college = "Svecw";
    const userObject = { name : "Jenny", college : "Svecw", branch : "AIML"};
    const usersList = ["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"];

    return(
        <div style = {{ display : "flex",flexWrap : 'wrap'}}>{
            usersList.map(
                (userListItem,index) => (<CardUI key = {index}
            program = {userListItem}
            col = {college}
            user = {userObject}  
            userFromArray = {userListItem} />) 
            )
        }
        </div>
    );
}
export default CardListUI;
