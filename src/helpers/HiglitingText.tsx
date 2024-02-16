import styles from "./styles.module.scss";

export const HiglitingText = ({
  text,
  search,
}: {
  text: string;
  search?: string;
}) => {
  const parts = text.split(new RegExp(`(${search})`, "gi"));
  if (search) {
    return (
      <>
        {parts?.map((part, i) => (
          <p key={i} className={styles.brakeWord}>
            {part.toLowerCase() === search.toLowerCase() ? (
              <mark style={{ background: "rgba(255, 245, 178, 0.8)" }}>
                {part}
              </mark>
            ) : (
              part
            )}
          </p>
        ))}
      </>
    );
  }
  return <p className={styles.brakeWord}>{text}</p>;
};
