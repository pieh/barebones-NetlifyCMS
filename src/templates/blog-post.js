import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <a href="/">Go Home</a>
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
