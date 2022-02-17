import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, delivered To You</h2>
      <p>
        Choose your favorite meal from our board selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>

      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course be experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
