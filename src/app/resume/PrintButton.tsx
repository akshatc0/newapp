"use client";

const PrintButton = () => (
  <button
    type="button"
    onClick={() => window.print()}
    className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
  >
    Save as PDF
  </button>
);

export default PrintButton;
