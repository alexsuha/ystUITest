import React, { useEffect, useState } from 'react'
import { loadProducts } from '../../store/actions/products';
import { setPageToLoad } from '../../store/actions/header';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Product from '../../components/Product';
import MySpinner from '../../components/MySpinner';

import { config } from '../../services/config';
import Footer from '../../components/Footer';
import './styles.css';
import PdPopup from '../../components/PdPopup/PdPopup';
import $ from 'jquery';

const Products = ({
    products: {isLoading, products, hasMoreItems, error},
    loadProducts,
    header,
    setPageToLoad,
}) => {

    let makeFilterEntity = {
        models: [],
      };
      
    const addMake = (brand) => {
        makeFilterEntity.models = [brand, ...makeFilterEntity.models];
    }
    
    const removeMake = (brand) => {
        makeFilterEntity.models = makeFilterEntity.models.filter(p => p !== brand);
    }
    
    const getMakes = () => {
        return makeFilterEntity.models;
    }

    let modelFilterEntity = {
        models: [],
      };
      
    const addModel = (brand) => {
        modelFilterEntity.models = [brand, ...modelFilterEntity.models];
    }
    
    const removeModel = (brand) => {
        modelFilterEntity.models = modelFilterEntity.models.filter(p => p !== brand);
    }
    
    const getModels = () => {
        return modelFilterEntity.models;
    }

    let yearFilterEntity = {
        min: 2015,
        max: 2025
    }

    const addMinYear = (year) => {
        yearFilterEntity.min = year;
    }

    const addMaxYear = (year) => {
        yearFilterEntity.max = year;
    }

    const getYears = () => {
        
        return [];
    }
      

    const p1 = {
        padding: '20px',
    }

    const p2 = {
        width: '545px',
        top: '-150px',
    }

    const p3 = {
        margin: 'auto',
        width: '100%',
        padding: '10px',
    }

    const p4 = {
        width: '280px',
        top: '-134px',
        alignContent: 'center',
    }

    const p5 = {
        margin: 'auto',
        width: '100%',
        padding: '10px',
    }

    const p6 = {
        padding: '23px 30px',
    }

    const p7 = {
        padding: '6px !important',
        fontSize: '25px',
    }

    const p8 = {
        padding: '10px !important',
        width: "100%",
    }

    const p9 = {
        padding: '7px !important',
        fontSize: '30px',
    }

    const pa = {
        paddingTop: '2px',
        cursor: 'pointer',
    }

    const pb = {
        lineHeight: '30px',
    }

    const pc = {
        fontSize: '22px',
    }

    const [ sortFilter, setSortFilter] = useState("ASC");
    const [ makeFilter, setMakeFilter] = useState([]);
    const [ modelFilter, setModelFilter] = useState([]);
    const [ nameFilter, setNamefilter ] = useState("");

    const options = [
        {
          label: "Price Low to High",
          value: "ASC",
        },
        {
          label: "Price High to Low",
          value: "DESC",
        },
      ];

    const yearoptions = [
        { label: "2017"},
        { label: "2018"},
        { label: "2019"},
        { label: "2020"},
    ];

    useEffect(() => {
        const sortdata = JSON.stringify(["saleprice", sortFilter]); //ASC
        const makedata = makeFilter.length > 0 ? JSON.stringify(makeFilter) : null;
        const modeldata = modelFilter.length > 0 ? JSON.stringify(modelFilter) : null;
        console.log("products");
        console.log(nameFilter);

        loadProducts(
          {
            make: makedata,
            model: modeldata,
            name: nameFilter,
            page: 0,
            size: 10,
            sorts: sortdata
          },
          false,
          () => setPageToLoad(0),
        );
      }, [ sortFilter, modelFilter, nameFilter, makeFilter ]);

      function fetchMoreData(pageToLoad) {
        if (pageToLoad > 0) {
            const sortdata = JSON.stringify(["saleprice", sortFilter]);
            const makedata = makeFilter.length > 0 ? JSON.stringify(makeFilter) : null;
            const modeldata = modelFilter.length > 0 ? JSON.stringify(modelFilter) : null;

          loadProducts(
            {
                make: makedata,
                model: modeldata,
                name: nameFilter,
                page: header.pageToLoad + 1,
                size: config.pageSize,
                sorts: sortdata
            },
            true,
            () => setPageToLoad(header.pageToLoad + 1), // this way or race loop!!!
          );
          //console.log('header.pageToLoad: ', header.pageToLoad);
        }
      }

    function handleSortOption(filter) {
        setSortFilter(filter);
    }

    const handleMakeCheckBox = () => {
        console.log(getMakes());
        setMakeFilter(getMakes());
    }

    const handleModelCheckBox = () => {
        console.log(getModels());
        setModelFilter(getModels());
    }

    const handleSearch = (e) => {
        if(e.key === 'Enter') {
            setNamefilter(e.target.value);        
        }
        //setNamefilter($("#searchkey").val());
    }

    if (error) return <Redirect to={'/error'} />;
    if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

    const tabActive = [ false, false, false, false, false, false ];

    const handleFilterChange = (e) => {
        console.log(e);
        for (let i = 0; i < 4; ++i)
        {
            if (i === e)
            {
                tabActive[i] = !tabActive[i];
            }
            else {
                tabActive[i] = false;
            }
        }
        console.log(tabActive);
        for (let i = 0; i < 4; ++i)
        {
            if (tabActive[i])
            {
                $(`#filter${i+1}`).addClass("active");
            }
            else 
            {
                $(`#filter${i+1}`).removeClass("active");
            }
        }
    }

    const make1 = [ "Alfa Romeo", "Audi", "BMW", "Cadillac", "Dodge" ];
    const make2 = [ "Infiniti", "Jeep", "Mercedes", "Porche", "Range Rover" ];
    const model1 = [ "A3", "A4", "A5", "A6", "A7"];
    const model2 = [ "Q3", "Q5", "Q7", "RS5", "RS6"];

    return (
        <>
        <main class="main">
			<div class="catalog-cards-section">
				<div class="filter-sidebar">
					<div class="head">
						<strong class="title">Search Filter</strong>
						{/* <div class="heading-wrap">
							<strong class="heading">23 found</strong>
							<a href="#" class="reset-link">Clear</a>
						</div> */}
					</div>
					<ul class="filter-list">
						<li class="filter-parent" id="filter1">
							<a class="filter-opener" onClick={() => {handleFilterChange(0)}}>
								<span class="opener-wrap">
									<span class="name">Make</span>
									<span class="text" style={{fontSize: "20px"}}>></span>
								</span>
							</a>
							<div class="filter-slide">
								<div class="slide-wrap">
									<div class="slide-holder">
										<div class="product-items-area">
											<strong class="title">Make</strong>
											<div class="check-list-area">
												<ul class="check-list">
                                                    {make1.map((make, i) =>
                                                        (
                                                            <li>
                                                                <label class="checkbox-wrap">
                                                                    <input type="checkbox" onChange={ (e) => { if (e.target.checked) { addMake(make);} else {removeMake(make)}}}/>
                                                                    <span class="fake-checkbox"><i class="icon"></i>{make}</span>
                                                                </label>
                                                            </li>
                                                        ),
                                                    )}
												</ul>
												<ul class="check-list">
                                                    {make2.map((make, i) =>
                                                        (
                                                            <li>
                                                                <label class="checkbox-wrap">
                                                                    <input type="checkbox" onChange={ (e) => { if (e.target.checked) { addMake(make);} else {removeMake(make)}}}/>
                                                                    <span class="fake-checkbox"><i class="icon"></i>{make}</span>
                                                                </label>
                                                            </li>
                                                        ),
                                                    )}
												</ul>
											</div>
											<ul class="btns-list">
                                                <li><a className="apply-btn" onClick={handleMakeCheckBox}>Apply</a></li>
												{/* <li><a class="clear-btn">Clear</a></li> */}
											</ul>
										</div>
										<a onClick={() => {handleFilterChange(0)}} class="filter-slide-close"><i class="icon-close"></i></a>
									</div>
								</div>
							</div>
						</li>
						<li class="filter-parent" id="filter2">
							<a class="filter-opener" onClick={() => {handleFilterChange(1)}}>
								<span class="opener-wrap">
									<span class="name">Model</span>
									<span class="text" style={{fontSize: "20px"}}>></span>
								</span>
							</a>
							<div class="filter-slide">
								<div class="slide-wrap">
									<div class="slide-holder">
										<div class="product-items-area">
											<strong class="title">Modal</strong>
											<div class="check-list-area">
												<ul class="check-list">
                                                    {model1.map((model, i) =>
                                                        (
                                                            <li>
                                                                <label class="checkbox-wrap">
                                                                    <input type="checkbox" onChange={ (e) => { if (e.target.checked) { addModel(model);} else {removeModel(model)}}}/>
                                                                    <span class="fake-checkbox"><i class="icon"></i>{model}</span>
                                                                </label>
                                                            </li>
                                                        ),
                                                    )}
												</ul>
												<ul class="check-list">
                                                    {model2.map((model, i) =>
                                                        (
                                                            <li>
                                                                <label class="checkbox-wrap">
                                                                    <input type="checkbox" onChange={ (e) => { if (e.target.checked) { addModel(model);} else {removeModel(model)}}}/>
                                                                    <span class="fake-checkbox"><i class="icon"></i>{model}</span>
                                                                </label>
                                                            </li>
                                                        ),
                                                    )}
												</ul>
											</div>
											<ul class="btns-list">
                                                <li><a className="apply-btn" onClick={handleModelCheckBox}>Apply</a></li>
											</ul>
										</div>
										<a onClick={() => {handleFilterChange(1)}} class="filter-slide-close"><i class="icon-close"></i></a>
									</div>
								</div>
							</div>
						</li>
						<li class="filter-parent" id="filter3">
							<a class="filter-opener" onClick={() => {handleFilterChange(2)}}>
								<span class="opener-wrap">
									<span class="name">Select Year</span>
									<span class="text" style={{fontSize: "20px"}}>></span>
								</span>
							</a>
							<div class="filter-slide year-slide">
								<div class="slide-wrap">
									<div class="slide-holder">
										<div class="product-items-area">
											<strong class="title">Year</strong>
											<div class="select-fields-area">                                          
												<div class="select-field">
													<label style={{width: "auto"}} for="min">Min Year</label>
													<select style={{float:"right", width: "100px"}} onChange={e => addMinYear(e.target.value)}>
                                                        {yearoptions.map((option) => (
                                                            <option value={option.label}>{option.label}</option>
                                                            ))}
                                                    </select>
												</div>
												<div class="select-field">
													<label style={{width: "auto"}} for="max">Max Year</label>
													<select style={{float:"right", width: "100px"}} onChange={e => addMaxYear(e.target.value)}>
                                                        {yearoptions.map((option) => (
                                                            <option value={option.label}>{option.label}</option>
                                                            ))}
                                                    </select>
												</div>
											</div>
											<ul class="btns-list">
												<li><a onClick={() => {handleFilterChange(2)}} class="apply-btn">Apply</a></li>
											</ul>
										</div>
										<a onClick={() => {handleFilterChange(2)}} class="filter-slide-close"><i class="icon-close"></i></a>
									</div>
								</div>
							</div>
						</li>
						<li class="filter-parent" id="filter4">
							<a onClick={() => {handleFilterChange(3)}} class="filter-opener">
								<span class="opener-wrap">
									<span class="name">Select Price</span>
									<span class="text" style={{fontSize: "20px"}}>></span>
								</span>
							</a>
							<div class="filter-slide year-slide">
								<div class="slide-wrap">
									<div class="slide-holder">
										<div class="product-items-area">
											<div class="select-fields-area">
                                                <strong class="title">Price</strong>
                                                <div class="select-fields-area">                                          
                                                    <div class="select-field">
                                                        <label style={{width: "auto"}} for="min">Min Price</label>
                                                        <input type="number" style={{float:"right", width: "100px"}} />
                                                    </div>
                                                    <div class="select-field">
                                                        <label style={{width: "auto"}} for="max">Max Price</label>
                                                        <input type="number" style={{float:"right", width: "100px"}} />
                                                    </div>
                                                </div>
											</div>
											<ul class="btns-list">
												<li><a onClick={() => {handleFilterChange(3)}} class="apply-btn">Apply</a></li>
											</ul>
										</div>
										<a onClick={() => {handleFilterChange(3)}} class="filter-slide-close"><i class="icon-close"></i></a>
									</div>
								</div>
							</div>
						</li>
					</ul>
					{/* <div class="key-search-field">
						<label for="search02"><i class="icon-search"></i></label>
						<input type="search" class="form-control" id="search02" placeholder="Search Key Word" onKeyDown={handleSearch}/>
					</div> */}
				</div>
                <div class="filter-content">
					<div class="filter-heading">
						<div class="filter-searching">
							<div class="filter-field">
								<label for="search01"><i class="icon-search"></i></label>
								<input type="search" class="form-control" id="search02" placeholder="Search Key Word" onKeyDown={handleSearch}/>
							</div>
                            <span class="sort-text"><a><span>Sort:</span>
                                <select value={sortFilter} onChange={e => handleSortOption(e.target.value)}>
                                    {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                    ))}
                                </select></a>
                            </span>
						</div>
					</div>
                    <InfiniteScroll
                        className="latest-product-row"
                        pageStart={0}
                        loadMore={fetchMoreData}
                        hasMore={hasMoreItems}
                        initialLoad={false}
                        >
                        {products.map((product, i) =>
                            (
                                <Product product={product} key={i} />
                            ),
                        )}
                    </InfiniteScroll>
                    {!error && !hasMoreItems && (
                        <Row>
                            <Col>
                                <h4 style={{textAlign: "center", color: "#8a8a8a", alignItems: "center"}}>No more products</h4>
                            </Col>
                        </Row>
                    )}           
                </div>
            </div>
        </main>
        <Footer />
    </>
    )
}

export default connect(
    state => ({
        products: state.productsReducer,
        header: state.headerReducer,
    }),
    { loadProducts, setPageToLoad },
  )(Products);
