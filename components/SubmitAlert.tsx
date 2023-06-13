import React from "react";
import { useRouter } from "next/router";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function SubmitAlert() {
  const { isOpen: isVisible, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  const router = useRouter();

  const handleGoToHomePage = () => {
    router.push("/home-page");
  };

  return isVisible ? (
    <Alert status="success">
      <AlertIcon />
      <Box>
        <AlertDescription>
          Your recipe was successfully submitted ✨
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button variant={"brandColor"} onClick={handleGoToHomePage}>
      go to feed
    </Button>
  );
}

export { SubmitAlert };
