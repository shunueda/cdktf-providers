// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#annotations VirtualNetwork#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#description VirtualNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#disable VirtualNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#global_network VirtualNetwork#global_network}
  */
  readonly globalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#id VirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#labels VirtualNetwork#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#legacy_type VirtualNetwork#legacy_type}
  */
  readonly legacyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#site_local_inside_network VirtualNetwork#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#site_local_network VirtualNetwork#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * srv6_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#srv6_network VirtualNetwork#srv6_network}
  */
  readonly srv6Network?: VirtualNetworkSrv6Network;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#static_routes VirtualNetwork#static_routes}
  */
  readonly staticRoutes?: VirtualNetworkStaticRoutes[] | cdktf.IResolvable;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#static_v6_routes VirtualNetwork#static_v6_routes}
  */
  readonly staticV6Routes?: VirtualNetworkStaticV6Routes[] | cdktf.IResolvable;
}
export interface VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#address VirtualNetwork#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget): any {
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

export class VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._value = value.value;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkAccessNetworkRtargets {
  /**
  * asn2byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn2byte_rtarget VirtualNetwork#asn2byte_rtarget}
  */
  readonly asn2ByteRtarget?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget;
  /**
  * asn4byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn4byte_rtarget VirtualNetwork#asn4byte_rtarget}
  */
  readonly asn4ByteRtarget?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget;
  /**
  * ipv4_addr_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ipv4_addr_rtarget VirtualNetwork#ipv4_addr_rtarget}
  */
  readonly ipv4AddrRtarget?: VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget;
}

export function virtualNetworkSrv6NetworkAccessNetworkRtargetsToTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2byte_rtarget: virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetToTerraform(struct!.asn2ByteRtarget),
    asn4byte_rtarget: virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetToTerraform(struct!.asn4ByteRtarget),
    ipv4_addr_rtarget: virtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetToTerraform(struct!.ipv4AddrRtarget),
  }
}


