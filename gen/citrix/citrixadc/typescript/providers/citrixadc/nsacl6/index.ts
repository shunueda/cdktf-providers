// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nsacl6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#acl6action Nsacl6#acl6action}
  */
  readonly acl6Action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#acl6name Nsacl6#acl6name}
  */
  readonly acl6Name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#aclaction Nsacl6#aclaction}
  */
  readonly aclaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#destipop Nsacl6#destipop}
  */
  readonly destipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#destipv6 Nsacl6#destipv6}
  */
  readonly destipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#destipv6val Nsacl6#destipv6val}
  */
  readonly destipv6Val?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#destport Nsacl6#destport}
  */
  readonly destport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#destportop Nsacl6#destportop}
  */
  readonly destportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#destportval Nsacl6#destportval}
  */
  readonly destportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#dfdhash Nsacl6#dfdhash}
  */
  readonly dfdhash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#dfdprefix Nsacl6#dfdprefix}
  */
  readonly dfdprefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#established Nsacl6#established}
  */
  readonly established?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#icmpcode Nsacl6#icmpcode}
  */
  readonly icmpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#icmptype Nsacl6#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#id Nsacl6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#interface Nsacl6#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#logstate Nsacl6#logstate}
  */
  readonly logstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#newname Nsacl6#newname}
  */
  readonly newname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#priority Nsacl6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#protocol Nsacl6#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#protocolnumber Nsacl6#protocolnumber}
  */
  readonly protocolnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#ratelimit Nsacl6#ratelimit}
  */
  readonly ratelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcipop Nsacl6#srcipop}
  */
  readonly srcipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcipv6 Nsacl6#srcipv6}
  */
  readonly srcipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcipv6val Nsacl6#srcipv6val}
  */
  readonly srcipv6Val?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcmac Nsacl6#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcmacmask Nsacl6#srcmacmask}
  */
  readonly srcmacmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcport Nsacl6#srcport}
  */
  readonly srcport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcportop Nsacl6#srcportop}
  */
  readonly srcportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#srcportval Nsacl6#srcportval}
  */
  readonly srcportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#state Nsacl6#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#stateful Nsacl6#stateful}
  */
  readonly stateful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#td Nsacl6#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#ttl Nsacl6#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#type Nsacl6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#vlan Nsacl6#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#vxlan Nsacl6#vxlan}
  */
  readonly vxlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6 citrixadc_nsacl6}
