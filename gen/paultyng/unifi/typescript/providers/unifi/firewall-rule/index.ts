// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action of the firewall rule. Must be one of `drop`, `accept`, or `reject`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#action FirewallRule#action}
  */
  readonly action: string;
  /**
  * The destination address of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#dst_address FirewallRule#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * The IPv6 destination address of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#dst_address_ipv6 FirewallRule#dst_address_ipv6}
  */
  readonly dstAddressIpv6?: string;
  /**
  * The destination firewall group IDs of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#dst_firewall_group_ids FirewallRule#dst_firewall_group_ids}
  */
  readonly dstFirewallGroupIds?: string[];
  /**
  * The destination network ID of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#dst_network_id FirewallRule#dst_network_id}
  */
  readonly dstNetworkId?: string;
  /**
  * The destination network type of the firewall rule. Can be one of `ADDRv4` or `NETv4`. Defaults to `NETv4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#dst_network_type FirewallRule#dst_network_type}
  */
  readonly dstNetworkType?: string;
  /**
  * The destination port of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#dst_port FirewallRule#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Specifies whether the rule should be enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#enabled FirewallRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ICMP type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#icmp_typename FirewallRule#icmp_typename}
  */
  readonly icmpTypename?: string;
  /**
  * ICMPv6 type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#icmp_v6_typename FirewallRule#icmp_v6_typename}
  */
  readonly icmpV6Typename?: string;
  /**
  * Specify whether the rule matches on IPsec packets. Can be one of `match-ipset` or `match-none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#ip_sec FirewallRule#ip_sec}
  */
  readonly ipSec?: string;
  /**
  * Enable logging for the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#logging FirewallRule#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * The name of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#name FirewallRule#name}
  */
  readonly name: string;
  /**
  * The protocol of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#protocol FirewallRule#protocol}
  */
  readonly protocol?: string;
  /**
  * The IPv6 protocol of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#protocol_v6 FirewallRule#protocol_v6}
  */
  readonly protocolV6?: string;
  /**
  * The index of the rule. Must be >= 2000 < 3000 or >= 4000 < 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#rule_index FirewallRule#rule_index}
  */
  readonly ruleIndex: number;
  /**
  * The ruleset for the rule. This is from the perspective of the security gateway. Must be one of `WAN_IN`, `WAN_OUT`, `WAN_LOCAL`, `LAN_IN`, `LAN_OUT`, `LAN_LOCAL`, `GUEST_IN`, `GUEST_OUT`, `GUEST_LOCAL`, `WANv6_IN`, `WANv6_OUT`, `WANv6_LOCAL`, `LANv6_IN`, `LANv6_OUT`, `LANv6_LOCAL`, `GUESTv6_IN`, `GUESTv6_OUT`, or `GUESTv6_LOCAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#ruleset FirewallRule#ruleset}
  */
  readonly ruleset: string;
  /**
  * The name of the site to associate the firewall rule with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#site FirewallRule#site}
  */
  readonly site?: string;
  /**
  * The source address for the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_address FirewallRule#src_address}
  */
  readonly srcAddress?: string;
  /**
  * The IPv6 source address for the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_address_ipv6 FirewallRule#src_address_ipv6}
  */
  readonly srcAddressIpv6?: string;
  /**
  * The source firewall group IDs for the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_firewall_group_ids FirewallRule#src_firewall_group_ids}
  */
  readonly srcFirewallGroupIds?: string[];
  /**
  * The source MAC address of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_mac FirewallRule#src_mac}
  */
  readonly srcMac?: string;
  /**
  * The source network ID for the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_network_id FirewallRule#src_network_id}
  */
  readonly srcNetworkId?: string;
  /**
  * The source network type of the firewall rule. Can be one of `ADDRv4` or `NETv4`. Defaults to `NETv4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_network_type FirewallRule#src_network_type}
  */
  readonly srcNetworkType?: string;
  /**
  * The source port of the firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#src_port FirewallRule#src_port}
  */
  readonly srcPort?: string;
  /**
  * Match where the state is established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#state_established FirewallRule#state_established}
  */
  readonly stateEstablished?: boolean | cdktf.IResolvable;
  /**
  * Match where the state is invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#state_invalid FirewallRule#state_invalid}
  */
  readonly stateInvalid?: boolean | cdktf.IResolvable;
  /**
  * Match where the state is new.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#state_new FirewallRule#state_new}
  */
  readonly stateNew?: boolean | cdktf.IResolvable;
  /**
  * Match where the state is related.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#state_related FirewallRule#state_related}
  */
  readonly stateRelated?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule unifi_firewall_rule}
