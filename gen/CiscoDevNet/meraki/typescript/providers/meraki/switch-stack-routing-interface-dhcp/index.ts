// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchStackRoutingInterfaceDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The PXE boot server file name for the DHCP server running on the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#boot_file_name SwitchStackRoutingInterfaceDhcp#boot_file_name}
  */
  readonly bootFileName?: string;
  /**
  * The PXE boot server IP for the DHCP server running on the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#boot_next_server SwitchStackRoutingInterfaceDhcp#boot_next_server}
  */
  readonly bootNextServer?: string;
  /**
  * Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#boot_options_enabled SwitchStackRoutingInterfaceDhcp#boot_options_enabled}
  */
  readonly bootOptionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The DHCP lease time config for the dhcp server running on switch stack interface (`30 minutes`, `1 hour`, `4 hours`, `12 hours`, `1 day` or `1 week`)
  *   - Choices: `1 day`, `1 hour`, `1 week`, `12 hours`, `30 minutes`, `4 hours`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#dhcp_lease_time SwitchStackRoutingInterfaceDhcp#dhcp_lease_time}
  */
  readonly dhcpLeaseTime?: string;
  /**
  * The DHCP mode options for the switch stack interface (`dhcpDisabled`, `dhcpRelay` or `dhcpServer`)
  *   - Choices: `dhcpDisabled`, `dhcpRelay`, `dhcpServer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#dhcp_mode SwitchStackRoutingInterfaceDhcp#dhcp_mode}
  */
  readonly dhcpMode?: string;
  /**
  * Array of DHCP options consisting of code, type and value for the DHCP server running on the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#dhcp_options SwitchStackRoutingInterfaceDhcp#dhcp_options}
  */
  readonly dhcpOptions?: SwitchStackRoutingInterfaceDhcpDhcpOptions[] | cdktf.IResolvable;
  /**
  * The DHCP relay server IPs to which DHCP packets would get relayed for the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#dhcp_relay_server_ips SwitchStackRoutingInterfaceDhcp#dhcp_relay_server_ips}
  */
  readonly dhcpRelayServerIps?: string[];
  /**
  * The DHCP name server IPs when DHCP name server option is ` custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#dns_custom_nameservers SwitchStackRoutingInterfaceDhcp#dns_custom_nameservers}
  */
  readonly dnsCustomNameservers?: string[];
  /**
  * The DHCP name server option for the dhcp server running on the switch stack interface (`googlePublicDns`, `openDns` or `custom`)
  *   - Choices: `custom`, `googlePublicDns`, `openDns`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#dns_nameservers_option SwitchStackRoutingInterfaceDhcp#dns_nameservers_option}
  */
  readonly dnsNameserversOption?: string;
  /**
  * Array of DHCP fixed IP assignments for the DHCP server running on the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#fixed_ip_assignments SwitchStackRoutingInterfaceDhcp#fixed_ip_assignments}
  */
  readonly fixedIpAssignments?: SwitchStackRoutingInterfaceDhcpFixedIpAssignments[] | cdktf.IResolvable;
  /**
  * Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#interface_id SwitchStackRoutingInterfaceDhcp#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#network_id SwitchStackRoutingInterfaceDhcp#network_id}
  */
  readonly networkId: string;
  /**
  * Array of DHCP reserved IP assignments for the DHCP server running on the switch stack interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#reserved_ip_ranges SwitchStackRoutingInterfaceDhcp#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: SwitchStackRoutingInterfaceDhcpReservedIpRanges[] | cdktf.IResolvable;
  /**
  * Switch stack ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#switch_stack_id SwitchStackRoutingInterfaceDhcp#switch_stack_id}
  */
  readonly switchStackId: string;
}
export interface SwitchStackRoutingInterfaceDhcpDhcpOptions {
  /**
  * The code for DHCP option which should be from 2 to 254
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#code SwitchStackRoutingInterfaceDhcp#code}
  */
  readonly code: string;
  /**
  * The type of the DHCP option which should be one of (`text`, `ip`, `integer` or `hex`)
  *   - Choices: `hex`, `integer`, `ip`, `text`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#type SwitchStackRoutingInterfaceDhcp#type}
  */
  readonly type: string;
  /**
  * The value of the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#value SwitchStackRoutingInterfaceDhcp#value}
  */
  readonly value: string;
}

