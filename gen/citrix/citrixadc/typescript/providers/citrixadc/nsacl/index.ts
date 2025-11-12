// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsaclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#aclaction Nsacl#aclaction}
  */
  readonly aclaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#aclname Nsacl#aclname}
  */
  readonly aclname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destip Nsacl#destip}
  */
  readonly destip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destipdataset Nsacl#destipdataset}
  */
  readonly destipdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destipop Nsacl#destipop}
  */
  readonly destipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destipval Nsacl#destipval}
  */
  readonly destipval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destport Nsacl#destport}
  */
  readonly destport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destportdataset Nsacl#destportdataset}
  */
  readonly destportdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destportop Nsacl#destportop}
  */
  readonly destportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#destportval Nsacl#destportval}
  */
  readonly destportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#dfdhash Nsacl#dfdhash}
  */
  readonly dfdhash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#established Nsacl#established}
  */
  readonly established?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#icmpcode Nsacl#icmpcode}
  */
  readonly icmpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#icmptype Nsacl#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#id Nsacl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#interface Nsacl#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#logstate Nsacl#logstate}
  */
  readonly logstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#nodeid Nsacl#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#priority Nsacl#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#protocol Nsacl#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#protocolnumber Nsacl#protocolnumber}
  */
  readonly protocolnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#ratelimit Nsacl#ratelimit}
  */
  readonly ratelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcip Nsacl#srcip}
  */
  readonly srcip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcipdataset Nsacl#srcipdataset}
  */
  readonly srcipdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcipop Nsacl#srcipop}
  */
  readonly srcipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcipval Nsacl#srcipval}
  */
  readonly srcipval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcmac Nsacl#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcmacmask Nsacl#srcmacmask}
  */
  readonly srcmacmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcport Nsacl#srcport}
  */
  readonly srcport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcportdataset Nsacl#srcportdataset}
  */
  readonly srcportdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcportop Nsacl#srcportop}
  */
  readonly srcportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#srcportval Nsacl#srcportval}
  */
  readonly srcportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#state Nsacl#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#stateful Nsacl#stateful}
  */
  readonly stateful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#td Nsacl#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#ttl Nsacl#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#type Nsacl#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#vlan Nsacl#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#vxlan Nsacl#vxlan}
  */
  readonly vxlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl citrixadc_nsacl}
