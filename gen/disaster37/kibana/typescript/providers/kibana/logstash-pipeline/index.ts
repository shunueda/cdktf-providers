// https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogstashPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#description LogstashPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#id LogstashPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#name LogstashPipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#pipeline LogstashPipeline#pipeline}
  */
  readonly pipeline: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#settings LogstashPipeline#settings}
  */
  readonly settings?: LogstashPipelineSettings[] | cdktf.IResolvable;
}
export interface LogstashPipelineSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#pipeline_batch_delay LogstashPipeline#pipeline_batch_delay}
  */
  readonly pipelineBatchDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#pipeline_batch_size LogstashPipeline#pipeline_batch_size}
  */
  readonly pipelineBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#pipeline_ecs_compatibility LogstashPipeline#pipeline_ecs_compatibility}
  */
  readonly pipelineEcsCompatibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#pipeline_ordered LogstashPipeline#pipeline_ordered}
  */
  readonly pipelineOrdered?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#pipeline_workers LogstashPipeline#pipeline_workers}
  */
  readonly pipelineWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#queue_checkpoint_writes LogstashPipeline#queue_checkpoint_writes}
  */
  readonly queueCheckpointWrites?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#queue_max_bytes LogstashPipeline#queue_max_bytes}
  */
  readonly queueMaxBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#queue_type LogstashPipeline#queue_type}
  */
  readonly queueType?: string;
}

export function logstashPipelineSettingsToTerraform(struct?: LogstashPipelineSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_batch_delay: cdktf.numberToTerraform(struct!.pipelineBatchDelay),
    pipeline_batch_size: cdktf.numberToTerraform(struct!.pipelineBatchSize),
    pipeline_ecs_compatibility: cdktf.stringToTerraform(struct!.pipelineEcsCompatibility),
    pipeline_ordered: cdktf.stringToTerraform(struct!.pipelineOrdered),
    pipeline_workers: cdktf.numberToTerraform(struct!.pipelineWorkers),
    queue_checkpoint_writes: cdktf.numberToTerraform(struct!.queueCheckpointWrites),
    queue_max_bytes: cdktf.stringToTerraform(struct!.queueMaxBytes),
    queue_type: cdktf.stringToTerraform(struct!.queueType),
  }
}


