// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugLbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Load Balancing debug all switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#all DebugLb#all}
  */
  readonly all?: number;
  /**
  * Load Balancing configuration debug switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#cfg DebugLb#cfg}
  */
  readonly cfg?: number;
  /**
  * Cache Load Balancing debug switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#clb DebugLb#clb}
  */
  readonly clb?: number;
  /**
  * Packet flow debug switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#flow DebugLb#flow}
  */
  readonly flow?: number;
  /**
  * Firewall Load Balancing debug switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#fwlb DebugLb#fwlb}
  */
  readonly fwlb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#id DebugLb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Link Load Balancing debug switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#llb DebugLb#llb}
  */
  readonly llb?: number;
  /**
  * Server Load Balancing debug switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#slb DebugLb#slb}
  */
  readonly slb?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#uuid DebugLb#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb thunder_debug_lb}
*/
export class DebugLb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_lb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugLb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugLb to import
  * @param importFromId The id of the existing DebugLb that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugLb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_lb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_lb thunder_debug_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugLbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugLbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_lb',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._cfg = config.cfg;
    this._clb = config.clb;
    this._flow = config.flow;
    this._fwlb = config.fwlb;
    this._id = config.id;
    this._llb = config.llb;
    this._slb = config.slb;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // cfg - computed: false, optional: true, required: false
  private _cfg?: number; 
  public get cfg() {
    return this.getNumberAttribute('cfg');
  }
  public set cfg(value: number) {
    this._cfg = value;
  }
  public resetCfg() {
    this._cfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgInput() {
    return this._cfg;
  }

  // clb - computed: false, optional: true, required: false
  private _clb?: number; 
  public get clb() {
    return this.getNumberAttribute('clb');
  }
  public set clb(value: number) {
    this._clb = value;
  }
  public resetClb() {
    this._clb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clbInput() {
    return this._clb;
  }

  // flow - computed: false, optional: true, required: false
  private _flow?: number; 
  public get flow() {
    return this.getNumberAttribute('flow');
  }
  public set flow(value: number) {
    this._flow = value;
  }
  public resetFlow() {
    this._flow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow;
  }

  // fwlb - computed: false, optional: true, required: false
  private _fwlb?: number; 
  public get fwlb() {
    return this.getNumberAttribute('fwlb');
  }
  public set fwlb(value: number) {
    this._fwlb = value;
  }
  public resetFwlb() {
    this._fwlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwlbInput() {
    return this._fwlb;
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

  // llb - computed: false, optional: true, required: false
  private _llb?: number; 
  public get llb() {
    return this.getNumberAttribute('llb');
  }
  public set llb(value: number) {
    this._llb = value;
  }
  public resetLlb() {
    this._llb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llbInput() {
    return this._llb;
  }

  // slb - computed: false, optional: true, required: false
  private _slb?: number; 
  public get slb() {
    return this.getNumberAttribute('slb');
  }
  public set slb(value: number) {
    this._slb = value;
  }
  public resetSlb() {
    this._slb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInput() {
    return this._slb;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      cfg: cdktf.numberToTerraform(this._cfg),
      clb: cdktf.numberToTerraform(this._clb),
      flow: cdktf.numberToTerraform(this._flow),
      fwlb: cdktf.numberToTerraform(this._fwlb),
      id: cdktf.stringToTerraform(this._id),
      llb: cdktf.numberToTerraform(this._llb),
      slb: cdktf.numberToTerraform(this._slb),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cfg: {
        value: cdktf.numberToHclTerraform(this._cfg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clb: {
        value: cdktf.numberToHclTerraform(this._clb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow: {
        value: cdktf.numberToHclTerraform(this._flow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwlb: {
        value: cdktf.numberToHclTerraform(this._fwlb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      llb: {
        value: cdktf.numberToHclTerraform(this._llb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb: {
        value: cdktf.numberToHclTerraform(this._slb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
