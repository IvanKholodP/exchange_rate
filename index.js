async function getRete() {
	const updateRete = async()=> {
		const url = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';
		const response = await fetch(url);
		const data = await response.json();
		return data.map(item => item);
	}
	const rate = await updateRete();
	const rateTable = rate.forEach((item) => {
		const table = document.querySelector('.table');
		table.insertAdjacentHTML('beforeend', `
				<tr>
					<td>${item.Cur_Name}</td>
					<td>${item.Cur_Scale} ${item.Cur_Abbreviation}</td >
					<td>${item.Cur_OfficialRate}</td>
				</tr>`)
	});
	setInterval(()=> updateRete(), 1000 * 10);
};

getRete();

const time = document.getElementById('time');

function updateTime() {
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	};
	return new Date().toLocaleDateString('ru-RU', options);
};
time.innerHTML = updateTime();

setInterval(() => time.innerHTML = updateTime(), 1000);
