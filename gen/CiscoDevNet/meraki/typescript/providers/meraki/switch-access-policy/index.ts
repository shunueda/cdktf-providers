// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Type of the policy. Automatically `Hybrid authentication` when hostMode is `Multi-Domain`.
  *   - Choices: `802.1x`, `Hybrid authentication`, `MAC authentication bypass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#access_policy_type SwitchAccessPolicy#access_policy_type}
  */
  readonly accessPolicyType?: string;
  /**
  * Supports either `both` or `inbound`. Set to `inbound` to allow unauthorized egress on the switchport. Set to `both` to control both traffic directions with authorization. Defaults to `both`
  *   - Choices: `both`, `inbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#dot1x_control_direction SwitchAccessPolicy#dot1x_control_direction}
  */
  readonly dot1XControlDirection?: string;
  /**
  * Group policy Number for guest group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#guest_group_policy_id SwitchAccessPolicy#guest_group_policy_id}
  */
  readonly guestGroupPolicyId?: string;
  /**
  * If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#guest_port_bouncing SwitchAccessPolicy#guest_port_bouncing}
  */
  readonly guestPortBouncing?: boolean | cdktf.IResolvable;
  /**
  * Security Group Tag ID for guest group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#guest_sgt_id SwitchAccessPolicy#guest_sgt_id}
  */
  readonly guestSgtId?: number;
  /**
  * ID for the guest VLAN allow unauthorized devices access to limited network resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#guest_vlan_id SwitchAccessPolicy#guest_vlan_id}
  */
  readonly guestVlanId?: number;
  /**
  * Choose the Host Mode for the access policy.
  *   - Choices: `Multi-Auth`, `Multi-Domain`, `Multi-Host`, `Single-Host`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#host_mode SwitchAccessPolicy#host_mode}
  */
  readonly hostMode: string;
  /**
  * Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is `Hybrid Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#increase_access_speed SwitchAccessPolicy#increase_access_speed}
  */
  readonly increaseAccessSpeed?: boolean | cdktf.IResolvable;
  /**
  * Name of the access policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#name SwitchAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#network_id SwitchAccessPolicy#network_id}
  */
  readonly networkId: string;
  /**
  * Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_accounting_enabled SwitchAccessPolicy#radius_accounting_enabled}
  */
  readonly radiusAccountingEnabled: boolean | cdktf.IResolvable;
  /**
  * List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_accounting_servers SwitchAccessPolicy#radius_accounting_servers}
  */
  readonly radiusAccountingServers?: SwitchAccessPolicyRadiusAccountingServers[] | cdktf.IResolvable;
  /**
  * Authentication mode of the policy ( Open | Closed )
  *   - Choices: `Closed`, `Open`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_authentication_mode SwitchAccessPolicy#radius_authentication_mode}
  */
  readonly radiusAuthenticationMode?: string;
  /**
  * Enable to cache authorization and authentication responses on the RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_cache_enabled SwitchAccessPolicy#radius_cache_enabled}
  */
  readonly radiusCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * If RADIUS caching is enabled, this value dictates how long the cache will remain in the RADIUS server, in hours, to allow network access without authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_cache_timeout SwitchAccessPolicy#radius_cache_timeout}
  */
  readonly radiusCacheTimeout?: number;
  /**
  * Change of authentication for RADIUS re-authentication and disconnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_coa_support_enabled SwitchAccessPolicy#radius_coa_support_enabled}
  */
  readonly radiusCoaSupportEnabled: boolean | cdktf.IResolvable;
  /**
  * Group policy Number for data VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_data_group_policy_id SwitchAccessPolicy#radius_critical_auth_data_group_policy_id}
  */
  readonly radiusCriticalAuthDataGroupPolicyId?: string;
  /**
  * Security Group Tag ID for data VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_data_sgt_id SwitchAccessPolicy#radius_critical_auth_data_sgt_id}
  */
  readonly radiusCriticalAuthDataSgtId?: number;
  /**
  * VLAN that clients who use data will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_data_vlan_id SwitchAccessPolicy#radius_critical_auth_data_vlan_id}
  */
  readonly radiusCriticalAuthDataVlanId?: number;
  /**
  * Disable port bounce when RADIUS servers are unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_suspend_port_bounce SwitchAccessPolicy#radius_critical_auth_suspend_port_bounce}
  */
  readonly radiusCriticalAuthSuspendPortBounce?: boolean | cdktf.IResolvable;
  /**
  * Group policy Number for voice VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_voice_group_policy_id SwitchAccessPolicy#radius_critical_auth_voice_group_policy_id}
  */
  readonly radiusCriticalAuthVoiceGroupPolicyId?: string;
  /**
  * Security Group Tag ID for voice VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_voice_sgt_id SwitchAccessPolicy#radius_critical_auth_voice_sgt_id}
  */
  readonly radiusCriticalAuthVoiceSgtId?: number;
  /**
  * VLAN that clients who use voice will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_critical_auth_voice_vlan_id SwitchAccessPolicy#radius_critical_auth_voice_vlan_id}
  */
  readonly radiusCriticalAuthVoiceVlanId?: number;
  /**
  * Group policy Number for failed authentication group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_failed_auth_group_policy_id SwitchAccessPolicy#radius_failed_auth_group_policy_id}
  */
  readonly radiusFailedAuthGroupPolicyId?: string;
  /**
  * Security Group Tag ID for failed authentication group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_failed_auth_sgt_id SwitchAccessPolicy#radius_failed_auth_sgt_id}
  */
  readonly radiusFailedAuthSgtId?: number;
  /**
  * VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_failed_auth_vlan_id SwitchAccessPolicy#radius_failed_auth_vlan_id}
  */
  readonly radiusFailedAuthVlanId?: number;
  /**
  * Acceptable values are `''` for None, or `'11'` for Group Policies ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_group_attribute SwitchAccessPolicy#radius_group_attribute}
  */
  readonly radiusGroupAttribute?: string;
  /**
  * Group policy Number for pre-authentication group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_pre_authentication_group_policy_id SwitchAccessPolicy#radius_pre_authentication_group_policy_id}
  */
  readonly radiusPreAuthenticationGroupPolicyId?: string;
  /**
  * Re-authentication period in seconds. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_re_authentication_interval SwitchAccessPolicy#radius_re_authentication_interval}
  */
  readonly radiusReAuthenticationInterval?: number;
  /**
  * List of RADIUS servers to require connecting devices to authenticate against before granting network access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_servers SwitchAccessPolicy#radius_servers}
  */
  readonly radiusServers: SwitchAccessPolicyRadiusServers[] | cdktf.IResolvable;
  /**
  * If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#radius_testing_enabled SwitchAccessPolicy#radius_testing_enabled}
  */
  readonly radiusTestingEnabled: boolean | cdktf.IResolvable;
  /**
  * Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#url_redirect_walled_garden_enabled SwitchAccessPolicy#url_redirect_walled_garden_enabled}
  */
  readonly urlRedirectWalledGardenEnabled: boolean | cdktf.IResolvable;
  /**
  * IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#url_redirect_walled_garden_ranges SwitchAccessPolicy#url_redirect_walled_garden_ranges}
  */
  readonly urlRedirectWalledGardenRanges?: string[];
  /**
  * CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is `Multi-Domain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#voice_vlan_clients SwitchAccessPolicy#voice_vlan_clients}
  */
  readonly voiceVlanClients?: boolean | cdktf.IResolvable;
}
export interface SwitchAccessPolicyRadiusAccountingServers {
  /**
  * Public IP address of the RADIUS accounting server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#host SwitchAccessPolicy#host}
  */
  readonly host?: string;
  /**
  * Organization wide RADIUS server ID. If this field is provided, the host, port and secret field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#organization_radius_server_id SwitchAccessPolicy#organization_radius_server_id}
  */
  readonly organizationRadiusServerId?: string;
  /**
  * UDP port that the RADIUS Accounting server listens on for access requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#port SwitchAccessPolicy#port}
  */
  readonly port?: number;
  /**
  * RADIUS client shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#secret SwitchAccessPolicy#secret}
  */
  readonly secret?: string;
}

