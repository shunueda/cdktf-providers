// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexLoadtestingAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of a specific load testing agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent#agent_id DataYandexLoadtestingAgent#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent#id DataYandexLoadtestingAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * log_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent#log_settings DataYandexLoadtestingAgent#log_settings}
  */
  readonly logSettings?: DataYandexLoadtestingAgentLogSettings;
}
export interface DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParams {
}

export function dataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsToTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsToHclTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference {
    return new DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLoadtestingAgentComputeInstanceBootDisk {
}

export function dataYandexLoadtestingAgentComputeInstanceBootDiskToTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLoadtestingAgentComputeInstanceBootDiskToHclTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLoadtestingAgentComputeInstanceBootDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLoadtestingAgentComputeInstanceBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLoadtestingAgentComputeInstanceBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // initialize_params - computed: true, optional: false, required: false
  private _initializeParams = new DataYandexLoadtestingAgentComputeInstanceBootDiskInitializeParamsList(this, "initialize_params", false);
  public get initializeParams() {
    return this._initializeParams;
  }
}

export class DataYandexLoadtestingAgentComputeInstanceBootDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLoadtestingAgentComputeInstanceBootDiskOutputReference {
    return new DataYandexLoadtestingAgentComputeInstanceBootDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLoadtestingAgentComputeInstanceNetworkInterface {
}

export function dataYandexLoadtestingAgentComputeInstanceNetworkInterfaceToTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLoadtestingAgentComputeInstanceNetworkInterfaceToHclTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLoadtestingAgentComputeInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLoadtestingAgentComputeInstanceNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLoadtestingAgentComputeInstanceNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_ip_version - computed: true, optional: false, required: false
  public get natIpVersion() {
    return this.getStringAttribute('nat_ip_version');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataYandexLoadtestingAgentComputeInstanceNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLoadtestingAgentComputeInstanceNetworkInterfaceOutputReference {
    return new DataYandexLoadtestingAgentComputeInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLoadtestingAgentComputeInstanceResources {
}

export function dataYandexLoadtestingAgentComputeInstanceResourcesToTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLoadtestingAgentComputeInstanceResourcesToHclTerraform(struct?: DataYandexLoadtestingAgentComputeInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLoadtestingAgentComputeInstanceResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLoadtestingAgentComputeInstanceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLoadtestingAgentComputeInstanceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_fraction - computed: true, optional: false, required: false
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}

export class DataYandexLoadtestingAgentComputeInstanceResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLoadtestingAgentComputeInstanceResourcesOutputReference {
    return new DataYandexLoadtestingAgentComputeInstanceResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLoadtestingAgentComputeInstance {
}

export function dataYandexLoadtestingAgentComputeInstanceToTerraform(struct?: DataYandexLoadtestingAgentComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexLoadtestingAgentComputeInstanceToHclTerraform(struct?: DataYandexLoadtestingAgentComputeInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexLoadtestingAgentComputeInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexLoadtestingAgentComputeInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLoadtestingAgentComputeInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_disk - computed: true, optional: false, required: false
  private _bootDisk = new DataYandexLoadtestingAgentComputeInstanceBootDiskList(this, "boot_disk", false);
  public get bootDisk() {
    return this._bootDisk;
  }

  // computed_labels - computed: true, optional: false, required: false
  private _computedLabels = new cdktf.StringMap(this, "computed_labels");
  public get computedLabels() {
    return this._computedLabels;
  }

  // computed_metadata - computed: true, optional: false, required: false
  private _computedMetadata = new cdktf.StringMap(this, "computed_metadata");
  public get computedMetadata() {
    return this._computedMetadata;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataYandexLoadtestingAgentComputeInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexLoadtestingAgentComputeInstanceResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataYandexLoadtestingAgentComputeInstanceList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexLoadtestingAgentComputeInstanceOutputReference {
    return new DataYandexLoadtestingAgentComputeInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexLoadtestingAgentLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent#log_group_id DataYandexLoadtestingAgent#log_group_id}
  */
  readonly logGroupId?: string;
}

export function dataYandexLoadtestingAgentLogSettingsToTerraform(struct?: DataYandexLoadtestingAgentLogSettingsOutputReference | DataYandexLoadtestingAgentLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
  }
}


export function dataYandexLoadtestingAgentLogSettingsToHclTerraform(struct?: DataYandexLoadtestingAgentLogSettingsOutputReference | DataYandexLoadtestingAgentLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexLoadtestingAgentLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexLoadtestingAgentLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexLoadtestingAgentLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
    }
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent yandex_loadtesting_agent}
*/
export class DataYandexLoadtestingAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_loadtesting_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexLoadtestingAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexLoadtestingAgent to import
  * @param importFromId The id of the existing DataYandexLoadtestingAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexLoadtestingAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_loadtesting_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/loadtesting_agent yandex_loadtesting_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexLoadtestingAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexLoadtestingAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_loadtesting_agent',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._id = config.id;
    this._logSettings.internalValue = config.logSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // compute_instance - computed: true, optional: false, required: false
  private _computeInstance = new DataYandexLoadtestingAgentComputeInstanceList(this, "compute_instance", false);
  public get computeInstance() {
    return this._computeInstance;
  }

  // compute_instance_id - computed: true, optional: false, required: false
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings = new DataYandexLoadtestingAgentLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }
  public putLogSettings(value: DataYandexLoadtestingAgentLogSettings) {
    this._logSettings.internalValue = value;
  }
  public resetLogSettings() {
    this._logSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      log_settings: dataYandexLoadtestingAgentLogSettingsToTerraform(this._logSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
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
      log_settings: {
        value: dataYandexLoadtestingAgentLogSettingsToHclTerraform(this._logSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexLoadtestingAgentLogSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
