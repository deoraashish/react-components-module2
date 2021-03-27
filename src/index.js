import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <br />
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:00PM" 
                    image={faker.image.animals()} 
                    text="Nice Blog"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:20PM" 
                    image={faker.image.animals()} 
                    text="Very Nice Blog"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="John" 
                    timeAgo="Today at 1:10PM" 
                    image={faker.image.animals()} 
                    text="Super Blog"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));