import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/Slices/CartSlice";

const Dashboard = () => {
    const cartState = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleStore = () => {
        dispatch(addItem("someRando"));
    };
    return (
        <div>
            <button onClick={handleStore}>ADD To Store</button>
            <p>This is the redux page- I want to play with-{cartState?.length}</p>
        </div>
    )
};
export default Dashboard