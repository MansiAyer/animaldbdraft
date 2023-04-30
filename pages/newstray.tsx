import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function form() {
  return (
    <>
      <Navbar />

      <div className="card text-bg-secondary container-sm">
        <Form />
      </div>
    </>
  );
}