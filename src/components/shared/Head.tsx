// type Props = {
//   title: string;
//   description?: string;
// };

export const Head = ({ title }: { title: string }) => (
  <>
    <title>{title}</title>
    {/* <meta name="description" content={description} /> */}
    <meta property="og:title" content={title} />
    {/* <meta property="og:description" content={description} /> */}
    <meta name="robots" content="noindex" />
  </>
);
