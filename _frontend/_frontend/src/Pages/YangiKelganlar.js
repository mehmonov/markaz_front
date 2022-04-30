import React from 'react';
import { useSelector } from 'react-redux';
function YangiKelganlar(props) {
    const { courses } = useSelector(state => state.Elements);
    return (
        <div>
            <div className='alert alert-primary'>
                <h1>Yangi kelganlar</h1>
            </div>
            <div>
                <table className='table table-responsive-lg table-head-bg-primary'>
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">F.I.SH.</th>
                            <th scope="col">
                                <select className='form-control-sm btn btn-primary text-left b'>
                                    <option>Kurs</option>
                                    {
                                        courses.length ? courses.map(({ id, c_name }) => {
                                            return (
                                                <option value={id} key={id}>{c_name}</option>
                                            )
                                        })
                                            : <option value>Bazada xatolik bor!</option>
                                    }
                                </select>
                            </th>
                            <th scope="col">Telefon 1</th>
                            <th scope="col">Telefon 2</th>
                            <th scope="col">Status</th>
                            <th scope="col">Kelgan sana</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Quvonchbek Murodov</td>
                            <td>Dasturlash</td>
                            <td>+998913231155</td>
                            <td>+998908503095</td>
                            <td>Aniq</td>
                            <td>12.04.2022 12:27</td>
                            <td className='d-flex'>
                                <button className='btn btn-outline-primary my-2'><i className='fas fa-edit'></i></button>
                                <button className='btn btn-outline-warning mx-2 my-2'><i className='fas fa-eye'></i></button>
                                <button className='btn btn-outline-danger my-2'><i className='fas fa-trash-alt'></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default YangiKelganlar;