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
import { UploadImage } from "./component/UploadImage";
export const CreateProductModal = (props: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fieldImage, setFieldImage] = useState<
    any | string | null
  >(null);
  const [category, setCategory] = useState(0);
  const [group, setGroup] = useState(0);
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
      product_name: "",
      product_group_id: "",
      product_category_id: "",
      product_price: "",
      product_image: "",
      product_description: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values, actions) => {
      createProduct(
        values.product_name,
        String(group),
        String(category),
        values.product_price,
        values.product_description
      );
      actions.resetForm();
      setFieldImage("");
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"custom"}
      >
        <ModalOverlay />
        <ModalContent w={"50em"}>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box w={"50%"} p={"2em"}>
                <UploadImage
                  fieldImage={fieldImage}
                  setFieldImage={setFieldImage}
                />
              </Box>
              <Spacer />
              <Box p={"2em 2em 2em 0"} w={"50%"}>
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
                    <Select
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setGroup(Number(e.target.value));
                      }}
                    >
                      <option>Select Category</option>
                      {props?.group?.map((el: any) => {
                        return (
                          <option value={el?.id}>
                            {el?.product_group_name}
                          </option>
                        );
                      })}
                    </Select>
                    <FormLabel htmlFor="product_category_id">
                      Product Category
                    </FormLabel>
                    <Select
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setCategory(Number(e.target.value));
                      }}
                    >
                      <option>Select Group</option>
                      {props?.category?.map((el: any) => {
                        return (
                          <option value={el?.id}>
                            {el.product_category_name}
                          </option>
                        );
                      })}
                    </Select>
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
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