*/
export class Nsacl6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsacl6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsacl6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsacl6 to import
  * @param importFromId The id of the existing Nsacl6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsacl6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsacl6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsacl6 citrixadc_nsacl6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nsacl6Config
  */
  public constructor(scope: Construct, id: string, config: Nsacl6Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsacl6',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl6Action = config.acl6Action;
    this._acl6Name = config.acl6Name;
    this._aclaction = config.aclaction;
    this._destipop = config.destipop;
    this._destipv6 = config.destipv6;
    this._destipv6Val = config.destipv6Val;
    this._destport = config.destport;
    this._destportop = config.destportop;
    this._destportval = config.destportval;
    this._dfdhash = config.dfdhash;
    this._dfdprefix = config.dfdprefix;
    this._established = config.established;
    this._icmpcode = config.icmpcode;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._interface = config.interface;
    this._logstate = config.logstate;
    this._newname = config.newname;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._protocolnumber = config.protocolnumber;
    this._ratelimit = config.ratelimit;
    this._srcipop = config.srcipop;
    this._srcipv6 = config.srcipv6;
    this._srcipv6Val = config.srcipv6Val;
    this._srcmac = config.srcmac;
    this._srcmacmask = config.srcmacmask;
    this._srcport = config.srcport;
    this._srcportop = config.srcportop;
    this._srcportval = config.srcportval;
    this._state = config.state;
    this._stateful = config.stateful;
    this._td = config.td;
    this._ttl = config.ttl;
    this._type = config.type;
    this._vlan = config.vlan;
    this._vxlan = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl6action - computed: false, optional: false, required: true
  private _acl6Action?: string; 
  public get acl6Action() {
    return this.getStringAttribute('acl6action');
  }
  public set acl6Action(value: string) {
    this._acl6Action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acl6ActionInput() {
    return this._acl6Action;
  }

  // acl6name - computed: false, optional: false, required: true
  private _acl6Name?: string; 
  public get acl6Name() {
    return this.getStringAttribute('acl6name');
  }
  public set acl6Name(value: string) {
    this._acl6Name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acl6NameInput() {
    return this._acl6Name;
  }

  // aclaction - computed: true, optional: true, required: false
  private _aclaction?: string; 
  public get aclaction() {
    return this.getStringAttribute('aclaction');
  }
  public set aclaction(value: string) {
    this._aclaction = value;
  }
  public resetAclaction() {
    this._aclaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclactionInput() {
    return this._aclaction;
  }

  // destipop - computed: true, optional: true, required: false
  private _destipop?: string; 
  public get destipop() {
    return this.getStringAttribute('destipop');
  }
  public set destipop(value: string) {
    this._destipop = value;
  }
  public resetDestipop() {
    this._destipop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipopInput() {
    return this._destipop;
  }

  // destipv6 - computed: true, optional: true, required: false
  private _destipv6?: boolean | cdktf.IResolvable; 
  public get destipv6() {
    return this.getBooleanAttribute('destipv6');
  }
  public set destipv6(value: boolean | cdktf.IResolvable) {
    this._destipv6 = value;
  }
  public resetDestipv6() {
    this._destipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipv6Input() {
    return this._destipv6;
  }

  // destipv6val - computed: true, optional: true, required: false
  private _destipv6Val?: string; 
  public get destipv6Val() {
    return this.getStringAttribute('destipv6val');
  }
  public set destipv6Val(value: string) {
    this._destipv6Val = value;
  }
  public resetDestipv6Val() {
    this._destipv6Val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipv6ValInput() {
    return this._destipv6Val;
  }

  // destport - computed: true, optional: true, required: false
  private _destport?: boolean | cdktf.IResolvable; 
  public get destport() {
    return this.getBooleanAttribute('destport');
  }
  public set destport(value: boolean | cdktf.IResolvable) {
    this._destport = value;
  }
  public resetDestport() {
    this._destport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportInput() {
    return this._destport;
  }

  // destportop - computed: true, optional: true, required: false
  private _destportop?: string; 
  public get destportop() {
    return this.getStringAttribute('destportop');
  }
  public set destportop(value: string) {
    this._destportop = value;
  }
  public resetDestportop() {
    this._destportop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportopInput() {
    return this._destportop;
  }

  // destportval - computed: true, optional: true, required: false
  private _destportval?: string; 
  public get destportval() {
    return this.getStringAttribute('destportval');
  }
  public set destportval(value: string) {
    this._destportval = value;
  }
  public resetDestportval() {
    this._destportval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportvalInput() {
    return this._destportval;
  }

  // dfdhash - computed: true, optional: true, required: false
  private _dfdhash?: string; 
  public get dfdhash() {
    return this.getStringAttribute('dfdhash');
  }
  public set dfdhash(value: string) {
    this._dfdhash = value;
  }
  public resetDfdhash() {
    this._dfdhash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfdhashInput() {
    return this._dfdhash;
  }

  // dfdprefix - computed: true, optional: true, required: false
  private _dfdprefix?: number; 
  public get dfdprefix() {
    return this.getNumberAttribute('dfdprefix');
  }
  public set dfdprefix(value: number) {
    this._dfdprefix = value;
  }
  public resetDfdprefix() {
    this._dfdprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfdprefixInput() {
    return this._dfdprefix;
  }

  // established - computed: true, optional: true, required: false
  private _established?: boolean | cdktf.IResolvable; 
  public get established() {
    return this.getBooleanAttribute('established');
  }
  public set established(value: boolean | cdktf.IResolvable) {
    this._established = value;
  }
  public resetEstablished() {
    this._established = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishedInput() {
    return this._established;
  }

  // icmpcode - computed: true, optional: true, required: false
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

  // icmptype - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // logstate - computed: true, optional: true, required: false
  private _logstate?: string; 
  public get logstate() {
    return this.getStringAttribute('logstate');
  }
  public set logstate(value: string) {
    this._logstate = value;
  }
  public resetLogstate() {
    this._logstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstateInput() {
    return this._logstate;
  }

  // newname - computed: true, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // protocolnumber - computed: true, optional: true, required: false
  private _protocolnumber?: number; 
  public get protocolnumber() {
    return this.getNumberAttribute('protocolnumber');
  }
  public set protocolnumber(value: number) {
    this._protocolnumber = value;
  }
  public resetProtocolnumber() {
    this._protocolnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolnumberInput() {
    return this._protocolnumber;
  }

  // ratelimit - computed: true, optional: true, required: false
  private _ratelimit?: number; 
  public get ratelimit() {
    return this.getNumberAttribute('ratelimit');
  }
  public set ratelimit(value: number) {
    this._ratelimit = value;
  }
  public resetRatelimit() {
    this._ratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit;
  }

  // srcipop - computed: true, optional: true, required: false
  private _srcipop?: string; 
  public get srcipop() {
    return this.getStringAttribute('srcipop');
  }
  public set srcipop(value: string) {
    this._srcipop = value;
  }
  public resetSrcipop() {
    this._srcipop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipopInput() {
    return this._srcipop;
  }

  // srcipv6 - computed: true, optional: true, required: false
  private _srcipv6?: boolean | cdktf.IResolvable; 
  public get srcipv6() {
    return this.getBooleanAttribute('srcipv6');
  }
  public set srcipv6(value: boolean | cdktf.IResolvable) {
    this._srcipv6 = value;
  }
  public resetSrcipv6() {
    this._srcipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // srcipv6val - computed: true, optional: true, required: false
  private _srcipv6Val?: string; 
  public get srcipv6Val() {
    return this.getStringAttribute('srcipv6val');
  }
  public set srcipv6Val(value: string) {
    this._srcipv6Val = value;
  }
  public resetSrcipv6Val() {
    this._srcipv6Val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6ValInput() {
    return this._srcipv6Val;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcmacmask - computed: true, optional: true, required: false
  private _srcmacmask?: string; 
  public get srcmacmask() {
    return this.getStringAttribute('srcmacmask');
  }
  public set srcmacmask(value: string) {
    this._srcmacmask = value;
  }
  public resetSrcmacmask() {
    this._srcmacmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacmaskInput() {
    return this._srcmacmask;
  }

  // srcport - computed: true, optional: true, required: false
  private _srcport?: boolean | cdktf.IResolvable; 
  public get srcport() {
    return this.getBooleanAttribute('srcport');
  }
  public set srcport(value: boolean | cdktf.IResolvable) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // srcportop - computed: true, optional: true, required: false
  private _srcportop?: string; 
  public get srcportop() {
    return this.getStringAttribute('srcportop');
  }
  public set srcportop(value: string) {
    this._srcportop = value;
  }
  public resetSrcportop() {
    this._srcportop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportopInput() {
    return this._srcportop;
  }

  // srcportval - computed: true, optional: true, required: false
  private _srcportval?: string; 
  public get srcportval() {
    return this.getStringAttribute('srcportval');
  }
  public set srcportval(value: string) {
    this._srcportval = value;
  }
  public resetSrcportval() {
    this._srcportval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportvalInput() {
    return this._srcportval;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // stateful - computed: true, optional: true, required: false
  private _stateful?: string; 
  public get stateful() {
    return this.getStringAttribute('stateful');
  }
  public set stateful(value: string) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vxlan - computed: true, optional: true, required: false
  private _vxlan?: number; 
  public get vxlan() {
    return this.getNumberAttribute('vxlan');
  }
  public set vxlan(value: number) {
    this._vxlan = value;
  }
  public resetVxlan() {
    this._vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl6action: cdktf.stringToTerraform(this._acl6Action),
      acl6name: cdktf.stringToTerraform(this._acl6Name),
      aclaction: cdktf.stringToTerraform(this._aclaction),
      destipop: cdktf.stringToTerraform(this._destipop),
      destipv6: cdktf.booleanToTerraform(this._destipv6),
      destipv6val: cdktf.stringToTerraform(this._destipv6Val),
      destport: cdktf.booleanToTerraform(this._destport),
      destportop: cdktf.stringToTerraform(this._destportop),
      destportval: cdktf.stringToTerraform(this._destportval),
      dfdhash: cdktf.stringToTerraform(this._dfdhash),
      dfdprefix: cdktf.numberToTerraform(this._dfdprefix),
      established: cdktf.booleanToTerraform(this._established),
      icmpcode: cdktf.numberToTerraform(this._icmpcode),
      icmptype: cdktf.numberToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      logstate: cdktf.stringToTerraform(this._logstate),
      newname: cdktf.stringToTerraform(this._newname),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocolnumber: cdktf.numberToTerraform(this._protocolnumber),
      ratelimit: cdktf.numberToTerraform(this._ratelimit),
      srcipop: cdktf.stringToTerraform(this._srcipop),
      srcipv6: cdktf.booleanToTerraform(this._srcipv6),
      srcipv6val: cdktf.stringToTerraform(this._srcipv6Val),
      srcmac: cdktf.stringToTerraform(this._srcmac),
      srcmacmask: cdktf.stringToTerraform(this._srcmacmask),
      srcport: cdktf.booleanToTerraform(this._srcport),
      srcportop: cdktf.stringToTerraform(this._srcportop),
      srcportval: cdktf.stringToTerraform(this._srcportval),
      state: cdktf.stringToTerraform(this._state),
      stateful: cdktf.stringToTerraform(this._stateful),
      td: cdktf.numberToTerraform(this._td),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      vlan: cdktf.numberToTerraform(this._vlan),
      vxlan: cdktf.numberToTerraform(this._vxlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl6action: {
        value: cdktf.stringToHclTerraform(this._acl6Action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl6name: {
        value: cdktf.stringToHclTerraform(this._acl6Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aclaction: {
        value: cdktf.stringToHclTerraform(this._aclaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destipop: {
        value: cdktf.stringToHclTerraform(this._destipop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destipv6: {
        value: cdktf.booleanToHclTerraform(this._destipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destipv6val: {
        value: cdktf.stringToHclTerraform(this._destipv6Val),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destport: {
        value: cdktf.booleanToHclTerraform(this._destport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destportop: {
        value: cdktf.stringToHclTerraform(this._destportop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destportval: {
        value: cdktf.stringToHclTerraform(this._destportval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfdhash: {
        value: cdktf.stringToHclTerraform(this._dfdhash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dfdprefix: {
        value: cdktf.numberToHclTerraform(this._dfdprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      established: {
        value: cdktf.booleanToHclTerraform(this._established),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logstate: {
        value: cdktf.stringToHclTerraform(this._logstate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      newname: {
        value: cdktf.stringToHclTerraform(this._newname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocolnumber: {
        value: cdktf.numberToHclTerraform(this._protocolnumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ratelimit: {
        value: cdktf.numberToHclTerraform(this._ratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcipop: {
        value: cdktf.stringToHclTerraform(this._srcipop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcipv6: {
        value: cdktf.booleanToHclTerraform(this._srcipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srcipv6val: {
        value: cdktf.stringToHclTerraform(this._srcipv6Val),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcmac: {
        value: cdktf.stringToHclTerraform(this._srcmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcmacmask: {
        value: cdktf.stringToHclTerraform(this._srcmacmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcport: {
        value: cdktf.booleanToHclTerraform(this._srcport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srcportop: {
        value: cdktf.stringToHclTerraform(this._srcportop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcportval: {
        value: cdktf.stringToHclTerraform(this._srcportval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateful: {
        value: cdktf.stringToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vxlan: {
        value: cdktf.numberToHclTerraform(this._vxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
