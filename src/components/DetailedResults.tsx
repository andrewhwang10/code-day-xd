import * as React from 'react';

export interface Props {
    name: string;
    location: string;
}

export interface State {
    name: string;
    location: string;
}

class DetailedResults extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {name: props.name, location: props.location};
    }
    render() {
        return (
            <div className="Pictures">
                Searching for {this.state.name} in {this.state.location}: <br/>
                {getPictures(this.state)}
            </div>
        );
    }
}

export default DetailedResults;

function getPictures(state: State) {
    return 'this is a picture';
}