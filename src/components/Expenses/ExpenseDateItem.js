import "./ExpenseDateItem.css";

const ExpenseDateItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__date">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDateItem;
