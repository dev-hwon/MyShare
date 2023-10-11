// const DOMAIN = "https://jsonplaceholder.typicode.com/users/"

export default function getApi(url) {
	this.$axios.post(url, {
			// headers: { "X-AUTH-TOKEN": "인증 받음을 증명하는 토큰" }
		},
	)
	.then((res) => {
		console.log(res);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("항상 마지막에 실행");
	});
}
