// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchAccessPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#items SwitchAccessPolicies#items}
  */
  readonly items: SwitchAccessPoliciesItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#network_id SwitchAccessPolicies#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#organization_id SwitchAccessPolicies#organization_id}
  */
  readonly organizationId: string;
}
export interface SwitchAccessPoliciesItemsRadiusAccountingServers {
  /**
  * Public IP address of the RADIUS accounting server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#host SwitchAccessPolicies#host}
  */
  readonly host?: string;
  /**
  * Organization wide RADIUS server ID. If this field is provided, the host, port and secret field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#organization_radius_server_id SwitchAccessPolicies#organization_radius_server_id}
  */
  readonly organizationRadiusServerId?: string;
  /**
  * UDP port that the RADIUS Accounting server listens on for access requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#port SwitchAccessPolicies#port}
  */
  readonly port?: number;
  /**
  * RADIUS client shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#secret SwitchAccessPolicies#secret}
  */
  readonly secret?: string;
}

export function switchAccessPoliciesItemsRadiusAccountingServersToTerraform(struct?: SwitchAccessPoliciesItemsRadiusAccountingServers | cdktf.IResolvable): any {
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


export function switchAccessPoliciesItemsRadiusAccountingServersToHclTerraform(struct?: SwitchAccessPoliciesItemsRadiusAccountingServers | cdktf.IResolvable): any {
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

export class SwitchAccessPoliciesItemsRadiusAccountingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchAccessPoliciesItemsRadiusAccountingServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchAccessPoliciesItemsRadiusAccountingServers | cdktf.IResolvable | undefined) {
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

export class SwitchAccessPoliciesItemsRadiusAccountingServersList extends cdktf.ComplexList {
  public internalValue? : SwitchAccessPoliciesItemsRadiusAccountingServers[] | cdktf.IResolvable

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
  public get(index: number): SwitchAccessPoliciesItemsRadiusAccountingServersOutputReference {
    return new SwitchAccessPoliciesItemsRadiusAccountingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchAccessPoliciesItemsRadiusServers {
  /**
  * Public IP address of the RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#host SwitchAccessPolicies#host}
  */
  readonly host?: string;
  /**
  * Organization wide RADIUS server ID. If this field is provided, the host, port and secret field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#organization_radius_server_id SwitchAccessPolicies#organization_radius_server_id}
  */
  readonly organizationRadiusServerId?: string;
  /**
  * UDP port that the RADIUS server listens on for access requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#port SwitchAccessPolicies#port}
  */
  readonly port?: number;
  /**
  * RADIUS client shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#secret SwitchAccessPolicies#secret}
  */
  readonly secret?: string;
}

export function switchAccessPoliciesItemsRadiusServersToTerraform(struct?: SwitchAccessPoliciesItemsRadiusServers | cdktf.IResolvable): any {
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


export function switchAccessPoliciesItemsRadiusServersToHclTerraform(struct?: SwitchAccessPoliciesItemsRadiusServers | cdktf.IResolvable): any {
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

export class SwitchAccessPoliciesItemsRadiusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchAccessPoliciesItemsRadiusServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchAccessPoliciesItemsRadiusServers | cdktf.IResolvable | undefined) {
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

export class SwitchAccessPoliciesItemsRadiusServersList extends cdktf.ComplexList {
  public internalValue? : SwitchAccessPoliciesItemsRadiusServers[] | cdktf.IResolvable

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
  public get(index: number): SwitchAccessPoliciesItemsRadiusServersOutputReference {
    return new SwitchAccessPoliciesItemsRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchAccessPoliciesItems {
  /**
  * Access Type of the policy. Automatically `Hybrid authentication` when hostMode is `Multi-Domain`.
  *   - Choices: `802.1x`, `Hybrid authentication`, `MAC authentication bypass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#access_policy_type SwitchAccessPolicies#access_policy_type}
  */
  readonly accessPolicyType?: string;
  /**
  * Supports either `both` or `inbound`. Set to `inbound` to allow unauthorized egress on the switchport. Set to `both` to control both traffic directions with authorization. Defaults to `both`
  *   - Choices: `both`, `inbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#dot1x_control_direction SwitchAccessPolicies#dot1x_control_direction}
  */
  readonly dot1XControlDirection?: string;
  /**
  * Group policy Number for guest group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#guest_group_policy_id SwitchAccessPolicies#guest_group_policy_id}
  */
  readonly guestGroupPolicyId?: string;
  /**
  * If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#guest_port_bouncing SwitchAccessPolicies#guest_port_bouncing}
  */
  readonly guestPortBouncing?: boolean | cdktf.IResolvable;
  /**
  * Security Group Tag ID for guest group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#guest_sgt_id SwitchAccessPolicies#guest_sgt_id}
  */
  readonly guestSgtId?: number;
  /**
  * ID for the guest VLAN allow unauthorized devices access to limited network resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#guest_vlan_id SwitchAccessPolicies#guest_vlan_id}
  */
  readonly guestVlanId?: number;
  /**
  * Choose the Host Mode for the access policy.
  *   - Choices: `Multi-Auth`, `Multi-Domain`, `Multi-Host`, `Single-Host`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#host_mode SwitchAccessPolicies#host_mode}
  */
  readonly hostMode: string;
  /**
  * Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is `Hybrid Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#increase_access_speed SwitchAccessPolicies#increase_access_speed}
  */
  readonly increaseAccessSpeed?: boolean | cdktf.IResolvable;
  /**
  * Name of the access policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#name SwitchAccessPolicies#name}
  */
  readonly name: string;
  /**
  * Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_accounting_enabled SwitchAccessPolicies#radius_accounting_enabled}
  */
  readonly radiusAccountingEnabled: boolean | cdktf.IResolvable;
  /**
  * List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_accounting_servers SwitchAccessPolicies#radius_accounting_servers}
  */
  readonly radiusAccountingServers?: SwitchAccessPoliciesItemsRadiusAccountingServers[] | cdktf.IResolvable;
  /**
  * Authentication mode of the policy ( Open | Closed )
  *   - Choices: `Closed`, `Open`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_authentication_mode SwitchAccessPolicies#radius_authentication_mode}
  */
  readonly radiusAuthenticationMode?: string;
  /**
  * Enable to cache authorization and authentication responses on the RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_cache_enabled SwitchAccessPolicies#radius_cache_enabled}
  */
  readonly radiusCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * If RADIUS caching is enabled, this value dictates how long the cache will remain in the RADIUS server, in hours, to allow network access without authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_cache_timeout SwitchAccessPolicies#radius_cache_timeout}
  */
  readonly radiusCacheTimeout?: number;
  /**
  * Change of authentication for RADIUS re-authentication and disconnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_coa_support_enabled SwitchAccessPolicies#radius_coa_support_enabled}
  */
  readonly radiusCoaSupportEnabled: boolean | cdktf.IResolvable;
  /**
  * Group policy Number for data VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_data_group_policy_id SwitchAccessPolicies#radius_critical_auth_data_group_policy_id}
  */
  readonly radiusCriticalAuthDataGroupPolicyId?: string;
  /**
  * Security Group Tag ID for data VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_data_sgt_id SwitchAccessPolicies#radius_critical_auth_data_sgt_id}
  */
  readonly radiusCriticalAuthDataSgtId?: number;
  /**
  * VLAN that clients who use data will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_data_vlan_id SwitchAccessPolicies#radius_critical_auth_data_vlan_id}
  */
  readonly radiusCriticalAuthDataVlanId?: number;
  /**
  * Disable port bounce when RADIUS servers are unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_suspend_port_bounce SwitchAccessPolicies#radius_critical_auth_suspend_port_bounce}
  */
  readonly radiusCriticalAuthSuspendPortBounce?: boolean | cdktf.IResolvable;
  /**
  * Group policy Number for voice VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_voice_group_policy_id SwitchAccessPolicies#radius_critical_auth_voice_group_policy_id}
  */
  readonly radiusCriticalAuthVoiceGroupPolicyId?: string;
  /**
  * Security Group Tag ID for voice VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_voice_sgt_id SwitchAccessPolicies#radius_critical_auth_voice_sgt_id}
  */
  readonly radiusCriticalAuthVoiceSgtId?: number;
  /**
  * VLAN that clients who use voice will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_critical_auth_voice_vlan_id SwitchAccessPolicies#radius_critical_auth_voice_vlan_id}
  */
  readonly radiusCriticalAuthVoiceVlanId?: number;
  /**
  * Group policy Number for failed authentication group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_failed_auth_group_policy_id SwitchAccessPolicies#radius_failed_auth_group_policy_id}
  */
  readonly radiusFailedAuthGroupPolicyId?: string;
  /**
  * Security Group Tag ID for failed authentication group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_failed_auth_sgt_id SwitchAccessPolicies#radius_failed_auth_sgt_id}
  */
  readonly radiusFailedAuthSgtId?: number;
  /**
  * VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_failed_auth_vlan_id SwitchAccessPolicies#radius_failed_auth_vlan_id}
  */
  readonly radiusFailedAuthVlanId?: number;
  /**
  * Acceptable values are `''` for None, or `'11'` for Group Policies ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_group_attribute SwitchAccessPolicies#radius_group_attribute}
  */
  readonly radiusGroupAttribute?: string;
  /**
  * Group policy Number for pre-authentication group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_pre_authentication_group_policy_id SwitchAccessPolicies#radius_pre_authentication_group_policy_id}
  */
  readonly radiusPreAuthenticationGroupPolicyId?: string;
  /**
  * Re-authentication period in seconds. Will be null if hostMode is Multi-Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_re_authentication_interval SwitchAccessPolicies#radius_re_authentication_interval}
  */
  readonly radiusReAuthenticationInterval?: number;
  /**
  * List of RADIUS servers to require connecting devices to authenticate against before granting network access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_servers SwitchAccessPolicies#radius_servers}
  */
  readonly radiusServers: SwitchAccessPoliciesItemsRadiusServers[] | cdktf.IResolvable;
  /**
  * If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#radius_testing_enabled SwitchAccessPolicies#radius_testing_enabled}
  */
  readonly radiusTestingEnabled: boolean | cdktf.IResolvable;
  /**
  * Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#url_redirect_walled_garden_enabled SwitchAccessPolicies#url_redirect_walled_garden_enabled}
  */
  readonly urlRedirectWalledGardenEnabled: boolean | cdktf.IResolvable;
  /**
  * IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#url_redirect_walled_garden_ranges SwitchAccessPolicies#url_redirect_walled_garden_ranges}
  */
  readonly urlRedirectWalledGardenRanges?: string[];
  /**
  * CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is `Multi-Domain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#voice_vlan_clients SwitchAccessPolicies#voice_vlan_clients}
  */
  readonly voiceVlanClients?: boolean | cdktf.IResolvable;
}

export function switchAccessPoliciesItemsToTerraform(struct?: SwitchAccessPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policy_type: cdktf.stringToTerraform(struct!.accessPolicyType),
    dot1x_control_direction: cdktf.stringToTerraform(struct!.dot1XControlDirection),
    guest_group_policy_id: cdktf.stringToTerraform(struct!.guestGroupPolicyId),
    guest_port_bouncing: cdktf.booleanToTerraform(struct!.guestPortBouncing),
    guest_sgt_id: cdktf.numberToTerraform(struct!.guestSgtId),
    guest_vlan_id: cdktf.numberToTerraform(struct!.guestVlanId),
    host_mode: cdktf.stringToTerraform(struct!.hostMode),
    increase_access_speed: cdktf.booleanToTerraform(struct!.increaseAccessSpeed),
    name: cdktf.stringToTerraform(struct!.name),
    radius_accounting_enabled: cdktf.booleanToTerraform(struct!.radiusAccountingEnabled),
    radius_accounting_servers: cdktf.listMapper(switchAccessPoliciesItemsRadiusAccountingServersToTerraform, false)(struct!.radiusAccountingServers),
    radius_authentication_mode: cdktf.stringToTerraform(struct!.radiusAuthenticationMode),
    radius_cache_enabled: cdktf.booleanToTerraform(struct!.radiusCacheEnabled),
    radius_cache_timeout: cdktf.numberToTerraform(struct!.radiusCacheTimeout),
    radius_coa_support_enabled: cdktf.booleanToTerraform(struct!.radiusCoaSupportEnabled),
    radius_critical_auth_data_group_policy_id: cdktf.stringToTerraform(struct!.radiusCriticalAuthDataGroupPolicyId),
    radius_critical_auth_data_sgt_id: cdktf.numberToTerraform(struct!.radiusCriticalAuthDataSgtId),
    radius_critical_auth_data_vlan_id: cdktf.numberToTerraform(struct!.radiusCriticalAuthDataVlanId),
    radius_critical_auth_suspend_port_bounce: cdktf.booleanToTerraform(struct!.radiusCriticalAuthSuspendPortBounce),
    radius_critical_auth_voice_group_policy_id: cdktf.stringToTerraform(struct!.radiusCriticalAuthVoiceGroupPolicyId),
    radius_critical_auth_voice_sgt_id: cdktf.numberToTerraform(struct!.radiusCriticalAuthVoiceSgtId),
    radius_critical_auth_voice_vlan_id: cdktf.numberToTerraform(struct!.radiusCriticalAuthVoiceVlanId),
    radius_failed_auth_group_policy_id: cdktf.stringToTerraform(struct!.radiusFailedAuthGroupPolicyId),
    radius_failed_auth_sgt_id: cdktf.numberToTerraform(struct!.radiusFailedAuthSgtId),
    radius_failed_auth_vlan_id: cdktf.numberToTerraform(struct!.radiusFailedAuthVlanId),
    radius_group_attribute: cdktf.stringToTerraform(struct!.radiusGroupAttribute),
    radius_pre_authentication_group_policy_id: cdktf.stringToTerraform(struct!.radiusPreAuthenticationGroupPolicyId),
    radius_re_authentication_interval: cdktf.numberToTerraform(struct!.radiusReAuthenticationInterval),
    radius_servers: cdktf.listMapper(switchAccessPoliciesItemsRadiusServersToTerraform, false)(struct!.radiusServers),
    radius_testing_enabled: cdktf.booleanToTerraform(struct!.radiusTestingEnabled),
    url_redirect_walled_garden_enabled: cdktf.booleanToTerraform(struct!.urlRedirectWalledGardenEnabled),
    url_redirect_walled_garden_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlRedirectWalledGardenRanges),
    voice_vlan_clients: cdktf.booleanToTerraform(struct!.voiceVlanClients),
  }
}


export function switchAccessPoliciesItemsToHclTerraform(struct?: SwitchAccessPoliciesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.accessPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_control_direction: {
      value: cdktf.stringToHclTerraform(struct!.dot1XControlDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_group_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.guestGroupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_port_bouncing: {
      value: cdktf.booleanToHclTerraform(struct!.guestPortBouncing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guest_sgt_id: {
      value: cdktf.numberToHclTerraform(struct!.guestSgtId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guest_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.guestVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_mode: {
      value: cdktf.stringToHclTerraform(struct!.hostMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    increase_access_speed: {
      value: cdktf.booleanToHclTerraform(struct!.increaseAccessSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_accounting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.radiusAccountingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_accounting_servers: {
      value: cdktf.listMapperHcl(switchAccessPoliciesItemsRadiusAccountingServersToHclTerraform, false)(struct!.radiusAccountingServers),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchAccessPoliciesItemsRadiusAccountingServersList",
    },
    radius_authentication_mode: {
      value: cdktf.stringToHclTerraform(struct!.radiusAuthenticationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.radiusCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_cache_timeout: {
      value: cdktf.numberToHclTerraform(struct!.radiusCacheTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_coa_support_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.radiusCoaSupportEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_critical_auth_data_group_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.radiusCriticalAuthDataGroupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_critical_auth_data_sgt_id: {
      value: cdktf.numberToHclTerraform(struct!.radiusCriticalAuthDataSgtId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_critical_auth_data_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.radiusCriticalAuthDataVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_critical_auth_suspend_port_bounce: {
      value: cdktf.booleanToHclTerraform(struct!.radiusCriticalAuthSuspendPortBounce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_critical_auth_voice_group_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.radiusCriticalAuthVoiceGroupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_critical_auth_voice_sgt_id: {
      value: cdktf.numberToHclTerraform(struct!.radiusCriticalAuthVoiceSgtId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_critical_auth_voice_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.radiusCriticalAuthVoiceVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_failed_auth_group_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.radiusFailedAuthGroupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_failed_auth_sgt_id: {
      value: cdktf.numberToHclTerraform(struct!.radiusFailedAuthSgtId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_failed_auth_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.radiusFailedAuthVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_group_attribute: {
      value: cdktf.stringToHclTerraform(struct!.radiusGroupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_pre_authentication_group_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.radiusPreAuthenticationGroupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_re_authentication_interval: {
      value: cdktf.numberToHclTerraform(struct!.radiusReAuthenticationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_servers: {
      value: cdktf.listMapperHcl(switchAccessPoliciesItemsRadiusServersToHclTerraform, false)(struct!.radiusServers),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchAccessPoliciesItemsRadiusServersList",
    },
    radius_testing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.radiusTestingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_redirect_walled_garden_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.urlRedirectWalledGardenEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_redirect_walled_garden_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlRedirectWalledGardenRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    voice_vlan_clients: {
      value: cdktf.booleanToHclTerraform(struct!.voiceVlanClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchAccessPoliciesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchAccessPoliciesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicyType = this._accessPolicyType;
    }
    if (this._dot1XControlDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XControlDirection = this._dot1XControlDirection;
    }
    if (this._guestGroupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestGroupPolicyId = this._guestGroupPolicyId;
    }
    if (this._guestPortBouncing !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestPortBouncing = this._guestPortBouncing;
    }
    if (this._guestSgtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestSgtId = this._guestSgtId;
    }
    if (this._guestVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestVlanId = this._guestVlanId;
    }
    if (this._hostMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMode = this._hostMode;
    }
    if (this._increaseAccessSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.increaseAccessSpeed = this._increaseAccessSpeed;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._radiusAccountingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusAccountingEnabled = this._radiusAccountingEnabled;
    }
    if (this._radiusAccountingServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusAccountingServers = this._radiusAccountingServers?.internalValue;
    }
    if (this._radiusAuthenticationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusAuthenticationMode = this._radiusAuthenticationMode;
    }
    if (this._radiusCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCacheEnabled = this._radiusCacheEnabled;
    }
    if (this._radiusCacheTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCacheTimeout = this._radiusCacheTimeout;
    }
    if (this._radiusCoaSupportEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCoaSupportEnabled = this._radiusCoaSupportEnabled;
    }
    if (this._radiusCriticalAuthDataGroupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthDataGroupPolicyId = this._radiusCriticalAuthDataGroupPolicyId;
    }
    if (this._radiusCriticalAuthDataSgtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthDataSgtId = this._radiusCriticalAuthDataSgtId;
    }
    if (this._radiusCriticalAuthDataVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthDataVlanId = this._radiusCriticalAuthDataVlanId;
    }
    if (this._radiusCriticalAuthSuspendPortBounce !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthSuspendPortBounce = this._radiusCriticalAuthSuspendPortBounce;
    }
    if (this._radiusCriticalAuthVoiceGroupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthVoiceGroupPolicyId = this._radiusCriticalAuthVoiceGroupPolicyId;
    }
    if (this._radiusCriticalAuthVoiceSgtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthVoiceSgtId = this._radiusCriticalAuthVoiceSgtId;
    }
    if (this._radiusCriticalAuthVoiceVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCriticalAuthVoiceVlanId = this._radiusCriticalAuthVoiceVlanId;
    }
    if (this._radiusFailedAuthGroupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusFailedAuthGroupPolicyId = this._radiusFailedAuthGroupPolicyId;
    }
    if (this._radiusFailedAuthSgtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusFailedAuthSgtId = this._radiusFailedAuthSgtId;
    }
    if (this._radiusFailedAuthVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusFailedAuthVlanId = this._radiusFailedAuthVlanId;
    }
    if (this._radiusGroupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusGroupAttribute = this._radiusGroupAttribute;
    }
    if (this._radiusPreAuthenticationGroupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusPreAuthenticationGroupPolicyId = this._radiusPreAuthenticationGroupPolicyId;
    }
    if (this._radiusReAuthenticationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusReAuthenticationInterval = this._radiusReAuthenticationInterval;
    }
    if (this._radiusServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServers = this._radiusServers?.internalValue;
    }
    if (this._radiusTestingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTestingEnabled = this._radiusTestingEnabled;
    }
    if (this._urlRedirectWalledGardenEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirectWalledGardenEnabled = this._urlRedirectWalledGardenEnabled;
    }
    if (this._urlRedirectWalledGardenRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirectWalledGardenRanges = this._urlRedirectWalledGardenRanges;
    }
    if (this._voiceVlanClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceVlanClients = this._voiceVlanClients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchAccessPoliciesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicyType = undefined;
      this._dot1XControlDirection = undefined;
      this._guestGroupPolicyId = undefined;
      this._guestPortBouncing = undefined;
      this._guestSgtId = undefined;
      this._guestVlanId = undefined;
      this._hostMode = undefined;
      this._increaseAccessSpeed = undefined;
      this._name = undefined;
      this._radiusAccountingEnabled = undefined;
      this._radiusAccountingServers.internalValue = undefined;
      this._radiusAuthenticationMode = undefined;
      this._radiusCacheEnabled = undefined;
      this._radiusCacheTimeout = undefined;
      this._radiusCoaSupportEnabled = undefined;
      this._radiusCriticalAuthDataGroupPolicyId = undefined;
      this._radiusCriticalAuthDataSgtId = undefined;
      this._radiusCriticalAuthDataVlanId = undefined;
      this._radiusCriticalAuthSuspendPortBounce = undefined;
      this._radiusCriticalAuthVoiceGroupPolicyId = undefined;
      this._radiusCriticalAuthVoiceSgtId = undefined;
      this._radiusCriticalAuthVoiceVlanId = undefined;
      this._radiusFailedAuthGroupPolicyId = undefined;
      this._radiusFailedAuthSgtId = undefined;
      this._radiusFailedAuthVlanId = undefined;
      this._radiusGroupAttribute = undefined;
      this._radiusPreAuthenticationGroupPolicyId = undefined;
      this._radiusReAuthenticationInterval = undefined;
      this._radiusServers.internalValue = undefined;
      this._radiusTestingEnabled = undefined;
      this._urlRedirectWalledGardenEnabled = undefined;
      this._urlRedirectWalledGardenRanges = undefined;
      this._voiceVlanClients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicyType = value.accessPolicyType;
      this._dot1XControlDirection = value.dot1XControlDirection;
      this._guestGroupPolicyId = value.guestGroupPolicyId;
      this._guestPortBouncing = value.guestPortBouncing;
      this._guestSgtId = value.guestSgtId;
      this._guestVlanId = value.guestVlanId;
      this._hostMode = value.hostMode;
      this._increaseAccessSpeed = value.increaseAccessSpeed;
      this._name = value.name;
      this._radiusAccountingEnabled = value.radiusAccountingEnabled;
      this._radiusAccountingServers.internalValue = value.radiusAccountingServers;
      this._radiusAuthenticationMode = value.radiusAuthenticationMode;
      this._radiusCacheEnabled = value.radiusCacheEnabled;
      this._radiusCacheTimeout = value.radiusCacheTimeout;
      this._radiusCoaSupportEnabled = value.radiusCoaSupportEnabled;
      this._radiusCriticalAuthDataGroupPolicyId = value.radiusCriticalAuthDataGroupPolicyId;
      this._radiusCriticalAuthDataSgtId = value.radiusCriticalAuthDataSgtId;
      this._radiusCriticalAuthDataVlanId = value.radiusCriticalAuthDataVlanId;
      this._radiusCriticalAuthSuspendPortBounce = value.radiusCriticalAuthSuspendPortBounce;
      this._radiusCriticalAuthVoiceGroupPolicyId = value.radiusCriticalAuthVoiceGroupPolicyId;
      this._radiusCriticalAuthVoiceSgtId = value.radiusCriticalAuthVoiceSgtId;
      this._radiusCriticalAuthVoiceVlanId = value.radiusCriticalAuthVoiceVlanId;
      this._radiusFailedAuthGroupPolicyId = value.radiusFailedAuthGroupPolicyId;
      this._radiusFailedAuthSgtId = value.radiusFailedAuthSgtId;
      this._radiusFailedAuthVlanId = value.radiusFailedAuthVlanId;
      this._radiusGroupAttribute = value.radiusGroupAttribute;
      this._radiusPreAuthenticationGroupPolicyId = value.radiusPreAuthenticationGroupPolicyId;
      this._radiusReAuthenticationInterval = value.radiusReAuthenticationInterval;
      this._radiusServers.internalValue = value.radiusServers;
      this._radiusTestingEnabled = value.radiusTestingEnabled;
      this._urlRedirectWalledGardenEnabled = value.urlRedirectWalledGardenEnabled;
      this._urlRedirectWalledGardenRanges = value.urlRedirectWalledGardenRanges;
      this._voiceVlanClients = value.voiceVlanClients;
    }
  }

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
  private _radiusAccountingServers = new SwitchAccessPoliciesItemsRadiusAccountingServersList(this, "radius_accounting_servers", false);
  public get radiusAccountingServers() {
    return this._radiusAccountingServers;
  }
  public putRadiusAccountingServers(value: SwitchAccessPoliciesItemsRadiusAccountingServers[] | cdktf.IResolvable) {
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
  private _radiusServers = new SwitchAccessPoliciesItemsRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }
  public putRadiusServers(value: SwitchAccessPoliciesItemsRadiusServers[] | cdktf.IResolvable) {
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
}

export class SwitchAccessPoliciesItemsList extends cdktf.ComplexList {
  public internalValue? : SwitchAccessPoliciesItems[] | cdktf.IResolvable

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
  public get(index: number): SwitchAccessPoliciesItemsOutputReference {
    return new SwitchAccessPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies meraki_switch_access_policies}
*/
export class SwitchAccessPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_access_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchAccessPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchAccessPolicies to import
  * @param importFromId The id of the existing SwitchAccessPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchAccessPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_access_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_access_policies meraki_switch_access_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchAccessPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchAccessPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_access_policies',
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
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new SwitchAccessPoliciesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SwitchAccessPoliciesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(switchAccessPoliciesItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(switchAccessPoliciesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchAccessPoliciesItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
