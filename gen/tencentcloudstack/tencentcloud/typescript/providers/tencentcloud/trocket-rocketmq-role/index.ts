// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrocketRocketmqRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#id TrocketRocketmqRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#instance_id TrocketRocketmqRole#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to enable consumption permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#perm_read TrocketRocketmqRole#perm_read}
  */
  readonly permRead: boolean | cdktf.IResolvable;
  /**
  * Whether to enable production permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#perm_write TrocketRocketmqRole#perm_write}
  */
  readonly permWrite: boolean | cdktf.IResolvable;
  /**
  * remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#remark TrocketRocketmqRole#remark}
  */
  readonly remark: string;
  /**
  * Name of role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#role TrocketRocketmqRole#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role tencentcloud_trocket_rocketmq_role}
*/
export class TrocketRocketmqRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_trocket_rocketmq_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrocketRocketmqRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrocketRocketmqRole to import
  * @param importFromId The id of the existing TrocketRocketmqRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrocketRocketmqRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_trocket_rocketmq_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/trocket_rocketmq_role tencentcloud_trocket_rocketmq_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrocketRocketmqRoleConfig
  */
  public constructor(scope: Construct, id: string, config: TrocketRocketmqRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_trocket_rocketmq_role',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._permRead = config.permRead;
    this._permWrite = config.permWrite;
    this._remark = config.remark;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
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

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // perm_read - computed: false, optional: false, required: true
  private _permRead?: boolean | cdktf.IResolvable; 
  public get permRead() {
    return this.getBooleanAttribute('perm_read');
  }
  public set permRead(value: boolean | cdktf.IResolvable) {
    this._permRead = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permReadInput() {
    return this._permRead;
  }

  // perm_write - computed: false, optional: false, required: true
  private _permWrite?: boolean | cdktf.IResolvable; 
  public get permWrite() {
    return this.getBooleanAttribute('perm_write');
  }
  public set permWrite(value: boolean | cdktf.IResolvable) {
    this._permWrite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permWriteInput() {
    return this._permWrite;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      perm_read: cdktf.booleanToTerraform(this._permRead),
      perm_write: cdktf.booleanToTerraform(this._permWrite),
      remark: cdktf.stringToTerraform(this._remark),
      role: cdktf.stringToTerraform(this._role),
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
      perm_read: {
        value: cdktf.booleanToHclTerraform(this._permRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perm_write: {
        value: cdktf.booleanToHclTerraform(this._permWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
