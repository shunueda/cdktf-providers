// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskSnapshotDatadogGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#enabled WorkflowTaskSnapshotDatadogGraph#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#id WorkflowTaskSnapshotDatadogGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#name WorkflowTaskSnapshotDatadogGraph#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#position WorkflowTaskSnapshotDatadogGraph#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#skip_on_failure WorkflowTaskSnapshotDatadogGraph#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#workflow_id WorkflowTaskSnapshotDatadogGraph#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#task_params WorkflowTaskSnapshotDatadogGraph#task_params}
  */
  readonly taskParams: WorkflowTaskSnapshotDatadogGraphTaskParams;
}
export interface WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#id WorkflowTaskSnapshotDatadogGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#name WorkflowTaskSnapshotDatadogGraph#name}
  */
  readonly name: string;
}

export function workflowTaskSnapshotDatadogGraphTaskParamsDashboardsToTerraform(struct?: WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSnapshotDatadogGraphTaskParamsDashboardsToHclTerraform(struct?: WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards | cdktf.IResolvable): any {
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

export class WorkflowTaskSnapshotDatadogGraphTaskParamsDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSnapshotDatadogGraphTaskParamsDashboardsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSnapshotDatadogGraphTaskParamsDashboardsOutputReference {
    return new WorkflowTaskSnapshotDatadogGraphTaskParamsDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#id WorkflowTaskSnapshotDatadogGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#name WorkflowTaskSnapshotDatadogGraph#name}
  */
  readonly name: string;
}

export function workflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsToTerraform(struct?: WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsToHclTerraform(struct?: WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsOutputReference {
    return new WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSnapshotDatadogGraphTaskParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#metric_queries WorkflowTaskSnapshotDatadogGraph#metric_queries}
  */
  readonly metricQueries?: string[];
  /**
  * in format '1 minute', '30 days', '3 months', etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#past_duration WorkflowTaskSnapshotDatadogGraph#past_duration}
  */
  readonly pastDuration: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#post_to_incident_timeline WorkflowTaskSnapshotDatadogGraph#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#task_type WorkflowTaskSnapshotDatadogGraph#task_type}
  */
  readonly taskType?: string;
  /**
  * dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#dashboards WorkflowTaskSnapshotDatadogGraph#dashboards}
  */
  readonly dashboards?: WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards[] | cdktf.IResolvable;
  /**
  * post_to_slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#post_to_slack_channels WorkflowTaskSnapshotDatadogGraph#post_to_slack_channels}
  */
  readonly postToSlackChannels?: WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels[] | cdktf.IResolvable;
}

export function workflowTaskSnapshotDatadogGraphTaskParamsToTerraform(struct?: WorkflowTaskSnapshotDatadogGraphTaskParamsOutputReference | WorkflowTaskSnapshotDatadogGraphTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_queries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metricQueries),
    past_duration: cdktf.stringToTerraform(struct!.pastDuration),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    dashboards: cdktf.listMapper(workflowTaskSnapshotDatadogGraphTaskParamsDashboardsToTerraform, true)(struct!.dashboards),
    post_to_slack_channels: cdktf.listMapper(workflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsToTerraform, true)(struct!.postToSlackChannels),
  }
}


export function workflowTaskSnapshotDatadogGraphTaskParamsToHclTerraform(struct?: WorkflowTaskSnapshotDatadogGraphTaskParamsOutputReference | WorkflowTaskSnapshotDatadogGraphTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_queries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metricQueries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboards: {
      value: cdktf.listMapperHcl(workflowTaskSnapshotDatadogGraphTaskParamsDashboardsToHclTerraform, true)(struct!.dashboards),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSnapshotDatadogGraphTaskParamsDashboardsList",
    },
    post_to_slack_channels: {
      value: cdktf.listMapperHcl(workflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsToHclTerraform, true)(struct!.postToSlackChannels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskSnapshotDatadogGraphTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskSnapshotDatadogGraphTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricQueries = this._metricQueries;
    }
    if (this._pastDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pastDuration = this._pastDuration;
    }
    if (this._postToIncidentTimeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToIncidentTimeline = this._postToIncidentTimeline;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._dashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboards = this._dashboards?.internalValue;
    }
    if (this._postToSlackChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToSlackChannels = this._postToSlackChannels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskSnapshotDatadogGraphTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricQueries = undefined;
      this._pastDuration = undefined;
      this._postToIncidentTimeline = undefined;
      this._taskType = undefined;
      this._dashboards.internalValue = undefined;
      this._postToSlackChannels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricQueries = value.metricQueries;
      this._pastDuration = value.pastDuration;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._taskType = value.taskType;
      this._dashboards.internalValue = value.dashboards;
      this._postToSlackChannels.internalValue = value.postToSlackChannels;
    }
  }

  // metric_queries - computed: false, optional: true, required: false
  private _metricQueries?: string[]; 
  public get metricQueries() {
    return this.getListAttribute('metric_queries');
  }
  public set metricQueries(value: string[]) {
    this._metricQueries = value;
  }
  public resetMetricQueries() {
    this._metricQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueriesInput() {
    return this._metricQueries;
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

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new WorkflowTaskSnapshotDatadogGraphTaskParamsDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: WorkflowTaskSnapshotDatadogGraphTaskParamsDashboards[] | cdktf.IResolvable) {
    this._dashboards.internalValue = value;
  }
  public resetDashboards() {
    this._dashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsInput() {
    return this._dashboards.internalValue;
  }

  // post_to_slack_channels - computed: false, optional: true, required: false
  private _postToSlackChannels = new WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannelsList(this, "post_to_slack_channels", false);
  public get postToSlackChannels() {
    return this._postToSlackChannels;
  }
  public putPostToSlackChannels(value: WorkflowTaskSnapshotDatadogGraphTaskParamsPostToSlackChannels[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph rootly_workflow_task_snapshot_datadog_graph}
*/
export class WorkflowTaskSnapshotDatadogGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_snapshot_datadog_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskSnapshotDatadogGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskSnapshotDatadogGraph to import
  * @param importFromId The id of the existing WorkflowTaskSnapshotDatadogGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskSnapshotDatadogGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_snapshot_datadog_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_snapshot_datadog_graph rootly_workflow_task_snapshot_datadog_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskSnapshotDatadogGraphConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskSnapshotDatadogGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_snapshot_datadog_graph',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
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
  private _taskParams = new WorkflowTaskSnapshotDatadogGraphTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskSnapshotDatadogGraphTaskParams) {
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
      task_params: workflowTaskSnapshotDatadogGraphTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskSnapshotDatadogGraphTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskSnapshotDatadogGraphTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
