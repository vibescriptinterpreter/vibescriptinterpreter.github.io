import React from 'react';
import { useState } from 'react';
import { guidGenerator } from '../../utils';
import { Table, Button, Modal, Form, Select, Input, InputNumber } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { fetchProductsApi } from '../../api';

const { Option } = Select; 


const AdminPage = () => {
    const COLUMNS = [
        {
            key: '1',
            title: 'Название товара',
            dataIndex: 'title'
        },
        {
            key: '2',
            title: 'Цена товара',
            dataIndex: 'price'
        },
        {
            key: '3',
            title: 'Категория товара',
            dataIndex: 'category'
        },
        {
            key: '4',
            title: 'Штрих код товара',
            dataIndex: 'barcode'
        },
        {
            key: '6',
            title: 'Действия',
            render: (record) => {
                return <>
                    <EditOutlined 
                        style={{color: 'green', cursor: 'pointer'}}
                        onClick={() => onEditProduct(record)}
                    />
                    <DeleteOutlined 
                        style={{color: 'red', marginLeft: 12, cursor: 'pointer'}} 
                        onClick={() => onDeleteProduct(record)} 
                    />
                </>
            }
        }
    ]

    const localProducts = JSON.parse(localStorage.getItem('products')) || [];
    let [products, setProducts] = useState(localProducts);


    const [isAddNewProductModalVisible, setIsAddNewProductModalVisible] = useState(false);
    const [form] = Form.useForm();

    const [isEditProductModalVisible, setIsEditProductModalVisibile] = useState(false);
    const [editableProductId, setEditableProductId] = useState(null);

    const onAddNewProduct = () => {
        form.validateFields();
        
        const title = form.getFieldValue(['title']);
        const price = Number(form.getFieldValue(['price']));
        const barcode = form.getFieldValue(['barcode']);
        const category = form.getFieldValue('category');

        if (title && price && barcode && category) {
            const newProduct = {
                id: guidGenerator(),
                title,
                price,
                barcode,
            }
    
            const products = localStorage.getItem('products');

            
            if (!products) {
                localStorage.setItem('products', JSON.stringify([newProduct]))
            } else {
                const productsToSave = JSON.parse(products);
                productsToSave.push(newProduct);
                localStorage.setItem('products', JSON.stringify(productsToSave))
            }

            setIsAddNewProductModalVisible(false);
            const productsToShow = JSON.parse(localStorage.getItem('products'));
            if (productsToShow) {
                setProducts(productsToShow);
            }
            form.resetFields();
        }
    }

    function onDeleteProduct (record) {
        Modal.confirm({
            title: 'Вы уверены, что хотите удалить товар?',
            onOk: () => {
                const products = localStorage.getItem('products');

                if (products) {
                    const productsNext = JSON.parse(products);

                    const filteredProducts = productsNext.filter(product => product.id !== record.id);

                    localStorage.setItem('products', JSON.stringify(filteredProducts));
                    setProducts(JSON.parse(localStorage.getItem('products')));
                }
            }
        });
    }

    function onEditProduct (record) {
        setIsEditProductModalVisibile(true);
        
        const products = localStorage.getItem('products');

        if (products) {
            form.setFieldsValue({
                'editable-title': record.title,
                'editable-price': record.price,
                'editable-barcode': record.barcode,
                'editable-category': record.category
            });
        }

        setEditableProductId(record.id);
    }

    function onEditSucess() {
        console.log('EDITABLEID', editableProductId);
        console.log(form.getFieldValue('editable-title'));
        const products = localStorage.getItem('products');

        if (products) {
            const productsNext = JSON.parse(products);
            const editableProduct = productsNext.find(product => product.id === editableProductId);

            if (editableProduct) {
                const editableProductNext = {
                    ...editableProduct,
                    title: form.getFieldValue('editable-title'),
                    price: form.getFieldValue('editable-price'),
                    barcode: form.getFieldValue('editable-barcode'),
                    category: form.getFieldValue('editable-category')
                }

                const editableRecordIndex = productsNext.findIndex(record => record.id == editableProductId)
            
                productsNext[editableRecordIndex] = editableProductNext;

                localStorage.setItem('products', JSON.stringify(productsNext));

                const productsToUpdate = JSON.parse(localStorage.getItem('products'));
                setProducts(productsToUpdate);
                setIsEditProductModalVisibile(false);
            }
        }

        form.resetField();
        setEditableProductId(null);
    }


    return (
        <div className='App' style={{maxWidth: 1200, margin: '0 auto', paddingTop: '30px'}}>
            <Button onClick={() => setIsAddNewProductModalVisible(true)}>Добавить новый продукт</Button>
            <Modal
                forceRender 
                title="Добавление нового товара" 
                visible={isAddNewProductModalVisible} 
                onOk={ onAddNewProduct} 
                onCancel={() => setIsAddNewProductModalVisible(false)}
            >
                <Form  
                    form={form}
                    name='control-hooks' 
                >
                <Form.Item name="title" label="Название товара" rules={[
                    { required: true },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="Цена товара" rules={[
                    { required: true },
                ]}>
                    <InputNumber addonAfter="₽" defaultValue={100} />
                </Form.Item>
                <Form.Item name="barcode" label="Штрих код товара" rules={[
                    { required: true },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="Категория товара" rules={[
                    { required: true },
                ]}>
                    <Select
                        placeholder="Выберите категорию"
                        defaultValue={{ value: 'drink', label: 'Напитки' }}
                        >
                        <Option value="drink">Напитки</Option>
                        <Option value="chocolate">Батончики</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                forceRender 
                title="Изменение выбранного товара" 
                visible={isEditProductModalVisible} 
                onOk={ onEditSucess } 
                onCancel={() => setIsEditProductModalVisibile(false)}
            >
                <Form  
                    form={form}
                    name='control-hooks' 
                >
                <Form.Item name="editable-title" label="Название товара">
                    <Input />
                </Form.Item>
                <Form.Item name="editable-price" label="Цена товара">
                    <InputNumber addonAfter="₽" defaultValue={100} />
                </Form.Item>
                <Form.Item name="editable-barcode" label="Штрих код товара">
                    <Input />
                </Form.Item>
                <Form.Item name="editable-category" label="Категория товара">
                    <Select
                        placeholder="Выберите категорию"
                        >
                        <Option value="drink">Напитки</Option>
                        <Option value="chocolate">Батончики</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={products} columns={COLUMNS}>
            </Table>
        </div>
    );
}

export default AdminPage;