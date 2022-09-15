import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Spinner,
  Checkbox,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { isSpacesOnly } from "utils/isSpacesOnly";
import axios from 'axios';

// @ts-ignore
export const ConfessionModal: React.FC<any> = ({ isOpen, onClose }) => {
  const [withWebsite, toggleWithWebsite] = useState<boolean>(false);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Formik
          initialValues={{
            title: "",
            content: "",
            withWebsite: false,
            websiteName: "",
            websiteLink: ""
          }}
          onSubmit={async values => {
            setSubmitting(x => x = true);
            const res = await axios({
              url: "http://localhost:3000/api/create",
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              data: JSON.stringify(values)
            });
            setSubmitting(x => x = false);
            onClose();
            document.location.reload();
          }
        }>
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader fontSize={24} fontWeight="bolder">
                Create Confession
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex flexDirection="column" gap={6}>
                  <Stack spacing={4}>
                    <FormControl isInvalid={!!errors.title && touched.title}> 
                      <FormLabel fontWeight="bold" fontSize={20} htmlFor="title">
                        Title
                      </FormLabel>
                      <Field 
                        as={Input} 
                        name="title" 
                        placeholder="Title" 
                        type="text"
                        validate={(value: string) => {
                          let error;
                          if (value === "") {
                            error = "Title is required";
                          } else if (isSpacesOnly(value)) {
                            error = "Cannot contain only spaces";
                          }
                          return error;
                        }} 
                      /> 
                      <FormErrorMessage>{errors.title}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.content && touched.content}>
                      <FormLabel fontWeight="bold" fontSize={20} htmlFor="content">
                        Content
                      </FormLabel>
                      <Field
                        as={Textarea}
                        type="text"
                        placeholder="Content"
                        name="content"
                        validate={(value: string) => {
                          let error;
                          if (value === "") {
                            error = "Content is required";
                          } else if (isSpacesOnly(value)) {
                            error = "Cannot contain only spaces";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.content}</FormErrorMessage>
                    </FormControl>
                  </Stack>
                  <Field
                    as={Checkbox}
                    isChecked={withWebsite}
                    onChange={() =>
                      // @ts-ignore
                      toggleWithWebsite(() => (withWebsite = !withWebsite))
                    }
                    name="withWebsite"
                  >
                    With website?
                  </Field>
                  <Stack spacing={4}>
                    <FormControl isInvalid={!!errors.websiteName}>
                      <FormLabel fontWeight="bold" fontSize={20} htmlFor="websiteName">
                        Website Name
                      </FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        placeholder="Put your website name"
                        isDisabled={!withWebsite}
                        name="websiteName"
                        validate={(value: string) => {
                          let error;
                          if (withWebsite) {
                            if (value === "") {
                              error = "Website name is required";
                            } else if (isSpacesOnly(value)) {
                              error = "Cannot contain only spaces";
                            }                            
                          }
                          return error;
                        }} 
                      />
                      <FormErrorMessage>{errors.websiteName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.websiteLink && touched.websiteLink && withWebsite}>
                      <FormLabel fontWeight="bold" fontSize={20} htmlFor="websiteLink">
                        Website Link
                      </FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        placeholder="Put your website link"
                        isDisabled={!withWebsite}
                        name='websiteLink'
                        validate={(value: string) => {
                          let error;
                          if (withWebsite) {
                            if (value === "") {
                              error = "Website link is required";
                            } else if (isSpacesOnly(value)) {
                              error = "Cannot contain only spaces";
                            }                            
                          }
                          return error;
                        }} 
                      />
                      <FormErrorMessage>{errors.websiteLink}</FormErrorMessage>
                    </FormControl>
                  </Stack>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button type="submit">
                  <Flex gap={2} alignItems='center'>
                    {isSubmitting ? <Spinner size='sm' /> : null}
                    {isSubmitting ? "Submitting" : "Submit"}
                  </Flex>
                </Button>
              </ModalFooter>
            </form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};
