// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateOutlookEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#enabled WorkflowTaskCreateOutlookEvent#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#id WorkflowTaskCreateOutlookEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#name WorkflowTaskCreateOutlookEvent#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#position WorkflowTaskCreateOutlookEvent#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#skip_on_failure WorkflowTaskCreateOutlookEvent#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#workflow_id WorkflowTaskCreateOutlookEvent#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#task_params WorkflowTaskCreateOutlookEvent#task_params}
  */
  readonly taskParams: WorkflowTaskCreateOutlookEventTaskParams;
}
export interface WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#id WorkflowTaskCreateOutlookEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#name WorkflowTaskCreateOutlookEvent#name}
  */
  readonly name: string;
}

export function workflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsToTerraform(struct?: WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsToHclTerraform(struct?: WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsOutputReference {
    return new WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskCreateOutlookEventTaskParams {
  /**
  * Emails of attendees
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#attendees WorkflowTaskCreateOutlookEvent#attendees}
  */
  readonly attendees?: string[];
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#calendar WorkflowTaskCreateOutlookEvent#calendar}
  */
  readonly calendar: { [key: string]: string };
  /**
  * The days until meeting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#days_until_meeting WorkflowTaskCreateOutlookEvent#days_until_meeting}
  */
  readonly daysUntilMeeting: string;
  /**
  * The event description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#description WorkflowTaskCreateOutlookEvent#description}
  */
  readonly description: string;
  /**
  * Enable Microsoft Teams online meeting. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#enable_online_meeting WorkflowTaskCreateOutlookEvent#enable_online_meeting}
  */
  readonly enableOnlineMeeting?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#exclude_weekends WorkflowTaskCreateOutlookEvent#exclude_weekends}
  */
  readonly excludeWeekends?: boolean | cdktf.IResolvable;
  /**
  * Meeting duration in format like '1 hour', '30 minutes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#meeting_duration WorkflowTaskCreateOutlookEvent#meeting_duration}
  */
  readonly meetingDuration: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#post_to_incident_timeline WorkflowTaskCreateOutlookEvent#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * The event summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#summary WorkflowTaskCreateOutlookEvent#summary}
  */
  readonly summary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#task_type WorkflowTaskCreateOutlookEvent#task_type}
  */
  readonly taskType?: string;
  /**
  * Time of meeting in format HH:MM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#time_of_meeting WorkflowTaskCreateOutlookEvent#time_of_meeting}
  */
  readonly timeOfMeeting: string;
  /**
  * A valid IANA time zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#time_zone WorkflowTaskCreateOutlookEvent#time_zone}
  */
  readonly timeZone?: string;
  /**
  * post_to_slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#post_to_slack_channels WorkflowTaskCreateOutlookEvent#post_to_slack_channels}
  */
  readonly postToSlackChannels?: WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels[] | cdktf.IResolvable;
}

export function workflowTaskCreateOutlookEventTaskParamsToTerraform(struct?: WorkflowTaskCreateOutlookEventTaskParamsOutputReference | WorkflowTaskCreateOutlookEventTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attendees: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attendees),
    calendar: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.calendar),
    days_until_meeting: cdktf.stringToTerraform(struct!.daysUntilMeeting),
    description: cdktf.stringToTerraform(struct!.description),
    enable_online_meeting: cdktf.booleanToTerraform(struct!.enableOnlineMeeting),
    exclude_weekends: cdktf.booleanToTerraform(struct!.excludeWeekends),
    meeting_duration: cdktf.stringToTerraform(struct!.meetingDuration),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    time_of_meeting: cdktf.stringToTerraform(struct!.timeOfMeeting),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    post_to_slack_channels: cdktf.listMapper(workflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsToTerraform, true)(struct!.postToSlackChannels),
  }
}


