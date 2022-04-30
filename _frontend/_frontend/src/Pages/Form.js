import React from 'react';
import { useSelector } from 'react-redux';
function Form(props) {
    const {courses} = useSelector(state=>state.Elements);
    return (
        <div>
            <div className='alert alert-primary'>
                <h1>O'quvchi qabul qilish</h1>
            </div>
            <div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Ismi:</h3></label>
                        <input type="text" className='form-control' placeholder="O'quvchining ismi..." />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Familiyasi:</h3></label>
                        <input type="text" className='form-control' placeholder="O'quvchining familiyasi..." />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Telefon 1:</h3></label>
                        <input type="number" className='form-control' placeholder="Birinchi telefon raqami..." />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Telefon 2:</h3></label>
                        <input type="number" className='form-control' placeholder="Ikkinchi telefon raqami..." />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                        <label>
                            <h3>Qaysi kursga:</h3>
                        </label>
                        <select className="form-control">
                            <option value="">---</option>
                            {
                                courses.length ? courses.map(({ id, c_name }) => {
                                    return (
                                        <option value={id} key={id}>{c_name}</option>
                                    )
                                })
                                    : <option value>Bazada xatolik bor!</option>
                            }
                        </select>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Tug'ilgan sana:</h3></label>
                        <input type="date" className='form-control' placeholder="Birinchi telefon raqami..." />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Manzil:</h3></label>
                        <input type="text" className='form-control' placeholder="O'quvchining yashash manzili..." />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Qulay payt:</h3></label>
                        <select className='form-control'>
                            <option value="">---</option>
                            <option value="">Abetdan oldin</option>
                            <option value="">Abetdan keyin</option>
                            <option value="">Farqi yo'q</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Qulay vaqt:</h3></label>
                        <select className='form-control'>
                            <option value="">---</option>
                            <option value="1">08:00 - 09:30</option>
                            <option value="1">09:30 - 11:00</option>
                            <option value="1">11:00 - 12:30</option>
                            <option value="1">13:15 - 14:30</option>
                            <option value="1">14:30 - 16:00</option>
                            <option value="1">16:00 - 17:30</option>
                            <option value="1">17:30 - 19:00</option>
                            <option value="">Farqi yo'q</option>
                        </select>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Qulay sana:</h3></label>
                        <select className='form-control'>
                            <option value="">---</option>
                            <option value="">D-CH-J</option>
                            <option value="">S-P-SH</option>
                            <option value="">Farqi yo'q</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Qayerdan eshitgan:</h3></label>
                        <input type="text" className='form-control' placeholder="O'quvchi markaz xaqida qayerdan eshitgan..." />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <label><h3>Status:</h3></label>
                        <select className='form-control'>
                            <option value="">---</option>
                            <option value="">Aniq</option>
                            <option value="">No'aniq</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-danger mr-2'>Qaytadan</button>
                    <button className='btn btn-primary'>Qo'shish</button>
                </div>
            </div>
        </div>
    )
}

export default Form;