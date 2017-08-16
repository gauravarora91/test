import Layout from '../components/layout';
import pageWithIntl from '../components/PageWithIntl';

export default pageWithIntl(({ intl }) =>
  <Layout>
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
          or information.
        </p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  </Layout>
);