export function workflowTaskCreateOutlookEventTaskParamsToHclTerraform(struct?: WorkflowTaskCreateOutlookEventTaskParamsOutputReference | WorkflowTaskCreateOutlookEventTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attendees: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attendees),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    calendar: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.calendar),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    days_until_meeting: {
      value: cdktf.stringToHclTerraform(struct!.daysUntilMeeting),
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
    enable_online_meeting: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnlineMeeting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_weekends: {
      value: cdktf.booleanToHclTerraform(struct!.excludeWeekends),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_to_slack_channels: {
      value: cdktf.listMapperHcl(workflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsToHclTerraform, true)(struct!.postToSlackChannels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateOutlookEventTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateOutlookEventTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attendees !== undefined) {
      hasAnyValues = true;
      internalValueResult.attendees = this._attendees;
    }
    if (this._calendar !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendar = this._calendar;
    }
    if (this._daysUntilMeeting !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysUntilMeeting = this._daysUntilMeeting;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableOnlineMeeting !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnlineMeeting = this._enableOnlineMeeting;
    }
    if (this._excludeWeekends !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeWeekends = this._excludeWeekends;
    }
    if (this._meetingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.meetingDuration = this._meetingDuration;
    }
    if (this._postToIncidentTimeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToIncidentTimeline = this._postToIncidentTimeline;
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
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._postToSlackChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToSlackChannels = this._postToSlackChannels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateOutlookEventTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attendees = undefined;
      this._calendar = undefined;
      this._daysUntilMeeting = undefined;
      this._description = undefined;
      this._enableOnlineMeeting = undefined;
      this._excludeWeekends = undefined;
      this._meetingDuration = undefined;
      this._postToIncidentTimeline = undefined;
      this._summary = undefined;
      this._taskType = undefined;
      this._timeOfMeeting = undefined;
      this._timeZone = undefined;
      this._postToSlackChannels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attendees = value.attendees;
      this._calendar = value.calendar;
      this._daysUntilMeeting = value.daysUntilMeeting;
      this._description = value.description;
      this._enableOnlineMeeting = value.enableOnlineMeeting;
      this._excludeWeekends = value.excludeWeekends;
      this._meetingDuration = value.meetingDuration;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._summary = value.summary;
      this._taskType = value.taskType;
      this._timeOfMeeting = value.timeOfMeeting;
      this._timeZone = value.timeZone;
      this._postToSlackChannels.internalValue = value.postToSlackChannels;
    }
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

  // calendar - computed: false, optional: false, required: true
  private _calendar?: { [key: string]: string }; 
  public get calendar() {
    return this.getStringMapAttribute('calendar');
  }
  public set calendar(value: { [key: string]: string }) {
    this._calendar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarInput() {
    return this._calendar;
  }

  // days_until_meeting - computed: false, optional: false, required: true
  private _daysUntilMeeting?: string; 
  public get daysUntilMeeting() {
    return this.getStringAttribute('days_until_meeting');
  }
  public set daysUntilMeeting(value: string) {
    this._daysUntilMeeting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysUntilMeetingInput() {
    return this._daysUntilMeeting;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_online_meeting - computed: false, optional: true, required: false
  private _enableOnlineMeeting?: boolean | cdktf.IResolvable; 
  public get enableOnlineMeeting() {
    return this.getBooleanAttribute('enable_online_meeting');
  }
  public set enableOnlineMeeting(value: boolean | cdktf.IResolvable) {
    this._enableOnlineMeeting = value;
  }
  public resetEnableOnlineMeeting() {
    this._enableOnlineMeeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnlineMeetingInput() {
    return this._enableOnlineMeeting;
  }

  // exclude_weekends - computed: false, optional: true, required: false
  private _excludeWeekends?: boolean | cdktf.IResolvable; 
  public get excludeWeekends() {
    return this.getBooleanAttribute('exclude_weekends');
  }
  public set excludeWeekends(value: boolean | cdktf.IResolvable) {
    this._excludeWeekends = value;
  }
  public resetExcludeWeekends() {
    this._excludeWeekends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeWeekendsInput() {
    return this._excludeWeekends;
  }

  // meeting_duration - computed: false, optional: false, required: true
  private _meetingDuration?: string; 
  public get meetingDuration() {
    return this.getStringAttribute('meeting_duration');
  }
  public set meetingDuration(value: string) {
    this._meetingDuration = value;
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

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
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

  // time_of_meeting - computed: false, optional: false, required: true
  private _timeOfMeeting?: string; 
  public get timeOfMeeting() {
    return this.getStringAttribute('time_of_meeting');
  }
  public set timeOfMeeting(value: string) {
    this._timeOfMeeting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfMeetingInput() {
    return this._timeOfMeeting;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // post_to_slack_channels - computed: false, optional: true, required: false
  private _postToSlackChannels = new WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannelsList(this, "post_to_slack_channels", false);
  public get postToSlackChannels() {
    return this._postToSlackChannels;
  }
  public putPostToSlackChannels(value: WorkflowTaskCreateOutlookEventTaskParamsPostToSlackChannels[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event rootly_workflow_task_create_outlook_event}
*/
export class WorkflowTaskCreateOutlookEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_outlook_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateOutlookEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateOutlookEvent to import
  * @param importFromId The id of the existing WorkflowTaskCreateOutlookEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateOutlookEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_outlook_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_outlook_event rootly_workflow_task_create_outlook_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateOutlookEventConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateOutlookEventConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_outlook_event',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
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
  private _taskParams = new WorkflowTaskCreateOutlookEventTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateOutlookEventTaskParams) {
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
      task_params: workflowTaskCreateOutlookEventTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateOutlookEventTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateOutlookEventTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
