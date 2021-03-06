import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import OffersList from './offers-list';
import {BrowserRouter} from 'react-router-dom';
import {CardTypes} from '../../helpers/constants';

import mockOffers from '../../test-data/offers';
import Offer from '../../interfaces/offer';
import mockStore from '../../test-data/mock-store';

const OFFERS: Offer[] = mockOffers;
const CARD_TYPE: string = CardTypes.CITIES;

it(`OffersList renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <OffersList
              offers={OFFERS}
              cardType={CARD_TYPE} />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
