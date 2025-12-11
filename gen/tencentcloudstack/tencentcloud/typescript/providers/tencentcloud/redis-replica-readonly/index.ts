// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisReplicaReadonlyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly#id RedisReplicaReadonly#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly#instance_id RedisReplicaReadonly#instance_id}
  */
  readonly instanceId: string;
  /**
  * The replica is read-only, `enable` - enable read-write splitting, `disable`- disable read-write splitting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly#operate RedisReplicaReadonly#operate}
  */
  readonly operate: string;
  /**
  * Routing policy: Enter `master` or `replication`, which indicates the master node or slave node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly#readonly_policy RedisReplicaReadonly#readonly_policy}
  */
  readonly readonlyPolicy?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly tencentcloud_redis_replica_readonly}
*/
export class RedisReplicaReadonly extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_replica_readonly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisReplicaReadonly resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisReplicaReadonly to import
  * @param importFromId The id of the existing RedisReplicaReadonly that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisReplicaReadonly to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_replica_readonly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/redis_replica_readonly tencentcloud_redis_replica_readonly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisReplicaReadonlyConfig
  */
  public constructor(scope: Construct, id: string, config: RedisReplicaReadonlyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_replica_readonly',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._operate = config.operate;
    this._readonlyPolicy = config.readonlyPolicy;
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

  // operate - computed: false, optional: false, required: true
  private _operate?: string; 
  public get operate() {
    return this.getStringAttribute('operate');
  }
  public set operate(value: string) {
    this._operate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operateInput() {
    return this._operate;
  }

  // readonly_policy - computed: false, optional: true, required: false
  private _readonlyPolicy?: string[]; 
  public get readonlyPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('readonly_policy'));
  }
  public set readonlyPolicy(value: string[]) {
    this._readonlyPolicy = value;
  }
  public resetReadonlyPolicy() {
    this._readonlyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyPolicyInput() {
    return this._readonlyPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      operate: cdktf.stringToTerraform(this._operate),
      readonly_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readonlyPolicy),
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
      operate: {
        value: cdktf.stringToHclTerraform(this._operate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readonly_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readonlyPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
