import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <>
      {options.map(option => {
        return (
          <Button onClick={() => onLeaveFeedback(option)} key={option}>
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
