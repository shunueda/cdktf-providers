// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}
  */
  readonly grantedRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}
  */
  readonly grantee: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}
  */
  readonly securityPolicyReportId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#filter DataOciDataSafeSecurityPolicyReportRoleGrantPaths#filter}
  */
  readonly filter?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems {
}

export function dataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // depth_level - computed: true, optional: false, required: false
  public get depthLevel() {
    return this.getNumberAttribute('depth_level');
  }

  // granted_role - computed: true, optional: false, required: false
  public get grantedRole() {
    return this.getStringAttribute('granted_role');
  }

  // grantee - computed: true, optional: false, required: false
  public get grantee() {
    return this.getStringAttribute('grantee');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection {
}

export function dataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionToTerraform(struct?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference {
    return new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterToTerraform(struct?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference {
    return new DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths oci_data_safe_security_policy_report_role_grant_paths}
*/
export class DataOciDataSafeSecurityPolicyReportRoleGrantPaths extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_report_role_grant_paths";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityPolicyReportRoleGrantPaths that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_policy_report_role_grant_paths", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths oci_data_safe_security_policy_report_role_grant_paths} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_report_role_grant_paths',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grantedRole = config.grantedRole;
    this._grantee = config.grantee;
    this._id = config.id;
    this._securityPolicyReportId = config.securityPolicyReportId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // granted_role - computed: false, optional: false, required: true
  private _grantedRole?: string; 
  public get grantedRole() {
    return this.getStringAttribute('granted_role');
  }
  public set grantedRole(value: string) {
    this._grantedRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedRoleInput() {
    return this._grantedRole;
  }

  // grantee - computed: false, optional: false, required: true
  private _grantee?: string; 
  public get grantee() {
    return this.getStringAttribute('grantee');
  }
  public set grantee(value: string) {
    this._grantee = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee;
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

  // role_grant_path_collection - computed: true, optional: false, required: false
  private _roleGrantPathCollection = new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList(this, "role_grant_path_collection", false);
  public get roleGrantPathCollection() {
    return this._roleGrantPathCollection;
  }

  // security_policy_report_id - computed: false, optional: false, required: true
  private _securityPolicyReportId?: string; 
  public get securityPolicyReportId() {
    return this.getStringAttribute('security_policy_report_id');
  }
  public set securityPolicyReportId(value: string) {
    this._securityPolicyReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyReportIdInput() {
    return this._securityPolicyReportId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[] | cdktf.IResolvable) {
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
      granted_role: cdktf.stringToTerraform(this._grantedRole),
      grantee: cdktf.stringToTerraform(this._grantee),
      id: cdktf.stringToTerraform(this._id),
      security_policy_report_id: cdktf.stringToTerraform(this._securityPolicyReportId),
      filter: cdktf.listMapper(dataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      granted_role: {
        value: cdktf.stringToHclTerraform(this._grantedRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee: {
        value: cdktf.stringToHclTerraform(this._grantee),
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
      security_policy_report_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
