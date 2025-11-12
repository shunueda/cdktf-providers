// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * all debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#all DebugBgp#all}
  */
  readonly all?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#bfd DebugBgp#bfd}
  */
  readonly bfd?: number;
  /**
  * BGP Dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#dampening DebugBgp#dampening}
  */
  readonly dampening?: number;
  /**
  * BGP events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#events DebugBgp#events}
  */
  readonly events?: number;
  /**
  * BGP filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#filters DebugBgp#filters}
  */
  readonly filters?: number;
  /**
  * BGP Finite State Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#fsm DebugBgp#fsm}
  */
  readonly fsm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#id DebugBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#in DebugBgp#in}
  */
  readonly in?: number;
  /**
  * BGP keepalives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#keepalives DebugBgp#keepalives}
  */
  readonly keepalives?: number;
  /**
  * NHT message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#nht DebugBgp#nht}
  */
  readonly nht?: number;
  /**
  * NSM message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#nsm DebugBgp#nsm}
  */
  readonly nsm?: number;
  /**
  * Outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#out DebugBgp#out}
  */
  readonly out?: number;
  /**
  * BGP updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#updates DebugBgp#updates}
  */
  readonly updates?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#uuid DebugBgp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp thunder_debug_bgp}
*/
export class DebugBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugBgp to import
  * @param importFromId The id of the existing DebugBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_bgp thunder_debug_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugBgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_bgp',
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
    this._bfd = config.bfd;
    this._dampening = config.dampening;
    this._events = config.events;
    this._filters = config.filters;
    this._fsm = config.fsm;
    this._id = config.id;
    this._in = config.in;
    this._keepalives = config.keepalives;
    this._nht = config.nht;
    this._nsm = config.nsm;
    this._out = config.out;
    this._updates = config.updates;
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

  // dampening - computed: false, optional: true, required: false
  private _dampening?: number; 
  public get dampening() {
    return this.getNumberAttribute('dampening');
  }
  public set dampening(value: number) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
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

  // filters - computed: false, optional: true, required: false
  private _filters?: number; 
  public get filters() {
    return this.getNumberAttribute('filters');
  }
  public set filters(value: number) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // fsm - computed: false, optional: true, required: false
  private _fsm?: number; 
  public get fsm() {
    return this.getNumberAttribute('fsm');
  }
  public set fsm(value: number) {
    this._fsm = value;
  }
  public resetFsm() {
    this._fsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsmInput() {
    return this._fsm;
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

  // in - computed: false, optional: true, required: false
  private _in?: number; 
  public get in() {
    return this.getNumberAttribute('in');
  }
  public set in(value: number) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // keepalives - computed: false, optional: true, required: false
  private _keepalives?: number; 
  public get keepalives() {
    return this.getNumberAttribute('keepalives');
  }
  public set keepalives(value: number) {
    this._keepalives = value;
  }
  public resetKeepalives() {
    this._keepalives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivesInput() {
    return this._keepalives;
  }

  // nht - computed: false, optional: true, required: false
  private _nht?: number; 
  public get nht() {
    return this.getNumberAttribute('nht');
  }
  public set nht(value: number) {
    this._nht = value;
  }
  public resetNht() {
    this._nht = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nhtInput() {
    return this._nht;
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

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }

  // updates - computed: false, optional: true, required: false
  private _updates?: number; 
  public get updates() {
    return this.getNumberAttribute('updates');
  }
  public set updates(value: number) {
    this._updates = value;
  }
  public resetUpdates() {
    this._updates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates;
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
      dampening: cdktf.numberToTerraform(this._dampening),
      events: cdktf.numberToTerraform(this._events),
      filters: cdktf.numberToTerraform(this._filters),
      fsm: cdktf.numberToTerraform(this._fsm),
      id: cdktf.stringToTerraform(this._id),
      in: cdktf.numberToTerraform(this._in),
      keepalives: cdktf.numberToTerraform(this._keepalives),
      nht: cdktf.numberToTerraform(this._nht),
      nsm: cdktf.numberToTerraform(this._nsm),
      out: cdktf.numberToTerraform(this._out),
      updates: cdktf.numberToTerraform(this._updates),
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
      dampening: {
        value: cdktf.numberToHclTerraform(this._dampening),
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
      filters: {
        value: cdktf.numberToHclTerraform(this._filters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fsm: {
        value: cdktf.numberToHclTerraform(this._fsm),
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
      in: {
        value: cdktf.numberToHclTerraform(this._in),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalives: {
        value: cdktf.numberToHclTerraform(this._keepalives),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nht: {
        value: cdktf.numberToHclTerraform(this._nht),
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
      out: {
        value: cdktf.numberToHclTerraform(this._out),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updates: {
        value: cdktf.numberToHclTerraform(this._updates),
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
