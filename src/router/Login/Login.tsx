import React from 'react';
import { connect } from 'react-redux';

interface State{
    count : number;
}
interface Dispatch{
    increment : () => void;
    decrement : () => void;
}

export class Login extends React.Component<State & Dispatch>{
    render(): React.ReactNode {
        return (
            <div>
                <p style={{color : 'black'}}>这是：{this.props.count}</p>
                <button onClick={this.props.increment}>点击+1</button>
                <button onClick={this.props.decrement}>点击-1</button>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => ({
    count: state.counter.count
})

const mapDispatchToProps = {
    increment : () => ({type : 'increment'}),
    decrement : () => ({type : 'decrement'})
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);