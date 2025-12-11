// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceL3FirewallRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#network_id ApplianceL3FirewallRules#network_id}
  */
  readonly networkId: string;
  /**
  * An ordered array of the firewall rules (not including the default rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#rules ApplianceL3FirewallRules#rules}
  */
  readonly rules: ApplianceL3FirewallRulesRules[] | cdktf.IResolvable;
  /**
  * Log the special default rule (boolean value - enable only if you`ve configured a syslog server) (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#syslog_default_rule ApplianceL3FirewallRules#syslog_default_rule}
  */
  readonly syslogDefaultRule?: boolean | cdktf.IResolvable;
}
export interface ApplianceL3FirewallRulesRules {
  /**
  * Description of the rule (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#comment ApplianceL3FirewallRules#comment}
  */
  readonly comment?: string;
  /**
  * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or `Any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#dest_cidr ApplianceL3FirewallRules#dest_cidr}
  */
  readonly destCidr: string;
  /**
  * Comma-separated list of destination port(s) (integer in the range 1-65535), or `Any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#dest_port ApplianceL3FirewallRules#dest_port}
  */
  readonly destPort?: string;
  /**
  * `allow` or `deny` traffic specified by this rule
  *   - Choices: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#policy ApplianceL3FirewallRules#policy}
  */
  readonly policy: string;
  /**
  * The type of protocol (must be `tcp`, `udp`, `icmp`, `icmp6` or `any`)
  *   - Choices: `any`, `icmp`, `icmp6`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#protocol ApplianceL3FirewallRules#protocol}
  */
  readonly protocol: string;
  /**
  * Comma-separated list of source IP address(es) (in IP or CIDR notation), or `Any` (note: FQDN not supported for source addresses)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#src_cidr ApplianceL3FirewallRules#src_cidr}
  */
  readonly srcCidr: string;
  /**
  * Comma-separated list of source port(s) (integer in the range 1-65535), or `Any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#src_port ApplianceL3FirewallRules#src_port}
  */
  readonly srcPort?: string;
  /**
  * Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#syslog_enabled ApplianceL3FirewallRules#syslog_enabled}
  */
  readonly syslogEnabled?: boolean | cdktf.IResolvable;
}

export function applianceL3FirewallRulesRulesToTerraform(struct?: ApplianceL3FirewallRulesRules | cdktf.IResolvable): any {
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
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
    syslog_enabled: cdktf.booleanToTerraform(struct!.syslogEnabled),
  }
}


export function applianceL3FirewallRulesRulesToHclTerraform(struct?: ApplianceL3FirewallRulesRules | cdktf.IResolvable): any {
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
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.syslogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceL3FirewallRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceL3FirewallRulesRules | cdktf.IResolvable | undefined {
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
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._syslogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogEnabled = this._syslogEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceL3FirewallRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._destCidr = undefined;
      this._destPort = undefined;
      this._policy = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
      this._syslogEnabled = undefined;
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
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
      this._syslogEnabled = value.syslogEnabled;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: false, optional: false, required: true
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
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

  // syslog_enabled - computed: false, optional: true, required: false
  private _syslogEnabled?: boolean | cdktf.IResolvable; 
  public get syslogEnabled() {
    return this.getBooleanAttribute('syslog_enabled');
  }
  public set syslogEnabled(value: boolean | cdktf.IResolvable) {
    this._syslogEnabled = value;
  }
  public resetSyslogEnabled() {
    this._syslogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogEnabledInput() {
    return this._syslogEnabled;
  }
}

export class ApplianceL3FirewallRulesRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceL3FirewallRulesRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceL3FirewallRulesRulesOutputReference {
    return new ApplianceL3FirewallRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules meraki_appliance_l3_firewall_rules}
*/
export class ApplianceL3FirewallRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_l3_firewall_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceL3FirewallRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceL3FirewallRules to import
  * @param importFromId The id of the existing ApplianceL3FirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceL3FirewallRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_l3_firewall_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_l3_firewall_rules meraki_appliance_l3_firewall_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceL3FirewallRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceL3FirewallRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_l3_firewall_rules',
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
    this._networkId = config.networkId;
    this._rules.internalValue = config.rules;
    this._syslogDefaultRule = config.syslogDefaultRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rules - computed: false, optional: false, required: true
  private _rules = new ApplianceL3FirewallRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplianceL3FirewallRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // syslog_default_rule - computed: false, optional: true, required: false
  private _syslogDefaultRule?: boolean | cdktf.IResolvable; 
  public get syslogDefaultRule() {
    return this.getBooleanAttribute('syslog_default_rule');
  }
  public set syslogDefaultRule(value: boolean | cdktf.IResolvable) {
    this._syslogDefaultRule = value;
  }
  public resetSyslogDefaultRule() {
    this._syslogDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogDefaultRuleInput() {
    return this._syslogDefaultRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      rules: cdktf.listMapper(applianceL3FirewallRulesRulesToTerraform, false)(this._rules.internalValue),
      syslog_default_rule: cdktf.booleanToTerraform(this._syslogDefaultRule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(applianceL3FirewallRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceL3FirewallRulesRulesList",
      },
      syslog_default_rule: {
        value: cdktf.booleanToHclTerraform(this._syslogDefaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
