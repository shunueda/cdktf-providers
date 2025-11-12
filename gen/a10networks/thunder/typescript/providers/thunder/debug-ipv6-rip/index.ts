// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugIpv6RipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all debugging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#all DebugIpv6Rip#all}
  */
  readonly all?: number;
  /**
  * Detailed information display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#detail DebugIpv6Rip#detail}
  */
  readonly detail?: number;
  /**
  * RIPng events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#events DebugIpv6Rip#events}
  */
  readonly events?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#id DebugIpv6Rip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * RIPng and NSM communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#nsm DebugIpv6Rip#nsm}
  */
  readonly nsm?: number;
  /**
  * RIPng packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#packet DebugIpv6Rip#packet}
  */
  readonly packet?: number;
  /**
  * RIPng receive packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#recv DebugIpv6Rip#recv}
  */
  readonly recv?: number;
  /**
  * RIPng send packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#send DebugIpv6Rip#send}
  */
  readonly send?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip thunder_debug_ipv6_rip}
*/
export class DebugIpv6Rip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ipv6_rip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugIpv6Rip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugIpv6Rip to import
  * @param importFromId The id of the existing DebugIpv6Rip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugIpv6Rip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ipv6_rip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_rip thunder_debug_ipv6_rip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugIpv6RipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugIpv6RipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ipv6_rip',
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
    this._detail = config.detail;
    this._events = config.events;
    this._id = config.id;
    this._nsm = config.nsm;
    this._packet = config.packet;
    this._recv = config.recv;
    this._send = config.send;
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

  // detail - computed: false, optional: true, required: false
  private _detail?: number; 
  public get detail() {
    return this.getNumberAttribute('detail');
  }
  public set detail(value: number) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
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

  // packet - computed: false, optional: true, required: false
  private _packet?: number; 
  public get packet() {
    return this.getNumberAttribute('packet');
  }
  public set packet(value: number) {
    this._packet = value;
  }
  public resetPacket() {
    this._packet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetInput() {
    return this._packet;
  }

  // recv - computed: false, optional: true, required: false
  private _recv?: number; 
  public get recv() {
    return this.getNumberAttribute('recv');
  }
  public set recv(value: number) {
    this._recv = value;
  }
  public resetRecv() {
    this._recv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvInput() {
    return this._recv;
  }

  // send - computed: false, optional: true, required: false
  private _send?: number; 
  public get send() {
    return this.getNumberAttribute('send');
  }
  public set send(value: number) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      detail: cdktf.numberToTerraform(this._detail),
      events: cdktf.numberToTerraform(this._events),
      id: cdktf.stringToTerraform(this._id),
      nsm: cdktf.numberToTerraform(this._nsm),
      packet: cdktf.numberToTerraform(this._packet),
      recv: cdktf.numberToTerraform(this._recv),
      send: cdktf.numberToTerraform(this._send),
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
      detail: {
        value: cdktf.numberToHclTerraform(this._detail),
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
      nsm: {
        value: cdktf.numberToHclTerraform(this._nsm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet: {
        value: cdktf.numberToHclTerraform(this._packet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recv: {
        value: cdktf.numberToHclTerraform(this._recv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send: {
        value: cdktf.numberToHclTerraform(this._send),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
