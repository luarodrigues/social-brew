import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function SubmitAlert() {
  const { isOpen: isVisible, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  const handleRefresh = () => {
    window.location.reload();
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
    <Button borderRadius="20" mb={4} color={"#FD6853"} onClick={handleRefresh}>
      add new recipe
    </Button>
  );
}

export { SubmitAlert };
