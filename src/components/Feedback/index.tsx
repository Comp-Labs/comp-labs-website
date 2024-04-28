import React, { useState } from 'react';
import { Widget } from '@happyreact/react';
 
import '@happyreact/react/theme.css';
import styles from './styles.module.css'
 
const VotedYes = () => {
  return <span>Thanks for your feedback. We are glad you like it :)</span>;
};
 
const VotedNo = () => {
  return <span>Thanks for your feedback. We will try to improve :(</span>;
};
 
export default function Feedback({ resource }) {
  const [reaction, setReaction] = useState(null);
 
  const isReacted = reaction === 'Yes' || reaction === 'No';
  const _resource = String(resource).replace(/\//g, '-');
 
  const handleReaction = (params) => {
    setReaction(params.icon);
  };
 
  return (
    <div>
      <h3>Was this page helpful?</h3>
      {!isReacted ? (
        <div>
          <Widget
            token="dcaf1c0b-3824-4e02-a258-6294af5eea39"
            resource={_resource}
            classes={{
                root: styles.widget,
                container: styles.container,
                grid: styles.grid,
                cell: styles.cell,
                reaction: styles.reaction,
              }}
            onReaction={handleReaction}
          />
        </div>
      ) : reaction === 'No' ? (
        <VotedNo />
      ) : (
        <VotedYes />
      )}
    </div>
  );
}