// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteMapSetAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#action RouteMapSetA#action}
  */
  readonly action: string;
  /**
  * BGP atomic aggregate attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#atomic_aggregate RouteMapSetA#atomic_aggregate}
  */
  readonly atomicAggregate?: number;
  /**
  * BGP community attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#community RouteMapSetA#community}
  */
  readonly community?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#id RouteMapSetA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * BGP large community attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#large_community RouteMapSetA#large_community}
  */
  readonly largeCommunity?: string;
  /**
  * Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#sequence RouteMapSetA#sequence}
  */
  readonly sequence: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#uuid RouteMapSetA#uuid}
  */
  readonly uuid?: string;
  /**
  * aggregator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#aggregator RouteMapSetA#aggregator}
  */
  readonly aggregator?: RouteMapSetAggregatorA;
  /**
  * as_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#as_path RouteMapSetA#as_path}
  */
  readonly asPath?: RouteMapSetAsPathA;
  /**
  * comm_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#comm_list RouteMapSetA#comm_list}
  */
  readonly commList?: RouteMapSetCommListStructA;
  /**
  * dampening_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening_cfg RouteMapSetA#dampening_cfg}
  */
  readonly dampeningCfg?: RouteMapSetDampeningCfgA;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#ddos RouteMapSetA#ddos}
  */
  readonly ddos?: RouteMapSetDdosA;
  /**
  * extcommunity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#extcommunity RouteMapSetA#extcommunity}
  */
  readonly extcommunity?: RouteMapSetExtcommunityA;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#ip RouteMapSetA#ip}
  */
  readonly ip?: RouteMapSetIpA;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#ipv6 RouteMapSetA#ipv6}
  */
  readonly ipv6?: RouteMapSetIpv6A;
  /**
  * large_comm_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#large_comm_list RouteMapSetA#large_comm_list}
  */
  readonly largeCommList?: RouteMapSetLargeCommListStructA;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#level RouteMapSetA#level}
  */
  readonly level?: RouteMapSetLevelA;
  /**
  * local_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#local_preference RouteMapSetA#local_preference}
  */
  readonly localPreference?: RouteMapSetLocalPreferenceA;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#metric RouteMapSetA#metric}
  */
  readonly metric?: RouteMapSetMetricA;
  /**
  * metric_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#metric_type RouteMapSetA#metric_type}
  */
  readonly metricType?: RouteMapSetMetricTypeA;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#origin RouteMapSetA#origin}
  */
  readonly origin?: RouteMapSetOriginA;
  /**
  * originator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#originator_id RouteMapSetA#originator_id}
  */
  readonly originatorId?: RouteMapSetOriginatorIdA;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#tag RouteMapSetA#tag}
  */
  readonly tag?: RouteMapSetTagA;
  /**
  * weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#weight RouteMapSetA#weight}
  */
  readonly weight?: RouteMapSetWeightA;
}
export interface RouteMapSetAggregatorAggregatorAsA {
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#asn RouteMapSetA#asn}
  */
  readonly asn?: number;
  /**
  * IP address of aggregator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#ip RouteMapSetA#ip}
  */
  readonly ip?: string;
}

export function routeMapSetAggregatorAggregatorAsAToTerraform(struct?: RouteMapSetAggregatorAggregatorAsAOutputReference | RouteMapSetAggregatorAggregatorAsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function routeMapSetAggregatorAggregatorAsAToHclTerraform(struct?: RouteMapSetAggregatorAggregatorAsAOutputReference | RouteMapSetAggregatorAggregatorAsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetAggregatorAggregatorAsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetAggregatorAggregatorAsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetAggregatorAggregatorAsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._ip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._ip = value.ip;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface RouteMapSetAggregatorA {
  /**
  * aggregator_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#aggregator_as RouteMapSetA#aggregator_as}
  */
  readonly aggregatorAs?: RouteMapSetAggregatorAggregatorAsA;
}

export function routeMapSetAggregatorAToTerraform(struct?: RouteMapSetAggregatorAOutputReference | RouteMapSetAggregatorA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator_as: routeMapSetAggregatorAggregatorAsAToTerraform(struct!.aggregatorAs),
  }
}


export function routeMapSetAggregatorAToHclTerraform(struct?: RouteMapSetAggregatorAOutputReference | RouteMapSetAggregatorA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator_as: {
      value: routeMapSetAggregatorAggregatorAsAToHclTerraform(struct!.aggregatorAs),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetAggregatorAggregatorAsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetAggregatorAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetAggregatorA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatorAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorAs = this._aggregatorAs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetAggregatorA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregatorAs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregatorAs.internalValue = value.aggregatorAs;
    }
  }

  // aggregator_as - computed: false, optional: true, required: false
  private _aggregatorAs = new RouteMapSetAggregatorAggregatorAsAOutputReference(this, "aggregator_as");
  public get aggregatorAs() {
    return this._aggregatorAs;
  }
  public putAggregatorAs(value: RouteMapSetAggregatorAggregatorAsA) {
    this._aggregatorAs.internalValue = value;
  }
  public resetAggregatorAs() {
    this._aggregatorAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorAsInput() {
    return this._aggregatorAs.internalValue;
  }
}
export interface RouteMapSetAsPathA {
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#num RouteMapSetA#num}
  */
  readonly num?: string;
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#num2 RouteMapSetA#num2}
  */
  readonly num2?: string;
  /**
  * Prepend to the as-path (AS number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#prepend RouteMapSetA#prepend}
  */
  readonly prepend?: string;
}

export function routeMapSetAsPathAToTerraform(struct?: RouteMapSetAsPathAOutputReference | RouteMapSetAsPathA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num: cdktf.stringToTerraform(struct!.num),
    num2: cdktf.stringToTerraform(struct!.num2),
    prepend: cdktf.stringToTerraform(struct!.prepend),
  }
}


