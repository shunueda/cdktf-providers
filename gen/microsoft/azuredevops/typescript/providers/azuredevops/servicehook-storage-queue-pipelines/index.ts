// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicehookStorageQueuePipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A valid account key from the queue's storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#account_key ServicehookStorageQueuePipelines#account_key}
  */
  readonly accountKey: string;
  /**
  * The queue's storage account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#account_name ServicehookStorageQueuePipelines#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#id ServicehookStorageQueuePipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#project_id ServicehookStorageQueuePipelines#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the queue that will store the events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#queue_name ServicehookStorageQueuePipelines#queue_name}
  */
  readonly queueName: string;
  /**
  * event time-to-live - the duration a message can remain in the queue before it's automatically removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#ttl ServicehookStorageQueuePipelines#ttl}
  */
  readonly ttl?: number;
  /**
  * event visibility timout - how long a message is invisible to other consumers after it's been dequeued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#visi_timeout ServicehookStorageQueuePipelines#visi_timeout}
  */
  readonly visiTimeout?: number;
  /**
  * run_state_changed_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#run_state_changed_event ServicehookStorageQueuePipelines#run_state_changed_event}
  */
  readonly runStateChangedEvent?: ServicehookStorageQueuePipelinesRunStateChangedEvent;
  /**
  * stage_state_changed_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#stage_state_changed_event ServicehookStorageQueuePipelines#stage_state_changed_event}
  */
  readonly stageStateChangedEvent?: ServicehookStorageQueuePipelinesStageStateChangedEvent;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#timeouts ServicehookStorageQueuePipelines#timeouts}
  */
  readonly timeouts?: ServicehookStorageQueuePipelinesTimeouts;
}
export interface ServicehookStorageQueuePipelinesRunStateChangedEvent {
  /**
  * The pipeline ID to be monitored. If not specified, all pipelines in the project will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#pipeline_id ServicehookStorageQueuePipelines#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Which run result should generate an event. Only valid if published_event is `RunStateChanged`. If not specified, all results will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#run_result_filter ServicehookStorageQueuePipelines#run_result_filter}
  */
  readonly runResultFilter?: string;
  /**
  * Which run state should generate an event. Only valid if published_event is `RunStateChanged`. If not specified, all states will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#run_state_filter ServicehookStorageQueuePipelines#run_state_filter}
  */
  readonly runStateFilter?: string;
}

export function servicehookStorageQueuePipelinesRunStateChangedEventToTerraform(struct?: ServicehookStorageQueuePipelinesRunStateChangedEventOutputReference | ServicehookStorageQueuePipelinesRunStateChangedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    run_result_filter: cdktf.stringToTerraform(struct!.runResultFilter),
    run_state_filter: cdktf.stringToTerraform(struct!.runStateFilter),
  }
}


