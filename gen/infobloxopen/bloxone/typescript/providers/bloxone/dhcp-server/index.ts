// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Kerberos principal name. It uses the typical Kerberos notation: `<SERVICE-NAME>/<server-domain-name>@<REALM>`. Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#client_principal DhcpServer#client_principal}
  */
  readonly clientPrincipal?: string;
  /**
  * The description for the DHCP Config Profile. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#comment DhcpServer#comment}
  */
  readonly comment?: string;
  /**
  * Controls who does the DDNS updates. Valid values are:
  *   * _client_: DHCP server updates DNS if requested by client.
  *   * _server_: DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _ignore_: DHCP server always updates DNS, even if the client says not to.
  *   * _over_client_update_: Same as _server_. DHCP server always updates DNS, overriding an update request from the client, unless the client requests no updates.
  *   * _over_no_update_: DHCP server updates DNS even if the client requests that no updates be done. If the client requests to do the update, DHCP server allows it.
  * 
  *   Defaults to _client_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_client_update DhcpServer#ddns_client_update}
  */
  readonly ddnsClientUpdate?: string;
  /**
  * The mode used for resolving conflicts while performing DDNS updates. Valid values are:
  *   * _check_with_dhcid_: It includes adding a DHCID record and checking that record via conflict detection as per RFC 4703.
  *   * _no_check_with_dhcid_: This will ignore conflict detection but add a DHCID record when creating/updating an entry.
  *   * _check_exists_with_dhcid_: This will check if there is an existing DHCID record but does not verify the value of the record matches the update. This will also update the DHCID record for the entry.
  *   * _no_check_without_dhcid_: This ignores conflict detection and will not add a DHCID record when creating/updating a DDNS entry.
  * 
  *   Defaults to _check_with_dhcid_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_conflict_resolution_mode DhcpServer#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: string;
  /**
  * The domain suffix for DDNS updates. FQDN, may be empty. Required if _ddns_enabled_ is true.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_domain DhcpServer#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Indicates if DDNS updates should be performed for leases. All other _ddns_*_ configuration is ignored when this flag is unset. At a minimum, _ddns_domain_ and _ddns_zones_ must be configured to enable DDNS. Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_enabled DhcpServer#ddns_enabled}
  */
  readonly ddnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if DDNS should generate a hostname when not supplied by the client.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_generate_name DhcpServer#ddns_generate_name}
  */
  readonly ddnsGenerateName?: boolean | cdktf.IResolvable;
  /**
  * The prefix used in the generation of an FQDN.  When generating a name, DHCP server will construct the name in the format: [ddns-generated-prefix]-[address-text].[ddns-qualifying-suffix]. where address-text is simply the lease IP address converted to a hyphenated string. Defaults to \"myhost\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_generated_prefix DhcpServer#ddns_generated_prefix}
  */
  readonly ddnsGeneratedPrefix?: string;
  /**
  * Determines if DDNS updates are enabled at the IP space level. Defaults to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_send_updates DhcpServer#ddns_send_updates}
  */
  readonly ddnsSendUpdates?: boolean | cdktf.IResolvable;
  /**
  * DDNS TTL value - to be calculated as a simple percentage of the lease's lifetime, using the parameter's value as the percentage. It is specified as a percentage (e.g. 25, 75). Defaults to unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_ttl_percent DhcpServer#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: number;
  /**
  * Instructs the DHCP server to always update the DNS information when a lease is renewed even if its DNS information has not changed.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_update_on_renew DhcpServer#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: boolean | cdktf.IResolvable;
  /**
  * When true, DHCP server will apply conflict resolution, as described in RFC 4703, when attempting to fulfill the update request.  When false, DHCP server will simply attempt to update the DNS entries per the request, regardless of whether or not they conflict with existing entries owned by other DHCP4 clients.  Defaults to _true_. Can be set to true only when ddns_conflict_resolution_mode is check_with_dhcid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_use_conflict_resolution DhcpServer#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: boolean | cdktf.IResolvable;
  /**
  * The DNS zones that DDNS updates can be sent to. There is no resolver fallback. The target zone must be explicitly configured for the update to be performed.  Updates are sent to the closest enclosing zone.  Error if _ddns_enabled_ is _true_ and the _ddns_domain_ does not have a corresponding entry in _ddns_zones_.  Error if there are items with duplicate zone in the list.  Defaults to empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_zones DhcpServer#ddns_zones}
  */
  readonly ddnsZones?: DhcpServerDdnsZones[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#dhcp_config DhcpServer#dhcp_config}
  */
  readonly dhcpConfig?: DhcpServerDhcpConfig;
  /**
  * The list of DHCP options or group of options for IPv4. An option list is ordered and may include both option groups and specific options. Multiple occurrences of the same option or group is not an error. The last occurrence of an option in the list will be used. Error if the graph of referenced groups contains cycles. Defaults to empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#dhcp_options DhcpServer#dhcp_options}
  */
  readonly dhcpOptions?: DhcpServerDhcpOptions[] | cdktf.IResolvable;
  /**
  * The list of DHCP options or group of options for IPv6. An option list is ordered and may include both option groups and specific options. Multiple occurrences of the same option or group is not an error. The last occurrence of an option in the list will be used. Error if the graph of referenced groups contains cycles. Defaults to empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#dhcp_options_v6 DhcpServer#dhcp_options_v6}
  */
  readonly dhcpOptionsV6?: DhcpServerDhcpOptionsV6[] | cdktf.IResolvable;
  /**
  * The behavior when GSS-TSIG should be used (a matching external DNS server is configured) but no GSS-TSIG key is available. If configured to _false_ (the default) this DNS server is skipped, if configured to _true_ the DNS server is ignored and the DNS update is sent with the configured DHCP-DDNS protection e.g. TSIG key or without any protection when none was configured.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#gss_tsig_fallback DhcpServer#gss_tsig_fallback}
  */
  readonly gssTsigFallback?: boolean | cdktf.IResolvable;
  /**
  * The configuration for header option filename field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#header_option_filename DhcpServer#header_option_filename}
  */
  readonly headerOptionFilename?: string;
  /**
  * The configuration for header option server address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#header_option_server_address DhcpServer#header_option_server_address}
  */
  readonly headerOptionServerAddress?: string;
  /**
  * The configuration for header option server name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#header_option_server_name DhcpServer#header_option_server_name}
  */
  readonly headerOptionServerName?: string;
  /**
  * The character to replace non-matching characters with, when hostname rewrite is enabled.  Any single ASCII character or no character if the invalid characters should be removed without replacement.  Defaults to \"-\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#hostname_rewrite_char DhcpServer#hostname_rewrite_char}
  */
  readonly hostnameRewriteChar?: string;
  /**
  * Indicates if client supplied hostnames will be rewritten prior to DDNS update by replacing every character that does not match _hostname_rewrite_regex_ by _hostname_rewrite_char_.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#hostname_rewrite_enabled DhcpServer#hostname_rewrite_enabled}
  */
  readonly hostnameRewriteEnabled?: boolean | cdktf.IResolvable;
  /**
  * The regex bracket expression to match valid characters.  Must begin with \"[\" and end with \"]\" and be a compilable POSIX regex.  Defaults to \"[^a-zA-Z0-9_.]\".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#hostname_rewrite_regex DhcpServer#hostname_rewrite_regex}
  */
  readonly hostnameRewriteRegex?: string;
  /**
  * The inheritance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#inheritance_sources DhcpServer#inheritance_sources}
  */
  readonly inheritanceSources?: DhcpServerInheritanceSources;
  /**
  * Address of Kerberos Key Distribution Center.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_kdc DhcpServer#kerberos_kdc}
  */
  readonly kerberosKdc?: string;
  /**
  * _kerberos_keys_ contains a list of keys for GSS-TSIG signed dynamic updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_keys DhcpServer#kerberos_keys}
  */
  readonly kerberosKeys?: DhcpServerKerberosKeys[] | cdktf.IResolvable;
  /**
  * Time interval (in seconds) the keys for each configured external DNS server are checked for rekeying, i.e. a new key is created to replace the current usable one when its age is greater than the _kerberos_rekey_interval_ value.  Defaults to 120 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_rekey_interval DhcpServer#kerberos_rekey_interval}
  */
  readonly kerberosRekeyInterval?: number;
  /**
  * Time interval (in seconds) to retry to create a key if any error occurred previously for any configured external DNS server.  Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_retry_interval DhcpServer#kerberos_retry_interval}
  */
  readonly kerberosRetryInterval?: number;
  /**
  * Lifetime (in seconds) of GSS-TSIG keys in the TKEY protocol.  Defaults to 160 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_tkey_lifetime DhcpServer#kerberos_tkey_lifetime}
  */
  readonly kerberosTkeyLifetime?: number;
  /**
  * Determines which protocol is used to establish the security context with the external DNS servers, TCP or UDP.  Defaults to _tcp_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_tkey_protocol DhcpServer#kerberos_tkey_protocol}
  */
  readonly kerberosTkeyProtocol?: string;
  /**
  * The name of the DHCP Config Profile. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#name DhcpServer#name}
  */
  readonly name: string;
  /**
  * The type of server object.  Defaults to _server_.  Valid values are: * _server_: The server profile type. * _subnet_: The subnet profile type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#profile_type DhcpServer#profile_type}
  */
  readonly profileType?: string;
  /**
  * The Kerberos principal name of the external DNS server that will receive updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#server_principal DhcpServer#server_principal}
  */
  readonly serverPrincipal?: string;
  /**
  * The tags for the DHCP Config Profile in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#tags DhcpServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#vendor_specific_option_option_space DhcpServer#vendor_specific_option_option_space}
  */
  readonly vendorSpecificOptionOptionSpace?: string;
}
export interface DhcpServerDdnsZonesNameservers {
  /**
  * The Kerberos principal name. It uses the typical Kerberos notation: <SERVICE-NAME>/<server-domain-name>@<REALM>.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#client_principal DhcpServer#client_principal}
  */
  readonly clientPrincipal?: string;
  /**
  * The behavior when GSS-TSIG should be used (a matching external DNS server is configured) but no GSS-TSIG key is available. If configured to _false_ (the default) this DNS server is skipped, if configured to _true_ the DNS server is ignored and the DNS update is sent with the configured DHCP-DDNS protection e.g. TSIG key or without any protection when none was configured.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#gss_tsig_fallback DhcpServer#gss_tsig_fallback}
  */
  readonly gssTsigFallback?: boolean | cdktf.IResolvable;
  /**
  * Time interval (in seconds) the keys for each configured external DNS server are checked for rekeying, i.e. a new key is created to replace the current usable one when its age is greater than the _kerberos_rekey_interval_ value.  Defaults to 120 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_rekey_interval DhcpServer#kerberos_rekey_interval}
  */
  readonly kerberosRekeyInterval?: number;
  /**
  * Time interval (in seconds) to retry to create a key if any error occurred previously for any configured external DNS server.  Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_retry_interval DhcpServer#kerberos_retry_interval}
  */
  readonly kerberosRetryInterval?: number;
  /**
  * Lifetime (in seconds) of GSS-TSIG keys in the TKEY protocol.  Defaults to 160 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_tkey_lifetime DhcpServer#kerberos_tkey_lifetime}
  */
  readonly kerberosTkeyLifetime?: number;
  /**
  * Determines which protocol is used to establish the security context with the external DNS servers, TCP or UDP.  Defaults to _tcp_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#kerberos_tkey_protocol DhcpServer#kerberos_tkey_protocol}
  */
  readonly kerberosTkeyProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#nameserver DhcpServer#nameserver}
  */
  readonly nameserver?: string;
  /**
  * The Kerberos principal name of this DNS server that will receive updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#server_principal DhcpServer#server_principal}
  */
  readonly serverPrincipal?: string;
}

export function dhcpServerDdnsZonesNameserversToTerraform(struct?: DhcpServerDdnsZonesNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_principal: cdktf.stringToTerraform(struct!.clientPrincipal),
    gss_tsig_fallback: cdktf.booleanToTerraform(struct!.gssTsigFallback),
    kerberos_rekey_interval: cdktf.numberToTerraform(struct!.kerberosRekeyInterval),
    kerberos_retry_interval: cdktf.numberToTerraform(struct!.kerberosRetryInterval),
    kerberos_tkey_lifetime: cdktf.numberToTerraform(struct!.kerberosTkeyLifetime),
    kerberos_tkey_protocol: cdktf.stringToTerraform(struct!.kerberosTkeyProtocol),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    server_principal: cdktf.stringToTerraform(struct!.serverPrincipal),
  }
}


