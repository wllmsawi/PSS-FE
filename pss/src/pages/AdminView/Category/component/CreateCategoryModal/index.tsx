import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  InputGroup,
  Input,
  VStack,
  Flex,
  Spacer,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { IoMdAdd } from "react-icons/io";
export const CreateCategoryModal = (props: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createCategory = async (
    product_category_name: string
  ) => {
    try {
      let formData = new FormData();
      formData.append(
        "product_category_name",
        product_category_name
      );
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/category`,
        formData
      );
      await onClose();
      toast({
        title: data?.message,
        status: "success",
      });
    } catch (err) {
      throw err;
    }
  };
  const formik = useFormik({
    initialValues: {
      product_category_name: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values, actions) => {
      console.log("VALUES", values.product_category_name);
      createCategory(values.product_category_name);
      actions.resetForm();
    },
  });
  return (
    <Box>
      <Button
        variant={"button"}
        color={"unpureWhite.50"}
        fontSize={"1em"}
        onClick={onOpen}
        fontWeight={"bold"}
        bgColor={"red.400"}
      >
        <IoMdAdd />
        <Text>Add Category</Text>
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
                </VStack>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
