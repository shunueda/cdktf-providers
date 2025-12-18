// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/management_agent_management_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagementAgentManagementAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/management_agent_management_agent#management_agent_id DataOciManagementAgentManagementAgent#management_agent_id}
  */
  readonly managementAgentId: string;
}
export interface DataOciManagementAgentManagementAgentDataSourceListMetricDimensions {
}

export function dataOciManagementAgentManagementAgentDataSourceListMetricDimensionsToTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceListMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentDataSourceListMetricDimensionsToHclTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceListMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentDataSourceListMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentDataSourceListMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciManagementAgentManagementAgentDataSourceListMetricDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference {
    return new DataOciManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentDataSourceListStruct {
}

export function dataOciManagementAgentManagementAgentDataSourceListStructToTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentDataSourceListStructToHclTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentDataSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentDataSourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentDataSourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_metrics - computed: true, optional: false, required: false
  public get allowMetrics() {
    return this.getStringAttribute('allow_metrics');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // is_daemon_set - computed: true, optional: false, required: false
  public get isDaemonSet() {
    return this.getBooleanAttribute('is_daemon_set');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // metric_dimensions - computed: true, optional: false, required: false
  private _metricDimensions = new DataOciManagementAgentManagementAgentDataSourceListMetricDimensionsList(this, "metric_dimensions", false);
  public get metricDimensions() {
    return this._metricDimensions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // read_data_limit - computed: true, optional: false, required: false
  public get readDataLimit() {
    return this.getNumberAttribute('read_data_limit');
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // schedule_mins - computed: true, optional: false, required: false
  public get scheduleMins() {
    return this.getNumberAttribute('schedule_mins');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciManagementAgentManagementAgentDataSourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentDataSourceListStructOutputReference {
    return new DataOciManagementAgentManagementAgentDataSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentDataSourceSummaryListStruct {
}

export function dataOciManagementAgentManagementAgentDataSourceSummaryListStructToTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentDataSourceSummaryListStructToHclTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentDataSourceSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentDataSourceSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentDataSourceSummaryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_daemon_set - computed: true, optional: false, required: false
  public get isDaemonSet() {
    return this.getBooleanAttribute('is_daemon_set');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciManagementAgentManagementAgentDataSourceSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentDataSourceSummaryListStructOutputReference {
    return new DataOciManagementAgentManagementAgentDataSourceSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentManagementAgentProperties {
}

export function dataOciManagementAgentManagementAgentManagementAgentPropertiesToTerraform(struct?: DataOciManagementAgentManagementAgentManagementAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentManagementAgentPropertiesToHclTerraform(struct?: DataOciManagementAgentManagementAgentManagementAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentManagementAgentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentManagementAgentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentManagementAgentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciManagementAgentManagementAgentManagementAgentPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentManagementAgentPropertiesOutputReference {
    return new DataOciManagementAgentManagementAgentManagementAgentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentPluginListStruct {
}

export function dataOciManagementAgentManagementAgentPluginListStructToTerraform(struct?: DataOciManagementAgentManagementAgentPluginListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentPluginListStructToHclTerraform(struct?: DataOciManagementAgentManagementAgentPluginListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentPluginListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentPluginListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentPluginListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // plugin_display_name - computed: true, optional: false, required: false
  public get pluginDisplayName() {
    return this.getStringAttribute('plugin_display_name');
  }

  // plugin_id - computed: true, optional: false, required: false
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // plugin_status - computed: true, optional: false, required: false
  public get pluginStatus() {
    return this.getStringAttribute('plugin_status');
  }

  // plugin_status_message - computed: true, optional: false, required: false
  public get pluginStatusMessage() {
    return this.getStringAttribute('plugin_status_message');
  }

  // plugin_version - computed: true, optional: false, required: false
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
  }
}

export class DataOciManagementAgentManagementAgentPluginListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentPluginListStructOutputReference {
    return new DataOciManagementAgentManagementAgentPluginListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/management_agent_management_agent oci_management_agent_management_agent}
*/
export class DataOciManagementAgentManagementAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagementAgentManagementAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagementAgentManagementAgent to import
  * @param importFromId The id of the existing DataOciManagementAgentManagementAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/management_agent_management_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagementAgentManagementAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/management_agent_management_agent oci_management_agent_management_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagementAgentManagementAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_agent_management_agent',
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
    this._managementAgentId = config.managementAgentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_status - computed: true, optional: false, required: false
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_source_list - computed: true, optional: false, required: false
  private _dataSourceList = new DataOciManagementAgentManagementAgentDataSourceListStructList(this, "data_source_list", false);
  public get dataSourceList() {
    return this._dataSourceList;
  }

  // data_source_summary_list - computed: true, optional: false, required: false
  private _dataSourceSummaryList = new DataOciManagementAgentManagementAgentDataSourceSummaryListStructList(this, "data_source_summary_list", false);
  public get dataSourceSummaryList() {
    return this._dataSourceSummaryList;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deploy_plugins_id - computed: true, optional: false, required: false
  public get deployPluginsId() {
    return this.getListAttribute('deploy_plugins_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_key_id - computed: true, optional: false, required: false
  public get installKeyId() {
    return this.getStringAttribute('install_key_id');
  }

  // install_path - computed: true, optional: false, required: false
  public get installPath() {
    return this.getStringAttribute('install_path');
  }

  // install_type - computed: true, optional: false, required: false
  public get installType() {
    return this.getStringAttribute('install_type');
  }

  // is_agent_auto_upgradable - computed: true, optional: false, required: false
  public get isAgentAutoUpgradable() {
    return this.getBooleanAttribute('is_agent_auto_upgradable');
  }

  // is_customer_deployed - computed: true, optional: false, required: false
  public get isCustomerDeployed() {
    return this.getBooleanAttribute('is_customer_deployed');
  }

  // latest_supported_version - computed: true, optional: false, required: false
  public get latestSupportedVersion() {
    return this.getStringAttribute('latest_supported_version');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // managed_agent_id - computed: true, optional: false, required: false
  public get managedAgentId() {
    return this.getStringAttribute('managed_agent_id');
  }

  // management_agent_id - computed: false, optional: false, required: true
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // management_agent_properties - computed: true, optional: false, required: false
  private _managementAgentProperties = new DataOciManagementAgentManagementAgentManagementAgentPropertiesList(this, "management_agent_properties", false);
  public get managementAgentProperties() {
    return this._managementAgentProperties;
  }

  // platform_name - computed: true, optional: false, required: false
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }

  // platform_type - computed: true, optional: false, required: false
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // plugin_list - computed: true, optional: false, required: false
  private _pluginList = new DataOciManagementAgentManagementAgentPluginListStructList(this, "plugin_list", false);
  public get pluginList() {
    return this._pluginList;
  }

  // resource_artifact_version - computed: true, optional: false, required: false
  public get resourceArtifactVersion() {
    return this.getStringAttribute('resource_artifact_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_heartbeat - computed: true, optional: false, required: false
  public get timeLastHeartbeat() {
    return this.getStringAttribute('time_last_heartbeat');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      management_agent_id: cdktf.stringToTerraform(this._managementAgentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      management_agent_id: {
        value: cdktf.stringToHclTerraform(this._managementAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
