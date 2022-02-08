import React from 'react';
import './home.css'


import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SpeedIcon from '@mui/icons-material/Speed';
import GraficoBarra from '../../graficos/GraficoBarra';
import GraficoArea from '../../graficos/GraficoArea';
import GraficoCirculo from '../../graficos/GraficoCirculo';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DataTable from '../../materialUI/DataTable/DataTable';
import GraficoRadar from '../../graficos/GraficoRadar';
import GraficoCirculoPadrao from '../../graficos/GraficoCirculoPadrao';
export default function Home() {
  return <div className='home'>
      <h3 className='tituloHome'>Dashboard</h3>
      <div className='HomeContainer'>
        <div className='g1'>
            <div className='HomeContainerBoxG1'>
              <MonetizationOnIcon sx={{width:'80px' ,height:"70px",color:"rgb(170, 214, 170)",margin:"0px 2px 0px 0px"}}/>
              <div className='HomeContainerG1Left'>
                <h4>Rendimento Total</h4>
                <h1>$ 65,80</h1>
                <div>janeiro - abril 2019</div>
              </div>
            </div>
            <div className='HomeContainerBoxG1'>
                <GroupIcon sx={{width:'80px' ,height:"70px",color:"rgb(156, 204, 156)",margin:"0px 2px 0px 0px"}}/>
                <div className='HomeContainerG1Left'>
                  <h4>Total de visitantes</h4>
                  <h1>25.578</h1>
                  <div>janeiro - abril 2019</div>
                </div>
            </div>
            <div className='HomeContainerBoxG1'>
                  <RecordVoiceOverIcon sx={{width:'80px' ,height:"70px",color:"rgb(156, 204, 156)",margin:"0px 2px 0px 0px"}}/>
                  <div className='HomeContainerG1Left'>
                    <h4>Taxa de conversa</h4>
                    <h1>2,5 %</h1>
                    <div>janeiro - abril 2019</div>
                  </div>
            </div>
            <div className='HomeContainerBoxG1'>
              
                <SpeedIcon sx={{width:'80px' ,height:"70px",color:"rgb(156, 204, 156)",margin:"0px 2px 0px 0px"}}/>
                <div className='HomeContainerG1Left'>
                  <h4>Numero de transação</h4>
                  <h1>7.564</h1>
                  <div>janeiro - abril 2019</div>
                </div>
            </div>
        </div>
        <div className='g2'>
            <div className='graficos'>
              <h1>Comparação de receita</h1>
              <div className='grafico'>
                <h3 className='textoGrafico'>voce tem que pagar  </h3>
                <div className='precoGrafico'>
                   <ArrowDownwardIcon sx={{color:"red"}}/>
                   <span>-542,00</span>
                </div>
                <GraficoBarra/>
              </div>
            </div>
            <div className='graficos'>
              <h1>Visão geral dos visitantes</h1>
              <div className='grafico'>
                <h3 className='textoGrafico'>voce tem que pagar  </h3>
                <div className='precoGrafico'>
                  <ArrowUpwardIcon sx={{color:"blue"}}/>
                  <span>587,00</span>
                </div>
                <GraficoArea/>
              </div>
            </div>
            <div className='graficos'>
              <h1>Conclusão da meta</h1>
              <div className='grafico'>
                <h3 className='textoGrafico'>voce tem que pagar  </h3>
                <div className='precoGrafico'>
                  <ArrowDownwardIcon sx={{color:"red"}}/>
                  <span>-898,70</span>
                </div>
                <GraficoCirculo/>
              </div>
            </div>
           
        </div>
        <div className='g3'>
            <div className='graficos'>
               <DataTable/>

            </div>
            <div className='graficos'>
              <GraficoRadar/>
            </div>
            <div className='graficos'>
              <GraficoCirculoPadrao/>
            </div>
        </div>
      </div>
  </div>;
}
