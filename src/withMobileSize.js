import React from 'react'

function withMobileSize(Component) {
    return class extends React.Component {
        state = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        constructor(props) {
            super(props);
            this.handleResize = this.handleResize.bind(this);
        }

        handleResize() {
            this.setState(prevState => ({
                ...prevState,
                width: window.innerWidth,
                height: window.innerHeight,
            }))
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleResize)
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize)
        }

        render() {
            return <Component {...this.state} {...this.props} />
        }
    }
}

export default withMobileSize