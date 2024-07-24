function CardUI(props) {
const width = 200;

    return(
            <div>
                <div className ="card" style={{width: '250px'}}>
                <img src="Jenny.png" alt="Jenny" width={width}style={{  height: '130px',border : '1px solid black', borderRadius: '50%' }} />
                <div className = "card-body">
                    <h3> {props.program}</h3>
                    <h4> {props.col}</h4>
                    <h5> {props.user.branch}</h5>
                    <button type="button" className="btn btn-primary">Button</button>
                </div>
                </div>
            </div>
);
}
export default CardUI;