// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The remote ID of the access level to grant to this user. If omitted, the default access level remote ID value (empty string) is used. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user#access_level_remote_id GroupUser#access_level_remote_id}
  */
  readonly accessLevelRemoteId?: string;
  /**
  * Must be set to 0. Any nonzerovalue in terraform does not make sense. Default: 0; must be "0"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user#duration_minutes GroupUser#duration_minutes}
  */
  readonly durationMinutes?: number;
  /**
  * The ID of the group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user#group_id GroupUser#group_id}
  */
  readonly groupId: string;
  /**
  * The ID of the user to add. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user#user_id GroupUser#user_id}
  */
  readonly userId: string;
}
export interface GroupUserAccessLevel {
}

export function groupUserAccessLevelToTerraform(struct?: GroupUserAccessLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupUserAccessLevelToHclTerraform(struct?: GroupUserAccessLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupUserAccessLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserAccessLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupUserAccessLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level_name - computed: true, optional: false, required: false
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }

  // access_level_remote_id - computed: true, optional: false, required: false
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }
}
export interface GroupUserPropagationStatus {
}

export function groupUserPropagationStatusToTerraform(struct?: GroupUserPropagationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupUserPropagationStatusToHclTerraform(struct?: GroupUserPropagationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupUserPropagationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserPropagationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupUserPropagationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user opal_group_user}
*/
export class GroupUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupUser to import
  * @param importFromId The id of the existing GroupUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_user opal_group_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupUserConfig
  */
  public constructor(scope: Construct, id: string, config: GroupUserConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group_user',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelRemoteId = config.accessLevelRemoteId;
    this._durationMinutes = config.durationMinutes;
    this._groupId = config.groupId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: true, optional: false, required: false
  private _accessLevel = new GroupUserAccessLevelOutputReference(this, "access_level");
  public get accessLevel() {
    return this._accessLevel;
  }

  // access_level_remote_id - computed: false, optional: true, required: false
  private _accessLevelRemoteId?: string; 
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }
  public set accessLevelRemoteId(value: string) {
    this._accessLevelRemoteId = value;
  }
  public resetAccessLevelRemoteId() {
    this._accessLevelRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelRemoteIdInput() {
    return this._accessLevelRemoteId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration_minutes - computed: true, optional: true, required: false
  private _durationMinutes?: number; 
  public get durationMinutes() {
    return this.getNumberAttribute('duration_minutes');
  }
  public set durationMinutes(value: number) {
    this._durationMinutes = value;
  }
  public resetDurationMinutes() {
    this._durationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationMinutesInput() {
    return this._durationMinutes;
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // propagation_status - computed: true, optional: false, required: false
  private _propagationStatus = new GroupUserPropagationStatusOutputReference(this, "propagation_status");
  public get propagationStatus() {
    return this._propagationStatus;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_remote_id: cdktf.stringToTerraform(this._accessLevelRemoteId),
      duration_minutes: cdktf.numberToTerraform(this._durationMinutes),
      group_id: cdktf.stringToTerraform(this._groupId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_remote_id: {
        value: cdktf.stringToHclTerraform(this._accessLevelRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_minutes: {
        value: cdktf.numberToHclTerraform(this._durationMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
