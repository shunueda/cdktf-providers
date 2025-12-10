// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpSharedNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authority for the shared network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#authority DhcpSharedNetwork#authority}
  */
  readonly authority?: boolean | cdktf.IResolvable;
  /**
  * The bootfile name for the shared network. You can configure the DHCP server to support clients that use the boot file name option in their DHCPREQUEST messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#bootfile DhcpSharedNetwork#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The bootserver address for the shared network. You can specify the name and/or IP address of the boot server that the host needs to boot. The boot server IPv4 Address or name in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#bootserver DhcpSharedNetwork#bootserver}
  */
  readonly bootserver?: string;
  /**
  * Comment for the shared network, maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#comment DhcpSharedNetwork#comment}
  */
  readonly comment?: string;
  /**
  * If this field is set to True, the DHCP server generates a hostname and updates DNS with it when the DHCP client request does not contain a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ddns_generate_hostname DhcpSharedNetwork#ddns_generate_hostname}
  */
  readonly ddnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether only the DHCP server is allowed to update DNS, regardless of the DHCP clients requests. Note that changes for this field take effect only if ddns_use_option81 is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ddns_server_always_updates DhcpSharedNetwork#ddns_server_always_updates}
  */
  readonly ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable;
  /**
  * The DNS update Time to Live (TTL) value of a shared network object. The TTL is a 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ddns_ttl DhcpSharedNetwork#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * By default, the DHCP server does not update DNS when it allocates a fixed address to a client. You can configure the DHCP server to update the A and PTR records of a client with a fixed address. When this feature is enabled and the DHCP server adds A and PTR records for a fixed address, the DHCP server never discards the records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ddns_update_fixed_addresses DhcpSharedNetwork#ddns_update_fixed_addresses}
  */
  readonly ddnsUpdateFixedAddresses?: boolean | cdktf.IResolvable;
  /**
  * The support for DHCP Option 81 at the shared network level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ddns_use_option81 DhcpSharedNetwork#ddns_use_option81}
  */
  readonly ddnsUseOption81?: boolean | cdktf.IResolvable;
  /**
  * If set to true, BOOTP settings are disabled and BOOTP requests will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#deny_bootp DhcpSharedNetwork#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a shared network is disabled or not. When this is set to False, the shared network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#disable DhcpSharedNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The dynamic DNS updates flag of a shared network object. If set to True, the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#enable_ddns DhcpSharedNetwork#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#enable_pxe_lease_time DhcpSharedNetwork#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#extattrs DhcpSharedNetwork#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * If set to true, the client identifier will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ignore_client_identifier DhcpSharedNetwork#ignore_client_identifier}
  */
  readonly ignoreClientIdentifier?: boolean | cdktf.IResolvable;
  /**
  * If this field is set to False, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ignore_dhcp_option_list_request DhcpSharedNetwork#ignore_dhcp_option_list_request}
  */
  readonly ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the appliance will ignore DHCP client IDs or MAC addresses. Valid values are "NONE", "CLIENT", or "MACADDR". The default is "NONE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ignore_id DhcpSharedNetwork#ignore_id}
  */
  readonly ignoreId?: string;
  /**
  * A list of MAC addresses the appliance will ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ignore_mac_addresses DhcpSharedNetwork#ignore_mac_addresses}
  */
  readonly ignoreMacAddresses?: string[];
  /**
  * An integer that specifies the period of time (in seconds) that frees and backs up leases remained in the database before they are automatically deleted. To disable lease scavenging, set the parameter to -1. The minimum positive value must be greater than 86400 seconds (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#lease_scavenge_time DhcpSharedNetwork#lease_scavenge_time}
  */
  readonly leaseScavengeTime?: number;
  /**
  * This field contains the logic filters to be applied on the this shared network. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#logic_filter_rules DhcpSharedNetwork#logic_filter_rules}
  */
  readonly logicFilterRules?: DhcpSharedNetworkLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The name of the IPv6 Shared Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#name DhcpSharedNetwork#name}
  */
  readonly name: string;
  /**
  * The name of the network view in which this shared network resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#network_view DhcpSharedNetwork#network_view}
  */
  readonly networkView?: string;
  /**
  * A list of networks belonging to the shared network. Each individual list item must be specified as an object containing a 'ref' parameter to a network reference, for example:: [{ "ref": "network/ZG5zLm5ldHdvcmskMTAuMwLvMTYvMA" }] if the reference of the wanted network is not known, it is possible to specify search parameters for the network instead in the following way:: [{ "ref": { 'network': '10.0.0.0/8' } }] note that in this case the search must match exactly one network for the assignment to be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#networks DhcpSharedNetwork#networks}
  */
  readonly networks: DhcpSharedNetworkNetworks[] | cdktf.IResolvable;
  /**
  * The name in FQDN and/or IPv4 Address of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#nextserver DhcpSharedNetwork#nextserver}
  */
  readonly nextserver?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#options DhcpSharedNetwork#options}
  */
  readonly options?: DhcpSharedNetworkOptions[] | cdktf.IResolvable;
  /**
  * The PXE lease time value of a shared network object. Some hosts use PXE (Preboot Execution Environment) to boot remotely from a server. To better manage your IP resources, set a different lease time for PXE boot requests. You can configure the DHCP server to allocate an IP address with a shorter lease time to hosts that send PXE boot requests, so IP addresses are not leased longer than necessary. A 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#pxe_lease_time DhcpSharedNetwork#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * This field controls whether the DHCP server updates DNS when a DHCP lease is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#update_dns_on_lease_renewal DhcpSharedNetwork#update_dns_on_lease_renewal}
  */
  readonly updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_authority DhcpSharedNetwork#use_authority}
  */
  readonly useAuthority?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_bootfile DhcpSharedNetwork#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_bootserver DhcpSharedNetwork#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_generate_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ddns_generate_hostname DhcpSharedNetwork#use_ddns_generate_hostname}
  */
  readonly useDdnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ddns_ttl DhcpSharedNetwork#use_ddns_ttl}
  */
  readonly useDdnsTtl?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_update_fixed_addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ddns_update_fixed_addresses DhcpSharedNetwork#use_ddns_update_fixed_addresses}
  */
  readonly useDdnsUpdateFixedAddresses?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_use_option81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ddns_use_option81 DhcpSharedNetwork#use_ddns_use_option81}
  */
  readonly useDdnsUseOption81?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_deny_bootp DhcpSharedNetwork#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_enable_ddns DhcpSharedNetwork#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_client_identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ignore_client_identifier DhcpSharedNetwork#use_ignore_client_identifier}
  */
  readonly useIgnoreClientIdentifier?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_dhcp_option_list_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ignore_dhcp_option_list_request DhcpSharedNetwork#use_ignore_dhcp_option_list_request}
  */
  readonly useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_ignore_id DhcpSharedNetwork#use_ignore_id}
  */
  readonly useIgnoreId?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: lease_scavenge_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_lease_scavenge_time DhcpSharedNetwork#use_lease_scavenge_time}
  */
  readonly useLeaseScavengeTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_logic_filter_rules DhcpSharedNetwork#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_nextserver DhcpSharedNetwork#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_options DhcpSharedNetwork#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_pxe_lease_time DhcpSharedNetwork#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: update_dns_on_lease_renewal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_update_dns_on_lease_renewal DhcpSharedNetwork#use_update_dns_on_lease_renewal}
  */
  readonly useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
}
export interface DhcpSharedNetworkLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#filter DhcpSharedNetwork#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#type DhcpSharedNetwork#type}
  */
  readonly type: string;
}

