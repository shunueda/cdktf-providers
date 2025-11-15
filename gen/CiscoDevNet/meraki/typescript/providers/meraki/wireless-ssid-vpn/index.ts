// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The NAT ID of the concentrator that should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#concentrator_network_id WirelessSsidVpn#concentrator_network_id}
  */
  readonly concentratorNetworkId?: string;
  /**
  * The VLAN that should be tagged for the concentrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#concentrator_vlan_id WirelessSsidVpn#concentrator_vlan_id}
  */
  readonly concentratorVlanId?: number;
  /**
  * Idle timer interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#failover_heartbeat_interval WirelessSsidVpn#failover_heartbeat_interval}
  */
  readonly failoverHeartbeatInterval?: number;
  /**
  * Idle timer timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#failover_idle_timeout WirelessSsidVpn#failover_idle_timeout}
  */
  readonly failoverIdleTimeout?: number;
  /**
  * IP addressed reserved on DHCP server where SSID will terminate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#failover_request_ip WirelessSsidVpn#failover_request_ip}
  */
  readonly failoverRequestIp?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#network_id WirelessSsidVpn#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#number WirelessSsidVpn#number}
  */
  readonly number: string;
  /**
  * If true, VPN split tunnel is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#split_tunnel_enabled WirelessSsidVpn#split_tunnel_enabled}
  */
  readonly splitTunnelEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of VPN split tunnel rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#split_tunnel_rules WirelessSsidVpn#split_tunnel_rules}
  */
  readonly splitTunnelRules?: WirelessSsidVpnSplitTunnelRules[] | cdktf.IResolvable;
}
export interface WirelessSsidVpnSplitTunnelRules {
  /**
  * Description for this split tunnel rule (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#comment WirelessSsidVpn#comment}
  */
  readonly comment?: string;
  /**
  * Destination for this split tunnel rule. IP address, fully-qualified domain names (FQDN) or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#dest_cidr WirelessSsidVpn#dest_cidr}
  */
  readonly destCidr: string;
  /**
  * Destination port for this split tunnel rule, (integer in the range 1-65535), or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#dest_port WirelessSsidVpn#dest_port}
  */
  readonly destPort?: string;
  /**
  * Traffic policy specified for this split tunnel rule, `allow` or `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#policy WirelessSsidVpn#policy}
  */
  readonly policy: string;
  /**
  * Protocol for this split tunnel rule.
  *   - Choices: `Any`, `TCP`, `UDP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#protocol WirelessSsidVpn#protocol}
  */
  readonly protocol?: string;
}

