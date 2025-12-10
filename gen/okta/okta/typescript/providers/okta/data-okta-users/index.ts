// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search operator used when joining multiple search clauses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#compound_search_operator DataOktaUsers#compound_search_operator}
  */
  readonly compoundSearchOperator?: string;
  /**
  * Force delay of the users read by N seconds. Useful when eventual consistency of users information needs to be allowed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#delay_read_seconds DataOktaUsers#delay_read_seconds}
  */
  readonly delayReadSeconds?: string;
  /**
  * Find users based on group membership using the id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#group_id DataOktaUsers#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#id DataOktaUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Fetch group memberships for each user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#include_groups DataOktaUsers#include_groups}
  */
  readonly includeGroups?: boolean | cdktf.IResolvable;
  /**
  * Fetch user roles for each user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#include_roles DataOktaUsers#include_roles}
  */
  readonly includeRoles?: boolean | cdktf.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#search DataOktaUsers#search}
  */
  readonly search?: DataOktaUsersSearch[] | cdktf.IResolvable;
}
export interface DataOktaUsersUsers {
}

export function dataOktaUsersUsersToTerraform(struct?: DataOktaUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaUsersUsersToHclTerraform(struct?: DataOktaUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_roles - computed: true, optional: false, required: false
  public get adminRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_roles'));
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // cost_center - computed: true, optional: false, required: false
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // custom_profile_attributes - computed: true, optional: false, required: false
  public get customProfileAttributes() {
    return this.getStringAttribute('custom_profile_attributes');
  }

  // department - computed: true, optional: false, required: false
  public get department() {
    return this.getStringAttribute('department');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // division - computed: true, optional: false, required: false
  public get division() {
    return this.getStringAttribute('division');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // employee_number - computed: true, optional: false, required: false
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // group_memberships - computed: true, optional: false, required: false
  public get groupMemberships() {
    return cdktf.Fn.tolist(this.getListAttribute('group_memberships'));
  }

  // honorific_prefix - computed: true, optional: false, required: false
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }

  // honorific_suffix - computed: true, optional: false, required: false
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // manager - computed: true, optional: false, required: false
  public get manager() {
    return this.getStringAttribute('manager');
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }

  // mobile_phone - computed: true, optional: false, required: false
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }

  // nick_name - computed: true, optional: false, required: false
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // postal_address - computed: true, optional: false, required: false
  public get postalAddress() {
    return this.getStringAttribute('postal_address');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // primary_phone - computed: true, optional: false, required: false
  public get primaryPhone() {
    return this.getStringAttribute('primary_phone');
  }

  // profile_url - computed: true, optional: false, required: false
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // second_email - computed: true, optional: false, required: false
  public get secondEmail() {
    return this.getStringAttribute('second_email');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // zip_code - computed: true, optional: false, required: false
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
}

export class DataOktaUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataOktaUsersUsersOutputReference {
    return new DataOktaUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaUsersSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#comparison DataOktaUsers#comparison}
  */
  readonly comparison?: string;
  /**
  * A raw search expression string. This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#expression DataOktaUsers#expression}
  */
  readonly expression?: string;
  /**
  * Property name to search for. This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#name DataOktaUsers#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#value DataOktaUsers#value}
  */
  readonly value?: string;
}

export function dataOktaUsersSearchToTerraform(struct?: DataOktaUsersSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataOktaUsersSearchToHclTerraform(struct?: DataOktaUsersSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaUsersSearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaUsersSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaUsersSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._expression = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._expression = value.expression;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataOktaUsersSearchList extends cdktf.ComplexList {
  public internalValue? : DataOktaUsersSearch[] | cdktf.IResolvable

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
  public get(index: number): DataOktaUsersSearchOutputReference {
    return new DataOktaUsersSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users okta_users}
*/
export class DataOktaUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaUsers to import
  * @param importFromId The id of the existing DataOktaUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/users okta_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_users',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compoundSearchOperator = config.compoundSearchOperator;
    this._delayReadSeconds = config.delayReadSeconds;
    this._groupId = config.groupId;
    this._id = config.id;
    this._includeGroups = config.includeGroups;
    this._includeRoles = config.includeRoles;
    this._search.internalValue = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compound_search_operator - computed: false, optional: true, required: false
  private _compoundSearchOperator?: string; 
  public get compoundSearchOperator() {
    return this.getStringAttribute('compound_search_operator');
  }
  public set compoundSearchOperator(value: string) {
    this._compoundSearchOperator = value;
  }
  public resetCompoundSearchOperator() {
    this._compoundSearchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundSearchOperatorInput() {
    return this._compoundSearchOperator;
  }

  // delay_read_seconds - computed: false, optional: true, required: false
  private _delayReadSeconds?: string; 
  public get delayReadSeconds() {
    return this.getStringAttribute('delay_read_seconds');
  }
  public set delayReadSeconds(value: string) {
    this._delayReadSeconds = value;
  }
  public resetDelayReadSeconds() {
    this._delayReadSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayReadSecondsInput() {
    return this._delayReadSeconds;
  }

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

  // include_groups - computed: false, optional: true, required: false
  private _includeGroups?: boolean | cdktf.IResolvable; 
  public get includeGroups() {
    return this.getBooleanAttribute('include_groups');
  }
  public set includeGroups(value: boolean | cdktf.IResolvable) {
    this._includeGroups = value;
  }
  public resetIncludeGroups() {
    this._includeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGroupsInput() {
    return this._includeGroups;
  }

  // include_roles - computed: false, optional: true, required: false
  private _includeRoles?: boolean | cdktf.IResolvable; 
  public get includeRoles() {
    return this.getBooleanAttribute('include_roles');
  }
  public set includeRoles(value: boolean | cdktf.IResolvable) {
    this._includeRoles = value;
  }
  public resetIncludeRoles() {
    this._includeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRolesInput() {
    return this._includeRoles;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataOktaUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // search - computed: false, optional: true, required: false
  private _search = new DataOktaUsersSearchList(this, "search", true);
  public get search() {
    return this._search;
  }
  public putSearch(value: DataOktaUsersSearch[] | cdktf.IResolvable) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compound_search_operator: cdktf.stringToTerraform(this._compoundSearchOperator),
      delay_read_seconds: cdktf.stringToTerraform(this._delayReadSeconds),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      include_groups: cdktf.booleanToTerraform(this._includeGroups),
      include_roles: cdktf.booleanToTerraform(this._includeRoles),
      search: cdktf.listMapper(dataOktaUsersSearchToTerraform, true)(this._search.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compound_search_operator: {
        value: cdktf.stringToHclTerraform(this._compoundSearchOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_read_seconds: {
        value: cdktf.stringToHclTerraform(this._delayReadSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      include_groups: {
        value: cdktf.booleanToHclTerraform(this._includeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_roles: {
        value: cdktf.booleanToHclTerraform(this._includeRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search: {
        value: cdktf.listMapperHcl(dataOktaUsersSearchToHclTerraform, true)(this._search.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOktaUsersSearchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
