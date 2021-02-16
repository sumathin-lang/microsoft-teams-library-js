import React from "react";
import "./App.css";
import {core, appInitialization, authentication, tasks, teamsCore, settings, media, conversations, calendar, runtime, RuntimeCapabilities} from "@microsoft/teamsjs-app-sdk";
import BoxAndButton from "./components/BoxAndButton";
import CheckboxAndButton from "./components/CheckboxAndButton";

core.initialize();
appInitialization.notifyAppLoaded();

const App = () => {
  // **************************  TODO: FIX THE STATE NAMES ******************************
  const [context, setContext] = React.useState("");
  const [auth, setAuth] = React.useState("");
  const [executeDeepLink, setExecuteDeepLink] = React.useState("");
  const [getSettings, setGetSettings] = React.useState("");
  const [registerOnSaveHandler, setRegisterOnSaveHandler] = React.useState("");
  const [setSettings, setSetSettings] = React.useState("");
  const [setValidityState, setSetValidityState] = React.useState("");
  const [registerOnRemoveHandler, setRegisterOnRemoveHandler] = React.useState("");
  const [shareDeepLink, setShareDeepLink] = React.useState("");
  const [authenticationNotifyFailure, setAuthenticationNotifyFailure] = React.useState("");
  const [authenticationNotifySucess, setAuthenticationNotifySucess] = React.useState("");
  const [authenticationAuthenticate, setAuthenticationAuthenticate] = React.useState("");
  const [registerOnThemeChangeHandler, setRegisterOnThemeChangeHandler] = React.useState("");
  const [registerChangeSettingsHandler, setRegisterChangeSettingsHandler] = React.useState("");
  const [registerAppButtonClickHandler, setRegisterAppButtonClickHandler] = React.useState("");
  const [registerAppButtonHoverEnterHandler, setRegisterAppButtonHoverEnterHandler] = React.useState("");
  const [registerAppButtonHoverLeaveHandler, setRegisterAppButtonHoverLeaveHandler] = React.useState("");
  const [getTabInstance, setTabInstance] = React.useState("");
  const [getMRUTabInstance, setMRUTabInstance] = React.useState("");
  const [navigateCrossDomain, setNavigateCrossDomain] = React.useState("");
  const [focus, setReturnFocus] = React.useState("");
  const [getCaptureImage, setCaptureImage] = React.useState("");
  const [getSelectMedia, setSelectMedia] = React.useState("");
  const [getGetMedia, setGetMedia] = React.useState("");
  const [getViewImagesWithId, setViewImagesWithId] = React.useState("");
  const [getViewImagesWithUrls, setViewImagesWithUrls] = React.useState("");
  const [getGetLocation, setGetLocation] = React.useState("");
  const [getShowLocation, setShowLocation] = React.useState("");
  const [getMediaScanBarCode, setMediaScanBarCode] = React.useState("");
  const [startTask, setStartTask] = React.useState("");
  const [updateTask, setUpdateTask] = React.useState("");
  const [submitTask, setSubmitTask] = React.useState("");
  const [showNotification, setShowNotification] = React.useState("");
  const [openFilePreview, setOpenFilePreview] = React.useState("");
  const [getChatMembers, setGetChatMembers] = React.useState("");
  const [getUserJoinedTeams, setGetUserJoinedTeams] = React.useState("");
  const [registerBeforeUnload, setRegisterBeforeUnload] = React.useState("");
  const [addStates, setAddStates] = React.useState("");
  const [totalStates, setTotalStates] = React.useState(0);
  const [registerBackButtonHandler, setRegisterBackButtonHandler] = React.useState("");
  const [openConversation, setOpenConversation] = React.useState("");
  const [closeConversation, setCloseConversation] = React.useState("");
  const [calendarCapabilityCheck, setCalendarCapabilityCheck] = React.useState("");
  const [openCalendarItem, setOpenCalendarItem] = React.useState("");
  const [composeMeeting, setComposeMeeting] = React.useState("");
  
  const returnContext = () => {
    let textResult = "No Context";
    setContext(textResult);
    core.getContext((res: any) => {
      textResult = JSON.stringify(res);
      setContext(textResult);
    });
  };

  const returnAuth = (authParams: any) => {
    let textResult = "No Auth";
    authParams = JSON.parse(authParams);
    try {
      authParams.successCallback = (token: string) => {
        setAuth("Success: " + token);
      };
      authParams.failureCallback = (reason: string) => {
        setAuth("Failure: " + reason);
      };
    } catch (e) {
      setAuth(textResult);
    }
    authentication.getAuthToken(authParams);
  };

  const returnExecuteDeepLink = (deepLink: string) => {
    const onComplete = (status: boolean, reason?: string) => {
      if (!status) {
        if (reason) setExecuteDeepLink(reason);
      } else {
        setExecuteDeepLink("Completed");
      }
    };
    core.executeDeepLink(deepLink, onComplete);
  };

  const returnShareDeepLink = (deepLinkParams: any) => {
    deepLinkParams = JSON.parse(deepLinkParams);
    core.shareDeepLink(deepLinkParams);
    // TODO: return a feedback for users 
  };

  const returnAuthenticationNotifyFailure = (reason: string) => {
    authentication.notifyFailure(reason);
    // TODO: return a feedback for users 
  };

  const returnAuthenticationNotifySucess = (result: string) => {
    authentication.notifySuccess(result);
    // TODO: return a feedback for users 
  };

  const returnAuthenticationAuthenticate = (authenticateParameters: any) => {
    let textResult = "";
    authenticateParameters = JSON.parse(authenticateParameters);
    try {
      authenticateParameters.successCallback = (token: string) => {
        setAuth("Success: " + token);
      };
      authenticateParameters.failureCallback = (reason: string) => {
        setAuth("Failure: " + reason);
      };
    } catch (e) {
      setAuthenticationAuthenticate(textResult);
    }
    authentication.authenticate(authenticateParameters);
  };

  const returnRegisterOnThemeChangeHandler = () => {
    core.registerOnThemeChangeHandler((theme: string) => {
      setRegisterOnThemeChangeHandler(theme);
    });
  };

  const returnRegisterChangeSettingsHandler = () => {
    setRegisterChangeSettingsHandler("App SDK call registerChangeSettingsHandler() was called, but there was no action from the Hub SDK.");
    teamsCore.registerChangeSettingsHandler(() => {
      setRegisterChangeSettingsHandler("successfully called");
    });
  };

  const returnRegisterAppButtonClickHandler = () => {
    setRegisterAppButtonClickHandler("App SDK call registerAppButtonClickHandler() was called, but there was no action from the Hub SDK.");
    teamsCore.registerAppButtonClickHandler(() => {
      setRegisterAppButtonClickHandler("successfully called");
    });
  };

  const returnRegisterAppButtonHoverEnterHandler = () => {
    setRegisterAppButtonHoverEnterHandler("App SDK call registerAppButtonHoverEnterHandler() was called, but there was no action from the Hub SDK.");
    teamsCore.registerAppButtonHoverEnterHandler(() => {
      setRegisterAppButtonHoverEnterHandler("successfully called");
    });
  };

  const returnRegisterAppButtonHoverLeaveHandler = () => {
    setRegisterAppButtonHoverLeaveHandler("App SDK call registerAppButtonHoverLeaveHandler() was called, but there was no action from the Hub SDK.");
    teamsCore.registerAppButtonHoverLeaveHandler(() => {
      setRegisterAppButtonHoverLeaveHandler("successfully called");
    });
  };

  const returnSettings = () => {
    setGetSettings("App SDK call settings.getSettings() was called, but there was no action from the Hub SDK.");
    const onComplete = (instanceSettings: any) => {
      setGetSettings(instanceSettings);
    }
    settings.getSettings(onComplete);
  };

  const returnRegisterOnSaveHandler = () => {
    settings.registerOnSaveHandler((saveEvent: any) => {
      setRegisterOnSaveHandler("Save event received.");
      saveEvent.notifySuccess();
    });
  };

  const returnSetSettings = (instanceSettings: any) => {
    setSetSettings("App SDK call settings.setSettings() was called, but there was no action from the Hub SDK.");
    const onComplete = (output: any) => {
      setSetSettings(output);
    }
    settings.setSettings(instanceSettings, onComplete);
  };

  const returnSetValidityState = (validityState: string) => {
    settings.setValidityState(validityState == 'true');
    setSetValidityState("Set validity state to " + (validityState == 'true'));
  };

  const returnRegisterOnRemoveHandler = () => {
    setRegisterOnRemoveHandler("App SDK call registerOnRemoveHandler() was called, but there was no action from the Hub SDK.");
    settings.registerOnRemoveHandler((removeEvent: any) => {
      setRegisterOnRemoveHandler("Remove handler called.")
    })
  }

  const returnGetTabInstances = () => {
    let tabInfoRes = "No Tab Info";
    teamsCore.getTabInstances((tabInfo: any) => {
      tabInfoRes = JSON.stringify(tabInfo);
      setTabInstance(tabInfoRes);
    });
  };

  const returnGetMRUTabInstances = () => {
    let tabInfoRes = "No MRU Tab Info";
    teamsCore.getMruTabInstances((tabInfo: any) => {
      tabInfoRes = JSON.stringify(tabInfo);
      setMRUTabInstance(tabInfoRes);
    });
  };

  const returnNavigateCrossDomain = (url: string) => {
    let inputUrl = "";
    inputUrl = JSON.stringify(url);
    const onComplete = (status: boolean, reason?: string) => {
      if (!status) {
        if (reason) setNavigateCrossDomain(reason);
      } else {
        setNavigateCrossDomain("Completed");
      }
    };
    teamsjs.navigateCrossDomain(inputUrl, onComplete);
  };

  const returnFocus = (navigateForward: any) => {
    setReturnFocus("Current navigateForward state is " + navigateForward);
    teamsjs.returnFocus(navigateForward);
  };

  const returnCaptureImage = () => {
    setCaptureImage("App SDK call captureImage() was called");
    const callback = (error: teamsjs.SdkError, files: media.File[]) => {
      if (error) {
        setCaptureImage(error.errorCode.toString + " " + error.message);
        return;
      }
      const file: media.File = files[0];
      let content: string = "";
      let len = 20;
      if (file.content) {
        len = Math.min(len, file.content.length);
        content = file.content.substr(0, len);
      }
      let output = "format: " + file.format + ", size: " + file.size + ", mimeType: " + file.mimeType + ", content: " + content;
      setCaptureImage(output);
    };
    media.captureImage(callback);
  };

  const returnSelectMedia = (mediaInputs: any) => {
    setSelectMedia("App SDK call selectMedia() was called");
    const callback = (error: teamsjs.SdkError, medias: media.Media[]) => {
      if (error) {
        setSelectMedia(error.errorCode.toString + " " + error.message);
        return;
      }
      let message = "";
      for (let i = 0; i < medias.length; i++) {
        const media: media.Media = medias[i];
        let preview: string = "";
        let len = 20;
        if (media.preview) {
          len = Math.min(len, media.preview.length);
          preview = media.preview.substr(0, len);
        }
        message += "[format: " + media.format + ", size: " + media.size
          + ", mimeType: " + media.mimeType + ", content: " + media.content
          + ", preview: " + preview + "],"
        setSelectMedia(message);
      }
    };
    media.selectMedia(mediaInputs, callback);
  };

  const returnGetMedia = (inputParams: any) => {
    setGetMedia("App SDK call getMedia() was called");
    media.selectMedia(inputParams, (error: teamsjs.SdkError, medias: media.Media[]) => {
      if (error) {
        setGetMedia(error.errorCode.toString + " " + error.message);
        return;
      }
      const media: media.Media = medias[0] as media.Media;
      media.getMedia((gmErr: teamsjs.SdkError, blob: Blob) => {
        if (gmErr) {
          setGetMedia(gmErr.errorCode.toString + " " + gmErr.message);
          return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          if (reader.result) {
            setGetMedia("Received Blob");
          }
        }
      });
    });
  };

  const returnViewImagesWithId = (selectMediaInputs: any) => {
    setViewImagesWithId("App SDK call viewImagesWithId() was called");
    media.selectMedia(selectMediaInputs, (err: teamsjs.SdkError, medias: media.Media[]) => {
      if (err) {
        setViewImagesWithId(err.errorCode.toString + " " + err.message);
        return;
      }
      const urlList: media.ImageUri[] = [];
      for (let i = 0; i < medias.length; i++) {
        const media = medias[i];
        urlList.push({
          value: media.content,
          type: 1 //teamsjs.ImageUriType.ID
        } as media.ImageUri)
      }
      media.viewImages(urlList, (gmErr?: teamsjs.SdkError) => {
        if (gmErr) {
          setViewImagesWithId(gmErr.errorCode.toString + " " + gmErr.message);
          return;
        }
        setViewImagesWithId("Success");
      });
    });
  };

  const returnViewImagesWithUrls = (imageUrls: any) => {
    setViewImagesWithUrls("App SDK call viewImagesWithUrls() was called");
    const urlList: media.ImageUri[] = [];
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      urlList.push({
        value: imageUrl,
        type: 2 //teamsjs.ImageUriType.URL
      } as media.ImageUri)
    }
    media.viewImages(urlList, (err?: teamsjs.SdkError) => {
      if (err) {
        setViewImagesWithUrls(err.errorCode.toString + " " + err.message);
        return;
      }
      setViewImagesWithUrls("Success");
    });
  };

  const returnGetLocation = (locationProps: any) => {
    setGetLocation("App SDK call getLocation() was called");
    teamsjs.location.getLocation(locationProps, (err: teamsjs.SdkError, location: teamsjs.location.Location) => {
      if (err) {
        setGetLocation(err.errorCode.toString + " " + err.message);
        return;
      }
      setGetLocation(JSON.stringify(location));
    });
  };

  const returnShowLocation = (location: any) => {
    setShowLocation("App SDK call showLocation() was called");
    teamsjs.location.showLocation(location, (err: teamsjs.SdkError, result: boolean) => {
      if (err) {
        setShowLocation(err.errorCode.toString + " " + err.message);
        return;
      }
      setShowLocation("result: " + result);
    });
  };

  const returnMediaScanBarCode = (scanBarCodeConfig: any) => {
    setMediaScanBarCode("App SDK call mediaScanBarCode() was called");
    media.scanBarCode((err: teamsjs.SdkError, result: string) => {
      if (err) {
        setMediaScanBarCode(err.errorCode.toString + " " + err.message);
        return;
      }
      setMediaScanBarCode("result: " + result);
    }, scanBarCodeConfig);
  };

  const returnStartTask = (taskInfo: any) => {
    taskInfo = JSON.parse(taskInfo);
    setStartTask("App SDK call startTask was called");
    const onComplete = (err: string, result: string) => {
      setStartTask("Error: " + err + "\nResult: " + result);
    };
    tasks.startTask(taskInfo, onComplete);
  };

  const returnUpdateTask = (taskInfo: any) => {
    taskInfo = JSON.parse(taskInfo);
    setUpdateTask("App SDK call updateTask was called");
    tasks.updateTask(taskInfo);
  }

  const returnSubmitTask = (result: any) => {
    result = JSON.parse(result);
    setSubmitTask("App SDK call submitTask was called");
    tasks.submitTask(result);
  };

  const returnShowNotification = (showNotificationParams: any) => {
    showNotificationParams = JSON.parse(showNotificationParams);
    setShowNotification("App SDK call showNotification was called");
    teamsjs.showNotification(showNotificationParams);
  };

  const returnOpenFilePreview = (filePreviewParams: any) => {
    filePreviewParams = JSON.parse(filePreviewParams);
    setOpenFilePreview("App SDK call openFilePreview was called");
    teamsjs.openFilePreview(filePreviewParams);
  }

  const returnGetChatMembers = () => {
    const onComplete = (chatMembersInformation: teamsjs.ChatMembersInformation) => {
      setGetChatMembers(JSON.stringify(chatMembersInformation));
    };
    teamsjs.getChatMembers(onComplete);
  };

  const returnGetUserJoinedTeams = (teamInstanceParams: any) => {
    const onComplete = (userJoinedTeamsInfo: any) => {
      setGetUserJoinedTeams(JSON.stringify(userJoinedTeamsInfo));
    };
    teamsjs.getUserJoinedTeams(onComplete, teamInstanceParams);
  };

  const returnRegisterBeforeUnload = (readyToUnloadDelay: any) => {
    setRegisterBeforeUnload("App SDK call registerBeforeUnload() was called");
    const delay = Number(readyToUnloadDelay);
    teamsCore.registerBeforeUnloadHandler(function (readyToUnload) {
          (window as any).readyToUnload = readyToUnload;
          setTimeout(() => {
            readyToUnload();
          }, delay);
          alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
          return true;
        });
  };

  const returnAddStates = () => {
    let newNumStates = totalStates + 1;
    setTotalStates(newNumStates);
    window.history.pushState({ some: 'state', id: newNumStates }, "tab state" + newNumStates, '/testTab');
    setAddStates("total States: " + newNumStates);
    window.addEventListener('popstate', function (event) {
      if (event.state && event.state.id) {
        setAddStates("onpopstate: back button clicked. total remaining state: " + event.state.id);
      }
    }, false);
  };

  const returnRegisterBackButtonHandler = () => {
    setRegisterBackButtonHandler("App SDK call registerBackButtonHandler() was called");
    setRegisterBackButtonHandler("total States: " + totalStates);
    teamsCore.registerBackButtonHandler(function () {
      if (totalStates > 0) {
        let newNumStates = totalStates - 1;
        setTotalStates(newNumStates);
        setRegisterBackButtonHandler("back button clicked. total remaining state: " + newNumStates);
        return true;
      }
      return false;
    });
  };

  const returnConversationsOpenConversation = (openConversationRequest: any) => {
    setOpenConversation("App SDK call conversations.openConversation() was called");
    conversations.openConversation(openConversationRequest);
    openConversationRequest.onStartConversation = (conversationResponse) => {
      setOpenConversation("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
    };
    openConversationRequest.onCloseConversation = (conversationResponse) => {
      setOpenConversation("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
    };
    try {
      conversations.openConversation(openConversationRequest);
    } catch (e) {
      setOpenConversation("Error" + e);
    }
  };

  const returnConversationsCloseConversation = () => {
    setCloseConversation("Conversation Closed!");
    conversations.closeConversation();
  };
  const returnComposeMeeting = (meetingParams: any) => {
    const onComplete = (status: boolean, reason?: string) => {
      if (!status) {
        if (reason) setComposeMeeting(reason);
      } else {
        setComposeMeeting('Completed');
      }
    };
    calendar.composeMeeting(JSON.parse(meetingParams), onComplete);
  };
  const returnOpenCalendarItem = (calendarParams: any) => {
    const onComplete = (status: boolean, reason?: string) => {
      if (!status) {
        if (reason) setOpenCalendarItem(reason);
      } else {
        setOpenCalendarItem('Completed');
      }
    };
    calendar.openCalendarItem(JSON.parse(calendarParams), onComplete);
  };

  const returnCheckCalendarCapability = () => {
    if (runtime.isSupported(RuntimeCapabilities.Calendar)) {
      setCalendarCapabilityCheck('Calendar module is supported');
    } else {
      setCalendarCapabilityCheck('Calendar module is not supported');
    }
  };

  return (
    <>
      <BoxAndButton
        handleClick={returnContext}
        output={context}
        hasInput={false}
        title="Get Context"
        name="getContext"
      />
      <BoxAndButton
        handleClick={returnAuth}
        output={auth}
        hasInput={true}
        title="Get Auth Token"
        name="getAuthToken"
      />
      <BoxAndButton
        handleClick={returnExecuteDeepLink}
        output={executeDeepLink}
        hasInput={true}
        title="Execute Deep Link"
        name="executeDeepLink"
      />
      <BoxAndButton
        handleClick={returnShareDeepLink}
        output={shareDeepLink}
        hasInput={true}
        title="Share Deep Link"
        name="ShareDeepLink"
      />
      <BoxAndButton
        handleClick={returnAuthenticationNotifyFailure}
        output={authenticationNotifyFailure}
        hasInput={true}
        title="authentication.notifyFailure"
        name="authentication.notifyFailure"
      />
      <BoxAndButton
        handleClick={returnAuthenticationNotifySucess}
        output={authenticationNotifySucess}
        hasInput={true}
        title="authentication.notifySucess"
        name="authentication.notifySucess"
      />
      <BoxAndButton
        handleClick={returnAuthenticationAuthenticate}
        output={authenticationAuthenticate}
        hasInput={true}
        title="authentication.authenticate"
        name="authentication.authenticate"
      />
      <BoxAndButton
        handleClick={returnRegisterOnThemeChangeHandler}
        output={registerOnThemeChangeHandler}
        hasInput={false}
        title="Register On Theme Change Handler"
        name="registerOnThemeChangeHandler"
      />
      <BoxAndButton
        handleClick={returnRegisterChangeSettingsHandler}
        output={registerChangeSettingsHandler}
        hasInput={false}
        title="Register Change Settings Handler"
        name="registerChangeSettingsHandler"
      />
      <BoxAndButton
        handleClick={returnRegisterAppButtonClickHandler}
        output={registerAppButtonClickHandler}
        hasInput={false}
        title="Register App Button Click Handler"
        name="registerAppButtonClickHandler"
      />
      <BoxAndButton
        handleClick={returnRegisterAppButtonHoverEnterHandler}
        output={registerAppButtonHoverEnterHandler}
        hasInput={false}
        title="Register App Button Hover Enter Handler"
        name="registerAppButtonHoverEnterHandler"
      />
      <BoxAndButton
        handleClick={returnRegisterAppButtonHoverLeaveHandler}
        output={registerAppButtonHoverLeaveHandler}
        hasInput={false}
        title="Register App Button Hover Leave Handler"
        name="registerAppButtonHoverLeaveHandler"
      />
      <BoxAndButton
        handleClick={returnSettings}
        output={getSettings}
        hasInput={false}
        title="Get Settings"
        name="settings.getSettings"
      />
      <BoxAndButton
        handleClick={returnRegisterOnSaveHandler}
        output={registerOnSaveHandler}
        hasInput={false}
        title="Set RegisterOnSaveHandler"
        name="settings.registerOnSaveHandler"
      />
      <BoxAndButton
        handleClick={returnSetSettings}
        output={setSettings}
        hasInput={true}
        title="Set Settings"
        name="settings.setSettings"
      />
      <BoxAndButton
        handleClick={returnSetValidityState}
        output={setValidityState}
        hasInput={true}
        title="Set Validity State"
        name="settings.setValidityState"
      />
      <BoxAndButton
        handleClick={returnRegisterOnRemoveHandler}
        output={registerOnRemoveHandler}
        hasInput={false}
        title="Register On Remove Handler"
        name="settings.registerOnRemoveHandler"
      />
      <BoxAndButton
        handleClick={returnGetTabInstances}
        output={getTabInstance}
        hasInput={false}
        title="Get Tab Instance"
        name="getTabInstance"
      />
      <BoxAndButton
        handleClick={returnGetMRUTabInstances}
        output={getMRUTabInstance}
        hasInput={false}
        title="Get MRU Tab Instance"
        name="getMRUTabInstance"
      />
      <BoxAndButton
        handleClick={returnNavigateCrossDomain}
        output={navigateCrossDomain}
        hasInput={true}
        title="Navigate Cross Domain"
        name="navigateCrossDomain"
      />
      <CheckboxAndButton
        handleClick={returnFocus}
        output={focus}
        hasInput={false}
        title="Return Focus"
        name="returnFocus"
        hasTitle={true}
        checkBoxTitle="navigateForward:"
      />
      <BoxAndButton
        handleClick={returnCaptureImage}
        output={getCaptureImage}
        hasInput={false}
        title="Capture Image"
        name="CaptureImage"
      />
      <BoxAndButton
        handleClick={returnSelectMedia}
        output={getSelectMedia}
        hasInput={true}
        title="Select Media"
        name="selectMedia"
      />
      <BoxAndButton
        handleClick={returnGetMedia}
        output={getGetMedia}
        hasInput={true}
        title="Get Media"
        name="getMedia"
      />
      <BoxAndButton
        handleClick={returnViewImagesWithId}
        output={getViewImagesWithId}
        hasInput={true}
        title="View Images With Id"
        name="viewImagesWithId"
      />
      <BoxAndButton
        handleClick={returnViewImagesWithUrls}
        output={getViewImagesWithUrls}
        hasInput={true}
        title="View Images With Urls"
        name="viewImagesWithUrls"
      />
      <BoxAndButton
        handleClick={returnGetLocation}
        output={getGetLocation}
        hasInput={true}
        title="Get Location"
        name="getLocation"
      />
      <BoxAndButton
        handleClick={returnShowLocation}
        output={getShowLocation}
        hasInput={true}
        title="Show Location"
        name="showLocation"
      />
      <BoxAndButton
        handleClick={returnMediaScanBarCode}
        output={getMediaScanBarCode}
        hasInput={true}
        title="Media Scan Bar Code"
        name="mediaScanBarCode"
      />
      <BoxAndButton
        handleClick={returnStartTask}
        output={startTask}
        hasInput={true}
        title="Start Task"
        name="startTask"
      />
      <BoxAndButton
        handleClick={returnUpdateTask}
        output={updateTask}
        hasInput={true}
        title="Update Task"
        name="updateTask"
      />
      <BoxAndButton
        handleClick={returnSubmitTask}
        output={submitTask}
        hasInput={true}
        title="Submit Task"
        name="submitTask"
      />
      <BoxAndButton
        handleClick={returnShowNotification}
        output={showNotification}
        hasInput={true}
        title="Show Notification"
        name="showNotification"
      />
      <BoxAndButton
        handleClick={returnOpenFilePreview}
        output={openFilePreview}
        hasInput={true}
        title="Open File Preview"
        name="openFilePreview"
      />
      <BoxAndButton
        handleClick={returnGetChatMembers}
        output={getChatMembers}
        hasInput={false}
        title="Get Chat Members"
        name="getChatMembers"
      />
      <BoxAndButton
        handleClick={returnGetUserJoinedTeams}
        output={getUserJoinedTeams}
        hasInput={true}
        title="Get User Joined Teams"
        name="getUserJoinedTeams"
      />
      <BoxAndButton
        handleClick={returnRegisterBeforeUnload}
        output={registerBeforeUnload}
        hasInput={true}
        title="Register Before Unload"
        name="registerBeforeUnload"
     />
       <BoxAndButton
        handleClick={returnAddStates}
        output={addStates}
        hasInput={false}
        title="Add States"
        name="addStates"
      />
      <BoxAndButton
        handleClick={returnRegisterBackButtonHandler}
        output={registerBackButtonHandler}
        hasInput={false}
        title="Register Back Button Handler"
        name="registerBackButtonHandler"
      />
      <BoxAndButton
        handleClick={returnConversationsOpenConversation}
        output={openConversation}
        hasInput={true}
        title="openConversation"
        name="Open Conversation"
      />
      <BoxAndButton
        handleClick={returnConversationsCloseConversation}
        output={closeConversation}
        hasInput={false}
        title="closeConversation"
        name="Close Conversation"
      />
      <BoxAndButton
        handleClick={returnCheckCalendarCapability}
        output={calendarCapabilityCheck}
        hasInput={false}
        title="Check capability"
        name="checkCapability"
      />
      <BoxAndButton
        handleClick={returnOpenCalendarItem}
        output={openCalendarItem}
        hasInput={true}
        title="Open Calendar Item"
        name="openCalendarItem"
      />
      <BoxAndButton
        handleClick={returnComposeMeeting}
        output={composeMeeting}
        hasInput={true}
        title="Compose Meeting"
        name="composeMeeting"
      />
    </>
  );
};

export default App;
