
import {useLocation} from 'react-router-dom';

function OfferPrice(props){

    const location = useLocation();

    return<>
   Your offer price is {location.state.offer}
    </>
}

export default OfferPrice;