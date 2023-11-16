import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
export const EditProductModal = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      product_name: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      alert("hi");
    },
  });
  return (
    <Box>
      <Button variant={"link"} onClick={onOpen}>
        <Text fontSize={".75em"}>Edit Product</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>{props?.product_name}</Text>
              <Text>
                {
                  props?.product_category
                    ?.product_category_name
                }
              </Text>
              <Text>
                {props?.product_group?.product_group_name}
              </Text>
              <Text>{props?.product_price}</Text>
              <Text>
                {props?.product_status
                  ? "Active"
                  : "Inactive"}
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
