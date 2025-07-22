function Output({ output }) {
  return (
    <iframe
      title="output"
      srcDoc={output}
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  );
}

export default Output;