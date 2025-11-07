// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskGetAlertsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#enabled WorkflowTaskGetAlerts#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#id WorkflowTaskGetAlerts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#name WorkflowTaskGetAlerts#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#position WorkflowTaskGetAlerts#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#skip_on_failure WorkflowTaskGetAlerts#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#workflow_id WorkflowTaskGetAlerts#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#task_params WorkflowTaskGetAlerts#task_params}
  */
  readonly taskParams: WorkflowTaskGetAlertsTaskParams;
}
export interface WorkflowTaskGetAlertsTaskParamsPostToSlackChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#id WorkflowTaskGetAlerts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#name WorkflowTaskGetAlerts#name}
  */
  readonly name: string;
}

export function workflowTaskGetAlertsTaskParamsPostToSlackChannelsToTerraform(struct?: WorkflowTaskGetAlertsTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskGetAlertsTaskParamsPostToSlackChannelsToHclTerraform(struct?: WorkflowTaskGetAlertsTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskGetAlertsTaskParamsPostToSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskGetAlertsTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskGetAlertsTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskGetAlertsTaskParamsPostToSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskGetAlertsTaskParamsPostToSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskGetAlertsTaskParamsPostToSlackChannelsOutputReference {
    return new WorkflowTaskGetAlertsTaskParamsPostToSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskGetAlertsTaskParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#environment_ids WorkflowTaskGetAlerts#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#environments_impacted_by_incident WorkflowTaskGetAlerts#environments_impacted_by_incident}
  */
  readonly environmentsImpactedByIncident?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#labels WorkflowTaskGetAlerts#labels}
  */
  readonly labels?: string[];
  /**
  * Map must contain two fields, `id` and `name`. A hash where [id] is the task id of the parent task that sent a message, and [name] is the name of the parent task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#parent_message_thread_task WorkflowTaskGetAlerts#parent_message_thread_task}
  */
  readonly parentMessageThreadTask?: { [key: string]: string };
  /**
  * How far back to fetch commits (in format '1 minute', '30 days', '3 months', etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#past_duration WorkflowTaskGetAlerts#past_duration}
  */
  readonly pastDuration: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#post_to_incident_timeline WorkflowTaskGetAlerts#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#service_ids WorkflowTaskGetAlerts#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#services_impacted_by_incident WorkflowTaskGetAlerts#services_impacted_by_incident}
  */
  readonly servicesImpactedByIncident?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#sources WorkflowTaskGetAlerts#sources}
  */
  readonly sources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#task_type WorkflowTaskGetAlerts#task_type}
  */
  readonly taskType?: string;
  /**
  * post_to_slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#post_to_slack_channels WorkflowTaskGetAlerts#post_to_slack_channels}
  */
  readonly postToSlackChannels?: WorkflowTaskGetAlertsTaskParamsPostToSlackChannels[] | cdktf.IResolvable;
}

export function workflowTaskGetAlertsTaskParamsToTerraform(struct?: WorkflowTaskGetAlertsTaskParamsOutputReference | WorkflowTaskGetAlertsTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentIds),
    environments_impacted_by_incident: cdktf.booleanToTerraform(struct!.environmentsImpactedByIncident),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    parent_message_thread_task: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parentMessageThreadTask),
    past_duration: cdktf.stringToTerraform(struct!.pastDuration),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIds),
    services_impacted_by_incident: cdktf.booleanToTerraform(struct!.servicesImpactedByIncident),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    post_to_slack_channels: cdktf.listMapper(workflowTaskGetAlertsTaskParamsPostToSlackChannelsToTerraform, true)(struct!.postToSlackChannels),
  }
}


