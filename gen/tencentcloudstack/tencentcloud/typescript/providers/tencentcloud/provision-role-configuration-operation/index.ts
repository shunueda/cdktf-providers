// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProvisionRoleConfigurationOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation#id ProvisionRoleConfigurationOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Permission configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation#role_configuration_id ProvisionRoleConfigurationOperation#role_configuration_id}
  */
  readonly roleConfigurationId: string;
  /**
  * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation#target_type ProvisionRoleConfigurationOperation#target_type}
  */
  readonly targetType: string;
  /**
  * UIN of the target account of the Tencent Cloud Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation#target_uin ProvisionRoleConfigurationOperation#target_uin}
  */
  readonly targetUin: number;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation#zone_id ProvisionRoleConfigurationOperation#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation tencentcloud_provision_role_configuration_operation}
*/
export class ProvisionRoleConfigurationOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_provision_role_configuration_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProvisionRoleConfigurationOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProvisionRoleConfigurationOperation to import
  * @param importFromId The id of the existing ProvisionRoleConfigurationOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProvisionRoleConfigurationOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_provision_role_configuration_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/provision_role_configuration_operation tencentcloud_provision_role_configuration_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProvisionRoleConfigurationOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ProvisionRoleConfigurationOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_provision_role_configuration_operation',
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
    this._roleConfigurationId = config.roleConfigurationId;
    this._targetType = config.targetType;
    this._targetUin = config.targetUin;
    this._zoneId = config.zoneId;
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

  // role_configuration_id - computed: false, optional: false, required: true
  private _roleConfigurationId?: string; 
  public get roleConfigurationId() {
    return this.getStringAttribute('role_configuration_id');
  }
  public set roleConfigurationId(value: string) {
    this._roleConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigurationIdInput() {
    return this._roleConfigurationId;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // target_uin - computed: false, optional: false, required: true
  private _targetUin?: number; 
  public get targetUin() {
    return this.getNumberAttribute('target_uin');
  }
  public set targetUin(value: number) {
    this._targetUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUinInput() {
    return this._targetUin;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_configuration_id: cdktf.stringToTerraform(this._roleConfigurationId),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_uin: cdktf.numberToTerraform(this._targetUin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      role_configuration_id: {
        value: cdktf.stringToHclTerraform(this._roleConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_uin: {
        value: cdktf.numberToHclTerraform(this._targetUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
