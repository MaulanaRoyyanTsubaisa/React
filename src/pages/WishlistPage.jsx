import { Button, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
const WhislistPage = () => {
  const [wishlistInput, setWhislistInput] = useState("");
  const [WhislistItems, setWhislistItems] = useState([]);

  const fetchWishlistItems = async () => {
    try {
      const response = await axiosInstance.get("/wishlist-items");
      setWhislistItems(response.data);
    } catch (error) {
      toast.error("server error, please wait a momment");
    }
  };

  const addWhislist = async () => {
    try {
      await axiosInstance.post("/wishlist-items", {
        name: wishlistInput,
      });
      fetchWishlistItems();
      setWhislistInput("");

      toast.success("you have added an item");
    } catch (error) {
      toast.error("server error, please wait a momment");
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return (
    <>
      {/* <Header />
      <Footer day="monday" numberOfActivities="1" />
      <Footer day="tuesday" numberOfActivities="3" />
    <Bawah pesan="helloo world"/>
    <Counter /> */}

      <div className="flex items-center p-4 gap-4">
        <Input
          value={wishlistInput}
          onChange={(x) => {
            if (x.target.value.length <= 5) {
              setWhislistInput(x.target.value);
            }
          }}
          type="text"
          label="Whislist Item"
          color="secondary"
        />
        <Button color="primary" onClick={addWhislist}>
          Add
        </Button>
      </div>

      <ul className="list-decimal list-inside text-center">
        {WhislistItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <Link to="/sign-up">SignUp now</Link>
    </>
  );
};

export default WhislistPage;
