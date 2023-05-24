import { useState } from "react";

function Content(props) {
  const datas = props.onData;
  const handleDelete = (index) => {
    props.onDelete(index);
  }
  const onGiam = (index) => {
    let updateGiamTang = [...datas]
    if (updateGiamTang[index].point > 0) {
      updateGiamTang[index].point -= 1;
    }
    props.updateGiamTang(updateGiamTang);
  };

  const onTang = (index) => {
    let updateGiamTang = [...datas]
    updateGiamTang[index].point += 1;
    props.updateGiamTang(updateGiamTang);
  };

  return (
    <div className='content-h2'>
      <table cellPadding={20} style={{ width: "100%" }}>
        <tbody>
          {
            datas.map((data, index) => {

              return (
                <div className='container'>
                  <tr key={index}>
                    <td style={{ width: "10%" }}><button className="btn btn-light" onClick={() => handleDelete(index)}>X</button></td>
                    <td style={{ width: "10%" }}><i className="fa-solid fa-crown" style={{ color: "red" }}></i></td>
                    <td style={{ width: "70%" }}>{data.name}</td>
                    <td className='d-flex justify-content-sm-around align-items-center' style={{ width: "150px" }}><button onClick={() => onGiam(index)} className="btn">-</button> <input value={data.point} style={{ width: "30px", textAlign: "center", border: "none", }} /> <button onClick={() => onTang(index)} className="btn">+</button> </td>
                  </tr>
                  <hr />
                </div>

              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Content;