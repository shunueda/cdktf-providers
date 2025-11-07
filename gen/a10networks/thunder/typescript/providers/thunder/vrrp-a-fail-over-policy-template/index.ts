// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAFailOverPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#id VrrpAFailOverPolicyTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VRRP-A fail over policy template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#name VrrpAFailOverPolicyTemplate#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#user_tag VrrpAFailOverPolicyTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#uuid VrrpAFailOverPolicyTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#bgp VrrpAFailOverPolicyTemplate#bgp}
  */
  readonly bgp?: VrrpAFailOverPolicyTemplateBgp;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gateway VrrpAFailOverPolicyTemplate#gateway}
  */
  readonly gateway?: VrrpAFailOverPolicyTemplateGateway;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#interface VrrpAFailOverPolicyTemplate#interface}
  */
  readonly interface?: VrrpAFailOverPolicyTemplateInterface[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#route VrrpAFailOverPolicyTemplate#route}
  */
  readonly route?: VrrpAFailOverPolicyTemplateRoute;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#trunk_cfg VrrpAFailOverPolicyTemplate#trunk_cfg}
  */
  readonly trunkCfg?: VrrpAFailOverPolicyTemplateTrunkCfg[] | cdktf.IResolvable;
  /**
  * vlan_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#vlan_cfg VrrpAFailOverPolicyTemplate#vlan_cfg}
  */
  readonly vlanCfg?: VrrpAFailOverPolicyTemplateVlanCfg[] | cdktf.IResolvable;
}
export interface VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg {
  /**
  * bgp IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#bgp_ipv4_address VrrpAFailOverPolicyTemplate#bgp_ipv4_address}
  */
  readonly bgpIpv4Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address: cdktf.stringToTerraform(struct!.bgpIpv4Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg | cdktf.IResolvable): any {
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

export class VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv4Address = this._bgpIpv4Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpIpv4Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpIpv4Address = value.bgpIpv4Address;
      this._weight = value.weight;
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

export class VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#bgp_ipv6_address VrrpAFailOverPolicyTemplate#bgp_ipv6_address}
  */
  readonly bgpIpv6Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv6_address: cdktf.stringToTerraform(struct!.bgpIpv6Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg | cdktf.IResolvable): any {
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

export class VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpIpv6Address = this._bgpIpv6Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpIpv6Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpIpv6Address = value.bgpIpv6Address;
      this._weight = value.weight;
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

export class VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateBgp {
  /**
  * bgp_ipv4_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#bgp_ipv4_address_cfg VrrpAFailOverPolicyTemplate#bgp_ipv4_address_cfg}
  */
  readonly bgpIpv4AddressCfg?: VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg[] | cdktf.IResolvable;
  /**
  * bgp_ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#bgp_ipv6_address_cfg VrrpAFailOverPolicyTemplate#bgp_ipv6_address_cfg}
  */
  readonly bgpIpv6AddressCfg?: VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg[] | cdktf.IResolvable;
}

export function vrrpAFailOverPolicyTemplateBgpToTerraform(struct?: VrrpAFailOverPolicyTemplateBgpOutputReference | VrrpAFailOverPolicyTemplateBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_ipv4_address_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgToTerraform, true)(struct!.bgpIpv4AddressCfg),
    bgp_ipv6_address_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgToTerraform, true)(struct!.bgpIpv6AddressCfg),
  }
}


