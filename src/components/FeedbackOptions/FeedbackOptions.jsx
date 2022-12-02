export const FeedbackOptions = ({
  counterGood,
  counterNeutral,
  counterBad,
}) => (
  <>
    <button type="button" onClick={counterGood}>
      Good
    </button>
    <button type="button" onClick={counterNeutral}>
      Neutral
    </button>
    <button type="button" onClick={counterBad}>
      Bad
    </button>
  </>
);
