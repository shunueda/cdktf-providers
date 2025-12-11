// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeTargetDatabaseRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#authentication_type DataOciDataSafeTargetDatabaseRoles#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#id DataOciDataSafeTargetDatabaseRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#is_oracle_maintained DataOciDataSafeTargetDatabaseRoles#is_oracle_maintained}
  */
  readonly isOracleMaintained?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#role_name DataOciDataSafeTargetDatabaseRoles#role_name}
  */
  readonly roleName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#role_name_contains DataOciDataSafeTargetDatabaseRoles#role_name_contains}
  */
  readonly roleNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#target_database_id DataOciDataSafeTargetDatabaseRoles#target_database_id}
  */
  readonly targetDatabaseId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#filter DataOciDataSafeTargetDatabaseRoles#filter}
  */
  readonly filter?: DataOciDataSafeTargetDatabaseRolesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeTargetDatabaseRolesRoles {
}

export function dataOciDataSafeTargetDatabaseRolesRolesToTerraform(struct?: DataOciDataSafeTargetDatabaseRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeTargetDatabaseRolesRolesToHclTerraform(struct?: DataOciDataSafeTargetDatabaseRolesRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeTargetDatabaseRolesRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeTargetDatabaseRolesRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeTargetDatabaseRolesRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // is_common - computed: true, optional: false, required: false
  public get isCommon() {
    return this.getBooleanAttribute('is_common');
  }

  // is_implicit - computed: true, optional: false, required: false
  public get isImplicit() {
    return this.getBooleanAttribute('is_implicit');
  }

  // is_inherited - computed: true, optional: false, required: false
  public get isInherited() {
    return this.getBooleanAttribute('is_inherited');
  }

  // is_oracle_maintained - computed: true, optional: false, required: false
  public get isOracleMaintained() {
    return this.getBooleanAttribute('is_oracle_maintained');
  }

  // is_password_required - computed: true, optional: false, required: false
  public get isPasswordRequired() {
    return this.getBooleanAttribute('is_password_required');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}

export class DataOciDataSafeTargetDatabaseRolesRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeTargetDatabaseRolesRolesOutputReference {
    return new DataOciDataSafeTargetDatabaseRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeTargetDatabaseRolesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#name DataOciDataSafeTargetDatabaseRoles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#regex DataOciDataSafeTargetDatabaseRoles#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#values DataOciDataSafeTargetDatabaseRoles#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeTargetDatabaseRolesFilterToTerraform(struct?: DataOciDataSafeTargetDatabaseRolesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeTargetDatabaseRolesFilterToHclTerraform(struct?: DataOciDataSafeTargetDatabaseRolesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataSafeTargetDatabaseRolesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeTargetDatabaseRolesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeTargetDatabaseRolesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeTargetDatabaseRolesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeTargetDatabaseRolesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeTargetDatabaseRolesFilterOutputReference {
    return new DataOciDataSafeTargetDatabaseRolesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles oci_data_safe_target_database_roles}
*/
export class DataOciDataSafeTargetDatabaseRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_database_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeTargetDatabaseRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeTargetDatabaseRoles to import
  * @param importFromId The id of the existing DataOciDataSafeTargetDatabaseRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeTargetDatabaseRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_target_database_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_target_database_roles oci_data_safe_target_database_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeTargetDatabaseRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeTargetDatabaseRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_database_roles',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationType = config.authenticationType;
    this._id = config.id;
    this._isOracleMaintained = config.isOracleMaintained;
    this._roleName = config.roleName;
    this._roleNameContains = config.roleNameContains;
    this._targetDatabaseId = config.targetDatabaseId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
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

  // is_oracle_maintained - computed: false, optional: true, required: false
  private _isOracleMaintained?: boolean | cdktf.IResolvable; 
  public get isOracleMaintained() {
    return this.getBooleanAttribute('is_oracle_maintained');
  }
  public set isOracleMaintained(value: boolean | cdktf.IResolvable) {
    this._isOracleMaintained = value;
  }
  public resetIsOracleMaintained() {
    this._isOracleMaintained = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOracleMaintainedInput() {
    return this._isOracleMaintained;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string[]; 
  public get roleName() {
    return this.getListAttribute('role_name');
  }
  public set roleName(value: string[]) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_name_contains - computed: false, optional: true, required: false
  private _roleNameContains?: string; 
  public get roleNameContains() {
    return this.getStringAttribute('role_name_contains');
  }
  public set roleNameContains(value: string) {
    this._roleNameContains = value;
  }
  public resetRoleNameContains() {
    this._roleNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameContainsInput() {
    return this._roleNameContains;
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataOciDataSafeTargetDatabaseRolesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // target_database_id - computed: false, optional: false, required: true
  private _targetDatabaseId?: string; 
  public get targetDatabaseId() {
    return this.getStringAttribute('target_database_id');
  }
  public set targetDatabaseId(value: string) {
    this._targetDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdInput() {
    return this._targetDatabaseId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeTargetDatabaseRolesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeTargetDatabaseRolesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      id: cdktf.stringToTerraform(this._id),
      is_oracle_maintained: cdktf.booleanToTerraform(this._isOracleMaintained),
      role_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleName),
      role_name_contains: cdktf.stringToTerraform(this._roleNameContains),
      target_database_id: cdktf.stringToTerraform(this._targetDatabaseId),
      filter: cdktf.listMapper(dataOciDataSafeTargetDatabaseRolesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
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
      is_oracle_maintained: {
        value: cdktf.booleanToHclTerraform(this._isOracleMaintained),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      role_name_contains: {
        value: cdktf.stringToHclTerraform(this._roleNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeTargetDatabaseRolesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeTargetDatabaseRolesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