export function vrrpAFailOverPolicyTemplateBgpToHclTerraform(struct?: VrrpAFailOverPolicyTemplateBgpOutputReference | VrrpAFailOverPolicyTemplateBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_ipv4_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgToHclTerraform, true)(struct!.bgpIpv4AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgList",
    },
    bgp_ipv6_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgToHclTerraform, true)(struct!.bgpIpv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAFailOverPolicyTemplateBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAFailOverPolicyTemplateBgp | undefined {
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

  public set internalValue(value: VrrpAFailOverPolicyTemplateBgp | undefined) {
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
  private _bgpIpv4AddressCfg = new VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfgList(this, "bgp_ipv4_address_cfg", false);
  public get bgpIpv4AddressCfg() {
    return this._bgpIpv4AddressCfg;
  }
  public putBgpIpv4AddressCfg(value: VrrpAFailOverPolicyTemplateBgpBgpIpv4AddressCfg[] | cdktf.IResolvable) {
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
  private _bgpIpv6AddressCfg = new VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfgList(this, "bgp_ipv6_address_cfg", false);
  public get bgpIpv6AddressCfg() {
    return this._bgpIpv6AddressCfg;
  }
  public putBgpIpv6AddressCfg(value: VrrpAFailOverPolicyTemplateBgpBgpIpv6AddressCfg[] | cdktf.IResolvable) {
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
export interface VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gw_ipv4_address VrrpAFailOverPolicyTemplate#gw_ipv4_address}
  */
  readonly gwIpv4Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_ipv4_address: cdktf.stringToTerraform(struct!.gwIpv4Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.gwIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv4Address = this._gwIpv4Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gwIpv4Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gwIpv4Address = value.gwIpv4Address;
      this._weight = value.weight;
    }
  }

  // gw_ipv4_address - computed: false, optional: true, required: false
  private _gwIpv4Address?: string; 
  public get gwIpv4Address() {
    return this.getStringAttribute('gw_ipv4_address');
  }
  public set gwIpv4Address(value: string) {
    this._gwIpv4Address = value;
  }
  public resetGwIpv4Address() {
    this._gwIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv4AddressInput() {
    return this._gwIpv4Address;
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

export class VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg {
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gw_ipv6_address VrrpAFailOverPolicyTemplate#gw_ipv6_address}
  */
  readonly gwIpv6Address?: string;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_ipv6_address: cdktf.stringToTerraform(struct!.gwIpv6Address),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.gwIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv6Address = this._gwIpv6Address;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gwIpv6Address = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gwIpv6Address = value.gwIpv6Address;
      this._weight = value.weight;
    }
  }

  // gw_ipv6_address - computed: false, optional: true, required: false
  private _gwIpv6Address?: string; 
  public get gwIpv6Address() {
    return this.getStringAttribute('gw_ipv6_address');
  }
  public set gwIpv6Address(value: string) {
    this._gwIpv6Address = value;
  }
  public resetGwIpv6Address() {
    this._gwIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv6AddressInput() {
    return this._gwIpv6Address;
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

export class VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateGateway {
  /**
  * gw_ipv4_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gw_ipv4_address_cfg VrrpAFailOverPolicyTemplate#gw_ipv4_address_cfg}
  */
  readonly gwIpv4AddressCfg?: VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg[] | cdktf.IResolvable;
  /**
  * gw_ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gw_ipv6_address_cfg VrrpAFailOverPolicyTemplate#gw_ipv6_address_cfg}
  */
  readonly gwIpv6AddressCfg?: VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg[] | cdktf.IResolvable;
}

export function vrrpAFailOverPolicyTemplateGatewayToTerraform(struct?: VrrpAFailOverPolicyTemplateGatewayOutputReference | VrrpAFailOverPolicyTemplateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gw_ipv4_address_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgToTerraform, true)(struct!.gwIpv4AddressCfg),
    gw_ipv6_address_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgToTerraform, true)(struct!.gwIpv6AddressCfg),
  }
}


export function vrrpAFailOverPolicyTemplateGatewayToHclTerraform(struct?: VrrpAFailOverPolicyTemplateGatewayOutputReference | VrrpAFailOverPolicyTemplateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gw_ipv4_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgToHclTerraform, true)(struct!.gwIpv4AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgList",
    },
    gw_ipv6_address_cfg: {
      value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgToHclTerraform, true)(struct!.gwIpv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAFailOverPolicyTemplateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAFailOverPolicyTemplateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwIpv4AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv4AddressCfg = this._gwIpv4AddressCfg?.internalValue;
    }
    if (this._gwIpv6AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwIpv6AddressCfg = this._gwIpv6AddressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gwIpv4AddressCfg.internalValue = undefined;
      this._gwIpv6AddressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gwIpv4AddressCfg.internalValue = value.gwIpv4AddressCfg;
      this._gwIpv6AddressCfg.internalValue = value.gwIpv6AddressCfg;
    }
  }

  // gw_ipv4_address_cfg - computed: false, optional: true, required: false
  private _gwIpv4AddressCfg = new VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfgList(this, "gw_ipv4_address_cfg", false);
  public get gwIpv4AddressCfg() {
    return this._gwIpv4AddressCfg;
  }
  public putGwIpv4AddressCfg(value: VrrpAFailOverPolicyTemplateGatewayGwIpv4AddressCfg[] | cdktf.IResolvable) {
    this._gwIpv4AddressCfg.internalValue = value;
  }
  public resetGwIpv4AddressCfg() {
    this._gwIpv4AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv4AddressCfgInput() {
    return this._gwIpv4AddressCfg.internalValue;
  }

  // gw_ipv6_address_cfg - computed: false, optional: true, required: false
  private _gwIpv6AddressCfg = new VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfgList(this, "gw_ipv6_address_cfg", false);
  public get gwIpv6AddressCfg() {
    return this._gwIpv6AddressCfg;
  }
  public putGwIpv6AddressCfg(value: VrrpAFailOverPolicyTemplateGatewayGwIpv6AddressCfg[] | cdktf.IResolvable) {
    this._gwIpv6AddressCfg.internalValue = value;
  }
  public resetGwIpv6AddressCfg() {
    this._gwIpv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwIpv6AddressCfgInput() {
    return this._gwIpv6AddressCfg.internalValue;
  }
}
export interface VrrpAFailOverPolicyTemplateInterface {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#ethernet VrrpAFailOverPolicyTemplate#ethernet}
  */
  readonly ethernet?: number;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateInterfaceToTerraform(struct?: VrrpAFailOverPolicyTemplateInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateInterfaceToHclTerraform(struct?: VrrpAFailOverPolicyTemplateInterface | cdktf.IResolvable): any {
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

export class VrrpAFailOverPolicyTemplateInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._weight = value.weight;
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

export class VrrpAFailOverPolicyTemplateInterfaceList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateInterface[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateInterfaceOutputReference {
    return new VrrpAFailOverPolicyTemplateInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateRouteIpDestinationCfg {
  /**
  * Route's administrative distance(default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#distance VrrpAFailOverPolicyTemplate#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gateway VrrpAFailOverPolicyTemplate#gateway}
  */
  readonly gateway?: string;
  /**
  * Destination prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#ip_destination VrrpAFailOverPolicyTemplate#ip_destination}
  */
  readonly ipDestination?: string;
  /**
  * Destination prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#mask VrrpAFailOverPolicyTemplate#mask}
  */
  readonly mask?: string;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#protocol VrrpAFailOverPolicyTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateRouteIpDestinationCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateRouteIpDestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_destination: cdktf.stringToTerraform(struct!.ipDestination),
    mask: cdktf.stringToTerraform(struct!.mask),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateRouteIpDestinationCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateRouteIpDestinationCfg | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VrrpAFailOverPolicyTemplateRouteIpDestinationCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateRouteIpDestinationCfg | cdktf.IResolvable | undefined {
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
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateRouteIpDestinationCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._gateway = undefined;
      this._ipDestination = undefined;
      this._mask = undefined;
      this._protocol = undefined;
      this._weight = undefined;
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
      this._protocol = value.protocol;
      this._weight = value.weight;
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

export class VrrpAFailOverPolicyTemplateRouteIpDestinationCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateRouteIpDestinationCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateRouteIpDestinationCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateRouteIpDestinationCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg {
  /**
  * Route's administrative distance (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#distance VrrpAFailOverPolicyTemplate#distance}
  */
  readonly distance?: number;
  /**
  * Match the route's gateway (next-hop) (default: match any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#gatewayv6 VrrpAFailOverPolicyTemplate#gatewayv6}
  */
  readonly gatewayv6?: string;
  /**
  * IPv6 Destination Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#ipv6_destination VrrpAFailOverPolicyTemplate#ipv6_destination}
  */
  readonly ipv6Destination?: string;
  /**
  * 'any': Match any routing protocol (default); 'static': Match only static routes (added by user); 'dynamic': Match routes added by dynamic routing protocols (e.g. OSPF);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#protocol VrrpAFailOverPolicyTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * The amount the priority will decrease if the route is missing (The amount the priority will decrease if the route is not present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    gatewayv6: cdktf.stringToTerraform(struct!.gatewayv6),
    ipv6_destination: cdktf.stringToTerraform(struct!.ipv6Destination),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg | cdktf.IResolvable | undefined {
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
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._gatewayv6 = undefined;
      this._ipv6Destination = undefined;
      this._protocol = undefined;
      this._weight = undefined;
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
      this._protocol = value.protocol;
      this._weight = value.weight;
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

export class VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateRoute {
  /**
  * ip_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#ip_destination_cfg VrrpAFailOverPolicyTemplate#ip_destination_cfg}
  */
  readonly ipDestinationCfg?: VrrpAFailOverPolicyTemplateRouteIpDestinationCfg[] | cdktf.IResolvable;
  /**
  * ipv6_destination_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#ipv6_destination_cfg VrrpAFailOverPolicyTemplate#ipv6_destination_cfg}
  */
  readonly ipv6DestinationCfg?: VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg[] | cdktf.IResolvable;
}

export function vrrpAFailOverPolicyTemplateRouteToTerraform(struct?: VrrpAFailOverPolicyTemplateRouteOutputReference | VrrpAFailOverPolicyTemplateRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_destination_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateRouteIpDestinationCfgToTerraform, true)(struct!.ipDestinationCfg),
    ipv6_destination_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgToTerraform, true)(struct!.ipv6DestinationCfg),
  }
}


export function vrrpAFailOverPolicyTemplateRouteToHclTerraform(struct?: VrrpAFailOverPolicyTemplateRouteOutputReference | VrrpAFailOverPolicyTemplateRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_destination_cfg: {
      value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateRouteIpDestinationCfgToHclTerraform, true)(struct!.ipDestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAFailOverPolicyTemplateRouteIpDestinationCfgList",
    },
    ipv6_destination_cfg: {
      value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgToHclTerraform, true)(struct!.ipv6DestinationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAFailOverPolicyTemplateRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpAFailOverPolicyTemplateRoute | undefined {
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

  public set internalValue(value: VrrpAFailOverPolicyTemplateRoute | undefined) {
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
  private _ipDestinationCfg = new VrrpAFailOverPolicyTemplateRouteIpDestinationCfgList(this, "ip_destination_cfg", false);
  public get ipDestinationCfg() {
    return this._ipDestinationCfg;
  }
  public putIpDestinationCfg(value: VrrpAFailOverPolicyTemplateRouteIpDestinationCfg[] | cdktf.IResolvable) {
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
  private _ipv6DestinationCfg = new VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfgList(this, "ipv6_destination_cfg", false);
  public get ipv6DestinationCfg() {
    return this._ipv6DestinationCfg;
  }
  public putIpv6DestinationCfg(value: VrrpAFailOverPolicyTemplateRouteIpv6DestinationCfg[] | cdktf.IResolvable) {
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
export interface VrrpAFailOverPolicyTemplateTrunkCfg {
  /**
  * Per port failover weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#per_port_weight VrrpAFailOverPolicyTemplate#per_port_weight}
  */
  readonly perPortWeight?: number;
  /**
  * trunk tracking (trunk id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#trunk VrrpAFailOverPolicyTemplate#trunk}
  */
  readonly trunk?: number;
  /**
  * failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateTrunkCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_port_weight: cdktf.numberToTerraform(struct!.perPortWeight),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateTrunkCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_port_weight: {
      value: cdktf.numberToHclTerraform(struct!.perPortWeight),
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

export class VrrpAFailOverPolicyTemplateTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPortWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPortWeight = this._perPortWeight;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perPortWeight = undefined;
      this._trunk = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._perPortWeight = value.perPortWeight;
      this._trunk = value.trunk;
      this._weight = value.weight;
    }
  }

  // per_port_weight - computed: false, optional: true, required: false
  private _perPortWeight?: number; 
  public get perPortWeight() {
    return this.getNumberAttribute('per_port_weight');
  }
  public set perPortWeight(value: number) {
    this._perPortWeight = value;
  }
  public resetPerPortWeight() {
    this._perPortWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPortWeightInput() {
    return this._perPortWeight;
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

export class VrrpAFailOverPolicyTemplateTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateTrunkCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrrpAFailOverPolicyTemplateVlanCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#timeout VrrpAFailOverPolicyTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * VLAN tracking (VLAN id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#vlan VrrpAFailOverPolicyTemplate#vlan}
  */
  readonly vlan?: number;
  /**
  * The failover event weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#weight VrrpAFailOverPolicyTemplate#weight}
  */
  readonly weight?: number;
}

export function vrrpAFailOverPolicyTemplateVlanCfgToTerraform(struct?: VrrpAFailOverPolicyTemplateVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function vrrpAFailOverPolicyTemplateVlanCfgToHclTerraform(struct?: VrrpAFailOverPolicyTemplateVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VrrpAFailOverPolicyTemplateVlanCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAFailOverPolicyTemplateVlanCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAFailOverPolicyTemplateVlanCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._vlan = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._vlan = value.vlan;
      this._weight = value.weight;
    }
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

export class VrrpAFailOverPolicyTemplateVlanCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAFailOverPolicyTemplateVlanCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAFailOverPolicyTemplateVlanCfgOutputReference {
    return new VrrpAFailOverPolicyTemplateVlanCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template thunder_vrrp_a_fail_over_policy_template}
*/
export class VrrpAFailOverPolicyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_fail_over_policy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAFailOverPolicyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAFailOverPolicyTemplate to import
  * @param importFromId The id of the existing VrrpAFailOverPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAFailOverPolicyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_fail_over_policy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_fail_over_policy_template thunder_vrrp_a_fail_over_policy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAFailOverPolicyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAFailOverPolicyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_fail_over_policy_template',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._bgp.internalValue = config.bgp;
    this._gateway.internalValue = config.gateway;
    this._interface.internalValue = config.interface;
    this._route.internalValue = config.route;
    this._trunkCfg.internalValue = config.trunkCfg;
    this._vlanCfg.internalValue = config.vlanCfg;
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

  // bgp - computed: false, optional: true, required: false
  private _bgp = new VrrpAFailOverPolicyTemplateBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VrrpAFailOverPolicyTemplateBgp) {
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
  private _gateway = new VrrpAFailOverPolicyTemplateGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: VrrpAFailOverPolicyTemplateGateway) {
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
  private _interface = new VrrpAFailOverPolicyTemplateInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VrrpAFailOverPolicyTemplateInterface[] | cdktf.IResolvable) {
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
  private _route = new VrrpAFailOverPolicyTemplateRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: VrrpAFailOverPolicyTemplateRoute) {
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
  private _trunkCfg = new VrrpAFailOverPolicyTemplateTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: VrrpAFailOverPolicyTemplateTrunkCfg[] | cdktf.IResolvable) {
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
  private _vlanCfg = new VrrpAFailOverPolicyTemplateVlanCfgList(this, "vlan_cfg", false);
  public get vlanCfg() {
    return this._vlanCfg;
  }
  public putVlanCfg(value: VrrpAFailOverPolicyTemplateVlanCfg[] | cdktf.IResolvable) {
    this._vlanCfg.internalValue = value;
  }
  public resetVlanCfg() {
    this._vlanCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCfgInput() {
    return this._vlanCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      bgp: vrrpAFailOverPolicyTemplateBgpToTerraform(this._bgp.internalValue),
      gateway: vrrpAFailOverPolicyTemplateGatewayToTerraform(this._gateway.internalValue),
      interface: cdktf.listMapper(vrrpAFailOverPolicyTemplateInterfaceToTerraform, true)(this._interface.internalValue),
      route: vrrpAFailOverPolicyTemplateRouteToTerraform(this._route.internalValue),
      trunk_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateTrunkCfgToTerraform, true)(this._trunkCfg.internalValue),
      vlan_cfg: cdktf.listMapper(vrrpAFailOverPolicyTemplateVlanCfgToTerraform, true)(this._vlanCfg.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      bgp: {
        value: vrrpAFailOverPolicyTemplateBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAFailOverPolicyTemplateBgpList",
      },
      gateway: {
        value: vrrpAFailOverPolicyTemplateGatewayToHclTerraform(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAFailOverPolicyTemplateGatewayList",
      },
      interface: {
        value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAFailOverPolicyTemplateInterfaceList",
      },
      route: {
        value: vrrpAFailOverPolicyTemplateRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAFailOverPolicyTemplateRouteList",
      },
      trunk_cfg: {
        value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateTrunkCfgToHclTerraform, true)(this._trunkCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAFailOverPolicyTemplateTrunkCfgList",
      },
      vlan_cfg: {
        value: cdktf.listMapperHcl(vrrpAFailOverPolicyTemplateVlanCfgToHclTerraform, true)(this._vlanCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAFailOverPolicyTemplateVlanCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
