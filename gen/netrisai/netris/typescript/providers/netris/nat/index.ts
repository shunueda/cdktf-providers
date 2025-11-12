// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule action. Possible values: `DNAT`, `SNAT`, `ACCEPT_SNAT`, `MASQUERADE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#action Nat#action}
  */
  readonly action: string;
  /**
  * Custom comment for NAT rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#comment Nat#comment}
  */
  readonly comment?: string;
  /**
  * The internal IP address to which external hosts will gain access as a result of a DNAT translation. Only when action == `DNAT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#dnattoip Nat#dnattoip}
  */
  readonly dnattoip?: string;
  /**
  * The internal port to which external port will gain access as a result of a DNAT translation. Only when action == `DNAT`. Ignoring when `portgroupid` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#dnattoport Nat#dnattoport}
  */
  readonly dnattoport?: string;
  /**
  * Match traffic destined to this subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#dstaddress Nat#dstaddress}
  */
  readonly dstaddress: string;
  /**
  * Match traffic destined to this port. Ignoring when protocol == `all` or `icmp`. Ignoring when `portgroupid` is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#dstport Nat#dstport}
  */
  readonly dstport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#id Nat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name of NAT rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#name Nat#name}
  */
  readonly name: string;
  /**
  * ID of a Port Group. Port Group will apply the list of ports to Destination Port and DNAT to Port. Only when action == `DNAT` and protocol == `tcp` or `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#portgroupid Nat#portgroupid}
  */
  readonly portgroupid?: number;
  /**
  * Possible values: `all`, `tcp`, `udp`, `icmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#protocol Nat#protocol}
  */
  readonly protocol: string;
  /**
  * The site ID where this rule belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#siteid Nat#siteid}
  */
  readonly siteid: number;
  /**
  * Replace the original address with the specified one. Only when action == `SNAT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#snattoip Nat#snattoip}
  */
  readonly snattoip?: string;
  /**
  * Replace the original address with the pool of ip addresses. Only when action == `SNAT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#snattopool Nat#snattopool}
  */
  readonly snattopool?: string;
  /**
  * Match traffic sourced from this subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#srcaddress Nat#srcaddress}
  */
  readonly srcaddress: string;
  /**
  * Match traffic sourced from this port. Ignoring when protocol == `all` or `icmp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#srcport Nat#srcport}
  */
  readonly srcport?: string;
  /**
  * Rule state. Valid value is `enabled` or `disabled`. Default value is `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#state Nat#state}
  */
  readonly state?: string;
  /**
  * ID of VPC. If not specified, the NAT rule will be created in the VPC marked as a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#vpcid Nat#vpcid}
  */
  readonly vpcid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat netris_nat}
