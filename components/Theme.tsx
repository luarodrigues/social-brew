import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        brandColorGhost: {
          bg: "#A7D2DD",
          color: "white",
          _hover: {
            bg: "#A7D2DD",
            color: "#FD6853",
          },
        },
        brandColor: {
          bg: "#FD6853",
          color: "white",
          _hover: {
            bg: "white",
            color: "#FD6853",
            border: "2px solid #FD6853",
          },
        },
      },
    },
  },
});

export default theme;