export function switchStackRoutingInterfaceDhcpDhcpOptionsToTerraform(struct?: SwitchStackRoutingInterfaceDhcpDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function switchStackRoutingInterfaceDhcpDhcpOptionsToHclTerraform(struct?: SwitchStackRoutingInterfaceDhcpDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SwitchStackRoutingInterfaceDhcpDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchStackRoutingInterfaceDhcpDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchStackRoutingInterfaceDhcpDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class SwitchStackRoutingInterfaceDhcpDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : SwitchStackRoutingInterfaceDhcpDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): SwitchStackRoutingInterfaceDhcpDhcpOptionsOutputReference {
    return new SwitchStackRoutingInterfaceDhcpDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchStackRoutingInterfaceDhcpFixedIpAssignments {
  /**
  * The IP address of the client which has fixed IP address assigned to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#ip SwitchStackRoutingInterfaceDhcp#ip}
  */
  readonly ip: string;
  /**
  * The MAC address of the client which has fixed IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#mac SwitchStackRoutingInterfaceDhcp#mac}
  */
  readonly mac: string;
  /**
  * The name of the client which has fixed IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#name SwitchStackRoutingInterfaceDhcp#name}
  */
  readonly name: string;
}

export function switchStackRoutingInterfaceDhcpFixedIpAssignmentsToTerraform(struct?: SwitchStackRoutingInterfaceDhcpFixedIpAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchStackRoutingInterfaceDhcpFixedIpAssignmentsToHclTerraform(struct?: SwitchStackRoutingInterfaceDhcpFixedIpAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SwitchStackRoutingInterfaceDhcpFixedIpAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchStackRoutingInterfaceDhcpFixedIpAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchStackRoutingInterfaceDhcpFixedIpAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mac = value.mac;
      this._name = value.name;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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
}

export class SwitchStackRoutingInterfaceDhcpFixedIpAssignmentsList extends cdktf.ComplexList {
  public internalValue? : SwitchStackRoutingInterfaceDhcpFixedIpAssignments[] | cdktf.IResolvable

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
  public get(index: number): SwitchStackRoutingInterfaceDhcpFixedIpAssignmentsOutputReference {
    return new SwitchStackRoutingInterfaceDhcpFixedIpAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchStackRoutingInterfaceDhcpReservedIpRanges {
  /**
  * The comment for the reserved IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#comment SwitchStackRoutingInterfaceDhcp#comment}
  */
  readonly comment?: string;
  /**
  * The ending IP address of the reserved IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#end SwitchStackRoutingInterfaceDhcp#end}
  */
  readonly end: string;
  /**
  * The starting IP address of the reserved IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#start SwitchStackRoutingInterfaceDhcp#start}
  */
  readonly start: string;
}

export function switchStackRoutingInterfaceDhcpReservedIpRangesToTerraform(struct?: SwitchStackRoutingInterfaceDhcpReservedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function switchStackRoutingInterfaceDhcpReservedIpRangesToHclTerraform(struct?: SwitchStackRoutingInterfaceDhcpReservedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SwitchStackRoutingInterfaceDhcpReservedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchStackRoutingInterfaceDhcpReservedIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
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

  public set internalValue(value: SwitchStackRoutingInterfaceDhcpReservedIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
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
      this._comment = value.comment;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

export class SwitchStackRoutingInterfaceDhcpReservedIpRangesList extends cdktf.ComplexList {
  public internalValue? : SwitchStackRoutingInterfaceDhcpReservedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): SwitchStackRoutingInterfaceDhcpReservedIpRangesOutputReference {
    return new SwitchStackRoutingInterfaceDhcpReservedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp meraki_switch_stack_routing_interface_dhcp}
*/
export class SwitchStackRoutingInterfaceDhcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_stack_routing_interface_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchStackRoutingInterfaceDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchStackRoutingInterfaceDhcp to import
  * @param importFromId The id of the existing SwitchStackRoutingInterfaceDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchStackRoutingInterfaceDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_stack_routing_interface_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_stack_routing_interface_dhcp meraki_switch_stack_routing_interface_dhcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchStackRoutingInterfaceDhcpConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchStackRoutingInterfaceDhcpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_stack_routing_interface_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootFileName = config.bootFileName;
    this._bootNextServer = config.bootNextServer;
    this._bootOptionsEnabled = config.bootOptionsEnabled;
    this._dhcpLeaseTime = config.dhcpLeaseTime;
    this._dhcpMode = config.dhcpMode;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._dhcpRelayServerIps = config.dhcpRelayServerIps;
    this._dnsCustomNameservers = config.dnsCustomNameservers;
    this._dnsNameserversOption = config.dnsNameserversOption;
    this._fixedIpAssignments.internalValue = config.fixedIpAssignments;
    this._interfaceId = config.interfaceId;
    this._networkId = config.networkId;
    this._reservedIpRanges.internalValue = config.reservedIpRanges;
    this._switchStackId = config.switchStackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_file_name - computed: false, optional: true, required: false
  private _bootFileName?: string; 
  public get bootFileName() {
    return this.getStringAttribute('boot_file_name');
  }
  public set bootFileName(value: string) {
    this._bootFileName = value;
  }
  public resetBootFileName() {
    this._bootFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFileNameInput() {
    return this._bootFileName;
  }

  // boot_next_server - computed: false, optional: true, required: false
  private _bootNextServer?: string; 
  public get bootNextServer() {
    return this.getStringAttribute('boot_next_server');
  }
  public set bootNextServer(value: string) {
    this._bootNextServer = value;
  }
  public resetBootNextServer() {
    this._bootNextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootNextServerInput() {
    return this._bootNextServer;
  }

  // boot_options_enabled - computed: false, optional: true, required: false
  private _bootOptionsEnabled?: boolean | cdktf.IResolvable; 
  public get bootOptionsEnabled() {
    return this.getBooleanAttribute('boot_options_enabled');
  }
  public set bootOptionsEnabled(value: boolean | cdktf.IResolvable) {
    this._bootOptionsEnabled = value;
  }
  public resetBootOptionsEnabled() {
    this._bootOptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOptionsEnabledInput() {
    return this._bootOptionsEnabled;
  }

  // dhcp_lease_time - computed: false, optional: true, required: false
  private _dhcpLeaseTime?: string; 
  public get dhcpLeaseTime() {
    return this.getStringAttribute('dhcp_lease_time');
  }
  public set dhcpLeaseTime(value: string) {
    this._dhcpLeaseTime = value;
  }
  public resetDhcpLeaseTime() {
    this._dhcpLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpLeaseTimeInput() {
    return this._dhcpLeaseTime;
  }

  // dhcp_mode - computed: false, optional: true, required: false
  private _dhcpMode?: string; 
  public get dhcpMode() {
    return this.getStringAttribute('dhcp_mode');
  }
  public set dhcpMode(value: string) {
    this._dhcpMode = value;
  }
  public resetDhcpMode() {
    this._dhcpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpModeInput() {
    return this._dhcpMode;
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new SwitchStackRoutingInterfaceDhcpDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: SwitchStackRoutingInterfaceDhcpDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_relay_server_ips - computed: false, optional: true, required: false
  private _dhcpRelayServerIps?: string[]; 
  public get dhcpRelayServerIps() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_relay_server_ips'));
  }
  public set dhcpRelayServerIps(value: string[]) {
    this._dhcpRelayServerIps = value;
  }
  public resetDhcpRelayServerIps() {
    this._dhcpRelayServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServerIpsInput() {
    return this._dhcpRelayServerIps;
  }

  // dns_custom_nameservers - computed: false, optional: true, required: false
  private _dnsCustomNameservers?: string[]; 
  public get dnsCustomNameservers() {
    return this.getListAttribute('dns_custom_nameservers');
  }
  public set dnsCustomNameservers(value: string[]) {
    this._dnsCustomNameservers = value;
  }
  public resetDnsCustomNameservers() {
    this._dnsCustomNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomNameserversInput() {
    return this._dnsCustomNameservers;
  }

  // dns_nameservers_option - computed: false, optional: true, required: false
  private _dnsNameserversOption?: string; 
  public get dnsNameserversOption() {
    return this.getStringAttribute('dns_nameservers_option');
  }
  public set dnsNameserversOption(value: string) {
    this._dnsNameserversOption = value;
  }
  public resetDnsNameserversOption() {
    this._dnsNameserversOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversOptionInput() {
    return this._dnsNameserversOption;
  }

  // fixed_ip_assignments - computed: false, optional: true, required: false
  private _fixedIpAssignments = new SwitchStackRoutingInterfaceDhcpFixedIpAssignmentsList(this, "fixed_ip_assignments", false);
  public get fixedIpAssignments() {
    return this._fixedIpAssignments;
  }
  public putFixedIpAssignments(value: SwitchStackRoutingInterfaceDhcpFixedIpAssignments[] | cdktf.IResolvable) {
    this._fixedIpAssignments.internalValue = value;
  }
  public resetFixedIpAssignments() {
    this._fixedIpAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpAssignmentsInput() {
    return this._fixedIpAssignments.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges = new SwitchStackRoutingInterfaceDhcpReservedIpRangesList(this, "reserved_ip_ranges", false);
  public get reservedIpRanges() {
    return this._reservedIpRanges;
  }
  public putReservedIpRanges(value: SwitchStackRoutingInterfaceDhcpReservedIpRanges[] | cdktf.IResolvable) {
    this._reservedIpRanges.internalValue = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges.internalValue;
  }

  // switch_stack_id - computed: false, optional: false, required: true
  private _switchStackId?: string; 
  public get switchStackId() {
    return this.getStringAttribute('switch_stack_id');
  }
  public set switchStackId(value: string) {
    this._switchStackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchStackIdInput() {
    return this._switchStackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_file_name: cdktf.stringToTerraform(this._bootFileName),
      boot_next_server: cdktf.stringToTerraform(this._bootNextServer),
      boot_options_enabled: cdktf.booleanToTerraform(this._bootOptionsEnabled),
      dhcp_lease_time: cdktf.stringToTerraform(this._dhcpLeaseTime),
      dhcp_mode: cdktf.stringToTerraform(this._dhcpMode),
      dhcp_options: cdktf.listMapper(switchStackRoutingInterfaceDhcpDhcpOptionsToTerraform, false)(this._dhcpOptions.internalValue),
      dhcp_relay_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpRelayServerIps),
      dns_custom_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsCustomNameservers),
      dns_nameservers_option: cdktf.stringToTerraform(this._dnsNameserversOption),
      fixed_ip_assignments: cdktf.listMapper(switchStackRoutingInterfaceDhcpFixedIpAssignmentsToTerraform, false)(this._fixedIpAssignments.internalValue),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      network_id: cdktf.stringToTerraform(this._networkId),
      reserved_ip_ranges: cdktf.listMapper(switchStackRoutingInterfaceDhcpReservedIpRangesToTerraform, false)(this._reservedIpRanges.internalValue),
      switch_stack_id: cdktf.stringToTerraform(this._switchStackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_file_name: {
        value: cdktf.stringToHclTerraform(this._bootFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_next_server: {
        value: cdktf.stringToHclTerraform(this._bootNextServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_options_enabled: {
        value: cdktf.booleanToHclTerraform(this._bootOptionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_lease_time: {
        value: cdktf.stringToHclTerraform(this._dhcpLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_mode: {
        value: cdktf.stringToHclTerraform(this._dhcpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(switchStackRoutingInterfaceDhcpDhcpOptionsToHclTerraform, false)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchStackRoutingInterfaceDhcpDhcpOptionsList",
      },
      dhcp_relay_server_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpRelayServerIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dns_custom_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsCustomNameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_nameservers_option: {
        value: cdktf.stringToHclTerraform(this._dnsNameserversOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_ip_assignments: {
        value: cdktf.listMapperHcl(switchStackRoutingInterfaceDhcpFixedIpAssignmentsToHclTerraform, false)(this._fixedIpAssignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchStackRoutingInterfaceDhcpFixedIpAssignmentsList",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ip_ranges: {
        value: cdktf.listMapperHcl(switchStackRoutingInterfaceDhcpReservedIpRangesToHclTerraform, false)(this._reservedIpRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchStackRoutingInterfaceDhcpReservedIpRangesList",
      },
      switch_stack_id: {
        value: cdktf.stringToHclTerraform(this._switchStackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
