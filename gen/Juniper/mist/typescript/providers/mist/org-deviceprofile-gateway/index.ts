// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgDeviceprofileGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * additional CLI commands to append to the generated Junos config. **Note**: no check is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#additional_config_cmds OrgDeviceprofileGateway#additional_config_cmds}
  */
  readonly additionalConfigCmds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#bgp_config OrgDeviceprofileGateway#bgp_config}
  */
  readonly bgpConfig?: { [key: string]: OrgDeviceprofileGatewayBgpConfig } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dhcpd_config OrgDeviceprofileGateway#dhcpd_config}
  */
  readonly dhcpdConfig?: OrgDeviceprofileGatewayDhcpdConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_override OrgDeviceprofileGateway#dns_override}
  */
  readonly dnsOverride?: boolean | cdktf.IResolvable;
  /**
  * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_servers OrgDeviceprofileGateway#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_suffix OrgDeviceprofileGateway#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * Property key is the destination CIDR (e.g. "10.0.0.0/8"), the destination Network name or a variable (e.g. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#extra_routes OrgDeviceprofileGateway#extra_routes}
  */
  readonly extraRoutes?: { [key: string]: OrgDeviceprofileGatewayExtraRoutes } | cdktf.IResolvable;
  /**
  * Property key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64"), the destination Network name or a variable (e.g. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#extra_routes6 OrgDeviceprofileGateway#extra_routes6}
  */
  readonly extraRoutes6?: { [key: string]: OrgDeviceprofileGatewayExtraRoutes6 } | cdktf.IResolvable;
  /**
  * Property key is the profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#idp_profiles OrgDeviceprofileGateway#idp_profiles}
  */
  readonly idpProfiles?: { [key: string]: OrgDeviceprofileGatewayIdpProfiles } | cdktf.IResolvable;
  /**
  * Property key is the network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip_configs OrgDeviceprofileGateway#ip_configs}
  */
  readonly ipConfigs?: { [key: string]: OrgDeviceprofileGatewayIpConfigs } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#networks OrgDeviceprofileGateway#networks}
  */
  readonly networks?: OrgDeviceprofileGatewayNetworks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ntp_override OrgDeviceprofileGateway#ntp_override}
  */
  readonly ntpOverride?: boolean | cdktf.IResolvable;
  /**
  * List of NTP servers specific to this device. By default, those in Site Settings will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ntp_servers OrgDeviceprofileGateway#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * Out-of-band (vme/em0/fxp0) IP config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#oob_ip_config OrgDeviceprofileGateway#oob_ip_config}
  */
  readonly oobIpConfig?: OrgDeviceprofileGatewayOobIpConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#org_id OrgDeviceprofileGateway#org_id}
  */
  readonly orgId: string;
  /**
  * Property key is the path name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#path_preferences OrgDeviceprofileGateway#path_preferences}
  */
  readonly pathPreferences?: { [key: string]: OrgDeviceprofileGatewayPathPreferences } | cdktf.IResolvable;
  /**
  * Property key is the port(s) name or range (e.g. "ge-0/0/0-10")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#port_config OrgDeviceprofileGateway#port_config}
  */
  readonly portConfig?: { [key: string]: OrgDeviceprofileGatewayPortConfig } | cdktf.IResolvable;
  /**
  * Auto assigned if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#router_id OrgDeviceprofileGateway#router_id}
  */
  readonly routerId?: string;
  /**
  * Property key is the routing policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#routing_policies OrgDeviceprofileGateway#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: OrgDeviceprofileGatewayRoutingPolicies } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#service_policies OrgDeviceprofileGateway#service_policies}
  */
  readonly servicePolicies?: OrgDeviceprofileGatewayServicePolicies[] | cdktf.IResolvable;
  /**
  * additional CLI commands to append to the generated SSR config. **Note**: no check is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ssr_additional_config_cmds OrgDeviceprofileGateway#ssr_additional_config_cmds}
  */
  readonly ssrAdditionalConfigCmds?: string[];
  /**
  * Property key is the tunnel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#tunnel_configs OrgDeviceprofileGateway#tunnel_configs}
  */
  readonly tunnelConfigs?: { [key: string]: OrgDeviceprofileGatewayTunnelConfigs } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#tunnel_provider_options OrgDeviceprofileGateway#tunnel_provider_options}
  */
  readonly tunnelProviderOptions?: OrgDeviceprofileGatewayTunnelProviderOptions;
  /**
  * When a service policy denies a app_category, what message to show in user's browser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#url_filtering_deny_msg OrgDeviceprofileGateway#url_filtering_deny_msg}
  */
  readonly urlFilteringDenyMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vrf_config OrgDeviceprofileGateway#vrf_config}
  */
  readonly vrfConfig?: OrgDeviceprofileGatewayVrfConfig;
  /**
  * Property key is the network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vrf_instances OrgDeviceprofileGateway#vrf_instances}
  */
  readonly vrfInstances?: { [key: string]: OrgDeviceprofileGatewayVrfInstances } | cdktf.IResolvable;
}
export interface OrgDeviceprofileGatewayBgpConfigNeighbors {
  /**
  * If true, the BGP session to this neighbor will be administratively disabled/shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disabled OrgDeviceprofileGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#export_policy OrgDeviceprofileGateway#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#hold_time OrgDeviceprofileGateway#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#import_policy OrgDeviceprofileGateway#import_policy}
  */
  readonly importPolicy?: string;
  /**
  * Assuming BGP neighbor is directly connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#multihop_ttl OrgDeviceprofileGateway#multihop_ttl}
  */
  readonly multihopTtl?: number;
  /**
  * Neighbor AS. Value must be in range 1-4294967295 or a variable (e.g. `{{as_variable}}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#neighbor_as OrgDeviceprofileGateway#neighbor_as}
  */
  readonly neighborAs: string;
}

export function orgDeviceprofileGatewayBgpConfigNeighborsToTerraform(struct?: OrgDeviceprofileGatewayBgpConfigNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    import_policy: cdktf.stringToTerraform(struct!.importPolicy),
    multihop_ttl: cdktf.numberToTerraform(struct!.multihopTtl),
    neighbor_as: cdktf.stringToTerraform(struct!.neighborAs),
  }
}


