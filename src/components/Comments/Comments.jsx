import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
// import { comments } from '../../helpers/comments';
import { useGetCommentsQuery } from '../../redux/commentApi';
import { Loader } from '../Loader/Loader';
import { selectFilter } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';

export const Comments = () => {

  const { data: comments, isFetching, isError } = useGetCommentsQuery();
  const filter = useSelector(selectFilter);

  const filteredComments = () => { 
    return comments.filter(comment => comment.content.toLowerCase().includes(filter.toLowerCase()))
  }

  if (isFetching) return <Loader />

  return (
    <Grid>
      {comments &&
        filteredComments().map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
