// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * keep connection alive if active traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#alive_if_active SlbTemplateTcp#alive_if_active}
  */
  readonly aliveIfActive?: number;
  /**
  * Delete session if the server/port goes down (either disabled/hm down)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#del_session_on_server_down SlbTemplateTcp#del_session_on_server_down}
  */
  readonly delSessionOnServerDown?: number;
  /**
  * send reset to client when server is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#disable SlbTemplateTcp#disable}
  */
  readonly disable?: number;
  /**
  * send reset to client when server is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#down SlbTemplateTcp#down}
  */
  readonly down?: number;
  /**
  * The maximum time that a session can stay in the system before being delete (number (second))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#force_delete_timeout SlbTemplateTcp#force_delete_timeout}
  */
  readonly forceDeleteTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being delete (number in 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#force_delete_timeout_100ms SlbTemplateTcp#force_delete_timeout_100ms}
  */
  readonly forceDeleteTimeout100Ms?: number;
  /**
  * TCP Half Close Idle Timeout (sec), default off (half close idle timeout in second, default off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#half_close_idle_timeout SlbTemplateTcp#half_close_idle_timeout}
  */
  readonly halfCloseIdleTimeout?: number;
  /**
  * TCP Half Open Idle Timeout (sec), default off (half open idle timeout in second, default off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#half_open_idle_timeout SlbTemplateTcp#half_open_idle_timeout}
  */
  readonly halfOpenIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#id SlbTemplateTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle Timeout value (Interval of 60 seconds), default 120 seconds (idle timeout in second, default 120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#idle_timeout SlbTemplateTcp#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Set the initial window size (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#initial_window_size SlbTemplateTcp#initial_window_size}
  */
  readonly initialWindowSize?: number;
  /**
  * Insert client ip into TCP option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#insert_client_ip SlbTemplateTcp#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * Enable fast TCP ack on LAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#lan_fast_ack SlbTemplateTcp#lan_fast_ack}
  */
  readonly lanFastAck?: number;
  /**
  * 'init': init only log; 'term': termination only log; 'both': both initial and termination log;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#logging SlbTemplateTcp#logging}
  */
  readonly logging?: string;
  /**
  * Fast TCP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#name SlbTemplateTcp#name}
  */
  readonly name: string;
  /**
  * QOS level (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#qos SlbTemplateTcp#qos}
  */
  readonly qos?: number;
  /**
  * re-select another server if service port is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#re_select_if_server_down SlbTemplateTcp#re_select_if_server_down}
  */
  readonly reSelectIfServerDown?: number;
  /**
  * send reset to client or server upon receiving first fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#reset_follow_fin SlbTemplateTcp#reset_follow_fin}
  */
  readonly resetFollowFin?: number;
  /**
  * send reset to server if error happens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#reset_fwd SlbTemplateTcp#reset_fwd}
  */
  readonly resetFwd?: number;
  /**
  * send reset to client if error happens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#reset_rev SlbTemplateTcp#reset_rev}
  */
  readonly resetRev?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#user_tag SlbTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#uuid SlbTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * proxy_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#proxy_header SlbTemplateTcp#proxy_header}
  */
  readonly proxyHeader?: SlbTemplateTcpProxyHeader;
}
export interface SlbTemplateTcpProxyHeader {
  /**
  * 'insert': Insert proxy header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#proxy_header_action SlbTemplateTcp#proxy_header_action}
  */
  readonly proxyHeaderAction?: string;
  /**
  * 'v1': version 1; 'v2': version 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#proxy_header_version SlbTemplateTcp#proxy_header_version}
  */
  readonly proxyHeaderVersion?: string;
}

export function slbTemplateTcpProxyHeaderToTerraform(struct?: SlbTemplateTcpProxyHeaderOutputReference | SlbTemplateTcpProxyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_header_action: cdktf.stringToTerraform(struct!.proxyHeaderAction),
    proxy_header_version: cdktf.stringToTerraform(struct!.proxyHeaderVersion),
  }
}


