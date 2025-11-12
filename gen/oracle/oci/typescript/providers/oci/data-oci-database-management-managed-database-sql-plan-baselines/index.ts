// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}
  */
  readonly isAccepted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}
  */
  readonly isAdaptive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}
  */
  readonly isAutoPurged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}
  */
  readonly isFixed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}
  */
  readonly isNeverExecuted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}
  */
  readonly isReproduced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}
  */
  readonly planName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}
  */
  readonly sqlHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}
  */
  readonly sqlText?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accepted - computed: true, optional: false, required: false
  public get accepted() {
    return this.getStringAttribute('accepted');
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // adaptive - computed: true, optional: false, required: false
  public get adaptive() {
    return this.getStringAttribute('adaptive');
  }

  // auto_purge - computed: true, optional: false, required: false
  public get autoPurge() {
    return this.getStringAttribute('auto_purge');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // execution_plan - computed: true, optional: false, required: false
  public get executionPlan() {
    return this.getStringAttribute('execution_plan');
  }

  // fixed - computed: true, optional: false, required: false
  public get fixed() {
    return this.getStringAttribute('fixed');
  }

  // module - computed: true, optional: false, required: false
  public get module() {
    return this.getStringAttribute('module');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
  }

  // reproduced - computed: true, optional: false, required: false
  public get reproduced() {
    return this.getStringAttribute('reproduced');
  }

  // sql_handle - computed: true, optional: false, required: false
  public get sqlHandle() {
    return this.getStringAttribute('sql_handle');
  }

  // sql_text - computed: true, optional: false, required: false
  public get sqlText() {
    return this.getStringAttribute('sql_text');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_executed - computed: true, optional: false, required: false
  public get timeLastExecuted() {
    return this.getStringAttribute('time_last_executed');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection {
}

export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines oci_database_management_managed_database_sql_plan_baselines}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_plan_baselines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_plan_baselines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_sql_plan_baselines oci_database_management_managed_database_sql_plan_baselines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_plan_baselines',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._isAccepted = config.isAccepted;
    this._isAdaptive = config.isAdaptive;
    this._isAutoPurged = config.isAutoPurged;
    this._isEnabled = config.isEnabled;
    this._isFixed = config.isFixed;
    this._isNeverExecuted = config.isNeverExecuted;
    this._isReproduced = config.isReproduced;
    this._limit = config.limit;
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._origin = config.origin;
    this._planName = config.planName;
    this._sqlHandle = config.sqlHandle;
    this._sqlText = config.sqlText;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_accepted - computed: false, optional: true, required: false
  private _isAccepted?: boolean | cdktf.IResolvable; 
  public get isAccepted() {
    return this.getBooleanAttribute('is_accepted');
  }
  public set isAccepted(value: boolean | cdktf.IResolvable) {
    this._isAccepted = value;
  }
  public resetIsAccepted() {
    this._isAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAcceptedInput() {
    return this._isAccepted;
  }

  // is_adaptive - computed: false, optional: true, required: false
  private _isAdaptive?: boolean | cdktf.IResolvable; 
  public get isAdaptive() {
    return this.getBooleanAttribute('is_adaptive');
  }
  public set isAdaptive(value: boolean | cdktf.IResolvable) {
    this._isAdaptive = value;
  }
  public resetIsAdaptive() {
    this._isAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdaptiveInput() {
    return this._isAdaptive;
  }

  // is_auto_purged - computed: false, optional: true, required: false
  private _isAutoPurged?: boolean | cdktf.IResolvable; 
  public get isAutoPurged() {
    return this.getBooleanAttribute('is_auto_purged');
  }
  public set isAutoPurged(value: boolean | cdktf.IResolvable) {
    this._isAutoPurged = value;
  }
  public resetIsAutoPurged() {
    this._isAutoPurged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoPurgedInput() {
    return this._isAutoPurged;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_fixed - computed: false, optional: true, required: false
  private _isFixed?: boolean | cdktf.IResolvable; 
  public get isFixed() {
    return this.getBooleanAttribute('is_fixed');
  }
  public set isFixed(value: boolean | cdktf.IResolvable) {
    this._isFixed = value;
  }
  public resetIsFixed() {
    this._isFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFixedInput() {
    return this._isFixed;
  }

  // is_never_executed - computed: false, optional: true, required: false
  private _isNeverExecuted?: boolean | cdktf.IResolvable; 
  public get isNeverExecuted() {
    return this.getBooleanAttribute('is_never_executed');
  }
  public set isNeverExecuted(value: boolean | cdktf.IResolvable) {
    this._isNeverExecuted = value;
  }
  public resetIsNeverExecuted() {
    this._isNeverExecuted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNeverExecutedInput() {
    return this._isNeverExecuted;
  }

  // is_reproduced - computed: false, optional: true, required: false
  private _isReproduced?: boolean | cdktf.IResolvable; 
  public get isReproduced() {
    return this.getBooleanAttribute('is_reproduced');
  }
  public set isReproduced(value: boolean | cdktf.IResolvable) {
    this._isReproduced = value;
  }
  public resetIsReproduced() {
    this._isReproduced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReproducedInput() {
    return this._isReproduced;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // plan_name - computed: false, optional: true, required: false
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  public resetPlanName() {
    this._planName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // sql_handle - computed: false, optional: true, required: false
  private _sqlHandle?: string; 
  public get sqlHandle() {
    return this.getStringAttribute('sql_handle');
  }
  public set sqlHandle(value: string) {
    this._sqlHandle = value;
  }
  public resetSqlHandle() {
    this._sqlHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlHandleInput() {
    return this._sqlHandle;
  }

  // sql_plan_baseline_collection - computed: true, optional: false, required: false
  private _sqlPlanBaselineCollection = new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList(this, "sql_plan_baseline_collection", false);
  public get sqlPlanBaselineCollection() {
    return this._sqlPlanBaselineCollection;
  }

  // sql_text - computed: false, optional: true, required: false
  private _sqlText?: string; 
  public get sqlText() {
    return this.getStringAttribute('sql_text');
  }
  public set sqlText(value: string) {
    this._sqlText = value;
  }
  public resetSqlText() {
    this._sqlText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTextInput() {
    return this._sqlText;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[] | cdktf.IResolvable) {
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
      is_accepted: cdktf.booleanToTerraform(this._isAccepted),
      is_adaptive: cdktf.booleanToTerraform(this._isAdaptive),
      is_auto_purged: cdktf.booleanToTerraform(this._isAutoPurged),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      is_fixed: cdktf.booleanToTerraform(this._isFixed),
      is_never_executed: cdktf.booleanToTerraform(this._isNeverExecuted),
      is_reproduced: cdktf.booleanToTerraform(this._isReproduced),
      limit: cdktf.numberToTerraform(this._limit),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      origin: cdktf.stringToTerraform(this._origin),
      plan_name: cdktf.stringToTerraform(this._planName),
      sql_handle: cdktf.stringToTerraform(this._sqlHandle),
      sql_text: cdktf.stringToTerraform(this._sqlText),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterToTerraform, true)(this._filter.internalValue),
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
      is_accepted: {
        value: cdktf.booleanToHclTerraform(this._isAccepted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_adaptive: {
        value: cdktf.booleanToHclTerraform(this._isAdaptive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_purged: {
        value: cdktf.booleanToHclTerraform(this._isAutoPurged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_fixed: {
        value: cdktf.booleanToHclTerraform(this._isFixed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_never_executed: {
        value: cdktf.booleanToHclTerraform(this._isNeverExecuted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_reproduced: {
        value: cdktf.booleanToHclTerraform(this._isReproduced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_handle: {
        value: cdktf.stringToHclTerraform(this._sqlHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_text: {
        value: cdktf.stringToHclTerraform(this._sqlText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
