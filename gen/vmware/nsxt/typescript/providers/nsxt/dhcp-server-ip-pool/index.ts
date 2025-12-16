// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpServerIpPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#description DhcpServerIpPool#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#display_name DhcpServerIpPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Error threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#error_threshold DhcpServerIpPool#error_threshold}
  */
  readonly errorThreshold?: number;
  /**
  * Gateway ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#gateway_ip DhcpServerIpPool#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#id DhcpServerIpPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lease time, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#lease_time DhcpServerIpPool#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Id of dhcp server this pool is serving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#logical_dhcp_server_id DhcpServerIpPool#logical_dhcp_server_id}
  */
  readonly logicalDhcpServerId: string;
  /**
  * Warning threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#warning_threshold DhcpServerIpPool#warning_threshold}
  */
  readonly warningThreshold?: number;
  /**
  * dhcp_generic_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#dhcp_generic_option DhcpServerIpPool#dhcp_generic_option}
  */
  readonly dhcpGenericOption?: DhcpServerIpPoolDhcpGenericOption[] | cdktf.IResolvable;
  /**
  * dhcp_option_121 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#dhcp_option_121 DhcpServerIpPool#dhcp_option_121}
  */
  readonly dhcpOption121?: DhcpServerIpPoolDhcpOption121[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#ip_range DhcpServerIpPool#ip_range}
  */
  readonly ipRange?: DhcpServerIpPoolIpRange[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#tag DhcpServerIpPool#tag}
  */
  readonly tag?: DhcpServerIpPoolTag[] | cdktf.IResolvable;
}
export interface DhcpServerIpPoolDhcpGenericOption {
  /**
  * DHCP option code, [0-255]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#code DhcpServerIpPool#code}
  */
  readonly code: number;
  /**
  * DHCP option values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#values DhcpServerIpPool#values}
  */
  readonly values: string[];
}

export function dhcpServerIpPoolDhcpGenericOptionToTerraform(struct?: DhcpServerIpPoolDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dhcpServerIpPoolDhcpGenericOptionToHclTerraform(struct?: DhcpServerIpPoolDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerIpPoolDhcpGenericOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerIpPoolDhcpGenericOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerIpPoolDhcpGenericOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._values = value.values;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DhcpServerIpPoolDhcpGenericOptionList extends cdktf.ComplexList {
  public internalValue? : DhcpServerIpPoolDhcpGenericOption[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerIpPoolDhcpGenericOptionOutputReference {
    return new DhcpServerIpPoolDhcpGenericOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerIpPoolDhcpOption121 {
  /**
  * Destination in cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#network DhcpServerIpPool#network}
  */
  readonly network: string;
  /**
  * Next hop IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#next_hop DhcpServerIpPool#next_hop}
  */
  readonly nextHop: string;
}

export function dhcpServerIpPoolDhcpOption121ToTerraform(struct?: DhcpServerIpPoolDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function dhcpServerIpPoolDhcpOption121ToHclTerraform(struct?: DhcpServerIpPoolDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerIpPoolDhcpOption121OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerIpPoolDhcpOption121 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerIpPoolDhcpOption121 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nextHop = value.nextHop;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class DhcpServerIpPoolDhcpOption121List extends cdktf.ComplexList {
  public internalValue? : DhcpServerIpPoolDhcpOption121[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerIpPoolDhcpOption121OutputReference {
    return new DhcpServerIpPoolDhcpOption121OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerIpPoolIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#end DhcpServerIpPool#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#start DhcpServerIpPool#start}
  */
  readonly start: string;
}

export function dhcpServerIpPoolIpRangeToTerraform(struct?: DhcpServerIpPoolIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dhcpServerIpPoolIpRangeToHclTerraform(struct?: DhcpServerIpPoolIpRange | cdktf.IResolvable): any {
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

export class DhcpServerIpPoolIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerIpPoolIpRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DhcpServerIpPoolIpRange | cdktf.IResolvable | undefined) {
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

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DhcpServerIpPoolIpRangeList extends cdktf.ComplexList {
  public internalValue? : DhcpServerIpPoolIpRange[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerIpPoolIpRangeOutputReference {
    return new DhcpServerIpPoolIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerIpPoolTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#scope DhcpServerIpPool#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#tag DhcpServerIpPool#tag}
  */
  readonly tag?: string;
}

export function dhcpServerIpPoolTagToTerraform(struct?: DhcpServerIpPoolTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dhcpServerIpPoolTagToHclTerraform(struct?: DhcpServerIpPoolTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DhcpServerIpPoolTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerIpPoolTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerIpPoolTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

export class DhcpServerIpPoolTagList extends cdktf.ComplexList {
  public internalValue? : DhcpServerIpPoolTag[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerIpPoolTagOutputReference {
    return new DhcpServerIpPoolTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool nsxt_dhcp_server_ip_pool}
*/
export class DhcpServerIpPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_dhcp_server_ip_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpServerIpPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpServerIpPool to import
  * @param importFromId The id of the existing DhcpServerIpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpServerIpPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_dhcp_server_ip_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/dhcp_server_ip_pool nsxt_dhcp_server_ip_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpServerIpPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpServerIpPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_dhcp_server_ip_pool',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._displayName = config.displayName;
    this._errorThreshold = config.errorThreshold;
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._leaseTime = config.leaseTime;
    this._logicalDhcpServerId = config.logicalDhcpServerId;
    this._warningThreshold = config.warningThreshold;
    this._dhcpGenericOption.internalValue = config.dhcpGenericOption;
    this._dhcpOption121.internalValue = config.dhcpOption121;
    this._ipRange.internalValue = config.ipRange;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // error_threshold - computed: false, optional: true, required: false
  private _errorThreshold?: number; 
  public get errorThreshold() {
    return this.getNumberAttribute('error_threshold');
  }
  public set errorThreshold(value: number) {
    this._errorThreshold = value;
  }
  public resetErrorThreshold() {
    this._errorThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorThresholdInput() {
    return this._errorThreshold;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // logical_dhcp_server_id - computed: false, optional: false, required: true
  private _logicalDhcpServerId?: string; 
  public get logicalDhcpServerId() {
    return this.getStringAttribute('logical_dhcp_server_id');
  }
  public set logicalDhcpServerId(value: string) {
    this._logicalDhcpServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDhcpServerIdInput() {
    return this._logicalDhcpServerId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // dhcp_generic_option - computed: false, optional: true, required: false
  private _dhcpGenericOption = new DhcpServerIpPoolDhcpGenericOptionList(this, "dhcp_generic_option", false);
  public get dhcpGenericOption() {
    return this._dhcpGenericOption;
  }
  public putDhcpGenericOption(value: DhcpServerIpPoolDhcpGenericOption[] | cdktf.IResolvable) {
    this._dhcpGenericOption.internalValue = value;
  }
  public resetDhcpGenericOption() {
    this._dhcpGenericOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGenericOptionInput() {
    return this._dhcpGenericOption.internalValue;
  }

  // dhcp_option_121 - computed: false, optional: true, required: false
  private _dhcpOption121 = new DhcpServerIpPoolDhcpOption121List(this, "dhcp_option_121", false);
  public get dhcpOption121() {
    return this._dhcpOption121;
  }
  public putDhcpOption121(value: DhcpServerIpPoolDhcpOption121[] | cdktf.IResolvable) {
    this._dhcpOption121.internalValue = value;
  }
  public resetDhcpOption121() {
    this._dhcpOption121.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption121Input() {
    return this._dhcpOption121.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new DhcpServerIpPoolIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: DhcpServerIpPoolIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DhcpServerIpPoolTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DhcpServerIpPoolTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      error_threshold: cdktf.numberToTerraform(this._errorThreshold),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      logical_dhcp_server_id: cdktf.stringToTerraform(this._logicalDhcpServerId),
      warning_threshold: cdktf.numberToTerraform(this._warningThreshold),
      dhcp_generic_option: cdktf.listMapper(dhcpServerIpPoolDhcpGenericOptionToTerraform, true)(this._dhcpGenericOption.internalValue),
      dhcp_option_121: cdktf.listMapper(dhcpServerIpPoolDhcpOption121ToTerraform, true)(this._dhcpOption121.internalValue),
      ip_range: cdktf.listMapper(dhcpServerIpPoolIpRangeToTerraform, true)(this._ipRange.internalValue),
      tag: cdktf.listMapper(dhcpServerIpPoolTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_threshold: {
        value: cdktf.numberToHclTerraform(this._errorThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
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
      lease_time: {
        value: cdktf.numberToHclTerraform(this._leaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logical_dhcp_server_id: {
        value: cdktf.stringToHclTerraform(this._logicalDhcpServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning_threshold: {
        value: cdktf.numberToHclTerraform(this._warningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_generic_option: {
        value: cdktf.listMapperHcl(dhcpServerIpPoolDhcpGenericOptionToHclTerraform, true)(this._dhcpGenericOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerIpPoolDhcpGenericOptionList",
      },
      dhcp_option_121: {
        value: cdktf.listMapperHcl(dhcpServerIpPoolDhcpOption121ToHclTerraform, true)(this._dhcpOption121.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerIpPoolDhcpOption121List",
      },
      ip_range: {
        value: cdktf.listMapperHcl(dhcpServerIpPoolIpRangeToHclTerraform, true)(this._ipRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerIpPoolIpRangeList",
      },
      tag: {
        value: cdktf.listMapperHcl(dhcpServerIpPoolTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DhcpServerIpPoolTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
