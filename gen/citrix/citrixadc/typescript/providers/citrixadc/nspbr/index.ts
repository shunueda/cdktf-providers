// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NspbrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#action Nspbr#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#destip Nspbr#destip}
  */
  readonly destip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#destipop Nspbr#destipop}
  */
  readonly destipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#destipval Nspbr#destipval}
  */
  readonly destipval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#destport Nspbr#destport}
  */
  readonly destport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#destportop Nspbr#destportop}
  */
  readonly destportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#destportval Nspbr#destportval}
  */
  readonly destportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#detail Nspbr#detail}
  */
  readonly detail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#id Nspbr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#interface Nspbr#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#iptunnel Nspbr#iptunnel}
  */
  readonly iptunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#iptunnelname Nspbr#iptunnelname}
  */
  readonly iptunnelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#monitor Nspbr#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#msr Nspbr#msr}
  */
  readonly msr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#name Nspbr#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#nexthop Nspbr#nexthop}
  */
  readonly nexthop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#nexthopval Nspbr#nexthopval}
  */
  readonly nexthopval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#ownergroup Nspbr#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#priority Nspbr#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#protocol Nspbr#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#protocolnumber Nspbr#protocolnumber}
  */
  readonly protocolnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcip Nspbr#srcip}
  */
  readonly srcip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcipop Nspbr#srcipop}
  */
  readonly srcipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcipval Nspbr#srcipval}
  */
  readonly srcipval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcmac Nspbr#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcmacmask Nspbr#srcmacmask}
  */
  readonly srcmacmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcport Nspbr#srcport}
  */
  readonly srcport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcportop Nspbr#srcportop}
  */
  readonly srcportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#srcportval Nspbr#srcportval}
  */
  readonly srcportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#state Nspbr#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#targettd Nspbr#targettd}
  */
  readonly targettd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#td Nspbr#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#vlan Nspbr#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#vxlan Nspbr#vxlan}
  */
  readonly vxlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#vxlanvlanmap Nspbr#vxlanvlanmap}
  */
  readonly vxlanvlanmap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr citrixadc_nspbr}
