import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemon } from "../store/features/pokemon/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { selectPokemon } from "../store/features/pokemon";

const ContainerStyledComponent = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 15px;
`;

const ButtonStyledComponent = styled.button`
    padding: 6px 15px;
    border: none;
    background-color: #FFFFFF;
    border: solid 1.5px;
    border-radius: 16px;
    cursor: pointer;
`;

const PageNumberStyledComponent = styled.span`
  font-size: 18px;
  width: 70px;
  text-align: center;
`;

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [settings, setSettings] = useState({
    offset: 0,
    limit: 10,
  });

  const { previous, next, isLoading } = useSelector(selectPokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(settings.offset));
  }, [dispatch, settings.offset]);

  const prevPage = () => {
    const setURL = new URL(previous);
    const urlParamsPrev = new URLSearchParams(setURL.search);
    const offsetPrev = urlParamsPrev.get("offset") || 0;

    setSettings((state) => ({
      ...state,
      offset: offsetPrev,
    }));
    setPageNumber(offsetPrev / 10 + 1);
  };

  const nextPage = () => {
    const setURL = new URL(next);
    const urlParamsNext = new URLSearchParams(setURL.search);
    const offsetNext = urlParamsNext.get("offset") || 0;

    setSettings((state) => ({
      ...state,
      offset: offsetNext,
    }));

    setPageNumber(offsetNext / 10 + 1);
  };

  return (
    <ContainerStyledComponent>
      <ButtonStyledComponent
        disabled={!previous || isLoading}
        onClick={prevPage}
      >
        PREV
      </ButtonStyledComponent>
      <PageNumberStyledComponent>PAGE {pageNumber}</PageNumberStyledComponent>
      <ButtonStyledComponent disabled={!next || isLoading} onClick={nextPage}>
        NEXT
      </ButtonStyledComponent>
    </ContainerStyledComponent>
  );
};

export default Pagination;
