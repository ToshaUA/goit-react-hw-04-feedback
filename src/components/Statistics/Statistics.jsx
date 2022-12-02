export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentag,
}) => (
  <>
    <p>Good: {good} </p>
    <p>Neutral: {neutral} </p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positiveFeedbackPercentag}%</p>
  </>
);
