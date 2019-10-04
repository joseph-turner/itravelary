/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';
import Feedback from '../Feedback';

import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.root}>
        <Feedback />
        <div className={s.container}>
          <span className={s.text}>© Trip Kit</span>
          <> • </>
          <Link className={s.link} to="/">
            Home
          </Link>
          <> • </>
          <Link className={s.link} to="/admin">
            Admin
          </Link>
          <> • </>
          <Link className={s.link} to="/privacy">
            Privacy
          </Link>
          <> • </>
          <Link className={s.link} to="/not-found">
            Not Found
          </Link>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