*/
export class Nsacl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsacl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsacl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsacl to import
  * @param importFromId The id of the existing Nsacl that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsacl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsacl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsacl citrixadc_nsacl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsaclConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsaclConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsacl',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclaction = config.aclaction;
    this._aclname = config.aclname;
    this._destip = config.destip;
    this._destipdataset = config.destipdataset;
    this._destipop = config.destipop;
    this._destipval = config.destipval;
    this._destport = config.destport;
    this._destportdataset = config.destportdataset;
    this._destportop = config.destportop;
    this._destportval = config.destportval;
    this._dfdhash = config.dfdhash;
    this._established = config.established;
    this._icmpcode = config.icmpcode;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._interface = config.interface;
    this._logstate = config.logstate;
    this._nodeid = config.nodeid;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._protocolnumber = config.protocolnumber;
    this._ratelimit = config.ratelimit;
    this._srcip = config.srcip;
    this._srcipdataset = config.srcipdataset;
    this._srcipop = config.srcipop;
    this._srcipval = config.srcipval;
    this._srcmac = config.srcmac;
    this._srcmacmask = config.srcmacmask;
    this._srcport = config.srcport;
    this._srcportdataset = config.srcportdataset;
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

  // aclname - computed: true, optional: true, required: false
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  public resetAclname() {
    this._aclname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

  // destip - computed: true, optional: true, required: false
  private _destip?: boolean | cdktf.IResolvable; 
  public get destip() {
    return this.getBooleanAttribute('destip');
  }
  public set destip(value: boolean | cdktf.IResolvable) {
    this._destip = value;
  }
  public resetDestip() {
    this._destip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipInput() {
    return this._destip;
  }

  // destipdataset - computed: true, optional: true, required: false
  private _destipdataset?: string; 
  public get destipdataset() {
    return this.getStringAttribute('destipdataset');
  }
  public set destipdataset(value: string) {
    this._destipdataset = value;
  }
  public resetDestipdataset() {
    this._destipdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipdatasetInput() {
    return this._destipdataset;
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

  // destipval - computed: true, optional: true, required: false
  private _destipval?: string; 
  public get destipval() {
    return this.getStringAttribute('destipval');
  }
  public set destipval(value: string) {
    this._destipval = value;
  }
  public resetDestipval() {
    this._destipval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipvalInput() {
    return this._destipval;
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

  // destportdataset - computed: true, optional: true, required: false
  private _destportdataset?: string; 
  public get destportdataset() {
    return this.getStringAttribute('destportdataset');
  }
  public set destportdataset(value: string) {
    this._destportdataset = value;
  }
  public resetDestportdataset() {
    this._destportdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportdatasetInput() {
    return this._destportdataset;
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

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
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

  // srcip - computed: true, optional: true, required: false
  private _srcip?: boolean | cdktf.IResolvable; 
  public get srcip() {
    return this.getBooleanAttribute('srcip');
  }
  public set srcip(value: boolean | cdktf.IResolvable) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcipdataset - computed: true, optional: true, required: false
  private _srcipdataset?: string; 
  public get srcipdataset() {
    return this.getStringAttribute('srcipdataset');
  }
  public set srcipdataset(value: string) {
    this._srcipdataset = value;
  }
  public resetSrcipdataset() {
    this._srcipdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipdatasetInput() {
    return this._srcipdataset;
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

  // srcipval - computed: true, optional: true, required: false
  private _srcipval?: string; 
  public get srcipval() {
    return this.getStringAttribute('srcipval');
  }
  public set srcipval(value: string) {
    this._srcipval = value;
  }
  public resetSrcipval() {
    this._srcipval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipvalInput() {
    return this._srcipval;
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

  // srcportdataset - computed: true, optional: true, required: false
  private _srcportdataset?: string; 
  public get srcportdataset() {
    return this.getStringAttribute('srcportdataset');
  }
  public set srcportdataset(value: string) {
    this._srcportdataset = value;
  }
  public resetSrcportdataset() {
    this._srcportdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportdatasetInput() {
    return this._srcportdataset;
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
      aclaction: cdktf.stringToTerraform(this._aclaction),
      aclname: cdktf.stringToTerraform(this._aclname),
      destip: cdktf.booleanToTerraform(this._destip),
      destipdataset: cdktf.stringToTerraform(this._destipdataset),
      destipop: cdktf.stringToTerraform(this._destipop),
      destipval: cdktf.stringToTerraform(this._destipval),
      destport: cdktf.booleanToTerraform(this._destport),
      destportdataset: cdktf.stringToTerraform(this._destportdataset),
      destportop: cdktf.stringToTerraform(this._destportop),
      destportval: cdktf.stringToTerraform(this._destportval),
      dfdhash: cdktf.stringToTerraform(this._dfdhash),
      established: cdktf.booleanToTerraform(this._established),
      icmpcode: cdktf.numberToTerraform(this._icmpcode),
      icmptype: cdktf.numberToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      logstate: cdktf.stringToTerraform(this._logstate),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocolnumber: cdktf.numberToTerraform(this._protocolnumber),
      ratelimit: cdktf.numberToTerraform(this._ratelimit),
      srcip: cdktf.booleanToTerraform(this._srcip),
      srcipdataset: cdktf.stringToTerraform(this._srcipdataset),
      srcipop: cdktf.stringToTerraform(this._srcipop),
      srcipval: cdktf.stringToTerraform(this._srcipval),
      srcmac: cdktf.stringToTerraform(this._srcmac),
      srcmacmask: cdktf.stringToTerraform(this._srcmacmask),
      srcport: cdktf.booleanToTerraform(this._srcport),
      srcportdataset: cdktf.stringToTerraform(this._srcportdataset),
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
      aclaction: {
        value: cdktf.stringToHclTerraform(this._aclaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aclname: {
        value: cdktf.stringToHclTerraform(this._aclname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destip: {
        value: cdktf.booleanToHclTerraform(this._destip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destipdataset: {
        value: cdktf.stringToHclTerraform(this._destipdataset),
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
      destipval: {
        value: cdktf.stringToHclTerraform(this._destipval),
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
      destportdataset: {
        value: cdktf.stringToHclTerraform(this._destportdataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      srcip: {
        value: cdktf.booleanToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      srcipdataset: {
        value: cdktf.stringToHclTerraform(this._srcipdataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcipop: {
        value: cdktf.stringToHclTerraform(this._srcipop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcipval: {
        value: cdktf.stringToHclTerraform(this._srcipval),
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
      srcportdataset: {
        value: cdktf.stringToHclTerraform(this._srcportdataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