export function logstashPipelineSettingsToHclTerraform(struct?: LogstashPipelineSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline_batch_delay: {
      value: cdktf.numberToHclTerraform(struct!.pipelineBatchDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pipeline_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.pipelineBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pipeline_ecs_compatibility: {
      value: cdktf.stringToHclTerraform(struct!.pipelineEcsCompatibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_ordered: {
      value: cdktf.stringToHclTerraform(struct!.pipelineOrdered),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_workers: {
      value: cdktf.numberToHclTerraform(struct!.pipelineWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_checkpoint_writes: {
      value: cdktf.numberToHclTerraform(struct!.queueCheckpointWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_max_bytes: {
      value: cdktf.stringToHclTerraform(struct!.queueMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_type: {
      value: cdktf.stringToHclTerraform(struct!.queueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogstashPipelineSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogstashPipelineSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineBatchDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineBatchDelay = this._pipelineBatchDelay;
    }
    if (this._pipelineBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineBatchSize = this._pipelineBatchSize;
    }
    if (this._pipelineEcsCompatibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineEcsCompatibility = this._pipelineEcsCompatibility;
    }
    if (this._pipelineOrdered !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineOrdered = this._pipelineOrdered;
    }
    if (this._pipelineWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineWorkers = this._pipelineWorkers;
    }
    if (this._queueCheckpointWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCheckpointWrites = this._queueCheckpointWrites;
    }
    if (this._queueMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueMaxBytes = this._queueMaxBytes;
    }
    if (this._queueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueType = this._queueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogstashPipelineSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pipelineBatchDelay = undefined;
      this._pipelineBatchSize = undefined;
      this._pipelineEcsCompatibility = undefined;
      this._pipelineOrdered = undefined;
      this._pipelineWorkers = undefined;
      this._queueCheckpointWrites = undefined;
      this._queueMaxBytes = undefined;
      this._queueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pipelineBatchDelay = value.pipelineBatchDelay;
      this._pipelineBatchSize = value.pipelineBatchSize;
      this._pipelineEcsCompatibility = value.pipelineEcsCompatibility;
      this._pipelineOrdered = value.pipelineOrdered;
      this._pipelineWorkers = value.pipelineWorkers;
      this._queueCheckpointWrites = value.queueCheckpointWrites;
      this._queueMaxBytes = value.queueMaxBytes;
      this._queueType = value.queueType;
    }
  }

  // pipeline_batch_delay - computed: false, optional: true, required: false
  private _pipelineBatchDelay?: number; 
  public get pipelineBatchDelay() {
    return this.getNumberAttribute('pipeline_batch_delay');
  }
  public set pipelineBatchDelay(value: number) {
    this._pipelineBatchDelay = value;
  }
  public resetPipelineBatchDelay() {
    this._pipelineBatchDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineBatchDelayInput() {
    return this._pipelineBatchDelay;
  }

  // pipeline_batch_size - computed: false, optional: true, required: false
  private _pipelineBatchSize?: number; 
  public get pipelineBatchSize() {
    return this.getNumberAttribute('pipeline_batch_size');
  }
  public set pipelineBatchSize(value: number) {
    this._pipelineBatchSize = value;
  }
  public resetPipelineBatchSize() {
    this._pipelineBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineBatchSizeInput() {
    return this._pipelineBatchSize;
  }

  // pipeline_ecs_compatibility - computed: false, optional: true, required: false
  private _pipelineEcsCompatibility?: string; 
  public get pipelineEcsCompatibility() {
    return this.getStringAttribute('pipeline_ecs_compatibility');
  }
  public set pipelineEcsCompatibility(value: string) {
    this._pipelineEcsCompatibility = value;
  }
  public resetPipelineEcsCompatibility() {
    this._pipelineEcsCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineEcsCompatibilityInput() {
    return this._pipelineEcsCompatibility;
  }

  // pipeline_ordered - computed: false, optional: true, required: false
  private _pipelineOrdered?: string; 
  public get pipelineOrdered() {
    return this.getStringAttribute('pipeline_ordered');
  }
  public set pipelineOrdered(value: string) {
    this._pipelineOrdered = value;
  }
  public resetPipelineOrdered() {
    this._pipelineOrdered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineOrderedInput() {
    return this._pipelineOrdered;
  }

  // pipeline_workers - computed: false, optional: true, required: false
  private _pipelineWorkers?: number; 
  public get pipelineWorkers() {
    return this.getNumberAttribute('pipeline_workers');
  }
  public set pipelineWorkers(value: number) {
    this._pipelineWorkers = value;
  }
  public resetPipelineWorkers() {
    this._pipelineWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineWorkersInput() {
    return this._pipelineWorkers;
  }

  // queue_checkpoint_writes - computed: false, optional: true, required: false
  private _queueCheckpointWrites?: number; 
  public get queueCheckpointWrites() {
    return this.getNumberAttribute('queue_checkpoint_writes');
  }
  public set queueCheckpointWrites(value: number) {
    this._queueCheckpointWrites = value;
  }
  public resetQueueCheckpointWrites() {
    this._queueCheckpointWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCheckpointWritesInput() {
    return this._queueCheckpointWrites;
  }

  // queue_max_bytes - computed: false, optional: true, required: false
  private _queueMaxBytes?: string; 
  public get queueMaxBytes() {
    return this.getStringAttribute('queue_max_bytes');
  }
  public set queueMaxBytes(value: string) {
    this._queueMaxBytes = value;
  }
  public resetQueueMaxBytes() {
    this._queueMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxBytesInput() {
    return this._queueMaxBytes;
  }

  // queue_type - computed: false, optional: true, required: false
  private _queueType?: string; 
  public get queueType() {
    return this.getStringAttribute('queue_type');
  }
  public set queueType(value: string) {
    this._queueType = value;
  }
  public resetQueueType() {
    this._queueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTypeInput() {
    return this._queueType;
  }
}

export class LogstashPipelineSettingsList extends cdktf.ComplexList {
  public internalValue? : LogstashPipelineSettings[] | cdktf.IResolvable

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
  public get(index: number): LogstashPipelineSettingsOutputReference {
    return new LogstashPipelineSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline kibana_logstash_pipeline}
*/
export class LogstashPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kibana_logstash_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogstashPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogstashPipeline to import
  * @param importFromId The id of the existing LogstashPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogstashPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kibana_logstash_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/kibana/8.5.3/docs/resources/logstash_pipeline kibana_logstash_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogstashPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: LogstashPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'kibana_logstash_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'kibana',
        providerVersion: '8.5.3',
        providerVersionConstraint: '8.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._pipeline = config.pipeline;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new LogstashPipelineSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: LogstashPipelineSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pipeline: cdktf.stringToTerraform(this._pipeline),
      settings: cdktf.listMapper(logstashPipelineSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline: {
        value: cdktf.stringToHclTerraform(this._pipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.listMapperHcl(logstashPipelineSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogstashPipelineSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
