// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStatic6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#bfd RouterStatic6#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#blackhole RouterStatic6#blackhole}
  */
  readonly blackhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#comment RouterStatic6#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#device RouterStatic6#device}
  */
  readonly device?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#device_name RouterStatic6#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#device_vdom RouterStatic6#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#devindex RouterStatic6#devindex}
  */
  readonly devindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#distance RouterStatic6#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#dst RouterStatic6#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#dstaddr RouterStatic6#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#dynamic_gateway RouterStatic6#dynamic_gateway}
  */
  readonly dynamicGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#gateway RouterStatic6#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#id RouterStatic6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#link_monitor_exempt RouterStatic6#link_monitor_exempt}
  */
  readonly linkMonitorExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#priority RouterStatic6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#sdwan RouterStatic6#sdwan}
  */
  readonly sdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#sdwan_zone RouterStatic6#sdwan_zone}
  */
  readonly sdwanZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#seq_num RouterStatic6#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#status RouterStatic6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#tag RouterStatic6#tag}
  */
  readonly tag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#virtual_wan_link RouterStatic6#virtual_wan_link}
  */
  readonly virtualWanLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#vrf RouterStatic6#vrf}
  */
  readonly vrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#weight RouterStatic6#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6 fmgdevice_router_static6}
*/
export class RouterStatic6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_static6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStatic6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStatic6 to import
  * @param importFromId The id of the existing RouterStatic6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStatic6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_static6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static6 fmgdevice_router_static6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStatic6Config = {}
  */
  public constructor(scope: Construct, id: string, config: RouterStatic6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_static6',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfd = config.bfd;
    this._blackhole = config.blackhole;
    this._comment = config.comment;
    this._device = config.device;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._devindex = config.devindex;
    this._distance = config.distance;
    this._dst = config.dst;
    this._dstaddr = config.dstaddr;
    this._dynamicGateway = config.dynamicGateway;
    this._gateway = config.gateway;
    this._id = config.id;
    this._linkMonitorExempt = config.linkMonitorExempt;
    this._priority = config.priority;
    this._sdwan = config.sdwan;
    this._sdwanZone = config.sdwanZone;
    this._seqNum = config.seqNum;
    this._status = config.status;
    this._tag = config.tag;
    this._virtualWanLink = config.virtualWanLink;
    this._vrf = config.vrf;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // blackhole - computed: true, optional: true, required: false
  private _blackhole?: string; 
  public get blackhole() {
    return this.getStringAttribute('blackhole');
  }
  public set blackhole(value: string) {
    this._blackhole = value;
  }
  public resetBlackhole() {
    this._blackhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeInput() {
    return this._blackhole;
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

  // device - computed: true, optional: true, required: false
  private _device?: string[]; 
  public get device() {
    return cdktf.Fn.tolist(this.getListAttribute('device'));
  }
  public set device(value: string[]) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // devindex - computed: false, optional: true, required: false
  private _devindex?: number; 
  public get devindex() {
    return this.getNumberAttribute('devindex');
  }
  public set devindex(value: number) {
    this._devindex = value;
  }
  public resetDevindex() {
    this._devindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devindexInput() {
    return this._devindex;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dynamic_gateway - computed: true, optional: true, required: false
  private _dynamicGateway?: string; 
  public get dynamicGateway() {
    return this.getStringAttribute('dynamic_gateway');
  }
  public set dynamicGateway(value: string) {
    this._dynamicGateway = value;
  }
  public resetDynamicGateway() {
    this._dynamicGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicGatewayInput() {
    return this._dynamicGateway;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // link_monitor_exempt - computed: true, optional: true, required: false
  private _linkMonitorExempt?: string; 
  public get linkMonitorExempt() {
    return this.getStringAttribute('link_monitor_exempt');
  }
  public set linkMonitorExempt(value: string) {
    this._linkMonitorExempt = value;
  }
  public resetLinkMonitorExempt() {
    this._linkMonitorExempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMonitorExemptInput() {
    return this._linkMonitorExempt;
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

  // sdwan - computed: true, optional: true, required: false
  private _sdwan?: string; 
  public get sdwan() {
    return this.getStringAttribute('sdwan');
  }
  public set sdwan(value: string) {
    this._sdwan = value;
  }
  public resetSdwan() {
    this._sdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInput() {
    return this._sdwan;
  }

  // sdwan_zone - computed: true, optional: true, required: false
  private _sdwanZone?: string[]; 
  public get sdwanZone() {
    return cdktf.Fn.tolist(this.getListAttribute('sdwan_zone'));
  }
  public set sdwanZone(value: string[]) {
    this._sdwanZone = value;
  }
  public resetSdwanZone() {
    this._sdwanZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanZoneInput() {
    return this._sdwanZone;
  }

  // seq_num - computed: true, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // virtual_wan_link - computed: false, optional: true, required: false
  private _virtualWanLink?: string; 
  public get virtualWanLink() {
    return this.getStringAttribute('virtual_wan_link');
  }
  public set virtualWanLink(value: string) {
    this._virtualWanLink = value;
  }
  public resetVirtualWanLink() {
    this._virtualWanLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWanLinkInput() {
    return this._virtualWanLink;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd: cdktf.stringToTerraform(this._bfd),
      blackhole: cdktf.stringToTerraform(this._blackhole),
      comment: cdktf.stringToTerraform(this._comment),
      device: cdktf.listMapper(cdktf.stringToTerraform, false)(this._device),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      devindex: cdktf.numberToTerraform(this._devindex),
      distance: cdktf.numberToTerraform(this._distance),
      dst: cdktf.stringToTerraform(this._dst),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dynamic_gateway: cdktf.stringToTerraform(this._dynamicGateway),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      link_monitor_exempt: cdktf.stringToTerraform(this._linkMonitorExempt),
      priority: cdktf.numberToTerraform(this._priority),
      sdwan: cdktf.stringToTerraform(this._sdwan),
      sdwan_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdwanZone),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      status: cdktf.stringToTerraform(this._status),
      tag: cdktf.numberToTerraform(this._tag),
      virtual_wan_link: cdktf.stringToTerraform(this._virtualWanLink),
      vrf: cdktf.stringToTerraform(this._vrf),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blackhole: {
        value: cdktf.stringToHclTerraform(this._blackhole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._device),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devindex: {
        value: cdktf.numberToHclTerraform(this._devindex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_gateway: {
        value: cdktf.stringToHclTerraform(this._dynamicGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      link_monitor_exempt: {
        value: cdktf.stringToHclTerraform(this._linkMonitorExempt),
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
      sdwan: {
        value: cdktf.stringToHclTerraform(this._sdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdwanZone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.numberToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_wan_link: {
        value: cdktf.stringToHclTerraform(this._virtualWanLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
