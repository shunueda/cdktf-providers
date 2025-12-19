// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVeIpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#id InterfaceVeIpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ifnum InterfaceVeIpv6A#ifnum}
  */
  readonly ifnum: string;
  /**
  * ACL applied on incoming packets to this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#inbound InterfaceVeIpv6A#inbound}
  */
  readonly inbound?: number;
  /**
  * Configure interface as NAT inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#inside InterfaceVeIpv6A#inside}
  */
  readonly inside?: number;
  /**
  * Enable IPv6 processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ipv6_enable InterfaceVeIpv6A#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * Configure interface as NAT outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#outside InterfaceVeIpv6A#outside}
  */
  readonly outside?: number;
  /**
  * Ignore TTL decrement for a received packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ttl_ignore InterfaceVeIpv6A#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#uuid InterfaceVeIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * Apply ACL rules to incoming packets on this interface (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#v6_acl_name InterfaceVeIpv6A#v6_acl_name}
  */
  readonly v6AclName?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#address_list InterfaceVeIpv6A#address_list}
  */
  readonly addressList?: InterfaceVeIpv6AddressListStructA[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ospf InterfaceVeIpv6A#ospf}
  */
  readonly ospf?: InterfaceVeIpv6OspfA;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#rip InterfaceVeIpv6A#rip}
  */
  readonly rip?: InterfaceVeIpv6RipA;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#router InterfaceVeIpv6A#router}
  */
  readonly router?: InterfaceVeIpv6RouterA;
  /**
  * router_adver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#router_adver InterfaceVeIpv6A#router_adver}
  */
  readonly routerAdver?: InterfaceVeIpv6RouterAdverA;
}
export interface InterfaceVeIpv6AddressListStructA {
  /**
  * 'anycast': Configure an IPv6 anycast address; 'link-local': Configure an IPv6 link local address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#address_type InterfaceVeIpv6A#address_type}
  */
  readonly addressType?: string;
  /**
  * Set the IPv6 address of an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ipv6_addr InterfaceVeIpv6A#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function interfaceVeIpv6AddressListStructAToTerraform(struct?: InterfaceVeIpv6AddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function interfaceVeIpv6AddressListStructAToHclTerraform(struct?: InterfaceVeIpv6AddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6AddressListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6AddressListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6AddressListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}

export class InterfaceVeIpv6AddressListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6AddressListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6AddressListStructAOutputReference {
    return new InterfaceVeIpv6AddressListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfCostCfgA {
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#cost InterfaceVeIpv6A#cost}
  */
  readonly cost?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceVeIpv6OspfCostCfgAToTerraform(struct?: InterfaceVeIpv6OspfCostCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceVeIpv6OspfCostCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfCostCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfCostCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfCostCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfCostCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._instanceId = value.instanceId;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceVeIpv6OspfCostCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfCostCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfCostCfgAOutputReference {
    return new InterfaceVeIpv6OspfCostCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfDeadIntervalCfgA {
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#dead_interval InterfaceVeIpv6A#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceVeIpv6OspfDeadIntervalCfgAToTerraform(struct?: InterfaceVeIpv6OspfDeadIntervalCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceVeIpv6OspfDeadIntervalCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfDeadIntervalCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfDeadIntervalCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfDeadIntervalCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfDeadIntervalCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadInterval = value.deadInterval;
      this._instanceId = value.instanceId;
    }
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceVeIpv6OspfDeadIntervalCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfDeadIntervalCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfDeadIntervalCfgAOutputReference {
    return new InterfaceVeIpv6OspfDeadIntervalCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfHelloIntervalCfgA {
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#hello_interval InterfaceVeIpv6A#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
}

export function interfaceVeIpv6OspfHelloIntervalCfgAToTerraform(struct?: InterfaceVeIpv6OspfHelloIntervalCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
  }
}


export function interfaceVeIpv6OspfHelloIntervalCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfHelloIntervalCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfHelloIntervalCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfHelloIntervalCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfHelloIntervalCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloInterval = undefined;
      this._instanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloInterval = value.helloInterval;
      this._instanceId = value.instanceId;
    }
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}

export class InterfaceVeIpv6OspfHelloIntervalCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfHelloIntervalCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfHelloIntervalCfgAOutputReference {
    return new InterfaceVeIpv6OspfHelloIntervalCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfMtuIgnoreCfgA {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#mtu_ignore InterfaceVeIpv6A#mtu_ignore}
  */
  readonly mtuIgnore?: number;
}

export function interfaceVeIpv6OspfMtuIgnoreCfgAToTerraform(struct?: InterfaceVeIpv6OspfMtuIgnoreCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
  }
}


export function interfaceVeIpv6OspfMtuIgnoreCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfMtuIgnoreCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfMtuIgnoreCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfMtuIgnoreCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfMtuIgnoreCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._mtuIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._mtuIgnore = value.mtuIgnore;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }
}

export class InterfaceVeIpv6OspfMtuIgnoreCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfMtuIgnoreCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfMtuIgnoreCfgAOutputReference {
    return new InterfaceVeIpv6OspfMtuIgnoreCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfNeighborCfgA {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#neig_inst InterfaceVeIpv6A#neig_inst}
  */
  readonly neigInst?: number;
  /**
  * OSPFv3 neighbor (Neighbor IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#neighbor InterfaceVeIpv6A#neighbor}
  */
  readonly neighbor?: string;
  /**
  * OSPF cost for point-to-multipoint neighbor (metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#neighbor_cost InterfaceVeIpv6A#neighbor_cost}
  */
  readonly neighborCost?: number;
  /**
  * OSPF dead-router polling interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#neighbor_poll_interval InterfaceVeIpv6A#neighbor_poll_interval}
  */
  readonly neighborPollInterval?: number;
  /**
  * OSPF priority of non-broadcast neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#neighbor_priority InterfaceVeIpv6A#neighbor_priority}
  */
  readonly neighborPriority?: number;
}

export function interfaceVeIpv6OspfNeighborCfgAToTerraform(struct?: InterfaceVeIpv6OspfNeighborCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neig_inst: cdktf.numberToTerraform(struct!.neigInst),
    neighbor: cdktf.stringToTerraform(struct!.neighbor),
    neighbor_cost: cdktf.numberToTerraform(struct!.neighborCost),
    neighbor_poll_interval: cdktf.numberToTerraform(struct!.neighborPollInterval),
    neighbor_priority: cdktf.numberToTerraform(struct!.neighborPriority),
  }
}


