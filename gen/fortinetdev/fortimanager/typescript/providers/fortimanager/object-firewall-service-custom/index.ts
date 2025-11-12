// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallServiceCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#adom ObjectFirewallServiceCustom#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#app_category ObjectFirewallServiceCustom#app_category}
  */
  readonly appCategory?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#app_service_type ObjectFirewallServiceCustom#app_service_type}
  */
  readonly appServiceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#application ObjectFirewallServiceCustom#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#category ObjectFirewallServiceCustom#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#check_reset_range ObjectFirewallServiceCustom#check_reset_range}
  */
  readonly checkResetRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#color ObjectFirewallServiceCustom#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#comment ObjectFirewallServiceCustom#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#fabric_object ObjectFirewallServiceCustom#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#fqdn ObjectFirewallServiceCustom#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#global_object ObjectFirewallServiceCustom#global_object}
  */
  readonly globalObject?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#helper ObjectFirewallServiceCustom#helper}
  */
  readonly helper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#icmpcode ObjectFirewallServiceCustom#icmpcode}
  */
  readonly icmpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#icmptype ObjectFirewallServiceCustom#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#id ObjectFirewallServiceCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#iprange ObjectFirewallServiceCustom#iprange}
  */
  readonly iprange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#name ObjectFirewallServiceCustom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#protocol ObjectFirewallServiceCustom#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#protocol_number ObjectFirewallServiceCustom#protocol_number}
  */
  readonly protocolNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#proxy ObjectFirewallServiceCustom#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#scopetype ObjectFirewallServiceCustom#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#sctp_portrange ObjectFirewallServiceCustom#sctp_portrange}
  */
  readonly sctpPortrange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#session_ttl ObjectFirewallServiceCustom#session_ttl}
  */
  readonly sessionTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#tcp_halfclose_timer ObjectFirewallServiceCustom#tcp_halfclose_timer}
  */
  readonly tcpHalfcloseTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#tcp_halfopen_timer ObjectFirewallServiceCustom#tcp_halfopen_timer}
  */
  readonly tcpHalfopenTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#tcp_portrange ObjectFirewallServiceCustom#tcp_portrange}
  */
  readonly tcpPortrange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#tcp_rst_timer ObjectFirewallServiceCustom#tcp_rst_timer}
  */
  readonly tcpRstTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#tcp_timewait_timer ObjectFirewallServiceCustom#tcp_timewait_timer}
  */
  readonly tcpTimewaitTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#udp_idle_timer ObjectFirewallServiceCustom#udp_idle_timer}
  */
  readonly udpIdleTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#udp_portrange ObjectFirewallServiceCustom#udp_portrange}
  */
  readonly udpPortrange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#udplite_portrange ObjectFirewallServiceCustom#udplite_portrange}
  */
  readonly udplitePortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#uuid ObjectFirewallServiceCustom#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#visibility ObjectFirewallServiceCustom#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom fortimanager_object_firewall_service_custom}
