import { Topic } from '../src/interface/index';
import { useRef, useState } from 'react';
import './topic.css';
function TopicDiv({ props }: { props: Topic[] }) {
    const titleref = useRef<HTMLHeadingElement>(null);
    const [showTip, setshowTip] = useState(false);
    const deletet = (id: string) => {
        console.log(id);
        setshowTip(true);
    };
    return (
        <div className="Topic">
            {props.map((topic, index) => {
                return (
                    <div key={topic.id} className="topic_list">
                        <h4 className="title" ref={titleref}>
                            {topic.title}
                        </h4>
                        <p className="answer">{topic.answer}</p>
                        <h6 className="result">{topic.result}</h6>
                        <a onClick={() => deletet(topic.id)}>删除</a>
                    </div>
                );
            })}
            {showTip ? 
                <div className="tip">
                    <h1>你要删除吗</h1>
                    <button onClick={() => setshowTip(false)}>确认删除</button>
                </div>
             : ''}
        </div>
    );
}
export default TopicDiv;