export function interfaceVeIpv6OspfNeighborCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfNeighborCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neig_inst: {
      value: cdktf.numberToHclTerraform(struct!.neigInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor: {
      value: cdktf.stringToHclTerraform(struct!.neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_cost: {
      value: cdktf.numberToHclTerraform(struct!.neighborCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.neighborPollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_priority: {
      value: cdktf.numberToHclTerraform(struct!.neighborPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfNeighborCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfNeighborCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neigInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.neigInst = this._neigInst;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._neighborCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCost = this._neighborCost;
    }
    if (this._neighborPollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPollInterval = this._neighborPollInterval;
    }
    if (this._neighborPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPriority = this._neighborPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfNeighborCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neigInst = undefined;
      this._neighbor = undefined;
      this._neighborCost = undefined;
      this._neighborPollInterval = undefined;
      this._neighborPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neigInst = value.neigInst;
      this._neighbor = value.neighbor;
      this._neighborCost = value.neighborCost;
      this._neighborPollInterval = value.neighborPollInterval;
      this._neighborPriority = value.neighborPriority;
    }
  }

  // neig_inst - computed: false, optional: true, required: false
  private _neigInst?: number; 
  public get neigInst() {
    return this.getNumberAttribute('neig_inst');
  }
  public set neigInst(value: number) {
    this._neigInst = value;
  }
  public resetNeigInst() {
    this._neigInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neigInstInput() {
    return this._neigInst;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string; 
  public get neighbor() {
    return this.getStringAttribute('neighbor');
  }
  public set neighbor(value: string) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // neighbor_cost - computed: false, optional: true, required: false
  private _neighborCost?: number; 
  public get neighborCost() {
    return this.getNumberAttribute('neighbor_cost');
  }
  public set neighborCost(value: number) {
    this._neighborCost = value;
  }
  public resetNeighborCost() {
    this._neighborCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCostInput() {
    return this._neighborCost;
  }

  // neighbor_poll_interval - computed: false, optional: true, required: false
  private _neighborPollInterval?: number; 
  public get neighborPollInterval() {
    return this.getNumberAttribute('neighbor_poll_interval');
  }
  public set neighborPollInterval(value: number) {
    this._neighborPollInterval = value;
  }
  public resetNeighborPollInterval() {
    this._neighborPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPollIntervalInput() {
    return this._neighborPollInterval;
  }

  // neighbor_priority - computed: false, optional: true, required: false
  private _neighborPriority?: number; 
  public get neighborPriority() {
    return this.getNumberAttribute('neighbor_priority');
  }
  public set neighborPriority(value: number) {
    this._neighborPriority = value;
  }
  public resetNeighborPriority() {
    this._neighborPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPriorityInput() {
    return this._neighborPriority;
  }
}

export class InterfaceVeIpv6OspfNeighborCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfNeighborCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfNeighborCfgAOutputReference {
    return new InterfaceVeIpv6OspfNeighborCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfNetworkListStructA {
  /**
  * 'broadcast': Specify OSPF broadcast multi-access network; 'non-broadcast': Specify OSPF NBMA network; 'point-to-point': Specify OSPF point-to-point network; 'point-to-multipoint': Specify OSPF point-to-multipoint network;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#broadcast_type InterfaceVeIpv6A#broadcast_type}
  */
  readonly broadcastType?: string;
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#network_instance_id InterfaceVeIpv6A#network_instance_id}
  */
  readonly networkInstanceId?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#p2mp_nbma InterfaceVeIpv6A#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
}

export function interfaceVeIpv6OspfNetworkListStructAToTerraform(struct?: InterfaceVeIpv6OspfNetworkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast_type: cdktf.stringToTerraform(struct!.broadcastType),
    network_instance_id: cdktf.numberToTerraform(struct!.networkInstanceId),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
  }
}


export function interfaceVeIpv6OspfNetworkListStructAToHclTerraform(struct?: InterfaceVeIpv6OspfNetworkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast_type: {
      value: cdktf.stringToHclTerraform(struct!.broadcastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.networkInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfNetworkListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfNetworkListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastType = this._broadcastType;
    }
    if (this._networkInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInstanceId = this._networkInstanceId;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfNetworkListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcastType = undefined;
      this._networkInstanceId = undefined;
      this._p2MpNbma = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcastType = value.broadcastType;
      this._networkInstanceId = value.networkInstanceId;
      this._p2MpNbma = value.p2MpNbma;
    }
  }

  // broadcast_type - computed: false, optional: true, required: false
  private _broadcastType?: string; 
  public get broadcastType() {
    return this.getStringAttribute('broadcast_type');
  }
  public set broadcastType(value: string) {
    this._broadcastType = value;
  }
  public resetBroadcastType() {
    this._broadcastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastTypeInput() {
    return this._broadcastType;
  }

  // network_instance_id - computed: false, optional: true, required: false
  private _networkInstanceId?: number; 
  public get networkInstanceId() {
    return this.getNumberAttribute('network_instance_id');
  }
  public set networkInstanceId(value: number) {
    this._networkInstanceId = value;
  }
  public resetNetworkInstanceId() {
    this._networkInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }
}

export class InterfaceVeIpv6OspfNetworkListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfNetworkListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfNetworkListStructAOutputReference {
    return new InterfaceVeIpv6OspfNetworkListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfPriorityCfgA {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#priority InterfaceVeIpv6A#priority}
  */
  readonly priority?: number;
}

export function interfaceVeIpv6OspfPriorityCfgAToTerraform(struct?: InterfaceVeIpv6OspfPriorityCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function interfaceVeIpv6OspfPriorityCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfPriorityCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfPriorityCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfPriorityCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfPriorityCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._priority = value.priority;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
}

export class InterfaceVeIpv6OspfPriorityCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfPriorityCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfPriorityCfgAOutputReference {
    return new InterfaceVeIpv6OspfPriorityCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfRetransmitIntervalCfgA {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#retransmit_interval InterfaceVeIpv6A#retransmit_interval}
  */
  readonly retransmitInterval?: number;
}

export function interfaceVeIpv6OspfRetransmitIntervalCfgAToTerraform(struct?: InterfaceVeIpv6OspfRetransmitIntervalCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
  }
}


export function interfaceVeIpv6OspfRetransmitIntervalCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfRetransmitIntervalCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfRetransmitIntervalCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfRetransmitIntervalCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfRetransmitIntervalCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._retransmitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._retransmitInterval = value.retransmitInterval;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }
}

export class InterfaceVeIpv6OspfRetransmitIntervalCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfRetransmitIntervalCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfRetransmitIntervalCfgAOutputReference {
    return new InterfaceVeIpv6OspfRetransmitIntervalCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfTransmitDelayCfgA {
  /**
  * Specify the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#transmit_delay InterfaceVeIpv6A#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function interfaceVeIpv6OspfTransmitDelayCfgAToTerraform(struct?: InterfaceVeIpv6OspfTransmitDelayCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function interfaceVeIpv6OspfTransmitDelayCfgAToHclTerraform(struct?: InterfaceVeIpv6OspfTransmitDelayCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfTransmitDelayCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6OspfTransmitDelayCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfTransmitDelayCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}

export class InterfaceVeIpv6OspfTransmitDelayCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6OspfTransmitDelayCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6OspfTransmitDelayCfgAOutputReference {
    return new InterfaceVeIpv6OspfTransmitDelayCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6OspfA {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#bfd InterfaceVeIpv6A#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#disable InterfaceVeIpv6A#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#uuid InterfaceVeIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * cost_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#cost_cfg InterfaceVeIpv6A#cost_cfg}
  */
  readonly costCfg?: InterfaceVeIpv6OspfCostCfgA[] | cdktf.IResolvable;
  /**
  * dead_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#dead_interval_cfg InterfaceVeIpv6A#dead_interval_cfg}
  */
  readonly deadIntervalCfg?: InterfaceVeIpv6OspfDeadIntervalCfgA[] | cdktf.IResolvable;
  /**
  * hello_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#hello_interval_cfg InterfaceVeIpv6A#hello_interval_cfg}
  */
  readonly helloIntervalCfg?: InterfaceVeIpv6OspfHelloIntervalCfgA[] | cdktf.IResolvable;
  /**
  * mtu_ignore_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#mtu_ignore_cfg InterfaceVeIpv6A#mtu_ignore_cfg}
  */
  readonly mtuIgnoreCfg?: InterfaceVeIpv6OspfMtuIgnoreCfgA[] | cdktf.IResolvable;
  /**
  * neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#neighbor_cfg InterfaceVeIpv6A#neighbor_cfg}
  */
  readonly neighborCfg?: InterfaceVeIpv6OspfNeighborCfgA[] | cdktf.IResolvable;
  /**
  * network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#network_list InterfaceVeIpv6A#network_list}
  */
  readonly networkList?: InterfaceVeIpv6OspfNetworkListStructA[] | cdktf.IResolvable;
  /**
  * priority_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#priority_cfg InterfaceVeIpv6A#priority_cfg}
  */
  readonly priorityCfg?: InterfaceVeIpv6OspfPriorityCfgA[] | cdktf.IResolvable;
  /**
  * retransmit_interval_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#retransmit_interval_cfg InterfaceVeIpv6A#retransmit_interval_cfg}
  */
  readonly retransmitIntervalCfg?: InterfaceVeIpv6OspfRetransmitIntervalCfgA[] | cdktf.IResolvable;
  /**
  * transmit_delay_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#transmit_delay_cfg InterfaceVeIpv6A#transmit_delay_cfg}
  */
  readonly transmitDelayCfg?: InterfaceVeIpv6OspfTransmitDelayCfgA[] | cdktf.IResolvable;
}

export function interfaceVeIpv6OspfAToTerraform(struct?: InterfaceVeIpv6OspfAOutputReference | InterfaceVeIpv6OspfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cost_cfg: cdktf.listMapper(interfaceVeIpv6OspfCostCfgAToTerraform, true)(struct!.costCfg),
    dead_interval_cfg: cdktf.listMapper(interfaceVeIpv6OspfDeadIntervalCfgAToTerraform, true)(struct!.deadIntervalCfg),
    hello_interval_cfg: cdktf.listMapper(interfaceVeIpv6OspfHelloIntervalCfgAToTerraform, true)(struct!.helloIntervalCfg),
    mtu_ignore_cfg: cdktf.listMapper(interfaceVeIpv6OspfMtuIgnoreCfgAToTerraform, true)(struct!.mtuIgnoreCfg),
    neighbor_cfg: cdktf.listMapper(interfaceVeIpv6OspfNeighborCfgAToTerraform, true)(struct!.neighborCfg),
    network_list: cdktf.listMapper(interfaceVeIpv6OspfNetworkListStructAToTerraform, true)(struct!.networkList),
    priority_cfg: cdktf.listMapper(interfaceVeIpv6OspfPriorityCfgAToTerraform, true)(struct!.priorityCfg),
    retransmit_interval_cfg: cdktf.listMapper(interfaceVeIpv6OspfRetransmitIntervalCfgAToTerraform, true)(struct!.retransmitIntervalCfg),
    transmit_delay_cfg: cdktf.listMapper(interfaceVeIpv6OspfTransmitDelayCfgAToTerraform, true)(struct!.transmitDelayCfg),
  }
}


export function interfaceVeIpv6OspfAToHclTerraform(struct?: InterfaceVeIpv6OspfAOutputReference | InterfaceVeIpv6OspfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
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
    cost_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfCostCfgAToHclTerraform, true)(struct!.costCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfCostCfgAList",
    },
    dead_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfDeadIntervalCfgAToHclTerraform, true)(struct!.deadIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfDeadIntervalCfgAList",
    },
    hello_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfHelloIntervalCfgAToHclTerraform, true)(struct!.helloIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfHelloIntervalCfgAList",
    },
    mtu_ignore_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfMtuIgnoreCfgAToHclTerraform, true)(struct!.mtuIgnoreCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfMtuIgnoreCfgAList",
    },
    neighbor_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfNeighborCfgAToHclTerraform, true)(struct!.neighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfNeighborCfgAList",
    },
    network_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfNetworkListStructAToHclTerraform, true)(struct!.networkList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfNetworkListStructAList",
    },
    priority_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfPriorityCfgAToHclTerraform, true)(struct!.priorityCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfPriorityCfgAList",
    },
    retransmit_interval_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfRetransmitIntervalCfgAToHclTerraform, true)(struct!.retransmitIntervalCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfRetransmitIntervalCfgAList",
    },
    transmit_delay_cfg: {
      value: cdktf.listMapperHcl(interfaceVeIpv6OspfTransmitDelayCfgAToHclTerraform, true)(struct!.transmitDelayCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6OspfTransmitDelayCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6OspfAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6OspfA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._costCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCfg = this._costCfg?.internalValue;
    }
    if (this._deadIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadIntervalCfg = this._deadIntervalCfg?.internalValue;
    }
    if (this._helloIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloIntervalCfg = this._helloIntervalCfg?.internalValue;
    }
    if (this._mtuIgnoreCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnoreCfg = this._mtuIgnoreCfg?.internalValue;
    }
    if (this._neighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborCfg = this._neighborCfg?.internalValue;
    }
    if (this._networkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkList = this._networkList?.internalValue;
    }
    if (this._priorityCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityCfg = this._priorityCfg?.internalValue;
    }
    if (this._retransmitIntervalCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitIntervalCfg = this._retransmitIntervalCfg?.internalValue;
    }
    if (this._transmitDelayCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelayCfg = this._transmitDelayCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6OspfA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
      this._uuid = undefined;
      this._costCfg.internalValue = undefined;
      this._deadIntervalCfg.internalValue = undefined;
      this._helloIntervalCfg.internalValue = undefined;
      this._mtuIgnoreCfg.internalValue = undefined;
      this._neighborCfg.internalValue = undefined;
      this._networkList.internalValue = undefined;
      this._priorityCfg.internalValue = undefined;
      this._retransmitIntervalCfg.internalValue = undefined;
      this._transmitDelayCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
      this._uuid = value.uuid;
      this._costCfg.internalValue = value.costCfg;
      this._deadIntervalCfg.internalValue = value.deadIntervalCfg;
      this._helloIntervalCfg.internalValue = value.helloIntervalCfg;
      this._mtuIgnoreCfg.internalValue = value.mtuIgnoreCfg;
      this._neighborCfg.internalValue = value.neighborCfg;
      this._networkList.internalValue = value.networkList;
      this._priorityCfg.internalValue = value.priorityCfg;
      this._retransmitIntervalCfg.internalValue = value.retransmitIntervalCfg;
      this._transmitDelayCfg.internalValue = value.transmitDelayCfg;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
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

  // cost_cfg - computed: false, optional: true, required: false
  private _costCfg = new InterfaceVeIpv6OspfCostCfgAList(this, "cost_cfg", false);
  public get costCfg() {
    return this._costCfg;
  }
  public putCostCfg(value: InterfaceVeIpv6OspfCostCfgA[] | cdktf.IResolvable) {
    this._costCfg.internalValue = value;
  }
  public resetCostCfg() {
    this._costCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCfgInput() {
    return this._costCfg.internalValue;
  }

  // dead_interval_cfg - computed: false, optional: true, required: false
  private _deadIntervalCfg = new InterfaceVeIpv6OspfDeadIntervalCfgAList(this, "dead_interval_cfg", false);
  public get deadIntervalCfg() {
    return this._deadIntervalCfg;
  }
  public putDeadIntervalCfg(value: InterfaceVeIpv6OspfDeadIntervalCfgA[] | cdktf.IResolvable) {
    this._deadIntervalCfg.internalValue = value;
  }
  public resetDeadIntervalCfg() {
    this._deadIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalCfgInput() {
    return this._deadIntervalCfg.internalValue;
  }

  // hello_interval_cfg - computed: false, optional: true, required: false
  private _helloIntervalCfg = new InterfaceVeIpv6OspfHelloIntervalCfgAList(this, "hello_interval_cfg", false);
  public get helloIntervalCfg() {
    return this._helloIntervalCfg;
  }
  public putHelloIntervalCfg(value: InterfaceVeIpv6OspfHelloIntervalCfgA[] | cdktf.IResolvable) {
    this._helloIntervalCfg.internalValue = value;
  }
  public resetHelloIntervalCfg() {
    this._helloIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalCfgInput() {
    return this._helloIntervalCfg.internalValue;
  }

  // mtu_ignore_cfg - computed: false, optional: true, required: false
  private _mtuIgnoreCfg = new InterfaceVeIpv6OspfMtuIgnoreCfgAList(this, "mtu_ignore_cfg", false);
  public get mtuIgnoreCfg() {
    return this._mtuIgnoreCfg;
  }
  public putMtuIgnoreCfg(value: InterfaceVeIpv6OspfMtuIgnoreCfgA[] | cdktf.IResolvable) {
    this._mtuIgnoreCfg.internalValue = value;
  }
  public resetMtuIgnoreCfg() {
    this._mtuIgnoreCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreCfgInput() {
    return this._mtuIgnoreCfg.internalValue;
  }

  // neighbor_cfg - computed: false, optional: true, required: false
  private _neighborCfg = new InterfaceVeIpv6OspfNeighborCfgAList(this, "neighbor_cfg", false);
  public get neighborCfg() {
    return this._neighborCfg;
  }
  public putNeighborCfg(value: InterfaceVeIpv6OspfNeighborCfgA[] | cdktf.IResolvable) {
    this._neighborCfg.internalValue = value;
  }
  public resetNeighborCfg() {
    this._neighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborCfgInput() {
    return this._neighborCfg.internalValue;
  }

  // network_list - computed: false, optional: true, required: false
  private _networkList = new InterfaceVeIpv6OspfNetworkListStructAList(this, "network_list", false);
  public get networkList() {
    return this._networkList;
  }
  public putNetworkList(value: InterfaceVeIpv6OspfNetworkListStructA[] | cdktf.IResolvable) {
    this._networkList.internalValue = value;
  }
  public resetNetworkList() {
    this._networkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList.internalValue;
  }

  // priority_cfg - computed: false, optional: true, required: false
  private _priorityCfg = new InterfaceVeIpv6OspfPriorityCfgAList(this, "priority_cfg", false);
  public get priorityCfg() {
    return this._priorityCfg;
  }
  public putPriorityCfg(value: InterfaceVeIpv6OspfPriorityCfgA[] | cdktf.IResolvable) {
    this._priorityCfg.internalValue = value;
  }
  public resetPriorityCfg() {
    this._priorityCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCfgInput() {
    return this._priorityCfg.internalValue;
  }

  // retransmit_interval_cfg - computed: false, optional: true, required: false
  private _retransmitIntervalCfg = new InterfaceVeIpv6OspfRetransmitIntervalCfgAList(this, "retransmit_interval_cfg", false);
  public get retransmitIntervalCfg() {
    return this._retransmitIntervalCfg;
  }
  public putRetransmitIntervalCfg(value: InterfaceVeIpv6OspfRetransmitIntervalCfgA[] | cdktf.IResolvable) {
    this._retransmitIntervalCfg.internalValue = value;
  }
  public resetRetransmitIntervalCfg() {
    this._retransmitIntervalCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalCfgInput() {
    return this._retransmitIntervalCfg.internalValue;
  }

  // transmit_delay_cfg - computed: false, optional: true, required: false
  private _transmitDelayCfg = new InterfaceVeIpv6OspfTransmitDelayCfgAList(this, "transmit_delay_cfg", false);
  public get transmitDelayCfg() {
    return this._transmitDelayCfg;
  }
  public putTransmitDelayCfg(value: InterfaceVeIpv6OspfTransmitDelayCfgA[] | cdktf.IResolvable) {
    this._transmitDelayCfg.internalValue = value;
  }
  public resetTransmitDelayCfg() {
    this._transmitDelayCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayCfgInput() {
    return this._transmitDelayCfg.internalValue;
  }
}
export interface InterfaceVeIpv6RipSplitHorizonCfgA {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#state InterfaceVeIpv6A#state}
  */
  readonly state?: string;
}

export function interfaceVeIpv6RipSplitHorizonCfgAToTerraform(struct?: InterfaceVeIpv6RipSplitHorizonCfgAOutputReference | InterfaceVeIpv6RipSplitHorizonCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceVeIpv6RipSplitHorizonCfgAToHclTerraform(struct?: InterfaceVeIpv6RipSplitHorizonCfgAOutputReference | InterfaceVeIpv6RipSplitHorizonCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RipSplitHorizonCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RipSplitHorizonCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RipSplitHorizonCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface InterfaceVeIpv6RipA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#uuid InterfaceVeIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#split_horizon_cfg InterfaceVeIpv6A#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceVeIpv6RipSplitHorizonCfgA;
}

export function interfaceVeIpv6RipAToTerraform(struct?: InterfaceVeIpv6RipAOutputReference | InterfaceVeIpv6RipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    split_horizon_cfg: interfaceVeIpv6RipSplitHorizonCfgAToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceVeIpv6RipAToHclTerraform(struct?: InterfaceVeIpv6RipAOutputReference | InterfaceVeIpv6RipA): any {
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
    split_horizon_cfg: {
      value: interfaceVeIpv6RipSplitHorizonCfgAToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RipSplitHorizonCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RipAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RipA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RipA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
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

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceVeIpv6RipSplitHorizonCfgAOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceVeIpv6RipSplitHorizonCfgA) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceVeIpv6RouterIsisA {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#tag InterfaceVeIpv6A#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#uuid InterfaceVeIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeIpv6RouterIsisAToTerraform(struct?: InterfaceVeIpv6RouterIsisAOutputReference | InterfaceVeIpv6RouterIsisA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeIpv6RouterIsisAToHclTerraform(struct?: InterfaceVeIpv6RouterIsisAOutputReference | InterfaceVeIpv6RouterIsisA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class InterfaceVeIpv6RouterIsisAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterIsisA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterIsisA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
export interface InterfaceVeIpv6RouterOspfAreaListStructA {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#area_id_addr InterfaceVeIpv6A#area_id_addr}
  */
  readonly areaIdAddr?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#area_id_num InterfaceVeIpv6A#area_id_num}
  */
  readonly areaIdNum?: number;
  /**
  * Set the interface instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#instance_id InterfaceVeIpv6A#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Set the OSPFv3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#tag InterfaceVeIpv6A#tag}
  */
  readonly tag?: string;
}

export function interfaceVeIpv6RouterOspfAreaListStructAToTerraform(struct?: InterfaceVeIpv6RouterOspfAreaListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id_addr: cdktf.stringToTerraform(struct!.areaIdAddr),
    area_id_num: cdktf.numberToTerraform(struct!.areaIdNum),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function interfaceVeIpv6RouterOspfAreaListStructAToHclTerraform(struct?: InterfaceVeIpv6RouterOspfAreaListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id_addr: {
      value: cdktf.stringToHclTerraform(struct!.areaIdAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_id_num: {
      value: cdktf.numberToHclTerraform(struct!.areaIdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterOspfAreaListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6RouterOspfAreaListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIdAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdAddr = this._areaIdAddr;
    }
    if (this._areaIdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIdNum = this._areaIdNum;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterOspfAreaListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIdAddr = undefined;
      this._areaIdNum = undefined;
      this._instanceId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIdAddr = value.areaIdAddr;
      this._areaIdNum = value.areaIdNum;
      this._instanceId = value.instanceId;
      this._tag = value.tag;
    }
  }

  // area_id_addr - computed: false, optional: true, required: false
  private _areaIdAddr?: string; 
  public get areaIdAddr() {
    return this.getStringAttribute('area_id_addr');
  }
  public set areaIdAddr(value: string) {
    this._areaIdAddr = value;
  }
  public resetAreaIdAddr() {
    this._areaIdAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdAddrInput() {
    return this._areaIdAddr;
  }

  // area_id_num - computed: false, optional: true, required: false
  private _areaIdNum?: number; 
  public get areaIdNum() {
    return this.getNumberAttribute('area_id_num');
  }
  public set areaIdNum(value: number) {
    this._areaIdNum = value;
  }
  public resetAreaIdNum() {
    this._areaIdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdNumInput() {
    return this._areaIdNum;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class InterfaceVeIpv6RouterOspfAreaListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6RouterOspfAreaListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6RouterOspfAreaListStructAOutputReference {
    return new InterfaceVeIpv6RouterOspfAreaListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6RouterOspfA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#uuid InterfaceVeIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#area_list InterfaceVeIpv6A#area_list}
  */
  readonly areaList?: InterfaceVeIpv6RouterOspfAreaListStructA[] | cdktf.IResolvable;
}

export function interfaceVeIpv6RouterOspfAToTerraform(struct?: InterfaceVeIpv6RouterOspfAOutputReference | InterfaceVeIpv6RouterOspfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    area_list: cdktf.listMapper(interfaceVeIpv6RouterOspfAreaListStructAToTerraform, true)(struct!.areaList),
  }
}


export function interfaceVeIpv6RouterOspfAToHclTerraform(struct?: InterfaceVeIpv6RouterOspfAOutputReference | InterfaceVeIpv6RouterOspfA): any {
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
    area_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6RouterOspfAreaListStructAToHclTerraform, true)(struct!.areaList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterOspfAreaListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterOspfAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterOspfA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._areaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaList = this._areaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterOspfA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._areaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._areaList.internalValue = value.areaList;
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

  // area_list - computed: false, optional: true, required: false
  private _areaList = new InterfaceVeIpv6RouterOspfAreaListStructAList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: InterfaceVeIpv6RouterOspfAreaListStructA[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }
}
export interface InterfaceVeIpv6RouterRipngA {
  /**
  * RIP Routing for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#rip InterfaceVeIpv6A#rip}
  */
  readonly rip?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#uuid InterfaceVeIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function interfaceVeIpv6RouterRipngAToTerraform(struct?: InterfaceVeIpv6RouterRipngAOutputReference | InterfaceVeIpv6RouterRipngA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceVeIpv6RouterRipngAToHclTerraform(struct?: InterfaceVeIpv6RouterRipngAOutputReference | InterfaceVeIpv6RouterRipngA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
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

export class InterfaceVeIpv6RouterRipngAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterRipngA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterRipngA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._uuid = value.uuid;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
export interface InterfaceVeIpv6RouterA {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#isis InterfaceVeIpv6A#isis}
  */
  readonly isis?: InterfaceVeIpv6RouterIsisA;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ospf InterfaceVeIpv6A#ospf}
  */
  readonly ospf?: InterfaceVeIpv6RouterOspfA;
  /**
  * ripng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#ripng InterfaceVeIpv6A#ripng}
  */
  readonly ripng?: InterfaceVeIpv6RouterRipngA;
}

export function interfaceVeIpv6RouterAToTerraform(struct?: InterfaceVeIpv6RouterAOutputReference | InterfaceVeIpv6RouterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceVeIpv6RouterIsisAToTerraform(struct!.isis),
    ospf: interfaceVeIpv6RouterOspfAToTerraform(struct!.ospf),
    ripng: interfaceVeIpv6RouterRipngAToTerraform(struct!.ripng),
  }
}


export function interfaceVeIpv6RouterAToHclTerraform(struct?: InterfaceVeIpv6RouterAOutputReference | InterfaceVeIpv6RouterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceVeIpv6RouterIsisAToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterIsisAList",
    },
    ospf: {
      value: interfaceVeIpv6RouterOspfAToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterOspfAList",
    },
    ripng: {
      value: interfaceVeIpv6RouterRipngAToHclTerraform(struct!.ripng),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterRipngAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ripng?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripng = this._ripng?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._ripng.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
      this._ospf.internalValue = value.ospf;
      this._ripng.internalValue = value.ripng;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceVeIpv6RouterIsisAOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceVeIpv6RouterIsisA) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceVeIpv6RouterOspfAOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceVeIpv6RouterOspfA) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ripng - computed: false, optional: true, required: false
  private _ripng = new InterfaceVeIpv6RouterRipngAOutputReference(this, "ripng");
  public get ripng() {
    return this._ripng;
  }
  public putRipng(value: InterfaceVeIpv6RouterRipngA) {
    this._ripng.internalValue = value;
  }
  public resetRipng() {
    this._ripng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripngInput() {
    return this._ripng.internalValue;
  }
}
export interface InterfaceVeIpv6RouterAdverPrefixListStructA {
  /**
  * Specify that the Prefix is not usable for autoconfiguration (default:autonomous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#not_autonomous InterfaceVeIpv6A#not_autonomous}
  */
  readonly notAutonomous?: number;
  /**
  * Specify that the Prefix is not On-Link (default: on-link)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#not_on_link InterfaceVeIpv6A#not_on_link}
  */
  readonly notOnLink?: number;
  /**
  * Specify Prefix Preferred Lifetime (default:604800) (Prefix Advertised Preferred Lifetime (default: 604800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#preferred_lifetime InterfaceVeIpv6A#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Set Router Advertisement On-Link Prefix (IPv6 On-Link Prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#prefix InterfaceVeIpv6A#prefix}
  */
  readonly prefix?: string;
  /**
  * Specify Valid Lifetime (default:2592000) (Prefix Advertised Valid Lifetime (default: 2592000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#valid_lifetime InterfaceVeIpv6A#valid_lifetime}
  */
  readonly validLifetime?: number;
}

export function interfaceVeIpv6RouterAdverPrefixListStructAToTerraform(struct?: InterfaceVeIpv6RouterAdverPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_autonomous: cdktf.numberToTerraform(struct!.notAutonomous),
    not_on_link: cdktf.numberToTerraform(struct!.notOnLink),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
  }
}


export function interfaceVeIpv6RouterAdverPrefixListStructAToHclTerraform(struct?: InterfaceVeIpv6RouterAdverPrefixListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_autonomous: {
      value: cdktf.numberToHclTerraform(struct!.notAutonomous),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_on_link: {
      value: cdktf.numberToHclTerraform(struct!.notOnLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterAdverPrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVeIpv6RouterAdverPrefixListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAutonomous !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAutonomous = this._notAutonomous;
    }
    if (this._notOnLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOnLink = this._notOnLink;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterAdverPrefixListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAutonomous = undefined;
      this._notOnLink = undefined;
      this._preferredLifetime = undefined;
      this._prefix = undefined;
      this._validLifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAutonomous = value.notAutonomous;
      this._notOnLink = value.notOnLink;
      this._preferredLifetime = value.preferredLifetime;
      this._prefix = value.prefix;
      this._validLifetime = value.validLifetime;
    }
  }

  // not_autonomous - computed: false, optional: true, required: false
  private _notAutonomous?: number; 
  public get notAutonomous() {
    return this.getNumberAttribute('not_autonomous');
  }
  public set notAutonomous(value: number) {
    this._notAutonomous = value;
  }
  public resetNotAutonomous() {
    this._notAutonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAutonomousInput() {
    return this._notAutonomous;
  }

  // not_on_link - computed: false, optional: true, required: false
  private _notOnLink?: number; 
  public get notOnLink() {
    return this.getNumberAttribute('not_on_link');
  }
  public set notOnLink(value: number) {
    this._notOnLink = value;
  }
  public resetNotOnLink() {
    this._notOnLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOnLinkInput() {
    return this._notOnLink;
  }

  // preferred_lifetime - computed: false, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // valid_lifetime - computed: false, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }
}

export class InterfaceVeIpv6RouterAdverPrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceVeIpv6RouterAdverPrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceVeIpv6RouterAdverPrefixListStructAOutputReference {
    return new InterfaceVeIpv6RouterAdverPrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceVeIpv6RouterAdverA {
  /**
  * 'enable': Enable Router Advertisements on this interface; 'disable': Disable Router Advertisements on this interface;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#action InterfaceVeIpv6A#action}
  */
  readonly action?: string;
  /**
  * Set Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#adver_mtu InterfaceVeIpv6A#adver_mtu}
  */
  readonly adverMtu?: number;
  /**
  * Disable Router Advertisement MTU Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#adver_mtu_disable InterfaceVeIpv6A#adver_mtu_disable}
  */
  readonly adverMtuDisable?: number;
  /**
  * Vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#adver_vrid InterfaceVeIpv6A#adver_vrid}
  */
  readonly adverVrid?: number;
  /**
  * Default VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#adver_vrid_default InterfaceVeIpv6A#adver_vrid_default}
  */
  readonly adverVridDefault?: number;
  /**
  * Set Router Advertisement Default Lifetime (default: 1800) (Default Lifetime (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#default_lifetime InterfaceVeIpv6A#default_lifetime}
  */
  readonly defaultLifetime?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#floating_ip InterfaceVeIpv6A#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#floating_ip_default_vrid InterfaceVeIpv6A#floating_ip_default_vrid}
  */
  readonly floatingIpDefaultVrid?: string;
  /**
  * Set Router Advertisement Hop Limit (default: 255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#hop_limit InterfaceVeIpv6A#hop_limit}
  */
  readonly hopLimit?: number;
  /**
  * 'enable': Enable the Managed Address Configuration flag; 'disable': Disable the Managed Address Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#managed_config_action InterfaceVeIpv6A#managed_config_action}
  */
  readonly managedConfigAction?: string;
  /**
  * Set Router Advertisement Max Interval (default: 600) (Max Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#max_interval InterfaceVeIpv6A#max_interval}
  */
  readonly maxInterval?: number;
  /**
  * Set Router Advertisement Min Interval (default: 200) (Min Router Advertisement Interval (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#min_interval InterfaceVeIpv6A#min_interval}
  */
  readonly minInterval?: number;
  /**
  * 'enable': Enable the Other Stateful Configuration flag; 'disable': Disable the Other Stateful Configuration flag (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#other_config_action InterfaceVeIpv6A#other_config_action}
  */
  readonly otherConfigAction?: string;
  /**
  * Rate Limit the processing of incoming Router Solicitations (Max Number of Router Solicitations to process per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#rate_limit InterfaceVeIpv6A#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Set Router Advertisement Reachable ime (default: 0) (Reachable Time (milliseconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#reachable_time InterfaceVeIpv6A#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Set Router Advertisement Retransmit Timer (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#retransmit_timer InterfaceVeIpv6A#retransmit_timer}
  */
  readonly retransmitTimer?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#use_floating_ip InterfaceVeIpv6A#use_floating_ip}
  */
  readonly useFloatingIp?: number;
  /**
  * Use a floating IP as the source address for Router advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#use_floating_ip_default_vrid InterfaceVeIpv6A#use_floating_ip_default_vrid}
  */
  readonly useFloatingIpDefaultVrid?: number;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#prefix_list InterfaceVeIpv6A#prefix_list}
  */
  readonly prefixList?: InterfaceVeIpv6RouterAdverPrefixListStructA[] | cdktf.IResolvable;
}

export function interfaceVeIpv6RouterAdverAToTerraform(struct?: InterfaceVeIpv6RouterAdverAOutputReference | InterfaceVeIpv6RouterAdverA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    adver_mtu: cdktf.numberToTerraform(struct!.adverMtu),
    adver_mtu_disable: cdktf.numberToTerraform(struct!.adverMtuDisable),
    adver_vrid: cdktf.numberToTerraform(struct!.adverVrid),
    adver_vrid_default: cdktf.numberToTerraform(struct!.adverVridDefault),
    default_lifetime: cdktf.numberToTerraform(struct!.defaultLifetime),
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    floating_ip_default_vrid: cdktf.stringToTerraform(struct!.floatingIpDefaultVrid),
    hop_limit: cdktf.numberToTerraform(struct!.hopLimit),
    managed_config_action: cdktf.stringToTerraform(struct!.managedConfigAction),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
    min_interval: cdktf.numberToTerraform(struct!.minInterval),
    other_config_action: cdktf.stringToTerraform(struct!.otherConfigAction),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    retransmit_timer: cdktf.numberToTerraform(struct!.retransmitTimer),
    use_floating_ip: cdktf.numberToTerraform(struct!.useFloatingIp),
    use_floating_ip_default_vrid: cdktf.numberToTerraform(struct!.useFloatingIpDefaultVrid),
    prefix_list: cdktf.listMapper(interfaceVeIpv6RouterAdverPrefixListStructAToTerraform, true)(struct!.prefixList),
  }
}


export function interfaceVeIpv6RouterAdverAToHclTerraform(struct?: InterfaceVeIpv6RouterAdverAOutputReference | InterfaceVeIpv6RouterAdverA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adver_mtu: {
      value: cdktf.numberToHclTerraform(struct!.adverMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_mtu_disable: {
      value: cdktf.numberToHclTerraform(struct!.adverMtuDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid: {
      value: cdktf.numberToHclTerraform(struct!.adverVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adver_vrid_default: {
      value: cdktf.numberToHclTerraform(struct!.adverVridDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.defaultLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_default_vrid: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.hopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_config_action: {
      value: cdktf.stringToHclTerraform(struct!.managedConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_interval: {
      value: cdktf.numberToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_config_action: {
      value: cdktf.stringToHclTerraform(struct!.otherConfigAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_timer: {
      value: cdktf.numberToHclTerraform(struct!.retransmitTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_floating_ip_default_vrid: {
      value: cdktf.numberToHclTerraform(struct!.useFloatingIpDefaultVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(interfaceVeIpv6RouterAdverPrefixListStructAToHclTerraform, true)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceVeIpv6RouterAdverPrefixListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVeIpv6RouterAdverAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceVeIpv6RouterAdverA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._adverMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtu = this._adverMtu;
    }
    if (this._adverMtuDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverMtuDisable = this._adverMtuDisable;
    }
    if (this._adverVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVrid = this._adverVrid;
    }
    if (this._adverVridDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.adverVridDefault = this._adverVridDefault;
    }
    if (this._defaultLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLifetime = this._defaultLifetime;
    }
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._floatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpDefaultVrid = this._floatingIpDefaultVrid;
    }
    if (this._hopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopLimit = this._hopLimit;
    }
    if (this._managedConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedConfigAction = this._managedConfigAction;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._otherConfigAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfigAction = this._otherConfigAction;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._retransmitTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitTimer = this._retransmitTimer;
    }
    if (this._useFloatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIp = this._useFloatingIp;
    }
    if (this._useFloatingIpDefaultVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFloatingIpDefaultVrid = this._useFloatingIpDefaultVrid;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVeIpv6RouterAdverA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._adverMtu = undefined;
      this._adverMtuDisable = undefined;
      this._adverVrid = undefined;
      this._adverVridDefault = undefined;
      this._defaultLifetime = undefined;
      this._floatingIp = undefined;
      this._floatingIpDefaultVrid = undefined;
      this._hopLimit = undefined;
      this._managedConfigAction = undefined;
      this._maxInterval = undefined;
      this._minInterval = undefined;
      this._otherConfigAction = undefined;
      this._rateLimit = undefined;
      this._reachableTime = undefined;
      this._retransmitTimer = undefined;
      this._useFloatingIp = undefined;
      this._useFloatingIpDefaultVrid = undefined;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._adverMtu = value.adverMtu;
      this._adverMtuDisable = value.adverMtuDisable;
      this._adverVrid = value.adverVrid;
      this._adverVridDefault = value.adverVridDefault;
      this._defaultLifetime = value.defaultLifetime;
      this._floatingIp = value.floatingIp;
      this._floatingIpDefaultVrid = value.floatingIpDefaultVrid;
      this._hopLimit = value.hopLimit;
      this._managedConfigAction = value.managedConfigAction;
      this._maxInterval = value.maxInterval;
      this._minInterval = value.minInterval;
      this._otherConfigAction = value.otherConfigAction;
      this._rateLimit = value.rateLimit;
      this._reachableTime = value.reachableTime;
      this._retransmitTimer = value.retransmitTimer;
      this._useFloatingIp = value.useFloatingIp;
      this._useFloatingIpDefaultVrid = value.useFloatingIpDefaultVrid;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adver_mtu - computed: false, optional: true, required: false
  private _adverMtu?: number; 
  public get adverMtu() {
    return this.getNumberAttribute('adver_mtu');
  }
  public set adverMtu(value: number) {
    this._adverMtu = value;
  }
  public resetAdverMtu() {
    this._adverMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuInput() {
    return this._adverMtu;
  }

  // adver_mtu_disable - computed: false, optional: true, required: false
  private _adverMtuDisable?: number; 
  public get adverMtuDisable() {
    return this.getNumberAttribute('adver_mtu_disable');
  }
  public set adverMtuDisable(value: number) {
    this._adverMtuDisable = value;
  }
  public resetAdverMtuDisable() {
    this._adverMtuDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverMtuDisableInput() {
    return this._adverMtuDisable;
  }

  // adver_vrid - computed: false, optional: true, required: false
  private _adverVrid?: number; 
  public get adverVrid() {
    return this.getNumberAttribute('adver_vrid');
  }
  public set adverVrid(value: number) {
    this._adverVrid = value;
  }
  public resetAdverVrid() {
    this._adverVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridInput() {
    return this._adverVrid;
  }

  // adver_vrid_default - computed: false, optional: true, required: false
  private _adverVridDefault?: number; 
  public get adverVridDefault() {
    return this.getNumberAttribute('adver_vrid_default');
  }
  public set adverVridDefault(value: number) {
    this._adverVridDefault = value;
  }
  public resetAdverVridDefault() {
    this._adverVridDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adverVridDefaultInput() {
    return this._adverVridDefault;
  }

  // default_lifetime - computed: false, optional: true, required: false
  private _defaultLifetime?: number; 
  public get defaultLifetime() {
    return this.getNumberAttribute('default_lifetime');
  }
  public set defaultLifetime(value: number) {
    this._defaultLifetime = value;
  }
  public resetDefaultLifetime() {
    this._defaultLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLifetimeInput() {
    return this._defaultLifetime;
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_ip_default_vrid - computed: false, optional: true, required: false
  private _floatingIpDefaultVrid?: string; 
  public get floatingIpDefaultVrid() {
    return this.getStringAttribute('floating_ip_default_vrid');
  }
  public set floatingIpDefaultVrid(value: string) {
    this._floatingIpDefaultVrid = value;
  }
  public resetFloatingIpDefaultVrid() {
    this._floatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpDefaultVridInput() {
    return this._floatingIpDefaultVrid;
  }

  // hop_limit - computed: false, optional: true, required: false
  private _hopLimit?: number; 
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }
  public set hopLimit(value: number) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
  }

  // managed_config_action - computed: false, optional: true, required: false
  private _managedConfigAction?: string; 
  public get managedConfigAction() {
    return this.getStringAttribute('managed_config_action');
  }
  public set managedConfigAction(value: string) {
    this._managedConfigAction = value;
  }
  public resetManagedConfigAction() {
    this._managedConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedConfigActionInput() {
    return this._managedConfigAction;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: number; 
  public get minInterval() {
    return this.getNumberAttribute('min_interval');
  }
  public set minInterval(value: number) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // other_config_action - computed: false, optional: true, required: false
  private _otherConfigAction?: string; 
  public get otherConfigAction() {
    return this.getStringAttribute('other_config_action');
  }
  public set otherConfigAction(value: string) {
    this._otherConfigAction = value;
  }
  public resetOtherConfigAction() {
    this._otherConfigAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigActionInput() {
    return this._otherConfigAction;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // reachable_time - computed: false, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // retransmit_timer - computed: false, optional: true, required: false
  private _retransmitTimer?: number; 
  public get retransmitTimer() {
    return this.getNumberAttribute('retransmit_timer');
  }
  public set retransmitTimer(value: number) {
    this._retransmitTimer = value;
  }
  public resetRetransmitTimer() {
    this._retransmitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitTimerInput() {
    return this._retransmitTimer;
  }

  // use_floating_ip - computed: false, optional: true, required: false
  private _useFloatingIp?: number; 
  public get useFloatingIp() {
    return this.getNumberAttribute('use_floating_ip');
  }
  public set useFloatingIp(value: number) {
    this._useFloatingIp = value;
  }
  public resetUseFloatingIp() {
    this._useFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpInput() {
    return this._useFloatingIp;
  }

  // use_floating_ip_default_vrid - computed: false, optional: true, required: false
  private _useFloatingIpDefaultVrid?: number; 
  public get useFloatingIpDefaultVrid() {
    return this.getNumberAttribute('use_floating_ip_default_vrid');
  }
  public set useFloatingIpDefaultVrid(value: number) {
    this._useFloatingIpDefaultVrid = value;
  }
  public resetUseFloatingIpDefaultVrid() {
    this._useFloatingIpDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFloatingIpDefaultVridInput() {
    return this._useFloatingIpDefaultVrid;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new InterfaceVeIpv6RouterAdverPrefixListStructAList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: InterfaceVeIpv6RouterAdverPrefixListStructA[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6 thunder_interface_ve_ipv6}
*/
export class InterfaceVeIpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ve_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVeIpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVeIpv6A to import
  * @param importFromId The id of the existing InterfaceVeIpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVeIpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ve_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/interface_ve_ipv6 thunder_interface_ve_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVeIpv6AConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVeIpv6AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ve_ipv6',
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
    this._ifnum = config.ifnum;
    this._inbound = config.inbound;
    this._inside = config.inside;
    this._ipv6Enable = config.ipv6Enable;
    this._outside = config.outside;
    this._ttlIgnore = config.ttlIgnore;
    this._uuid = config.uuid;
    this._v6AclName = config.v6AclName;
    this._addressList.internalValue = config.addressList;
    this._ospf.internalValue = config.ospf;
    this._rip.internalValue = config.rip;
    this._router.internalValue = config.router;
    this._routerAdver.internalValue = config.routerAdver;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
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

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceVeIpv6AddressListStructAList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceVeIpv6AddressListStructA[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceVeIpv6OspfAOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceVeIpv6OspfA) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceVeIpv6RipAOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceVeIpv6RipA) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceVeIpv6RouterAOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceVeIpv6RouterA) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // router_adver - computed: false, optional: true, required: false
  private _routerAdver = new InterfaceVeIpv6RouterAdverAOutputReference(this, "router_adver");
  public get routerAdver() {
    return this._routerAdver;
  }
  public putRouterAdver(value: InterfaceVeIpv6RouterAdverA) {
    this._routerAdver.internalValue = value;
  }
  public resetRouterAdver() {
    this._routerAdver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAdverInput() {
    return this._routerAdver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      inbound: cdktf.numberToTerraform(this._inbound),
      inside: cdktf.numberToTerraform(this._inside),
      ipv6_enable: cdktf.numberToTerraform(this._ipv6Enable),
      outside: cdktf.numberToTerraform(this._outside),
      ttl_ignore: cdktf.numberToTerraform(this._ttlIgnore),
      uuid: cdktf.stringToTerraform(this._uuid),
      v6_acl_name: cdktf.stringToTerraform(this._v6AclName),
      address_list: cdktf.listMapper(interfaceVeIpv6AddressListStructAToTerraform, true)(this._addressList.internalValue),
      ospf: interfaceVeIpv6OspfAToTerraform(this._ospf.internalValue),
      rip: interfaceVeIpv6RipAToTerraform(this._rip.internalValue),
      router: interfaceVeIpv6RouterAToTerraform(this._router.internalValue),
      router_adver: interfaceVeIpv6RouterAdverAToTerraform(this._routerAdver.internalValue),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound: {
        value: cdktf.numberToHclTerraform(this._inbound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inside: {
        value: cdktf.numberToHclTerraform(this._inside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_enable: {
        value: cdktf.numberToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outside: {
        value: cdktf.numberToHclTerraform(this._outside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_ignore: {
        value: cdktf.numberToHclTerraform(this._ttlIgnore),
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
      v6_acl_name: {
        value: cdktf.stringToHclTerraform(this._v6AclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list: {
        value: cdktf.listMapperHcl(interfaceVeIpv6AddressListStructAToHclTerraform, true)(this._addressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpv6AddressListStructAList",
      },
      ospf: {
        value: interfaceVeIpv6OspfAToHclTerraform(this._ospf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpv6OspfAList",
      },
      rip: {
        value: interfaceVeIpv6RipAToHclTerraform(this._rip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpv6RipAList",
      },
      router: {
        value: interfaceVeIpv6RouterAToHclTerraform(this._router.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpv6RouterAList",
      },
      router_adver: {
        value: interfaceVeIpv6RouterAdverAToHclTerraform(this._routerAdver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceVeIpv6RouterAdverAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
