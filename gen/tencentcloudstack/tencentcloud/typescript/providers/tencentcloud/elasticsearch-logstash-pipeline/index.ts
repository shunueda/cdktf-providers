// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchLogstashPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#id ElasticsearchLogstashPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logstash instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#instance_id ElasticsearchLogstashPipeline#instance_id}
  */
  readonly instanceId: string;
  /**
  * Operation type. 1: save only; 2: save and deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#op_type ElasticsearchLogstashPipeline#op_type}
  */
  readonly opType: number;
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#pipeline ElasticsearchLogstashPipeline#pipeline}
  */
  readonly pipeline: ElasticsearchLogstashPipelinePipeline;
}
export interface ElasticsearchLogstashPipelinePipeline {
  /**
  * Pipeline batch processing delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#batch_delay ElasticsearchLogstashPipeline#batch_delay}
  */
  readonly batchDelay: number;
  /**
  * Pipe batch size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#batch_size ElasticsearchLogstashPipeline#batch_size}
  */
  readonly batchSize: number;
  /**
  * Pipeline configuration content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#config ElasticsearchLogstashPipeline#config}
  */
  readonly config: string;
  /**
  * Pipeline description information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#pipeline_desc ElasticsearchLogstashPipeline#pipeline_desc}
  */
  readonly pipelineDesc: string;
  /**
  * Pipeline id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#pipeline_id ElasticsearchLogstashPipeline#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Number of pipeline buffer queue checkpoint writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#queue_check_point_writes ElasticsearchLogstashPipeline#queue_check_point_writes}
  */
  readonly queueCheckPointWrites: number;
  /**
  * Pipeline buffer queue size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#queue_max_bytes ElasticsearchLogstashPipeline#queue_max_bytes}
  */
  readonly queueMaxBytes: string;
  /**
  * Pipeline buffer queue type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#queue_type ElasticsearchLogstashPipeline#queue_type}
  */
  readonly queueType: string;
  /**
  * Number of Worker of pipe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#workers ElasticsearchLogstashPipeline#workers}
  */
  readonly workers: number;
}

export function elasticsearchLogstashPipelinePipelineToTerraform(struct?: ElasticsearchLogstashPipelinePipelineOutputReference | ElasticsearchLogstashPipelinePipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_delay: cdktf.numberToTerraform(struct!.batchDelay),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    config: cdktf.stringToTerraform(struct!.config),
    pipeline_desc: cdktf.stringToTerraform(struct!.pipelineDesc),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    queue_check_point_writes: cdktf.numberToTerraform(struct!.queueCheckPointWrites),
    queue_max_bytes: cdktf.stringToTerraform(struct!.queueMaxBytes),
    queue_type: cdktf.stringToTerraform(struct!.queueType),
    workers: cdktf.numberToTerraform(struct!.workers),
  }
}


export function elasticsearchLogstashPipelinePipelineToHclTerraform(struct?: ElasticsearchLogstashPipelinePipelineOutputReference | ElasticsearchLogstashPipelinePipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_delay: {
      value: cdktf.numberToHclTerraform(struct!.batchDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_desc: {
      value: cdktf.stringToHclTerraform(struct!.pipelineDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_check_point_writes: {
      value: cdktf.numberToHclTerraform(struct!.queueCheckPointWrites),
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
    workers: {
      value: cdktf.numberToHclTerraform(struct!.workers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchLogstashPipelinePipelineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchLogstashPipelinePipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchDelay = this._batchDelay;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._pipelineDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineDesc = this._pipelineDesc;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._queueCheckPointWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCheckPointWrites = this._queueCheckPointWrites;
    }
    if (this._queueMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueMaxBytes = this._queueMaxBytes;
    }
    if (this._queueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueType = this._queueType;
    }
    if (this._workers !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchLogstashPipelinePipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchDelay = undefined;
      this._batchSize = undefined;
      this._config = undefined;
      this._pipelineDesc = undefined;
      this._pipelineId = undefined;
      this._queueCheckPointWrites = undefined;
      this._queueMaxBytes = undefined;
      this._queueType = undefined;
      this._workers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchDelay = value.batchDelay;
      this._batchSize = value.batchSize;
      this._config = value.config;
      this._pipelineDesc = value.pipelineDesc;
      this._pipelineId = value.pipelineId;
      this._queueCheckPointWrites = value.queueCheckPointWrites;
      this._queueMaxBytes = value.queueMaxBytes;
      this._queueType = value.queueType;
      this._workers = value.workers;
    }
  }

  // batch_delay - computed: false, optional: false, required: true
  private _batchDelay?: number; 
  public get batchDelay() {
    return this.getNumberAttribute('batch_delay');
  }
  public set batchDelay(value: number) {
    this._batchDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchDelayInput() {
    return this._batchDelay;
  }

  // batch_size - computed: false, optional: false, required: true
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // pipeline_desc - computed: false, optional: false, required: true
  private _pipelineDesc?: string; 
  public get pipelineDesc() {
    return this.getStringAttribute('pipeline_desc');
  }
  public set pipelineDesc(value: string) {
    this._pipelineDesc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDescInput() {
    return this._pipelineDesc;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // queue_check_point_writes - computed: false, optional: false, required: true
  private _queueCheckPointWrites?: number; 
  public get queueCheckPointWrites() {
    return this.getNumberAttribute('queue_check_point_writes');
  }
  public set queueCheckPointWrites(value: number) {
    this._queueCheckPointWrites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCheckPointWritesInput() {
    return this._queueCheckPointWrites;
  }

  // queue_max_bytes - computed: false, optional: false, required: true
  private _queueMaxBytes?: string; 
  public get queueMaxBytes() {
    return this.getStringAttribute('queue_max_bytes');
  }
  public set queueMaxBytes(value: string) {
    this._queueMaxBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxBytesInput() {
    return this._queueMaxBytes;
  }

  // queue_type - computed: false, optional: false, required: true
  private _queueType?: string; 
  public get queueType() {
    return this.getStringAttribute('queue_type');
  }
  public set queueType(value: string) {
    this._queueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTypeInput() {
    return this._queueType;
  }

  // workers - computed: false, optional: false, required: true
  private _workers?: number; 
  public get workers() {
    return this.getNumberAttribute('workers');
  }
  public set workers(value: number) {
    this._workers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline tencentcloud_elasticsearch_logstash_pipeline}
*/
export class ElasticsearchLogstashPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_logstash_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchLogstashPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchLogstashPipeline to import
  * @param importFromId The id of the existing ElasticsearchLogstashPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchLogstashPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_logstash_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/elasticsearch_logstash_pipeline tencentcloud_elasticsearch_logstash_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchLogstashPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchLogstashPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_logstash_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._opType = config.opType;
    this._pipeline.internalValue = config.pipeline;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // op_type - computed: false, optional: false, required: true
  private _opType?: number; 
  public get opType() {
    return this.getNumberAttribute('op_type');
  }
  public set opType(value: number) {
    this._opType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opTypeInput() {
    return this._opType;
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline = new ElasticsearchLogstashPipelinePipelineOutputReference(this, "pipeline");
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: ElasticsearchLogstashPipelinePipeline) {
    this._pipeline.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      op_type: cdktf.numberToTerraform(this._opType),
      pipeline: elasticsearchLogstashPipelinePipelineToTerraform(this._pipeline.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      op_type: {
        value: cdktf.numberToHclTerraform(this._opType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pipeline: {
        value: elasticsearchLogstashPipelinePipelineToHclTerraform(this._pipeline.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchLogstashPipelinePipelineList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
