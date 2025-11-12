// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#description RoutesV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#external_routing_domain_reference RoutesV2#external_routing_domain_reference}
  */
  readonly externalRoutingDomainReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#id RoutesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#name RoutesV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#route_table_ext_id RoutesV2#route_table_ext_id}
  */
  readonly routeTableExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#route_table_reference RoutesV2#route_table_reference}
  */
  readonly routeTableReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#route_type RoutesV2#route_type}
  */
  readonly routeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#vpc_reference RoutesV2#vpc_reference}
  */
  readonly vpcReference?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#destination RoutesV2#destination}
  */
  readonly destination?: RoutesV2Destination;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#metadata RoutesV2#metadata}
  */
  readonly metadata?: RoutesV2Metadata;
  /**
  * next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#next_hop RoutesV2#next_hop}
  */
  readonly nextHop?: RoutesV2NextHop;
}
export interface RoutesV2Links {
}

export function routesV2LinksToTerraform(struct?: RoutesV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function routesV2LinksToHclTerraform(struct?: RoutesV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RoutesV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutesV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class RoutesV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): RoutesV2LinksOutputReference {
    return new RoutesV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutesV2DestinationIpv4Ip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#prefix_length RoutesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#value RoutesV2#value}
  */
  readonly value: string;
}

export function routesV2DestinationIpv4IpToTerraform(struct?: RoutesV2DestinationIpv4IpOutputReference | RoutesV2DestinationIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routesV2DestinationIpv4IpToHclTerraform(struct?: RoutesV2DestinationIpv4IpOutputReference | RoutesV2DestinationIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class RoutesV2DestinationIpv4IpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2DestinationIpv4Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2DestinationIpv4Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RoutesV2DestinationIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#prefix_length RoutesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#ip RoutesV2#ip}
  */
  readonly ip: RoutesV2DestinationIpv4Ip;
}

export function routesV2DestinationIpv4ToTerraform(struct?: RoutesV2DestinationIpv4OutputReference | RoutesV2DestinationIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    ip: routesV2DestinationIpv4IpToTerraform(struct!.ip),
  }
}


export function routesV2DestinationIpv4ToHclTerraform(struct?: RoutesV2DestinationIpv4OutputReference | RoutesV2DestinationIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: routesV2DestinationIpv4IpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2DestinationIpv4IpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesV2DestinationIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2DestinationIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2DestinationIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._ip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._ip.internalValue = value.ip;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new RoutesV2DestinationIpv4IpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: RoutesV2DestinationIpv4Ip) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}
export interface RoutesV2DestinationIpv6Ip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#prefix_length RoutesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#value RoutesV2#value}
  */
  readonly value: string;
}

export function routesV2DestinationIpv6IpToTerraform(struct?: RoutesV2DestinationIpv6IpOutputReference | RoutesV2DestinationIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routesV2DestinationIpv6IpToHclTerraform(struct?: RoutesV2DestinationIpv6IpOutputReference | RoutesV2DestinationIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class RoutesV2DestinationIpv6IpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2DestinationIpv6Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2DestinationIpv6Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RoutesV2DestinationIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#prefix_length RoutesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#ip RoutesV2#ip}
  */
  readonly ip: RoutesV2DestinationIpv6Ip;
}

export function routesV2DestinationIpv6ToTerraform(struct?: RoutesV2DestinationIpv6OutputReference | RoutesV2DestinationIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    ip: routesV2DestinationIpv6IpToTerraform(struct!.ip),
  }
}


export function routesV2DestinationIpv6ToHclTerraform(struct?: RoutesV2DestinationIpv6OutputReference | RoutesV2DestinationIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: routesV2DestinationIpv6IpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2DestinationIpv6IpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesV2DestinationIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2DestinationIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2DestinationIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._ip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._ip.internalValue = value.ip;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new RoutesV2DestinationIpv6IpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: RoutesV2DestinationIpv6Ip) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}
export interface RoutesV2Destination {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#ipv4 RoutesV2#ipv4}
  */
  readonly ipv4?: RoutesV2DestinationIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#ipv6 RoutesV2#ipv6}
  */
  readonly ipv6?: RoutesV2DestinationIpv6;
}

export function routesV2DestinationToTerraform(struct?: RoutesV2DestinationOutputReference | RoutesV2Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: routesV2DestinationIpv4ToTerraform(struct!.ipv4),
    ipv6: routesV2DestinationIpv6ToTerraform(struct!.ipv6),
  }
}


