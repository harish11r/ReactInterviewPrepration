class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.onVisibilityToggle = this.onVisibilityToggle.bind(this);
        this.state = {
            visibility: false,
            content: 'Subtitle goes here'
        };
    }

    onVisibilityToggle() {
        this.setState((preState) => {
            return {
                visibility: !preState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onVisibilityToggle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>{this.state.content}</p>}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// const appstate = {
//     visibilityToggle: false,
//     content: "Subtitle goes here"
// };

// const onVisibilityToggle = () => {
//     appstate.visibilityToggle=!appstate.visibilityToggle;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <button onClick={onVisibilityToggle}>
//                 {appstate.visibilityToggle ?  'Hide Details' : 'Show Details'}
//             </button>
//             {appstate.visibilityToggle && <p>{appstate.content}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();