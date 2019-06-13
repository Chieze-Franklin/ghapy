import React from 'react';
import { Link } from "react-router-dom";

import { connect } from '../../context-api-redux';

import SiteWrapper from '../layouts/SiteWrapper';

import {
  Page,
  Grid,
  Card,
} from "tabler-react";

function Config(props) {
  return (<SiteWrapper>
    <Page.Content>
      <Grid.Row>
        <Grid.Col md={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>The {props.appConfig} file</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                To start using {props.appName}, first install the
                {" "}<a href="https://github.com/marketplace/ghint-bot" target="_blank" rel="noopener noreferrer">
                  {props.appName} GitHub app
                </a>{" "}
                on your repository and
                add a {props.appConfig} file to the root directory of the repository.
              </p>
              <p>
                The {props.appConfig} file is a JSON file which specifies what checks are to be performed,
                and how they are to be performed.
              </p>
              <p>
                {props.appName} fetches metadata about pull requests, commits, branches, trees, and passes the
                metadata to user-defined scripts for evaluation. Such scripts are expected to return
                {" "}<code>true</code> or <code>false</code> to determine if a pull request is ready to be merged.
              </p>
              <p>
                To start using {props.appName}, first install the
                {" "}<a href="https://github.com/marketplace/ghint-bot" target="_blank" rel="noopener noreferrer">
                  {props.appName} GitHub app
                </a>{" "}
                on your repository and
                add a <Link to="/config">{props.appConfig} file</Link> to the root directory of the repository. That's it!
              </p>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>);
}

const mapStateToProps = state => ({
  appConfig: state.app.config,
  appName: state.app.name
});

export default connect(mapStateToProps, null)(Config);
