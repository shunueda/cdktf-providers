// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlidnsAccessStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#access_mode AlidnsAccessStrategy#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#default_addr_pool_type AlidnsAccessStrategy#default_addr_pool_type}
  */
  readonly defaultAddrPoolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#default_latency_optimization AlidnsAccessStrategy#default_latency_optimization}
  */
  readonly defaultLatencyOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#default_lba_strategy AlidnsAccessStrategy#default_lba_strategy}
  */
  readonly defaultLbaStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#default_max_return_addr_num AlidnsAccessStrategy#default_max_return_addr_num}
  */
  readonly defaultMaxReturnAddrNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#default_min_available_addr_num AlidnsAccessStrategy#default_min_available_addr_num}
  */
  readonly defaultMinAvailableAddrNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#failover_addr_pool_type AlidnsAccessStrategy#failover_addr_pool_type}
  */
  readonly failoverAddrPoolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#failover_latency_optimization AlidnsAccessStrategy#failover_latency_optimization}
  */
  readonly failoverLatencyOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#failover_lba_strategy AlidnsAccessStrategy#failover_lba_strategy}
  */
  readonly failoverLbaStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#failover_max_return_addr_num AlidnsAccessStrategy#failover_max_return_addr_num}
  */
  readonly failoverMaxReturnAddrNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#failover_min_available_addr_num AlidnsAccessStrategy#failover_min_available_addr_num}
  */
  readonly failoverMinAvailableAddrNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#id AlidnsAccessStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#instance_id AlidnsAccessStrategy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#lang AlidnsAccessStrategy#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#strategy_mode AlidnsAccessStrategy#strategy_mode}
  */
  readonly strategyMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#strategy_name AlidnsAccessStrategy#strategy_name}
  */
  readonly strategyName: string;
  /**
  * default_addr_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#default_addr_pools AlidnsAccessStrategy#default_addr_pools}
  */
  readonly defaultAddrPools: AlidnsAccessStrategyDefaultAddrPools[] | cdktf.IResolvable;
  /**
  * failover_addr_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#failover_addr_pools AlidnsAccessStrategy#failover_addr_pools}
  */
  readonly failoverAddrPools?: AlidnsAccessStrategyFailoverAddrPools[] | cdktf.IResolvable;
  /**
  * lines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#lines AlidnsAccessStrategy#lines}
  */
  readonly lines?: AlidnsAccessStrategyLines[] | cdktf.IResolvable;
}
export interface AlidnsAccessStrategyDefaultAddrPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#addr_pool_id AlidnsAccessStrategy#addr_pool_id}
  */
  readonly addrPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#lba_weight AlidnsAccessStrategy#lba_weight}
  */
  readonly lbaWeight?: number;
}

export function alidnsAccessStrategyDefaultAddrPoolsToTerraform(struct?: AlidnsAccessStrategyDefaultAddrPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_pool_id: cdktf.stringToTerraform(struct!.addrPoolId),
    lba_weight: cdktf.numberToTerraform(struct!.lbaWeight),
  }
}