*/
export class Nat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nat to import
  * @param importFromId The id of the existing Nat that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/nat netris_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatConfig
  */
  public constructor(scope: Construct, id: string, config: NatConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_nat',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
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
    this._comment = config.comment;
    this._dnattoip = config.dnattoip;
    this._dnattoport = config.dnattoport;
    this._dstaddress = config.dstaddress;
    this._dstport = config.dstport;
    this._id = config.id;
    this._name = config.name;
    this._portgroupid = config.portgroupid;
    this._protocol = config.protocol;
    this._siteid = config.siteid;
    this._snattoip = config.snattoip;
    this._snattopool = config.snattopool;
    this._srcaddress = config.srcaddress;
    this._srcport = config.srcport;
    this._state = config.state;
    this._vpcid = config.vpcid;
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

  // dnattoip - computed: true, optional: true, required: false
  private _dnattoip?: string; 
  public get dnattoip() {
    return this.getStringAttribute('dnattoip');
  }
  public set dnattoip(value: string) {
    this._dnattoip = value;
  }
  public resetDnattoip() {
    this._dnattoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnattoipInput() {
    return this._dnattoip;
  }

  // dnattoport - computed: true, optional: true, required: false
  private _dnattoport?: string; 
  public get dnattoport() {
    return this.getStringAttribute('dnattoport');
  }
  public set dnattoport(value: string) {
    this._dnattoport = value;
  }
  public resetDnattoport() {
    this._dnattoport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnattoportInput() {
    return this._dnattoport;
  }

  // dstaddress - computed: false, optional: false, required: true
  private _dstaddress?: string; 
  public get dstaddress() {
    return this.getStringAttribute('dstaddress');
  }
  public set dstaddress(value: string) {
    this._dstaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddressInput() {
    return this._dstaddress;
  }

  // dstport - computed: true, optional: true, required: false
  private _dstport?: string; 
  public get dstport() {
    return this.getStringAttribute('dstport');
  }
  public set dstport(value: string) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
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

  // portgroupid - computed: false, optional: true, required: false
  private _portgroupid?: number; 
  public get portgroupid() {
    return this.getNumberAttribute('portgroupid');
  }
  public set portgroupid(value: number) {
    this._portgroupid = value;
  }
  public resetPortgroupid() {
    this._portgroupid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupidInput() {
    return this._portgroupid;
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

  // siteid - computed: false, optional: false, required: true
  private _siteid?: number; 
  public get siteid() {
    return this.getNumberAttribute('siteid');
  }
  public set siteid(value: number) {
    this._siteid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteidInput() {
    return this._siteid;
  }

  // snattoip - computed: true, optional: true, required: false
  private _snattoip?: string; 
  public get snattoip() {
    return this.getStringAttribute('snattoip');
  }
  public set snattoip(value: string) {
    this._snattoip = value;
  }
  public resetSnattoip() {
    this._snattoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snattoipInput() {
    return this._snattoip;
  }

  // snattopool - computed: true, optional: true, required: false
  private _snattopool?: string; 
  public get snattopool() {
    return this.getStringAttribute('snattopool');
  }
  public set snattopool(value: string) {
    this._snattopool = value;
  }
  public resetSnattopool() {
    this._snattopool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snattopoolInput() {
    return this._snattopool;
  }

  // srcaddress - computed: false, optional: false, required: true
  private _srcaddress?: string; 
  public get srcaddress() {
    return this.getStringAttribute('srcaddress');
  }
  public set srcaddress(value: string) {
    this._srcaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddressInput() {
    return this._srcaddress;
  }

  // srcport - computed: true, optional: true, required: false
  private _srcport?: string; 
  public get srcport() {
    return this.getStringAttribute('srcport');
  }
  public set srcport(value: string) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // state - computed: false, optional: true, required: false
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

  // vpcid - computed: true, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      comment: cdktf.stringToTerraform(this._comment),
      dnattoip: cdktf.stringToTerraform(this._dnattoip),
      dnattoport: cdktf.stringToTerraform(this._dnattoport),
      dstaddress: cdktf.stringToTerraform(this._dstaddress),
      dstport: cdktf.stringToTerraform(this._dstport),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      portgroupid: cdktf.numberToTerraform(this._portgroupid),
      protocol: cdktf.stringToTerraform(this._protocol),
      siteid: cdktf.numberToTerraform(this._siteid),
      snattoip: cdktf.stringToTerraform(this._snattoip),
      snattopool: cdktf.stringToTerraform(this._snattopool),
      srcaddress: cdktf.stringToTerraform(this._srcaddress),
      srcport: cdktf.stringToTerraform(this._srcport),
      state: cdktf.stringToTerraform(this._state),
      vpcid: cdktf.numberToTerraform(this._vpcid),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnattoip: {
        value: cdktf.stringToHclTerraform(this._dnattoip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnattoport: {
        value: cdktf.stringToHclTerraform(this._dnattoport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddress: {
        value: cdktf.stringToHclTerraform(this._dstaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstport: {
        value: cdktf.stringToHclTerraform(this._dstport),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portgroupid: {
        value: cdktf.numberToHclTerraform(this._portgroupid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteid: {
        value: cdktf.numberToHclTerraform(this._siteid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snattoip: {
        value: cdktf.stringToHclTerraform(this._snattoip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snattopool: {
        value: cdktf.stringToHclTerraform(this._snattopool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddress: {
        value: cdktf.stringToHclTerraform(this._srcaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcport: {
        value: cdktf.stringToHclTerraform(this._srcport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
