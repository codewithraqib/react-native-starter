// @flow

import {createAction} from 'redux-actions';

export const GET_FACEBOOK_DATA = 'data/GET_FACEBOOK_DATA';
export const LOGIN_SCREEN = 'data/LOGIN_SCREEN';
export const GET_PROFILE = 'data/GET_PROFILE';
export const SET_WEB_VIEW = 'data/SET_WEB_VIEW';
export const GET_ALL_NEWS = 'data/GET_ALL_NEWS';
export const GET_EXPLAINERS = 'data/GET_EXPLAINERS';
export const SET_EXPLAINER_IN_FOCUS = 'data/SET_EXPLAINER_IN_FOCUS';
export const SET_RESOURCE_IN_FOCUS = 'data/SET_RESOURCE_IN_FOCUS';
export const GET_CATEGORIES = 'data/GET_CATEGORIES';
export const SET_SINGLE_BYTE = 'data/SET_SINGLE_BYTE';
export const SET_ANIM_VALUE = 'data/SET_ANIM_VALUE';
export const SET_CURRENT_FEEDS = 'data/SET_CURRENT_FEEDS';
export const SET_CATEGORY = 'data/SET_CATEGORY';
export const GET_SIDE_SCREEN_BANNERS = 'data/GET_SIDE_SCREEN_BANNERS';
export const GET_NOTIFICATIONS = 'data/GET_NOTIFICATIONS';
export const SET_NOTIFICATION_IN_FOCUS = 'data/SET_NOTIFICATION_IN_FOCUS';
export const SET_QUIZ_IN_FOCUS = 'data/SET_QUIZ_IN_FOCUS';
export const SET_QUIZ_RESULT = 'data/SET_QUIZ_RESULT';

export const fetchDataActionCreators = {
  getFacebookUserData: createAction(GET_FACEBOOK_DATA),
  loginUser: createAction(LOGIN_SCREEN),
  getProfile: createAction(GET_PROFILE),
  setWebView: createAction(SET_WEB_VIEW),
  getAllNews: createAction(GET_ALL_NEWS),
  getExplainers: createAction(GET_EXPLAINERS),
  setExplainerInFocus: createAction(SET_EXPLAINER_IN_FOCUS),
  setResourceInFocus: createAction(SET_RESOURCE_IN_FOCUS),
  getCategories: createAction(GET_CATEGORIES),
  setSingleByte: createAction(SET_SINGLE_BYTE),
  setAnimValue: createAction(SET_ANIM_VALUE),
  setCurrentFeeds: createAction(SET_CURRENT_FEEDS),
  setCategory: createAction(SET_CATEGORY),
  getSideScreenBanners: createAction(GET_SIDE_SCREEN_BANNERS),
  getNotifications: createAction(GET_NOTIFICATIONS),
  setNotificationInFocus: createAction(SET_NOTIFICATION_IN_FOCUS),
  setQuizInFocus: createAction(SET_QUIZ_IN_FOCUS),
  setQuizResults: createAction(SET_QUIZ_RESULT),
};
