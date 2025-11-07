// https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#description Network#description}
  */
  readonly description?: string;
  /**
  * Enable broadcast packets on the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#enable_broadcast Network#enable_broadcast}
  */
  readonly enableBroadcast?: boolean | cdktf.IResolvable;
  /**
  * The layer 2 flow rules to apply to packets traveling across this network. Please see https://www.zerotier.com/manual/#3_4_1 for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#flow_rules Network#flow_rules}
  */
  readonly flowRules?: string;
  /**
  * ZeroTier's internal network identifier, aka NetworkID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#id Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of recipients per multicast or broadcast. Warning - Setting this to 0 will disable IPv4 communication on your network!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#multicast_limit Network#multicast_limit}
  */
  readonly multicastLimit?: number;
  /**
  * The name of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#name Network#name}
  */
  readonly name?: string;
  /**
  * Whether or not the network is private.  If false, members will *NOT* need to be authorized to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#private Network#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * assign_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#assign_ipv4 Network#assign_ipv4}
  */
  readonly assignIpv4?: NetworkAssignIpv4[] | cdktf.IResolvable;
  /**
  * assign_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#assign_ipv6 Network#assign_ipv6}
  */
  readonly assignIpv6?: NetworkAssignIpv6[] | cdktf.IResolvable;
  /**
  * assignment_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#assignment_pool Network#assignment_pool}
  */
  readonly assignmentPool?: NetworkAssignmentPool[] | cdktf.IResolvable;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#dns Network#dns}
  */
  readonly dns?: NetworkDns[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#route Network#route}
  */
  readonly route?: NetworkRoute[] | cdktf.IResolvable;
}
export interface NetworkAssignIpv4 {
  /**
  * Use zerotier ipv4 addressing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#zerotier Network#zerotier}
  */
  readonly zerotier?: boolean | cdktf.IResolvable;
}

export function networkAssignIpv4ToTerraform(struct?: NetworkAssignIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zerotier: cdktf.booleanToTerraform(struct!.zerotier),
  }
}


