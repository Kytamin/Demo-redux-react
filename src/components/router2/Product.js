import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Product() {
    const { state } = useLocation();
  return (
    <div>
      <h3>value selected {state.categoryId} </h3>
    </div>
  );
}
export default Product;