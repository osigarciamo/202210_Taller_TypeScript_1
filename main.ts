import { Serie } from "./Serie";
import { dataSeries } from "./Data";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonNumber: HTMLElement= document.getElementById('avg-seasons')!;

renderSeriesInTable(dataSeries);
avgSeasonNumber.innerHTML = `${seasonsAverage(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando programas de televisión y series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function seasonsAverage (series : Serie[]): number {
    console.log('Determinando el promedio de las series');
    let totalSeasons: number=0;
    series.forEach((Serie) => totalSeasons = totalSeasons + Serie.seasons);
    return (totalSeasons/ series.length);
}