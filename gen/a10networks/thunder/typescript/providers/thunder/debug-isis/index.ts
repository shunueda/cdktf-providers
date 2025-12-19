// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#all DebugIsis#all}
  */
  readonly all?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#bfd DebugIsis#bfd}
  */
  readonly bfd?: number;
  /**
  * IS-IS Events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#events DebugIsis#events}
  */
  readonly events?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#id DebugIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IS-IS Interface Finite State Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#ifsm DebugIsis#ifsm}
  */
  readonly ifsm?: number;
  /**
  * IS-IS Link State PDU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#lsp DebugIsis#lsp}
  */
  readonly lsp?: number;
  /**
  * IS-IS Neighbor Finite State Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#nfsm DebugIsis#nfsm}
  */
  readonly nfsm?: number;
  /**
  * IS-IS NSM information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#nsm DebugIsis#nsm}
  */
  readonly nsm?: number;
  /**
  * IS-IS Protocol Data Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#pdu DebugIsis#pdu}
  */
  readonly pdu?: number;
  /**
  * IS-IS SPF Calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#spf DebugIsis#spf}
  */
  readonly spf?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#uuid DebugIsis#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis thunder_debug_isis}
*/
export class DebugIsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugIsis to import
  * @param importFromId The id of the existing DebugIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_isis thunder_debug_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugIsisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugIsisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_isis',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._bfd = config.bfd;
    this._events = config.events;
    this._id = config.id;
    this._ifsm = config.ifsm;
    this._lsp = config.lsp;
    this._nfsm = config.nfsm;
    this._nsm = config.nsm;
    this._pdu = config.pdu;
    this._spf = config.spf;
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

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // events - computed: false, optional: true, required: false
  private _events?: number; 
  public get events() {
    return this.getNumberAttribute('events');
  }
  public set events(value: number) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // ifsm - computed: false, optional: true, required: false
  private _ifsm?: number; 
  public get ifsm() {
    return this.getNumberAttribute('ifsm');
  }
  public set ifsm(value: number) {
    this._ifsm = value;
  }
  public resetIfsm() {
    this._ifsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifsmInput() {
    return this._ifsm;
  }

  // lsp - computed: false, optional: true, required: false
  private _lsp?: number; 
  public get lsp() {
    return this.getNumberAttribute('lsp');
  }
  public set lsp(value: number) {
    this._lsp = value;
  }
  public resetLsp() {
    this._lsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspInput() {
    return this._lsp;
  }

  // nfsm - computed: false, optional: true, required: false
  private _nfsm?: number; 
  public get nfsm() {
    return this.getNumberAttribute('nfsm');
  }
  public set nfsm(value: number) {
    this._nfsm = value;
  }
  public resetNfsm() {
    this._nfsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsmInput() {
    return this._nfsm;
  }

  // nsm - computed: false, optional: true, required: false
  private _nsm?: number; 
  public get nsm() {
    return this.getNumberAttribute('nsm');
  }
  public set nsm(value: number) {
    this._nsm = value;
  }
  public resetNsm() {
    this._nsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsmInput() {
    return this._nsm;
  }

  // pdu - computed: false, optional: true, required: false
  private _pdu?: number; 
  public get pdu() {
    return this.getNumberAttribute('pdu');
  }
  public set pdu(value: number) {
    this._pdu = value;
  }
  public resetPdu() {
    this._pdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduInput() {
    return this._pdu;
  }

  // spf - computed: false, optional: true, required: false
  private _spf?: number; 
  public get spf() {
    return this.getNumberAttribute('spf');
  }
  public set spf(value: number) {
    this._spf = value;
  }
  public resetSpf() {
    this._spf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInput() {
    return this._spf;
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
      bfd: cdktf.numberToTerraform(this._bfd),
      events: cdktf.numberToTerraform(this._events),
      id: cdktf.stringToTerraform(this._id),
      ifsm: cdktf.numberToTerraform(this._ifsm),
      lsp: cdktf.numberToTerraform(this._lsp),
      nfsm: cdktf.numberToTerraform(this._nfsm),
      nsm: cdktf.numberToTerraform(this._nsm),
      pdu: cdktf.numberToTerraform(this._pdu),
      spf: cdktf.numberToTerraform(this._spf),
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
      bfd: {
        value: cdktf.numberToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      events: {
        value: cdktf.numberToHclTerraform(this._events),
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
      ifsm: {
        value: cdktf.numberToHclTerraform(this._ifsm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp: {
        value: cdktf.numberToHclTerraform(this._lsp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nfsm: {
        value: cdktf.numberToHclTerraform(this._nfsm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsm: {
        value: cdktf.numberToHclTerraform(this._nsm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pdu: {
        value: cdktf.numberToHclTerraform(this._pdu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf: {
        value: cdktf.numberToHclTerraform(this._spf),
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
