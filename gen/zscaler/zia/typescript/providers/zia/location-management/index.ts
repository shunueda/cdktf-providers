// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * For First Time AUP Behavior, Block Internet Access. When set, all internet access (including non-HTTP traffic) is disabled until the user accepts the AUP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#aup_block_internet_until_accepted LocationManagement#aup_block_internet_until_accepted}
  */
  readonly aupBlockInternetUntilAccepted?: boolean | cdktf.IResolvable;
  /**
  * Enable AUP. When set to true, AUP is enabled for the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#aup_enabled LocationManagement#aup_enabled}
  */
  readonly aupEnabled?: boolean | cdktf.IResolvable;
  /**
  * For First Time AUP Behavior, Force SSL Inspection. When set, Zscaler will force SSL Inspection in order to enforce AUP for HTTPS traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#aup_force_ssl_inspection LocationManagement#aup_force_ssl_inspection}
  */
  readonly aupForceSslInspection?: boolean | cdktf.IResolvable;
  /**
  * Custom AUP Frequency. Refresh time (in days) to re-validate the AUP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#aup_timeout_in_days LocationManagement#aup_timeout_in_days}
  */
  readonly aupTimeoutInDays?: number;
  /**
  * Enforce Authentication. Required when ports are enabled, IP Surrogate is enabled, or Kerberos Authentication is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#auth_required LocationManagement#auth_required}
  */
  readonly authRequired?: boolean | cdktf.IResolvable;
  /**
  * Enable Basic Authentication at the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#basic_auth_enabled LocationManagement#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Caution. When set to true, a caution notifcation is enabled for the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#caution_enabled LocationManagement#caution_enabled}
  */
  readonly cautionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#cookies_and_proxy LocationManagement#cookies_and_proxy}
  */
  readonly cookiesAndProxy?: boolean | cdktf.IResolvable;
  /**
  * Supported Countries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#country LocationManagement#country}
  */
  readonly country?: string;
  /**
  * Indicates that the DNS server configuration used in the extranet is the designated default DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#default_extranet_dns LocationManagement#default_extranet_dns}
  */
  readonly defaultExtranetDns?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the traffic selector specified in the extranet is the designated default traffic selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#default_extranet_ts_pool LocationManagement#default_extranet_ts_pool}
  */
  readonly defaultExtranetTsPool?: boolean | cdktf.IResolvable;
  /**
  * Additional notes or information regarding the location or sub-location. The description cannot exceed 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#description LocationManagement#description}
  */
  readonly description?: string;
  /**
  * Enable Digest Authentication at the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#digest_auth_enabled LocationManagement#digest_auth_enabled}
  */
  readonly digestAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Display Time Unit. The time unit to display for IP Surrogate idle time to disassociation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#display_time_unit LocationManagement#display_time_unit}
  */
  readonly displayTimeUnit?: string;
  /**
  * Download bandwidth in bytes. The value 0 implies no Bandwidth Control enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#dn_bandwidth LocationManagement#dn_bandwidth}
  */
  readonly dnBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#exclude_from_dynamic_groups LocationManagement#exclude_from_dynamic_groups}
  */
  readonly excludeFromDynamicGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#exclude_from_manual_groups LocationManagement#exclude_from_manual_groups}
  */
  readonly excludeFromManualGroups?: boolean | cdktf.IResolvable;
  /**
  * Idle Time to Disassociation. The user mapping idle time (in minutes) is required if a Surrogate IP is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#idle_time_in_minutes LocationManagement#idle_time_in_minutes}
  */
  readonly idleTimeInMinutes?: number;
  /**
  * Enable IOT Discovery at the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#iot_discovery_enabled LocationManagement#iot_discovery_enabled}
  */
  readonly iotDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#iot_enforce_policy_set LocationManagement#iot_enforce_policy_set}
  */
  readonly iotEnforcePolicySet?: boolean | cdktf.IResolvable;
  /**
  * For locations: IP addresses of the egress points that are provisioned in the Zscaler Cloud. Each entry is a single IP address (e.g., 238.10.33.9).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ip_addresses LocationManagement#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Enable IPS Control. When set to true, IPS Control is enabled for the location if Firewall is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ips_control LocationManagement#ips_control}
  */
  readonly ipsControl?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Name-ID pair of the NAT64 prefix configured as the DNS64 prefix for the location. If specified, the DNS64 prefix is used for the IP addresses that reside in this location. If not specified, a prefix is selected from the set of supported prefixes. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ipv6_dns_64prefix LocationManagement#ipv6_dns_64prefix}
  */
  readonly ipv6Dns64Prefix?: boolean | cdktf.IResolvable;
  /**
  * If set to true, IPv6 is enabled for the location and IPv6 traffic from the location can be forwarded to the Zscaler service to enforce security policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ipv6_enabled LocationManagement#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Kerberos Authentication at the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#kerberos_auth LocationManagement#kerberos_auth}
  */
  readonly kerberosAuth?: boolean | cdktf.IResolvable;
  /**
  * Location Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#name LocationManagement#name}
  */
  readonly name: string;
  /**
  * Enable Firewall. When set to true, Firewall is enabled for the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ofw_enabled LocationManagement#ofw_enabled}
  */
  readonly ofwEnabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, indicates that this is a default sub-location created by the Zscaler service to accommodate IPv6 addresses that are not part of any user-defined sub-locations. The default sub-location is created with the name Other6 and it can be renamed, if required. This field is applicable only if ipv6Enabled is set is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#other6_sub_location LocationManagement#other6_sub_location}
  */
  readonly other6SubLocation?: boolean | cdktf.IResolvable;
  /**
  * If set to true, indicates that this is a default sub-location created by the Zscaler service to accommodate IPv4 addresses that are not part of any user-defined sub-locations. The default sub-location is created with the name Other and it can be renamed, if required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#other_sub_location LocationManagement#other_sub_location}
  */
  readonly otherSubLocation?: boolean | cdktf.IResolvable;
  /**
  * Parent Location ID. If this ID does not exist or is 0, it is implied that it is a parent location. Otherwise, it is a sub-location whose parent has this ID. x-applicableTo: SUB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#parent_id LocationManagement#parent_id}
  */
  readonly parentId?: number;
  /**
  * IP ports that are associated with the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ports LocationManagement#ports}
  */
  readonly ports?: number[];
  /**
  * Profile tag that specifies the location traffic type. If not specified, this tag defaults to `Unassigned`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#profile LocationManagement#profile}
  */
  readonly profile?: string;
  /**
  * Enable SSL Inspection. Set to true in order to apply your SSL Inspection policy to HTTPS traffic in the location and inspect HTTPS transactions for data leakage, malicious content, and viruses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ssl_scan_enabled LocationManagement#ssl_scan_enabled}
  */
  readonly sslScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * IP ports that are associated with the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#state LocationManagement#state}
  */
  readonly state?: string;
  /**
  * Enable Surrogate IP. When set to true, users are mapped to internal device IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#surrogate_ip LocationManagement#surrogate_ip}
  */
  readonly surrogateIp?: boolean | cdktf.IResolvable;
  /**
  * Enforce Surrogate IP for Known Browsers. When set to true, IP Surrogate is enforced for all known browsers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#surrogate_ip_enforced_for_known_browsers LocationManagement#surrogate_ip_enforced_for_known_browsers}
  */
  readonly surrogateIpEnforcedForKnownBrowsers?: boolean | cdktf.IResolvable;
  /**
  * Refresh Time for re-validation of Surrogacy. The surrogate refresh time (in minutes) to re-validate the IP surrogates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#surrogate_refresh_time_in_minutes LocationManagement#surrogate_refresh_time_in_minutes}
  */
  readonly surrogateRefreshTimeInMinutes?: number;
  /**
  * Display Refresh Time Unit. The time unit to display for refresh time for re-validation of surrogacy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#surrogate_refresh_time_unit LocationManagement#surrogate_refresh_time_unit}
  */
  readonly surrogateRefreshTimeUnit?: string;
  /**
  * Timezone of the location. If not specified, it defaults to GMT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#tz LocationManagement#tz}
  */
  readonly tz?: string;
  /**
  * Upload bandwidth in bytes. The value 0 implies no Bandwidth Control enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#up_bandwidth LocationManagement#up_bandwidth}
  */
  readonly upBandwidth?: number;
  /**
  * Enable XFF Forwarding. When set to true, traffic is passed to Zscaler Cloud via the X-Forwarded-For (XFF) header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#xff_forward_enabled LocationManagement#xff_forward_enabled}
  */
  readonly xffForwardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Zscaler App SSL Setting. When set to true, the Zscaler App SSL Scan Setting will take effect, irrespective of the SSL policy that is configured for the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#zapp_ssl_scan_enabled LocationManagement#zapp_ssl_scan_enabled}
  */
  readonly zappSslScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * extranet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#extranet LocationManagement#extranet}
  */
  readonly extranet?: LocationManagementExtranet[] | cdktf.IResolvable;
  /**
  * extranet_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#extranet_dns LocationManagement#extranet_dns}
  */
  readonly extranetDns?: LocationManagementExtranetDns[] | cdktf.IResolvable;
  /**
  * extranet_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#extranet_ip_pool LocationManagement#extranet_ip_pool}
  */
  readonly extranetIpPool?: LocationManagementExtranetIpPool[] | cdktf.IResolvable;
  /**
  * static_location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#static_location_groups LocationManagement#static_location_groups}
  */
  readonly staticLocationGroups?: LocationManagementStaticLocationGroups;
  /**
  * vpn_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#vpn_credentials LocationManagement#vpn_credentials}
  */
  readonly vpnCredentials?: LocationManagementVpnCredentials[] | cdktf.IResolvable;
}
export interface LocationManagementExtranet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#id LocationManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function locationManagementExtranetToTerraform(struct?: LocationManagementExtranet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function locationManagementExtranetToHclTerraform(struct?: LocationManagementExtranet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocationManagementExtranetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocationManagementExtranet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationManagementExtranet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class LocationManagementExtranetList extends cdktf.ComplexList {
  public internalValue? : LocationManagementExtranet[] | cdktf.IResolvable

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
  public get(index: number): LocationManagementExtranetOutputReference {
    return new LocationManagementExtranetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LocationManagementExtranetDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#id LocationManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function locationManagementExtranetDnsToTerraform(struct?: LocationManagementExtranetDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function locationManagementExtranetDnsToHclTerraform(struct?: LocationManagementExtranetDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocationManagementExtranetDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocationManagementExtranetDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationManagementExtranetDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class LocationManagementExtranetDnsList extends cdktf.ComplexList {
  public internalValue? : LocationManagementExtranetDns[] | cdktf.IResolvable

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
  public get(index: number): LocationManagementExtranetDnsOutputReference {
    return new LocationManagementExtranetDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LocationManagementExtranetIpPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#id LocationManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function locationManagementExtranetIpPoolToTerraform(struct?: LocationManagementExtranetIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function locationManagementExtranetIpPoolToHclTerraform(struct?: LocationManagementExtranetIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocationManagementExtranetIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocationManagementExtranetIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationManagementExtranetIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class LocationManagementExtranetIpPoolList extends cdktf.ComplexList {
  public internalValue? : LocationManagementExtranetIpPool[] | cdktf.IResolvable

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
  public get(index: number): LocationManagementExtranetIpPoolOutputReference {
    return new LocationManagementExtranetIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LocationManagementStaticLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#id LocationManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function locationManagementStaticLocationGroupsToTerraform(struct?: LocationManagementStaticLocationGroupsOutputReference | LocationManagementStaticLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function locationManagementStaticLocationGroupsToHclTerraform(struct?: LocationManagementStaticLocationGroupsOutputReference | LocationManagementStaticLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocationManagementStaticLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LocationManagementStaticLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationManagementStaticLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface LocationManagementVpnCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#fqdn LocationManagement#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#id LocationManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#ip_address LocationManagement#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#pre_shared_key LocationManagement#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#type LocationManagement#type}
  */
  readonly type?: string;
}

export function locationManagementVpnCredentialsToTerraform(struct?: LocationManagementVpnCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function locationManagementVpnCredentialsToHclTerraform(struct?: LocationManagementVpnCredentials | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
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

export class LocationManagementVpnCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocationManagementVpnCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocationManagementVpnCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
      this._preSharedKey = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._preSharedKey = value.preSharedKey;
      this._type = value.type;
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

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // type - computed: true, optional: true, required: false
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

export class LocationManagementVpnCredentialsList extends cdktf.ComplexList {
  public internalValue? : LocationManagementVpnCredentials[] | cdktf.IResolvable

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
  public get(index: number): LocationManagementVpnCredentialsOutputReference {
    return new LocationManagementVpnCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management zia_location_management}
*/
export class LocationManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_location_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocationManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocationManagement to import
  * @param importFromId The id of the existing LocationManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocationManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_location_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/location_management zia_location_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationManagementConfig
  */
  public constructor(scope: Construct, id: string, config: LocationManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_location_management',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aupBlockInternetUntilAccepted = config.aupBlockInternetUntilAccepted;
    this._aupEnabled = config.aupEnabled;
    this._aupForceSslInspection = config.aupForceSslInspection;
    this._aupTimeoutInDays = config.aupTimeoutInDays;
    this._authRequired = config.authRequired;
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._cautionEnabled = config.cautionEnabled;
    this._cookiesAndProxy = config.cookiesAndProxy;
    this._country = config.country;
    this._defaultExtranetDns = config.defaultExtranetDns;
    this._defaultExtranetTsPool = config.defaultExtranetTsPool;
    this._description = config.description;
    this._digestAuthEnabled = config.digestAuthEnabled;
    this._displayTimeUnit = config.displayTimeUnit;
    this._dnBandwidth = config.dnBandwidth;
    this._excludeFromDynamicGroups = config.excludeFromDynamicGroups;
    this._excludeFromManualGroups = config.excludeFromManualGroups;
    this._idleTimeInMinutes = config.idleTimeInMinutes;
    this._iotDiscoveryEnabled = config.iotDiscoveryEnabled;
    this._iotEnforcePolicySet = config.iotEnforcePolicySet;
    this._ipAddresses = config.ipAddresses;
    this._ipsControl = config.ipsControl;
    this._ipv6Dns64Prefix = config.ipv6Dns64Prefix;
    this._ipv6Enabled = config.ipv6Enabled;
    this._kerberosAuth = config.kerberosAuth;
    this._name = config.name;
    this._ofwEnabled = config.ofwEnabled;
    this._other6SubLocation = config.other6SubLocation;
    this._otherSubLocation = config.otherSubLocation;
    this._parentId = config.parentId;
    this._ports = config.ports;
    this._profile = config.profile;
    this._sslScanEnabled = config.sslScanEnabled;
    this._state = config.state;
    this._surrogateIp = config.surrogateIp;
    this._surrogateIpEnforcedForKnownBrowsers = config.surrogateIpEnforcedForKnownBrowsers;
    this._surrogateRefreshTimeInMinutes = config.surrogateRefreshTimeInMinutes;
    this._surrogateRefreshTimeUnit = config.surrogateRefreshTimeUnit;
    this._tz = config.tz;
    this._upBandwidth = config.upBandwidth;
    this._xffForwardEnabled = config.xffForwardEnabled;
    this._zappSslScanEnabled = config.zappSslScanEnabled;
    this._extranet.internalValue = config.extranet;
    this._extranetDns.internalValue = config.extranetDns;
    this._extranetIpPool.internalValue = config.extranetIpPool;
    this._staticLocationGroups.internalValue = config.staticLocationGroups;
    this._vpnCredentials.internalValue = config.vpnCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aup_block_internet_until_accepted - computed: true, optional: true, required: false
  private _aupBlockInternetUntilAccepted?: boolean | cdktf.IResolvable; 
  public get aupBlockInternetUntilAccepted() {
    return this.getBooleanAttribute('aup_block_internet_until_accepted');
  }
  public set aupBlockInternetUntilAccepted(value: boolean | cdktf.IResolvable) {
    this._aupBlockInternetUntilAccepted = value;
  }
  public resetAupBlockInternetUntilAccepted() {
    this._aupBlockInternetUntilAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupBlockInternetUntilAcceptedInput() {
    return this._aupBlockInternetUntilAccepted;
  }

  // aup_enabled - computed: true, optional: true, required: false
  private _aupEnabled?: boolean | cdktf.IResolvable; 
  public get aupEnabled() {
    return this.getBooleanAttribute('aup_enabled');
  }
  public set aupEnabled(value: boolean | cdktf.IResolvable) {
    this._aupEnabled = value;
  }
  public resetAupEnabled() {
    this._aupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupEnabledInput() {
    return this._aupEnabled;
  }

  // aup_force_ssl_inspection - computed: true, optional: true, required: false
  private _aupForceSslInspection?: boolean | cdktf.IResolvable; 
  public get aupForceSslInspection() {
    return this.getBooleanAttribute('aup_force_ssl_inspection');
  }
  public set aupForceSslInspection(value: boolean | cdktf.IResolvable) {
    this._aupForceSslInspection = value;
  }
  public resetAupForceSslInspection() {
    this._aupForceSslInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupForceSslInspectionInput() {
    return this._aupForceSslInspection;
  }

  // aup_timeout_in_days - computed: false, optional: true, required: false
  private _aupTimeoutInDays?: number; 
  public get aupTimeoutInDays() {
    return this.getNumberAttribute('aup_timeout_in_days');
  }
  public set aupTimeoutInDays(value: number) {
    this._aupTimeoutInDays = value;
  }
  public resetAupTimeoutInDays() {
    this._aupTimeoutInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupTimeoutInDaysInput() {
    return this._aupTimeoutInDays;
  }

  // auth_required - computed: true, optional: true, required: false
  private _authRequired?: boolean | cdktf.IResolvable; 
  public get authRequired() {
    return this.getBooleanAttribute('auth_required');
  }
  public set authRequired(value: boolean | cdktf.IResolvable) {
    this._authRequired = value;
  }
  public resetAuthRequired() {
    this._authRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequiredInput() {
    return this._authRequired;
  }

  // basic_auth_enabled - computed: true, optional: true, required: false
  private _basicAuthEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }
  public set basicAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthEnabled = value;
  }
  public resetBasicAuthEnabled() {
    this._basicAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthEnabledInput() {
    return this._basicAuthEnabled;
  }

  // caution_enabled - computed: true, optional: true, required: false
  private _cautionEnabled?: boolean | cdktf.IResolvable; 
  public get cautionEnabled() {
    return this.getBooleanAttribute('caution_enabled');
  }
  public set cautionEnabled(value: boolean | cdktf.IResolvable) {
    this._cautionEnabled = value;
  }
  public resetCautionEnabled() {
    this._cautionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cautionEnabledInput() {
    return this._cautionEnabled;
  }

  // cookies_and_proxy - computed: true, optional: true, required: false
  private _cookiesAndProxy?: boolean | cdktf.IResolvable; 
  public get cookiesAndProxy() {
    return this.getBooleanAttribute('cookies_and_proxy');
  }
  public set cookiesAndProxy(value: boolean | cdktf.IResolvable) {
    this._cookiesAndProxy = value;
  }
  public resetCookiesAndProxy() {
    this._cookiesAndProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesAndProxyInput() {
    return this._cookiesAndProxy;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // default_extranet_dns - computed: true, optional: true, required: false
  private _defaultExtranetDns?: boolean | cdktf.IResolvable; 
  public get defaultExtranetDns() {
    return this.getBooleanAttribute('default_extranet_dns');
  }
  public set defaultExtranetDns(value: boolean | cdktf.IResolvable) {
    this._defaultExtranetDns = value;
  }
  public resetDefaultExtranetDns() {
    this._defaultExtranetDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExtranetDnsInput() {
    return this._defaultExtranetDns;
  }

  // default_extranet_ts_pool - computed: true, optional: true, required: false
  private _defaultExtranetTsPool?: boolean | cdktf.IResolvable; 
  public get defaultExtranetTsPool() {
    return this.getBooleanAttribute('default_extranet_ts_pool');
  }
  public set defaultExtranetTsPool(value: boolean | cdktf.IResolvable) {
    this._defaultExtranetTsPool = value;
  }
  public resetDefaultExtranetTsPool() {
    this._defaultExtranetTsPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExtranetTsPoolInput() {
    return this._defaultExtranetTsPool;
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

  // digest_auth_enabled - computed: true, optional: true, required: false
  private _digestAuthEnabled?: boolean | cdktf.IResolvable; 
  public get digestAuthEnabled() {
    return this.getBooleanAttribute('digest_auth_enabled');
  }
  public set digestAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._digestAuthEnabled = value;
  }
  public resetDigestAuthEnabled() {
    this._digestAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAuthEnabledInput() {
    return this._digestAuthEnabled;
  }

  // display_time_unit - computed: false, optional: true, required: false
  private _displayTimeUnit?: string; 
  public get displayTimeUnit() {
    return this.getStringAttribute('display_time_unit');
  }
  public set displayTimeUnit(value: string) {
    this._displayTimeUnit = value;
  }
  public resetDisplayTimeUnit() {
    this._displayTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTimeUnitInput() {
    return this._displayTimeUnit;
  }

  // dn_bandwidth - computed: false, optional: true, required: false
  private _dnBandwidth?: number; 
  public get dnBandwidth() {
    return this.getNumberAttribute('dn_bandwidth');
  }
  public set dnBandwidth(value: number) {
    this._dnBandwidth = value;
  }
  public resetDnBandwidth() {
    this._dnBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnBandwidthInput() {
    return this._dnBandwidth;
  }

  // exclude_from_dynamic_groups - computed: false, optional: true, required: false
  private _excludeFromDynamicGroups?: boolean | cdktf.IResolvable; 
  public get excludeFromDynamicGroups() {
    return this.getBooleanAttribute('exclude_from_dynamic_groups');
  }
  public set excludeFromDynamicGroups(value: boolean | cdktf.IResolvable) {
    this._excludeFromDynamicGroups = value;
  }
  public resetExcludeFromDynamicGroups() {
    this._excludeFromDynamicGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromDynamicGroupsInput() {
    return this._excludeFromDynamicGroups;
  }

  // exclude_from_manual_groups - computed: false, optional: true, required: false
  private _excludeFromManualGroups?: boolean | cdktf.IResolvable; 
  public get excludeFromManualGroups() {
    return this.getBooleanAttribute('exclude_from_manual_groups');
  }
  public set excludeFromManualGroups(value: boolean | cdktf.IResolvable) {
    this._excludeFromManualGroups = value;
  }
  public resetExcludeFromManualGroups() {
    this._excludeFromManualGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromManualGroupsInput() {
    return this._excludeFromManualGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_in_minutes - computed: false, optional: true, required: false
  private _idleTimeInMinutes?: number; 
  public get idleTimeInMinutes() {
    return this.getNumberAttribute('idle_time_in_minutes');
  }
  public set idleTimeInMinutes(value: number) {
    this._idleTimeInMinutes = value;
  }
  public resetIdleTimeInMinutes() {
    this._idleTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeInMinutesInput() {
    return this._idleTimeInMinutes;
  }

  // iot_discovery_enabled - computed: true, optional: true, required: false
  private _iotDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get iotDiscoveryEnabled() {
    return this.getBooleanAttribute('iot_discovery_enabled');
  }
  public set iotDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._iotDiscoveryEnabled = value;
  }
  public resetIotDiscoveryEnabled() {
    this._iotDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDiscoveryEnabledInput() {
    return this._iotDiscoveryEnabled;
  }

  // iot_enforce_policy_set - computed: true, optional: true, required: false
  private _iotEnforcePolicySet?: boolean | cdktf.IResolvable; 
  public get iotEnforcePolicySet() {
    return this.getBooleanAttribute('iot_enforce_policy_set');
  }
  public set iotEnforcePolicySet(value: boolean | cdktf.IResolvable) {
    this._iotEnforcePolicySet = value;
  }
  public resetIotEnforcePolicySet() {
    this._iotEnforcePolicySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEnforcePolicySetInput() {
    return this._iotEnforcePolicySet;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ips_control - computed: true, optional: true, required: false
  private _ipsControl?: boolean | cdktf.IResolvable; 
  public get ipsControl() {
    return this.getBooleanAttribute('ips_control');
  }
  public set ipsControl(value: boolean | cdktf.IResolvable) {
    this._ipsControl = value;
  }
  public resetIpsControl() {
    this._ipsControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsControlInput() {
    return this._ipsControl;
  }

  // ipv6_dns_64prefix - computed: false, optional: true, required: false
  private _ipv6Dns64Prefix?: boolean | cdktf.IResolvable; 
  public get ipv6Dns64Prefix() {
    return this.getBooleanAttribute('ipv6_dns_64prefix');
  }
  public set ipv6Dns64Prefix(value: boolean | cdktf.IResolvable) {
    this._ipv6Dns64Prefix = value;
  }
  public resetIpv6Dns64Prefix() {
    this._ipv6Dns64Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Dns64PrefixInput() {
    return this._ipv6Dns64Prefix;
  }

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // kerberos_auth - computed: false, optional: true, required: false
  private _kerberosAuth?: boolean | cdktf.IResolvable; 
  public get kerberosAuth() {
    return this.getBooleanAttribute('kerberos_auth');
  }
  public set kerberosAuth(value: boolean | cdktf.IResolvable) {
    this._kerberosAuth = value;
  }
  public resetKerberosAuth() {
    this._kerberosAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAuthInput() {
    return this._kerberosAuth;
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
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

  // ofw_enabled - computed: true, optional: true, required: false
  private _ofwEnabled?: boolean | cdktf.IResolvable; 
  public get ofwEnabled() {
    return this.getBooleanAttribute('ofw_enabled');
  }
  public set ofwEnabled(value: boolean | cdktf.IResolvable) {
    this._ofwEnabled = value;
  }
  public resetOfwEnabled() {
    this._ofwEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofwEnabledInput() {
    return this._ofwEnabled;
  }

  // other6_sub_location - computed: true, optional: true, required: false
  private _other6SubLocation?: boolean | cdktf.IResolvable; 
  public get other6SubLocation() {
    return this.getBooleanAttribute('other6_sub_location');
  }
  public set other6SubLocation(value: boolean | cdktf.IResolvable) {
    this._other6SubLocation = value;
  }
  public resetOther6SubLocation() {
    this._other6SubLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get other6SubLocationInput() {
    return this._other6SubLocation;
  }

  // other_sub_location - computed: true, optional: true, required: false
  private _otherSubLocation?: boolean | cdktf.IResolvable; 
  public get otherSubLocation() {
    return this.getBooleanAttribute('other_sub_location');
  }
  public set otherSubLocation(value: boolean | cdktf.IResolvable) {
    this._otherSubLocation = value;
  }
  public resetOtherSubLocation() {
    this._otherSubLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSubLocationInput() {
    return this._otherSubLocation;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // ssl_scan_enabled - computed: true, optional: true, required: false
  private _sslScanEnabled?: boolean | cdktf.IResolvable; 
  public get sslScanEnabled() {
    return this.getBooleanAttribute('ssl_scan_enabled');
  }
  public set sslScanEnabled(value: boolean | cdktf.IResolvable) {
    this._sslScanEnabled = value;
  }
  public resetSslScanEnabled() {
    this._sslScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslScanEnabledInput() {
    return this._sslScanEnabled;
  }

  // state - computed: true, optional: true, required: false
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

  // surrogate_ip - computed: true, optional: true, required: false
  private _surrogateIp?: boolean | cdktf.IResolvable; 
  public get surrogateIp() {
    return this.getBooleanAttribute('surrogate_ip');
  }
  public set surrogateIp(value: boolean | cdktf.IResolvable) {
    this._surrogateIp = value;
  }
  public resetSurrogateIp() {
    this._surrogateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateIpInput() {
    return this._surrogateIp;
  }

  // surrogate_ip_enforced_for_known_browsers - computed: true, optional: true, required: false
  private _surrogateIpEnforcedForKnownBrowsers?: boolean | cdktf.IResolvable; 
  public get surrogateIpEnforcedForKnownBrowsers() {
    return this.getBooleanAttribute('surrogate_ip_enforced_for_known_browsers');
  }
  public set surrogateIpEnforcedForKnownBrowsers(value: boolean | cdktf.IResolvable) {
    this._surrogateIpEnforcedForKnownBrowsers = value;
  }
  public resetSurrogateIpEnforcedForKnownBrowsers() {
    this._surrogateIpEnforcedForKnownBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateIpEnforcedForKnownBrowsersInput() {
    return this._surrogateIpEnforcedForKnownBrowsers;
  }

  // surrogate_refresh_time_in_minutes - computed: false, optional: true, required: false
  private _surrogateRefreshTimeInMinutes?: number; 
  public get surrogateRefreshTimeInMinutes() {
    return this.getNumberAttribute('surrogate_refresh_time_in_minutes');
  }
  public set surrogateRefreshTimeInMinutes(value: number) {
    this._surrogateRefreshTimeInMinutes = value;
  }
  public resetSurrogateRefreshTimeInMinutes() {
    this._surrogateRefreshTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateRefreshTimeInMinutesInput() {
    return this._surrogateRefreshTimeInMinutes;
  }

  // surrogate_refresh_time_unit - computed: false, optional: true, required: false
  private _surrogateRefreshTimeUnit?: string; 
  public get surrogateRefreshTimeUnit() {
    return this.getStringAttribute('surrogate_refresh_time_unit');
  }
  public set surrogateRefreshTimeUnit(value: string) {
    this._surrogateRefreshTimeUnit = value;
  }
  public resetSurrogateRefreshTimeUnit() {
    this._surrogateRefreshTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateRefreshTimeUnitInput() {
    return this._surrogateRefreshTimeUnit;
  }

  // tz - computed: true, optional: true, required: false
  private _tz?: string; 
  public get tz() {
    return this.getStringAttribute('tz');
  }
  public set tz(value: string) {
    this._tz = value;
  }
  public resetTz() {
    this._tz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tzInput() {
    return this._tz;
  }

  // up_bandwidth - computed: false, optional: true, required: false
  private _upBandwidth?: number; 
  public get upBandwidth() {
    return this.getNumberAttribute('up_bandwidth');
  }
  public set upBandwidth(value: number) {
    this._upBandwidth = value;
  }
  public resetUpBandwidth() {
    this._upBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upBandwidthInput() {
    return this._upBandwidth;
  }

  // xff_forward_enabled - computed: true, optional: true, required: false
  private _xffForwardEnabled?: boolean | cdktf.IResolvable; 
  public get xffForwardEnabled() {
    return this.getBooleanAttribute('xff_forward_enabled');
  }
  public set xffForwardEnabled(value: boolean | cdktf.IResolvable) {
    this._xffForwardEnabled = value;
  }
  public resetXffForwardEnabled() {
    this._xffForwardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffForwardEnabledInput() {
    return this._xffForwardEnabled;
  }

  // zapp_ssl_scan_enabled - computed: true, optional: true, required: false
  private _zappSslScanEnabled?: boolean | cdktf.IResolvable; 
  public get zappSslScanEnabled() {
    return this.getBooleanAttribute('zapp_ssl_scan_enabled');
  }
  public set zappSslScanEnabled(value: boolean | cdktf.IResolvable) {
    this._zappSslScanEnabled = value;
  }
  public resetZappSslScanEnabled() {
    this._zappSslScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zappSslScanEnabledInput() {
    return this._zappSslScanEnabled;
  }

  // extranet - computed: false, optional: true, required: false
  private _extranet = new LocationManagementExtranetList(this, "extranet", true);
  public get extranet() {
    return this._extranet;
  }
  public putExtranet(value: LocationManagementExtranet[] | cdktf.IResolvable) {
    this._extranet.internalValue = value;
  }
  public resetExtranet() {
    this._extranet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetInput() {
    return this._extranet.internalValue;
  }

  // extranet_dns - computed: false, optional: true, required: false
  private _extranetDns = new LocationManagementExtranetDnsList(this, "extranet_dns", true);
  public get extranetDns() {
    return this._extranetDns;
  }
  public putExtranetDns(value: LocationManagementExtranetDns[] | cdktf.IResolvable) {
    this._extranetDns.internalValue = value;
  }
  public resetExtranetDns() {
    this._extranetDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetDnsInput() {
    return this._extranetDns.internalValue;
  }

  // extranet_ip_pool - computed: false, optional: true, required: false
  private _extranetIpPool = new LocationManagementExtranetIpPoolList(this, "extranet_ip_pool", true);
  public get extranetIpPool() {
    return this._extranetIpPool;
  }
  public putExtranetIpPool(value: LocationManagementExtranetIpPool[] | cdktf.IResolvable) {
    this._extranetIpPool.internalValue = value;
  }
  public resetExtranetIpPool() {
    this._extranetIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetIpPoolInput() {
    return this._extranetIpPool.internalValue;
  }

  // static_location_groups - computed: false, optional: true, required: false
  private _staticLocationGroups = new LocationManagementStaticLocationGroupsOutputReference(this, "static_location_groups");
  public get staticLocationGroups() {
    return this._staticLocationGroups;
  }
  public putStaticLocationGroups(value: LocationManagementStaticLocationGroups) {
    this._staticLocationGroups.internalValue = value;
  }
  public resetStaticLocationGroups() {
    this._staticLocationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLocationGroupsInput() {
    return this._staticLocationGroups.internalValue;
  }

  // vpn_credentials - computed: false, optional: true, required: false
  private _vpnCredentials = new LocationManagementVpnCredentialsList(this, "vpn_credentials", false);
  public get vpnCredentials() {
    return this._vpnCredentials;
  }
  public putVpnCredentials(value: LocationManagementVpnCredentials[] | cdktf.IResolvable) {
    this._vpnCredentials.internalValue = value;
  }
  public resetVpnCredentials() {
    this._vpnCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnCredentialsInput() {
    return this._vpnCredentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aup_block_internet_until_accepted: cdktf.booleanToTerraform(this._aupBlockInternetUntilAccepted),
      aup_enabled: cdktf.booleanToTerraform(this._aupEnabled),
      aup_force_ssl_inspection: cdktf.booleanToTerraform(this._aupForceSslInspection),
      aup_timeout_in_days: cdktf.numberToTerraform(this._aupTimeoutInDays),
      auth_required: cdktf.booleanToTerraform(this._authRequired),
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      caution_enabled: cdktf.booleanToTerraform(this._cautionEnabled),
      cookies_and_proxy: cdktf.booleanToTerraform(this._cookiesAndProxy),
      country: cdktf.stringToTerraform(this._country),
      default_extranet_dns: cdktf.booleanToTerraform(this._defaultExtranetDns),
      default_extranet_ts_pool: cdktf.booleanToTerraform(this._defaultExtranetTsPool),
      description: cdktf.stringToTerraform(this._description),
      digest_auth_enabled: cdktf.booleanToTerraform(this._digestAuthEnabled),
      display_time_unit: cdktf.stringToTerraform(this._displayTimeUnit),
      dn_bandwidth: cdktf.numberToTerraform(this._dnBandwidth),
      exclude_from_dynamic_groups: cdktf.booleanToTerraform(this._excludeFromDynamicGroups),
      exclude_from_manual_groups: cdktf.booleanToTerraform(this._excludeFromManualGroups),
      idle_time_in_minutes: cdktf.numberToTerraform(this._idleTimeInMinutes),
      iot_discovery_enabled: cdktf.booleanToTerraform(this._iotDiscoveryEnabled),
      iot_enforce_policy_set: cdktf.booleanToTerraform(this._iotEnforcePolicySet),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      ips_control: cdktf.booleanToTerraform(this._ipsControl),
      ipv6_dns_64prefix: cdktf.booleanToTerraform(this._ipv6Dns64Prefix),
      ipv6_enabled: cdktf.booleanToTerraform(this._ipv6Enabled),
      kerberos_auth: cdktf.booleanToTerraform(this._kerberosAuth),
      name: cdktf.stringToTerraform(this._name),
      ofw_enabled: cdktf.booleanToTerraform(this._ofwEnabled),
      other6_sub_location: cdktf.booleanToTerraform(this._other6SubLocation),
      other_sub_location: cdktf.booleanToTerraform(this._otherSubLocation),
      parent_id: cdktf.numberToTerraform(this._parentId),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      profile: cdktf.stringToTerraform(this._profile),
      ssl_scan_enabled: cdktf.booleanToTerraform(this._sslScanEnabled),
      state: cdktf.stringToTerraform(this._state),
      surrogate_ip: cdktf.booleanToTerraform(this._surrogateIp),
      surrogate_ip_enforced_for_known_browsers: cdktf.booleanToTerraform(this._surrogateIpEnforcedForKnownBrowsers),
      surrogate_refresh_time_in_minutes: cdktf.numberToTerraform(this._surrogateRefreshTimeInMinutes),
      surrogate_refresh_time_unit: cdktf.stringToTerraform(this._surrogateRefreshTimeUnit),
      tz: cdktf.stringToTerraform(this._tz),
      up_bandwidth: cdktf.numberToTerraform(this._upBandwidth),
      xff_forward_enabled: cdktf.booleanToTerraform(this._xffForwardEnabled),
      zapp_ssl_scan_enabled: cdktf.booleanToTerraform(this._zappSslScanEnabled),
      extranet: cdktf.listMapper(locationManagementExtranetToTerraform, true)(this._extranet.internalValue),
      extranet_dns: cdktf.listMapper(locationManagementExtranetDnsToTerraform, true)(this._extranetDns.internalValue),
      extranet_ip_pool: cdktf.listMapper(locationManagementExtranetIpPoolToTerraform, true)(this._extranetIpPool.internalValue),
      static_location_groups: locationManagementStaticLocationGroupsToTerraform(this._staticLocationGroups.internalValue),
      vpn_credentials: cdktf.listMapper(locationManagementVpnCredentialsToTerraform, true)(this._vpnCredentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aup_block_internet_until_accepted: {
        value: cdktf.booleanToHclTerraform(this._aupBlockInternetUntilAccepted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aup_enabled: {
        value: cdktf.booleanToHclTerraform(this._aupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aup_force_ssl_inspection: {
        value: cdktf.booleanToHclTerraform(this._aupForceSslInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aup_timeout_in_days: {
        value: cdktf.numberToHclTerraform(this._aupTimeoutInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_required: {
        value: cdktf.booleanToHclTerraform(this._authRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      basic_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      caution_enabled: {
        value: cdktf.booleanToHclTerraform(this._cautionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookies_and_proxy: {
        value: cdktf.booleanToHclTerraform(this._cookiesAndProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_extranet_dns: {
        value: cdktf.booleanToHclTerraform(this._defaultExtranetDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_extranet_ts_pool: {
        value: cdktf.booleanToHclTerraform(this._defaultExtranetTsPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._digestAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_time_unit: {
        value: cdktf.stringToHclTerraform(this._displayTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_bandwidth: {
        value: cdktf.numberToHclTerraform(this._dnBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_from_dynamic_groups: {
        value: cdktf.booleanToHclTerraform(this._excludeFromDynamicGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_from_manual_groups: {
        value: cdktf.booleanToHclTerraform(this._excludeFromManualGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idle_time_in_minutes: {
        value: cdktf.numberToHclTerraform(this._idleTimeInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iot_discovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._iotDiscoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iot_enforce_policy_set: {
        value: cdktf.booleanToHclTerraform(this._iotEnforcePolicySet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ips_control: {
        value: cdktf.booleanToHclTerraform(this._ipsControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_dns_64prefix: {
        value: cdktf.booleanToHclTerraform(this._ipv6Dns64Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kerberos_auth: {
        value: cdktf.booleanToHclTerraform(this._kerberosAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ofw_enabled: {
        value: cdktf.booleanToHclTerraform(this._ofwEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      other6_sub_location: {
        value: cdktf.booleanToHclTerraform(this._other6SubLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      other_sub_location: {
        value: cdktf.booleanToHclTerraform(this._otherSubLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_scan_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslScanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      surrogate_ip: {
        value: cdktf.booleanToHclTerraform(this._surrogateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      surrogate_ip_enforced_for_known_browsers: {
        value: cdktf.booleanToHclTerraform(this._surrogateIpEnforcedForKnownBrowsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      surrogate_refresh_time_in_minutes: {
        value: cdktf.numberToHclTerraform(this._surrogateRefreshTimeInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      surrogate_refresh_time_unit: {
        value: cdktf.stringToHclTerraform(this._surrogateRefreshTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tz: {
        value: cdktf.stringToHclTerraform(this._tz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up_bandwidth: {
        value: cdktf.numberToHclTerraform(this._upBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xff_forward_enabled: {
        value: cdktf.booleanToHclTerraform(this._xffForwardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zapp_ssl_scan_enabled: {
        value: cdktf.booleanToHclTerraform(this._zappSslScanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extranet: {
        value: cdktf.listMapperHcl(locationManagementExtranetToHclTerraform, true)(this._extranet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LocationManagementExtranetList",
      },
      extranet_dns: {
        value: cdktf.listMapperHcl(locationManagementExtranetDnsToHclTerraform, true)(this._extranetDns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LocationManagementExtranetDnsList",
      },
      extranet_ip_pool: {
        value: cdktf.listMapperHcl(locationManagementExtranetIpPoolToHclTerraform, true)(this._extranetIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LocationManagementExtranetIpPoolList",
      },
      static_location_groups: {
        value: locationManagementStaticLocationGroupsToHclTerraform(this._staticLocationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LocationManagementStaticLocationGroupsList",
      },
      vpn_credentials: {
        value: cdktf.listMapperHcl(locationManagementVpnCredentialsToHclTerraform, true)(this._vpnCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LocationManagementVpnCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
