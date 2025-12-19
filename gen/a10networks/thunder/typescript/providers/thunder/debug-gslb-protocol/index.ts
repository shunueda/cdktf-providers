// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugGslbProtocolAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ARDT trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#active_rdt DebugGslbProtocolA#active_rdt}
  */
  readonly activeRdt?: number;
  /**
  * All trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#all DebugGslbProtocolA#all}
  */
  readonly all?: number;
  /**
  * Cache trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#cache DebugGslbProtocolA#cache}
  */
  readonly cache?: number;
  /**
  * EVENTS trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#event DebugGslbProtocolA#event}
  */
  readonly event?: number;
  /**
  * FSM trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#fsm DebugGslbProtocolA#fsm}
  */
  readonly fsm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#id DebugGslbProtocolA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the remote IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#ip DebugGslbProtocolA#ip}
  */
  readonly ip?: number;
  /**
  * IPC trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#ipc DebugGslbProtocolA#ipc}
  */
  readonly ipc?: number;
  /**
  * KEEPALIVE trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#keep_alive DebugGslbProtocolA#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Debug GSLB protocol message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message DebugGslbProtocolA#message}
  */
  readonly message?: number;
  /**
  * All messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_all DebugGslbProtocolA#message_all}
  */
  readonly messageAll?: number;
  /**
  * GMP ardt-query messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_ardt_query DebugGslbProtocolA#message_ardt_query}
  */
  readonly messageArdtQuery?: number;
  /**
  * GMP ardt-report messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_ardt_report DebugGslbProtocolA#message_ardt_report}
  */
  readonly messageArdtReport?: number;
  /**
  * GMP control messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_control DebugGslbProtocolA#message_control}
  */
  readonly messageControl?: number;
  /**
  * GMP keepalive messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_keepalive DebugGslbProtocolA#message_keepalive}
  */
  readonly messageKeepalive?: number;
  /**
  * GMP notify messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_notify DebugGslbProtocolA#message_notify}
  */
  readonly messageNotify?: number;
  /**
  * GMP open messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_open DebugGslbProtocolA#message_open}
  */
  readonly messageOpen?: number;
  /**
  * GMP query messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_query DebugGslbProtocolA#message_query}
  */
  readonly messageQuery?: number;
  /**
  * GMP update messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#message_update DebugGslbProtocolA#message_update}
  */
  readonly messageUpdate?: number;
  /**
  * Specify the slb device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#name DebugGslbProtocolA#name}
  */
  readonly name?: string;
  /**
  * Normal trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#normal DebugGslbProtocolA#normal}
  */
  readonly normal?: number;
  /**
  * Specify remote IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#peer_ipv4 DebugGslbProtocolA#peer_ipv4}
  */
  readonly peerIpv4?: string;
  /**
  * Specify remote IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#peer_ipv6 DebugGslbProtocolA#peer_ipv6}
  */
  readonly peerIpv6?: string;
  /**
  * Timer trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#timer DebugGslbProtocolA#timer}
  */
  readonly timer?: number;
  /**
  * Update trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#update DebugGslbProtocolA#update}
  */
  readonly update?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#uuid DebugGslbProtocolA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol thunder_debug_gslb_protocol}
