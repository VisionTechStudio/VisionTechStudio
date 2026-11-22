import { Component } from "react";
import AnimatedButton from "../ui/AnimatedButton";

export default class PageErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error)
      return (
        <div role="alert" style={{ padding: 32, fontFamily: "sans-serif" }}>
          <h1>The page could not load.</h1>
          <p>Please refresh to try again.</p>
          <AnimatedButton onClick={() => window.location.reload()}>
            Reload page
          </AnimatedButton>
        </div>
      );
    return this.props.children;
  }
}
