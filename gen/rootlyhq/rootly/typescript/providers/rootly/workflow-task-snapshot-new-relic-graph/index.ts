// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskSnapshotNewRelicGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#enabled WorkflowTaskSnapshotNewRelicGraph#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#id WorkflowTaskSnapshotNewRelicGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#name WorkflowTaskSnapshotNewRelicGraph#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#position WorkflowTaskSnapshotNewRelicGraph#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#skip_on_failure WorkflowTaskSnapshotNewRelicGraph#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#workflow_id WorkflowTaskSnapshotNewRelicGraph#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#task_params WorkflowTaskSnapshotNewRelicGraph#task_params}
  */
  readonly taskParams: WorkflowTaskSnapshotNewRelicGraphTaskParams;
}
export interface WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#id WorkflowTaskSnapshotNewRelicGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#name WorkflowTaskSnapshotNewRelicGraph#name}
  */
  readonly name: string;
}

export function workflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsToTerraform(struct?: WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsToHclTerraform(struct?: WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsOutputReference {
    return new WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSnapshotNewRelicGraphTaskParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#metric_query WorkflowTaskSnapshotNewRelicGraph#metric_query}
  */
  readonly metricQuery: string;
  /**
  * Value must be one of `APDEX`, `AREA`, `BAR`, `BASELINE`, `BILLBOARD`, `BULLET`, `EVENT_FEED`, `FUNNEL`, `HEATMAP`, `HISTOGRAM`, `LINE`, `PIE`, `SCATTER`, `STACKED_HORIZONTAL_BAR`, `TABLE`, `VERTICAL_BAR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#metric_type WorkflowTaskSnapshotNewRelicGraph#metric_type}
  */
  readonly metricType: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#post_to_incident_timeline WorkflowTaskSnapshotNewRelicGraph#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#task_type WorkflowTaskSnapshotNewRelicGraph#task_type}
  */
  readonly taskType?: string;
  /**
  * post_to_slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#post_to_slack_channels WorkflowTaskSnapshotNewRelicGraph#post_to_slack_channels}
  */
  readonly postToSlackChannels?: WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels[] | cdktf.IResolvable;
}

export function workflowTaskSnapshotNewRelicGraphTaskParamsToTerraform(struct?: WorkflowTaskSnapshotNewRelicGraphTaskParamsOutputReference | WorkflowTaskSnapshotNewRelicGraphTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_query: cdktf.stringToTerraform(struct!.metricQuery),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    post_to_slack_channels: cdktf.listMapper(workflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsToTerraform, true)(struct!.postToSlackChannels),
  }
}


export function workflowTaskSnapshotNewRelicGraphTaskParamsToHclTerraform(struct?: WorkflowTaskSnapshotNewRelicGraphTaskParamsOutputReference | WorkflowTaskSnapshotNewRelicGraphTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_query: {
      value: cdktf.stringToHclTerraform(struct!.metricQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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
    post_to_slack_channels: {
      value: cdktf.listMapperHcl(workflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsToHclTerraform, true)(struct!.postToSlackChannels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskSnapshotNewRelicGraphTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskSnapshotNewRelicGraphTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricQuery = this._metricQuery;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._postToIncidentTimeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToIncidentTimeline = this._postToIncidentTimeline;
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

  public set internalValue(value: WorkflowTaskSnapshotNewRelicGraphTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricQuery = undefined;
      this._metricType = undefined;
      this._postToIncidentTimeline = undefined;
      this._taskType = undefined;
      this._postToSlackChannels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricQuery = value.metricQuery;
      this._metricType = value.metricType;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._taskType = value.taskType;
      this._postToSlackChannels.internalValue = value.postToSlackChannels;
    }
  }

  // metric_query - computed: false, optional: false, required: true
  private _metricQuery?: string; 
  public get metricQuery() {
    return this.getStringAttribute('metric_query');
  }
  public set metricQuery(value: string) {
    this._metricQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery;
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // post_to_slack_channels - computed: false, optional: true, required: false
  private _postToSlackChannels = new WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannelsList(this, "post_to_slack_channels", false);
  public get postToSlackChannels() {
    return this._postToSlackChannels;
  }
  public putPostToSlackChannels(value: WorkflowTaskSnapshotNewRelicGraphTaskParamsPostToSlackChannels[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph rootly_workflow_task_snapshot_new_relic_graph}
*/
export class WorkflowTaskSnapshotNewRelicGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_snapshot_new_relic_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskSnapshotNewRelicGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskSnapshotNewRelicGraph to import
  * @param importFromId The id of the existing WorkflowTaskSnapshotNewRelicGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskSnapshotNewRelicGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_snapshot_new_relic_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_snapshot_new_relic_graph rootly_workflow_task_snapshot_new_relic_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskSnapshotNewRelicGraphConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskSnapshotNewRelicGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_snapshot_new_relic_graph',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
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
  private _taskParams = new WorkflowTaskSnapshotNewRelicGraphTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskSnapshotNewRelicGraphTaskParams) {
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
      task_params: workflowTaskSnapshotNewRelicGraphTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskSnapshotNewRelicGraphTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskSnapshotNewRelicGraphTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
