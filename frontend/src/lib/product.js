import { S3 } from "@aws-sdk/client-s3";

import slugify from "slugify";

const s3 = new S3({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // IMPT: create an env file to access credentials
  },
});

export async function saveProduct(product) {
  try {
    product.slug = slugify(product.name, { lower: true });
    const extension = product.image.name.split(".").pop();
    const fileName = `${product.slug}.${extension}`;

    const bufferedImage = await product.image.arrayBuffer();

    await s3.putObject({
      Bucket: "hack-4-good-temp",
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: product.image.type,
    });

    console.log(`Image uploaded successfully: ${fileName}`);
    return { message: "Product saved successfully.", fileName };
  } catch (error) {
    console.error("Error saving product:",);
    throw new Error("Failed to save product.");
  }
}

export function productItemImage({ product_name }) {
  return (
    <img
      src={`https://hack-4-good-temp.s3.ap-southeast-1.amazonaws.com/${product_name}`}
      alt="product_image"
    ></img>
  );
}

/**
 * product argument should be expecting a formData <input type="file" id="image" name="image"> content
 * 
 * eg:
 * const product = {
    name: formData.get('name'),
    image: formData.get('image'),
  };

  if (
    isInvalidText(product.name) ||
    !product.image ||
    product.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveProduct(product);
 */
