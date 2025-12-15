// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessAddressAssignmentPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Notify client of pool active drain mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#active_drain AccessAddressAssignmentPool#active_drain}
  */
  readonly activeDrain?: boolean | cdktf.IResolvable;
  /**
  * Place pool in passive drain mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#hold_down AccessAddressAssignmentPool#hold_down}
  */
  readonly holdDown?: boolean | cdktf.IResolvable;
  /**
  * Address pool link name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#link AccessAddressAssignmentPool#link}
  */
  readonly link?: string;
  /**
  * Address pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#name AccessAddressAssignmentPool#name}
  */
  readonly name: string;
  /**
  * Routing instance for pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#routing_instance AccessAddressAssignmentPool#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * family block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#family AccessAddressAssignmentPool#family}
  */
  readonly family?: AccessAddressAssignmentPoolFamily;
}
export interface AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId {
  /**
  * Range name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#range AccessAddressAssignmentPool#range}
  */
  readonly range: string;
  /**
  * Match value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#value AccessAddressAssignmentPool#value}
  */
  readonly value: string;
}

export function accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdToTerraform(struct?: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
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

export class AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
      this._value = value.value;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
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

export class AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdList extends cdktf.ComplexList {
  public internalValue? : AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId[] | cdktf.IResolvable

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
  public get(index: number): AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdOutputReference {
    return new AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId {
  /**
  * Range name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#range AccessAddressAssignmentPool#range}
  */
  readonly range: string;
  /**
  * Match value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#value AccessAddressAssignmentPool#value}
  */
  readonly value: string;
}

export function accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdToTerraform(struct?: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
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

export class AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
      this._value = value.value;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
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

export class AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdList extends cdktf.ComplexList {
  public internalValue? : AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId[] | cdktf.IResolvable

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
  public get(index: number): AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdOutputReference {
    return new AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessAddressAssignmentPoolFamilyDhcpAttributes {
  /**
  * Boot filename advertised to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#boot_file AccessAddressAssignmentPool#boot_file}
  */
  readonly bootFile?: string;
  /**
  * Boot server advertised to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#boot_server AccessAddressAssignmentPool#boot_server}
  */
  readonly bootServer?: string;
  /**
  * IPv6 domain name servers available to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#dns_server AccessAddressAssignmentPool#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * Domain name advertised to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#domain_name AccessAddressAssignmentPool#domain_name}
  */
  readonly domainName?: string;
  /**
  * Length of IPv6 prefix to be excluded from delegated prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#exclude_prefix_len AccessAddressAssignmentPool#exclude_prefix_len}
  */
  readonly excludePrefixLen?: number;
  /**
  * Grace period for leases (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#grace_period AccessAddressAssignmentPool#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Maximum lease time advertised to clients (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#maximum_lease_time AccessAddressAssignmentPool#maximum_lease_time}
  */
  readonly maximumLeaseTime?: number;
  /**
  * Lease time can be infinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#maximum_lease_time_infinite AccessAddressAssignmentPool#maximum_lease_time_infinite}
  */
  readonly maximumLeaseTimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * IPv4 domain name servers available to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#name_server AccessAddressAssignmentPool#name_server}
  */
  readonly nameServer?: string[];
  /**
  * Type of NETBIOS node advertised to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#netbios_node_type AccessAddressAssignmentPool#netbios_node_type}
  */
  readonly netbiosNodeType?: string;
  /**
  * Next server that clients need to contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#next_server AccessAddressAssignmentPool#next_server}
  */
  readonly nextServer?: string;
  /**
  * DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#option AccessAddressAssignmentPool#option}
  */
  readonly option?: string[];
  /**
  * Preferred lifetime advertised to clients (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#preferred_lifetime AccessAddressAssignmentPool#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * Lease time can be infinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#preferred_lifetime_infinite AccessAddressAssignmentPool#preferred_lifetime_infinite}
  */
  readonly preferredLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * PPP interface name for propagating DNS/WINS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#propagate_ppp_settings AccessAddressAssignmentPool#propagate_ppp_settings}
  */
  readonly propagatePppSettings?: string[];
  /**
  * Interface name for propagating TCP/IP Settings to pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#propagate_settings AccessAddressAssignmentPool#propagate_settings}
  */
  readonly propagateSettings?: string;
  /**
  * Routers advertised to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#router AccessAddressAssignmentPool#router}
  */
  readonly router?: string[];
  /**
  * Server Identifier - IP address value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#server_identifier AccessAddressAssignmentPool#server_identifier}
  */
  readonly serverIdentifier?: string;
  /**
  * SIP Servers list of IPv6 addresses available to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#sip_server_inet6_address AccessAddressAssignmentPool#sip_server_inet6_address}
  */
  readonly sipServerInet6Address?: string[];
  /**
  * SIP server domain name available to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#sip_server_inet6_domain_name AccessAddressAssignmentPool#sip_server_inet6_domain_name}
  */
  readonly sipServerInet6DomainName?: string;
  /**
  * SIP servers list of IPv4 addresses available to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#sip_server_inet_address AccessAddressAssignmentPool#sip_server_inet_address}
  */
  readonly sipServerInetAddress?: string[];
  /**
  * SIP server domain name available to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#sip_server_inet_domain_name AccessAddressAssignmentPool#sip_server_inet_domain_name}
  */
  readonly sipServerInetDomainName?: string[];
  /**
  * T1 time as percentage of preferred lifetime or max lease (percent)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#t1_percentage AccessAddressAssignmentPool#t1_percentage}
  */
  readonly t1Percentage?: number;
  /**
  * T1 renewal time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#t1_renewal_time AccessAddressAssignmentPool#t1_renewal_time}
  */
  readonly t1RenewalTime?: number;
  /**
  * T2 time as percentage of preferred lifetime or max lease (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#t2_percentage AccessAddressAssignmentPool#t2_percentage}
  */
  readonly t2Percentage?: number;
  /**
  * T2 rebinding time (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#t2_rebinding_time AccessAddressAssignmentPool#t2_rebinding_time}
  */
  readonly t2RebindingTime?: number;
  /**
  * TFTP server IP address advertised to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#tftp_server AccessAddressAssignmentPool#tftp_server}
  */
  readonly tftpServer?: string;
  /**
  * Valid lifetime advertised to clients (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#valid_lifetime AccessAddressAssignmentPool#valid_lifetime}
  */
  readonly validLifetime?: number;
  /**
  * Lease time can be infinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#valid_lifetime_infinite AccessAddressAssignmentPool#valid_lifetime_infinite}
  */
  readonly validLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * WINS name servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#wins_server AccessAddressAssignmentPool#wins_server}
  */
  readonly winsServer?: string[];
  /**
  * option_match_82_circuit_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#option_match_82_circuit_id AccessAddressAssignmentPool#option_match_82_circuit_id}
  */
  readonly optionMatch82CircuitId?: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId[] | cdktf.IResolvable;
  /**
  * option_match_82_remote_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#option_match_82_remote_id AccessAddressAssignmentPool#option_match_82_remote_id}
  */
  readonly optionMatch82RemoteId?: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId[] | cdktf.IResolvable;
}

export function accessAddressAssignmentPoolFamilyDhcpAttributesToTerraform(struct?: AccessAddressAssignmentPoolFamilyDhcpAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_file: cdktf.stringToTerraform(struct!.bootFile),
    boot_server: cdktf.stringToTerraform(struct!.bootServer),
    dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServer),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    exclude_prefix_len: cdktf.numberToTerraform(struct!.excludePrefixLen),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    maximum_lease_time: cdktf.numberToTerraform(struct!.maximumLeaseTime),
    maximum_lease_time_infinite: cdktf.booleanToTerraform(struct!.maximumLeaseTimeInfinite),
    name_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameServer),
    netbios_node_type: cdktf.stringToTerraform(struct!.netbiosNodeType),
    next_server: cdktf.stringToTerraform(struct!.nextServer),
    option: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    preferred_lifetime_infinite: cdktf.booleanToTerraform(struct!.preferredLifetimeInfinite),
    propagate_ppp_settings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propagatePppSettings),
    propagate_settings: cdktf.stringToTerraform(struct!.propagateSettings),
    router: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.router),
    server_identifier: cdktf.stringToTerraform(struct!.serverIdentifier),
    sip_server_inet6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sipServerInet6Address),
    sip_server_inet6_domain_name: cdktf.stringToTerraform(struct!.sipServerInet6DomainName),
    sip_server_inet_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sipServerInetAddress),
    sip_server_inet_domain_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sipServerInetDomainName),
    t1_percentage: cdktf.numberToTerraform(struct!.t1Percentage),
    t1_renewal_time: cdktf.numberToTerraform(struct!.t1RenewalTime),
    t2_percentage: cdktf.numberToTerraform(struct!.t2Percentage),
    t2_rebinding_time: cdktf.numberToTerraform(struct!.t2RebindingTime),
    tftp_server: cdktf.stringToTerraform(struct!.tftpServer),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
    valid_lifetime_infinite: cdktf.booleanToTerraform(struct!.validLifetimeInfinite),
    wins_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.winsServer),
    option_match_82_circuit_id: cdktf.listMapper(accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdToTerraform, true)(struct!.optionMatch82CircuitId),
    option_match_82_remote_id: cdktf.listMapper(accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdToTerraform, true)(struct!.optionMatch82RemoteId),
  }
}


