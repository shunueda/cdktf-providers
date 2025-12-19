// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugGslbGroupAConfig extends cdktf.TerraformMetaArguments {
  /**
  * All trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#all DebugGslbGroupA#all}
  */
  readonly all?: number;
  /**
  * Cache trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#cache DebugGslbGroupA#cache}
  */
  readonly cache?: number;
  /**
  * EVENTS trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#event DebugGslbGroupA#event}
  */
  readonly event?: number;
  /**
  * FSM trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#fsm DebugGslbGroupA#fsm}
  */
  readonly fsm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#id DebugGslbGroupA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Remote IP address of GSLB controller of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#ip DebugGslbGroupA#ip}
  */
  readonly ip?: number;
  /**
  * IPC trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#ipc DebugGslbGroupA#ipc}
  */
  readonly ipc?: number;
  /**
  * KEEPALIVE trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#keep_alive DebugGslbGroupA#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Debug GSLB group message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message DebugGslbGroupA#message}
  */
  readonly message?: number;
  /**
  * All messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_all DebugGslbGroupA#message_all}
  */
  readonly messageAll?: number;
  /**
  * GMP control messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_control DebugGslbGroupA#message_control}
  */
  readonly messageControl?: number;
  /**
  * GMP group messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_group DebugGslbGroupA#message_group}
  */
  readonly messageGroup?: number;
  /**
  * GMP keepalive messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_keepalive DebugGslbGroupA#message_keepalive}
  */
  readonly messageKeepalive?: number;
  /**
  * GMP notify messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_notify DebugGslbGroupA#message_notify}
  */
  readonly messageNotify?: number;
  /**
  * GMP open messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_open DebugGslbGroupA#message_open}
  */
  readonly messageOpen?: number;
  /**
  * GMP query messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#message_query DebugGslbGroupA#message_query}
  */
  readonly messageQuery?: number;
  /**
  * Name of GSLB group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#name DebugGslbGroupA#name}
  */
  readonly name?: string;
  /**
  * Normal trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#normal DebugGslbGroupA#normal}
  */
  readonly normal?: number;
  /**
  * Specify remote IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#peer_ipv4 DebugGslbGroupA#peer_ipv4}
  */
  readonly peerIpv4?: string;
  /**
  * Specify remote IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#peer_ipv6 DebugGslbGroupA#peer_ipv6}
  */
  readonly peerIpv6?: string;
  /**
  * Timer trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#timer DebugGslbGroupA#timer}
  */
  readonly timer?: number;
  /**
  * Update trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#update DebugGslbGroupA#update}
  */
  readonly update?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#uuid DebugGslbGroupA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group thunder_debug_gslb_group}
*/
export class DebugGslbGroupA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_gslb_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugGslbGroupA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugGslbGroupA to import
  * @param importFromId The id of the existing DebugGslbGroupA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugGslbGroupA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_gslb_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb_group thunder_debug_gslb_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugGslbGroupAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugGslbGroupAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_gslb_group',
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
    this._cache = config.cache;
    this._event = config.event;
    this._fsm = config.fsm;
    this._id = config.id;
    this._ip = config.ip;
    this._ipc = config.ipc;
    this._keepAlive = config.keepAlive;
    this._message = config.message;
    this._messageAll = config.messageAll;
    this._messageControl = config.messageControl;
    this._messageGroup = config.messageGroup;
    this._messageKeepalive = config.messageKeepalive;
    this._messageNotify = config.messageNotify;
    this._messageOpen = config.messageOpen;
    this._messageQuery = config.messageQuery;
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

  // message_group - computed: false, optional: true, required: false
  private _messageGroup?: number; 
  public get messageGroup() {
    return this.getNumberAttribute('message_group');
  }
  public set messageGroup(value: number) {
    this._messageGroup = value;
  }
  public resetMessageGroup() {
    this._messageGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup;
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
      message_control: cdktf.numberToTerraform(this._messageControl),
      message_group: cdktf.numberToTerraform(this._messageGroup),
      message_keepalive: cdktf.numberToTerraform(this._messageKeepalive),
      message_notify: cdktf.numberToTerraform(this._messageNotify),
      message_open: cdktf.numberToTerraform(this._messageOpen),
      message_query: cdktf.numberToTerraform(this._messageQuery),
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
      message_control: {
        value: cdktf.numberToHclTerraform(this._messageControl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_group: {
        value: cdktf.numberToHclTerraform(this._messageGroup),
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
