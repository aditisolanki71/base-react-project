import React from 'react';
//import nprogress from 'nprogress';
//import 'nprogress/nprogress.css';
import './loader.less';
//nprogress.configure({ showSpinner: false, trickleSpeed: 50, minimum: 0.2 });

class LoaderOverlay extends React.Component {
  // componentWillMount() {
  //   nprogress.start();
  // }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.error || newProps.timedOut) {
  //     nprogress.done();
  //   }
  // }

  // componentWillUnmount() {
  //   nprogress.done();
  // }

  render() {
    return <div>hello loader overlay</div>;
  }
}
// export default connect(state => ({
//   helpDeskBranding: getHelpDeskBranding(state)
// }))(LoaderOverlay);

export default LoaderOverlay;
