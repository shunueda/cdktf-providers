// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugGslbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Debug for additional info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#extended DebugGslb#extended}
  */
  readonly extended?: number;
  /**
  * Debug for matched Geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#glname DebugGslb#glname}
  */
  readonly glname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#id DebugGslb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#id1 DebugGslb#id1}
  */
  readonly id1?: number;
  /**
  * Debug for matched IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#ip_addr DebugGslb#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Debug for matched IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#ipv6_addr DebugGslb#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Debug GSLB memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#memory DebugGslb#memory}
  */
  readonly memory?: number;
  /**
  * Stop after get 64 states
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#one_shot DebugGslb#one_shot}
  */
  readonly oneShot?: number;
  /**
  * Keep GSLB state information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#state DebugGslb#state}
  */
  readonly state?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#uuid DebugGslb#uuid}
  */
  readonly uuid?: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#group DebugGslb#group}
  */
  readonly group?: DebugGslbGroup;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#protocol DebugGslb#protocol}
  */
  readonly protocol?: DebugGslbProtocol;
}
export interface DebugGslbGroup {
  /**
  * All trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#all DebugGslb#all}
  */
  readonly all?: number;
  /**
  * Cache trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#cache DebugGslb#cache}
  */
  readonly cache?: number;
  /**
  * EVENTS trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#event DebugGslb#event}
  */
  readonly event?: number;
  /**
  * FSM trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#fsm DebugGslb#fsm}
  */
  readonly fsm?: number;
  /**
  * Remote IP address of GSLB controller of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#ip DebugGslb#ip}
  */
  readonly ip?: number;
  /**
  * IPC trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#ipc DebugGslb#ipc}
  */
  readonly ipc?: number;
  /**
  * KEEPALIVE trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#keep_alive DebugGslb#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Debug GSLB group message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message DebugGslb#message}
  */
  readonly message?: number;
  /**
  * All messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_all DebugGslb#message_all}
  */
  readonly messageAll?: number;
  /**
  * GMP control messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_control DebugGslb#message_control}
  */
  readonly messageControl?: number;
  /**
  * GMP group messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_group DebugGslb#message_group}
  */
  readonly messageGroup?: number;
  /**
  * GMP keepalive messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_keepalive DebugGslb#message_keepalive}
  */
  readonly messageKeepalive?: number;
  /**
  * GMP notify messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_notify DebugGslb#message_notify}
  */
  readonly messageNotify?: number;
  /**
  * GMP open messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_open DebugGslb#message_open}
  */
  readonly messageOpen?: number;
  /**
  * GMP query messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_query DebugGslb#message_query}
  */
  readonly messageQuery?: number;
  /**
  * Name of GSLB group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#name DebugGslb#name}
  */
  readonly name?: string;
  /**
  * Normal trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#normal DebugGslb#normal}
  */
  readonly normal?: number;
  /**
  * Specify remote IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#peer_ipv4 DebugGslb#peer_ipv4}
  */
  readonly peerIpv4?: string;
  /**
  * Specify remote IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#peer_ipv6 DebugGslb#peer_ipv6}
  */
  readonly peerIpv6?: string;
  /**
  * Timer trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#timer DebugGslb#timer}
  */
  readonly timer?: number;
  /**
  * Update trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#update DebugGslb#update}
  */
  readonly update?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#uuid DebugGslb#uuid}
  */
  readonly uuid?: string;
}