export function dhcpServerDdnsZonesNameserversToHclTerraform(struct?: DhcpServerDdnsZonesNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_principal: {
      value: cdktf.stringToHclTerraform(struct!.clientPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos_rekey_interval: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRekeyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_tkey_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.kerberosTkeyLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_tkey_protocol: {
      value: cdktf.stringToHclTerraform(struct!.kerberosTkeyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_principal: {
      value: cdktf.stringToHclTerraform(struct!.serverPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerDdnsZonesNameserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerDdnsZonesNameservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrincipal = this._clientPrincipal;
    }
    if (this._gssTsigFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigFallback = this._gssTsigFallback;
    }
    if (this._kerberosRekeyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRekeyInterval = this._kerberosRekeyInterval;
    }
    if (this._kerberosRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRetryInterval = this._kerberosRetryInterval;
    }
    if (this._kerberosTkeyLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTkeyLifetime = this._kerberosTkeyLifetime;
    }
    if (this._kerberosTkeyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTkeyProtocol = this._kerberosTkeyProtocol;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._serverPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPrincipal = this._serverPrincipal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerDdnsZonesNameservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPrincipal = undefined;
      this._gssTsigFallback = undefined;
      this._kerberosRekeyInterval = undefined;
      this._kerberosRetryInterval = undefined;
      this._kerberosTkeyLifetime = undefined;
      this._kerberosTkeyProtocol = undefined;
      this._nameserver = undefined;
      this._serverPrincipal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPrincipal = value.clientPrincipal;
      this._gssTsigFallback = value.gssTsigFallback;
      this._kerberosRekeyInterval = value.kerberosRekeyInterval;
      this._kerberosRetryInterval = value.kerberosRetryInterval;
      this._kerberosTkeyLifetime = value.kerberosTkeyLifetime;
      this._kerberosTkeyProtocol = value.kerberosTkeyProtocol;
      this._nameserver = value.nameserver;
      this._serverPrincipal = value.serverPrincipal;
    }
  }

  // client_principal - computed: true, optional: true, required: false
  private _clientPrincipal?: string; 
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }
  public set clientPrincipal(value: string) {
    this._clientPrincipal = value;
  }
  public resetClientPrincipal() {
    this._clientPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrincipalInput() {
    return this._clientPrincipal;
  }

  // gss_tsig_fallback - computed: true, optional: true, required: false
  private _gssTsigFallback?: boolean | cdktf.IResolvable; 
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }
  public set gssTsigFallback(value: boolean | cdktf.IResolvable) {
    this._gssTsigFallback = value;
  }
  public resetGssTsigFallback() {
    this._gssTsigFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigFallbackInput() {
    return this._gssTsigFallback;
  }

  // kerberos_rekey_interval - computed: true, optional: true, required: false
  private _kerberosRekeyInterval?: number; 
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }
  public set kerberosRekeyInterval(value: number) {
    this._kerberosRekeyInterval = value;
  }
  public resetKerberosRekeyInterval() {
    this._kerberosRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRekeyIntervalInput() {
    return this._kerberosRekeyInterval;
  }

  // kerberos_retry_interval - computed: true, optional: true, required: false
  private _kerberosRetryInterval?: number; 
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }
  public set kerberosRetryInterval(value: number) {
    this._kerberosRetryInterval = value;
  }
  public resetKerberosRetryInterval() {
    this._kerberosRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRetryIntervalInput() {
    return this._kerberosRetryInterval;
  }

  // kerberos_tkey_lifetime - computed: true, optional: true, required: false
  private _kerberosTkeyLifetime?: number; 
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }
  public set kerberosTkeyLifetime(value: number) {
    this._kerberosTkeyLifetime = value;
  }
  public resetKerberosTkeyLifetime() {
    this._kerberosTkeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyLifetimeInput() {
    return this._kerberosTkeyLifetime;
  }

  // kerberos_tkey_protocol - computed: true, optional: true, required: false
  private _kerberosTkeyProtocol?: string; 
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }
  public set kerberosTkeyProtocol(value: string) {
    this._kerberosTkeyProtocol = value;
  }
  public resetKerberosTkeyProtocol() {
    this._kerberosTkeyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyProtocolInput() {
    return this._kerberosTkeyProtocol;
  }

  // nameserver - computed: true, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // server_principal - computed: true, optional: true, required: false
  private _serverPrincipal?: string; 
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
  public set serverPrincipal(value: string) {
    this._serverPrincipal = value;
  }
  public resetServerPrincipal() {
    this._serverPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrincipalInput() {
    return this._serverPrincipal;
  }
}

export class DhcpServerDdnsZonesNameserversList extends cdktf.ComplexList {
  public internalValue? : DhcpServerDdnsZonesNameservers[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerDdnsZonesNameserversOutputReference {
    return new DhcpServerDdnsZonesNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerDdnsZonesTsigKey {
  /**
  * TSIG key algorithm.
  * 
  *   Valid values are:
  *   * _hmac_sha1_
  *   * _hmac_sha224_
  *   * _hmac_sha256_
  *   * _hmac_sha384_
  *   * _hmac_sha512_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#algorithm DhcpServer#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The description for the TSIG key. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#comment DhcpServer#comment}
  */
  readonly comment?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#key DhcpServer#key}
  */
  readonly key: string;
  /**
  * The TSIG key name, FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#name DhcpServer#name}
  */
  readonly name?: string;
  /**
  * The TSIG key secret, base64 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#secret DhcpServer#secret}
  */
  readonly secret?: string;
}

export function dhcpServerDdnsZonesTsigKeyToTerraform(struct?: DhcpServerDdnsZonesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    comment: cdktf.stringToTerraform(struct!.comment),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dhcpServerDdnsZonesTsigKeyToHclTerraform(struct?: DhcpServerDdnsZonesTsigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerDdnsZonesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerDdnsZonesTsigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerDdnsZonesTsigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._comment = undefined;
      this._key = undefined;
      this._name = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._comment = value.comment;
      this._key = value.key;
      this._name = value.name;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DhcpServerDdnsZones {
  /**
  * Zone FQDN.  If _zone_ is defined, the _fqdn_ field must be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#fqdn DhcpServer#fqdn}
  */
  readonly fqdn?: string;
  /**
  * _gss_tsig_enabled_ enables/disables GSS-TSIG signed dynamic updates.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#gss_tsig_enabled DhcpServer#gss_tsig_enabled}
  */
  readonly gssTsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Nameservers in the zone.  Each nameserver IP should be unique across the list of nameservers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#nameservers DhcpServer#nameservers}
  */
  readonly nameservers?: DhcpServerDdnsZonesNameservers[] | cdktf.IResolvable;
  /**
  * Indicates if TSIG key should be used for the update.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#tsig_enabled DhcpServer#tsig_enabled}
  */
  readonly tsigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#tsig_key DhcpServer#tsig_key}
  */
  readonly tsigKey?: DhcpServerDdnsZonesTsigKey;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#zone DhcpServer#zone}
  */
  readonly zone: string;
}

export function dhcpServerDdnsZonesToTerraform(struct?: DhcpServerDdnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    gss_tsig_enabled: cdktf.booleanToTerraform(struct!.gssTsigEnabled),
    nameservers: cdktf.listMapper(dhcpServerDdnsZonesNameserversToTerraform, false)(struct!.nameservers),
    tsig_enabled: cdktf.booleanToTerraform(struct!.tsigEnabled),
    tsig_key: dhcpServerDdnsZonesTsigKeyToTerraform(struct!.tsigKey),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dhcpServerDdnsZonesToHclTerraform(struct?: DhcpServerDdnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gssTsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nameservers: {
      value: cdktf.listMapperHcl(dhcpServerDdnsZonesNameserversToHclTerraform, false)(struct!.nameservers),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpServerDdnsZonesNameserversList",
    },
    tsig_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tsigEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_key: {
      value: dhcpServerDdnsZonesTsigKeyToHclTerraform(struct!.tsigKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerDdnsZonesTsigKey",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerDdnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerDdnsZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gssTsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigEnabled = this._gssTsigEnabled;
    }
    if (this._nameservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers?.internalValue;
    }
    if (this._tsigEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigEnabled = this._tsigEnabled;
    }
    if (this._tsigKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey?.internalValue;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerDdnsZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._gssTsigEnabled = undefined;
      this._nameservers.internalValue = undefined;
      this._tsigEnabled = undefined;
      this._tsigKey.internalValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._gssTsigEnabled = value.gssTsigEnabled;
      this._nameservers.internalValue = value.nameservers;
      this._tsigEnabled = value.tsigEnabled;
      this._tsigKey.internalValue = value.tsigKey;
      this._zone = value.zone;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // gss_tsig_enabled - computed: true, optional: true, required: false
  private _gssTsigEnabled?: boolean | cdktf.IResolvable; 
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }
  public set gssTsigEnabled(value: boolean | cdktf.IResolvable) {
    this._gssTsigEnabled = value;
  }
  public resetGssTsigEnabled() {
    this._gssTsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigEnabledInput() {
    return this._gssTsigEnabled;
  }

  // nameservers - computed: true, optional: true, required: false
  private _nameservers = new DhcpServerDdnsZonesNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }
  public putNameservers(value: DhcpServerDdnsZonesNameservers[] | cdktf.IResolvable) {
    this._nameservers.internalValue = value;
  }
  public resetNameservers() {
    this._nameservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers.internalValue;
  }

  // tsig_enabled - computed: true, optional: true, required: false
  private _tsigEnabled?: boolean | cdktf.IResolvable; 
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }
  public set tsigEnabled(value: boolean | cdktf.IResolvable) {
    this._tsigEnabled = value;
  }
  public resetTsigEnabled() {
    this._tsigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigEnabledInput() {
    return this._tsigEnabled;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey = new DhcpServerDdnsZonesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }
  public putTsigKey(value: DhcpServerDdnsZonesTsigKey) {
    this._tsigKey.internalValue = value;
  }
  public resetTsigKey() {
    this._tsigKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey.internalValue;
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // zone - computed: true, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DhcpServerDdnsZonesList extends cdktf.ComplexList {
  public internalValue? : DhcpServerDdnsZones[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerDdnsZonesOutputReference {
    return new DhcpServerDdnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerDhcpConfigIgnoreListStruct {
  /**
  * Type of ignore matching: client to ignore by client identifier (client hex or client text) or hardware to ignore by hardware identifier (MAC address). It can have one of the following values:
  *   * _client_hex_
  *   * _client_text_
  *   * _hardware_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#type DhcpServer#type}
  */
  readonly type: string;
  /**
  * Value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#value DhcpServer#value}
  */
  readonly value: string;
}

export function dhcpServerDhcpConfigIgnoreListStructToTerraform(struct?: DhcpServerDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dhcpServerDhcpConfigIgnoreListStructToHclTerraform(struct?: DhcpServerDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DhcpServerDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DhcpServerDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DhcpServerDhcpConfigIgnoreListStructList extends cdktf.ComplexList {
  public internalValue? : DhcpServerDhcpConfigIgnoreListStruct[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerDhcpConfigIgnoreListStructOutputReference {
    return new DhcpServerDhcpConfigIgnoreListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerDhcpConfig {
  /**
  * The abandoned reclaim time in seconds for IPV4 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#abandoned_reclaim_time DhcpServer#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: number;
  /**
  * The abandoned reclaim time in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#abandoned_reclaim_time_v6 DhcpServer#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: number;
  /**
  * Disable to allow leases only for known IPv4 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#allow_unknown DhcpServer#allow_unknown}
  */
  readonly allowUnknown?: boolean | cdktf.IResolvable;
  /**
  * Disable to allow leases only for known IPV6 clients, those for which a fixed address is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#allow_unknown_v6 DhcpServer#allow_unknown_v6}
  */
  readonly allowUnknownV6?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable to include/exclude the client id when responding to discover or request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#echo_client_id DhcpServer#echo_client_id}
  */
  readonly echoClientId?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#filters DhcpServer#filters}
  */
  readonly filters?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#filters_large_selection DhcpServer#filters_large_selection}
  */
  readonly filtersLargeSelection?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#filters_v6 DhcpServer#filters_v6}
  */
  readonly filtersV6?: string[];
  /**
  * Enable to ignore the client UID when issuing a DHCP lease. Use this option to prevent assigning two IP addresses for a client which does not have a UID during one phase of PXE boot but acquires one for the other phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ignore_client_uid DhcpServer#ignore_client_uid}
  */
  readonly ignoreClientUid?: boolean | cdktf.IResolvable;
  /**
  * The list of clients to ignore requests from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ignore_list DhcpServer#ignore_list}
  */
  readonly ignoreList?: DhcpServerDhcpConfigIgnoreListStruct[] | cdktf.IResolvable;
  /**
  * The lease duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#lease_time DhcpServer#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The lease duration in seconds for IPV6 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#lease_time_v6 DhcpServer#lease_time_v6}
  */
  readonly leaseTimeV6?: number;
}

export function dhcpServerDhcpConfigToTerraform(struct?: DhcpServerDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: cdktf.numberToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: cdktf.numberToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: cdktf.booleanToTerraform(struct!.allowUnknown),
    allow_unknown_v6: cdktf.booleanToTerraform(struct!.allowUnknownV6),
    echo_client_id: cdktf.booleanToTerraform(struct!.echoClientId),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    filters_large_selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersLargeSelection),
    filters_v6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersV6),
    ignore_client_uid: cdktf.booleanToTerraform(struct!.ignoreClientUid),
    ignore_list: cdktf.listMapper(dhcpServerDhcpConfigIgnoreListStructToTerraform, false)(struct!.ignoreList),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    lease_time_v6: cdktf.numberToTerraform(struct!.leaseTimeV6),
  }
}


export function dhcpServerDhcpConfigToHclTerraform(struct?: DhcpServerDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: cdktf.numberToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    abandoned_reclaim_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unknown_v6: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnknownV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    echo_client_id: {
      value: cdktf.booleanToHclTerraform(struct!.echoClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_large_selection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersLargeSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filters_v6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersV6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_client_uid: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientUid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_list: {
      value: cdktf.listMapperHcl(dhcpServerDhcpConfigIgnoreListStructToHclTerraform, false)(struct!.ignoreList),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpServerDhcpConfigIgnoreListStructList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time_v6: {
      value: cdktf.numberToHclTerraform(struct!.leaseTimeV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime;
    }
    if (this._abandonedReclaimTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6;
    }
    if (this._allowUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown;
    }
    if (this._allowUnknownV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6;
    }
    if (this._echoClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._filtersLargeSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersLargeSelection = this._filtersLargeSelection;
    }
    if (this._filtersV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6;
    }
    if (this._ignoreClientUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._leaseTimeV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime = undefined;
      this._abandonedReclaimTimeV6 = undefined;
      this._allowUnknown = undefined;
      this._allowUnknownV6 = undefined;
      this._echoClientId = undefined;
      this._filters = undefined;
      this._filtersLargeSelection = undefined;
      this._filtersV6 = undefined;
      this._ignoreClientUid = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime = undefined;
      this._leaseTimeV6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6 = value.abandonedReclaimTimeV6;
      this._allowUnknown = value.allowUnknown;
      this._allowUnknownV6 = value.allowUnknownV6;
      this._echoClientId = value.echoClientId;
      this._filters = value.filters;
      this._filtersLargeSelection = value.filtersLargeSelection;
      this._filtersV6 = value.filtersV6;
      this._ignoreClientUid = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime = value.leaseTime;
      this._leaseTimeV6 = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime?: number; 
  public get abandonedReclaimTime() {
    return this.getNumberAttribute('abandoned_reclaim_time');
  }
  public set abandonedReclaimTime(value: number) {
    this._abandonedReclaimTime = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6?: number; 
  public get abandonedReclaimTimeV6() {
    return this.getNumberAttribute('abandoned_reclaim_time_v6');
  }
  public set abandonedReclaimTimeV6(value: number) {
    this._abandonedReclaimTimeV6 = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown?: boolean | cdktf.IResolvable; 
  public get allowUnknown() {
    return this.getBooleanAttribute('allow_unknown');
  }
  public set allowUnknown(value: boolean | cdktf.IResolvable) {
    this._allowUnknown = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6?: boolean | cdktf.IResolvable; 
  public get allowUnknownV6() {
    return this.getBooleanAttribute('allow_unknown_v6');
  }
  public set allowUnknownV6(value: boolean | cdktf.IResolvable) {
    this._allowUnknownV6 = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId?: boolean | cdktf.IResolvable; 
  public get echoClientId() {
    return this.getBooleanAttribute('echo_client_id');
  }
  public set echoClientId(value: boolean | cdktf.IResolvable) {
    this._echoClientId = value;
  }
  public resetEchoClientId() {
    this._echoClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId;
  }

  // filters - computed: true, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // filters_large_selection - computed: true, optional: true, required: false
  private _filtersLargeSelection?: string[]; 
  public get filtersLargeSelection() {
    return this.getListAttribute('filters_large_selection');
  }
  public set filtersLargeSelection(value: string[]) {
    this._filtersLargeSelection = value;
  }
  public resetFiltersLargeSelection() {
    this._filtersLargeSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersLargeSelectionInput() {
    return this._filtersLargeSelection;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6?: string[]; 
  public get filtersV6() {
    return this.getListAttribute('filters_v6');
  }
  public set filtersV6(value: string[]) {
    this._filtersV6 = value;
  }
  public resetFiltersV6() {
    this._filtersV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid?: boolean | cdktf.IResolvable; 
  public get ignoreClientUid() {
    return this.getBooleanAttribute('ignore_client_uid');
  }
  public set ignoreClientUid(value: boolean | cdktf.IResolvable) {
    this._ignoreClientUid = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new DhcpServerDhcpConfigIgnoreListStructList(this, "ignore_list", false);
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: DhcpServerDhcpConfigIgnoreListStruct[] | cdktf.IResolvable) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
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

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6?: number; 
  public get leaseTimeV6() {
    return this.getNumberAttribute('lease_time_v6');
  }
  public set leaseTimeV6(value: number) {
    this._leaseTimeV6 = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6;
  }
}
export interface DhcpServerDhcpOptions {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#group DhcpServer#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#option_code DhcpServer#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#option_value DhcpServer#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#type DhcpServer#type}
  */
  readonly type?: string;
}

export function dhcpServerDhcpOptionsToTerraform(struct?: DhcpServerDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dhcpServerDhcpOptionsToHclTerraform(struct?: DhcpServerDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
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

export class DhcpServerDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: false, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DhcpServerDhcpOptionsList extends cdktf.ComplexList {
  public internalValue? : DhcpServerDhcpOptions[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerDhcpOptionsOutputReference {
    return new DhcpServerDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerDhcpOptionsV6 {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#group DhcpServer#group}
  */
  readonly group?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#option_code DhcpServer#option_code}
  */
  readonly optionCode?: string;
  /**
  * The option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#option_value DhcpServer#option_value}
  */
  readonly optionValue?: string;
  /**
  * The type of item. Valid values are:
  *   * _group_
  *   * _option_
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#type DhcpServer#type}
  */
  readonly type?: string;
}

export function dhcpServerDhcpOptionsV6ToTerraform(struct?: DhcpServerDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    option_code: cdktf.stringToTerraform(struct!.optionCode),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dhcpServerDhcpOptionsV6ToHclTerraform(struct?: DhcpServerDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_code: {
      value: cdktf.stringToHclTerraform(struct!.optionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
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

export class DhcpServerDhcpOptionsV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerDhcpOptionsV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._optionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionCode = this._optionCode;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerDhcpOptionsV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._optionCode = undefined;
      this._optionValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._optionCode = value.optionCode;
      this._optionValue = value.optionValue;
      this._type = value.type;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // option_code - computed: false, optional: true, required: false
  private _optionCode?: string; 
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }
  public set optionCode(value: string) {
    this._optionCode = value;
  }
  public resetOptionCode() {
    this._optionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionCodeInput() {
    return this._optionCode;
  }

  // option_value - computed: true, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DhcpServerDhcpOptionsV6List extends cdktf.ComplexList {
  public internalValue? : DhcpServerDhcpOptionsV6[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerDhcpOptionsV6OutputReference {
    return new DhcpServerDhcpOptionsV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameservers {
}

export function dhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversToTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameservers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameservers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_principal - computed: true, optional: false, required: false
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }

  // gss_tsig_fallback - computed: true, optional: false, required: false
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }

  // kerberos_rekey_interval - computed: true, optional: false, required: false
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }

  // kerberos_retry_interval - computed: true, optional: false, required: false
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }

  // kerberos_tkey_lifetime - computed: true, optional: false, required: false
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }

  // kerberos_tkey_protocol - computed: true, optional: false, required: false
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }

  // nameserver - computed: true, optional: false, required: false
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }

  // server_principal - computed: true, optional: false, required: false
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
}

export class DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversList extends cdktf.ComplexList {

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
  public get(index: number): DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversOutputReference {
    return new DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey {
}

export function dhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyToTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DhcpServerInheritanceSourcesDdnsBlockValueDdnsZones {
}

export function dhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesToTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerInheritanceSourcesDdnsBlockValueDdnsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsBlockValueDdnsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // gss_tsig_enabled - computed: true, optional: false, required: false
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }

  // tsig_enabled - computed: true, optional: false, required: false
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesTsigKeyOutputReference(this, "tsig_key");
  public get tsigKey() {
    return this._tsigKey;
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesOutputReference {
    return new DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeys {
}

export function dhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysToTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysList extends cdktf.ComplexList {

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
  public get(index: number): DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysOutputReference {
    return new DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDdnsBlockValue {
}

export function dhcpServerInheritanceSourcesDdnsBlockValueToTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDdnsBlockValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDdnsBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_principal - computed: true, optional: false, required: false
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }

  // ddns_domain - computed: true, optional: false, required: false
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }

  // ddns_enabled - computed: true, optional: false, required: false
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }

  // ddns_send_updates - computed: true, optional: false, required: false
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }

  // ddns_zones - computed: true, optional: false, required: false
  private _ddnsZones = new DhcpServerInheritanceSourcesDdnsBlockValueDdnsZonesList(this, "ddns_zones", false);
  public get ddnsZones() {
    return this._ddnsZones;
  }

  // gss_tsig_fallback - computed: true, optional: false, required: false
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }

  // kerberos_kdc - computed: true, optional: false, required: false
  public get kerberosKdc() {
    return this.getStringAttribute('kerberos_kdc');
  }

  // kerberos_keys - computed: true, optional: false, required: false
  private _kerberosKeys = new DhcpServerInheritanceSourcesDdnsBlockValueKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }

  // kerberos_rekey_interval - computed: true, optional: false, required: false
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }

  // kerberos_retry_interval - computed: true, optional: false, required: false
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }

  // kerberos_tkey_lifetime - computed: true, optional: false, required: false
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }

  // kerberos_tkey_protocol - computed: true, optional: false, required: false
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }

  // server_principal - computed: true, optional: false, required: false
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
}
export interface DhcpServerInheritanceSourcesDdnsBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsBlockToTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsBlockToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsBlock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpServerInheritanceSourcesDdnsBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DhcpServerInheritanceSourcesDdnsClientUpdate {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsClientUpdateToTerraform(struct?: DhcpServerInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsClientUpdateToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsClientUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsClientUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDdnsConflictResolutionMode {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct?: DhcpServerInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsConflictResolutionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsConflictResolutionMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDdnsHostnameBlockValue {
}

export function dhcpServerInheritanceSourcesDdnsHostnameBlockValueToTerraform(struct?: DhcpServerInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDdnsHostnameBlockValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsHostnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDdnsHostnameBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsHostnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsHostnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ddns_generate_name - computed: true, optional: false, required: false
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }

  // ddns_generated_prefix - computed: true, optional: false, required: false
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
}
export interface DhcpServerInheritanceSourcesDdnsHostnameBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsHostnameBlockToTerraform(struct?: DhcpServerInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsHostnameBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsHostnameBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpServerInheritanceSourcesDdnsHostnameBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DhcpServerInheritanceSourcesDdnsTtlPercent {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsTtlPercentToTerraform(struct?: DhcpServerInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsTtlPercentToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsTtlPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsTtlPercent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDdnsUpdateOnRenew {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct?: DhcpServerInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsUpdateOnRenewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsUpdateOnRenew | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDdnsUseConflictResolution {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct?: DhcpServerInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct?: DhcpServerInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDdnsUseConflictResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDdnsUseConflictResolution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigAllowUnknown {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigAllowUnknownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigAllowUnknown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigEchoClientId {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigEchoClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigEchoClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigFilters {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigFiltersToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigFiltersV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigFiltersV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigFiltersV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigIgnoreListValue {
}

export function dhcpServerInheritanceSourcesDhcpConfigIgnoreListValueToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigIgnoreListValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigIgnoreListValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDhcpConfigIgnoreListValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigIgnoreListValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigIgnoreListValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DhcpServerInheritanceSourcesDhcpConfigIgnoreListValueList extends cdktf.ComplexList {

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
  public get(index: number): DhcpServerInheritanceSourcesDhcpConfigIgnoreListValueOutputReference {
    return new DhcpServerInheritanceSourcesDhcpConfigIgnoreListValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigIgnoreListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpServerInheritanceSourcesDhcpConfigIgnoreListValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigLeaseTime {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigLeaseTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigLeaseTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6 {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesDhcpConfig {
  /**
  * The inheritance configuration for _abandoned_reclaim_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#abandoned_reclaim_time DhcpServer#abandoned_reclaim_time}
  */
  readonly abandonedReclaimTime?: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime;
  /**
  * The inheritance configuration for _abandoned_reclaim_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#abandoned_reclaim_time_v6 DhcpServer#abandoned_reclaim_time_v6}
  */
  readonly abandonedReclaimTimeV6?: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6;
  /**
  * The inheritance configuration for _allow_unknown_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#allow_unknown DhcpServer#allow_unknown}
  */
  readonly allowUnknown?: DhcpServerInheritanceSourcesDhcpConfigAllowUnknown;
  /**
  * The inheritance configuration for _allow_unknown_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#allow_unknown_v6 DhcpServer#allow_unknown_v6}
  */
  readonly allowUnknownV6?: DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6;
  /**
  * The inheritance configuration for authoritative_dhcp field to set DHCP server as authoritative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#authoritative_dhcp DhcpServer#authoritative_dhcp}
  */
  readonly authoritativeDhcp?: DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp;
  /**
  * The inheritance configuration for _echo_client_id_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#echo_client_id DhcpServer#echo_client_id}
  */
  readonly echoClientId?: DhcpServerInheritanceSourcesDhcpConfigEchoClientId;
  /**
  * The inheritance configuration for filters field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#filters DhcpServer#filters}
  */
  readonly filters?: DhcpServerInheritanceSourcesDhcpConfigFilters;
  /**
  * The inheritance configuration for _filters_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#filters_v6 DhcpServer#filters_v6}
  */
  readonly filtersV6?: DhcpServerInheritanceSourcesDhcpConfigFiltersV6;
  /**
  * The inheritance configuration for hold_reclaimed_time in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#hold_reclaimed_time DhcpServer#hold_reclaimed_time}
  */
  readonly holdReclaimedTime?: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime;
  /**
  * The inheritance configuration for hold_reclaimed_time_v6 in seconds from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#hold_reclaimed_time_v6 DhcpServer#hold_reclaimed_time_v6}
  */
  readonly holdReclaimedTimeV6?: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6;
  /**
  * The inheritance configuration for _ignore_client_uid_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ignore_client_uid DhcpServer#ignore_client_uid}
  */
  readonly ignoreClientUid?: DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid;
  /**
  * The inheritance configuration for _ignore_list_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ignore_list DhcpServer#ignore_list}
  */
  readonly ignoreList?: DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct;
  /**
  * The inheritance configuration for _lease_time_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#lease_time DhcpServer#lease_time}
  */
  readonly leaseTime?: DhcpServerInheritanceSourcesDhcpConfigLeaseTime;
  /**
  * The inheritance configuration for _lease_time_v6_ field from _DHCPConfig_ object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#lease_time_v6 DhcpServer#lease_time_v6}
  */
  readonly leaseTimeV6?: DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6;
}

export function dhcpServerInheritanceSourcesDhcpConfigToTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abandoned_reclaim_time: dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeToTerraform(struct!.abandonedReclaimTime),
    abandoned_reclaim_time_v6: dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToTerraform(struct!.abandonedReclaimTimeV6),
    allow_unknown: dhcpServerInheritanceSourcesDhcpConfigAllowUnknownToTerraform(struct!.allowUnknown),
    allow_unknown_v6: dhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6ToTerraform(struct!.allowUnknownV6),
    authoritative_dhcp: dhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcpToTerraform(struct!.authoritativeDhcp),
    echo_client_id: dhcpServerInheritanceSourcesDhcpConfigEchoClientIdToTerraform(struct!.echoClientId),
    filters: dhcpServerInheritanceSourcesDhcpConfigFiltersToTerraform(struct!.filters),
    filters_v6: dhcpServerInheritanceSourcesDhcpConfigFiltersV6ToTerraform(struct!.filtersV6),
    hold_reclaimed_time: dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeToTerraform(struct!.holdReclaimedTime),
    hold_reclaimed_time_v6: dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToTerraform(struct!.holdReclaimedTimeV6),
    ignore_client_uid: dhcpServerInheritanceSourcesDhcpConfigIgnoreClientUidToTerraform(struct!.ignoreClientUid),
    ignore_list: dhcpServerInheritanceSourcesDhcpConfigIgnoreListStructToTerraform(struct!.ignoreList),
    lease_time: dhcpServerInheritanceSourcesDhcpConfigLeaseTimeToTerraform(struct!.leaseTime),
    lease_time_v6: dhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6ToTerraform(struct!.leaseTimeV6),
  }
}


export function dhcpServerInheritanceSourcesDhcpConfigToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abandoned_reclaim_time: {
      value: dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeToHclTerraform(struct!.abandonedReclaimTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime",
    },
    abandoned_reclaim_time_v6: {
      value: dhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6ToHclTerraform(struct!.abandonedReclaimTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6",
    },
    allow_unknown: {
      value: dhcpServerInheritanceSourcesDhcpConfigAllowUnknownToHclTerraform(struct!.allowUnknown),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigAllowUnknown",
    },
    allow_unknown_v6: {
      value: dhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6ToHclTerraform(struct!.allowUnknownV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6",
    },
    authoritative_dhcp: {
      value: dhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcpToHclTerraform(struct!.authoritativeDhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp",
    },
    echo_client_id: {
      value: dhcpServerInheritanceSourcesDhcpConfigEchoClientIdToHclTerraform(struct!.echoClientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigEchoClientId",
    },
    filters: {
      value: dhcpServerInheritanceSourcesDhcpConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigFilters",
    },
    filters_v6: {
      value: dhcpServerInheritanceSourcesDhcpConfigFiltersV6ToHclTerraform(struct!.filtersV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigFiltersV6",
    },
    hold_reclaimed_time: {
      value: dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeToHclTerraform(struct!.holdReclaimedTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime",
    },
    hold_reclaimed_time_v6: {
      value: dhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6ToHclTerraform(struct!.holdReclaimedTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6",
    },
    ignore_client_uid: {
      value: dhcpServerInheritanceSourcesDhcpConfigIgnoreClientUidToHclTerraform(struct!.ignoreClientUid),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid",
    },
    ignore_list: {
      value: dhcpServerInheritanceSourcesDhcpConfigIgnoreListStructToHclTerraform(struct!.ignoreList),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct",
    },
    lease_time: {
      value: dhcpServerInheritanceSourcesDhcpConfigLeaseTimeToHclTerraform(struct!.leaseTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigLeaseTime",
    },
    lease_time_v6: {
      value: dhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6ToHclTerraform(struct!.leaseTimeV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abandonedReclaimTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTime = this._abandonedReclaimTime?.internalValue;
    }
    if (this._abandonedReclaimTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abandonedReclaimTimeV6 = this._abandonedReclaimTimeV6?.internalValue;
    }
    if (this._allowUnknown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknown = this._allowUnknown?.internalValue;
    }
    if (this._allowUnknownV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnknownV6 = this._allowUnknownV6?.internalValue;
    }
    if (this._authoritativeDhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeDhcp = this._authoritativeDhcp?.internalValue;
    }
    if (this._echoClientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoClientId = this._echoClientId?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._filtersV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersV6 = this._filtersV6?.internalValue;
    }
    if (this._holdReclaimedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTime = this._holdReclaimedTime?.internalValue;
    }
    if (this._holdReclaimedTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdReclaimedTimeV6 = this._holdReclaimedTimeV6?.internalValue;
    }
    if (this._ignoreClientUid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientUid = this._ignoreClientUid?.internalValue;
    }
    if (this._ignoreList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreList = this._ignoreList?.internalValue;
    }
    if (this._leaseTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime?.internalValue;
    }
    if (this._leaseTimeV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTimeV6 = this._leaseTimeV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = undefined;
      this._abandonedReclaimTimeV6.internalValue = undefined;
      this._allowUnknown.internalValue = undefined;
      this._allowUnknownV6.internalValue = undefined;
      this._authoritativeDhcp.internalValue = undefined;
      this._echoClientId.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._filtersV6.internalValue = undefined;
      this._holdReclaimedTime.internalValue = undefined;
      this._holdReclaimedTimeV6.internalValue = undefined;
      this._ignoreClientUid.internalValue = undefined;
      this._ignoreList.internalValue = undefined;
      this._leaseTime.internalValue = undefined;
      this._leaseTimeV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abandonedReclaimTime.internalValue = value.abandonedReclaimTime;
      this._abandonedReclaimTimeV6.internalValue = value.abandonedReclaimTimeV6;
      this._allowUnknown.internalValue = value.allowUnknown;
      this._allowUnknownV6.internalValue = value.allowUnknownV6;
      this._authoritativeDhcp.internalValue = value.authoritativeDhcp;
      this._echoClientId.internalValue = value.echoClientId;
      this._filters.internalValue = value.filters;
      this._filtersV6.internalValue = value.filtersV6;
      this._holdReclaimedTime.internalValue = value.holdReclaimedTime;
      this._holdReclaimedTimeV6.internalValue = value.holdReclaimedTimeV6;
      this._ignoreClientUid.internalValue = value.ignoreClientUid;
      this._ignoreList.internalValue = value.ignoreList;
      this._leaseTime.internalValue = value.leaseTime;
      this._leaseTimeV6.internalValue = value.leaseTimeV6;
    }
  }

  // abandoned_reclaim_time - computed: true, optional: true, required: false
  private _abandonedReclaimTime = new DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeOutputReference(this, "abandoned_reclaim_time");
  public get abandonedReclaimTime() {
    return this._abandonedReclaimTime;
  }
  public putAbandonedReclaimTime(value: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTime) {
    this._abandonedReclaimTime.internalValue = value;
  }
  public resetAbandonedReclaimTime() {
    this._abandonedReclaimTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeInput() {
    return this._abandonedReclaimTime.internalValue;
  }

  // abandoned_reclaim_time_v6 - computed: true, optional: true, required: false
  private _abandonedReclaimTimeV6 = new DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6OutputReference(this, "abandoned_reclaim_time_v6");
  public get abandonedReclaimTimeV6() {
    return this._abandonedReclaimTimeV6;
  }
  public putAbandonedReclaimTimeV6(value: DhcpServerInheritanceSourcesDhcpConfigAbandonedReclaimTimeV6) {
    this._abandonedReclaimTimeV6.internalValue = value;
  }
  public resetAbandonedReclaimTimeV6() {
    this._abandonedReclaimTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonedReclaimTimeV6Input() {
    return this._abandonedReclaimTimeV6.internalValue;
  }

  // allow_unknown - computed: true, optional: true, required: false
  private _allowUnknown = new DhcpServerInheritanceSourcesDhcpConfigAllowUnknownOutputReference(this, "allow_unknown");
  public get allowUnknown() {
    return this._allowUnknown;
  }
  public putAllowUnknown(value: DhcpServerInheritanceSourcesDhcpConfigAllowUnknown) {
    this._allowUnknown.internalValue = value;
  }
  public resetAllowUnknown() {
    this._allowUnknown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownInput() {
    return this._allowUnknown.internalValue;
  }

  // allow_unknown_v6 - computed: true, optional: true, required: false
  private _allowUnknownV6 = new DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6OutputReference(this, "allow_unknown_v6");
  public get allowUnknownV6() {
    return this._allowUnknownV6;
  }
  public putAllowUnknownV6(value: DhcpServerInheritanceSourcesDhcpConfigAllowUnknownV6) {
    this._allowUnknownV6.internalValue = value;
  }
  public resetAllowUnknownV6() {
    this._allowUnknownV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownV6Input() {
    return this._allowUnknownV6.internalValue;
  }

  // authoritative_dhcp - computed: true, optional: true, required: false
  private _authoritativeDhcp = new DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcpOutputReference(this, "authoritative_dhcp");
  public get authoritativeDhcp() {
    return this._authoritativeDhcp;
  }
  public putAuthoritativeDhcp(value: DhcpServerInheritanceSourcesDhcpConfigAuthoritativeDhcp) {
    this._authoritativeDhcp.internalValue = value;
  }
  public resetAuthoritativeDhcp() {
    this._authoritativeDhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeDhcpInput() {
    return this._authoritativeDhcp.internalValue;
  }

  // echo_client_id - computed: true, optional: true, required: false
  private _echoClientId = new DhcpServerInheritanceSourcesDhcpConfigEchoClientIdOutputReference(this, "echo_client_id");
  public get echoClientId() {
    return this._echoClientId;
  }
  public putEchoClientId(value: DhcpServerInheritanceSourcesDhcpConfigEchoClientId) {
    this._echoClientId.internalValue = value;
  }
  public resetEchoClientId() {
    this._echoClientId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoClientIdInput() {
    return this._echoClientId.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DhcpServerInheritanceSourcesDhcpConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DhcpServerInheritanceSourcesDhcpConfigFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // filters_v6 - computed: true, optional: true, required: false
  private _filtersV6 = new DhcpServerInheritanceSourcesDhcpConfigFiltersV6OutputReference(this, "filters_v6");
  public get filtersV6() {
    return this._filtersV6;
  }
  public putFiltersV6(value: DhcpServerInheritanceSourcesDhcpConfigFiltersV6) {
    this._filtersV6.internalValue = value;
  }
  public resetFiltersV6() {
    this._filtersV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersV6Input() {
    return this._filtersV6.internalValue;
  }

  // hold_reclaimed_time - computed: true, optional: true, required: false
  private _holdReclaimedTime = new DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeOutputReference(this, "hold_reclaimed_time");
  public get holdReclaimedTime() {
    return this._holdReclaimedTime;
  }
  public putHoldReclaimedTime(value: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTime) {
    this._holdReclaimedTime.internalValue = value;
  }
  public resetHoldReclaimedTime() {
    this._holdReclaimedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeInput() {
    return this._holdReclaimedTime.internalValue;
  }

  // hold_reclaimed_time_v6 - computed: true, optional: true, required: false
  private _holdReclaimedTimeV6 = new DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6OutputReference(this, "hold_reclaimed_time_v6");
  public get holdReclaimedTimeV6() {
    return this._holdReclaimedTimeV6;
  }
  public putHoldReclaimedTimeV6(value: DhcpServerInheritanceSourcesDhcpConfigHoldReclaimedTimeV6) {
    this._holdReclaimedTimeV6.internalValue = value;
  }
  public resetHoldReclaimedTimeV6() {
    this._holdReclaimedTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdReclaimedTimeV6Input() {
    return this._holdReclaimedTimeV6.internalValue;
  }

  // ignore_client_uid - computed: true, optional: true, required: false
  private _ignoreClientUid = new DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUidOutputReference(this, "ignore_client_uid");
  public get ignoreClientUid() {
    return this._ignoreClientUid;
  }
  public putIgnoreClientUid(value: DhcpServerInheritanceSourcesDhcpConfigIgnoreClientUid) {
    this._ignoreClientUid.internalValue = value;
  }
  public resetIgnoreClientUid() {
    this._ignoreClientUid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientUidInput() {
    return this._ignoreClientUid.internalValue;
  }

  // ignore_list - computed: true, optional: true, required: false
  private _ignoreList = new DhcpServerInheritanceSourcesDhcpConfigIgnoreListStructOutputReference(this, "ignore_list");
  public get ignoreList() {
    return this._ignoreList;
  }
  public putIgnoreList(value: DhcpServerInheritanceSourcesDhcpConfigIgnoreListStruct) {
    this._ignoreList.internalValue = value;
  }
  public resetIgnoreList() {
    this._ignoreList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreListInput() {
    return this._ignoreList.internalValue;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime = new DhcpServerInheritanceSourcesDhcpConfigLeaseTimeOutputReference(this, "lease_time");
  public get leaseTime() {
    return this._leaseTime;
  }
  public putLeaseTime(value: DhcpServerInheritanceSourcesDhcpConfigLeaseTime) {
    this._leaseTime.internalValue = value;
  }
  public resetLeaseTime() {
    this._leaseTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime.internalValue;
  }

  // lease_time_v6 - computed: true, optional: true, required: false
  private _leaseTimeV6 = new DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6OutputReference(this, "lease_time_v6");
  public get leaseTimeV6() {
    return this._leaseTimeV6;
  }
  public putLeaseTimeV6(value: DhcpServerInheritanceSourcesDhcpConfigLeaseTimeV6) {
    this._leaseTimeV6.internalValue = value;
  }
  public resetLeaseTimeV6() {
    this._leaseTimeV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeV6Input() {
    return this._leaseTimeV6.internalValue;
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsValueValueOption {
}

export function dhcpServerInheritanceSourcesDhcpOptionsValueValueOptionToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsValueValueOptionToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDhcpOptionsValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsValueValue {
}

export function dhcpServerInheritanceSourcesDhcpOptionsValueValueToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsValueValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDhcpOptionsValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DhcpServerInheritanceSourcesDhcpOptionsValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsValue {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpOptionsValueToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpOptionsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpServerInheritanceSourcesDhcpOptionsValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DhcpServerInheritanceSourcesDhcpOptionsValueList extends cdktf.ComplexList {
  public internalValue? : DhcpServerInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerInheritanceSourcesDhcpOptionsValueOutputReference {
    return new DhcpServerInheritanceSourcesDhcpOptionsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptions {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#value DhcpServer#value}
  */
  readonly value?: DhcpServerInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable;
}

export function dhcpServerInheritanceSourcesDhcpOptionsToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dhcpServerInheritanceSourcesDhcpOptionsValueToTerraform, false)(struct!.value),
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(dhcpServerInheritanceSourcesDhcpOptionsValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpServerInheritanceSourcesDhcpOptionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value = new DhcpServerInheritanceSourcesDhcpOptionsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DhcpServerInheritanceSourcesDhcpOptionsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOption {
}

export function dhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOptionToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOptionToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // option_code - computed: true, optional: false, required: false
  public get optionCode() {
    return this.getStringAttribute('option_code');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsV6ValueValue {
}

export function dhcpServerInheritanceSourcesDhcpOptionsV6ValueValueToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6ValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsV6ValueValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6ValueValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsV6ValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsV6ValueValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  private _option = new DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOptionOutputReference(this, "option");
  public get option() {
    return this._option;
  }

  // overriding_group - computed: true, optional: false, required: false
  public get overridingGroup() {
    return this.getStringAttribute('overriding_group');
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsV6Value {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesDhcpOptionsV6ValueToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsV6ValueToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpOptionsV6ValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsV6Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpServerInheritanceSourcesDhcpOptionsV6ValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DhcpServerInheritanceSourcesDhcpOptionsV6ValueList extends cdktf.ComplexList {
  public internalValue? : DhcpServerInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerInheritanceSourcesDhcpOptionsV6ValueOutputReference {
    return new DhcpServerInheritanceSourcesDhcpOptionsV6ValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpServerInheritanceSourcesDhcpOptionsV6 {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _block_: Don't use the inherited value.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
  /**
  * The inherited DHCP option values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#value DhcpServer#value}
  */
  readonly value?: DhcpServerInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable;
}

export function dhcpServerInheritanceSourcesDhcpOptionsV6ToTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.listMapper(dhcpServerInheritanceSourcesDhcpOptionsV6ValueToTerraform, false)(struct!.value),
  }
}


export function dhcpServerInheritanceSourcesDhcpOptionsV6ToHclTerraform(struct?: DhcpServerInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(dhcpServerInheritanceSourcesDhcpOptionsV6ValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "DhcpServerInheritanceSourcesDhcpOptionsV6ValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesDhcpOptionsV6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesDhcpOptionsV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value.internalValue = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value = new DhcpServerInheritanceSourcesDhcpOptionsV6ValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: DhcpServerInheritanceSourcesDhcpOptionsV6Value[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DhcpServerInheritanceSourcesHeaderOptionFilename {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesHeaderOptionFilenameToTerraform(struct?: DhcpServerInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct?: DhcpServerInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesHeaderOptionFilenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesHeaderOptionFilename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesHeaderOptionServerAddress {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesHeaderOptionServerAddressToTerraform(struct?: DhcpServerInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct?: DhcpServerInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesHeaderOptionServerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesHeaderOptionServerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesHeaderOptionServerName {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesHeaderOptionServerNameToTerraform(struct?: DhcpServerInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct?: DhcpServerInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesHeaderOptionServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesHeaderOptionServerName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpServerInheritanceSourcesHostnameRewriteBlockValue {
}

export function dhcpServerInheritanceSourcesHostnameRewriteBlockValueToTerraform(struct?: DhcpServerInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpServerInheritanceSourcesHostnameRewriteBlockValueToHclTerraform(struct?: DhcpServerInheritanceSourcesHostnameRewriteBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpServerInheritanceSourcesHostnameRewriteBlockValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesHostnameRewriteBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesHostnameRewriteBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_rewrite_char - computed: true, optional: false, required: false
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }

  // hostname_rewrite_enabled - computed: true, optional: false, required: false
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }

  // hostname_rewrite_regex - computed: true, optional: false, required: false
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
}
export interface DhcpServerInheritanceSourcesHostnameRewriteBlock {
  /**
  * The inheritance setting. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesHostnameRewriteBlockToTerraform(struct?: DhcpServerInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct?: DhcpServerInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesHostnameRewriteBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesHostnameRewriteBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DhcpServerInheritanceSourcesHostnameRewriteBlockValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#action DhcpServer#action}
  */
  readonly action?: string;
}

export function dhcpServerInheritanceSourcesVendorSpecificOptionOptionSpaceToTerraform(struct?: DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dhcpServerInheritanceSourcesVendorSpecificOptionOptionSpaceToHclTerraform(struct?: DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DhcpServerInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_block DhcpServer#ddns_block}
  */
  readonly ddnsBlock?: DhcpServerInheritanceSourcesDdnsBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_client_update DhcpServer#ddns_client_update}
  */
  readonly ddnsClientUpdate?: DhcpServerInheritanceSourcesDdnsClientUpdate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_conflict_resolution_mode DhcpServer#ddns_conflict_resolution_mode}
  */
  readonly ddnsConflictResolutionMode?: DhcpServerInheritanceSourcesDdnsConflictResolutionMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_hostname_block DhcpServer#ddns_hostname_block}
  */
  readonly ddnsHostnameBlock?: DhcpServerInheritanceSourcesDdnsHostnameBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_ttl_percent DhcpServer#ddns_ttl_percent}
  */
  readonly ddnsTtlPercent?: DhcpServerInheritanceSourcesDdnsTtlPercent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_update_on_renew DhcpServer#ddns_update_on_renew}
  */
  readonly ddnsUpdateOnRenew?: DhcpServerInheritanceSourcesDdnsUpdateOnRenew;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#ddns_use_conflict_resolution DhcpServer#ddns_use_conflict_resolution}
  */
  readonly ddnsUseConflictResolution?: DhcpServerInheritanceSourcesDdnsUseConflictResolution;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#dhcp_config DhcpServer#dhcp_config}
  */
  readonly dhcpConfig?: DhcpServerInheritanceSourcesDhcpConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#dhcp_options DhcpServer#dhcp_options}
  */
  readonly dhcpOptions?: DhcpServerInheritanceSourcesDhcpOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#dhcp_options_v6 DhcpServer#dhcp_options_v6}
  */
  readonly dhcpOptionsV6?: DhcpServerInheritanceSourcesDhcpOptionsV6;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#header_option_filename DhcpServer#header_option_filename}
  */
  readonly headerOptionFilename?: DhcpServerInheritanceSourcesHeaderOptionFilename;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#header_option_server_address DhcpServer#header_option_server_address}
  */
  readonly headerOptionServerAddress?: DhcpServerInheritanceSourcesHeaderOptionServerAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#header_option_server_name DhcpServer#header_option_server_name}
  */
  readonly headerOptionServerName?: DhcpServerInheritanceSourcesHeaderOptionServerName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#hostname_rewrite_block DhcpServer#hostname_rewrite_block}
  */
  readonly hostnameRewriteBlock?: DhcpServerInheritanceSourcesHostnameRewriteBlock;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#vendor_specific_option_option_space DhcpServer#vendor_specific_option_option_space}
  */
  readonly vendorSpecificOptionOptionSpace?: DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace;
}

export function dhcpServerInheritanceSourcesToTerraform(struct?: DhcpServerInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns_block: dhcpServerInheritanceSourcesDdnsBlockToTerraform(struct!.ddnsBlock),
    ddns_client_update: dhcpServerInheritanceSourcesDdnsClientUpdateToTerraform(struct!.ddnsClientUpdate),
    ddns_conflict_resolution_mode: dhcpServerInheritanceSourcesDdnsConflictResolutionModeToTerraform(struct!.ddnsConflictResolutionMode),
    ddns_hostname_block: dhcpServerInheritanceSourcesDdnsHostnameBlockToTerraform(struct!.ddnsHostnameBlock),
    ddns_ttl_percent: dhcpServerInheritanceSourcesDdnsTtlPercentToTerraform(struct!.ddnsTtlPercent),
    ddns_update_on_renew: dhcpServerInheritanceSourcesDdnsUpdateOnRenewToTerraform(struct!.ddnsUpdateOnRenew),
    ddns_use_conflict_resolution: dhcpServerInheritanceSourcesDdnsUseConflictResolutionToTerraform(struct!.ddnsUseConflictResolution),
    dhcp_config: dhcpServerInheritanceSourcesDhcpConfigToTerraform(struct!.dhcpConfig),
    dhcp_options: dhcpServerInheritanceSourcesDhcpOptionsToTerraform(struct!.dhcpOptions),
    dhcp_options_v6: dhcpServerInheritanceSourcesDhcpOptionsV6ToTerraform(struct!.dhcpOptionsV6),
    header_option_filename: dhcpServerInheritanceSourcesHeaderOptionFilenameToTerraform(struct!.headerOptionFilename),
    header_option_server_address: dhcpServerInheritanceSourcesHeaderOptionServerAddressToTerraform(struct!.headerOptionServerAddress),
    header_option_server_name: dhcpServerInheritanceSourcesHeaderOptionServerNameToTerraform(struct!.headerOptionServerName),
    hostname_rewrite_block: dhcpServerInheritanceSourcesHostnameRewriteBlockToTerraform(struct!.hostnameRewriteBlock),
    vendor_specific_option_option_space: dhcpServerInheritanceSourcesVendorSpecificOptionOptionSpaceToTerraform(struct!.vendorSpecificOptionOptionSpace),
  }
}


export function dhcpServerInheritanceSourcesToHclTerraform(struct?: DhcpServerInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns_block: {
      value: dhcpServerInheritanceSourcesDdnsBlockToHclTerraform(struct!.ddnsBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsBlock",
    },
    ddns_client_update: {
      value: dhcpServerInheritanceSourcesDdnsClientUpdateToHclTerraform(struct!.ddnsClientUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsClientUpdate",
    },
    ddns_conflict_resolution_mode: {
      value: dhcpServerInheritanceSourcesDdnsConflictResolutionModeToHclTerraform(struct!.ddnsConflictResolutionMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsConflictResolutionMode",
    },
    ddns_hostname_block: {
      value: dhcpServerInheritanceSourcesDdnsHostnameBlockToHclTerraform(struct!.ddnsHostnameBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsHostnameBlock",
    },
    ddns_ttl_percent: {
      value: dhcpServerInheritanceSourcesDdnsTtlPercentToHclTerraform(struct!.ddnsTtlPercent),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsTtlPercent",
    },
    ddns_update_on_renew: {
      value: dhcpServerInheritanceSourcesDdnsUpdateOnRenewToHclTerraform(struct!.ddnsUpdateOnRenew),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsUpdateOnRenew",
    },
    ddns_use_conflict_resolution: {
      value: dhcpServerInheritanceSourcesDdnsUseConflictResolutionToHclTerraform(struct!.ddnsUseConflictResolution),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDdnsUseConflictResolution",
    },
    dhcp_config: {
      value: dhcpServerInheritanceSourcesDhcpConfigToHclTerraform(struct!.dhcpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpConfig",
    },
    dhcp_options: {
      value: dhcpServerInheritanceSourcesDhcpOptionsToHclTerraform(struct!.dhcpOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpOptions",
    },
    dhcp_options_v6: {
      value: dhcpServerInheritanceSourcesDhcpOptionsV6ToHclTerraform(struct!.dhcpOptionsV6),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesDhcpOptionsV6",
    },
    header_option_filename: {
      value: dhcpServerInheritanceSourcesHeaderOptionFilenameToHclTerraform(struct!.headerOptionFilename),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesHeaderOptionFilename",
    },
    header_option_server_address: {
      value: dhcpServerInheritanceSourcesHeaderOptionServerAddressToHclTerraform(struct!.headerOptionServerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesHeaderOptionServerAddress",
    },
    header_option_server_name: {
      value: dhcpServerInheritanceSourcesHeaderOptionServerNameToHclTerraform(struct!.headerOptionServerName),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesHeaderOptionServerName",
    },
    hostname_rewrite_block: {
      value: dhcpServerInheritanceSourcesHostnameRewriteBlockToHclTerraform(struct!.hostnameRewriteBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesHostnameRewriteBlock",
    },
    vendor_specific_option_option_space: {
      value: dhcpServerInheritanceSourcesVendorSpecificOptionOptionSpaceToHclTerraform(struct!.vendorSpecificOptionOptionSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DhcpServerInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddnsBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsBlock = this._ddnsBlock?.internalValue;
    }
    if (this._ddnsClientUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsClientUpdate = this._ddnsClientUpdate?.internalValue;
    }
    if (this._ddnsConflictResolutionMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsConflictResolutionMode = this._ddnsConflictResolutionMode?.internalValue;
    }
    if (this._ddnsHostnameBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsHostnameBlock = this._ddnsHostnameBlock?.internalValue;
    }
    if (this._ddnsTtlPercent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtlPercent = this._ddnsTtlPercent?.internalValue;
    }
    if (this._ddnsUpdateOnRenew?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOnRenew = this._ddnsUpdateOnRenew?.internalValue;
    }
    if (this._ddnsUseConflictResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUseConflictResolution = this._ddnsUseConflictResolution?.internalValue;
    }
    if (this._dhcpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpConfig = this._dhcpConfig?.internalValue;
    }
    if (this._dhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptions = this._dhcpOptions?.internalValue;
    }
    if (this._dhcpOptionsV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionsV6 = this._dhcpOptionsV6?.internalValue;
    }
    if (this._headerOptionFilename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionFilename = this._headerOptionFilename?.internalValue;
    }
    if (this._headerOptionServerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerAddress = this._headerOptionServerAddress?.internalValue;
    }
    if (this._headerOptionServerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptionServerName = this._headerOptionServerName?.internalValue;
    }
    if (this._hostnameRewriteBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameRewriteBlock = this._hostnameRewriteBlock?.internalValue;
    }
    if (this._vendorSpecificOptionOptionSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSpecificOptionOptionSpace = this._vendorSpecificOptionOptionSpace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddnsBlock.internalValue = undefined;
      this._ddnsClientUpdate.internalValue = undefined;
      this._ddnsConflictResolutionMode.internalValue = undefined;
      this._ddnsHostnameBlock.internalValue = undefined;
      this._ddnsTtlPercent.internalValue = undefined;
      this._ddnsUpdateOnRenew.internalValue = undefined;
      this._ddnsUseConflictResolution.internalValue = undefined;
      this._dhcpConfig.internalValue = undefined;
      this._dhcpOptions.internalValue = undefined;
      this._dhcpOptionsV6.internalValue = undefined;
      this._headerOptionFilename.internalValue = undefined;
      this._headerOptionServerAddress.internalValue = undefined;
      this._headerOptionServerName.internalValue = undefined;
      this._hostnameRewriteBlock.internalValue = undefined;
      this._vendorSpecificOptionOptionSpace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddnsBlock.internalValue = value.ddnsBlock;
      this._ddnsClientUpdate.internalValue = value.ddnsClientUpdate;
      this._ddnsConflictResolutionMode.internalValue = value.ddnsConflictResolutionMode;
      this._ddnsHostnameBlock.internalValue = value.ddnsHostnameBlock;
      this._ddnsTtlPercent.internalValue = value.ddnsTtlPercent;
      this._ddnsUpdateOnRenew.internalValue = value.ddnsUpdateOnRenew;
      this._ddnsUseConflictResolution.internalValue = value.ddnsUseConflictResolution;
      this._dhcpConfig.internalValue = value.dhcpConfig;
      this._dhcpOptions.internalValue = value.dhcpOptions;
      this._dhcpOptionsV6.internalValue = value.dhcpOptionsV6;
      this._headerOptionFilename.internalValue = value.headerOptionFilename;
      this._headerOptionServerAddress.internalValue = value.headerOptionServerAddress;
      this._headerOptionServerName.internalValue = value.headerOptionServerName;
      this._hostnameRewriteBlock.internalValue = value.hostnameRewriteBlock;
      this._vendorSpecificOptionOptionSpace.internalValue = value.vendorSpecificOptionOptionSpace;
    }
  }

  // ddns_block - computed: true, optional: true, required: false
  private _ddnsBlock = new DhcpServerInheritanceSourcesDdnsBlockOutputReference(this, "ddns_block");
  public get ddnsBlock() {
    return this._ddnsBlock;
  }
  public putDdnsBlock(value: DhcpServerInheritanceSourcesDdnsBlock) {
    this._ddnsBlock.internalValue = value;
  }
  public resetDdnsBlock() {
    this._ddnsBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsBlockInput() {
    return this._ddnsBlock.internalValue;
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate = new DhcpServerInheritanceSourcesDdnsClientUpdateOutputReference(this, "ddns_client_update");
  public get ddnsClientUpdate() {
    return this._ddnsClientUpdate;
  }
  public putDdnsClientUpdate(value: DhcpServerInheritanceSourcesDdnsClientUpdate) {
    this._ddnsClientUpdate.internalValue = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate.internalValue;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode = new DhcpServerInheritanceSourcesDdnsConflictResolutionModeOutputReference(this, "ddns_conflict_resolution_mode");
  public get ddnsConflictResolutionMode() {
    return this._ddnsConflictResolutionMode;
  }
  public putDdnsConflictResolutionMode(value: DhcpServerInheritanceSourcesDdnsConflictResolutionMode) {
    this._ddnsConflictResolutionMode.internalValue = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode.internalValue;
  }

  // ddns_hostname_block - computed: true, optional: true, required: false
  private _ddnsHostnameBlock = new DhcpServerInheritanceSourcesDdnsHostnameBlockOutputReference(this, "ddns_hostname_block");
  public get ddnsHostnameBlock() {
    return this._ddnsHostnameBlock;
  }
  public putDdnsHostnameBlock(value: DhcpServerInheritanceSourcesDdnsHostnameBlock) {
    this._ddnsHostnameBlock.internalValue = value;
  }
  public resetDdnsHostnameBlock() {
    this._ddnsHostnameBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsHostnameBlockInput() {
    return this._ddnsHostnameBlock.internalValue;
  }

  // ddns_ttl_percent - computed: true, optional: true, required: false
  private _ddnsTtlPercent = new DhcpServerInheritanceSourcesDdnsTtlPercentOutputReference(this, "ddns_ttl_percent");
  public get ddnsTtlPercent() {
    return this._ddnsTtlPercent;
  }
  public putDdnsTtlPercent(value: DhcpServerInheritanceSourcesDdnsTtlPercent) {
    this._ddnsTtlPercent.internalValue = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent.internalValue;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew = new DhcpServerInheritanceSourcesDdnsUpdateOnRenewOutputReference(this, "ddns_update_on_renew");
  public get ddnsUpdateOnRenew() {
    return this._ddnsUpdateOnRenew;
  }
  public putDdnsUpdateOnRenew(value: DhcpServerInheritanceSourcesDdnsUpdateOnRenew) {
    this._ddnsUpdateOnRenew.internalValue = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew.internalValue;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution = new DhcpServerInheritanceSourcesDdnsUseConflictResolutionOutputReference(this, "ddns_use_conflict_resolution");
  public get ddnsUseConflictResolution() {
    return this._ddnsUseConflictResolution;
  }
  public putDdnsUseConflictResolution(value: DhcpServerInheritanceSourcesDdnsUseConflictResolution) {
    this._ddnsUseConflictResolution.internalValue = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution.internalValue;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new DhcpServerInheritanceSourcesDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: DhcpServerInheritanceSourcesDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: true, optional: true, required: false
  private _dhcpOptions = new DhcpServerInheritanceSourcesDhcpOptionsOutputReference(this, "dhcp_options");
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DhcpServerInheritanceSourcesDhcpOptions) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_options_v6 - computed: true, optional: true, required: false
  private _dhcpOptionsV6 = new DhcpServerInheritanceSourcesDhcpOptionsV6OutputReference(this, "dhcp_options_v6");
  public get dhcpOptionsV6() {
    return this._dhcpOptionsV6;
  }
  public putDhcpOptionsV6(value: DhcpServerInheritanceSourcesDhcpOptionsV6) {
    this._dhcpOptionsV6.internalValue = value;
  }
  public resetDhcpOptionsV6() {
    this._dhcpOptionsV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsV6Input() {
    return this._dhcpOptionsV6.internalValue;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename = new DhcpServerInheritanceSourcesHeaderOptionFilenameOutputReference(this, "header_option_filename");
  public get headerOptionFilename() {
    return this._headerOptionFilename;
  }
  public putHeaderOptionFilename(value: DhcpServerInheritanceSourcesHeaderOptionFilename) {
    this._headerOptionFilename.internalValue = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename.internalValue;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress = new DhcpServerInheritanceSourcesHeaderOptionServerAddressOutputReference(this, "header_option_server_address");
  public get headerOptionServerAddress() {
    return this._headerOptionServerAddress;
  }
  public putHeaderOptionServerAddress(value: DhcpServerInheritanceSourcesHeaderOptionServerAddress) {
    this._headerOptionServerAddress.internalValue = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress.internalValue;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName = new DhcpServerInheritanceSourcesHeaderOptionServerNameOutputReference(this, "header_option_server_name");
  public get headerOptionServerName() {
    return this._headerOptionServerName;
  }
  public putHeaderOptionServerName(value: DhcpServerInheritanceSourcesHeaderOptionServerName) {
    this._headerOptionServerName.internalValue = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName.internalValue;
  }

  // hostname_rewrite_block - computed: true, optional: true, required: false
  private _hostnameRewriteBlock = new DhcpServerInheritanceSourcesHostnameRewriteBlockOutputReference(this, "hostname_rewrite_block");
  public get hostnameRewriteBlock() {
    return this._hostnameRewriteBlock;
  }
  public putHostnameRewriteBlock(value: DhcpServerInheritanceSourcesHostnameRewriteBlock) {
    this._hostnameRewriteBlock.internalValue = value;
  }
  public resetHostnameRewriteBlock() {
    this._hostnameRewriteBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteBlockInput() {
    return this._hostnameRewriteBlock.internalValue;
  }

  // vendor_specific_option_option_space - computed: true, optional: true, required: false
  private _vendorSpecificOptionOptionSpace = new DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpaceOutputReference(this, "vendor_specific_option_option_space");
  public get vendorSpecificOptionOptionSpace() {
    return this._vendorSpecificOptionOptionSpace;
  }
  public putVendorSpecificOptionOptionSpace(value: DhcpServerInheritanceSourcesVendorSpecificOptionOptionSpace) {
    this._vendorSpecificOptionOptionSpace.internalValue = value;
  }
  public resetVendorSpecificOptionOptionSpace() {
    this._vendorSpecificOptionOptionSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificOptionOptionSpaceInput() {
    return this._vendorSpecificOptionOptionSpace.internalValue;
  }
}
export interface DhcpServerKerberosKeys {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#key DhcpServer#key}
  */
  readonly key: string;
}

export function dhcpServerKerberosKeysToTerraform(struct?: DhcpServerKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dhcpServerKerberosKeysToHclTerraform(struct?: DhcpServerKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerKerberosKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DhcpServerKerberosKeysList extends cdktf.ComplexList {
  public internalValue? : DhcpServerKerberosKeys[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerKerberosKeysOutputReference {
    return new DhcpServerKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server bloxone_dhcp_server}
*/
export class DhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpServer to import
  * @param importFromId The id of the existing DhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dhcp_server bloxone_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientPrincipal = config.clientPrincipal;
    this._comment = config.comment;
    this._ddnsClientUpdate = config.ddnsClientUpdate;
    this._ddnsConflictResolutionMode = config.ddnsConflictResolutionMode;
    this._ddnsDomain = config.ddnsDomain;
    this._ddnsEnabled = config.ddnsEnabled;
    this._ddnsGenerateName = config.ddnsGenerateName;
    this._ddnsGeneratedPrefix = config.ddnsGeneratedPrefix;
    this._ddnsSendUpdates = config.ddnsSendUpdates;
    this._ddnsTtlPercent = config.ddnsTtlPercent;
    this._ddnsUpdateOnRenew = config.ddnsUpdateOnRenew;
    this._ddnsUseConflictResolution = config.ddnsUseConflictResolution;
    this._ddnsZones.internalValue = config.ddnsZones;
    this._dhcpConfig.internalValue = config.dhcpConfig;
    this._dhcpOptions.internalValue = config.dhcpOptions;
    this._dhcpOptionsV6.internalValue = config.dhcpOptionsV6;
    this._gssTsigFallback = config.gssTsigFallback;
    this._headerOptionFilename = config.headerOptionFilename;
    this._headerOptionServerAddress = config.headerOptionServerAddress;
    this._headerOptionServerName = config.headerOptionServerName;
    this._hostnameRewriteChar = config.hostnameRewriteChar;
    this._hostnameRewriteEnabled = config.hostnameRewriteEnabled;
    this._hostnameRewriteRegex = config.hostnameRewriteRegex;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._kerberosKdc = config.kerberosKdc;
    this._kerberosKeys.internalValue = config.kerberosKeys;
    this._kerberosRekeyInterval = config.kerberosRekeyInterval;
    this._kerberosRetryInterval = config.kerberosRetryInterval;
    this._kerberosTkeyLifetime = config.kerberosTkeyLifetime;
    this._kerberosTkeyProtocol = config.kerberosTkeyProtocol;
    this._name = config.name;
    this._profileType = config.profileType;
    this._serverPrincipal = config.serverPrincipal;
    this._tags = config.tags;
    this._vendorSpecificOptionOptionSpace = config.vendorSpecificOptionOptionSpace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_principal - computed: true, optional: true, required: false
  private _clientPrincipal?: string; 
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }
  public set clientPrincipal(value: string) {
    this._clientPrincipal = value;
  }
  public resetClientPrincipal() {
    this._clientPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrincipalInput() {
    return this._clientPrincipal;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ddns_client_update - computed: true, optional: true, required: false
  private _ddnsClientUpdate?: string; 
  public get ddnsClientUpdate() {
    return this.getStringAttribute('ddns_client_update');
  }
  public set ddnsClientUpdate(value: string) {
    this._ddnsClientUpdate = value;
  }
  public resetDdnsClientUpdate() {
    this._ddnsClientUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsClientUpdateInput() {
    return this._ddnsClientUpdate;
  }

  // ddns_conflict_resolution_mode - computed: true, optional: true, required: false
  private _ddnsConflictResolutionMode?: string; 
  public get ddnsConflictResolutionMode() {
    return this.getStringAttribute('ddns_conflict_resolution_mode');
  }
  public set ddnsConflictResolutionMode(value: string) {
    this._ddnsConflictResolutionMode = value;
  }
  public resetDdnsConflictResolutionMode() {
    this._ddnsConflictResolutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsConflictResolutionModeInput() {
    return this._ddnsConflictResolutionMode;
  }

  // ddns_domain - computed: true, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_enabled - computed: true, optional: true, required: false
  private _ddnsEnabled?: boolean | cdktf.IResolvable; 
  public get ddnsEnabled() {
    return this.getBooleanAttribute('ddns_enabled');
  }
  public set ddnsEnabled(value: boolean | cdktf.IResolvable) {
    this._ddnsEnabled = value;
  }
  public resetDdnsEnabled() {
    this._ddnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnabledInput() {
    return this._ddnsEnabled;
  }

  // ddns_generate_name - computed: true, optional: true, required: false
  private _ddnsGenerateName?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateName() {
    return this.getBooleanAttribute('ddns_generate_name');
  }
  public set ddnsGenerateName(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateName = value;
  }
  public resetDdnsGenerateName() {
    this._ddnsGenerateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateNameInput() {
    return this._ddnsGenerateName;
  }

  // ddns_generated_prefix - computed: true, optional: true, required: false
  private _ddnsGeneratedPrefix?: string; 
  public get ddnsGeneratedPrefix() {
    return this.getStringAttribute('ddns_generated_prefix');
  }
  public set ddnsGeneratedPrefix(value: string) {
    this._ddnsGeneratedPrefix = value;
  }
  public resetDdnsGeneratedPrefix() {
    this._ddnsGeneratedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGeneratedPrefixInput() {
    return this._ddnsGeneratedPrefix;
  }

  // ddns_send_updates - computed: true, optional: true, required: false
  private _ddnsSendUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsSendUpdates() {
    return this.getBooleanAttribute('ddns_send_updates');
  }
  public set ddnsSendUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsSendUpdates = value;
  }
  public resetDdnsSendUpdates() {
    this._ddnsSendUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSendUpdatesInput() {
    return this._ddnsSendUpdates;
  }

  // ddns_ttl_percent - computed: false, optional: true, required: false
  private _ddnsTtlPercent?: number; 
  public get ddnsTtlPercent() {
    return this.getNumberAttribute('ddns_ttl_percent');
  }
  public set ddnsTtlPercent(value: number) {
    this._ddnsTtlPercent = value;
  }
  public resetDdnsTtlPercent() {
    this._ddnsTtlPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlPercentInput() {
    return this._ddnsTtlPercent;
  }

  // ddns_update_on_renew - computed: true, optional: true, required: false
  private _ddnsUpdateOnRenew?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateOnRenew() {
    return this.getBooleanAttribute('ddns_update_on_renew');
  }
  public set ddnsUpdateOnRenew(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateOnRenew = value;
  }
  public resetDdnsUpdateOnRenew() {
    this._ddnsUpdateOnRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOnRenewInput() {
    return this._ddnsUpdateOnRenew;
  }

  // ddns_use_conflict_resolution - computed: true, optional: true, required: false
  private _ddnsUseConflictResolution?: boolean | cdktf.IResolvable; 
  public get ddnsUseConflictResolution() {
    return this.getBooleanAttribute('ddns_use_conflict_resolution');
  }
  public set ddnsUseConflictResolution(value: boolean | cdktf.IResolvable) {
    this._ddnsUseConflictResolution = value;
  }
  public resetDdnsUseConflictResolution() {
    this._ddnsUseConflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUseConflictResolutionInput() {
    return this._ddnsUseConflictResolution;
  }

  // ddns_zones - computed: true, optional: true, required: false
  private _ddnsZones = new DhcpServerDdnsZonesList(this, "ddns_zones", false);
  public get ddnsZones() {
    return this._ddnsZones;
  }
  public putDdnsZones(value: DhcpServerDdnsZones[] | cdktf.IResolvable) {
    this._ddnsZones.internalValue = value;
  }
  public resetDdnsZones() {
    this._ddnsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZonesInput() {
    return this._ddnsZones.internalValue;
  }

  // dhcp_config - computed: true, optional: true, required: false
  private _dhcpConfig = new DhcpServerDhcpConfigOutputReference(this, "dhcp_config");
  public get dhcpConfig() {
    return this._dhcpConfig;
  }
  public putDhcpConfig(value: DhcpServerDhcpConfig) {
    this._dhcpConfig.internalValue = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig.internalValue;
  }

  // dhcp_options - computed: false, optional: true, required: false
  private _dhcpOptions = new DhcpServerDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }
  public putDhcpOptions(value: DhcpServerDhcpOptions[] | cdktf.IResolvable) {
    this._dhcpOptions.internalValue = value;
  }
  public resetDhcpOptions() {
    this._dhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsInput() {
    return this._dhcpOptions.internalValue;
  }

  // dhcp_options_v6 - computed: false, optional: true, required: false
  private _dhcpOptionsV6 = new DhcpServerDhcpOptionsV6List(this, "dhcp_options_v6", false);
  public get dhcpOptionsV6() {
    return this._dhcpOptionsV6;
  }
  public putDhcpOptionsV6(value: DhcpServerDhcpOptionsV6[] | cdktf.IResolvable) {
    this._dhcpOptionsV6.internalValue = value;
  }
  public resetDhcpOptionsV6() {
    this._dhcpOptionsV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsV6Input() {
    return this._dhcpOptionsV6.internalValue;
  }

  // gss_tsig_fallback - computed: true, optional: true, required: false
  private _gssTsigFallback?: boolean | cdktf.IResolvable; 
  public get gssTsigFallback() {
    return this.getBooleanAttribute('gss_tsig_fallback');
  }
  public set gssTsigFallback(value: boolean | cdktf.IResolvable) {
    this._gssTsigFallback = value;
  }
  public resetGssTsigFallback() {
    this._gssTsigFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigFallbackInput() {
    return this._gssTsigFallback;
  }

  // header_option_filename - computed: true, optional: true, required: false
  private _headerOptionFilename?: string; 
  public get headerOptionFilename() {
    return this.getStringAttribute('header_option_filename');
  }
  public set headerOptionFilename(value: string) {
    this._headerOptionFilename = value;
  }
  public resetHeaderOptionFilename() {
    this._headerOptionFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionFilenameInput() {
    return this._headerOptionFilename;
  }

  // header_option_server_address - computed: true, optional: true, required: false
  private _headerOptionServerAddress?: string; 
  public get headerOptionServerAddress() {
    return this.getStringAttribute('header_option_server_address');
  }
  public set headerOptionServerAddress(value: string) {
    this._headerOptionServerAddress = value;
  }
  public resetHeaderOptionServerAddress() {
    this._headerOptionServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerAddressInput() {
    return this._headerOptionServerAddress;
  }

  // header_option_server_name - computed: true, optional: true, required: false
  private _headerOptionServerName?: string; 
  public get headerOptionServerName() {
    return this.getStringAttribute('header_option_server_name');
  }
  public set headerOptionServerName(value: string) {
    this._headerOptionServerName = value;
  }
  public resetHeaderOptionServerName() {
    this._headerOptionServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionServerNameInput() {
    return this._headerOptionServerName;
  }

  // hostname_rewrite_char - computed: true, optional: true, required: false
  private _hostnameRewriteChar?: string; 
  public get hostnameRewriteChar() {
    return this.getStringAttribute('hostname_rewrite_char');
  }
  public set hostnameRewriteChar(value: string) {
    this._hostnameRewriteChar = value;
  }
  public resetHostnameRewriteChar() {
    this._hostnameRewriteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteCharInput() {
    return this._hostnameRewriteChar;
  }

  // hostname_rewrite_enabled - computed: true, optional: true, required: false
  private _hostnameRewriteEnabled?: boolean | cdktf.IResolvable; 
  public get hostnameRewriteEnabled() {
    return this.getBooleanAttribute('hostname_rewrite_enabled');
  }
  public set hostnameRewriteEnabled(value: boolean | cdktf.IResolvable) {
    this._hostnameRewriteEnabled = value;
  }
  public resetHostnameRewriteEnabled() {
    this._hostnameRewriteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteEnabledInput() {
    return this._hostnameRewriteEnabled;
  }

  // hostname_rewrite_regex - computed: true, optional: true, required: false
  private _hostnameRewriteRegex?: string; 
  public get hostnameRewriteRegex() {
    return this.getStringAttribute('hostname_rewrite_regex');
  }
  public set hostnameRewriteRegex(value: string) {
    this._hostnameRewriteRegex = value;
  }
  public resetHostnameRewriteRegex() {
    this._hostnameRewriteRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameRewriteRegexInput() {
    return this._hostnameRewriteRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DhcpServerInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DhcpServerInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // kerberos_kdc - computed: true, optional: true, required: false
  private _kerberosKdc?: string; 
  public get kerberosKdc() {
    return this.getStringAttribute('kerberos_kdc');
  }
  public set kerberosKdc(value: string) {
    this._kerberosKdc = value;
  }
  public resetKerberosKdc() {
    this._kerberosKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcInput() {
    return this._kerberosKdc;
  }

  // kerberos_keys - computed: false, optional: true, required: false
  private _kerberosKeys = new DhcpServerKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DhcpServerKerberosKeys[] | cdktf.IResolvable) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }

  // kerberos_rekey_interval - computed: true, optional: true, required: false
  private _kerberosRekeyInterval?: number; 
  public get kerberosRekeyInterval() {
    return this.getNumberAttribute('kerberos_rekey_interval');
  }
  public set kerberosRekeyInterval(value: number) {
    this._kerberosRekeyInterval = value;
  }
  public resetKerberosRekeyInterval() {
    this._kerberosRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRekeyIntervalInput() {
    return this._kerberosRekeyInterval;
  }

  // kerberos_retry_interval - computed: true, optional: true, required: false
  private _kerberosRetryInterval?: number; 
  public get kerberosRetryInterval() {
    return this.getNumberAttribute('kerberos_retry_interval');
  }
  public set kerberosRetryInterval(value: number) {
    this._kerberosRetryInterval = value;
  }
  public resetKerberosRetryInterval() {
    this._kerberosRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRetryIntervalInput() {
    return this._kerberosRetryInterval;
  }

  // kerberos_tkey_lifetime - computed: true, optional: true, required: false
  private _kerberosTkeyLifetime?: number; 
  public get kerberosTkeyLifetime() {
    return this.getNumberAttribute('kerberos_tkey_lifetime');
  }
  public set kerberosTkeyLifetime(value: number) {
    this._kerberosTkeyLifetime = value;
  }
  public resetKerberosTkeyLifetime() {
    this._kerberosTkeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyLifetimeInput() {
    return this._kerberosTkeyLifetime;
  }

  // kerberos_tkey_protocol - computed: true, optional: true, required: false
  private _kerberosTkeyProtocol?: string; 
  public get kerberosTkeyProtocol() {
    return this.getStringAttribute('kerberos_tkey_protocol');
  }
  public set kerberosTkeyProtocol(value: string) {
    this._kerberosTkeyProtocol = value;
  }
  public resetKerberosTkeyProtocol() {
    this._kerberosTkeyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTkeyProtocolInput() {
    return this._kerberosTkeyProtocol;
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

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // server_principal - computed: true, optional: true, required: false
  private _serverPrincipal?: string; 
  public get serverPrincipal() {
    return this.getStringAttribute('server_principal');
  }
  public set serverPrincipal(value: string) {
    this._serverPrincipal = value;
  }
  public resetServerPrincipal() {
    this._serverPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrincipalInput() {
    return this._serverPrincipal;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vendor_specific_option_option_space - computed: false, optional: true, required: false
  private _vendorSpecificOptionOptionSpace?: string; 
  public get vendorSpecificOptionOptionSpace() {
    return this.getStringAttribute('vendor_specific_option_option_space');
  }
  public set vendorSpecificOptionOptionSpace(value: string) {
    this._vendorSpecificOptionOptionSpace = value;
  }
  public resetVendorSpecificOptionOptionSpace() {
    this._vendorSpecificOptionOptionSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificOptionOptionSpaceInput() {
    return this._vendorSpecificOptionOptionSpace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_principal: cdktf.stringToTerraform(this._clientPrincipal),
      comment: cdktf.stringToTerraform(this._comment),
      ddns_client_update: cdktf.stringToTerraform(this._ddnsClientUpdate),
      ddns_conflict_resolution_mode: cdktf.stringToTerraform(this._ddnsConflictResolutionMode),
      ddns_domain: cdktf.stringToTerraform(this._ddnsDomain),
      ddns_enabled: cdktf.booleanToTerraform(this._ddnsEnabled),
      ddns_generate_name: cdktf.booleanToTerraform(this._ddnsGenerateName),
      ddns_generated_prefix: cdktf.stringToTerraform(this._ddnsGeneratedPrefix),
      ddns_send_updates: cdktf.booleanToTerraform(this._ddnsSendUpdates),
      ddns_ttl_percent: cdktf.numberToTerraform(this._ddnsTtlPercent),
      ddns_update_on_renew: cdktf.booleanToTerraform(this._ddnsUpdateOnRenew),
      ddns_use_conflict_resolution: cdktf.booleanToTerraform(this._ddnsUseConflictResolution),
      ddns_zones: cdktf.listMapper(dhcpServerDdnsZonesToTerraform, false)(this._ddnsZones.internalValue),
      dhcp_config: dhcpServerDhcpConfigToTerraform(this._dhcpConfig.internalValue),
      dhcp_options: cdktf.listMapper(dhcpServerDhcpOptionsToTerraform, false)(this._dhcpOptions.internalValue),
      dhcp_options_v6: cdktf.listMapper(dhcpServerDhcpOptionsV6ToTerraform, false)(this._dhcpOptionsV6.internalValue),
      gss_tsig_fallback: cdktf.booleanToTerraform(this._gssTsigFallback),
      header_option_filename: cdktf.stringToTerraform(this._headerOptionFilename),
      header_option_server_address: cdktf.stringToTerraform(this._headerOptionServerAddress),
      header_option_server_name: cdktf.stringToTerraform(this._headerOptionServerName),
      hostname_rewrite_char: cdktf.stringToTerraform(this._hostnameRewriteChar),
      hostname_rewrite_enabled: cdktf.booleanToTerraform(this._hostnameRewriteEnabled),
      hostname_rewrite_regex: cdktf.stringToTerraform(this._hostnameRewriteRegex),
      inheritance_sources: dhcpServerInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      kerberos_kdc: cdktf.stringToTerraform(this._kerberosKdc),
      kerberos_keys: cdktf.listMapper(dhcpServerKerberosKeysToTerraform, false)(this._kerberosKeys.internalValue),
      kerberos_rekey_interval: cdktf.numberToTerraform(this._kerberosRekeyInterval),
      kerberos_retry_interval: cdktf.numberToTerraform(this._kerberosRetryInterval),
      kerberos_tkey_lifetime: cdktf.numberToTerraform(this._kerberosTkeyLifetime),
      kerberos_tkey_protocol: cdktf.stringToTerraform(this._kerberosTkeyProtocol),
      name: cdktf.stringToTerraform(this._name),
      profile_type: cdktf.stringToTerraform(this._profileType),
      server_principal: cdktf.stringToTerraform(this._serverPrincipal),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vendor_specific_option_option_space: cdktf.stringToTerraform(this._vendorSpecificOptionOptionSpace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_principal: {
        value: cdktf.stringToHclTerraform(this._clientPrincipal),
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
      ddns_client_update: {
        value: cdktf.stringToHclTerraform(this._ddnsClientUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_conflict_resolution_mode: {
        value: cdktf.stringToHclTerraform(this._ddnsConflictResolutionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_domain: {
        value: cdktf.stringToHclTerraform(this._ddnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_enabled: {
        value: cdktf.booleanToHclTerraform(this._ddnsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_generate_name: {
        value: cdktf.booleanToHclTerraform(this._ddnsGenerateName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_generated_prefix: {
        value: cdktf.stringToHclTerraform(this._ddnsGeneratedPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_send_updates: {
        value: cdktf.booleanToHclTerraform(this._ddnsSendUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_ttl_percent: {
        value: cdktf.numberToHclTerraform(this._ddnsTtlPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_update_on_renew: {
        value: cdktf.booleanToHclTerraform(this._ddnsUpdateOnRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_use_conflict_resolution: {
        value: cdktf.booleanToHclTerraform(this._ddnsUseConflictResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_zones: {
        value: cdktf.listMapperHcl(dhcpServerDdnsZonesToHclTerraform, false)(this._ddnsZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerDdnsZonesList",
      },
      dhcp_config: {
        value: dhcpServerDhcpConfigToHclTerraform(this._dhcpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpServerDhcpConfig",
      },
      dhcp_options: {
        value: cdktf.listMapperHcl(dhcpServerDhcpOptionsToHclTerraform, false)(this._dhcpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerDhcpOptionsList",
      },
      dhcp_options_v6: {
        value: cdktf.listMapperHcl(dhcpServerDhcpOptionsV6ToHclTerraform, false)(this._dhcpOptionsV6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerDhcpOptionsV6List",
      },
      gss_tsig_fallback: {
        value: cdktf.booleanToHclTerraform(this._gssTsigFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_option_filename: {
        value: cdktf.stringToHclTerraform(this._headerOptionFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_option_server_address: {
        value: cdktf.stringToHclTerraform(this._headerOptionServerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_option_server_name: {
        value: cdktf.stringToHclTerraform(this._headerOptionServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_rewrite_char: {
        value: cdktf.stringToHclTerraform(this._hostnameRewriteChar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_rewrite_enabled: {
        value: cdktf.booleanToHclTerraform(this._hostnameRewriteEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname_rewrite_regex: {
        value: cdktf.stringToHclTerraform(this._hostnameRewriteRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inheritance_sources: {
        value: dhcpServerInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DhcpServerInheritanceSources",
      },
      kerberos_kdc: {
        value: cdktf.stringToHclTerraform(this._kerberosKdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_keys: {
        value: cdktf.listMapperHcl(dhcpServerKerberosKeysToHclTerraform, false)(this._kerberosKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerKerberosKeysList",
      },
      kerberos_rekey_interval: {
        value: cdktf.numberToHclTerraform(this._kerberosRekeyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_retry_interval: {
        value: cdktf.numberToHclTerraform(this._kerberosRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_tkey_lifetime: {
        value: cdktf.numberToHclTerraform(this._kerberosTkeyLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_tkey_protocol: {
        value: cdktf.stringToHclTerraform(this._kerberosTkeyProtocol),
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
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_principal: {
        value: cdktf.stringToHclTerraform(this._serverPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vendor_specific_option_option_space: {
        value: cdktf.stringToHclTerraform(this._vendorSpecificOptionOptionSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
