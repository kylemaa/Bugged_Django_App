import React from "react";
import { List, Skeleton } from "antd";
import { connect } from "react-redux";
import Hoc from "../hoc/hoc";

class Profile extends React.PureComponent {
    render() {
        return (
            <div>Hi, {this.props.username}</div>
        )
    }

}
const mapStateToProps = state => {
    return {
        token: state.token,
        username: state.username,
    }
}

export default connect(mapStateToProps)(Profile);