*/
export class DebugGslbProtocolA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_gslb_protocol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugGslbProtocolA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugGslbProtocolA to import
  * @param importFromId The id of the existing DebugGslbProtocolA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugGslbProtocolA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_gslb_protocol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_protocol thunder_debug_gslb_protocol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugGslbProtocolAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugGslbProtocolAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_gslb_protocol',
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
    this._activeRdt = config.activeRdt;
    this._all = config.all;
    this._cache = config.cache;
    this._event = config.event;
    this._fsm = config.fsm;
    this._id = config.id;
    this._ip = config.ip;
    this._ipc = config.ipc;
    this._keepAlive = config.keepAlive;
    this._message = config.message;
    this._messageAll = config.messageAll;
    this._messageArdtQuery = config.messageArdtQuery;
    this._messageArdtReport = config.messageArdtReport;
    this._messageControl = config.messageControl;
    this._messageKeepalive = config.messageKeepalive;
    this._messageNotify = config.messageNotify;
    this._messageOpen = config.messageOpen;
    this._messageQuery = config.messageQuery;
    this._messageUpdate = config.messageUpdate;
    this._name = config.name;
    this._normal = config.normal;
    this._peerIpv4 = config.peerIpv4;
    this._peerIpv6 = config.peerIpv6;
    this._timer = config.timer;
    this._update = config.update;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_rdt - computed: false, optional: true, required: false
  private _activeRdt?: number; 
  public get activeRdt() {
    return this.getNumberAttribute('active_rdt');
  }
  public set activeRdt(value: number) {
    this._activeRdt = value;
  }
  public resetActiveRdt() {
    this._activeRdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRdtInput() {
    return this._activeRdt;
  }

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

  // cache - computed: false, optional: true, required: false
  private _cache?: number; 
  public get cache() {
    return this.getNumberAttribute('cache');
  }
  public set cache(value: number) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // event - computed: false, optional: true, required: false
  private _event?: number; 
  public get event() {
    return this.getNumberAttribute('event');
  }
  public set event(value: number) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipc - computed: false, optional: true, required: false
  private _ipc?: number; 
  public get ipc() {
    return this.getNumberAttribute('ipc');
  }
  public set ipc(value: number) {
    this._ipc = value;
  }
  public resetIpc() {
    this._ipc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcInput() {
    return this._ipc;
  }

  // keep_alive - computed: false, optional: true, required: false
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // message - computed: false, optional: true, required: false
  private _message?: number; 
  public get message() {
    return this.getNumberAttribute('message');
  }
  public set message(value: number) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_all - computed: false, optional: true, required: false
  private _messageAll?: number; 
  public get messageAll() {
    return this.getNumberAttribute('message_all');
  }
  public set messageAll(value: number) {
    this._messageAll = value;
  }
  public resetMessageAll() {
    this._messageAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageAllInput() {
    return this._messageAll;
  }

  // message_ardt_query - computed: false, optional: true, required: false
  private _messageArdtQuery?: number; 
  public get messageArdtQuery() {
    return this.getNumberAttribute('message_ardt_query');
  }
  public set messageArdtQuery(value: number) {
    this._messageArdtQuery = value;
  }
  public resetMessageArdtQuery() {
    this._messageArdtQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageArdtQueryInput() {
    return this._messageArdtQuery;
  }

  // message_ardt_report - computed: false, optional: true, required: false
  private _messageArdtReport?: number; 
  public get messageArdtReport() {
    return this.getNumberAttribute('message_ardt_report');
  }
  public set messageArdtReport(value: number) {
    this._messageArdtReport = value;
  }
  public resetMessageArdtReport() {
    this._messageArdtReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageArdtReportInput() {
    return this._messageArdtReport;
  }

  // message_control - computed: false, optional: true, required: false
  private _messageControl?: number; 
  public get messageControl() {
    return this.getNumberAttribute('message_control');
  }
  public set messageControl(value: number) {
    this._messageControl = value;
  }
  public resetMessageControl() {
    this._messageControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageControlInput() {
    return this._messageControl;
  }

  // message_keepalive - computed: false, optional: true, required: false
  private _messageKeepalive?: number; 
  public get messageKeepalive() {
    return this.getNumberAttribute('message_keepalive');
  }
  public set messageKeepalive(value: number) {
    this._messageKeepalive = value;
  }
  public resetMessageKeepalive() {
    this._messageKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageKeepaliveInput() {
    return this._messageKeepalive;
  }

  // message_notify - computed: false, optional: true, required: false
  private _messageNotify?: number; 
  public get messageNotify() {
    return this.getNumberAttribute('message_notify');
  }
  public set messageNotify(value: number) {
    this._messageNotify = value;
  }
  public resetMessageNotify() {
    this._messageNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageNotifyInput() {
    return this._messageNotify;
  }

  // message_open - computed: false, optional: true, required: false
  private _messageOpen?: number; 
  public get messageOpen() {
    return this.getNumberAttribute('message_open');
  }
  public set messageOpen(value: number) {
    this._messageOpen = value;
  }
  public resetMessageOpen() {
    this._messageOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageOpenInput() {
    return this._messageOpen;
  }

  // message_query - computed: false, optional: true, required: false
  private _messageQuery?: number; 
  public get messageQuery() {
    return this.getNumberAttribute('message_query');
  }
  public set messageQuery(value: number) {
    this._messageQuery = value;
  }
  public resetMessageQuery() {
    this._messageQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageQueryInput() {
    return this._messageQuery;
  }

  // message_update - computed: false, optional: true, required: false
  private _messageUpdate?: number; 
  public get messageUpdate() {
    return this.getNumberAttribute('message_update');
  }
  public set messageUpdate(value: number) {
    this._messageUpdate = value;
  }
  public resetMessageUpdate() {
    this._messageUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageUpdateInput() {
    return this._messageUpdate;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // normal - computed: false, optional: true, required: false
  private _normal?: number; 
  public get normal() {
    return this.getNumberAttribute('normal');
  }
  public set normal(value: number) {
    this._normal = value;
  }
  public resetNormal() {
    this._normal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal;
  }

  // peer_ipv4 - computed: false, optional: true, required: false
  private _peerIpv4?: string; 
  public get peerIpv4() {
    return this.getStringAttribute('peer_ipv4');
  }
  public set peerIpv4(value: string) {
    this._peerIpv4 = value;
  }
  public resetPeerIpv4() {
    this._peerIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpv4Input() {
    return this._peerIpv4;
  }

  // peer_ipv6 - computed: false, optional: true, required: false
  private _peerIpv6?: string; 
  public get peerIpv6() {
    return this.getStringAttribute('peer_ipv6');
  }
  public set peerIpv6(value: string) {
    this._peerIpv6 = value;
  }
  public resetPeerIpv6() {
    this._peerIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpv6Input() {
    return this._peerIpv6;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // update - computed: false, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
      active_rdt: cdktf.numberToTerraform(this._activeRdt),
      all: cdktf.numberToTerraform(this._all),
      cache: cdktf.numberToTerraform(this._cache),
      event: cdktf.numberToTerraform(this._event),
      fsm: cdktf.numberToTerraform(this._fsm),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.numberToTerraform(this._ip),
      ipc: cdktf.numberToTerraform(this._ipc),
      keep_alive: cdktf.numberToTerraform(this._keepAlive),
      message: cdktf.numberToTerraform(this._message),
      message_all: cdktf.numberToTerraform(this._messageAll),
      message_ardt_query: cdktf.numberToTerraform(this._messageArdtQuery),
      message_ardt_report: cdktf.numberToTerraform(this._messageArdtReport),
      message_control: cdktf.numberToTerraform(this._messageControl),
      message_keepalive: cdktf.numberToTerraform(this._messageKeepalive),
      message_notify: cdktf.numberToTerraform(this._messageNotify),
      message_open: cdktf.numberToTerraform(this._messageOpen),
      message_query: cdktf.numberToTerraform(this._messageQuery),
      message_update: cdktf.numberToTerraform(this._messageUpdate),
      name: cdktf.stringToTerraform(this._name),
      normal: cdktf.numberToTerraform(this._normal),
      peer_ipv4: cdktf.stringToTerraform(this._peerIpv4),
      peer_ipv6: cdktf.stringToTerraform(this._peerIpv6),
      timer: cdktf.numberToTerraform(this._timer),
      update: cdktf.numberToTerraform(this._update),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_rdt: {
        value: cdktf.numberToHclTerraform(this._activeRdt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache: {
        value: cdktf.numberToHclTerraform(this._cache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event: {
        value: cdktf.numberToHclTerraform(this._event),
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
      ip: {
        value: cdktf.numberToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipc: {
        value: cdktf.numberToHclTerraform(this._ipc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_alive: {
        value: cdktf.numberToHclTerraform(this._keepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message: {
        value: cdktf.numberToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_all: {
        value: cdktf.numberToHclTerraform(this._messageAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_ardt_query: {
        value: cdktf.numberToHclTerraform(this._messageArdtQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_ardt_report: {
        value: cdktf.numberToHclTerraform(this._messageArdtReport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_control: {
        value: cdktf.numberToHclTerraform(this._messageControl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_keepalive: {
        value: cdktf.numberToHclTerraform(this._messageKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_notify: {
        value: cdktf.numberToHclTerraform(this._messageNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_open: {
        value: cdktf.numberToHclTerraform(this._messageOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_query: {
        value: cdktf.numberToHclTerraform(this._messageQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_update: {
        value: cdktf.numberToHclTerraform(this._messageUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      normal: {
        value: cdktf.numberToHclTerraform(this._normal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_ipv4: {
        value: cdktf.stringToHclTerraform(this._peerIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ipv6: {
        value: cdktf.stringToHclTerraform(this._peerIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update: {
        value: cdktf.numberToHclTerraform(this._update),
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
