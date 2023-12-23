tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#F17800",
        dark: {
          active: "#090B0E",
          normal: {
            DEFAULT: "#546881",
            active: "#3D4C5E",
          },
          lighter: "#B2BBC6",
          light: {
            hover: "#A3ADBB",
          },
          dark: {
            active: "#090B0E",
          },
          border: "#2D3032",
        },
        orange: {
          light: {
            DEFAULT: "#FEF2E6",
            active: "#FBD5B0",
          },
          dark: {
            DEFAULT: "#542A00",
            hover: "#914800",
          },
          darker: {
            DEFAULT: "#542A00",
          },
          gradient: "#AC5601",
        },
        light: {
          light: {
            active: "#F0F3F6",
          },
        },
      },
      fontFamily: {
        satoshi: ["Satoshi"],
      },
    },
  },
  plugins: [],
};
