import { Head } from '~/components/shared/Head';
import { Header } from '../shared/Header';

const addPlayerButton = () => {
  return <a>Добавить игрока</a>;
};

const addSelectedToTournamentButton = () => {
  return <a>Добавить игроков в турнир</a>;
};

const deleteSelectedPlayersButton = () => {
  return <a>Удалить игроков</a>;
};

const arr: number[] = [];

const multipleRows = (rows: number): void => {
  for (let i = 0; i < rows; i++) {
    arr.push(1);
  }
};

multipleRows(40);

function Players() {
  return (
    <>
      <Head title="Авторизация" />
      <Header />
      <div className="overflow-x-auto">
        <table className="table mb-5 mt-20">
          <thead>
            <tr>
              <th></th>
              <th>Ник</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-outline">Добавить в турнир</button>
              </th>
              <th>
                <button className="btn btn-outline btn-error">Удалить</button>
              </th>
            </tr>
            {arr.map((val, index) => {
              return (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                      </div>
                    </div>
                  </td>
                  <th>
                    <button className="btn btn-outline">Добавить в турнир</button>
                  </th>
                  <th>
                    <button className="btn btn-outline btn-error">Удалить</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer className="footer footer-center fixed bottom-0 inset-x-0 bg-base-100">
          <ul className="menu menu-horizontal rounded-box">
            <li>
              <a className="tooltip" data-tip="Добавить игрока">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 18L17 18M17 18L14 18M17 18V15M17 18V21M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Удалить выбранных игроков">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 18L14 18M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Добавить выбранных игроков в турнир">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 21C4 17.134 7.13401 14 11 14C11.3395 14 11.6734 14.0242 12 14.0709M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
      ;
    </>
  );
}

export default Players;
