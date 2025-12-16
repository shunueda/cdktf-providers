// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyUserManagementRoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#description PolicyUserManagementRoleBinding#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#display_name PolicyUserManagementRoleBinding#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#id PolicyUserManagementRoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the external identity source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#identity_source_id PolicyUserManagementRoleBinding#identity_source_id}
  */
  readonly identitySourceId?: string;
  /**
  * ID of the external identity source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#identity_source_type PolicyUserManagementRoleBinding#identity_source_type}
  */
  readonly identitySourceType?: string;
  /**
  * User/Group's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#name PolicyUserManagementRoleBinding#name}
  */
  readonly name: string;
  /**
  * Allow overwriting auto-created role binding on NSX for local users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#overwrite_local_user PolicyUserManagementRoleBinding#overwrite_local_user}
  */
  readonly overwriteLocalUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates the type of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#type PolicyUserManagementRoleBinding#type}
  */
  readonly type: string;
  /**
  * roles_for_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#roles_for_path PolicyUserManagementRoleBinding#roles_for_path}
  */
  readonly rolesForPath: PolicyUserManagementRoleBindingRolesForPath[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#tag PolicyUserManagementRoleBinding#tag}
  */
  readonly tag?: PolicyUserManagementRoleBindingTag[] | cdktf.IResolvable;
}
export interface PolicyUserManagementRoleBindingRolesForPath {
  /**
  * Path of the entity in parent hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#path PolicyUserManagementRoleBinding#path}
  */
  readonly path: string;
  /**
  * Applicable roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#roles PolicyUserManagementRoleBinding#roles}
  */
  readonly roles: string[];
}

export function policyUserManagementRoleBindingRolesForPathToTerraform(struct?: PolicyUserManagementRoleBindingRolesForPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function policyUserManagementRoleBindingRolesForPathToHclTerraform(struct?: PolicyUserManagementRoleBindingRolesForPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUserManagementRoleBindingRolesForPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUserManagementRoleBindingRolesForPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUserManagementRoleBindingRolesForPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._roles = value.roles;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class PolicyUserManagementRoleBindingRolesForPathList extends cdktf.ComplexList {
  public internalValue? : PolicyUserManagementRoleBindingRolesForPath[] | cdktf.IResolvable

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
  public get(index: number): PolicyUserManagementRoleBindingRolesForPathOutputReference {
    return new PolicyUserManagementRoleBindingRolesForPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUserManagementRoleBindingTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#scope PolicyUserManagementRoleBinding#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#tag PolicyUserManagementRoleBinding#tag}
  */
  readonly tag?: string;
}

export function policyUserManagementRoleBindingTagToTerraform(struct?: PolicyUserManagementRoleBindingTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyUserManagementRoleBindingTagToHclTerraform(struct?: PolicyUserManagementRoleBindingTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUserManagementRoleBindingTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUserManagementRoleBindingTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUserManagementRoleBindingTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyUserManagementRoleBindingTagList extends cdktf.ComplexList {
  public internalValue? : PolicyUserManagementRoleBindingTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyUserManagementRoleBindingTagOutputReference {
    return new PolicyUserManagementRoleBindingTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding nsxt_policy_user_management_role_binding}
*/
export class PolicyUserManagementRoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_user_management_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyUserManagementRoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyUserManagementRoleBinding to import
  * @param importFromId The id of the existing PolicyUserManagementRoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyUserManagementRoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_user_management_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_user_management_role_binding nsxt_policy_user_management_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyUserManagementRoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyUserManagementRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_user_management_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._identitySourceId = config.identitySourceId;
    this._identitySourceType = config.identitySourceType;
    this._name = config.name;
    this._overwriteLocalUser = config.overwriteLocalUser;
    this._type = config.type;
    this._rolesForPath.internalValue = config.rolesForPath;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // identity_source_id - computed: false, optional: true, required: false
  private _identitySourceId?: string; 
  public get identitySourceId() {
    return this.getStringAttribute('identity_source_id');
  }
  public set identitySourceId(value: string) {
    this._identitySourceId = value;
  }
  public resetIdentitySourceId() {
    this._identitySourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceIdInput() {
    return this._identitySourceId;
  }

  // identity_source_type - computed: false, optional: true, required: false
  private _identitySourceType?: string; 
  public get identitySourceType() {
    return this.getStringAttribute('identity_source_type');
  }
  public set identitySourceType(value: string) {
    this._identitySourceType = value;
  }
  public resetIdentitySourceType() {
    this._identitySourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceTypeInput() {
    return this._identitySourceType;
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

  // overwrite_local_user - computed: false, optional: true, required: false
  private _overwriteLocalUser?: boolean | cdktf.IResolvable; 
  public get overwriteLocalUser() {
    return this.getBooleanAttribute('overwrite_local_user');
  }
  public set overwriteLocalUser(value: boolean | cdktf.IResolvable) {
    this._overwriteLocalUser = value;
  }
  public resetOverwriteLocalUser() {
    this._overwriteLocalUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteLocalUserInput() {
    return this._overwriteLocalUser;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // roles_for_path - computed: false, optional: false, required: true
  private _rolesForPath = new PolicyUserManagementRoleBindingRolesForPathList(this, "roles_for_path", true);
  public get rolesForPath() {
    return this._rolesForPath;
  }
  public putRolesForPath(value: PolicyUserManagementRoleBindingRolesForPath[] | cdktf.IResolvable) {
    this._rolesForPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesForPathInput() {
    return this._rolesForPath.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyUserManagementRoleBindingTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyUserManagementRoleBindingTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      identity_source_id: cdktf.stringToTerraform(this._identitySourceId),
      identity_source_type: cdktf.stringToTerraform(this._identitySourceType),
      name: cdktf.stringToTerraform(this._name),
      overwrite_local_user: cdktf.booleanToTerraform(this._overwriteLocalUser),
      type: cdktf.stringToTerraform(this._type),
      roles_for_path: cdktf.listMapper(policyUserManagementRoleBindingRolesForPathToTerraform, true)(this._rolesForPath.internalValue),
      tag: cdktf.listMapper(policyUserManagementRoleBindingTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      identity_source_id: {
        value: cdktf.stringToHclTerraform(this._identitySourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_source_type: {
        value: cdktf.stringToHclTerraform(this._identitySourceType),
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
      overwrite_local_user: {
        value: cdktf.booleanToHclTerraform(this._overwriteLocalUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles_for_path: {
        value: cdktf.listMapperHcl(policyUserManagementRoleBindingRolesForPathToHclTerraform, true)(this._rolesForPath.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyUserManagementRoleBindingRolesForPathList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyUserManagementRoleBindingTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyUserManagementRoleBindingTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
