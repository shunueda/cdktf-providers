// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgtmStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#id IgtmStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#instance_id IgtmStrategy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to enable policy forced retention of default lines disabled, enabled, default is disabled and only one policy can be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#keep_domain_records IgtmStrategy#keep_domain_records}
  */
  readonly keepDomainRecords?: string;
  /**
  * Strategy name, cannot be duplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#strategy_name IgtmStrategy#strategy_name}
  */
  readonly strategyName: string;
  /**
  * Policy scheduling mode: AUTO default switching; STOP only pause without switching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#switch_pool_type IgtmStrategy#switch_pool_type}
  */
  readonly switchPoolType?: string;
  /**
  * fallback_address_pool_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#fallback_address_pool_set IgtmStrategy#fallback_address_pool_set}
  */
  readonly fallbackAddressPoolSet: IgtmStrategyFallbackAddressPoolSet[] | cdktf.IResolvable;
  /**
  * main_address_pool_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#main_address_pool_set IgtmStrategy#main_address_pool_set}
  */
  readonly mainAddressPoolSet: IgtmStrategyMainAddressPoolSet[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#source IgtmStrategy#source}
  */
  readonly source: IgtmStrategySource[] | cdktf.IResolvable;
}
export interface IgtmStrategyFallbackAddressPoolSetAddressPools {
  /**
  * Address pool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#pool_id IgtmStrategy#pool_id}
  */
  readonly poolId: number;
  /**
  * Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#weight IgtmStrategy#weight}
  */
  readonly weight?: number;
}

