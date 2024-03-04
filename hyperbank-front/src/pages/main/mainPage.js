import React, { useState, useEffect } from 'react';
import Fullpage, { FullpageSection, FullPageSections } from '@ap.cx/react-fullpage';
import { defaults } from 'chart.js/auto';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { VerticalBarChart } from '../../components/verticalBarChart';
import { RadarChart } from '../../components/radarChart';
import { PieChart } from '../../components/pieChart';
import { HorizontalBarChart } from '../../components/horizontalBarChart';
import axios from 'axios';
import './mainPage.css';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = '#FFF';

const api = axios.create({ baseURL: 'http://localhost:5000' });

function LazyLoadedSection({ children }) {
    const [ref, inView] = useInView({ threshold: 0.5 });
  
    return (
      <div ref={ref}>
        {inView && children}
      </div>
    );
}

function NumberCounter({ n }) {
    const value = parseFloat(n);
    
    const { number } = useSpring({
        from: { number: 0 },
        number: value,
        delay: 200,
        config: { mass: 20, tension: 1100, friction: 500 },
    });
    return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;
}

function Main() {
    const cpf = localStorage.getItem('cpf');
    const [name, setName] = useState('');
    const [user_id, setUserId] = useState('');
    const [account_id, setAccountId] = useState('');
    const [totalSpentAccount, setTotalSpentAccount] = useState('');
    const [monthlyTotalAmount, setMonthlyTotalAmount] = useState('');
    const [monthMostSpent, setMonthMostSpent] = useState('');
    const [categories, setCategories] = useState('');
    const [methods, setMethods] = useState('');
    const [locations, setLocations] = useState('');
    const [totalIncome, setTotalIncome] = useState('');
    const [balance, setBalance] = useState('');
    const [largerThan, setLargerThan] = useState('');
    const [accountCount, setAccountCount] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/user_id/${cpf}`);
                setUserId(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [cpf]);

    useEffect(() => {
        if(user_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/user_name/${user_id}`);
                    setName(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [user_id]);

    useEffect(() => {
        if (user_id && !account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/account_id/${user_id}`);
                    setAccountId(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [user_id, account_id]);
    
    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/account_total_amount/${account_id}`);
                    setTotalSpentAccount(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);
    
    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/account_monthly_amount/${account_id}`);
                    setMonthlyTotalAmount(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);
    
    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/account_month_most_spent/${account_id}`);
                    setMonthMostSpent(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/category_count/${account_id}`);
                    setCategories(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/method_count/${account_id}`);
                    setMethods(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/top_3_cities/${account_id}`);
                    setLocations(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/total_income/${account_id}`);
                    setTotalIncome(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/balance/${account_id}`);
                    setBalance(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/larger_than/${account_id}`);
                    setLargerThan(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    useEffect(() => {
        if (account_id) {
            async function fetchData() {
                try {
                    const response = await api.get(`/accounts_count`);
                    setAccountCount(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        }
    }, [account_id]);

    const topPercent = ((largerThan / accountCount) * 100).toFixed(1);
    
    return (
        <Fullpage className='main'> 
            <FullPageSections>
                <FullpageSection className='section-1'>
                    <LazyLoadedSection>
                        <div className='container'>
                            <div className='div-title'>
                                <h1>{name}'s<br/>Financial<br/>Highlights</h1>
                                <img className='img-2023' src='../../images/2023.png' alt='2023'></img>
                            </div>
                            <div className='div-logo-section-1'>
                                <img className='logo1' src='../../images/logo.png' alt='logo'></img> 
                            </div>
                            <div className='div-rectangles-detail-1'>
                                <img className='rectangles' src='../../images/rectangle-detail.png' alt='details'></img>
                            </div>
                            <div className='div-curves-section-1'>
                                <img className='curves-s1' src='../../images/curves-section-1.png' alt='curves'></img> 
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-2'>
                    <LazyLoadedSection>
                        <div className='container s2'>
                            <div className='text-container div-text-section-2'>
                                <p className='text text-section-2'>In preparation for your next adventures, let's take a moment to review the accomplishments you have made this year</p>
                                <p className='text text-section-2-1'><span style={{color: '#F8DF19'}}>Ready?</span></p>
                            </div>
                            <div className='div-curves-section-2'>
                                <img className='curves-s2' src='../../images/curves-section-2.png' alt='curves'></img>
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-3'>
                    <LazyLoadedSection>
                        <div className='container'>
                            <div className='div-coins-section-3'>
                                <img className='coin1' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin2' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin3' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin4' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin5' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin6' src='../../images/coin.png' alt='coin'></img> 
                            </div>
                            <div className='div-curves-section-3'>
                                <img className='curve-s3' src='../../images/curve-section-3.png' alt='curve'></img>
                            </div>
                            <div className='text-container div-text-money'>
                                <p className='text'>In 2023, you spent the grand amount of</p>
                                <div className='text-money'><NumberCounter n={totalSpentAccount}/></div>
                                <p className='small-text small-text-3'>
                                    You are in the top{' '}
                                    <span style={{color: '#F8DF19'}}>{topPercent}%</span>{' '}
                                    of HyperBank!
                                </p>
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-4'>
                    <LazyLoadedSection>
                        <div className='container container-chart'>
                            <div className='text-container div-text-section-4'>
                                <p className='text text-chart'>And you did it throughout the months, <br />
                                    but {' '}
                                    <span style={{color: '#F8DF19'}}>{monthMostSpent}</span>{' '}
                                    was quite special
                                </p>
                            </div>
                            <div className='chart-container verticalBarChart'>
                                <VerticalBarChart chartData={monthlyTotalAmount} />
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-5'>
                    <LazyLoadedSection>
                        <div className='container container-chart'>
                            <div className='text-container div-text-section-5'>
                                <p className='text-chart'>The way you did it <br />
                                    was {' '}
                                    <span style={{color: '#F8DF19'}}>unique</span>
                                </p>
                            </div>
                            <div className='chart-container radarChart'>
                                <RadarChart chartData={categories} />
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-6'>
                    <LazyLoadedSection>
                        <div className='container container-chart'>
                            <div className='text-container div-text-section-6'>
                                <p className='text text-chart'>
                                    Still, there was one {' '}
                                    <span style={{color: '#F8DF19'}}> payment method </span>{' '}
                                    that stood out
                                </p>
                                <div className='chart-container pieChart'>
                                    <PieChart chartData={methods} />
                                </div>
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-7'>
                    <LazyLoadedSection>
                        <div className='container container-chart'>
                            <div className='text-container div-text-section-7'>
                                <p className='text text-chart'>
                                    Speaking of standing out, these are the {' '}
                                    <span style={{color: '#F8DF19'}}> top 3 locations <br /></span>{' '}
                                    you have made transactions at
                                </p>
                            </div>
                            <div className='chart-container horizontalBarChart'>
                                <HorizontalBarChart chartData={locations} />
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-8'>
                    <LazyLoadedSection>
                        <div className='container'>
                            <div className='text-container div-text-section-8'>
                                <p className='text'>However, spending was not all you did</p>
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-9'>
                    <LazyLoadedSection>
                        <div className='container'>
                            <div className='text-container div-text-money'>
                                <p className='text'>This year, you have saved</p>
                                <div className='text-money'><NumberCounter n={balance}/></div>
                                <p className='small-text small-text-9'>
                                    out of  {' '}
                                    <span style={{color: '#F8DF19'}}>{totalIncome}</span> {' '}
                                    earned
                                </p>
                            </div>
                            <div className='div-coins-section-9'>
                                <img className='coin7' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin8' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin9' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin10' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin11' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin12' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin13' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin14' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin15' src='../../images/coin.png' alt='coin'></img> 
                                <img className='coin16' src='../../images/coin.png' alt='coin'></img> 
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
                <FullpageSection className='section-10'>
                    <LazyLoadedSection>
                        <div className='container'>
                            <div className='text-container div-text-section-10'>
                                <p className='text text-section-10'>
                                    It was a great ride. <br /> 
                                    Hope to see you again next year!
                                </p>
                            </div>
                            <div className='div-logo-section-10'>
                                <img className='logo2' src='../../images/logo.png' alt='logo'></img>
                            </div>
                            <div className='div-rectangles-detail-2'>
                                <img className='rectangles-2' src='../../images/rectangle-detail.png' alt='details'></img>
                            </div>
                        </div>
                    </LazyLoadedSection>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
}

export default Main;