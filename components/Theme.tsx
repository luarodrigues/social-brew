import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
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
