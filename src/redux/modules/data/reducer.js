import {
  GET_FACEBOOK_DATA_SUCCESS,
  SET_ANIM_VALUE,
  SET_CATEGORY,
  SET_CURRENT_FEEDS,
  SET_EXPLAINER_IN_FOCUS,
  SET_NOTIFICATION_IN_FOCUS,
  SET_QUIZ_IN_FOCUS,
  SET_QUIZ_RESULT,
  SET_RESOURCE_IN_FOCUS,
  SET_SINGLE_BYTE,
  SET_WEB_VIEW,
} from './actions';

export const DEFAULT = {};

export default function data(state = DEFAULT, action = {}) {
  const {type, payload} = action;

  switch (type) {
    case GET_FACEBOOK_DATA_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }

    case SET_WEB_VIEW: {
      return {
        ...state,
        webView: payload,
      };
    }

    case SET_EXPLAINER_IN_FOCUS: {
      return {
        ...state,
        explainerInFocus: payload,
      };
    }

    case SET_RESOURCE_IN_FOCUS: {
      return {
        ...state,
        resourceInFocus: payload,
      };
    }

    case SET_SINGLE_BYTE: {
      return {
        ...state,
        singleByteInFocus: payload,
      };
    }
    case SET_ANIM_VALUE: {
      return {
        ...state,
        animValue: payload,
      };
    }
    case SET_CURRENT_FEEDS: {
      return {
        ...state,
        currentFeeds: payload,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        currentCategory: payload,
      };
    }

    case SET_NOTIFICATION_IN_FOCUS: {
      return {
        ...state,
        notificationInFocus: payload,
      };
    }

    case SET_QUIZ_IN_FOCUS: {
      return {
        ...state,
        quizInFocus: payload,
      };
    }

    case SET_QUIZ_RESULT: {
      return {
        ...state,
        quizResults: payload,
      };
    }

    default:
      return state;
  }
}
