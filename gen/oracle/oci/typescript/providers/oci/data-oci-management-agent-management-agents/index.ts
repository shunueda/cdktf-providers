// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagementAgentManagementAgentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#access_level DataOciManagementAgentManagementAgents#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#availability_status DataOciManagementAgentManagementAgents#availability_status}
  */
  readonly availabilityStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#compartment_id DataOciManagementAgentManagementAgents#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#compartment_id_in_subtree DataOciManagementAgentManagementAgents#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#data_source_name DataOciManagementAgentManagementAgents#data_source_name}
  */
  readonly dataSourceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#data_source_type DataOciManagementAgentManagementAgents#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#display_name DataOciManagementAgentManagementAgents#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#gateway_id DataOciManagementAgentManagementAgents#gateway_id}
  */
  readonly gatewayId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#host_id DataOciManagementAgentManagementAgents#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#id DataOciManagementAgentManagementAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#install_type DataOciManagementAgentManagementAgents#install_type}
  */
  readonly installType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#is_customer_deployed DataOciManagementAgentManagementAgents#is_customer_deployed}
  */
  readonly isCustomerDeployed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#platform_type DataOciManagementAgentManagementAgents#platform_type}
  */
  readonly platformType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#plugin_name DataOciManagementAgentManagementAgents#plugin_name}
  */
  readonly pluginName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#state DataOciManagementAgentManagementAgents#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#version DataOciManagementAgentManagementAgents#version}
  */
  readonly version?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#wait_for_host_id DataOciManagementAgentManagementAgents#wait_for_host_id}
  */
  readonly waitForHostId?: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#filter DataOciManagementAgentManagementAgents#filter}
  */
  readonly filter?: DataOciManagementAgentManagementAgentsFilter[] | cdktf.IResolvable;
}
export interface DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions {
}