*/
export class Nspbr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nspbr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nspbr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nspbr to import
  * @param importFromId The id of the existing Nspbr that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nspbr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nspbr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nspbr citrixadc_nspbr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NspbrConfig
  */
  public constructor(scope: Construct, id: string, config: NspbrConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nspbr',
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
    this._action = config.action;
    this._destip = config.destip;
    this._destipop = config.destipop;
    this._destipval = config.destipval;
    this._destport = config.destport;
    this._destportop = config.destportop;
    this._destportval = config.destportval;
    this._detail = config.detail;
    this._id = config.id;
    this._interface = config.interface;
    this._iptunnel = config.iptunnel;
    this._iptunnelname = config.iptunnelname;
    this._monitor = config.monitor;
    this._msr = config.msr;
    this._name = config.name;
    this._nexthop = config.nexthop;
    this._nexthopval = config.nexthopval;
    this._ownergroup = config.ownergroup;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._protocolnumber = config.protocolnumber;
    this._srcip = config.srcip;
    this._srcipop = config.srcipop;
    this._srcipval = config.srcipval;
    this._srcmac = config.srcmac;
    this._srcmacmask = config.srcmacmask;
    this._srcport = config.srcport;
    this._srcportop = config.srcportop;
    this._srcportval = config.srcportval;
    this._state = config.state;
    this._targettd = config.targettd;
    this._td = config.td;
    this._vlan = config.vlan;
    this._vxlan = config.vxlan;
    this._vxlanvlanmap = config.vxlanvlanmap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // detail - computed: true, optional: true, required: false
  private _detail?: boolean | cdktf.IResolvable; 
  public get detail() {
    return this.getBooleanAttribute('detail');
  }
  public set detail(value: boolean | cdktf.IResolvable) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
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

  // iptunnel - computed: true, optional: true, required: false
  private _iptunnel?: boolean | cdktf.IResolvable; 
  public get iptunnel() {
    return this.getBooleanAttribute('iptunnel');
  }
  public set iptunnel(value: boolean | cdktf.IResolvable) {
    this._iptunnel = value;
  }
  public resetIptunnel() {
    this._iptunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptunnelInput() {
    return this._iptunnel;
  }

  // iptunnelname - computed: false, optional: true, required: false
  private _iptunnelname?: string; 
  public get iptunnelname() {
    return this.getStringAttribute('iptunnelname');
  }
  public set iptunnelname(value: string) {
    this._iptunnelname = value;
  }
  public resetIptunnelname() {
    this._iptunnelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptunnelnameInput() {
    return this._iptunnelname;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // msr - computed: true, optional: true, required: false
  private _msr?: string; 
  public get msr() {
    return this.getStringAttribute('msr');
  }
  public set msr(value: string) {
    this._msr = value;
  }
  public resetMsr() {
    this._msr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msrInput() {
    return this._msr;
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

  // nexthop - computed: true, optional: true, required: false
  private _nexthop?: boolean | cdktf.IResolvable; 
  public get nexthop() {
    return this.getBooleanAttribute('nexthop');
  }
  public set nexthop(value: boolean | cdktf.IResolvable) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // nexthopval - computed: true, optional: true, required: false
  private _nexthopval?: string; 
  public get nexthopval() {
    return this.getStringAttribute('nexthopval');
  }
  public set nexthopval(value: string) {
    this._nexthopval = value;
  }
  public resetNexthopval() {
    this._nexthopval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopvalInput() {
    return this._nexthopval;
  }

  // ownergroup - computed: true, optional: true, required: false
  private _ownergroup?: string; 
  public get ownergroup() {
    return this.getStringAttribute('ownergroup');
  }
  public set ownergroup(value: string) {
    this._ownergroup = value;
  }
  public resetOwnergroup() {
    this._ownergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownergroupInput() {
    return this._ownergroup;
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

  // targettd - computed: true, optional: true, required: false
  private _targettd?: number; 
  public get targettd() {
    return this.getNumberAttribute('targettd');
  }
  public set targettd(value: number) {
    this._targettd = value;
  }
  public resetTargettd() {
    this._targettd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targettdInput() {
    return this._targettd;
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

  // vxlanvlanmap - computed: true, optional: true, required: false
  private _vxlanvlanmap?: string; 
  public get vxlanvlanmap() {
    return this.getStringAttribute('vxlanvlanmap');
  }
  public set vxlanvlanmap(value: string) {
    this._vxlanvlanmap = value;
  }
  public resetVxlanvlanmap() {
    this._vxlanvlanmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanvlanmapInput() {
    return this._vxlanvlanmap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      destip: cdktf.booleanToTerraform(this._destip),
      destipop: cdktf.stringToTerraform(this._destipop),
      destipval: cdktf.stringToTerraform(this._destipval),
      destport: cdktf.booleanToTerraform(this._destport),
      destportop: cdktf.stringToTerraform(this._destportop),
      destportval: cdktf.stringToTerraform(this._destportval),
      detail: cdktf.booleanToTerraform(this._detail),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      iptunnel: cdktf.booleanToTerraform(this._iptunnel),
      iptunnelname: cdktf.stringToTerraform(this._iptunnelname),
      monitor: cdktf.stringToTerraform(this._monitor),
      msr: cdktf.stringToTerraform(this._msr),
      name: cdktf.stringToTerraform(this._name),
      nexthop: cdktf.booleanToTerraform(this._nexthop),
      nexthopval: cdktf.stringToTerraform(this._nexthopval),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocolnumber: cdktf.numberToTerraform(this._protocolnumber),
      srcip: cdktf.booleanToTerraform(this._srcip),
      srcipop: cdktf.stringToTerraform(this._srcipop),
      srcipval: cdktf.stringToTerraform(this._srcipval),
      srcmac: cdktf.stringToTerraform(this._srcmac),
      srcmacmask: cdktf.stringToTerraform(this._srcmacmask),
      srcport: cdktf.booleanToTerraform(this._srcport),
      srcportop: cdktf.stringToTerraform(this._srcportop),
      srcportval: cdktf.stringToTerraform(this._srcportval),
      state: cdktf.stringToTerraform(this._state),
      targettd: cdktf.numberToTerraform(this._targettd),
      td: cdktf.numberToTerraform(this._td),
      vlan: cdktf.numberToTerraform(this._vlan),
      vxlan: cdktf.numberToTerraform(this._vxlan),
      vxlanvlanmap: cdktf.stringToTerraform(this._vxlanvlanmap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      detail: {
        value: cdktf.booleanToHclTerraform(this._detail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      iptunnel: {
        value: cdktf.booleanToHclTerraform(this._iptunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iptunnelname: {
        value: cdktf.stringToHclTerraform(this._iptunnelname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msr: {
        value: cdktf.stringToHclTerraform(this._msr),
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
      nexthop: {
        value: cdktf.booleanToHclTerraform(this._nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nexthopval: {
        value: cdktf.stringToHclTerraform(this._nexthopval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownergroup: {
        value: cdktf.stringToHclTerraform(this._ownergroup),
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
      srcip: {
        value: cdktf.booleanToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      targettd: {
        value: cdktf.numberToHclTerraform(this._targettd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vxlanvlanmap: {
        value: cdktf.stringToHclTerraform(this._vxlanvlanmap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
