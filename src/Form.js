import React, {Fragment} from 'react'
import Slider from 'react-slick'
import Question, {Title} from './components/Question'
import Select from './components/Select'
import CheckList from './components/CheckList'
import SmallCheckList from './components/SmallCheckList'
import Button from './components/Button'
import {Column, Flex} from './components/layout'
import styled from "styled-components"
import euStrany from './eu-strany';
import okresy from './okresy';
import strany from './strany';

const Bar = styled(Flex)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background-color: ${props => props.theme.colors.lightGrey};
`

const Fill = styled(Flex)`
   transition: width 500ms;
   background-color: ${props => props.theme.colors.green};
   height: 10px;
   position: relative;
`

const ToolTip = styled.div`
  white-space: nowrap;
  position: absolute;
  right: 0;
  top: -20px;
  transform: translate(50%, -100%);
  padding: 7px 14px;
  background-color: ${props => props.theme.colors.green};
  color: white;
  font-size: 12px;
  font-weight: bold;
  :after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: ${props => props.theme.colors.green};;
    border-width: 8px;
    margin-left: -8px;
  }
`

const AbsoluteTitle = styled(Title)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 20px;
  @media (max-height: 650px) {
    display: none;
  }
`

const StyledSpan = styled.span`
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
`

const Return = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.grey};
  cursor: pointer;
  height: 20px;
  display: block;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 0;
  &:hover {
    font-weight: bold;
  }