export function dhcpSharedNetworkLogicFilterRulesToTerraform(struct?: DhcpSharedNetworkLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dhcpSharedNetworkLogicFilterRulesToHclTerraform(struct?: DhcpSharedNetworkLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpSharedNetworkLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpSharedNetworkLogicFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpSharedNetworkLogicFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class DhcpSharedNetworkLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DhcpSharedNetworkLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DhcpSharedNetworkLogicFilterRulesOutputReference {
    return new DhcpSharedNetworkLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpSharedNetworkMsAdUserData {
}

export function dhcpSharedNetworkMsAdUserDataToTerraform(struct?: DhcpSharedNetworkMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpSharedNetworkMsAdUserDataToHclTerraform(struct?: DhcpSharedNetworkMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpSharedNetworkMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpSharedNetworkMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpSharedNetworkMsAdUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface DhcpSharedNetworkNetworks {
  /**
  * Reference to the Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#ref DhcpSharedNetwork#ref}
  */
  readonly ref: string;
}

export function dhcpSharedNetworkNetworksToTerraform(struct?: DhcpSharedNetworkNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function dhcpSharedNetworkNetworksToHclTerraform(struct?: DhcpSharedNetworkNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpSharedNetworkNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpSharedNetworkNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpSharedNetworkNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }
}

export class DhcpSharedNetworkNetworksList extends cdktf.ComplexList {
  public internalValue? : DhcpSharedNetworkNetworks[] | cdktf.IResolvable

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
  public get(index: number): DhcpSharedNetworkNetworksOutputReference {
    return new DhcpSharedNetworkNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpSharedNetworkOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#name DhcpSharedNetwork#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#num DhcpSharedNetwork#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#use_option DhcpSharedNetwork#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#value DhcpSharedNetwork#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#vendor_class DhcpSharedNetwork#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dhcpSharedNetworkOptionsToTerraform(struct?: DhcpSharedNetworkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function dhcpSharedNetworkOptionsToHclTerraform(struct?: DhcpSharedNetworkOptions | cdktf.IResolvable): any {
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
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpSharedNetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpSharedNetworkOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpSharedNetworkOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
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

  // num - computed: true, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: true, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: true, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class DhcpSharedNetworkOptionsList extends cdktf.ComplexList {
  public internalValue? : DhcpSharedNetworkOptions[] | cdktf.IResolvable

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
  public get(index: number): DhcpSharedNetworkOptionsOutputReference {
    return new DhcpSharedNetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network nios_dhcp_shared_network}
*/
export class DhcpSharedNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_shared_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpSharedNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpSharedNetwork to import
  * @param importFromId The id of the existing DhcpSharedNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpSharedNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_shared_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_shared_network nios_dhcp_shared_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpSharedNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpSharedNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_shared_network',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authority = config.authority;
    this._bootfile = config.bootfile;
    this._bootserver = config.bootserver;
    this._comment = config.comment;
    this._ddnsGenerateHostname = config.ddnsGenerateHostname;
    this._ddnsServerAlwaysUpdates = config.ddnsServerAlwaysUpdates;
    this._ddnsTtl = config.ddnsTtl;
    this._ddnsUpdateFixedAddresses = config.ddnsUpdateFixedAddresses;
    this._ddnsUseOption81 = config.ddnsUseOption81;
    this._denyBootp = config.denyBootp;
    this._disable = config.disable;
    this._enableDdns = config.enableDdns;
    this._enablePxeLeaseTime = config.enablePxeLeaseTime;
    this._extattrs = config.extattrs;
    this._ignoreClientIdentifier = config.ignoreClientIdentifier;
    this._ignoreDhcpOptionListRequest = config.ignoreDhcpOptionListRequest;
    this._ignoreId = config.ignoreId;
    this._ignoreMacAddresses = config.ignoreMacAddresses;
    this._leaseScavengeTime = config.leaseScavengeTime;
    this._logicFilterRules.internalValue = config.logicFilterRules;
    this._name = config.name;
    this._networkView = config.networkView;
    this._networks.internalValue = config.networks;
    this._nextserver = config.nextserver;
    this._options.internalValue = config.options;
    this._pxeLeaseTime = config.pxeLeaseTime;
    this._updateDnsOnLeaseRenewal = config.updateDnsOnLeaseRenewal;
    this._useAuthority = config.useAuthority;
    this._useBootfile = config.useBootfile;
    this._useBootserver = config.useBootserver;
    this._useDdnsGenerateHostname = config.useDdnsGenerateHostname;
    this._useDdnsTtl = config.useDdnsTtl;
    this._useDdnsUpdateFixedAddresses = config.useDdnsUpdateFixedAddresses;
    this._useDdnsUseOption81 = config.useDdnsUseOption81;
    this._useDenyBootp = config.useDenyBootp;
    this._useEnableDdns = config.useEnableDdns;
    this._useIgnoreClientIdentifier = config.useIgnoreClientIdentifier;
    this._useIgnoreDhcpOptionListRequest = config.useIgnoreDhcpOptionListRequest;
    this._useIgnoreId = config.useIgnoreId;
    this._useLeaseScavengeTime = config.useLeaseScavengeTime;
    this._useLogicFilterRules = config.useLogicFilterRules;
    this._useNextserver = config.useNextserver;
    this._useOptions = config.useOptions;
    this._usePxeLeaseTime = config.usePxeLeaseTime;
    this._useUpdateDnsOnLeaseRenewal = config.useUpdateDnsOnLeaseRenewal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority - computed: true, optional: true, required: false
  private _authority?: boolean | cdktf.IResolvable; 
  public get authority() {
    return this.getBooleanAttribute('authority');
  }
  public set authority(value: boolean | cdktf.IResolvable) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // bootfile - computed: true, optional: true, required: false
  private _bootfile?: string; 
  public get bootfile() {
    return this.getStringAttribute('bootfile');
  }
  public set bootfile(value: string) {
    this._bootfile = value;
  }
  public resetBootfile() {
    this._bootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootfileInput() {
    return this._bootfile;
  }

  // bootserver - computed: true, optional: true, required: false
  private _bootserver?: string; 
  public get bootserver() {
    return this.getStringAttribute('bootserver');
  }
  public set bootserver(value: string) {
    this._bootserver = value;
  }
  public resetBootserver() {
    this._bootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootserverInput() {
    return this._bootserver;
  }

  // comment - computed: true, optional: true, required: false
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

  // ddns_generate_hostname - computed: true, optional: true, required: false
  private _ddnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateHostname() {
    return this.getBooleanAttribute('ddns_generate_hostname');
  }
  public set ddnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateHostname = value;
  }
  public resetDdnsGenerateHostname() {
    this._ddnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateHostnameInput() {
    return this._ddnsGenerateHostname;
  }

  // ddns_server_always_updates - computed: true, optional: true, required: false
  private _ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsServerAlwaysUpdates() {
    return this.getBooleanAttribute('ddns_server_always_updates');
  }
  public set ddnsServerAlwaysUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsServerAlwaysUpdates = value;
  }
  public resetDdnsServerAlwaysUpdates() {
    this._ddnsServerAlwaysUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerAlwaysUpdatesInput() {
    return this._ddnsServerAlwaysUpdates;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_update_fixed_addresses - computed: true, optional: true, required: false
  private _ddnsUpdateFixedAddresses?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateFixedAddresses() {
    return this.getBooleanAttribute('ddns_update_fixed_addresses');
  }
  public set ddnsUpdateFixedAddresses(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateFixedAddresses = value;
  }
  public resetDdnsUpdateFixedAddresses() {
    this._ddnsUpdateFixedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateFixedAddressesInput() {
    return this._ddnsUpdateFixedAddresses;
  }

  // ddns_use_option81 - computed: true, optional: true, required: false
  private _ddnsUseOption81?: boolean | cdktf.IResolvable; 
  public get ddnsUseOption81() {
    return this.getBooleanAttribute('ddns_use_option81');
  }
  public set ddnsUseOption81(value: boolean | cdktf.IResolvable) {
    this._ddnsUseOption81 = value;
  }
  public resetDdnsUseOption81() {
    this._ddnsUseOption81 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseOption81Input() {
    return this._ddnsUseOption81;
  }

  // deny_bootp - computed: true, optional: true, required: false
  private _denyBootp?: boolean | cdktf.IResolvable; 
  public get denyBootp() {
    return this.getBooleanAttribute('deny_bootp');
  }
  public set denyBootp(value: boolean | cdktf.IResolvable) {
    this._denyBootp = value;
  }
  public resetDenyBootp() {
    this._denyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBootpInput() {
    return this._denyBootp;
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  public get dhcpUtilization() {
    return this.getNumberAttribute('dhcp_utilization');
  }

  // dhcp_utilization_status - computed: true, optional: false, required: false
  public get dhcpUtilizationStatus() {
    return this.getStringAttribute('dhcp_utilization_status');
  }

  // disable - computed: true, optional: true, required: false
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

  // dynamic_hosts - computed: true, optional: false, required: false
  public get dynamicHosts() {
    return this.getNumberAttribute('dynamic_hosts');
  }

  // enable_ddns - computed: true, optional: true, required: false
  private _enableDdns?: boolean | cdktf.IResolvable; 
  public get enableDdns() {
    return this.getBooleanAttribute('enable_ddns');
  }
  public set enableDdns(value: boolean | cdktf.IResolvable) {
    this._enableDdns = value;
  }
  public resetEnableDdns() {
    this._enableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdnsInput() {
    return this._enableDdns;
  }

  // enable_pxe_lease_time - computed: true, optional: true, required: false
  private _enablePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get enablePxeLeaseTime() {
    return this.getBooleanAttribute('enable_pxe_lease_time');
  }
  public set enablePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._enablePxeLeaseTime = value;
  }
  public resetEnablePxeLeaseTime() {
    this._enablePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePxeLeaseTimeInput() {
    return this._enablePxeLeaseTime;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // ignore_client_identifier - computed: true, optional: true, required: false
  private _ignoreClientIdentifier?: boolean | cdktf.IResolvable; 
  public get ignoreClientIdentifier() {
    return this.getBooleanAttribute('ignore_client_identifier');
  }
  public set ignoreClientIdentifier(value: boolean | cdktf.IResolvable) {
    this._ignoreClientIdentifier = value;
  }
  public resetIgnoreClientIdentifier() {
    this._ignoreClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientIdentifierInput() {
    return this._ignoreClientIdentifier;
  }

  // ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get ignoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('ignore_dhcp_option_list_request');
  }
  public set ignoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._ignoreDhcpOptionListRequest = value;
  }
  public resetIgnoreDhcpOptionListRequest() {
    this._ignoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDhcpOptionListRequestInput() {
    return this._ignoreDhcpOptionListRequest;
  }

  // ignore_id - computed: true, optional: true, required: false
  private _ignoreId?: string; 
  public get ignoreId() {
    return this.getStringAttribute('ignore_id');
  }
  public set ignoreId(value: string) {
    this._ignoreId = value;
  }
  public resetIgnoreId() {
    this._ignoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIdInput() {
    return this._ignoreId;
  }

  // ignore_mac_addresses - computed: false, optional: true, required: false
  private _ignoreMacAddresses?: string[]; 
  public get ignoreMacAddresses() {
    return this.getListAttribute('ignore_mac_addresses');
  }
  public set ignoreMacAddresses(value: string[]) {
    this._ignoreMacAddresses = value;
  }
  public resetIgnoreMacAddresses() {
    this._ignoreMacAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMacAddressesInput() {
    return this._ignoreMacAddresses;
  }

  // lease_scavenge_time - computed: true, optional: true, required: false
  private _leaseScavengeTime?: number; 
  public get leaseScavengeTime() {
    return this.getNumberAttribute('lease_scavenge_time');
  }
  public set leaseScavengeTime(value: number) {
    this._leaseScavengeTime = value;
  }
  public resetLeaseScavengeTime() {
    this._leaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseScavengeTimeInput() {
    return this._leaseScavengeTime;
  }

  // logic_filter_rules - computed: false, optional: true, required: false
  private _logicFilterRules = new DhcpSharedNetworkLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DhcpSharedNetworkLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new DhcpSharedNetworkMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
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

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // networks - computed: false, optional: false, required: true
  private _networks = new DhcpSharedNetworkNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: DhcpSharedNetworkNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // nextserver - computed: true, optional: true, required: false
  private _nextserver?: string; 
  public get nextserver() {
    return this.getStringAttribute('nextserver');
  }
  public set nextserver(value: string) {
    this._nextserver = value;
  }
  public resetNextserver() {
    this._nextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextserverInput() {
    return this._nextserver;
  }

  // options - computed: true, optional: true, required: false
  private _options = new DhcpSharedNetworkOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DhcpSharedNetworkOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // pxe_lease_time - computed: true, optional: true, required: false
  private _pxeLeaseTime?: number; 
  public get pxeLeaseTime() {
    return this.getNumberAttribute('pxe_lease_time');
  }
  public set pxeLeaseTime(value: number) {
    this._pxeLeaseTime = value;
  }
  public resetPxeLeaseTime() {
    this._pxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeLeaseTimeInput() {
    return this._pxeLeaseTime;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // static_hosts - computed: true, optional: false, required: false
  public get staticHosts() {
    return this.getNumberAttribute('static_hosts');
  }

  // total_hosts - computed: true, optional: false, required: false
  public get totalHosts() {
    return this.getNumberAttribute('total_hosts');
  }

  // update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get updateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('update_dns_on_lease_renewal');
  }
  public set updateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._updateDnsOnLeaseRenewal = value;
  }
  public resetUpdateDnsOnLeaseRenewal() {
    this._updateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsOnLeaseRenewalInput() {
    return this._updateDnsOnLeaseRenewal;
  }

  // use_authority - computed: true, optional: true, required: false
  private _useAuthority?: boolean | cdktf.IResolvable; 
  public get useAuthority() {
    return this.getBooleanAttribute('use_authority');
  }
  public set useAuthority(value: boolean | cdktf.IResolvable) {
    this._useAuthority = value;
  }
  public resetUseAuthority() {
    this._useAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAuthorityInput() {
    return this._useAuthority;
  }

  // use_bootfile - computed: true, optional: true, required: false
  private _useBootfile?: boolean | cdktf.IResolvable; 
  public get useBootfile() {
    return this.getBooleanAttribute('use_bootfile');
  }
  public set useBootfile(value: boolean | cdktf.IResolvable) {
    this._useBootfile = value;
  }
  public resetUseBootfile() {
    this._useBootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootfileInput() {
    return this._useBootfile;
  }

  // use_bootserver - computed: true, optional: true, required: false
  private _useBootserver?: boolean | cdktf.IResolvable; 
  public get useBootserver() {
    return this.getBooleanAttribute('use_bootserver');
  }
  public set useBootserver(value: boolean | cdktf.IResolvable) {
    this._useBootserver = value;
  }
  public resetUseBootserver() {
    this._useBootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootserverInput() {
    return this._useBootserver;
  }

  // use_ddns_generate_hostname - computed: true, optional: true, required: false
  private _useDdnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get useDdnsGenerateHostname() {
    return this.getBooleanAttribute('use_ddns_generate_hostname');
  }
  public set useDdnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._useDdnsGenerateHostname = value;
  }
  public resetUseDdnsGenerateHostname() {
    this._useDdnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsGenerateHostnameInput() {
    return this._useDdnsGenerateHostname;
  }

  // use_ddns_ttl - computed: true, optional: true, required: false
  private _useDdnsTtl?: boolean | cdktf.IResolvable; 
  public get useDdnsTtl() {
    return this.getBooleanAttribute('use_ddns_ttl');
  }
  public set useDdnsTtl(value: boolean | cdktf.IResolvable) {
    this._useDdnsTtl = value;
  }
  public resetUseDdnsTtl() {
    this._useDdnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsTtlInput() {
    return this._useDdnsTtl;
  }

  // use_ddns_update_fixed_addresses - computed: true, optional: true, required: false
  private _useDdnsUpdateFixedAddresses?: boolean | cdktf.IResolvable; 
  public get useDdnsUpdateFixedAddresses() {
    return this.getBooleanAttribute('use_ddns_update_fixed_addresses');
  }
  public set useDdnsUpdateFixedAddresses(value: boolean | cdktf.IResolvable) {
    this._useDdnsUpdateFixedAddresses = value;
  }
  public resetUseDdnsUpdateFixedAddresses() {
    this._useDdnsUpdateFixedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsUpdateFixedAddressesInput() {
    return this._useDdnsUpdateFixedAddresses;
  }

  // use_ddns_use_option81 - computed: true, optional: true, required: false
  private _useDdnsUseOption81?: boolean | cdktf.IResolvable; 
  public get useDdnsUseOption81() {
    return this.getBooleanAttribute('use_ddns_use_option81');
  }
  public set useDdnsUseOption81(value: boolean | cdktf.IResolvable) {
    this._useDdnsUseOption81 = value;
  }
  public resetUseDdnsUseOption81() {
    this._useDdnsUseOption81 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsUseOption81Input() {
    return this._useDdnsUseOption81;
  }

  // use_deny_bootp - computed: true, optional: true, required: false
  private _useDenyBootp?: boolean | cdktf.IResolvable; 
  public get useDenyBootp() {
    return this.getBooleanAttribute('use_deny_bootp');
  }
  public set useDenyBootp(value: boolean | cdktf.IResolvable) {
    this._useDenyBootp = value;
  }
  public resetUseDenyBootp() {
    this._useDenyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDenyBootpInput() {
    return this._useDenyBootp;
  }

  // use_enable_ddns - computed: true, optional: true, required: false
  private _useEnableDdns?: boolean | cdktf.IResolvable; 
  public get useEnableDdns() {
    return this.getBooleanAttribute('use_enable_ddns');
  }
  public set useEnableDdns(value: boolean | cdktf.IResolvable) {
    this._useEnableDdns = value;
  }
  public resetUseEnableDdns() {
    this._useEnableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDdnsInput() {
    return this._useEnableDdns;
  }

  // use_ignore_client_identifier - computed: true, optional: true, required: false
  private _useIgnoreClientIdentifier?: boolean | cdktf.IResolvable; 
  public get useIgnoreClientIdentifier() {
    return this.getBooleanAttribute('use_ignore_client_identifier');
  }
  public set useIgnoreClientIdentifier(value: boolean | cdktf.IResolvable) {
    this._useIgnoreClientIdentifier = value;
  }
  public resetUseIgnoreClientIdentifier() {
    this._useIgnoreClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreClientIdentifierInput() {
    return this._useIgnoreClientIdentifier;
  }

  // use_ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get useIgnoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('use_ignore_dhcp_option_list_request');
  }
  public set useIgnoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._useIgnoreDhcpOptionListRequest = value;
  }
  public resetUseIgnoreDhcpOptionListRequest() {
    this._useIgnoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreDhcpOptionListRequestInput() {
    return this._useIgnoreDhcpOptionListRequest;
  }

  // use_ignore_id - computed: true, optional: true, required: false
  private _useIgnoreId?: boolean | cdktf.IResolvable; 
  public get useIgnoreId() {
    return this.getBooleanAttribute('use_ignore_id');
  }
  public set useIgnoreId(value: boolean | cdktf.IResolvable) {
    this._useIgnoreId = value;
  }
  public resetUseIgnoreId() {
    this._useIgnoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreIdInput() {
    return this._useIgnoreId;
  }

  // use_lease_scavenge_time - computed: true, optional: true, required: false
  private _useLeaseScavengeTime?: boolean | cdktf.IResolvable; 
  public get useLeaseScavengeTime() {
    return this.getBooleanAttribute('use_lease_scavenge_time');
  }
  public set useLeaseScavengeTime(value: boolean | cdktf.IResolvable) {
    this._useLeaseScavengeTime = value;
  }
  public resetUseLeaseScavengeTime() {
    this._useLeaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLeaseScavengeTimeInput() {
    return this._useLeaseScavengeTime;
  }

  // use_logic_filter_rules - computed: true, optional: true, required: false
  private _useLogicFilterRules?: boolean | cdktf.IResolvable; 
  public get useLogicFilterRules() {
    return this.getBooleanAttribute('use_logic_filter_rules');
  }
  public set useLogicFilterRules(value: boolean | cdktf.IResolvable) {
    this._useLogicFilterRules = value;
  }
  public resetUseLogicFilterRules() {
    this._useLogicFilterRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicFilterRulesInput() {
    return this._useLogicFilterRules;
  }

  // use_nextserver - computed: true, optional: true, required: false
  private _useNextserver?: boolean | cdktf.IResolvable; 
  public get useNextserver() {
    return this.getBooleanAttribute('use_nextserver');
  }
  public set useNextserver(value: boolean | cdktf.IResolvable) {
    this._useNextserver = value;
  }
  public resetUseNextserver() {
    this._useNextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextserverInput() {
    return this._useNextserver;
  }

  // use_options - computed: true, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // use_pxe_lease_time - computed: true, optional: true, required: false
  private _usePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get usePxeLeaseTime() {
    return this.getBooleanAttribute('use_pxe_lease_time');
  }
  public set usePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._usePxeLeaseTime = value;
  }
  public resetUsePxeLeaseTime() {
    this._usePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePxeLeaseTimeInput() {
    return this._usePxeLeaseTime;
  }

  // use_update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get useUpdateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('use_update_dns_on_lease_renewal');
  }
  public set useUpdateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._useUpdateDnsOnLeaseRenewal = value;
  }
  public resetUseUpdateDnsOnLeaseRenewal() {
    this._useUpdateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUpdateDnsOnLeaseRenewalInput() {
    return this._useUpdateDnsOnLeaseRenewal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authority: cdktf.booleanToTerraform(this._authority),
      bootfile: cdktf.stringToTerraform(this._bootfile),
      bootserver: cdktf.stringToTerraform(this._bootserver),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_generate_hostname: cdktf.booleanToTerraform(this._ddnsGenerateHostname),
      ddns_server_always_updates: cdktf.booleanToTerraform(this._ddnsServerAlwaysUpdates),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      ddns_update_fixed_addresses: cdktf.booleanToTerraform(this._ddnsUpdateFixedAddresses),
      ddns_use_option81: cdktf.booleanToTerraform(this._ddnsUseOption81),
      deny_bootp: cdktf.booleanToTerraform(this._denyBootp),
      disable: cdktf.booleanToTerraform(this._disable),
      enable_ddns: cdktf.booleanToTerraform(this._enableDdns),
      enable_pxe_lease_time: cdktf.booleanToTerraform(this._enablePxeLeaseTime),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      ignore_client_identifier: cdktf.booleanToTerraform(this._ignoreClientIdentifier),
      ignore_dhcp_option_list_request: cdktf.booleanToTerraform(this._ignoreDhcpOptionListRequest),
      ignore_id: cdktf.stringToTerraform(this._ignoreId),
      ignore_mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreMacAddresses),
      lease_scavenge_time: cdktf.numberToTerraform(this._leaseScavengeTime),
      logic_filter_rules: cdktf.listMapper(dhcpSharedNetworkLogicFilterRulesToTerraform, false)(this._logicFilterRules.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_view: cdktf.stringToTerraform(this._networkView),
      networks: cdktf.listMapper(dhcpSharedNetworkNetworksToTerraform, false)(this._networks.internalValue),
      nextserver: cdktf.stringToTerraform(this._nextserver),
      options: cdktf.listMapper(dhcpSharedNetworkOptionsToTerraform, false)(this._options.internalValue),
      pxe_lease_time: cdktf.numberToTerraform(this._pxeLeaseTime),
      update_dns_on_lease_renewal: cdktf.booleanToTerraform(this._updateDnsOnLeaseRenewal),
      use_authority: cdktf.booleanToTerraform(this._useAuthority),
      use_bootfile: cdktf.booleanToTerraform(this._useBootfile),
      use_bootserver: cdktf.booleanToTerraform(this._useBootserver),
      use_ddns_generate_hostname: cdktf.booleanToTerraform(this._useDdnsGenerateHostname),
      use_ddns_ttl: cdktf.booleanToTerraform(this._useDdnsTtl),
      use_ddns_update_fixed_addresses: cdktf.booleanToTerraform(this._useDdnsUpdateFixedAddresses),
      use_ddns_use_option81: cdktf.booleanToTerraform(this._useDdnsUseOption81),
      use_deny_bootp: cdktf.booleanToTerraform(this._useDenyBootp),
      use_enable_ddns: cdktf.booleanToTerraform(this._useEnableDdns),
      use_ignore_client_identifier: cdktf.booleanToTerraform(this._useIgnoreClientIdentifier),
      use_ignore_dhcp_option_list_request: cdktf.booleanToTerraform(this._useIgnoreDhcpOptionListRequest),
      use_ignore_id: cdktf.booleanToTerraform(this._useIgnoreId),
      use_lease_scavenge_time: cdktf.booleanToTerraform(this._useLeaseScavengeTime),
      use_logic_filter_rules: cdktf.booleanToTerraform(this._useLogicFilterRules),
      use_nextserver: cdktf.booleanToTerraform(this._useNextserver),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      use_pxe_lease_time: cdktf.booleanToTerraform(this._usePxeLeaseTime),
      use_update_dns_on_lease_renewal: cdktf.booleanToTerraform(this._useUpdateDnsOnLeaseRenewal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authority: {
        value: cdktf.booleanToHclTerraform(this._authority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bootfile: {
        value: cdktf.stringToHclTerraform(this._bootfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootserver: {
        value: cdktf.stringToHclTerraform(this._bootserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_generate_hostname: {
        value: cdktf.booleanToHclTerraform(this._ddnsGenerateHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_server_always_updates: {
        value: cdktf.booleanToHclTerraform(this._ddnsServerAlwaysUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_ttl: {
        value: cdktf.numberToHclTerraform(this._ddnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_update_fixed_addresses: {
        value: cdktf.booleanToHclTerraform(this._ddnsUpdateFixedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_use_option81: {
        value: cdktf.booleanToHclTerraform(this._ddnsUseOption81),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deny_bootp: {
        value: cdktf.booleanToHclTerraform(this._denyBootp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ddns: {
        value: cdktf.booleanToHclTerraform(this._enableDdns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_pxe_lease_time: {
        value: cdktf.booleanToHclTerraform(this._enablePxeLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ignore_client_identifier: {
        value: cdktf.booleanToHclTerraform(this._ignoreClientIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_dhcp_option_list_request: {
        value: cdktf.booleanToHclTerraform(this._ignoreDhcpOptionListRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_id: {
        value: cdktf.stringToHclTerraform(this._ignoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_mac_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreMacAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lease_scavenge_time: {
        value: cdktf.numberToHclTerraform(this._leaseScavengeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logic_filter_rules: {
        value: cdktf.listMapperHcl(dhcpSharedNetworkLogicFilterRulesToHclTerraform, false)(this._logicFilterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpSharedNetworkLogicFilterRulesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(dhcpSharedNetworkNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpSharedNetworkNetworksList",
      },
      nextserver: {
        value: cdktf.stringToHclTerraform(this._nextserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(dhcpSharedNetworkOptionsToHclTerraform, false)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpSharedNetworkOptionsList",
      },
      pxe_lease_time: {
        value: cdktf.numberToHclTerraform(this._pxeLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_dns_on_lease_renewal: {
        value: cdktf.booleanToHclTerraform(this._updateDnsOnLeaseRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_authority: {
        value: cdktf.booleanToHclTerraform(this._useAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_bootfile: {
        value: cdktf.booleanToHclTerraform(this._useBootfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_bootserver: {
        value: cdktf.booleanToHclTerraform(this._useBootserver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_generate_hostname: {
        value: cdktf.booleanToHclTerraform(this._useDdnsGenerateHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_ttl: {
        value: cdktf.booleanToHclTerraform(this._useDdnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_update_fixed_addresses: {
        value: cdktf.booleanToHclTerraform(this._useDdnsUpdateFixedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ddns_use_option81: {
        value: cdktf.booleanToHclTerraform(this._useDdnsUseOption81),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_deny_bootp: {
        value: cdktf.booleanToHclTerraform(this._useDenyBootp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_enable_ddns: {
        value: cdktf.booleanToHclTerraform(this._useEnableDdns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ignore_client_identifier: {
        value: cdktf.booleanToHclTerraform(this._useIgnoreClientIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ignore_dhcp_option_list_request: {
        value: cdktf.booleanToHclTerraform(this._useIgnoreDhcpOptionListRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ignore_id: {
        value: cdktf.booleanToHclTerraform(this._useIgnoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_lease_scavenge_time: {
        value: cdktf.booleanToHclTerraform(this._useLeaseScavengeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_logic_filter_rules: {
        value: cdktf.booleanToHclTerraform(this._useLogicFilterRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_nextserver: {
        value: cdktf.booleanToHclTerraform(this._useNextserver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_options: {
        value: cdktf.booleanToHclTerraform(this._useOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_pxe_lease_time: {
        value: cdktf.booleanToHclTerraform(this._usePxeLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_update_dns_on_lease_renewal: {
        value: cdktf.booleanToHclTerraform(this._useUpdateDnsOnLeaseRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
