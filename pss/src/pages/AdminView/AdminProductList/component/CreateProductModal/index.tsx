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
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export const CreateProductModal = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fieldImage, setFieldImage] = useState<
    any | string | null
  >(null);
  const createProduct = async (
    product_name: string,
    product_group_id: string,
    product_category_id: string,
    product_price: string,
    product_description: string
  ) => {
    try {
      let formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_group_id", product_group_id);
      formData.append(
        "product_category_id",
        product_category_id
      );
      formData.append("product_price", product_price);
      formData.append("product_image", fieldImage);
      formData.append(
        "product_description",
        product_description
      );
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/product`,
        formData
      );
      console.log(data);
    } catch (err) {
      throw err;
    }
  };

  const formik = useFormik({
    initialValues: {
      product_name: "",
      product_group_id: "",
      product_category_id: "",
      product_price: "",
      product_image: "",
      product_description: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      createProduct(
        values.product_name,
        values.product_group_id,
        values.product_category_id,
        values.product_price,
        values.product_description
      );
      console.log("values", formik.values);
      console.log("TEST");
    },
  });
  return (
    <Box>
      <Button
        variant={"link"}
        color={"#FEFEFE"}
        fontSize={"1em"}
        onClick={onOpen}
        fontWeight={"bold"}
      >
        <Text>CREATE PRODUCT</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <VStack align={"stretch"}>
                <FormLabel htmlFor="product_name">
                  Product Name
                </FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    id="product_name"
                    name="product_name"
                    size="lg"
                    value={formik.values.product_name}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                <FormLabel htmlFor="product_group_id">
                  Product Group
                </FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    id="product_group_id"
                    name="product_group_id"
                    size="lg"
                    value={formik.values.product_group_id}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                <FormLabel htmlFor="product_category_id">
                  Product Category
                </FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    id="product_category_id"
                    name="product_category_id"
                    size="lg"
                    value={
                      formik.values.product_category_id
                    }
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                <FormLabel htmlFor="product_price">
                  Product Price
                </FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    id="product_price"
                    name="product_price"
                    size="lg"
                    value={formik.values.product_price}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                <FormLabel htmlFor="product_image">
                  Product Image
                </FormLabel>
                <InputGroup>
                  <Input
                    type="file"
                    id="product_image"
                    name="product_image"
                    size="lg"
                    onChange={(event) =>
                      setFieldImage(event?.target?.files[0])
                    }
                  />
                </InputGroup>
                <FormLabel htmlFor="product_description">
                  Product Description
                </FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    id="product_description"
                    name="product_description"
                    size="lg"
                    value={
                      formik.values.product_description
                    }
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                <Button type="submit">Submit</Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
