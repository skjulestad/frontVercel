import {CATCH_ALL, ComponentRegistry} from '@enonic/nextjs-adapter';
import PropsView from '@enonic/nextjs-adapter/views/PropsView';
import {commonQuery, commonVariables} from './queries/common';

import "@enonic/nextjs-adapter/baseMappings";

import MainPage from './pages/Main';
import Heading from './parts/Heading';
import getPerson from './queries/getPerson';
import {APP_NAME} from '@enonic/nextjs-adapter';
import Person from './views/Person';

import FactBox from './macros/FactBox';

import getPersonWithBio from './queries/getPersonWithBio';
import PersonWithBio from './views/PersonWithBio';

import TwoColumnLayout from './layouts/TwoColumnLayout';
import ChildList, {childListProcessor, getChildList} from './parts/ChildList';
import MovieDetails, {getMovie} from './parts/MovieDetails';

// You can set common query for all views here
ComponentRegistry.setCommonQuery([commonQuery, commonVariables]);

// Content type mappings
ComponentRegistry.addMacro(`${APP_NAME}:factbox`, {
    view: FactBox,
    configQuery: '{ header }'
});

ComponentRegistry.addContentType(`${APP_NAME}:person`, {
    query: getPersonWithBio,
    view: PersonWithBio
});




// Page mappings
ComponentRegistry.addPage(`${APP_NAME}:main`, {
    view: MainPage
});


// Layout mappings
ComponentRegistry.addLayout(`${APP_NAME}:2-column`, {
    view: TwoColumnLayout
})


// Part mappings
ComponentRegistry.addPart(`${APP_NAME}:child-list`, {
    query: getChildList,
    processor: childListProcessor,
    view: ChildList
});

ComponentRegistry.addPart(`${APP_NAME}:heading`, {
    view: Heading
});

ComponentRegistry.addPart(`${APP_NAME}:movie-details`, {
    query: getMovie,
    view: MovieDetails
});

// Debug
/*
// Debug
ComponentRegistry.addContentType(CATCH_ALL, {
    view: PropsView
});
*/