export function servicehookStorageQueuePipelinesRunStateChangedEventToHclTerraform(struct?: ServicehookStorageQueuePipelinesRunStateChangedEventOutputReference | ServicehookStorageQueuePipelinesRunStateChangedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_result_filter: {
      value: cdktf.stringToHclTerraform(struct!.runResultFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_state_filter: {
      value: cdktf.stringToHclTerraform(struct!.runStateFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookStorageQueuePipelinesRunStateChangedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookStorageQueuePipelinesRunStateChangedEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._runResultFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.runResultFilter = this._runResultFilter;
    }
    if (this._runStateFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.runStateFilter = this._runStateFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookStorageQueuePipelinesRunStateChangedEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineId = undefined;
      this._runResultFilter = undefined;
      this._runStateFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineId = value.pipelineId;
      this._runResultFilter = value.runResultFilter;
      this._runStateFilter = value.runStateFilter;
    }
  }

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // run_result_filter - computed: false, optional: true, required: false
  private _runResultFilter?: string; 
  public get runResultFilter() {
    return this.getStringAttribute('run_result_filter');
  }
  public set runResultFilter(value: string) {
    this._runResultFilter = value;
  }
  public resetRunResultFilter() {
    this._runResultFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runResultFilterInput() {
    return this._runResultFilter;
  }

  // run_state_filter - computed: false, optional: true, required: false
  private _runStateFilter?: string; 
  public get runStateFilter() {
    return this.getStringAttribute('run_state_filter');
  }
  public set runStateFilter(value: string) {
    this._runStateFilter = value;
  }
  public resetRunStateFilter() {
    this._runStateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runStateFilterInput() {
    return this._runStateFilter;
  }
}
export interface ServicehookStorageQueuePipelinesStageStateChangedEvent {
  /**
  * The pipeline ID to be monitored. If not specified, all pipelines in the project will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#pipeline_id ServicehookStorageQueuePipelines#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Which stage should generate an event. Only valid if published_event is `StageStateChanged`. If not specified, all stages will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#stage_name ServicehookStorageQueuePipelines#stage_name}
  */
  readonly stageName?: string;
  /**
  * Which stage result should generate an event. Only valid if published_event is `StageStateChanged`. If not specified, all results will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#stage_result_filter ServicehookStorageQueuePipelines#stage_result_filter}
  */
  readonly stageResultFilter?: string;
  /**
  * Which stage state should generate an event. Only valid if published_event is `StageStateChanged`. If not specified, all states will trigger the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#stage_state_filter ServicehookStorageQueuePipelines#stage_state_filter}
  */
  readonly stageStateFilter?: string;
}

export function servicehookStorageQueuePipelinesStageStateChangedEventToTerraform(struct?: ServicehookStorageQueuePipelinesStageStateChangedEventOutputReference | ServicehookStorageQueuePipelinesStageStateChangedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    stage_name: cdktf.stringToTerraform(struct!.stageName),
    stage_result_filter: cdktf.stringToTerraform(struct!.stageResultFilter),
    stage_state_filter: cdktf.stringToTerraform(struct!.stageStateFilter),
  }
}


export function servicehookStorageQueuePipelinesStageStateChangedEventToHclTerraform(struct?: ServicehookStorageQueuePipelinesStageStateChangedEventOutputReference | ServicehookStorageQueuePipelinesStageStateChangedEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_name: {
      value: cdktf.stringToHclTerraform(struct!.stageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_result_filter: {
      value: cdktf.stringToHclTerraform(struct!.stageResultFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_state_filter: {
      value: cdktf.stringToHclTerraform(struct!.stageStateFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookStorageQueuePipelinesStageStateChangedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicehookStorageQueuePipelinesStageStateChangedEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._stageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageName = this._stageName;
    }
    if (this._stageResultFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageResultFilter = this._stageResultFilter;
    }
    if (this._stageStateFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageStateFilter = this._stageStateFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookStorageQueuePipelinesStageStateChangedEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineId = undefined;
      this._stageName = undefined;
      this._stageResultFilter = undefined;
      this._stageStateFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineId = value.pipelineId;
      this._stageName = value.stageName;
      this._stageResultFilter = value.stageResultFilter;
      this._stageStateFilter = value.stageStateFilter;
    }
  }

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }

  // stage_result_filter - computed: false, optional: true, required: false
  private _stageResultFilter?: string; 
  public get stageResultFilter() {
    return this.getStringAttribute('stage_result_filter');
  }
  public set stageResultFilter(value: string) {
    this._stageResultFilter = value;
  }
  public resetStageResultFilter() {
    this._stageResultFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageResultFilterInput() {
    return this._stageResultFilter;
  }

  // stage_state_filter - computed: false, optional: true, required: false
  private _stageStateFilter?: string; 
  public get stageStateFilter() {
    return this.getStringAttribute('stage_state_filter');
  }
  public set stageStateFilter(value: string) {
    this._stageStateFilter = value;
  }
  public resetStageStateFilter() {
    this._stageStateFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageStateFilterInput() {
    return this._stageStateFilter;
  }
}
export interface ServicehookStorageQueuePipelinesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#create ServicehookStorageQueuePipelines#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#delete ServicehookStorageQueuePipelines#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#read ServicehookStorageQueuePipelines#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#update ServicehookStorageQueuePipelines#update}
  */
  readonly update?: string;
}

export function servicehookStorageQueuePipelinesTimeoutsToTerraform(struct?: ServicehookStorageQueuePipelinesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function servicehookStorageQueuePipelinesTimeoutsToHclTerraform(struct?: ServicehookStorageQueuePipelinesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicehookStorageQueuePipelinesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicehookStorageQueuePipelinesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicehookStorageQueuePipelinesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines azuredevops_servicehook_storage_queue_pipelines}
*/
export class ServicehookStorageQueuePipelines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_servicehook_storage_queue_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicehookStorageQueuePipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicehookStorageQueuePipelines to import
  * @param importFromId The id of the existing ServicehookStorageQueuePipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicehookStorageQueuePipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_servicehook_storage_queue_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/servicehook_storage_queue_pipelines azuredevops_servicehook_storage_queue_pipelines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicehookStorageQueuePipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: ServicehookStorageQueuePipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_servicehook_storage_queue_pipelines',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountKey = config.accountKey;
    this._accountName = config.accountName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._queueName = config.queueName;
    this._ttl = config.ttl;
    this._visiTimeout = config.visiTimeout;
    this._runStateChangedEvent.internalValue = config.runStateChangedEvent;
    this._stageStateChangedEvent.internalValue = config.stageStateChangedEvent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_key - computed: false, optional: false, required: true
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // visi_timeout - computed: false, optional: true, required: false
  private _visiTimeout?: number; 
  public get visiTimeout() {
    return this.getNumberAttribute('visi_timeout');
  }
  public set visiTimeout(value: number) {
    this._visiTimeout = value;
  }
  public resetVisiTimeout() {
    this._visiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visiTimeoutInput() {
    return this._visiTimeout;
  }

  // run_state_changed_event - computed: false, optional: true, required: false
  private _runStateChangedEvent = new ServicehookStorageQueuePipelinesRunStateChangedEventOutputReference(this, "run_state_changed_event");
  public get runStateChangedEvent() {
    return this._runStateChangedEvent;
  }
  public putRunStateChangedEvent(value: ServicehookStorageQueuePipelinesRunStateChangedEvent) {
    this._runStateChangedEvent.internalValue = value;
  }
  public resetRunStateChangedEvent() {
    this._runStateChangedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runStateChangedEventInput() {
    return this._runStateChangedEvent.internalValue;
  }

  // stage_state_changed_event - computed: false, optional: true, required: false
  private _stageStateChangedEvent = new ServicehookStorageQueuePipelinesStageStateChangedEventOutputReference(this, "stage_state_changed_event");
  public get stageStateChangedEvent() {
    return this._stageStateChangedEvent;
  }
  public putStageStateChangedEvent(value: ServicehookStorageQueuePipelinesStageStateChangedEvent) {
    this._stageStateChangedEvent.internalValue = value;
  }
  public resetStageStateChangedEvent() {
    this._stageStateChangedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageStateChangedEventInput() {
    return this._stageStateChangedEvent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicehookStorageQueuePipelinesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicehookStorageQueuePipelinesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_key: cdktf.stringToTerraform(this._accountKey),
      account_name: cdktf.stringToTerraform(this._accountName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      queue_name: cdktf.stringToTerraform(this._queueName),
      ttl: cdktf.numberToTerraform(this._ttl),
      visi_timeout: cdktf.numberToTerraform(this._visiTimeout),
      run_state_changed_event: servicehookStorageQueuePipelinesRunStateChangedEventToTerraform(this._runStateChangedEvent.internalValue),
      stage_state_changed_event: servicehookStorageQueuePipelinesStageStateChangedEventToTerraform(this._stageStateChangedEvent.internalValue),
      timeouts: servicehookStorageQueuePipelinesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_key: {
        value: cdktf.stringToHclTerraform(this._accountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visi_timeout: {
        value: cdktf.numberToHclTerraform(this._visiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_state_changed_event: {
        value: servicehookStorageQueuePipelinesRunStateChangedEventToHclTerraform(this._runStateChangedEvent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookStorageQueuePipelinesRunStateChangedEventList",
      },
      stage_state_changed_event: {
        value: servicehookStorageQueuePipelinesStageStateChangedEventToHclTerraform(this._stageStateChangedEvent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicehookStorageQueuePipelinesStageStateChangedEventList",
      },
      timeouts: {
        value: servicehookStorageQueuePipelinesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicehookStorageQueuePipelinesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
