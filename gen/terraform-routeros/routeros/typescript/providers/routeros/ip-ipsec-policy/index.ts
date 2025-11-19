// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#___path___ IpIpsecPolicy#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#___skip___ IpIpsecPolicy#___skip___}
  */
  readonly skip?: string;
  /**
  * Specifies what to do with the packet matched by the policy.none - pass the packet unchanged.discard - drop the packet.encrypt - apply transformations specified in this policy and it's SA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#action IpIpsecPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#comment IpIpsecPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#disabled IpIpsecPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Destination address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#dst_address IpIpsecPolicy#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Destination port to be matched in packets. If set to any all ports will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#dst_port IpIpsecPolicy#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Name of the policy group to which this **template** is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#group IpIpsecPolicy#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#id IpIpsecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies what combination of Authentication Header and Encapsulating Security Payload protocols you want to apply to matched traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#ipsec_protocols IpIpsecPolicy#ipsec_protocols}
  */
  readonly ipsecProtocols?: string;
  /**
  * Specifies what to do if some of the SAs for this policy cannot be found:
  *   * use - skip this transform, do not drop the packet, and do not acquire SA from IKE daemon;
  *   * require - drop the packet and acquire SA;
  *   * unique - drop the packet and acquire a unique SA that is only used with this particular policy. It is used in setups where multiple clients can sit behind one public IP address (clients behind NAT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#level IpIpsecPolicy#level}
  */
  readonly level?: string;
  /**
  * Name of the peer on which the policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#peer IpIpsecPolicy#peer}
  */
  readonly peer?: string;
  /**
  * Name of the proposal template that will be sent by IKE daemon to establish SAs for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#proposal IpIpsecPolicy#proposal}
  */
  readonly proposal?: string;
  /**
  * IP packet protocol to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#protocol IpIpsecPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Source address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#src_address IpIpsecPolicy#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Source port to be matched in packets. If set to any all ports will be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#src_port IpIpsecPolicy#src_port}
  */
  readonly srcPort?: string;
  /**
  * Creates a template and assigns it to a specified policy group.Following parameters are used by template:
  *   * group - name of the policy group to which this template is assigned;
  *   * src-address,
  *   * dst-address - Requested subnet must match in both directions (for example 0.0.0.0/0 to allow all);
  *   * protocol - protocol to match, if set to all, then any protocol is accepted;
  *   * proposal - SA parameters used for this template;
  *   * level - useful when unique is required in setups with multiple clients behind NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#template IpIpsecPolicy#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to use tunnel mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#tunnel IpIpsecPolicy#tunnel}
  */
  readonly tunnel?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy routeros_ip_ipsec_policy}
*/
export class IpIpsecPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecPolicy to import
  * @param importFromId The id of the existing IpIpsecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_policy routeros_ip_ipsec_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpIpsecPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_policy',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._action = config.action;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dstAddress = config.dstAddress;
    this._dstPort = config.dstPort;
    this._group = config.group;
    this._id = config.id;
    this._ipsecProtocols = config.ipsecProtocols;
    this._level = config.level;
    this._peer = config.peer;
    this._proposal = config.proposal;
    this._protocol = config.protocol;
    this._srcAddress = config.srcAddress;
    this._srcPort = config.srcPort;
    this._template = config.template;
    this._tunnel = config.tunnel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // ipsec_protocols - computed: false, optional: true, required: false
  private _ipsecProtocols?: string; 
  public get ipsecProtocols() {
    return this.getStringAttribute('ipsec_protocols');
  }
  public set ipsecProtocols(value: string) {
    this._ipsecProtocols = value;
  }
  public resetIpsecProtocols() {
    this._ipsecProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecProtocolsInput() {
    return this._ipsecProtocols;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // proposal - computed: false, optional: true, required: false
  private _proposal?: string; 
  public get proposal() {
    return this.getStringAttribute('proposal');
  }
  public set proposal(value: string) {
    this._proposal = value;
  }
  public resetProposal() {
    this._proposal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalInput() {
    return this._proposal;
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

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: boolean | cdktf.IResolvable; 
  public get tunnel() {
    return this.getBooleanAttribute('tunnel');
  }
  public set tunnel(value: boolean | cdktf.IResolvable) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      action: cdktf.stringToTerraform(this._action),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      ipsec_protocols: cdktf.stringToTerraform(this._ipsecProtocols),
      level: cdktf.stringToTerraform(this._level),
      peer: cdktf.stringToTerraform(this._peer),
      proposal: cdktf.stringToTerraform(this._proposal),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_port: cdktf.stringToTerraform(this._srcPort),
      template: cdktf.booleanToTerraform(this._template),
      tunnel: cdktf.booleanToTerraform(this._tunnel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
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
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      ipsec_protocols: {
        value: cdktf.stringToHclTerraform(this._ipsecProtocols),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.stringToHclTerraform(this._peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposal: {
        value: cdktf.stringToHclTerraform(this._proposal),
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
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
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
      template: {
        value: cdktf.booleanToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel: {
        value: cdktf.booleanToHclTerraform(this._tunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
