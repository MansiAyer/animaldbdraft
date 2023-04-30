import Navbar from "../components/Navbar";
import FormCustom from "../components/Form";

export default function form() {
  return (
    <div>
      <Navbar />

      <div className="card text-bg-secondary container-sm">
        <FormCustom />
      </div>
    </div>
  );
}