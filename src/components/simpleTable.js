import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { message, Modal } from 'antd';

const SimpleTable = ({ dataSource, deleteUser, handleEdit }) => {
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this user?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteUser(id);
        message.success('User Deleted Successfully !!!');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <>
      <div>
        {dataSource.length ? (
          <div className="w-[70vw] m-auto py-5 my-5 relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left shadow-lg rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSource.map((user, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {user.id}
                    </th>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="flex justify-around px-6 py-4">
                      <FaEdit
                        onClick={() => handleEdit(user)}
                        className="text-blue-500 cursor-pointer"
                      />
                      <MdDelete
                        onClick={() => {
                          showDeleteConfirm(user.id);
                        }}
                        size={18}
                        color="red"
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3 className="text-center py-20 text-lg font-bold">No User Found</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default SimpleTable;
