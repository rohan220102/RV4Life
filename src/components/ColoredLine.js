export default function ColoredLine({color}) {
  return (
  <hr tabIndex={-1}
      style={{
          color: color,
          backgroundColor: color,
          height: 2,
          borderStyle: "none",
          margin: 0
      }}
  />);
};