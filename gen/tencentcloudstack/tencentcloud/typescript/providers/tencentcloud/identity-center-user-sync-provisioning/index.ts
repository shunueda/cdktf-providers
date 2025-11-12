// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterUserSyncProvisioningConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deletion policy. It indicates the handling policy for CAM users already synchronized when the CAM user synchronization is deleted. Valid values: Delete: Delete the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted; Keep: Keep the CAM users already synchronized from CIC to CAM when the CAM user synchronization is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#deletion_strategy IdentityCenterUserSyncProvisioning#deletion_strategy}
  */
  readonly deletionStrategy?: string;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#description IdentityCenterUserSyncProvisioning#description}
  */
  readonly description?: string;
  /**
  * Conflict policy. It indicates the handling policy for existence of a user with the same username when CIC users are synchronized to CAM. Valid values: KeepBoth: Keep both, that is, add the _cic suffix to the CIC user's username and then try to create a CAM user with the username when CIC users are synchronized to CAM and a user with the same username already exists in CAM; TakeOver: Replace, that is, directly replace the existing CAM user with the synchronized CIC user when CIC users are synchronized to CAM and a user with the same username already exists in CAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#duplication_strategy IdentityCenterUserSyncProvisioning#duplication_strategy}
  */
  readonly duplicationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#id IdentityCenterUserSyncProvisioning#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#principal_id IdentityCenterUserSyncProvisioning#principal_id}
  */
  readonly principalId?: string;
  /**
  * Identity type for the CAM user synchronization. Valid values:
  * 
  * User: indicates that the identity for the CAM user synchronization is a CIC user.
  * Group: indicates that the identity for the CAM user synchronization is a CIC user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#principal_type IdentityCenterUserSyncProvisioning#principal_type}
  */
  readonly principalType?: string;
  /**
  * Type of the synchronized target account of the Tencent Cloud Organization. ManagerUin: admin account; MemberUin: member account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#target_type IdentityCenterUserSyncProvisioning#target_type}
  */
  readonly targetType?: string;
  /**
  * UIN of the synchronized target account of the Tencent Cloud Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#target_uin IdentityCenterUserSyncProvisioning#target_uin}
  */
  readonly targetUin?: number;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#zone_id IdentityCenterUserSyncProvisioning#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning tencentcloud_identity_center_user_sync_provisioning}
*/
export class IdentityCenterUserSyncProvisioning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_user_sync_provisioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterUserSyncProvisioning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterUserSyncProvisioning to import
  * @param importFromId The id of the existing IdentityCenterUserSyncProvisioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterUserSyncProvisioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_user_sync_provisioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/identity_center_user_sync_provisioning tencentcloud_identity_center_user_sync_provisioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterUserSyncProvisioningConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterUserSyncProvisioningConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_user_sync_provisioning',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionStrategy = config.deletionStrategy;
    this._description = config.description;
    this._duplicationStrategy = config.duplicationStrategy;
    this._id = config.id;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
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

  // deletion_strategy - computed: false, optional: true, required: false
  private _deletionStrategy?: string; 
  public get deletionStrategy() {
    return this.getStringAttribute('deletion_strategy');
  }
  public set deletionStrategy(value: string) {
    this._deletionStrategy = value;
  }
  public resetDeletionStrategy() {
    this._deletionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionStrategyInput() {
    return this._deletionStrategy;
  }

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

  // duplication_strategy - computed: false, optional: true, required: false
  private _duplicationStrategy?: string; 
  public get duplicationStrategy() {
    return this.getStringAttribute('duplication_strategy');
  }
  public set duplicationStrategy(value: string) {
    this._duplicationStrategy = value;
  }
  public resetDuplicationStrategy() {
    this._duplicationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationStrategyInput() {
    return this._duplicationStrategy;
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

  // principal_id - computed: false, optional: true, required: false
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // principal_type - computed: false, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // target_uin - computed: false, optional: true, required: false
  private _targetUin?: number; 
  public get targetUin() {
    return this.getNumberAttribute('target_uin');
  }
  public set targetUin(value: number) {
    this._targetUin = value;
  }
  public resetTargetUin() {
    this._targetUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUinInput() {
    return this._targetUin;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user_provisioning_id - computed: true, optional: false, required: false
  public get userProvisioningId() {
    return this.getStringAttribute('user_provisioning_id');
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
      deletion_strategy: cdktf.stringToTerraform(this._deletionStrategy),
      description: cdktf.stringToTerraform(this._description),
      duplication_strategy: cdktf.stringToTerraform(this._duplicationStrategy),
      id: cdktf.stringToTerraform(this._id),
      principal_id: cdktf.stringToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
      target_type: cdktf.stringToTerraform(this._targetType),
      target_uin: cdktf.numberToTerraform(this._targetUin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_strategy: {
        value: cdktf.stringToHclTerraform(this._deletionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplication_strategy: {
        value: cdktf.stringToHclTerraform(this._duplicationStrategy),
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
