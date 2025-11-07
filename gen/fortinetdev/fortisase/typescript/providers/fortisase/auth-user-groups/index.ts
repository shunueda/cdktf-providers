// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthUserGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#group_type AuthUserGroups#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#local_users AuthUserGroups#local_users}
  */
  readonly localUsers?: AuthUserGroupsLocalUsers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#primary_key AuthUserGroups#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#remote_user_groups AuthUserGroups#remote_user_groups}
  */
  readonly remoteUserGroups?: AuthUserGroupsRemoteUserGroups[] | cdktf.IResolvable;
}
export interface AuthUserGroupsLocalUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#datasource AuthUserGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#primary_key AuthUserGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function authUserGroupsLocalUsersToTerraform(struct?: AuthUserGroupsLocalUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authUserGroupsLocalUsersToHclTerraform(struct?: AuthUserGroupsLocalUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthUserGroupsLocalUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthUserGroupsLocalUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthUserGroupsLocalUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class AuthUserGroupsLocalUsersList extends cdktf.ComplexList {
  public internalValue? : AuthUserGroupsLocalUsers[] | cdktf.IResolvable

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
  public get(index: number): AuthUserGroupsLocalUsersOutputReference {
    return new AuthUserGroupsLocalUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthUserGroupsRemoteUserGroupsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#datasource AuthUserGroups#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#primary_key AuthUserGroups#primary_key}
  */
  readonly primaryKey?: string;
}

export function authUserGroupsRemoteUserGroupsServerToTerraform(struct?: AuthUserGroupsRemoteUserGroupsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authUserGroupsRemoteUserGroupsServerToHclTerraform(struct?: AuthUserGroupsRemoteUserGroupsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthUserGroupsRemoteUserGroupsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthUserGroupsRemoteUserGroupsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthUserGroupsRemoteUserGroupsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface AuthUserGroupsRemoteUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#matches AuthUserGroups#matches}
  */
  readonly matches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#server AuthUserGroups#server}
  */
  readonly server?: AuthUserGroupsRemoteUserGroupsServer;
}

export function authUserGroupsRemoteUserGroupsToTerraform(struct?: AuthUserGroupsRemoteUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matches),
    server: authUserGroupsRemoteUserGroupsServerToTerraform(struct!.server),
  }
}


export function authUserGroupsRemoteUserGroupsToHclTerraform(struct?: AuthUserGroupsRemoteUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    server: {
      value: authUserGroupsRemoteUserGroupsServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthUserGroupsRemoteUserGroupsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthUserGroupsRemoteUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthUserGroupsRemoteUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matches !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthUserGroupsRemoteUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matches = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matches = value.matches;
      this._server.internalValue = value.server;
    }
  }

  // matches - computed: true, optional: true, required: false
  private _matches?: string[]; 
  public get matches() {
    return cdktf.Fn.tolist(this.getListAttribute('matches'));
  }
  public set matches(value: string[]) {
    this._matches = value;
  }
  public resetMatches() {
    this._matches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches;
  }

  // server - computed: true, optional: true, required: false
  private _server = new AuthUserGroupsRemoteUserGroupsServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: AuthUserGroupsRemoteUserGroupsServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class AuthUserGroupsRemoteUserGroupsList extends cdktf.ComplexList {
  public internalValue? : AuthUserGroupsRemoteUserGroups[] | cdktf.IResolvable

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
  public get(index: number): AuthUserGroupsRemoteUserGroupsOutputReference {
    return new AuthUserGroupsRemoteUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups fortisase_auth_user_groups}
*/
export class AuthUserGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_user_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthUserGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthUserGroups to import
  * @param importFromId The id of the existing AuthUserGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthUserGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_user_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_user_groups fortisase_auth_user_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthUserGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: AuthUserGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_auth_user_groups',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupType = config.groupType;
    this._localUsers.internalValue = config.localUsers;
    this._primaryKey = config.primaryKey;
    this._remoteUserGroups.internalValue = config.remoteUserGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_users - computed: true, optional: true, required: false
  private _localUsers = new AuthUserGroupsLocalUsersList(this, "local_users", false);
  public get localUsers() {
    return this._localUsers;
  }
  public putLocalUsers(value: AuthUserGroupsLocalUsers[] | cdktf.IResolvable) {
    this._localUsers.internalValue = value;
  }
  public resetLocalUsers() {
    this._localUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUsersInput() {
    return this._localUsers.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // remote_user_groups - computed: true, optional: true, required: false
  private _remoteUserGroups = new AuthUserGroupsRemoteUserGroupsList(this, "remote_user_groups", false);
  public get remoteUserGroups() {
    return this._remoteUserGroups;
  }
  public putRemoteUserGroups(value: AuthUserGroupsRemoteUserGroups[] | cdktf.IResolvable) {
    this._remoteUserGroups.internalValue = value;
  }
  public resetRemoteUserGroups() {
    this._remoteUserGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserGroupsInput() {
    return this._remoteUserGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_type: cdktf.stringToTerraform(this._groupType),
      local_users: cdktf.listMapper(authUserGroupsLocalUsersToTerraform, false)(this._localUsers.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      remote_user_groups: cdktf.listMapper(authUserGroupsRemoteUserGroupsToTerraform, false)(this._remoteUserGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_users: {
        value: cdktf.listMapperHcl(authUserGroupsLocalUsersToHclTerraform, false)(this._localUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthUserGroupsLocalUsersList",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_user_groups: {
        value: cdktf.listMapperHcl(authUserGroupsRemoteUserGroupsToHclTerraform, false)(this._remoteUserGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthUserGroupsRemoteUserGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
