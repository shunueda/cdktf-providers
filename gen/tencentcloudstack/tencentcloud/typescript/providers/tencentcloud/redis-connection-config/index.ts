// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisConnectionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Refers to the additional bandwidth of the instance. When the standard bandwidth does not meet the demand, the user can increase the bandwidth by himself. When the read-only copy is enabled, the total bandwidth of the instance = additional bandwidth * number of fragments + standard bandwidth * number of fragments * Max ([number of read-only replicas, 1] ), the number of shards in the standard architecture = 1, and when read-only replicas are not enabled, the total bandwidth of the instance = additional bandwidth * number of shards + standard bandwidth * number of shards, and the number of shards in the standard architecture = 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config#add_bandwidth RedisConnectionConfig#add_bandwidth}
  */
  readonly addBandwidth?: number;
  /**
  * The total number of connections per shard.If read-only replicas are not enabled, the lower limit is 10,000 and the upper limit is 40,000.When you enable read-only replicas, the minimum limit is 10,000 and the upper limit is 10,000 * (the number of read replicas +3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config#client_limit RedisConnectionConfig#client_limit}
  */
  readonly clientLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config#id RedisConnectionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config#instance_id RedisConnectionConfig#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config tencentcloud_redis_connection_config}
*/
export class RedisConnectionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_connection_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisConnectionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisConnectionConfig to import
  * @param importFromId The id of the existing RedisConnectionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisConnectionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_connection_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/redis_connection_config tencentcloud_redis_connection_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisConnectionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: RedisConnectionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_connection_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addBandwidth = config.addBandwidth;
    this._clientLimit = config.clientLimit;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_bandwidth - computed: true, optional: true, required: false
  private _addBandwidth?: number; 
  public get addBandwidth() {
    return this.getNumberAttribute('add_bandwidth');
  }
  public set addBandwidth(value: number) {
    this._addBandwidth = value;
  }
  public resetAddBandwidth() {
    this._addBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addBandwidthInput() {
    return this._addBandwidth;
  }

  // base_bandwidth - computed: true, optional: false, required: false
  public get baseBandwidth() {
    return this.getNumberAttribute('base_bandwidth');
  }

  // client_limit - computed: false, optional: true, required: false
  private _clientLimit?: number; 
  public get clientLimit() {
    return this.getNumberAttribute('client_limit');
  }
  public set clientLimit(value: number) {
    this._clientLimit = value;
  }
  public resetClientLimit() {
    this._clientLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitInput() {
    return this._clientLimit;
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

  // max_add_bandwidth - computed: true, optional: false, required: false
  public get maxAddBandwidth() {
    return this.getNumberAttribute('max_add_bandwidth');
  }

  // min_add_bandwidth - computed: true, optional: false, required: false
  public get minAddBandwidth() {
    return this.getNumberAttribute('min_add_bandwidth');
  }

  // total_bandwidth - computed: true, optional: false, required: false
  public get totalBandwidth() {
    return this.getNumberAttribute('total_bandwidth');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_bandwidth: cdktf.numberToTerraform(this._addBandwidth),
      client_limit: cdktf.numberToTerraform(this._clientLimit),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_bandwidth: {
        value: cdktf.numberToHclTerraform(this._addBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_limit: {
        value: cdktf.numberToHclTerraform(this._clientLimit),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
