import { useSelector } from "react-redux";

const Dashboard = () => {
    const cartState = useSelector(store => store.cart.items);
    return (
        <div>
            This is the redux page- I want to play with-{cartState?.length}
        </div>
    )
};
export default Dashboard