// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#group_id Group#group_id}
  */
  readonly groupId?: string;
  /**
  * Whether or not the group is an LDAP group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#ldap_group Group#ldap_group}
  */
  readonly ldapGroup?: boolean | cdktf.IResolvable;
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#name Group#name}
  */
  readonly name?: string;
  /**
  * Whether or not the group is an OAuth group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#oauth_group Group#oauth_group}
  */
  readonly oauthGroup?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the group is an OpenID Connect group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#oidc_group Group#oidc_group}
  */
  readonly oidcGroup?: boolean | cdktf.IResolvable;
  /**
  * Role of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#role Group#role}
  */
  readonly role?: string;
  /**
  * Whether or not the group is a SAML group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#saml_group Group#saml_group}
  */
  readonly samlGroup?: boolean | cdktf.IResolvable;
  /**
  * Users in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#users Group#users}
  */
  readonly users?: string[];
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#permissions Group#permissions}
  */
  readonly permissions?: GroupPermissions[] | cdktf.IResolvable;
}
export interface GroupPermissions {
  /**
  * Specifies the set of Defenders in-scope for working on a scan job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#collections Group#collections}
  */
  readonly collections?: string[];
  /**
  * Names of projects which the user can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#project Group#project}
  */
  readonly project?: string;
}

export function groupPermissionsToTerraform(struct?: GroupPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function groupPermissionsToHclTerraform(struct?: GroupPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collections = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collections = value.collections;
      this._project = value.project;
    }
  }

  // collections - computed: false, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class GroupPermissionsList extends cdktf.ComplexList {
  public internalValue? : GroupPermissions[] | cdktf.IResolvable

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
  public get(index: number): GroupPermissionsOutputReference {
    return new GroupPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group prismacloudcompute_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/group prismacloudcompute_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_group',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._ldapGroup = config.ldapGroup;
    this._name = config.name;
    this._oauthGroup = config.oauthGroup;
    this._oidcGroup = config.oidcGroup;
    this._role = config.role;
    this._samlGroup = config.samlGroup;
    this._users = config.users;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_group - computed: false, optional: true, required: false
  private _ldapGroup?: boolean | cdktf.IResolvable; 
  public get ldapGroup() {
    return this.getBooleanAttribute('ldap_group');
  }
  public set ldapGroup(value: boolean | cdktf.IResolvable) {
    this._ldapGroup = value;
  }
  public resetLdapGroup() {
    this._ldapGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupInput() {
    return this._ldapGroup;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oauth_group - computed: false, optional: true, required: false
  private _oauthGroup?: boolean | cdktf.IResolvable; 
  public get oauthGroup() {
    return this.getBooleanAttribute('oauth_group');
  }
  public set oauthGroup(value: boolean | cdktf.IResolvable) {
    this._oauthGroup = value;
  }
  public resetOauthGroup() {
    this._oauthGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGroupInput() {
    return this._oauthGroup;
  }

  // oidc_group - computed: false, optional: true, required: false
  private _oidcGroup?: boolean | cdktf.IResolvable; 
  public get oidcGroup() {
    return this.getBooleanAttribute('oidc_group');
  }
  public set oidcGroup(value: boolean | cdktf.IResolvable) {
    this._oidcGroup = value;
  }
  public resetOidcGroup() {
    this._oidcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupInput() {
    return this._oidcGroup;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // saml_group - computed: false, optional: true, required: false
  private _samlGroup?: boolean | cdktf.IResolvable; 
  public get samlGroup() {
    return this.getBooleanAttribute('saml_group');
  }
  public set samlGroup(value: boolean | cdktf.IResolvable) {
    this._samlGroup = value;
  }
  public resetSamlGroup() {
    this._samlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlGroupInput() {
    return this._samlGroup;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new GroupPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: GroupPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      ldap_group: cdktf.booleanToTerraform(this._ldapGroup),
      name: cdktf.stringToTerraform(this._name),
      oauth_group: cdktf.booleanToTerraform(this._oauthGroup),
      oidc_group: cdktf.booleanToTerraform(this._oidcGroup),
      role: cdktf.stringToTerraform(this._role),
      saml_group: cdktf.booleanToTerraform(this._samlGroup),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      permissions: cdktf.listMapper(groupPermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group: {
        value: cdktf.booleanToHclTerraform(this._ldapGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_group: {
        value: cdktf.booleanToHclTerraform(this._oauthGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_group: {
        value: cdktf.booleanToHclTerraform(this._oidcGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_group: {
        value: cdktf.booleanToHclTerraform(this._samlGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permissions: {
        value: cdktf.listMapperHcl(groupPermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
