"use client";

import ButtonComp from "@/components/Button";
import InputField from "@/components/InputField";
import SelectComp from "@/components/Select";
import { createProduct } from "@/services/products";
import { categoryOptions } from "@/utils/constants";
import { extractErrorArray } from "@/utils/helpers";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateItem() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
    category: categoryOptions[0].value,
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createItemMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("created item successfully");
      setItem({
        title: "",
        description: "",
        price: "",
        category: categoryOptions[0].value,
        image: "",
      });
    },
    onError: (err) => {
      extractErrorArray(err);
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createItemMutation.mutate(item);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="border-2 p-5 max-w-[700px] border-bcolor rounded-lg flex flex-col gap-3 w-full my-5 sm:my-10">
        <h1 className="text-xl font-semibold">Create a new Item</h1>
        <InputField
          value={item.title}
          name="title"
          label="title"
          required
          onChange={(e) => handleChange(e)}
        />
        <div className="flex flex-col w-full">
          <label className="text-sm capitalize mt-3">
            Description
            <span className="text-red-600 text-lg">*</span>
          </label>
          <textarea
            onChange={(e) => handleChange(e)}
            value={item.description}
            className="px-1 border-2 py-1.5 duration-700 rounded-md focus:outline-0! border-bcolor bg-primary"
            required
            rows={6}
            name="description"
            id=""></textarea>
        </div>
        <InputField
          value={item.price}
          name="price"
          type="number"
          label="Price"
          min={0}
          required
          onChange={(e) => handleChange(e)}
        />
        <InputField
          value={item.image}
          name="image"
          label="Image url"
          required
          onChange={(e) => handleChange(e)}
        />
        <SelectComp
          required
          name="category"
          options={categoryOptions}
          label="filter by category"
          defaultValue={item.category}
          onChange={(e) => handleChange(e)}
        />
        <ButtonComp
          loading={createItemMutation.isPending}
          dark
          title="Create Post"
          type="submit"
          className="py-2 mt-5"
        />
      </form>
    </div>
  );
}