`

class Form extends React.Component {
    slider
    state = {
        height: 0,
        first: '',
        second: '',
        third: '',
        fourthFirst: '',
        fourthSecond: '',
        fourthLastChanged: 2,
        fifth: '',
        sixth: '',
        seventh: '',
        currentSlide: 0,
        submitted: false,
        loading: false,
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({height: window.innerHeight})
        })
        this.setState({height: window.innerHeight})
    }

    render() {
        const settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchMove: false,
            draggable: false,
            arrows: false,
            accessibility: false,
            infinite: false,
            beforeChange: (current, next) => this.setState({ currentSlide: next }),
        };
        const selectedCandidates = this.state.third ? euStrany[this.state.third] : []
        return(
            <Fragment>
                <AbsoluteTitle>{this.state.currentSlide + 1}<StyledSpan> / 7</StyledSpan></AbsoluteTitle>
                <iframe
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{ display: 'none' }}
                    onLoad={() => { if (this.state.submitted) this.setState({loading: false}) }}
                />
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSdlxbtPC-7t6evLRu26fm9PwEsMJesib72eJgmUXG4nlEJ9Hw/formResponse"
                    method="post"
                    target="hidden_iframe"
                    onSubmit={() => this.setState({submitted: true, loading: true})}
                >
                    <input hidden name="entry.1818673664" value={this.state.first} onChange={() => null} />
                    <input hidden name="entry.1325270118" value={this.state.second} onChange={() => null} />
                    <input hidden name="entry.1839361473" value={this.state.third} onChange={() => null} />
                    <input hidden name="entry.1056926404" value={this.state.fourthFirst} onChange={() => null} />
                    <input hidden name="entry.1940824696" value={this.state.fourthSecond} onChange={() => null} />
                    <input hidden name="entry.958556041" value={this.state.fifth} onChange={() => null} />
                    <input hidden name="entry.30835927" value={this.state.sixth} onChange={() => null} />
                    <input hidden name="entry.8189518" value={this.state.seventh} onChange={() => null} />
                    <Column fill>
                        <Slider ref={node => { this.slider = node }} {...settings}>
                            <Question
                                height={this.state.height}
                                title="Akú stranu ste volili v parlamentných voľbách 2016 ?"
                                middlePart={
                                    <Select onChange={event => this.setState({first: event.target.value})} items={strany} />
                                }
                                bottomPart={
                                    <Button disabled={!this.state.first} onClick={() => this.slider.slickNext()} />
                                }
                            />
                            <Question
                                height={this.state.height}
                                title="Zúčastnite sa volieb do európskeho parlamentu ?"
                                middlePart={
                                    <CheckList
                                        onChange={value => this.setState({second: value})}
                                        selected={this.state.second}
                                        items={['Áno', 'Ešte neviem', 'Nie']}
                                    />
                                }
                                bottomPart={
                                    <Fragment>
                                        <Button disabled={!this.state.second} onClick={() => this.slider.slickNext()} />
                                        <Return onClick={() => this.slider.slickPrev()}>
                                            Návrat na predchádzajúcu otázku
                                        </Return>
                                    </Fragment>
                                }
                            />
                            <Question
                                height={this.state.height}
                                title="Aku stranu budete voliť ?"
                                middlePart={
                                    <Select
                                        onChange={event => this.setState({third: event.target.value})}
                                        items={Object.keys(euStrany)}
                                    />
                                }
                                bottomPart={
                                    <Fragment>
                                        <Button disabled={!this.state.third} onClick={() => this.slider.slickNext()} />
                                        <Return onClick={() => this.slider.slickPrev()}>
                                            Návrat na predchádzajúcu otázku
                                        </Return>
                                    </Fragment>
                                }
                            />
                            <Question
                                height={this.state.height}
                                title="Ktorých dvoch kandidátov budete krúžkovať ?"
                                middlePart={<SmallCheckList
                                    numbers
                                    onChange={value => {
                                        if (selectedCandidates.length === 1) {
                                            this.setState({fourthFirst: value})
                                            return
                                        }
                                        if (this.state.fourthLastChanged === 2) {
                                            if (this.state.fourthSecond === value) return
                                            this.setState({fourthFirst: value, fourthLastChanged: 1})
                                            return
                                        }
                                        if (this.state.fourthLastChanged === 1) {
                                            if (this.state.fourthFirst === value) return
                                            this.setState({fourthSecond: value, fourthLastChanged: 2})
                                            return
                                        }
                                    }}
                                    items={selectedCandidates}
                                    selected={[this.state.fourthFirst, this.state.fourthSecond]}
                                />}
                                bottomPart={
                                    <Fragment>
                                        <Button
                                            disabled={selectedCandidates.length === 1
                                                ? (!this.state.fourthFirst)
                                                : (!this.state.fourthFirst || !this.state.fourthSecond)}
                                            onClick={() => this.slider.slickNext()}
                                        />
                                        <Return onClick={() => this.slider.slickPrev()}>
                                            Návrat na predchádzajúcu otázku
                                        </Return>
                                    </Fragment>
                                }
                            />
                            <Question
                                height={this.state.height}
                                title="V ktorom okrese bývate ?"
                                middlePart={<Select
                                    onChange={event => this.setState({fifth: event.target.value})}
                                    items={okresy}
                                />}
                                bottomPart={
                                    <Fragment>
                                        <Button disabled={!this.state.fifth} onClick={() => this.slider.slickNext()} />
                                        <Return onClick={() => this.slider.slickPrev()}>
                                            Návrat na predchádzajúcu otázku
                                        </Return>
                                    </Fragment>
                                }
                            />
                            <Question
                                height={this.state.height}
                                title="Aké je vaše pohlavie ?"
                                middlePart={
                                    <CheckList
                                        onChange={value => this.setState({sixth: value})}
                                        selected={this.state.sixth}
                                        items={['Muž', 'Žena']}
                                    />
                                }
                                bottomPart={
                                    <Fragment>
                                        <Button disabled={!this.state.sixth} onClick={() => this.slider.slickNext()} />
                                        <Return onClick={() => this.slider.slickPrev()}>
                                            Návrat na predchádzajúcu otázku
                                        </Return>
                                    </Fragment>
                                }
                            />
                            <Question
                                height={this.state.height}
                                title={
                                    (!this.state.submitted || this.state.loading)
                                        ? 'Aké je vaše najvyššie dosiahnuté vzdelanie ?'
                                        : 'Vaša odpoveď bola zaznamenaná. Ďakujeme.'}
                                middlePart={(!this.state.submitted || this.state.loading) && <SmallCheckList
                                    onChange={value => this.setState({seventh: value})}
                                    items={[
                                        'neúplné základné',
                                        'základné',
                                        'vyučenie bez maturity',
                                        'stredné bez maturity',
                                        'vyučenie s maturitou',
                                        'stredné odborné s maturitou',
                                        'stredné všeobecné s maturitou',
                                        'nedokončené vysokoškolské',
                                        'ukončené vysokoškolské',
                                    ]}
                                    selected={[this.state.seventh]}
                                />}
                                bottomPart={(!this.state.submitted || this.state.loading) &&
                                    <Fragment>
                                        <Button
                                            loading={this.state.loading}
                                            disabled={!this.state.seventh}
                                            onClick={() => this.slider.slickNext()}
                                            last
                                        />
                                        <Return onClick={() => this.slider.slickPrev()}>
                                            Návrat na predchádzajúcu otázku
                                        </Return>
                                    </Fragment>
                                }
                            />
                        </Slider>
                    </Column>
                </form>
                <Bar>
                    <Fill width={(this.state.currentSlide + 1) / 7}>
                        {(this.state.currentSlide !== 6) && <ToolTip>{this.state.currentSlide + 1} / 7</ToolTip>}
                    </Fill>
                </Bar>
            </Fragment>
        )
    }
}

export default Form
