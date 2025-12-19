// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * When you remove the last authorization configured with a certain privilege on a group account target account, whether to cancel the privilege configuration deployment at the same time. Value: DeprovisionForLastRoleAssignmentOnAccount: Remove privileges to configure deployment. None (default): Configure deployment without delegating privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#deprovision_strategy IdentityCenterRoleAssignment#deprovision_strategy}
  */
  readonly deprovisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#id IdentityCenterRoleAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identity ID for the CAM user synchronization. Valid values:
  * When the PrincipalType value is Group, it is the CIC user group ID (g-********).
  * When the PrincipalType value is User, it is the CIC user ID (u-********).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#principal_id IdentityCenterRoleAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * Identity type for the CAM user synchronization. Valid values:
  * 
  * User: indicates that the identity for the CAM user synchronization is a CIC user.
  * Group: indicates that the identity for the CAM user synchronization is a CIC user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#principal_type IdentityCenterRoleAssignment#principal_type}
  */
  readonly principalType: string;
  /**
  * Permission configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#role_configuration_id IdentityCenterRoleAssignment#role_configuration_id}
  */
  readonly roleConfigurationId: string;
  /**
  * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#target_type IdentityCenterRoleAssignment#target_type}
  */
  readonly targetType: string;
  /**
  * UIN of the synchronized target account of the Tencent Cloud Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#target_uin IdentityCenterRoleAssignment#target_uin}
  */
  readonly targetUin: number;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#zone_id IdentityCenterRoleAssignment#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment tencentcloud_identity_center_role_assignment}
*/
export class IdentityCenterRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterRoleAssignment to import
  * @param importFromId The id of the existing IdentityCenterRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_role_assignment tencentcloud_identity_center_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deprovisionStrategy = config.deprovisionStrategy;
    this._id = config.id;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
    this._roleConfigurationId = config.roleConfigurationId;
    this._targetType = config.targetType;
    this._targetUin = config.targetUin;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deprovision_strategy - computed: false, optional: true, required: false
  private _deprovisionStrategy?: string; 
  public get deprovisionStrategy() {
    return this.getStringAttribute('deprovision_strategy');
  }
  public set deprovisionStrategy(value: string) {
    this._deprovisionStrategy = value;
  }
  public resetDeprovisionStrategy() {
    this._deprovisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionStrategyInput() {
    return this._deprovisionStrategy;
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

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
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

  // role_configuration_name - computed: true, optional: false, required: false
  public get roleConfigurationName() {
    return this.getStringAttribute('role_configuration_name');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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
      deprovision_strategy: cdktf.stringToTerraform(this._deprovisionStrategy),
      id: cdktf.stringToTerraform(this._id),
      principal_id: cdktf.stringToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
      role_configuration_id: cdktf.stringToTerraform(this._roleConfigurationId),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_uin: cdktf.numberToTerraform(this._targetUin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deprovision_strategy: {
        value: cdktf.stringToHclTerraform(this._deprovisionStrategy),
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
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_type: {
        value: cdktf.stringToHclTerraform(this._principalType),
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