export function alidnsAccessStrategyDefaultAddrPoolsToHclTerraform(struct?: AlidnsAccessStrategyDefaultAddrPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.addrPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lba_weight: {
      value: cdktf.numberToHclTerraform(struct!.lbaWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlidnsAccessStrategyDefaultAddrPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlidnsAccessStrategyDefaultAddrPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrPoolId = this._addrPoolId;
    }
    if (this._lbaWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbaWeight = this._lbaWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlidnsAccessStrategyDefaultAddrPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrPoolId = undefined;
      this._lbaWeight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrPoolId = value.addrPoolId;
      this._lbaWeight = value.lbaWeight;
    }
  }

  // addr_pool_id - computed: false, optional: false, required: true
  private _addrPoolId?: string; 
  public get addrPoolId() {
    return this.getStringAttribute('addr_pool_id');
  }
  public set addrPoolId(value: string) {
    this._addrPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrPoolIdInput() {
    return this._addrPoolId;
  }

  // lba_weight - computed: false, optional: true, required: false
  private _lbaWeight?: number; 
  public get lbaWeight() {
    return this.getNumberAttribute('lba_weight');
  }
  public set lbaWeight(value: number) {
    this._lbaWeight = value;
  }
  public resetLbaWeight() {
    this._lbaWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaWeightInput() {
    return this._lbaWeight;
  }
}

export class AlidnsAccessStrategyDefaultAddrPoolsList extends cdktf.ComplexList {
  public internalValue? : AlidnsAccessStrategyDefaultAddrPools[] | cdktf.IResolvable

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
  public get(index: number): AlidnsAccessStrategyDefaultAddrPoolsOutputReference {
    return new AlidnsAccessStrategyDefaultAddrPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlidnsAccessStrategyFailoverAddrPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#addr_pool_id AlidnsAccessStrategy#addr_pool_id}
  */
  readonly addrPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#lba_weight AlidnsAccessStrategy#lba_weight}
  */
  readonly lbaWeight?: number;
}

export function alidnsAccessStrategyFailoverAddrPoolsToTerraform(struct?: AlidnsAccessStrategyFailoverAddrPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_pool_id: cdktf.stringToTerraform(struct!.addrPoolId),
    lba_weight: cdktf.numberToTerraform(struct!.lbaWeight),
  }
}


export function alidnsAccessStrategyFailoverAddrPoolsToHclTerraform(struct?: AlidnsAccessStrategyFailoverAddrPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.addrPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lba_weight: {
      value: cdktf.numberToHclTerraform(struct!.lbaWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlidnsAccessStrategyFailoverAddrPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlidnsAccessStrategyFailoverAddrPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrPoolId = this._addrPoolId;
    }
    if (this._lbaWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbaWeight = this._lbaWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlidnsAccessStrategyFailoverAddrPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrPoolId = undefined;
      this._lbaWeight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrPoolId = value.addrPoolId;
      this._lbaWeight = value.lbaWeight;
    }
  }

  // addr_pool_id - computed: false, optional: true, required: false
  private _addrPoolId?: string; 
  public get addrPoolId() {
    return this.getStringAttribute('addr_pool_id');
  }
  public set addrPoolId(value: string) {
    this._addrPoolId = value;
  }
  public resetAddrPoolId() {
    this._addrPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrPoolIdInput() {
    return this._addrPoolId;
  }

  // lba_weight - computed: false, optional: true, required: false
  private _lbaWeight?: number; 
  public get lbaWeight() {
    return this.getNumberAttribute('lba_weight');
  }
  public set lbaWeight(value: number) {
    this._lbaWeight = value;
  }
  public resetLbaWeight() {
    this._lbaWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaWeightInput() {
    return this._lbaWeight;
  }
}

export class AlidnsAccessStrategyFailoverAddrPoolsList extends cdktf.ComplexList {
  public internalValue? : AlidnsAccessStrategyFailoverAddrPools[] | cdktf.IResolvable

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
  public get(index: number): AlidnsAccessStrategyFailoverAddrPoolsOutputReference {
    return new AlidnsAccessStrategyFailoverAddrPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlidnsAccessStrategyLines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#line_code AlidnsAccessStrategy#line_code}
  */
  readonly lineCode?: string;
}

export function alidnsAccessStrategyLinesToTerraform(struct?: AlidnsAccessStrategyLines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_code: cdktf.stringToTerraform(struct!.lineCode),
  }
}


export function alidnsAccessStrategyLinesToHclTerraform(struct?: AlidnsAccessStrategyLines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    line_code: {
      value: cdktf.stringToHclTerraform(struct!.lineCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlidnsAccessStrategyLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlidnsAccessStrategyLines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineCode = this._lineCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlidnsAccessStrategyLines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lineCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lineCode = value.lineCode;
    }
  }

  // line_code - computed: false, optional: true, required: false
  private _lineCode?: string; 
  public get lineCode() {
    return this.getStringAttribute('line_code');
  }
  public set lineCode(value: string) {
    this._lineCode = value;
  }
  public resetLineCode() {
    this._lineCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineCodeInput() {
    return this._lineCode;
  }
}

export class AlidnsAccessStrategyLinesList extends cdktf.ComplexList {
  public internalValue? : AlidnsAccessStrategyLines[] | cdktf.IResolvable

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
  public get(index: number): AlidnsAccessStrategyLinesOutputReference {
    return new AlidnsAccessStrategyLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy alicloud_alidns_access_strategy}
*/
export class AlidnsAccessStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_access_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlidnsAccessStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlidnsAccessStrategy to import
  * @param importFromId The id of the existing AlidnsAccessStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlidnsAccessStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_access_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_access_strategy alicloud_alidns_access_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlidnsAccessStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: AlidnsAccessStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_access_strategy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._defaultAddrPoolType = config.defaultAddrPoolType;
    this._defaultLatencyOptimization = config.defaultLatencyOptimization;
    this._defaultLbaStrategy = config.defaultLbaStrategy;
    this._defaultMaxReturnAddrNum = config.defaultMaxReturnAddrNum;
    this._defaultMinAvailableAddrNum = config.defaultMinAvailableAddrNum;
    this._failoverAddrPoolType = config.failoverAddrPoolType;
    this._failoverLatencyOptimization = config.failoverLatencyOptimization;
    this._failoverLbaStrategy = config.failoverLbaStrategy;
    this._failoverMaxReturnAddrNum = config.failoverMaxReturnAddrNum;
    this._failoverMinAvailableAddrNum = config.failoverMinAvailableAddrNum;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._lang = config.lang;
    this._strategyMode = config.strategyMode;
    this._strategyName = config.strategyName;
    this._defaultAddrPools.internalValue = config.defaultAddrPools;
    this._failoverAddrPools.internalValue = config.failoverAddrPools;
    this._lines.internalValue = config.lines;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // default_addr_pool_type - computed: false, optional: false, required: true
  private _defaultAddrPoolType?: string; 
  public get defaultAddrPoolType() {
    return this.getStringAttribute('default_addr_pool_type');
  }
  public set defaultAddrPoolType(value: string) {
    this._defaultAddrPoolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddrPoolTypeInput() {
    return this._defaultAddrPoolType;
  }

  // default_latency_optimization - computed: false, optional: true, required: false
  private _defaultLatencyOptimization?: string; 
  public get defaultLatencyOptimization() {
    return this.getStringAttribute('default_latency_optimization');
  }
  public set defaultLatencyOptimization(value: string) {
    this._defaultLatencyOptimization = value;
  }
  public resetDefaultLatencyOptimization() {
    this._defaultLatencyOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLatencyOptimizationInput() {
    return this._defaultLatencyOptimization;
  }

  // default_lba_strategy - computed: false, optional: true, required: false
  private _defaultLbaStrategy?: string; 
  public get defaultLbaStrategy() {
    return this.getStringAttribute('default_lba_strategy');
  }
  public set defaultLbaStrategy(value: string) {
    this._defaultLbaStrategy = value;
  }
  public resetDefaultLbaStrategy() {
    this._defaultLbaStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLbaStrategyInput() {
    return this._defaultLbaStrategy;
  }

  // default_max_return_addr_num - computed: false, optional: true, required: false
  private _defaultMaxReturnAddrNum?: number; 
  public get defaultMaxReturnAddrNum() {
    return this.getNumberAttribute('default_max_return_addr_num');
  }
  public set defaultMaxReturnAddrNum(value: number) {
    this._defaultMaxReturnAddrNum = value;
  }
  public resetDefaultMaxReturnAddrNum() {
    this._defaultMaxReturnAddrNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxReturnAddrNumInput() {
    return this._defaultMaxReturnAddrNum;
  }

  // default_min_available_addr_num - computed: false, optional: false, required: true
  private _defaultMinAvailableAddrNum?: number; 
  public get defaultMinAvailableAddrNum() {
    return this.getNumberAttribute('default_min_available_addr_num');
  }
  public set defaultMinAvailableAddrNum(value: number) {
    this._defaultMinAvailableAddrNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMinAvailableAddrNumInput() {
    return this._defaultMinAvailableAddrNum;
  }

  // failover_addr_pool_type - computed: false, optional: true, required: false
  private _failoverAddrPoolType?: string; 
  public get failoverAddrPoolType() {
    return this.getStringAttribute('failover_addr_pool_type');
  }
  public set failoverAddrPoolType(value: string) {
    this._failoverAddrPoolType = value;
  }
  public resetFailoverAddrPoolType() {
    this._failoverAddrPoolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAddrPoolTypeInput() {
    return this._failoverAddrPoolType;
  }

  // failover_latency_optimization - computed: false, optional: true, required: false
  private _failoverLatencyOptimization?: string; 
  public get failoverLatencyOptimization() {
    return this.getStringAttribute('failover_latency_optimization');
  }
  public set failoverLatencyOptimization(value: string) {
    this._failoverLatencyOptimization = value;
  }
  public resetFailoverLatencyOptimization() {
    this._failoverLatencyOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverLatencyOptimizationInput() {
    return this._failoverLatencyOptimization;
  }

  // failover_lba_strategy - computed: false, optional: true, required: false
  private _failoverLbaStrategy?: string; 
  public get failoverLbaStrategy() {
    return this.getStringAttribute('failover_lba_strategy');
  }
  public set failoverLbaStrategy(value: string) {
    this._failoverLbaStrategy = value;
  }
  public resetFailoverLbaStrategy() {
    this._failoverLbaStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverLbaStrategyInput() {
    return this._failoverLbaStrategy;
  }

  // failover_max_return_addr_num - computed: false, optional: true, required: false
  private _failoverMaxReturnAddrNum?: number; 
  public get failoverMaxReturnAddrNum() {
    return this.getNumberAttribute('failover_max_return_addr_num');
  }
  public set failoverMaxReturnAddrNum(value: number) {
    this._failoverMaxReturnAddrNum = value;
  }
  public resetFailoverMaxReturnAddrNum() {
    this._failoverMaxReturnAddrNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverMaxReturnAddrNumInput() {
    return this._failoverMaxReturnAddrNum;
  }

  // failover_min_available_addr_num - computed: false, optional: true, required: false
  private _failoverMinAvailableAddrNum?: number; 
  public get failoverMinAvailableAddrNum() {
    return this.getNumberAttribute('failover_min_available_addr_num');
  }
  public set failoverMinAvailableAddrNum(value: number) {
    this._failoverMinAvailableAddrNum = value;
  }
  public resetFailoverMinAvailableAddrNum() {
    this._failoverMinAvailableAddrNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverMinAvailableAddrNumInput() {
    return this._failoverMinAvailableAddrNum;
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

  // strategy_name - computed: false, optional: false, required: true
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // default_addr_pools - computed: false, optional: false, required: true
  private _defaultAddrPools = new AlidnsAccessStrategyDefaultAddrPoolsList(this, "default_addr_pools", true);
  public get defaultAddrPools() {
    return this._defaultAddrPools;
  }
  public putDefaultAddrPools(value: AlidnsAccessStrategyDefaultAddrPools[] | cdktf.IResolvable) {
    this._defaultAddrPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAddrPoolsInput() {
    return this._defaultAddrPools.internalValue;
  }

  // failover_addr_pools - computed: false, optional: true, required: false
  private _failoverAddrPools = new AlidnsAccessStrategyFailoverAddrPoolsList(this, "failover_addr_pools", true);
  public get failoverAddrPools() {
    return this._failoverAddrPools;
  }
  public putFailoverAddrPools(value: AlidnsAccessStrategyFailoverAddrPools[] | cdktf.IResolvable) {
    this._failoverAddrPools.internalValue = value;
  }
  public resetFailoverAddrPools() {
    this._failoverAddrPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAddrPoolsInput() {
    return this._failoverAddrPools.internalValue;
  }

  // lines - computed: false, optional: true, required: false
  private _lines = new AlidnsAccessStrategyLinesList(this, "lines", true);
  public get lines() {
    return this._lines;
  }
  public putLines(value: AlidnsAccessStrategyLines[] | cdktf.IResolvable) {
    this._lines.internalValue = value;
  }
  public resetLines() {
    this._lines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linesInput() {
    return this._lines.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      default_addr_pool_type: cdktf.stringToTerraform(this._defaultAddrPoolType),
      default_latency_optimization: cdktf.stringToTerraform(this._defaultLatencyOptimization),
      default_lba_strategy: cdktf.stringToTerraform(this._defaultLbaStrategy),
      default_max_return_addr_num: cdktf.numberToTerraform(this._defaultMaxReturnAddrNum),
      default_min_available_addr_num: cdktf.numberToTerraform(this._defaultMinAvailableAddrNum),
      failover_addr_pool_type: cdktf.stringToTerraform(this._failoverAddrPoolType),
      failover_latency_optimization: cdktf.stringToTerraform(this._failoverLatencyOptimization),
      failover_lba_strategy: cdktf.stringToTerraform(this._failoverLbaStrategy),
      failover_max_return_addr_num: cdktf.numberToTerraform(this._failoverMaxReturnAddrNum),
      failover_min_available_addr_num: cdktf.numberToTerraform(this._failoverMinAvailableAddrNum),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lang: cdktf.stringToTerraform(this._lang),
      strategy_mode: cdktf.stringToTerraform(this._strategyMode),
      strategy_name: cdktf.stringToTerraform(this._strategyName),
      default_addr_pools: cdktf.listMapper(alidnsAccessStrategyDefaultAddrPoolsToTerraform, true)(this._defaultAddrPools.internalValue),
      failover_addr_pools: cdktf.listMapper(alidnsAccessStrategyFailoverAddrPoolsToTerraform, true)(this._failoverAddrPools.internalValue),
      lines: cdktf.listMapper(alidnsAccessStrategyLinesToTerraform, true)(this._lines.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_addr_pool_type: {
        value: cdktf.stringToHclTerraform(this._defaultAddrPoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_latency_optimization: {
        value: cdktf.stringToHclTerraform(this._defaultLatencyOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_lba_strategy: {
        value: cdktf.stringToHclTerraform(this._defaultLbaStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_max_return_addr_num: {
        value: cdktf.numberToHclTerraform(this._defaultMaxReturnAddrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_min_available_addr_num: {
        value: cdktf.numberToHclTerraform(this._defaultMinAvailableAddrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_addr_pool_type: {
        value: cdktf.stringToHclTerraform(this._failoverAddrPoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_latency_optimization: {
        value: cdktf.stringToHclTerraform(this._failoverLatencyOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_lba_strategy: {
        value: cdktf.stringToHclTerraform(this._failoverLbaStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_max_return_addr_num: {
        value: cdktf.numberToHclTerraform(this._failoverMaxReturnAddrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_min_available_addr_num: {
        value: cdktf.numberToHclTerraform(this._failoverMinAvailableAddrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      strategy_mode: {
        value: cdktf.stringToHclTerraform(this._strategyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_name: {
        value: cdktf.stringToHclTerraform(this._strategyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_addr_pools: {
        value: cdktf.listMapperHcl(alidnsAccessStrategyDefaultAddrPoolsToHclTerraform, true)(this._defaultAddrPools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlidnsAccessStrategyDefaultAddrPoolsList",
      },
      failover_addr_pools: {
        value: cdktf.listMapperHcl(alidnsAccessStrategyFailoverAddrPoolsToHclTerraform, true)(this._failoverAddrPools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlidnsAccessStrategyFailoverAddrPoolsList",
      },
      lines: {
        value: cdktf.listMapperHcl(alidnsAccessStrategyLinesToHclTerraform, true)(this._lines.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlidnsAccessStrategyLinesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