export function switchAccessPolicyRadiusAccountingServersToTerraform(struct?: SwitchAccessPolicyRadiusAccountingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    organization_radius_server_id: cdktf.stringToTerraform(struct!.organizationRadiusServerId),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function switchAccessPolicyRadiusAccountingServersToHclTerraform(struct?: SwitchAccessPolicyRadiusAccountingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_radius_server_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationRadiusServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SwitchAccessPolicyRadiusAccountingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchAccessPolicyRadiusAccountingServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._organizationRadiusServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationRadiusServerId = this._organizationRadiusServerId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchAccessPolicyRadiusAccountingServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._organizationRadiusServerId = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._organizationRadiusServerId = value.organizationRadiusServerId;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // organization_radius_server_id - computed: false, optional: true, required: false
  private _organizationRadiusServerId?: string; 
  public get organizationRadiusServerId() {
    return this.getStringAttribute('organization_radius_server_id');
  }
  public set organizationRadiusServerId(value: string) {
    this._organizationRadiusServerId = value;
  }
  public resetOrganizationRadiusServerId() {
    this._organizationRadiusServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRadiusServerIdInput() {
    return this._organizationRadiusServerId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: true, required: false
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

export class SwitchAccessPolicyRadiusAccountingServersList extends cdktf.ComplexList {
  public internalValue? : SwitchAccessPolicyRadiusAccountingServers[] | cdktf.IResolvable

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
  public get(index: number): SwitchAccessPolicyRadiusAccountingServersOutputReference {
    return new SwitchAccessPolicyRadiusAccountingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchAccessPolicyRadiusServers {
  /**
  * Public IP address of the RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#host SwitchAccessPolicy#host}
  */
  readonly host?: string;
  /**
  * Organization wide RADIUS server ID. If this field is provided, the host, port and secret field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#organization_radius_server_id SwitchAccessPolicy#organization_radius_server_id}
  */
  readonly organizationRadiusServerId?: string;
  /**
  * UDP port that the RADIUS server listens on for access requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#port SwitchAccessPolicy#port}
  */
  readonly port?: number;
  /**
  * RADIUS client shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#secret SwitchAccessPolicy#secret}
  */
  readonly secret?: string;
}

export function switchAccessPolicyRadiusServersToTerraform(struct?: SwitchAccessPolicyRadiusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    organization_radius_server_id: cdktf.stringToTerraform(struct!.organizationRadiusServerId),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function switchAccessPolicyRadiusServersToHclTerraform(struct?: SwitchAccessPolicyRadiusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_radius_server_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationRadiusServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SwitchAccessPolicyRadiusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchAccessPolicyRadiusServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._organizationRadiusServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationRadiusServerId = this._organizationRadiusServerId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchAccessPolicyRadiusServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._organizationRadiusServerId = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._organizationRadiusServerId = value.organizationRadiusServerId;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // organization_radius_server_id - computed: false, optional: true, required: false
  private _organizationRadiusServerId?: string; 
  public get organizationRadiusServerId() {
    return this.getStringAttribute('organization_radius_server_id');
  }
  public set organizationRadiusServerId(value: string) {
    this._organizationRadiusServerId = value;
  }
  public resetOrganizationRadiusServerId() {
    this._organizationRadiusServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRadiusServerIdInput() {
    return this._organizationRadiusServerId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: true, required: false
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

export class SwitchAccessPolicyRadiusServersList extends cdktf.ComplexList {
  public internalValue? : SwitchAccessPolicyRadiusServers[] | cdktf.IResolvable

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
  public get(index: number): SwitchAccessPolicyRadiusServersOutputReference {
    return new SwitchAccessPolicyRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy meraki_switch_access_policy}
*/
export class SwitchAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchAccessPolicy to import
  * @param importFromId The id of the existing SwitchAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policy meraki_switch_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicyType = config.accessPolicyType;
    this._dot1XControlDirection = config.dot1XControlDirection;
    this._guestGroupPolicyId = config.guestGroupPolicyId;
    this._guestPortBouncing = config.guestPortBouncing;
    this._guestSgtId = config.guestSgtId;
    this._guestVlanId = config.guestVlanId;
    this._hostMode = config.hostMode;
    this._increaseAccessSpeed = config.increaseAccessSpeed;
    this._name = config.name;
    this._networkId = config.networkId;
    this._radiusAccountingEnabled = config.radiusAccountingEnabled;
    this._radiusAccountingServers.internalValue = config.radiusAccountingServers;
    this._radiusAuthenticationMode = config.radiusAuthenticationMode;
    this._radiusCacheEnabled = config.radiusCacheEnabled;
    this._radiusCacheTimeout = config.radiusCacheTimeout;
    this._radiusCoaSupportEnabled = config.radiusCoaSupportEnabled;
    this._radiusCriticalAuthDataGroupPolicyId = config.radiusCriticalAuthDataGroupPolicyId;
    this._radiusCriticalAuthDataSgtId = config.radiusCriticalAuthDataSgtId;
    this._radiusCriticalAuthDataVlanId = config.radiusCriticalAuthDataVlanId;
    this._radiusCriticalAuthSuspendPortBounce = config.radiusCriticalAuthSuspendPortBounce;
    this._radiusCriticalAuthVoiceGroupPolicyId = config.radiusCriticalAuthVoiceGroupPolicyId;
    this._radiusCriticalAuthVoiceSgtId = config.radiusCriticalAuthVoiceSgtId;
    this._radiusCriticalAuthVoiceVlanId = config.radiusCriticalAuthVoiceVlanId;
    this._radiusFailedAuthGroupPolicyId = config.radiusFailedAuthGroupPolicyId;
    this._radiusFailedAuthSgtId = config.radiusFailedAuthSgtId;
    this._radiusFailedAuthVlanId = config.radiusFailedAuthVlanId;
    this._radiusGroupAttribute = config.radiusGroupAttribute;
    this._radiusPreAuthenticationGroupPolicyId = config.radiusPreAuthenticationGroupPolicyId;
    this._radiusReAuthenticationInterval = config.radiusReAuthenticationInterval;
    this._radiusServers.internalValue = config.radiusServers;
    this._radiusTestingEnabled = config.radiusTestingEnabled;
    this._urlRedirectWalledGardenEnabled = config.urlRedirectWalledGardenEnabled;
    this._urlRedirectWalledGardenRanges = config.urlRedirectWalledGardenRanges;
    this._voiceVlanClients = config.voiceVlanClients;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_type - computed: false, optional: true, required: false
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  public resetAccessPolicyType() {
    this._accessPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }

  // dot1x_control_direction - computed: false, optional: true, required: false
  private _dot1XControlDirection?: string; 
  public get dot1XControlDirection() {
    return this.getStringAttribute('dot1x_control_direction');
  }
  public set dot1XControlDirection(value: string) {
    this._dot1XControlDirection = value;
  }
  public resetDot1XControlDirection() {
    this._dot1XControlDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XControlDirectionInput() {
    return this._dot1XControlDirection;
  }

  // guest_group_policy_id - computed: false, optional: true, required: false
  private _guestGroupPolicyId?: string; 
  public get guestGroupPolicyId() {
    return this.getStringAttribute('guest_group_policy_id');
  }
  public set guestGroupPolicyId(value: string) {
    this._guestGroupPolicyId = value;
  }
  public resetGuestGroupPolicyId() {
    this._guestGroupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestGroupPolicyIdInput() {
    return this._guestGroupPolicyId;
  }

  // guest_port_bouncing - computed: false, optional: true, required: false
  private _guestPortBouncing?: boolean | cdktf.IResolvable; 
  public get guestPortBouncing() {
    return this.getBooleanAttribute('guest_port_bouncing');
  }
  public set guestPortBouncing(value: boolean | cdktf.IResolvable) {
    this._guestPortBouncing = value;
  }
  public resetGuestPortBouncing() {
    this._guestPortBouncing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPortBouncingInput() {
    return this._guestPortBouncing;
  }

  // guest_sgt_id - computed: false, optional: true, required: false
  private _guestSgtId?: number; 
  public get guestSgtId() {
    return this.getNumberAttribute('guest_sgt_id');
  }
  public set guestSgtId(value: number) {
    this._guestSgtId = value;
  }
  public resetGuestSgtId() {
    this._guestSgtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestSgtIdInput() {
    return this._guestSgtId;
  }

  // guest_vlan_id - computed: false, optional: true, required: false
  private _guestVlanId?: number; 
  public get guestVlanId() {
    return this.getNumberAttribute('guest_vlan_id');
  }
  public set guestVlanId(value: number) {
    this._guestVlanId = value;
  }
  public resetGuestVlanId() {
    this._guestVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanIdInput() {
    return this._guestVlanId;
  }

  // host_mode - computed: false, optional: false, required: true
  private _hostMode?: string; 
  public get hostMode() {
    return this.getStringAttribute('host_mode');
  }
  public set hostMode(value: string) {
    this._hostMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostModeInput() {
    return this._hostMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // increase_access_speed - computed: false, optional: true, required: false
  private _increaseAccessSpeed?: boolean | cdktf.IResolvable; 
  public get increaseAccessSpeed() {
    return this.getBooleanAttribute('increase_access_speed');
  }
  public set increaseAccessSpeed(value: boolean | cdktf.IResolvable) {
    this._increaseAccessSpeed = value;
  }
  public resetIncreaseAccessSpeed() {
    this._increaseAccessSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get increaseAccessSpeedInput() {
    return this._increaseAccessSpeed;
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

  // radius_accounting_enabled - computed: false, optional: false, required: true
  private _radiusAccountingEnabled?: boolean | cdktf.IResolvable; 
  public get radiusAccountingEnabled() {
    return this.getBooleanAttribute('radius_accounting_enabled');
  }
  public set radiusAccountingEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusAccountingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingEnabledInput() {
    return this._radiusAccountingEnabled;
  }

  // radius_accounting_servers - computed: false, optional: true, required: false
  private _radiusAccountingServers = new SwitchAccessPolicyRadiusAccountingServersList(this, "radius_accounting_servers", false);
  public get radiusAccountingServers() {
    return this._radiusAccountingServers;
  }
  public putRadiusAccountingServers(value: SwitchAccessPolicyRadiusAccountingServers[] | cdktf.IResolvable) {
    this._radiusAccountingServers.internalValue = value;
  }
  public resetRadiusAccountingServers() {
    this._radiusAccountingServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingServersInput() {
    return this._radiusAccountingServers.internalValue;
  }

  // radius_authentication_mode - computed: false, optional: true, required: false
  private _radiusAuthenticationMode?: string; 
  public get radiusAuthenticationMode() {
    return this.getStringAttribute('radius_authentication_mode');
  }
  public set radiusAuthenticationMode(value: string) {
    this._radiusAuthenticationMode = value;
  }
  public resetRadiusAuthenticationMode() {
    this._radiusAuthenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAuthenticationModeInput() {
    return this._radiusAuthenticationMode;
  }

  // radius_cache_enabled - computed: false, optional: true, required: false
  private _radiusCacheEnabled?: boolean | cdktf.IResolvable; 
  public get radiusCacheEnabled() {
    return this.getBooleanAttribute('radius_cache_enabled');
  }
  public set radiusCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusCacheEnabled = value;
  }
  public resetRadiusCacheEnabled() {
    this._radiusCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCacheEnabledInput() {
    return this._radiusCacheEnabled;
  }

  // radius_cache_timeout - computed: false, optional: true, required: false
  private _radiusCacheTimeout?: number; 
  public get radiusCacheTimeout() {
    return this.getNumberAttribute('radius_cache_timeout');
  }
  public set radiusCacheTimeout(value: number) {
    this._radiusCacheTimeout = value;
  }
  public resetRadiusCacheTimeout() {
    this._radiusCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCacheTimeoutInput() {
    return this._radiusCacheTimeout;
  }

  // radius_coa_support_enabled - computed: false, optional: false, required: true
  private _radiusCoaSupportEnabled?: boolean | cdktf.IResolvable; 
  public get radiusCoaSupportEnabled() {
    return this.getBooleanAttribute('radius_coa_support_enabled');
  }
  public set radiusCoaSupportEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusCoaSupportEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCoaSupportEnabledInput() {
    return this._radiusCoaSupportEnabled;
  }

  // radius_critical_auth_data_group_policy_id - computed: false, optional: true, required: false
  private _radiusCriticalAuthDataGroupPolicyId?: string; 
  public get radiusCriticalAuthDataGroupPolicyId() {
    return this.getStringAttribute('radius_critical_auth_data_group_policy_id');
  }
  public set radiusCriticalAuthDataGroupPolicyId(value: string) {
    this._radiusCriticalAuthDataGroupPolicyId = value;
  }
  public resetRadiusCriticalAuthDataGroupPolicyId() {
    this._radiusCriticalAuthDataGroupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthDataGroupPolicyIdInput() {
    return this._radiusCriticalAuthDataGroupPolicyId;
  }

  // radius_critical_auth_data_sgt_id - computed: false, optional: true, required: false
  private _radiusCriticalAuthDataSgtId?: number; 
  public get radiusCriticalAuthDataSgtId() {
    return this.getNumberAttribute('radius_critical_auth_data_sgt_id');
  }
  public set radiusCriticalAuthDataSgtId(value: number) {
    this._radiusCriticalAuthDataSgtId = value;
  }
  public resetRadiusCriticalAuthDataSgtId() {
    this._radiusCriticalAuthDataSgtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthDataSgtIdInput() {
    return this._radiusCriticalAuthDataSgtId;
  }

  // radius_critical_auth_data_vlan_id - computed: false, optional: true, required: false
  private _radiusCriticalAuthDataVlanId?: number; 
  public get radiusCriticalAuthDataVlanId() {
    return this.getNumberAttribute('radius_critical_auth_data_vlan_id');
  }
  public set radiusCriticalAuthDataVlanId(value: number) {
    this._radiusCriticalAuthDataVlanId = value;
  }
  public resetRadiusCriticalAuthDataVlanId() {
    this._radiusCriticalAuthDataVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthDataVlanIdInput() {
    return this._radiusCriticalAuthDataVlanId;
  }

  // radius_critical_auth_suspend_port_bounce - computed: false, optional: true, required: false
  private _radiusCriticalAuthSuspendPortBounce?: boolean | cdktf.IResolvable; 
  public get radiusCriticalAuthSuspendPortBounce() {
    return this.getBooleanAttribute('radius_critical_auth_suspend_port_bounce');
  }
  public set radiusCriticalAuthSuspendPortBounce(value: boolean | cdktf.IResolvable) {
    this._radiusCriticalAuthSuspendPortBounce = value;
  }
  public resetRadiusCriticalAuthSuspendPortBounce() {
    this._radiusCriticalAuthSuspendPortBounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthSuspendPortBounceInput() {
    return this._radiusCriticalAuthSuspendPortBounce;
  }

  // radius_critical_auth_voice_group_policy_id - computed: false, optional: true, required: false
  private _radiusCriticalAuthVoiceGroupPolicyId?: string; 
  public get radiusCriticalAuthVoiceGroupPolicyId() {
    return this.getStringAttribute('radius_critical_auth_voice_group_policy_id');
  }
  public set radiusCriticalAuthVoiceGroupPolicyId(value: string) {
    this._radiusCriticalAuthVoiceGroupPolicyId = value;
  }
  public resetRadiusCriticalAuthVoiceGroupPolicyId() {
    this._radiusCriticalAuthVoiceGroupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthVoiceGroupPolicyIdInput() {
    return this._radiusCriticalAuthVoiceGroupPolicyId;
  }

  // radius_critical_auth_voice_sgt_id - computed: false, optional: true, required: false
  private _radiusCriticalAuthVoiceSgtId?: number; 
  public get radiusCriticalAuthVoiceSgtId() {
    return this.getNumberAttribute('radius_critical_auth_voice_sgt_id');
  }
  public set radiusCriticalAuthVoiceSgtId(value: number) {
    this._radiusCriticalAuthVoiceSgtId = value;
  }
  public resetRadiusCriticalAuthVoiceSgtId() {
    this._radiusCriticalAuthVoiceSgtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthVoiceSgtIdInput() {
    return this._radiusCriticalAuthVoiceSgtId;
  }

  // radius_critical_auth_voice_vlan_id - computed: false, optional: true, required: false
  private _radiusCriticalAuthVoiceVlanId?: number; 
  public get radiusCriticalAuthVoiceVlanId() {
    return this.getNumberAttribute('radius_critical_auth_voice_vlan_id');
  }
  public set radiusCriticalAuthVoiceVlanId(value: number) {
    this._radiusCriticalAuthVoiceVlanId = value;
  }
  public resetRadiusCriticalAuthVoiceVlanId() {
    this._radiusCriticalAuthVoiceVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCriticalAuthVoiceVlanIdInput() {
    return this._radiusCriticalAuthVoiceVlanId;
  }

  // radius_failed_auth_group_policy_id - computed: false, optional: true, required: false
  private _radiusFailedAuthGroupPolicyId?: string; 
  public get radiusFailedAuthGroupPolicyId() {
    return this.getStringAttribute('radius_failed_auth_group_policy_id');
  }
  public set radiusFailedAuthGroupPolicyId(value: string) {
    this._radiusFailedAuthGroupPolicyId = value;
  }
  public resetRadiusFailedAuthGroupPolicyId() {
    this._radiusFailedAuthGroupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusFailedAuthGroupPolicyIdInput() {
    return this._radiusFailedAuthGroupPolicyId;
  }

  // radius_failed_auth_sgt_id - computed: false, optional: true, required: false
  private _radiusFailedAuthSgtId?: number; 
  public get radiusFailedAuthSgtId() {
    return this.getNumberAttribute('radius_failed_auth_sgt_id');
  }
  public set radiusFailedAuthSgtId(value: number) {
    this._radiusFailedAuthSgtId = value;
  }
  public resetRadiusFailedAuthSgtId() {
    this._radiusFailedAuthSgtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusFailedAuthSgtIdInput() {
    return this._radiusFailedAuthSgtId;
  }

  // radius_failed_auth_vlan_id - computed: false, optional: true, required: false
  private _radiusFailedAuthVlanId?: number; 
  public get radiusFailedAuthVlanId() {
    return this.getNumberAttribute('radius_failed_auth_vlan_id');
  }
  public set radiusFailedAuthVlanId(value: number) {
    this._radiusFailedAuthVlanId = value;
  }
  public resetRadiusFailedAuthVlanId() {
    this._radiusFailedAuthVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusFailedAuthVlanIdInput() {
    return this._radiusFailedAuthVlanId;
  }

  // radius_group_attribute - computed: false, optional: true, required: false
  private _radiusGroupAttribute?: string; 
  public get radiusGroupAttribute() {
    return this.getStringAttribute('radius_group_attribute');
  }
  public set radiusGroupAttribute(value: string) {
    this._radiusGroupAttribute = value;
  }
  public resetRadiusGroupAttribute() {
    this._radiusGroupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupAttributeInput() {
    return this._radiusGroupAttribute;
  }

  // radius_pre_authentication_group_policy_id - computed: false, optional: true, required: false
  private _radiusPreAuthenticationGroupPolicyId?: string; 
  public get radiusPreAuthenticationGroupPolicyId() {
    return this.getStringAttribute('radius_pre_authentication_group_policy_id');
  }
  public set radiusPreAuthenticationGroupPolicyId(value: string) {
    this._radiusPreAuthenticationGroupPolicyId = value;
  }
  public resetRadiusPreAuthenticationGroupPolicyId() {
    this._radiusPreAuthenticationGroupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPreAuthenticationGroupPolicyIdInput() {
    return this._radiusPreAuthenticationGroupPolicyId;
  }

  // radius_re_authentication_interval - computed: false, optional: true, required: false
  private _radiusReAuthenticationInterval?: number; 
  public get radiusReAuthenticationInterval() {
    return this.getNumberAttribute('radius_re_authentication_interval');
  }
  public set radiusReAuthenticationInterval(value: number) {
    this._radiusReAuthenticationInterval = value;
  }
  public resetRadiusReAuthenticationInterval() {
    this._radiusReAuthenticationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusReAuthenticationIntervalInput() {
    return this._radiusReAuthenticationInterval;
  }

  // radius_servers - computed: false, optional: false, required: true
  private _radiusServers = new SwitchAccessPolicyRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }
  public putRadiusServers(value: SwitchAccessPolicyRadiusServers[] | cdktf.IResolvable) {
    this._radiusServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServersInput() {
    return this._radiusServers.internalValue;
  }

  // radius_testing_enabled - computed: false, optional: false, required: true
  private _radiusTestingEnabled?: boolean | cdktf.IResolvable; 
  public get radiusTestingEnabled() {
    return this.getBooleanAttribute('radius_testing_enabled');
  }
  public set radiusTestingEnabled(value: boolean | cdktf.IResolvable) {
    this._radiusTestingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTestingEnabledInput() {
    return this._radiusTestingEnabled;
  }

  // url_redirect_walled_garden_enabled - computed: false, optional: false, required: true
  private _urlRedirectWalledGardenEnabled?: boolean | cdktf.IResolvable; 
  public get urlRedirectWalledGardenEnabled() {
    return this.getBooleanAttribute('url_redirect_walled_garden_enabled');
  }
  public set urlRedirectWalledGardenEnabled(value: boolean | cdktf.IResolvable) {
    this._urlRedirectWalledGardenEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectWalledGardenEnabledInput() {
    return this._urlRedirectWalledGardenEnabled;
  }

  // url_redirect_walled_garden_ranges - computed: false, optional: true, required: false
  private _urlRedirectWalledGardenRanges?: string[]; 
  public get urlRedirectWalledGardenRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('url_redirect_walled_garden_ranges'));
  }
  public set urlRedirectWalledGardenRanges(value: string[]) {
    this._urlRedirectWalledGardenRanges = value;
  }
  public resetUrlRedirectWalledGardenRanges() {
    this._urlRedirectWalledGardenRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectWalledGardenRangesInput() {
    return this._urlRedirectWalledGardenRanges;
  }

  // voice_vlan_clients - computed: false, optional: true, required: false
  private _voiceVlanClients?: boolean | cdktf.IResolvable; 
  public get voiceVlanClients() {
    return this.getBooleanAttribute('voice_vlan_clients');
  }
  public set voiceVlanClients(value: boolean | cdktf.IResolvable) {
    this._voiceVlanClients = value;
  }
  public resetVoiceVlanClients() {
    this._voiceVlanClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceVlanClientsInput() {
    return this._voiceVlanClients;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_type: cdktf.stringToTerraform(this._accessPolicyType),
      dot1x_control_direction: cdktf.stringToTerraform(this._dot1XControlDirection),
      guest_group_policy_id: cdktf.stringToTerraform(this._guestGroupPolicyId),
      guest_port_bouncing: cdktf.booleanToTerraform(this._guestPortBouncing),
      guest_sgt_id: cdktf.numberToTerraform(this._guestSgtId),
      guest_vlan_id: cdktf.numberToTerraform(this._guestVlanId),
      host_mode: cdktf.stringToTerraform(this._hostMode),
      increase_access_speed: cdktf.booleanToTerraform(this._increaseAccessSpeed),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      radius_accounting_enabled: cdktf.booleanToTerraform(this._radiusAccountingEnabled),
      radius_accounting_servers: cdktf.listMapper(switchAccessPolicyRadiusAccountingServersToTerraform, false)(this._radiusAccountingServers.internalValue),
      radius_authentication_mode: cdktf.stringToTerraform(this._radiusAuthenticationMode),
      radius_cache_enabled: cdktf.booleanToTerraform(this._radiusCacheEnabled),
      radius_cache_timeout: cdktf.numberToTerraform(this._radiusCacheTimeout),
      radius_coa_support_enabled: cdktf.booleanToTerraform(this._radiusCoaSupportEnabled),
      radius_critical_auth_data_group_policy_id: cdktf.stringToTerraform(this._radiusCriticalAuthDataGroupPolicyId),
      radius_critical_auth_data_sgt_id: cdktf.numberToTerraform(this._radiusCriticalAuthDataSgtId),
      radius_critical_auth_data_vlan_id: cdktf.numberToTerraform(this._radiusCriticalAuthDataVlanId),
      radius_critical_auth_suspend_port_bounce: cdktf.booleanToTerraform(this._radiusCriticalAuthSuspendPortBounce),
      radius_critical_auth_voice_group_policy_id: cdktf.stringToTerraform(this._radiusCriticalAuthVoiceGroupPolicyId),
      radius_critical_auth_voice_sgt_id: cdktf.numberToTerraform(this._radiusCriticalAuthVoiceSgtId),
      radius_critical_auth_voice_vlan_id: cdktf.numberToTerraform(this._radiusCriticalAuthVoiceVlanId),
      radius_failed_auth_group_policy_id: cdktf.stringToTerraform(this._radiusFailedAuthGroupPolicyId),
      radius_failed_auth_sgt_id: cdktf.numberToTerraform(this._radiusFailedAuthSgtId),
      radius_failed_auth_vlan_id: cdktf.numberToTerraform(this._radiusFailedAuthVlanId),
      radius_group_attribute: cdktf.stringToTerraform(this._radiusGroupAttribute),
      radius_pre_authentication_group_policy_id: cdktf.stringToTerraform(this._radiusPreAuthenticationGroupPolicyId),
      radius_re_authentication_interval: cdktf.numberToTerraform(this._radiusReAuthenticationInterval),
      radius_servers: cdktf.listMapper(switchAccessPolicyRadiusServersToTerraform, false)(this._radiusServers.internalValue),
      radius_testing_enabled: cdktf.booleanToTerraform(this._radiusTestingEnabled),
      url_redirect_walled_garden_enabled: cdktf.booleanToTerraform(this._urlRedirectWalledGardenEnabled),
      url_redirect_walled_garden_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlRedirectWalledGardenRanges),
      voice_vlan_clients: cdktf.booleanToTerraform(this._voiceVlanClients),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_type: {
        value: cdktf.stringToHclTerraform(this._accessPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_control_direction: {
        value: cdktf.stringToHclTerraform(this._dot1XControlDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_group_policy_id: {
        value: cdktf.stringToHclTerraform(this._guestGroupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_port_bouncing: {
        value: cdktf.booleanToHclTerraform(this._guestPortBouncing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_sgt_id: {
        value: cdktf.numberToHclTerraform(this._guestSgtId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guest_vlan_id: {
        value: cdktf.numberToHclTerraform(this._guestVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_mode: {
        value: cdktf.stringToHclTerraform(this._hostMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      increase_access_speed: {
        value: cdktf.booleanToHclTerraform(this._increaseAccessSpeed),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_accounting_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusAccountingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_accounting_servers: {
        value: cdktf.listMapperHcl(switchAccessPolicyRadiusAccountingServersToHclTerraform, false)(this._radiusAccountingServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchAccessPolicyRadiusAccountingServersList",
      },
      radius_authentication_mode: {
        value: cdktf.stringToHclTerraform(this._radiusAuthenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._radiusCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_coa_support_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusCoaSupportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_critical_auth_data_group_policy_id: {
        value: cdktf.stringToHclTerraform(this._radiusCriticalAuthDataGroupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_critical_auth_data_sgt_id: {
        value: cdktf.numberToHclTerraform(this._radiusCriticalAuthDataSgtId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_critical_auth_data_vlan_id: {
        value: cdktf.numberToHclTerraform(this._radiusCriticalAuthDataVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_critical_auth_suspend_port_bounce: {
        value: cdktf.booleanToHclTerraform(this._radiusCriticalAuthSuspendPortBounce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_critical_auth_voice_group_policy_id: {
        value: cdktf.stringToHclTerraform(this._radiusCriticalAuthVoiceGroupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_critical_auth_voice_sgt_id: {
        value: cdktf.numberToHclTerraform(this._radiusCriticalAuthVoiceSgtId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_critical_auth_voice_vlan_id: {
        value: cdktf.numberToHclTerraform(this._radiusCriticalAuthVoiceVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_failed_auth_group_policy_id: {
        value: cdktf.stringToHclTerraform(this._radiusFailedAuthGroupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_failed_auth_sgt_id: {
        value: cdktf.numberToHclTerraform(this._radiusFailedAuthSgtId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_failed_auth_vlan_id: {
        value: cdktf.numberToHclTerraform(this._radiusFailedAuthVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_group_attribute: {
        value: cdktf.stringToHclTerraform(this._radiusGroupAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_pre_authentication_group_policy_id: {
        value: cdktf.stringToHclTerraform(this._radiusPreAuthenticationGroupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_re_authentication_interval: {
        value: cdktf.numberToHclTerraform(this._radiusReAuthenticationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_servers: {
        value: cdktf.listMapperHcl(switchAccessPolicyRadiusServersToHclTerraform, false)(this._radiusServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchAccessPolicyRadiusServersList",
      },
      radius_testing_enabled: {
        value: cdktf.booleanToHclTerraform(this._radiusTestingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_redirect_walled_garden_enabled: {
        value: cdktf.booleanToHclTerraform(this._urlRedirectWalledGardenEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_redirect_walled_garden_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlRedirectWalledGardenRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      voice_vlan_clients: {
        value: cdktf.booleanToHclTerraform(this._voiceVlanClients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
