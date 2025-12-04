// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateGoogleCalendarEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#enabled WorkflowTaskUpdateGoogleCalendarEvent#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#id WorkflowTaskUpdateGoogleCalendarEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#name WorkflowTaskUpdateGoogleCalendarEvent#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#position WorkflowTaskUpdateGoogleCalendarEvent#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#skip_on_failure WorkflowTaskUpdateGoogleCalendarEvent#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#workflow_id WorkflowTaskUpdateGoogleCalendarEvent#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#task_params WorkflowTaskUpdateGoogleCalendarEvent#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateGoogleCalendarEventTaskParams;
}
export interface WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#id WorkflowTaskUpdateGoogleCalendarEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#name WorkflowTaskUpdateGoogleCalendarEvent#name}
  */
  readonly name: string;
}

export function workflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsToTerraform(struct?: WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsToHclTerraform(struct?: WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsOutputReference {
    return new WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskUpdateGoogleCalendarEventTaskParams {
  /**
  * Days to adjust meeting by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#adjustment_days WorkflowTaskUpdateGoogleCalendarEvent#adjustment_days}
  */
  readonly adjustmentDays?: string;
  /**
  * Emails of attendees
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#attendees WorkflowTaskUpdateGoogleCalendarEvent#attendees}
  */
  readonly attendees?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#calendar_id WorkflowTaskUpdateGoogleCalendarEvent#calendar_id}
  */
  readonly calendarId?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#can_guests_invite_others WorkflowTaskUpdateGoogleCalendarEvent#can_guests_invite_others}
  */
  readonly canGuestsInviteOthers?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#can_guests_modify_event WorkflowTaskUpdateGoogleCalendarEvent#can_guests_modify_event}
  */
  readonly canGuestsModifyEvent?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#can_guests_see_other_guests WorkflowTaskUpdateGoogleCalendarEvent#can_guests_see_other_guests}
  */
  readonly canGuestsSeeOtherGuests?: boolean | cdktf.IResolvable;
  /**
  * Sets the video conference type attached to the meeting. Value must be one of `eventHangout`, `eventNamedHangout`, `hangoutsMeet`, `addOn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#conference_solution_key WorkflowTaskUpdateGoogleCalendarEvent#conference_solution_key}
  */
  readonly conferenceSolutionKey?: string;
  /**
  * The event description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#description WorkflowTaskUpdateGoogleCalendarEvent#description}
  */
  readonly description?: string;
  /**
  * The event ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#event_id WorkflowTaskUpdateGoogleCalendarEvent#event_id}
  */
  readonly eventId: string;
  /**
  * Meeting duration in format like '1 hour', '30 minutes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#meeting_duration WorkflowTaskUpdateGoogleCalendarEvent#meeting_duration}
  */
  readonly meetingDuration?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#post_to_incident_timeline WorkflowTaskUpdateGoogleCalendarEvent#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#replace_attendees WorkflowTaskUpdateGoogleCalendarEvent#replace_attendees}
  */
  readonly replaceAttendees?: boolean | cdktf.IResolvable;
  /**
  * Send an email to the attendees notifying them of the event. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#send_updates WorkflowTaskUpdateGoogleCalendarEvent#send_updates}
  */
  readonly sendUpdates?: boolean | cdktf.IResolvable;
  /**
  * The event summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#summary WorkflowTaskUpdateGoogleCalendarEvent#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#task_type WorkflowTaskUpdateGoogleCalendarEvent#task_type}
  */
  readonly taskType?: string;
  /**
  * Time of meeting in format HH:MM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#time_of_meeting WorkflowTaskUpdateGoogleCalendarEvent#time_of_meeting}
  */
  readonly timeOfMeeting?: string;
  /**
  * post_to_slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#post_to_slack_channels WorkflowTaskUpdateGoogleCalendarEvent#post_to_slack_channels}
  */
  readonly postToSlackChannels?: WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels[] | cdktf.IResolvable;
}

export function workflowTaskUpdateGoogleCalendarEventTaskParamsToTerraform(struct?: WorkflowTaskUpdateGoogleCalendarEventTaskParamsOutputReference | WorkflowTaskUpdateGoogleCalendarEventTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment_days: cdktf.stringToTerraform(struct!.adjustmentDays),
    attendees: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attendees),
    calendar_id: cdktf.stringToTerraform(struct!.calendarId),
    can_guests_invite_others: cdktf.booleanToTerraform(struct!.canGuestsInviteOthers),
    can_guests_modify_event: cdktf.booleanToTerraform(struct!.canGuestsModifyEvent),
    can_guests_see_other_guests: cdktf.booleanToTerraform(struct!.canGuestsSeeOtherGuests),
    conference_solution_key: cdktf.stringToTerraform(struct!.conferenceSolutionKey),
    description: cdktf.stringToTerraform(struct!.description),
    event_id: cdktf.stringToTerraform(struct!.eventId),
    meeting_duration: cdktf.stringToTerraform(struct!.meetingDuration),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    replace_attendees: cdktf.booleanToTerraform(struct!.replaceAttendees),
    send_updates: cdktf.booleanToTerraform(struct!.sendUpdates),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    time_of_meeting: cdktf.stringToTerraform(struct!.timeOfMeeting),
    post_to_slack_channels: cdktf.listMapper(workflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsToTerraform, true)(struct!.postToSlackChannels),
  }
}


export function workflowTaskUpdateGoogleCalendarEventTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateGoogleCalendarEventTaskParamsOutputReference | WorkflowTaskUpdateGoogleCalendarEventTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment_days: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attendees: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attendees),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    calendar_id: {
      value: cdktf.stringToHclTerraform(struct!.calendarId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_guests_invite_others: {
      value: cdktf.booleanToHclTerraform(struct!.canGuestsInviteOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_guests_modify_event: {
      value: cdktf.booleanToHclTerraform(struct!.canGuestsModifyEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_guests_see_other_guests: {
      value: cdktf.booleanToHclTerraform(struct!.canGuestsSeeOtherGuests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conference_solution_key: {
      value: cdktf.stringToHclTerraform(struct!.conferenceSolutionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_id: {
      value: cdktf.stringToHclTerraform(struct!.eventId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meeting_duration: {
      value: cdktf.stringToHclTerraform(struct!.meetingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_to_incident_timeline: {
      value: cdktf.booleanToHclTerraform(struct!.postToIncidentTimeline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_attendees: {
      value: cdktf.booleanToHclTerraform(struct!.replaceAttendees),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_updates: {
      value: cdktf.booleanToHclTerraform(struct!.sendUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_meeting: {
      value: cdktf.stringToHclTerraform(struct!.timeOfMeeting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_to_slack_channels: {
      value: cdktf.listMapperHcl(workflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsToHclTerraform, true)(struct!.postToSlackChannels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdateGoogleCalendarEventTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateGoogleCalendarEventTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustmentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentDays = this._adjustmentDays;
    }
    if (this._attendees !== undefined) {
      hasAnyValues = true;
      internalValueResult.attendees = this._attendees;
    }
    if (this._calendarId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarId = this._calendarId;
    }
    if (this._canGuestsInviteOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.canGuestsInviteOthers = this._canGuestsInviteOthers;
    }
    if (this._canGuestsModifyEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.canGuestsModifyEvent = this._canGuestsModifyEvent;
    }
    if (this._canGuestsSeeOtherGuests !== undefined) {
      hasAnyValues = true;
      internalValueResult.canGuestsSeeOtherGuests = this._canGuestsSeeOtherGuests;
    }
    if (this._conferenceSolutionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.conferenceSolutionKey = this._conferenceSolutionKey;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._eventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventId = this._eventId;
    }
    if (this._meetingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.meetingDuration = this._meetingDuration;
    }
    if (this._postToIncidentTimeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToIncidentTimeline = this._postToIncidentTimeline;
    }
    if (this._replaceAttendees !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAttendees = this._replaceAttendees;
    }
    if (this._sendUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendUpdates = this._sendUpdates;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._timeOfMeeting !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfMeeting = this._timeOfMeeting;
    }
    if (this._postToSlackChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToSlackChannels = this._postToSlackChannels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdateGoogleCalendarEventTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustmentDays = undefined;
      this._attendees = undefined;
      this._calendarId = undefined;
      this._canGuestsInviteOthers = undefined;
      this._canGuestsModifyEvent = undefined;
      this._canGuestsSeeOtherGuests = undefined;
      this._conferenceSolutionKey = undefined;
      this._description = undefined;
      this._eventId = undefined;
      this._meetingDuration = undefined;
      this._postToIncidentTimeline = undefined;
      this._replaceAttendees = undefined;
      this._sendUpdates = undefined;
      this._summary = undefined;
      this._taskType = undefined;
      this._timeOfMeeting = undefined;
      this._postToSlackChannels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustmentDays = value.adjustmentDays;
      this._attendees = value.attendees;
      this._calendarId = value.calendarId;
      this._canGuestsInviteOthers = value.canGuestsInviteOthers;
      this._canGuestsModifyEvent = value.canGuestsModifyEvent;
      this._canGuestsSeeOtherGuests = value.canGuestsSeeOtherGuests;
      this._conferenceSolutionKey = value.conferenceSolutionKey;
      this._description = value.description;
      this._eventId = value.eventId;
      this._meetingDuration = value.meetingDuration;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._replaceAttendees = value.replaceAttendees;
      this._sendUpdates = value.sendUpdates;
      this._summary = value.summary;
      this._taskType = value.taskType;
      this._timeOfMeeting = value.timeOfMeeting;
      this._postToSlackChannels.internalValue = value.postToSlackChannels;
    }
  }

  // adjustment_days - computed: false, optional: true, required: false
  private _adjustmentDays?: string; 
  public get adjustmentDays() {
    return this.getStringAttribute('adjustment_days');
  }
  public set adjustmentDays(value: string) {
    this._adjustmentDays = value;
  }
  public resetAdjustmentDays() {
    this._adjustmentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentDaysInput() {
    return this._adjustmentDays;
  }

  // attendees - computed: false, optional: true, required: false
  private _attendees?: string[]; 
  public get attendees() {
    return this.getListAttribute('attendees');
  }
  public set attendees(value: string[]) {
    this._attendees = value;
  }
  public resetAttendees() {
    this._attendees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attendeesInput() {
    return this._attendees;
  }

  // calendar_id - computed: false, optional: true, required: false
  private _calendarId?: string; 
  public get calendarId() {
    return this.getStringAttribute('calendar_id');
  }
  public set calendarId(value: string) {
    this._calendarId = value;
  }
  public resetCalendarId() {
    this._calendarId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarIdInput() {
    return this._calendarId;
  }

  // can_guests_invite_others - computed: false, optional: true, required: false
  private _canGuestsInviteOthers?: boolean | cdktf.IResolvable; 
  public get canGuestsInviteOthers() {
    return this.getBooleanAttribute('can_guests_invite_others');
  }
  public set canGuestsInviteOthers(value: boolean | cdktf.IResolvable) {
    this._canGuestsInviteOthers = value;
  }
  public resetCanGuestsInviteOthers() {
    this._canGuestsInviteOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canGuestsInviteOthersInput() {
    return this._canGuestsInviteOthers;
  }

  // can_guests_modify_event - computed: false, optional: true, required: false
  private _canGuestsModifyEvent?: boolean | cdktf.IResolvable; 
  public get canGuestsModifyEvent() {
    return this.getBooleanAttribute('can_guests_modify_event');
  }
  public set canGuestsModifyEvent(value: boolean | cdktf.IResolvable) {
    this._canGuestsModifyEvent = value;
  }
  public resetCanGuestsModifyEvent() {
    this._canGuestsModifyEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canGuestsModifyEventInput() {
    return this._canGuestsModifyEvent;
  }

  // can_guests_see_other_guests - computed: false, optional: true, required: false
  private _canGuestsSeeOtherGuests?: boolean | cdktf.IResolvable; 
  public get canGuestsSeeOtherGuests() {
    return this.getBooleanAttribute('can_guests_see_other_guests');
  }
  public set canGuestsSeeOtherGuests(value: boolean | cdktf.IResolvable) {
    this._canGuestsSeeOtherGuests = value;
  }
  public resetCanGuestsSeeOtherGuests() {
    this._canGuestsSeeOtherGuests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canGuestsSeeOtherGuestsInput() {
    return this._canGuestsSeeOtherGuests;
  }

  // conference_solution_key - computed: false, optional: true, required: false
  private _conferenceSolutionKey?: string; 
  public get conferenceSolutionKey() {
    return this.getStringAttribute('conference_solution_key');
  }
  public set conferenceSolutionKey(value: string) {
    this._conferenceSolutionKey = value;
  }
  public resetConferenceSolutionKey() {
    this._conferenceSolutionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceSolutionKeyInput() {
    return this._conferenceSolutionKey;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // event_id - computed: false, optional: false, required: true
  private _eventId?: string; 
  public get eventId() {
    return this.getStringAttribute('event_id');
  }
  public set eventId(value: string) {
    this._eventId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
  }

  // meeting_duration - computed: false, optional: true, required: false
  private _meetingDuration?: string; 
  public get meetingDuration() {
    return this.getStringAttribute('meeting_duration');
  }
  public set meetingDuration(value: string) {
    this._meetingDuration = value;
  }
  public resetMeetingDuration() {
    this._meetingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meetingDurationInput() {
    return this._meetingDuration;
  }

  // post_to_incident_timeline - computed: false, optional: true, required: false
  private _postToIncidentTimeline?: boolean | cdktf.IResolvable; 
  public get postToIncidentTimeline() {
    return this.getBooleanAttribute('post_to_incident_timeline');
  }
  public set postToIncidentTimeline(value: boolean | cdktf.IResolvable) {
    this._postToIncidentTimeline = value;
  }
  public resetPostToIncidentTimeline() {
    this._postToIncidentTimeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postToIncidentTimelineInput() {
    return this._postToIncidentTimeline;
  }

  // replace_attendees - computed: false, optional: true, required: false
  private _replaceAttendees?: boolean | cdktf.IResolvable; 
  public get replaceAttendees() {
    return this.getBooleanAttribute('replace_attendees');
  }
  public set replaceAttendees(value: boolean | cdktf.IResolvable) {
    this._replaceAttendees = value;
  }
  public resetReplaceAttendees() {
    this._replaceAttendees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceAttendeesInput() {
    return this._replaceAttendees;
  }

  // send_updates - computed: false, optional: true, required: false
  private _sendUpdates?: boolean | cdktf.IResolvable; 
  public get sendUpdates() {
    return this.getBooleanAttribute('send_updates');
  }
  public set sendUpdates(value: boolean | cdktf.IResolvable) {
    this._sendUpdates = value;
  }
  public resetSendUpdates() {
    this._sendUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendUpdatesInput() {
    return this._sendUpdates;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // time_of_meeting - computed: false, optional: true, required: false
  private _timeOfMeeting?: string; 
  public get timeOfMeeting() {
    return this.getStringAttribute('time_of_meeting');
  }
  public set timeOfMeeting(value: string) {
    this._timeOfMeeting = value;
  }
  public resetTimeOfMeeting() {
    this._timeOfMeeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfMeetingInput() {
    return this._timeOfMeeting;
  }

  // post_to_slack_channels - computed: false, optional: true, required: false
  private _postToSlackChannels = new WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannelsList(this, "post_to_slack_channels", false);
  public get postToSlackChannels() {
    return this._postToSlackChannels;
  }
  public putPostToSlackChannels(value: WorkflowTaskUpdateGoogleCalendarEventTaskParamsPostToSlackChannels[] | cdktf.IResolvable) {
    this._postToSlackChannels.internalValue = value;
  }
  public resetPostToSlackChannels() {
    this._postToSlackChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postToSlackChannelsInput() {
    return this._postToSlackChannels.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event rootly_workflow_task_update_google_calendar_event}
*/
export class WorkflowTaskUpdateGoogleCalendarEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_google_calendar_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateGoogleCalendarEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateGoogleCalendarEvent to import
  * @param importFromId The id of the existing WorkflowTaskUpdateGoogleCalendarEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateGoogleCalendarEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_google_calendar_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_update_google_calendar_event rootly_workflow_task_update_google_calendar_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateGoogleCalendarEventConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateGoogleCalendarEventConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_google_calendar_event',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.11',
        providerVersionConstraint: '4.3.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskUpdateGoogleCalendarEventTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateGoogleCalendarEventTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskUpdateGoogleCalendarEventTaskParamsToTerraform(this._taskParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskUpdateGoogleCalendarEventTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateGoogleCalendarEventTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
