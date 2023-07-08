import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { Grid } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import './styles.scss'
import productImg from "./img/productImg.svg"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const options = [
    'Mais relevantes',
    'Preço menor-maior',
    'Mais recentes',
    'Mais vendidos',
    'Preço maior-menor',
];

function getStyles(product, products, theme) {
    return {
        fontWeight:
            products.indexOf(product) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Products() {
    const theme = useTheme();
    const [product, setProduct] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setProduct(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [selectedValue, setSelectedValue] = React.useState('');

    const handleRadio = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleRadio,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const [productsAPI, setProductsAPI] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProductsAPI(data));
    }, []);

    return (
        <div>
            <Header />
            <div className="ProductContainer">
                <div className="ProductContainerHeader">
                    <p id='ProductContainerResults'>resultado para "" - "" produtos</p>
                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={product}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Ordernar por:</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Ordernar por:</em>
                            </MenuItem>
                            {options.map((option) => (
                                <MenuItem
                                    key={option}
                                    value={option}
                                    style={getStyles(option, product, theme)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className='ProductContent'>
                    <div id='ProductContentFilter'>
                        <p className='ProductContentFilterHeader'>Filtrar por</p> <hr />
                        <div className='ProductContentFilterList'>
                            <ul className='ProductContentFilter'>
                                <label className='ProductContentFilterLabel'>Marca</label>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Adidas
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Calenciaga
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    K-Swiss
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Nike
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Puma
                                </li>
                            </ul>
                            <ul className='ProductContentFilter'>
                                <label className='ProductContentFilterLabel'>Categoria</label>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Esporte e lazer
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Casual
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Utilitário
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Corrida
                                </li>
                            </ul>
                            <ul className='ProductContentFilter'>
                                <label className='ProductContentFilterLabel'>Gênero</label>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Masculino
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Feminino
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Checkbox sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
                                    Unisex
                                </li>
                            </ul>
                            <ul className='ProductContentFilter'>
                                <label className='ProductContentFilterLabel'>Estado</label>
                                <li className='ProductContentFilterItem'>
                                    <Radio {...controlProps('a')} sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
                                    Novo
                                </li>
                                <li className='ProductContentFilterItem'>
                                    <Radio {...controlProps('b')} sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
                                    Usado
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Grid container spacing={12} style={{ width: "72em" }}>
                            {productsAPI.map(product => (
                                <Card offer={product.offer} productImg={productImg} productName={product.product} brand={product.brand} model={product.model} price={product.price} />
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
