let yesterday = new Date();
yesterday = yesterday.setDate(yesterday.getDate() - 1);
yesterday = new Date(yesterday);

const postsDatabase = [
  {
    id: 1,
    headline: "Yesterday was a fine day",
    author: "John",
    publishedDate: yesterday,
    featuredImage: "images/image1.jpg",
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    `,
  },
  {
    id: 2,
    headline: "Today is a great day",
    author: "Messi",
    publishedDate: new Date(),
    featuredImage: "images/image2.jpg",
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    `,
  },
  {
    id: 3,
    headline: "Work from home a norm",
    author: "Cristiano",
    publishedDate: new Date(),
    featuredImage: "images/image1.jpg",
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    `,
  },
];

// get the current post id so we can start incrementing from there
// each post should have a different id
let currentPostId = postsDatabase.length;

// an easier way to declare the list of properties that are required
// this way, if we need to validate any other new properties, we just need to append to this list
const REQUIRED_PROPERTIES = ["headline", "author", "publishedDate", "content"];

function create(inputs) {
  // Data validation, check inputs have all the required properties
  REQUIRED_PROPERTIES.forEach((requiredProperty) => {
    if (!requiredProperty in inputs) {
      throw new Error(`You need to put in value for ${requiredProperty}`);
    }
  });
  currentPostId += 1;

  const newPost = {
    id: currentPostId,
    headline: inputs.headline,
    featuredImage: inputs.featuredImage,
    author: inputs.author,
    publishedDate: new Date(inputs.publishedDate),
    content: inputs.content,
  };

  postsDatabase.push(newPost);
  return newPost;
}

function findById(id) {
  return postsDatabase.find((post) => post.id === id);
}

function list() {
  return postsDatabase;
}

function update(id, inputs) {
  // Data validation, check inputs have all the required properties
  REQUIRED_PROPERTIES.forEach((requiredProperty) => {
    if (!requiredProperty in inputs) {
      throw new Error(`You need to put in value for ${requiredProperty}`);
    }
  });

  const updatedPost = {
    id,
    headline: inputs.headline,
    featuredImage: inputs.featuredImage,
    author: inputs.author,
    publishedDate: new Date(inputs.publishedDate),
    content: inputs.content,
  };

  // Instead of pushing a new post into the database, we pick the selected post and update it
  const selectedPostIndex = postsDatabase.findIndex((post) => post.id === id);
  postsDatabase[selectedPostIndex] = updatedPost;
  return updatedPost;
}

function destroy(id) {
  // Go to the selected index in the array, remove 1 item
  const selectedPostIndex = postsDatabase.findIndex((post) => post.id === id);
  postsDatabase.splice(selectedPostIndex, 1);
}

module.exports = {
  create,
  findById,
  list,
  update,
  destroy,
};
