// @flow
import React from 'react';
import classNames from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import type { Node } from 'react';

type Props = {
  back: Node,
  cardClass: string,
  isFlipped: boolean,
  front: Node,
};

function Card({ back, cardClass, isFlipped, front }: Props) {
  const cardClasses = classNames({
    card: true,
    [cardClass]: !!cardClass,
    isFlipped,
  });

  return (
    <div className={cardClasses}>
      <>{front}</>
      <>{back}</>
    </div>
  );
}

export default withStyles()(Card);