export function igtmStrategyFallbackAddressPoolSetAddressPoolsToTerraform(struct?: IgtmStrategyFallbackAddressPoolSetAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_id: cdktf.numberToTerraform(struct!.poolId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function igtmStrategyFallbackAddressPoolSetAddressPoolsToHclTerraform(struct?: IgtmStrategyFallbackAddressPoolSetAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_id: {
      value: cdktf.numberToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgtmStrategyFallbackAddressPoolSetAddressPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgtmStrategyFallbackAddressPoolSetAddressPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgtmStrategyFallbackAddressPoolSetAddressPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolId = value.poolId;
      this._weight = value.weight;
    }
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: number; 
  public get poolId() {
    return this.getNumberAttribute('pool_id');
  }
  public set poolId(value: number) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class IgtmStrategyFallbackAddressPoolSetAddressPoolsList extends cdktf.ComplexList {
  public internalValue? : IgtmStrategyFallbackAddressPoolSetAddressPools[] | cdktf.IResolvable

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
  public get(index: number): IgtmStrategyFallbackAddressPoolSetAddressPoolsOutputReference {
    return new IgtmStrategyFallbackAddressPoolSetAddressPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgtmStrategyFallbackAddressPoolSet {
  /**
  * Address pool set ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#main_address_pool_id IgtmStrategy#main_address_pool_id}
  */
  readonly mainAddressPoolId?: number;
  /**
  * Switch threshold, cannot exceed the total number of addresses in the main set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#min_survive_num IgtmStrategy#min_survive_num}
  */
  readonly minSurviveNum?: number;
  /**
  * Switch strategy: ALL resolves all addresses; WEIGHT: load balancing. When ALL, the weight value of resolved addresses is 1; when WEIGHT, weight is address pool weight * address weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#traffic_strategy IgtmStrategy#traffic_strategy}
  */
  readonly trafficStrategy?: string;
  /**
  * address_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#address_pools IgtmStrategy#address_pools}
  */
  readonly addressPools: IgtmStrategyFallbackAddressPoolSetAddressPools[] | cdktf.IResolvable;
}

export function igtmStrategyFallbackAddressPoolSetToTerraform(struct?: IgtmStrategyFallbackAddressPoolSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_address_pool_id: cdktf.numberToTerraform(struct!.mainAddressPoolId),
    min_survive_num: cdktf.numberToTerraform(struct!.minSurviveNum),
    traffic_strategy: cdktf.stringToTerraform(struct!.trafficStrategy),
    address_pools: cdktf.listMapper(igtmStrategyFallbackAddressPoolSetAddressPoolsToTerraform, true)(struct!.addressPools),
  }
}


export function igtmStrategyFallbackAddressPoolSetToHclTerraform(struct?: IgtmStrategyFallbackAddressPoolSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_address_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.mainAddressPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_survive_num: {
      value: cdktf.numberToHclTerraform(struct!.minSurviveNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_strategy: {
      value: cdktf.stringToHclTerraform(struct!.trafficStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_pools: {
      value: cdktf.listMapperHcl(igtmStrategyFallbackAddressPoolSetAddressPoolsToHclTerraform, true)(struct!.addressPools),
      isBlock: true,
      type: "list",
      storageClassType: "IgtmStrategyFallbackAddressPoolSetAddressPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgtmStrategyFallbackAddressPoolSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgtmStrategyFallbackAddressPoolSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainAddressPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainAddressPoolId = this._mainAddressPoolId;
    }
    if (this._minSurviveNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSurviveNum = this._minSurviveNum;
    }
    if (this._trafficStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStrategy = this._trafficStrategy;
    }
    if (this._addressPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPools = this._addressPools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgtmStrategyFallbackAddressPoolSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainAddressPoolId = undefined;
      this._minSurviveNum = undefined;
      this._trafficStrategy = undefined;
      this._addressPools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainAddressPoolId = value.mainAddressPoolId;
      this._minSurviveNum = value.minSurviveNum;
      this._trafficStrategy = value.trafficStrategy;
      this._addressPools.internalValue = value.addressPools;
    }
  }

  // main_address_pool_id - computed: true, optional: true, required: false
  private _mainAddressPoolId?: number; 
  public get mainAddressPoolId() {
    return this.getNumberAttribute('main_address_pool_id');
  }
  public set mainAddressPoolId(value: number) {
    this._mainAddressPoolId = value;
  }
  public resetMainAddressPoolId() {
    this._mainAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainAddressPoolIdInput() {
    return this._mainAddressPoolId;
  }

  // min_survive_num - computed: true, optional: true, required: false
  private _minSurviveNum?: number; 
  public get minSurviveNum() {
    return this.getNumberAttribute('min_survive_num');
  }
  public set minSurviveNum(value: number) {
    this._minSurviveNum = value;
  }
  public resetMinSurviveNum() {
    this._minSurviveNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSurviveNumInput() {
    return this._minSurviveNum;
  }

  // traffic_strategy - computed: true, optional: true, required: false
  private _trafficStrategy?: string; 
  public get trafficStrategy() {
    return this.getStringAttribute('traffic_strategy');
  }
  public set trafficStrategy(value: string) {
    this._trafficStrategy = value;
  }
  public resetTrafficStrategy() {
    this._trafficStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStrategyInput() {
    return this._trafficStrategy;
  }

  // address_pools - computed: false, optional: false, required: true
  private _addressPools = new IgtmStrategyFallbackAddressPoolSetAddressPoolsList(this, "address_pools", false);
  public get addressPools() {
    return this._addressPools;
  }
  public putAddressPools(value: IgtmStrategyFallbackAddressPoolSetAddressPools[] | cdktf.IResolvable) {
    this._addressPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolsInput() {
    return this._addressPools.internalValue;
  }
}

export class IgtmStrategyFallbackAddressPoolSetList extends cdktf.ComplexList {
  public internalValue? : IgtmStrategyFallbackAddressPoolSet[] | cdktf.IResolvable

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
  public get(index: number): IgtmStrategyFallbackAddressPoolSetOutputReference {
    return new IgtmStrategyFallbackAddressPoolSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgtmStrategyMainAddressPoolSetAddressPools {
  /**
  * Address pool ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#pool_id IgtmStrategy#pool_id}
  */
  readonly poolId: number;
  /**
  * Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#weight IgtmStrategy#weight}
  */
  readonly weight?: number;
}

export function igtmStrategyMainAddressPoolSetAddressPoolsToTerraform(struct?: IgtmStrategyMainAddressPoolSetAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_id: cdktf.numberToTerraform(struct!.poolId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function igtmStrategyMainAddressPoolSetAddressPoolsToHclTerraform(struct?: IgtmStrategyMainAddressPoolSetAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_id: {
      value: cdktf.numberToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgtmStrategyMainAddressPoolSetAddressPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgtmStrategyMainAddressPoolSetAddressPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgtmStrategyMainAddressPoolSetAddressPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolId = value.poolId;
      this._weight = value.weight;
    }
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: number; 
  public get poolId() {
    return this.getNumberAttribute('pool_id');
  }
  public set poolId(value: number) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class IgtmStrategyMainAddressPoolSetAddressPoolsList extends cdktf.ComplexList {
  public internalValue? : IgtmStrategyMainAddressPoolSetAddressPools[] | cdktf.IResolvable

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
  public get(index: number): IgtmStrategyMainAddressPoolSetAddressPoolsOutputReference {
    return new IgtmStrategyMainAddressPoolSetAddressPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgtmStrategyMainAddressPoolSet {
  /**
  * Address pool set ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#main_address_pool_id IgtmStrategy#main_address_pool_id}
  */
  readonly mainAddressPoolId?: number;
  /**
  * Switch threshold, cannot exceed the total number of addresses in the main set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#min_survive_num IgtmStrategy#min_survive_num}
  */
  readonly minSurviveNum?: number;
  /**
  * Switch strategy: ALL resolves all addresses; WEIGHT: load balancing. When ALL, the weight value of resolved addresses is 1; when WEIGHT, weight is address pool weight * address weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#traffic_strategy IgtmStrategy#traffic_strategy}
  */
  readonly trafficStrategy?: string;
  /**
  * address_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#address_pools IgtmStrategy#address_pools}
  */
  readonly addressPools: IgtmStrategyMainAddressPoolSetAddressPools[] | cdktf.IResolvable;
}

export function igtmStrategyMainAddressPoolSetToTerraform(struct?: IgtmStrategyMainAddressPoolSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_address_pool_id: cdktf.numberToTerraform(struct!.mainAddressPoolId),
    min_survive_num: cdktf.numberToTerraform(struct!.minSurviveNum),
    traffic_strategy: cdktf.stringToTerraform(struct!.trafficStrategy),
    address_pools: cdktf.listMapper(igtmStrategyMainAddressPoolSetAddressPoolsToTerraform, true)(struct!.addressPools),
  }
}


export function igtmStrategyMainAddressPoolSetToHclTerraform(struct?: IgtmStrategyMainAddressPoolSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_address_pool_id: {
      value: cdktf.numberToHclTerraform(struct!.mainAddressPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_survive_num: {
      value: cdktf.numberToHclTerraform(struct!.minSurviveNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_strategy: {
      value: cdktf.stringToHclTerraform(struct!.trafficStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_pools: {
      value: cdktf.listMapperHcl(igtmStrategyMainAddressPoolSetAddressPoolsToHclTerraform, true)(struct!.addressPools),
      isBlock: true,
      type: "list",
      storageClassType: "IgtmStrategyMainAddressPoolSetAddressPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgtmStrategyMainAddressPoolSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgtmStrategyMainAddressPoolSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainAddressPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainAddressPoolId = this._mainAddressPoolId;
    }
    if (this._minSurviveNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSurviveNum = this._minSurviveNum;
    }
    if (this._trafficStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStrategy = this._trafficStrategy;
    }
    if (this._addressPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPools = this._addressPools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgtmStrategyMainAddressPoolSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainAddressPoolId = undefined;
      this._minSurviveNum = undefined;
      this._trafficStrategy = undefined;
      this._addressPools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainAddressPoolId = value.mainAddressPoolId;
      this._minSurviveNum = value.minSurviveNum;
      this._trafficStrategy = value.trafficStrategy;
      this._addressPools.internalValue = value.addressPools;
    }
  }

  // main_address_pool_id - computed: true, optional: true, required: false
  private _mainAddressPoolId?: number; 
  public get mainAddressPoolId() {
    return this.getNumberAttribute('main_address_pool_id');
  }
  public set mainAddressPoolId(value: number) {
    this._mainAddressPoolId = value;
  }
  public resetMainAddressPoolId() {
    this._mainAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainAddressPoolIdInput() {
    return this._mainAddressPoolId;
  }

  // min_survive_num - computed: true, optional: true, required: false
  private _minSurviveNum?: number; 
  public get minSurviveNum() {
    return this.getNumberAttribute('min_survive_num');
  }
  public set minSurviveNum(value: number) {
    this._minSurviveNum = value;
  }
  public resetMinSurviveNum() {
    this._minSurviveNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSurviveNumInput() {
    return this._minSurviveNum;
  }

  // traffic_strategy - computed: true, optional: true, required: false
  private _trafficStrategy?: string; 
  public get trafficStrategy() {
    return this.getStringAttribute('traffic_strategy');
  }
  public set trafficStrategy(value: string) {
    this._trafficStrategy = value;
  }
  public resetTrafficStrategy() {
    this._trafficStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStrategyInput() {
    return this._trafficStrategy;
  }

  // address_pools - computed: false, optional: false, required: true
  private _addressPools = new IgtmStrategyMainAddressPoolSetAddressPoolsList(this, "address_pools", false);
  public get addressPools() {
    return this._addressPools;
  }
  public putAddressPools(value: IgtmStrategyMainAddressPoolSetAddressPools[] | cdktf.IResolvable) {
    this._addressPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolsInput() {
    return this._addressPools.internalValue;
  }
}

export class IgtmStrategyMainAddressPoolSetList extends cdktf.ComplexList {
  public internalValue? : IgtmStrategyMainAddressPoolSet[] | cdktf.IResolvable

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
  public get(index: number): IgtmStrategyMainAddressPoolSetOutputReference {
    return new IgtmStrategyMainAddressPoolSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgtmStrategySource {
  /**
  * Resolution request source line ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#dns_line_id IgtmStrategy#dns_line_id}
  */
  readonly dnsLineId: number;
  /**
  * Resolution request source line name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#name IgtmStrategy#name}
  */
  readonly name?: string;
}

export function igtmStrategySourceToTerraform(struct?: IgtmStrategySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_line_id: cdktf.numberToTerraform(struct!.dnsLineId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function igtmStrategySourceToHclTerraform(struct?: IgtmStrategySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_line_id: {
      value: cdktf.numberToHclTerraform(struct!.dnsLineId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgtmStrategySourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgtmStrategySource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsLineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLineId = this._dnsLineId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgtmStrategySource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsLineId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsLineId = value.dnsLineId;
      this._name = value.name;
    }
  }

  // dns_line_id - computed: false, optional: false, required: true
  private _dnsLineId?: number; 
  public get dnsLineId() {
    return this.getNumberAttribute('dns_line_id');
  }
  public set dnsLineId(value: number) {
    this._dnsLineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLineIdInput() {
    return this._dnsLineId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class IgtmStrategySourceList extends cdktf.ComplexList {
  public internalValue? : IgtmStrategySource[] | cdktf.IResolvable

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
  public get(index: number): IgtmStrategySourceOutputReference {
    return new IgtmStrategySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy tencentcloud_igtm_strategy}
*/
export class IgtmStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_igtm_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgtmStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgtmStrategy to import
  * @param importFromId The id of the existing IgtmStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgtmStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_igtm_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/igtm_strategy tencentcloud_igtm_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgtmStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: IgtmStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_igtm_strategy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._instanceId = config.instanceId;
    this._keepDomainRecords = config.keepDomainRecords;
    this._strategyName = config.strategyName;
    this._switchPoolType = config.switchPoolType;
    this._fallbackAddressPoolSet.internalValue = config.fallbackAddressPoolSet;
    this._mainAddressPoolSet.internalValue = config.mainAddressPoolSet;
    this._source.internalValue = config.source;
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

  // keep_domain_records - computed: false, optional: true, required: false
  private _keepDomainRecords?: string; 
  public get keepDomainRecords() {
    return this.getStringAttribute('keep_domain_records');
  }
  public set keepDomainRecords(value: string) {
    this._keepDomainRecords = value;
  }
  public resetKeepDomainRecords() {
    this._keepDomainRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDomainRecordsInput() {
    return this._keepDomainRecords;
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getNumberAttribute('strategy_id');
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

  // switch_pool_type - computed: false, optional: true, required: false
  private _switchPoolType?: string; 
  public get switchPoolType() {
    return this.getStringAttribute('switch_pool_type');
  }
  public set switchPoolType(value: string) {
    this._switchPoolType = value;
  }
  public resetSwitchPoolType() {
    this._switchPoolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPoolTypeInput() {
    return this._switchPoolType;
  }

  // fallback_address_pool_set - computed: false, optional: false, required: true
  private _fallbackAddressPoolSet = new IgtmStrategyFallbackAddressPoolSetList(this, "fallback_address_pool_set", false);
  public get fallbackAddressPoolSet() {
    return this._fallbackAddressPoolSet;
  }
  public putFallbackAddressPoolSet(value: IgtmStrategyFallbackAddressPoolSet[] | cdktf.IResolvable) {
    this._fallbackAddressPoolSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackAddressPoolSetInput() {
    return this._fallbackAddressPoolSet.internalValue;
  }

  // main_address_pool_set - computed: false, optional: false, required: true
  private _mainAddressPoolSet = new IgtmStrategyMainAddressPoolSetList(this, "main_address_pool_set", false);
  public get mainAddressPoolSet() {
    return this._mainAddressPoolSet;
  }
  public putMainAddressPoolSet(value: IgtmStrategyMainAddressPoolSet[] | cdktf.IResolvable) {
    this._mainAddressPoolSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainAddressPoolSetInput() {
    return this._mainAddressPoolSet.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new IgtmStrategySourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: IgtmStrategySource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      keep_domain_records: cdktf.stringToTerraform(this._keepDomainRecords),
      strategy_name: cdktf.stringToTerraform(this._strategyName),
      switch_pool_type: cdktf.stringToTerraform(this._switchPoolType),
      fallback_address_pool_set: cdktf.listMapper(igtmStrategyFallbackAddressPoolSetToTerraform, true)(this._fallbackAddressPoolSet.internalValue),
      main_address_pool_set: cdktf.listMapper(igtmStrategyMainAddressPoolSetToTerraform, true)(this._mainAddressPoolSet.internalValue),
      source: cdktf.listMapper(igtmStrategySourceToTerraform, true)(this._source.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_domain_records: {
        value: cdktf.stringToHclTerraform(this._keepDomainRecords),
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
      switch_pool_type: {
        value: cdktf.stringToHclTerraform(this._switchPoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_address_pool_set: {
        value: cdktf.listMapperHcl(igtmStrategyFallbackAddressPoolSetToHclTerraform, true)(this._fallbackAddressPoolSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IgtmStrategyFallbackAddressPoolSetList",
      },
      main_address_pool_set: {
        value: cdktf.listMapperHcl(igtmStrategyMainAddressPoolSetToHclTerraform, true)(this._mainAddressPoolSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IgtmStrategyMainAddressPoolSetList",
      },
      source: {
        value: cdktf.listMapperHcl(igtmStrategySourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IgtmStrategySourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
