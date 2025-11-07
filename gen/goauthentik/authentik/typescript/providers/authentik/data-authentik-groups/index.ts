// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuthentikGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#attributes DataAuthentikGroups#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#id DataAuthentikGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to include group members. Note that depending on group size, this can make the Terraform state a lot larger. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#include_users DataAuthentikGroups#include_users}
  */
  readonly includeUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#is_superuser DataAuthentikGroups#is_superuser}
  */
  readonly isSuperuser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#members_by_pk DataAuthentikGroups#members_by_pk}
  */
  readonly membersByPk?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#members_by_username DataAuthentikGroups#members_by_username}
  */
  readonly membersByUsername?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#name DataAuthentikGroups#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#ordering DataAuthentikGroups#ordering}
  */
  readonly ordering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#search DataAuthentikGroups#search}
  */
  readonly search?: string;
}
export interface DataAuthentikGroupsGroupsUsersObj {
}

export function dataAuthentikGroupsGroupsUsersObjToTerraform(struct?: DataAuthentikGroupsGroupsUsersObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthentikGroupsGroupsUsersObjToHclTerraform(struct?: DataAuthentikGroupsGroupsUsersObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthentikGroupsGroupsUsersObjOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuthentikGroupsGroupsUsersObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthentikGroupsGroupsUsersObj | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pk - computed: true, optional: false, required: false
  public get pk() {
    return this.getNumberAttribute('pk');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAuthentikGroupsGroupsUsersObjList extends cdktf.ComplexList {

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
  public get(index: number): DataAuthentikGroupsGroupsUsersObjOutputReference {
    return new DataAuthentikGroupsGroupsUsersObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuthentikGroupsGroups {
}

export function dataAuthentikGroupsGroupsToTerraform(struct?: DataAuthentikGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuthentikGroupsGroupsToHclTerraform(struct?: DataAuthentikGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuthentikGroupsGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuthentikGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuthentikGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // is_superuser - computed: true, optional: false, required: false
  public get isSuperuser() {
    return this.getBooleanAttribute('is_superuser');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_pk - computed: true, optional: false, required: false
  public get numPk() {
    return this.getNumberAttribute('num_pk');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // parent_name - computed: true, optional: false, required: false
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }

  // pk - computed: true, optional: false, required: false
  public get pk() {
    return this.getStringAttribute('pk');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getNumberListAttribute('users');
  }

  // users_obj - computed: true, optional: false, required: false
  private _usersObj = new DataAuthentikGroupsGroupsUsersObjList(this, "users_obj", false);
  public get usersObj() {
    return this._usersObj;
  }
}

export class DataAuthentikGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuthentikGroupsGroupsOutputReference {
    return new DataAuthentikGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups authentik_groups}
*/
export class DataAuthentikGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuthentikGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuthentikGroups to import
  * @param importFromId The id of the existing DataAuthentikGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuthentikGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/data-sources/groups authentik_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuthentikGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuthentikGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'authentik_groups',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._id = config.id;
    this._includeUsers = config.includeUsers;
    this._isSuperuser = config.isSuperuser;
    this._membersByPk = config.membersByPk;
    this._membersByUsername = config.membersByUsername;
    this._name = config.name;
    this._ordering = config.ordering;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAuthentikGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // include_users - computed: false, optional: true, required: false
  private _includeUsers?: boolean | cdktf.IResolvable; 
  public get includeUsers() {
    return this.getBooleanAttribute('include_users');
  }
  public set includeUsers(value: boolean | cdktf.IResolvable) {
    this._includeUsers = value;
  }
  public resetIncludeUsers() {
    this._includeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUsersInput() {
    return this._includeUsers;
  }

  // is_superuser - computed: false, optional: true, required: false
  private _isSuperuser?: boolean | cdktf.IResolvable; 
  public get isSuperuser() {
    return this.getBooleanAttribute('is_superuser');
  }
  public set isSuperuser(value: boolean | cdktf.IResolvable) {
    this._isSuperuser = value;
  }
  public resetIsSuperuser() {
    this._isSuperuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSuperuserInput() {
    return this._isSuperuser;
  }

  // members_by_pk - computed: false, optional: true, required: false
  private _membersByPk?: number[]; 
  public get membersByPk() {
    return this.getNumberListAttribute('members_by_pk');
  }
  public set membersByPk(value: number[]) {
    this._membersByPk = value;
  }
  public resetMembersByPk() {
    this._membersByPk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersByPkInput() {
    return this._membersByPk;
  }

  // members_by_username - computed: false, optional: true, required: false
  private _membersByUsername?: string[]; 
  public get membersByUsername() {
    return this.getListAttribute('members_by_username');
  }
  public set membersByUsername(value: string[]) {
    this._membersByUsername = value;
  }
  public resetMembersByUsername() {
    this._membersByUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersByUsernameInput() {
    return this._membersByUsername;
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

  // ordering - computed: false, optional: true, required: false
  private _ordering?: string; 
  public get ordering() {
    return this.getStringAttribute('ordering');
  }
  public set ordering(value: string) {
    this._ordering = value;
  }
  public resetOrdering() {
    this._ordering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.stringToTerraform(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      include_users: cdktf.booleanToTerraform(this._includeUsers),
      is_superuser: cdktf.booleanToTerraform(this._isSuperuser),
      members_by_pk: cdktf.listMapper(cdktf.numberToTerraform, false)(this._membersByPk),
      members_by_username: cdktf.listMapper(cdktf.stringToTerraform, false)(this._membersByUsername),
      name: cdktf.stringToTerraform(this._name),
      ordering: cdktf.stringToTerraform(this._ordering),
      search: cdktf.stringToTerraform(this._search),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
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
      include_users: {
        value: cdktf.booleanToHclTerraform(this._includeUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_superuser: {
        value: cdktf.booleanToHclTerraform(this._isSuperuser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_by_pk: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._membersByPk),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      members_by_username: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._membersByUsername),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: cdktf.stringToHclTerraform(this._ordering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