export function routesV2DestinationToHclTerraform(struct?: RoutesV2DestinationOutputReference | RoutesV2Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: routesV2DestinationIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2DestinationIpv4List",
    },
    ipv6: {
      value: routesV2DestinationIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2DestinationIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesV2DestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new RoutesV2DestinationIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: RoutesV2DestinationIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new RoutesV2DestinationIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RoutesV2DestinationIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface RoutesV2Metadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#category_ids RoutesV2#category_ids}
  */
  readonly categoryIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#owner_reference_id RoutesV2#owner_reference_id}
  */
  readonly ownerReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#owner_user_name RoutesV2#owner_user_name}
  */
  readonly ownerUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#project_name RoutesV2#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#project_reference_id RoutesV2#project_reference_id}
  */
  readonly projectReferenceId?: string;
}

export function routesV2MetadataToTerraform(struct?: RoutesV2MetadataOutputReference | RoutesV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryIds),
    owner_reference_id: cdktf.stringToTerraform(struct!.ownerReferenceId),
    owner_user_name: cdktf.stringToTerraform(struct!.ownerUserName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    project_reference_id: cdktf.stringToTerraform(struct!.projectReferenceId),
  }
}


export function routesV2MetadataToHclTerraform(struct?: RoutesV2MetadataOutputReference | RoutesV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categoryIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner_reference_id: {
      value: cdktf.stringToHclTerraform(struct!.ownerReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_user_name: {
      value: cdktf.stringToHclTerraform(struct!.ownerUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_reference_id: {
      value: cdktf.stringToHclTerraform(struct!.projectReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesV2MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryIds = this._categoryIds;
    }
    if (this._ownerReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerReferenceId = this._ownerReferenceId;
    }
    if (this._ownerUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUserName = this._ownerUserName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._projectReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectReferenceId = this._projectReferenceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryIds = undefined;
      this._ownerReferenceId = undefined;
      this._ownerUserName = undefined;
      this._projectName = undefined;
      this._projectReferenceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryIds = value.categoryIds;
      this._ownerReferenceId = value.ownerReferenceId;
      this._ownerUserName = value.ownerUserName;
      this._projectName = value.projectName;
      this._projectReferenceId = value.projectReferenceId;
    }
  }

  // category_ids - computed: true, optional: true, required: false
  private _categoryIds?: string[]; 
  public get categoryIds() {
    return this.getListAttribute('category_ids');
  }
  public set categoryIds(value: string[]) {
    this._categoryIds = value;
  }
  public resetCategoryIds() {
    this._categoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdsInput() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: true, required: false
  private _ownerReferenceId?: string; 
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }
  public set ownerReferenceId(value: string) {
    this._ownerReferenceId = value;
  }
  public resetOwnerReferenceId() {
    this._ownerReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceIdInput() {
    return this._ownerReferenceId;
  }

  // owner_user_name - computed: true, optional: true, required: false
  private _ownerUserName?: string; 
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }
  public set ownerUserName(value: string) {
    this._ownerUserName = value;
  }
  public resetOwnerUserName() {
    this._ownerUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserNameInput() {
    return this._ownerUserName;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_reference_id - computed: true, optional: true, required: false
  private _projectReferenceId?: string; 
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
  public set projectReferenceId(value: string) {
    this._projectReferenceId = value;
  }
  public resetProjectReferenceId() {
    this._projectReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceIdInput() {
    return this._projectReferenceId;
  }
}
export interface RoutesV2NextHopNextHopIpAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#prefix_length RoutesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#value RoutesV2#value}
  */
  readonly value: string;
}

export function routesV2NextHopNextHopIpAddressIpv4ToTerraform(struct?: RoutesV2NextHopNextHopIpAddressIpv4OutputReference | RoutesV2NextHopNextHopIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routesV2NextHopNextHopIpAddressIpv4ToHclTerraform(struct?: RoutesV2NextHopNextHopIpAddressIpv4OutputReference | RoutesV2NextHopNextHopIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class RoutesV2NextHopNextHopIpAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2NextHopNextHopIpAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2NextHopNextHopIpAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RoutesV2NextHopNextHopIpAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#prefix_length RoutesV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#value RoutesV2#value}
  */
  readonly value: string;
}

export function routesV2NextHopNextHopIpAddressIpv6ToTerraform(struct?: RoutesV2NextHopNextHopIpAddressIpv6OutputReference | RoutesV2NextHopNextHopIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routesV2NextHopNextHopIpAddressIpv6ToHclTerraform(struct?: RoutesV2NextHopNextHopIpAddressIpv6OutputReference | RoutesV2NextHopNextHopIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class RoutesV2NextHopNextHopIpAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2NextHopNextHopIpAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2NextHopNextHopIpAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RoutesV2NextHopNextHopIpAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#ipv4 RoutesV2#ipv4}
  */
  readonly ipv4: RoutesV2NextHopNextHopIpAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#ipv6 RoutesV2#ipv6}
  */
  readonly ipv6: RoutesV2NextHopNextHopIpAddressIpv6;
}

export function routesV2NextHopNextHopIpAddressToTerraform(struct?: RoutesV2NextHopNextHopIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: routesV2NextHopNextHopIpAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: routesV2NextHopNextHopIpAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function routesV2NextHopNextHopIpAddressToHclTerraform(struct?: RoutesV2NextHopNextHopIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: routesV2NextHopNextHopIpAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2NextHopNextHopIpAddressIpv4List",
    },
    ipv6: {
      value: routesV2NextHopNextHopIpAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2NextHopNextHopIpAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesV2NextHopNextHopIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutesV2NextHopNextHopIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2NextHopNextHopIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4 = new RoutesV2NextHopNextHopIpAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: RoutesV2NextHopNextHopIpAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6 = new RoutesV2NextHopNextHopIpAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RoutesV2NextHopNextHopIpAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class RoutesV2NextHopNextHopIpAddressList extends cdktf.ComplexList {
  public internalValue? : RoutesV2NextHopNextHopIpAddress[] | cdktf.IResolvable

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
  public get(index: number): RoutesV2NextHopNextHopIpAddressOutputReference {
    return new RoutesV2NextHopNextHopIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutesV2NextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#next_hop_reference RoutesV2#next_hop_reference}
  */
  readonly nextHopReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#next_hop_type RoutesV2#next_hop_type}
  */
  readonly nextHopType: string;
  /**
  * next_hop_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#next_hop_ip_address RoutesV2#next_hop_ip_address}
  */
  readonly nextHopIpAddress?: RoutesV2NextHopNextHopIpAddress[] | cdktf.IResolvable;
}

export function routesV2NextHopToTerraform(struct?: RoutesV2NextHopOutputReference | RoutesV2NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop_reference: cdktf.stringToTerraform(struct!.nextHopReference),
    next_hop_type: cdktf.stringToTerraform(struct!.nextHopType),
    next_hop_ip_address: cdktf.listMapper(routesV2NextHopNextHopIpAddressToTerraform, true)(struct!.nextHopIpAddress),
  }
}


export function routesV2NextHopToHclTerraform(struct?: RoutesV2NextHopOutputReference | RoutesV2NextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop_reference: {
      value: cdktf.stringToHclTerraform(struct!.nextHopReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_type: {
      value: cdktf.stringToHclTerraform(struct!.nextHopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_ip_address: {
      value: cdktf.listMapperHcl(routesV2NextHopNextHopIpAddressToHclTerraform, true)(struct!.nextHopIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "RoutesV2NextHopNextHopIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutesV2NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutesV2NextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHopReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopReference = this._nextHopReference;
    }
    if (this._nextHopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopType = this._nextHopType;
    }
    if (this._nextHopIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIpAddress = this._nextHopIpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutesV2NextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextHopReference = undefined;
      this._nextHopType = undefined;
      this._nextHopIpAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextHopReference = value.nextHopReference;
      this._nextHopType = value.nextHopType;
      this._nextHopIpAddress.internalValue = value.nextHopIpAddress;
    }
  }

  // next_hop_name - computed: true, optional: false, required: false
  public get nextHopName() {
    return this.getStringAttribute('next_hop_name');
  }

  // next_hop_reference - computed: true, optional: true, required: false
  private _nextHopReference?: string; 
  public get nextHopReference() {
    return this.getStringAttribute('next_hop_reference');
  }
  public set nextHopReference(value: string) {
    this._nextHopReference = value;
  }
  public resetNextHopReference() {
    this._nextHopReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopReferenceInput() {
    return this._nextHopReference;
  }

  // next_hop_type - computed: false, optional: false, required: true
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }

  // next_hop_ip_address - computed: false, optional: true, required: false
  private _nextHopIpAddress = new RoutesV2NextHopNextHopIpAddressList(this, "next_hop_ip_address", false);
  public get nextHopIpAddress() {
    return this._nextHopIpAddress;
  }
  public putNextHopIpAddress(value: RoutesV2NextHopNextHopIpAddress[] | cdktf.IResolvable) {
    this._nextHopIpAddress.internalValue = value;
  }
  public resetNextHopIpAddress() {
    this._nextHopIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpAddressInput() {
    return this._nextHopIpAddress.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2 nutanix_routes_v2}
*/
export class RoutesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_routes_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutesV2 to import
  * @param importFromId The id of the existing RoutesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_routes_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/routes_v2 nutanix_routes_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutesV2Config
  */
  public constructor(scope: Construct, id: string, config: RoutesV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_routes_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._externalRoutingDomainReference = config.externalRoutingDomainReference;
    this._id = config.id;
    this._name = config.name;
    this._routeTableExtId = config.routeTableExtId;
    this._routeTableReference = config.routeTableReference;
    this._routeType = config.routeType;
    this._vpcReference = config.vpcReference;
    this._destination.internalValue = config.destination;
    this._metadata.internalValue = config.metadata;
    this._nextHop.internalValue = config.nextHop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // external_routing_domain_reference - computed: true, optional: true, required: false
  private _externalRoutingDomainReference?: string; 
  public get externalRoutingDomainReference() {
    return this.getStringAttribute('external_routing_domain_reference');
  }
  public set externalRoutingDomainReference(value: string) {
    this._externalRoutingDomainReference = value;
  }
  public resetExternalRoutingDomainReference() {
    this._externalRoutingDomainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRoutingDomainReferenceInput() {
    return this._externalRoutingDomainReference;
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

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // links - computed: true, optional: false, required: false
  private _links = new RoutesV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // route_table_ext_id - computed: false, optional: false, required: true
  private _routeTableExtId?: string; 
  public get routeTableExtId() {
    return this.getStringAttribute('route_table_ext_id');
  }
  public set routeTableExtId(value: string) {
    this._routeTableExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableExtIdInput() {
    return this._routeTableExtId;
  }

  // route_table_reference - computed: true, optional: true, required: false
  private _routeTableReference?: string; 
  public get routeTableReference() {
    return this.getStringAttribute('route_table_reference');
  }
  public set routeTableReference(value: string) {
    this._routeTableReference = value;
  }
  public resetRouteTableReference() {
    this._routeTableReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableReferenceInput() {
    return this._routeTableReference;
  }

  // route_type - computed: false, optional: false, required: true
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vpc_reference - computed: true, optional: true, required: false
  private _vpcReference?: string; 
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }
  public set vpcReference(value: string) {
    this._vpcReference = value;
  }
  public resetVpcReference() {
    this._vpcReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceInput() {
    return this._vpcReference;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new RoutesV2DestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: RoutesV2Destination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new RoutesV2MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: RoutesV2Metadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new RoutesV2NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: RoutesV2NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_routing_domain_reference: cdktf.stringToTerraform(this._externalRoutingDomainReference),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      route_table_ext_id: cdktf.stringToTerraform(this._routeTableExtId),
      route_table_reference: cdktf.stringToTerraform(this._routeTableReference),
      route_type: cdktf.stringToTerraform(this._routeType),
      vpc_reference: cdktf.stringToTerraform(this._vpcReference),
      destination: routesV2DestinationToTerraform(this._destination.internalValue),
      metadata: routesV2MetadataToTerraform(this._metadata.internalValue),
      next_hop: routesV2NextHopToTerraform(this._nextHop.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_routing_domain_reference: {
        value: cdktf.stringToHclTerraform(this._externalRoutingDomainReference),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_ext_id: {
        value: cdktf.stringToHclTerraform(this._routeTableExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_reference: {
        value: cdktf.stringToHclTerraform(this._routeTableReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_type: {
        value: cdktf.stringToHclTerraform(this._routeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference: {
        value: cdktf.stringToHclTerraform(this._vpcReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: routesV2DestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutesV2DestinationList",
      },
      metadata: {
        value: routesV2MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutesV2MetadataList",
      },
      next_hop: {
        value: routesV2NextHopToHclTerraform(this._nextHop.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutesV2NextHopList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