export function debugGslbGroupToTerraform(struct?: DebugGslbGroupOutputReference | DebugGslbGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    cache: cdktf.numberToTerraform(struct!.cache),
    event: cdktf.numberToTerraform(struct!.event),
    fsm: cdktf.numberToTerraform(struct!.fsm),
    ip: cdktf.numberToTerraform(struct!.ip),
    ipc: cdktf.numberToTerraform(struct!.ipc),
    keep_alive: cdktf.numberToTerraform(struct!.keepAlive),
    message: cdktf.numberToTerraform(struct!.message),
    message_all: cdktf.numberToTerraform(struct!.messageAll),
    message_control: cdktf.numberToTerraform(struct!.messageControl),
    message_group: cdktf.numberToTerraform(struct!.messageGroup),
    message_keepalive: cdktf.numberToTerraform(struct!.messageKeepalive),
    message_notify: cdktf.numberToTerraform(struct!.messageNotify),
    message_open: cdktf.numberToTerraform(struct!.messageOpen),
    message_query: cdktf.numberToTerraform(struct!.messageQuery),
    name: cdktf.stringToTerraform(struct!.name),
    normal: cdktf.numberToTerraform(struct!.normal),
    peer_ipv4: cdktf.stringToTerraform(struct!.peerIpv4),
    peer_ipv6: cdktf.stringToTerraform(struct!.peerIpv6),
    timer: cdktf.numberToTerraform(struct!.timer),
    update: cdktf.numberToTerraform(struct!.update),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugGslbGroupToHclTerraform(struct?: DebugGslbGroupOutputReference | DebugGslbGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache: {
      value: cdktf.numberToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event: {
      value: cdktf.numberToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fsm: {
      value: cdktf.numberToHclTerraform(struct!.fsm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.numberToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipc: {
      value: cdktf.numberToHclTerraform(struct!.ipc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive: {
      value: cdktf.numberToHclTerraform(struct!.keepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.numberToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_all: {
      value: cdktf.numberToHclTerraform(struct!.messageAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_control: {
      value: cdktf.numberToHclTerraform(struct!.messageControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_group: {
      value: cdktf.numberToHclTerraform(struct!.messageGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.messageKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_notify: {
      value: cdktf.numberToHclTerraform(struct!.messageNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_open: {
      value: cdktf.numberToHclTerraform(struct!.messageOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_query: {
      value: cdktf.numberToHclTerraform(struct!.messageQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normal: {
      value: cdktf.numberToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.peerIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.peerIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugGslbGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugGslbGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._fsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsm = this._fsm;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipc = this._ipc;
    }
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageAll = this._messageAll;
    }
    if (this._messageControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageControl = this._messageControl;
    }
    if (this._messageGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup;
    }
    if (this._messageKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageKeepalive = this._messageKeepalive;
    }
    if (this._messageNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageNotify = this._messageNotify;
    }
    if (this._messageOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageOpen = this._messageOpen;
    }
    if (this._messageQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageQuery = this._messageQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    if (this._peerIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpv4 = this._peerIpv4;
    }
    if (this._peerIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpv6 = this._peerIpv6;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugGslbGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._cache = undefined;
      this._event = undefined;
      this._fsm = undefined;
      this._ip = undefined;
      this._ipc = undefined;
      this._keepAlive = undefined;
      this._message = undefined;
      this._messageAll = undefined;
      this._messageControl = undefined;
      this._messageGroup = undefined;
      this._messageKeepalive = undefined;
      this._messageNotify = undefined;
      this._messageOpen = undefined;
      this._messageQuery = undefined;
      this._name = undefined;
      this._normal = undefined;
      this._peerIpv4 = undefined;
      this._peerIpv6 = undefined;
      this._timer = undefined;
      this._update = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._cache = value.cache;
      this._event = value.event;
      this._fsm = value.fsm;
      this._ip = value.ip;
      this._ipc = value.ipc;
      this._keepAlive = value.keepAlive;
      this._message = value.message;
      this._messageAll = value.messageAll;
      this._messageControl = value.messageControl;
      this._messageGroup = value.messageGroup;
      this._messageKeepalive = value.messageKeepalive;
      this._messageNotify = value.messageNotify;
      this._messageOpen = value.messageOpen;
      this._messageQuery = value.messageQuery;
      this._name = value.name;
      this._normal = value.normal;
      this._peerIpv4 = value.peerIpv4;
      this._peerIpv6 = value.peerIpv6;
      this._timer = value.timer;
      this._update = value.update;
      this._uuid = value.uuid;
    }
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
}
export interface DebugGslbProtocol {
  /**
  * ARDT trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#active_rdt DebugGslb#active_rdt}
  */
  readonly activeRdt?: number;
  /**
  * All trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#all DebugGslb#all}
  */
  readonly all?: number;
  /**
  * Cache trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#cache DebugGslb#cache}
  */
  readonly cache?: number;
  /**
  * EVENTS trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#event DebugGslb#event}
  */
  readonly event?: number;
  /**
  * FSM trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#fsm DebugGslb#fsm}
  */
  readonly fsm?: number;
  /**
  * Specify the remote IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#ip DebugGslb#ip}
  */
  readonly ip?: number;
  /**
  * IPC trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#ipc DebugGslb#ipc}
  */
  readonly ipc?: number;
  /**
  * KEEPALIVE trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#keep_alive DebugGslb#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Debug GSLB protocol message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message DebugGslb#message}
  */
  readonly message?: number;
  /**
  * All messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_all DebugGslb#message_all}
  */
  readonly messageAll?: number;
  /**
  * GMP ardt-query messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_ardt_query DebugGslb#message_ardt_query}
  */
  readonly messageArdtQuery?: number;
  /**
  * GMP ardt-report messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_ardt_report DebugGslb#message_ardt_report}
  */
  readonly messageArdtReport?: number;
  /**
  * GMP control messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_control DebugGslb#message_control}
  */
  readonly messageControl?: number;
  /**
  * GMP keepalive messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_keepalive DebugGslb#message_keepalive}
  */
  readonly messageKeepalive?: number;
  /**
  * GMP notify messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_notify DebugGslb#message_notify}
  */
  readonly messageNotify?: number;
  /**
  * GMP open messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_open DebugGslb#message_open}
  */
  readonly messageOpen?: number;
  /**
  * GMP query messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_query DebugGslb#message_query}
  */
  readonly messageQuery?: number;
  /**
  * GMP update messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#message_update DebugGslb#message_update}
  */
  readonly messageUpdate?: number;
  /**
  * Specify the slb device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#name DebugGslb#name}
  */
  readonly name?: string;
  /**
  * Normal trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#normal DebugGslb#normal}
  */
  readonly normal?: number;
  /**
  * Specify remote IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#peer_ipv4 DebugGslb#peer_ipv4}
  */
  readonly peerIpv4?: string;
  /**
  * Specify remote IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#peer_ipv6 DebugGslb#peer_ipv6}
  */
  readonly peerIpv6?: string;
  /**
  * Timer trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#timer DebugGslb#timer}
  */
  readonly timer?: number;
  /**
  * Update trace information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#update DebugGslb#update}
  */
  readonly update?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#uuid DebugGslb#uuid}
  */
  readonly uuid?: string;
}

export function debugGslbProtocolToTerraform(struct?: DebugGslbProtocolOutputReference | DebugGslbProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_rdt: cdktf.numberToTerraform(struct!.activeRdt),
    all: cdktf.numberToTerraform(struct!.all),
    cache: cdktf.numberToTerraform(struct!.cache),
    event: cdktf.numberToTerraform(struct!.event),
    fsm: cdktf.numberToTerraform(struct!.fsm),
    ip: cdktf.numberToTerraform(struct!.ip),
    ipc: cdktf.numberToTerraform(struct!.ipc),
    keep_alive: cdktf.numberToTerraform(struct!.keepAlive),
    message: cdktf.numberToTerraform(struct!.message),
    message_all: cdktf.numberToTerraform(struct!.messageAll),
    message_ardt_query: cdktf.numberToTerraform(struct!.messageArdtQuery),
    message_ardt_report: cdktf.numberToTerraform(struct!.messageArdtReport),
    message_control: cdktf.numberToTerraform(struct!.messageControl),
    message_keepalive: cdktf.numberToTerraform(struct!.messageKeepalive),
    message_notify: cdktf.numberToTerraform(struct!.messageNotify),
    message_open: cdktf.numberToTerraform(struct!.messageOpen),
    message_query: cdktf.numberToTerraform(struct!.messageQuery),
    message_update: cdktf.numberToTerraform(struct!.messageUpdate),
    name: cdktf.stringToTerraform(struct!.name),
    normal: cdktf.numberToTerraform(struct!.normal),
    peer_ipv4: cdktf.stringToTerraform(struct!.peerIpv4),
    peer_ipv6: cdktf.stringToTerraform(struct!.peerIpv6),
    timer: cdktf.numberToTerraform(struct!.timer),
    update: cdktf.numberToTerraform(struct!.update),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugGslbProtocolToHclTerraform(struct?: DebugGslbProtocolOutputReference | DebugGslbProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_rdt: {
      value: cdktf.numberToHclTerraform(struct!.activeRdt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache: {
      value: cdktf.numberToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event: {
      value: cdktf.numberToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fsm: {
      value: cdktf.numberToHclTerraform(struct!.fsm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.numberToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipc: {
      value: cdktf.numberToHclTerraform(struct!.ipc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive: {
      value: cdktf.numberToHclTerraform(struct!.keepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.numberToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_all: {
      value: cdktf.numberToHclTerraform(struct!.messageAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_ardt_query: {
      value: cdktf.numberToHclTerraform(struct!.messageArdtQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_ardt_report: {
      value: cdktf.numberToHclTerraform(struct!.messageArdtReport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_control: {
      value: cdktf.numberToHclTerraform(struct!.messageControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.messageKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_notify: {
      value: cdktf.numberToHclTerraform(struct!.messageNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_open: {
      value: cdktf.numberToHclTerraform(struct!.messageOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_query: {
      value: cdktf.numberToHclTerraform(struct!.messageQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_update: {
      value: cdktf.numberToHclTerraform(struct!.messageUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normal: {
      value: cdktf.numberToHclTerraform(struct!.normal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.peerIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.peerIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugGslbProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugGslbProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeRdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeRdt = this._activeRdt;
    }
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._fsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsm = this._fsm;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipc = this._ipc;
    }
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageAll = this._messageAll;
    }
    if (this._messageArdtQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageArdtQuery = this._messageArdtQuery;
    }
    if (this._messageArdtReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageArdtReport = this._messageArdtReport;
    }
    if (this._messageControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageControl = this._messageControl;
    }
    if (this._messageKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageKeepalive = this._messageKeepalive;
    }
    if (this._messageNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageNotify = this._messageNotify;
    }
    if (this._messageOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageOpen = this._messageOpen;
    }
    if (this._messageQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageQuery = this._messageQuery;
    }
    if (this._messageUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageUpdate = this._messageUpdate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._normal !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal;
    }
    if (this._peerIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpv4 = this._peerIpv4;
    }
    if (this._peerIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpv6 = this._peerIpv6;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugGslbProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeRdt = undefined;
      this._all = undefined;
      this._cache = undefined;
      this._event = undefined;
      this._fsm = undefined;
      this._ip = undefined;
      this._ipc = undefined;
      this._keepAlive = undefined;
      this._message = undefined;
      this._messageAll = undefined;
      this._messageArdtQuery = undefined;
      this._messageArdtReport = undefined;
      this._messageControl = undefined;
      this._messageKeepalive = undefined;
      this._messageNotify = undefined;
      this._messageOpen = undefined;
      this._messageQuery = undefined;
      this._messageUpdate = undefined;
      this._name = undefined;
      this._normal = undefined;
      this._peerIpv4 = undefined;
      this._peerIpv6 = undefined;
      this._timer = undefined;
      this._update = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeRdt = value.activeRdt;
      this._all = value.all;
      this._cache = value.cache;
      this._event = value.event;
      this._fsm = value.fsm;
      this._ip = value.ip;
      this._ipc = value.ipc;
      this._keepAlive = value.keepAlive;
      this._message = value.message;
      this._messageAll = value.messageAll;
      this._messageArdtQuery = value.messageArdtQuery;
      this._messageArdtReport = value.messageArdtReport;
      this._messageControl = value.messageControl;
      this._messageKeepalive = value.messageKeepalive;
      this._messageNotify = value.messageNotify;
      this._messageOpen = value.messageOpen;
      this._messageQuery = value.messageQuery;
      this._messageUpdate = value.messageUpdate;
      this._name = value.name;
      this._normal = value.normal;
      this._peerIpv4 = value.peerIpv4;
      this._peerIpv6 = value.peerIpv6;
      this._timer = value.timer;
      this._update = value.update;
      this._uuid = value.uuid;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb thunder_debug_gslb}
*/
export class DebugGslb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_gslb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugGslb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugGslb to import
  * @param importFromId The id of the existing DebugGslb that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugGslb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_gslb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_gslb thunder_debug_gslb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugGslbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugGslbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_gslb',
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
    this._extended = config.extended;
    this._glname = config.glname;
    this._id = config.id;
    this._id1 = config.id1;
    this._ipAddr = config.ipAddr;
    this._ipv6Addr = config.ipv6Addr;
    this._memory = config.memory;
    this._oneShot = config.oneShot;
    this._state = config.state;
    this._uuid = config.uuid;
    this._group.internalValue = config.group;
    this._protocol.internalValue = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extended - computed: false, optional: true, required: false
  private _extended?: number; 
  public get extended() {
    return this.getNumberAttribute('extended');
  }
  public set extended(value: number) {
    this._extended = value;
  }
  public resetExtended() {
    this._extended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended;
  }

  // glname - computed: false, optional: true, required: false
  private _glname?: string; 
  public get glname() {
    return this.getStringAttribute('glname');
  }
  public set glname(value: string) {
    this._glname = value;
  }
  public resetGlname() {
    this._glname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glnameInput() {
    return this._glname;
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

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // one_shot - computed: false, optional: true, required: false
  private _oneShot?: number; 
  public get oneShot() {
    return this.getNumberAttribute('one_shot');
  }
  public set oneShot(value: number) {
    this._oneShot = value;
  }
  public resetOneShot() {
    this._oneShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneShotInput() {
    return this._oneShot;
  }

  // state - computed: false, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // group - computed: false, optional: true, required: false
  private _group = new DebugGslbGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DebugGslbGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new DebugGslbProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DebugGslbProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extended: cdktf.numberToTerraform(this._extended),
      glname: cdktf.stringToTerraform(this._glname),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      ipv6_addr: cdktf.stringToTerraform(this._ipv6Addr),
      memory: cdktf.numberToTerraform(this._memory),
      one_shot: cdktf.numberToTerraform(this._oneShot),
      state: cdktf.numberToTerraform(this._state),
      uuid: cdktf.stringToTerraform(this._uuid),
      group: debugGslbGroupToTerraform(this._group.internalValue),
      protocol: debugGslbProtocolToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extended: {
        value: cdktf.numberToHclTerraform(this._extended),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glname: {
        value: cdktf.stringToHclTerraform(this._glname),
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
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      one_shot: {
        value: cdktf.numberToHclTerraform(this._oneShot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.numberToHclTerraform(this._state),
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
      group: {
        value: debugGslbGroupToHclTerraform(this._group.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugGslbGroupList",
      },
      protocol: {
        value: debugGslbProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugGslbProtocolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
