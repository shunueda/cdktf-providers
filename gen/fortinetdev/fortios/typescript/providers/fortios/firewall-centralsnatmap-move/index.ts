// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallCentralsnatmapMoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#comment FirewallCentralsnatmapMove#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#id FirewallCentralsnatmapMove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#move FirewallCentralsnatmapMove#move}
  */
  readonly move: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#policyid_dst FirewallCentralsnatmapMove#policyid_dst}
  */
  readonly policyidDst: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#policyid_src FirewallCentralsnatmapMove#policyid_src}
  */
  readonly policyidSrc: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#state_policy_srcdst_pos FirewallCentralsnatmapMove#state_policy_srcdst_pos}
  */
  readonly statePolicySrcdstPos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#vdomparam FirewallCentralsnatmapMove#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move fortios_firewall_centralsnatmap_move}
*/
export class FirewallCentralsnatmapMove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_centralsnatmap_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallCentralsnatmapMove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallCentralsnatmapMove to import
  * @param importFromId The id of the existing FirewallCentralsnatmapMove that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallCentralsnatmapMove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_centralsnatmap_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_centralsnatmap_move fortios_firewall_centralsnatmap_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallCentralsnatmapMoveConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallCentralsnatmapMoveConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_centralsnatmap_move',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._id = config.id;
    this._move = config.move;
    this._policyidDst = config.policyidDst;
    this._policyidSrc = config.policyidSrc;
    this._statePolicySrcdstPos = config.statePolicySrcdstPos;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // move - computed: false, optional: false, required: true
  private _move?: string; 
  public get move() {
    return this.getStringAttribute('move');
  }
  public set move(value: string) {
    this._move = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moveInput() {
    return this._move;
  }

  // policyid_dst - computed: false, optional: false, required: true
  private _policyidDst?: number; 
  public get policyidDst() {
    return this.getNumberAttribute('policyid_dst');
  }
  public set policyidDst(value: number) {
    this._policyidDst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidDstInput() {
    return this._policyidDst;
  }

  // policyid_src - computed: false, optional: false, required: true
  private _policyidSrc?: number; 
  public get policyidSrc() {
    return this.getNumberAttribute('policyid_src');
  }
  public set policyidSrc(value: number) {
    this._policyidSrc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidSrcInput() {
    return this._policyidSrc;
  }

  // state_policy_srcdst_pos - computed: false, optional: true, required: false
  private _statePolicySrcdstPos?: string; 
  public get statePolicySrcdstPos() {
    return this.getStringAttribute('state_policy_srcdst_pos');
  }
  public set statePolicySrcdstPos(value: string) {
    this._statePolicySrcdstPos = value;
  }
  public resetStatePolicySrcdstPos() {
    this._statePolicySrcdstPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePolicySrcdstPosInput() {
    return this._statePolicySrcdstPos;
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      move: cdktf.stringToTerraform(this._move),
      policyid_dst: cdktf.numberToTerraform(this._policyidDst),
      policyid_src: cdktf.numberToTerraform(this._policyidSrc),
      state_policy_srcdst_pos: cdktf.stringToTerraform(this._statePolicySrcdstPos),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      move: {
        value: cdktf.stringToHclTerraform(this._move),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid_dst: {
        value: cdktf.numberToHclTerraform(this._policyidDst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policyid_src: {
        value: cdktf.numberToHclTerraform(this._policyidSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state_policy_srcdst_pos: {
        value: cdktf.stringToHclTerraform(this._statePolicySrcdstPos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
