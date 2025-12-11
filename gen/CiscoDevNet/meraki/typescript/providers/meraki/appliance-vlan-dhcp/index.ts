// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceVlanDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * DHCP boot option for boot filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_boot_filename ApplianceVlanDhcp#dhcp_boot_filename}
  */
  readonly dhcpBootFilename?: string;
  /**
  * DHCP boot option to direct boot clients to the server to load the boot file from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_boot_next_server ApplianceVlanDhcp#dhcp_boot_next_server}
  */
  readonly dhcpBootNextServer?: string;
  /**
  * Use DHCP boot options specified in other properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_boot_options_enabled ApplianceVlanDhcp#dhcp_boot_options_enabled}
  */
  readonly dhcpBootOptionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The appliance`s handling of DHCP requests on this VLAN. One of: `Run a DHCP server`, `Relay DHCP to another server` or `Do not respond to DHCP requests`
  *   - Choices: `Do not respond to DHCP requests`, `Relay DHCP to another server`, `Run a DHCP server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_handling ApplianceVlanDhcp#dhcp_handling}
  */
  readonly dhcpHandling?: string;
  /**
  * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: `30 minutes`, `1 hour`, `4 hours`, `12 hours`, `1 day` or `1 week`
  *   - Choices: `1 day`, `1 hour`, `1 week`, `12 hours`, `30 minutes`, `4 hours`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_lease_time ApplianceVlanDhcp#dhcp_lease_time}
  */
  readonly dhcpLeaseTime?: string;
  /**
  * The list of DHCP options that will be included in DHCP responses. Each object in the list should have 'code', 'type', and 'value' properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_options ApplianceVlanDhcp#dhcp_options}
  */
  readonly dhcpOptions?: ApplianceVlanDhcpDhcpOptions[] | cdktf.IResolvable;
  /**
  * The IPs of the DHCP servers that DHCP requests should be relayed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dhcp_relay_server_ips ApplianceVlanDhcp#dhcp_relay_server_ips}
  */
  readonly dhcpRelayServerIps?: string[];
  /**
  * The DNS nameservers used for DHCP responses, either 'upstream_dns', 'google_dns', 'opendns', or a newline seperated string of IP addresses or domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#dns_nameservers ApplianceVlanDhcp#dns_nameservers}
  */
  readonly dnsNameservers?: string;
  /**
  * The DHCP fixed IP assignments on the VLAN. Thekey of this map is a MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#fixed_ip_assignments ApplianceVlanDhcp#fixed_ip_assignments}
  */
  readonly fixedIpAssignments?: { [key: string]: ApplianceVlanDhcpFixedIpAssignments } | cdktf.IResolvable;
  /**
  * Enable Mandatory DHCP on VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#mandatory_dhcp_enabled ApplianceVlanDhcp#mandatory_dhcp_enabled}
  */
  readonly mandatoryDhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#network_id ApplianceVlanDhcp#network_id}
  */
  readonly networkId: string;
  /**
  * The DHCP reserved IP ranges on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#reserved_ip_ranges ApplianceVlanDhcp#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: ApplianceVlanDhcpReservedIpRanges[] | cdktf.IResolvable;
  /**
  * The VLAN ID of the new VLAN (must be between 1 and 4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#vlan_id ApplianceVlanDhcp#vlan_id}
  */
  readonly vlanId: string;
  /**
  * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#vpn_nat_subnet ApplianceVlanDhcp#vpn_nat_subnet}
  */
  readonly vpnNatSubnet?: string;
}
export interface ApplianceVlanDhcpDhcpOptions {
  /**
  * The code for the DHCP option. This should be an integer between 2 and 254.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#code ApplianceVlanDhcp#code}
  */
  readonly code: string;
  /**
  * The type for the DHCP option. One of: `text`, `ip`, `hex` or `integer`
  *   - Choices: `hex`, `integer`, `ip`, `text`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#type ApplianceVlanDhcp#type}
  */
  readonly type: string;
  /**
  * The value for the DHCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#value ApplianceVlanDhcp#value}
  */
  readonly value: string;
}