export function dataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsToTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsToHclTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensions | undefined) {
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

export class DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference {
    return new DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct {
}

export function dataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructToTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructToHclTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStruct | undefined) {
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
  private _metricDimensions = new DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListMetricDimensionsList(this, "metric_dimensions", false);
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

export class DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference {
    return new DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct {
}

export function dataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructToTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructToHclTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStruct | undefined) {
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

export class DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference {
    return new DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties {
}

export function dataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesToTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesToHclTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentProperties | undefined) {
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

export class DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference {
    return new DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct {
}

export function dataOciManagementAgentManagementAgentsManagementAgentsPluginListStructToTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentsManagementAgentsPluginListStructToHclTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentsManagementAgentsPluginListStruct | undefined) {
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

export class DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference {
    return new DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentsManagementAgents {
}

export function dataOciManagementAgentManagementAgentsManagementAgentsToTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentsManagementAgentsToHclTerraform(struct?: DataOciManagementAgentManagementAgentsManagementAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentsManagementAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsManagementAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentsManagementAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_status - computed: true, optional: false, required: false
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_source_list - computed: true, optional: false, required: false
  private _dataSourceList = new DataOciManagementAgentManagementAgentsManagementAgentsDataSourceListStructList(this, "data_source_list", false);
  public get dataSourceList() {
    return this._dataSourceList;
  }

  // data_source_summary_list - computed: true, optional: false, required: false
  private _dataSourceSummaryList = new DataOciManagementAgentManagementAgentsManagementAgentsDataSourceSummaryListStructList(this, "data_source_summary_list", false);
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

  // management_agent_properties - computed: true, optional: false, required: false
  private _managementAgentProperties = new DataOciManagementAgentManagementAgentsManagementAgentsManagementAgentPropertiesList(this, "management_agent_properties", false);
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
  private _pluginList = new DataOciManagementAgentManagementAgentsManagementAgentsPluginListStructList(this, "plugin_list", false);
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
}

export class DataOciManagementAgentManagementAgentsManagementAgentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentsManagementAgentsOutputReference {
    return new DataOciManagementAgentManagementAgentsManagementAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciManagementAgentManagementAgentsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#name DataOciManagementAgentManagementAgents#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#regex DataOciManagementAgentManagementAgents#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#values DataOciManagementAgentManagementAgents#values}
  */
  readonly values: string[];
}

export function dataOciManagementAgentManagementAgentsFilterToTerraform(struct?: DataOciManagementAgentManagementAgentsFilter | cdktf.IResolvable): any {
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


export function dataOciManagementAgentManagementAgentsFilterToHclTerraform(struct?: DataOciManagementAgentManagementAgentsFilter | cdktf.IResolvable): any {
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

export class DataOciManagementAgentManagementAgentsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciManagementAgentManagementAgentsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciManagementAgentManagementAgentsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciManagementAgentManagementAgentsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciManagementAgentManagementAgentsFilterOutputReference {
    return new DataOciManagementAgentManagementAgentsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents oci_management_agent_management_agents}
*/
export class DataOciManagementAgentManagementAgents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagementAgentManagementAgents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagementAgentManagementAgents to import
  * @param importFromId The id of the existing DataOciManagementAgentManagementAgents that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagementAgentManagementAgents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_agent_management_agents oci_management_agent_management_agents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagementAgentManagementAgentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_agent_management_agents',
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
    this._accessLevel = config.accessLevel;
    this._availabilityStatus = config.availabilityStatus;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._dataSourceName = config.dataSourceName;
    this._dataSourceType = config.dataSourceType;
    this._displayName = config.displayName;
    this._gatewayId = config.gatewayId;
    this._hostId = config.hostId;
    this._id = config.id;
    this._installType = config.installType;
    this._isCustomerDeployed = config.isCustomerDeployed;
    this._platformType = config.platformType;
    this._pluginName = config.pluginName;
    this._state = config.state;
    this._version = config.version;
    this._waitForHostId = config.waitForHostId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string[]; 
  public get dataSourceName() {
    return this.getListAttribute('data_source_name');
  }
  public set dataSourceName(value: string[]) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string[]; 
  public get gatewayId() {
    return this.getListAttribute('gateway_id');
  }
  public set gatewayId(value: string[]) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // install_type - computed: false, optional: true, required: false
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  public resetInstallType() {
    this._installType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // is_customer_deployed - computed: false, optional: true, required: false
  private _isCustomerDeployed?: boolean | cdktf.IResolvable; 
  public get isCustomerDeployed() {
    return this.getBooleanAttribute('is_customer_deployed');
  }
  public set isCustomerDeployed(value: boolean | cdktf.IResolvable) {
    this._isCustomerDeployed = value;
  }
  public resetIsCustomerDeployed() {
    this._isCustomerDeployed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomerDeployedInput() {
    return this._isCustomerDeployed;
  }

  // management_agents - computed: true, optional: false, required: false
  private _managementAgents = new DataOciManagementAgentManagementAgentsManagementAgentsList(this, "management_agents", false);
  public get managementAgents() {
    return this._managementAgents;
  }

  // platform_type - computed: false, optional: true, required: false
  private _platformType?: string[]; 
  public get platformType() {
    return this.getListAttribute('platform_type');
  }
  public set platformType(value: string[]) {
    this._platformType = value;
  }
  public resetPlatformType() {
    this._platformType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTypeInput() {
    return this._platformType;
  }

  // plugin_name - computed: false, optional: true, required: false
  private _pluginName?: string[]; 
  public get pluginName() {
    return this.getListAttribute('plugin_name');
  }
  public set pluginName(value: string[]) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return this.getListAttribute('version');
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_for_host_id - computed: false, optional: true, required: false
  private _waitForHostId?: number; 
  public get waitForHostId() {
    return this.getNumberAttribute('wait_for_host_id');
  }
  public set waitForHostId(value: number) {
    this._waitForHostId = value;
  }
  public resetWaitForHostId() {
    this._waitForHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForHostIdInput() {
    return this._waitForHostId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciManagementAgentManagementAgentsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciManagementAgentManagementAgentsFilter[] | cdktf.IResolvable) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      availability_status: cdktf.stringToTerraform(this._availabilityStatus),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      data_source_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataSourceName),
      data_source_type: cdktf.stringToTerraform(this._dataSourceType),
      display_name: cdktf.stringToTerraform(this._displayName),
      gateway_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gatewayId),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      install_type: cdktf.stringToTerraform(this._installType),
      is_customer_deployed: cdktf.booleanToTerraform(this._isCustomerDeployed),
      platform_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platformType),
      plugin_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pluginName),
      state: cdktf.stringToTerraform(this._state),
      version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._version),
      wait_for_host_id: cdktf.numberToTerraform(this._waitForHostId),
      filter: cdktf.listMapper(dataOciManagementAgentManagementAgentsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_status: {
        value: cdktf.stringToHclTerraform(this._availabilityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_source_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataSourceName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_source_type: {
        value: cdktf.stringToHclTerraform(this._dataSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gatewayId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      install_type: {
        value: cdktf.stringToHclTerraform(this._installType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_customer_deployed: {
        value: cdktf.booleanToHclTerraform(this._isCustomerDeployed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      platform_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platformType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      plugin_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pluginName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._version),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wait_for_host_id: {
        value: cdktf.numberToHclTerraform(this._waitForHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciManagementAgentManagementAgentsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciManagementAgentManagementAgentsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
