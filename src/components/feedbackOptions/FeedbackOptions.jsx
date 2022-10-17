import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          onClick={() => onLeaveFeedback(option)}
          key={option}
          type="button"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