export function wirelessSsidVpnSplitTunnelRulesToTerraform(struct?: WirelessSsidVpnSplitTunnelRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    dest_cidr: cdktf.stringToTerraform(struct!.destCidr),
    dest_port: cdktf.stringToTerraform(struct!.destPort),
    policy: cdktf.stringToTerraform(struct!.policy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function wirelessSsidVpnSplitTunnelRulesToHclTerraform(struct?: WirelessSsidVpnSplitTunnelRules | cdktf.IResolvable): any {
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
    dest_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_port: {
      value: cdktf.stringToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidVpnSplitTunnelRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidVpnSplitTunnelRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._destCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destCidr = this._destCidr;
    }
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidVpnSplitTunnelRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._destCidr = undefined;
      this._destPort = undefined;
      this._policy = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._destCidr = value.destCidr;
      this._destPort = value.destPort;
      this._policy = value.policy;
      this._protocol = value.protocol;
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

  // dest_cidr - computed: false, optional: false, required: true
  private _destCidr?: string; 
  public get destCidr() {
    return this.getStringAttribute('dest_cidr');
  }
  public set destCidr(value: string) {
    this._destCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destCidrInput() {
    return this._destCidr;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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
}

export class WirelessSsidVpnSplitTunnelRulesList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidVpnSplitTunnelRules[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidVpnSplitTunnelRulesOutputReference {
    return new WirelessSsidVpnSplitTunnelRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn meraki_wireless_ssid_vpn}
*/
export class WirelessSsidVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidVpn to import
  * @param importFromId The id of the existing WirelessSsidVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_vpn meraki_wireless_ssid_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidVpnConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_vpn',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concentratorNetworkId = config.concentratorNetworkId;
    this._concentratorVlanId = config.concentratorVlanId;
    this._failoverHeartbeatInterval = config.failoverHeartbeatInterval;
    this._failoverIdleTimeout = config.failoverIdleTimeout;
    this._failoverRequestIp = config.failoverRequestIp;
    this._networkId = config.networkId;
    this._number = config.number;
    this._splitTunnelEnabled = config.splitTunnelEnabled;
    this._splitTunnelRules.internalValue = config.splitTunnelRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concentrator_network_id - computed: false, optional: true, required: false
  private _concentratorNetworkId?: string; 
  public get concentratorNetworkId() {
    return this.getStringAttribute('concentrator_network_id');
  }
  public set concentratorNetworkId(value: string) {
    this._concentratorNetworkId = value;
  }
  public resetConcentratorNetworkId() {
    this._concentratorNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concentratorNetworkIdInput() {
    return this._concentratorNetworkId;
  }

  // concentrator_vlan_id - computed: false, optional: true, required: false
  private _concentratorVlanId?: number; 
  public get concentratorVlanId() {
    return this.getNumberAttribute('concentrator_vlan_id');
  }
  public set concentratorVlanId(value: number) {
    this._concentratorVlanId = value;
  }
  public resetConcentratorVlanId() {
    this._concentratorVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concentratorVlanIdInput() {
    return this._concentratorVlanId;
  }

  // failover_heartbeat_interval - computed: false, optional: true, required: false
  private _failoverHeartbeatInterval?: number; 
  public get failoverHeartbeatInterval() {
    return this.getNumberAttribute('failover_heartbeat_interval');
  }
  public set failoverHeartbeatInterval(value: number) {
    this._failoverHeartbeatInterval = value;
  }
  public resetFailoverHeartbeatInterval() {
    this._failoverHeartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHeartbeatIntervalInput() {
    return this._failoverHeartbeatInterval;
  }

  // failover_idle_timeout - computed: false, optional: true, required: false
  private _failoverIdleTimeout?: number; 
  public get failoverIdleTimeout() {
    return this.getNumberAttribute('failover_idle_timeout');
  }
  public set failoverIdleTimeout(value: number) {
    this._failoverIdleTimeout = value;
  }
  public resetFailoverIdleTimeout() {
    this._failoverIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverIdleTimeoutInput() {
    return this._failoverIdleTimeout;
  }

  // failover_request_ip - computed: false, optional: true, required: false
  private _failoverRequestIp?: string; 
  public get failoverRequestIp() {
    return this.getStringAttribute('failover_request_ip');
  }
  public set failoverRequestIp(value: string) {
    this._failoverRequestIp = value;
  }
  public resetFailoverRequestIp() {
    this._failoverRequestIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRequestIpInput() {
    return this._failoverRequestIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // split_tunnel_enabled - computed: false, optional: true, required: false
  private _splitTunnelEnabled?: boolean | cdktf.IResolvable; 
  public get splitTunnelEnabled() {
    return this.getBooleanAttribute('split_tunnel_enabled');
  }
  public set splitTunnelEnabled(value: boolean | cdktf.IResolvable) {
    this._splitTunnelEnabled = value;
  }
  public resetSplitTunnelEnabled() {
    this._splitTunnelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelEnabledInput() {
    return this._splitTunnelEnabled;
  }

  // split_tunnel_rules - computed: false, optional: true, required: false
  private _splitTunnelRules = new WirelessSsidVpnSplitTunnelRulesList(this, "split_tunnel_rules", false);
  public get splitTunnelRules() {
    return this._splitTunnelRules;
  }
  public putSplitTunnelRules(value: WirelessSsidVpnSplitTunnelRules[] | cdktf.IResolvable) {
    this._splitTunnelRules.internalValue = value;
  }
  public resetSplitTunnelRules() {
    this._splitTunnelRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelRulesInput() {
    return this._splitTunnelRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concentrator_network_id: cdktf.stringToTerraform(this._concentratorNetworkId),
      concentrator_vlan_id: cdktf.numberToTerraform(this._concentratorVlanId),
      failover_heartbeat_interval: cdktf.numberToTerraform(this._failoverHeartbeatInterval),
      failover_idle_timeout: cdktf.numberToTerraform(this._failoverIdleTimeout),
      failover_request_ip: cdktf.stringToTerraform(this._failoverRequestIp),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      split_tunnel_enabled: cdktf.booleanToTerraform(this._splitTunnelEnabled),
      split_tunnel_rules: cdktf.listMapper(wirelessSsidVpnSplitTunnelRulesToTerraform, false)(this._splitTunnelRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concentrator_network_id: {
        value: cdktf.stringToHclTerraform(this._concentratorNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concentrator_vlan_id: {
        value: cdktf.numberToHclTerraform(this._concentratorVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_heartbeat_interval: {
        value: cdktf.numberToHclTerraform(this._failoverHeartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._failoverIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_request_ip: {
        value: cdktf.stringToHclTerraform(this._failoverRequestIp),
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
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_tunnel_enabled: {
        value: cdktf.booleanToHclTerraform(this._splitTunnelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      split_tunnel_rules: {
        value: cdktf.listMapperHcl(wirelessSsidVpnSplitTunnelRulesToHclTerraform, false)(this._splitTunnelRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidVpnSplitTunnelRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
