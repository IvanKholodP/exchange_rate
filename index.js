async function updateRate() {
	const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
	const data = await response.json();
	const rate = data.map(item => item);

	rate.forEach((item) => {
		const table = document.querySelector('.table');
		table.insertAdjacentHTML('beforeend', `
				<tr>
					<td>${item.Cur_Name}</td>
					<td>${item.Cur_Scale} ${item.Cur_Abbreviation}</td >
					<td>${item.Cur_OfficialRate}</td>
				</tr>`)
	});
};

updateRate();

const time = document.getElementById('time');

function updateTime() {
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric"
	};
	return new Date().toLocaleDateString('ru-RU', options)
};
time.innerHTML = updateTime();

setInterval(
	() => time.innerHTML = updateTime(), 1000 * 60
);
