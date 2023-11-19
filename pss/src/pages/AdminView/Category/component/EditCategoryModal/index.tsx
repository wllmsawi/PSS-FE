import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { IoMdAdd } from "react-icons/io";
import * as Yup from "yup";

export const EditCategoryModal = (props: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const udpateCategory = async (
    product_category_name: string
  ) => {
    try {
      // let formData = new FormData();
      // formData.append(
      //   "product_category_name",
      //   product_category_name
      // );
      const result = await axios.patch(
        `${
          import.meta.env.VITE_APP_API_BASE_URL
        }/category/${props?.id}`,
        {
          product_category_name: product_category_name,
        }
      );
      console.log(result);
      await onClose();
      toast({
        title: "result",
        status: "success",
      });
    } catch (err) {
      throw err;
    }
  };
  const deleteCategory = async (id: number) => {
    try {
      const result = await axios.delete(
        `${
          import.meta.env.VITE_APP_API_BASE_URL
        }/category/category/${props?.id}`
      );
      console.log(result);
      await onClose();
      toast({
        title: "Delete Category Success",
        status: "success",
      });
    } catch (err) {
      throw err;
    }
  };
  const formik = useFormik({
    initialValues: {
      product_category_name: props?.product_category_name,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values, actions) => {
      udpateCategory(values.product_category_name);
      actions.resetForm();
    },
  });
  return (
    <Box>
      <Button
        variant={"link"}
        fontSize={"1em"}
        onClick={onOpen}
      >
        <Text>Edit Category</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"50em"}>
          <ModalCloseButton />
          <ModalBody>
            <Box p={"2em 2em 2em 0"}>
              <form onSubmit={formik.handleSubmit}>
                <VStack align={"stretch"}>
                  <FormLabel htmlFor="product_category_name">
                    Product Category Name
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type="text"
                      id="product_category_name"
                      name="product_category_name"
                      size="lg"
                      value={
                        formik.values.product_category_name
                      }
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                  <Button
                    type="submit"
                    w={"50%"}
                    alignSelf={"flex-end"}
                  >
                    Submit
                  </Button>
                  <Button
                    w={"50%"}
                    alignSelf={"flex-end"}
                    onClick={() => {
                      deleteCategory(props?.id);
                    }}
                  >
                    Delete Category
                  </Button>
                </VStack>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
