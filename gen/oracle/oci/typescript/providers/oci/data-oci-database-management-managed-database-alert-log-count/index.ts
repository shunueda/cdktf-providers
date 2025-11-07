// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCount#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#id DataOciDatabaseManagementManagedDatabaseAlertLogCount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCount#is_regular_expression}
  */
  readonly isRegularExpression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCount#level_filter}
  */
  readonly levelFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCount#log_search_text}
  */
  readonly logSearchText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCount#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCount#time_greater_than_or_equal_to}
  */
  readonly timeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCount#time_less_than_or_equal_to}
  */
  readonly timeLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCount#type_filter}
  */
  readonly typeFilter?: string;
}
export interface DataOciDatabaseManagementManagedDatabaseAlertLogCountItems {
}

export function dataOciDatabaseManagementManagedDatabaseAlertLogCountItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAlertLogCountItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseAlertLogCountItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAlertLogCountItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseAlertLogCountItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseAlertLogCountItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count oci_database_management_managed_database_alert_log_count}
*/
export class DataOciDatabaseManagementManagedDatabaseAlertLogCount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_alert_log_count";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAlertLogCount to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseAlertLogCount that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAlertLogCount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_alert_log_count", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_alert_log_count oci_database_management_managed_database_alert_log_count} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseAlertLogCountConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_alert_log_count',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._isRegularExpression = config.isRegularExpression;
    this._levelFilter = config.levelFilter;
    this._logSearchText = config.logSearchText;
    this._managedDatabaseId = config.managedDatabaseId;
    this._timeGreaterThanOrEqualTo = config.timeGreaterThanOrEqualTo;
    this._timeLessThanOrEqualTo = config.timeLessThanOrEqualTo;
    this._typeFilter = config.typeFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // is_regular_expression - computed: false, optional: true, required: false
  private _isRegularExpression?: boolean | cdktf.IResolvable; 
  public get isRegularExpression() {
    return this.getBooleanAttribute('is_regular_expression');
  }
  public set isRegularExpression(value: boolean | cdktf.IResolvable) {
    this._isRegularExpression = value;
  }
  public resetIsRegularExpression() {
    this._isRegularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegularExpressionInput() {
    return this._isRegularExpression;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseAlertLogCountItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // level_filter - computed: false, optional: true, required: false
  private _levelFilter?: string; 
  public get levelFilter() {
    return this.getStringAttribute('level_filter');
  }
  public set levelFilter(value: string) {
    this._levelFilter = value;
  }
  public resetLevelFilter() {
    this._levelFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelFilterInput() {
    return this._levelFilter;
  }

  // log_search_text - computed: false, optional: true, required: false
  private _logSearchText?: string; 
  public get logSearchText() {
    return this.getStringAttribute('log_search_text');
  }
  public set logSearchText(value: string) {
    this._logSearchText = value;
  }
  public resetLogSearchText() {
    this._logSearchText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchTextInput() {
    return this._logSearchText;
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

  // time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeGreaterThanOrEqualTo?: string; 
  public get timeGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_greater_than_or_equal_to');
  }
  public set timeGreaterThanOrEqualTo(value: string) {
    this._timeGreaterThanOrEqualTo = value;
  }
  public resetTimeGreaterThanOrEqualTo() {
    this._timeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGreaterThanOrEqualToInput() {
    return this._timeGreaterThanOrEqualTo;
  }

  // time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLessThanOrEqualTo?: string; 
  public get timeLessThanOrEqualTo() {
    return this.getStringAttribute('time_less_than_or_equal_to');
  }
  public set timeLessThanOrEqualTo(value: string) {
    this._timeLessThanOrEqualTo = value;
  }
  public resetTimeLessThanOrEqualTo() {
    this._timeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLessThanOrEqualToInput() {
    return this._timeLessThanOrEqualTo;
  }

  // type_filter - computed: false, optional: true, required: false
  private _typeFilter?: string; 
  public get typeFilter() {
    return this.getStringAttribute('type_filter');
  }
  public set typeFilter(value: string) {
    this._typeFilter = value;
  }
  public resetTypeFilter() {
    this._typeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeFilterInput() {
    return this._typeFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_by: cdktf.stringToTerraform(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      is_regular_expression: cdktf.booleanToTerraform(this._isRegularExpression),
      level_filter: cdktf.stringToTerraform(this._levelFilter),
      log_search_text: cdktf.stringToTerraform(this._logSearchText),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      time_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeGreaterThanOrEqualTo),
      time_less_than_or_equal_to: cdktf.stringToTerraform(this._timeLessThanOrEqualTo),
      type_filter: cdktf.stringToTerraform(this._typeFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_by: {
        value: cdktf.stringToHclTerraform(this._groupBy),
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
      is_regular_expression: {
        value: cdktf.booleanToHclTerraform(this._isRegularExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      level_filter: {
        value: cdktf.stringToHclTerraform(this._levelFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_search_text: {
        value: cdktf.stringToHclTerraform(this._logSearchText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_filter: {
        value: cdktf.stringToHclTerraform(this._typeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
