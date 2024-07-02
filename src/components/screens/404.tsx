import { Head } from '~/components/shared/Head';

function Page404() {
  return (
    <>
      <Head title={'Страница не найдена'} />
      <div className="hero min-h-screen">
        <div className="text-center hero-content text-3xl font-bold">
          <div>
            <h1>Страница не найдена.</h1>
            <div className="mt-4">
              <a href="/" className="link-primary">
                На главную
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
