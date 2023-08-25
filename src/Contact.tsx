// functional Component
const Contact = () => {
  const a = 20;
  return (
    <div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>{a++}</div>
    </div>
  );
};
export default Contact;

// import { Component } from "react";
// class Contact extends Component {
//   render() {
//     return (
//       <>
//         <ErrorBoundary>{conceet}</ErrorBoundary>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//       </>
//     );
//   }
// }
// export default Contact;
