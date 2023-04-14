import React from "react";
import { Table} from 'react-bootstrap';

function ProductSpecification({ product }) {
    // console.log("productInfo",product.productInformation);
    // console.log("title",title)



   

    return (
        (product.specifications != null) ? (
            <>
                {product.specifications.map(specifiaction => (
                    <>
                        <div style={{
                            borderBottom: '1px solid rgb(226, 226, 226)', fontFamily: 'Roboto',
                            fontStyle: 'normal', fontWeight: '600', fontSize: '20px'
                        }}>
                            < h4 > {specifiaction.head}</h4 >
                            {(specifiaction.specs != null) ? (<>
                                {specifiaction.specs.map(spec => (
                                    <>
                                        <Table borderless>
                                                <tr>
                                                    <td style={{
                                                        fontFamily: 'Roboto',
                                                        fontStyle: 'normal',
                                                        fontWeight: '600',
                                                        fontSize: '16px',
                                                        lineHeight: '18px',
                                                        letterSpacing: '0.02em',

                                                        color: '#878787',
                                                        width: '250px'
                                                    }}>
                                                        <p className="tablep">{spec.key}</p>
                                                    </td>
                                                    <td style={{
                                                        fontFamily: 'Roboto',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '16px',
                                                        lineHeight: '18px',
                                                        letterSpacing: '0.02em',
                                                        marginLeft: '20px',
                                                        color: '#212121'
                                                    }}>
                                                        <p >
                                                            {spec.value}
                                                        </p>
                                                    </td>
                                                </tr>
                                                <br />
                                        </Table>
                                    </>
                                ))}
                            </>) : (null)}
                        </div>
                    </>
                ))}
            </>
        ) : (null)




    );
}

export default ProductSpecification;