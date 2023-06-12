import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        brandColorGhost: {
          bg: "#393E46",
          color: "white",
          _hover: {
            bg: "#393E46",
            color: "#00ADB5",
          },
        },
        brandColor: {
          bg: "#00ADB5",
          color: "white",
          _hover: {
            bg: "#EEEEEE",
            color: "#00ADB5",
          },
        },
      },
    },
  },
});

export default theme;
