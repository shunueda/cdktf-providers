// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAgentManagementAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#defined_tags ManagementAgentManagementAgent#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#deploy_plugins_id ManagementAgentManagementAgent#deploy_plugins_id}
  */
  readonly deployPluginsId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#display_name ManagementAgentManagementAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#freeform_tags ManagementAgentManagementAgent#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#id ManagementAgentManagementAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#managed_agent_id ManagementAgentManagementAgent#managed_agent_id}
  */
  readonly managedAgentId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#timeouts ManagementAgentManagementAgent#timeouts}
  */
  readonly timeouts?: ManagementAgentManagementAgentTimeouts;
}
export interface ManagementAgentManagementAgentDataSourceListMetricDimensions {
}

export function managementAgentManagementAgentDataSourceListMetricDimensionsToTerraform(struct?: ManagementAgentManagementAgentDataSourceListMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementAgentManagementAgentDataSourceListMetricDimensionsToHclTerraform(struct?: ManagementAgentManagementAgentDataSourceListMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAgentManagementAgentDataSourceListMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentDataSourceListMetricDimensions | undefined) {
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

export class ManagementAgentManagementAgentDataSourceListMetricDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference {
    return new ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAgentManagementAgentDataSourceListStruct {
}

export function managementAgentManagementAgentDataSourceListStructToTerraform(struct?: ManagementAgentManagementAgentDataSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementAgentManagementAgentDataSourceListStructToHclTerraform(struct?: ManagementAgentManagementAgentDataSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementAgentManagementAgentDataSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAgentManagementAgentDataSourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentDataSourceListStruct | undefined) {
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
  private _metricDimensions = new ManagementAgentManagementAgentDataSourceListMetricDimensionsList(this, "metric_dimensions", false);
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

export class ManagementAgentManagementAgentDataSourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): ManagementAgentManagementAgentDataSourceListStructOutputReference {
    return new ManagementAgentManagementAgentDataSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAgentManagementAgentDataSourceSummaryListStruct {
}

export function managementAgentManagementAgentDataSourceSummaryListStructToTerraform(struct?: ManagementAgentManagementAgentDataSourceSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementAgentManagementAgentDataSourceSummaryListStructToHclTerraform(struct?: ManagementAgentManagementAgentDataSourceSummaryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAgentManagementAgentDataSourceSummaryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentDataSourceSummaryListStruct | undefined) {
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

export class ManagementAgentManagementAgentDataSourceSummaryListStructList extends cdktf.ComplexList {

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
  public get(index: number): ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference {
    return new ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAgentManagementAgentManagementAgentProperties {
}

export function managementAgentManagementAgentManagementAgentPropertiesToTerraform(struct?: ManagementAgentManagementAgentManagementAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementAgentManagementAgentManagementAgentPropertiesToHclTerraform(struct?: ManagementAgentManagementAgentManagementAgentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementAgentManagementAgentManagementAgentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAgentManagementAgentManagementAgentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentManagementAgentProperties | undefined) {
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

export class ManagementAgentManagementAgentManagementAgentPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): ManagementAgentManagementAgentManagementAgentPropertiesOutputReference {
    return new ManagementAgentManagementAgentManagementAgentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAgentManagementAgentPluginListStruct {
}

export function managementAgentManagementAgentPluginListStructToTerraform(struct?: ManagementAgentManagementAgentPluginListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementAgentManagementAgentPluginListStructToHclTerraform(struct?: ManagementAgentManagementAgentPluginListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementAgentManagementAgentPluginListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAgentManagementAgentPluginListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentPluginListStruct | undefined) {
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

export class ManagementAgentManagementAgentPluginListStructList extends cdktf.ComplexList {

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
  public get(index: number): ManagementAgentManagementAgentPluginListStructOutputReference {
    return new ManagementAgentManagementAgentPluginListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAgentManagementAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#create ManagementAgentManagementAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#delete ManagementAgentManagementAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#update ManagementAgentManagementAgent#update}
  */
  readonly update?: string;
}

export function managementAgentManagementAgentTimeoutsToTerraform(struct?: ManagementAgentManagementAgentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function managementAgentManagementAgentTimeoutsToHclTerraform(struct?: ManagementAgentManagementAgentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAgentManagementAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAgentManagementAgentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent oci_management_agent_management_agent}
*/
export class ManagementAgentManagementAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAgentManagementAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAgentManagementAgent to import
  * @param importFromId The id of the existing ManagementAgentManagementAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAgentManagementAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent oci_management_agent_management_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAgentManagementAgentConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAgentManagementAgentConfig) {
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
    this._definedTags = config.definedTags;
    this._deployPluginsId = config.deployPluginsId;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._managedAgentId = config.managedAgentId;
    this._timeouts.internalValue = config.timeouts;
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
  private _dataSourceList = new ManagementAgentManagementAgentDataSourceListStructList(this, "data_source_list", false);
  public get dataSourceList() {
    return this._dataSourceList;
  }

  // data_source_summary_list - computed: true, optional: false, required: false
  private _dataSourceSummaryList = new ManagementAgentManagementAgentDataSourceSummaryListStructList(this, "data_source_summary_list", false);
  public get dataSourceSummaryList() {
    return this._dataSourceSummaryList;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deploy_plugins_id - computed: false, optional: true, required: false
  private _deployPluginsId?: string[]; 
  public get deployPluginsId() {
    return this.getListAttribute('deploy_plugins_id');
  }
  public set deployPluginsId(value: string[]) {
    this._deployPluginsId = value;
  }
  public resetDeployPluginsId() {
    this._deployPluginsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPluginsIdInput() {
    return this._deployPluginsId;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
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

  // managed_agent_id - computed: false, optional: false, required: true
  private _managedAgentId?: string; 
  public get managedAgentId() {
    return this.getStringAttribute('managed_agent_id');
  }
  public set managedAgentId(value: string) {
    this._managedAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAgentIdInput() {
    return this._managedAgentId;
  }

  // management_agent_properties - computed: true, optional: false, required: false
  private _managementAgentProperties = new ManagementAgentManagementAgentManagementAgentPropertiesList(this, "management_agent_properties", false);
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
  private _pluginList = new ManagementAgentManagementAgentPluginListStructList(this, "plugin_list", false);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagementAgentManagementAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagementAgentManagementAgentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_plugins_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deployPluginsId),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      managed_agent_id: cdktf.stringToTerraform(this._managedAgentId),
      timeouts: managementAgentManagementAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deploy_plugins_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deployPluginsId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_agent_id: {
        value: cdktf.stringToHclTerraform(this._managedAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: managementAgentManagementAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAgentManagementAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
