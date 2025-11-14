// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}
  */
  readonly scimQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}
  */
  readonly securityPolicyReportId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}
  */
  readonly targetId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#filter}
  */
  readonly filter?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems {
}

export function dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // grant_from_role - computed: true, optional: false, required: false
  public get grantFromRole() {
    return this.getStringAttribute('grant_from_role');
  }

  // grantee - computed: true, optional: false, required: false
  public get grantee() {
    return this.getStringAttribute('grantee');
  }

  // grantor - computed: true, optional: false, required: false
  public get grantor() {
    return this.getStringAttribute('grantor');
  }

  // is_access_constrained_by_database_vault - computed: true, optional: false, required: false
  public get isAccessConstrainedByDatabaseVault() {
    return this.getBooleanAttribute('is_access_constrained_by_database_vault');
  }

  // is_access_constrained_by_real_application_security - computed: true, optional: false, required: false
  public get isAccessConstrainedByRealApplicationSecurity() {
    return this.getBooleanAttribute('is_access_constrained_by_real_application_security');
  }

  // is_access_constrained_by_redaction - computed: true, optional: false, required: false
  public get isAccessConstrainedByRedaction() {
    return this.getBooleanAttribute('is_access_constrained_by_redaction');
  }

  // is_access_constrained_by_sql_firewall - computed: true, optional: false, required: false
  public get isAccessConstrainedBySqlFirewall() {
    return this.getBooleanAttribute('is_access_constrained_by_sql_firewall');
  }

  // is_access_constrained_by_virtual_private_database - computed: true, optional: false, required: false
  public get isAccessConstrainedByVirtualPrivateDatabase() {
    return this.getBooleanAttribute('is_access_constrained_by_virtual_private_database');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return this.getStringAttribute('privilege');
  }

  // privilege_grantable - computed: true, optional: false, required: false
  public get privilegeGrantable() {
    return this.getStringAttribute('privilege_grantable');
  }

  // privilege_type - computed: true, optional: false, required: false
  public get privilegeType() {
    return this.getStringAttribute('privilege_type');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_schema - computed: true, optional: false, required: false
  public get tableSchema() {
    return this.getStringAttribute('table_schema');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // view_schema - computed: true, optional: false, required: false
  public get viewSchema() {
    return this.getStringAttribute('view_schema');
  }

  // view_text - computed: true, optional: false, required: false
  public get viewText() {
    return this.getStringAttribute('view_text');
  }
}

export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection {
}

export function dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionToTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference {
    return new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterToTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference {
    return new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries oci_data_safe_security_policy_report_database_view_access_entries}
*/
export class DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_report_database_view_access_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_policy_report_database_view_access_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_security_policy_report_database_view_access_entries oci_data_safe_security_policy_report_database_view_access_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_report_database_view_access_entries',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._scimQuery = config.scimQuery;
    this._securityPolicyReportId = config.securityPolicyReportId;
    this._targetId = config.targetId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_view_access_entry_collection - computed: true, optional: false, required: false
  private _databaseViewAccessEntryCollection = new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList(this, "database_view_access_entry_collection", false);
  public get databaseViewAccessEntryCollection() {
    return this._databaseViewAccessEntryCollection;
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

  // scim_query - computed: false, optional: true, required: false
  private _scimQuery?: string; 
  public get scimQuery() {
    return this.getStringAttribute('scim_query');
  }
  public set scimQuery(value: string) {
    this._scimQuery = value;
  }
  public resetScimQuery() {
    this._scimQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimQueryInput() {
    return this._scimQuery;
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

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      scim_query: cdktf.stringToTerraform(this._scimQuery),
      security_policy_report_id: cdktf.stringToTerraform(this._securityPolicyReportId),
      target_id: cdktf.stringToTerraform(this._targetId),
      filter: cdktf.listMapper(dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterToTerraform, true)(this._filter.internalValue),
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
      scim_query: {
        value: cdktf.stringToHclTerraform(this._scimQuery),
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
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
