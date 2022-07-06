import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Reebok Premier Road",
//     description: "Running shoes.",
//     price: "$120",
//     image:
//       "https://www.highsnobiety.com/static-assets/thumbor/RgR6kVrsRSVQsjJL71l02TN9mfY=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/02/24184610/reebok-premier-road-modern-metallic-silver-release-info-01.jpg",
//   },
//   {
//     id: 2,
//     name: "Macbook Pro 16",
//     description: "Apple macbook.",
//     price: "$2900",
//     image: "https://www.shopkees.com/cdn/images/1000/2845836271_1635680411.jpg",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
