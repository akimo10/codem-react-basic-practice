import Profile from "./components/Profile";

const Example = () => {
  const listItem = [
    {
      name: 'Geo',
      age: 18,
      hobbies: ['sports', 'music']
    },
    {
      name: 'Tom',
      age: 25,
      hobbies: ['movie', 'music']
    },
    {
      name: 'Lisa',
      age: 21,
      hobbies: ['sports', 'travel', 'game']
    },
  ];
  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
      <ul>
        {/* ここに記述 */}
        {listItem.map((item) => (
          <li key={item.name}>
            <Profile {...item}  />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
