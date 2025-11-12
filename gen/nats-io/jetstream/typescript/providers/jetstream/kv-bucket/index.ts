// https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KvBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contains additional information about this bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#description KvBucket#description}
  */
  readonly description?: string;
  /**
  * How many historical values to keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#history KvBucket#history}
  */
  readonly history?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#id KvBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables Per-Key TTLs and Limit Markers, duration specified in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#limit_marker_ttl KvBucket#limit_marker_ttl}
  */
  readonly limitMarkerTtl?: number;
  /**
  * Maximum size of the entire bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#max_bucket_size KvBucket#max_bucket_size}
  */
  readonly maxBucketSize?: number;
  /**
  * Maximum size of any value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#max_value_size KvBucket#max_value_size}
  */
  readonly maxValueSize?: number;
  /**
  * The name of the Bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#name KvBucket#name}
  */
  readonly name: string;
  /**
  * Place the bucket in a specific cluster, influenced by placement_tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#placement_cluster KvBucket#placement_cluster}
  */
  readonly placementCluster?: string;
  /**
  * Place the stream only on servers with these tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#placement_tags KvBucket#placement_tags}
  */
  readonly placementTags?: string[];
  /**
  * Number of cluster replicas to store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#replicas KvBucket#replicas}
  */
  readonly replicas?: number;
  /**
  * How many seconds a value will be kept in the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#ttl KvBucket#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket jetstream_kv_bucket}
*/
export class KvBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jetstream_kv_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KvBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KvBucket to import
  * @param importFromId The id of the existing KvBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KvBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jetstream_kv_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/kv_bucket jetstream_kv_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KvBucketConfig
  */
  public constructor(scope: Construct, id: string, config: KvBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'jetstream_kv_bucket',
      terraformGeneratorMetadata: {
        providerName: 'jetstream',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
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
    this._history = config.history;
    this._id = config.id;
    this._limitMarkerTtl = config.limitMarkerTtl;
    this._maxBucketSize = config.maxBucketSize;
    this._maxValueSize = config.maxValueSize;
    this._name = config.name;
    this._placementCluster = config.placementCluster;
    this._placementTags = config.placementTags;
    this._replicas = config.replicas;
    this._ttl = config.ttl;
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

  // history - computed: false, optional: true, required: false
  private _history?: number; 
  public get history() {
    return this.getNumberAttribute('history');
  }
  public set history(value: number) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
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

  // limit_marker_ttl - computed: false, optional: true, required: false
  private _limitMarkerTtl?: number; 
  public get limitMarkerTtl() {
    return this.getNumberAttribute('limit_marker_ttl');
  }
  public set limitMarkerTtl(value: number) {
    this._limitMarkerTtl = value;
  }
  public resetLimitMarkerTtl() {
    this._limitMarkerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMarkerTtlInput() {
    return this._limitMarkerTtl;
  }

  // max_bucket_size - computed: false, optional: true, required: false
  private _maxBucketSize?: number; 
  public get maxBucketSize() {
    return this.getNumberAttribute('max_bucket_size');
  }
  public set maxBucketSize(value: number) {
    this._maxBucketSize = value;
  }
  public resetMaxBucketSize() {
    this._maxBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBucketSizeInput() {
    return this._maxBucketSize;
  }

  // max_value_size - computed: false, optional: true, required: false
  private _maxValueSize?: number; 
  public get maxValueSize() {
    return this.getNumberAttribute('max_value_size');
  }
  public set maxValueSize(value: number) {
    this._maxValueSize = value;
  }
  public resetMaxValueSize() {
    this._maxValueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueSizeInput() {
    return this._maxValueSize;
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

  // placement_cluster - computed: false, optional: true, required: false
  private _placementCluster?: string; 
  public get placementCluster() {
    return this.getStringAttribute('placement_cluster');
  }
  public set placementCluster(value: string) {
    this._placementCluster = value;
  }
  public resetPlacementCluster() {
    this._placementCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementClusterInput() {
    return this._placementCluster;
  }

  // placement_tags - computed: false, optional: true, required: false
  private _placementTags?: string[]; 
  public get placementTags() {
    return this.getListAttribute('placement_tags');
  }
  public set placementTags(value: string[]) {
    this._placementTags = value;
  }
  public resetPlacementTags() {
    this._placementTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTagsInput() {
    return this._placementTags;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      history: cdktf.numberToTerraform(this._history),
      id: cdktf.stringToTerraform(this._id),
      limit_marker_ttl: cdktf.numberToTerraform(this._limitMarkerTtl),
      max_bucket_size: cdktf.numberToTerraform(this._maxBucketSize),
      max_value_size: cdktf.numberToTerraform(this._maxValueSize),
      name: cdktf.stringToTerraform(this._name),
      placement_cluster: cdktf.stringToTerraform(this._placementCluster),
      placement_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._placementTags),
      replicas: cdktf.numberToTerraform(this._replicas),
      ttl: cdktf.numberToTerraform(this._ttl),
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
      history: {
        value: cdktf.numberToHclTerraform(this._history),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_marker_ttl: {
        value: cdktf.numberToHclTerraform(this._limitMarkerTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_bucket_size: {
        value: cdktf.numberToHclTerraform(this._maxBucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_value_size: {
        value: cdktf.numberToHclTerraform(this._maxValueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_cluster: {
        value: cdktf.stringToHclTerraform(this._placementCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._placementTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
