import Welcome from './welcome'
import Add from './Add'
import Details from './details'
import Arrayprint from './Arrayprint'
import Booleancase from './boolean'
import ReviewList from './ReviewsAndDescription' 
function All()
{
    return (
        <div>
            <Welcome />
            <Add />
            <Details />
            <Arrayprint />
            <Booleancase isTrue={true}/>
            <Booleancase isTrue={false}/>
            <ReviewList />
        </div>
    )
}
export default All
