import React from 'react';
import { useSelector } from 'react-redux';

function Groups(props) {
    const { courses } = useSelector(state => state.Elements);
    return (
        <div>
            <div className='alert alert-primary d-flex justify-content-between'>
                <h1>Guruxlar</h1><button className='btn btn-primary'><i className='fas fa-plus pr-2'></i> Gurux qo'shish</button>
            </div>
            <div>
                <table className='table table-responsive-lg table-head-bg-primary'>
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Nomi</th>
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
                            <th scope="col">O'quvchilar soni</th>
                            <th scope="col">Xafta kunlari</th>
                            <th scope="col">Vaqti</th>
                            <th scope="col">
                                <select className='form-control-sm btn btn-primary text-left b'>
                                    <option value="">O'qituvchisi</option>
                                    <option value="">Quvonchbek Murodov</option>
                                    <option value="">Valijon Vaxobjonov</option>
                                </select>
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>WEB-15</td>
                            <td>Dasturlash</td>
                            <td>15</td>
                            <td>D-CH-J</td>
                            <td>14:30-16:00</td>
                            <td>Quvonchbek Murodov</td>
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
    );
}

export default Groups;