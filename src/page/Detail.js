import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from '../queries';
import Details_Page from '../component/Details_Page';

const Detail = ({
    match:{
        params: { movieId }
        }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId:parseInt(movieId) }}>
    {({ loading, error, data }) => {
      if (loading) return "loading";
      if (error) return "error";
      return (        
        <Details_Page 
          data={data}
        />
      );      
    }}
  </Query>
);

export default Detail;