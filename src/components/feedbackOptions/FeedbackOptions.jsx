import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1>Pleace leave feedback</h1>
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
