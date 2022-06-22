import styles from "./Card.module.css";

export const Card = ({
  iconName,
  title,
  subtitle,
  selectedId,
  setSelectedId,
  index,
}) => {
  return (
    <div
      onClick={() => setSelectedId(index)}
      className={`${styles.card} flex-col items-start justify-center ${
        selectedId === index ? `${styles.cardActive}` : ""
      }`}
    >
      <span
        className={`${
          selectedId === index ? `${styles.iconActive}` : ""
        } material-symbols-outlined`}
      >
        {iconName}
      </span>
      <p className={`${styles.cardTitle} pt-4`}>{title}</p>
      <p className={`${styles.cardSubTitle} pt-4`}>{subtitle}</p>
    </div>
  );
};
