import PropTypes from "prop-types";

export default function EmptyCard({ compare }) {
  const emptyText = [
    "Select a phone to compare it",
    "Select a second phone to compare",
    "You can select a last phone to compare",
  ];
  return (
    <section className="empty-compare-card">
      <div className="empty-phone-card-text">
        <p className="phone-card-brand">{emptyText[compare.length]}</p>
      </div>
    </section>
  );
}

EmptyCard.propTypes = {
  compare: PropTypes.arrayOf(PropTypes.number).isRequired,
};
