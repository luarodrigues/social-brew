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
        brandColorDelete: {
          bg: "#EEEEEE",
          border: "1px solid #F47068",
          color: "#F47068",
          _hover: {
            bg: "#F47068",
            color: "#EEEEEE",
          },
        },
        brandColorSignOut: {
          bg: "none",
          border: "1px solid #F47068",
          color: "#F47068",
          _hover: {
            bg: "#F47068",
            color: "#EEEEEE",
          },
        },
      },
    },
  },
});

export default theme;