export function accessAddressAssignmentPoolFamilyDhcpAttributesToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyDhcpAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_file: {
      value: cdktf.stringToHclTerraform(struct!.bootFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_server: {
      value: cdktf.stringToHclTerraform(struct!.bootServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.excludePrefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.maximumLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_lease_time_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.maximumLeaseTimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    netbios_node_type: {
      value: cdktf.stringToHclTerraform(struct!.netbiosNodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_server: {
      value: cdktf.stringToHclTerraform(struct!.nextServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_lifetime_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.preferredLifetimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate_ppp_settings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propagatePppSettings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    propagate_settings: {
      value: cdktf.stringToHclTerraform(struct!.propagateSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.router),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_identifier: {
      value: cdktf.stringToHclTerraform(struct!.serverIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_server_inet6_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sipServerInet6Address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sip_server_inet6_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.sipServerInet6DomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_server_inet_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sipServerInetAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sip_server_inet_domain_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sipServerInetDomainName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    t1_percentage: {
      value: cdktf.numberToHclTerraform(struct!.t1Percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t1_renewal_time: {
      value: cdktf.numberToHclTerraform(struct!.t1RenewalTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t2_percentage: {
      value: cdktf.numberToHclTerraform(struct!.t2Percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    t2_rebinding_time: {
      value: cdktf.numberToHclTerraform(struct!.t2RebindingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tftp_server: {
      value: cdktf.stringToHclTerraform(struct!.tftpServer),
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
    valid_lifetime_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.validLifetimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wins_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.winsServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    option_match_82_circuit_id: {
      value: cdktf.listMapperHcl(accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdToHclTerraform, true)(struct!.optionMatch82CircuitId),
      isBlock: true,
      type: "list",
      storageClassType: "AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdList",
    },
    option_match_82_remote_id: {
      value: cdktf.listMapperHcl(accessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdToHclTerraform, true)(struct!.optionMatch82RemoteId),
      isBlock: true,
      type: "list",
      storageClassType: "AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessAddressAssignmentPoolFamilyDhcpAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessAddressAssignmentPoolFamilyDhcpAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootFile = this._bootFile;
    }
    if (this._bootServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootServer = this._bootServer;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._excludePrefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrefixLen = this._excludePrefixLen;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._maximumLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLeaseTime = this._maximumLeaseTime;
    }
    if (this._maximumLeaseTimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLeaseTimeInfinite = this._maximumLeaseTimeInfinite;
    }
    if (this._nameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer;
    }
    if (this._netbiosNodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosNodeType = this._netbiosNodeType;
    }
    if (this._nextServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextServer = this._nextServer;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._preferredLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetimeInfinite = this._preferredLifetimeInfinite;
    }
    if (this._propagatePppSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatePppSettings = this._propagatePppSettings;
    }
    if (this._propagateSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateSettings = this._propagateSettings;
    }
    if (this._router !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router;
    }
    if (this._serverIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdentifier = this._serverIdentifier;
    }
    if (this._sipServerInet6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipServerInet6Address = this._sipServerInet6Address;
    }
    if (this._sipServerInet6DomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipServerInet6DomainName = this._sipServerInet6DomainName;
    }
    if (this._sipServerInetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipServerInetAddress = this._sipServerInetAddress;
    }
    if (this._sipServerInetDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipServerInetDomainName = this._sipServerInetDomainName;
    }
    if (this._t1Percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1Percentage = this._t1Percentage;
    }
    if (this._t1RenewalTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1RenewalTime = this._t1RenewalTime;
    }
    if (this._t2Percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.t2Percentage = this._t2Percentage;
    }
    if (this._t2RebindingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.t2RebindingTime = this._t2RebindingTime;
    }
    if (this._tftpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpServer = this._tftpServer;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    if (this._validLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetimeInfinite = this._validLifetimeInfinite;
    }
    if (this._winsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsServer = this._winsServer;
    }
    if (this._optionMatch82CircuitId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionMatch82CircuitId = this._optionMatch82CircuitId?.internalValue;
    }
    if (this._optionMatch82RemoteId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionMatch82RemoteId = this._optionMatch82RemoteId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyDhcpAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootFile = undefined;
      this._bootServer = undefined;
      this._dnsServer = undefined;
      this._domainName = undefined;
      this._excludePrefixLen = undefined;
      this._gracePeriod = undefined;
      this._maximumLeaseTime = undefined;
      this._maximumLeaseTimeInfinite = undefined;
      this._nameServer = undefined;
      this._netbiosNodeType = undefined;
      this._nextServer = undefined;
      this._option = undefined;
      this._preferredLifetime = undefined;
      this._preferredLifetimeInfinite = undefined;
      this._propagatePppSettings = undefined;
      this._propagateSettings = undefined;
      this._router = undefined;
      this._serverIdentifier = undefined;
      this._sipServerInet6Address = undefined;
      this._sipServerInet6DomainName = undefined;
      this._sipServerInetAddress = undefined;
      this._sipServerInetDomainName = undefined;
      this._t1Percentage = undefined;
      this._t1RenewalTime = undefined;
      this._t2Percentage = undefined;
      this._t2RebindingTime = undefined;
      this._tftpServer = undefined;
      this._validLifetime = undefined;
      this._validLifetimeInfinite = undefined;
      this._winsServer = undefined;
      this._optionMatch82CircuitId.internalValue = undefined;
      this._optionMatch82RemoteId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootFile = value.bootFile;
      this._bootServer = value.bootServer;
      this._dnsServer = value.dnsServer;
      this._domainName = value.domainName;
      this._excludePrefixLen = value.excludePrefixLen;
      this._gracePeriod = value.gracePeriod;
      this._maximumLeaseTime = value.maximumLeaseTime;
      this._maximumLeaseTimeInfinite = value.maximumLeaseTimeInfinite;
      this._nameServer = value.nameServer;
      this._netbiosNodeType = value.netbiosNodeType;
      this._nextServer = value.nextServer;
      this._option = value.option;
      this._preferredLifetime = value.preferredLifetime;
      this._preferredLifetimeInfinite = value.preferredLifetimeInfinite;
      this._propagatePppSettings = value.propagatePppSettings;
      this._propagateSettings = value.propagateSettings;
      this._router = value.router;
      this._serverIdentifier = value.serverIdentifier;
      this._sipServerInet6Address = value.sipServerInet6Address;
      this._sipServerInet6DomainName = value.sipServerInet6DomainName;
      this._sipServerInetAddress = value.sipServerInetAddress;
      this._sipServerInetDomainName = value.sipServerInetDomainName;
      this._t1Percentage = value.t1Percentage;
      this._t1RenewalTime = value.t1RenewalTime;
      this._t2Percentage = value.t2Percentage;
      this._t2RebindingTime = value.t2RebindingTime;
      this._tftpServer = value.tftpServer;
      this._validLifetime = value.validLifetime;
      this._validLifetimeInfinite = value.validLifetimeInfinite;
      this._winsServer = value.winsServer;
      this._optionMatch82CircuitId.internalValue = value.optionMatch82CircuitId;
      this._optionMatch82RemoteId.internalValue = value.optionMatch82RemoteId;
    }
  }

  // boot_file - computed: false, optional: true, required: false
  private _bootFile?: string; 
  public get bootFile() {
    return this.getStringAttribute('boot_file');
  }
  public set bootFile(value: string) {
    this._bootFile = value;
  }
  public resetBootFile() {
    this._bootFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFileInput() {
    return this._bootFile;
  }

  // boot_server - computed: false, optional: true, required: false
  private _bootServer?: string; 
  public get bootServer() {
    return this.getStringAttribute('boot_server');
  }
  public set bootServer(value: string) {
    this._bootServer = value;
  }
  public resetBootServer() {
    this._bootServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootServerInput() {
    return this._bootServer;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // exclude_prefix_len - computed: false, optional: true, required: false
  private _excludePrefixLen?: number; 
  public get excludePrefixLen() {
    return this.getNumberAttribute('exclude_prefix_len');
  }
  public set excludePrefixLen(value: number) {
    this._excludePrefixLen = value;
  }
  public resetExcludePrefixLen() {
    this._excludePrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrefixLenInput() {
    return this._excludePrefixLen;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // maximum_lease_time - computed: false, optional: true, required: false
  private _maximumLeaseTime?: number; 
  public get maximumLeaseTime() {
    return this.getNumberAttribute('maximum_lease_time');
  }
  public set maximumLeaseTime(value: number) {
    this._maximumLeaseTime = value;
  }
  public resetMaximumLeaseTime() {
    this._maximumLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLeaseTimeInput() {
    return this._maximumLeaseTime;
  }

  // maximum_lease_time_infinite - computed: false, optional: true, required: false
  private _maximumLeaseTimeInfinite?: boolean | cdktf.IResolvable; 
  public get maximumLeaseTimeInfinite() {
    return this.getBooleanAttribute('maximum_lease_time_infinite');
  }
  public set maximumLeaseTimeInfinite(value: boolean | cdktf.IResolvable) {
    this._maximumLeaseTimeInfinite = value;
  }
  public resetMaximumLeaseTimeInfinite() {
    this._maximumLeaseTimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLeaseTimeInfiniteInput() {
    return this._maximumLeaseTimeInfinite;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer?: string[]; 
  public get nameServer() {
    return this.getListAttribute('name_server');
  }
  public set nameServer(value: string[]) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // netbios_node_type - computed: false, optional: true, required: false
  private _netbiosNodeType?: string; 
  public get netbiosNodeType() {
    return this.getStringAttribute('netbios_node_type');
  }
  public set netbiosNodeType(value: string) {
    this._netbiosNodeType = value;
  }
  public resetNetbiosNodeType() {
    this._netbiosNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNodeTypeInput() {
    return this._netbiosNodeType;
  }

  // next_server - computed: false, optional: true, required: false
  private _nextServer?: string; 
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }
  public set nextServer(value: string) {
    this._nextServer = value;
  }
  public resetNextServer() {
    this._nextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextServerInput() {
    return this._nextServer;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string[]; 
  public get option() {
    return cdktf.Fn.tolist(this.getListAttribute('option'));
  }
  public set option(value: string[]) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
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

  // preferred_lifetime_infinite - computed: false, optional: true, required: false
  private _preferredLifetimeInfinite?: boolean | cdktf.IResolvable; 
  public get preferredLifetimeInfinite() {
    return this.getBooleanAttribute('preferred_lifetime_infinite');
  }
  public set preferredLifetimeInfinite(value: boolean | cdktf.IResolvable) {
    this._preferredLifetimeInfinite = value;
  }
  public resetPreferredLifetimeInfinite() {
    this._preferredLifetimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInfiniteInput() {
    return this._preferredLifetimeInfinite;
  }

  // propagate_ppp_settings - computed: false, optional: true, required: false
  private _propagatePppSettings?: string[]; 
  public get propagatePppSettings() {
    return cdktf.Fn.tolist(this.getListAttribute('propagate_ppp_settings'));
  }
  public set propagatePppSettings(value: string[]) {
    this._propagatePppSettings = value;
  }
  public resetPropagatePppSettings() {
    this._propagatePppSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatePppSettingsInput() {
    return this._propagatePppSettings;
  }

  // propagate_settings - computed: false, optional: true, required: false
  private _propagateSettings?: string; 
  public get propagateSettings() {
    return this.getStringAttribute('propagate_settings');
  }
  public set propagateSettings(value: string) {
    this._propagateSettings = value;
  }
  public resetPropagateSettings() {
    this._propagateSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateSettingsInput() {
    return this._propagateSettings;
  }

  // router - computed: false, optional: true, required: false
  private _router?: string[]; 
  public get router() {
    return this.getListAttribute('router');
  }
  public set router(value: string[]) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // server_identifier - computed: false, optional: true, required: false
  private _serverIdentifier?: string; 
  public get serverIdentifier() {
    return this.getStringAttribute('server_identifier');
  }
  public set serverIdentifier(value: string) {
    this._serverIdentifier = value;
  }
  public resetServerIdentifier() {
    this._serverIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdentifierInput() {
    return this._serverIdentifier;
  }

  // sip_server_inet6_address - computed: false, optional: true, required: false
  private _sipServerInet6Address?: string[]; 
  public get sipServerInet6Address() {
    return this.getListAttribute('sip_server_inet6_address');
  }
  public set sipServerInet6Address(value: string[]) {
    this._sipServerInet6Address = value;
  }
  public resetSipServerInet6Address() {
    this._sipServerInet6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipServerInet6AddressInput() {
    return this._sipServerInet6Address;
  }

  // sip_server_inet6_domain_name - computed: false, optional: true, required: false
  private _sipServerInet6DomainName?: string; 
  public get sipServerInet6DomainName() {
    return this.getStringAttribute('sip_server_inet6_domain_name');
  }
  public set sipServerInet6DomainName(value: string) {
    this._sipServerInet6DomainName = value;
  }
  public resetSipServerInet6DomainName() {
    this._sipServerInet6DomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipServerInet6DomainNameInput() {
    return this._sipServerInet6DomainName;
  }

  // sip_server_inet_address - computed: false, optional: true, required: false
  private _sipServerInetAddress?: string[]; 
  public get sipServerInetAddress() {
    return this.getListAttribute('sip_server_inet_address');
  }
  public set sipServerInetAddress(value: string[]) {
    this._sipServerInetAddress = value;
  }
  public resetSipServerInetAddress() {
    this._sipServerInetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipServerInetAddressInput() {
    return this._sipServerInetAddress;
  }

  // sip_server_inet_domain_name - computed: false, optional: true, required: false
  private _sipServerInetDomainName?: string[]; 
  public get sipServerInetDomainName() {
    return this.getListAttribute('sip_server_inet_domain_name');
  }
  public set sipServerInetDomainName(value: string[]) {
    this._sipServerInetDomainName = value;
  }
  public resetSipServerInetDomainName() {
    this._sipServerInetDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipServerInetDomainNameInput() {
    return this._sipServerInetDomainName;
  }

  // t1_percentage - computed: false, optional: true, required: false
  private _t1Percentage?: number; 
  public get t1Percentage() {
    return this.getNumberAttribute('t1_percentage');
  }
  public set t1Percentage(value: number) {
    this._t1Percentage = value;
  }
  public resetT1Percentage() {
    this._t1Percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1PercentageInput() {
    return this._t1Percentage;
  }

  // t1_renewal_time - computed: false, optional: true, required: false
  private _t1RenewalTime?: number; 
  public get t1RenewalTime() {
    return this.getNumberAttribute('t1_renewal_time');
  }
  public set t1RenewalTime(value: number) {
    this._t1RenewalTime = value;
  }
  public resetT1RenewalTime() {
    this._t1RenewalTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1RenewalTimeInput() {
    return this._t1RenewalTime;
  }

  // t2_percentage - computed: false, optional: true, required: false
  private _t2Percentage?: number; 
  public get t2Percentage() {
    return this.getNumberAttribute('t2_percentage');
  }
  public set t2Percentage(value: number) {
    this._t2Percentage = value;
  }
  public resetT2Percentage() {
    this._t2Percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t2PercentageInput() {
    return this._t2Percentage;
  }

  // t2_rebinding_time - computed: false, optional: true, required: false
  private _t2RebindingTime?: number; 
  public get t2RebindingTime() {
    return this.getNumberAttribute('t2_rebinding_time');
  }
  public set t2RebindingTime(value: number) {
    this._t2RebindingTime = value;
  }
  public resetT2RebindingTime() {
    this._t2RebindingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t2RebindingTimeInput() {
    return this._t2RebindingTime;
  }

  // tftp_server - computed: false, optional: true, required: false
  private _tftpServer?: string; 
  public get tftpServer() {
    return this.getStringAttribute('tftp_server');
  }
  public set tftpServer(value: string) {
    this._tftpServer = value;
  }
  public resetTftpServer() {
    this._tftpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServerInput() {
    return this._tftpServer;
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

  // valid_lifetime_infinite - computed: false, optional: true, required: false
  private _validLifetimeInfinite?: boolean | cdktf.IResolvable; 
  public get validLifetimeInfinite() {
    return this.getBooleanAttribute('valid_lifetime_infinite');
  }
  public set validLifetimeInfinite(value: boolean | cdktf.IResolvable) {
    this._validLifetimeInfinite = value;
  }
  public resetValidLifetimeInfinite() {
    this._validLifetimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInfiniteInput() {
    return this._validLifetimeInfinite;
  }

  // wins_server - computed: false, optional: true, required: false
  private _winsServer?: string[]; 
  public get winsServer() {
    return this.getListAttribute('wins_server');
  }
  public set winsServer(value: string[]) {
    this._winsServer = value;
  }
  public resetWinsServer() {
    this._winsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServerInput() {
    return this._winsServer;
  }

  // option_match_82_circuit_id - computed: false, optional: true, required: false
  private _optionMatch82CircuitId = new AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitIdList(this, "option_match_82_circuit_id", false);
  public get optionMatch82CircuitId() {
    return this._optionMatch82CircuitId;
  }
  public putOptionMatch82CircuitId(value: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82CircuitId[] | cdktf.IResolvable) {
    this._optionMatch82CircuitId.internalValue = value;
  }
  public resetOptionMatch82CircuitId() {
    this._optionMatch82CircuitId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionMatch82CircuitIdInput() {
    return this._optionMatch82CircuitId.internalValue;
  }

  // option_match_82_remote_id - computed: false, optional: true, required: false
  private _optionMatch82RemoteId = new AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteIdList(this, "option_match_82_remote_id", false);
  public get optionMatch82RemoteId() {
    return this._optionMatch82RemoteId;
  }
  public putOptionMatch82RemoteId(value: AccessAddressAssignmentPoolFamilyDhcpAttributesOptionMatch82RemoteId[] | cdktf.IResolvable) {
    this._optionMatch82RemoteId.internalValue = value;
  }
  public resetOptionMatch82RemoteId() {
    this._optionMatch82RemoteId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionMatch82RemoteIdInput() {
    return this._optionMatch82RemoteId.internalValue;
  }
}
export interface AccessAddressAssignmentPoolFamilyExcludedRange {
  /**
  * Upper limit of excluded address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#high AccessAddressAssignmentPool#high}
  */
  readonly high: string;
  /**
  * Lower limit of excluded address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#low AccessAddressAssignmentPool#low}
  */
  readonly low: string;
  /**
  * Range name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#name AccessAddressAssignmentPool#name}
  */
  readonly name: string;
}

export function accessAddressAssignmentPoolFamilyExcludedRangeToTerraform(struct?: AccessAddressAssignmentPoolFamilyExcludedRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.stringToTerraform(struct!.high),
    low: cdktf.stringToTerraform(struct!.low),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function accessAddressAssignmentPoolFamilyExcludedRangeToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyExcludedRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.stringToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low: {
      value: cdktf.stringToHclTerraform(struct!.low),
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

export class AccessAddressAssignmentPoolFamilyExcludedRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessAddressAssignmentPoolFamilyExcludedRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyExcludedRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
      this._name = value.name;
    }
  }

  // high - computed: false, optional: false, required: true
  private _high?: string; 
  public get high() {
    return this.getStringAttribute('high');
  }
  public set high(value: string) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: false, required: true
  private _low?: string; 
  public get low() {
    return this.getStringAttribute('low');
  }
  public set low(value: string) {
    this._low = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
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

export class AccessAddressAssignmentPoolFamilyExcludedRangeList extends cdktf.ComplexList {
  public internalValue? : AccessAddressAssignmentPoolFamilyExcludedRange[] | cdktf.IResolvable

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
  public get(index: number): AccessAddressAssignmentPoolFamilyExcludedRangeOutputReference {
    return new AccessAddressAssignmentPoolFamilyExcludedRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessAddressAssignmentPoolFamilyHost {
  /**
  * Hardware address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#hardware_address AccessAddressAssignmentPool#hardware_address}
  */
  readonly hardwareAddress?: string;
  /**
  * Reserved address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#ip_address AccessAddressAssignmentPool#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Hostname for static reservations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#name AccessAddressAssignmentPool#name}
  */
  readonly name: string;
  /**
  * Set subscriber user name as host identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#user_name AccessAddressAssignmentPool#user_name}
  */
  readonly userName?: boolean | cdktf.IResolvable;
}

export function accessAddressAssignmentPoolFamilyHostToTerraform(struct?: AccessAddressAssignmentPoolFamilyHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hardware_address: cdktf.stringToTerraform(struct!.hardwareAddress),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    user_name: cdktf.booleanToTerraform(struct!.userName),
  }
}


export function accessAddressAssignmentPoolFamilyHostToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hardware_address: {
      value: cdktf.stringToHclTerraform(struct!.hardwareAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    user_name: {
      value: cdktf.booleanToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessAddressAssignmentPoolFamilyHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessAddressAssignmentPoolFamilyHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hardwareAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareAddress = this._hardwareAddress;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hardwareAddress = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hardwareAddress = value.hardwareAddress;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._userName = value.userName;
    }
  }

  // hardware_address - computed: false, optional: true, required: false
  private _hardwareAddress?: string; 
  public get hardwareAddress() {
    return this.getStringAttribute('hardware_address');
  }
  public set hardwareAddress(value: string) {
    this._hardwareAddress = value;
  }
  public resetHardwareAddress() {
    this._hardwareAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareAddressInput() {
    return this._hardwareAddress;
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: boolean | cdktf.IResolvable; 
  public get userName() {
    return this.getBooleanAttribute('user_name');
  }
  public set userName(value: boolean | cdktf.IResolvable) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class AccessAddressAssignmentPoolFamilyHostList extends cdktf.ComplexList {
  public internalValue? : AccessAddressAssignmentPoolFamilyHost[] | cdktf.IResolvable

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
  public get(index: number): AccessAddressAssignmentPoolFamilyHostOutputReference {
    return new AccessAddressAssignmentPoolFamilyHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessAddressAssignmentPoolFamilyInet6Range {
  /**
  * Upper limit of IPv6 address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#high AccessAddressAssignmentPool#high}
  */
  readonly high?: string;
  /**
  * Lower limit of IPv6 address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#low AccessAddressAssignmentPool#low}
  */
  readonly low?: string;
  /**
  * Range name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#name AccessAddressAssignmentPool#name}
  */
  readonly name: string;
  /**
  * IPv6 delegated prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#prefix_length AccessAddressAssignmentPool#prefix_length}
  */
  readonly prefixLength?: number;
}

export function accessAddressAssignmentPoolFamilyInet6RangeToTerraform(struct?: AccessAddressAssignmentPoolFamilyInet6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.stringToTerraform(struct!.high),
    low: cdktf.stringToTerraform(struct!.low),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function accessAddressAssignmentPoolFamilyInet6RangeToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyInet6Range | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.stringToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low: {
      value: cdktf.stringToHclTerraform(struct!.low),
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
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessAddressAssignmentPoolFamilyInet6RangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessAddressAssignmentPoolFamilyInet6Range | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyInet6Range | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
      this._name = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
      this._name = value.name;
      this._prefixLength = value.prefixLength;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: string; 
  public get high() {
    return this.getStringAttribute('high');
  }
  public set high(value: string) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: string; 
  public get low() {
    return this.getStringAttribute('low');
  }
  public set low(value: string) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
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

  // prefix_length - computed: false, optional: true, required: false
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
}

export class AccessAddressAssignmentPoolFamilyInet6RangeList extends cdktf.ComplexList {
  public internalValue? : AccessAddressAssignmentPoolFamilyInet6Range[] | cdktf.IResolvable

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
  public get(index: number): AccessAddressAssignmentPoolFamilyInet6RangeOutputReference {
    return new AccessAddressAssignmentPoolFamilyInet6RangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessAddressAssignmentPoolFamilyInetRange {
  /**
  * Upper limit of address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#high AccessAddressAssignmentPool#high}
  */
  readonly high: string;
  /**
  * Lower limit of address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#low AccessAddressAssignmentPool#low}
  */
  readonly low: string;
  /**
  * Range name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#name AccessAddressAssignmentPool#name}
  */
  readonly name: string;
}

export function accessAddressAssignmentPoolFamilyInetRangeToTerraform(struct?: AccessAddressAssignmentPoolFamilyInetRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.stringToTerraform(struct!.high),
    low: cdktf.stringToTerraform(struct!.low),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function accessAddressAssignmentPoolFamilyInetRangeToHclTerraform(struct?: AccessAddressAssignmentPoolFamilyInetRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.stringToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low: {
      value: cdktf.stringToHclTerraform(struct!.low),
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

export class AccessAddressAssignmentPoolFamilyInetRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessAddressAssignmentPoolFamilyInetRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamilyInetRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
      this._name = value.name;
    }
  }

  // high - computed: false, optional: false, required: true
  private _high?: string; 
  public get high() {
    return this.getStringAttribute('high');
  }
  public set high(value: string) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: false, required: true
  private _low?: string; 
  public get low() {
    return this.getStringAttribute('low');
  }
  public set low(value: string) {
    this._low = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
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

export class AccessAddressAssignmentPoolFamilyInetRangeList extends cdktf.ComplexList {
  public internalValue? : AccessAddressAssignmentPoolFamilyInetRange[] | cdktf.IResolvable

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
  public get(index: number): AccessAddressAssignmentPoolFamilyInetRangeOutputReference {
    return new AccessAddressAssignmentPoolFamilyInetRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessAddressAssignmentPoolFamily {
  /**
  * Excluded Addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#excluded_address AccessAddressAssignmentPool#excluded_address}
  */
  readonly excludedAddress?: string[];
  /**
  * Network address of pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#network AccessAddressAssignmentPool#network}
  */
  readonly network: string;
  /**
  * Type of family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#type AccessAddressAssignmentPool#type}
  */
  readonly type: string;
  /**
  * Specify the primary-dns IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#xauth_attributes_primary_dns AccessAddressAssignmentPool#xauth_attributes_primary_dns}
  */
  readonly xauthAttributesPrimaryDns?: string;
  /**
  * Specify the primary-wins IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#xauth_attributes_primary_wins AccessAddressAssignmentPool#xauth_attributes_primary_wins}
  */
  readonly xauthAttributesPrimaryWins?: string;
  /**
  * Specify the secondary-dns IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#xauth_attributes_secondary_dns AccessAddressAssignmentPool#xauth_attributes_secondary_dns}
  */
  readonly xauthAttributesSecondaryDns?: string;
  /**
  * Specify the secondary-wins IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#xauth_attributes_secondary_wins AccessAddressAssignmentPool#xauth_attributes_secondary_wins}
  */
  readonly xauthAttributesSecondaryWins?: string;
  /**
  * dhcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#dhcp_attributes AccessAddressAssignmentPool#dhcp_attributes}
  */
  readonly dhcpAttributes?: AccessAddressAssignmentPoolFamilyDhcpAttributes;
  /**
  * excluded_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#excluded_range AccessAddressAssignmentPool#excluded_range}
  */
  readonly excludedRange?: AccessAddressAssignmentPoolFamilyExcludedRange[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#host AccessAddressAssignmentPool#host}
  */
  readonly host?: AccessAddressAssignmentPoolFamilyHost[] | cdktf.IResolvable;
  /**
  * inet6_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#inet6_range AccessAddressAssignmentPool#inet6_range}
  */
  readonly inet6Range?: AccessAddressAssignmentPoolFamilyInet6Range[] | cdktf.IResolvable;
  /**
  * inet_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#inet_range AccessAddressAssignmentPool#inet_range}
  */
  readonly inetRange?: AccessAddressAssignmentPoolFamilyInetRange[] | cdktf.IResolvable;
}

export function accessAddressAssignmentPoolFamilyToTerraform(struct?: AccessAddressAssignmentPoolFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedAddress),
    network: cdktf.stringToTerraform(struct!.network),
    type: cdktf.stringToTerraform(struct!.type),
    xauth_attributes_primary_dns: cdktf.stringToTerraform(struct!.xauthAttributesPrimaryDns),
    xauth_attributes_primary_wins: cdktf.stringToTerraform(struct!.xauthAttributesPrimaryWins),
    xauth_attributes_secondary_dns: cdktf.stringToTerraform(struct!.xauthAttributesSecondaryDns),
    xauth_attributes_secondary_wins: cdktf.stringToTerraform(struct!.xauthAttributesSecondaryWins),
    dhcp_attributes: accessAddressAssignmentPoolFamilyDhcpAttributesToTerraform(struct!.dhcpAttributes),
    excluded_range: cdktf.listMapper(accessAddressAssignmentPoolFamilyExcludedRangeToTerraform, true)(struct!.excludedRange),
    host: cdktf.listMapper(accessAddressAssignmentPoolFamilyHostToTerraform, true)(struct!.host),
    inet6_range: cdktf.listMapper(accessAddressAssignmentPoolFamilyInet6RangeToTerraform, true)(struct!.inet6Range),
    inet_range: cdktf.listMapper(accessAddressAssignmentPoolFamilyInetRangeToTerraform, true)(struct!.inetRange),
  }
}


export function accessAddressAssignmentPoolFamilyToHclTerraform(struct?: AccessAddressAssignmentPoolFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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
    xauth_attributes_primary_dns: {
      value: cdktf.stringToHclTerraform(struct!.xauthAttributesPrimaryDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xauth_attributes_primary_wins: {
      value: cdktf.stringToHclTerraform(struct!.xauthAttributesPrimaryWins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xauth_attributes_secondary_dns: {
      value: cdktf.stringToHclTerraform(struct!.xauthAttributesSecondaryDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xauth_attributes_secondary_wins: {
      value: cdktf.stringToHclTerraform(struct!.xauthAttributesSecondaryWins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_attributes: {
      value: accessAddressAssignmentPoolFamilyDhcpAttributesToHclTerraform(struct!.dhcpAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "AccessAddressAssignmentPoolFamilyDhcpAttributes",
    },
    excluded_range: {
      value: cdktf.listMapperHcl(accessAddressAssignmentPoolFamilyExcludedRangeToHclTerraform, true)(struct!.excludedRange),
      isBlock: true,
      type: "list",
      storageClassType: "AccessAddressAssignmentPoolFamilyExcludedRangeList",
    },
    host: {
      value: cdktf.listMapperHcl(accessAddressAssignmentPoolFamilyHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "AccessAddressAssignmentPoolFamilyHostList",
    },
    inet6_range: {
      value: cdktf.listMapperHcl(accessAddressAssignmentPoolFamilyInet6RangeToHclTerraform, true)(struct!.inet6Range),
      isBlock: true,
      type: "list",
      storageClassType: "AccessAddressAssignmentPoolFamilyInet6RangeList",
    },
    inet_range: {
      value: cdktf.listMapperHcl(accessAddressAssignmentPoolFamilyInetRangeToHclTerraform, true)(struct!.inetRange),
      isBlock: true,
      type: "list",
      storageClassType: "AccessAddressAssignmentPoolFamilyInetRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessAddressAssignmentPoolFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessAddressAssignmentPoolFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedAddress = this._excludedAddress;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._xauthAttributesPrimaryDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.xauthAttributesPrimaryDns = this._xauthAttributesPrimaryDns;
    }
    if (this._xauthAttributesPrimaryWins !== undefined) {
      hasAnyValues = true;
      internalValueResult.xauthAttributesPrimaryWins = this._xauthAttributesPrimaryWins;
    }
    if (this._xauthAttributesSecondaryDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.xauthAttributesSecondaryDns = this._xauthAttributesSecondaryDns;
    }
    if (this._xauthAttributesSecondaryWins !== undefined) {
      hasAnyValues = true;
      internalValueResult.xauthAttributesSecondaryWins = this._xauthAttributesSecondaryWins;
    }
    if (this._dhcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpAttributes = this._dhcpAttributes?.internalValue;
    }
    if (this._excludedRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRange = this._excludedRange?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._inet6Range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet6Range = this._inet6Range?.internalValue;
    }
    if (this._inetRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inetRange = this._inetRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessAddressAssignmentPoolFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedAddress = undefined;
      this._network = undefined;
      this._type = undefined;
      this._xauthAttributesPrimaryDns = undefined;
      this._xauthAttributesPrimaryWins = undefined;
      this._xauthAttributesSecondaryDns = undefined;
      this._xauthAttributesSecondaryWins = undefined;
      this._dhcpAttributes.internalValue = undefined;
      this._excludedRange.internalValue = undefined;
      this._host.internalValue = undefined;
      this._inet6Range.internalValue = undefined;
      this._inetRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedAddress = value.excludedAddress;
      this._network = value.network;
      this._type = value.type;
      this._xauthAttributesPrimaryDns = value.xauthAttributesPrimaryDns;
      this._xauthAttributesPrimaryWins = value.xauthAttributesPrimaryWins;
      this._xauthAttributesSecondaryDns = value.xauthAttributesSecondaryDns;
      this._xauthAttributesSecondaryWins = value.xauthAttributesSecondaryWins;
      this._dhcpAttributes.internalValue = value.dhcpAttributes;
      this._excludedRange.internalValue = value.excludedRange;
      this._host.internalValue = value.host;
      this._inet6Range.internalValue = value.inet6Range;
      this._inetRange.internalValue = value.inetRange;
    }
  }

  // excluded_address - computed: false, optional: true, required: false
  private _excludedAddress?: string[]; 
  public get excludedAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_address'));
  }
  public set excludedAddress(value: string[]) {
    this._excludedAddress = value;
  }
  public resetExcludedAddress() {
    this._excludedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAddressInput() {
    return this._excludedAddress;
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

  // xauth_attributes_primary_dns - computed: false, optional: true, required: false
  private _xauthAttributesPrimaryDns?: string; 
  public get xauthAttributesPrimaryDns() {
    return this.getStringAttribute('xauth_attributes_primary_dns');
  }
  public set xauthAttributesPrimaryDns(value: string) {
    this._xauthAttributesPrimaryDns = value;
  }
  public resetXauthAttributesPrimaryDns() {
    this._xauthAttributesPrimaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthAttributesPrimaryDnsInput() {
    return this._xauthAttributesPrimaryDns;
  }

  // xauth_attributes_primary_wins - computed: false, optional: true, required: false
  private _xauthAttributesPrimaryWins?: string; 
  public get xauthAttributesPrimaryWins() {
    return this.getStringAttribute('xauth_attributes_primary_wins');
  }
  public set xauthAttributesPrimaryWins(value: string) {
    this._xauthAttributesPrimaryWins = value;
  }
  public resetXauthAttributesPrimaryWins() {
    this._xauthAttributesPrimaryWins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthAttributesPrimaryWinsInput() {
    return this._xauthAttributesPrimaryWins;
  }

  // xauth_attributes_secondary_dns - computed: false, optional: true, required: false
  private _xauthAttributesSecondaryDns?: string; 
  public get xauthAttributesSecondaryDns() {
    return this.getStringAttribute('xauth_attributes_secondary_dns');
  }
  public set xauthAttributesSecondaryDns(value: string) {
    this._xauthAttributesSecondaryDns = value;
  }
  public resetXauthAttributesSecondaryDns() {
    this._xauthAttributesSecondaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthAttributesSecondaryDnsInput() {
    return this._xauthAttributesSecondaryDns;
  }

  // xauth_attributes_secondary_wins - computed: false, optional: true, required: false
  private _xauthAttributesSecondaryWins?: string; 
  public get xauthAttributesSecondaryWins() {
    return this.getStringAttribute('xauth_attributes_secondary_wins');
  }
  public set xauthAttributesSecondaryWins(value: string) {
    this._xauthAttributesSecondaryWins = value;
  }
  public resetXauthAttributesSecondaryWins() {
    this._xauthAttributesSecondaryWins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthAttributesSecondaryWinsInput() {
    return this._xauthAttributesSecondaryWins;
  }

  // dhcp_attributes - computed: false, optional: true, required: false
  private _dhcpAttributes = new AccessAddressAssignmentPoolFamilyDhcpAttributesOutputReference(this, "dhcp_attributes");
  public get dhcpAttributes() {
    return this._dhcpAttributes;
  }
  public putDhcpAttributes(value: AccessAddressAssignmentPoolFamilyDhcpAttributes) {
    this._dhcpAttributes.internalValue = value;
  }
  public resetDhcpAttributes() {
    this._dhcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpAttributesInput() {
    return this._dhcpAttributes.internalValue;
  }

  // excluded_range - computed: false, optional: true, required: false
  private _excludedRange = new AccessAddressAssignmentPoolFamilyExcludedRangeList(this, "excluded_range", false);
  public get excludedRange() {
    return this._excludedRange;
  }
  public putExcludedRange(value: AccessAddressAssignmentPoolFamilyExcludedRange[] | cdktf.IResolvable) {
    this._excludedRange.internalValue = value;
  }
  public resetExcludedRange() {
    this._excludedRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRangeInput() {
    return this._excludedRange.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new AccessAddressAssignmentPoolFamilyHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: AccessAddressAssignmentPoolFamilyHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // inet6_range - computed: false, optional: true, required: false
  private _inet6Range = new AccessAddressAssignmentPoolFamilyInet6RangeList(this, "inet6_range", false);
  public get inet6Range() {
    return this._inet6Range;
  }
  public putInet6Range(value: AccessAddressAssignmentPoolFamilyInet6Range[] | cdktf.IResolvable) {
    this._inet6Range.internalValue = value;
  }
  public resetInet6Range() {
    this._inet6Range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6RangeInput() {
    return this._inet6Range.internalValue;
  }

  // inet_range - computed: false, optional: true, required: false
  private _inetRange = new AccessAddressAssignmentPoolFamilyInetRangeList(this, "inet_range", false);
  public get inetRange() {
    return this._inetRange;
  }
  public putInetRange(value: AccessAddressAssignmentPoolFamilyInetRange[] | cdktf.IResolvable) {
    this._inetRange.internalValue = value;
  }
  public resetInetRange() {
    this._inetRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inetRangeInput() {
    return this._inetRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool junos_access_address_assignment_pool}
*/
export class AccessAddressAssignmentPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_access_address_assignment_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessAddressAssignmentPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessAddressAssignmentPool to import
  * @param importFromId The id of the existing AccessAddressAssignmentPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessAddressAssignmentPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_access_address_assignment_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/access_address_assignment_pool junos_access_address_assignment_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessAddressAssignmentPoolConfig
  */
  public constructor(scope: Construct, id: string, config: AccessAddressAssignmentPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_access_address_assignment_pool',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeDrain = config.activeDrain;
    this._holdDown = config.holdDown;
    this._link = config.link;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
    this._family.internalValue = config.family;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_drain - computed: false, optional: true, required: false
  private _activeDrain?: boolean | cdktf.IResolvable; 
  public get activeDrain() {
    return this.getBooleanAttribute('active_drain');
  }
  public set activeDrain(value: boolean | cdktf.IResolvable) {
    this._activeDrain = value;
  }
  public resetActiveDrain() {
    this._activeDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDrainInput() {
    return this._activeDrain;
  }

  // hold_down - computed: false, optional: true, required: false
  private _holdDown?: boolean | cdktf.IResolvable; 
  public get holdDown() {
    return this.getBooleanAttribute('hold_down');
  }
  public set holdDown(value: boolean | cdktf.IResolvable) {
    this._holdDown = value;
  }
  public resetHoldDown() {
    this._holdDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownInput() {
    return this._holdDown;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
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

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // family - computed: false, optional: true, required: false
  private _family = new AccessAddressAssignmentPoolFamilyOutputReference(this, "family");
  public get family() {
    return this._family;
  }
  public putFamily(value: AccessAddressAssignmentPoolFamily) {
    this._family.internalValue = value;
  }
  public resetFamily() {
    this._family.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_drain: cdktf.booleanToTerraform(this._activeDrain),
      hold_down: cdktf.booleanToTerraform(this._holdDown),
      link: cdktf.stringToTerraform(this._link),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      family: accessAddressAssignmentPoolFamilyToTerraform(this._family.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_drain: {
        value: cdktf.booleanToHclTerraform(this._activeDrain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hold_down: {
        value: cdktf.booleanToHclTerraform(this._holdDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
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
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: accessAddressAssignmentPoolFamilyToHclTerraform(this._family.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessAddressAssignmentPoolFamily",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