export function workflowTaskGetAlertsTaskParamsToHclTerraform(struct?: WorkflowTaskGetAlertsTaskParamsOutputReference | WorkflowTaskGetAlertsTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environments_impacted_by_incident: {
      value: cdktf.booleanToHclTerraform(struct!.environmentsImpactedByIncident),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parent_message_thread_task: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parentMessageThreadTask),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    past_duration: {
      value: cdktf.stringToHclTerraform(struct!.pastDuration),
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
    service_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    services_impacted_by_incident: {
      value: cdktf.booleanToHclTerraform(struct!.servicesImpactedByIncident),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_to_slack_channels: {
      value: cdktf.listMapperHcl(workflowTaskGetAlertsTaskParamsPostToSlackChannelsToHclTerraform, true)(struct!.postToSlackChannels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskGetAlertsTaskParamsPostToSlackChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskGetAlertsTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskGetAlertsTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentIds = this._environmentIds;
    }
    if (this._environmentsImpactedByIncident !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentsImpactedByIncident = this._environmentsImpactedByIncident;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._parentMessageThreadTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentMessageThreadTask = this._parentMessageThreadTask;
    }
    if (this._pastDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pastDuration = this._pastDuration;
    }
    if (this._postToIncidentTimeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToIncidentTimeline = this._postToIncidentTimeline;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    if (this._servicesImpactedByIncident !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesImpactedByIncident = this._servicesImpactedByIncident;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._postToSlackChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToSlackChannels = this._postToSlackChannels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskGetAlertsTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentIds = undefined;
      this._environmentsImpactedByIncident = undefined;
      this._labels = undefined;
      this._parentMessageThreadTask = undefined;
      this._pastDuration = undefined;
      this._postToIncidentTimeline = undefined;
      this._serviceIds = undefined;
      this._servicesImpactedByIncident = undefined;
      this._sources = undefined;
      this._taskType = undefined;
      this._postToSlackChannels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentIds = value.environmentIds;
      this._environmentsImpactedByIncident = value.environmentsImpactedByIncident;
      this._labels = value.labels;
      this._parentMessageThreadTask = value.parentMessageThreadTask;
      this._pastDuration = value.pastDuration;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._serviceIds = value.serviceIds;
      this._servicesImpactedByIncident = value.servicesImpactedByIncident;
      this._sources = value.sources;
      this._taskType = value.taskType;
      this._postToSlackChannels.internalValue = value.postToSlackChannels;
    }
  }

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // environments_impacted_by_incident - computed: false, optional: true, required: false
  private _environmentsImpactedByIncident?: boolean | cdktf.IResolvable; 
  public get environmentsImpactedByIncident() {
    return this.getBooleanAttribute('environments_impacted_by_incident');
  }
  public set environmentsImpactedByIncident(value: boolean | cdktf.IResolvable) {
    this._environmentsImpactedByIncident = value;
  }
  public resetEnvironmentsImpactedByIncident() {
    this._environmentsImpactedByIncident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsImpactedByIncidentInput() {
    return this._environmentsImpactedByIncident;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // parent_message_thread_task - computed: false, optional: true, required: false
  private _parentMessageThreadTask?: { [key: string]: string }; 
  public get parentMessageThreadTask() {
    return this.getStringMapAttribute('parent_message_thread_task');
  }
  public set parentMessageThreadTask(value: { [key: string]: string }) {
    this._parentMessageThreadTask = value;
  }
  public resetParentMessageThreadTask() {
    this._parentMessageThreadTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentMessageThreadTaskInput() {
    return this._parentMessageThreadTask;
  }

  // past_duration - computed: false, optional: false, required: true
  private _pastDuration?: string; 
  public get pastDuration() {
    return this.getStringAttribute('past_duration');
  }
  public set pastDuration(value: string) {
    this._pastDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pastDurationInput() {
    return this._pastDuration;
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

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // services_impacted_by_incident - computed: false, optional: true, required: false
  private _servicesImpactedByIncident?: boolean | cdktf.IResolvable; 
  public get servicesImpactedByIncident() {
    return this.getBooleanAttribute('services_impacted_by_incident');
  }
  public set servicesImpactedByIncident(value: boolean | cdktf.IResolvable) {
    this._servicesImpactedByIncident = value;
  }
  public resetServicesImpactedByIncident() {
    this._servicesImpactedByIncident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesImpactedByIncidentInput() {
    return this._servicesImpactedByIncident;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
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

  // post_to_slack_channels - computed: false, optional: true, required: false
  private _postToSlackChannels = new WorkflowTaskGetAlertsTaskParamsPostToSlackChannelsList(this, "post_to_slack_channels", false);
  public get postToSlackChannels() {
    return this._postToSlackChannels;
  }
  public putPostToSlackChannels(value: WorkflowTaskGetAlertsTaskParamsPostToSlackChannels[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts rootly_workflow_task_get_alerts}
*/
export class WorkflowTaskGetAlerts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_get_alerts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskGetAlerts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskGetAlerts to import
  * @param importFromId The id of the existing WorkflowTaskGetAlerts that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskGetAlerts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_get_alerts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_get_alerts rootly_workflow_task_get_alerts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskGetAlertsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskGetAlertsConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_get_alerts',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
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
  private _taskParams = new WorkflowTaskGetAlertsTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskGetAlertsTaskParams) {
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
      task_params: workflowTaskGetAlertsTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskGetAlertsTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskGetAlertsTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
