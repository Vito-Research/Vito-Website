import Footer from "../../Footer";

export default function HomeFooter() {
  return (
    <Footer>
      <p>
        <a
          className="footer-text footer-text-space"
          href="https://www.nature.com/articles/s41746-021-00422-7"
        >
          [1] Modeling the effect of exposure notification and
          non-pharmaceutical interventions on COVID-19 transmission in
          Washington state{" "}
        </a>
      </p>
      <p>
        <a
          className="footer-text"
          href="https://share.streamlit.io/andreasink/vito-visualization/main/vito_visualization_tools/main.py"
        >
          [2] Vito Visualization Web App{" "}
        </a>
      </p>

      <p>
        <a
          className="footer-text"
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8240687/"
        >
          [3] Smartwatch can detect early signs of illness{" "}
        </a>
      </p>
    </Footer>
  );
}