export function networkAssignIpv4ToHclTerraform(struct?: NetworkAssignIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zerotier: {
      value: cdktf.booleanToHclTerraform(struct!.zerotier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAssignIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAssignIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zerotier !== undefined) {
      hasAnyValues = true;
      internalValueResult.zerotier = this._zerotier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAssignIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zerotier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zerotier = value.zerotier;
    }
  }

  // zerotier - computed: false, optional: true, required: false
  private _zerotier?: boolean | cdktf.IResolvable; 
  public get zerotier() {
    return this.getBooleanAttribute('zerotier');
  }
  public set zerotier(value: boolean | cdktf.IResolvable) {
    this._zerotier = value;
  }
  public resetZerotier() {
    this._zerotier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zerotierInput() {
    return this._zerotier;
  }
}

export class NetworkAssignIpv4List extends cdktf.ComplexList {
  public internalValue? : NetworkAssignIpv4[] | cdktf.IResolvable

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
  public get(index: number): NetworkAssignIpv4OutputReference {
    return new NetworkAssignIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAssignIpv6 {
  /**
  * RFC4193 addressing method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#rfc4193 Network#rfc4193}
  */
  readonly rfc4193?: boolean | cdktf.IResolvable;
  /**
  * 6PLANE addressing method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#sixplane Network#sixplane}
  */
  readonly sixplane?: boolean | cdktf.IResolvable;
  /**
  * Use zerotier ipv6 manual addressing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#zerotier Network#zerotier}
  */
  readonly zerotier?: boolean | cdktf.IResolvable;
}

export function networkAssignIpv6ToTerraform(struct?: NetworkAssignIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rfc4193: cdktf.booleanToTerraform(struct!.rfc4193),
    sixplane: cdktf.booleanToTerraform(struct!.sixplane),
    zerotier: cdktf.booleanToTerraform(struct!.zerotier),
  }
}


export function networkAssignIpv6ToHclTerraform(struct?: NetworkAssignIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rfc4193: {
      value: cdktf.booleanToHclTerraform(struct!.rfc4193),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sixplane: {
      value: cdktf.booleanToHclTerraform(struct!.sixplane),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zerotier: {
      value: cdktf.booleanToHclTerraform(struct!.zerotier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAssignIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAssignIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rfc4193 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc4193 = this._rfc4193;
    }
    if (this._sixplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixplane = this._sixplane;
    }
    if (this._zerotier !== undefined) {
      hasAnyValues = true;
      internalValueResult.zerotier = this._zerotier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAssignIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rfc4193 = undefined;
      this._sixplane = undefined;
      this._zerotier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rfc4193 = value.rfc4193;
      this._sixplane = value.sixplane;
      this._zerotier = value.zerotier;
    }
  }

  // rfc4193 - computed: false, optional: true, required: false
  private _rfc4193?: boolean | cdktf.IResolvable; 
  public get rfc4193() {
    return this.getBooleanAttribute('rfc4193');
  }
  public set rfc4193(value: boolean | cdktf.IResolvable) {
    this._rfc4193 = value;
  }
  public resetRfc4193() {
    this._rfc4193 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc4193Input() {
    return this._rfc4193;
  }

  // sixplane - computed: false, optional: true, required: false
  private _sixplane?: boolean | cdktf.IResolvable; 
  public get sixplane() {
    return this.getBooleanAttribute('sixplane');
  }
  public set sixplane(value: boolean | cdktf.IResolvable) {
    this._sixplane = value;
  }
  public resetSixplane() {
    this._sixplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixplaneInput() {
    return this._sixplane;
  }

  // zerotier - computed: false, optional: true, required: false
  private _zerotier?: boolean | cdktf.IResolvable; 
  public get zerotier() {
    return this.getBooleanAttribute('zerotier');
  }
  public set zerotier(value: boolean | cdktf.IResolvable) {
    this._zerotier = value;
  }
  public resetZerotier() {
    this._zerotier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zerotierInput() {
    return this._zerotier;
  }
}

export class NetworkAssignIpv6List extends cdktf.ComplexList {
  public internalValue? : NetworkAssignIpv6[] | cdktf.IResolvable

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
  public get(index: number): NetworkAssignIpv6OutputReference {
    return new NetworkAssignIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAssignmentPool {
  /**
  * The last address in the assignment rule. This must be the highest number in the pool. end must also be accompanied by start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#end Network#end}
  */
  readonly end?: string;
  /**
  * The first address in the assignment rule. This must be the lowest number in the pool. `start` must also be accompanied by `end`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#start Network#start}
  */
  readonly start?: string;
}

export function networkAssignmentPoolToTerraform(struct?: NetworkAssignmentPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function networkAssignmentPoolToHclTerraform(struct?: NetworkAssignmentPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAssignmentPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAssignmentPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAssignmentPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class NetworkAssignmentPoolList extends cdktf.ComplexList {
  public internalValue? : NetworkAssignmentPool[] | cdktf.IResolvable

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
  public get(index: number): NetworkAssignmentPoolOutputReference {
    return new NetworkAssignmentPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDns {
  /**
  * Domain suffix for DNS searches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#domain Network#domain}
  */
  readonly domain: string;
  /**
  * Nameservers to send DNS requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#servers Network#servers}
  */
  readonly servers: string[];
}

export function networkDnsToTerraform(struct?: NetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function networkDnsToHclTerraform(struct?: NetworkDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._servers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._servers = value.servers;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}

export class NetworkDnsList extends cdktf.ComplexList {
  public internalValue? : NetworkDns[] | cdktf.IResolvable

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
  public get(index: number): NetworkDnsOutputReference {
    return new NetworkDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkRoute {
  /**
  * Network to route for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#target Network#target}
  */
  readonly target: string;
  /**
  * Gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#via Network#via}
  */
  readonly via?: string;
}

export function networkRouteToTerraform(struct?: NetworkRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function networkRouteToHclTerraform(struct?: NetworkRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._via = value.via;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // via - computed: false, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class NetworkRouteList extends cdktf.ComplexList {
  public internalValue? : NetworkRoute[] | cdktf.IResolvable

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
  public get(index: number): NetworkRouteOutputReference {
    return new NetworkRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network zerotier_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zerotier_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zerotier_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/network zerotier_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zerotier_network',
      terraformGeneratorMetadata: {
        providerName: 'zerotier',
        providerVersion: '1.6.0'
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
    this._enableBroadcast = config.enableBroadcast;
    this._flowRules = config.flowRules;
    this._id = config.id;
    this._multicastLimit = config.multicastLimit;
    this._name = config.name;
    this._private = config.private;
    this._assignIpv4.internalValue = config.assignIpv4;
    this._assignIpv6.internalValue = config.assignIpv6;
    this._assignmentPool.internalValue = config.assignmentPool;
    this._dns.internalValue = config.dns;
    this._route.internalValue = config.route;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
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

  // enable_broadcast - computed: false, optional: true, required: false
  private _enableBroadcast?: boolean | cdktf.IResolvable; 
  public get enableBroadcast() {
    return this.getBooleanAttribute('enable_broadcast');
  }
  public set enableBroadcast(value: boolean | cdktf.IResolvable) {
    this._enableBroadcast = value;
  }
  public resetEnableBroadcast() {
    this._enableBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBroadcastInput() {
    return this._enableBroadcast;
  }

  // flow_rules - computed: false, optional: true, required: false
  private _flowRules?: string; 
  public get flowRules() {
    return this.getStringAttribute('flow_rules');
  }
  public set flowRules(value: string) {
    this._flowRules = value;
  }
  public resetFlowRules() {
    this._flowRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowRulesInput() {
    return this._flowRules;
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

  // multicast_limit - computed: false, optional: true, required: false
  private _multicastLimit?: number; 
  public get multicastLimit() {
    return this.getNumberAttribute('multicast_limit');
  }
  public set multicastLimit(value: number) {
    this._multicastLimit = value;
  }
  public resetMulticastLimit() {
    this._multicastLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastLimitInput() {
    return this._multicastLimit;
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

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // assign_ipv4 - computed: false, optional: true, required: false
  private _assignIpv4 = new NetworkAssignIpv4List(this, "assign_ipv4", true);
  public get assignIpv4() {
    return this._assignIpv4;
  }
  public putAssignIpv4(value: NetworkAssignIpv4[] | cdktf.IResolvable) {
    this._assignIpv4.internalValue = value;
  }
  public resetAssignIpv4() {
    this._assignIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv4Input() {
    return this._assignIpv4.internalValue;
  }

  // assign_ipv6 - computed: false, optional: true, required: false
  private _assignIpv6 = new NetworkAssignIpv6List(this, "assign_ipv6", true);
  public get assignIpv6() {
    return this._assignIpv6;
  }
  public putAssignIpv6(value: NetworkAssignIpv6[] | cdktf.IResolvable) {
    this._assignIpv6.internalValue = value;
  }
  public resetAssignIpv6() {
    this._assignIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6Input() {
    return this._assignIpv6.internalValue;
  }

  // assignment_pool - computed: false, optional: true, required: false
  private _assignmentPool = new NetworkAssignmentPoolList(this, "assignment_pool", true);
  public get assignmentPool() {
    return this._assignmentPool;
  }
  public putAssignmentPool(value: NetworkAssignmentPool[] | cdktf.IResolvable) {
    this._assignmentPool.internalValue = value;
  }
  public resetAssignmentPool() {
    this._assignmentPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPoolInput() {
    return this._assignmentPool.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new NetworkDnsList(this, "dns", true);
  public get dns() {
    return this._dns;
  }
  public putDns(value: NetworkDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new NetworkRouteList(this, "route", true);
  public get route() {
    return this._route;
  }
  public putRoute(value: NetworkRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_broadcast: cdktf.booleanToTerraform(this._enableBroadcast),
      flow_rules: cdktf.stringToTerraform(this._flowRules),
      id: cdktf.stringToTerraform(this._id),
      multicast_limit: cdktf.numberToTerraform(this._multicastLimit),
      name: cdktf.stringToTerraform(this._name),
      private: cdktf.booleanToTerraform(this._private),
      assign_ipv4: cdktf.listMapper(networkAssignIpv4ToTerraform, true)(this._assignIpv4.internalValue),
      assign_ipv6: cdktf.listMapper(networkAssignIpv6ToTerraform, true)(this._assignIpv6.internalValue),
      assignment_pool: cdktf.listMapper(networkAssignmentPoolToTerraform, true)(this._assignmentPool.internalValue),
      dns: cdktf.listMapper(networkDnsToTerraform, true)(this._dns.internalValue),
      route: cdktf.listMapper(networkRouteToTerraform, true)(this._route.internalValue),
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
      enable_broadcast: {
        value: cdktf.booleanToHclTerraform(this._enableBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flow_rules: {
        value: cdktf.stringToHclTerraform(this._flowRules),
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
      multicast_limit: {
        value: cdktf.numberToHclTerraform(this._multicastLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assign_ipv4: {
        value: cdktf.listMapperHcl(networkAssignIpv4ToHclTerraform, true)(this._assignIpv4.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkAssignIpv4List",
      },
      assign_ipv6: {
        value: cdktf.listMapperHcl(networkAssignIpv6ToHclTerraform, true)(this._assignIpv6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkAssignIpv6List",
      },
      assignment_pool: {
        value: cdktf.listMapperHcl(networkAssignmentPoolToHclTerraform, true)(this._assignmentPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkAssignmentPoolList",
      },
      dns: {
        value: cdktf.listMapperHcl(networkDnsToHclTerraform, true)(this._dns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkDnsList",
      },
      route: {
        value: cdktf.listMapperHcl(networkRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