export function applianceVlanDhcpDhcpOptionsToTerraform(struct?: ApplianceVlanDhcpDhcpOptions | cdktf.IResolvable): any {
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


export function applianceVlanDhcpDhcpOptionsToHclTerraform(struct?: ApplianceVlanDhcpDhcpOptions | cdktf.IResolvable): any {
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

export class ApplianceVlanDhcpDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlanDhcpDhcpOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplianceVlanDhcpDhcpOptions | cdktf.IResolvable | undefined) {
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

export class ApplianceVlanDhcpDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : ApplianceVlanDhcpDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVlanDhcpDhcpOptionsOutputReference {
    return new ApplianceVlanDhcpDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceVlanDhcpFixedIpAssignments {
  /**
  * The IP address to assign to the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#ip ApplianceVlanDhcp#ip}
  */
  readonly ip: string;
  /**
  * The name of the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#name ApplianceVlanDhcp#name}
  */
  readonly name: string;
}

export function applianceVlanDhcpFixedIpAssignmentsToTerraform(struct?: ApplianceVlanDhcpFixedIpAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applianceVlanDhcpFixedIpAssignmentsToHclTerraform(struct?: ApplianceVlanDhcpFixedIpAssignments | cdktf.IResolvable): any {
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

export class ApplianceVlanDhcpFixedIpAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ApplianceVlanDhcpFixedIpAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceVlanDhcpFixedIpAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
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

export class ApplianceVlanDhcpFixedIpAssignmentsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ApplianceVlanDhcpFixedIpAssignments } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ApplianceVlanDhcpFixedIpAssignmentsOutputReference {
    return new ApplianceVlanDhcpFixedIpAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ApplianceVlanDhcpReservedIpRanges {
  /**
  * A text comment for the reserved range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#comment ApplianceVlanDhcp#comment}
  */
  readonly comment: string;
  /**
  * The last IP in the reserved range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#end ApplianceVlanDhcp#end}
  */
  readonly end: string;
  /**
  * The first IP in the reserved range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#start ApplianceVlanDhcp#start}
  */
  readonly start: string;
}

export function applianceVlanDhcpReservedIpRangesToTerraform(struct?: ApplianceVlanDhcpReservedIpRanges | cdktf.IResolvable): any {
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


export function applianceVlanDhcpReservedIpRangesToHclTerraform(struct?: ApplianceVlanDhcpReservedIpRanges | cdktf.IResolvable): any {
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

export class ApplianceVlanDhcpReservedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceVlanDhcpReservedIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplianceVlanDhcpReservedIpRanges | cdktf.IResolvable | undefined) {
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

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
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

export class ApplianceVlanDhcpReservedIpRangesList extends cdktf.ComplexList {
  public internalValue? : ApplianceVlanDhcpReservedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ApplianceVlanDhcpReservedIpRangesOutputReference {
    return new ApplianceVlanDhcpReservedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp meraki_appliance_vlan_dhcp}
*/
export class ApplianceVlanDhcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_vlan_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceVlanDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceVlanDhcp to import
  * @param importFromId The id of the existing ApplianceVlanDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceVlanDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_vlan_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_vlan_dhcp meraki_appliance_vlan_dhcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceVlanDhcpConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceVlanDhcpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_vlan_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpBootFilename = config.dhcpBootFilename;
    this._dhcpBootNextServer = config.dhcpBootNextServer;
    this._dhcpBootOptionsEnabled = config.dhcpBootOptionsEnabled;
    this._dhcpHandling = config.dhcpHandling;
    this._dhcpLeaseTime = config.dhcpLeaseTime;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._dhcpRelayServerIps = config.dhcpRelayServerIps;
    this._dnsNameservers = config.dnsNameservers;
    this._fixedIpAssignments.internalValue = config.fixedIpAssignments;
    this._mandatoryDhcpEnabled = config.mandatoryDhcpEnabled;
    this._networkId = config.networkId;
    this._reservedIpRanges.internalValue = config.reservedIpRanges;
    this._vlanId = config.vlanId;
    this._vpnNatSubnet = config.vpnNatSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_boot_filename - computed: false, optional: true, required: false
  private _dhcpBootFilename?: string; 
  public get dhcpBootFilename() {
    return this.getStringAttribute('dhcp_boot_filename');
  }
  public set dhcpBootFilename(value: string) {
    this._dhcpBootFilename = value;
  }
  public resetDhcpBootFilename() {
    this._dhcpBootFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBootFilenameInput() {
    return this._dhcpBootFilename;
  }

  // dhcp_boot_next_server - computed: false, optional: true, required: false
  private _dhcpBootNextServer?: string; 
  public get dhcpBootNextServer() {
    return this.getStringAttribute('dhcp_boot_next_server');
  }
  public set dhcpBootNextServer(value: string) {
    this._dhcpBootNextServer = value;
  }
  public resetDhcpBootNextServer() {
    this._dhcpBootNextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBootNextServerInput() {
    return this._dhcpBootNextServer;
  }

  // dhcp_boot_options_enabled - computed: false, optional: true, required: false
  private _dhcpBootOptionsEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpBootOptionsEnabled() {
    return this.getBooleanAttribute('dhcp_boot_options_enabled');
  }
  public set dhcpBootOptionsEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpBootOptionsEnabled = value;
  }
  public resetDhcpBootOptionsEnabled() {
    this._dhcpBootOptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBootOptionsEnabledInput() {
    return this._dhcpBootOptionsEnabled;
  }

  // dhcp_handling - computed: false, optional: true, required: false
  private _dhcpHandling?: string; 
  public get dhcpHandling() {
    return this.getStringAttribute('dhcp_handling');
  }
  public set dhcpHandling(value: string) {
    this._dhcpHandling = value;
  }
  public resetDhcpHandling() {
    this._dhcpHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpHandlingInput() {
    return this._dhcpHandling;
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

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new ApplianceVlanDhcpDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: ApplianceVlanDhcpDhcpOptions[] | cdktf.IResolvable) {
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
    return this.getListAttribute('dhcp_relay_server_ips');
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

  // dns_nameservers - computed: false, optional: true, required: false
  private _dnsNameservers?: string; 
  public get dnsNameservers() {
    return this.getStringAttribute('dns_nameservers');
  }
  public set dnsNameservers(value: string) {
    this._dnsNameservers = value;
  }
  public resetDnsNameservers() {
    this._dnsNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameserversInput() {
    return this._dnsNameservers;
  }

  // fixed_ip_assignments - computed: false, optional: true, required: false
  private _fixedIpAssignments = new ApplianceVlanDhcpFixedIpAssignmentsMap(this, "fixed_ip_assignments");
  public get fixedIpAssignments() {
    return this._fixedIpAssignments;
  }
  public putFixedIpAssignments(value: { [key: string]: ApplianceVlanDhcpFixedIpAssignments } | cdktf.IResolvable) {
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

  // mandatory_dhcp_enabled - computed: false, optional: true, required: false
  private _mandatoryDhcpEnabled?: boolean | cdktf.IResolvable; 
  public get mandatoryDhcpEnabled() {
    return this.getBooleanAttribute('mandatory_dhcp_enabled');
  }
  public set mandatoryDhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._mandatoryDhcpEnabled = value;
  }
  public resetMandatoryDhcpEnabled() {
    this._mandatoryDhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDhcpEnabledInput() {
    return this._mandatoryDhcpEnabled;
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
  private _reservedIpRanges = new ApplianceVlanDhcpReservedIpRangesList(this, "reserved_ip_ranges", false);
  public get reservedIpRanges() {
    return this._reservedIpRanges;
  }
  public putReservedIpRanges(value: ApplianceVlanDhcpReservedIpRanges[] | cdktf.IResolvable) {
    this._reservedIpRanges.internalValue = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges.internalValue;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpn_nat_subnet - computed: false, optional: true, required: false
  private _vpnNatSubnet?: string; 
  public get vpnNatSubnet() {
    return this.getStringAttribute('vpn_nat_subnet');
  }
  public set vpnNatSubnet(value: string) {
    this._vpnNatSubnet = value;
  }
  public resetVpnNatSubnet() {
    this._vpnNatSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNatSubnetInput() {
    return this._vpnNatSubnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_boot_filename: cdktf.stringToTerraform(this._dhcpBootFilename),
      dhcp_boot_next_server: cdktf.stringToTerraform(this._dhcpBootNextServer),
      dhcp_boot_options_enabled: cdktf.booleanToTerraform(this._dhcpBootOptionsEnabled),
      dhcp_handling: cdktf.stringToTerraform(this._dhcpHandling),
      dhcp_lease_time: cdktf.stringToTerraform(this._dhcpLeaseTime),
      dhcp_options: cdktf.listMapper(applianceVlanDhcpDhcpOptionsToTerraform, false)(this._dhcpOptions.internalValue),
      dhcp_relay_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpRelayServerIps),
      dns_nameservers: cdktf.stringToTerraform(this._dnsNameservers),
      fixed_ip_assignments: cdktf.hashMapper(applianceVlanDhcpFixedIpAssignmentsToTerraform)(this._fixedIpAssignments.internalValue),
      mandatory_dhcp_enabled: cdktf.booleanToTerraform(this._mandatoryDhcpEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      reserved_ip_ranges: cdktf.listMapper(applianceVlanDhcpReservedIpRangesToTerraform, false)(this._reservedIpRanges.internalValue),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      vpn_nat_subnet: cdktf.stringToTerraform(this._vpnNatSubnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_boot_filename: {
        value: cdktf.stringToHclTerraform(this._dhcpBootFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_boot_next_server: {
        value: cdktf.stringToHclTerraform(this._dhcpBootNextServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_boot_options_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpBootOptionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_handling: {
        value: cdktf.stringToHclTerraform(this._dhcpHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_lease_time: {
        value: cdktf.stringToHclTerraform(this._dhcpLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(applianceVlanDhcpDhcpOptionsToHclTerraform, false)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceVlanDhcpDhcpOptionsList",
      },
      dhcp_relay_server_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpRelayServerIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_nameservers: {
        value: cdktf.stringToHclTerraform(this._dnsNameservers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_ip_assignments: {
        value: cdktf.hashMapperHcl(applianceVlanDhcpFixedIpAssignmentsToHclTerraform)(this._fixedIpAssignments.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ApplianceVlanDhcpFixedIpAssignmentsMap",
      },
      mandatory_dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._mandatoryDhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ip_ranges: {
        value: cdktf.listMapperHcl(applianceVlanDhcpReservedIpRangesToHclTerraform, false)(this._reservedIpRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceVlanDhcpReservedIpRangesList",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_nat_subnet: {
        value: cdktf.stringToHclTerraform(this._vpnNatSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