*/
export class ObjectFirewallServiceCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_service_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallServiceCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallServiceCustom to import
  * @param importFromId The id of the existing ObjectFirewallServiceCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallServiceCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_service_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_service_custom fortimanager_object_firewall_service_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallServiceCustomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallServiceCustomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_service_custom',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._appCategory = config.appCategory;
    this._appServiceType = config.appServiceType;
    this._application = config.application;
    this._category = config.category;
    this._checkResetRange = config.checkResetRange;
    this._color = config.color;
    this._comment = config.comment;
    this._fabricObject = config.fabricObject;
    this._fqdn = config.fqdn;
    this._globalObject = config.globalObject;
    this._helper = config.helper;
    this._icmpcode = config.icmpcode;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._iprange = config.iprange;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolNumber = config.protocolNumber;
    this._proxy = config.proxy;
    this._scopetype = config.scopetype;
    this._sctpPortrange = config.sctpPortrange;
    this._sessionTtl = config.sessionTtl;
    this._tcpHalfcloseTimer = config.tcpHalfcloseTimer;
    this._tcpHalfopenTimer = config.tcpHalfopenTimer;
    this._tcpPortrange = config.tcpPortrange;
    this._tcpRstTimer = config.tcpRstTimer;
    this._tcpTimewaitTimer = config.tcpTimewaitTimer;
    this._udpIdleTimer = config.udpIdleTimer;
    this._udpPortrange = config.udpPortrange;
    this._udplitePortrange = config.udplitePortrange;
    this._uuid = config.uuid;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // app_category - computed: true, optional: true, required: false
  private _appCategory?: number[]; 
  public get appCategory() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('app_category')));
  }
  public set appCategory(value: number[]) {
    this._appCategory = value;
  }
  public resetAppCategory() {
    this._appCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // app_service_type - computed: true, optional: true, required: false
  private _appServiceType?: string; 
  public get appServiceType() {
    return this.getStringAttribute('app_service_type');
  }
  public set appServiceType(value: string) {
    this._appServiceType = value;
  }
  public resetAppServiceType() {
    this._appServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceTypeInput() {
    return this._appServiceType;
  }

  // application - computed: true, optional: true, required: false
  private _application?: number[]; 
  public get application() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('application')));
  }
  public set application(value: number[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // check_reset_range - computed: true, optional: true, required: false
  private _checkResetRange?: string; 
  public get checkResetRange() {
    return this.getStringAttribute('check_reset_range');
  }
  public set checkResetRange(value: string) {
    this._checkResetRange = value;
  }
  public resetCheckResetRange() {
    this._checkResetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkResetRangeInput() {
    return this._checkResetRange;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

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

  // fabric_object - computed: true, optional: true, required: false
  private _fabricObject?: string; 
  public get fabricObject() {
    return this.getStringAttribute('fabric_object');
  }
  public set fabricObject(value: string) {
    this._fabricObject = value;
  }
  public resetFabricObject() {
    this._fabricObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectInput() {
    return this._fabricObject;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // global_object - computed: false, optional: true, required: false
  private _globalObject?: number; 
  public get globalObject() {
    return this.getNumberAttribute('global_object');
  }
  public set globalObject(value: number) {
    this._globalObject = value;
  }
  public resetGlobalObject() {
    this._globalObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalObjectInput() {
    return this._globalObject;
  }

  // helper - computed: true, optional: true, required: false
  private _helper?: string; 
  public get helper() {
    return this.getStringAttribute('helper');
  }
  public set helper(value: string) {
    this._helper = value;
  }
  public resetHelper() {
    this._helper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperInput() {
    return this._helper;
  }

  // icmpcode - computed: false, optional: true, required: false
  private _icmpcode?: number; 
  public get icmpcode() {
    return this.getNumberAttribute('icmpcode');
  }
  public set icmpcode(value: number) {
    this._icmpcode = value;
  }
  public resetIcmpcode() {
    this._icmpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpcodeInput() {
    return this._icmpcode;
  }

  // icmptype - computed: false, optional: true, required: false
  private _icmptype?: number; 
  public get icmptype() {
    return this.getNumberAttribute('icmptype');
  }
  public set icmptype(value: number) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
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

  // iprange - computed: true, optional: true, required: false
  private _iprange?: string; 
  public get iprange() {
    return this.getStringAttribute('iprange');
  }
  public set iprange(value: string) {
    this._iprange = value;
  }
  public resetIprange() {
    this._iprange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iprangeInput() {
    return this._iprange;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_number - computed: false, optional: true, required: false
  private _protocolNumber?: number; 
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }
  public set protocolNumber(value: number) {
    this._protocolNumber = value;
  }
  public resetProtocolNumber() {
    this._protocolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sctp_portrange - computed: true, optional: true, required: false
  private _sctpPortrange?: string[]; 
  public get sctpPortrange() {
    return cdktf.Fn.tolist(this.getListAttribute('sctp_portrange'));
  }
  public set sctpPortrange(value: string[]) {
    this._sctpPortrange = value;
  }
  public resetSctpPortrange() {
    this._sctpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpPortrangeInput() {
    return this._sctpPortrange;
  }

  // session_ttl - computed: true, optional: true, required: false
  private _sessionTtl?: string; 
  public get sessionTtl() {
    return this.getStringAttribute('session_ttl');
  }
  public set sessionTtl(value: string) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // tcp_halfclose_timer - computed: false, optional: true, required: false
  private _tcpHalfcloseTimer?: number; 
  public get tcpHalfcloseTimer() {
    return this.getNumberAttribute('tcp_halfclose_timer');
  }
  public set tcpHalfcloseTimer(value: number) {
    this._tcpHalfcloseTimer = value;
  }
  public resetTcpHalfcloseTimer() {
    this._tcpHalfcloseTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfcloseTimerInput() {
    return this._tcpHalfcloseTimer;
  }

  // tcp_halfopen_timer - computed: false, optional: true, required: false
  private _tcpHalfopenTimer?: number; 
  public get tcpHalfopenTimer() {
    return this.getNumberAttribute('tcp_halfopen_timer');
  }
  public set tcpHalfopenTimer(value: number) {
    this._tcpHalfopenTimer = value;
  }
  public resetTcpHalfopenTimer() {
    this._tcpHalfopenTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfopenTimerInput() {
    return this._tcpHalfopenTimer;
  }

  // tcp_portrange - computed: true, optional: true, required: false
  private _tcpPortrange?: string[]; 
  public get tcpPortrange() {
    return cdktf.Fn.tolist(this.getListAttribute('tcp_portrange'));
  }
  public set tcpPortrange(value: string[]) {
    this._tcpPortrange = value;
  }
  public resetTcpPortrange() {
    this._tcpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortrangeInput() {
    return this._tcpPortrange;
  }

  // tcp_rst_timer - computed: false, optional: true, required: false
  private _tcpRstTimer?: number; 
  public get tcpRstTimer() {
    return this.getNumberAttribute('tcp_rst_timer');
  }
  public set tcpRstTimer(value: number) {
    this._tcpRstTimer = value;
  }
  public resetTcpRstTimer() {
    this._tcpRstTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstTimerInput() {
    return this._tcpRstTimer;
  }

  // tcp_timewait_timer - computed: false, optional: true, required: false
  private _tcpTimewaitTimer?: number; 
  public get tcpTimewaitTimer() {
    return this.getNumberAttribute('tcp_timewait_timer');
  }
  public set tcpTimewaitTimer(value: number) {
    this._tcpTimewaitTimer = value;
  }
  public resetTcpTimewaitTimer() {
    this._tcpTimewaitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimewaitTimerInput() {
    return this._tcpTimewaitTimer;
  }

  // udp_idle_timer - computed: false, optional: true, required: false
  private _udpIdleTimer?: number; 
  public get udpIdleTimer() {
    return this.getNumberAttribute('udp_idle_timer');
  }
  public set udpIdleTimer(value: number) {
    this._udpIdleTimer = value;
  }
  public resetUdpIdleTimer() {
    this._udpIdleTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimerInput() {
    return this._udpIdleTimer;
  }

  // udp_portrange - computed: true, optional: true, required: false
  private _udpPortrange?: string[]; 
  public get udpPortrange() {
    return cdktf.Fn.tolist(this.getListAttribute('udp_portrange'));
  }
  public set udpPortrange(value: string[]) {
    this._udpPortrange = value;
  }
  public resetUdpPortrange() {
    this._udpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortrangeInput() {
    return this._udpPortrange;
  }

  // udplite_portrange - computed: false, optional: true, required: false
  private _udplitePortrange?: string; 
  public get udplitePortrange() {
    return this.getStringAttribute('udplite_portrange');
  }
  public set udplitePortrange(value: string) {
    this._udplitePortrange = value;
  }
  public resetUdplitePortrange() {
    this._udplitePortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udplitePortrangeInput() {
    return this._udplitePortrange;
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

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      app_category: cdktf.listMapper(cdktf.numberToTerraform, false)(this._appCategory),
      app_service_type: cdktf.stringToTerraform(this._appServiceType),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      category: cdktf.stringToTerraform(this._category),
      check_reset_range: cdktf.stringToTerraform(this._checkResetRange),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      global_object: cdktf.numberToTerraform(this._globalObject),
      helper: cdktf.stringToTerraform(this._helper),
      icmpcode: cdktf.numberToTerraform(this._icmpcode),
      icmptype: cdktf.numberToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      iprange: cdktf.stringToTerraform(this._iprange),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_number: cdktf.numberToTerraform(this._protocolNumber),
      proxy: cdktf.stringToTerraform(this._proxy),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sctp_portrange: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sctpPortrange),
      session_ttl: cdktf.stringToTerraform(this._sessionTtl),
      tcp_halfclose_timer: cdktf.numberToTerraform(this._tcpHalfcloseTimer),
      tcp_halfopen_timer: cdktf.numberToTerraform(this._tcpHalfopenTimer),
      tcp_portrange: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpPortrange),
      tcp_rst_timer: cdktf.numberToTerraform(this._tcpRstTimer),
      tcp_timewait_timer: cdktf.numberToTerraform(this._tcpTimewaitTimer),
      udp_idle_timer: cdktf.numberToTerraform(this._udpIdleTimer),
      udp_portrange: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpPortrange),
      udplite_portrange: cdktf.stringToTerraform(this._udplitePortrange),
      uuid: cdktf.stringToTerraform(this._uuid),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_category: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._appCategory),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      app_service_type: {
        value: cdktf.stringToHclTerraform(this._appServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._application),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_reset_range: {
        value: cdktf.stringToHclTerraform(this._checkResetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_object: {
        value: cdktf.stringToHclTerraform(this._fabricObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_object: {
        value: cdktf.numberToHclTerraform(this._globalObject),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      helper: {
        value: cdktf.stringToHclTerraform(this._helper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpcode: {
        value: cdktf.numberToHclTerraform(this._icmpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmptype: {
        value: cdktf.numberToHclTerraform(this._icmptype),
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
      iprange: {
        value: cdktf.stringToHclTerraform(this._iprange),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_number: {
        value: cdktf.numberToHclTerraform(this._protocolNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_portrange: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sctpPortrange),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_ttl: {
        value: cdktf.stringToHclTerraform(this._sessionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_halfclose_timer: {
        value: cdktf.numberToHclTerraform(this._tcpHalfcloseTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_halfopen_timer: {
        value: cdktf.numberToHclTerraform(this._tcpHalfopenTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_portrange: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpPortrange),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tcp_rst_timer: {
        value: cdktf.numberToHclTerraform(this._tcpRstTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timewait_timer: {
        value: cdktf.numberToHclTerraform(this._tcpTimewaitTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_idle_timer: {
        value: cdktf.numberToHclTerraform(this._udpIdleTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_portrange: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._udpPortrange),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      udplite_portrange: {
        value: cdktf.stringToHclTerraform(this._udplitePortrange),
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
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
