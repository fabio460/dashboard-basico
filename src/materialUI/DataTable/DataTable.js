import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTable.css'
const columns = [
  { field: 'id', headerName: 'Foto', width: 70,renderCell:(params)=>{
    return <>
      <img className='avatar' src={params.row.id} alt=''/>
    </>
  } },
  { field: 'firstName', headerName: 'Nome', width: 100 },
  { field: 'lastName', headerName: 'Localização', width: 100 },
  {
    field: 'tempo',
    headerName: 'Tempo de trabalho',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Salário',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 'https://geeksaw.com.br/wp-content/uploads/2015/07/marisa-tomei.jpg', lastName: 'Snow', firstName: 'Jon', tempo: '3 anos' },
  { id: 'https://aaronturatv.ig.com.br/wp-content/uploads/2022/02/Padre-Fabio-de-Melo-em-participacao-em-quadro-do-Domingao-com-Huck-300x225.jpg', lastName: 'Lannister', firstName: 'Cersei', tempo: '5 anos' },
  { id: 'https://www.dmtpalestras.com.br/wp-content/uploads/2020/07/ana-laura-magalhaes-palestrante-dmtpalestras.jpg', lastName: 'Lannister', firstName: 'Jaime', tempo: '4 anos' },
  { id: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSEhIYGRgYGhocHBocGRgYGBkZHBoaGhwaGBgcIS4lIR4rIRgaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISGjQrJCs2NDQ0NDQ0NDQ0NDE2NjQxNDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDE0MTQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABHEAACAQIDAwkEBgcHAwUAAAABAgADEQQSIQUxQQYiUWFxgZGhsRMywdFCUmJywvAHIzOCkrLhFDRzdKKz8SRj4hUlNVPS/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAAIDAQADAQEBAQAAAAAAAQIRAyExQRIyUSJhcUL/2gAMAwEAAhEDEQA/APXoQiyyBCEIBCEIBCEIBCLCAQjoQGwJnDHYxKKGo5so7yTwCjiTMRj9s1K2ZqhyJqFpqbXtxduPXwG7frKZZTFbHG1scVtahSBz1UXKCSCwBsNTpMBi/wBKYZyuFoB1BtmckX6xbcO0zO4vk+9V/aFimY6IALsOsWso6jeX+F5HlAHpPkYgEgKpUniLkXA4zPLk6aY8a12d+kRGsMRQKfaRs6944DvM2WBxtOumek4Zerh1Ebwe2ef/APphBy4hVv8ARqAW7A3Dfx3dQnL+y1sE+eiSovqLXW3Z8JGPLfplx6emwlTsHbK4pPquo5y/iXpEtpvLLNxjZrqkiR0SSEhCEAhCEAhCEAhCEAiwhAIQhAIsIQCEIQCEI6AgiwlNyoxBWiUQ86qQg7GBLf6QfGVt1Nkm6ye3drnEVAVNkUnJ2fXt0mxt1WhgsLmOZxoovb0XzA7j0yMyqzKqjm/gHH/Tf96aLAUrJfi1r9p5x9Zy277rok+HYHB357bzr8gOqW9OnOVAaWElokrGl6cquHVwVYAg8JX1sOBai+qnRGPSPoMfTslriai01zO1h5nqEzOJ2s9e6UsKWX6zMUsQdCCFNiN97ybNKz/SurUHwtUVEuCDcdBHFT3fKbrA4paqLUXcR4HiJm1D4ijeqmSrTNnAIIuBcMCNLMpB7yOEdyaxHs3NInmtqvbvt6+E048tXX9Uzx3P+xqoR0bOlgSJFiQCEIQCEIQCEIQFhCEAiwhAIQhAIQhAIoixBAWZHlXiP1oAP7OmzW+02l+0BfC81xnnXK3Ec6q1r79L/RRQL+LHxmXLdYr4TtwwdG+XqQdxf4WsJZ47GujJRoKC7Bnu2iIpYgM9t+gFgN84bKp306Mij9xQB6yPyketTqO9CmXYKqqo36D0vec18b4d5Jy7Dq1Oc+MqM3QDlTuRbA94lhg82FsHZmBNrmY/Yez8dVZGrV6itfnIBlRVPBWBuW43PHqm52jQ/VkXNugkkKB0Zrm/fFnXq8verE7FtnC23HW/RMztDbb03WjRwrOzWysxyowJt7wBy9OttAd+kudn1c9NG/NpPqUFcc5QZM77R+vTCck9v1qmOelXo+zDoV0OdGZCSCr7jo53b5eYun7Nww0KsCPEX7vnJ20cGoCOgCmm4YWHap8jH7VQGx+sPhcekf8AiuXu/wCryk+ZQw4gHximQNg1M1FQd63U90sDOvG7m3NZqmmEWJLIJCEIBCEIBCEICwhCAsIQgEdGx0AhCEAhCAgNc6TzTlG4LFDaxDDrBdmt3czXtE9JrHQzzTlBSzvfQ5Ta/EWFNjfq1PgZjy+Rfj9XHJ3Vh1Fj5m3qJKXED2jd/qZW8jqhZMxGtk7r6mMTEWruhO6wPbxnPlenRhO2sw7CcdsfsiDezFVJH0VZgpPcDvnLCPO2JxIVbncBcxvpazVV2AXFGnUQJTTKWWkS3tFYC4VnChSOBsCe2XWFJygMRmG/o7pS0NpM1wpFuN2VVHQCxNyeyNwO1WLlHRhra9iV1vYq40I06Y87TcLdrfGe43YfSQsQ90H2dPD+knVFuCOkESnD5kt9lG8RYyN9q5TpZcnHtnXv7wSD6iXkzGxalqnbbzAmnnXx3eLmz9NiR8ZNFBCEICQixIBCEICxYQgEIR0AhCEAhCEAgIQgcsV7pnnWO5wZtB7/AJOw169AO6ei4k80zB1UJXnWv7MXI3XsQfMmYc3xpx/TORj5qf77L/CLfCc+UCewxuYmyVQLbhzwNR3i/wDCZx5DtlZqZ3rUJ7VI0PlLH9JWzTVw3tKej07FSOFiG+F5hMfy3Gv5fjdrDBVridsZRFVGpk2zW1G8WN/hPPuTvK0EBKvNYb+gzX4bbVNrWceMpv8ArfX2J2A2SyCysnelz23zSyTB5TmY5j3ADsUaRmBxqnXMJ0xW0EA1bXoG/uEv1pXLLK0YisqKXY2CgknoA1MqVADBeq1u4GZTldtHEVK1DDrzKdSouYfScZhZeocSONpr3T9YOxT4hh8I11KplfjjhGy1GtwVD3hrGa5DcCZOgnPf7o9TNNgXui9k34b7GHJHcxI4wm7MyEWJAIkWEBIQhAWLEhAWEIQHQjY6AQhCAQhCBC2s+Wm5uBcWBO650F+8iZopoSFt1cN72HpNFtbUImhzOLg8VUEnwNpQ0nAAJ+sfxTn5WmCg2MnssYv1Xpkd6ED5zZ7SdGU031z7hv0I1Npj0w71KyPT09m7623gqRYddz5TVYXZzHV2Nz4nv4DqmONvxtlJfWHb9H+vMqITmOvunKTcAgX1El0ORKWKtiVD/VGtj0b7nwm8NJKa2NgBKpBg8Zd1KMytYkGzq6m1mIIOlrRce1plddeM9R5KVKZ/avl+y5y/0miwOzkpjpPSdT4mWJViDlNm67lb8L34Hd1WkOijs2fRDezJcsG6bDcp6xv4xcZE/lbGT28l8bhgB9PyVWb1UTUVhz0+4PJh85ntrAHH0R0Bz5W+JmixJGZD2ju3/hieK5euWG1qP2AeH/MudltoVPA/n4yowi3d+oD5/CT6OIWmczmykano6LzTC6rLKbi4jTHA31EWdDFzhHERpkhIRYkkJCLCAkWJFgEWJCAsIQgOhGx0AgIQgVtY565Ayn2ad4d93kvnM3iUOc0Re+Yk9Q4ePpNLsl86tW/+xsw0scgOVAe4ecymyKpq4h3P12J7MxCjwA8Jz8nm2vHN1ptn4NUXdJVaqEW+7rMSoSBdZRVdtU3IOuhNk+kWGhuvV0zLemkx32puUuy6+NPOqtTpqCAqMQWvYkuRv3DSYjZXJtVxAC1V5jA3UgsCp01G43E9E27s+pVQO9RlW9zTXRbdD237j1bpicTSOErqQLK9h+9ut5CRdt8eTrUel4TaF0QvbV2pnXeRmF+/Lu647E48U7liOabMOOXSzAcdDcjo8DTYPDmsihXy89X3X1G/xvLmhh3V2dypDIoIF9GW4uL9IOv3REu4pdRltoG+0KZ3jI/nlsfz0y+2g1vZn7QHjoPOw75nNpt/7hS+43quk0uMF0Xq17xr8I+K5ex3wKHO3QfjH4xA6MvSD6RcD75PZ6X+M7VU4D7XiNZMUZ/k3UNQPTOjoeGhtcjf1EHxEu/aVF3VG7+d/NeZ6k3scYDuWpof3v8AyA8ZqhTvEt+Jmvrim1HX31DDq5rfI+UtKFdaihlNwfEHoI4GV70JGwzmjUH1XIDdAP0W/PTNMc7Lqq54SzcXkSOMbOlgSEIQCEIQFhEiwCLEhAWEIQFkHbFXLSYD3nsii9jmY5dD1XJ7pPlRtvEojU2fcpZ7W3lVIUX4atf90yuV1E4zdSq9ZMPT5zAKihRfoAt4zC7HxC+0d091na3YWJtKzlBtV8Q13JtfRfogdkdsn9XY8D67/nObkzmXUdXHx3HuvR8FWzr5TO0tjphsW9QLzMRdr/VqbmHYw1t0hpP2bWsR1iWuKpB18x1HhKexF6riU9pSIO/5f8TF8odnCqjqvvJUFunWxIHaFE2mCfUqeMptqIVZyBwY26Suo/lMtfEY9Vy5JVgyBG99fMbr+WvZNOyaTJUKeVxUTTW/UGO8dhmpwtfOt+PEdB6JTG/F8p9YTbVPLjqLdTDzE09UXCX6bTO8rbpiaDdL28wT5CaOseanbJn1Ofx3wq2cj7vpJNUa3+0PBhb4yONHuOr0IkxxcW6vT/iW0xZrlFhdFqDehtf0v32miwNbOiuOIB8RIuNoCojKfpL5/m8jcmcTmplDvRiO7ePUjukTqpXLCV+0Kd1MsSZGxK6Sb4mJmBre0pq/EjXtGh8wZ1MrdhvzXT6r37mHzBlkZ043eMrnymrYSEIS6ohCEJEIQgEWJCAsWJFgKJkOVTlqypwy/Pj3ma8TFco6biqK5N0YlVtwC2Fz2m5mXL+rTi/Zn9rbOJTMo1FzKrZW0RrTfQ2t3g6TbrTDpbqmD5SbN9m+Zdx9Zx2OyXfTdbHr5lHSJpsLUuJ5vyPx5ZcrHUGx6+g+BHhN5hKkmXVUzjviFyMHG7j85C2slmzHcQ1/4SD5S1ZcwkDGJdcp4en/ABL3xnPVVhFBUi/UO0bpOwVe3O/dYeV+4+RlZgDlYqdx8uPwaTKZs9+DDXt4+p8Jn820+6U36Qhl9jUH0aieenxl8/ur1fKZ/l6b0qacfaIv+sD0mhrCyjt/PpLS+mU6h5ezJ3eQYyyvu8PGVoW4X89UmqeaD2H4y8ZU86X6vT83mawjf2fF1UPuspYdo1//AF4TT1N9+ken5MznKKlZ6VQbzzD16kW8Cx75GXhj60OHfMLwriMwfuidao0kzxa+oeyGtWdfrID/AAm34pcGUeC0xC/aVh5X/DLwzfiv+WHL+xIQhNVBCJCAsIkWAQhCARYkWByxtbIjvxANu06DzkTE7OFWgKR3hQQehrf8+Mdtg8wL9ZgPj8JYKLaSntsTLrthsKzU2NNxYrpaRtv4QVEOnCanbuzPaD2iDnrvH1gPiJnWfMtjOXPH8a6sMvy7YvYT+zr5freq6+l56Tg3uBPOdp0DTqBxwYN4HUTebJqZkBvpbTsmbWtFh2uItekGFpGwz2k8azSMMuqy+IoFKljxuR+f3ojOQA3EHXzv375ebRwuddN41HbKNkJJvxF/H+vxlbNLS77U/LB7vQXfmqUz2m9vVZpKh0Xrv6mY/lE13wx4B/DLe3mZrVbRPz9aMfFs/iSh5inoa3hf5SUnu2P5F/kZGUczsN/z5yQNR2j1H9JeMqVXO48D67/Uyv2vTzow4oVcdxsfTzkotc9ov4/8+UZXs1r/AEgQfAGRl4Y9V2wD3USVW3Sv2Uebbo08JYVN0meL5eqyif8AqKfa38jS+MoAP+opn7R/laX5m3D4w5fYSEITZmSESEBYsSEBYRIsAhCECDtPVqY+1+fWWEr8eOfTP2visniVntL4deZPlP7OnVppfK9UOQNykqVFvvHOLDjYzVzy79LNQNWo0yQCEzDh9P8A8PSVzm8VsMrKXauHzru1En8lKt6YX6t18Dp5WlDsHbYrgUK5/W2srH6YF7A/bsO/t322x6hp13pblUIB2lQzH/WPCctx068cvyjYJJ1FpXU3kqk0RWxLYTP7XpZGVhuJsejff19TNENRK7atHOjLx4HoI3GTe4pje2I5U0LIjj6NRG7iQD63mjwxzBD1/n1lVtWj7bDPb3spHYd/kRLDZL50Q9PyHylMWuXixZ7J3n4ztQfTst+H5yvxz5aZbhmB7QQSfKdsE/ur9kjvsT+GXZOzmxXvHgbD4TnWawXoB9IYs5Sp+16iJiBoR0H5H4GRfEz102bozr0N6gH4yyeUmzqlsQ6n6SIw8LH0l20nG9LVWPpVpn7Y89PjL0yixPvof+4n8wl6Zvw+VjzewkIQmrIyLEhJCwhCAsIkWARYkWBD2gPcP/cXzk0SJtBeaD0Mp8/6yUJE9R8LPG/0xMP7UmuvslHYM7n4z2OeGfpYxlM45xma6Iik2uuYAmwtr9LxvIy8TGQXFEWN9R166dB4HjPQNlbS9rkq5udUpo1+mpTHs6gPWcoPYZ5XUrjg0vOT+ItTYMxtcuCPeRgAoZfAgjjpMssdxphlqvcMNirggnVTYy0w1QMARPKNkcrQFDuS+UZXIBzWXRamTeRlAVrbioNrGbDk9t+nUvkqBlvwMxuNxrolmUbam/Cc8Yl1M4nEgTlXx4ta8bU/H6z+DcfrEO4626DvPz/eknZC5UUE7g3jf+sgU1y4llPuut+65DeTL4SfR0oluIVvGyn4TOL0bVY/2c215w8iy/CdsC3OHVl/Ev57ZCxRz4aoN3O8OfmB851oPlzN0FPIky/8U/qXtVuavSCCP4WE6Fs2o3OgI8P/ACjdqpfd+bG/oDI+Fq2SkerJ4Aj1Emkcw+WvTfpW3mf6TSBriZnHLlZPvEeBl/SaRj1bF75Ki48Ws3QQfA3l4ZU4+ndCOqWdGpmRW6VB8Reb8PtjHl8h0IQm7EyESEBYsSEBYRIskLFiRZA4YwcwzusjbQrKiMzsFUaknoGp8gZhOVXKQtReoOYqqSoJdcx1y5rEXY2Fhroe2R9Gu2xtxaCnIvtHG9VZRbtJNr9U+e+We0PbYio5vznJFwQQRYEa9g8R3XGN5VUkJNA1rg8120Q6GxYA5jcm9rDsEi0eSOIxBAqc6q63VgRkRTazVX6d4Ci5PAHW0XtEYkC5sJsdn8nMSlL2lSn7KmVyhnsGLG7aJ72651A4T0DYPJnC7NAYZXrC2as+UBSdLIG0Xf2nplNy5p4nEOgo0arhM6MCmVTUfJlILe+uVhu3WN7CR1elpUPBcjlyJzaj1bElQLZFzMquaasHAYq1idOadNdI2G5H1BULYasyFbXy5mZWNrow3cVO/UMNCSqtbcqcDiMFQSo+MNRUcKbKUenUZXAqLdjnGrix11PWI+ntF6i5K60y71QXNJMjOEyjO9tA6lWQDTncCLERrc6W2l7PTaCftMQtRV0N0ym97WLAgL0WPO6VE19FLUQWtmDAk8feG+4F9e6cMXWYtTd6eRmpZiPdW5IXIrDUCwFrc4kqNxBE8nMjEe51IBv+kczjXdzj9VtJlcO6vM6q8ehGIpON1mUj+H5eckYg2ov1U6h8v6TnjdainqNvFgfQRu06pp0GY78gXp1Oa8xk7rS3/MFNw+GrEHQa+Fjviq4ZXC7gbE/atlIHZb1nPk0mbDOrcd46iRceE5bOuysRrmqA9vPG7xt3TTGM7WldMyO/2NO8AyjWrloBre4/l7Qj0Mv6a2pEHgg8lMz9JM1Jh9ojzkZ9SJw9SdrLcIR9f5Xl0mlpS1mzol+lfWxlsTe0pPdtfkiVUW6x2zHumXihK/EeREaN047NNndekK3gSD6ibYXWUZZzeKzhCE6tsNOcI2LIVLFjYsLFixIsAkbH40UVzHUk2VRvY/AdfxsC3a2PTDUnrORZBxNgTwBPAdfReY4qa9RK9V3Z8tsgZkRAwa910Ooy803I0ItzmMW6mwm1RisYtRQUBKOq+/lS4PvEiwGmpv8AKZU8msRi0U4hUfKAEZH9kEuVVsiqrhzlVecd9rcNbmv7Uu62ugcoqMuRTZtXVLG9rHnHq43kjaO0zhglQvnDAqynQ81Seab6KDk6fnEmurUbQxyYo5icVkqXLstNA6KC3vMAHy9BLZb7tToJ1xVdMLQ9nQpqlmXIirfM98xFhqeark7yQpvKfB7dX+1MteoiLUpsFYv+rQqA6gtcrbLcZtfe0JvrC2jtL2larkUFKClFJ4u7Iru9NxbLlzqDYc23EizvaT8Jth62KpUMSGdKOaoQSLZlUZS4A4c3TpcknSx0WA5T06levRaqlNlRbVHYrTYjMavPvluoCAA9DdFplaK4hHTHU8pcZcOQQDmvcsEpZbLzAb2O/Nuvc9dubCGIxGFwdMMgfmMzmxVy9ao7FVvm01F7XsvA3kZYzK7qZ/xpuUiUsYU2eOfUqgVldSQlBFAy1XUHnAozgKd/N1FwZX4bk2+AxApkl0JBR7e+p0NxuzAAkjpCdIlnyI2G2FR892qtXakWOp9lQ5iqrX93m3A04LuAmpKK2Iw+YA2Ryt2uCSwKnLbfoLE79fqyMcpL+M8hZubN5QV0z0sO1wbWU3CsW5oygn3cw5l+Gcn6Mr6zvTpkE811JFxawFruoa4QEFNWBN2sBK/lBiA2PpUyRpUHSQTvFzfeQbAX4qPpy0264yFQDd3te9yXILKWY725ikDQKNRYhbMoSuSprSH2b/xZm6B09AkblEQ1OmgNsxJ8FG/+Inulg5zNTe67iNNPdItYE7reolByncoVBBtcBQMt2Ym2VVvc33aDS46Rfn1d3Ta3/KVsvGhKLjpB06rE6k9VhfplryOwvNzEc1dO1jrcd/wlPsTYj1WKPzAd5upNhYkAAk8Bvm8pYZKSCmgsqgWHYb69es1wxvtZ2o9EXQjqPhumepr+rYfa/EBNHTTf92UNVLK4+9btQ3+MryTpfCmFrezJGh/CBf1lxQN5B2hRvhUqDejK3czFSOznA/uzvs97iZXHWmsu4tEGkjYc2rj7SsPRvwySu6QHa1emftEeKlfjLy6yit7lXcIQnU53EQhCSoWKIQgLFhCSsyn6QP2eG/zeH/nkGh+2f75/FCEpn+pELZf7On/lx+CQ8V/esP8A4Nf+R4Qlf/o+POuWn7Z/vfGpO+D97Ff4p/nWEJpRqeRHvYT76/7KSu/R7/fqH3MT/t1IQkXwjfcn/drf5vF/7k7H+/t/iU4QmWP71PxQ7f8A/kqf+YX/AHDLflVvw/3W9cPFhL5kTa3vD/Gf1SYT9KXvUfvP/I0WExx/Zpf1em8nN7fd+Ky6q7+6EJvj4zRKHun7nzlJX4/4lb0EITHk8XwTav8AcW+5+KR9mbhCEpn8a4eVbruldiP2tP76+sISPsT8q9hCE6nO/9k=', lastName: 'Stark', firstName: 'Arya', tempo: '1 ano' },
  { id: 'https://www.rbsdirect.com.br/imagesrc/25732851.jpg?w=700', lastName: 'Targaryen', firstName: 'Daenerys', tempo: null },
  { id: 'https://yt3.ggpht.com/ytc/AKedOLQiI6bmbWs560NgiONauh0vCM7JO20H3IsSmI0S-g=s900-c-k-c0x00ffffff-no-rj', lastName: 'Melisandre', firstName: null, tempo: '10 anos' },
  { id: 'data:image/jpeg;base64,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', lastName: 'Clifford', firstName: 'Ferrara', tempo: '6 anos' },
  { id: 'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2022/01/22/1798086607-ana-de-armas.jpg', lastName: 'Frances', firstName: 'Rossini', tempo: '1 ano' },
  { id: 'https://istoe.com.br/wp-content/uploads/sites/14/2020/06/marcio-garcia.png', lastName: 'Roxie', firstName: 'Harvey', tempo: '9 anos' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
