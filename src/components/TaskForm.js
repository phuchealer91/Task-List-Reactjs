import React, { Component } from 'react'

export default class TaskForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '', //trùng với name ở dưới
                status: true //trùng với name ở dưới
            }
        }
        
    //Hàm thực hiện bắt sự kiện click từ con truyền sang cha (App) để thực hiện thay đổi trạng thái thông qua props
    onHandleCloseForm = () => {
        this.props.onRetriveForm();
    }
    // Hàm bắt sự kiện thay đổi trong form để lấy dữ liệu
    onChangeTaskForm = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        // covert string -> boolen dành cho select
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value //gán dữ liệu vào arr trên sate
        })
    }
    // Hàm submit form 
    onSubmitTaskForm = (event) => {
        event.preventDefault();
        // console.log(this.state);
        // lấy dữ liệu từ state và đổ sang cha (App) thông qua props là onRetriveTaskForm
        this.props.onRetriveTaskForm(this.state);
        // Hàm rest form
        this.onClearForm();
        //hàm đóng form
        this.onHandleCloseForm();
    }
    //
    onClearForm = () => {
        this.setState({
            name: '',
            status: true
        })
    } 

    render() {
        // 
        return (
            <div className="card">
                <div className="card-header bg-success">Thêm công việc 
                <button type="button" 
                    className="close" 
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={this.onHandleCloseForm} //Thực hiện thao tác đóng form thay đổi trạng thái true -> false
                    >
                    <span aria-hidden="true">&times;</span>
                </button></div>
                <div className="card-body">
                    <form onSubmit={this.onSubmitTaskForm}>
                        <div className="form-group">
                            <label >Tên</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tên công việc" 
                             name="name" //name phải trùng với sate ở trên
                             value={this.state.name} //giữ value trong input
                             onChange={this.onChangeTaskForm} //sẽ lấy dữ liệu khi thay đổi.. 
                            />
                        </div>
                        <div className="form-group">
                            <label >Trạnng thái</label>
                            <select 
                                 className="form-control"
                                 name="status" //name phải trùng với sate ở trên
                                 value={this.state.status} //giữ value trong select
                                 onChange={this.onChangeTaskForm}//sẽ lấy dữ liệu khi thay đổi.. 
                                 >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-success"><i className="fa fa-check"></i> Lưu</button>
                            <button 
                            type="button" 
                            className="btn btn-danger ml-2"
                            onClick={this.onClearForm} //Thực hiện thao tác reset form
                            ><i className="fa fa-times"></i> Hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
