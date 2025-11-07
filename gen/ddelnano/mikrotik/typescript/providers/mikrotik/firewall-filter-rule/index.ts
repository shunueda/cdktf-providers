// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilterRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to take if packet is matched by the rule. Default: `accept`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#action FirewallFilterRule#action}
  */
  readonly action?: string;
  /**
  * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new chain will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#chain FirewallFilterRule#chain}
  */
  readonly chain: string;
  /**
  * Comment to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#comment FirewallFilterRule#comment}
  */
  readonly comment?: string;
  /**
  * Interprets the connection tracking analysis data for a particular packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#connection_state FirewallFilterRule#connection_state}
  */
  readonly connectionState?: string[];
  /**
  * List of destination port numbers or port number ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#dst_port FirewallFilterRule#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Interface the packet has entered the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#in_interface FirewallFilterRule#in_interface}
  */
  readonly inInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as in-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#in_interface_list FirewallFilterRule#in_interface_list}
  */
  readonly inInterfaceList?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as out-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#out_interface_list FirewallFilterRule#out_interface_list}
  */
  readonly outInterfaceList?: string;
  /**
  * Matches particular IP protocol specified by protocol name or number. Default: `tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#protocol FirewallFilterRule#protocol}
  */
  readonly protocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule mikrotik_firewall_filter_rule}
*/
export class FirewallFilterRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_firewall_filter_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilterRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilterRule to import
  * @param importFromId The id of the existing FirewallFilterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilterRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_firewall_filter_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/firewall_filter_rule mikrotik_firewall_filter_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilterRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilterRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_firewall_filter_rule',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
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
    this._chain = config.chain;
    this._comment = config.comment;
    this._connectionState = config.connectionState;
    this._dstPort = config.dstPort;
    this._inInterface = config.inInterface;
    this._inInterfaceList = config.inInterfaceList;
    this._outInterfaceList = config.outInterfaceList;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // chain - computed: false, optional: false, required: true
  private _chain?: string; 
  public get chain() {
    return this.getStringAttribute('chain');
  }
  public set chain(value: string) {
    this._chain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
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

  // connection_state - computed: true, optional: true, required: false
  private _connectionState?: string[]; 
  public get connectionState() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_state'));
  }
  public set connectionState(value: string[]) {
    this._connectionState = value;
  }
  public resetConnectionState() {
    this._connectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStateInput() {
    return this._connectionState;
  }

  // dst_port - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_interface - computed: true, optional: true, required: false
  private _inInterface?: string; 
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }
  public set inInterface(value: string) {
    this._inInterface = value;
  }
  public resetInInterface() {
    this._inInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInterfaceInput() {
    return this._inInterface;
  }

  // in_interface_list - computed: true, optional: true, required: false
  private _inInterfaceList?: string; 
  public get inInterfaceList() {
    return this.getStringAttribute('in_interface_list');
  }
  public set inInterfaceList(value: string) {
    this._inInterfaceList = value;
  }
  public resetInInterfaceList() {
    this._inInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInterfaceListInput() {
    return this._inInterfaceList;
  }

  // out_interface_list - computed: true, optional: true, required: false
  private _outInterfaceList?: string; 
  public get outInterfaceList() {
    return this.getStringAttribute('out_interface_list');
  }
  public set outInterfaceList(value: string) {
    this._outInterfaceList = value;
  }
  public resetOutInterfaceList() {
    this._outInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInterfaceListInput() {
    return this._outInterfaceList;
  }

  // protocol - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      chain: cdktf.stringToTerraform(this._chain),
      comment: cdktf.stringToTerraform(this._comment),
      connection_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionState),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      in_interface: cdktf.stringToTerraform(this._inInterface),
      in_interface_list: cdktf.stringToTerraform(this._inInterfaceList),
      out_interface_list: cdktf.stringToTerraform(this._outInterfaceList),
      protocol: cdktf.stringToTerraform(this._protocol),
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
      chain: {
        value: cdktf.stringToHclTerraform(this._chain),
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
      connection_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionState),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_interface: {
        value: cdktf.stringToHclTerraform(this._inInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_interface_list: {
        value: cdktf.stringToHclTerraform(this._inInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_interface_list: {
        value: cdktf.stringToHclTerraform(this._outInterfaceList),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
