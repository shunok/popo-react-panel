import React from 'react';

export default class Panel extends React.Component {
    render() {
        return (
            <div data-popo={this.props.target} title={this.props.title}>
                {
                    React.Children.map(this.props.children, function (child) {
                        const {target, slotclass, slotid} = child.props;
                        return <div data-popo-target={target||'center'} className={slotclass} id={slotid}>{child}</div>;
                    })
                }
            </div>
        );
    }
}