*/
export class FirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallRule to import
  * @param importFromId The id of the existing FirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/firewall_rule unifi_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._dstAddress = config.dstAddress;
    this._dstAddressIpv6 = config.dstAddressIpv6;
    this._dstFirewallGroupIds = config.dstFirewallGroupIds;
    this._dstNetworkId = config.dstNetworkId;
    this._dstNetworkType = config.dstNetworkType;
    this._dstPort = config.dstPort;
    this._enabled = config.enabled;
    this._icmpTypename = config.icmpTypename;
    this._icmpV6Typename = config.icmpV6Typename;
    this._ipSec = config.ipSec;
    this._logging = config.logging;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolV6 = config.protocolV6;
    this._ruleIndex = config.ruleIndex;
    this._ruleset = config.ruleset;
    this._site = config.site;
    this._srcAddress = config.srcAddress;
    this._srcAddressIpv6 = config.srcAddressIpv6;
    this._srcFirewallGroupIds = config.srcFirewallGroupIds;
    this._srcMac = config.srcMac;
    this._srcNetworkId = config.srcNetworkId;
    this._srcNetworkType = config.srcNetworkType;
    this._srcPort = config.srcPort;
    this._stateEstablished = config.stateEstablished;
    this._stateInvalid = config.stateInvalid;
    this._stateNew = config.stateNew;
    this._stateRelated = config.stateRelated;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
  }

  // dst_address_ipv6 - computed: false, optional: true, required: false
  private _dstAddressIpv6?: string; 
  public get dstAddressIpv6() {
    return this.getStringAttribute('dst_address_ipv6');
  }
  public set dstAddressIpv6(value: string) {
    this._dstAddressIpv6 = value;
  }
  public resetDstAddressIpv6() {
    this._dstAddressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressIpv6Input() {
    return this._dstAddressIpv6;
  }

  // dst_firewall_group_ids - computed: false, optional: true, required: false
  private _dstFirewallGroupIds?: string[]; 
  public get dstFirewallGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_firewall_group_ids'));
  }
  public set dstFirewallGroupIds(value: string[]) {
    this._dstFirewallGroupIds = value;
  }
  public resetDstFirewallGroupIds() {
    this._dstFirewallGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFirewallGroupIdsInput() {
    return this._dstFirewallGroupIds;
  }

  // dst_network_id - computed: false, optional: true, required: false
  private _dstNetworkId?: string; 
  public get dstNetworkId() {
    return this.getStringAttribute('dst_network_id');
  }
  public set dstNetworkId(value: string) {
    this._dstNetworkId = value;
  }
  public resetDstNetworkId() {
    this._dstNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNetworkIdInput() {
    return this._dstNetworkId;
  }

  // dst_network_type - computed: false, optional: true, required: false
  private _dstNetworkType?: string; 
  public get dstNetworkType() {
    return this.getStringAttribute('dst_network_type');
  }
  public set dstNetworkType(value: string) {
    this._dstNetworkType = value;
  }
  public resetDstNetworkType() {
    this._dstNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNetworkTypeInput() {
    return this._dstNetworkType;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
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

  // icmp_typename - computed: false, optional: true, required: false
  private _icmpTypename?: string; 
  public get icmpTypename() {
    return this.getStringAttribute('icmp_typename');
  }
  public set icmpTypename(value: string) {
    this._icmpTypename = value;
  }
  public resetIcmpTypename() {
    this._icmpTypename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypenameInput() {
    return this._icmpTypename;
  }

  // icmp_v6_typename - computed: false, optional: true, required: false
  private _icmpV6Typename?: string; 
  public get icmpV6Typename() {
    return this.getStringAttribute('icmp_v6_typename');
  }
  public set icmpV6Typename(value: string) {
    this._icmpV6Typename = value;
  }
  public resetIcmpV6Typename() {
    this._icmpV6Typename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6TypenameInput() {
    return this._icmpV6Typename;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_sec - computed: false, optional: true, required: false
  private _ipSec?: string; 
  public get ipSec() {
    return this.getStringAttribute('ip_sec');
  }
  public set ipSec(value: string) {
    this._ipSec = value;
  }
  public resetIpSec() {
    this._ipSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSecInput() {
    return this._ipSec;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // protocol_v6 - computed: false, optional: true, required: false
  private _protocolV6?: string; 
  public get protocolV6() {
    return this.getStringAttribute('protocol_v6');
  }
  public set protocolV6(value: string) {
    this._protocolV6 = value;
  }
  public resetProtocolV6() {
    this._protocolV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolV6Input() {
    return this._protocolV6;
  }

  // rule_index - computed: false, optional: false, required: true
  private _ruleIndex?: number; 
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }
  public set ruleIndex(value: number) {
    this._ruleIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIndexInput() {
    return this._ruleIndex;
  }

  // ruleset - computed: false, optional: false, required: true
  private _ruleset?: string; 
  public get ruleset() {
    return this.getStringAttribute('ruleset');
  }
  public set ruleset(value: string) {
    this._ruleset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetInput() {
    return this._ruleset;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // src_address_ipv6 - computed: false, optional: true, required: false
  private _srcAddressIpv6?: string; 
  public get srcAddressIpv6() {
    return this.getStringAttribute('src_address_ipv6');
  }
  public set srcAddressIpv6(value: string) {
    this._srcAddressIpv6 = value;
  }
  public resetSrcAddressIpv6() {
    this._srcAddressIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressIpv6Input() {
    return this._srcAddressIpv6;
  }

  // src_firewall_group_ids - computed: false, optional: true, required: false
  private _srcFirewallGroupIds?: string[]; 
  public get srcFirewallGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('src_firewall_group_ids'));
  }
  public set srcFirewallGroupIds(value: string[]) {
    this._srcFirewallGroupIds = value;
  }
  public resetSrcFirewallGroupIds() {
    this._srcFirewallGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFirewallGroupIdsInput() {
    return this._srcFirewallGroupIds;
  }

  // src_mac - computed: false, optional: true, required: false
  private _srcMac?: string; 
  public get srcMac() {
    return this.getStringAttribute('src_mac');
  }
  public set srcMac(value: string) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // src_network_id - computed: false, optional: true, required: false
  private _srcNetworkId?: string; 
  public get srcNetworkId() {
    return this.getStringAttribute('src_network_id');
  }
  public set srcNetworkId(value: string) {
    this._srcNetworkId = value;
  }
  public resetSrcNetworkId() {
    this._srcNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNetworkIdInput() {
    return this._srcNetworkId;
  }

  // src_network_type - computed: false, optional: true, required: false
  private _srcNetworkType?: string; 
  public get srcNetworkType() {
    return this.getStringAttribute('src_network_type');
  }
  public set srcNetworkType(value: string) {
    this._srcNetworkType = value;
  }
  public resetSrcNetworkType() {
    this._srcNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNetworkTypeInput() {
    return this._srcNetworkType;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // state_established - computed: false, optional: true, required: false
  private _stateEstablished?: boolean | cdktf.IResolvable; 
  public get stateEstablished() {
    return this.getBooleanAttribute('state_established');
  }
  public set stateEstablished(value: boolean | cdktf.IResolvable) {
    this._stateEstablished = value;
  }
  public resetStateEstablished() {
    this._stateEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateEstablishedInput() {
    return this._stateEstablished;
  }

  // state_invalid - computed: false, optional: true, required: false
  private _stateInvalid?: boolean | cdktf.IResolvable; 
  public get stateInvalid() {
    return this.getBooleanAttribute('state_invalid');
  }
  public set stateInvalid(value: boolean | cdktf.IResolvable) {
    this._stateInvalid = value;
  }
  public resetStateInvalid() {
    this._stateInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInvalidInput() {
    return this._stateInvalid;
  }

  // state_new - computed: false, optional: true, required: false
  private _stateNew?: boolean | cdktf.IResolvable; 
  public get stateNew() {
    return this.getBooleanAttribute('state_new');
  }
  public set stateNew(value: boolean | cdktf.IResolvable) {
    this._stateNew = value;
  }
  public resetStateNew() {
    this._stateNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNewInput() {
    return this._stateNew;
  }

  // state_related - computed: false, optional: true, required: false
  private _stateRelated?: boolean | cdktf.IResolvable; 
  public get stateRelated() {
    return this.getBooleanAttribute('state_related');
  }
  public set stateRelated(value: boolean | cdktf.IResolvable) {
    this._stateRelated = value;
  }
  public resetStateRelated() {
    this._stateRelated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateRelatedInput() {
    return this._stateRelated;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_address_ipv6: cdktf.stringToTerraform(this._dstAddressIpv6),
      dst_firewall_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstFirewallGroupIds),
      dst_network_id: cdktf.stringToTerraform(this._dstNetworkId),
      dst_network_type: cdktf.stringToTerraform(this._dstNetworkType),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icmp_typename: cdktf.stringToTerraform(this._icmpTypename),
      icmp_v6_typename: cdktf.stringToTerraform(this._icmpV6Typename),
      ip_sec: cdktf.stringToTerraform(this._ipSec),
      logging: cdktf.booleanToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_v6: cdktf.stringToTerraform(this._protocolV6),
      rule_index: cdktf.numberToTerraform(this._ruleIndex),
      ruleset: cdktf.stringToTerraform(this._ruleset),
      site: cdktf.stringToTerraform(this._site),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_address_ipv6: cdktf.stringToTerraform(this._srcAddressIpv6),
      src_firewall_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcFirewallGroupIds),
      src_mac: cdktf.stringToTerraform(this._srcMac),
      src_network_id: cdktf.stringToTerraform(this._srcNetworkId),
      src_network_type: cdktf.stringToTerraform(this._srcNetworkType),
      src_port: cdktf.stringToTerraform(this._srcPort),
      state_established: cdktf.booleanToTerraform(this._stateEstablished),
      state_invalid: cdktf.booleanToTerraform(this._stateInvalid),
      state_new: cdktf.booleanToTerraform(this._stateNew),
      state_related: cdktf.booleanToTerraform(this._stateRelated),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address_ipv6: {
        value: cdktf.stringToHclTerraform(this._dstAddressIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_firewall_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstFirewallGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_network_id: {
        value: cdktf.stringToHclTerraform(this._dstNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_network_type: {
        value: cdktf.stringToHclTerraform(this._dstNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_typename: {
        value: cdktf.stringToHclTerraform(this._icmpTypename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_v6_typename: {
        value: cdktf.stringToHclTerraform(this._icmpV6Typename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sec: {
        value: cdktf.stringToHclTerraform(this._ipSec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_v6: {
        value: cdktf.stringToHclTerraform(this._protocolV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_index: {
        value: cdktf.numberToHclTerraform(this._ruleIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ruleset: {
        value: cdktf.stringToHclTerraform(this._ruleset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address_ipv6: {
        value: cdktf.stringToHclTerraform(this._srcAddressIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_firewall_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcFirewallGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_mac: {
        value: cdktf.stringToHclTerraform(this._srcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_network_id: {
        value: cdktf.stringToHclTerraform(this._srcNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_network_type: {
        value: cdktf.stringToHclTerraform(this._srcNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.stringToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_established: {
        value: cdktf.booleanToHclTerraform(this._stateEstablished),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state_invalid: {
        value: cdktf.booleanToHclTerraform(this._stateInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state_new: {
        value: cdktf.booleanToHclTerraform(this._stateNew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state_related: {
        value: cdktf.booleanToHclTerraform(this._stateRelated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
