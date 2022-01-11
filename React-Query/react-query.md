# React Query

날짜: 2022년 1월 11일

<aside>
📌  React 애플리케이션에서 서버상태를 가져오고, 캐싱하고, 동기화 하는 작업을 간단하게 하는 기술

</aside>

- React Query 란, React 또는 React Native 에서 데이터를 요청과 캐싱 그리고 업데이트를 전역상태를 사용하지 않고도, 할 수 있도록 한다.
- 기존에 데이터를 Fetching 하는 과정에는 상태에 대한 로딩처리와, 가져온 데이터에 대한 관리로 여러 훅을 사용했지만, 이를 훨씬 간결하게 작성 할 수 있도록 한다.

`기존의 사용예시`

```jsx
const [isLoading, setLoading] = useState(false);
const [isError, setError] = useState(false);
const [data, setData] = useState([]);
```

기존의 방식에서는 불러온 데이터, 데이터의 로딩 그리고 에러처리에 대한 3가지 상태를 관리하는 방식으로
`useState`, `useEffect` 훅을 사용 한다.

뿐만아니라, 데이터 불러오는 과정에서의 문제를 겪기도 한다.

- 데이터가 모든 애플리케이션 인스턴스에서 공유되고, 다른 사용자에 의해 변경 될 수 있다.
- 데이터의 최신여부를 보장 할 수 없으며, 항상 갱신이 필요하다.
- 최적화 된 작업을 위해 기존의 캐시를 무효화 하는 등 캐시를 조작할 수 있어야 한다.

```jsx
function App() {
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios(url);

        setData(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData()
  }, []);

	return (
		... some code
	);
}
```

---

`React Query 예시`

```jsx
const { status, data, error, isFetching } = useQuery(() => fetch(URL));
```

```jsx
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Example />
		</QueryClientProvider>
	)
}

function Example() {
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch(URL)
		.then(res => res.json())
	)

	if (isLoading) return 'wait loading..'
	if (error) return 'An Error has occrred' + error.message;

	return (
		...somecode
	)
}
```
