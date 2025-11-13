// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterRoleConfigurationPermissionPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment#id IdentityCenterRoleConfigurationPermissionPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Permission configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment#role_configuration_id IdentityCenterRoleConfigurationPermissionPolicyAttachment#role_configuration_id}
  */
  readonly roleConfigurationId: string;
  /**
  * Role policy id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment#role_policy_id IdentityCenterRoleConfigurationPermissionPolicyAttachment#role_policy_id}
  */
  readonly rolePolicyId: number;
  /**
  * Role policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment#role_policy_name IdentityCenterRoleConfigurationPermissionPolicyAttachment#role_policy_name}
  */
  readonly rolePolicyName?: string;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment#zone_id IdentityCenterRoleConfigurationPermissionPolicyAttachment#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment tencentcloud_identity_center_role_configuration_permission_policy_attachment}
*/
export class IdentityCenterRoleConfigurationPermissionPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_role_configuration_permission_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterRoleConfigurationPermissionPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterRoleConfigurationPermissionPolicyAttachment to import
  * @param importFromId The id of the existing IdentityCenterRoleConfigurationPermissionPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterRoleConfigurationPermissionPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_role_configuration_permission_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/identity_center_role_configuration_permission_policy_attachment tencentcloud_identity_center_role_configuration_permission_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterRoleConfigurationPermissionPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterRoleConfigurationPermissionPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_role_configuration_permission_policy_attachment',
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
    this._rolePolicyId = config.rolePolicyId;
    this._rolePolicyName = config.rolePolicyName;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_time - computed: true, optional: false, required: false
  public get addTime() {
    return this.getStringAttribute('add_time');
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

  // role_policy_document - computed: true, optional: false, required: false
  public get rolePolicyDocument() {
    return this.getStringAttribute('role_policy_document');
  }

  // role_policy_id - computed: false, optional: false, required: true
  private _rolePolicyId?: number; 
  public get rolePolicyId() {
    return this.getNumberAttribute('role_policy_id');
  }
  public set rolePolicyId(value: number) {
    this._rolePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePolicyIdInput() {
    return this._rolePolicyId;
  }

  // role_policy_name - computed: true, optional: true, required: false
  private _rolePolicyName?: string; 
  public get rolePolicyName() {
    return this.getStringAttribute('role_policy_name');
  }
  public set rolePolicyName(value: string) {
    this._rolePolicyName = value;
  }
  public resetRolePolicyName() {
    this._rolePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePolicyNameInput() {
    return this._rolePolicyName;
  }

  // role_policy_type - computed: true, optional: false, required: false
  public get rolePolicyType() {
    return this.getStringAttribute('role_policy_type');
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
      role_policy_id: cdktf.numberToTerraform(this._rolePolicyId),
      role_policy_name: cdktf.stringToTerraform(this._rolePolicyName),
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
      role_policy_id: {
        value: cdktf.numberToHclTerraform(this._rolePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_policy_name: {
        value: cdktf.stringToHclTerraform(this._rolePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
