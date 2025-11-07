// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudAlidnsAccessStrategiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#enable_details DataAlicloudAlidnsAccessStrategies#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#id DataAlicloudAlidnsAccessStrategies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#ids DataAlicloudAlidnsAccessStrategies#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#instance_id DataAlicloudAlidnsAccessStrategies#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#lang DataAlicloudAlidnsAccessStrategies#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#name_regex DataAlicloudAlidnsAccessStrategies#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#output_file DataAlicloudAlidnsAccessStrategies#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#strategy_mode DataAlicloudAlidnsAccessStrategies#strategy_mode}
  */
  readonly strategyMode: string;
}
export interface DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPools {
}

export function dataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsToTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsToHclTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr_count - computed: true, optional: false, required: false
  public get addrCount() {
    return this.getNumberAttribute('addr_count');
  }

  // addr_pool_id - computed: true, optional: false, required: false
  public get addrPoolId() {
    return this.getStringAttribute('addr_pool_id');
  }

  // lba_weight - computed: true, optional: false, required: false
  public get lbaWeight() {
    return this.getNumberAttribute('lba_weight');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsOutputReference {
    return new DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPools {
}

export function dataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsToTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsToHclTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr_count - computed: true, optional: false, required: false
  public get addrCount() {
    return this.getNumberAttribute('addr_count');
  }

  // addr_pool_id - computed: true, optional: false, required: false
  public get addrPoolId() {
    return this.getStringAttribute('addr_pool_id');
  }

  // lba_weight - computed: true, optional: false, required: false
  public get lbaWeight() {
    return this.getNumberAttribute('lba_weight');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsOutputReference {
    return new DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlidnsAccessStrategiesStrategiesLines {
}

export function dataAlicloudAlidnsAccessStrategiesStrategiesLinesToTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategiesLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlidnsAccessStrategiesStrategiesLinesToHclTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategiesLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlidnsAccessStrategiesStrategiesLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlidnsAccessStrategiesStrategiesLines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_code - computed: true, optional: false, required: false
  public get groupCode() {
    return this.getStringAttribute('group_code');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // line_code - computed: true, optional: false, required: false
  public get lineCode() {
    return this.getStringAttribute('line_code');
  }

  // line_name - computed: true, optional: false, required: false
  public get lineName() {
    return this.getStringAttribute('line_name');
  }
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesLinesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlidnsAccessStrategiesStrategiesLinesOutputReference {
    return new DataAlicloudAlidnsAccessStrategiesStrategiesLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudAlidnsAccessStrategiesStrategies {
}

export function dataAlicloudAlidnsAccessStrategiesStrategiesToTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudAlidnsAccessStrategiesStrategiesToHclTerraform(struct?: DataAlicloudAlidnsAccessStrategiesStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudAlidnsAccessStrategiesStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudAlidnsAccessStrategiesStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode - computed: true, optional: false, required: false
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }

  // access_strategy_id - computed: true, optional: false, required: false
  public get accessStrategyId() {
    return this.getStringAttribute('access_strategy_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
  }

  // default_addr_pool_type - computed: true, optional: false, required: false
  public get defaultAddrPoolType() {
    return this.getStringAttribute('default_addr_pool_type');
  }

  // default_addr_pools - computed: true, optional: false, required: false
  private _defaultAddrPools = new DataAlicloudAlidnsAccessStrategiesStrategiesDefaultAddrPoolsList(this, "default_addr_pools", false);
  public get defaultAddrPools() {
    return this._defaultAddrPools;
  }

  // default_available_addr_num - computed: true, optional: false, required: false
  public get defaultAvailableAddrNum() {
    return this.getNumberAttribute('default_available_addr_num');
  }

  // default_latency_optimization - computed: true, optional: false, required: false
  public get defaultLatencyOptimization() {
    return this.getStringAttribute('default_latency_optimization');
  }

  // default_lba_strategy - computed: true, optional: false, required: false
  public get defaultLbaStrategy() {
    return this.getStringAttribute('default_lba_strategy');
  }

  // default_max_return_addr_num - computed: true, optional: false, required: false
  public get defaultMaxReturnAddrNum() {
    return this.getNumberAttribute('default_max_return_addr_num');
  }

  // default_min_available_addr_num - computed: true, optional: false, required: false
  public get defaultMinAvailableAddrNum() {
    return this.getNumberAttribute('default_min_available_addr_num');
  }

  // effective_addr_pool_group_type - computed: true, optional: false, required: false
  public get effectiveAddrPoolGroupType() {
    return this.getStringAttribute('effective_addr_pool_group_type');
  }

  // failover_addr_pool_type - computed: true, optional: false, required: false
  public get failoverAddrPoolType() {
    return this.getStringAttribute('failover_addr_pool_type');
  }

  // failover_addr_pools - computed: true, optional: false, required: false
  private _failoverAddrPools = new DataAlicloudAlidnsAccessStrategiesStrategiesFailoverAddrPoolsList(this, "failover_addr_pools", false);
  public get failoverAddrPools() {
    return this._failoverAddrPools;
  }

  // failover_available_addr_num - computed: true, optional: false, required: false
  public get failoverAvailableAddrNum() {
    return this.getNumberAttribute('failover_available_addr_num');
  }

  // failover_latency_optimization - computed: true, optional: false, required: false
  public get failoverLatencyOptimization() {
    return this.getStringAttribute('failover_latency_optimization');
  }

  // failover_lba_strategy - computed: true, optional: false, required: false
  public get failoverLbaStrategy() {
    return this.getStringAttribute('failover_lba_strategy');
  }

  // failover_max_return_addr_num - computed: true, optional: false, required: false
  public get failoverMaxReturnAddrNum() {
    return this.getNumberAttribute('failover_max_return_addr_num');
  }

  // failover_min_available_addr_num - computed: true, optional: false, required: false
  public get failoverMinAvailableAddrNum() {
    return this.getNumberAttribute('failover_min_available_addr_num');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // lines - computed: true, optional: false, required: false
  private _lines = new DataAlicloudAlidnsAccessStrategiesStrategiesLinesList(this, "lines", false);
  public get lines() {
    return this._lines;
  }

  // strategy_mode - computed: true, optional: false, required: false
  public get strategyMode() {
    return this.getStringAttribute('strategy_mode');
  }

  // strategy_name - computed: true, optional: false, required: false
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
}

export class DataAlicloudAlidnsAccessStrategiesStrategiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudAlidnsAccessStrategiesStrategiesOutputReference {
    return new DataAlicloudAlidnsAccessStrategiesStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies alicloud_alidns_access_strategies}
*/
export class DataAlicloudAlidnsAccessStrategies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_access_strategies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudAlidnsAccessStrategies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudAlidnsAccessStrategies to import
  * @param importFromId The id of the existing DataAlicloudAlidnsAccessStrategies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudAlidnsAccessStrategies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_access_strategies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/alidns_access_strategies alicloud_alidns_access_strategies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudAlidnsAccessStrategiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudAlidnsAccessStrategiesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_access_strategies',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._lang = config.lang;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._strategyMode = config.strategyMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // strategies - computed: true, optional: false, required: false
  private _strategies = new DataAlicloudAlidnsAccessStrategiesStrategiesList(this, "strategies", false);
  public get strategies() {
    return this._strategies;
  }

  // strategy_mode - computed: false, optional: false, required: true
  private _strategyMode?: string; 
  public get strategyMode() {
    return this.getStringAttribute('strategy_mode');
  }
  public set strategyMode(value: string) {
    this._strategyMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyModeInput() {
    return this._strategyMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lang: cdktf.stringToTerraform(this._lang),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      strategy_mode: cdktf.stringToTerraform(this._strategyMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_mode: {
        value: cdktf.stringToHclTerraform(this._strategyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
