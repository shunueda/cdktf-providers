// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugIpv6OspfPacketAConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPFv3 Database Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#dd DebugIpv6OspfPacketA#dd}
  */
  readonly dd?: number;
  /**
  * Detail information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#detail DebugIpv6OspfPacketA#detail}
  */
  readonly detail?: number;
  /**
  * OSPFv3 Hello
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#hello DebugIpv6OspfPacketA#hello}
  */
  readonly hello?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#id DebugIpv6OspfPacketA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OSPFv3 Link State Acknowledgment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#ls_ack DebugIpv6OspfPacketA#ls_ack}
  */
  readonly lsAck?: number;
  /**
  * OSPFv3 Link State Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#ls_request DebugIpv6OspfPacketA#ls_request}
  */
  readonly lsRequest?: number;
  /**
  * OSPFv3 Link State Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#ls_update DebugIpv6OspfPacketA#ls_update}
  */
  readonly lsUpdate?: number;
  /**
  * Packet received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#recv DebugIpv6OspfPacketA#recv}
  */
  readonly recv?: number;
  /**
  * Packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#send DebugIpv6OspfPacketA#send}
  */
  readonly send?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#uuid DebugIpv6OspfPacketA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet thunder_debug_ipv6_ospf_packet}
*/
export class DebugIpv6OspfPacketA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ipv6_ospf_packet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugIpv6OspfPacketA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugIpv6OspfPacketA to import
  * @param importFromId The id of the existing DebugIpv6OspfPacketA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugIpv6OspfPacketA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ipv6_ospf_packet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ipv6_ospf_packet thunder_debug_ipv6_ospf_packet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugIpv6OspfPacketAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugIpv6OspfPacketAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ipv6_ospf_packet',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dd = config.dd;
    this._detail = config.detail;
    this._hello = config.hello;
    this._id = config.id;
    this._lsAck = config.lsAck;
    this._lsRequest = config.lsRequest;
    this._lsUpdate = config.lsUpdate;
    this._recv = config.recv;
    this._send = config.send;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dd - computed: false, optional: true, required: false
  private _dd?: number; 
  public get dd() {
    return this.getNumberAttribute('dd');
  }
  public set dd(value: number) {
    this._dd = value;
  }
  public resetDd() {
    this._dd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddInput() {
    return this._dd;
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

  // hello - computed: false, optional: true, required: false
  private _hello?: number; 
  public get hello() {
    return this.getNumberAttribute('hello');
  }
  public set hello(value: number) {
    this._hello = value;
  }
  public resetHello() {
    this._hello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloInput() {
    return this._hello;
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

  // ls_ack - computed: false, optional: true, required: false
  private _lsAck?: number; 
  public get lsAck() {
    return this.getNumberAttribute('ls_ack');
  }
  public set lsAck(value: number) {
    this._lsAck = value;
  }
  public resetLsAck() {
    this._lsAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsAckInput() {
    return this._lsAck;
  }

  // ls_request - computed: false, optional: true, required: false
  private _lsRequest?: number; 
  public get lsRequest() {
    return this.getNumberAttribute('ls_request');
  }
  public set lsRequest(value: number) {
    this._lsRequest = value;
  }
  public resetLsRequest() {
    this._lsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsRequestInput() {
    return this._lsRequest;
  }

  // ls_update - computed: false, optional: true, required: false
  private _lsUpdate?: number; 
  public get lsUpdate() {
    return this.getNumberAttribute('ls_update');
  }
  public set lsUpdate(value: number) {
    this._lsUpdate = value;
  }
  public resetLsUpdate() {
    this._lsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsUpdateInput() {
    return this._lsUpdate;
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
      dd: cdktf.numberToTerraform(this._dd),
      detail: cdktf.numberToTerraform(this._detail),
      hello: cdktf.numberToTerraform(this._hello),
      id: cdktf.stringToTerraform(this._id),
      ls_ack: cdktf.numberToTerraform(this._lsAck),
      ls_request: cdktf.numberToTerraform(this._lsRequest),
      ls_update: cdktf.numberToTerraform(this._lsUpdate),
      recv: cdktf.numberToTerraform(this._recv),
      send: cdktf.numberToTerraform(this._send),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dd: {
        value: cdktf.numberToHclTerraform(this._dd),
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
      hello: {
        value: cdktf.numberToHclTerraform(this._hello),
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
      ls_ack: {
        value: cdktf.numberToHclTerraform(this._lsAck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ls_request: {
        value: cdktf.numberToHclTerraform(this._lsRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ls_update: {
        value: cdktf.numberToHclTerraform(this._lsUpdate),
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
