// https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpIamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#description GcpIamRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#gcp_role_launch_stage GcpIamRole#gcp_role_launch_stage}
  */
  readonly gcpRoleLaunchStage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#id GcpIamRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#last_updated GcpIamRole#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#name GcpIamRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#role_permissions GcpIamRole#role_permissions}
  */
  readonly rolePermissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#system_managed_policy GcpIamRole#system_managed_policy}
  */
  readonly systemManagedPolicy?: boolean | cdktf.IResolvable;
  /**
  * owner_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#owner_user_groups GcpIamRole#owner_user_groups}
  */
  readonly ownerUserGroups?: GcpIamRoleOwnerUserGroups[] | cdktf.IResolvable;
  /**
  * owner_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#owner_users GcpIamRole#owner_users}
  */
  readonly ownerUsers?: GcpIamRoleOwnerUsers[] | cdktf.IResolvable;
}
export interface GcpIamRoleOwnerUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#id GcpIamRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function gcpIamRoleOwnerUserGroupsToTerraform(struct?: GcpIamRoleOwnerUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function gcpIamRoleOwnerUserGroupsToHclTerraform(struct?: GcpIamRoleOwnerUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpIamRoleOwnerUserGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GcpIamRoleOwnerUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpIamRoleOwnerUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class GcpIamRoleOwnerUserGroupsList extends cdktf.ComplexList {
  public internalValue? : GcpIamRoleOwnerUserGroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GcpIamRoleOwnerUserGroupsOutputReference {
    return new GcpIamRoleOwnerUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpIamRoleOwnerUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#id GcpIamRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function gcpIamRoleOwnerUsersToTerraform(struct?: GcpIamRoleOwnerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function gcpIamRoleOwnerUsersToHclTerraform(struct?: GcpIamRoleOwnerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpIamRoleOwnerUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GcpIamRoleOwnerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpIamRoleOwnerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class GcpIamRoleOwnerUsersList extends cdktf.ComplexList {
  public internalValue? : GcpIamRoleOwnerUsers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GcpIamRoleOwnerUsersOutputReference {
    return new GcpIamRoleOwnerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role cloudtamerio_gcp_iam_role}
*/
export class GcpIamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudtamerio_gcp_iam_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpIamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpIamRole to import
  * @param importFromId The id of the existing GcpIamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpIamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudtamerio_gcp_iam_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/gcp_iam_role cloudtamerio_gcp_iam_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpIamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GcpIamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudtamerio_gcp_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'cloudtamerio',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
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
    this._gcpRoleLaunchStage = config.gcpRoleLaunchStage;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._rolePermissions = config.rolePermissions;
    this._systemManagedPolicy = config.systemManagedPolicy;
    this._ownerUserGroups.internalValue = config.ownerUserGroups;
    this._ownerUsers.internalValue = config.ownerUsers;
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

  // gcp_id - computed: true, optional: false, required: false
  public get gcpId() {
    return this.getStringAttribute('gcp_id');
  }

  // gcp_managed_policy - computed: true, optional: false, required: false
  public get gcpManagedPolicy() {
    return this.getBooleanAttribute('gcp_managed_policy');
  }

  // gcp_role_launch_stage - computed: false, optional: false, required: true
  private _gcpRoleLaunchStage?: number; 
  public get gcpRoleLaunchStage() {
    return this.getNumberAttribute('gcp_role_launch_stage');
  }
  public set gcpRoleLaunchStage(value: number) {
    this._gcpRoleLaunchStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpRoleLaunchStageInput() {
    return this._gcpRoleLaunchStage;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // role_permissions - computed: false, optional: false, required: true
  private _rolePermissions?: string[]; 
  public get rolePermissions() {
    return this.getListAttribute('role_permissions');
  }
  public set rolePermissions(value: string[]) {
    this._rolePermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePermissionsInput() {
    return this._rolePermissions;
  }

  // system_managed_policy - computed: false, optional: true, required: false
  private _systemManagedPolicy?: boolean | cdktf.IResolvable; 
  public get systemManagedPolicy() {
    return this.getBooleanAttribute('system_managed_policy');
  }
  public set systemManagedPolicy(value: boolean | cdktf.IResolvable) {
    this._systemManagedPolicy = value;
  }
  public resetSystemManagedPolicy() {
    this._systemManagedPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemManagedPolicyInput() {
    return this._systemManagedPolicy;
  }

  // owner_user_groups - computed: false, optional: true, required: false
  private _ownerUserGroups = new GcpIamRoleOwnerUserGroupsList(this, "owner_user_groups", false);
  public get ownerUserGroups() {
    return this._ownerUserGroups;
  }
  public putOwnerUserGroups(value: GcpIamRoleOwnerUserGroups[] | cdktf.IResolvable) {
    this._ownerUserGroups.internalValue = value;
  }
  public resetOwnerUserGroups() {
    this._ownerUserGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupsInput() {
    return this._ownerUserGroups.internalValue;
  }

  // owner_users - computed: false, optional: true, required: false
  private _ownerUsers = new GcpIamRoleOwnerUsersList(this, "owner_users", false);
  public get ownerUsers() {
    return this._ownerUsers;
  }
  public putOwnerUsers(value: GcpIamRoleOwnerUsers[] | cdktf.IResolvable) {
    this._ownerUsers.internalValue = value;
  }
  public resetOwnerUsers() {
    this._ownerUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUsersInput() {
    return this._ownerUsers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gcp_role_launch_stage: cdktf.numberToTerraform(this._gcpRoleLaunchStage),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      role_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rolePermissions),
      system_managed_policy: cdktf.booleanToTerraform(this._systemManagedPolicy),
      owner_user_groups: cdktf.listMapper(gcpIamRoleOwnerUserGroupsToTerraform, true)(this._ownerUserGroups.internalValue),
      owner_users: cdktf.listMapper(gcpIamRoleOwnerUsersToTerraform, true)(this._ownerUsers.internalValue),
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
      gcp_role_launch_stage: {
        value: cdktf.numberToHclTerraform(this._gcpRoleLaunchStage),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rolePermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      system_managed_policy: {
        value: cdktf.booleanToHclTerraform(this._systemManagedPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner_user_groups: {
        value: cdktf.listMapperHcl(gcpIamRoleOwnerUserGroupsToHclTerraform, true)(this._ownerUserGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpIamRoleOwnerUserGroupsList",
      },
      owner_users: {
        value: cdktf.listMapperHcl(gcpIamRoleOwnerUsersToHclTerraform, true)(this._ownerUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpIamRoleOwnerUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
