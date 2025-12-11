// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#scim_query}
  */
  readonly scimQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#security_policy_report_id}
  */
  readonly securityPolicyReportId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#filter}
  */
  readonly filter?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems {
}

export function dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_through_object - computed: true, optional: false, required: false
  public get accessThroughObject() {
    return this.getStringAttribute('access_through_object');
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // are_all_tables_accessible - computed: true, optional: false, required: false
  public get areAllTablesAccessible() {
    return this.getBooleanAttribute('are_all_tables_accessible');
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

  // is_access_constrained_by_label_security - computed: true, optional: false, required: false
  public get isAccessConstrainedByLabelSecurity() {
    return this.getBooleanAttribute('is_access_constrained_by_label_security');
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

  // is_access_constrained_by_view - computed: true, optional: false, required: false
  public get isAccessConstrainedByView() {
    return this.getBooleanAttribute('is_access_constrained_by_view');
  }

  // is_access_constrained_by_virtual_private_database - computed: true, optional: false, required: false
  public get isAccessConstrainedByVirtualPrivateDatabase() {
    return this.getBooleanAttribute('is_access_constrained_by_virtual_private_database');
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
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
}

export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection {
}

export function dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionToTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference {
    return new DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterToTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterToHclTerraform(struct?: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference {
    return new DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries oci_data_safe_security_policy_report_database_table_access_entries}
*/
export class DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_policy_report_database_table_access_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_policy_report_database_table_access_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_policy_report_database_table_access_entries oci_data_safe_security_policy_report_database_table_access_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_policy_report_database_table_access_entries',
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
    this._id = config.id;
    this._scimQuery = config.scimQuery;
    this._securityPolicyReportId = config.securityPolicyReportId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_table_access_entry_collection - computed: true, optional: false, required: false
  private _databaseTableAccessEntryCollection = new DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesDatabaseTableAccessEntryCollectionList(this, "database_table_access_entry_collection", false);
  public get databaseTableAccessEntryCollection() {
    return this._databaseTableAccessEntryCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterToTerraform, true)(this._filter.internalValue),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityPolicyReportDatabaseTableAccessEntriesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
