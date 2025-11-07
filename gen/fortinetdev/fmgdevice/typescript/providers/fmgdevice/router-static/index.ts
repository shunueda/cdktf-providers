// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#bfd RouterStatic#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#blackhole RouterStatic#blackhole}
  */
  readonly blackhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#comment RouterStatic#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#device RouterStatic#device}
  */
  readonly device?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#device_name RouterStatic#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#device_vdom RouterStatic#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#distance RouterStatic#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#dst RouterStatic#dst}
  */
  readonly dst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#dst_type RouterStatic#dst_type}
  */
  readonly dstType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#dstaddr RouterStatic#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#dynamic_gateway RouterStatic#dynamic_gateway}
  */
  readonly dynamicGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#gateway RouterStatic#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#id RouterStatic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#internet_service RouterStatic#internet_service}
  */
  readonly internetService?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#internet_service_custom RouterStatic#internet_service_custom}
  */
  readonly internetServiceCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#link_monitor_exempt RouterStatic#link_monitor_exempt}
  */
  readonly linkMonitorExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#preferred_source RouterStatic#preferred_source}
  */
  readonly preferredSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#priority RouterStatic#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#sdwan RouterStatic#sdwan}
  */
  readonly sdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#sdwan_zone RouterStatic#sdwan_zone}
  */
  readonly sdwanZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#seq_num RouterStatic#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#src RouterStatic#src}
  */
  readonly src?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#status RouterStatic#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#tag RouterStatic#tag}
  */
  readonly tag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#virtual_wan_link RouterStatic#virtual_wan_link}
  */
  readonly virtualWanLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#vrf RouterStatic#vrf}
  */
  readonly vrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#weight RouterStatic#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static fmgdevice_router_static}
*/
export class RouterStatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_static";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStatic to import
  * @param importFromId The id of the existing RouterStatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_static", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_static fmgdevice_router_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStaticConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterStaticConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_static',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._distance = config.distance;
    this._dst = config.dst;
    this._dstType = config.dstType;
    this._dstaddr = config.dstaddr;
    this._dynamicGateway = config.dynamicGateway;
    this._gateway = config.gateway;
    this._id = config.id;
    this._internetService = config.internetService;
    this._internetServiceCustom = config.internetServiceCustom;
    this._linkMonitorExempt = config.linkMonitorExempt;
    this._preferredSource = config.preferredSource;
    this._priority = config.priority;
    this._sdwan = config.sdwan;
    this._sdwanZone = config.sdwanZone;
    this._seqNum = config.seqNum;
    this._src = config.src;
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
  private _dst?: string[]; 
  public get dst() {
    return this.getListAttribute('dst');
  }
  public set dst(value: string[]) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst_type - computed: false, optional: true, required: false
  private _dstType?: string; 
  public get dstType() {
    return this.getStringAttribute('dst_type');
  }
  public set dstType(value: string) {
    this._dstType = value;
  }
  public resetDstType() {
    this._dstType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTypeInput() {
    return this._dstType;
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

  // internet_service - computed: true, optional: true, required: false
  private _internetService?: string[]; 
  public get internetService() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service'));
  }
  public set internetService(value: string[]) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service_custom - computed: true, optional: true, required: false
  private _internetServiceCustom?: string[]; 
  public get internetServiceCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom'));
  }
  public set internetServiceCustom(value: string[]) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
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

  // preferred_source - computed: true, optional: true, required: false
  private _preferredSource?: string; 
  public get preferredSource() {
    return this.getStringAttribute('preferred_source');
  }
  public set preferredSource(value: string) {
    this._preferredSource = value;
  }
  public resetPreferredSource() {
    this._preferredSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSourceInput() {
    return this._preferredSource;
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

  // sdwan - computed: false, optional: true, required: false
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

  // src - computed: true, optional: true, required: false
  private _src?: string[]; 
  public get src() {
    return this.getListAttribute('src');
  }
  public set src(value: string[]) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
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
      distance: cdktf.numberToTerraform(this._distance),
      dst: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dst),
      dst_type: cdktf.stringToTerraform(this._dstType),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dynamic_gateway: cdktf.stringToTerraform(this._dynamicGateway),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      internet_service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService),
      internet_service_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustom),
      link_monitor_exempt: cdktf.stringToTerraform(this._linkMonitorExempt),
      preferred_source: cdktf.stringToTerraform(this._preferredSource),
      priority: cdktf.numberToTerraform(this._priority),
      sdwan: cdktf.stringToTerraform(this._sdwan),
      sdwan_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdwanZone),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      src: cdktf.listMapper(cdktf.stringToTerraform, false)(this._src),
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
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dst),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dst_type: {
        value: cdktf.stringToHclTerraform(this._dstType),
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
      internet_service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      link_monitor_exempt: {
        value: cdktf.stringToHclTerraform(this._linkMonitorExempt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_source: {
        value: cdktf.stringToHclTerraform(this._preferredSource),
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
      src: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._src),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
