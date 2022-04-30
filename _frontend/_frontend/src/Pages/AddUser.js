import React from "react";
import { useSelector } from "react-redux";
function AddUser(props) {
  const {courses} = useSelector(state=>state.Elements);
  return (
    <div>
      <div className="alert alert-primary">
        <h1>Yangi xodim qo'shish</h1>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Ismi:</h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Xodimning ismi..."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Familiyasi:</h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Xodimning familiyasi..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Telefon 1:</h3>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Birinchi telefon raqami..."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Telefon 2:</h3>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Ikkinchi telefon raqami..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Tug'ilgan sana:</h3>
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Birinchi telefon raqami..."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Manzil:</h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Xodimning yashash manzili..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Surati (3x4):</h3>
            </label>
            <input type="file" className="form-control" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Soxasi:</h3>
            </label>
            <select className="form-control">
              <option value="">---</option>
              {
                courses.length ? courses.map(({id,c_name})=>{
                  return(
                    <option value={id} key={id}>{c_name}</option>
                  )
                })
                : <option value>Bazada xatolik bor!</option>
              }
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Email:</h3>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Xodimning emaili..."
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <label>
              <h3>Parol:</h3>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Tizimga kirish uchun parol..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 my-3">
            <label>
              <h3>Qisqacha (Ixtiyoriy):</h3>
            </label>
            <textarea
              rows={5}
              className="form-control"
              placeholder="Xodim xaqida qisqacha..."
            ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger mr-2">Qaytadan</button>
          <button className="btn btn-primary">Qo'shish</button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