export function virtualNetworkSrv6NetworkAccessNetworkRtargetsToHclTerraform(struct?: VirtualNetworkSrv6NetworkAccessNetworkRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2byte_rtarget: {
      value: virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetToHclTerraform(struct!.asn2ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetList",
    },
    asn4byte_rtarget: {
      value: virtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetToHclTerraform(struct!.asn4ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetList",
    },
    ipv4_addr_rtarget: {
      value: virtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetToHclTerraform(struct!.ipv4AddrRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkAccessNetworkRtargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkSrv6NetworkAccessNetworkRtargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2ByteRtarget = this._asn2ByteRtarget?.internalValue;
    }
    if (this._asn4ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4ByteRtarget = this._asn4ByteRtarget?.internalValue;
    }
    if (this._ipv4AddrRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrRtarget = this._ipv4AddrRtarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkAccessNetworkRtargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = undefined;
      this._asn4ByteRtarget.internalValue = undefined;
      this._ipv4AddrRtarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = value.asn2ByteRtarget;
      this._asn4ByteRtarget.internalValue = value.asn4ByteRtarget;
      this._ipv4AddrRtarget.internalValue = value.ipv4AddrRtarget;
    }
  }

  // asn2byte_rtarget - computed: false, optional: true, required: false
  private _asn2ByteRtarget = new VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtargetOutputReference(this, "asn2byte_rtarget");
  public get asn2ByteRtarget() {
    return this._asn2ByteRtarget;
  }
  public putAsn2ByteRtarget(value: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn2ByteRtarget) {
    this._asn2ByteRtarget.internalValue = value;
  }
  public resetAsn2ByteRtarget() {
    this._asn2ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2ByteRtargetInput() {
    return this._asn2ByteRtarget.internalValue;
  }

  // asn4byte_rtarget - computed: false, optional: true, required: false
  private _asn4ByteRtarget = new VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtargetOutputReference(this, "asn4byte_rtarget");
  public get asn4ByteRtarget() {
    return this._asn4ByteRtarget;
  }
  public putAsn4ByteRtarget(value: VirtualNetworkSrv6NetworkAccessNetworkRtargetsAsn4ByteRtarget) {
    this._asn4ByteRtarget.internalValue = value;
  }
  public resetAsn4ByteRtarget() {
    this._asn4ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4ByteRtargetInput() {
    return this._asn4ByteRtarget.internalValue;
  }

  // ipv4_addr_rtarget - computed: false, optional: true, required: false
  private _ipv4AddrRtarget = new VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtargetOutputReference(this, "ipv4_addr_rtarget");
  public get ipv4AddrRtarget() {
    return this._ipv4AddrRtarget;
  }
  public putIpv4AddrRtarget(value: VirtualNetworkSrv6NetworkAccessNetworkRtargetsIpv4AddrRtarget) {
    this._ipv4AddrRtarget.internalValue = value;
  }
  public resetIpv4AddrRtarget() {
    this._ipv4AddrRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrRtargetInput() {
    return this._ipv4AddrRtarget.internalValue;
  }
}

export class VirtualNetworkSrv6NetworkAccessNetworkRtargetsList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkSrv6NetworkAccessNetworkRtargets[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkSrv6NetworkAccessNetworkRtargetsOutputReference {
    return new VirtualNetworkSrv6NetworkAccessNetworkRtargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#address VirtualNetwork#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget): any {
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

export class VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._value = value.value;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets {
  /**
  * asn2byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn2byte_rtarget VirtualNetwork#asn2byte_rtarget}
  */
  readonly asn2ByteRtarget?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget;
  /**
  * asn4byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn4byte_rtarget VirtualNetwork#asn4byte_rtarget}
  */
  readonly asn4ByteRtarget?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget;
  /**
  * ipv4_addr_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ipv4_addr_rtarget VirtualNetwork#ipv4_addr_rtarget}
  */
  readonly ipv4AddrRtarget?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget;
}

export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsToTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2byte_rtarget: virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetToTerraform(struct!.asn2ByteRtarget),
    asn4byte_rtarget: virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetToTerraform(struct!.asn4ByteRtarget),
    ipv4_addr_rtarget: virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetToTerraform(struct!.ipv4AddrRtarget),
  }
}


export function virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsToHclTerraform(struct?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2byte_rtarget: {
      value: virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetToHclTerraform(struct!.asn2ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetList",
    },
    asn4byte_rtarget: {
      value: virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetToHclTerraform(struct!.asn4ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetList",
    },
    ipv4_addr_rtarget: {
      value: virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetToHclTerraform(struct!.ipv4AddrRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2ByteRtarget = this._asn2ByteRtarget?.internalValue;
    }
    if (this._asn4ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4ByteRtarget = this._asn4ByteRtarget?.internalValue;
    }
    if (this._ipv4AddrRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrRtarget = this._ipv4AddrRtarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = undefined;
      this._asn4ByteRtarget.internalValue = undefined;
      this._ipv4AddrRtarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = value.asn2ByteRtarget;
      this._asn4ByteRtarget.internalValue = value.asn4ByteRtarget;
      this._ipv4AddrRtarget.internalValue = value.ipv4AddrRtarget;
    }
  }

  // asn2byte_rtarget - computed: false, optional: true, required: false
  private _asn2ByteRtarget = new VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtargetOutputReference(this, "asn2byte_rtarget");
  public get asn2ByteRtarget() {
    return this._asn2ByteRtarget;
  }
  public putAsn2ByteRtarget(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn2ByteRtarget) {
    this._asn2ByteRtarget.internalValue = value;
  }
  public resetAsn2ByteRtarget() {
    this._asn2ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2ByteRtargetInput() {
    return this._asn2ByteRtarget.internalValue;
  }

  // asn4byte_rtarget - computed: false, optional: true, required: false
  private _asn4ByteRtarget = new VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtargetOutputReference(this, "asn4byte_rtarget");
  public get asn4ByteRtarget() {
    return this._asn4ByteRtarget;
  }
  public putAsn4ByteRtarget(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsAsn4ByteRtarget) {
    this._asn4ByteRtarget.internalValue = value;
  }
  public resetAsn4ByteRtarget() {
    this._asn4ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4ByteRtargetInput() {
    return this._asn4ByteRtarget.internalValue;
  }

  // ipv4_addr_rtarget - computed: false, optional: true, required: false
  private _ipv4AddrRtarget = new VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtargetOutputReference(this, "ipv4_addr_rtarget");
  public get ipv4AddrRtarget() {
    return this._ipv4AddrRtarget;
  }
  public putIpv4AddrRtarget(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsIpv4AddrRtarget) {
    this._ipv4AddrRtarget.internalValue = value;
  }
  public resetIpv4AddrRtarget() {
    this._ipv4AddrRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrRtargetInput() {
    return this._ipv4AddrRtarget.internalValue;
  }
}

export class VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsOutputReference {
    return new VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#address VirtualNetwork#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget): any {
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

export class VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._value = value.value;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkExportRtargets {
  /**
  * asn2byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn2byte_rtarget VirtualNetwork#asn2byte_rtarget}
  */
  readonly asn2ByteRtarget?: VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget;
  /**
  * asn4byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn4byte_rtarget VirtualNetwork#asn4byte_rtarget}
  */
  readonly asn4ByteRtarget?: VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget;
  /**
  * ipv4_addr_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ipv4_addr_rtarget VirtualNetwork#ipv4_addr_rtarget}
  */
  readonly ipv4AddrRtarget?: VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget;
}

export function virtualNetworkSrv6NetworkExportRtargetsToTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2byte_rtarget: virtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetToTerraform(struct!.asn2ByteRtarget),
    asn4byte_rtarget: virtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetToTerraform(struct!.asn4ByteRtarget),
    ipv4_addr_rtarget: virtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetToTerraform(struct!.ipv4AddrRtarget),
  }
}


export function virtualNetworkSrv6NetworkExportRtargetsToHclTerraform(struct?: VirtualNetworkSrv6NetworkExportRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2byte_rtarget: {
      value: virtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetToHclTerraform(struct!.asn2ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetList",
    },
    asn4byte_rtarget: {
      value: virtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetToHclTerraform(struct!.asn4ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetList",
    },
    ipv4_addr_rtarget: {
      value: virtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetToHclTerraform(struct!.ipv4AddrRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkExportRtargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkSrv6NetworkExportRtargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2ByteRtarget = this._asn2ByteRtarget?.internalValue;
    }
    if (this._asn4ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4ByteRtarget = this._asn4ByteRtarget?.internalValue;
    }
    if (this._ipv4AddrRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrRtarget = this._ipv4AddrRtarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkExportRtargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = undefined;
      this._asn4ByteRtarget.internalValue = undefined;
      this._ipv4AddrRtarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = value.asn2ByteRtarget;
      this._asn4ByteRtarget.internalValue = value.asn4ByteRtarget;
      this._ipv4AddrRtarget.internalValue = value.ipv4AddrRtarget;
    }
  }

  // asn2byte_rtarget - computed: false, optional: true, required: false
  private _asn2ByteRtarget = new VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtargetOutputReference(this, "asn2byte_rtarget");
  public get asn2ByteRtarget() {
    return this._asn2ByteRtarget;
  }
  public putAsn2ByteRtarget(value: VirtualNetworkSrv6NetworkExportRtargetsAsn2ByteRtarget) {
    this._asn2ByteRtarget.internalValue = value;
  }
  public resetAsn2ByteRtarget() {
    this._asn2ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2ByteRtargetInput() {
    return this._asn2ByteRtarget.internalValue;
  }

  // asn4byte_rtarget - computed: false, optional: true, required: false
  private _asn4ByteRtarget = new VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtargetOutputReference(this, "asn4byte_rtarget");
  public get asn4ByteRtarget() {
    return this._asn4ByteRtarget;
  }
  public putAsn4ByteRtarget(value: VirtualNetworkSrv6NetworkExportRtargetsAsn4ByteRtarget) {
    this._asn4ByteRtarget.internalValue = value;
  }
  public resetAsn4ByteRtarget() {
    this._asn4ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4ByteRtargetInput() {
    return this._asn4ByteRtarget.internalValue;
  }

  // ipv4_addr_rtarget - computed: false, optional: true, required: false
  private _ipv4AddrRtarget = new VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtargetOutputReference(this, "ipv4_addr_rtarget");
  public get ipv4AddrRtarget() {
    return this._ipv4AddrRtarget;
  }
  public putIpv4AddrRtarget(value: VirtualNetworkSrv6NetworkExportRtargetsIpv4AddrRtarget) {
    this._ipv4AddrRtarget.internalValue = value;
  }
  public resetIpv4AddrRtarget() {
    this._ipv4AddrRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrRtargetInput() {
    return this._ipv4AddrRtarget.internalValue;
  }
}

export class VirtualNetworkSrv6NetworkExportRtargetsList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkSrv6NetworkExportRtargets[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkSrv6NetworkExportRtargetsOutputReference {
    return new VirtualNetworkSrv6NetworkExportRtargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorToTerraform(struct?: VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorOutputReference | VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorToHclTerraform(struct?: VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorOutputReference | VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VirtualNetworkSrv6NetworkFleetSnatPool {
  /**
  * snat_pool_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#snat_pool_allocator VirtualNetwork#snat_pool_allocator}
  */
  readonly snatPoolAllocator: VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator;
}

export function virtualNetworkSrv6NetworkFleetSnatPoolToTerraform(struct?: VirtualNetworkSrv6NetworkFleetSnatPoolOutputReference | VirtualNetworkSrv6NetworkFleetSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snat_pool_allocator: virtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorToTerraform(struct!.snatPoolAllocator),
  }
}


export function virtualNetworkSrv6NetworkFleetSnatPoolToHclTerraform(struct?: VirtualNetworkSrv6NetworkFleetSnatPoolOutputReference | VirtualNetworkSrv6NetworkFleetSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snat_pool_allocator: {
      value: virtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorToHclTerraform(struct!.snatPoolAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkFleetSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkFleetSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snatPoolAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPoolAllocator = this._snatPoolAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkFleetSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snatPoolAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snatPoolAllocator.internalValue = value.snatPoolAllocator;
    }
  }

  // snat_pool_allocator - computed: false, optional: false, required: true
  private _snatPoolAllocator = new VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocatorOutputReference(this, "snat_pool_allocator");
  public get snatPoolAllocator() {
    return this._snatPoolAllocator;
  }
  public putSnatPoolAllocator(value: VirtualNetworkSrv6NetworkFleetSnatPoolSnatPoolAllocator) {
    this._snatPoolAllocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolAllocatorInput() {
    return this._snatPoolAllocator.internalValue;
  }
}
export interface VirtualNetworkSrv6NetworkFleetVipVipAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkSrv6NetworkFleetVipVipAllocatorToTerraform(struct?: VirtualNetworkSrv6NetworkFleetVipVipAllocatorOutputReference | VirtualNetworkSrv6NetworkFleetVipVipAllocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkSrv6NetworkFleetVipVipAllocatorToHclTerraform(struct?: VirtualNetworkSrv6NetworkFleetVipVipAllocatorOutputReference | VirtualNetworkSrv6NetworkFleetVipVipAllocator): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkFleetVipVipAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkFleetVipVipAllocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkFleetVipVipAllocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VirtualNetworkSrv6NetworkFleetVip {
  /**
  * vip_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#vip_allocator VirtualNetwork#vip_allocator}
  */
  readonly vipAllocator: VirtualNetworkSrv6NetworkFleetVipVipAllocator;
}

export function virtualNetworkSrv6NetworkFleetVipToTerraform(struct?: VirtualNetworkSrv6NetworkFleetVipOutputReference | VirtualNetworkSrv6NetworkFleetVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_allocator: virtualNetworkSrv6NetworkFleetVipVipAllocatorToTerraform(struct!.vipAllocator),
  }
}


export function virtualNetworkSrv6NetworkFleetVipToHclTerraform(struct?: VirtualNetworkSrv6NetworkFleetVipOutputReference | VirtualNetworkSrv6NetworkFleetVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_allocator: {
      value: virtualNetworkSrv6NetworkFleetVipVipAllocatorToHclTerraform(struct!.vipAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkFleetVipVipAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkFleetVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkFleetVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipAllocator = this._vipAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkFleetVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vipAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vipAllocator.internalValue = value.vipAllocator;
    }
  }

  // vip_allocator - computed: false, optional: false, required: true
  private _vipAllocator = new VirtualNetworkSrv6NetworkFleetVipVipAllocatorOutputReference(this, "vip_allocator");
  public get vipAllocator() {
    return this._vipAllocator;
  }
  public putVipAllocator(value: VirtualNetworkSrv6NetworkFleetVipVipAllocator) {
    this._vipAllocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAllocatorInput() {
    return this._vipAllocator.internalValue;
  }
}
export interface VirtualNetworkSrv6NetworkFleets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkSrv6NetworkFleetsToTerraform(struct?: VirtualNetworkSrv6NetworkFleets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkSrv6NetworkFleetsToHclTerraform(struct?: VirtualNetworkSrv6NetworkFleets | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkFleetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkSrv6NetworkFleets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkFleets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualNetworkSrv6NetworkFleetsList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkSrv6NetworkFleets[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkSrv6NetworkFleetsOutputReference {
    return new VirtualNetworkSrv6NetworkFleetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetOutputReference | VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#as_number VirtualNetwork#as_number}
  */
  readonly asNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetOutputReference | VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumber = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumber = value.asNumber;
      this._value = value.value;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#address VirtualNetwork#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: number;
}

export function virtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetToTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetToHclTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetOutputReference | VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget): any {
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

export class VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._value = value.value;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VirtualNetworkSrv6NetworkInternetRtargets {
  /**
  * asn2byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn2byte_rtarget VirtualNetwork#asn2byte_rtarget}
  */
  readonly asn2ByteRtarget?: VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget;
  /**
  * asn4byte_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#asn4byte_rtarget VirtualNetwork#asn4byte_rtarget}
  */
  readonly asn4ByteRtarget?: VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget;
  /**
  * ipv4_addr_rtarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ipv4_addr_rtarget VirtualNetwork#ipv4_addr_rtarget}
  */
  readonly ipv4AddrRtarget?: VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget;
}

export function virtualNetworkSrv6NetworkInternetRtargetsToTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2byte_rtarget: virtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetToTerraform(struct!.asn2ByteRtarget),
    asn4byte_rtarget: virtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetToTerraform(struct!.asn4ByteRtarget),
    ipv4_addr_rtarget: virtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetToTerraform(struct!.ipv4AddrRtarget),
  }
}


export function virtualNetworkSrv6NetworkInternetRtargetsToHclTerraform(struct?: VirtualNetworkSrv6NetworkInternetRtargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2byte_rtarget: {
      value: virtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetToHclTerraform(struct!.asn2ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetList",
    },
    asn4byte_rtarget: {
      value: virtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetToHclTerraform(struct!.asn4ByteRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetList",
    },
    ipv4_addr_rtarget: {
      value: virtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetToHclTerraform(struct!.ipv4AddrRtarget),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkInternetRtargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkSrv6NetworkInternetRtargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2ByteRtarget = this._asn2ByteRtarget?.internalValue;
    }
    if (this._asn4ByteRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4ByteRtarget = this._asn4ByteRtarget?.internalValue;
    }
    if (this._ipv4AddrRtarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrRtarget = this._ipv4AddrRtarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkInternetRtargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = undefined;
      this._asn4ByteRtarget.internalValue = undefined;
      this._ipv4AddrRtarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2ByteRtarget.internalValue = value.asn2ByteRtarget;
      this._asn4ByteRtarget.internalValue = value.asn4ByteRtarget;
      this._ipv4AddrRtarget.internalValue = value.ipv4AddrRtarget;
    }
  }

  // asn2byte_rtarget - computed: false, optional: true, required: false
  private _asn2ByteRtarget = new VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtargetOutputReference(this, "asn2byte_rtarget");
  public get asn2ByteRtarget() {
    return this._asn2ByteRtarget;
  }
  public putAsn2ByteRtarget(value: VirtualNetworkSrv6NetworkInternetRtargetsAsn2ByteRtarget) {
    this._asn2ByteRtarget.internalValue = value;
  }
  public resetAsn2ByteRtarget() {
    this._asn2ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2ByteRtargetInput() {
    return this._asn2ByteRtarget.internalValue;
  }

  // asn4byte_rtarget - computed: false, optional: true, required: false
  private _asn4ByteRtarget = new VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtargetOutputReference(this, "asn4byte_rtarget");
  public get asn4ByteRtarget() {
    return this._asn4ByteRtarget;
  }
  public putAsn4ByteRtarget(value: VirtualNetworkSrv6NetworkInternetRtargetsAsn4ByteRtarget) {
    this._asn4ByteRtarget.internalValue = value;
  }
  public resetAsn4ByteRtarget() {
    this._asn4ByteRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4ByteRtargetInput() {
    return this._asn4ByteRtarget.internalValue;
  }

  // ipv4_addr_rtarget - computed: false, optional: true, required: false
  private _ipv4AddrRtarget = new VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtargetOutputReference(this, "ipv4_addr_rtarget");
  public get ipv4AddrRtarget() {
    return this._ipv4AddrRtarget;
  }
  public putIpv4AddrRtarget(value: VirtualNetworkSrv6NetworkInternetRtargetsIpv4AddrRtarget) {
    this._ipv4AddrRtarget.internalValue = value;
  }
  public resetIpv4AddrRtarget() {
    this._ipv4AddrRtarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrRtargetInput() {
    return this._ipv4AddrRtarget.internalValue;
  }
}

export class VirtualNetworkSrv6NetworkInternetRtargetsList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkSrv6NetworkInternetRtargets[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkSrv6NetworkInternetRtargetsOutputReference {
    return new VirtualNetworkSrv6NetworkInternetRtargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ipv4_prefixes VirtualNetwork#ipv4_prefixes}
  */
  readonly ipv4Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ipv6_prefixes VirtualNetwork#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueToTerraform(struct?: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueOutputReference | VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Prefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueToHclTerraform(struct?: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueOutputReference | VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefixes = this._ipv4Prefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Prefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Prefixes = value.ipv4Prefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // ipv4_prefixes - computed: false, optional: true, required: false
  private _ipv4Prefixes?: string[]; 
  public get ipv4Prefixes() {
    return this.getListAttribute('ipv4_prefixes');
  }
  public set ipv4Prefixes(value: string[]) {
    this._ipv4Prefixes = value;
  }
  public resetIpv4Prefixes() {
    this._ipv4Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixesInput() {
    return this._ipv4Prefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#value VirtualNetwork#value}
  */
  readonly value: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue;
}

export function virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolToTerraform(struct?: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolOutputReference | VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueToTerraform(struct!.value),
  }
}


export function virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolToHclTerraform(struct?: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolOutputReference | VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool): any {
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
    value: {
      value: virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface VirtualNetworkSrv6NetworkSiteSnatPool {
  /**
  * node_snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#node_snat_pool VirtualNetwork#node_snat_pool}
  */
  readonly nodeSnatPool: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool;
}

export function virtualNetworkSrv6NetworkSiteSnatPoolToTerraform(struct?: VirtualNetworkSrv6NetworkSiteSnatPoolOutputReference | VirtualNetworkSrv6NetworkSiteSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_snat_pool: virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolToTerraform(struct!.nodeSnatPool),
  }
}


export function virtualNetworkSrv6NetworkSiteSnatPoolToHclTerraform(struct?: VirtualNetworkSrv6NetworkSiteSnatPoolOutputReference | VirtualNetworkSrv6NetworkSiteSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_snat_pool: {
      value: virtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolToHclTerraform(struct!.nodeSnatPool),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkSiteSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkSiteSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSnatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSnatPool = this._nodeSnatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkSiteSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSnatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSnatPool.internalValue = value.nodeSnatPool;
    }
  }

  // node_snat_pool - computed: false, optional: false, required: true
  private _nodeSnatPool = new VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPoolOutputReference(this, "node_snat_pool");
  public get nodeSnatPool() {
    return this._nodeSnatPool;
  }
  public putNodeSnatPool(value: VirtualNetworkSrv6NetworkSiteSnatPoolNodeSnatPool) {
    this._nodeSnatPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSnatPoolInput() {
    return this._nodeSnatPool.internalValue;
  }
}
export interface VirtualNetworkSrv6NetworkSlice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkSrv6NetworkSliceToTerraform(struct?: VirtualNetworkSrv6NetworkSliceOutputReference | VirtualNetworkSrv6NetworkSlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkSrv6NetworkSliceToHclTerraform(struct?: VirtualNetworkSrv6NetworkSliceOutputReference | VirtualNetworkSrv6NetworkSlice): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkSliceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkSlice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkSlice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VirtualNetworkSrv6NetworkSrv6NetworkNsParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace: string;
}

export function virtualNetworkSrv6NetworkSrv6NetworkNsParamsToTerraform(struct?: VirtualNetworkSrv6NetworkSrv6NetworkNsParamsOutputReference | VirtualNetworkSrv6NetworkSrv6NetworkNsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function virtualNetworkSrv6NetworkSrv6NetworkNsParamsToHclTerraform(struct?: VirtualNetworkSrv6NetworkSrv6NetworkNsParamsOutputReference | VirtualNetworkSrv6NetworkSrv6NetworkNsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkSrv6NetworkNsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6NetworkSrv6NetworkNsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6NetworkSrv6NetworkNsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface VirtualNetworkSrv6Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#anycast_vip VirtualNetwork#anycast_vip}
  */
  readonly anycastVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#interface_ip_snat_pool VirtualNetwork#interface_ip_snat_pool}
  */
  readonly interfaceIpSnatPool?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#interface_ip_vip VirtualNetwork#interface_ip_vip}
  */
  readonly interfaceIpVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#no_namespace_network VirtualNetwork#no_namespace_network}
  */
  readonly noNamespaceNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#remote_sid_stats_plen VirtualNetwork#remote_sid_stats_plen}
  */
  readonly remoteSidStatsPlen?: number;
  /**
  * access_network_rtargets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#access_network_rtargets VirtualNetwork#access_network_rtargets}
  */
  readonly accessNetworkRtargets?: VirtualNetworkSrv6NetworkAccessNetworkRtargets[] | cdktf.IResolvable;
  /**
  * enterprise_network_rtargets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#enterprise_network_rtargets VirtualNetwork#enterprise_network_rtargets}
  */
  readonly enterpriseNetworkRtargets?: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets[] | cdktf.IResolvable;
  /**
  * export_rtargets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#export_rtargets VirtualNetwork#export_rtargets}
  */
  readonly exportRtargets?: VirtualNetworkSrv6NetworkExportRtargets[] | cdktf.IResolvable;
  /**
  * fleet_snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#fleet_snat_pool VirtualNetwork#fleet_snat_pool}
  */
  readonly fleetSnatPool?: VirtualNetworkSrv6NetworkFleetSnatPool;
  /**
  * fleet_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#fleet_vip VirtualNetwork#fleet_vip}
  */
  readonly fleetVip?: VirtualNetworkSrv6NetworkFleetVip;
  /**
  * fleets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#fleets VirtualNetwork#fleets}
  */
  readonly fleets?: VirtualNetworkSrv6NetworkFleets[] | cdktf.IResolvable;
  /**
  * internet_rtargets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#internet_rtargets VirtualNetwork#internet_rtargets}
  */
  readonly internetRtargets?: VirtualNetworkSrv6NetworkInternetRtargets[] | cdktf.IResolvable;
  /**
  * site_snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#site_snat_pool VirtualNetwork#site_snat_pool}
  */
  readonly siteSnatPool?: VirtualNetworkSrv6NetworkSiteSnatPool;
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#slice VirtualNetwork#slice}
  */
  readonly slice: VirtualNetworkSrv6NetworkSlice;
  /**
  * srv6_network_ns_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#srv6_network_ns_params VirtualNetwork#srv6_network_ns_params}
  */
  readonly srv6NetworkNsParams?: VirtualNetworkSrv6NetworkSrv6NetworkNsParams;
}

export function virtualNetworkSrv6NetworkToTerraform(struct?: VirtualNetworkSrv6NetworkOutputReference | VirtualNetworkSrv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast_vip: cdktf.stringToTerraform(struct!.anycastVip),
    interface_ip_snat_pool: cdktf.booleanToTerraform(struct!.interfaceIpSnatPool),
    interface_ip_vip: cdktf.booleanToTerraform(struct!.interfaceIpVip),
    no_namespace_network: cdktf.booleanToTerraform(struct!.noNamespaceNetwork),
    remote_sid_stats_plen: cdktf.numberToTerraform(struct!.remoteSidStatsPlen),
    access_network_rtargets: cdktf.listMapper(virtualNetworkSrv6NetworkAccessNetworkRtargetsToTerraform, true)(struct!.accessNetworkRtargets),
    enterprise_network_rtargets: cdktf.listMapper(virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsToTerraform, true)(struct!.enterpriseNetworkRtargets),
    export_rtargets: cdktf.listMapper(virtualNetworkSrv6NetworkExportRtargetsToTerraform, true)(struct!.exportRtargets),
    fleet_snat_pool: virtualNetworkSrv6NetworkFleetSnatPoolToTerraform(struct!.fleetSnatPool),
    fleet_vip: virtualNetworkSrv6NetworkFleetVipToTerraform(struct!.fleetVip),
    fleets: cdktf.listMapper(virtualNetworkSrv6NetworkFleetsToTerraform, true)(struct!.fleets),
    internet_rtargets: cdktf.listMapper(virtualNetworkSrv6NetworkInternetRtargetsToTerraform, true)(struct!.internetRtargets),
    site_snat_pool: virtualNetworkSrv6NetworkSiteSnatPoolToTerraform(struct!.siteSnatPool),
    slice: virtualNetworkSrv6NetworkSliceToTerraform(struct!.slice),
    srv6_network_ns_params: virtualNetworkSrv6NetworkSrv6NetworkNsParamsToTerraform(struct!.srv6NetworkNsParams),
  }
}


export function virtualNetworkSrv6NetworkToHclTerraform(struct?: VirtualNetworkSrv6NetworkOutputReference | VirtualNetworkSrv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast_vip: {
      value: cdktf.stringToHclTerraform(struct!.anycastVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_ip_snat_pool: {
      value: cdktf.booleanToHclTerraform(struct!.interfaceIpSnatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_ip_vip: {
      value: cdktf.booleanToHclTerraform(struct!.interfaceIpVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_namespace_network: {
      value: cdktf.booleanToHclTerraform(struct!.noNamespaceNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_sid_stats_plen: {
      value: cdktf.numberToHclTerraform(struct!.remoteSidStatsPlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_network_rtargets: {
      value: cdktf.listMapperHcl(virtualNetworkSrv6NetworkAccessNetworkRtargetsToHclTerraform, true)(struct!.accessNetworkRtargets),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkAccessNetworkRtargetsList",
    },
    enterprise_network_rtargets: {
      value: cdktf.listMapperHcl(virtualNetworkSrv6NetworkEnterpriseNetworkRtargetsToHclTerraform, true)(struct!.enterpriseNetworkRtargets),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsList",
    },
    export_rtargets: {
      value: cdktf.listMapperHcl(virtualNetworkSrv6NetworkExportRtargetsToHclTerraform, true)(struct!.exportRtargets),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkExportRtargetsList",
    },
    fleet_snat_pool: {
      value: virtualNetworkSrv6NetworkFleetSnatPoolToHclTerraform(struct!.fleetSnatPool),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkFleetSnatPoolList",
    },
    fleet_vip: {
      value: virtualNetworkSrv6NetworkFleetVipToHclTerraform(struct!.fleetVip),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkFleetVipList",
    },
    fleets: {
      value: cdktf.listMapperHcl(virtualNetworkSrv6NetworkFleetsToHclTerraform, true)(struct!.fleets),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkFleetsList",
    },
    internet_rtargets: {
      value: cdktf.listMapperHcl(virtualNetworkSrv6NetworkInternetRtargetsToHclTerraform, true)(struct!.internetRtargets),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkInternetRtargetsList",
    },
    site_snat_pool: {
      value: virtualNetworkSrv6NetworkSiteSnatPoolToHclTerraform(struct!.siteSnatPool),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkSiteSnatPoolList",
    },
    slice: {
      value: virtualNetworkSrv6NetworkSliceToHclTerraform(struct!.slice),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkSliceList",
    },
    srv6_network_ns_params: {
      value: virtualNetworkSrv6NetworkSrv6NetworkNsParamsToHclTerraform(struct!.srv6NetworkNsParams),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkSrv6NetworkSrv6NetworkNsParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkSrv6NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkSrv6Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastVip = this._anycastVip;
    }
    if (this._interfaceIpSnatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpSnatPool = this._interfaceIpSnatPool;
    }
    if (this._interfaceIpVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpVip = this._interfaceIpVip;
    }
    if (this._noNamespaceNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNamespaceNetwork = this._noNamespaceNetwork;
    }
    if (this._remoteSidStatsPlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSidStatsPlen = this._remoteSidStatsPlen;
    }
    if (this._accessNetworkRtargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessNetworkRtargets = this._accessNetworkRtargets?.internalValue;
    }
    if (this._enterpriseNetworkRtargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseNetworkRtargets = this._enterpriseNetworkRtargets?.internalValue;
    }
    if (this._exportRtargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRtargets = this._exportRtargets?.internalValue;
    }
    if (this._fleetSnatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetSnatPool = this._fleetSnatPool?.internalValue;
    }
    if (this._fleetVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetVip = this._fleetVip?.internalValue;
    }
    if (this._fleets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleets = this._fleets?.internalValue;
    }
    if (this._internetRtargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetRtargets = this._internetRtargets?.internalValue;
    }
    if (this._siteSnatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteSnatPool = this._siteSnatPool?.internalValue;
    }
    if (this._slice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slice = this._slice?.internalValue;
    }
    if (this._srv6NetworkNsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srv6NetworkNsParams = this._srv6NetworkNsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkSrv6Network | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anycastVip = undefined;
      this._interfaceIpSnatPool = undefined;
      this._interfaceIpVip = undefined;
      this._noNamespaceNetwork = undefined;
      this._remoteSidStatsPlen = undefined;
      this._accessNetworkRtargets.internalValue = undefined;
      this._enterpriseNetworkRtargets.internalValue = undefined;
      this._exportRtargets.internalValue = undefined;
      this._fleetSnatPool.internalValue = undefined;
      this._fleetVip.internalValue = undefined;
      this._fleets.internalValue = undefined;
      this._internetRtargets.internalValue = undefined;
      this._siteSnatPool.internalValue = undefined;
      this._slice.internalValue = undefined;
      this._srv6NetworkNsParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anycastVip = value.anycastVip;
      this._interfaceIpSnatPool = value.interfaceIpSnatPool;
      this._interfaceIpVip = value.interfaceIpVip;
      this._noNamespaceNetwork = value.noNamespaceNetwork;
      this._remoteSidStatsPlen = value.remoteSidStatsPlen;
      this._accessNetworkRtargets.internalValue = value.accessNetworkRtargets;
      this._enterpriseNetworkRtargets.internalValue = value.enterpriseNetworkRtargets;
      this._exportRtargets.internalValue = value.exportRtargets;
      this._fleetSnatPool.internalValue = value.fleetSnatPool;
      this._fleetVip.internalValue = value.fleetVip;
      this._fleets.internalValue = value.fleets;
      this._internetRtargets.internalValue = value.internetRtargets;
      this._siteSnatPool.internalValue = value.siteSnatPool;
      this._slice.internalValue = value.slice;
      this._srv6NetworkNsParams.internalValue = value.srv6NetworkNsParams;
    }
  }

  // anycast_vip - computed: false, optional: true, required: false
  private _anycastVip?: string; 
  public get anycastVip() {
    return this.getStringAttribute('anycast_vip');
  }
  public set anycastVip(value: string) {
    this._anycastVip = value;
  }
  public resetAnycastVip() {
    this._anycastVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastVipInput() {
    return this._anycastVip;
  }

  // interface_ip_snat_pool - computed: false, optional: true, required: false
  private _interfaceIpSnatPool?: boolean | cdktf.IResolvable; 
  public get interfaceIpSnatPool() {
    return this.getBooleanAttribute('interface_ip_snat_pool');
  }
  public set interfaceIpSnatPool(value: boolean | cdktf.IResolvable) {
    this._interfaceIpSnatPool = value;
  }
  public resetInterfaceIpSnatPool() {
    this._interfaceIpSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpSnatPoolInput() {
    return this._interfaceIpSnatPool;
  }

  // interface_ip_vip - computed: false, optional: true, required: false
  private _interfaceIpVip?: boolean | cdktf.IResolvable; 
  public get interfaceIpVip() {
    return this.getBooleanAttribute('interface_ip_vip');
  }
  public set interfaceIpVip(value: boolean | cdktf.IResolvable) {
    this._interfaceIpVip = value;
  }
  public resetInterfaceIpVip() {
    this._interfaceIpVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpVipInput() {
    return this._interfaceIpVip;
  }

  // no_namespace_network - computed: false, optional: true, required: false
  private _noNamespaceNetwork?: boolean | cdktf.IResolvable; 
  public get noNamespaceNetwork() {
    return this.getBooleanAttribute('no_namespace_network');
  }
  public set noNamespaceNetwork(value: boolean | cdktf.IResolvable) {
    this._noNamespaceNetwork = value;
  }
  public resetNoNamespaceNetwork() {
    this._noNamespaceNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNamespaceNetworkInput() {
    return this._noNamespaceNetwork;
  }

  // remote_sid_stats_plen - computed: false, optional: true, required: false
  private _remoteSidStatsPlen?: number; 
  public get remoteSidStatsPlen() {
    return this.getNumberAttribute('remote_sid_stats_plen');
  }
  public set remoteSidStatsPlen(value: number) {
    this._remoteSidStatsPlen = value;
  }
  public resetRemoteSidStatsPlen() {
    this._remoteSidStatsPlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSidStatsPlenInput() {
    return this._remoteSidStatsPlen;
  }

  // access_network_rtargets - computed: false, optional: true, required: false
  private _accessNetworkRtargets = new VirtualNetworkSrv6NetworkAccessNetworkRtargetsList(this, "access_network_rtargets", false);
  public get accessNetworkRtargets() {
    return this._accessNetworkRtargets;
  }
  public putAccessNetworkRtargets(value: VirtualNetworkSrv6NetworkAccessNetworkRtargets[] | cdktf.IResolvable) {
    this._accessNetworkRtargets.internalValue = value;
  }
  public resetAccessNetworkRtargets() {
    this._accessNetworkRtargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkRtargetsInput() {
    return this._accessNetworkRtargets.internalValue;
  }

  // enterprise_network_rtargets - computed: false, optional: true, required: false
  private _enterpriseNetworkRtargets = new VirtualNetworkSrv6NetworkEnterpriseNetworkRtargetsList(this, "enterprise_network_rtargets", false);
  public get enterpriseNetworkRtargets() {
    return this._enterpriseNetworkRtargets;
  }
  public putEnterpriseNetworkRtargets(value: VirtualNetworkSrv6NetworkEnterpriseNetworkRtargets[] | cdktf.IResolvable) {
    this._enterpriseNetworkRtargets.internalValue = value;
  }
  public resetEnterpriseNetworkRtargets() {
    this._enterpriseNetworkRtargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseNetworkRtargetsInput() {
    return this._enterpriseNetworkRtargets.internalValue;
  }

  // export_rtargets - computed: false, optional: true, required: false
  private _exportRtargets = new VirtualNetworkSrv6NetworkExportRtargetsList(this, "export_rtargets", false);
  public get exportRtargets() {
    return this._exportRtargets;
  }
  public putExportRtargets(value: VirtualNetworkSrv6NetworkExportRtargets[] | cdktf.IResolvable) {
    this._exportRtargets.internalValue = value;
  }
  public resetExportRtargets() {
    this._exportRtargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRtargetsInput() {
    return this._exportRtargets.internalValue;
  }

  // fleet_snat_pool - computed: false, optional: true, required: false
  private _fleetSnatPool = new VirtualNetworkSrv6NetworkFleetSnatPoolOutputReference(this, "fleet_snat_pool");
  public get fleetSnatPool() {
    return this._fleetSnatPool;
  }
  public putFleetSnatPool(value: VirtualNetworkSrv6NetworkFleetSnatPool) {
    this._fleetSnatPool.internalValue = value;
  }
  public resetFleetSnatPool() {
    this._fleetSnatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetSnatPoolInput() {
    return this._fleetSnatPool.internalValue;
  }

  // fleet_vip - computed: false, optional: true, required: false
  private _fleetVip = new VirtualNetworkSrv6NetworkFleetVipOutputReference(this, "fleet_vip");
  public get fleetVip() {
    return this._fleetVip;
  }
  public putFleetVip(value: VirtualNetworkSrv6NetworkFleetVip) {
    this._fleetVip.internalValue = value;
  }
  public resetFleetVip() {
    this._fleetVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetVipInput() {
    return this._fleetVip.internalValue;
  }

  // fleets - computed: false, optional: true, required: false
  private _fleets = new VirtualNetworkSrv6NetworkFleetsList(this, "fleets", false);
  public get fleets() {
    return this._fleets;
  }
  public putFleets(value: VirtualNetworkSrv6NetworkFleets[] | cdktf.IResolvable) {
    this._fleets.internalValue = value;
  }
  public resetFleets() {
    this._fleets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetsInput() {
    return this._fleets.internalValue;
  }

  // internet_rtargets - computed: false, optional: true, required: false
  private _internetRtargets = new VirtualNetworkSrv6NetworkInternetRtargetsList(this, "internet_rtargets", false);
  public get internetRtargets() {
    return this._internetRtargets;
  }
  public putInternetRtargets(value: VirtualNetworkSrv6NetworkInternetRtargets[] | cdktf.IResolvable) {
    this._internetRtargets.internalValue = value;
  }
  public resetInternetRtargets() {
    this._internetRtargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetRtargetsInput() {
    return this._internetRtargets.internalValue;
  }

  // site_snat_pool - computed: false, optional: true, required: false
  private _siteSnatPool = new VirtualNetworkSrv6NetworkSiteSnatPoolOutputReference(this, "site_snat_pool");
  public get siteSnatPool() {
    return this._siteSnatPool;
  }
  public putSiteSnatPool(value: VirtualNetworkSrv6NetworkSiteSnatPool) {
    this._siteSnatPool.internalValue = value;
  }
  public resetSiteSnatPool() {
    this._siteSnatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSnatPoolInput() {
    return this._siteSnatPool.internalValue;
  }

  // slice - computed: false, optional: false, required: true
  private _slice = new VirtualNetworkSrv6NetworkSliceOutputReference(this, "slice");
  public get slice() {
    return this._slice;
  }
  public putSlice(value: VirtualNetworkSrv6NetworkSlice) {
    this._slice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceInput() {
    return this._slice.internalValue;
  }

  // srv6_network_ns_params - computed: false, optional: true, required: false
  private _srv6NetworkNsParams = new VirtualNetworkSrv6NetworkSrv6NetworkNsParamsOutputReference(this, "srv6_network_ns_params");
  public get srv6NetworkNsParams() {
    return this._srv6NetworkNsParams;
  }
  public putSrv6NetworkNsParams(value: VirtualNetworkSrv6NetworkSrv6NetworkNsParams) {
    this._srv6NetworkNsParams.internalValue = value;
  }
  public resetSrv6NetworkNsParams() {
    this._srv6NetworkNsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6NetworkNsParamsInput() {
    return this._srv6NetworkNsParams.internalValue;
  }
}
export interface VirtualNetworkStaticRoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkStaticRoutesInterfaceToTerraform(struct?: VirtualNetworkStaticRoutesInterfaceOutputReference | VirtualNetworkStaticRoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkStaticRoutesInterfaceToHclTerraform(struct?: VirtualNetworkStaticRoutesInterfaceOutputReference | VirtualNetworkStaticRoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticRoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkStaticRoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticRoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VirtualNetworkStaticRoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkStaticRoutesNodeInterfaceListInterfaceToTerraform(struct?: VirtualNetworkStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkStaticRoutesNodeInterfaceListInterfaceToHclTerraform(struct?: VirtualNetworkStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticRoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticRoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualNetworkStaticRoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkStaticRoutesNodeInterfaceListInterfaceOutputReference {
    return new VirtualNetworkStaticRoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkStaticRoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#node VirtualNetwork#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#interface VirtualNetwork#interface}
  */
  readonly interface?: VirtualNetworkStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function virtualNetworkStaticRoutesNodeInterfaceListStructToTerraform(struct?: VirtualNetworkStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(virtualNetworkStaticRoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function virtualNetworkStaticRoutesNodeInterfaceListStructToHclTerraform(struct?: VirtualNetworkStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(virtualNetworkStaticRoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticRoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticRoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticRoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._interface.internalValue = value.interface;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VirtualNetworkStaticRoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VirtualNetworkStaticRoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VirtualNetworkStaticRoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkStaticRoutesNodeInterfaceListStructOutputReference {
    return new VirtualNetworkStaticRoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkStaticRoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#list VirtualNetwork#list}
  */
  readonly list?: VirtualNetworkStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function virtualNetworkStaticRoutesNodeInterfaceToTerraform(struct?: VirtualNetworkStaticRoutesNodeInterfaceOutputReference | VirtualNetworkStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(virtualNetworkStaticRoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function virtualNetworkStaticRoutesNodeInterfaceToHclTerraform(struct?: VirtualNetworkStaticRoutesNodeInterfaceOutputReference | VirtualNetworkStaticRoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(virtualNetworkStaticRoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticRoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticRoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkStaticRoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticRoutesNodeInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._list.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new VirtualNetworkStaticRoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: VirtualNetworkStaticRoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface VirtualNetworkStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#attrs VirtualNetwork#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#default_gateway VirtualNetwork#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ip_address VirtualNetwork#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ip_prefixes VirtualNetwork#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#interface VirtualNetwork#interface}
  */
  readonly interface?: VirtualNetworkStaticRoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#node_interface VirtualNetwork#node_interface}
  */
  readonly nodeInterface?: VirtualNetworkStaticRoutesNodeInterface;
}

export function virtualNetworkStaticRoutesToTerraform(struct?: VirtualNetworkStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: virtualNetworkStaticRoutesInterfaceToTerraform(struct!.interface),
    node_interface: virtualNetworkStaticRoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function virtualNetworkStaticRoutesToHclTerraform(struct?: VirtualNetworkStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: virtualNetworkStaticRoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticRoutesInterfaceList",
    },
    node_interface: {
      value: virtualNetworkStaticRoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticRoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nodeInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInterface = this._nodeInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
      this._nodeInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
      this._nodeInterface.internalValue = value.nodeInterface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VirtualNetworkStaticRoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VirtualNetworkStaticRoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // node_interface - computed: false, optional: true, required: false
  private _nodeInterface = new VirtualNetworkStaticRoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: VirtualNetworkStaticRoutesNodeInterface) {
    this._nodeInterface.internalValue = value;
  }
  public resetNodeInterface() {
    this._nodeInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInterfaceInput() {
    return this._nodeInterface.internalValue;
  }
}

export class VirtualNetworkStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkStaticRoutesOutputReference {
    return new VirtualNetworkStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkStaticV6RoutesInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkStaticV6RoutesInterfaceToTerraform(struct?: VirtualNetworkStaticV6RoutesInterfaceOutputReference | VirtualNetworkStaticV6RoutesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkStaticV6RoutesInterfaceToHclTerraform(struct?: VirtualNetworkStaticV6RoutesInterfaceOutputReference | VirtualNetworkStaticV6RoutesInterface): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticV6RoutesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkStaticV6RoutesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticV6RoutesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface VirtualNetworkStaticV6RoutesNodeInterfaceListInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#namespace VirtualNetwork#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#tenant VirtualNetwork#tenant}
  */
  readonly tenant?: string;
}

export function virtualNetworkStaticV6RoutesNodeInterfaceListInterfaceToTerraform(struct?: VirtualNetworkStaticV6RoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function virtualNetworkStaticV6RoutesNodeInterfaceListInterfaceToHclTerraform(struct?: VirtualNetworkStaticV6RoutesNodeInterfaceListInterface | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticV6RoutesNodeInterfaceListInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkStaticV6RoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticV6RoutesNodeInterfaceListInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class VirtualNetworkStaticV6RoutesNodeInterfaceListInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkStaticV6RoutesNodeInterfaceListInterface[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkStaticV6RoutesNodeInterfaceListInterfaceOutputReference {
    return new VirtualNetworkStaticV6RoutesNodeInterfaceListInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkStaticV6RoutesNodeInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#node VirtualNetwork#node}
  */
  readonly nodeAttribute?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#interface VirtualNetwork#interface}
  */
  readonly interface?: VirtualNetworkStaticV6RoutesNodeInterfaceListInterface[] | cdktf.IResolvable;
}

export function virtualNetworkStaticV6RoutesNodeInterfaceListStructToTerraform(struct?: VirtualNetworkStaticV6RoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    interface: cdktf.listMapper(virtualNetworkStaticV6RoutesNodeInterfaceListInterfaceToTerraform, true)(struct!.interface),
  }
}


export function virtualNetworkStaticV6RoutesNodeInterfaceListStructToHclTerraform(struct?: VirtualNetworkStaticV6RoutesNodeInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(virtualNetworkStaticV6RoutesNodeInterfaceListInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticV6RoutesNodeInterfaceListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticV6RoutesNodeInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkStaticV6RoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticV6RoutesNodeInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._interface.internalValue = value.interface;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VirtualNetworkStaticV6RoutesNodeInterfaceListInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VirtualNetworkStaticV6RoutesNodeInterfaceListInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class VirtualNetworkStaticV6RoutesNodeInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkStaticV6RoutesNodeInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkStaticV6RoutesNodeInterfaceListStructOutputReference {
    return new VirtualNetworkStaticV6RoutesNodeInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkStaticV6RoutesNodeInterface {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#list VirtualNetwork#list}
  */
  readonly list?: VirtualNetworkStaticV6RoutesNodeInterfaceListStruct[] | cdktf.IResolvable;
}

export function virtualNetworkStaticV6RoutesNodeInterfaceToTerraform(struct?: VirtualNetworkStaticV6RoutesNodeInterfaceOutputReference | VirtualNetworkStaticV6RoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(virtualNetworkStaticV6RoutesNodeInterfaceListStructToTerraform, true)(struct!.list),
  }
}


export function virtualNetworkStaticV6RoutesNodeInterfaceToHclTerraform(struct?: VirtualNetworkStaticV6RoutesNodeInterfaceOutputReference | VirtualNetworkStaticV6RoutesNodeInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(virtualNetworkStaticV6RoutesNodeInterfaceListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticV6RoutesNodeInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticV6RoutesNodeInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkStaticV6RoutesNodeInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticV6RoutesNodeInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._list.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new VirtualNetworkStaticV6RoutesNodeInterfaceListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: VirtualNetworkStaticV6RoutesNodeInterfaceListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface VirtualNetworkStaticV6Routes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#attrs VirtualNetwork#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#default_gateway VirtualNetwork#default_gateway}
  */
  readonly defaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ip_address VirtualNetwork#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#ip_prefixes VirtualNetwork#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#interface VirtualNetwork#interface}
  */
  readonly interface?: VirtualNetworkStaticV6RoutesInterface;
  /**
  * node_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#node_interface VirtualNetwork#node_interface}
  */
  readonly nodeInterface?: VirtualNetworkStaticV6RoutesNodeInterface;
}

export function virtualNetworkStaticV6RoutesToTerraform(struct?: VirtualNetworkStaticV6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    default_gateway: cdktf.booleanToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    interface: virtualNetworkStaticV6RoutesInterfaceToTerraform(struct!.interface),
    node_interface: virtualNetworkStaticV6RoutesNodeInterfaceToTerraform(struct!.nodeInterface),
  }
}


export function virtualNetworkStaticV6RoutesToHclTerraform(struct?: VirtualNetworkStaticV6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface: {
      value: virtualNetworkStaticV6RoutesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticV6RoutesInterfaceList",
    },
    node_interface: {
      value: virtualNetworkStaticV6RoutesNodeInterfaceToHclTerraform(struct!.nodeInterface),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkStaticV6RoutesNodeInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkStaticV6RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualNetworkStaticV6Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nodeInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInterface = this._nodeInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkStaticV6Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._ipPrefixes = undefined;
      this._interface.internalValue = undefined;
      this._nodeInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._ipPrefixes = value.ipPrefixes;
      this._interface.internalValue = value.interface;
      this._nodeInterface.internalValue = value.nodeInterface;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: boolean | cdktf.IResolvable; 
  public get defaultGateway() {
    return this.getBooleanAttribute('default_gateway');
  }
  public set defaultGateway(value: boolean | cdktf.IResolvable) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VirtualNetworkStaticV6RoutesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VirtualNetworkStaticV6RoutesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // node_interface - computed: false, optional: true, required: false
  private _nodeInterface = new VirtualNetworkStaticV6RoutesNodeInterfaceOutputReference(this, "node_interface");
  public get nodeInterface() {
    return this._nodeInterface;
  }
  public putNodeInterface(value: VirtualNetworkStaticV6RoutesNodeInterface) {
    this._nodeInterface.internalValue = value;
  }
  public resetNodeInterface() {
    this._nodeInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInterfaceInput() {
    return this._nodeInterface.internalValue;
  }
}

export class VirtualNetworkStaticV6RoutesList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkStaticV6Routes[] | cdktf.IResolvable

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
  public get(index: number): VirtualNetworkStaticV6RoutesOutputReference {
    return new VirtualNetworkStaticV6RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network volterra_virtual_network}
*/
export class VirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetwork to import
  * @param importFromId The id of the existing VirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/virtual_network volterra_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._globalNetwork = config.globalNetwork;
    this._id = config.id;
    this._labels = config.labels;
    this._legacyType = config.legacyType;
    this._name = config.name;
    this._namespace = config.namespace;
    this._siteLocalInsideNetwork = config.siteLocalInsideNetwork;
    this._siteLocalNetwork = config.siteLocalNetwork;
    this._srv6Network.internalValue = config.srv6Network;
    this._staticRoutes.internalValue = config.staticRoutes;
    this._staticV6Routes.internalValue = config.staticV6Routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // global_network - computed: false, optional: true, required: false
  private _globalNetwork?: boolean | cdktf.IResolvable; 
  public get globalNetwork() {
    return this.getBooleanAttribute('global_network');
  }
  public set globalNetwork(value: boolean | cdktf.IResolvable) {
    this._globalNetwork = value;
  }
  public resetGlobalNetwork() {
    this._globalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkInput() {
    return this._globalNetwork;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // legacy_type - computed: false, optional: true, required: false
  private _legacyType?: string; 
  public get legacyType() {
    return this.getStringAttribute('legacy_type');
  }
  public set legacyType(value: string) {
    this._legacyType = value;
  }
  public resetLegacyType() {
    this._legacyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyTypeInput() {
    return this._legacyType;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // srv6_network - computed: false, optional: true, required: false
  private _srv6Network = new VirtualNetworkSrv6NetworkOutputReference(this, "srv6_network");
  public get srv6Network() {
    return this._srv6Network;
  }
  public putSrv6Network(value: VirtualNetworkSrv6Network) {
    this._srv6Network.internalValue = value;
  }
  public resetSrv6Network() {
    this._srv6Network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srv6NetworkInput() {
    return this._srv6Network.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new VirtualNetworkStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VirtualNetworkStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // static_v6_routes - computed: false, optional: true, required: false
  private _staticV6Routes = new VirtualNetworkStaticV6RoutesList(this, "static_v6_routes", false);
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: VirtualNetworkStaticV6Routes[] | cdktf.IResolvable) {
    this._staticV6Routes.internalValue = value;
  }
  public resetStaticV6Routes() {
    this._staticV6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticV6RoutesInput() {
    return this._staticV6Routes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      global_network: cdktf.booleanToTerraform(this._globalNetwork),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      legacy_type: cdktf.stringToTerraform(this._legacyType),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      site_local_inside_network: cdktf.booleanToTerraform(this._siteLocalInsideNetwork),
      site_local_network: cdktf.booleanToTerraform(this._siteLocalNetwork),
      srv6_network: virtualNetworkSrv6NetworkToTerraform(this._srv6Network.internalValue),
      static_routes: cdktf.listMapper(virtualNetworkStaticRoutesToTerraform, true)(this._staticRoutes.internalValue),
      static_v6_routes: cdktf.listMapper(virtualNetworkStaticV6RoutesToTerraform, true)(this._staticV6Routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_network: {
        value: cdktf.booleanToHclTerraform(this._globalNetwork),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      legacy_type: {
        value: cdktf.stringToHclTerraform(this._legacyType),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_local_inside_network: {
        value: cdktf.booleanToHclTerraform(this._siteLocalInsideNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_local_network: {
        value: cdktf.booleanToHclTerraform(this._siteLocalNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srv6_network: {
        value: virtualNetworkSrv6NetworkToHclTerraform(this._srv6Network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkSrv6NetworkList",
      },
      static_routes: {
        value: cdktf.listMapperHcl(virtualNetworkStaticRoutesToHclTerraform, true)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkStaticRoutesList",
      },
      static_v6_routes: {
        value: cdktf.listMapperHcl(virtualNetworkStaticV6RoutesToHclTerraform, true)(this._staticV6Routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkStaticV6RoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