export function orgDeviceprofileGatewayBgpConfigNeighborsToHclTerraform(struct?: OrgDeviceprofileGatewayBgpConfigNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    import_policy: {
      value: cdktf.stringToHclTerraform(struct!.importPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multihop_ttl: {
      value: cdktf.numberToHclTerraform(struct!.multihopTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_as: {
      value: cdktf.stringToHclTerraform(struct!.neighborAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayBgpConfigNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayBgpConfigNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._importPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.importPolicy = this._importPolicy;
    }
    if (this._multihopTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihopTtl = this._multihopTtl;
    }
    if (this._neighborAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAs = this._neighborAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayBgpConfigNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._exportPolicy = undefined;
      this._holdTime = undefined;
      this._importPolicy = undefined;
      this._multihopTtl = undefined;
      this._neighborAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._exportPolicy = value.exportPolicy;
      this._holdTime = value.holdTime;
      this._importPolicy = value.importPolicy;
      this._multihopTtl = value.multihopTtl;
      this._neighborAs = value.neighborAs;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // import_policy - computed: false, optional: true, required: false
  private _importPolicy?: string; 
  public get importPolicy() {
    return this.getStringAttribute('import_policy');
  }
  public set importPolicy(value: string) {
    this._importPolicy = value;
  }
  public resetImportPolicy() {
    this._importPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyInput() {
    return this._importPolicy;
  }

  // multihop_ttl - computed: false, optional: true, required: false
  private _multihopTtl?: number; 
  public get multihopTtl() {
    return this.getNumberAttribute('multihop_ttl');
  }
  public set multihopTtl(value: number) {
    this._multihopTtl = value;
  }
  public resetMultihopTtl() {
    this._multihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopTtlInput() {
    return this._multihopTtl;
  }

  // neighbor_as - computed: false, optional: false, required: true
  private _neighborAs?: string; 
  public get neighborAs() {
    return this.getStringAttribute('neighbor_as');
  }
  public set neighborAs(value: string) {
    this._neighborAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsInput() {
    return this._neighborAs;
  }
}

export class OrgDeviceprofileGatewayBgpConfigNeighborsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayBgpConfigNeighbors } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayBgpConfigNeighborsOutputReference {
    return new OrgDeviceprofileGatewayBgpConfigNeighborsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayBgpConfig {
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#auth_key OrgDeviceprofileGateway#auth_key}
  */
  readonly authKey?: string;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`, when bfd_multiplier is configured alone. Default:
  *   * 1000 if `type`==`external`
  *   * 350 `type`==`internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#bfd_minimum_interval OrgDeviceprofileGateway#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`, when bfd_minimum_interval_is_configured alone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#bfd_multiplier OrgDeviceprofileGateway#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. BFD provides faster path failure detection and is enabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disable_bfd OrgDeviceprofileGateway#disable_bfd}
  */
  readonly disableBfd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#export OrgDeviceprofileGateway#export}
  */
  readonly export?: string;
  /**
  * Default export policies if no per-neighbor policies defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#export_policy OrgDeviceprofileGateway#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. By default, either inet/net6 unicast depending on neighbor IP family (v4 or v6). For v6 neighbors, to exchange v4 nexthop, which allows dual-stack support, enable this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#extended_v4_nexthop OrgDeviceprofileGateway#extended_v4_nexthop}
  */
  readonly extendedV4Nexthop?: boolean | cdktf.IResolvable;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. `0` means disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#graceful_restart_time OrgDeviceprofileGateway#graceful_restart_time}
  */
  readonly gracefulRestartTime?: number;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. Default is 90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#hold_time OrgDeviceprofileGateway#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#import OrgDeviceprofileGateway#import}
  */
  readonly import?: string;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. Default import policies if no per-neighbor policies defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#import_policy OrgDeviceprofileGateway#import_policy}
  */
  readonly importPolicy?: string;
  /**
  * Required if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. BGPLocal AS. Value must be in range 1-4294967295 or a variable (e.g. `{{as_variable}}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#local_as OrgDeviceprofileGateway#local_as}
  */
  readonly localAs?: string;
  /**
  * Neighbor AS. If `type`==`internal`, must be equal to `local_as`. Value must be in range 1-4294967295 or a variable (e.g. `{{as_variable}}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#neighbor_as OrgDeviceprofileGateway#neighbor_as}
  */
  readonly neighborAs?: string;
  /**
  * Required if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. If per-neighbor as is desired. Property key is the neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#neighbors OrgDeviceprofileGateway#neighbors}
  */
  readonly neighbors?: { [key: string]: OrgDeviceprofileGatewayBgpConfigNeighbors } | cdktf.IResolvable;
  /**
  * Optional if `via`==`lan`. List of networks where we expect BGP neighbor to connect to/from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#networks OrgDeviceprofileGateway#networks}
  */
  readonly networks?: string[];
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. If true, we will not advertise private ASNs (AS 64512-65534) to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#no_private_as OrgDeviceprofileGateway#no_private_as}
  */
  readonly noPrivateAs?: boolean | cdktf.IResolvable;
  /**
  * Optional if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. By default, we'll re-advertise all learned BGP routers toward overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#no_readvertise_to_overlay OrgDeviceprofileGateway#no_readvertise_to_overlay}
  */
  readonly noReadvertiseToOverlay?: boolean | cdktf.IResolvable;
  /**
  * Optional if `via`==`tunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#tunnel_name OrgDeviceprofileGateway#tunnel_name}
  */
  readonly tunnelName?: string;
  /**
  * Required if `via`==`lan`, `via`==`tunnel` or `via`==`wan`. enum: `external`, `internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * enum: `lan`, `tunnel`, `vpn`, `wan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#via OrgDeviceprofileGateway#via}
  */
  readonly via: string;
  /**
  * Optional if `via`==`vpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vpn_name OrgDeviceprofileGateway#vpn_name}
  */
  readonly vpnName?: string;
  /**
  * Optional if `via`==`wan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_name OrgDeviceprofileGateway#wan_name}
  */
  readonly wanName?: string;
}

export function orgDeviceprofileGatewayBgpConfigToTerraform(struct?: OrgDeviceprofileGatewayBgpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    bfd_minimum_interval: cdktf.numberToTerraform(struct!.bfdMinimumInterval),
    bfd_multiplier: cdktf.numberToTerraform(struct!.bfdMultiplier),
    disable_bfd: cdktf.booleanToTerraform(struct!.disableBfd),
    export: cdktf.stringToTerraform(struct!.export),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    extended_v4_nexthop: cdktf.booleanToTerraform(struct!.extendedV4Nexthop),
    graceful_restart_time: cdktf.numberToTerraform(struct!.gracefulRestartTime),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    import: cdktf.stringToTerraform(struct!.import),
    import_policy: cdktf.stringToTerraform(struct!.importPolicy),
    local_as: cdktf.stringToTerraform(struct!.localAs),
    neighbor_as: cdktf.stringToTerraform(struct!.neighborAs),
    neighbors: cdktf.hashMapper(orgDeviceprofileGatewayBgpConfigNeighborsToTerraform)(struct!.neighbors),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    no_private_as: cdktf.booleanToTerraform(struct!.noPrivateAs),
    no_readvertise_to_overlay: cdktf.booleanToTerraform(struct!.noReadvertiseToOverlay),
    tunnel_name: cdktf.stringToTerraform(struct!.tunnelName),
    type: cdktf.stringToTerraform(struct!.type),
    via: cdktf.stringToTerraform(struct!.via),
    vpn_name: cdktf.stringToTerraform(struct!.vpnName),
    wan_name: cdktf.stringToTerraform(struct!.wanName),
  }
}


export function orgDeviceprofileGatewayBgpConfigToHclTerraform(struct?: OrgDeviceprofileGatewayBgpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_bfd: {
      value: cdktf.booleanToHclTerraform(struct!.disableBfd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export: {
      value: cdktf.stringToHclTerraform(struct!.export),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_v4_nexthop: {
      value: cdktf.booleanToHclTerraform(struct!.extendedV4Nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    graceful_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    import: {
      value: cdktf.stringToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_policy: {
      value: cdktf.stringToHclTerraform(struct!.importPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.stringToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_as: {
      value: cdktf.stringToHclTerraform(struct!.neighborAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbors: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayBgpConfigNeighborsToHclTerraform)(struct!.neighbors),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayBgpConfigNeighborsMap",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    no_private_as: {
      value: cdktf.booleanToHclTerraform(struct!.noPrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_readvertise_to_overlay: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToOverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_name: {
      value: cdktf.stringToHclTerraform(struct!.tunnelName),
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
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_name: {
      value: cdktf.stringToHclTerraform(struct!.vpnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_name: {
      value: cdktf.stringToHclTerraform(struct!.wanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayBgpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayBgpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._bfdMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMinimumInterval = this._bfdMinimumInterval;
    }
    if (this._bfdMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMultiplier = this._bfdMultiplier;
    }
    if (this._disableBfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBfd = this._disableBfd;
    }
    if (this._export !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._extendedV4Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedV4Nexthop = this._extendedV4Nexthop;
    }
    if (this._gracefulRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestartTime = this._gracefulRestartTime;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._importPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.importPolicy = this._importPolicy;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._neighborAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborAs = this._neighborAs;
    }
    if (this._neighbors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbors = this._neighbors?.internalValue;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._noPrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPrivateAs = this._noPrivateAs;
    }
    if (this._noReadvertiseToOverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToOverlay = this._noReadvertiseToOverlay;
    }
    if (this._tunnelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelName = this._tunnelName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    if (this._vpnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnName = this._vpnName;
    }
    if (this._wanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanName = this._wanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayBgpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKey = undefined;
      this._bfdMinimumInterval = undefined;
      this._bfdMultiplier = undefined;
      this._disableBfd = undefined;
      this._export = undefined;
      this._exportPolicy = undefined;
      this._extendedV4Nexthop = undefined;
      this._gracefulRestartTime = undefined;
      this._holdTime = undefined;
      this._import = undefined;
      this._importPolicy = undefined;
      this._localAs = undefined;
      this._neighborAs = undefined;
      this._neighbors.internalValue = undefined;
      this._networks = undefined;
      this._noPrivateAs = undefined;
      this._noReadvertiseToOverlay = undefined;
      this._tunnelName = undefined;
      this._type = undefined;
      this._via = undefined;
      this._vpnName = undefined;
      this._wanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKey = value.authKey;
      this._bfdMinimumInterval = value.bfdMinimumInterval;
      this._bfdMultiplier = value.bfdMultiplier;
      this._disableBfd = value.disableBfd;
      this._export = value.export;
      this._exportPolicy = value.exportPolicy;
      this._extendedV4Nexthop = value.extendedV4Nexthop;
      this._gracefulRestartTime = value.gracefulRestartTime;
      this._holdTime = value.holdTime;
      this._import = value.import;
      this._importPolicy = value.importPolicy;
      this._localAs = value.localAs;
      this._neighborAs = value.neighborAs;
      this._neighbors.internalValue = value.neighbors;
      this._networks = value.networks;
      this._noPrivateAs = value.noPrivateAs;
      this._noReadvertiseToOverlay = value.noReadvertiseToOverlay;
      this._tunnelName = value.tunnelName;
      this._type = value.type;
      this._via = value.via;
      this._vpnName = value.vpnName;
      this._wanName = value.wanName;
    }
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // disable_bfd - computed: false, optional: true, required: false
  private _disableBfd?: boolean | cdktf.IResolvable; 
  public get disableBfd() {
    return this.getBooleanAttribute('disable_bfd');
  }
  public set disableBfd(value: boolean | cdktf.IResolvable) {
    this._disableBfd = value;
  }
  public resetDisableBfd() {
    this._disableBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBfdInput() {
    return this._disableBfd;
  }

  // export - computed: false, optional: true, required: false
  private _export?: string; 
  public get export() {
    return this.getStringAttribute('export');
  }
  public set export(value: string) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // extended_v4_nexthop - computed: false, optional: true, required: false
  private _extendedV4Nexthop?: boolean | cdktf.IResolvable; 
  public get extendedV4Nexthop() {
    return this.getBooleanAttribute('extended_v4_nexthop');
  }
  public set extendedV4Nexthop(value: boolean | cdktf.IResolvable) {
    this._extendedV4Nexthop = value;
  }
  public resetExtendedV4Nexthop() {
    this._extendedV4Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedV4NexthopInput() {
    return this._extendedV4Nexthop;
  }

  // graceful_restart_time - computed: false, optional: true, required: false
  private _gracefulRestartTime?: number; 
  public get gracefulRestartTime() {
    return this.getNumberAttribute('graceful_restart_time');
  }
  public set gracefulRestartTime(value: number) {
    this._gracefulRestartTime = value;
  }
  public resetGracefulRestartTime() {
    this._gracefulRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimeInput() {
    return this._gracefulRestartTime;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // import - computed: false, optional: true, required: false
  private _import?: string; 
  public get import() {
    return this.getStringAttribute('import');
  }
  public set import(value: string) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // import_policy - computed: false, optional: true, required: false
  private _importPolicy?: string; 
  public get importPolicy() {
    return this.getStringAttribute('import_policy');
  }
  public set importPolicy(value: string) {
    this._importPolicy = value;
  }
  public resetImportPolicy() {
    this._importPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyInput() {
    return this._importPolicy;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // neighbor_as - computed: false, optional: true, required: false
  private _neighborAs?: string; 
  public get neighborAs() {
    return this.getStringAttribute('neighbor_as');
  }
  public set neighborAs(value: string) {
    this._neighborAs = value;
  }
  public resetNeighborAs() {
    this._neighborAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborAsInput() {
    return this._neighborAs;
  }

  // neighbors - computed: false, optional: true, required: false
  private _neighbors = new OrgDeviceprofileGatewayBgpConfigNeighborsMap(this, "neighbors");
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: { [key: string]: OrgDeviceprofileGatewayBgpConfigNeighbors } | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  public resetNeighbors() {
    this._neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // no_private_as - computed: false, optional: true, required: false
  private _noPrivateAs?: boolean | cdktf.IResolvable; 
  public get noPrivateAs() {
    return this.getBooleanAttribute('no_private_as');
  }
  public set noPrivateAs(value: boolean | cdktf.IResolvable) {
    this._noPrivateAs = value;
  }
  public resetNoPrivateAs() {
    this._noPrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPrivateAsInput() {
    return this._noPrivateAs;
  }

  // no_readvertise_to_overlay - computed: false, optional: true, required: false
  private _noReadvertiseToOverlay?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToOverlay() {
    return this.getBooleanAttribute('no_readvertise_to_overlay');
  }
  public set noReadvertiseToOverlay(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToOverlay = value;
  }
  public resetNoReadvertiseToOverlay() {
    this._noReadvertiseToOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToOverlayInput() {
    return this._noReadvertiseToOverlay;
  }

  // tunnel_name - computed: false, optional: true, required: false
  private _tunnelName?: string; 
  public get tunnelName() {
    return this.getStringAttribute('tunnel_name');
  }
  public set tunnelName(value: string) {
    this._tunnelName = value;
  }
  public resetTunnelName() {
    this._tunnelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNameInput() {
    return this._tunnelName;
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

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }

  // vpn_name - computed: false, optional: true, required: false
  private _vpnName?: string; 
  public get vpnName() {
    return this.getStringAttribute('vpn_name');
  }
  public set vpnName(value: string) {
    this._vpnName = value;
  }
  public resetVpnName() {
    this._vpnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNameInput() {
    return this._vpnName;
  }

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }
}

export class OrgDeviceprofileGatewayBgpConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayBgpConfig } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayBgpConfigOutputReference {
    return new OrgDeviceprofileGatewayBgpConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip OrgDeviceprofileGateway#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip6 OrgDeviceprofileGateway#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
}

export function orgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsToTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsToHclTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings | cdktf.IResolvable): any {
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
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
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

export class OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
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
      this._ip6 = value.ip6;
      this._name = value.name;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // name - computed: false, optional: true, required: false
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
}

export class OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsOutputReference {
    return new OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayDhcpdConfigConfigOptions {
  /**
  * enum: `boolean`, `hex`, `int16`, `int32`, `ip`, `string`, `uint16`, `uint32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#value OrgDeviceprofileGateway#value}
  */
  readonly value?: string;
}

export function orgDeviceprofileGatewayDhcpdConfigConfigOptionsToTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function orgDeviceprofileGatewayDhcpdConfigConfigOptionsToHclTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfigOptions | cdktf.IResolvable): any {
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

export class OrgDeviceprofileGatewayDhcpdConfigConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayDhcpdConfigConfigOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgDeviceprofileGatewayDhcpdConfigConfigOptions | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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
}

export class OrgDeviceprofileGatewayDhcpdConfigConfigOptionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigOptions } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayDhcpdConfigConfigOptionsOutputReference {
    return new OrgDeviceprofileGatewayDhcpdConfigConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated {
  /**
  * enum: `boolean`, `hex`, `int16`, `int32`, `ip`, `string`, `uint16`, `uint32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#value OrgDeviceprofileGateway#value}
  */
  readonly value?: string;
}

export function orgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedToTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function orgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedToHclTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated | cdktf.IResolvable): any {
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

export class OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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
}

export class OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedOutputReference {
    return new OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayDhcpdConfigConfig {
  /**
  * If `type`==`local` or `type6`==`local` - optional, if not defined, system one will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_servers OrgDeviceprofileGateway#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * If `type`==`local` or `type6`==`local` - optional, if not defined, system one will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_suffix OrgDeviceprofileGateway#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * If `type`==`local` or `type6`==`local`. Property key is the MAC Address. Format is `[0-9a-f]{12}` (e.g. "5684dae9ac8b")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#fixed_bindings OrgDeviceprofileGateway#fixed_bindings}
  */
  readonly fixedBindings?: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings } | cdktf.IResolvable;
  /**
  * If `type`==`local` - optional, `ip` will be used if not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway OrgDeviceprofileGateway#gateway}
  */
  readonly gateway?: string;
  /**
  * If `type6`==`local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip6_end OrgDeviceprofileGateway#ip6_end}
  */
  readonly ip6End?: string;
  /**
  * If `type6`==`local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip6_start OrgDeviceprofileGateway#ip6_start}
  */
  readonly ip6Start?: string;
  /**
  * If `type`==`local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip_end OrgDeviceprofileGateway#ip_end}
  */
  readonly ipEnd?: string;
  /**
  * If `type`==`local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip_start OrgDeviceprofileGateway#ip_start}
  */
  readonly ipStart?: string;
  /**
  * In seconds, lease time has to be between 3600 [1hr] - 604800 [1 week], default is 86400 [1 day]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lease_time OrgDeviceprofileGateway#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * If `type`==`local` or `type6`==`local`. Property key is the DHCP option number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#options OrgDeviceprofileGateway#options}
  */
  readonly options?: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigOptions } | cdktf.IResolvable;
  /**
  * `server_id_override`==`true` means the device, when acts as DHCP relay and forwards DHCP responses from DHCP server to clients, 
  * should overwrite the Sever Identifier option (i.e. DHCP option 54) in DHCP responses with its own IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#server_id_override OrgDeviceprofileGateway#server_id_override}
  */
  readonly serverIdOverride?: boolean | cdktf.IResolvable;
  /**
  * If `type`==`relay`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#servers OrgDeviceprofileGateway#servers}
  */
  readonly servers?: string[];
  /**
  * If `type6`==`relay`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#serversv6 OrgDeviceprofileGateway#serversv6}
  */
  readonly serversv6?: string[];
  /**
  * enum: `local` (DHCP Server), `none`, `relay` (DHCP Relay)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * enum: `local` (DHCP Server), `none`, `relay` (DHCP Relay)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type6 OrgDeviceprofileGateway#type6}
  */
  readonly type6?: string;
  /**
  * If `type`==`local` or `type6`==`local`. Property key is <enterprise number>:<sub option code>, with
  *   * enterprise number: 1-65535 (https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers)
  *   * sub option code: 1-255, sub-option code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vendor_encapsulated OrgDeviceprofileGateway#vendor_encapsulated}
  */
  readonly vendorEncapsulated?: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated } | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayDhcpdConfigConfigToTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffix),
    fixed_bindings: cdktf.hashMapper(orgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsToTerraform)(struct!.fixedBindings),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip6_end: cdktf.stringToTerraform(struct!.ip6End),
    ip6_start: cdktf.stringToTerraform(struct!.ip6Start),
    ip_end: cdktf.stringToTerraform(struct!.ipEnd),
    ip_start: cdktf.stringToTerraform(struct!.ipStart),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    options: cdktf.hashMapper(orgDeviceprofileGatewayDhcpdConfigConfigOptionsToTerraform)(struct!.options),
    server_id_override: cdktf.booleanToTerraform(struct!.serverIdOverride),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
    serversv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serversv6),
    type: cdktf.stringToTerraform(struct!.type),
    type6: cdktf.stringToTerraform(struct!.type6),
    vendor_encapsulated: cdktf.hashMapper(orgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedToTerraform)(struct!.vendorEncapsulated),
  }
}


export function orgDeviceprofileGatewayDhcpdConfigConfigToHclTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_suffix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSuffix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fixed_bindings: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsToHclTerraform)(struct!.fixedBindings),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsMap",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_end: {
      value: cdktf.stringToHclTerraform(struct!.ip6End),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_start: {
      value: cdktf.stringToHclTerraform(struct!.ip6Start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_end: {
      value: cdktf.stringToHclTerraform(struct!.ipEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_start: {
      value: cdktf.stringToHclTerraform(struct!.ipStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayDhcpdConfigConfigOptionsToHclTerraform)(struct!.options),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayDhcpdConfigConfigOptionsMap",
    },
    server_id_override: {
      value: cdktf.booleanToHclTerraform(struct!.serverIdOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    serversv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serversv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type6: {
      value: cdktf.stringToHclTerraform(struct!.type6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_encapsulated: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedToHclTerraform)(struct!.vendorEncapsulated),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayDhcpdConfigConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayDhcpdConfigConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._fixedBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedBindings = this._fixedBindings?.internalValue;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ip6End !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6End = this._ip6End;
    }
    if (this._ip6Start !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Start = this._ip6Start;
    }
    if (this._ipEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEnd = this._ipEnd;
    }
    if (this._ipStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipStart = this._ipStart;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._serverIdOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdOverride = this._serverIdOverride;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._serversv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversv6 = this._serversv6;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._type6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.type6 = this._type6;
    }
    if (this._vendorEncapsulated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorEncapsulated = this._vendorEncapsulated?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayDhcpdConfigConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServers = undefined;
      this._dnsSuffix = undefined;
      this._fixedBindings.internalValue = undefined;
      this._gateway = undefined;
      this._ip6End = undefined;
      this._ip6Start = undefined;
      this._ipEnd = undefined;
      this._ipStart = undefined;
      this._leaseTime = undefined;
      this._options.internalValue = undefined;
      this._serverIdOverride = undefined;
      this._servers = undefined;
      this._serversv6 = undefined;
      this._type = undefined;
      this._type6 = undefined;
      this._vendorEncapsulated.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServers = value.dnsServers;
      this._dnsSuffix = value.dnsSuffix;
      this._fixedBindings.internalValue = value.fixedBindings;
      this._gateway = value.gateway;
      this._ip6End = value.ip6End;
      this._ip6Start = value.ip6Start;
      this._ipEnd = value.ipEnd;
      this._ipStart = value.ipStart;
      this._leaseTime = value.leaseTime;
      this._options.internalValue = value.options;
      this._serverIdOverride = value.serverIdOverride;
      this._servers = value.servers;
      this._serversv6 = value.serversv6;
      this._type = value.type;
      this._type6 = value.type6;
      this._vendorEncapsulated.internalValue = value.vendorEncapsulated;
    }
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string[]; 
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string[]) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // fixed_bindings - computed: false, optional: true, required: false
  private _fixedBindings = new OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindingsMap(this, "fixed_bindings");
  public get fixedBindings() {
    return this._fixedBindings;
  }
  public putFixedBindings(value: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigFixedBindings } | cdktf.IResolvable) {
    this._fixedBindings.internalValue = value;
  }
  public resetFixedBindings() {
    this._fixedBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedBindingsInput() {
    return this._fixedBindings.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip6_end - computed: false, optional: true, required: false
  private _ip6End?: string; 
  public get ip6End() {
    return this.getStringAttribute('ip6_end');
  }
  public set ip6End(value: string) {
    this._ip6End = value;
  }
  public resetIp6End() {
    this._ip6End = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6EndInput() {
    return this._ip6End;
  }

  // ip6_start - computed: false, optional: true, required: false
  private _ip6Start?: string; 
  public get ip6Start() {
    return this.getStringAttribute('ip6_start');
  }
  public set ip6Start(value: string) {
    this._ip6Start = value;
  }
  public resetIp6Start() {
    this._ip6Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6StartInput() {
    return this._ip6Start;
  }

  // ip_end - computed: false, optional: true, required: false
  private _ipEnd?: string; 
  public get ipEnd() {
    return this.getStringAttribute('ip_end');
  }
  public set ipEnd(value: string) {
    this._ipEnd = value;
  }
  public resetIpEnd() {
    this._ipEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndInput() {
    return this._ipEnd;
  }

  // ip_start - computed: false, optional: true, required: false
  private _ipStart?: string; 
  public get ipStart() {
    return this.getStringAttribute('ip_start');
  }
  public set ipStart(value: string) {
    this._ipStart = value;
  }
  public resetIpStart() {
    this._ipStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStartInput() {
    return this._ipStart;
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

  // options - computed: false, optional: true, required: false
  private _options = new OrgDeviceprofileGatewayDhcpdConfigConfigOptionsMap(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigOptions } | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // server_id_override - computed: false, optional: true, required: false
  private _serverIdOverride?: boolean | cdktf.IResolvable; 
  public get serverIdOverride() {
    return this.getBooleanAttribute('server_id_override');
  }
  public set serverIdOverride(value: boolean | cdktf.IResolvable) {
    this._serverIdOverride = value;
  }
  public resetServerIdOverride() {
    this._serverIdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdOverrideInput() {
    return this._serverIdOverride;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // serversv6 - computed: false, optional: true, required: false
  private _serversv6?: string[]; 
  public get serversv6() {
    return this.getListAttribute('serversv6');
  }
  public set serversv6(value: string[]) {
    this._serversv6 = value;
  }
  public resetServersv6() {
    this._serversv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversv6Input() {
    return this._serversv6;
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

  // type6 - computed: false, optional: true, required: false
  private _type6?: string; 
  public get type6() {
    return this.getStringAttribute('type6');
  }
  public set type6(value: string) {
    this._type6 = value;
  }
  public resetType6() {
    this._type6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get type6Input() {
    return this._type6;
  }

  // vendor_encapsulated - computed: false, optional: true, required: false
  private _vendorEncapsulated = new OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulatedMap(this, "vendor_encapsulated");
  public get vendorEncapsulated() {
    return this._vendorEncapsulated;
  }
  public putVendorEncapsulated(value: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfigVendorEncapsulated } | cdktf.IResolvable) {
    this._vendorEncapsulated.internalValue = value;
  }
  public resetVendorEncapsulated() {
    this._vendorEncapsulated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorEncapsulatedInput() {
    return this._vendorEncapsulated.internalValue;
  }
}

export class OrgDeviceprofileGatewayDhcpdConfigConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfig } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayDhcpdConfigConfigOutputReference {
    return new OrgDeviceprofileGatewayDhcpdConfigConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayDhcpdConfig {
  /**
  * Property key is the network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#config OrgDeviceprofileGateway#config}
  */
  readonly config?: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfig } | cdktf.IResolvable;
  /**
  * If set to `false`, disable the DHCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayDhcpdConfigToTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(orgDeviceprofileGatewayDhcpdConfigConfigToTerraform)(struct!.config),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileGatewayDhcpdConfigToHclTerraform(struct?: OrgDeviceprofileGatewayDhcpdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayDhcpdConfigConfigToHclTerraform)(struct!.config),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayDhcpdConfigConfigMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayDhcpdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayDhcpdConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayDhcpdConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._enabled = value.enabled;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new OrgDeviceprofileGatewayDhcpdConfigConfigMap(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: { [key: string]: OrgDeviceprofileGatewayDhcpdConfigConfig } | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileGatewayExtraRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#via OrgDeviceprofileGateway#via}
  */
  readonly via: string;
}

export function orgDeviceprofileGatewayExtraRoutesToTerraform(struct?: OrgDeviceprofileGatewayExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function orgDeviceprofileGatewayExtraRoutesToHclTerraform(struct?: OrgDeviceprofileGatewayExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayExtraRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayExtraRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayExtraRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._via = value.via;
    }
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class OrgDeviceprofileGatewayExtraRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayExtraRoutes } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayExtraRoutesOutputReference {
    return new OrgDeviceprofileGatewayExtraRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayExtraRoutes6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#via OrgDeviceprofileGateway#via}
  */
  readonly via: string;
}

export function orgDeviceprofileGatewayExtraRoutes6ToTerraform(struct?: OrgDeviceprofileGatewayExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function orgDeviceprofileGatewayExtraRoutes6ToHclTerraform(struct?: OrgDeviceprofileGatewayExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayExtraRoutes6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayExtraRoutes6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayExtraRoutes6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._via = value.via;
    }
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class OrgDeviceprofileGatewayExtraRoutes6Map extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayExtraRoutes6 } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayExtraRoutes6OutputReference {
    return new OrgDeviceprofileGatewayExtraRoutes6OutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayIdpProfilesOverwritesMatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#attack_name OrgDeviceprofileGateway#attack_name}
  */
  readonly attackName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dst_subnet OrgDeviceprofileGateway#dst_subnet}
  */
  readonly dstSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#severity OrgDeviceprofileGateway#severity}
  */
  readonly severity?: string[];
}

export function orgDeviceprofileGatewayIdpProfilesOverwritesMatchingToTerraform(struct?: OrgDeviceprofileGatewayIdpProfilesOverwritesMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attackName),
    dst_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstSubnet),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
  }
}


export function orgDeviceprofileGatewayIdpProfilesOverwritesMatchingToHclTerraform(struct?: OrgDeviceprofileGatewayIdpProfilesOverwritesMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attackName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dst_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstSubnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayIdpProfilesOverwritesMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayIdpProfilesOverwritesMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackName = this._attackName;
    }
    if (this._dstSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSubnet = this._dstSubnet;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayIdpProfilesOverwritesMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attackName = undefined;
      this._dstSubnet = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attackName = value.attackName;
      this._dstSubnet = value.dstSubnet;
      this._severity = value.severity;
    }
  }

  // attack_name - computed: false, optional: true, required: false
  private _attackName?: string[]; 
  public get attackName() {
    return this.getListAttribute('attack_name');
  }
  public set attackName(value: string[]) {
    this._attackName = value;
  }
  public resetAttackName() {
    this._attackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackNameInput() {
    return this._attackName;
  }

  // dst_subnet - computed: false, optional: true, required: false
  private _dstSubnet?: string[]; 
  public get dstSubnet() {
    return this.getListAttribute('dst_subnet');
  }
  public set dstSubnet(value: string[]) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return this.getListAttribute('severity');
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface OrgDeviceprofileGatewayIdpProfilesOverwrites {
  /**
  * enum:
  *   * alert (default)
  *   * drop: silently dropping packets
  *   * close: notify client/server to close connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#action OrgDeviceprofileGateway#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#matching OrgDeviceprofileGateway#matching}
  */
  readonly matching?: OrgDeviceprofileGatewayIdpProfilesOverwritesMatching;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
}

export function orgDeviceprofileGatewayIdpProfilesOverwritesToTerraform(struct?: OrgDeviceprofileGatewayIdpProfilesOverwrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    matching: orgDeviceprofileGatewayIdpProfilesOverwritesMatchingToTerraform(struct!.matching),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgDeviceprofileGatewayIdpProfilesOverwritesToHclTerraform(struct?: OrgDeviceprofileGatewayIdpProfilesOverwrites | cdktf.IResolvable): any {
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
    matching: {
      value: orgDeviceprofileGatewayIdpProfilesOverwritesMatchingToHclTerraform(struct!.matching),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayIdpProfilesOverwritesMatching",
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

export class OrgDeviceprofileGatewayIdpProfilesOverwritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayIdpProfilesOverwrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._matching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matching = this._matching?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayIdpProfilesOverwrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._matching.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._matching.internalValue = value.matching;
      this._name = value.name;
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

  // matching - computed: false, optional: true, required: false
  private _matching = new OrgDeviceprofileGatewayIdpProfilesOverwritesMatchingOutputReference(this, "matching");
  public get matching() {
    return this._matching;
  }
  public putMatching(value: OrgDeviceprofileGatewayIdpProfilesOverwritesMatching) {
    this._matching.internalValue = value;
  }
  public resetMatching() {
    this._matching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching.internalValue;
  }

  // name - computed: false, optional: true, required: false
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
}

export class OrgDeviceprofileGatewayIdpProfilesOverwritesList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayIdpProfilesOverwrites[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayIdpProfilesOverwritesOutputReference {
    return new OrgDeviceprofileGatewayIdpProfilesOverwritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayIdpProfiles {
  /**
  * enum: `critical`, `standard`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#base_profile OrgDeviceprofileGateway#base_profile}
  */
  readonly baseProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#org_id OrgDeviceprofileGateway#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#overwrites OrgDeviceprofileGateway#overwrites}
  */
  readonly overwrites?: OrgDeviceprofileGatewayIdpProfilesOverwrites[] | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayIdpProfilesToTerraform(struct?: OrgDeviceprofileGatewayIdpProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_profile: cdktf.stringToTerraform(struct!.baseProfile),
    name: cdktf.stringToTerraform(struct!.name),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    overwrites: cdktf.listMapper(orgDeviceprofileGatewayIdpProfilesOverwritesToTerraform, false)(struct!.overwrites),
  }
}


export function orgDeviceprofileGatewayIdpProfilesToHclTerraform(struct?: OrgDeviceprofileGatewayIdpProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_profile: {
      value: cdktf.stringToHclTerraform(struct!.baseProfile),
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
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrites: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayIdpProfilesOverwritesToHclTerraform, false)(struct!.overwrites),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileGatewayIdpProfilesOverwritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayIdpProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayIdpProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseProfile = this._baseProfile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._overwrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrites = this._overwrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayIdpProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseProfile = undefined;
      this._name = undefined;
      this._orgId = undefined;
      this._overwrites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseProfile = value.baseProfile;
      this._name = value.name;
      this._orgId = value.orgId;
      this._overwrites.internalValue = value.overwrites;
    }
  }

  // base_profile - computed: false, optional: true, required: false
  private _baseProfile?: string; 
  public get baseProfile() {
    return this.getStringAttribute('base_profile');
  }
  public set baseProfile(value: string) {
    this._baseProfile = value;
  }
  public resetBaseProfile() {
    this._baseProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProfileInput() {
    return this._baseProfile;
  }

  // name - computed: false, optional: true, required: false
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // overwrites - computed: false, optional: true, required: false
  private _overwrites = new OrgDeviceprofileGatewayIdpProfilesOverwritesList(this, "overwrites", false);
  public get overwrites() {
    return this._overwrites;
  }
  public putOverwrites(value: OrgDeviceprofileGatewayIdpProfilesOverwrites[] | cdktf.IResolvable) {
    this._overwrites.internalValue = value;
  }
  public resetOverwrites() {
    this._overwrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwritesInput() {
    return this._overwrites.internalValue;
  }
}

export class OrgDeviceprofileGatewayIdpProfilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayIdpProfiles } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayIdpProfilesOutputReference {
    return new OrgDeviceprofileGatewayIdpProfilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayIpConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip OrgDeviceprofileGateway#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip6 OrgDeviceprofileGateway#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#netmask OrgDeviceprofileGateway#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#netmask6 OrgDeviceprofileGateway#netmask6}
  */
  readonly netmask6?: string;
  /**
  * Optional list of secondary IPs in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#secondary_ips OrgDeviceprofileGateway#secondary_ips}
  */
  readonly secondaryIps?: string[];
  /**
  * enum: `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * enum: `autoconf`, `dhcp`, `disabled`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type6 OrgDeviceprofileGateway#type6}
  */
  readonly type6?: string;
}

export function orgDeviceprofileGatewayIpConfigsToTerraform(struct?: OrgDeviceprofileGatewayIpConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    netmask6: cdktf.stringToTerraform(struct!.netmask6),
    secondary_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryIps),
    type: cdktf.stringToTerraform(struct!.type),
    type6: cdktf.stringToTerraform(struct!.type6),
  }
}


export function orgDeviceprofileGatewayIpConfigsToHclTerraform(struct?: OrgDeviceprofileGatewayIpConfigs | cdktf.IResolvable): any {
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
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask6: {
      value: cdktf.stringToHclTerraform(struct!.netmask6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondaryIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type6: {
      value: cdktf.stringToHclTerraform(struct!.type6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayIpConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayIpConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._netmask6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask6 = this._netmask6;
    }
    if (this._secondaryIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIps = this._secondaryIps;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._type6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.type6 = this._type6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayIpConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._netmask = undefined;
      this._netmask6 = undefined;
      this._secondaryIps = undefined;
      this._type = undefined;
      this._type6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._netmask = value.netmask;
      this._netmask6 = value.netmask6;
      this._secondaryIps = value.secondaryIps;
      this._type = value.type;
      this._type6 = value.type6;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // netmask6 - computed: false, optional: true, required: false
  private _netmask6?: string; 
  public get netmask6() {
    return this.getStringAttribute('netmask6');
  }
  public set netmask6(value: string) {
    this._netmask6 = value;
  }
  public resetNetmask6() {
    this._netmask6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmask6Input() {
    return this._netmask6;
  }

  // secondary_ips - computed: true, optional: true, required: false
  private _secondaryIps?: string[]; 
  public get secondaryIps() {
    return this.getListAttribute('secondary_ips');
  }
  public set secondaryIps(value: string[]) {
    this._secondaryIps = value;
  }
  public resetSecondaryIps() {
    this._secondaryIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpsInput() {
    return this._secondaryIps;
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

  // type6 - computed: false, optional: true, required: false
  private _type6?: string; 
  public get type6() {
    return this.getStringAttribute('type6');
  }
  public set type6(value: string) {
    this._type6 = value;
  }
  public resetType6() {
    this._type6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get type6Input() {
    return this._type6;
  }
}

export class OrgDeviceprofileGatewayIpConfigsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayIpConfigs } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayIpConfigsOutputReference {
    return new OrgDeviceprofileGatewayIpConfigsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksInternalAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayNetworksInternalAccessToTerraform(struct?: OrgDeviceprofileGatewayNetworksInternalAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileGatewayNetworksInternalAccessToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksInternalAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksInternalAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayNetworksInternalAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksInternalAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat {
  /**
  * The Destination NAT destination IP Address. Must be an IP (i.e. "192.168.70.30") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_ip OrgDeviceprofileGateway#internal_ip}
  */
  readonly internalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * The Destination NAT destination IP Address. Must be a Port (i.e. "443") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#port OrgDeviceprofileGateway#port}
  */
  readonly port?: string;
  /**
  * SRX Only. If not set, we configure the nat policies against all WAN ports for simplicity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_name OrgDeviceprofileGateway#wan_name}
  */
  readonly wanName?: string;
}

export function orgDeviceprofileGatewayNetworksInternetAccessDestinationNatToTerraform(struct?: OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    wan_name: cdktf.stringToTerraform(struct!.wanName),
  }
}


export function orgDeviceprofileGatewayNetworksInternetAccessDestinationNatToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_name: {
      value: cdktf.stringToHclTerraform(struct!.wanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksInternetAccessDestinationNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._wanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanName = this._wanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
      this._port = undefined;
      this._wanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
      this._port = value.port;
      this._wanName = value.wanName;
    }
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }
}

export class OrgDeviceprofileGatewayNetworksInternetAccessDestinationNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksInternetAccessDestinationNatOutputReference {
    return new OrgDeviceprofileGatewayNetworksInternetAccessDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksInternetAccessStaticNat {
  /**
  * The Static NAT destination IP Address. Must be an IP Address (i.e. "192.168.70.3") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_ip OrgDeviceprofileGateway#internal_ip}
  */
  readonly internalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name: string;
  /**
  * SRX Only. If not set, we configure the nat policies against all WAN ports for simplicity. Can be a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_name OrgDeviceprofileGateway#wan_name}
  */
  readonly wanName?: string;
}

export function orgDeviceprofileGatewayNetworksInternetAccessStaticNatToTerraform(struct?: OrgDeviceprofileGatewayNetworksInternetAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
    wan_name: cdktf.stringToTerraform(struct!.wanName),
  }
}


export function orgDeviceprofileGatewayNetworksInternetAccessStaticNatToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksInternetAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
    wan_name: {
      value: cdktf.stringToHclTerraform(struct!.wanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksInternetAccessStaticNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksInternetAccessStaticNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._wanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanName = this._wanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksInternetAccessStaticNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
      this._wanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
      this._wanName = value.wanName;
    }
  }

  // internal_ip - computed: false, optional: false, required: true
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
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

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }
}

export class OrgDeviceprofileGatewayNetworksInternetAccessStaticNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksInternetAccessStaticNat } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksInternetAccessStaticNatOutputReference {
    return new OrgDeviceprofileGatewayNetworksInternetAccessStaticNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksInternetAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#create_simple_service_policy OrgDeviceprofileGateway#create_simple_service_policy}
  */
  readonly createSimpleServicePolicy?: boolean | cdktf.IResolvable;
  /**
  * Property key can be an External IP (i.e. "63.16.0.3"), an External IP:Port (i.e. "63.16.0.3:443"), an External Port (i.e. ":443"), an External CIDR (i.e. "63.16.0.0/30"), an External CIDR:Port (i.e. "63.16.0.0/30:443") or a Variable (i.e. "{{myvar}}"). At least one of the `internal_ip` or `port` must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#destination_nat OrgDeviceprofileGateway#destination_nat}
  */
  readonly destinationNat?: { [key: string]: OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * By default, all access is allowed, to only allow certain traffic, make `restricted`=`true` and define service_policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#restricted OrgDeviceprofileGateway#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * Property key may be an External IP Address (i.e. "63.16.0.3"), a CIDR (i.e. "63.16.0.12/20") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#static_nat OrgDeviceprofileGateway#static_nat}
  */
  readonly staticNat?: { [key: string]: OrgDeviceprofileGatewayNetworksInternetAccessStaticNat } | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayNetworksInternetAccessToTerraform(struct?: OrgDeviceprofileGatewayNetworksInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_simple_service_policy: cdktf.booleanToTerraform(struct!.createSimpleServicePolicy),
    destination_nat: cdktf.hashMapper(orgDeviceprofileGatewayNetworksInternetAccessDestinationNatToTerraform)(struct!.destinationNat),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    restricted: cdktf.booleanToTerraform(struct!.restricted),
    static_nat: cdktf.hashMapper(orgDeviceprofileGatewayNetworksInternetAccessStaticNatToTerraform)(struct!.staticNat),
  }
}


export function orgDeviceprofileGatewayNetworksInternetAccessToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_simple_service_policy: {
      value: cdktf.booleanToHclTerraform(struct!.createSimpleServicePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_nat: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksInternetAccessDestinationNatToHclTerraform)(struct!.destinationNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksInternetAccessDestinationNatMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted: {
      value: cdktf.booleanToHclTerraform(struct!.restricted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_nat: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksInternetAccessStaticNatToHclTerraform)(struct!.staticNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksInternetAccessStaticNatMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksInternetAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayNetworksInternetAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createSimpleServicePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createSimpleServicePolicy = this._createSimpleServicePolicy;
    }
    if (this._destinationNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNat = this._destinationNat?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._restricted !== undefined) {
      hasAnyValues = true;
      internalValueResult.restricted = this._restricted;
    }
    if (this._staticNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNat = this._staticNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksInternetAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createSimpleServicePolicy = undefined;
      this._destinationNat.internalValue = undefined;
      this._enabled = undefined;
      this._restricted = undefined;
      this._staticNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createSimpleServicePolicy = value.createSimpleServicePolicy;
      this._destinationNat.internalValue = value.destinationNat;
      this._enabled = value.enabled;
      this._restricted = value.restricted;
      this._staticNat.internalValue = value.staticNat;
    }
  }

  // create_simple_service_policy - computed: true, optional: true, required: false
  private _createSimpleServicePolicy?: boolean | cdktf.IResolvable; 
  public get createSimpleServicePolicy() {
    return this.getBooleanAttribute('create_simple_service_policy');
  }
  public set createSimpleServicePolicy(value: boolean | cdktf.IResolvable) {
    this._createSimpleServicePolicy = value;
  }
  public resetCreateSimpleServicePolicy() {
    this._createSimpleServicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSimpleServicePolicyInput() {
    return this._createSimpleServicePolicy;
  }

  // destination_nat - computed: false, optional: true, required: false
  private _destinationNat = new OrgDeviceprofileGatewayNetworksInternetAccessDestinationNatMap(this, "destination_nat");
  public get destinationNat() {
    return this._destinationNat;
  }
  public putDestinationNat(value: { [key: string]: OrgDeviceprofileGatewayNetworksInternetAccessDestinationNat } | cdktf.IResolvable) {
    this._destinationNat.internalValue = value;
  }
  public resetDestinationNat() {
    this._destinationNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNatInput() {
    return this._destinationNat.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // restricted - computed: true, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // static_nat - computed: false, optional: true, required: false
  private _staticNat = new OrgDeviceprofileGatewayNetworksInternetAccessStaticNatMap(this, "static_nat");
  public get staticNat() {
    return this._staticNat;
  }
  public putStaticNat(value: { [key: string]: OrgDeviceprofileGatewayNetworksInternetAccessStaticNat } | cdktf.IResolvable) {
    this._staticNat.internalValue = value;
  }
  public resetStaticNat() {
    this._staticNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat.internalValue;
  }
}
export interface OrgDeviceprofileGatewayNetworksMulticastGroups {
  /**
  * RP (rendezvous point) IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#rp_ip OrgDeviceprofileGateway#rp_ip}
  */
  readonly rpIp?: string;
}

export function orgDeviceprofileGatewayNetworksMulticastGroupsToTerraform(struct?: OrgDeviceprofileGatewayNetworksMulticastGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rp_ip: cdktf.stringToTerraform(struct!.rpIp),
  }
}


export function orgDeviceprofileGatewayNetworksMulticastGroupsToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksMulticastGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rp_ip: {
      value: cdktf.stringToHclTerraform(struct!.rpIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksMulticastGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksMulticastGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpIp = this._rpIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksMulticastGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpIp = value.rpIp;
    }
  }

  // rp_ip - computed: false, optional: true, required: false
  private _rpIp?: string; 
  public get rpIp() {
    return this.getStringAttribute('rp_ip');
  }
  public set rpIp(value: string) {
    this._rpIp = value;
  }
  public resetRpIp() {
    this._rpIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpIpInput() {
    return this._rpIp;
  }
}

export class OrgDeviceprofileGatewayNetworksMulticastGroupsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksMulticastGroups } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksMulticastGroupsOutputReference {
    return new OrgDeviceprofileGatewayNetworksMulticastGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksMulticast {
  /**
  * If the network will only be the source of the multicast traffic, IGMP can be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disable_igmp OrgDeviceprofileGateway#disable_igmp}
  */
  readonly disableIgmp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Group address to RP (rendezvous point) mapping. Property Key is the CIDR (example "225.1.0.3/32")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#groups OrgDeviceprofileGateway#groups}
  */
  readonly groups?: { [key: string]: OrgDeviceprofileGatewayNetworksMulticastGroups } | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayNetworksMulticastToTerraform(struct?: OrgDeviceprofileGatewayNetworksMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_igmp: cdktf.booleanToTerraform(struct!.disableIgmp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    groups: cdktf.hashMapper(orgDeviceprofileGatewayNetworksMulticastGroupsToTerraform)(struct!.groups),
  }
}


export function orgDeviceprofileGatewayNetworksMulticastToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_igmp: {
      value: cdktf.booleanToHclTerraform(struct!.disableIgmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksMulticastGroupsToHclTerraform)(struct!.groups),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksMulticastGroupsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayNetworksMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableIgmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIgmp = this._disableIgmp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksMulticast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableIgmp = undefined;
      this._enabled = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableIgmp = value.disableIgmp;
      this._enabled = value.enabled;
      this._groups.internalValue = value.groups;
    }
  }

  // disable_igmp - computed: true, optional: true, required: false
  private _disableIgmp?: boolean | cdktf.IResolvable; 
  public get disableIgmp() {
    return this.getBooleanAttribute('disable_igmp');
  }
  public set disableIgmp(value: boolean | cdktf.IResolvable) {
    this._disableIgmp = value;
  }
  public resetDisableIgmp() {
    this._disableIgmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIgmpInput() {
    return this._disableIgmp;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new OrgDeviceprofileGatewayNetworksMulticastGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: { [key: string]: OrgDeviceprofileGatewayNetworksMulticastGroups } | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}
export interface OrgDeviceprofileGatewayNetworksTenants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#addresses OrgDeviceprofileGateway#addresses}
  */
  readonly addresses?: string[];
}

export function orgDeviceprofileGatewayNetworksTenantsToTerraform(struct?: OrgDeviceprofileGatewayNetworksTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
  }
}


export function orgDeviceprofileGatewayNetworksTenantsToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksTenantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }
}

export class OrgDeviceprofileGatewayNetworksTenantsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksTenants } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksTenantsOutputReference {
    return new OrgDeviceprofileGatewayNetworksTenantsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat {
  /**
  * The Destination NAT destination IP Address. Must be an IP (i.e. "192.168.70.30") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_ip OrgDeviceprofileGateway#internal_ip}
  */
  readonly internalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#port OrgDeviceprofileGateway#port}
  */
  readonly port?: string;
}

export function orgDeviceprofileGatewayNetworksVpnAccessDestinationNatToTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function orgDeviceprofileGatewayNetworksVpnAccessDestinationNatToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksVpnAccessDestinationNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class OrgDeviceprofileGatewayNetworksVpnAccessDestinationNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksVpnAccessDestinationNatOutputReference {
    return new OrgDeviceprofileGatewayNetworksVpnAccessDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksVpnAccessSourceNat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#external_ip OrgDeviceprofileGateway#external_ip}
  */
  readonly externalIp?: string;
}

export function orgDeviceprofileGatewayNetworksVpnAccessSourceNatToTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccessSourceNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ip: cdktf.stringToTerraform(struct!.externalIp),
  }
}


export function orgDeviceprofileGatewayNetworksVpnAccessSourceNatToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccessSourceNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksVpnAccessSourceNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayNetworksVpnAccessSourceNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksVpnAccessSourceNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
    }
  }

  // external_ip - computed: true, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }
}
export interface OrgDeviceprofileGatewayNetworksVpnAccessStaticNat {
  /**
  * The Static NAT destination IP Address. Must be an IP Address (i.e. "192.168.70.3") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_ip OrgDeviceprofileGateway#internal_ip}
  */
  readonly internalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name: string;
}

export function orgDeviceprofileGatewayNetworksVpnAccessStaticNatToTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgDeviceprofileGatewayNetworksVpnAccessStaticNatToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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

export class OrgDeviceprofileGatewayNetworksVpnAccessStaticNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksVpnAccessStaticNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksVpnAccessStaticNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
    }
  }

  // internal_ip - computed: true, optional: false, required: true
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name - computed: true, optional: false, required: true
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

export class OrgDeviceprofileGatewayNetworksVpnAccessStaticNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccessStaticNat } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksVpnAccessStaticNatOutputReference {
    return new OrgDeviceprofileGatewayNetworksVpnAccessStaticNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworksVpnAccess {
  /**
  * If `routed`==`true`, whether to advertise an aggregated subnet toward HUB this is useful when there are multiple networks on SPOKE's side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#advertised_subnet OrgDeviceprofileGateway#advertised_subnet}
  */
  readonly advertisedSubnet?: string;
  /**
  * Whether to allow ping from vpn into this routed network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#allow_ping OrgDeviceprofileGateway#allow_ping}
  */
  readonly allowPing?: boolean | cdktf.IResolvable;
  /**
  * Property key can be an External IP (i.e. "63.16.0.3"), an External IP:Port (i.e. "63.16.0.3:443"), an External Port (i.e. ":443"), an External CIDR (i.e. "63.16.0.0/30"), an External CIDR:Port (i.e. "63.16.0.0/30:443") or a Variable (i.e. "{{myvar}}"). At least one of the `internal_ip` or `port` must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#destination_nat OrgDeviceprofileGateway#destination_nat}
  */
  readonly destinationNat?: { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat } | cdktf.IResolvable;
  /**
  * If `routed`==`false` (usually at Spoke), but some hosts needs to be reachable from Hub, a subnet is required to create and advertise the route to Hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#nat_pool OrgDeviceprofileGateway#nat_pool}
  */
  readonly natPool?: string;
  /**
  * toward LAN-side BGP peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#no_readvertise_to_lan_bgp OrgDeviceprofileGateway#no_readvertise_to_lan_bgp}
  */
  readonly noReadvertiseToLanBgp?: boolean | cdktf.IResolvable;
  /**
  * toward LAN-side OSPF peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#no_readvertise_to_lan_ospf OrgDeviceprofileGateway#no_readvertise_to_lan_ospf}
  */
  readonly noReadvertiseToLanOspf?: boolean | cdktf.IResolvable;
  /**
  * toward overlay, how HUB should deal with routes it received from Spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#no_readvertise_to_overlay OrgDeviceprofileGateway#no_readvertise_to_overlay}
  */
  readonly noReadvertiseToOverlay?: boolean | cdktf.IResolvable;
  /**
  * By default, the routes are only readvertised toward the same vrf on spoke. To allow it to be leaked to other vrfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#other_vrfs OrgDeviceprofileGateway#other_vrfs}
  */
  readonly otherVrfs?: string[];
  /**
  * Whether this network is routable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#routed OrgDeviceprofileGateway#routed}
  */
  readonly routed?: boolean | cdktf.IResolvable;
  /**
  * If `routed`==`false` (usually at Spoke), but some hosts needs to be reachable from Hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#source_nat OrgDeviceprofileGateway#source_nat}
  */
  readonly sourceNat?: OrgDeviceprofileGatewayNetworksVpnAccessSourceNat;
  /**
  * Property key may be an External IP Address (i.e. "63.16.0.3"), a CIDR (i.e. "63.16.0.12/20") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#static_nat OrgDeviceprofileGateway#static_nat}
  */
  readonly staticNat?: { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccessStaticNat } | cdktf.IResolvable;
  /**
  * toward overlay, how HUB should deal with routes it received from Spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#summarized_subnet OrgDeviceprofileGateway#summarized_subnet}
  */
  readonly summarizedSubnet?: string;
  /**
  * toward LAN-side BGP peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#summarized_subnet_to_lan_bgp OrgDeviceprofileGateway#summarized_subnet_to_lan_bgp}
  */
  readonly summarizedSubnetToLanBgp?: string;
  /**
  * toward LAN-side OSPF peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#summarized_subnet_to_lan_ospf OrgDeviceprofileGateway#summarized_subnet_to_lan_ospf}
  */
  readonly summarizedSubnetToLanOspf?: string;
}

export function orgDeviceprofileGatewayNetworksVpnAccessToTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_subnet: cdktf.stringToTerraform(struct!.advertisedSubnet),
    allow_ping: cdktf.booleanToTerraform(struct!.allowPing),
    destination_nat: cdktf.hashMapper(orgDeviceprofileGatewayNetworksVpnAccessDestinationNatToTerraform)(struct!.destinationNat),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    no_readvertise_to_lan_bgp: cdktf.booleanToTerraform(struct!.noReadvertiseToLanBgp),
    no_readvertise_to_lan_ospf: cdktf.booleanToTerraform(struct!.noReadvertiseToLanOspf),
    no_readvertise_to_overlay: cdktf.booleanToTerraform(struct!.noReadvertiseToOverlay),
    other_vrfs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.otherVrfs),
    routed: cdktf.booleanToTerraform(struct!.routed),
    source_nat: orgDeviceprofileGatewayNetworksVpnAccessSourceNatToTerraform(struct!.sourceNat),
    static_nat: cdktf.hashMapper(orgDeviceprofileGatewayNetworksVpnAccessStaticNatToTerraform)(struct!.staticNat),
    summarized_subnet: cdktf.stringToTerraform(struct!.summarizedSubnet),
    summarized_subnet_to_lan_bgp: cdktf.stringToTerraform(struct!.summarizedSubnetToLanBgp),
    summarized_subnet_to_lan_ospf: cdktf.stringToTerraform(struct!.summarizedSubnetToLanOspf),
  }
}


export function orgDeviceprofileGatewayNetworksVpnAccessToHclTerraform(struct?: OrgDeviceprofileGatewayNetworksVpnAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_subnet: {
      value: cdktf.stringToHclTerraform(struct!.advertisedSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_ping: {
      value: cdktf.booleanToHclTerraform(struct!.allowPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_nat: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksVpnAccessDestinationNatToHclTerraform)(struct!.destinationNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksVpnAccessDestinationNatMap",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_readvertise_to_lan_bgp: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToLanBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_readvertise_to_lan_ospf: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToLanOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_readvertise_to_overlay: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToOverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    other_vrfs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.otherVrfs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    routed: {
      value: cdktf.booleanToHclTerraform(struct!.routed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_nat: {
      value: orgDeviceprofileGatewayNetworksVpnAccessSourceNatToHclTerraform(struct!.sourceNat),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayNetworksVpnAccessSourceNat",
    },
    static_nat: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksVpnAccessStaticNatToHclTerraform)(struct!.staticNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksVpnAccessStaticNatMap",
    },
    summarized_subnet: {
      value: cdktf.stringToHclTerraform(struct!.summarizedSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summarized_subnet_to_lan_bgp: {
      value: cdktf.stringToHclTerraform(struct!.summarizedSubnetToLanBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summarized_subnet_to_lan_ospf: {
      value: cdktf.stringToHclTerraform(struct!.summarizedSubnetToLanOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksVpnAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworksVpnAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedSubnet = this._advertisedSubnet;
    }
    if (this._allowPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPing = this._allowPing;
    }
    if (this._destinationNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNat = this._destinationNat?.internalValue;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._noReadvertiseToLanBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToLanBgp = this._noReadvertiseToLanBgp;
    }
    if (this._noReadvertiseToLanOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToLanOspf = this._noReadvertiseToLanOspf;
    }
    if (this._noReadvertiseToOverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToOverlay = this._noReadvertiseToOverlay;
    }
    if (this._otherVrfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherVrfs = this._otherVrfs;
    }
    if (this._routed !== undefined) {
      hasAnyValues = true;
      internalValueResult.routed = this._routed;
    }
    if (this._sourceNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNat = this._sourceNat?.internalValue;
    }
    if (this._staticNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNat = this._staticNat?.internalValue;
    }
    if (this._summarizedSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedSubnet = this._summarizedSubnet;
    }
    if (this._summarizedSubnetToLanBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedSubnetToLanBgp = this._summarizedSubnetToLanBgp;
    }
    if (this._summarizedSubnetToLanOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedSubnetToLanOspf = this._summarizedSubnetToLanOspf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworksVpnAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedSubnet = undefined;
      this._allowPing = undefined;
      this._destinationNat.internalValue = undefined;
      this._natPool = undefined;
      this._noReadvertiseToLanBgp = undefined;
      this._noReadvertiseToLanOspf = undefined;
      this._noReadvertiseToOverlay = undefined;
      this._otherVrfs = undefined;
      this._routed = undefined;
      this._sourceNat.internalValue = undefined;
      this._staticNat.internalValue = undefined;
      this._summarizedSubnet = undefined;
      this._summarizedSubnetToLanBgp = undefined;
      this._summarizedSubnetToLanOspf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedSubnet = value.advertisedSubnet;
      this._allowPing = value.allowPing;
      this._destinationNat.internalValue = value.destinationNat;
      this._natPool = value.natPool;
      this._noReadvertiseToLanBgp = value.noReadvertiseToLanBgp;
      this._noReadvertiseToLanOspf = value.noReadvertiseToLanOspf;
      this._noReadvertiseToOverlay = value.noReadvertiseToOverlay;
      this._otherVrfs = value.otherVrfs;
      this._routed = value.routed;
      this._sourceNat.internalValue = value.sourceNat;
      this._staticNat.internalValue = value.staticNat;
      this._summarizedSubnet = value.summarizedSubnet;
      this._summarizedSubnetToLanBgp = value.summarizedSubnetToLanBgp;
      this._summarizedSubnetToLanOspf = value.summarizedSubnetToLanOspf;
    }
  }

  // advertised_subnet - computed: false, optional: true, required: false
  private _advertisedSubnet?: string; 
  public get advertisedSubnet() {
    return this.getStringAttribute('advertised_subnet');
  }
  public set advertisedSubnet(value: string) {
    this._advertisedSubnet = value;
  }
  public resetAdvertisedSubnet() {
    this._advertisedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedSubnetInput() {
    return this._advertisedSubnet;
  }

  // allow_ping - computed: false, optional: true, required: false
  private _allowPing?: boolean | cdktf.IResolvable; 
  public get allowPing() {
    return this.getBooleanAttribute('allow_ping');
  }
  public set allowPing(value: boolean | cdktf.IResolvable) {
    this._allowPing = value;
  }
  public resetAllowPing() {
    this._allowPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPingInput() {
    return this._allowPing;
  }

  // destination_nat - computed: false, optional: true, required: false
  private _destinationNat = new OrgDeviceprofileGatewayNetworksVpnAccessDestinationNatMap(this, "destination_nat");
  public get destinationNat() {
    return this._destinationNat;
  }
  public putDestinationNat(value: { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccessDestinationNat } | cdktf.IResolvable) {
    this._destinationNat.internalValue = value;
  }
  public resetDestinationNat() {
    this._destinationNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNatInput() {
    return this._destinationNat.internalValue;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // no_readvertise_to_lan_bgp - computed: true, optional: true, required: false
  private _noReadvertiseToLanBgp?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToLanBgp() {
    return this.getBooleanAttribute('no_readvertise_to_lan_bgp');
  }
  public set noReadvertiseToLanBgp(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToLanBgp = value;
  }
  public resetNoReadvertiseToLanBgp() {
    this._noReadvertiseToLanBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToLanBgpInput() {
    return this._noReadvertiseToLanBgp;
  }

  // no_readvertise_to_lan_ospf - computed: true, optional: true, required: false
  private _noReadvertiseToLanOspf?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToLanOspf() {
    return this.getBooleanAttribute('no_readvertise_to_lan_ospf');
  }
  public set noReadvertiseToLanOspf(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToLanOspf = value;
  }
  public resetNoReadvertiseToLanOspf() {
    this._noReadvertiseToLanOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToLanOspfInput() {
    return this._noReadvertiseToLanOspf;
  }

  // no_readvertise_to_overlay - computed: false, optional: true, required: false
  private _noReadvertiseToOverlay?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToOverlay() {
    return this.getBooleanAttribute('no_readvertise_to_overlay');
  }
  public set noReadvertiseToOverlay(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToOverlay = value;
  }
  public resetNoReadvertiseToOverlay() {
    this._noReadvertiseToOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToOverlayInput() {
    return this._noReadvertiseToOverlay;
  }

  // other_vrfs - computed: true, optional: true, required: false
  private _otherVrfs?: string[]; 
  public get otherVrfs() {
    return this.getListAttribute('other_vrfs');
  }
  public set otherVrfs(value: string[]) {
    this._otherVrfs = value;
  }
  public resetOtherVrfs() {
    this._otherVrfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherVrfsInput() {
    return this._otherVrfs;
  }

  // routed - computed: false, optional: true, required: false
  private _routed?: boolean | cdktf.IResolvable; 
  public get routed() {
    return this.getBooleanAttribute('routed');
  }
  public set routed(value: boolean | cdktf.IResolvable) {
    this._routed = value;
  }
  public resetRouted() {
    this._routed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedInput() {
    return this._routed;
  }

  // source_nat - computed: true, optional: true, required: false
  private _sourceNat = new OrgDeviceprofileGatewayNetworksVpnAccessSourceNatOutputReference(this, "source_nat");
  public get sourceNat() {
    return this._sourceNat;
  }
  public putSourceNat(value: OrgDeviceprofileGatewayNetworksVpnAccessSourceNat) {
    this._sourceNat.internalValue = value;
  }
  public resetSourceNat() {
    this._sourceNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat.internalValue;
  }

  // static_nat - computed: true, optional: true, required: false
  private _staticNat = new OrgDeviceprofileGatewayNetworksVpnAccessStaticNatMap(this, "static_nat");
  public get staticNat() {
    return this._staticNat;
  }
  public putStaticNat(value: { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccessStaticNat } | cdktf.IResolvable) {
    this._staticNat.internalValue = value;
  }
  public resetStaticNat() {
    this._staticNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat.internalValue;
  }

  // summarized_subnet - computed: false, optional: true, required: false
  private _summarizedSubnet?: string; 
  public get summarizedSubnet() {
    return this.getStringAttribute('summarized_subnet');
  }
  public set summarizedSubnet(value: string) {
    this._summarizedSubnet = value;
  }
  public resetSummarizedSubnet() {
    this._summarizedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedSubnetInput() {
    return this._summarizedSubnet;
  }

  // summarized_subnet_to_lan_bgp - computed: false, optional: true, required: false
  private _summarizedSubnetToLanBgp?: string; 
  public get summarizedSubnetToLanBgp() {
    return this.getStringAttribute('summarized_subnet_to_lan_bgp');
  }
  public set summarizedSubnetToLanBgp(value: string) {
    this._summarizedSubnetToLanBgp = value;
  }
  public resetSummarizedSubnetToLanBgp() {
    this._summarizedSubnetToLanBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedSubnetToLanBgpInput() {
    return this._summarizedSubnetToLanBgp;
  }

  // summarized_subnet_to_lan_ospf - computed: false, optional: true, required: false
  private _summarizedSubnetToLanOspf?: string; 
  public get summarizedSubnetToLanOspf() {
    return this.getStringAttribute('summarized_subnet_to_lan_ospf');
  }
  public set summarizedSubnetToLanOspf(value: string) {
    this._summarizedSubnetToLanOspf = value;
  }
  public resetSummarizedSubnetToLanOspf() {
    this._summarizedSubnetToLanOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedSubnetToLanOspfInput() {
    return this._summarizedSubnetToLanOspf;
  }
}

export class OrgDeviceprofileGatewayNetworksVpnAccessMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccess } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayNetworksVpnAccessOutputReference {
    return new OrgDeviceprofileGatewayNetworksVpnAccessOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayNetworks {
  /**
  * Whether to disallow Mist Devices in the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disallow_mist_services OrgDeviceprofileGateway#disallow_mist_services}
  */
  readonly disallowMistServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway OrgDeviceprofileGateway#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway6 OrgDeviceprofileGateway#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_access OrgDeviceprofileGateway#internal_access}
  */
  readonly internalAccess?: OrgDeviceprofileGatewayNetworksInternalAccess;
  /**
  * Whether this network has direct internet access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internet_access OrgDeviceprofileGateway#internet_access}
  */
  readonly internetAccess?: OrgDeviceprofileGatewayNetworksInternetAccess;
  /**
  * Whether to allow clients in the network to talk to each other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#isolation OrgDeviceprofileGateway#isolation}
  */
  readonly isolation?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable multicast support (only PIM-sparse mode is supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#multicast OrgDeviceprofileGateway#multicast}
  */
  readonly multicast?: OrgDeviceprofileGatewayNetworksMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name: string;
  /**
  * For a Network (usually LAN), it can be routable to other networks (e.g. OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#routed_for_networks OrgDeviceprofileGateway#routed_for_networks}
  */
  readonly routedForNetworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#subnet OrgDeviceprofileGateway#subnet}
  */
  readonly subnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#subnet6 OrgDeviceprofileGateway#subnet6}
  */
  readonly subnet6?: string;
  /**
  * Property key must be the user/tenant name (i.e. "printer-1") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#tenants OrgDeviceprofileGateway#tenants}
  */
  readonly tenants?: { [key: string]: OrgDeviceprofileGatewayNetworksTenants } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vlan_id OrgDeviceprofileGateway#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Property key is the VPN name. Whether this network can be accessed from vpn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vpn_access OrgDeviceprofileGateway#vpn_access}
  */
  readonly vpnAccess?: { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccess } | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayNetworksToTerraform(struct?: OrgDeviceprofileGatewayNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disallow_mist_services: cdktf.booleanToTerraform(struct!.disallowMistServices),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    internal_access: orgDeviceprofileGatewayNetworksInternalAccessToTerraform(struct!.internalAccess),
    internet_access: orgDeviceprofileGatewayNetworksInternetAccessToTerraform(struct!.internetAccess),
    isolation: cdktf.booleanToTerraform(struct!.isolation),
    multicast: orgDeviceprofileGatewayNetworksMulticastToTerraform(struct!.multicast),
    name: cdktf.stringToTerraform(struct!.name),
    routed_for_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routedForNetworks),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    subnet6: cdktf.stringToTerraform(struct!.subnet6),
    tenants: cdktf.hashMapper(orgDeviceprofileGatewayNetworksTenantsToTerraform)(struct!.tenants),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vpn_access: cdktf.hashMapper(orgDeviceprofileGatewayNetworksVpnAccessToTerraform)(struct!.vpnAccess),
  }
}


export function orgDeviceprofileGatewayNetworksToHclTerraform(struct?: OrgDeviceprofileGatewayNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disallow_mist_services: {
      value: cdktf.booleanToHclTerraform(struct!.disallowMistServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_access: {
      value: orgDeviceprofileGatewayNetworksInternalAccessToHclTerraform(struct!.internalAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayNetworksInternalAccess",
    },
    internet_access: {
      value: orgDeviceprofileGatewayNetworksInternetAccessToHclTerraform(struct!.internetAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayNetworksInternetAccess",
    },
    isolation: {
      value: cdktf.booleanToHclTerraform(struct!.isolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multicast: {
      value: orgDeviceprofileGatewayNetworksMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayNetworksMulticast",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routed_for_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routedForNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet6: {
      value: cdktf.stringToHclTerraform(struct!.subnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenants: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksTenantsToHclTerraform)(struct!.tenants),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksTenantsMap",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_access: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayNetworksVpnAccessToHclTerraform)(struct!.vpnAccess),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayNetworksVpnAccessMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disallowMistServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowMistServices = this._disallowMistServices;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._internalAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccess = this._internalAccess?.internalValue;
    }
    if (this._internetAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetAccess = this._internetAccess?.internalValue;
    }
    if (this._isolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolation = this._isolation;
    }
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routedForNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.routedForNetworks = this._routedForNetworks;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._subnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6;
    }
    if (this._tenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants?.internalValue;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vpnAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnAccess = this._vpnAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disallowMistServices = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._internalAccess.internalValue = undefined;
      this._internetAccess.internalValue = undefined;
      this._isolation = undefined;
      this._multicast.internalValue = undefined;
      this._name = undefined;
      this._routedForNetworks = undefined;
      this._subnet = undefined;
      this._subnet6 = undefined;
      this._tenants.internalValue = undefined;
      this._vlanId = undefined;
      this._vpnAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disallowMistServices = value.disallowMistServices;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._internalAccess.internalValue = value.internalAccess;
      this._internetAccess.internalValue = value.internetAccess;
      this._isolation = value.isolation;
      this._multicast.internalValue = value.multicast;
      this._name = value.name;
      this._routedForNetworks = value.routedForNetworks;
      this._subnet = value.subnet;
      this._subnet6 = value.subnet6;
      this._tenants.internalValue = value.tenants;
      this._vlanId = value.vlanId;
      this._vpnAccess.internalValue = value.vpnAccess;
    }
  }

  // disallow_mist_services - computed: true, optional: true, required: false
  private _disallowMistServices?: boolean | cdktf.IResolvable; 
  public get disallowMistServices() {
    return this.getBooleanAttribute('disallow_mist_services');
  }
  public set disallowMistServices(value: boolean | cdktf.IResolvable) {
    this._disallowMistServices = value;
  }
  public resetDisallowMistServices() {
    this._disallowMistServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowMistServicesInput() {
    return this._disallowMistServices;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // internal_access - computed: false, optional: true, required: false
  private _internalAccess = new OrgDeviceprofileGatewayNetworksInternalAccessOutputReference(this, "internal_access");
  public get internalAccess() {
    return this._internalAccess;
  }
  public putInternalAccess(value: OrgDeviceprofileGatewayNetworksInternalAccess) {
    this._internalAccess.internalValue = value;
  }
  public resetInternalAccess() {
    this._internalAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessInput() {
    return this._internalAccess.internalValue;
  }

  // internet_access - computed: false, optional: true, required: false
  private _internetAccess = new OrgDeviceprofileGatewayNetworksInternetAccessOutputReference(this, "internet_access");
  public get internetAccess() {
    return this._internetAccess;
  }
  public putInternetAccess(value: OrgDeviceprofileGatewayNetworksInternetAccess) {
    this._internetAccess.internalValue = value;
  }
  public resetInternetAccess() {
    this._internetAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessInput() {
    return this._internetAccess.internalValue;
  }

  // isolation - computed: false, optional: true, required: false
  private _isolation?: boolean | cdktf.IResolvable; 
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }
  public set isolation(value: boolean | cdktf.IResolvable) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new OrgDeviceprofileGatewayNetworksMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: OrgDeviceprofileGatewayNetworksMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
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

  // routed_for_networks - computed: false, optional: true, required: false
  private _routedForNetworks?: string[]; 
  public get routedForNetworks() {
    return this.getListAttribute('routed_for_networks');
  }
  public set routedForNetworks(value: string[]) {
    this._routedForNetworks = value;
  }
  public resetRoutedForNetworks() {
    this._routedForNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedForNetworksInput() {
    return this._routedForNetworks;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new OrgDeviceprofileGatewayNetworksTenantsMap(this, "tenants");
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: { [key: string]: OrgDeviceprofileGatewayNetworksTenants } | cdktf.IResolvable) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpn_access - computed: false, optional: true, required: false
  private _vpnAccess = new OrgDeviceprofileGatewayNetworksVpnAccessMap(this, "vpn_access");
  public get vpnAccess() {
    return this._vpnAccess;
  }
  public putVpnAccess(value: { [key: string]: OrgDeviceprofileGatewayNetworksVpnAccess } | cdktf.IResolvable) {
    this._vpnAccess.internalValue = value;
  }
  public resetVpnAccess() {
    this._vpnAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAccessInput() {
    return this._vpnAccess.internalValue;
  }
}

export class OrgDeviceprofileGatewayNetworksList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayNetworks[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayNetworksOutputReference {
    return new OrgDeviceprofileGatewayNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayOobIpConfigNode1 {
  /**
  * If `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway OrgDeviceprofileGateway#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip OrgDeviceprofileGateway#ip}
  */
  readonly ip?: string;
  /**
  * Used only if `subnet` is not specified in `networks`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#netmask OrgDeviceprofileGateway#netmask}
  */
  readonly netmask?: string;
  /**
  * enum: `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * If supported on the platform. If enabled, DNS will be using this routing-instance, too
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#use_mgmt_vrf OrgDeviceprofileGateway#use_mgmt_vrf}
  */
  readonly useMgmtVrf?: boolean | cdktf.IResolvable;
  /**
  * Whether to use `mgmt_junos` for host-out traffic (NTP/TACPLUS/RADIUS/SYSLOG/SNMP), if alternative source network/ip is desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#use_mgmt_vrf_for_host_out OrgDeviceprofileGateway#use_mgmt_vrf_for_host_out}
  */
  readonly useMgmtVrfForHostOut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vlan_id OrgDeviceprofileGateway#vlan_id}
  */
  readonly vlanId?: string;
}

export function orgDeviceprofileGatewayOobIpConfigNode1ToTerraform(struct?: OrgDeviceprofileGatewayOobIpConfigNode1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip: cdktf.stringToTerraform(struct!.ip),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    type: cdktf.stringToTerraform(struct!.type),
    use_mgmt_vrf: cdktf.booleanToTerraform(struct!.useMgmtVrf),
    use_mgmt_vrf_for_host_out: cdktf.booleanToTerraform(struct!.useMgmtVrfForHostOut),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function orgDeviceprofileGatewayOobIpConfigNode1ToHclTerraform(struct?: OrgDeviceprofileGatewayOobIpConfigNode1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
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
    use_mgmt_vrf: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmtVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mgmt_vrf_for_host_out: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmtVrfForHostOut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayOobIpConfigNode1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayOobIpConfigNode1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useMgmtVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtVrf = this._useMgmtVrf;
    }
    if (this._useMgmtVrfForHostOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtVrfForHostOut = this._useMgmtVrfForHostOut;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayOobIpConfigNode1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._ip = undefined;
      this._netmask = undefined;
      this._type = undefined;
      this._useMgmtVrf = undefined;
      this._useMgmtVrfForHostOut = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._ip = value.ip;
      this._netmask = value.netmask;
      this._type = value.type;
      this._useMgmtVrf = value.useMgmtVrf;
      this._useMgmtVrfForHostOut = value.useMgmtVrfForHostOut;
      this._vlanId = value.vlanId;
    }
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
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

  // use_mgmt_vrf - computed: true, optional: true, required: false
  private _useMgmtVrf?: boolean | cdktf.IResolvable; 
  public get useMgmtVrf() {
    return this.getBooleanAttribute('use_mgmt_vrf');
  }
  public set useMgmtVrf(value: boolean | cdktf.IResolvable) {
    this._useMgmtVrf = value;
  }
  public resetUseMgmtVrf() {
    this._useMgmtVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtVrfInput() {
    return this._useMgmtVrf;
  }

  // use_mgmt_vrf_for_host_out - computed: true, optional: true, required: false
  private _useMgmtVrfForHostOut?: boolean | cdktf.IResolvable; 
  public get useMgmtVrfForHostOut() {
    return this.getBooleanAttribute('use_mgmt_vrf_for_host_out');
  }
  public set useMgmtVrfForHostOut(value: boolean | cdktf.IResolvable) {
    this._useMgmtVrfForHostOut = value;
  }
  public resetUseMgmtVrfForHostOut() {
    this._useMgmtVrfForHostOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtVrfForHostOutInput() {
    return this._useMgmtVrfForHostOut;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface OrgDeviceprofileGatewayOobIpConfig {
  /**
  * If `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway OrgDeviceprofileGateway#gateway}
  */
  readonly gateway?: string;
  /**
  * If `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip OrgDeviceprofileGateway#ip}
  */
  readonly ip?: string;
  /**
  * If `type`==`static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#netmask OrgDeviceprofileGateway#netmask}
  */
  readonly netmask?: string;
  /**
  * For HA Cluster, node1 can have different IP Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#node1 OrgDeviceprofileGateway#node1}
  */
  readonly node1?: OrgDeviceprofileGatewayOobIpConfigNode1;
  /**
  * enum: `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * If supported on the platform. If enabled, DNS will be using this routing-instance, too
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#use_mgmt_vrf OrgDeviceprofileGateway#use_mgmt_vrf}
  */
  readonly useMgmtVrf?: boolean | cdktf.IResolvable;
  /**
  * For host-out traffic (NTP/TACPLUS/RADIUS/SYSLOG/SNMP), if alternative source network/ip is desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#use_mgmt_vrf_for_host_out OrgDeviceprofileGateway#use_mgmt_vrf_for_host_out}
  */
  readonly useMgmtVrfForHostOut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vlan_id OrgDeviceprofileGateway#vlan_id}
  */
  readonly vlanId?: string;
}

export function orgDeviceprofileGatewayOobIpConfigToTerraform(struct?: OrgDeviceprofileGatewayOobIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip: cdktf.stringToTerraform(struct!.ip),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    node1: orgDeviceprofileGatewayOobIpConfigNode1ToTerraform(struct!.node1),
    type: cdktf.stringToTerraform(struct!.type),
    use_mgmt_vrf: cdktf.booleanToTerraform(struct!.useMgmtVrf),
    use_mgmt_vrf_for_host_out: cdktf.booleanToTerraform(struct!.useMgmtVrfForHostOut),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function orgDeviceprofileGatewayOobIpConfigToHclTerraform(struct?: OrgDeviceprofileGatewayOobIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node1: {
      value: orgDeviceprofileGatewayOobIpConfigNode1ToHclTerraform(struct!.node1),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayOobIpConfigNode1",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_vrf: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmtVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mgmt_vrf_for_host_out: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmtVrfForHostOut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayOobIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayOobIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._node1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.node1 = this._node1?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useMgmtVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtVrf = this._useMgmtVrf;
    }
    if (this._useMgmtVrfForHostOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtVrfForHostOut = this._useMgmtVrfForHostOut;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayOobIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._ip = undefined;
      this._netmask = undefined;
      this._node1.internalValue = undefined;
      this._type = undefined;
      this._useMgmtVrf = undefined;
      this._useMgmtVrfForHostOut = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._ip = value.ip;
      this._netmask = value.netmask;
      this._node1.internalValue = value.node1;
      this._type = value.type;
      this._useMgmtVrf = value.useMgmtVrf;
      this._useMgmtVrfForHostOut = value.useMgmtVrfForHostOut;
      this._vlanId = value.vlanId;
    }
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // node1 - computed: true, optional: true, required: false
  private _node1 = new OrgDeviceprofileGatewayOobIpConfigNode1OutputReference(this, "node1");
  public get node1() {
    return this._node1;
  }
  public putNode1(value: OrgDeviceprofileGatewayOobIpConfigNode1) {
    this._node1.internalValue = value;
  }
  public resetNode1() {
    this._node1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get node1Input() {
    return this._node1.internalValue;
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

  // use_mgmt_vrf - computed: true, optional: true, required: false
  private _useMgmtVrf?: boolean | cdktf.IResolvable; 
  public get useMgmtVrf() {
    return this.getBooleanAttribute('use_mgmt_vrf');
  }
  public set useMgmtVrf(value: boolean | cdktf.IResolvable) {
    this._useMgmtVrf = value;
  }
  public resetUseMgmtVrf() {
    this._useMgmtVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtVrfInput() {
    return this._useMgmtVrf;
  }

  // use_mgmt_vrf_for_host_out - computed: true, optional: true, required: false
  private _useMgmtVrfForHostOut?: boolean | cdktf.IResolvable; 
  public get useMgmtVrfForHostOut() {
    return this.getBooleanAttribute('use_mgmt_vrf_for_host_out');
  }
  public set useMgmtVrfForHostOut(value: boolean | cdktf.IResolvable) {
    this._useMgmtVrfForHostOut = value;
  }
  public resetUseMgmtVrfForHostOut() {
    this._useMgmtVrfForHostOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtVrfForHostOutInput() {
    return this._useMgmtVrfForHostOut;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface OrgDeviceprofileGatewayPathPreferencesPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#cost OrgDeviceprofileGateway#cost}
  */
  readonly cost?: number;
  /**
  * For SSR Only. `true`, if this specific path is undesired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disabled OrgDeviceprofileGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Only if `type`==`local`, if a different gateway is desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway_ip OrgDeviceprofileGateway#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Only if `type`==`vpn`, if this vpn path can be used for internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internet_access OrgDeviceprofileGateway#internet_access}
  */
  readonly internetAccess?: boolean | cdktf.IResolvable;
  /**
  * Required when 
  *   * `type`==`vpn`: the name of the VPN Path to use 
  *   * `type`==`wan`: the name of the WAN interface to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * Required when `type`==`local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#networks OrgDeviceprofileGateway#networks}
  */
  readonly networks?: string[];
  /**
  * If `type`==`local`, if destination IP is to be replaced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#target_ips OrgDeviceprofileGateway#target_ips}
  */
  readonly targetIps?: string[];
  /**
  * enum: `local`, `tunnel`, `vpn`, `wan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type: string;
  /**
  * Optional if `type`==`vpn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_name OrgDeviceprofileGateway#wan_name}
  */
  readonly wanName?: string;
}

export function orgDeviceprofileGatewayPathPreferencesPathsToTerraform(struct?: OrgDeviceprofileGatewayPathPreferencesPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    internet_access: cdktf.booleanToTerraform(struct!.internetAccess),
    name: cdktf.stringToTerraform(struct!.name),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    target_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIps),
    type: cdktf.stringToTerraform(struct!.type),
    wan_name: cdktf.stringToTerraform(struct!.wanName),
  }
}


export function orgDeviceprofileGatewayPathPreferencesPathsToHclTerraform(struct?: OrgDeviceprofileGatewayPathPreferencesPaths | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_access: {
      value: cdktf.booleanToHclTerraform(struct!.internetAccess),
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
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_name: {
      value: cdktf.stringToHclTerraform(struct!.wanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPathPreferencesPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayPathPreferencesPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._internetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetAccess = this._internetAccess;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._targetIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIps = this._targetIps;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanName = this._wanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPathPreferencesPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._disabled = undefined;
      this._gatewayIp = undefined;
      this._internetAccess = undefined;
      this._name = undefined;
      this._networks = undefined;
      this._targetIps = undefined;
      this._type = undefined;
      this._wanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._disabled = value.disabled;
      this._gatewayIp = value.gatewayIp;
      this._internetAccess = value.internetAccess;
      this._name = value.name;
      this._networks = value.networks;
      this._targetIps = value.targetIps;
      this._type = value.type;
      this._wanName = value.wanName;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // internet_access - computed: false, optional: true, required: false
  private _internetAccess?: boolean | cdktf.IResolvable; 
  public get internetAccess() {
    return this.getBooleanAttribute('internet_access');
  }
  public set internetAccess(value: boolean | cdktf.IResolvable) {
    this._internetAccess = value;
  }
  public resetInternetAccess() {
    this._internetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessInput() {
    return this._internetAccess;
  }

  // name - computed: false, optional: true, required: false
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

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // target_ips - computed: false, optional: true, required: false
  private _targetIps?: string[]; 
  public get targetIps() {
    return this.getListAttribute('target_ips');
  }
  public set targetIps(value: string[]) {
    this._targetIps = value;
  }
  public resetTargetIps() {
    this._targetIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpsInput() {
    return this._targetIps;
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

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }
}

export class OrgDeviceprofileGatewayPathPreferencesPathsList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayPathPreferencesPaths[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayPathPreferencesPathsOutputReference {
    return new OrgDeviceprofileGatewayPathPreferencesPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayPathPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#paths OrgDeviceprofileGateway#paths}
  */
  readonly paths?: OrgDeviceprofileGatewayPathPreferencesPaths[] | cdktf.IResolvable;
  /**
  * enum: `ecmp`, `ordered`, `weighted`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#strategy OrgDeviceprofileGateway#strategy}
  */
  readonly strategy?: string;
}

export function orgDeviceprofileGatewayPathPreferencesToTerraform(struct?: OrgDeviceprofileGatewayPathPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(orgDeviceprofileGatewayPathPreferencesPathsToTerraform, false)(struct!.paths),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function orgDeviceprofileGatewayPathPreferencesToHclTerraform(struct?: OrgDeviceprofileGatewayPathPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayPathPreferencesPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileGatewayPathPreferencesPathsList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPathPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayPathPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPathPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths.internalValue = value.paths;
      this._strategy = value.strategy;
    }
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new OrgDeviceprofileGatewayPathPreferencesPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: OrgDeviceprofileGatewayPathPreferencesPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class OrgDeviceprofileGatewayPathPreferencesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayPathPreferences } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayPathPreferencesOutputReference {
    return new OrgDeviceprofileGatewayPathPreferencesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayPortConfigIpConfig {
  /**
  * Except for out-of_band interface (vme/em0/fxp0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns OrgDeviceprofileGateway#dns}
  */
  readonly dns?: string[];
  /**
  * Except for out-of_band interface (vme/em0/fxp0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_suffix OrgDeviceprofileGateway#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * Except for out-of_band interface (vme/em0/fxp0). Interface Default Gateway IP Address (i.e. "192.168.1.1") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway OrgDeviceprofileGateway#gateway}
  */
  readonly gateway?: string;
  /**
  * Except for out-of_band interface (vme/em0/fxp0). Interface Default Gateway IPv6 Address (i.e. "2001:db8::1") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#gateway6 OrgDeviceprofileGateway#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Interface IP Address (i.e. "192.168.1.8") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip OrgDeviceprofileGateway#ip}
  */
  readonly ip?: string;
  /**
  * Interface IPv6 Address (i.e. "2001:db8::123") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip6 OrgDeviceprofileGateway#ip6}
  */
  readonly ip6?: string;
  /**
  * Used only if `subnet` is not specified in `networks`. Interface Netmask (i.e. "/24") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#netmask OrgDeviceprofileGateway#netmask}
  */
  readonly netmask?: string;
  /**
  * Used only if `subnet` is not specified in `networks`. Interface IPv6 Netmask (i.e. "/64") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#netmask6 OrgDeviceprofileGateway#netmask6}
  */
  readonly netmask6?: string;
  /**
  * Optional, the network to be used for mgmt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#network OrgDeviceprofileGateway#network}
  */
  readonly network?: string;
  /**
  * If `type`==`pppoe`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#poser_password OrgDeviceprofileGateway#poser_password}
  */
  readonly poserPassword?: string;
  /**
  * if `type`==`pppoe`. enum: `chap`, `none`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#pppoe_auth OrgDeviceprofileGateway#pppoe_auth}
  */
  readonly pppoeAuth?: string;
  /**
  * If `type`==`pppoe`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#pppoe_username OrgDeviceprofileGateway#pppoe_username}
  */
  readonly pppoeUsername?: string;
  /**
  * enum: `dhcp`, `pppoe`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
  /**
  * enum: `autoconf`, `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type6 OrgDeviceprofileGateway#type6}
  */
  readonly type6?: string;
}

export function orgDeviceprofileGatewayPortConfigIpConfigToTerraform(struct?: OrgDeviceprofileGatewayPortConfigIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSuffix),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    netmask6: cdktf.stringToTerraform(struct!.netmask6),
    network: cdktf.stringToTerraform(struct!.network),
    poser_password: cdktf.stringToTerraform(struct!.poserPassword),
    pppoe_auth: cdktf.stringToTerraform(struct!.pppoeAuth),
    pppoe_username: cdktf.stringToTerraform(struct!.pppoeUsername),
    type: cdktf.stringToTerraform(struct!.type),
    type6: cdktf.stringToTerraform(struct!.type6),
  }
}


export function orgDeviceprofileGatewayPortConfigIpConfigToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_suffix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSuffix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask6: {
      value: cdktf.stringToHclTerraform(struct!.netmask6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poser_password: {
      value: cdktf.stringToHclTerraform(struct!.poserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pppoe_auth: {
      value: cdktf.stringToHclTerraform(struct!.pppoeAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pppoe_username: {
      value: cdktf.stringToHclTerraform(struct!.pppoeUsername),
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
    type6: {
      value: cdktf.stringToHclTerraform(struct!.type6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayPortConfigIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._netmask6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask6 = this._netmask6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._poserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.poserPassword = this._poserPassword;
    }
    if (this._pppoeAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.pppoeAuth = this._pppoeAuth;
    }
    if (this._pppoeUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.pppoeUsername = this._pppoeUsername;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._type6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.type6 = this._type6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._dnsSuffix = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._netmask = undefined;
      this._netmask6 = undefined;
      this._network = undefined;
      this._poserPassword = undefined;
      this._pppoeAuth = undefined;
      this._pppoeUsername = undefined;
      this._type = undefined;
      this._type6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._dnsSuffix = value.dnsSuffix;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._netmask = value.netmask;
      this._netmask6 = value.netmask6;
      this._network = value.network;
      this._poserPassword = value.poserPassword;
      this._pppoeAuth = value.pppoeAuth;
      this._pppoeUsername = value.pppoeUsername;
      this._type = value.type;
      this._type6 = value.type6;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string[]; 
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string[]) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: false, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // netmask6 - computed: false, optional: true, required: false
  private _netmask6?: string; 
  public get netmask6() {
    return this.getStringAttribute('netmask6');
  }
  public set netmask6(value: string) {
    this._netmask6 = value;
  }
  public resetNetmask6() {
    this._netmask6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmask6Input() {
    return this._netmask6;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // poser_password - computed: false, optional: true, required: false
  private _poserPassword?: string; 
  public get poserPassword() {
    return this.getStringAttribute('poser_password');
  }
  public set poserPassword(value: string) {
    this._poserPassword = value;
  }
  public resetPoserPassword() {
    this._poserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poserPasswordInput() {
    return this._poserPassword;
  }

  // pppoe_auth - computed: false, optional: true, required: false
  private _pppoeAuth?: string; 
  public get pppoeAuth() {
    return this.getStringAttribute('pppoe_auth');
  }
  public set pppoeAuth(value: string) {
    this._pppoeAuth = value;
  }
  public resetPppoeAuth() {
    this._pppoeAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeAuthInput() {
    return this._pppoeAuth;
  }

  // pppoe_username - computed: false, optional: true, required: false
  private _pppoeUsername?: string; 
  public get pppoeUsername() {
    return this.getStringAttribute('pppoe_username');
  }
  public set pppoeUsername(value: string) {
    this._pppoeUsername = value;
  }
  public resetPppoeUsername() {
    this._pppoeUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeUsernameInput() {
    return this._pppoeUsername;
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

  // type6 - computed: false, optional: true, required: false
  private _type6?: string; 
  public get type6() {
    return this.getStringAttribute('type6');
  }
  public set type6(value: string) {
    this._type6 = value;
  }
  public resetType6() {
    this._type6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get type6Input() {
    return this._type6;
  }
}
export interface OrgDeviceprofileGatewayPortConfigTrafficShaping {
  /**
  * percentages for different class of traffic: high / medium / low / best-effort. Sum must be equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#class_percentages OrgDeviceprofileGateway#class_percentages}
  */
  readonly classPercentages?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interface Transmit Cap in kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#max_tx_kbps OrgDeviceprofileGateway#max_tx_kbps}
  */
  readonly maxTxKbps?: number;
}

export function orgDeviceprofileGatewayPortConfigTrafficShapingToTerraform(struct?: OrgDeviceprofileGatewayPortConfigTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_percentages: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.classPercentages),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_tx_kbps: cdktf.numberToTerraform(struct!.maxTxKbps),
  }
}


export function orgDeviceprofileGatewayPortConfigTrafficShapingToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_percentages: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.classPercentages),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_tx_kbps: {
      value: cdktf.numberToHclTerraform(struct!.maxTxKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigTrafficShapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayPortConfigTrafficShaping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classPercentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPercentages = this._classPercentages;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxTxKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTxKbps = this._maxTxKbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigTrafficShaping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classPercentages = undefined;
      this._enabled = undefined;
      this._maxTxKbps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classPercentages = value.classPercentages;
      this._enabled = value.enabled;
      this._maxTxKbps = value.maxTxKbps;
    }
  }

  // class_percentages - computed: false, optional: true, required: false
  private _classPercentages?: number[]; 
  public get classPercentages() {
    return this.getNumberListAttribute('class_percentages');
  }
  public set classPercentages(value: number[]) {
    this._classPercentages = value;
  }
  public resetClassPercentages() {
    this._classPercentages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPercentagesInput() {
    return this._classPercentages;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_tx_kbps - computed: false, optional: true, required: false
  private _maxTxKbps?: number; 
  public get maxTxKbps() {
    return this.getNumberAttribute('max_tx_kbps');
  }
  public set maxTxKbps(value: number) {
    this._maxTxKbps = value;
  }
  public resetMaxTxKbps() {
    this._maxTxKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTxKbpsInput() {
    return this._maxTxKbps;
  }
}
export interface OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping {
  /**
  * percentages for different class of traffic: high / medium / low / best-effort. Sum must be equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#class_percentages OrgDeviceprofileGateway#class_percentages}
  */
  readonly classPercentages?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interface Transmit Cap in kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#max_tx_kbps OrgDeviceprofileGateway#max_tx_kbps}
  */
  readonly maxTxKbps?: number;
}

export function orgDeviceprofileGatewayPortConfigVpnPathsTrafficShapingToTerraform(struct?: OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_percentages: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.classPercentages),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_tx_kbps: cdktf.numberToTerraform(struct!.maxTxKbps),
  }
}


export function orgDeviceprofileGatewayPortConfigVpnPathsTrafficShapingToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_percentages: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.classPercentages),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_tx_kbps: {
      value: cdktf.numberToHclTerraform(struct!.maxTxKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classPercentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPercentages = this._classPercentages;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxTxKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTxKbps = this._maxTxKbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classPercentages = undefined;
      this._enabled = undefined;
      this._maxTxKbps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classPercentages = value.classPercentages;
      this._enabled = value.enabled;
      this._maxTxKbps = value.maxTxKbps;
    }
  }

  // class_percentages - computed: false, optional: true, required: false
  private _classPercentages?: number[]; 
  public get classPercentages() {
    return this.getNumberListAttribute('class_percentages');
  }
  public set classPercentages(value: number[]) {
    this._classPercentages = value;
  }
  public resetClassPercentages() {
    this._classPercentages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPercentagesInput() {
    return this._classPercentages;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_tx_kbps - computed: false, optional: true, required: false
  private _maxTxKbps?: number; 
  public get maxTxKbps() {
    return this.getNumberAttribute('max_tx_kbps');
  }
  public set maxTxKbps(value: number) {
    this._maxTxKbps = value;
  }
  public resetMaxTxKbps() {
    this._maxTxKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTxKbpsInput() {
    return this._maxTxKbps;
  }
}
export interface OrgDeviceprofileGatewayPortConfigVpnPaths {
  /**
  * Only if the VPN `type`==`hub_spoke`. enum: `broadband`, `lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#bfd_profile OrgDeviceprofileGateway#bfd_profile}
  */
  readonly bfdProfile?: string;
  /**
  * Only if the VPN `type`==`hub_spoke`. Whether to use tunnel mode. SSR only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#bfd_use_tunnel_mode OrgDeviceprofileGateway#bfd_use_tunnel_mode}
  */
  readonly bfdUseTunnelMode?: boolean | cdktf.IResolvable;
  /**
  * Only if the VPN `type`==`hub_spoke`. For a given VPN, when `path_selection.strategy`==`simple`, the preference for a path (lower is preferred)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#preference OrgDeviceprofileGateway#preference}
  */
  readonly preference?: number;
  /**
  * If the VPN `type`==`hub_spoke`, enum: `hub`, `spoke`. If the VPN `type`==`mesh`, enum: `mesh`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#role OrgDeviceprofileGateway#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#traffic_shaping OrgDeviceprofileGateway#traffic_shaping}
  */
  readonly trafficShaping?: OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping;
}

export function orgDeviceprofileGatewayPortConfigVpnPathsToTerraform(struct?: OrgDeviceprofileGatewayPortConfigVpnPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_profile: cdktf.stringToTerraform(struct!.bfdProfile),
    bfd_use_tunnel_mode: cdktf.booleanToTerraform(struct!.bfdUseTunnelMode),
    preference: cdktf.numberToTerraform(struct!.preference),
    role: cdktf.stringToTerraform(struct!.role),
    traffic_shaping: orgDeviceprofileGatewayPortConfigVpnPathsTrafficShapingToTerraform(struct!.trafficShaping),
  }
}


export function orgDeviceprofileGatewayPortConfigVpnPathsToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigVpnPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_profile: {
      value: cdktf.stringToHclTerraform(struct!.bfdProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_use_tunnel_mode: {
      value: cdktf.booleanToHclTerraform(struct!.bfdUseTunnelMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_shaping: {
      value: orgDeviceprofileGatewayPortConfigVpnPathsTrafficShapingToHclTerraform(struct!.trafficShaping),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigVpnPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayPortConfigVpnPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdProfile = this._bfdProfile;
    }
    if (this._bfdUseTunnelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdUseTunnelMode = this._bfdUseTunnelMode;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._trafficShaping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShaping = this._trafficShaping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigVpnPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdProfile = undefined;
      this._bfdUseTunnelMode = undefined;
      this._preference = undefined;
      this._role = undefined;
      this._trafficShaping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdProfile = value.bfdProfile;
      this._bfdUseTunnelMode = value.bfdUseTunnelMode;
      this._preference = value.preference;
      this._role = value.role;
      this._trafficShaping.internalValue = value.trafficShaping;
    }
  }

  // bfd_profile - computed: false, optional: true, required: false
  private _bfdProfile?: string; 
  public get bfdProfile() {
    return this.getStringAttribute('bfd_profile');
  }
  public set bfdProfile(value: string) {
    this._bfdProfile = value;
  }
  public resetBfdProfile() {
    this._bfdProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProfileInput() {
    return this._bfdProfile;
  }

  // bfd_use_tunnel_mode - computed: false, optional: true, required: false
  private _bfdUseTunnelMode?: boolean | cdktf.IResolvable; 
  public get bfdUseTunnelMode() {
    return this.getBooleanAttribute('bfd_use_tunnel_mode');
  }
  public set bfdUseTunnelMode(value: boolean | cdktf.IResolvable) {
    this._bfdUseTunnelMode = value;
  }
  public resetBfdUseTunnelMode() {
    this._bfdUseTunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdUseTunnelModeInput() {
    return this._bfdUseTunnelMode;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // traffic_shaping - computed: false, optional: true, required: false
  private _trafficShaping = new OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShapingOutputReference(this, "traffic_shaping");
  public get trafficShaping() {
    return this._trafficShaping;
  }
  public putTrafficShaping(value: OrgDeviceprofileGatewayPortConfigVpnPathsTrafficShaping) {
    this._trafficShaping.internalValue = value;
  }
  public resetTrafficShaping() {
    this._trafficShaping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingInput() {
    return this._trafficShaping.internalValue;
  }
}

export class OrgDeviceprofileGatewayPortConfigVpnPathsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayPortConfigVpnPaths } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayPortConfigVpnPathsOutputReference {
    return new OrgDeviceprofileGatewayPortConfigVpnPathsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayPortConfigWanExtraRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#via OrgDeviceprofileGateway#via}
  */
  readonly via?: string;
}

export function orgDeviceprofileGatewayPortConfigWanExtraRoutesToTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function orgDeviceprofileGatewayPortConfigWanExtraRoutesToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigWanExtraRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayPortConfigWanExtraRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigWanExtraRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._via = value.via;
    }
  }

  // via - computed: false, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class OrgDeviceprofileGatewayPortConfigWanExtraRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayPortConfigWanExtraRoutes } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayPortConfigWanExtraRoutesOutputReference {
    return new OrgDeviceprofileGatewayPortConfigWanExtraRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#via OrgDeviceprofileGateway#via}
  */
  readonly via?: string;
}

export function orgDeviceprofileGatewayPortConfigWanExtraRoutes6ToTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function orgDeviceprofileGatewayPortConfigWanExtraRoutes6ToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigWanExtraRoutes6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._via = value.via;
    }
  }

  // via - computed: false, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class OrgDeviceprofileGatewayPortConfigWanExtraRoutes6Map extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayPortConfigWanExtraRoutes6OutputReference {
    return new OrgDeviceprofileGatewayPortConfigWanExtraRoutes6OutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayPortConfigWanProbeOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip6s OrgDeviceprofileGateway#ip6s}
  */
  readonly ip6S?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ips OrgDeviceprofileGateway#ips}
  */
  readonly ips?: string[];
  /**
  * enum: `broadband`, `lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#probe_profile OrgDeviceprofileGateway#probe_profile}
  */
  readonly probeProfile?: string;
}

export function orgDeviceprofileGatewayPortConfigWanProbeOverrideToTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanProbeOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip6s: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip6S),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    probe_profile: cdktf.stringToTerraform(struct!.probeProfile),
  }
}


export function orgDeviceprofileGatewayPortConfigWanProbeOverrideToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanProbeOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip6s: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip6S),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probe_profile: {
      value: cdktf.stringToHclTerraform(struct!.probeProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigWanProbeOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayPortConfigWanProbeOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip6S !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6S = this._ip6S;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._probeProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeProfile = this._probeProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigWanProbeOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip6S = undefined;
      this._ips = undefined;
      this._probeProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip6S = value.ip6S;
      this._ips = value.ips;
      this._probeProfile = value.probeProfile;
    }
  }

  // ip6s - computed: false, optional: true, required: false
  private _ip6S?: string[]; 
  public get ip6S() {
    return this.getListAttribute('ip6s');
  }
  public set ip6S(value: string[]) {
    this._ip6S = value;
  }
  public resetIp6S() {
    this._ip6S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SInput() {
    return this._ip6S;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // probe_profile - computed: false, optional: true, required: false
  private _probeProfile?: string; 
  public get probeProfile() {
    return this.getStringAttribute('probe_profile');
  }
  public set probeProfile(value: string) {
    this._probeProfile = value;
  }
  public resetProbeProfile() {
    this._probeProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeProfileInput() {
    return this._probeProfile;
  }
}
export interface OrgDeviceprofileGatewayPortConfigWanSourceNat {
  /**
  * Or to disable the source-nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disabled OrgDeviceprofileGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * If alternative nat_pool is desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#nat6_pool OrgDeviceprofileGateway#nat6_pool}
  */
  readonly nat6Pool?: string;
  /**
  * If alternative nat_pool is desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#nat_pool OrgDeviceprofileGateway#nat_pool}
  */
  readonly natPool?: string;
}

export function orgDeviceprofileGatewayPortConfigWanSourceNatToTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanSourceNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    nat6_pool: cdktf.stringToTerraform(struct!.nat6Pool),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
  }
}


export function orgDeviceprofileGatewayPortConfigWanSourceNatToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfigWanSourceNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nat6_pool: {
      value: cdktf.stringToHclTerraform(struct!.nat6Pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigWanSourceNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayPortConfigWanSourceNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._nat6Pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat6Pool = this._nat6Pool;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfigWanSourceNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._nat6Pool = undefined;
      this._natPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._nat6Pool = value.nat6Pool;
      this._natPool = value.natPool;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // nat6_pool - computed: false, optional: true, required: false
  private _nat6Pool?: string; 
  public get nat6Pool() {
    return this.getStringAttribute('nat6_pool');
  }
  public set nat6Pool(value: string) {
    this._nat6Pool = value;
  }
  public resetNat6Pool() {
    this._nat6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat6PoolInput() {
    return this._nat6Pool;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }
}
export interface OrgDeviceprofileGatewayPortConfig {
  /**
  * If `aggregated`==`true`. To disable LCP support for the AE interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ae_disable_lacp OrgDeviceprofileGateway#ae_disable_lacp}
  */
  readonly aeDisableLacp?: boolean | cdktf.IResolvable;
  /**
  * If `aggregated`==`true`. Users could force to use the designated AE name (must be an integer between 0 and 127)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ae_idx OrgDeviceprofileGateway#ae_idx}
  */
  readonly aeIdx?: string;
  /**
  * For SRX only, if `aggregated`==`true`.Sets the state of the interface as UP when the peer has limited LACP capability. Use case: When a device connected to this AE port is ZTPing for the first time, it will not have LACP configured on the other end. **Note:** Turning this on will enable force-up on one of the interfaces in the bundle only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ae_lacp_force_up OrgDeviceprofileGateway#ae_lacp_force_up}
  */
  readonly aeLacpForceUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aggregated OrgDeviceprofileGateway#aggregated}
  */
  readonly aggregated?: boolean | cdktf.IResolvable;
  /**
  * To generate port up/down alarm, set it to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#critical OrgDeviceprofileGateway#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Interface Description. Can be a variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#description OrgDeviceprofileGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disable_autoneg OrgDeviceprofileGateway#disable_autoneg}
  */
  readonly disableAutoneg?: boolean | cdktf.IResolvable;
  /**
  * Port admin up (true) / down (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#disabled OrgDeviceprofileGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * if `wan_type`==`dsl`. enum: `adsl`, `vdsl`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dsl_type OrgDeviceprofileGateway#dsl_type}
  */
  readonly dslType?: string;
  /**
  * If `wan_type`==`dsl`, 16 bit int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dsl_vci OrgDeviceprofileGateway#dsl_vci}
  */
  readonly dslVci?: number;
  /**
  * If `wan_type`==`dsl`, 8 bit int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dsl_vpi OrgDeviceprofileGateway#dsl_vpi}
  */
  readonly dslVpi?: number;
  /**
  * enum: `auto`, `full`, `half`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#duplex OrgDeviceprofileGateway#duplex}
  */
  readonly duplex?: string;
  /**
  * Junos IP Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ip_config OrgDeviceprofileGateway#ip_config}
  */
  readonly ipConfig?: OrgDeviceprofileGatewayPortConfigIpConfig;
  /**
  * If `wan_type`==`lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lte_apn OrgDeviceprofileGateway#lte_apn}
  */
  readonly lteApn?: string;
  /**
  * if `wan_type`==`lte`. enum: `chap`, `none`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lte_auth OrgDeviceprofileGateway#lte_auth}
  */
  readonly lteAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lte_backup OrgDeviceprofileGateway#lte_backup}
  */
  readonly lteBackup?: boolean | cdktf.IResolvable;
  /**
  * If `wan_type`==`lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lte_password OrgDeviceprofileGateway#lte_password}
  */
  readonly ltePassword?: string;
  /**
  * If `wan_type`==`lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lte_username OrgDeviceprofileGateway#lte_username}
  */
  readonly lteUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#mtu OrgDeviceprofileGateway#mtu}
  */
  readonly mtu?: number;
  /**
  * Name that we'll use to derive config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * if `usage`==`lan`, name of the `mist_org_network` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#networks OrgDeviceprofileGateway#networks}
  */
  readonly networks?: string[];
  /**
  * For Q-in-Q
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#outer_vlan_id OrgDeviceprofileGateway#outer_vlan_id}
  */
  readonly outerVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#poe_disabled OrgDeviceprofileGateway#poe_disabled}
  */
  readonly poeDisabled?: boolean | cdktf.IResolvable;
  /**
  * Only for SRX and if `usage`==`lan`, the name of the Network to be used as the Untagged VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#port_network OrgDeviceprofileGateway#port_network}
  */
  readonly portNetwork?: string;
  /**
  * Whether to preserve dscp when sending traffic over VPN (SSR-only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#preserve_dscp OrgDeviceprofileGateway#preserve_dscp}
  */
  readonly preserveDscp?: boolean | cdktf.IResolvable;
  /**
  * If HA mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#redundant OrgDeviceprofileGateway#redundant}
  */
  readonly redundant?: boolean | cdktf.IResolvable;
  /**
  * If HA mode, SRX Only - support redundancy-group. 1-128 for physical SRX, 1-64 for virtual SRX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#redundant_group OrgDeviceprofileGateway#redundant_group}
  */
  readonly redundantGroup?: number;
  /**
  * For SRX only and if HA Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#reth_idx OrgDeviceprofileGateway#reth_idx}
  */
  readonly rethIdx?: string;
  /**
  * If HA mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#reth_node OrgDeviceprofileGateway#reth_node}
  */
  readonly rethNode?: string;
  /**
  * SSR only - supporting vlan-based redundancy (matching the size of `networks`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#reth_nodes OrgDeviceprofileGateway#reth_nodes}
  */
  readonly rethNodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#speed OrgDeviceprofileGateway#speed}
  */
  readonly speed?: string;
  /**
  * When SSR is running as VM, this is required on certain hosting platforms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ssr_no_virtual_mac OrgDeviceprofileGateway#ssr_no_virtual_mac}
  */
  readonly ssrNoVirtualMac?: boolean | cdktf.IResolvable;
  /**
  * For SSR only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#svr_port_range OrgDeviceprofileGateway#svr_port_range}
  */
  readonly svrPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#traffic_shaping OrgDeviceprofileGateway#traffic_shaping}
  */
  readonly trafficShaping?: OrgDeviceprofileGatewayPortConfigTrafficShaping;
  /**
  * port usage name. enum: `ha_control`, `ha_data`, `lan`, `wan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#usage OrgDeviceprofileGateway#usage}
  */
  readonly usage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vlan_id OrgDeviceprofileGateway#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Property key is the VPN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vpn_paths OrgDeviceprofileGateway#vpn_paths}
  */
  readonly vpnPaths?: { [key: string]: OrgDeviceprofileGatewayPortConfigVpnPaths } | cdktf.IResolvable;
  /**
  * Only when `wan_type`==`broadband`. enum: `default`, `max`, `recommended`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_arp_policer OrgDeviceprofileGateway#wan_arp_policer}
  */
  readonly wanArpPolicer?: string;
  /**
  * If `wan_type`==`wan`, disable speedtest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_disable_speedtest OrgDeviceprofileGateway#wan_disable_speedtest}
  */
  readonly wanDisableSpeedtest?: boolean | cdktf.IResolvable;
  /**
  * Only if `usage`==`wan`, optional. If spoke should reach this port by a different IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_ext_ip OrgDeviceprofileGateway#wan_ext_ip}
  */
  readonly wanExtIp?: string;
  /**
  * Only if `usage`==`wan`, optional. If spoke should reach this port by a different IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_ext_ip6 OrgDeviceprofileGateway#wan_ext_ip6}
  */
  readonly wanExtIp6?: string;
  /**
  * Only if `usage`==`wan`. Property Key is the destination CIDR (e.g. "100.100.100.0/24")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_extra_routes OrgDeviceprofileGateway#wan_extra_routes}
  */
  readonly wanExtraRoutes?: { [key: string]: OrgDeviceprofileGatewayPortConfigWanExtraRoutes } | cdktf.IResolvable;
  /**
  * Only if `usage`==`wan`. Property Key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_extra_routes6 OrgDeviceprofileGateway#wan_extra_routes6}
  */
  readonly wanExtraRoutes6?: { [key: string]: OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 } | cdktf.IResolvable;
  /**
  * Only if `usage`==`wan`. If some networks are connected to this WAN port, it can be added here so policies can be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_networks OrgDeviceprofileGateway#wan_networks}
  */
  readonly wanNetworks?: string[];
  /**
  * Only if `usage`==`wan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_probe_override OrgDeviceprofileGateway#wan_probe_override}
  */
  readonly wanProbeOverride?: OrgDeviceprofileGatewayPortConfigWanProbeOverride;
  /**
  * Only if `usage`==`wan`, optional. By default, source-NAT is performed on all WAN Ports using the interface-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_source_nat OrgDeviceprofileGateway#wan_source_nat}
  */
  readonly wanSourceNat?: OrgDeviceprofileGatewayPortConfigWanSourceNat;
  /**
  * Only if `usage`==`wan`. enum: `broadband`, `dsl`, `lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_type OrgDeviceprofileGateway#wan_type}
  */
  readonly wanType?: string;
}

export function orgDeviceprofileGatewayPortConfigToTerraform(struct?: OrgDeviceprofileGatewayPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ae_disable_lacp: cdktf.booleanToTerraform(struct!.aeDisableLacp),
    ae_idx: cdktf.stringToTerraform(struct!.aeIdx),
    ae_lacp_force_up: cdktf.booleanToTerraform(struct!.aeLacpForceUp),
    aggregated: cdktf.booleanToTerraform(struct!.aggregated),
    critical: cdktf.booleanToTerraform(struct!.critical),
    description: cdktf.stringToTerraform(struct!.description),
    disable_autoneg: cdktf.booleanToTerraform(struct!.disableAutoneg),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    dsl_type: cdktf.stringToTerraform(struct!.dslType),
    dsl_vci: cdktf.numberToTerraform(struct!.dslVci),
    dsl_vpi: cdktf.numberToTerraform(struct!.dslVpi),
    duplex: cdktf.stringToTerraform(struct!.duplex),
    ip_config: orgDeviceprofileGatewayPortConfigIpConfigToTerraform(struct!.ipConfig),
    lte_apn: cdktf.stringToTerraform(struct!.lteApn),
    lte_auth: cdktf.stringToTerraform(struct!.lteAuth),
    lte_backup: cdktf.booleanToTerraform(struct!.lteBackup),
    lte_password: cdktf.stringToTerraform(struct!.ltePassword),
    lte_username: cdktf.stringToTerraform(struct!.lteUsername),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    outer_vlan_id: cdktf.numberToTerraform(struct!.outerVlanId),
    poe_disabled: cdktf.booleanToTerraform(struct!.poeDisabled),
    port_network: cdktf.stringToTerraform(struct!.portNetwork),
    preserve_dscp: cdktf.booleanToTerraform(struct!.preserveDscp),
    redundant: cdktf.booleanToTerraform(struct!.redundant),
    redundant_group: cdktf.numberToTerraform(struct!.redundantGroup),
    reth_idx: cdktf.stringToTerraform(struct!.rethIdx),
    reth_node: cdktf.stringToTerraform(struct!.rethNode),
    reth_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rethNodes),
    speed: cdktf.stringToTerraform(struct!.speed),
    ssr_no_virtual_mac: cdktf.booleanToTerraform(struct!.ssrNoVirtualMac),
    svr_port_range: cdktf.stringToTerraform(struct!.svrPortRange),
    traffic_shaping: orgDeviceprofileGatewayPortConfigTrafficShapingToTerraform(struct!.trafficShaping),
    usage: cdktf.stringToTerraform(struct!.usage),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vpn_paths: cdktf.hashMapper(orgDeviceprofileGatewayPortConfigVpnPathsToTerraform)(struct!.vpnPaths),
    wan_arp_policer: cdktf.stringToTerraform(struct!.wanArpPolicer),
    wan_disable_speedtest: cdktf.booleanToTerraform(struct!.wanDisableSpeedtest),
    wan_ext_ip: cdktf.stringToTerraform(struct!.wanExtIp),
    wan_ext_ip6: cdktf.stringToTerraform(struct!.wanExtIp6),
    wan_extra_routes: cdktf.hashMapper(orgDeviceprofileGatewayPortConfigWanExtraRoutesToTerraform)(struct!.wanExtraRoutes),
    wan_extra_routes6: cdktf.hashMapper(orgDeviceprofileGatewayPortConfigWanExtraRoutes6ToTerraform)(struct!.wanExtraRoutes6),
    wan_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wanNetworks),
    wan_probe_override: orgDeviceprofileGatewayPortConfigWanProbeOverrideToTerraform(struct!.wanProbeOverride),
    wan_source_nat: orgDeviceprofileGatewayPortConfigWanSourceNatToTerraform(struct!.wanSourceNat),
    wan_type: cdktf.stringToTerraform(struct!.wanType),
  }
}


export function orgDeviceprofileGatewayPortConfigToHclTerraform(struct?: OrgDeviceprofileGatewayPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ae_disable_lacp: {
      value: cdktf.booleanToHclTerraform(struct!.aeDisableLacp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ae_idx: {
      value: cdktf.stringToHclTerraform(struct!.aeIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ae_lacp_force_up: {
      value: cdktf.booleanToHclTerraform(struct!.aeLacpForceUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregated: {
      value: cdktf.booleanToHclTerraform(struct!.aggregated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_autoneg: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoneg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dsl_type: {
      value: cdktf.stringToHclTerraform(struct!.dslType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsl_vci: {
      value: cdktf.numberToHclTerraform(struct!.dslVci),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dsl_vpi: {
      value: cdktf.numberToHclTerraform(struct!.dslVpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplex: {
      value: cdktf.stringToHclTerraform(struct!.duplex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_config: {
      value: orgDeviceprofileGatewayPortConfigIpConfigToHclTerraform(struct!.ipConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayPortConfigIpConfig",
    },
    lte_apn: {
      value: cdktf.stringToHclTerraform(struct!.lteApn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte_auth: {
      value: cdktf.stringToHclTerraform(struct!.lteAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte_backup: {
      value: cdktf.booleanToHclTerraform(struct!.lteBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lte_password: {
      value: cdktf.stringToHclTerraform(struct!.ltePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lte_username: {
      value: cdktf.stringToHclTerraform(struct!.lteUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    outer_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.outerVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poe_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.poeDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_network: {
      value: cdktf.stringToHclTerraform(struct!.portNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_dscp: {
      value: cdktf.booleanToHclTerraform(struct!.preserveDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redundant: {
      value: cdktf.booleanToHclTerraform(struct!.redundant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redundant_group: {
      value: cdktf.numberToHclTerraform(struct!.redundantGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reth_idx: {
      value: cdktf.stringToHclTerraform(struct!.rethIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reth_node: {
      value: cdktf.stringToHclTerraform(struct!.rethNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reth_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rethNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssr_no_virtual_mac: {
      value: cdktf.booleanToHclTerraform(struct!.ssrNoVirtualMac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    svr_port_range: {
      value: cdktf.stringToHclTerraform(struct!.svrPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_shaping: {
      value: orgDeviceprofileGatewayPortConfigTrafficShapingToHclTerraform(struct!.trafficShaping),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayPortConfigTrafficShaping",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_paths: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayPortConfigVpnPathsToHclTerraform)(struct!.vpnPaths),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayPortConfigVpnPathsMap",
    },
    wan_arp_policer: {
      value: cdktf.stringToHclTerraform(struct!.wanArpPolicer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_disable_speedtest: {
      value: cdktf.booleanToHclTerraform(struct!.wanDisableSpeedtest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wan_ext_ip: {
      value: cdktf.stringToHclTerraform(struct!.wanExtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_ext_ip6: {
      value: cdktf.stringToHclTerraform(struct!.wanExtIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_extra_routes: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayPortConfigWanExtraRoutesToHclTerraform)(struct!.wanExtraRoutes),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayPortConfigWanExtraRoutesMap",
    },
    wan_extra_routes6: {
      value: cdktf.hashMapperHcl(orgDeviceprofileGatewayPortConfigWanExtraRoutes6ToHclTerraform)(struct!.wanExtraRoutes6),
      isBlock: true,
      type: "map",
      storageClassType: "OrgDeviceprofileGatewayPortConfigWanExtraRoutes6Map",
    },
    wan_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wanNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wan_probe_override: {
      value: orgDeviceprofileGatewayPortConfigWanProbeOverrideToHclTerraform(struct!.wanProbeOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayPortConfigWanProbeOverride",
    },
    wan_source_nat: {
      value: orgDeviceprofileGatewayPortConfigWanSourceNatToHclTerraform(struct!.wanSourceNat),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayPortConfigWanSourceNat",
    },
    wan_type: {
      value: cdktf.stringToHclTerraform(struct!.wanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayPortConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aeDisableLacp !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeDisableLacp = this._aeDisableLacp;
    }
    if (this._aeIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeIdx = this._aeIdx;
    }
    if (this._aeLacpForceUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeLacpForceUp = this._aeLacpForceUp;
    }
    if (this._aggregated !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregated = this._aggregated;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoneg !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoneg = this._disableAutoneg;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dslType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslType = this._dslType;
    }
    if (this._dslVci !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslVci = this._dslVci;
    }
    if (this._dslVpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslVpi = this._dslVpi;
    }
    if (this._duplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplex = this._duplex;
    }
    if (this._ipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfig = this._ipConfig?.internalValue;
    }
    if (this._lteApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lteApn = this._lteApn;
    }
    if (this._lteAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lteAuth = this._lteAuth;
    }
    if (this._lteBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lteBackup = this._lteBackup;
    }
    if (this._ltePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltePassword = this._ltePassword;
    }
    if (this._lteUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.lteUsername = this._lteUsername;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._outerVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outerVlanId = this._outerVlanId;
    }
    if (this._poeDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeDisabled = this._poeDisabled;
    }
    if (this._portNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNetwork = this._portNetwork;
    }
    if (this._preserveDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDscp = this._preserveDscp;
    }
    if (this._redundant !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundant = this._redundant;
    }
    if (this._redundantGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantGroup = this._redundantGroup;
    }
    if (this._rethIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rethIdx = this._rethIdx;
    }
    if (this._rethNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rethNode = this._rethNode;
    }
    if (this._rethNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rethNodes = this._rethNodes;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._ssrNoVirtualMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssrNoVirtualMac = this._ssrNoVirtualMac;
    }
    if (this._svrPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrPortRange = this._svrPortRange;
    }
    if (this._trafficShaping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShaping = this._trafficShaping?.internalValue;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vpnPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnPaths = this._vpnPaths?.internalValue;
    }
    if (this._wanArpPolicer !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanArpPolicer = this._wanArpPolicer;
    }
    if (this._wanDisableSpeedtest !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanDisableSpeedtest = this._wanDisableSpeedtest;
    }
    if (this._wanExtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanExtIp = this._wanExtIp;
    }
    if (this._wanExtIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanExtIp6 = this._wanExtIp6;
    }
    if (this._wanExtraRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanExtraRoutes = this._wanExtraRoutes?.internalValue;
    }
    if (this._wanExtraRoutes6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanExtraRoutes6 = this._wanExtraRoutes6?.internalValue;
    }
    if (this._wanNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanNetworks = this._wanNetworks;
    }
    if (this._wanProbeOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanProbeOverride = this._wanProbeOverride?.internalValue;
    }
    if (this._wanSourceNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanSourceNat = this._wanSourceNat?.internalValue;
    }
    if (this._wanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanType = this._wanType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aeDisableLacp = undefined;
      this._aeIdx = undefined;
      this._aeLacpForceUp = undefined;
      this._aggregated = undefined;
      this._critical = undefined;
      this._description = undefined;
      this._disableAutoneg = undefined;
      this._disabled = undefined;
      this._dslType = undefined;
      this._dslVci = undefined;
      this._dslVpi = undefined;
      this._duplex = undefined;
      this._ipConfig.internalValue = undefined;
      this._lteApn = undefined;
      this._lteAuth = undefined;
      this._lteBackup = undefined;
      this._ltePassword = undefined;
      this._lteUsername = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._networks = undefined;
      this._outerVlanId = undefined;
      this._poeDisabled = undefined;
      this._portNetwork = undefined;
      this._preserveDscp = undefined;
      this._redundant = undefined;
      this._redundantGroup = undefined;
      this._rethIdx = undefined;
      this._rethNode = undefined;
      this._rethNodes = undefined;
      this._speed = undefined;
      this._ssrNoVirtualMac = undefined;
      this._svrPortRange = undefined;
      this._trafficShaping.internalValue = undefined;
      this._usage = undefined;
      this._vlanId = undefined;
      this._vpnPaths.internalValue = undefined;
      this._wanArpPolicer = undefined;
      this._wanDisableSpeedtest = undefined;
      this._wanExtIp = undefined;
      this._wanExtIp6 = undefined;
      this._wanExtraRoutes.internalValue = undefined;
      this._wanExtraRoutes6.internalValue = undefined;
      this._wanNetworks = undefined;
      this._wanProbeOverride.internalValue = undefined;
      this._wanSourceNat.internalValue = undefined;
      this._wanType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aeDisableLacp = value.aeDisableLacp;
      this._aeIdx = value.aeIdx;
      this._aeLacpForceUp = value.aeLacpForceUp;
      this._aggregated = value.aggregated;
      this._critical = value.critical;
      this._description = value.description;
      this._disableAutoneg = value.disableAutoneg;
      this._disabled = value.disabled;
      this._dslType = value.dslType;
      this._dslVci = value.dslVci;
      this._dslVpi = value.dslVpi;
      this._duplex = value.duplex;
      this._ipConfig.internalValue = value.ipConfig;
      this._lteApn = value.lteApn;
      this._lteAuth = value.lteAuth;
      this._lteBackup = value.lteBackup;
      this._ltePassword = value.ltePassword;
      this._lteUsername = value.lteUsername;
      this._mtu = value.mtu;
      this._name = value.name;
      this._networks = value.networks;
      this._outerVlanId = value.outerVlanId;
      this._poeDisabled = value.poeDisabled;
      this._portNetwork = value.portNetwork;
      this._preserveDscp = value.preserveDscp;
      this._redundant = value.redundant;
      this._redundantGroup = value.redundantGroup;
      this._rethIdx = value.rethIdx;
      this._rethNode = value.rethNode;
      this._rethNodes = value.rethNodes;
      this._speed = value.speed;
      this._ssrNoVirtualMac = value.ssrNoVirtualMac;
      this._svrPortRange = value.svrPortRange;
      this._trafficShaping.internalValue = value.trafficShaping;
      this._usage = value.usage;
      this._vlanId = value.vlanId;
      this._vpnPaths.internalValue = value.vpnPaths;
      this._wanArpPolicer = value.wanArpPolicer;
      this._wanDisableSpeedtest = value.wanDisableSpeedtest;
      this._wanExtIp = value.wanExtIp;
      this._wanExtIp6 = value.wanExtIp6;
      this._wanExtraRoutes.internalValue = value.wanExtraRoutes;
      this._wanExtraRoutes6.internalValue = value.wanExtraRoutes6;
      this._wanNetworks = value.wanNetworks;
      this._wanProbeOverride.internalValue = value.wanProbeOverride;
      this._wanSourceNat.internalValue = value.wanSourceNat;
      this._wanType = value.wanType;
    }
  }

  // ae_disable_lacp - computed: false, optional: true, required: false
  private _aeDisableLacp?: boolean | cdktf.IResolvable; 
  public get aeDisableLacp() {
    return this.getBooleanAttribute('ae_disable_lacp');
  }
  public set aeDisableLacp(value: boolean | cdktf.IResolvable) {
    this._aeDisableLacp = value;
  }
  public resetAeDisableLacp() {
    this._aeDisableLacp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeDisableLacpInput() {
    return this._aeDisableLacp;
  }

  // ae_idx - computed: false, optional: true, required: false
  private _aeIdx?: string; 
  public get aeIdx() {
    return this.getStringAttribute('ae_idx');
  }
  public set aeIdx(value: string) {
    this._aeIdx = value;
  }
  public resetAeIdx() {
    this._aeIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeIdxInput() {
    return this._aeIdx;
  }

  // ae_lacp_force_up - computed: false, optional: true, required: false
  private _aeLacpForceUp?: boolean | cdktf.IResolvable; 
  public get aeLacpForceUp() {
    return this.getBooleanAttribute('ae_lacp_force_up');
  }
  public set aeLacpForceUp(value: boolean | cdktf.IResolvable) {
    this._aeLacpForceUp = value;
  }
  public resetAeLacpForceUp() {
    this._aeLacpForceUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeLacpForceUpInput() {
    return this._aeLacpForceUp;
  }

  // aggregated - computed: false, optional: true, required: false
  private _aggregated?: boolean | cdktf.IResolvable; 
  public get aggregated() {
    return this.getBooleanAttribute('aggregated');
  }
  public set aggregated(value: boolean | cdktf.IResolvable) {
    this._aggregated = value;
  }
  public resetAggregated() {
    this._aggregated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedInput() {
    return this._aggregated;
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
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

  // disable_autoneg - computed: false, optional: true, required: false
  private _disableAutoneg?: boolean | cdktf.IResolvable; 
  public get disableAutoneg() {
    return this.getBooleanAttribute('disable_autoneg');
  }
  public set disableAutoneg(value: boolean | cdktf.IResolvable) {
    this._disableAutoneg = value;
  }
  public resetDisableAutoneg() {
    this._disableAutoneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutonegInput() {
    return this._disableAutoneg;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dsl_type - computed: false, optional: true, required: false
  private _dslType?: string; 
  public get dslType() {
    return this.getStringAttribute('dsl_type');
  }
  public set dslType(value: string) {
    this._dslType = value;
  }
  public resetDslType() {
    this._dslType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dslTypeInput() {
    return this._dslType;
  }

  // dsl_vci - computed: false, optional: true, required: false
  private _dslVci?: number; 
  public get dslVci() {
    return this.getNumberAttribute('dsl_vci');
  }
  public set dslVci(value: number) {
    this._dslVci = value;
  }
  public resetDslVci() {
    this._dslVci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dslVciInput() {
    return this._dslVci;
  }

  // dsl_vpi - computed: false, optional: true, required: false
  private _dslVpi?: number; 
  public get dslVpi() {
    return this.getNumberAttribute('dsl_vpi');
  }
  public set dslVpi(value: number) {
    this._dslVpi = value;
  }
  public resetDslVpi() {
    this._dslVpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dslVpiInput() {
    return this._dslVpi;
  }

  // duplex - computed: false, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // ip_config - computed: false, optional: true, required: false
  private _ipConfig = new OrgDeviceprofileGatewayPortConfigIpConfigOutputReference(this, "ip_config");
  public get ipConfig() {
    return this._ipConfig;
  }
  public putIpConfig(value: OrgDeviceprofileGatewayPortConfigIpConfig) {
    this._ipConfig.internalValue = value;
  }
  public resetIpConfig() {
    this._ipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigInput() {
    return this._ipConfig.internalValue;
  }

  // lte_apn - computed: false, optional: true, required: false
  private _lteApn?: string; 
  public get lteApn() {
    return this.getStringAttribute('lte_apn');
  }
  public set lteApn(value: string) {
    this._lteApn = value;
  }
  public resetLteApn() {
    this._lteApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteApnInput() {
    return this._lteApn;
  }

  // lte_auth - computed: false, optional: true, required: false
  private _lteAuth?: string; 
  public get lteAuth() {
    return this.getStringAttribute('lte_auth');
  }
  public set lteAuth(value: string) {
    this._lteAuth = value;
  }
  public resetLteAuth() {
    this._lteAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteAuthInput() {
    return this._lteAuth;
  }

  // lte_backup - computed: false, optional: true, required: false
  private _lteBackup?: boolean | cdktf.IResolvable; 
  public get lteBackup() {
    return this.getBooleanAttribute('lte_backup');
  }
  public set lteBackup(value: boolean | cdktf.IResolvable) {
    this._lteBackup = value;
  }
  public resetLteBackup() {
    this._lteBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteBackupInput() {
    return this._lteBackup;
  }

  // lte_password - computed: false, optional: true, required: false
  private _ltePassword?: string; 
  public get ltePassword() {
    return this.getStringAttribute('lte_password');
  }
  public set ltePassword(value: string) {
    this._ltePassword = value;
  }
  public resetLtePassword() {
    this._ltePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltePasswordInput() {
    return this._ltePassword;
  }

  // lte_username - computed: false, optional: true, required: false
  private _lteUsername?: string; 
  public get lteUsername() {
    return this.getStringAttribute('lte_username');
  }
  public set lteUsername(value: string) {
    this._lteUsername = value;
  }
  public resetLteUsername() {
    this._lteUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteUsernameInput() {
    return this._lteUsername;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
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

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // outer_vlan_id - computed: false, optional: true, required: false
  private _outerVlanId?: number; 
  public get outerVlanId() {
    return this.getNumberAttribute('outer_vlan_id');
  }
  public set outerVlanId(value: number) {
    this._outerVlanId = value;
  }
  public resetOuterVlanId() {
    this._outerVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerVlanIdInput() {
    return this._outerVlanId;
  }

  // poe_disabled - computed: false, optional: true, required: false
  private _poeDisabled?: boolean | cdktf.IResolvable; 
  public get poeDisabled() {
    return this.getBooleanAttribute('poe_disabled');
  }
  public set poeDisabled(value: boolean | cdktf.IResolvable) {
    this._poeDisabled = value;
  }
  public resetPoeDisabled() {
    this._poeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeDisabledInput() {
    return this._poeDisabled;
  }

  // port_network - computed: false, optional: true, required: false
  private _portNetwork?: string; 
  public get portNetwork() {
    return this.getStringAttribute('port_network');
  }
  public set portNetwork(value: string) {
    this._portNetwork = value;
  }
  public resetPortNetwork() {
    this._portNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNetworkInput() {
    return this._portNetwork;
  }

  // preserve_dscp - computed: false, optional: true, required: false
  private _preserveDscp?: boolean | cdktf.IResolvable; 
  public get preserveDscp() {
    return this.getBooleanAttribute('preserve_dscp');
  }
  public set preserveDscp(value: boolean | cdktf.IResolvable) {
    this._preserveDscp = value;
  }
  public resetPreserveDscp() {
    this._preserveDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDscpInput() {
    return this._preserveDscp;
  }

  // redundant - computed: false, optional: true, required: false
  private _redundant?: boolean | cdktf.IResolvable; 
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }
  public set redundant(value: boolean | cdktf.IResolvable) {
    this._redundant = value;
  }
  public resetRedundant() {
    this._redundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInput() {
    return this._redundant;
  }

  // redundant_group - computed: false, optional: true, required: false
  private _redundantGroup?: number; 
  public get redundantGroup() {
    return this.getNumberAttribute('redundant_group');
  }
  public set redundantGroup(value: number) {
    this._redundantGroup = value;
  }
  public resetRedundantGroup() {
    this._redundantGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantGroupInput() {
    return this._redundantGroup;
  }

  // reth_idx - computed: false, optional: true, required: false
  private _rethIdx?: string; 
  public get rethIdx() {
    return this.getStringAttribute('reth_idx');
  }
  public set rethIdx(value: string) {
    this._rethIdx = value;
  }
  public resetRethIdx() {
    this._rethIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rethIdxInput() {
    return this._rethIdx;
  }

  // reth_node - computed: false, optional: true, required: false
  private _rethNode?: string; 
  public get rethNode() {
    return this.getStringAttribute('reth_node');
  }
  public set rethNode(value: string) {
    this._rethNode = value;
  }
  public resetRethNode() {
    this._rethNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rethNodeInput() {
    return this._rethNode;
  }

  // reth_nodes - computed: false, optional: true, required: false
  private _rethNodes?: string[]; 
  public get rethNodes() {
    return this.getListAttribute('reth_nodes');
  }
  public set rethNodes(value: string[]) {
    this._rethNodes = value;
  }
  public resetRethNodes() {
    this._rethNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rethNodesInput() {
    return this._rethNodes;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // ssr_no_virtual_mac - computed: false, optional: true, required: false
  private _ssrNoVirtualMac?: boolean | cdktf.IResolvable; 
  public get ssrNoVirtualMac() {
    return this.getBooleanAttribute('ssr_no_virtual_mac');
  }
  public set ssrNoVirtualMac(value: boolean | cdktf.IResolvable) {
    this._ssrNoVirtualMac = value;
  }
  public resetSsrNoVirtualMac() {
    this._ssrNoVirtualMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssrNoVirtualMacInput() {
    return this._ssrNoVirtualMac;
  }

  // svr_port_range - computed: false, optional: true, required: false
  private _svrPortRange?: string; 
  public get svrPortRange() {
    return this.getStringAttribute('svr_port_range');
  }
  public set svrPortRange(value: string) {
    this._svrPortRange = value;
  }
  public resetSvrPortRange() {
    this._svrPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPortRangeInput() {
    return this._svrPortRange;
  }

  // traffic_shaping - computed: false, optional: true, required: false
  private _trafficShaping = new OrgDeviceprofileGatewayPortConfigTrafficShapingOutputReference(this, "traffic_shaping");
  public get trafficShaping() {
    return this._trafficShaping;
  }
  public putTrafficShaping(value: OrgDeviceprofileGatewayPortConfigTrafficShaping) {
    this._trafficShaping.internalValue = value;
  }
  public resetTrafficShaping() {
    this._trafficShaping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingInput() {
    return this._trafficShaping.internalValue;
  }

  // usage - computed: false, optional: false, required: true
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpn_paths - computed: false, optional: true, required: false
  private _vpnPaths = new OrgDeviceprofileGatewayPortConfigVpnPathsMap(this, "vpn_paths");
  public get vpnPaths() {
    return this._vpnPaths;
  }
  public putVpnPaths(value: { [key: string]: OrgDeviceprofileGatewayPortConfigVpnPaths } | cdktf.IResolvable) {
    this._vpnPaths.internalValue = value;
  }
  public resetVpnPaths() {
    this._vpnPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPathsInput() {
    return this._vpnPaths.internalValue;
  }

  // wan_arp_policer - computed: false, optional: true, required: false
  private _wanArpPolicer?: string; 
  public get wanArpPolicer() {
    return this.getStringAttribute('wan_arp_policer');
  }
  public set wanArpPolicer(value: string) {
    this._wanArpPolicer = value;
  }
  public resetWanArpPolicer() {
    this._wanArpPolicer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanArpPolicerInput() {
    return this._wanArpPolicer;
  }

  // wan_disable_speedtest - computed: false, optional: true, required: false
  private _wanDisableSpeedtest?: boolean | cdktf.IResolvable; 
  public get wanDisableSpeedtest() {
    return this.getBooleanAttribute('wan_disable_speedtest');
  }
  public set wanDisableSpeedtest(value: boolean | cdktf.IResolvable) {
    this._wanDisableSpeedtest = value;
  }
  public resetWanDisableSpeedtest() {
    this._wanDisableSpeedtest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanDisableSpeedtestInput() {
    return this._wanDisableSpeedtest;
  }

  // wan_ext_ip - computed: false, optional: true, required: false
  private _wanExtIp?: string; 
  public get wanExtIp() {
    return this.getStringAttribute('wan_ext_ip');
  }
  public set wanExtIp(value: string) {
    this._wanExtIp = value;
  }
  public resetWanExtIp() {
    this._wanExtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanExtIpInput() {
    return this._wanExtIp;
  }

  // wan_ext_ip6 - computed: false, optional: true, required: false
  private _wanExtIp6?: string; 
  public get wanExtIp6() {
    return this.getStringAttribute('wan_ext_ip6');
  }
  public set wanExtIp6(value: string) {
    this._wanExtIp6 = value;
  }
  public resetWanExtIp6() {
    this._wanExtIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanExtIp6Input() {
    return this._wanExtIp6;
  }

  // wan_extra_routes - computed: false, optional: true, required: false
  private _wanExtraRoutes = new OrgDeviceprofileGatewayPortConfigWanExtraRoutesMap(this, "wan_extra_routes");
  public get wanExtraRoutes() {
    return this._wanExtraRoutes;
  }
  public putWanExtraRoutes(value: { [key: string]: OrgDeviceprofileGatewayPortConfigWanExtraRoutes } | cdktf.IResolvable) {
    this._wanExtraRoutes.internalValue = value;
  }
  public resetWanExtraRoutes() {
    this._wanExtraRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanExtraRoutesInput() {
    return this._wanExtraRoutes.internalValue;
  }

  // wan_extra_routes6 - computed: false, optional: true, required: false
  private _wanExtraRoutes6 = new OrgDeviceprofileGatewayPortConfigWanExtraRoutes6Map(this, "wan_extra_routes6");
  public get wanExtraRoutes6() {
    return this._wanExtraRoutes6;
  }
  public putWanExtraRoutes6(value: { [key: string]: OrgDeviceprofileGatewayPortConfigWanExtraRoutes6 } | cdktf.IResolvable) {
    this._wanExtraRoutes6.internalValue = value;
  }
  public resetWanExtraRoutes6() {
    this._wanExtraRoutes6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanExtraRoutes6Input() {
    return this._wanExtraRoutes6.internalValue;
  }

  // wan_networks - computed: false, optional: true, required: false
  private _wanNetworks?: string[]; 
  public get wanNetworks() {
    return this.getListAttribute('wan_networks');
  }
  public set wanNetworks(value: string[]) {
    this._wanNetworks = value;
  }
  public resetWanNetworks() {
    this._wanNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNetworksInput() {
    return this._wanNetworks;
  }

  // wan_probe_override - computed: false, optional: true, required: false
  private _wanProbeOverride = new OrgDeviceprofileGatewayPortConfigWanProbeOverrideOutputReference(this, "wan_probe_override");
  public get wanProbeOverride() {
    return this._wanProbeOverride;
  }
  public putWanProbeOverride(value: OrgDeviceprofileGatewayPortConfigWanProbeOverride) {
    this._wanProbeOverride.internalValue = value;
  }
  public resetWanProbeOverride() {
    this._wanProbeOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanProbeOverrideInput() {
    return this._wanProbeOverride.internalValue;
  }

  // wan_source_nat - computed: false, optional: true, required: false
  private _wanSourceNat = new OrgDeviceprofileGatewayPortConfigWanSourceNatOutputReference(this, "wan_source_nat");
  public get wanSourceNat() {
    return this._wanSourceNat;
  }
  public putWanSourceNat(value: OrgDeviceprofileGatewayPortConfigWanSourceNat) {
    this._wanSourceNat.internalValue = value;
  }
  public resetWanSourceNat() {
    this._wanSourceNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanSourceNatInput() {
    return this._wanSourceNat.internalValue;
  }

  // wan_type - computed: false, optional: true, required: false
  private _wanType?: string; 
  public get wanType() {
    return this.getStringAttribute('wan_type');
  }
  public set wanType(value: string) {
    this._wanType = value;
  }
  public resetWanType() {
    this._wanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanTypeInput() {
    return this._wanType;
  }
}

export class OrgDeviceprofileGatewayPortConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayPortConfig } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayPortConfigOutputReference {
    return new OrgDeviceprofileGatewayPortConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayRoutingPoliciesTermsActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#accept OrgDeviceprofileGateway#accept}
  */
  readonly accept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#add_community OrgDeviceprofileGateway#add_community}
  */
  readonly addCommunity?: string[];
  /**
  * For SSR, hub decides how VRF routes are leaked on spoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#add_target_vrfs OrgDeviceprofileGateway#add_target_vrfs}
  */
  readonly addTargetVrfs?: string[];
  /**
  * When used as export policy, optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#community OrgDeviceprofileGateway#community}
  */
  readonly community?: string[];
  /**
  * When used as export policy, optional. To exclude certain AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#exclude_as_path OrgDeviceprofileGateway#exclude_as_path}
  */
  readonly excludeAsPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#exclude_community OrgDeviceprofileGateway#exclude_community}
  */
  readonly excludeCommunity?: string[];
  /**
  * When used as export policy, optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#export_communities OrgDeviceprofileGateway#export_communities}
  */
  readonly exportCommunities?: string[];
  /**
  * Optional, for an import policy, local_preference can be changed, value in range 1-4294967294. Can be a Variable (e.g. `{{bgp_as}}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#local_preference OrgDeviceprofileGateway#local_preference}
  */
  readonly localPreference?: string;
  /**
  * When used as export policy, optional. By default, the local AS will be prepended, to change it. Can be a Variable (e.g. `{{as_path}}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#prepend_as_path OrgDeviceprofileGateway#prepend_as_path}
  */
  readonly prependAsPath?: string[];
}

export function orgDeviceprofileGatewayRoutingPoliciesTermsActionsToTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept: cdktf.booleanToTerraform(struct!.accept),
    add_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addCommunity),
    add_target_vrfs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addTargetVrfs),
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    exclude_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeAsPath),
    exclude_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeCommunity),
    export_communities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportCommunities),
    local_preference: cdktf.stringToTerraform(struct!.localPreference),
    prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prependAsPath),
  }
}


export function orgDeviceprofileGatewayRoutingPoliciesTermsActionsToHclTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept: {
      value: cdktf.booleanToHclTerraform(struct!.accept),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    add_target_vrfs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addTargetVrfs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeAsPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    export_communities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportCommunities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_preference: {
      value: cdktf.stringToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepend_as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prependAsPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayRoutingPoliciesTermsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayRoutingPoliciesTermsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accept !== undefined) {
      hasAnyValues = true;
      internalValueResult.accept = this._accept;
    }
    if (this._addCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.addCommunity = this._addCommunity;
    }
    if (this._addTargetVrfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addTargetVrfs = this._addTargetVrfs;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._excludeAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAsPath = this._excludeAsPath;
    }
    if (this._excludeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeCommunity = this._excludeCommunity;
    }
    if (this._exportCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportCommunities = this._exportCommunities;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._prependAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.prependAsPath = this._prependAsPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayRoutingPoliciesTermsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accept = undefined;
      this._addCommunity = undefined;
      this._addTargetVrfs = undefined;
      this._community = undefined;
      this._excludeAsPath = undefined;
      this._excludeCommunity = undefined;
      this._exportCommunities = undefined;
      this._localPreference = undefined;
      this._prependAsPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accept = value.accept;
      this._addCommunity = value.addCommunity;
      this._addTargetVrfs = value.addTargetVrfs;
      this._community = value.community;
      this._excludeAsPath = value.excludeAsPath;
      this._excludeCommunity = value.excludeCommunity;
      this._exportCommunities = value.exportCommunities;
      this._localPreference = value.localPreference;
      this._prependAsPath = value.prependAsPath;
    }
  }

  // accept - computed: false, optional: true, required: false
  private _accept?: boolean | cdktf.IResolvable; 
  public get accept() {
    return this.getBooleanAttribute('accept');
  }
  public set accept(value: boolean | cdktf.IResolvable) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept;
  }

  // add_community - computed: false, optional: true, required: false
  private _addCommunity?: string[]; 
  public get addCommunity() {
    return this.getListAttribute('add_community');
  }
  public set addCommunity(value: string[]) {
    this._addCommunity = value;
  }
  public resetAddCommunity() {
    this._addCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCommunityInput() {
    return this._addCommunity;
  }

  // add_target_vrfs - computed: false, optional: true, required: false
  private _addTargetVrfs?: string[]; 
  public get addTargetVrfs() {
    return this.getListAttribute('add_target_vrfs');
  }
  public set addTargetVrfs(value: string[]) {
    this._addTargetVrfs = value;
  }
  public resetAddTargetVrfs() {
    this._addTargetVrfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addTargetVrfsInput() {
    return this._addTargetVrfs;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // exclude_as_path - computed: false, optional: true, required: false
  private _excludeAsPath?: string[]; 
  public get excludeAsPath() {
    return this.getListAttribute('exclude_as_path');
  }
  public set excludeAsPath(value: string[]) {
    this._excludeAsPath = value;
  }
  public resetExcludeAsPath() {
    this._excludeAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAsPathInput() {
    return this._excludeAsPath;
  }

  // exclude_community - computed: false, optional: true, required: false
  private _excludeCommunity?: string[]; 
  public get excludeCommunity() {
    return this.getListAttribute('exclude_community');
  }
  public set excludeCommunity(value: string[]) {
    this._excludeCommunity = value;
  }
  public resetExcludeCommunity() {
    this._excludeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCommunityInput() {
    return this._excludeCommunity;
  }

  // export_communities - computed: false, optional: true, required: false
  private _exportCommunities?: string[]; 
  public get exportCommunities() {
    return this.getListAttribute('export_communities');
  }
  public set exportCommunities(value: string[]) {
    this._exportCommunities = value;
  }
  public resetExportCommunities() {
    this._exportCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportCommunitiesInput() {
    return this._exportCommunities;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: string; 
  public get localPreference() {
    return this.getStringAttribute('local_preference');
  }
  public set localPreference(value: string) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: string[]; 
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }
  public set prependAsPath(value: string[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
  }
}
export interface OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#route OrgDeviceprofileGateway#route}
  */
  readonly route?: string;
  /**
  * Name of the vrf instance, it can also be the name of the VPN or wan if they
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vrf_name OrgDeviceprofileGateway#vrf_name}
  */
  readonly vrfName?: string;
}

export function orgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExistsToTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route: cdktf.stringToTerraform(struct!.route),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function orgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExistsToHclTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExistsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._route = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._route = value.route;
      this._vrfName = value.vrfName;
    }
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}
export interface OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#max_jitter OrgDeviceprofileGateway#max_jitter}
  */
  readonly maxJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#max_latency OrgDeviceprofileGateway#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#max_loss OrgDeviceprofileGateway#max_loss}
  */
  readonly maxLoss?: number;
}

export function orgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSlaToTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_jitter: cdktf.numberToTerraform(struct!.maxJitter),
    max_latency: cdktf.numberToTerraform(struct!.maxLatency),
    max_loss: cdktf.numberToTerraform(struct!.maxLoss),
  }
}


export function orgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSlaToHclTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_jitter: {
      value: cdktf.numberToHclTerraform(struct!.maxJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_latency: {
      value: cdktf.numberToHclTerraform(struct!.maxLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_loss: {
      value: cdktf.numberToHclTerraform(struct!.maxLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxJitter = this._maxJitter;
    }
    if (this._maxLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLatency = this._maxLatency;
    }
    if (this._maxLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLoss = this._maxLoss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxJitter = undefined;
      this._maxLatency = undefined;
      this._maxLoss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxJitter = value.maxJitter;
      this._maxLatency = value.maxLatency;
      this._maxLoss = value.maxLoss;
    }
  }

  // max_jitter - computed: false, optional: true, required: false
  private _maxJitter?: number; 
  public get maxJitter() {
    return this.getNumberAttribute('max_jitter');
  }
  public set maxJitter(value: number) {
    this._maxJitter = value;
  }
  public resetMaxJitter() {
    this._maxJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJitterInput() {
    return this._maxJitter;
  }

  // max_latency - computed: false, optional: true, required: false
  private _maxLatency?: number; 
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }
  public set maxLatency(value: number) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency;
  }

  // max_loss - computed: false, optional: true, required: false
  private _maxLoss?: number; 
  public get maxLoss() {
    return this.getNumberAttribute('max_loss');
  }
  public set maxLoss(value: number) {
    this._maxLoss = value;
  }
  public resetMaxLoss() {
    this._maxLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLossInput() {
    return this._maxLoss;
  }
}
export interface OrgDeviceprofileGatewayRoutingPoliciesTermsMatching {
  /**
  * BGP AS, value in range 1-4294967294. Can be a Variable (e.g. `{{bgp_as}}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#as_path OrgDeviceprofileGateway#as_path}
  */
  readonly asPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#community OrgDeviceprofileGateway#community}
  */
  readonly community?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#network OrgDeviceprofileGateway#network}
  */
  readonly network?: string[];
  /**
  * zero or more criteria/filter can be specified to match the term, all criteria have to be met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#prefix OrgDeviceprofileGateway#prefix}
  */
  readonly prefix?: string[];
  /**
  * enum: `aggregate`, `bgp`, `direct`, `ospf`, `static` (SRX Only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#protocol OrgDeviceprofileGateway#protocol}
  */
  readonly protocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#route_exists OrgDeviceprofileGateway#route_exists}
  */
  readonly routeExists?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists;
  /**
  * overlay-facing criteria (used for bgp_config where via=vpn)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vpn_neighbor_mac OrgDeviceprofileGateway#vpn_neighbor_mac}
  */
  readonly vpnNeighborMac?: string[];
  /**
  * overlay-facing criteria (used for bgp_config where via=vpn). ordered-
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vpn_path OrgDeviceprofileGateway#vpn_path}
  */
  readonly vpnPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#vpn_path_sla OrgDeviceprofileGateway#vpn_path_sla}
  */
  readonly vpnPathSla?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla;
}

export function orgDeviceprofileGatewayRoutingPoliciesTermsMatchingToTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asPath),
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    network: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.network),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    route_exists: orgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExistsToTerraform(struct!.routeExists),
    vpn_neighbor_mac: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnNeighborMac),
    vpn_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnPath),
    vpn_path_sla: orgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSlaToTerraform(struct!.vpnPathSla),
  }
}


export function orgDeviceprofileGatewayRoutingPoliciesTermsMatchingToHclTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.network),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    route_exists: {
      value: orgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExistsToHclTerraform(struct!.routeExists),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists",
    },
    vpn_neighbor_mac: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnNeighborMac),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpn_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpn_path_sla: {
      value: orgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSlaToHclTerraform(struct!.vpnPathSla),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayRoutingPoliciesTermsMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPath = this._asPath;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routeExists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeExists = this._routeExists?.internalValue;
    }
    if (this._vpnNeighborMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnNeighborMac = this._vpnNeighborMac;
    }
    if (this._vpnPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnPath = this._vpnPath;
    }
    if (this._vpnPathSla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnPathSla = this._vpnPathSla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayRoutingPoliciesTermsMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPath = undefined;
      this._community = undefined;
      this._network = undefined;
      this._prefix = undefined;
      this._protocol = undefined;
      this._routeExists.internalValue = undefined;
      this._vpnNeighborMac = undefined;
      this._vpnPath = undefined;
      this._vpnPathSla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPath = value.asPath;
      this._community = value.community;
      this._network = value.network;
      this._prefix = value.prefix;
      this._protocol = value.protocol;
      this._routeExists.internalValue = value.routeExists;
      this._vpnNeighborMac = value.vpnNeighborMac;
      this._vpnPath = value.vpnPath;
      this._vpnPathSla.internalValue = value.vpnPathSla;
    }
  }

  // as_path - computed: false, optional: true, required: false
  private _asPath?: string[]; 
  public get asPath() {
    return this.getListAttribute('as_path');
  }
  public set asPath(value: string[]) {
    this._asPath = value;
  }
  public resetAsPath() {
    this._asPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath;
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string[]; 
  public get network() {
    return this.getListAttribute('network');
  }
  public set network(value: string[]) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return this.getListAttribute('protocol');
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // route_exists - computed: false, optional: true, required: false
  private _routeExists = new OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExistsOutputReference(this, "route_exists");
  public get routeExists() {
    return this._routeExists;
  }
  public putRouteExists(value: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingRouteExists) {
    this._routeExists.internalValue = value;
  }
  public resetRouteExists() {
    this._routeExists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeExistsInput() {
    return this._routeExists.internalValue;
  }

  // vpn_neighbor_mac - computed: false, optional: true, required: false
  private _vpnNeighborMac?: string[]; 
  public get vpnNeighborMac() {
    return this.getListAttribute('vpn_neighbor_mac');
  }
  public set vpnNeighborMac(value: string[]) {
    this._vpnNeighborMac = value;
  }
  public resetVpnNeighborMac() {
    this._vpnNeighborMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnNeighborMacInput() {
    return this._vpnNeighborMac;
  }

  // vpn_path - computed: false, optional: true, required: false
  private _vpnPath?: string[]; 
  public get vpnPath() {
    return this.getListAttribute('vpn_path');
  }
  public set vpnPath(value: string[]) {
    this._vpnPath = value;
  }
  public resetVpnPath() {
    this._vpnPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPathInput() {
    return this._vpnPath;
  }

  // vpn_path_sla - computed: false, optional: true, required: false
  private _vpnPathSla = new OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSlaOutputReference(this, "vpn_path_sla");
  public get vpnPathSla() {
    return this._vpnPathSla;
  }
  public putVpnPathSla(value: OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingVpnPathSla) {
    this._vpnPathSla.internalValue = value;
  }
  public resetVpnPathSla() {
    this._vpnPathSla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPathSlaInput() {
    return this._vpnPathSla.internalValue;
  }
}
export interface OrgDeviceprofileGatewayRoutingPoliciesTerms {
  /**
  * When used as import policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#actions OrgDeviceprofileGateway#actions}
  */
  readonly actions?: OrgDeviceprofileGatewayRoutingPoliciesTermsActions;
  /**
  * zero or more criteria/filter can be specified to match the term, all criteria have to be met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#matching OrgDeviceprofileGateway#matching}
  */
  readonly matching?: OrgDeviceprofileGatewayRoutingPoliciesTermsMatching;
}

export function orgDeviceprofileGatewayRoutingPoliciesTermsToTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: orgDeviceprofileGatewayRoutingPoliciesTermsActionsToTerraform(struct!.actions),
    matching: orgDeviceprofileGatewayRoutingPoliciesTermsMatchingToTerraform(struct!.matching),
  }
}


export function orgDeviceprofileGatewayRoutingPoliciesTermsToHclTerraform(struct?: OrgDeviceprofileGatewayRoutingPoliciesTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: orgDeviceprofileGatewayRoutingPoliciesTermsActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayRoutingPoliciesTermsActions",
    },
    matching: {
      value: orgDeviceprofileGatewayRoutingPoliciesTermsMatchingToHclTerraform(struct!.matching),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayRoutingPoliciesTermsMatching",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayRoutingPoliciesTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayRoutingPoliciesTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matching = this._matching?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayRoutingPoliciesTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._matching.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._matching.internalValue = value.matching;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new OrgDeviceprofileGatewayRoutingPoliciesTermsActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: OrgDeviceprofileGatewayRoutingPoliciesTermsActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matching - computed: false, optional: true, required: false
  private _matching = new OrgDeviceprofileGatewayRoutingPoliciesTermsMatchingOutputReference(this, "matching");
  public get matching() {
    return this._matching;
  }
  public putMatching(value: OrgDeviceprofileGatewayRoutingPoliciesTermsMatching) {
    this._matching.internalValue = value;
  }
  public resetMatching() {
    this._matching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching.internalValue;
  }
}

export class OrgDeviceprofileGatewayRoutingPoliciesTermsList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayRoutingPoliciesTerms[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayRoutingPoliciesTermsOutputReference {
    return new OrgDeviceprofileGatewayRoutingPoliciesTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayRoutingPolicies {
  /**
  * zero or more criteria/filter can be specified to match the term, all criteria have to be met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#terms OrgDeviceprofileGateway#terms}
  */
  readonly terms?: OrgDeviceprofileGatewayRoutingPoliciesTerms[] | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayRoutingPoliciesToTerraform(struct?: OrgDeviceprofileGatewayRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    terms: cdktf.listMapper(orgDeviceprofileGatewayRoutingPoliciesTermsToTerraform, false)(struct!.terms),
  }
}


export function orgDeviceprofileGatewayRoutingPoliciesToHclTerraform(struct?: OrgDeviceprofileGatewayRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    terms: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayRoutingPoliciesTermsToHclTerraform, false)(struct!.terms),
      isBlock: true,
      type: "set",
      storageClassType: "OrgDeviceprofileGatewayRoutingPoliciesTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayRoutingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayRoutingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._terms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terms = this._terms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayRoutingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._terms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._terms.internalValue = value.terms;
    }
  }

  // terms - computed: false, optional: true, required: false
  private _terms = new OrgDeviceprofileGatewayRoutingPoliciesTermsList(this, "terms", true);
  public get terms() {
    return this._terms;
  }
  public putTerms(value: OrgDeviceprofileGatewayRoutingPoliciesTerms[] | cdktf.IResolvable) {
    this._terms.internalValue = value;
  }
  public resetTerms() {
    this._terms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms.internalValue;
  }
}

export class OrgDeviceprofileGatewayRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayRoutingPolicies } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayRoutingPoliciesOutputReference {
    return new OrgDeviceprofileGatewayRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayServicePoliciesAntivirus {
  /**
  * org-level AV Profile can be used, this takes precedence over 'profile'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#avprofile_id OrgDeviceprofileGateway#avprofile_id}
  */
  readonly avprofileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Default / noftp / httponly / or keys from av_profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#profile OrgDeviceprofileGateway#profile}
  */
  readonly profile?: string;
}

export function orgDeviceprofileGatewayServicePoliciesAntivirusToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesAntivirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avprofile_id: cdktf.stringToTerraform(struct!.avprofileId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgDeviceprofileGatewayServicePoliciesAntivirusToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesAntivirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avprofile_id: {
      value: cdktf.stringToHclTerraform(struct!.avprofileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesAntivirus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avprofileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.avprofileId = this._avprofileId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesAntivirus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avprofileId = undefined;
      this._enabled = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avprofileId = value.avprofileId;
      this._enabled = value.enabled;
      this._profile = value.profile;
    }
  }

  // avprofile_id - computed: false, optional: true, required: false
  private _avprofileId?: string; 
  public get avprofileId() {
    return this.getStringAttribute('avprofile_id');
  }
  public set avprofileId(value: string) {
    this._avprofileId = value;
  }
  public resetAvprofileId() {
    this._avprofileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avprofileIdInput() {
    return this._avprofileId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // profile - computed: false, optional: true, required: false
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
}
export interface OrgDeviceprofileGatewayServicePoliciesAppqoe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayServicePoliciesAppqoeToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesAppqoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileGatewayServicePoliciesAppqoeToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesAppqoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesAppqoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesAppqoe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesAppqoe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileGatewayServicePoliciesEwf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#alert_only OrgDeviceprofileGateway#alert_only}
  */
  readonly alertOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#block_message OrgDeviceprofileGateway#block_message}
  */
  readonly blockMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `critical`, `standard`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#profile OrgDeviceprofileGateway#profile}
  */
  readonly profile?: string;
}

export function orgDeviceprofileGatewayServicePoliciesEwfToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesEwf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_only: cdktf.booleanToTerraform(struct!.alertOnly),
    block_message: cdktf.stringToTerraform(struct!.blockMessage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgDeviceprofileGatewayServicePoliciesEwfToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesEwf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_only: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_message: {
      value: cdktf.stringToHclTerraform(struct!.blockMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesEwfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesEwf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnly = this._alertOnly;
    }
    if (this._blockMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMessage = this._blockMessage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesEwf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertOnly = undefined;
      this._blockMessage = undefined;
      this._enabled = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertOnly = value.alertOnly;
      this._blockMessage = value.blockMessage;
      this._enabled = value.enabled;
      this._profile = value.profile;
    }
  }

  // alert_only - computed: false, optional: true, required: false
  private _alertOnly?: boolean | cdktf.IResolvable; 
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }
  public set alertOnly(value: boolean | cdktf.IResolvable) {
    this._alertOnly = value;
  }
  public resetAlertOnly() {
    this._alertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnlyInput() {
    return this._alertOnly;
  }

  // block_message - computed: false, optional: true, required: false
  private _blockMessage?: string; 
  public get blockMessage() {
    return this.getStringAttribute('block_message');
  }
  public set blockMessage(value: string) {
    this._blockMessage = value;
  }
  public resetBlockMessage() {
    this._blockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMessageInput() {
    return this._blockMessage;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // profile - computed: false, optional: true, required: false
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
}

export class OrgDeviceprofileGatewayServicePoliciesEwfList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayServicePoliciesEwf[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayServicePoliciesEwfOutputReference {
    return new OrgDeviceprofileGatewayServicePoliciesEwfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayServicePoliciesIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#alert_only OrgDeviceprofileGateway#alert_only}
  */
  readonly alertOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * org_level IDP Profile can be used, this takes precedence over `profile`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#idpprofile_id OrgDeviceprofileGateway#idpprofile_id}
  */
  readonly idpprofileId?: string;
  /**
  * enum: `Custom`, `strict` (default), `standard` or keys from idp_profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#profile OrgDeviceprofileGateway#profile}
  */
  readonly profile?: string;
}

export function orgDeviceprofileGatewayServicePoliciesIdpToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_only: cdktf.booleanToTerraform(struct!.alertOnly),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idpprofile_id: cdktf.stringToTerraform(struct!.idpprofileId),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgDeviceprofileGatewayServicePoliciesIdpToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_only: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idpprofile_id: {
      value: cdktf.stringToHclTerraform(struct!.idpprofileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnly = this._alertOnly;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idpprofileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpprofileId = this._idpprofileId;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertOnly = undefined;
      this._enabled = undefined;
      this._idpprofileId = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertOnly = value.alertOnly;
      this._enabled = value.enabled;
      this._idpprofileId = value.idpprofileId;
      this._profile = value.profile;
    }
  }

  // alert_only - computed: false, optional: true, required: false
  private _alertOnly?: boolean | cdktf.IResolvable; 
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }
  public set alertOnly(value: boolean | cdktf.IResolvable) {
    this._alertOnly = value;
  }
  public resetAlertOnly() {
    this._alertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnlyInput() {
    return this._alertOnly;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idpprofile_id - computed: false, optional: true, required: false
  private _idpprofileId?: string; 
  public get idpprofileId() {
    return this.getStringAttribute('idpprofile_id');
  }
  public set idpprofileId(value: string) {
    this._idpprofileId = value;
  }
  public resetIdpprofileId() {
    this._idpprofileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpprofileIdInput() {
    return this._idpprofileId;
  }

  // profile - computed: false, optional: true, required: false
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
}
export interface OrgDeviceprofileGatewayServicePoliciesSkyatp {
  /**
  * enum: `disabled`, `default`, `standard`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_dga_detection OrgDeviceprofileGateway#dns_dga_detection}
  */
  readonly dnsDgaDetection?: string;
  /**
  * enum: `disabled`, `default`, `standard`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dns_tunnel_detection OrgDeviceprofileGateway#dns_tunnel_detection}
  */
  readonly dnsTunnelDetection?: string;
  /**
  * enum: `disabled`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#http_inspection OrgDeviceprofileGateway#http_inspection}
  */
  readonly httpInspection?: string;
  /**
  * enum: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#iot_device_policy OrgDeviceprofileGateway#iot_device_policy}
  */
  readonly iotDevicePolicy?: string;
}

export function orgDeviceprofileGatewayServicePoliciesSkyatpToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesSkyatp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_dga_detection: cdktf.stringToTerraform(struct!.dnsDgaDetection),
    dns_tunnel_detection: cdktf.stringToTerraform(struct!.dnsTunnelDetection),
    http_inspection: cdktf.stringToTerraform(struct!.httpInspection),
    iot_device_policy: cdktf.stringToTerraform(struct!.iotDevicePolicy),
  }
}


export function orgDeviceprofileGatewayServicePoliciesSkyatpToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesSkyatp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_dga_detection: {
      value: cdktf.stringToHclTerraform(struct!.dnsDgaDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_tunnel_detection: {
      value: cdktf.stringToHclTerraform(struct!.dnsTunnelDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_inspection: {
      value: cdktf.stringToHclTerraform(struct!.httpInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot_device_policy: {
      value: cdktf.stringToHclTerraform(struct!.iotDevicePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesSkyatpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesSkyatp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDgaDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDgaDetection = this._dnsDgaDetection;
    }
    if (this._dnsTunnelDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTunnelDetection = this._dnsTunnelDetection;
    }
    if (this._httpInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpInspection = this._httpInspection;
    }
    if (this._iotDevicePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotDevicePolicy = this._iotDevicePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesSkyatp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDgaDetection = undefined;
      this._dnsTunnelDetection = undefined;
      this._httpInspection = undefined;
      this._iotDevicePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDgaDetection = value.dnsDgaDetection;
      this._dnsTunnelDetection = value.dnsTunnelDetection;
      this._httpInspection = value.httpInspection;
      this._iotDevicePolicy = value.iotDevicePolicy;
    }
  }

  // dns_dga_detection - computed: true, optional: true, required: false
  private _dnsDgaDetection?: string; 
  public get dnsDgaDetection() {
    return this.getStringAttribute('dns_dga_detection');
  }
  public set dnsDgaDetection(value: string) {
    this._dnsDgaDetection = value;
  }
  public resetDnsDgaDetection() {
    this._dnsDgaDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDgaDetectionInput() {
    return this._dnsDgaDetection;
  }

  // dns_tunnel_detection - computed: true, optional: true, required: false
  private _dnsTunnelDetection?: string; 
  public get dnsTunnelDetection() {
    return this.getStringAttribute('dns_tunnel_detection');
  }
  public set dnsTunnelDetection(value: string) {
    this._dnsTunnelDetection = value;
  }
  public resetDnsTunnelDetection() {
    this._dnsTunnelDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTunnelDetectionInput() {
    return this._dnsTunnelDetection;
  }

  // http_inspection - computed: true, optional: true, required: false
  private _httpInspection?: string; 
  public get httpInspection() {
    return this.getStringAttribute('http_inspection');
  }
  public set httpInspection(value: string) {
    this._httpInspection = value;
  }
  public resetHttpInspection() {
    this._httpInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInspectionInput() {
    return this._httpInspection;
  }

  // iot_device_policy - computed: true, optional: true, required: false
  private _iotDevicePolicy?: string; 
  public get iotDevicePolicy() {
    return this.getStringAttribute('iot_device_policy');
  }
  public set iotDevicePolicy(value: string) {
    this._iotDevicePolicy = value;
  }
  public resetIotDevicePolicy() {
    this._iotDevicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDevicePolicyInput() {
    return this._iotDevicePolicy;
  }
}
export interface OrgDeviceprofileGatewayServicePoliciesSslProxy {
  /**
  * enum: `medium`, `strong`, `weak`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ciphers_category OrgDeviceprofileGateway#ciphers_category}
  */
  readonly ciphersCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayServicePoliciesSslProxyToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesSslProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers_category: cdktf.stringToTerraform(struct!.ciphersCategory),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileGatewayServicePoliciesSslProxyToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesSslProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers_category: {
      value: cdktf.stringToHclTerraform(struct!.ciphersCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesSslProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesSslProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphersCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphersCategory = this._ciphersCategory;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesSslProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphersCategory = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphersCategory = value.ciphersCategory;
      this._enabled = value.enabled;
    }
  }

  // ciphers_category - computed: false, optional: true, required: false
  private _ciphersCategory?: string; 
  public get ciphersCategory() {
    return this.getStringAttribute('ciphers_category');
  }
  public set ciphersCategory(value: string) {
    this._ciphersCategory = value;
  }
  public resetCiphersCategory() {
    this._ciphersCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersCategoryInput() {
    return this._ciphersCategory;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileGatewayServicePoliciesSyslog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#server_names OrgDeviceprofileGateway#server_names}
  */
  readonly serverNames?: string[];
}

export function orgDeviceprofileGatewayServicePoliciesSyslogToTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    server_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverNames),
  }
}


export function orgDeviceprofileGatewayServicePoliciesSyslogToHclTerraform(struct?: OrgDeviceprofileGatewayServicePoliciesSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayServicePoliciesSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._serverNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePoliciesSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._serverNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._serverNames = value.serverNames;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // server_names - computed: false, optional: true, required: false
  private _serverNames?: string[]; 
  public get serverNames() {
    return this.getListAttribute('server_names');
  }
  public set serverNames(value: string[]) {
    this._serverNames = value;
  }
  public resetServerNames() {
    this._serverNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames;
  }
}
export interface OrgDeviceprofileGatewayServicePolicies {
  /**
  * Required when `servicepolicy_id` is not defined, optional otherwise (override the servicepolicy action). enum: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#action OrgDeviceprofileGateway#action}
  */
  readonly action?: string;
  /**
  * For SRX-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#antivirus OrgDeviceprofileGateway#antivirus}
  */
  readonly antivirus?: OrgDeviceprofileGatewayServicePoliciesAntivirus;
  /**
  * SRX only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#appqoe OrgDeviceprofileGateway#appqoe}
  */
  readonly appqoe?: OrgDeviceprofileGatewayServicePoliciesAppqoe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ewf OrgDeviceprofileGateway#ewf}
  */
  readonly ewf?: OrgDeviceprofileGatewayServicePoliciesEwf[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#idp OrgDeviceprofileGateway#idp}
  */
  readonly idp?: OrgDeviceprofileGatewayServicePoliciesIdp;
  /**
  * access within the same VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#local_routing OrgDeviceprofileGateway#local_routing}
  */
  readonly localRouting?: boolean | cdktf.IResolvable;
  /**
  * Required when `servicepolicy_id` is not defined, optional otherwise (override the servicepolicy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * By default, we derive all paths available and use them. Optionally, you can customize by using `path_preference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#path_preference OrgDeviceprofileGateway#path_preference}
  */
  readonly pathPreference?: string;
  /**
  * Used to link servicepolicy defined at org level and overwrite some attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#servicepolicy_id OrgDeviceprofileGateway#servicepolicy_id}
  */
  readonly servicepolicyId?: string;
  /**
  * Required when `servicepolicy_id` is not defined. List of Applications / Destinations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#services OrgDeviceprofileGateway#services}
  */
  readonly services?: string[];
  /**
  * SRX only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#skyatp OrgDeviceprofileGateway#skyatp}
  */
  readonly skyatp?: OrgDeviceprofileGatewayServicePoliciesSkyatp;
  /**
  * For SRX-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ssl_proxy OrgDeviceprofileGateway#ssl_proxy}
  */
  readonly sslProxy?: OrgDeviceprofileGatewayServicePoliciesSslProxy;
  /**
  * Required for syslog logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#syslog OrgDeviceprofileGateway#syslog}
  */
  readonly syslog?: OrgDeviceprofileGatewayServicePoliciesSyslog;
  /**
  * Required when `servicepolicy_id` is not defined. List of Networks / Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#tenants OrgDeviceprofileGateway#tenants}
  */
  readonly tenants?: string[];
}

export function orgDeviceprofileGatewayServicePoliciesToTerraform(struct?: OrgDeviceprofileGatewayServicePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    antivirus: orgDeviceprofileGatewayServicePoliciesAntivirusToTerraform(struct!.antivirus),
    appqoe: orgDeviceprofileGatewayServicePoliciesAppqoeToTerraform(struct!.appqoe),
    ewf: cdktf.listMapper(orgDeviceprofileGatewayServicePoliciesEwfToTerraform, false)(struct!.ewf),
    idp: orgDeviceprofileGatewayServicePoliciesIdpToTerraform(struct!.idp),
    local_routing: cdktf.booleanToTerraform(struct!.localRouting),
    name: cdktf.stringToTerraform(struct!.name),
    path_preference: cdktf.stringToTerraform(struct!.pathPreference),
    servicepolicy_id: cdktf.stringToTerraform(struct!.servicepolicyId),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    skyatp: orgDeviceprofileGatewayServicePoliciesSkyatpToTerraform(struct!.skyatp),
    ssl_proxy: orgDeviceprofileGatewayServicePoliciesSslProxyToTerraform(struct!.sslProxy),
    syslog: orgDeviceprofileGatewayServicePoliciesSyslogToTerraform(struct!.syslog),
    tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenants),
  }
}


export function orgDeviceprofileGatewayServicePoliciesToHclTerraform(struct?: OrgDeviceprofileGatewayServicePolicies | cdktf.IResolvable): any {
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
    antivirus: {
      value: orgDeviceprofileGatewayServicePoliciesAntivirusToHclTerraform(struct!.antivirus),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesAntivirus",
    },
    appqoe: {
      value: orgDeviceprofileGatewayServicePoliciesAppqoeToHclTerraform(struct!.appqoe),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesAppqoe",
    },
    ewf: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayServicePoliciesEwfToHclTerraform, false)(struct!.ewf),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesEwfList",
    },
    idp: {
      value: orgDeviceprofileGatewayServicePoliciesIdpToHclTerraform(struct!.idp),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesIdp",
    },
    local_routing: {
      value: cdktf.booleanToHclTerraform(struct!.localRouting),
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
    path_preference: {
      value: cdktf.stringToHclTerraform(struct!.pathPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicepolicy_id: {
      value: cdktf.stringToHclTerraform(struct!.servicepolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skyatp: {
      value: orgDeviceprofileGatewayServicePoliciesSkyatpToHclTerraform(struct!.skyatp),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesSkyatp",
    },
    ssl_proxy: {
      value: orgDeviceprofileGatewayServicePoliciesSslProxyToHclTerraform(struct!.sslProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesSslProxy",
    },
    syslog: {
      value: orgDeviceprofileGatewayServicePoliciesSyslogToHclTerraform(struct!.syslog),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayServicePoliciesSyslog",
    },
    tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayServicePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayServicePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._antivirus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirus = this._antivirus?.internalValue;
    }
    if (this._appqoe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appqoe = this._appqoe?.internalValue;
    }
    if (this._ewf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewf = this._ewf?.internalValue;
    }
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    if (this._localRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRouting = this._localRouting;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPreference = this._pathPreference;
    }
    if (this._servicepolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicepolicyId = this._servicepolicyId;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._skyatp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skyatp = this._skyatp?.internalValue;
    }
    if (this._sslProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProxy = this._sslProxy?.internalValue;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    if (this._tenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenants = this._tenants;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayServicePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._antivirus.internalValue = undefined;
      this._appqoe.internalValue = undefined;
      this._ewf.internalValue = undefined;
      this._idp.internalValue = undefined;
      this._localRouting = undefined;
      this._name = undefined;
      this._pathPreference = undefined;
      this._servicepolicyId = undefined;
      this._services = undefined;
      this._skyatp.internalValue = undefined;
      this._sslProxy.internalValue = undefined;
      this._syslog.internalValue = undefined;
      this._tenants = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._antivirus.internalValue = value.antivirus;
      this._appqoe.internalValue = value.appqoe;
      this._ewf.internalValue = value.ewf;
      this._idp.internalValue = value.idp;
      this._localRouting = value.localRouting;
      this._name = value.name;
      this._pathPreference = value.pathPreference;
      this._servicepolicyId = value.servicepolicyId;
      this._services = value.services;
      this._skyatp.internalValue = value.skyatp;
      this._sslProxy.internalValue = value.sslProxy;
      this._syslog.internalValue = value.syslog;
      this._tenants = value.tenants;
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

  // antivirus - computed: false, optional: true, required: false
  private _antivirus = new OrgDeviceprofileGatewayServicePoliciesAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }
  public putAntivirus(value: OrgDeviceprofileGatewayServicePoliciesAntivirus) {
    this._antivirus.internalValue = value;
  }
  public resetAntivirus() {
    this._antivirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus.internalValue;
  }

  // appqoe - computed: false, optional: true, required: false
  private _appqoe = new OrgDeviceprofileGatewayServicePoliciesAppqoeOutputReference(this, "appqoe");
  public get appqoe() {
    return this._appqoe;
  }
  public putAppqoe(value: OrgDeviceprofileGatewayServicePoliciesAppqoe) {
    this._appqoe.internalValue = value;
  }
  public resetAppqoe() {
    this._appqoe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appqoeInput() {
    return this._appqoe.internalValue;
  }

  // ewf - computed: false, optional: true, required: false
  private _ewf = new OrgDeviceprofileGatewayServicePoliciesEwfList(this, "ewf", false);
  public get ewf() {
    return this._ewf;
  }
  public putEwf(value: OrgDeviceprofileGatewayServicePoliciesEwf[] | cdktf.IResolvable) {
    this._ewf.internalValue = value;
  }
  public resetEwf() {
    this._ewf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewfInput() {
    return this._ewf.internalValue;
  }

  // idp - computed: false, optional: true, required: false
  private _idp = new OrgDeviceprofileGatewayServicePoliciesIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: OrgDeviceprofileGatewayServicePoliciesIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // local_routing - computed: false, optional: true, required: false
  private _localRouting?: boolean | cdktf.IResolvable; 
  public get localRouting() {
    return this.getBooleanAttribute('local_routing');
  }
  public set localRouting(value: boolean | cdktf.IResolvable) {
    this._localRouting = value;
  }
  public resetLocalRouting() {
    this._localRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoutingInput() {
    return this._localRouting;
  }

  // name - computed: false, optional: true, required: false
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

  // path_preference - computed: false, optional: true, required: false
  private _pathPreference?: string; 
  public get pathPreference() {
    return this.getStringAttribute('path_preference');
  }
  public set pathPreference(value: string) {
    this._pathPreference = value;
  }
  public resetPathPreference() {
    this._pathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPreferenceInput() {
    return this._pathPreference;
  }

  // servicepolicy_id - computed: false, optional: true, required: false
  private _servicepolicyId?: string; 
  public get servicepolicyId() {
    return this.getStringAttribute('servicepolicy_id');
  }
  public set servicepolicyId(value: string) {
    this._servicepolicyId = value;
  }
  public resetServicepolicyId() {
    this._servicepolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicepolicyIdInput() {
    return this._servicepolicyId;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // skyatp - computed: false, optional: true, required: false
  private _skyatp = new OrgDeviceprofileGatewayServicePoliciesSkyatpOutputReference(this, "skyatp");
  public get skyatp() {
    return this._skyatp;
  }
  public putSkyatp(value: OrgDeviceprofileGatewayServicePoliciesSkyatp) {
    this._skyatp.internalValue = value;
  }
  public resetSkyatp() {
    this._skyatp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skyatpInput() {
    return this._skyatp.internalValue;
  }

  // ssl_proxy - computed: false, optional: true, required: false
  private _sslProxy = new OrgDeviceprofileGatewayServicePoliciesSslProxyOutputReference(this, "ssl_proxy");
  public get sslProxy() {
    return this._sslProxy;
  }
  public putSslProxy(value: OrgDeviceprofileGatewayServicePoliciesSslProxy) {
    this._sslProxy.internalValue = value;
  }
  public resetSslProxy() {
    this._sslProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProxyInput() {
    return this._sslProxy.internalValue;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new OrgDeviceprofileGatewayServicePoliciesSyslogOutputReference(this, "syslog");
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: OrgDeviceprofileGatewayServicePoliciesSyslog) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }
}

export class OrgDeviceprofileGatewayServicePoliciesList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayServicePolicies[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayServicePoliciesOutputReference {
    return new OrgDeviceprofileGatewayServicePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lat OrgDeviceprofileGateway#lat}
  */
  readonly lat: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#lng OrgDeviceprofileGateway#lng}
  */
  readonly lng: number;
}

export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlngToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lat: cdktf.numberToTerraform(struct!.lat),
    lng: cdktf.numberToTerraform(struct!.lng),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlngToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lng: {
      value: cdktf.numberToHclTerraform(struct!.lng),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._lng !== undefined) {
      hasAnyValues = true;
      internalValueResult.lng = this._lng;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lat = undefined;
      this._lng = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lat = value.lat;
      this._lng = value.lng;
    }
  }

  // lat - computed: false, optional: false, required: true
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // lng - computed: false, optional: false, required: true
  private _lng?: number; 
  public get lng() {
    return this.getNumberAttribute('lng');
  }
  public set lng(value: number) {
    this._lng = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lngInput() {
    return this._lng;
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#probe_ips OrgDeviceprofileGateway#probe_ips}
  */
  readonly probeIps?: string[];
  /**
  * Optional, only needed if `vars_only`==`false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_names OrgDeviceprofileGateway#wan_names}
  */
  readonly wanNames?: string[];
}

export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimaryToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probeIps),
    wan_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wanNames),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimaryToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probeIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wan_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wanNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probeIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeIps = this._probeIps;
    }
    if (this._wanNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanNames = this._wanNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probeIps = undefined;
      this._wanNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probeIps = value.probeIps;
      this._wanNames = value.wanNames;
    }
  }

  // probe_ips - computed: false, optional: true, required: false
  private _probeIps?: string[]; 
  public get probeIps() {
    return this.getListAttribute('probe_ips');
  }
  public set probeIps(value: string[]) {
    this._probeIps = value;
  }
  public resetProbeIps() {
    this._probeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIpsInput() {
    return this._probeIps;
  }

  // wan_names - computed: false, optional: true, required: false
  private _wanNames?: string[]; 
  public get wanNames() {
    return this.getListAttribute('wan_names');
  }
  public set wanNames(value: string[]) {
    this._wanNames = value;
  }
  public resetWanNames() {
    this._wanNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNamesInput() {
    return this._wanNames;
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#probe_ips OrgDeviceprofileGateway#probe_ips}
  */
  readonly probeIps?: string[];
  /**
  * Optional, only needed if `vars_only`==`false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_names OrgDeviceprofileGateway#wan_names}
  */
  readonly wanNames?: string[];
}

export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondaryToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probeIps),
    wan_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wanNames),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondaryToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probeIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wan_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wanNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probeIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeIps = this._probeIps;
    }
    if (this._wanNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanNames = this._wanNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probeIps = undefined;
      this._wanNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probeIps = value.probeIps;
      this._wanNames = value.wanNames;
    }
  }

  // probe_ips - computed: false, optional: true, required: false
  private _probeIps?: string[]; 
  public get probeIps() {
    return this.getListAttribute('probe_ips');
  }
  public set probeIps(value: string[]) {
    this._probeIps = value;
  }
  public resetProbeIps() {
    this._probeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIpsInput() {
    return this._probeIps;
  }

  // wan_names - computed: false, optional: true, required: false
  private _wanNames?: string[]; 
  public get wanNames() {
    return this.getListAttribute('wan_names');
  }
  public set wanNames(value: string[]) {
    this._wanNames = value;
  }
  public resetWanNames() {
    this._wanNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNamesInput() {
    return this._wanNames;
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsAutoProvision {
  /**
  * Enable auto provisioning for the tunnel. If enabled, the `primary` and `secondary` nodes will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * API override for POP selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#latlng OrgDeviceprofileGateway#latlng}
  */
  readonly latlng?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#primary OrgDeviceprofileGateway#primary}
  */
  readonly primary?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary;
  /**
  * enum: `jse-ipsec`, `zscaler-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#provider OrgDeviceprofileGateway#provider}
  */
  readonly provider: string;
  /**
  * API override for POP selection in the case user wants to override the auto discovery of remote network location and force the tunnel to use the specified peer location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#region OrgDeviceprofileGateway#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#secondary OrgDeviceprofileGateway#secondary}
  */
  readonly secondary?: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary;
  /**
  * if `provider`==`prisma-ipsec`. By default, we'll use the location of the site to determine the optimal Remote Network location, optionally, service_connection can be considered, then we'll also consider this along with the site location. Define service_connection if the traffic is to be routed to a specific service connection. This field takes a service connection name that is configured in the Prisma cloud, Prisma Access Setup -> Service Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#service_connection OrgDeviceprofileGateway#service_connection}
  */
  readonly serviceConnection?: string;
}

export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    latlng: orgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlngToTerraform(struct!.latlng),
    primary: orgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimaryToTerraform(struct!.primary),
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
    secondary: orgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondaryToTerraform(struct!.secondary),
    service_connection: cdktf.stringToTerraform(struct!.serviceConnection),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsAutoProvisionToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsAutoProvision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latlng: {
      value: orgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlngToHclTerraform(struct!.latlng),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng",
    },
    primary: {
      value: orgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: orgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondaryToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary",
    },
    service_connection: {
      value: cdktf.stringToHclTerraform(struct!.serviceConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsAutoProvisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsAutoProvision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._latlng?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latlng = this._latlng?.internalValue;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    if (this._serviceConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConnection = this._serviceConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._latlng.internalValue = undefined;
      this._primary.internalValue = undefined;
      this._provider = undefined;
      this._region = undefined;
      this._secondary.internalValue = undefined;
      this._serviceConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._latlng.internalValue = value.latlng;
      this._primary.internalValue = value.primary;
      this._provider = value.provider;
      this._region = value.region;
      this._secondary.internalValue = value.secondary;
      this._serviceConnection = value.serviceConnection;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // latlng - computed: false, optional: true, required: false
  private _latlng = new OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlngOutputReference(this, "latlng");
  public get latlng() {
    return this._latlng;
  }
  public putLatlng(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionLatlng) {
    this._latlng.internalValue = value;
  }
  public resetLatlng() {
    this._latlng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latlngInput() {
    return this._latlng.internalValue;
  }

  // primary - computed: false, optional: true, required: false
  private _primary = new OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionPrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary = new OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvisionSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }

  // service_connection - computed: false, optional: true, required: false
  private _serviceConnection?: string; 
  public get serviceConnection() {
    return this.getStringAttribute('service_connection');
  }
  public set serviceConnection(value: string) {
    this._serviceConnection = value;
  }
  public resetServiceConnection() {
    this._serviceConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionInput() {
    return this._serviceConnection;
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsIkeProposals {
  /**
  * enum: `md5`, `sha1`, `sha2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#auth_algo OrgDeviceprofileGateway#auth_algo}
  */
  readonly authAlgo?: string;
  /**
  * enum:
  *   * 1
  *   * 2 (1024-bit)
  *   * 5
  *   * 14 (default, 2048-bit)
  *   * 15 (3072-bit)
  *   * 16 (4096-bit)
  *   * 19 (256-bit ECP)
  *   * 20 (384-bit ECP)
  *   * 21 (521-bit ECP)
  *   * 24 (2048-bit ECP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dh_group OrgDeviceprofileGateway#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * enum: `3des`, `aes128`, `aes256`, `aes_gcm128`, `aes_gcm256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enc_algo OrgDeviceprofileGateway#enc_algo}
  */
  readonly encAlgo?: string;
}

export function orgDeviceprofileGatewayTunnelConfigsIkeProposalsToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsIkeProposals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algo: cdktf.stringToTerraform(struct!.authAlgo),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    enc_algo: cdktf.stringToTerraform(struct!.encAlgo),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsIkeProposalsToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsIkeProposals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algo: {
      value: cdktf.stringToHclTerraform(struct!.authAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enc_algo: {
      value: cdktf.stringToHclTerraform(struct!.encAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsIkeProposalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsIkeProposals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgo = this._authAlgo;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgo = this._encAlgo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsIkeProposals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authAlgo = undefined;
      this._dhGroup = undefined;
      this._encAlgo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authAlgo = value.authAlgo;
      this._dhGroup = value.dhGroup;
      this._encAlgo = value.encAlgo;
    }
  }

  // auth_algo - computed: false, optional: true, required: false
  private _authAlgo?: string; 
  public get authAlgo() {
    return this.getStringAttribute('auth_algo');
  }
  public set authAlgo(value: string) {
    this._authAlgo = value;
  }
  public resetAuthAlgo() {
    this._authAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoInput() {
    return this._authAlgo;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // enc_algo - computed: false, optional: true, required: false
  private _encAlgo?: string; 
  public get encAlgo() {
    return this.getStringAttribute('enc_algo');
  }
  public set encAlgo(value: string) {
    this._encAlgo = value;
  }
  public resetEncAlgo() {
    this._encAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoInput() {
    return this._encAlgo;
  }
}

export class OrgDeviceprofileGatewayTunnelConfigsIkeProposalsList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayTunnelConfigsIkeProposals[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayTunnelConfigsIkeProposalsOutputReference {
    return new OrgDeviceprofileGatewayTunnelConfigsIkeProposalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsIpsecProposals {
  /**
  * enum: `md5`, `sha1`, `sha2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#auth_algo OrgDeviceprofileGateway#auth_algo}
  */
  readonly authAlgo?: string;
  /**
  * Only if `provider`==`custom-ipsec`. enum:
  *   * 1
  *   * 2 (1024-bit)
  *   * 5
  *   * 14 (default, 2048-bit)
  *   * 15 (3072-bit)
  *   * 16 (4096-bit)
  *   * 19 (256-bit ECP)
  *   * 20 (384-bit ECP)
  *   * 21 (521-bit ECP)
  *   * 24 (2048-bit ECP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dh_group OrgDeviceprofileGateway#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * enum: `3des`, `aes128`, `aes256`, `aes_gcm128`, `aes_gcm256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enc_algo OrgDeviceprofileGateway#enc_algo}
  */
  readonly encAlgo?: string;
}

export function orgDeviceprofileGatewayTunnelConfigsIpsecProposalsToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsIpsecProposals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algo: cdktf.stringToTerraform(struct!.authAlgo),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    enc_algo: cdktf.stringToTerraform(struct!.encAlgo),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsIpsecProposalsToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsIpsecProposals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algo: {
      value: cdktf.stringToHclTerraform(struct!.authAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enc_algo: {
      value: cdktf.stringToHclTerraform(struct!.encAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsIpsecProposalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsIpsecProposals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgo = this._authAlgo;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgo = this._encAlgo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsIpsecProposals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authAlgo = undefined;
      this._dhGroup = undefined;
      this._encAlgo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authAlgo = value.authAlgo;
      this._dhGroup = value.dhGroup;
      this._encAlgo = value.encAlgo;
    }
  }

  // auth_algo - computed: false, optional: true, required: false
  private _authAlgo?: string; 
  public get authAlgo() {
    return this.getStringAttribute('auth_algo');
  }
  public set authAlgo(value: string) {
    this._authAlgo = value;
  }
  public resetAuthAlgo() {
    this._authAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoInput() {
    return this._authAlgo;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // enc_algo - computed: false, optional: true, required: false
  private _encAlgo?: string; 
  public get encAlgo() {
    return this.getStringAttribute('enc_algo');
  }
  public set encAlgo(value: string) {
    this._encAlgo = value;
  }
  public resetEncAlgo() {
    this._encAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoInput() {
    return this._encAlgo;
  }
}

export class OrgDeviceprofileGatewayTunnelConfigsIpsecProposalsList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayTunnelConfigsIpsecProposals[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayTunnelConfigsIpsecProposalsOutputReference {
    return new OrgDeviceprofileGatewayTunnelConfigsIpsecProposalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsPrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#hosts OrgDeviceprofileGateway#hosts}
  */
  readonly hosts: string[];
  /**
  * Only if `provider`==`zscaler-gre`, `provider`==`jse-ipsec`, `provider`==`custom-ipsec` or `provider`==`custom-gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_ips OrgDeviceprofileGateway#internal_ips}
  */
  readonly internalIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#probe_ips OrgDeviceprofileGateway#probe_ips}
  */
  readonly probeIps?: string[];
  /**
  * Only if  `provider`==`jse-ipsec` or `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#remote_ids OrgDeviceprofileGateway#remote_ids}
  */
  readonly remoteIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_names OrgDeviceprofileGateway#wan_names}
  */
  readonly wanNames: string[];
}

export function orgDeviceprofileGatewayTunnelConfigsPrimaryToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    internal_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internalIps),
    probe_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probeIps),
    remote_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteIds),
    wan_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wanNames),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsPrimaryToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internalIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probe_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probeIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wan_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wanNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsPrimary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._internalIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIps = this._internalIps;
    }
    if (this._probeIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeIps = this._probeIps;
    }
    if (this._remoteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIds = this._remoteIds;
    }
    if (this._wanNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanNames = this._wanNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsPrimary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._internalIps = undefined;
      this._probeIps = undefined;
      this._remoteIds = undefined;
      this._wanNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._internalIps = value.internalIps;
      this._probeIps = value.probeIps;
      this._remoteIds = value.remoteIds;
      this._wanNames = value.wanNames;
    }
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // internal_ips - computed: false, optional: true, required: false
  private _internalIps?: string[]; 
  public get internalIps() {
    return this.getListAttribute('internal_ips');
  }
  public set internalIps(value: string[]) {
    this._internalIps = value;
  }
  public resetInternalIps() {
    this._internalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpsInput() {
    return this._internalIps;
  }

  // probe_ips - computed: false, optional: true, required: false
  private _probeIps?: string[]; 
  public get probeIps() {
    return this.getListAttribute('probe_ips');
  }
  public set probeIps(value: string[]) {
    this._probeIps = value;
  }
  public resetProbeIps() {
    this._probeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIpsInput() {
    return this._probeIps;
  }

  // remote_ids - computed: false, optional: true, required: false
  private _remoteIds?: string[]; 
  public get remoteIds() {
    return this.getListAttribute('remote_ids');
  }
  public set remoteIds(value: string[]) {
    this._remoteIds = value;
  }
  public resetRemoteIds() {
    this._remoteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdsInput() {
    return this._remoteIds;
  }

  // wan_names - computed: false, optional: false, required: true
  private _wanNames?: string[]; 
  public get wanNames() {
    return this.getListAttribute('wan_names');
  }
  public set wanNames(value: string[]) {
    this._wanNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNamesInput() {
    return this._wanNames;
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigsProbe {
  /**
  * How often to trigger the probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#interval OrgDeviceprofileGateway#interval}
  */
  readonly interval?: number;
  /**
  * Number of consecutive misses before declaring the tunnel down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#threshold OrgDeviceprofileGateway#threshold}
  */
  readonly threshold?: number;
  /**
  * Time within which to complete the connectivity check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#timeout OrgDeviceprofileGateway#timeout}
  */
  readonly timeout?: number;
  /**
  * enum: `http`, `icmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#type OrgDeviceprofileGateway#type}
  */
  readonly type?: string;
}

export function orgDeviceprofileGatewayTunnelConfigsProbeToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsProbeToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class OrgDeviceprofileGatewayTunnelConfigsProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._threshold = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._threshold = value.threshold;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface OrgDeviceprofileGatewayTunnelConfigsSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#hosts OrgDeviceprofileGateway#hosts}
  */
  readonly hosts: string[];
  /**
  * Only if `provider`==`zscaler-gre`, `provider`==`jse-ipsec`, `provider`==`custom-ipsec` or `provider`==`custom-gre`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#internal_ips OrgDeviceprofileGateway#internal_ips}
  */
  readonly internalIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#probe_ips OrgDeviceprofileGateway#probe_ips}
  */
  readonly probeIps?: string[];
  /**
  * Only if  `provider`==`jse-ipsec` or `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#remote_ids OrgDeviceprofileGateway#remote_ids}
  */
  readonly remoteIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#wan_names OrgDeviceprofileGateway#wan_names}
  */
  readonly wanNames: string[];
}

export function orgDeviceprofileGatewayTunnelConfigsSecondaryToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    internal_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internalIps),
    probe_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probeIps),
    remote_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteIds),
    wan_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wanNames),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsSecondaryToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigsSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internalIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probe_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probeIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wan_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wanNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigsSecondary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._internalIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIps = this._internalIps;
    }
    if (this._probeIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeIps = this._probeIps;
    }
    if (this._remoteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIds = this._remoteIds;
    }
    if (this._wanNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanNames = this._wanNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigsSecondary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._internalIps = undefined;
      this._probeIps = undefined;
      this._remoteIds = undefined;
      this._wanNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._internalIps = value.internalIps;
      this._probeIps = value.probeIps;
      this._remoteIds = value.remoteIds;
      this._wanNames = value.wanNames;
    }
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // internal_ips - computed: false, optional: true, required: false
  private _internalIps?: string[]; 
  public get internalIps() {
    return this.getListAttribute('internal_ips');
  }
  public set internalIps(value: string[]) {
    this._internalIps = value;
  }
  public resetInternalIps() {
    this._internalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpsInput() {
    return this._internalIps;
  }

  // probe_ips - computed: false, optional: true, required: false
  private _probeIps?: string[]; 
  public get probeIps() {
    return this.getListAttribute('probe_ips');
  }
  public set probeIps(value: string[]) {
    this._probeIps = value;
  }
  public resetProbeIps() {
    this._probeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIpsInput() {
    return this._probeIps;
  }

  // remote_ids - computed: false, optional: true, required: false
  private _remoteIds?: string[]; 
  public get remoteIds() {
    return this.getListAttribute('remote_ids');
  }
  public set remoteIds(value: string[]) {
    this._remoteIds = value;
  }
  public resetRemoteIds() {
    this._remoteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdsInput() {
    return this._remoteIds;
  }

  // wan_names - computed: false, optional: false, required: true
  private _wanNames?: string[]; 
  public get wanNames() {
    return this.getListAttribute('wan_names');
  }
  public set wanNames(value: string[]) {
    this._wanNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNamesInput() {
    return this._wanNames;
  }
}
export interface OrgDeviceprofileGatewayTunnelConfigs {
  /**
  * Auto Provisioning configuration for the tunne. This takes precedence over the `primary` and `secondary` nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#auto_provision OrgDeviceprofileGateway#auto_provision}
  */
  readonly autoProvision?: OrgDeviceprofileGatewayTunnelConfigsAutoProvision;
  /**
  * Only if `provider`==`custom-ipsec`. Must be between 180 and 86400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ike_lifetime OrgDeviceprofileGateway#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * Only if `provider`==`custom-ipsec`. enum: `aggressive`, `main`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ike_mode OrgDeviceprofileGateway#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * If `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ike_proposals OrgDeviceprofileGateway#ike_proposals}
  */
  readonly ikeProposals?: OrgDeviceprofileGatewayTunnelConfigsIkeProposals[] | cdktf.IResolvable;
  /**
  * Only if `provider`==`custom-ipsec`. Must be between 180 and 86400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ipsec_lifetime OrgDeviceprofileGateway#ipsec_lifetime}
  */
  readonly ipsecLifetime?: number;
  /**
  * Only if  `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ipsec_proposals OrgDeviceprofileGateway#ipsec_proposals}
  */
  readonly ipsecProposals?: OrgDeviceprofileGatewayTunnelConfigsIpsecProposals[] | cdktf.IResolvable;
  /**
  * Required if `provider`==`zscaler-ipsec`, `provider`==`jse-ipsec` or `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#local_id OrgDeviceprofileGateway#local_id}
  */
  readonly localId?: string;
  /**
  * List of Local protected subnet for policy-based IPSec negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#local_subnets OrgDeviceprofileGateway#local_subnets}
  */
  readonly localSubnets?: string[];
  /**
  * Required if `provider`==`zscaler-gre`, `provider`==`jse-ipsec`. enum: `active-active`, `active-standby`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#mode OrgDeviceprofileGateway#mode}
  */
  readonly mode?: string;
  /**
  * If `provider`==`custom-ipsec` or `provider`==`prisma-ipsec`, networks reachable via this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#networks OrgDeviceprofileGateway#networks}
  */
  readonly networks?: string[];
  /**
  * Only if `provider`==`zscaler-ipsec`, `provider`==`jse-ipsec` or `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#primary OrgDeviceprofileGateway#primary}
  */
  readonly primary?: OrgDeviceprofileGatewayTunnelConfigsPrimary;
  /**
  * Only if `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#probe OrgDeviceprofileGateway#probe}
  */
  readonly probe?: OrgDeviceprofileGatewayTunnelConfigsProbe;
  /**
  * Only if `provider`==`custom-ipsec`. enum: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#protocol OrgDeviceprofileGateway#protocol}
  */
  readonly protocol?: string;
  /**
  * Only if `auto_provision.enabled`==`false`. enum: `custom-ipsec`, `custom-gre`, `jse-ipsec`, `prisma-ipsec`, `zscaler-gre`, `zscaler-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#provider OrgDeviceprofileGateway#provider}
  */
  readonly provider?: string;
  /**
  * Required if `provider`==`zscaler-ipsec`, `provider`==`jse-ipsec` or `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#psk OrgDeviceprofileGateway#psk}
  */
  readonly psk?: string;
  /**
  * List of Remote protected subnet for policy-based IPSec negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#remote_subnets OrgDeviceprofileGateway#remote_subnets}
  */
  readonly remoteSubnets?: string[];
  /**
  * Only if `provider`==`zscaler-ipsec`, `provider`==`jse-ipsec` or `provider`==`custom-ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#secondary OrgDeviceprofileGateway#secondary}
  */
  readonly secondary?: OrgDeviceprofileGatewayTunnelConfigsSecondary;
  /**
  * Only if `provider`==`custom-gre` or `provider`==`custom-ipsec`. enum: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#version OrgDeviceprofileGateway#version}
  */
  readonly version?: string;
}

export function orgDeviceprofileGatewayTunnelConfigsToTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_provision: orgDeviceprofileGatewayTunnelConfigsAutoProvisionToTerraform(struct!.autoProvision),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    ike_mode: cdktf.stringToTerraform(struct!.ikeMode),
    ike_proposals: cdktf.listMapper(orgDeviceprofileGatewayTunnelConfigsIkeProposalsToTerraform, false)(struct!.ikeProposals),
    ipsec_lifetime: cdktf.numberToTerraform(struct!.ipsecLifetime),
    ipsec_proposals: cdktf.listMapper(orgDeviceprofileGatewayTunnelConfigsIpsecProposalsToTerraform, false)(struct!.ipsecProposals),
    local_id: cdktf.stringToTerraform(struct!.localId),
    local_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localSubnets),
    mode: cdktf.stringToTerraform(struct!.mode),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    primary: orgDeviceprofileGatewayTunnelConfigsPrimaryToTerraform(struct!.primary),
    probe: orgDeviceprofileGatewayTunnelConfigsProbeToTerraform(struct!.probe),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    provider: cdktf.stringToTerraform(struct!.provider),
    psk: cdktf.stringToTerraform(struct!.psk),
    remote_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteSubnets),
    secondary: orgDeviceprofileGatewayTunnelConfigsSecondaryToTerraform(struct!.secondary),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function orgDeviceprofileGatewayTunnelConfigsToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_provision: {
      value: orgDeviceprofileGatewayTunnelConfigsAutoProvisionToHclTerraform(struct!.autoProvision),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsAutoProvision",
    },
    ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_mode: {
      value: cdktf.stringToHclTerraform(struct!.ikeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_proposals: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayTunnelConfigsIkeProposalsToHclTerraform, false)(struct!.ikeProposals),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsIkeProposalsList",
    },
    ipsec_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_proposals: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayTunnelConfigsIpsecProposalsToHclTerraform, false)(struct!.ipsecProposals),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsIpsecProposalsList",
    },
    local_id: {
      value: cdktf.stringToHclTerraform(struct!.localId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary: {
      value: orgDeviceprofileGatewayTunnelConfigsPrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsPrimary",
    },
    probe: {
      value: orgDeviceprofileGatewayTunnelConfigsProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsProbe",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secondary: {
      value: orgDeviceprofileGatewayTunnelConfigsSecondaryToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelConfigsSecondary",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayTunnelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoProvision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvision = this._autoProvision?.internalValue;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._ikeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeMode = this._ikeMode;
    }
    if (this._ikeProposals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeProposals = this._ikeProposals?.internalValue;
    }
    if (this._ipsecLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLifetime = this._ipsecLifetime;
    }
    if (this._ipsecProposals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecProposals = this._ipsecProposals?.internalValue;
    }
    if (this._localId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localId = this._localId;
    }
    if (this._localSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnets = this._localSubnets;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    if (this._remoteSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSubnets = this._remoteSubnets;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoProvision.internalValue = undefined;
      this._ikeLifetime = undefined;
      this._ikeMode = undefined;
      this._ikeProposals.internalValue = undefined;
      this._ipsecLifetime = undefined;
      this._ipsecProposals.internalValue = undefined;
      this._localId = undefined;
      this._localSubnets = undefined;
      this._mode = undefined;
      this._networks = undefined;
      this._primary.internalValue = undefined;
      this._probe.internalValue = undefined;
      this._protocol = undefined;
      this._provider = undefined;
      this._psk = undefined;
      this._remoteSubnets = undefined;
      this._secondary.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoProvision.internalValue = value.autoProvision;
      this._ikeLifetime = value.ikeLifetime;
      this._ikeMode = value.ikeMode;
      this._ikeProposals.internalValue = value.ikeProposals;
      this._ipsecLifetime = value.ipsecLifetime;
      this._ipsecProposals.internalValue = value.ipsecProposals;
      this._localId = value.localId;
      this._localSubnets = value.localSubnets;
      this._mode = value.mode;
      this._networks = value.networks;
      this._primary.internalValue = value.primary;
      this._probe.internalValue = value.probe;
      this._protocol = value.protocol;
      this._provider = value.provider;
      this._psk = value.psk;
      this._remoteSubnets = value.remoteSubnets;
      this._secondary.internalValue = value.secondary;
      this._version = value.version;
    }
  }

  // auto_provision - computed: false, optional: true, required: false
  private _autoProvision = new OrgDeviceprofileGatewayTunnelConfigsAutoProvisionOutputReference(this, "auto_provision");
  public get autoProvision() {
    return this._autoProvision;
  }
  public putAutoProvision(value: OrgDeviceprofileGatewayTunnelConfigsAutoProvision) {
    this._autoProvision.internalValue = value;
  }
  public resetAutoProvision() {
    this._autoProvision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisionInput() {
    return this._autoProvision.internalValue;
  }

  // ike_lifetime - computed: false, optional: true, required: false
  private _ikeLifetime?: number; 
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: number) {
    this._ikeLifetime = value;
  }
  public resetIkeLifetime() {
    this._ikeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // ike_mode - computed: false, optional: true, required: false
  private _ikeMode?: string; 
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }
  public set ikeMode(value: string) {
    this._ikeMode = value;
  }
  public resetIkeMode() {
    this._ikeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeInput() {
    return this._ikeMode;
  }

  // ike_proposals - computed: false, optional: true, required: false
  private _ikeProposals = new OrgDeviceprofileGatewayTunnelConfigsIkeProposalsList(this, "ike_proposals", false);
  public get ikeProposals() {
    return this._ikeProposals;
  }
  public putIkeProposals(value: OrgDeviceprofileGatewayTunnelConfigsIkeProposals[] | cdktf.IResolvable) {
    this._ikeProposals.internalValue = value;
  }
  public resetIkeProposals() {
    this._ikeProposals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeProposalsInput() {
    return this._ikeProposals.internalValue;
  }

  // ipsec_lifetime - computed: false, optional: true, required: false
  private _ipsecLifetime?: number; 
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }
  public set ipsecLifetime(value: number) {
    this._ipsecLifetime = value;
  }
  public resetIpsecLifetime() {
    this._ipsecLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLifetimeInput() {
    return this._ipsecLifetime;
  }

  // ipsec_proposals - computed: false, optional: true, required: false
  private _ipsecProposals = new OrgDeviceprofileGatewayTunnelConfigsIpsecProposalsList(this, "ipsec_proposals", false);
  public get ipsecProposals() {
    return this._ipsecProposals;
  }
  public putIpsecProposals(value: OrgDeviceprofileGatewayTunnelConfigsIpsecProposals[] | cdktf.IResolvable) {
    this._ipsecProposals.internalValue = value;
  }
  public resetIpsecProposals() {
    this._ipsecProposals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecProposalsInput() {
    return this._ipsecProposals.internalValue;
  }

  // local_id - computed: false, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // local_subnets - computed: false, optional: true, required: false
  private _localSubnets?: string[]; 
  public get localSubnets() {
    return this.getListAttribute('local_subnets');
  }
  public set localSubnets(value: string[]) {
    this._localSubnets = value;
  }
  public resetLocalSubnets() {
    this._localSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetsInput() {
    return this._localSubnets;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // primary - computed: false, optional: true, required: false
  private _primary = new OrgDeviceprofileGatewayTunnelConfigsPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: OrgDeviceprofileGatewayTunnelConfigsPrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new OrgDeviceprofileGatewayTunnelConfigsProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: OrgDeviceprofileGatewayTunnelConfigsProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // remote_subnets - computed: false, optional: true, required: false
  private _remoteSubnets?: string[]; 
  public get remoteSubnets() {
    return this.getListAttribute('remote_subnets');
  }
  public set remoteSubnets(value: string[]) {
    this._remoteSubnets = value;
  }
  public resetRemoteSubnets() {
    this._remoteSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetsInput() {
    return this._remoteSubnets;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary = new OrgDeviceprofileGatewayTunnelConfigsSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: OrgDeviceprofileGatewayTunnelConfigsSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class OrgDeviceprofileGatewayTunnelConfigsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayTunnelConfigs } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayTunnelConfigsOutputReference {
    return new OrgDeviceprofileGatewayTunnelConfigsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgDeviceprofileGatewayTunnelProviderOptionsJse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#num_users OrgDeviceprofileGateway#num_users}
  */
  readonly numUsers?: number;
  /**
  * JSE Organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#org_name OrgDeviceprofileGateway#org_name}
  */
  readonly orgName?: string;
}

export function orgDeviceprofileGatewayTunnelProviderOptionsJseToTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsJse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_users: cdktf.numberToTerraform(struct!.numUsers),
    org_name: cdktf.stringToTerraform(struct!.orgName),
  }
}


export function orgDeviceprofileGatewayTunnelProviderOptionsJseToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsJse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_users: {
      value: cdktf.numberToHclTerraform(struct!.numUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelProviderOptionsJseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelProviderOptionsJse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numUsers = this._numUsers;
    }
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelProviderOptionsJse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numUsers = undefined;
      this._orgName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numUsers = value.numUsers;
      this._orgName = value.orgName;
    }
  }

  // num_users - computed: false, optional: true, required: false
  private _numUsers?: number; 
  public get numUsers() {
    return this.getNumberAttribute('num_users');
  }
  public set numUsers(value: number) {
    this._numUsers = value;
  }
  public resetNumUsers() {
    this._numUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUsersInput() {
    return this._numUsers;
  }

  // org_name - computed: false, optional: true, required: false
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  public resetOrgName() {
    this._orgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }
}
export interface OrgDeviceprofileGatewayTunnelProviderOptionsPrisma {
  /**
  * For prisma-ipsec, service account name to used for tunnel auto provisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#service_account_name OrgDeviceprofileGateway#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function orgDeviceprofileGatewayTunnelProviderOptionsPrismaToTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsPrisma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function orgDeviceprofileGatewayTunnelProviderOptionsPrismaToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsPrisma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelProviderOptionsPrismaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelProviderOptionsPrisma | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelProviderOptionsPrisma | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_block_internet_until_accepted OrgDeviceprofileGateway#aup_block_internet_until_accepted}
  */
  readonly aupBlockInternetUntilAccepted?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `auth_required`==`false`, display Acceptable Use Policy (AUP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_enabled OrgDeviceprofileGateway#aup_enabled}
  */
  readonly aupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Proxy HTTPs traffic, requiring Zscaler cert to be installed in browser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_force_ssl_inspection OrgDeviceprofileGateway#aup_force_ssl_inspection}
  */
  readonly aupForceSslInspection?: boolean | cdktf.IResolvable;
  /**
  * Required if `aup_enabled`==`true`. Days before AUP is requested again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_timeout_in_days OrgDeviceprofileGateway#aup_timeout_in_days}
  */
  readonly aupTimeoutInDays?: number;
  /**
  * Enable this option to authenticate users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#auth_required OrgDeviceprofileGateway#auth_required}
  */
  readonly authRequired?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `auth_required`==`false`, display caution notification for non-authenticated users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#caution_enabled OrgDeviceprofileGateway#caution_enabled}
  */
  readonly cautionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Download bandwidth cap of the link, in Mbps. Disabled if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dn_bandwidth OrgDeviceprofileGateway#dn_bandwidth}
  */
  readonly dnBandwidth?: number;
  /**
  * Required if `surrogate_IP`==`true`, idle Time to Disassociation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#idle_time_in_minutes OrgDeviceprofileGateway#idle_time_in_minutes}
  */
  readonly idleTimeInMinutes?: number;
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#name OrgDeviceprofileGateway#name}
  */
  readonly name?: string;
  /**
  * If `true`, enable the firewall control option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ofw_enabled OrgDeviceprofileGateway#ofw_enabled}
  */
  readonly ofwEnabled?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `auth_required`==`true`. Map a user to a private IP address so it applies the user's policies, instead of the location's policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#surrogate_ip OrgDeviceprofileGateway#surrogate_ip}
  */
  readonly surrogateIp?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `surrogate_IP`==`true`, enforce surrogate IP for known browsers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#surrogate_ip_enforced_for_known_browsers OrgDeviceprofileGateway#surrogate_ip_enforced_for_known_browsers}
  */
  readonly surrogateIpEnforcedForKnownBrowsers?: boolean | cdktf.IResolvable;
  /**
  * Required if `surrogate_IP_enforced_for_known_browsers`==`true`, must be lower or equal than `idle_time_in_minutes`, refresh Time for re-validation of Surrogacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#surrogate_refresh_time_in_minutes OrgDeviceprofileGateway#surrogate_refresh_time_in_minutes}
  */
  readonly surrogateRefreshTimeInMinutes?: number;
  /**
  * Download bandwidth cap of the link, in Mbps. Disabled if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#up_bandwidth OrgDeviceprofileGateway#up_bandwidth}
  */
  readonly upBandwidth?: number;
}

export function orgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsToTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aup_block_internet_until_accepted: cdktf.booleanToTerraform(struct!.aupBlockInternetUntilAccepted),
    aup_enabled: cdktf.booleanToTerraform(struct!.aupEnabled),
    aup_force_ssl_inspection: cdktf.booleanToTerraform(struct!.aupForceSslInspection),
    aup_timeout_in_days: cdktf.numberToTerraform(struct!.aupTimeoutInDays),
    auth_required: cdktf.booleanToTerraform(struct!.authRequired),
    caution_enabled: cdktf.booleanToTerraform(struct!.cautionEnabled),
    dn_bandwidth: cdktf.numberToTerraform(struct!.dnBandwidth),
    idle_time_in_minutes: cdktf.numberToTerraform(struct!.idleTimeInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    ofw_enabled: cdktf.booleanToTerraform(struct!.ofwEnabled),
    surrogate_ip: cdktf.booleanToTerraform(struct!.surrogateIp),
    surrogate_ip_enforced_for_known_browsers: cdktf.booleanToTerraform(struct!.surrogateIpEnforcedForKnownBrowsers),
    surrogate_refresh_time_in_minutes: cdktf.numberToTerraform(struct!.surrogateRefreshTimeInMinutes),
    up_bandwidth: cdktf.numberToTerraform(struct!.upBandwidth),
  }
}


export function orgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aup_block_internet_until_accepted: {
      value: cdktf.booleanToHclTerraform(struct!.aupBlockInternetUntilAccepted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aup_force_ssl_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.aupForceSslInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aup_timeout_in_days: {
      value: cdktf.numberToHclTerraform(struct!.aupTimeoutInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_required: {
      value: cdktf.booleanToHclTerraform(struct!.authRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    caution_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cautionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dn_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.dnBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ofw_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ofwEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_ip: {
      value: cdktf.booleanToHclTerraform(struct!.surrogateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_ip_enforced_for_known_browsers: {
      value: cdktf.booleanToHclTerraform(struct!.surrogateIpEnforcedForKnownBrowsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_refresh_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.surrogateRefreshTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.upBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aupBlockInternetUntilAccepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupBlockInternetUntilAccepted = this._aupBlockInternetUntilAccepted;
    }
    if (this._aupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupEnabled = this._aupEnabled;
    }
    if (this._aupForceSslInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupForceSslInspection = this._aupForceSslInspection;
    }
    if (this._aupTimeoutInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupTimeoutInDays = this._aupTimeoutInDays;
    }
    if (this._authRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequired = this._authRequired;
    }
    if (this._cautionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cautionEnabled = this._cautionEnabled;
    }
    if (this._dnBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnBandwidth = this._dnBandwidth;
    }
    if (this._idleTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeInMinutes = this._idleTimeInMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ofwEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofwEnabled = this._ofwEnabled;
    }
    if (this._surrogateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateIp = this._surrogateIp;
    }
    if (this._surrogateIpEnforcedForKnownBrowsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateIpEnforcedForKnownBrowsers = this._surrogateIpEnforcedForKnownBrowsers;
    }
    if (this._surrogateRefreshTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateRefreshTimeInMinutes = this._surrogateRefreshTimeInMinutes;
    }
    if (this._upBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.upBandwidth = this._upBandwidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aupBlockInternetUntilAccepted = undefined;
      this._aupEnabled = undefined;
      this._aupForceSslInspection = undefined;
      this._aupTimeoutInDays = undefined;
      this._authRequired = undefined;
      this._cautionEnabled = undefined;
      this._dnBandwidth = undefined;
      this._idleTimeInMinutes = undefined;
      this._name = undefined;
      this._ofwEnabled = undefined;
      this._surrogateIp = undefined;
      this._surrogateIpEnforcedForKnownBrowsers = undefined;
      this._surrogateRefreshTimeInMinutes = undefined;
      this._upBandwidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aupBlockInternetUntilAccepted = value.aupBlockInternetUntilAccepted;
      this._aupEnabled = value.aupEnabled;
      this._aupForceSslInspection = value.aupForceSslInspection;
      this._aupTimeoutInDays = value.aupTimeoutInDays;
      this._authRequired = value.authRequired;
      this._cautionEnabled = value.cautionEnabled;
      this._dnBandwidth = value.dnBandwidth;
      this._idleTimeInMinutes = value.idleTimeInMinutes;
      this._name = value.name;
      this._ofwEnabled = value.ofwEnabled;
      this._surrogateIp = value.surrogateIp;
      this._surrogateIpEnforcedForKnownBrowsers = value.surrogateIpEnforcedForKnownBrowsers;
      this._surrogateRefreshTimeInMinutes = value.surrogateRefreshTimeInMinutes;
      this._upBandwidth = value.upBandwidth;
    }
  }

  // aup_block_internet_until_accepted - computed: false, optional: true, required: false
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

  // aup_enabled - computed: false, optional: true, required: false
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

  // aup_force_ssl_inspection - computed: false, optional: true, required: false
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

  // auth_required - computed: false, optional: true, required: false
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

  // caution_enabled - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // ofw_enabled - computed: false, optional: true, required: false
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

  // surrogate_ip - computed: false, optional: true, required: false
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

  // surrogate_ip_enforced_for_known_browsers - computed: false, optional: true, required: false
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
}

export class OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsList extends cdktf.ComplexList {
  public internalValue? : OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations[] | cdktf.IResolvable

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
  public get(index: number): OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsOutputReference {
    return new OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgDeviceprofileGatewayTunnelProviderOptionsZscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_block_internet_until_accepted OrgDeviceprofileGateway#aup_block_internet_until_accepted}
  */
  readonly aupBlockInternetUntilAccepted?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `auth_required`==`false`, display Acceptable Use Policy (AUP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_enabled OrgDeviceprofileGateway#aup_enabled}
  */
  readonly aupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Proxy HTTPs traffic, requiring Zscaler cert to be installed in browser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_force_ssl_inspection OrgDeviceprofileGateway#aup_force_ssl_inspection}
  */
  readonly aupForceSslInspection?: boolean | cdktf.IResolvable;
  /**
  * Required if `aup_enabled`==`true`. Days before AUP is requested again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#aup_timeout_in_days OrgDeviceprofileGateway#aup_timeout_in_days}
  */
  readonly aupTimeoutInDays?: number;
  /**
  * Enable this option to enforce user authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#auth_required OrgDeviceprofileGateway#auth_required}
  */
  readonly authRequired?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `auth_required`==`false`, display caution notification for non-authenticated users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#caution_enabled OrgDeviceprofileGateway#caution_enabled}
  */
  readonly cautionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Download bandwidth cap of the link, in Mbps. Disabled if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#dn_bandwidth OrgDeviceprofileGateway#dn_bandwidth}
  */
  readonly dnBandwidth?: number;
  /**
  * Required if `surrogate_IP`==`true`, idle Time to Disassociation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#idle_time_in_minutes OrgDeviceprofileGateway#idle_time_in_minutes}
  */
  readonly idleTimeInMinutes?: number;
  /**
  * If `true`, enable the firewall control option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#ofw_enabled OrgDeviceprofileGateway#ofw_enabled}
  */
  readonly ofwEnabled?: boolean | cdktf.IResolvable;
  /**
  * `sub-locations` can be used for specific uses cases to define different configuration based on the user network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#sub_locations OrgDeviceprofileGateway#sub_locations}
  */
  readonly subLocations?: OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations[] | cdktf.IResolvable;
  /**
  * Can only be `true` when `auth_required`==`true`. Map a user to a private IP address so it applies the user's policies, instead of the location's policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#surrogate_ip OrgDeviceprofileGateway#surrogate_ip}
  */
  readonly surrogateIp?: boolean | cdktf.IResolvable;
  /**
  * Can only be `true` when `surrogate_IP`==`true`, enforce surrogate IP for known browsers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#surrogate_ip_enforced_for_known_browsers OrgDeviceprofileGateway#surrogate_ip_enforced_for_known_browsers}
  */
  readonly surrogateIpEnforcedForKnownBrowsers?: boolean | cdktf.IResolvable;
  /**
  * Required if `surrogate_IP_enforced_for_known_browsers`==`true`, must be lower or equal than `idle_time_in_minutes`, refresh Time for re-validation of Surrogacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#surrogate_refresh_time_in_minutes OrgDeviceprofileGateway#surrogate_refresh_time_in_minutes}
  */
  readonly surrogateRefreshTimeInMinutes?: number;
  /**
  * Download bandwidth cap of the link, in Mbps. Disabled if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#up_bandwidth OrgDeviceprofileGateway#up_bandwidth}
  */
  readonly upBandwidth?: number;
  /**
  * Location uses proxy chaining to forward traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#xff_forward_enabled OrgDeviceprofileGateway#xff_forward_enabled}
  */
  readonly xffForwardEnabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayTunnelProviderOptionsZscalerToTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsZscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aup_block_internet_until_accepted: cdktf.booleanToTerraform(struct!.aupBlockInternetUntilAccepted),
    aup_enabled: cdktf.booleanToTerraform(struct!.aupEnabled),
    aup_force_ssl_inspection: cdktf.booleanToTerraform(struct!.aupForceSslInspection),
    aup_timeout_in_days: cdktf.numberToTerraform(struct!.aupTimeoutInDays),
    auth_required: cdktf.booleanToTerraform(struct!.authRequired),
    caution_enabled: cdktf.booleanToTerraform(struct!.cautionEnabled),
    dn_bandwidth: cdktf.numberToTerraform(struct!.dnBandwidth),
    idle_time_in_minutes: cdktf.numberToTerraform(struct!.idleTimeInMinutes),
    ofw_enabled: cdktf.booleanToTerraform(struct!.ofwEnabled),
    sub_locations: cdktf.listMapper(orgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsToTerraform, false)(struct!.subLocations),
    surrogate_ip: cdktf.booleanToTerraform(struct!.surrogateIp),
    surrogate_ip_enforced_for_known_browsers: cdktf.booleanToTerraform(struct!.surrogateIpEnforcedForKnownBrowsers),
    surrogate_refresh_time_in_minutes: cdktf.numberToTerraform(struct!.surrogateRefreshTimeInMinutes),
    up_bandwidth: cdktf.numberToTerraform(struct!.upBandwidth),
    xff_forward_enabled: cdktf.booleanToTerraform(struct!.xffForwardEnabled),
  }
}


export function orgDeviceprofileGatewayTunnelProviderOptionsZscalerToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptionsZscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aup_block_internet_until_accepted: {
      value: cdktf.booleanToHclTerraform(struct!.aupBlockInternetUntilAccepted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aup_force_ssl_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.aupForceSslInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aup_timeout_in_days: {
      value: cdktf.numberToHclTerraform(struct!.aupTimeoutInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_required: {
      value: cdktf.booleanToHclTerraform(struct!.authRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    caution_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cautionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dn_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.dnBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofw_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ofwEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_locations: {
      value: cdktf.listMapperHcl(orgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsToHclTerraform, false)(struct!.subLocations),
      isBlock: true,
      type: "list",
      storageClassType: "OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsList",
    },
    surrogate_ip: {
      value: cdktf.booleanToHclTerraform(struct!.surrogateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_ip_enforced_for_known_browsers: {
      value: cdktf.booleanToHclTerraform(struct!.surrogateIpEnforcedForKnownBrowsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    surrogate_refresh_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.surrogateRefreshTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.upBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xff_forward_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xffForwardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelProviderOptionsZscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelProviderOptionsZscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aupBlockInternetUntilAccepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupBlockInternetUntilAccepted = this._aupBlockInternetUntilAccepted;
    }
    if (this._aupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupEnabled = this._aupEnabled;
    }
    if (this._aupForceSslInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupForceSslInspection = this._aupForceSslInspection;
    }
    if (this._aupTimeoutInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.aupTimeoutInDays = this._aupTimeoutInDays;
    }
    if (this._authRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequired = this._authRequired;
    }
    if (this._cautionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cautionEnabled = this._cautionEnabled;
    }
    if (this._dnBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnBandwidth = this._dnBandwidth;
    }
    if (this._idleTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeInMinutes = this._idleTimeInMinutes;
    }
    if (this._ofwEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofwEnabled = this._ofwEnabled;
    }
    if (this._subLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subLocations = this._subLocations?.internalValue;
    }
    if (this._surrogateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateIp = this._surrogateIp;
    }
    if (this._surrogateIpEnforcedForKnownBrowsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateIpEnforcedForKnownBrowsers = this._surrogateIpEnforcedForKnownBrowsers;
    }
    if (this._surrogateRefreshTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateRefreshTimeInMinutes = this._surrogateRefreshTimeInMinutes;
    }
    if (this._upBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.upBandwidth = this._upBandwidth;
    }
    if (this._xffForwardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffForwardEnabled = this._xffForwardEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelProviderOptionsZscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aupBlockInternetUntilAccepted = undefined;
      this._aupEnabled = undefined;
      this._aupForceSslInspection = undefined;
      this._aupTimeoutInDays = undefined;
      this._authRequired = undefined;
      this._cautionEnabled = undefined;
      this._dnBandwidth = undefined;
      this._idleTimeInMinutes = undefined;
      this._ofwEnabled = undefined;
      this._subLocations.internalValue = undefined;
      this._surrogateIp = undefined;
      this._surrogateIpEnforcedForKnownBrowsers = undefined;
      this._surrogateRefreshTimeInMinutes = undefined;
      this._upBandwidth = undefined;
      this._xffForwardEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aupBlockInternetUntilAccepted = value.aupBlockInternetUntilAccepted;
      this._aupEnabled = value.aupEnabled;
      this._aupForceSslInspection = value.aupForceSslInspection;
      this._aupTimeoutInDays = value.aupTimeoutInDays;
      this._authRequired = value.authRequired;
      this._cautionEnabled = value.cautionEnabled;
      this._dnBandwidth = value.dnBandwidth;
      this._idleTimeInMinutes = value.idleTimeInMinutes;
      this._ofwEnabled = value.ofwEnabled;
      this._subLocations.internalValue = value.subLocations;
      this._surrogateIp = value.surrogateIp;
      this._surrogateIpEnforcedForKnownBrowsers = value.surrogateIpEnforcedForKnownBrowsers;
      this._surrogateRefreshTimeInMinutes = value.surrogateRefreshTimeInMinutes;
      this._upBandwidth = value.upBandwidth;
      this._xffForwardEnabled = value.xffForwardEnabled;
    }
  }

  // aup_block_internet_until_accepted - computed: false, optional: true, required: false
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

  // aup_enabled - computed: false, optional: true, required: false
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

  // aup_force_ssl_inspection - computed: false, optional: true, required: false
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

  // auth_required - computed: false, optional: true, required: false
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

  // caution_enabled - computed: false, optional: true, required: false
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

  // ofw_enabled - computed: false, optional: true, required: false
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

  // sub_locations - computed: false, optional: true, required: false
  private _subLocations = new OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocationsList(this, "sub_locations", false);
  public get subLocations() {
    return this._subLocations;
  }
  public putSubLocations(value: OrgDeviceprofileGatewayTunnelProviderOptionsZscalerSubLocations[] | cdktf.IResolvable) {
    this._subLocations.internalValue = value;
  }
  public resetSubLocations() {
    this._subLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subLocationsInput() {
    return this._subLocations.internalValue;
  }

  // surrogate_ip - computed: false, optional: true, required: false
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

  // surrogate_ip_enforced_for_known_browsers - computed: false, optional: true, required: false
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

  // xff_forward_enabled - computed: false, optional: true, required: false
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
}
export interface OrgDeviceprofileGatewayTunnelProviderOptions {
  /**
  * For jse-ipsec, this allows provisioning of adequate resource on JSE. Make sure adequate licenses are added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#jse OrgDeviceprofileGateway#jse}
  */
  readonly jse?: OrgDeviceprofileGatewayTunnelProviderOptionsJse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#prisma OrgDeviceprofileGateway#prisma}
  */
  readonly prisma?: OrgDeviceprofileGatewayTunnelProviderOptionsPrisma;
  /**
  * For zscaler-ipsec and zscaler-gre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#zscaler OrgDeviceprofileGateway#zscaler}
  */
  readonly zscaler?: OrgDeviceprofileGatewayTunnelProviderOptionsZscaler;
}

export function orgDeviceprofileGatewayTunnelProviderOptionsToTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jse: orgDeviceprofileGatewayTunnelProviderOptionsJseToTerraform(struct!.jse),
    prisma: orgDeviceprofileGatewayTunnelProviderOptionsPrismaToTerraform(struct!.prisma),
    zscaler: orgDeviceprofileGatewayTunnelProviderOptionsZscalerToTerraform(struct!.zscaler),
  }
}


export function orgDeviceprofileGatewayTunnelProviderOptionsToHclTerraform(struct?: OrgDeviceprofileGatewayTunnelProviderOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jse: {
      value: orgDeviceprofileGatewayTunnelProviderOptionsJseToHclTerraform(struct!.jse),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelProviderOptionsJse",
    },
    prisma: {
      value: orgDeviceprofileGatewayTunnelProviderOptionsPrismaToHclTerraform(struct!.prisma),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelProviderOptionsPrisma",
    },
    zscaler: {
      value: orgDeviceprofileGatewayTunnelProviderOptionsZscalerToHclTerraform(struct!.zscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgDeviceprofileGatewayTunnelProviderOptionsZscaler",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayTunnelProviderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayTunnelProviderOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jse = this._jse?.internalValue;
    }
    if (this._prisma?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prisma = this._prisma?.internalValue;
    }
    if (this._zscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscaler = this._zscaler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayTunnelProviderOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jse.internalValue = undefined;
      this._prisma.internalValue = undefined;
      this._zscaler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jse.internalValue = value.jse;
      this._prisma.internalValue = value.prisma;
      this._zscaler.internalValue = value.zscaler;
    }
  }

  // jse - computed: false, optional: true, required: false
  private _jse = new OrgDeviceprofileGatewayTunnelProviderOptionsJseOutputReference(this, "jse");
  public get jse() {
    return this._jse;
  }
  public putJse(value: OrgDeviceprofileGatewayTunnelProviderOptionsJse) {
    this._jse.internalValue = value;
  }
  public resetJse() {
    this._jse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jseInput() {
    return this._jse.internalValue;
  }

  // prisma - computed: false, optional: true, required: false
  private _prisma = new OrgDeviceprofileGatewayTunnelProviderOptionsPrismaOutputReference(this, "prisma");
  public get prisma() {
    return this._prisma;
  }
  public putPrisma(value: OrgDeviceprofileGatewayTunnelProviderOptionsPrisma) {
    this._prisma.internalValue = value;
  }
  public resetPrisma() {
    this._prisma.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prismaInput() {
    return this._prisma.internalValue;
  }

  // zscaler - computed: false, optional: true, required: false
  private _zscaler = new OrgDeviceprofileGatewayTunnelProviderOptionsZscalerOutputReference(this, "zscaler");
  public get zscaler() {
    return this._zscaler;
  }
  public putZscaler(value: OrgDeviceprofileGatewayTunnelProviderOptionsZscaler) {
    this._zscaler.internalValue = value;
  }
  public resetZscaler() {
    this._zscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerInput() {
    return this._zscaler.internalValue;
  }
}
export interface OrgDeviceprofileGatewayVrfConfig {
  /**
  * Whether to enable VRF (when supported on the device)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#enabled OrgDeviceprofileGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgDeviceprofileGatewayVrfConfigToTerraform(struct?: OrgDeviceprofileGatewayVrfConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgDeviceprofileGatewayVrfConfigToHclTerraform(struct?: OrgDeviceprofileGatewayVrfConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayVrfConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgDeviceprofileGatewayVrfConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayVrfConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgDeviceprofileGatewayVrfInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#networks OrgDeviceprofileGateway#networks}
  */
  readonly networks?: string[];
}

export function orgDeviceprofileGatewayVrfInstancesToTerraform(struct?: OrgDeviceprofileGatewayVrfInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function orgDeviceprofileGatewayVrfInstancesToHclTerraform(struct?: OrgDeviceprofileGatewayVrfInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgDeviceprofileGatewayVrfInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgDeviceprofileGatewayVrfInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgDeviceprofileGatewayVrfInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networks = value.networks;
    }
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}

export class OrgDeviceprofileGatewayVrfInstancesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgDeviceprofileGatewayVrfInstances } | cdktf.IResolvable

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
  public get(key: string): OrgDeviceprofileGatewayVrfInstancesOutputReference {
    return new OrgDeviceprofileGatewayVrfInstancesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway mist_org_deviceprofile_gateway}
*/
export class OrgDeviceprofileGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_deviceprofile_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgDeviceprofileGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgDeviceprofileGateway to import
  * @param importFromId The id of the existing OrgDeviceprofileGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgDeviceprofileGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_deviceprofile_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_deviceprofile_gateway mist_org_deviceprofile_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgDeviceprofileGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: OrgDeviceprofileGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_deviceprofile_gateway',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalConfigCmds = config.additionalConfigCmds;
    this._bgpConfig.internalValue = config.bgpConfig;
    this._dhcpdConfig.internalValue = config.dhcpdConfig;
    this._dnsOverride = config.dnsOverride;
    this._dnsServers = config.dnsServers;
    this._dnsSuffix = config.dnsSuffix;
    this._extraRoutes.internalValue = config.extraRoutes;
    this._extraRoutes6.internalValue = config.extraRoutes6;
    this._idpProfiles.internalValue = config.idpProfiles;
    this._ipConfigs.internalValue = config.ipConfigs;
    this._name = config.name;
    this._networks.internalValue = config.networks;
    this._ntpOverride = config.ntpOverride;
    this._ntpServers = config.ntpServers;
    this._oobIpConfig.internalValue = config.oobIpConfig;
    this._orgId = config.orgId;
    this._pathPreferences.internalValue = config.pathPreferences;
    this._portConfig.internalValue = config.portConfig;
    this._routerId = config.routerId;
    this._routingPolicies.internalValue = config.routingPolicies;
    this._servicePolicies.internalValue = config.servicePolicies;
    this._ssrAdditionalConfigCmds = config.ssrAdditionalConfigCmds;
    this._tunnelConfigs.internalValue = config.tunnelConfigs;
    this._tunnelProviderOptions.internalValue = config.tunnelProviderOptions;
    this._urlFilteringDenyMsg = config.urlFilteringDenyMsg;
    this._vrfConfig.internalValue = config.vrfConfig;
    this._vrfInstances.internalValue = config.vrfInstances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_config_cmds - computed: false, optional: true, required: false
  private _additionalConfigCmds?: string[]; 
  public get additionalConfigCmds() {
    return this.getListAttribute('additional_config_cmds');
  }
  public set additionalConfigCmds(value: string[]) {
    this._additionalConfigCmds = value;
  }
  public resetAdditionalConfigCmds() {
    this._additionalConfigCmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigCmdsInput() {
    return this._additionalConfigCmds;
  }

  // bgp_config - computed: false, optional: true, required: false
  private _bgpConfig = new OrgDeviceprofileGatewayBgpConfigMap(this, "bgp_config");
  public get bgpConfig() {
    return this._bgpConfig;
  }
  public putBgpConfig(value: { [key: string]: OrgDeviceprofileGatewayBgpConfig } | cdktf.IResolvable) {
    this._bgpConfig.internalValue = value;
  }
  public resetBgpConfig() {
    this._bgpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConfigInput() {
    return this._bgpConfig.internalValue;
  }

  // dhcpd_config - computed: false, optional: true, required: false
  private _dhcpdConfig = new OrgDeviceprofileGatewayDhcpdConfigOutputReference(this, "dhcpd_config");
  public get dhcpdConfig() {
    return this._dhcpdConfig;
  }
  public putDhcpdConfig(value: OrgDeviceprofileGatewayDhcpdConfig) {
    this._dhcpdConfig.internalValue = value;
  }
  public resetDhcpdConfig() {
    this._dhcpdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpdConfigInput() {
    return this._dhcpdConfig.internalValue;
  }

  // dns_override - computed: false, optional: true, required: false
  private _dnsOverride?: boolean | cdktf.IResolvable; 
  public get dnsOverride() {
    return this.getBooleanAttribute('dns_override');
  }
  public set dnsOverride(value: boolean | cdktf.IResolvable) {
    this._dnsOverride = value;
  }
  public resetDnsOverride() {
    this._dnsOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverrideInput() {
    return this._dnsOverride;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string[]; 
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string[]) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // extra_routes - computed: false, optional: true, required: false
  private _extraRoutes = new OrgDeviceprofileGatewayExtraRoutesMap(this, "extra_routes");
  public get extraRoutes() {
    return this._extraRoutes;
  }
  public putExtraRoutes(value: { [key: string]: OrgDeviceprofileGatewayExtraRoutes } | cdktf.IResolvable) {
    this._extraRoutes.internalValue = value;
  }
  public resetExtraRoutes() {
    this._extraRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRoutesInput() {
    return this._extraRoutes.internalValue;
  }

  // extra_routes6 - computed: false, optional: true, required: false
  private _extraRoutes6 = new OrgDeviceprofileGatewayExtraRoutes6Map(this, "extra_routes6");
  public get extraRoutes6() {
    return this._extraRoutes6;
  }
  public putExtraRoutes6(value: { [key: string]: OrgDeviceprofileGatewayExtraRoutes6 } | cdktf.IResolvable) {
    this._extraRoutes6.internalValue = value;
  }
  public resetExtraRoutes6() {
    this._extraRoutes6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRoutes6Input() {
    return this._extraRoutes6.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_profiles - computed: false, optional: true, required: false
  private _idpProfiles = new OrgDeviceprofileGatewayIdpProfilesMap(this, "idp_profiles");
  public get idpProfiles() {
    return this._idpProfiles;
  }
  public putIdpProfiles(value: { [key: string]: OrgDeviceprofileGatewayIdpProfiles } | cdktf.IResolvable) {
    this._idpProfiles.internalValue = value;
  }
  public resetIdpProfiles() {
    this._idpProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpProfilesInput() {
    return this._idpProfiles.internalValue;
  }

  // ip_configs - computed: false, optional: true, required: false
  private _ipConfigs = new OrgDeviceprofileGatewayIpConfigsMap(this, "ip_configs");
  public get ipConfigs() {
    return this._ipConfigs;
  }
  public putIpConfigs(value: { [key: string]: OrgDeviceprofileGatewayIpConfigs } | cdktf.IResolvable) {
    this._ipConfigs.internalValue = value;
  }
  public resetIpConfigs() {
    this._ipConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigsInput() {
    return this._ipConfigs.internalValue;
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

  // networks - computed: false, optional: true, required: false
  private _networks = new OrgDeviceprofileGatewayNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: OrgDeviceprofileGatewayNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // ntp_override - computed: false, optional: true, required: false
  private _ntpOverride?: boolean | cdktf.IResolvable; 
  public get ntpOverride() {
    return this.getBooleanAttribute('ntp_override');
  }
  public set ntpOverride(value: boolean | cdktf.IResolvable) {
    this._ntpOverride = value;
  }
  public resetNtpOverride() {
    this._ntpOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpOverrideInput() {
    return this._ntpOverride;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // oob_ip_config - computed: true, optional: true, required: false
  private _oobIpConfig = new OrgDeviceprofileGatewayOobIpConfigOutputReference(this, "oob_ip_config");
  public get oobIpConfig() {
    return this._oobIpConfig;
  }
  public putOobIpConfig(value: OrgDeviceprofileGatewayOobIpConfig) {
    this._oobIpConfig.internalValue = value;
  }
  public resetOobIpConfig() {
    this._oobIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobIpConfigInput() {
    return this._oobIpConfig.internalValue;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // path_preferences - computed: false, optional: true, required: false
  private _pathPreferences = new OrgDeviceprofileGatewayPathPreferencesMap(this, "path_preferences");
  public get pathPreferences() {
    return this._pathPreferences;
  }
  public putPathPreferences(value: { [key: string]: OrgDeviceprofileGatewayPathPreferences } | cdktf.IResolvable) {
    this._pathPreferences.internalValue = value;
  }
  public resetPathPreferences() {
    this._pathPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPreferencesInput() {
    return this._pathPreferences.internalValue;
  }

  // port_config - computed: false, optional: true, required: false
  private _portConfig = new OrgDeviceprofileGatewayPortConfigMap(this, "port_config");
  public get portConfig() {
    return this._portConfig;
  }
  public putPortConfig(value: { [key: string]: OrgDeviceprofileGatewayPortConfig } | cdktf.IResolvable) {
    this._portConfig.internalValue = value;
  }
  public resetPortConfig() {
    this._portConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigInput() {
    return this._portConfig.internalValue;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new OrgDeviceprofileGatewayRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: OrgDeviceprofileGatewayRoutingPolicies } | cdktf.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
  }

  // service_policies - computed: false, optional: true, required: false
  private _servicePolicies = new OrgDeviceprofileGatewayServicePoliciesList(this, "service_policies", false);
  public get servicePolicies() {
    return this._servicePolicies;
  }
  public putServicePolicies(value: OrgDeviceprofileGatewayServicePolicies[] | cdktf.IResolvable) {
    this._servicePolicies.internalValue = value;
  }
  public resetServicePolicies() {
    this._servicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoliciesInput() {
    return this._servicePolicies.internalValue;
  }

  // ssr_additional_config_cmds - computed: false, optional: true, required: false
  private _ssrAdditionalConfigCmds?: string[]; 
  public get ssrAdditionalConfigCmds() {
    return this.getListAttribute('ssr_additional_config_cmds');
  }
  public set ssrAdditionalConfigCmds(value: string[]) {
    this._ssrAdditionalConfigCmds = value;
  }
  public resetSsrAdditionalConfigCmds() {
    this._ssrAdditionalConfigCmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssrAdditionalConfigCmdsInput() {
    return this._ssrAdditionalConfigCmds;
  }

  // tunnel_configs - computed: false, optional: true, required: false
  private _tunnelConfigs = new OrgDeviceprofileGatewayTunnelConfigsMap(this, "tunnel_configs");
  public get tunnelConfigs() {
    return this._tunnelConfigs;
  }
  public putTunnelConfigs(value: { [key: string]: OrgDeviceprofileGatewayTunnelConfigs } | cdktf.IResolvable) {
    this._tunnelConfigs.internalValue = value;
  }
  public resetTunnelConfigs() {
    this._tunnelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelConfigsInput() {
    return this._tunnelConfigs.internalValue;
  }

  // tunnel_provider_options - computed: false, optional: true, required: false
  private _tunnelProviderOptions = new OrgDeviceprofileGatewayTunnelProviderOptionsOutputReference(this, "tunnel_provider_options");
  public get tunnelProviderOptions() {
    return this._tunnelProviderOptions;
  }
  public putTunnelProviderOptions(value: OrgDeviceprofileGatewayTunnelProviderOptions) {
    this._tunnelProviderOptions.internalValue = value;
  }
  public resetTunnelProviderOptions() {
    this._tunnelProviderOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProviderOptionsInput() {
    return this._tunnelProviderOptions.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_filtering_deny_msg - computed: false, optional: true, required: false
  private _urlFilteringDenyMsg?: string; 
  public get urlFilteringDenyMsg() {
    return this.getStringAttribute('url_filtering_deny_msg');
  }
  public set urlFilteringDenyMsg(value: string) {
    this._urlFilteringDenyMsg = value;
  }
  public resetUrlFilteringDenyMsg() {
    this._urlFilteringDenyMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringDenyMsgInput() {
    return this._urlFilteringDenyMsg;
  }

  // vrf_config - computed: false, optional: true, required: false
  private _vrfConfig = new OrgDeviceprofileGatewayVrfConfigOutputReference(this, "vrf_config");
  public get vrfConfig() {
    return this._vrfConfig;
  }
  public putVrfConfig(value: OrgDeviceprofileGatewayVrfConfig) {
    this._vrfConfig.internalValue = value;
  }
  public resetVrfConfig() {
    this._vrfConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfConfigInput() {
    return this._vrfConfig.internalValue;
  }

  // vrf_instances - computed: false, optional: true, required: false
  private _vrfInstances = new OrgDeviceprofileGatewayVrfInstancesMap(this, "vrf_instances");
  public get vrfInstances() {
    return this._vrfInstances;
  }
  public putVrfInstances(value: { [key: string]: OrgDeviceprofileGatewayVrfInstances } | cdktf.IResolvable) {
    this._vrfInstances.internalValue = value;
  }
  public resetVrfInstances() {
    this._vrfInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInstancesInput() {
    return this._vrfInstances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_config_cmds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalConfigCmds),
      bgp_config: cdktf.hashMapper(orgDeviceprofileGatewayBgpConfigToTerraform)(this._bgpConfig.internalValue),
      dhcpd_config: orgDeviceprofileGatewayDhcpdConfigToTerraform(this._dhcpdConfig.internalValue),
      dns_override: cdktf.booleanToTerraform(this._dnsOverride),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSuffix),
      extra_routes: cdktf.hashMapper(orgDeviceprofileGatewayExtraRoutesToTerraform)(this._extraRoutes.internalValue),
      extra_routes6: cdktf.hashMapper(orgDeviceprofileGatewayExtraRoutes6ToTerraform)(this._extraRoutes6.internalValue),
      idp_profiles: cdktf.hashMapper(orgDeviceprofileGatewayIdpProfilesToTerraform)(this._idpProfiles.internalValue),
      ip_configs: cdktf.hashMapper(orgDeviceprofileGatewayIpConfigsToTerraform)(this._ipConfigs.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(orgDeviceprofileGatewayNetworksToTerraform, false)(this._networks.internalValue),
      ntp_override: cdktf.booleanToTerraform(this._ntpOverride),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      oob_ip_config: orgDeviceprofileGatewayOobIpConfigToTerraform(this._oobIpConfig.internalValue),
      org_id: cdktf.stringToTerraform(this._orgId),
      path_preferences: cdktf.hashMapper(orgDeviceprofileGatewayPathPreferencesToTerraform)(this._pathPreferences.internalValue),
      port_config: cdktf.hashMapper(orgDeviceprofileGatewayPortConfigToTerraform)(this._portConfig.internalValue),
      router_id: cdktf.stringToTerraform(this._routerId),
      routing_policies: cdktf.hashMapper(orgDeviceprofileGatewayRoutingPoliciesToTerraform)(this._routingPolicies.internalValue),
      service_policies: cdktf.listMapper(orgDeviceprofileGatewayServicePoliciesToTerraform, false)(this._servicePolicies.internalValue),
      ssr_additional_config_cmds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssrAdditionalConfigCmds),
      tunnel_configs: cdktf.hashMapper(orgDeviceprofileGatewayTunnelConfigsToTerraform)(this._tunnelConfigs.internalValue),
      tunnel_provider_options: orgDeviceprofileGatewayTunnelProviderOptionsToTerraform(this._tunnelProviderOptions.internalValue),
      url_filtering_deny_msg: cdktf.stringToTerraform(this._urlFilteringDenyMsg),
      vrf_config: orgDeviceprofileGatewayVrfConfigToTerraform(this._vrfConfig.internalValue),
      vrf_instances: cdktf.hashMapper(orgDeviceprofileGatewayVrfInstancesToTerraform)(this._vrfInstances.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_config_cmds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalConfigCmds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bgp_config: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayBgpConfigToHclTerraform)(this._bgpConfig.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayBgpConfigMap",
      },
      dhcpd_config: {
        value: orgDeviceprofileGatewayDhcpdConfigToHclTerraform(this._dhcpdConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileGatewayDhcpdConfig",
      },
      dns_override: {
        value: cdktf.booleanToHclTerraform(this._dnsOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_suffix: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSuffix),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_routes: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayExtraRoutesToHclTerraform)(this._extraRoutes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayExtraRoutesMap",
      },
      extra_routes6: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayExtraRoutes6ToHclTerraform)(this._extraRoutes6.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayExtraRoutes6Map",
      },
      idp_profiles: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayIdpProfilesToHclTerraform)(this._idpProfiles.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayIdpProfilesMap",
      },
      ip_configs: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayIpConfigsToHclTerraform)(this._ipConfigs.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayIpConfigsMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(orgDeviceprofileGatewayNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgDeviceprofileGatewayNetworksList",
      },
      ntp_override: {
        value: cdktf.booleanToHclTerraform(this._ntpOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oob_ip_config: {
        value: orgDeviceprofileGatewayOobIpConfigToHclTerraform(this._oobIpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileGatewayOobIpConfig",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_preferences: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayPathPreferencesToHclTerraform)(this._pathPreferences.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayPathPreferencesMap",
      },
      port_config: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayPortConfigToHclTerraform)(this._portConfig.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayPortConfigMap",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_policies: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayRoutingPoliciesToHclTerraform)(this._routingPolicies.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayRoutingPoliciesMap",
      },
      service_policies: {
        value: cdktf.listMapperHcl(orgDeviceprofileGatewayServicePoliciesToHclTerraform, false)(this._servicePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgDeviceprofileGatewayServicePoliciesList",
      },
      ssr_additional_config_cmds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssrAdditionalConfigCmds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tunnel_configs: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayTunnelConfigsToHclTerraform)(this._tunnelConfigs.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayTunnelConfigsMap",
      },
      tunnel_provider_options: {
        value: orgDeviceprofileGatewayTunnelProviderOptionsToHclTerraform(this._tunnelProviderOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileGatewayTunnelProviderOptions",
      },
      url_filtering_deny_msg: {
        value: cdktf.stringToHclTerraform(this._urlFilteringDenyMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_config: {
        value: orgDeviceprofileGatewayVrfConfigToHclTerraform(this._vrfConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgDeviceprofileGatewayVrfConfig",
      },
      vrf_instances: {
        value: cdktf.hashMapperHcl(orgDeviceprofileGatewayVrfInstancesToHclTerraform)(this._vrfInstances.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgDeviceprofileGatewayVrfInstancesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