export function routeMapSetAsPathAToHclTerraform(struct?: RouteMapSetAsPathAOutputReference | RouteMapSetAsPathA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num: {
      value: cdktf.stringToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num2: {
      value: cdktf.stringToHclTerraform(struct!.num2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepend: {
      value: cdktf.stringToHclTerraform(struct!.prepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetAsPathAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetAsPathA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._num2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.num2 = this._num2;
    }
    if (this._prepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepend = this._prepend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetAsPathA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._num = undefined;
      this._num2 = undefined;
      this._prepend = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._num = value.num;
      this._num2 = value.num2;
      this._prepend = value.prepend;
    }
  }

  // num - computed: false, optional: true, required: false
  private _num?: string; 
  public get num() {
    return this.getStringAttribute('num');
  }
  public set num(value: string) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // num2 - computed: false, optional: true, required: false
  private _num2?: string; 
  public get num2() {
    return this.getStringAttribute('num2');
  }
  public set num2(value: string) {
    this._num2 = value;
  }
  public resetNum2() {
    this._num2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get num2Input() {
    return this._num2;
  }

  // prepend - computed: false, optional: true, required: false
  private _prepend?: string; 
  public get prepend() {
    return this.getStringAttribute('prepend');
  }
  public set prepend(value: string) {
    this._prepend = value;
  }
  public resetPrepend() {
    this._prepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependInput() {
    return this._prepend;
  }
}
export interface RouteMapSetCommListStructA {
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#delete RouteMapSetA#delete}
  */
  readonly delete?: number;
  /**
  * Community-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#name RouteMapSetA#name}
  */
  readonly name?: string;
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#name_delete RouteMapSetA#name_delete}
  */
  readonly nameDelete?: number;
  /**
  * Community-list number (expanded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#v_exp RouteMapSetA#v_exp}
  */
  readonly vExp?: number;
  /**
  * Delete matching communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#v_exp_delete RouteMapSetA#v_exp_delete}
  */
  readonly vExpDelete?: number;
  /**
  * Community-list number (standard)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#v_std RouteMapSetA#v_std}
  */
  readonly vStd?: number;
}

export function routeMapSetCommListStructAToTerraform(struct?: RouteMapSetCommListStructAOutputReference | RouteMapSetCommListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.numberToTerraform(struct!.delete),
    name: cdktf.stringToTerraform(struct!.name),
    name_delete: cdktf.numberToTerraform(struct!.nameDelete),
    v_exp: cdktf.numberToTerraform(struct!.vExp),
    v_exp_delete: cdktf.numberToTerraform(struct!.vExpDelete),
    v_std: cdktf.numberToTerraform(struct!.vStd),
  }
}


export function routeMapSetCommListStructAToHclTerraform(struct?: RouteMapSetCommListStructAOutputReference | RouteMapSetCommListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
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
    name_delete: {
      value: cdktf.numberToHclTerraform(struct!.nameDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_exp: {
      value: cdktf.numberToHclTerraform(struct!.vExp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_exp_delete: {
      value: cdktf.numberToHclTerraform(struct!.vExpDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v_std: {
      value: cdktf.numberToHclTerraform(struct!.vStd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetCommListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetCommListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameDelete = this._nameDelete;
    }
    if (this._vExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vExp = this._vExp;
    }
    if (this._vExpDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.vExpDelete = this._vExpDelete;
    }
    if (this._vStd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vStd = this._vStd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetCommListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._name = undefined;
      this._nameDelete = undefined;
      this._vExp = undefined;
      this._vExpDelete = undefined;
      this._vStd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._name = value.name;
      this._nameDelete = value.nameDelete;
      this._vExp = value.vExp;
      this._vExpDelete = value.vExpDelete;
      this._vStd = value.vStd;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // name_delete - computed: false, optional: true, required: false
  private _nameDelete?: number; 
  public get nameDelete() {
    return this.getNumberAttribute('name_delete');
  }
  public set nameDelete(value: number) {
    this._nameDelete = value;
  }
  public resetNameDelete() {
    this._nameDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDeleteInput() {
    return this._nameDelete;
  }

  // v_exp - computed: false, optional: true, required: false
  private _vExp?: number; 
  public get vExp() {
    return this.getNumberAttribute('v_exp');
  }
  public set vExp(value: number) {
    this._vExp = value;
  }
  public resetVExp() {
    this._vExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vExpInput() {
    return this._vExp;
  }

  // v_exp_delete - computed: false, optional: true, required: false
  private _vExpDelete?: number; 
  public get vExpDelete() {
    return this.getNumberAttribute('v_exp_delete');
  }
  public set vExpDelete(value: number) {
    this._vExpDelete = value;
  }
  public resetVExpDelete() {
    this._vExpDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vExpDeleteInput() {
    return this._vExpDelete;
  }

  // v_std - computed: false, optional: true, required: false
  private _vStd?: number; 
  public get vStd() {
    return this.getNumberAttribute('v_std');
  }
  public set vStd(value: number) {
    this._vStd = value;
  }
  public resetVStd() {
    this._vStd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vStdInput() {
    return this._vStd;
  }
}
export interface RouteMapSetDampeningCfgA {
  /**
  * Enable route-flap dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening RouteMapSetA#dampening}
  */
  readonly dampening?: number;
  /**
  * Reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening_half_time RouteMapSetA#dampening_half_time}
  */
  readonly dampeningHalfTime?: number;
  /**
  * Maximum duration to suppress a stable route(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening_max_supress RouteMapSetA#dampening_max_supress}
  */
  readonly dampeningMaxSupress?: number;
  /**
  * Un-reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening_penalty RouteMapSetA#dampening_penalty}
  */
  readonly dampeningPenalty?: number;
  /**
  * Value to start reusing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening_reuse RouteMapSetA#dampening_reuse}
  */
  readonly dampeningReuse?: number;
  /**
  * Value to start suppressing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#dampening_supress RouteMapSetA#dampening_supress}
  */
  readonly dampeningSupress?: number;
}

export function routeMapSetDampeningCfgAToTerraform(struct?: RouteMapSetDampeningCfgAOutputReference | RouteMapSetDampeningCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dampening: cdktf.numberToTerraform(struct!.dampening),
    dampening_half_time: cdktf.numberToTerraform(struct!.dampeningHalfTime),
    dampening_max_supress: cdktf.numberToTerraform(struct!.dampeningMaxSupress),
    dampening_penalty: cdktf.numberToTerraform(struct!.dampeningPenalty),
    dampening_reuse: cdktf.numberToTerraform(struct!.dampeningReuse),
    dampening_supress: cdktf.numberToTerraform(struct!.dampeningSupress),
  }
}


export function routeMapSetDampeningCfgAToHclTerraform(struct?: RouteMapSetDampeningCfgAOutputReference | RouteMapSetDampeningCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dampening: {
      value: cdktf.numberToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_half_time: {
      value: cdktf.numberToHclTerraform(struct!.dampeningHalfTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_max_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningMaxSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_penalty: {
      value: cdktf.numberToHclTerraform(struct!.dampeningPenalty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_reuse: {
      value: cdktf.numberToHclTerraform(struct!.dampeningReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetDampeningCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetDampeningCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._dampeningHalfTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningHalfTime = this._dampeningHalfTime;
    }
    if (this._dampeningMaxSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningMaxSupress = this._dampeningMaxSupress;
    }
    if (this._dampeningPenalty !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningPenalty = this._dampeningPenalty;
    }
    if (this._dampeningReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningReuse = this._dampeningReuse;
    }
    if (this._dampeningSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningSupress = this._dampeningSupress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetDampeningCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dampening = undefined;
      this._dampeningHalfTime = undefined;
      this._dampeningMaxSupress = undefined;
      this._dampeningPenalty = undefined;
      this._dampeningReuse = undefined;
      this._dampeningSupress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dampening = value.dampening;
      this._dampeningHalfTime = value.dampeningHalfTime;
      this._dampeningMaxSupress = value.dampeningMaxSupress;
      this._dampeningPenalty = value.dampeningPenalty;
      this._dampeningReuse = value.dampeningReuse;
      this._dampeningSupress = value.dampeningSupress;
    }
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: number; 
  public get dampening() {
    return this.getNumberAttribute('dampening');
  }
  public set dampening(value: number) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_half_time - computed: false, optional: true, required: false
  private _dampeningHalfTime?: number; 
  public get dampeningHalfTime() {
    return this.getNumberAttribute('dampening_half_time');
  }
  public set dampeningHalfTime(value: number) {
    this._dampeningHalfTime = value;
  }
  public resetDampeningHalfTime() {
    this._dampeningHalfTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningHalfTimeInput() {
    return this._dampeningHalfTime;
  }

  // dampening_max_supress - computed: false, optional: true, required: false
  private _dampeningMaxSupress?: number; 
  public get dampeningMaxSupress() {
    return this.getNumberAttribute('dampening_max_supress');
  }
  public set dampeningMaxSupress(value: number) {
    this._dampeningMaxSupress = value;
  }
  public resetDampeningMaxSupress() {
    this._dampeningMaxSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSupressInput() {
    return this._dampeningMaxSupress;
  }

  // dampening_penalty - computed: false, optional: true, required: false
  private _dampeningPenalty?: number; 
  public get dampeningPenalty() {
    return this.getNumberAttribute('dampening_penalty');
  }
  public set dampeningPenalty(value: number) {
    this._dampeningPenalty = value;
  }
  public resetDampeningPenalty() {
    this._dampeningPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningPenaltyInput() {
    return this._dampeningPenalty;
  }

  // dampening_reuse - computed: false, optional: true, required: false
  private _dampeningReuse?: number; 
  public get dampeningReuse() {
    return this.getNumberAttribute('dampening_reuse');
  }
  public set dampeningReuse(value: number) {
    this._dampeningReuse = value;
  }
  public resetDampeningReuse() {
    this._dampeningReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningReuseInput() {
    return this._dampeningReuse;
  }

  // dampening_supress - computed: false, optional: true, required: false
  private _dampeningSupress?: number; 
  public get dampeningSupress() {
    return this.getNumberAttribute('dampening_supress');
  }
  public set dampeningSupress(value: number) {
    this._dampeningSupress = value;
  }
  public resetDampeningSupress() {
    this._dampeningSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningSupressInput() {
    return this._dampeningSupress;
  }
}
export interface RouteMapSetDdosA {
  /**
  * Class-List Cid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#class_list_cid RouteMapSetA#class_list_cid}
  */
  readonly classListCid?: number;
  /**
  * Class-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#class_list_name RouteMapSetA#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#zone RouteMapSetA#zone}
  */
  readonly zone?: string;
}

export function routeMapSetDdosAToTerraform(struct?: RouteMapSetDdosAOutputReference | RouteMapSetDdosA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_cid: cdktf.numberToTerraform(struct!.classListCid),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function routeMapSetDdosAToHclTerraform(struct?: RouteMapSetDdosAOutputReference | RouteMapSetDdosA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_cid: {
      value: cdktf.numberToHclTerraform(struct!.classListCid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetDdosAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetDdosA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListCid !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCid = this._classListCid;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetDdosA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classListCid = undefined;
      this._classListName = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classListCid = value.classListCid;
      this._classListName = value.classListName;
      this._zone = value.zone;
    }
  }

  // class_list_cid - computed: false, optional: true, required: false
  private _classListCid?: number; 
  public get classListCid() {
    return this.getNumberAttribute('class_list_cid');
  }
  public set classListCid(value: number) {
    this._classListCid = value;
  }
  public resetClassListCid() {
    this._classListCid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCidInput() {
    return this._classListCid;
  }

  // class_list_name - computed: false, optional: true, required: false
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  public resetClassListName() {
    this._classListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface RouteMapSetExtcommunityRtA {
  /**
  * VPN extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#value RouteMapSetA#value}
  */
  readonly value?: string;
}

export function routeMapSetExtcommunityRtAToTerraform(struct?: RouteMapSetExtcommunityRtAOutputReference | RouteMapSetExtcommunityRtA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetExtcommunityRtAToHclTerraform(struct?: RouteMapSetExtcommunityRtAOutputReference | RouteMapSetExtcommunityRtA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetExtcommunityRtAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetExtcommunityRtA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetExtcommunityRtA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapSetExtcommunitySooA {
  /**
  * VPN extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#value RouteMapSetA#value}
  */
  readonly value?: string;
}

export function routeMapSetExtcommunitySooAToTerraform(struct?: RouteMapSetExtcommunitySooAOutputReference | RouteMapSetExtcommunitySooA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetExtcommunitySooAToHclTerraform(struct?: RouteMapSetExtcommunitySooAOutputReference | RouteMapSetExtcommunitySooA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetExtcommunitySooAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetExtcommunitySooA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetExtcommunitySooA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapSetExtcommunityA {
  /**
  * rt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#rt RouteMapSetA#rt}
  */
  readonly rt?: RouteMapSetExtcommunityRtA;
  /**
  * soo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#soo RouteMapSetA#soo}
  */
  readonly soo?: RouteMapSetExtcommunitySooA;
}

export function routeMapSetExtcommunityAToTerraform(struct?: RouteMapSetExtcommunityAOutputReference | RouteMapSetExtcommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rt: routeMapSetExtcommunityRtAToTerraform(struct!.rt),
    soo: routeMapSetExtcommunitySooAToTerraform(struct!.soo),
  }
}


export function routeMapSetExtcommunityAToHclTerraform(struct?: RouteMapSetExtcommunityAOutputReference | RouteMapSetExtcommunityA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rt: {
      value: routeMapSetExtcommunityRtAToHclTerraform(struct!.rt),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetExtcommunityRtAList",
    },
    soo: {
      value: routeMapSetExtcommunitySooAToHclTerraform(struct!.soo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetExtcommunitySooAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetExtcommunityAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetExtcommunityA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rt = this._rt?.internalValue;
    }
    if (this._soo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soo = this._soo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetExtcommunityA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rt.internalValue = undefined;
      this._soo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rt.internalValue = value.rt;
      this._soo.internalValue = value.soo;
    }
  }

  // rt - computed: false, optional: true, required: false
  private _rt = new RouteMapSetExtcommunityRtAOutputReference(this, "rt");
  public get rt() {
    return this._rt;
  }
  public putRt(value: RouteMapSetExtcommunityRtA) {
    this._rt.internalValue = value;
  }
  public resetRt() {
    this._rt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtInput() {
    return this._rt.internalValue;
  }

  // soo - computed: false, optional: true, required: false
  private _soo = new RouteMapSetExtcommunitySooAOutputReference(this, "soo");
  public get soo() {
    return this._soo;
  }
  public putSoo(value: RouteMapSetExtcommunitySooA) {
    this._soo.internalValue = value;
  }
  public resetSoo() {
    this._soo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sooInput() {
    return this._soo.internalValue;
  }
}
export interface RouteMapSetIpNextHopA {
  /**
  * IP address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#address RouteMapSetA#address}
  */
  readonly address?: string;
}

export function routeMapSetIpNextHopAToTerraform(struct?: RouteMapSetIpNextHopAOutputReference | RouteMapSetIpNextHopA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routeMapSetIpNextHopAToHclTerraform(struct?: RouteMapSetIpNextHopAOutputReference | RouteMapSetIpNextHopA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpNextHopAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpNextHopA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpNextHopA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface RouteMapSetIpA {
  /**
  * next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#next_hop RouteMapSetA#next_hop}
  */
  readonly nextHop?: RouteMapSetIpNextHopA;
}

export function routeMapSetIpAToTerraform(struct?: RouteMapSetIpAOutputReference | RouteMapSetIpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: routeMapSetIpNextHopAToTerraform(struct!.nextHop),
  }
}


export function routeMapSetIpAToHclTerraform(struct?: RouteMapSetIpAOutputReference | RouteMapSetIpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: routeMapSetIpNextHopAToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpNextHopAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHop.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHop.internalValue = value.nextHop;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new RouteMapSetIpNextHopAOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: RouteMapSetIpNextHopA) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }
}
export interface RouteMapSetIpv6NextHop1LocalA {
  /**
  * IPv6 address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#address RouteMapSetA#address}
  */
  readonly address?: string;
}

export function routeMapSetIpv6NextHop1LocalAToTerraform(struct?: RouteMapSetIpv6NextHop1LocalAOutputReference | RouteMapSetIpv6NextHop1LocalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function routeMapSetIpv6NextHop1LocalAToHclTerraform(struct?: RouteMapSetIpv6NextHop1LocalAOutputReference | RouteMapSetIpv6NextHop1LocalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpv6NextHop1LocalAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpv6NextHop1LocalA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpv6NextHop1LocalA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface RouteMapSetIpv6NextHop1A {
  /**
  * global address of next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#address RouteMapSetA#address}
  */
  readonly address?: string;
  /**
  * local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#local RouteMapSetA#local}
  */
  readonly local?: RouteMapSetIpv6NextHop1LocalA;
}

export function routeMapSetIpv6NextHop1AToTerraform(struct?: RouteMapSetIpv6NextHop1AOutputReference | RouteMapSetIpv6NextHop1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    local: routeMapSetIpv6NextHop1LocalAToTerraform(struct!.local),
  }
}


export function routeMapSetIpv6NextHop1AToHclTerraform(struct?: RouteMapSetIpv6NextHop1AOutputReference | RouteMapSetIpv6NextHop1A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local: {
      value: routeMapSetIpv6NextHop1LocalAToHclTerraform(struct!.local),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpv6NextHop1LocalAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpv6NextHop1AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpv6NextHop1A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpv6NextHop1A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._local.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._local.internalValue = value.local;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // local - computed: false, optional: true, required: false
  private _local = new RouteMapSetIpv6NextHop1LocalAOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: RouteMapSetIpv6NextHop1LocalA) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface RouteMapSetIpv6A {
  /**
  * next_hop_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#next_hop_1 RouteMapSetA#next_hop_1}
  */
  readonly nextHop1?: RouteMapSetIpv6NextHop1A;
}

export function routeMapSetIpv6AToTerraform(struct?: RouteMapSetIpv6AOutputReference | RouteMapSetIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop_1: routeMapSetIpv6NextHop1AToTerraform(struct!.nextHop1),
  }
}


export function routeMapSetIpv6AToHclTerraform(struct?: RouteMapSetIpv6AOutputReference | RouteMapSetIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop_1: {
      value: routeMapSetIpv6NextHop1AToHclTerraform(struct!.nextHop1),
      isBlock: true,
      type: "list",
      storageClassType: "RouteMapSetIpv6NextHop1AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetIpv6AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetIpv6A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop1 = this._nextHop1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetIpv6A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHop1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHop1.internalValue = value.nextHop1;
    }
  }

  // next_hop_1 - computed: false, optional: true, required: false
  private _nextHop1 = new RouteMapSetIpv6NextHop1AOutputReference(this, "next_hop_1");
  public get nextHop1() {
    return this._nextHop1;
  }
  public putNextHop1(value: RouteMapSetIpv6NextHop1A) {
    this._nextHop1.internalValue = value;
  }
  public resetNextHop1() {
    this._nextHop1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHop1Input() {
    return this._nextHop1.internalValue;
  }
}
export interface RouteMapSetLargeCommListStructA {
  /**
  * Large Community-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#l_name RouteMapSetA#l_name}
  */
  readonly lName?: string;
  /**
  * Large Community-list number (expanded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#l_v_exp RouteMapSetA#l_v_exp}
  */
  readonly lVExp?: number;
  /**
  * Delete matching large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#l_v_exp_delete RouteMapSetA#l_v_exp_delete}
  */
  readonly lVExpDelete?: number;
  /**
  * Large Community-list number (standard)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#l_v_std RouteMapSetA#l_v_std}
  */
  readonly lVStd?: number;
  /**
  * Delete matching large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#l_v_std_delete RouteMapSetA#l_v_std_delete}
  */
  readonly lVStdDelete?: number;
  /**
  * Delete matching large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#large_name_delete RouteMapSetA#large_name_delete}
  */
  readonly largeNameDelete?: number;
}

export function routeMapSetLargeCommListStructAToTerraform(struct?: RouteMapSetLargeCommListStructAOutputReference | RouteMapSetLargeCommListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l_name: cdktf.stringToTerraform(struct!.lName),
    l_v_exp: cdktf.numberToTerraform(struct!.lVExp),
    l_v_exp_delete: cdktf.numberToTerraform(struct!.lVExpDelete),
    l_v_std: cdktf.numberToTerraform(struct!.lVStd),
    l_v_std_delete: cdktf.numberToTerraform(struct!.lVStdDelete),
    large_name_delete: cdktf.numberToTerraform(struct!.largeNameDelete),
  }
}


export function routeMapSetLargeCommListStructAToHclTerraform(struct?: RouteMapSetLargeCommListStructAOutputReference | RouteMapSetLargeCommListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l_name: {
      value: cdktf.stringToHclTerraform(struct!.lName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l_v_exp: {
      value: cdktf.numberToHclTerraform(struct!.lVExp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l_v_exp_delete: {
      value: cdktf.numberToHclTerraform(struct!.lVExpDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l_v_std: {
      value: cdktf.numberToHclTerraform(struct!.lVStd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l_v_std_delete: {
      value: cdktf.numberToHclTerraform(struct!.lVStdDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_name_delete: {
      value: cdktf.numberToHclTerraform(struct!.largeNameDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetLargeCommListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetLargeCommListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lName = this._lName;
    }
    if (this._lVExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVExp = this._lVExp;
    }
    if (this._lVExpDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVExpDelete = this._lVExpDelete;
    }
    if (this._lVStd !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVStd = this._lVStd;
    }
    if (this._lVStdDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.lVStdDelete = this._lVStdDelete;
    }
    if (this._largeNameDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeNameDelete = this._largeNameDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetLargeCommListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lName = undefined;
      this._lVExp = undefined;
      this._lVExpDelete = undefined;
      this._lVStd = undefined;
      this._lVStdDelete = undefined;
      this._largeNameDelete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lName = value.lName;
      this._lVExp = value.lVExp;
      this._lVExpDelete = value.lVExpDelete;
      this._lVStd = value.lVStd;
      this._lVStdDelete = value.lVStdDelete;
      this._largeNameDelete = value.largeNameDelete;
    }
  }

  // l_name - computed: false, optional: true, required: false
  private _lName?: string; 
  public get lName() {
    return this.getStringAttribute('l_name');
  }
  public set lName(value: string) {
    this._lName = value;
  }
  public resetLName() {
    this._lName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lNameInput() {
    return this._lName;
  }

  // l_v_exp - computed: false, optional: true, required: false
  private _lVExp?: number; 
  public get lVExp() {
    return this.getNumberAttribute('l_v_exp');
  }
  public set lVExp(value: number) {
    this._lVExp = value;
  }
  public resetLVExp() {
    this._lVExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVExpInput() {
    return this._lVExp;
  }

  // l_v_exp_delete - computed: false, optional: true, required: false
  private _lVExpDelete?: number; 
  public get lVExpDelete() {
    return this.getNumberAttribute('l_v_exp_delete');
  }
  public set lVExpDelete(value: number) {
    this._lVExpDelete = value;
  }
  public resetLVExpDelete() {
    this._lVExpDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVExpDeleteInput() {
    return this._lVExpDelete;
  }

  // l_v_std - computed: false, optional: true, required: false
  private _lVStd?: number; 
  public get lVStd() {
    return this.getNumberAttribute('l_v_std');
  }
  public set lVStd(value: number) {
    this._lVStd = value;
  }
  public resetLVStd() {
    this._lVStd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVStdInput() {
    return this._lVStd;
  }

  // l_v_std_delete - computed: false, optional: true, required: false
  private _lVStdDelete?: number; 
  public get lVStdDelete() {
    return this.getNumberAttribute('l_v_std_delete');
  }
  public set lVStdDelete(value: number) {
    this._lVStdDelete = value;
  }
  public resetLVStdDelete() {
    this._lVStdDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lVStdDeleteInput() {
    return this._lVStdDelete;
  }

  // large_name_delete - computed: false, optional: true, required: false
  private _largeNameDelete?: number; 
  public get largeNameDelete() {
    return this.getNumberAttribute('large_name_delete');
  }
  public set largeNameDelete(value: number) {
    this._largeNameDelete = value;
  }
  public resetLargeNameDelete() {
    this._largeNameDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeNameDeleteInput() {
    return this._largeNameDelete;
  }
}
export interface RouteMapSetLevelA {
  /**
  * 'level-1': Export into a level-1 area; 'level-1-2': Export into level-1 and level-2; 'level-2': Export into level-2 sub-domain;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#value RouteMapSetA#value}
  */
  readonly value?: string;
}

export function routeMapSetLevelAToTerraform(struct?: RouteMapSetLevelAOutputReference | RouteMapSetLevelA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetLevelAToHclTerraform(struct?: RouteMapSetLevelAOutputReference | RouteMapSetLevelA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetLevelAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetLevelA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetLevelA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapSetLocalPreferenceA {
  /**
  * Preference value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#val RouteMapSetA#val}
  */
  readonly val?: number;
}

export function routeMapSetLocalPreferenceAToTerraform(struct?: RouteMapSetLocalPreferenceAOutputReference | RouteMapSetLocalPreferenceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    val: cdktf.numberToTerraform(struct!.val),
  }
}


export function routeMapSetLocalPreferenceAToHclTerraform(struct?: RouteMapSetLocalPreferenceAOutputReference | RouteMapSetLocalPreferenceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    val: {
      value: cdktf.numberToHclTerraform(struct!.val),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetLocalPreferenceAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetLocalPreferenceA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetLocalPreferenceA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._val = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._val = value.val;
    }
  }

  // val - computed: false, optional: true, required: false
  private _val?: number; 
  public get val() {
    return this.getNumberAttribute('val');
  }
  public set val(value: number) {
    this._val = value;
  }
  public resetVal() {
    this._val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }
}
export interface RouteMapSetMetricA {
  /**
  * Metric Value (from -4294967295 to 4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#value RouteMapSetA#value}
  */
  readonly value?: string;
}

export function routeMapSetMetricAToTerraform(struct?: RouteMapSetMetricAOutputReference | RouteMapSetMetricA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetMetricAToHclTerraform(struct?: RouteMapSetMetricAOutputReference | RouteMapSetMetricA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetMetricAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetMetricA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetMetricA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapSetMetricTypeA {
  /**
  * 'external': IS-IS external metric type; 'internal': IS-IS internal metric type; 'type-1': OSPF external type 1 metric; 'type-2': OSPF external type 2 metric;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#value RouteMapSetA#value}
  */
  readonly value?: string;
}

export function routeMapSetMetricTypeAToTerraform(struct?: RouteMapSetMetricTypeAOutputReference | RouteMapSetMetricTypeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routeMapSetMetricTypeAToHclTerraform(struct?: RouteMapSetMetricTypeAOutputReference | RouteMapSetMetricTypeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetMetricTypeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetMetricTypeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetMetricTypeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapSetOriginA {
  /**
  * remote EGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#egp RouteMapSetA#egp}
  */
  readonly egp?: number;
  /**
  * local IGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#igp RouteMapSetA#igp}
  */
  readonly igp?: number;
  /**
  * unknown heritage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#incomplete RouteMapSetA#incomplete}
  */
  readonly incomplete?: number;
}

export function routeMapSetOriginAToTerraform(struct?: RouteMapSetOriginAOutputReference | RouteMapSetOriginA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egp: cdktf.numberToTerraform(struct!.egp),
    igp: cdktf.numberToTerraform(struct!.igp),
    incomplete: cdktf.numberToTerraform(struct!.incomplete),
  }
}


export function routeMapSetOriginAToHclTerraform(struct?: RouteMapSetOriginAOutputReference | RouteMapSetOriginA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egp: {
      value: cdktf.numberToHclTerraform(struct!.egp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igp: {
      value: cdktf.numberToHclTerraform(struct!.igp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incomplete: {
      value: cdktf.numberToHclTerraform(struct!.incomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetOriginAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetOriginA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egp !== undefined) {
      hasAnyValues = true;
      internalValueResult.egp = this._egp;
    }
    if (this._igp !== undefined) {
      hasAnyValues = true;
      internalValueResult.igp = this._igp;
    }
    if (this._incomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomplete = this._incomplete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetOriginA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egp = undefined;
      this._igp = undefined;
      this._incomplete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egp = value.egp;
      this._igp = value.igp;
      this._incomplete = value.incomplete;
    }
  }

  // egp - computed: false, optional: true, required: false
  private _egp?: number; 
  public get egp() {
    return this.getNumberAttribute('egp');
  }
  public set egp(value: number) {
    this._egp = value;
  }
  public resetEgp() {
    this._egp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egpInput() {
    return this._egp;
  }

  // igp - computed: false, optional: true, required: false
  private _igp?: number; 
  public get igp() {
    return this.getNumberAttribute('igp');
  }
  public set igp(value: number) {
    this._igp = value;
  }
  public resetIgp() {
    this._igp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igpInput() {
    return this._igp;
  }

  // incomplete - computed: false, optional: true, required: false
  private _incomplete?: number; 
  public get incomplete() {
    return this.getNumberAttribute('incomplete');
  }
  public set incomplete(value: number) {
    this._incomplete = value;
  }
  public resetIncomplete() {
    this._incomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incompleteInput() {
    return this._incomplete;
  }
}
export interface RouteMapSetOriginatorIdA {
  /**
  * IP address of originator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#originator_ip RouteMapSetA#originator_ip}
  */
  readonly originatorIp?: string;
}

export function routeMapSetOriginatorIdAToTerraform(struct?: RouteMapSetOriginatorIdAOutputReference | RouteMapSetOriginatorIdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    originator_ip: cdktf.stringToTerraform(struct!.originatorIp),
  }
}


export function routeMapSetOriginatorIdAToHclTerraform(struct?: RouteMapSetOriginatorIdAOutputReference | RouteMapSetOriginatorIdA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    originator_ip: {
      value: cdktf.stringToHclTerraform(struct!.originatorIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetOriginatorIdAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetOriginatorIdA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originatorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorIp = this._originatorIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetOriginatorIdA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originatorIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originatorIp = value.originatorIp;
    }
  }

  // originator_ip - computed: false, optional: true, required: false
  private _originatorIp?: string; 
  public get originatorIp() {
    return this.getStringAttribute('originator_ip');
  }
  public set originatorIp(value: string) {
    this._originatorIp = value;
  }
  public resetOriginatorIp() {
    this._originatorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIpInput() {
    return this._originatorIp;
  }
}
export interface RouteMapSetTagA {
  /**
  * Tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#value RouteMapSetA#value}
  */
  readonly value?: number;
}

export function routeMapSetTagAToTerraform(struct?: RouteMapSetTagAOutputReference | RouteMapSetTagA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function routeMapSetTagAToHclTerraform(struct?: RouteMapSetTagAOutputReference | RouteMapSetTagA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetTagAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetTagA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetTagA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouteMapSetWeightA {
  /**
  * Weight value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#weight_val RouteMapSetA#weight_val}
  */
  readonly weightVal?: number;
}

export function routeMapSetWeightAToTerraform(struct?: RouteMapSetWeightAOutputReference | RouteMapSetWeightA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight_val: cdktf.numberToTerraform(struct!.weightVal),
  }
}


export function routeMapSetWeightAToHclTerraform(struct?: RouteMapSetWeightAOutputReference | RouteMapSetWeightA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight_val: {
      value: cdktf.numberToHclTerraform(struct!.weightVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteMapSetWeightAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteMapSetWeightA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightVal = this._weightVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteMapSetWeightA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weightVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weightVal = value.weightVal;
    }
  }

  // weight_val - computed: false, optional: true, required: false
  private _weightVal?: number; 
  public get weightVal() {
    return this.getNumberAttribute('weight_val');
  }
  public set weightVal(value: number) {
    this._weightVal = value;
  }
  public resetWeightVal() {
    this._weightVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightValInput() {
    return this._weightVal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set thunder_route_map_set}
*/
export class RouteMapSetA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_route_map_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteMapSetA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteMapSetA to import
  * @param importFromId The id of the existing RouteMapSetA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteMapSetA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_route_map_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/route_map_set thunder_route_map_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteMapSetAConfig
  */
  public constructor(scope: Construct, id: string, config: RouteMapSetAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_route_map_set',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._atomicAggregate = config.atomicAggregate;
    this._community = config.community;
    this._id = config.id;
    this._largeCommunity = config.largeCommunity;
    this._sequence = config.sequence;
    this._uuid = config.uuid;
    this._aggregator.internalValue = config.aggregator;
    this._asPath.internalValue = config.asPath;
    this._commList.internalValue = config.commList;
    this._dampeningCfg.internalValue = config.dampeningCfg;
    this._ddos.internalValue = config.ddos;
    this._extcommunity.internalValue = config.extcommunity;
    this._ip.internalValue = config.ip;
    this._ipv6.internalValue = config.ipv6;
    this._largeCommList.internalValue = config.largeCommList;
    this._level.internalValue = config.level;
    this._localPreference.internalValue = config.localPreference;
    this._metric.internalValue = config.metric;
    this._metricType.internalValue = config.metricType;
    this._origin.internalValue = config.origin;
    this._originatorId.internalValue = config.originatorId;
    this._tag.internalValue = config.tag;
    this._weight.internalValue = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // atomic_aggregate - computed: false, optional: true, required: false
  private _atomicAggregate?: number; 
  public get atomicAggregate() {
    return this.getNumberAttribute('atomic_aggregate');
  }
  public set atomicAggregate(value: number) {
    this._atomicAggregate = value;
  }
  public resetAtomicAggregate() {
    this._atomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicAggregateInput() {
    return this._atomicAggregate;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
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

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string; 
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }
  public set largeCommunity(value: string) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // sequence - computed: false, optional: false, required: true
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new RouteMapSetAggregatorAOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: RouteMapSetAggregatorA) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // as_path - computed: false, optional: true, required: false
  private _asPath = new RouteMapSetAsPathAOutputReference(this, "as_path");
  public get asPath() {
    return this._asPath;
  }
  public putAsPath(value: RouteMapSetAsPathA) {
    this._asPath.internalValue = value;
  }
  public resetAsPath() {
    this._asPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath.internalValue;
  }

  // comm_list - computed: false, optional: true, required: false
  private _commList = new RouteMapSetCommListStructAOutputReference(this, "comm_list");
  public get commList() {
    return this._commList;
  }
  public putCommList(value: RouteMapSetCommListStructA) {
    this._commList.internalValue = value;
  }
  public resetCommList() {
    this._commList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commListInput() {
    return this._commList.internalValue;
  }

  // dampening_cfg - computed: false, optional: true, required: false
  private _dampeningCfg = new RouteMapSetDampeningCfgAOutputReference(this, "dampening_cfg");
  public get dampeningCfg() {
    return this._dampeningCfg;
  }
  public putDampeningCfg(value: RouteMapSetDampeningCfgA) {
    this._dampeningCfg.internalValue = value;
  }
  public resetDampeningCfg() {
    this._dampeningCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningCfgInput() {
    return this._dampeningCfg.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new RouteMapSetDdosAOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: RouteMapSetDdosA) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // extcommunity - computed: false, optional: true, required: false
  private _extcommunity = new RouteMapSetExtcommunityAOutputReference(this, "extcommunity");
  public get extcommunity() {
    return this._extcommunity;
  }
  public putExtcommunity(value: RouteMapSetExtcommunityA) {
    this._extcommunity.internalValue = value;
  }
  public resetExtcommunity() {
    this._extcommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extcommunityInput() {
    return this._extcommunity.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new RouteMapSetIpAOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: RouteMapSetIpA) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new RouteMapSetIpv6AOutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RouteMapSetIpv6A) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // large_comm_list - computed: false, optional: true, required: false
  private _largeCommList = new RouteMapSetLargeCommListStructAOutputReference(this, "large_comm_list");
  public get largeCommList() {
    return this._largeCommList;
  }
  public putLargeCommList(value: RouteMapSetLargeCommListStructA) {
    this._largeCommList.internalValue = value;
  }
  public resetLargeCommList() {
    this._largeCommList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommListInput() {
    return this._largeCommList.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new RouteMapSetLevelAOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: RouteMapSetLevelA) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference = new RouteMapSetLocalPreferenceAOutputReference(this, "local_preference");
  public get localPreference() {
    return this._localPreference;
  }
  public putLocalPreference(value: RouteMapSetLocalPreferenceA) {
    this._localPreference.internalValue = value;
  }
  public resetLocalPreference() {
    this._localPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new RouteMapSetMetricAOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: RouteMapSetMetricA) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType = new RouteMapSetMetricTypeAOutputReference(this, "metric_type");
  public get metricType() {
    return this._metricType;
  }
  public putMetricType(value: RouteMapSetMetricTypeA) {
    this._metricType.internalValue = value;
  }
  public resetMetricType() {
    this._metricType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new RouteMapSetOriginAOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: RouteMapSetOriginA) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // originator_id - computed: false, optional: true, required: false
  private _originatorId = new RouteMapSetOriginatorIdAOutputReference(this, "originator_id");
  public get originatorId() {
    return this._originatorId;
  }
  public putOriginatorId(value: RouteMapSetOriginatorIdA) {
    this._originatorId.internalValue = value;
  }
  public resetOriginatorId() {
    this._originatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new RouteMapSetTagAOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: RouteMapSetTagA) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight = new RouteMapSetWeightAOutputReference(this, "weight");
  public get weight() {
    return this._weight;
  }
  public putWeight(value: RouteMapSetWeightA) {
    this._weight.internalValue = value;
  }
  public resetWeight() {
    this._weight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      atomic_aggregate: cdktf.numberToTerraform(this._atomicAggregate),
      community: cdktf.stringToTerraform(this._community),
      id: cdktf.stringToTerraform(this._id),
      large_community: cdktf.stringToTerraform(this._largeCommunity),
      sequence: cdktf.stringToTerraform(this._sequence),
      uuid: cdktf.stringToTerraform(this._uuid),
      aggregator: routeMapSetAggregatorAToTerraform(this._aggregator.internalValue),
      as_path: routeMapSetAsPathAToTerraform(this._asPath.internalValue),
      comm_list: routeMapSetCommListStructAToTerraform(this._commList.internalValue),
      dampening_cfg: routeMapSetDampeningCfgAToTerraform(this._dampeningCfg.internalValue),
      ddos: routeMapSetDdosAToTerraform(this._ddos.internalValue),
      extcommunity: routeMapSetExtcommunityAToTerraform(this._extcommunity.internalValue),
      ip: routeMapSetIpAToTerraform(this._ip.internalValue),
      ipv6: routeMapSetIpv6AToTerraform(this._ipv6.internalValue),
      large_comm_list: routeMapSetLargeCommListStructAToTerraform(this._largeCommList.internalValue),
      level: routeMapSetLevelAToTerraform(this._level.internalValue),
      local_preference: routeMapSetLocalPreferenceAToTerraform(this._localPreference.internalValue),
      metric: routeMapSetMetricAToTerraform(this._metric.internalValue),
      metric_type: routeMapSetMetricTypeAToTerraform(this._metricType.internalValue),
      origin: routeMapSetOriginAToTerraform(this._origin.internalValue),
      originator_id: routeMapSetOriginatorIdAToTerraform(this._originatorId.internalValue),
      tag: routeMapSetTagAToTerraform(this._tag.internalValue),
      weight: routeMapSetWeightAToTerraform(this._weight.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atomic_aggregate: {
        value: cdktf.numberToHclTerraform(this._atomicAggregate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      community: {
        value: cdktf.stringToHclTerraform(this._community),
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
      large_community: {
        value: cdktf.stringToHclTerraform(this._largeCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.stringToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregator: {
        value: routeMapSetAggregatorAToHclTerraform(this._aggregator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetAggregatorAList",
      },
      as_path: {
        value: routeMapSetAsPathAToHclTerraform(this._asPath.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetAsPathAList",
      },
      comm_list: {
        value: routeMapSetCommListStructAToHclTerraform(this._commList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetCommListStructAList",
      },
      dampening_cfg: {
        value: routeMapSetDampeningCfgAToHclTerraform(this._dampeningCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetDampeningCfgAList",
      },
      ddos: {
        value: routeMapSetDdosAToHclTerraform(this._ddos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetDdosAList",
      },
      extcommunity: {
        value: routeMapSetExtcommunityAToHclTerraform(this._extcommunity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetExtcommunityAList",
      },
      ip: {
        value: routeMapSetIpAToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetIpAList",
      },
      ipv6: {
        value: routeMapSetIpv6AToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetIpv6AList",
      },
      large_comm_list: {
        value: routeMapSetLargeCommListStructAToHclTerraform(this._largeCommList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetLargeCommListStructAList",
      },
      level: {
        value: routeMapSetLevelAToHclTerraform(this._level.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetLevelAList",
      },
      local_preference: {
        value: routeMapSetLocalPreferenceAToHclTerraform(this._localPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetLocalPreferenceAList",
      },
      metric: {
        value: routeMapSetMetricAToHclTerraform(this._metric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetMetricAList",
      },
      metric_type: {
        value: routeMapSetMetricTypeAToHclTerraform(this._metricType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetMetricTypeAList",
      },
      origin: {
        value: routeMapSetOriginAToHclTerraform(this._origin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetOriginAList",
      },
      originator_id: {
        value: routeMapSetOriginatorIdAToHclTerraform(this._originatorId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetOriginatorIdAList",
      },
      tag: {
        value: routeMapSetTagAToHclTerraform(this._tag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetTagAList",
      },
      weight: {
        value: routeMapSetWeightAToHclTerraform(this._weight.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteMapSetWeightAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
