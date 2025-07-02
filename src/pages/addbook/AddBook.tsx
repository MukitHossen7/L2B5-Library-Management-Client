import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { IBook } from "@/interface/book/book.interface";
import { useCreateBookMutation } from "@/redux/api/bookapi/bookApi";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

const AddBook = () => {
  const form = useForm<IBook>();
  const [createBook] = useCreateBookMutation();
  const { handleSubmit, control } = form;
  const onSubmit: SubmitHandler<IBook> = async (data) => {
    try {
      const bookData = {
        ...data,
        copies: Number(data?.copies),
      };
      await createBook(bookData).unwrap();
      console.log(bookData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-[#171717] rounded-lg shadow-lg">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title */}
          <FormField
            control={control}
            name="title"
            rules={{ required: "Title is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add your title here"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* author */}
          <FormField
            control={control}
            name="author"
            rules={{ required: "Author is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add your author here"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          {/* image */}
          <FormField
            control={control}
            name="image"
            rules={{ required: "Image is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add your image url here"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          {/* genre */}
          <FormField
            control={control}
            name="genre"
            rules={{ required: "Genre is required" }}
            render={({ field, fieldState }) => (
              <FormItem className="">
                <FormLabel className="mt-2">Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          {/* isbn */}
          <FormField
            control={control}
            name="isbn"
            rules={{ required: "ISBN is required" }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Add your image url here"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-2">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add your description here"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* copies */}
          <FormField
            control={control}
            name="copies"
            rules={{
              required: "Copies must be is required",
              min: {
                value: 1,
                message: "Copies must be at least 1",
              },
            }}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Create Book
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddBook;