export function slbTemplateTcpProxyHeaderToHclTerraform(struct?: SlbTemplateTcpProxyHeaderOutputReference | SlbTemplateTcpProxyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_header_action: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeaderAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header_version: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeaderVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateTcpProxyHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateTcpProxyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyHeaderAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeaderAction = this._proxyHeaderAction;
    }
    if (this._proxyHeaderVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeaderVersion = this._proxyHeaderVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateTcpProxyHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyHeaderAction = undefined;
      this._proxyHeaderVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyHeaderAction = value.proxyHeaderAction;
      this._proxyHeaderVersion = value.proxyHeaderVersion;
    }
  }

  // proxy_header_action - computed: false, optional: true, required: false
  private _proxyHeaderAction?: string; 
  public get proxyHeaderAction() {
    return this.getStringAttribute('proxy_header_action');
  }
  public set proxyHeaderAction(value: string) {
    this._proxyHeaderAction = value;
  }
  public resetProxyHeaderAction() {
    this._proxyHeaderAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderActionInput() {
    return this._proxyHeaderAction;
  }

  // proxy_header_version - computed: false, optional: true, required: false
  private _proxyHeaderVersion?: string; 
  public get proxyHeaderVersion() {
    return this.getStringAttribute('proxy_header_version');
  }
  public set proxyHeaderVersion(value: string) {
    this._proxyHeaderVersion = value;
  }
  public resetProxyHeaderVersion() {
    this._proxyHeaderVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderVersionInput() {
    return this._proxyHeaderVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp thunder_slb_template_tcp}
*/
export class SlbTemplateTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateTcp to import
  * @param importFromId The id of the existing SlbTemplateTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_tcp thunder_slb_template_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateTcpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_tcp',
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
    this._aliveIfActive = config.aliveIfActive;
    this._delSessionOnServerDown = config.delSessionOnServerDown;
    this._disable = config.disable;
    this._down = config.down;
    this._forceDeleteTimeout = config.forceDeleteTimeout;
    this._forceDeleteTimeout100Ms = config.forceDeleteTimeout100Ms;
    this._halfCloseIdleTimeout = config.halfCloseIdleTimeout;
    this._halfOpenIdleTimeout = config.halfOpenIdleTimeout;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._initialWindowSize = config.initialWindowSize;
    this._insertClientIp = config.insertClientIp;
    this._lanFastAck = config.lanFastAck;
    this._logging = config.logging;
    this._name = config.name;
    this._qos = config.qos;
    this._reSelectIfServerDown = config.reSelectIfServerDown;
    this._resetFollowFin = config.resetFollowFin;
    this._resetFwd = config.resetFwd;
    this._resetRev = config.resetRev;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._proxyHeader.internalValue = config.proxyHeader;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alive_if_active - computed: false, optional: true, required: false
  private _aliveIfActive?: number; 
  public get aliveIfActive() {
    return this.getNumberAttribute('alive_if_active');
  }
  public set aliveIfActive(value: number) {
    this._aliveIfActive = value;
  }
  public resetAliveIfActive() {
    this._aliveIfActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliveIfActiveInput() {
    return this._aliveIfActive;
  }

  // del_session_on_server_down - computed: false, optional: true, required: false
  private _delSessionOnServerDown?: number; 
  public get delSessionOnServerDown() {
    return this.getNumberAttribute('del_session_on_server_down');
  }
  public set delSessionOnServerDown(value: number) {
    this._delSessionOnServerDown = value;
  }
  public resetDelSessionOnServerDown() {
    this._delSessionOnServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delSessionOnServerDownInput() {
    return this._delSessionOnServerDown;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // down - computed: false, optional: true, required: false
  private _down?: number; 
  public get down() {
    return this.getNumberAttribute('down');
  }
  public set down(value: number) {
    this._down = value;
  }
  public resetDown() {
    this._down = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downInput() {
    return this._down;
  }

  // force_delete_timeout - computed: false, optional: true, required: false
  private _forceDeleteTimeout?: number; 
  public get forceDeleteTimeout() {
    return this.getNumberAttribute('force_delete_timeout');
  }
  public set forceDeleteTimeout(value: number) {
    this._forceDeleteTimeout = value;
  }
  public resetForceDeleteTimeout() {
    this._forceDeleteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeoutInput() {
    return this._forceDeleteTimeout;
  }

  // force_delete_timeout_100ms - computed: false, optional: true, required: false
  private _forceDeleteTimeout100Ms?: number; 
  public get forceDeleteTimeout100Ms() {
    return this.getNumberAttribute('force_delete_timeout_100ms');
  }
  public set forceDeleteTimeout100Ms(value: number) {
    this._forceDeleteTimeout100Ms = value;
  }
  public resetForceDeleteTimeout100Ms() {
    this._forceDeleteTimeout100Ms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeout100MsInput() {
    return this._forceDeleteTimeout100Ms;
  }

  // half_close_idle_timeout - computed: false, optional: true, required: false
  private _halfCloseIdleTimeout?: number; 
  public get halfCloseIdleTimeout() {
    return this.getNumberAttribute('half_close_idle_timeout');
  }
  public set halfCloseIdleTimeout(value: number) {
    this._halfCloseIdleTimeout = value;
  }
  public resetHalfCloseIdleTimeout() {
    this._halfCloseIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfCloseIdleTimeoutInput() {
    return this._halfCloseIdleTimeout;
  }

  // half_open_idle_timeout - computed: false, optional: true, required: false
  private _halfOpenIdleTimeout?: number; 
  public get halfOpenIdleTimeout() {
    return this.getNumberAttribute('half_open_idle_timeout');
  }
  public set halfOpenIdleTimeout(value: number) {
    this._halfOpenIdleTimeout = value;
  }
  public resetHalfOpenIdleTimeout() {
    this._halfOpenIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenIdleTimeoutInput() {
    return this._halfOpenIdleTimeout;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // initial_window_size - computed: false, optional: true, required: false
  private _initialWindowSize?: number; 
  public get initialWindowSize() {
    return this.getNumberAttribute('initial_window_size');
  }
  public set initialWindowSize(value: number) {
    this._initialWindowSize = value;
  }
  public resetInitialWindowSize() {
    this._initialWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWindowSizeInput() {
    return this._initialWindowSize;
  }

  // insert_client_ip - computed: false, optional: true, required: false
  private _insertClientIp?: number; 
  public get insertClientIp() {
    return this.getNumberAttribute('insert_client_ip');
  }
  public set insertClientIp(value: number) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
  }

  // lan_fast_ack - computed: false, optional: true, required: false
  private _lanFastAck?: number; 
  public get lanFastAck() {
    return this.getNumberAttribute('lan_fast_ack');
  }
  public set lanFastAck(value: number) {
    this._lanFastAck = value;
  }
  public resetLanFastAck() {
    this._lanFastAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanFastAckInput() {
    return this._lanFastAck;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // qos - computed: false, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // re_select_if_server_down - computed: false, optional: true, required: false
  private _reSelectIfServerDown?: number; 
  public get reSelectIfServerDown() {
    return this.getNumberAttribute('re_select_if_server_down');
  }
  public set reSelectIfServerDown(value: number) {
    this._reSelectIfServerDown = value;
  }
  public resetReSelectIfServerDown() {
    this._reSelectIfServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reSelectIfServerDownInput() {
    return this._reSelectIfServerDown;
  }

  // reset_follow_fin - computed: false, optional: true, required: false
  private _resetFollowFin?: number; 
  public get resetFollowFin() {
    return this.getNumberAttribute('reset_follow_fin');
  }
  public set resetFollowFin(value: number) {
    this._resetFollowFin = value;
  }
  public resetResetFollowFin() {
    this._resetFollowFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetFollowFinInput() {
    return this._resetFollowFin;
  }

  // reset_fwd - computed: false, optional: true, required: false
  private _resetFwd?: number; 
  public get resetFwd() {
    return this.getNumberAttribute('reset_fwd');
  }
  public set resetFwd(value: number) {
    this._resetFwd = value;
  }
  public resetResetFwd() {
    this._resetFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetFwdInput() {
    return this._resetFwd;
  }

  // reset_rev - computed: false, optional: true, required: false
  private _resetRev?: number; 
  public get resetRev() {
    return this.getNumberAttribute('reset_rev');
  }
  public set resetRev(value: number) {
    this._resetRev = value;
  }
  public resetResetRev() {
    this._resetRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetRevInput() {
    return this._resetRev;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader = new SlbTemplateTcpProxyHeaderOutputReference(this, "proxy_header");
  public get proxyHeader() {
    return this._proxyHeader;
  }
  public putProxyHeader(value: SlbTemplateTcpProxyHeader) {
    this._proxyHeader.internalValue = value;
  }
  public resetProxyHeader() {
    this._proxyHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alive_if_active: cdktf.numberToTerraform(this._aliveIfActive),
      del_session_on_server_down: cdktf.numberToTerraform(this._delSessionOnServerDown),
      disable: cdktf.numberToTerraform(this._disable),
      down: cdktf.numberToTerraform(this._down),
      force_delete_timeout: cdktf.numberToTerraform(this._forceDeleteTimeout),
      force_delete_timeout_100ms: cdktf.numberToTerraform(this._forceDeleteTimeout100Ms),
      half_close_idle_timeout: cdktf.numberToTerraform(this._halfCloseIdleTimeout),
      half_open_idle_timeout: cdktf.numberToTerraform(this._halfOpenIdleTimeout),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      initial_window_size: cdktf.numberToTerraform(this._initialWindowSize),
      insert_client_ip: cdktf.numberToTerraform(this._insertClientIp),
      lan_fast_ack: cdktf.numberToTerraform(this._lanFastAck),
      logging: cdktf.stringToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      qos: cdktf.numberToTerraform(this._qos),
      re_select_if_server_down: cdktf.numberToTerraform(this._reSelectIfServerDown),
      reset_follow_fin: cdktf.numberToTerraform(this._resetFollowFin),
      reset_fwd: cdktf.numberToTerraform(this._resetFwd),
      reset_rev: cdktf.numberToTerraform(this._resetRev),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      proxy_header: slbTemplateTcpProxyHeaderToTerraform(this._proxyHeader.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alive_if_active: {
        value: cdktf.numberToHclTerraform(this._aliveIfActive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      del_session_on_server_down: {
        value: cdktf.numberToHclTerraform(this._delSessionOnServerDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      down: {
        value: cdktf.numberToHclTerraform(this._down),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete_timeout: {
        value: cdktf.numberToHclTerraform(this._forceDeleteTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete_timeout_100ms: {
        value: cdktf.numberToHclTerraform(this._forceDeleteTimeout100Ms),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_close_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._halfCloseIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_open_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._halfOpenIdleTimeout),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_window_size: {
        value: cdktf.numberToHclTerraform(this._initialWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insert_client_ip: {
        value: cdktf.numberToHclTerraform(this._insertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lan_fast_ack: {
        value: cdktf.numberToHclTerraform(this._lanFastAck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
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
      qos: {
        value: cdktf.numberToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      re_select_if_server_down: {
        value: cdktf.numberToHclTerraform(this._reSelectIfServerDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_follow_fin: {
        value: cdktf.numberToHclTerraform(this._resetFollowFin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_fwd: {
        value: cdktf.numberToHclTerraform(this._resetFwd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_rev: {
        value: cdktf.numberToHclTerraform(this._resetRev),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_header: {
        value: slbTemplateTcpProxyHeaderToHclTerraform(this._proxyHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateTcpProxyHeaderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
