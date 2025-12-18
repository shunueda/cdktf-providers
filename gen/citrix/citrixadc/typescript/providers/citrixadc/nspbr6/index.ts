// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nspbr6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#action Nspbr6#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#destipop Nspbr6#destipop}
  */
  readonly destipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#destipv6 Nspbr6#destipv6}
  */
  readonly destipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#destipv6val Nspbr6#destipv6val}
  */
  readonly destipv6Val?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#destport Nspbr6#destport}
  */
  readonly destport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#destportop Nspbr6#destportop}
  */
  readonly destportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#destportval Nspbr6#destportval}
  */
  readonly destportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#detail Nspbr6#detail}
  */
  readonly detail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#id Nspbr6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#interface Nspbr6#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#iptunnel Nspbr6#iptunnel}
  */
  readonly iptunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#monitor Nspbr6#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#msr Nspbr6#msr}
  */
  readonly msr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#name Nspbr6#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#nexthop Nspbr6#nexthop}
  */
  readonly nexthop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#nexthopval Nspbr6#nexthopval}
  */
  readonly nexthopval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#nexthopvlan Nspbr6#nexthopvlan}
  */
  readonly nexthopvlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#ownergroup Nspbr6#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#priority Nspbr6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#protocol Nspbr6#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#protocolnumber Nspbr6#protocolnumber}
  */
  readonly protocolnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcipop Nspbr6#srcipop}
  */
  readonly srcipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcipv6 Nspbr6#srcipv6}
  */
  readonly srcipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcipv6val Nspbr6#srcipv6val}
  */
  readonly srcipv6Val?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcmac Nspbr6#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcmacmask Nspbr6#srcmacmask}
  */
  readonly srcmacmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcport Nspbr6#srcport}
  */
  readonly srcport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcportop Nspbr6#srcportop}
  */
  readonly srcportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#srcportval Nspbr6#srcportval}
  */
  readonly srcportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#state Nspbr6#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#td Nspbr6#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#vlan Nspbr6#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#vxlan Nspbr6#vxlan}
  */
  readonly vxlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#vxlanvlanmap Nspbr6#vxlanvlanmap}
  */
  readonly vxlanvlanmap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6 citrixadc_nspbr6}
*/
export class Nspbr6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nspbr6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nspbr6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nspbr6 to import
  * @param importFromId The id of the existing Nspbr6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nspbr6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nspbr6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspbr6 citrixadc_nspbr6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nspbr6Config
  */
  public constructor(scope: Construct, id: string, config: Nspbr6Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nspbr6',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._destipop = config.destipop;
    this._destipv6 = config.destipv6;
    this._destipv6Val = config.destipv6Val;
    this._destport = config.destport;
    this._destportop = config.destportop;
    this._destportval = config.destportval;
    this._detail = config.detail;
    this._id = config.id;
    this._interface = config.interface;
    this._iptunnel = config.iptunnel;
    this._monitor = config.monitor;
    this._msr = config.msr;
    this._name = config.name;
    this._nexthop = config.nexthop;
    this._nexthopval = config.nexthopval;
    this._nexthopvlan = config.nexthopvlan;
    this._ownergroup = config.ownergroup;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._protocolnumber = config.protocolnumber;
    this._srcipop = config.srcipop;
    this._srcipv6 = config.srcipv6;
    this._srcipv6Val = config.srcipv6Val;
    this._srcmac = config.srcmac;
    this._srcmacmask = config.srcmacmask;
    this._srcport = config.srcport;
    this._srcportop = config.srcportop;
    this._srcportval = config.srcportval;
    this._state = config.state;
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
  private _iptunnel?: string; 
  public get iptunnel() {
    return this.getStringAttribute('iptunnel');
  }
  public set iptunnel(value: string) {
    this._iptunnel = value;
  }
  public resetIptunnel() {
    this._iptunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptunnelInput() {
    return this._iptunnel;
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

  // nexthopvlan - computed: true, optional: true, required: false
  private _nexthopvlan?: number; 
  public get nexthopvlan() {
    return this.getNumberAttribute('nexthopvlan');
  }
  public set nexthopvlan(value: number) {
    this._nexthopvlan = value;
  }
  public resetNexthopvlan() {
    this._nexthopvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopvlanInput() {
    return this._nexthopvlan;
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
      destipop: cdktf.stringToTerraform(this._destipop),
      destipv6: cdktf.booleanToTerraform(this._destipv6),
      destipv6val: cdktf.stringToTerraform(this._destipv6Val),
      destport: cdktf.booleanToTerraform(this._destport),
      destportop: cdktf.stringToTerraform(this._destportop),
      destportval: cdktf.stringToTerraform(this._destportval),
      detail: cdktf.booleanToTerraform(this._detail),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      iptunnel: cdktf.stringToTerraform(this._iptunnel),
      monitor: cdktf.stringToTerraform(this._monitor),
      msr: cdktf.stringToTerraform(this._msr),
      name: cdktf.stringToTerraform(this._name),
      nexthop: cdktf.booleanToTerraform(this._nexthop),
      nexthopval: cdktf.stringToTerraform(this._nexthopval),
      nexthopvlan: cdktf.numberToTerraform(this._nexthopvlan),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocolnumber: cdktf.numberToTerraform(this._protocolnumber),
      srcipop: cdktf.stringToTerraform(this._srcipop),
      srcipv6: cdktf.booleanToTerraform(this._srcipv6),
      srcipv6val: cdktf.stringToTerraform(this._srcipv6Val),
      srcmac: cdktf.stringToTerraform(this._srcmac),
      srcmacmask: cdktf.stringToTerraform(this._srcmacmask),
      srcport: cdktf.booleanToTerraform(this._srcport),
      srcportop: cdktf.stringToTerraform(this._srcportop),
      srcportval: cdktf.stringToTerraform(this._srcportval),
      state: cdktf.stringToTerraform(this._state),
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
        value: cdktf.stringToHclTerraform(this._iptunnel),
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
      nexthopvlan: {
        value: cdktf.numberToHclTerraform(this._nexthopvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
