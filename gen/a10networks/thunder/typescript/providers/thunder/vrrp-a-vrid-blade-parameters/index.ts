// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAVridBladeParametersAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply a fail over policy template (VRRP-A fail over policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#fail_over_policy_template VrrpAVridBladeParametersA#fail_over_policy_template}
  */
  readonly failOverPolicyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#id VrrpAVridBladeParametersA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VRRP-A priorty (Priority, default is 150)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority VrrpAVridBladeParametersA#priority}
  */
  readonly priority?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#uuid VrrpAVridBladeParametersA#uuid}
  */
  readonly uuid?: string;
  /**
  * VridVal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#vrid_val VrrpAVridBladeParametersA#vrid_val}
  */
  readonly vridVal: string;
  /**
  * tracking_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#tracking_options VrrpAVridBladeParametersA#tracking_options}
  */
  readonly trackingOptions?: VrrpAVridBladeParametersTrackingOptionsA;
}
export interface VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA {
  /**
  * bgp IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#bgp_ipv4_address VrrpAVridBladeParametersA#bgp_ipv4_address}
  */
  readonly bgpIpv4Address?: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address: cdktf.stringToTerraform(struct!.bgpIpv4Address),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#bgp_ipv6_address VrrpAVridBladeParametersA#bgp_ipv6_address}
  */
  readonly bgpIpv6Address?: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv6_address: cdktf.stringToTerraform(struct!.bgpIpv6Address),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsBgpA {
  /**
  * bgp_ipv4_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#bgp_ipv4_address_cfg VrrpAVridBladeParametersA#bgp_ipv4_address_cfg}
  */
  readonly bgpIpv4AddressCfg?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA[] | cdktf.IResolvable;
  /**
  * bgp_ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#bgp_ipv6_address_cfg VrrpAVridBladeParametersA#bgp_ipv6_address_cfg}
  */
  readonly bgpIpv6AddressCfg?: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsBgpAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpAOutputReference | VrrpAVridBladeParametersTrackingOptionsBgpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAToTerraform, true)(struct!.bgpIpv4AddressCfg),
    bgp_ipv6_address_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAToTerraform, true)(struct!.bgpIpv6AddressCfg),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsBgpAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsBgpAOutputReference | VrrpAVridBladeParametersTrackingOptionsBgpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv4_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAToHclTerraform, true)(struct!.bgpIpv4AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAList",
    },
    bgp_ipv6_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAToHclTerraform, true)(struct!.bgpIpv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsBgpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsBgpA | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsBgpA | undefined) {
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
  private _bgpIpv4AddressCfg = new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgAList(this, "bgp_ipv4_address_cfg", false);
  public get bgpIpv4AddressCfg() {
    return this._bgpIpv4AddressCfg;
  }
  public putBgpIpv4AddressCfg(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv4AddressCfgA[] | cdktf.IResolvable) {
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
  private _bgpIpv6AddressCfg = new VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgAList(this, "bgp_ipv6_address_cfg", false);
  public get bgpIpv6AddressCfg() {
    return this._bgpIpv6AddressCfg;
  }
  public putBgpIpv6AddressCfg(value: VrrpAVridBladeParametersTrackingOptionsBgpBgpIpv6AddressCfgA[] | cdktf.IResolvable) {
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
export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ip_address VrrpAVridBladeParametersA#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#uuid VrrpAVridBladeParametersA#uuid}
  */
  readonly uuid?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA | cdktf.IResolvable): any {
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


export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ipv6_address VrrpAVridBladeParametersA#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#uuid VrrpAVridBladeParametersA#uuid}
  */
  readonly uuid?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA | cdktf.IResolvable): any {
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


export function vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsGatewayA {
  /**
  * ipv4_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ipv4_gateway_list VrrpAVridBladeParametersA#ipv4_gateway_list}
  */
  readonly ipv4GatewayList?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA[] | cdktf.IResolvable;
  /**
  * ipv6_gateway_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ipv6_gateway_list VrrpAVridBladeParametersA#ipv6_gateway_list}
  */
  readonly ipv6GatewayList?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsGatewayAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayAOutputReference | VrrpAVridBladeParametersTrackingOptionsGatewayA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_gateway_list: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAToTerraform, true)(struct!.ipv4GatewayList),
    ipv6_gateway_list: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAToTerraform, true)(struct!.ipv6GatewayList),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsGatewayAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsGatewayAOutputReference | VrrpAVridBladeParametersTrackingOptionsGatewayA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_gateway_list: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAToHclTerraform, true)(struct!.ipv4GatewayList),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAList",
    },
    ipv6_gateway_list: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAToHclTerraform, true)(struct!.ipv6GatewayList),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsGatewayAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsGatewayA | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsGatewayA | undefined) {
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
  private _ipv4GatewayList = new VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructAList(this, "ipv4_gateway_list", false);
  public get ipv4GatewayList() {
    return this._ipv4GatewayList;
  }
  public putIpv4GatewayList(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayListStructA[] | cdktf.IResolvable) {
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
  private _ipv6GatewayList = new VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructAList(this, "ipv6_gateway_list", false);
  public get ipv6GatewayList() {
    return this._ipv6GatewayList;
  }
  public putIpv6GatewayList(value: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayListStructA[] | cdktf.IResolvable) {
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
export interface VrrpAVridBladeParametersTrackingOptionsInterfaceA {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ethernet VrrpAVridBladeParametersA#ethernet}
  */
  readonly ethernet?: number;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsInterfaceAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsInterfaceA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    priority_cost: cdktf.numberToTerraform(struct!.priorityCost),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsInterfaceAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsInterfaceA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsInterfaceAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsInterfaceA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsInterfaceA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsInterfaceAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsInterfaceA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsInterfaceAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsInterfaceAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA {
  /**
  * Route's administrative distance (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#distance VrrpAVridBladeParametersA#distance}
  */
  readonly distance?: number;
  /**
  * Match the route's gateway (next-hop) (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#gateway VrrpAVridBladeParametersA#gateway}
  */
  readonly gateway?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ip_destination VrrpAVridBladeParametersA#ip_destination}
  */
  readonly ipDestination?: string;
  /**
  * Destination prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#mask VrrpAVridBladeParametersA#mask}
  */
  readonly mask?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#protocol VrrpAVridBladeParametersA#protocol}
  */
  readonly protocol?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA | cdktf.IResolvable): any {
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


export function vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA {
  /**
  * Route's administrative distance (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#distance VrrpAVridBladeParametersA#distance}
  */
  readonly distance?: number;
  /**
  * Match the route's gateway (next-hop) (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#gatewayv6 VrrpAVridBladeParametersA#gatewayv6}
  */
  readonly gatewayv6?: string;
  /**
  * IPv6 Destination Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ipv6_destination VrrpAVridBladeParametersA#ipv6_destination}
  */
  readonly ipv6Destination?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#protocol VrrpAVridBladeParametersA#protocol}
  */
  readonly protocol?: string;
}

export function vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA | cdktf.IResolvable): any {
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


export function vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsRouteA {
  /**
  * ip_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ip_destination_cfg VrrpAVridBladeParametersA#ip_destination_cfg}
  */
  readonly ipDestinationCfg?: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA[] | cdktf.IResolvable;
  /**
  * ipv6_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#ipv6_destination_cfg VrrpAVridBladeParametersA#ipv6_destination_cfg}
  */
  readonly ipv6DestinationCfg?: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsRouteAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteAOutputReference | VrrpAVridBladeParametersTrackingOptionsRouteA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_destination_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAToTerraform, true)(struct!.ipDestinationCfg),
    ipv6_destination_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAToTerraform, true)(struct!.ipv6DestinationCfg),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsRouteAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsRouteAOutputReference | VrrpAVridBladeParametersTrackingOptionsRouteA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_destination_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAToHclTerraform, true)(struct!.ipDestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAList",
    },
    ipv6_destination_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAToHclTerraform, true)(struct!.ipv6DestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsRouteAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsRouteA | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsRouteA | undefined) {
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
  private _ipDestinationCfg = new VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgAList(this, "ip_destination_cfg", false);
  public get ipDestinationCfg() {
    return this._ipDestinationCfg;
  }
  public putIpDestinationCfg(value: VrrpAVridBladeParametersTrackingOptionsRouteIpDestinationCfgA[] | cdktf.IResolvable) {
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
  private _ipv6DestinationCfg = new VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgAList(this, "ipv6_destination_cfg", false);
  public get ipv6DestinationCfg() {
    return this._ipv6DestinationCfg;
  }
  public putIpv6DestinationCfg(value: VrrpAVridBladeParametersTrackingOptionsRouteIpv6DestinationCfgA[] | cdktf.IResolvable) {
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
export interface VrrpAVridBladeParametersTrackingOptionsTrunkCfgA {
  /**
  * per port priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#per_port_pri VrrpAVridBladeParametersA#per_port_pri}
  */
  readonly perPortPri?: number;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * trunk tracking (Trunk Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#trunk VrrpAVridBladeParametersA#trunk}
  */
  readonly trunk?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsTrunkCfgAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsTrunkCfgA | cdktf.IResolvable): any {
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


export function vrrpAVridBladeParametersTrackingOptionsTrunkCfgAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsTrunkCfgA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsTrunkCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsTrunkCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsTrunkCfgA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsTrunkCfgAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsTrunkCfgA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsTrunkCfgAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsTrunkCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsVlanCfgA {
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#priority_cost VrrpAVridBladeParametersA#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#timeout VrrpAVridBladeParametersA#timeout}
  */
  readonly timeout?: number;
  /**
  * VLAN tracking (VLAN id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#vlan VrrpAVridBladeParametersA#vlan}
  */
  readonly vlan?: number;
}

export function vrrpAVridBladeParametersTrackingOptionsVlanCfgAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsVlanCfgA | cdktf.IResolvable): any {
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


export function vrrpAVridBladeParametersTrackingOptionsVlanCfgAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsVlanCfgA | cdktf.IResolvable): any {
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

export class VrrpAVridBladeParametersTrackingOptionsVlanCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsVlanCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsVlanCfgA | cdktf.IResolvable | undefined) {
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

export class VrrpAVridBladeParametersTrackingOptionsVlanCfgAList extends cdktf.ComplexList {
  public internalValue? : VrrpAVridBladeParametersTrackingOptionsVlanCfgA[] | cdktf.IResolvable

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
  public get(index: number): VrrpAVridBladeParametersTrackingOptionsVlanCfgAOutputReference {
    return new VrrpAVridBladeParametersTrackingOptionsVlanCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAVridBladeParametersTrackingOptionsA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#uuid VrrpAVridBladeParametersA#uuid}
  */
  readonly uuid?: string;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#bgp VrrpAVridBladeParametersA#bgp}
  */
  readonly bgp?: VrrpAVridBladeParametersTrackingOptionsBgpA;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#gateway VrrpAVridBladeParametersA#gateway}
  */
  readonly gateway?: VrrpAVridBladeParametersTrackingOptionsGatewayA;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#interface VrrpAVridBladeParametersA#interface}
  */
  readonly interface?: VrrpAVridBladeParametersTrackingOptionsInterfaceA[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#route VrrpAVridBladeParametersA#route}
  */
  readonly route?: VrrpAVridBladeParametersTrackingOptionsRouteA;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#trunk_cfg VrrpAVridBladeParametersA#trunk_cfg}
  */
  readonly trunkCfg?: VrrpAVridBladeParametersTrackingOptionsTrunkCfgA[] | cdktf.IResolvable;
  /**
  * vlan_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#vlan_cfg VrrpAVridBladeParametersA#vlan_cfg}
  */
  readonly vlanCfg?: VrrpAVridBladeParametersTrackingOptionsVlanCfgA[] | cdktf.IResolvable;
}

export function vrrpAVridBladeParametersTrackingOptionsAToTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsAOutputReference | VrrpAVridBladeParametersTrackingOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bgp: vrrpAVridBladeParametersTrackingOptionsBgpAToTerraform(struct!.bgp),
    gateway: vrrpAVridBladeParametersTrackingOptionsGatewayAToTerraform(struct!.gateway),
    interface: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsInterfaceAToTerraform, true)(struct!.interface),
    route: vrrpAVridBladeParametersTrackingOptionsRouteAToTerraform(struct!.route),
    trunk_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsTrunkCfgAToTerraform, true)(struct!.trunkCfg),
    vlan_cfg: cdktf.listMapper(vrrpAVridBladeParametersTrackingOptionsVlanCfgAToTerraform, true)(struct!.vlanCfg),
  }
}


export function vrrpAVridBladeParametersTrackingOptionsAToHclTerraform(struct?: VrrpAVridBladeParametersTrackingOptionsAOutputReference | VrrpAVridBladeParametersTrackingOptionsA): any {
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
      value: vrrpAVridBladeParametersTrackingOptionsBgpAToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsBgpAList",
    },
    gateway: {
      value: vrrpAVridBladeParametersTrackingOptionsGatewayAToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsGatewayAList",
    },
    interface: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsInterfaceAToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsInterfaceAList",
    },
    route: {
      value: vrrpAVridBladeParametersTrackingOptionsRouteAToHclTerraform(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsRouteAList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsTrunkCfgAToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsTrunkCfgAList",
    },
    vlan_cfg: {
      value: cdktf.listMapperHcl(vrrpAVridBladeParametersTrackingOptionsVlanCfgAToHclTerraform, true)(struct!.vlanCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAVridBladeParametersTrackingOptionsVlanCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAVridBladeParametersTrackingOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAVridBladeParametersTrackingOptionsA | undefined {
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

  public set internalValue(value: VrrpAVridBladeParametersTrackingOptionsA | undefined) {
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
  private _bgp = new VrrpAVridBladeParametersTrackingOptionsBgpAOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VrrpAVridBladeParametersTrackingOptionsBgpA) {
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
  private _gateway = new VrrpAVridBladeParametersTrackingOptionsGatewayAOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: VrrpAVridBladeParametersTrackingOptionsGatewayA) {
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
  private _interface = new VrrpAVridBladeParametersTrackingOptionsInterfaceAList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VrrpAVridBladeParametersTrackingOptionsInterfaceA[] | cdktf.IResolvable) {
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
  private _route = new VrrpAVridBladeParametersTrackingOptionsRouteAOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: VrrpAVridBladeParametersTrackingOptionsRouteA) {
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
  private _trunkCfg = new VrrpAVridBladeParametersTrackingOptionsTrunkCfgAList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: VrrpAVridBladeParametersTrackingOptionsTrunkCfgA[] | cdktf.IResolvable) {
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
  private _vlanCfg = new VrrpAVridBladeParametersTrackingOptionsVlanCfgAList(this, "vlan_cfg", false);
  public get vlanCfg() {
    return this._vlanCfg;
  }
  public putVlanCfg(value: VrrpAVridBladeParametersTrackingOptionsVlanCfgA[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters thunder_vrrp_a_vrid_blade_parameters}
*/
export class VrrpAVridBladeParametersA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid_blade_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAVridBladeParametersA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAVridBladeParametersA to import
  * @param importFromId The id of the existing VrrpAVridBladeParametersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAVridBladeParametersA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid_blade_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters thunder_vrrp_a_vrid_blade_parameters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAVridBladeParametersAConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAVridBladeParametersAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid_blade_parameters',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failOverPolicyTemplate = config.failOverPolicyTemplate;
    this._id = config.id;
    this._priority = config.priority;
    this._uuid = config.uuid;
    this._vridVal = config.vridVal;
    this._trackingOptions.internalValue = config.trackingOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // vrid_val - computed: false, optional: false, required: true
  private _vridVal?: string; 
  public get vridVal() {
    return this.getStringAttribute('vrid_val');
  }
  public set vridVal(value: string) {
    this._vridVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValInput() {
    return this._vridVal;
  }

  // tracking_options - computed: false, optional: true, required: false
  private _trackingOptions = new VrrpAVridBladeParametersTrackingOptionsAOutputReference(this, "tracking_options");
  public get trackingOptions() {
    return this._trackingOptions;
  }
  public putTrackingOptions(value: VrrpAVridBladeParametersTrackingOptionsA) {
    this._trackingOptions.internalValue = value;
  }
  public resetTrackingOptions() {
    this._trackingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingOptionsInput() {
    return this._trackingOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fail_over_policy_template: cdktf.stringToTerraform(this._failOverPolicyTemplate),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid_val: cdktf.stringToTerraform(this._vridVal),
      tracking_options: vrrpAVridBladeParametersTrackingOptionsAToTerraform(this._trackingOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fail_over_policy_template: {
        value: cdktf.stringToHclTerraform(this._failOverPolicyTemplate),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid_val: {
        value: cdktf.stringToHclTerraform(this._vridVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracking_options: {
        value: vrrpAVridBladeParametersTrackingOptionsAToHclTerraform(this._trackingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAVridBladeParametersTrackingOptionsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
