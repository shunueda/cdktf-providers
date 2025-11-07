// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStatic6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#bfd RouterStatic6#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#blackhole RouterStatic6#blackhole}
  */
  readonly blackhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#comment RouterStatic6#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#device RouterStatic6#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#devindex RouterStatic6#devindex}
  */
  readonly devindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#distance RouterStatic6#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#dst RouterStatic6#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#dstaddr RouterStatic6#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#dynamic_gateway RouterStatic6#dynamic_gateway}
  */
  readonly dynamicGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#dynamic_sort_subtable RouterStatic6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#gateway RouterStatic6#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#get_all_tables RouterStatic6#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#id RouterStatic6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#link_monitor_exempt RouterStatic6#link_monitor_exempt}
  */
  readonly linkMonitorExempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#priority RouterStatic6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#sdwan RouterStatic6#sdwan}
  */
  readonly sdwan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#seq_num RouterStatic6#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#status RouterStatic6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#tag RouterStatic6#tag}
  */
  readonly tag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#vdomparam RouterStatic6#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#virtual_wan_link RouterStatic6#virtual_wan_link}
  */
  readonly virtualWanLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#vrf RouterStatic6#vrf}
  */
  readonly vrf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#weight RouterStatic6#weight}
  */
  readonly weight?: number;
  /**
  * sdwan_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#sdwan_zone RouterStatic6#sdwan_zone}
  */
  readonly sdwanZone?: RouterStatic6SdwanZone[] | cdktf.IResolvable;
}
export interface RouterStatic6SdwanZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#name RouterStatic6#name}
  */
  readonly name?: string;
}

export function routerStatic6SdwanZoneToTerraform(struct?: RouterStatic6SdwanZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerStatic6SdwanZoneToHclTerraform(struct?: RouterStatic6SdwanZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStatic6SdwanZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RouterStatic6SdwanZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStatic6SdwanZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class RouterStatic6SdwanZoneList extends cdktf.ComplexList {
  public internalValue? : RouterStatic6SdwanZone[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RouterStatic6SdwanZoneOutputReference {
    return new RouterStatic6SdwanZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6 fortios_router_static6}
*/
export class RouterStatic6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_static6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStatic6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStatic6 to import
  * @param importFromId The id of the existing RouterStatic6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStatic6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_static6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_static6 fortios_router_static6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStatic6Config
  */
  public constructor(scope: Construct, id: string, config: RouterStatic6Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_static6',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._devindex = config.devindex;
    this._distance = config.distance;
    this._dst = config.dst;
    this._dstaddr = config.dstaddr;
    this._dynamicGateway = config.dynamicGateway;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._gateway = config.gateway;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._linkMonitorExempt = config.linkMonitorExempt;
    this._priority = config.priority;
    this._sdwan = config.sdwan;
    this._seqNum = config.seqNum;
    this._status = config.status;
    this._tag = config.tag;
    this._vdomparam = config.vdomparam;
    this._virtualWanLink = config.virtualWanLink;
    this._vrf = config.vrf;
    this._weight = config.weight;
    this._sdwanZone.internalValue = config.sdwanZone;
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

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // devindex - computed: true, optional: true, required: false
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

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // gateway - computed: true, optional: true, required: false
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
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

  // vrf - computed: true, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
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

  // sdwan_zone - computed: false, optional: true, required: false
  private _sdwanZone = new RouterStatic6SdwanZoneList(this, "sdwan_zone", true);
  public get sdwanZone() {
    return this._sdwanZone;
  }
  public putSdwanZone(value: RouterStatic6SdwanZone[] | cdktf.IResolvable) {
    this._sdwanZone.internalValue = value;
  }
  public resetSdwanZone() {
    this._sdwanZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanZoneInput() {
    return this._sdwanZone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd: cdktf.stringToTerraform(this._bfd),
      blackhole: cdktf.stringToTerraform(this._blackhole),
      comment: cdktf.stringToTerraform(this._comment),
      device: cdktf.stringToTerraform(this._device),
      devindex: cdktf.numberToTerraform(this._devindex),
      distance: cdktf.numberToTerraform(this._distance),
      dst: cdktf.stringToTerraform(this._dst),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      dynamic_gateway: cdktf.stringToTerraform(this._dynamicGateway),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      gateway: cdktf.stringToTerraform(this._gateway),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      link_monitor_exempt: cdktf.stringToTerraform(this._linkMonitorExempt),
      priority: cdktf.numberToTerraform(this._priority),
      sdwan: cdktf.stringToTerraform(this._sdwan),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      status: cdktf.stringToTerraform(this._status),
      tag: cdktf.numberToTerraform(this._tag),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      virtual_wan_link: cdktf.stringToTerraform(this._virtualWanLink),
      vrf: cdktf.numberToTerraform(this._vrf),
      weight: cdktf.numberToTerraform(this._weight),
      sdwan_zone: cdktf.listMapper(routerStatic6SdwanZoneToTerraform, true)(this._sdwanZone.internalValue),
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
        value: cdktf.stringToHclTerraform(this._device),
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
        value: cdktf.stringToHclTerraform(this._dstaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_gateway: {
        value: cdktf.stringToHclTerraform(this._dynamicGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_wan_link: {
        value: cdktf.stringToHclTerraform(this._virtualWanLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.numberToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sdwan_zone: {
        value: cdktf.listMapperHcl(routerStatic6SdwanZoneToHclTerraform, true)(this._sdwanZone.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterStatic6SdwanZoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
