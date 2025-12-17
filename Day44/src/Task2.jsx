import PremiumButton from "./PremiumButton";

function Task2() {
  return (
    <div>
      <PremiumButton isPremiumUser={true} /> {/* Button will show */}
      <PremiumButton isPremiumUser={false} /> {/* Button will hide */}
    </div>
  );
}

export default Task2;
