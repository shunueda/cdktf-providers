// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAVridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#id VrrpAVrid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#user_tag VrrpAVrid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#uuid VrrpAVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#vrid_val VrrpAVrid#vrid_val}
  */
  readonly vridVal: number;
  /**
  * blade_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#blade_parameters VrrpAVrid#blade_parameters}
  */
  readonly bladeParameters?: VrrpAVridBladeParameters;
  /**
  * floating_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#floating_ip VrrpAVrid#floating_ip}
  */
  readonly floatingIp?: VrrpAVridFloatingIp;
  /**
  * follow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#follow VrrpAVrid#follow}
  */
  readonly follow?: VrrpAVridFollow;
  /**
  * pair_follow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#pair_follow VrrpAVrid#pair_follow}
  */
  readonly pairFollow?: VrrpAVridPairFollow;
  /**
  * preempt_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#preempt_mode VrrpAVrid#preempt_mode}
  */
  readonly preemptMode?: VrrpAVridPreemptMode;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#sampling_enable VrrpAVrid#sampling_enable}
  */
  readonly samplingEnable?: VrrpAVridSamplingEnable[] | cdktf.IResolvable;
}
export interface VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg {
  /**
  * bgp IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#bgp_ipv4_address VrrpAVrid#bgp_ipv4_address}
  */
  readonly bgpIpv4Address?: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address: cdktf.stringToTerraform(struct!.bgpIpv4Address),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.bgpIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv4Address = this._bgpIpv4Address;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpIpv4Address = undefined;
      this._priorityCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpIpv4Address = value.bgpIpv4Address;
      this._priorityCost = value.priorityCost;
    }
  }

  // bgp_ipv4_address - computed: false, optional: true, required: false
  private _bgpIpv4Address?: string; 
  public get bgpIpv4Address() {
    return this.getStringAttribute('bgp_ipv4_address');
  }
  public set bgpIpv4Address(value: string) {
    this._bgpIpv4Address = value;
  }
  public resetBgpIpv4Address() {
    this._bgpIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv4AddressInput() {
    return this._bgpIpv4Address;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#bgp_ipv6_address VrrpAVrid#bgp_ipv6_address}
  */
  readonly bgpIpv6Address?: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv6_address: cdktf.stringToTerraform(struct!.bgpIpv6Address),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.bgpIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv6Address = this._bgpIpv6Address;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpIpv6Address = undefined;
      this._priorityCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpIpv6Address = value.bgpIpv6Address;
      this._priorityCost = value.priorityCost;
    }
  }

  // bgp_ipv6_address - computed: false, optional: true, required: false
  private _bgpIpv6Address?: string; 
  public get bgpIpv6Address() {
    return this.getStringAttribute('bgp_ipv6_address');
  }
  public set bgpIpv6Address(value: string) {
    this._bgpIpv6Address = value;
  }
  public resetBgpIpv6Address() {
    this._bgpIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv6AddressInput() {
    return this._bgpIpv6Address;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsBgp {
  /**
  * bgp_ipv4_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#bgp_ipv4_address_cfg VrrpAVrid#bgp_ipv4_address_cfg}
  */
  readonly bgpIpv4AddressCfg?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg[] | cdktf.IResolvable;
  /**
  * bgp_ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#bgp_ipv6_address_cfg VrrpAVrid#bgp_ipv6_address_cfg}
  */
  readonly bgpIpv6AddressCfg?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsBgpToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpOutputReference | VrrpAVridBladeParametersTrackingOptionsBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgToTerraform, true)(struct!.bgpIpv4AddressCfg),
    bgp_ipv6_address_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgToTerraform, true)(struct!.bgpIpv6AddressCfg),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsBgpToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpOutputReference | VrrpAVridBladeParametersTrackingOptionsBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv4_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgToHclTerraform, true)(struct!.bgpIpv4AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgList",
    },
    bgp_ipv6_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgToHclTerraform, true)(struct!.bgpIpv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv4AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv4AddressCfg = this._bgpIpv4AddressCfg?.internalValue;
    }
    if (this._bgpIpv6AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv6AddressCfg = this._bgpIpv6AddressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpIpv4AddressCfg.internalValue = undefined;
      this._bgpIpv6AddressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpIpv4AddressCfg.internalValue = value.bgpIpv4AddressCfg;
      this._bgpIpv6AddressCfg.internalValue = value.bgpIpv6AddressCfg;
    }
  }

  // bgp_ipv4_address_cfg - computed: false, optional: true, required: false
  private _bgpIpv4AddressCfg = new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgList(this, "bgp_ipv4_address_cfg", false);
  public get bgpIpv4AddressCfg() {
    return this._bgpIpv4AddressCfg;
  }
  public putBgpIpv4AddressCfg(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfg[] | cdktf.IResolvable) {
    this._bgpIpv4AddressCfg.internalValue = value;
  }
  public resetBgpIpv4AddressCfg() {
    this._bgpIpv4AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv4AddressCfgInput() {
    return this._bgpIpv4AddressCfg.internalValue;
  }

  // bgp_ipv6_address_cfg - computed: false, optional: true, required: false
  private _bgpIpv6AddressCfg = new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgList(this, "bgp_ipv6_address_cfg", false);
  public get bgpIpv6AddressCfg() {
    return this._bgpIpv6AddressCfg;
  }
  public putBgpIpv6AddressCfg(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfg[] | cdktf.IResolvable) {
    this._bgpIpv6AddressCfg.internalValue = value;
  }
  public resetBgpIpv6AddressCfg() {
    this._bgpIpv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv6AddressCfgInput() {
    return this._bgpIpv6AddressCfg.internalValue;
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_address VrrpAVrid#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#uuid VrrpAVrid#uuid}
  */
  readonly uuid?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._priorityCost = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._priorityCost = value.priorityCost;
      this._uuid = value.uuid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
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
}

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_address VrrpAVrid#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#uuid VrrpAVrid#uuid}
  */
  readonly uuid?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._priorityCost = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._priorityCost = value.priorityCost;
      this._uuid = value.uuid;
    }
  }

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
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
}

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsGateway {
  /**
  * ipv4_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv4_gateway_list VrrpAVrid#ipv4_gateway_list}
  */
  readonly ipv4GatewayList?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_gateway_list VrrpAVrid#ipv6_gateway_list}
  */
  readonly ipv6GatewayList?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsGatewayToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayOutputReference | VrrpAVridBladeParametersTrackingOptionsGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_gateway_list: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructToTerraform, true)(struct!.ipv4GatewayList),
    ipv6_gateway_list: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructToTerraform, true)(struct!.ipv6GatewayList),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsGatewayToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayOutputReference | VrrpAVridBladeParametersTrackingOptionsGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_gateway_list: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructToHclTerraform, true)(struct!.ipv4GatewayList),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructList",
    },
    ipv6_gateway_list: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructToHclTerraform, true)(struct!.ipv6GatewayList),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4GatewayList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4GatewayList = this._ipv4GatewayList?.internalValue;
    }
    if (this._ipv6GatewayList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GatewayList = this._ipv6GatewayList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4GatewayList.internalValue = undefined;
      this._ipv6GatewayList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4GatewayList.internalValue = value.ipv4GatewayList;
      this._ipv6GatewayList.internalValue = value.ipv6GatewayList;
    }
  }

  // ipv4_gateway_list - computed: false, optional: true, required: false
  private _ipv4GatewayList = new VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructList(this, "ipv4_gateway_list", false);
  public get ipv4GatewayList() {
    return this._ipv4GatewayList;
  }
  public putIpv4GatewayList(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStruct[] | cdktf.IResolvable) {
    this._ipv4GatewayList.internalValue = value;
  }
  public resetIpv4GatewayList() {
    this._ipv4GatewayList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayListInput() {
    return this._ipv4GatewayList.internalValue;
  }

  // ipv6_gateway_list - computed: false, optional: true, required: false
  private _ipv6GatewayList = new VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructList(this, "ipv6_gateway_list", false);
  public get ipv6GatewayList() {
    return this._ipv6GatewayList;
  }
  public putIpv6GatewayList(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStruct[] | cdktf.IResolvable) {
    this._ipv6GatewayList.internalValue = value;
  }
  public resetIpv6GatewayList() {
    this._ipv6GatewayList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayListInput() {
    return this._ipv6GatewayList.internalValue;
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsInterface {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ethernet VrrpAVrid#ethernet}
  */
  readonly ethernet?: number;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsInterfaceToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsInterfaceToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._priorityCost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._priorityCost = value.priorityCost;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsInterfaceList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsInterface[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsInterfaceOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg {
  /**
  * Route's administrative distance (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#distance VrrpAVrid#distance}
  */
  readonly distance?: number;
  /**
  * Match the route's gateway (next-hop) (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#gateway VrrpAVrid#gateway}
  */
  readonly gateway?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_destination VrrpAVrid#ip_destination}
  */
  readonly ipDestination?: string;
  /**
  * Destination prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#mask VrrpAVrid#mask}
  */
  readonly mask?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#protocol VrrpAVrid#protocol}
  */
  readonly protocol?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_destination: cdktf.stringToTerraform(struct!.ipDestination),
    mask: cdktf.stringToTerraform(struct!.mask),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_destination: {
      value: cdktf.stringToHclTerraform(struct!.ipDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDestination = this._ipDestination;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._gateway = undefined;
      this._ipDestination = undefined;
      this._mask = undefined;
      this._priorityCost = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._gateway = value.gateway;
      this._ipDestination = value.ipDestination;
      this._mask = value.mask;
      this._priorityCost = value.priorityCost;
      this._protocol = value.protocol;
    }
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_destination - computed: false, optional: true, required: false
  private _ipDestination?: string; 
  public get ipDestination() {
    return this.getStringAttribute('ip_destination');
  }
  public set ipDestination(value: string) {
    this._ipDestination = value;
  }
  public resetIpDestination() {
    this._ipDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDestinationInput() {
    return this._ipDestination;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg {
  /**
  * Route's administrative distance (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#distance VrrpAVrid#distance}
  */
  readonly distance?: number;
  /**
  * Match the route's gateway (next-hop) (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#gatewayv6 VrrpAVrid#gatewayv6}
  */
  readonly gatewayv6?: string;
  /**
  * IPv6 Destination Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_destination VrrpAVrid#ipv6_destination}
  */
  readonly ipv6Destination?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#protocol VrrpAVrid#protocol}
  */
  readonly protocol?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    gatewayv6: cdktf.stringToTerraform(struct!.gatewayv6),
    ipv6_destination: cdktf.stringToTerraform(struct!.ipv6Destination),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gatewayv6: {
      value: cdktf.stringToHclTerraform(struct!.gatewayv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_destination: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._gatewayv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayv6 = this._gatewayv6;
    }
    if (this._ipv6Destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Destination = this._ipv6Destination;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._gatewayv6 = undefined;
      this._ipv6Destination = undefined;
      this._priorityCost = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._gatewayv6 = value.gatewayv6;
      this._ipv6Destination = value.ipv6Destination;
      this._priorityCost = value.priorityCost;
      this._protocol = value.protocol;
    }
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // gatewayv6 - computed: false, optional: true, required: false
  private _gatewayv6?: string; 
  public get gatewayv6() {
    return this.getStringAttribute('gatewayv6');
  }
  public set gatewayv6(value: string) {
    this._gatewayv6 = value;
  }
  public resetGatewayv6() {
    this._gatewayv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayv6Input() {
    return this._gatewayv6;
  }

  // ipv6_destination - computed: false, optional: true, required: false
  private _ipv6Destination?: string; 
  public get ipv6Destination() {
    return this.getStringAttribute('ipv6_destination');
  }
  public set ipv6Destination(value: string) {
    this._ipv6Destination = value;
  }
  public resetIpv6Destination() {
    this._ipv6Destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DestinationInput() {
    return this._ipv6Destination;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsRoute {
  /**
  * ip_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_destination_cfg VrrpAVrid#ip_destination_cfg}
  */
  readonly ipDestinationCfg?: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg[] | cdktf.IResolvable;
  /**
  * ipv6_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_destination_cfg VrrpAVrid#ipv6_destination_cfg}
  */
  readonly ipv6DestinationCfg?: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsRouteToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteOutputReference | VrrpAVridBladeParametersTrackingOptionsRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_destination_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgToTerraform, true)(struct!.ipDestinationCfg),
    ipv6_destination_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgToTerraform, true)(struct!.ipv6DestinationCfg),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsRouteToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteOutputReference | VrrpAVridBladeParametersTrackingOptionsRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_destination_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgToHclTerraform, true)(struct!.ipDestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgList",
    },
    ipv6_destination_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgToHclTerraform, true)(struct!.ipv6DestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipDestinationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDestinationCfg = this._ipDestinationCfg?.internalValue;
    }
    if (this._ipv6DestinationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DestinationCfg = this._ipv6DestinationCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipDestinationCfg.internalValue = undefined;
      this._ipv6DestinationCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipDestinationCfg.internalValue = value.ipDestinationCfg;
      this._ipv6DestinationCfg.internalValue = value.ipv6DestinationCfg;
    }
  }

  // ip_destination_cfg - computed: false, optional: true, required: false
  private _ipDestinationCfg = new VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgList(this, "ip_destination_cfg", false);
  public get ipDestinationCfg() {
    return this._ipDestinationCfg;
  }
  public putIpDestinationCfg(value: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfg[] | cdktf.IResolvable) {
    this._ipDestinationCfg.internalValue = value;
  }
  public resetIpDestinationCfg() {
    this._ipDestinationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDestinationCfgInput() {
    return this._ipDestinationCfg.internalValue;
  }

  // ipv6_destination_cfg - computed: false, optional: true, required: false
  private _ipv6DestinationCfg = new VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgList(this, "ipv6_destination_cfg", false);
  public get ipv6DestinationCfg() {
    return this._ipv6DestinationCfg;
  }
  public putIpv6DestinationCfg(value: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfg[] | cdktf.IResolvable) {
    this._ipv6DestinationCfg.internalValue = value;
  }
  public resetIpv6DestinationCfg() {
    this._ipv6DestinationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DestinationCfgInput() {
    return this._ipv6DestinationCfg.internalValue;
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsTrunkCfg {
  /**
  * per port priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#per_port_pri VrrpAVrid#per_port_pri}
  */
  readonly perPortPri?: number;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * trunk tracking (Trunk Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#trunk VrrpAVrid#trunk}
  */
  readonly trunk?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsTrunkCfgToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_port_pri: cdktf.numberToTerraform(struct!.perPortPri),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsTrunkCfgToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_port_pri: {
      value: cdktf.numberToHclTerraform(struct!.perPortPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPortPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPortPri = this._perPortPri;
    }
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perPortPri = undefined;
      this._priorityCost = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._perPortPri = value.perPortPri;
      this._priorityCost = value.priorityCost;
      this._trunk = value.trunk;
    }
  }

  // per_port_pri - computed: false, optional: true, required: false
  private _perPortPri?: number; 
  public get perPortPri() {
    return this.getNumberAttribute('per_port_pri');
  }
  public set perPortPri(value: number) {
    this._perPortPri = value;
  }
  public resetPerPortPri() {
    this._perPortPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPortPriInput() {
    return this._perPortPri;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsTrunkCfgOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsVlanCfg {
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority_cost VrrpAVrid#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#timeout VrrpAVrid#timeout}
  */
  readonly timeout?: number;
  /**
  * VLAN tracking (VLAN id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#vlan VrrpAVrid#vlan}
  */
  readonly vlan?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsVlanCfgToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsVlanCfgToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority_cost: {
      value: cdktf.numberToHclTerraform(struct!.priorityCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsVlanCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsVlanCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priorityCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCost = this._priorityCost;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsVlanCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priorityCost = undefined;
      this._timeout = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priorityCost = value.priorityCost;
      this._timeout = value.timeout;
      this._vlan = value.vlan;
    }
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VrrpAVridBladeParametersTrackingOptionsVlanCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsVlanCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsVlanCfgOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsVlanCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptions {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#uuid VrrpAVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#bgp VrrpAVrid#bgp}
  */
  readonly bgp?: VrrpAVridBladeParametersTrackingOptionsBgp;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#gateway VrrpAVrid#gateway}
  */
  readonly gateway?: VrrpAVridBladeParametersTrackingOptionsGateway;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#interface VrrpAVrid#interface}
  */
  readonly interface?: VrrpAVridBladeParametersTrackingOptionsInterface[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#route VrrpAVrid#route}
  */
  readonly route?: VrrpAVridBladeParametersTrackingOptionsRoute;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#trunk_cfg VrrpAVrid#trunk_cfg}
  */
  readonly trunkCfg?: VrrpAVridBladeParametersTrackingOptionsTrunkCfg[] | cdktf.IResolvable;
  /**
  * vlan_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#vlan_cfg VrrpAVrid#vlan_cfg}
  */
  readonly vlanCfg?: VrrpAVridBladeParametersTrackingOptionsVlanCfg[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsOutputReference | VrrpAVridBladeParametersTrackingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bgp: vrrpAVridBladeParametersTrackingOptionsBgpToTerraform(struct!.bgp),
    gateway: vrrpAVridBladeParametersTrackingOptionsGatewayToTerraform(struct!.gateway),
    interface: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsInterfaceToTerraform, true)(struct!.interface),
    route: vrrpAVridBladeParametersTrackingOptionsRouteToTerraform(struct!.route),
    trunk_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsTrunkCfgToTerraform, true)(struct!.trunkCfg),
    vlan_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsVlanCfgToTerraform, true)(struct!.vlanCfg),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsOutputReference | VrrpAVridBladeParametersTrackingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp: {
      value: vrrpAVridBladeParametersTrackingOptionsBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsBgpList",
    },
    gateway: {
      value: vrrpAVridBladeParametersTrackingOptionsGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsGatewayList",
    },
    interface: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsInterfaceList",
    },
    route: {
      value: vrrpAVridBladeParametersTrackingOptionsRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsRouteList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsTrunkCfgToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsTrunkCfgList",
    },
    vlan_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsVlanCfgToHclTerraform, true)(struct!.vlanCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsVlanCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._vlanCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanCfg = this._vlanCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._bgp.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._route.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._vlanCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._bgp.internalValue = value.bgp;
      this._gateway.internalValue = value.gateway;
      this._interface.internalValue = value.interface;
      this._route.internalValue = value.route;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._vlanCfg.internalValue = value.vlanCfg;
    }
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

  // bgp - computed: false, optional: true, required: false
  private _bgp = new VrrpAVridBladeParametersTrackingOptionsBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VrrpAVridBladeParametersTrackingOptionsBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new VrrpAVridBladeParametersTrackingOptionsGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: VrrpAVridBladeParametersTrackingOptionsGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VrrpAVridBladeParametersTrackingOptionsInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VrrpAVridBladeParametersTrackingOptionsInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new VrrpAVridBladeParametersTrackingOptionsRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: VrrpAVridBladeParametersTrackingOptionsRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new VrrpAVridBladeParametersTrackingOptionsTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: VrrpAVridBladeParametersTrackingOptionsTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // vlan_cfg - computed: false, optional: true, required: false
  private _vlanCfg = new VrrpAVridBladeParametersTrackingOptionsVlanCfgList(this, "vlan_cfg", false);
  public get vlanCfg() {
    return this._vlanCfg;
  }
  public putVlanCfg(value: VrrpAVridBladeParametersTrackingOptionsVlanCfg[] | cdktf.IResolvable) {
    this._vlanCfg.internalValue = value;
  }
  public resetVlanCfg() {
    this._vlanCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCfgInput() {
    return this._vlanCfg.internalValue;
  }
}
export interface VrrpAVridBladeParameters {
  /**
  * Apply a fail over policy template (VRRP-A fail over policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#fail_over_policy_template VrrpAVrid#fail_over_policy_template}
  */
  readonly failOverPolicyTemplate?: string;
  /**
  * VRRP-A priorty (Priority, default is 150)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#priority VrrpAVrid#priority}
  */
  readonly priority?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#uuid VrrpAVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * tracking_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#tracking_options VrrpAVrid#tracking_options}
  */
  readonly trackingOptions?: VrrpAVridBladeParametersTrackingOptions;
}

export function vrrpAVridBladeParametersToTerraform(struct?: VrrpAVridBladeParametersOutputReference | VrrpAVridBladeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_over_policy_template: cdktf.stringToTerraform(struct!.failOverPolicyTemplate),
    priority: cdktf.numberToTerraform(struct!.priority),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tracking_options: vrrpAVridBladeParametersTrackingOptionsToTerraform(struct!.trackingOptions),
  }
}


export function vrrpAVridBladeParametersToHclTerraform(struct?: VrrpAVridBladeParametersOutputReference | VrrpAVridBladeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_over_policy_template: {
      value: cdktf.stringToHclTerraform(struct!.failOverPolicyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_options: {
      value: vrrpAVridBladeParametersTrackingOptionsToHclTerraform(struct!.trackingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOverPolicyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverPolicyTemplate = this._failOverPolicyTemplate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._trackingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingOptions = this._trackingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridBladeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOverPolicyTemplate = undefined;
      this._priority = undefined;
      this._uuid = undefined;
      this._trackingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOverPolicyTemplate = value.failOverPolicyTemplate;
      this._priority = value.priority;
      this._uuid = value.uuid;
      this._trackingOptions.internalValue = value.trackingOptions;
    }
  }

  // fail_over_policy_template - computed: false, optional: true, required: false
  private _failOverPolicyTemplate?: string; 
  public get failOverPolicyTemplate() {
    return this.getStringAttribute('fail_over_policy_template');
  }
  public set failOverPolicyTemplate(value: string) {
    this._failOverPolicyTemplate = value;
  }
  public resetFailOverPolicyTemplate() {
    this._failOverPolicyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverPolicyTemplateInput() {
    return this._failOverPolicyTemplate;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // tracking_options - computed: false, optional: true, required: false
  private _trackingOptions = new VrrpAVridBladeParametersTrackingOptionsOutputReference(this, "tracking_options");
  public get trackingOptions() {
    return this._trackingOptions;
  }
  public putTrackingOptions(value: VrrpAVridBladeParametersTrackingOptions) {
    this._trackingOptions.internalValue = value;
  }
  public resetTrackingOptions() {
    this._trackingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingOptionsInput() {
    return this._trackingOptions.internalValue;
  }
}
export interface VrrpAVridFloatingIpIpAddressCfg {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_address VrrpAVrid#ip_address}
  */
  readonly ipAddress?: string;
}

export function vrrpAVridFloatingIpIpAddressCfgToTerraform(struct?: VrrpAVridFloatingIpIpAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vrrpAVridFloatingIpIpAddressCfgToHclTerraform(struct?: VrrpAVridFloatingIpIpAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridFloatingIpIpAddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridFloatingIpIpAddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridFloatingIpIpAddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class VrrpAVridFloatingIpIpAddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridFloatingIpIpAddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridFloatingIpIpAddressCfgOutputReference {
    return new VrrpAVridFloatingIpIpAddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridFloatingIpIpAddressPartCfg {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_address_partition VrrpAVrid#ip_address_partition}
  */
  readonly ipAddressPartition?: string;
}

export function vrrpAVridFloatingIpIpAddressPartCfgToTerraform(struct?: VrrpAVridFloatingIpIpAddressPartCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_partition: cdktf.stringToTerraform(struct!.ipAddressPartition),
  }
}


export function vrrpAVridFloatingIpIpAddressPartCfgToHclTerraform(struct?: VrrpAVridFloatingIpIpAddressPartCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_partition: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridFloatingIpIpAddressPartCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridFloatingIpIpAddressPartCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPartition = this._ipAddressPartition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridFloatingIpIpAddressPartCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressPartition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressPartition = value.ipAddressPartition;
    }
  }

  // ip_address_partition - computed: false, optional: true, required: false
  private _ipAddressPartition?: string; 
  public get ipAddressPartition() {
    return this.getStringAttribute('ip_address_partition');
  }
  public set ipAddressPartition(value: string) {
    this._ipAddressPartition = value;
  }
  public resetIpAddressPartition() {
    this._ipAddressPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPartitionInput() {
    return this._ipAddressPartition;
  }
}

export class VrrpAVridFloatingIpIpAddressPartCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridFloatingIpIpAddressPartCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridFloatingIpIpAddressPartCfgOutputReference {
    return new VrrpAVridFloatingIpIpAddressPartCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridFloatingIpIpv6AddressCfg {
  /**
  * Ethernet (for link-local address only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ethernet VrrpAVrid#ethernet}
  */
  readonly ethernet?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_address VrrpAVrid#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Trunk interface (for link-local address only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#trunk VrrpAVrid#trunk}
  */
  readonly trunk?: number;
  /**
  * VE interface (for link-local address only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ve VrrpAVrid#ve}
  */
  readonly ve?: number;
}

export function vrrpAVridFloatingIpIpv6AddressCfgToTerraform(struct?: VrrpAVridFloatingIpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function vrrpAVridFloatingIpIpv6AddressCfgToHclTerraform(struct?: VrrpAVridFloatingIpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridFloatingIpIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridFloatingIpIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridFloatingIpIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._ipv6Address = undefined;
      this._trunk = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._ipv6Address = value.ipv6Address;
      this._trunk = value.trunk;
      this._ve = value.ve;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class VrrpAVridFloatingIpIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridFloatingIpIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridFloatingIpIpv6AddressCfgOutputReference {
    return new VrrpAVridFloatingIpIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridFloatingIpIpv6AddressPartCfg {
  /**
  * Ethernet (for link-local address only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ethernet VrrpAVrid#ethernet}
  */
  readonly ethernet?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_address_partition VrrpAVrid#ipv6_address_partition}
  */
  readonly ipv6AddressPartition?: string;
  /**
  * Trunk interface (for link-local address only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#trunk VrrpAVrid#trunk}
  */
  readonly trunk?: number;
  /**
  * VE interface (for link-local address only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ve VrrpAVrid#ve}
  */
  readonly ve?: number;
}

export function vrrpAVridFloatingIpIpv6AddressPartCfgToTerraform(struct?: VrrpAVridFloatingIpIpv6AddressPartCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    ipv6_address_partition: cdktf.stringToTerraform(struct!.ipv6AddressPartition),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function vrrpAVridFloatingIpIpv6AddressPartCfgToHclTerraform(struct?: VrrpAVridFloatingIpIpv6AddressPartCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address_partition: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridFloatingIpIpv6AddressPartCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridFloatingIpIpv6AddressPartCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._ipv6AddressPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressPartition = this._ipv6AddressPartition;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridFloatingIpIpv6AddressPartCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._ipv6AddressPartition = undefined;
      this._trunk = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._ipv6AddressPartition = value.ipv6AddressPartition;
      this._trunk = value.trunk;
      this._ve = value.ve;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // ipv6_address_partition - computed: false, optional: true, required: false
  private _ipv6AddressPartition?: string; 
  public get ipv6AddressPartition() {
    return this.getStringAttribute('ipv6_address_partition');
  }
  public set ipv6AddressPartition(value: string) {
    this._ipv6AddressPartition = value;
  }
  public resetIpv6AddressPartition() {
    this._ipv6AddressPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressPartitionInput() {
    return this._ipv6AddressPartition;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class VrrpAVridFloatingIpIpv6AddressPartCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridFloatingIpIpv6AddressPartCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridFloatingIpIpv6AddressPartCfgOutputReference {
    return new VrrpAVridFloatingIpIpv6AddressPartCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridFloatingIp {
  /**
  * ip_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_address_cfg VrrpAVrid#ip_address_cfg}
  */
  readonly ipAddressCfg?: VrrpAVridFloatingIpIpAddressCfg[] | cdktf.IResolvable;
  /**
  * ip_address_part_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ip_address_part_cfg VrrpAVrid#ip_address_part_cfg}
  */
  readonly ipAddressPartCfg?: VrrpAVridFloatingIpIpAddressPartCfg[] | cdktf.IResolvable;
  /**
  * ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_address_cfg VrrpAVrid#ipv6_address_cfg}
  */
  readonly ipv6AddressCfg?: VrrpAVridFloatingIpIpv6AddressCfg[] | cdktf.IResolvable;
  /**
  * ipv6_address_part_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#ipv6_address_part_cfg VrrpAVrid#ipv6_address_part_cfg}
  */
  readonly ipv6AddressPartCfg?: VrrpAVridFloatingIpIpv6AddressPartCfg[] | cdktf.IResolvable;
}

export function vrrpAVridFloatingIpToTerraform(struct?: VrrpAVridFloatingIpOutputReference | VrrpAVridFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_cfg: cdktf.listMapper(vrrpAVridFloatingIpIpAddressCfgToTerraform, true)(struct!.ipAddressCfg),
    ip_address_part_cfg: cdktf.listMapper(vrrpAVridFloatingIpIpAddressPartCfgToTerraform, true)(struct!.ipAddressPartCfg),
    ipv6_address_cfg: cdktf.listMapper(vrrpAVridFloatingIpIpv6AddressCfgToTerraform, true)(struct!.ipv6AddressCfg),
    ipv6_address_part_cfg: cdktf.listMapper(vrrpAVridFloatingIpIpv6AddressPartCfgToTerraform, true)(struct!.ipv6AddressPartCfg),
  }
}


export function vrrpAVridFloatingIpToHclTerraform(struct?: VrrpAVridFloatingIpOutputReference | VrrpAVridFloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridFloatingIpIpAddressCfgToHclTerraform, true)(struct!.ipAddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridFloatingIpIpAddressCfgList",
    },
    ip_address_part_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridFloatingIpIpAddressPartCfgToHclTerraform, true)(struct!.ipAddressPartCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridFloatingIpIpAddressPartCfgList",
    },
    ipv6_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridFloatingIpIpv6AddressCfgToHclTerraform, true)(struct!.ipv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridFloatingIpIpv6AddressCfgList",
    },
    ipv6_address_part_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridFloatingIpIpv6AddressPartCfgToHclTerraform, true)(struct!.ipv6AddressPartCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridFloatingIpIpv6AddressPartCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridFloatingIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridFloatingIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressCfg = this._ipAddressCfg?.internalValue;
    }
    if (this._ipAddressPartCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPartCfg = this._ipAddressPartCfg?.internalValue;
    }
    if (this._ipv6AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCfg = this._ipv6AddressCfg?.internalValue;
    }
    if (this._ipv6AddressPartCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressPartCfg = this._ipv6AddressPartCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridFloatingIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddressCfg.internalValue = undefined;
      this._ipAddressPartCfg.internalValue = undefined;
      this._ipv6AddressCfg.internalValue = undefined;
      this._ipv6AddressPartCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddressCfg.internalValue = value.ipAddressCfg;
      this._ipAddressPartCfg.internalValue = value.ipAddressPartCfg;
      this._ipv6AddressCfg.internalValue = value.ipv6AddressCfg;
      this._ipv6AddressPartCfg.internalValue = value.ipv6AddressPartCfg;
    }
  }

  // ip_address_cfg - computed: false, optional: true, required: false
  private _ipAddressCfg = new VrrpAVridFloatingIpIpAddressCfgList(this, "ip_address_cfg", false);
  public get ipAddressCfg() {
    return this._ipAddressCfg;
  }
  public putIpAddressCfg(value: VrrpAVridFloatingIpIpAddressCfg[] | cdktf.IResolvable) {
    this._ipAddressCfg.internalValue = value;
  }
  public resetIpAddressCfg() {
    this._ipAddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressCfgInput() {
    return this._ipAddressCfg.internalValue;
  }

  // ip_address_part_cfg - computed: false, optional: true, required: false
  private _ipAddressPartCfg = new VrrpAVridFloatingIpIpAddressPartCfgList(this, "ip_address_part_cfg", false);
  public get ipAddressPartCfg() {
    return this._ipAddressPartCfg;
  }
  public putIpAddressPartCfg(value: VrrpAVridFloatingIpIpAddressPartCfg[] | cdktf.IResolvable) {
    this._ipAddressPartCfg.internalValue = value;
  }
  public resetIpAddressPartCfg() {
    this._ipAddressPartCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPartCfgInput() {
    return this._ipAddressPartCfg.internalValue;
  }

  // ipv6_address_cfg - computed: false, optional: true, required: false
  private _ipv6AddressCfg = new VrrpAVridFloatingIpIpv6AddressCfgList(this, "ipv6_address_cfg", false);
  public get ipv6AddressCfg() {
    return this._ipv6AddressCfg;
  }
  public putIpv6AddressCfg(value: VrrpAVridFloatingIpIpv6AddressCfg[] | cdktf.IResolvable) {
    this._ipv6AddressCfg.internalValue = value;
  }
  public resetIpv6AddressCfg() {
    this._ipv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCfgInput() {
    return this._ipv6AddressCfg.internalValue;
  }

  // ipv6_address_part_cfg - computed: false, optional: true, required: false
  private _ipv6AddressPartCfg = new VrrpAVridFloatingIpIpv6AddressPartCfgList(this, "ipv6_address_part_cfg", false);
  public get ipv6AddressPartCfg() {
    return this._ipv6AddressPartCfg;
  }
  public putIpv6AddressPartCfg(value: VrrpAVridFloatingIpIpv6AddressPartCfg[] | cdktf.IResolvable) {
    this._ipv6AddressPartCfg.internalValue = value;
  }
  public resetIpv6AddressPartCfg() {
    this._ipv6AddressPartCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressPartCfgInput() {
    return this._ipv6AddressPartCfg.internalValue;
  }
}
export interface VrrpAVridFollow {
  /**
  * Define a VRRP-A VRID leader
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#vrid_lead VrrpAVrid#vrid_lead}
  */
  readonly vridLead?: string;
}

export function vrrpAVridFollowToTerraform(struct?: VrrpAVridFollowOutputReference | VrrpAVridFollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vrid_lead: cdktf.stringToTerraform(struct!.vridLead),
  }
}


export function vrrpAVridFollowToHclTerraform(struct?: VrrpAVridFollowOutputReference | VrrpAVridFollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vrid_lead: {
      value: cdktf.stringToHclTerraform(struct!.vridLead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridFollowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridFollow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vridLead !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridLead = this._vridLead;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridFollow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vridLead = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vridLead = value.vridLead;
    }
  }

  // vrid_lead - computed: false, optional: true, required: false
  private _vridLead?: string; 
  public get vridLead() {
    return this.getStringAttribute('vrid_lead');
  }
  public set vridLead(value: string) {
    this._vridLead = value;
  }
  public resetVridLead() {
    this._vridLead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridLeadInput() {
    return this._vridLead;
  }
}
export interface VrrpAVridPairFollow {
  /**
  * Follow other VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#pair_follow VrrpAVrid#pair_follow}
  */
  readonly pairFollow?: number;
  /**
  * Define a VRRP-A VRID leader
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#vrid_lead VrrpAVrid#vrid_lead}
  */
  readonly vridLead?: string;
}

export function vrrpAVridPairFollowToTerraform(struct?: VrrpAVridPairFollowOutputReference | VrrpAVridPairFollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pair_follow: cdktf.numberToTerraform(struct!.pairFollow),
    vrid_lead: cdktf.stringToTerraform(struct!.vridLead),
  }
}


export function vrrpAVridPairFollowToHclTerraform(struct?: VrrpAVridPairFollowOutputReference | VrrpAVridPairFollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pair_follow: {
      value: cdktf.numberToHclTerraform(struct!.pairFollow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid_lead: {
      value: cdktf.stringToHclTerraform(struct!.vridLead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridPairFollowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridPairFollow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pairFollow !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairFollow = this._pairFollow;
    }
    if (this._vridLead !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridLead = this._vridLead;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridPairFollow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pairFollow = undefined;
      this._vridLead = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pairFollow = value.pairFollow;
      this._vridLead = value.vridLead;
    }
  }

  // pair_follow - computed: false, optional: true, required: false
  private _pairFollow?: number; 
  public get pairFollow() {
    return this.getNumberAttribute('pair_follow');
  }
  public set pairFollow(value: number) {
    this._pairFollow = value;
  }
  public resetPairFollow() {
    this._pairFollow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairFollowInput() {
    return this._pairFollow;
  }

  // vrid_lead - computed: false, optional: true, required: false
  private _vridLead?: string; 
  public get vridLead() {
    return this.getStringAttribute('vrid_lead');
  }
  public set vridLead(value: string) {
    this._vridLead = value;
  }
  public resetVridLead() {
    this._vridLead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridLeadInput() {
    return this._vridLead;
  }
}
export interface VrrpAVridPreemptMode {
  /**
  * disable preemption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#disable VrrpAVrid#disable}
  */
  readonly disable?: number;
  /**
  * preemption threshold (preemption threshhold (0-255), default 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#threshold VrrpAVrid#threshold}
  */
  readonly threshold?: number;
}

export function vrrpAVridPreemptModeToTerraform(struct?: VrrpAVridPreemptModeOutputReference | VrrpAVridPreemptMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function vrrpAVridPreemptModeToHclTerraform(struct?: VrrpAVridPreemptModeOutputReference | VrrpAVridPreemptMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridPreemptModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridPreemptMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridPreemptMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._threshold = value.threshold;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VrrpAVridSamplingEnable {
  /**
  * 'all': all; 'associated_vip_count': Number of vips associated to vrid; 'associated_vport_count': Number of vports associated to vrid; 'associated_natpool_count': Number of nat pools associated to vrid;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#counters1 VrrpAVrid#counters1}
  */
  readonly counters1?: string;
}

export function vrrpAVridSamplingEnableToTerraform(struct?: VrrpAVridSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function vrrpAVridSamplingEnableToHclTerraform(struct?: VrrpAVridSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAVridSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VrrpAVridSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridSamplingEnableOutputReference {
    return new VrrpAVridSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid thunder_vrrp_a_vrid}
*/
export class VrrpAVrid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAVrid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAVrid to import
  * @param importFromId The id of the existing VrrpAVrid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAVrid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_vrid thunder_vrrp_a_vrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAVridConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAVridConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid',
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
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vridVal = config.vridVal;
    this._bladeParameters.internalValue = config.bladeParameters;
    this._floatingIp.internalValue = config.floatingIp;
    this._follow.internalValue = config.follow;
    this._pairFollow.internalValue = config.pairFollow;
    this._preemptMode.internalValue = config.preemptMode;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vrid_val - computed: false, optional: false, required: true
  private _vridVal?: number; 
  public get vridVal() {
    return this.getNumberAttribute('vrid_val');
  }
  public set vridVal(value: number) {
    this._vridVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValInput() {
    return this._vridVal;
  }

  // blade_parameters - computed: false, optional: true, required: false
  private _bladeParameters = new VrrpAVridBladeParametersOutputReference(this, "blade_parameters");
  public get bladeParameters() {
    return this._bladeParameters;
  }
  public putBladeParameters(value: VrrpAVridBladeParameters) {
    this._bladeParameters.internalValue = value;
  }
  public resetBladeParameters() {
    this._bladeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeParametersInput() {
    return this._bladeParameters.internalValue;
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp = new VrrpAVridFloatingIpOutputReference(this, "floating_ip");
  public get floatingIp() {
    return this._floatingIp;
  }
  public putFloatingIp(value: VrrpAVridFloatingIp) {
    this._floatingIp.internalValue = value;
  }
  public resetFloatingIp() {
    this._floatingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp.internalValue;
  }

  // follow - computed: false, optional: true, required: false
  private _follow = new VrrpAVridFollowOutputReference(this, "follow");
  public get follow() {
    return this._follow;
  }
  public putFollow(value: VrrpAVridFollow) {
    this._follow.internalValue = value;
  }
  public resetFollow() {
    this._follow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followInput() {
    return this._follow.internalValue;
  }

  // pair_follow - computed: false, optional: true, required: false
  private _pairFollow = new VrrpAVridPairFollowOutputReference(this, "pair_follow");
  public get pairFollow() {
    return this._pairFollow;
  }
  public putPairFollow(value: VrrpAVridPairFollow) {
    this._pairFollow.internalValue = value;
  }
  public resetPairFollow() {
    this._pairFollow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairFollowInput() {
    return this._pairFollow.internalValue;
  }

  // preempt_mode - computed: false, optional: true, required: false
  private _preemptMode = new VrrpAVridPreemptModeOutputReference(this, "preempt_mode");
  public get preemptMode() {
    return this._preemptMode;
  }
  public putPreemptMode(value: VrrpAVridPreemptMode) {
    this._preemptMode.internalValue = value;
  }
  public resetPreemptMode() {
    this._preemptMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptModeInput() {
    return this._preemptMode.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VrrpAVridSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VrrpAVridSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid_val: cdktf.numberToTerraform(this._vridVal),
      blade_parameters: vrrpAVridBladeParametersToTerraform(this._bladeParameters.internalValue),
      floating_ip: vrrpAVridFloatingIpToTerraform(this._floatingIp.internalValue),
      follow: vrrpAVridFollowToTerraform(this._follow.internalValue),
      pair_follow: vrrpAVridPairFollowToTerraform(this._pairFollow.internalValue),
      preempt_mode: vrrpAVridPreemptModeToTerraform(this._preemptMode.internalValue),
      sampling_enable: cdktf.listMapper(vrrpAVridSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      vrid_val: {
        value: cdktf.numberToHclTerraform(this._vridVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_parameters: {
        value: vrrpAVridBladeParametersToHclTerraform(this._bladeParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridBladeParametersList",
      },
      floating_ip: {
        value: vrrpAVridFloatingIpToHclTerraform(this._floatingIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridFloatingIpList",
      },
      follow: {
        value: vrrpAVridFollowToHclTerraform(this._follow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridFollowList",
      },
      pair_follow: {
        value: vrrpAVridPairFollowToHclTerraform(this._pairFollow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridPairFollowList",
      },
      preempt_mode: {
        value: vrrpAVridPreemptModeToHclTerraform(this._preemptMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridPreemptModeList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(vrrpAVridSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
