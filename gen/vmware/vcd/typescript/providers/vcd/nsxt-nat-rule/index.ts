// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application Port Profile to apply for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#app_port_profile_id NsxtNatRule#app_port_profile_id}
  */
  readonly appPortProfileId?: string;
  /**
  * Description of NAT rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#description NsxtNatRule#description}
  */
  readonly description?: string;
  /**
  * For DNAT only. Enter a port into which the DNAT rule is translating for the packets inbound to the virtual machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#dnat_external_port NsxtNatRule#dnat_external_port}
  */
  readonly dnatExternalPort?: string;
  /**
  * Edge gateway name in which NAT Rule is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#edge_gateway_id NsxtNatRule#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Enables or disables this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#enabled NsxtNatRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP address or CIDR of external network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#external_address NsxtNatRule#external_address}
  */
  readonly externalAddress?: string;
  /**
  * VCD 10.2.2+ Determines how the firewall matches the address during NATing if firewall stage is not skipped. One of 'MATCH_INTERNAL_ADDRESS', 'MATCH_EXTERNAL_ADDRESS', 'BYPASS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#firewall_match NsxtNatRule#firewall_match}
  */
  readonly firewallMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#id NsxtNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address or CIDR of the virtual machines for which you are configuring NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#internal_address NsxtNatRule#internal_address}
  */
  readonly internalAddress?: string;
  /**
  * Enable logging when this rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#logging NsxtNatRule#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Name of NAT rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#name NsxtNatRule#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#org NsxtNatRule#org}
  */
  readonly org?: string;
  /**
  * VCD 10.2.2+ If an address has multiple NAT rules, the rule with the highest priority is applied. A lower value means a higher precedence for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#priority NsxtNatRule#priority}
  */
  readonly priority?: number;
  /**
  * Rule type - one of 'DNAT', 'NO_DNAT', 'SNAT', 'NO_SNAT', 'REFLEXIVE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#rule_type NsxtNatRule#rule_type}
  */
  readonly ruleType: string;
  /**
  * For SNAT only. If you want the rule to apply only for traffic to a specific domain, enter an IP address for this domain or an IP address range in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#snat_destination_address NsxtNatRule#snat_destination_address}
  */
  readonly snatDestinationAddress?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#vdc NsxtNatRule#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule vcd_nsxt_nat_rule}
*/
export class NsxtNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtNatRule to import
  * @param importFromId The id of the existing NsxtNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_nat_rule vcd_nsxt_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appPortProfileId = config.appPortProfileId;
    this._description = config.description;
    this._dnatExternalPort = config.dnatExternalPort;
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._externalAddress = config.externalAddress;
    this._firewallMatch = config.firewallMatch;
    this._id = config.id;
    this._internalAddress = config.internalAddress;
    this._logging = config.logging;
    this._name = config.name;
    this._org = config.org;
    this._priority = config.priority;
    this._ruleType = config.ruleType;
    this._snatDestinationAddress = config.snatDestinationAddress;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_port_profile_id - computed: false, optional: true, required: false
  private _appPortProfileId?: string; 
  public get appPortProfileId() {
    return this.getStringAttribute('app_port_profile_id');
  }
  public set appPortProfileId(value: string) {
    this._appPortProfileId = value;
  }
  public resetAppPortProfileId() {
    this._appPortProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPortProfileIdInput() {
    return this._appPortProfileId;
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

  // dnat_external_port - computed: false, optional: true, required: false
  private _dnatExternalPort?: string; 
  public get dnatExternalPort() {
    return this.getStringAttribute('dnat_external_port');
  }
  public set dnatExternalPort(value: string) {
    this._dnatExternalPort = value;
  }
  public resetDnatExternalPort() {
    this._dnatExternalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatExternalPortInput() {
    return this._dnatExternalPort;
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // external_address - computed: false, optional: true, required: false
  private _externalAddress?: string; 
  public get externalAddress() {
    return this.getStringAttribute('external_address');
  }
  public set externalAddress(value: string) {
    this._externalAddress = value;
  }
  public resetExternalAddress() {
    this._externalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressInput() {
    return this._externalAddress;
  }

  // firewall_match - computed: true, optional: true, required: false
  private _firewallMatch?: string; 
  public get firewallMatch() {
    return this.getStringAttribute('firewall_match');
  }
  public set firewallMatch(value: string) {
    this._firewallMatch = value;
  }
  public resetFirewallMatch() {
    this._firewallMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallMatchInput() {
    return this._firewallMatch;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internal_address - computed: false, optional: true, required: false
  private _internalAddress?: string; 
  public get internalAddress() {
    return this.getStringAttribute('internal_address');
  }
  public set internalAddress(value: string) {
    this._internalAddress = value;
  }
  public resetInternalAddress() {
    this._internalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAddressInput() {
    return this._internalAddress;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // snat_destination_address - computed: false, optional: true, required: false
  private _snatDestinationAddress?: string; 
  public get snatDestinationAddress() {
    return this.getStringAttribute('snat_destination_address');
  }
  public set snatDestinationAddress(value: string) {
    this._snatDestinationAddress = value;
  }
  public resetSnatDestinationAddress() {
    this._snatDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatDestinationAddressInput() {
    return this._snatDestinationAddress;
  }

  // vdc - computed: true, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_port_profile_id: cdktf.stringToTerraform(this._appPortProfileId),
      description: cdktf.stringToTerraform(this._description),
      dnat_external_port: cdktf.stringToTerraform(this._dnatExternalPort),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_address: cdktf.stringToTerraform(this._externalAddress),
      firewall_match: cdktf.stringToTerraform(this._firewallMatch),
      id: cdktf.stringToTerraform(this._id),
      internal_address: cdktf.stringToTerraform(this._internalAddress),
      logging: cdktf.booleanToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      priority: cdktf.numberToTerraform(this._priority),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      snat_destination_address: cdktf.stringToTerraform(this._snatDestinationAddress),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_port_profile_id: {
        value: cdktf.stringToHclTerraform(this._appPortProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnat_external_port: {
        value: cdktf.stringToHclTerraform(this._dnatExternalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      external_address: {
        value: cdktf.stringToHclTerraform(this._externalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_match: {
        value: cdktf.stringToHclTerraform(this._firewallMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_address: {
        value: cdktf.stringToHclTerraform(this._internalAddress),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_type: {
        value: cdktf.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_destination_address: {
        value: cdktf.stringToHclTerraform(this._snatDestinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
