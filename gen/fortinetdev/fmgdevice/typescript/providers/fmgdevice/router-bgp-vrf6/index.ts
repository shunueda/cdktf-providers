// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpVrf6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#device_name RouterBgpVrf6A#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#device_vdom RouterBgpVrf6A#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#dynamic_sort_subtable RouterBgpVrf6A#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#export_rt RouterBgpVrf6A#export_rt}
  */
  readonly exportRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#id RouterBgpVrf6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#import_route_map RouterBgpVrf6A#import_route_map}
  */
  readonly importRouteMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#import_rt RouterBgpVrf6A#import_rt}
  */
  readonly importRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#rd RouterBgpVrf6A#rd}
  */
  readonly rd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#role RouterBgpVrf6A#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#vrf RouterBgpVrf6A#vrf}
  */
  readonly vrf?: string;
  /**
  * leak_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#leak_target RouterBgpVrf6A#leak_target}
  */
  readonly leakTarget?: RouterBgpVrf6LeakTargetA[] | cdktf.IResolvable;
}
export interface RouterBgpVrf6LeakTargetA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#interface RouterBgpVrf6A#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#route_map RouterBgpVrf6A#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#vrf RouterBgpVrf6A#vrf}
  */
  readonly vrf?: string;
}

export function routerBgpVrf6LeakTargetAToTerraform(struct?: RouterBgpVrf6LeakTargetA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function routerBgpVrf6LeakTargetAToHclTerraform(struct?: RouterBgpVrf6LeakTargetA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrf6LeakTargetAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrf6LeakTargetA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrf6LeakTargetA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._routeMap = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._routeMap = value.routeMap;
      this._vrf = value.vrf;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
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
}

export class RouterBgpVrf6LeakTargetAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrf6LeakTargetA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrf6LeakTargetAOutputReference {
    return new RouterBgpVrf6LeakTargetAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6 fmgdevice_router_bgp_vrf6}
*/
export class RouterBgpVrf6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_bgp_vrf6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpVrf6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpVrf6A to import
  * @param importFromId The id of the existing RouterBgpVrf6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpVrf6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_bgp_vrf6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp_vrf6 fmgdevice_router_bgp_vrf6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpVrf6AConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBgpVrf6AConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_bgp_vrf6',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._exportRt = config.exportRt;
    this._id = config.id;
    this._importRouteMap = config.importRouteMap;
    this._importRt = config.importRt;
    this._rd = config.rd;
    this._role = config.role;
    this._vrf = config.vrf;
    this._leakTarget.internalValue = config.leakTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // export_rt - computed: true, optional: true, required: false
  private _exportRt?: string[]; 
  public get exportRt() {
    return cdktf.Fn.tolist(this.getListAttribute('export_rt'));
  }
  public set exportRt(value: string[]) {
    this._exportRt = value;
  }
  public resetExportRt() {
    this._exportRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRtInput() {
    return this._exportRt;
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

  // import_route_map - computed: true, optional: true, required: false
  private _importRouteMap?: string[]; 
  public get importRouteMap() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_map'));
  }
  public set importRouteMap(value: string[]) {
    this._importRouteMap = value;
  }
  public resetImportRouteMap() {
    this._importRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteMapInput() {
    return this._importRouteMap;
  }

  // import_rt - computed: true, optional: true, required: false
  private _importRt?: string[]; 
  public get importRt() {
    return cdktf.Fn.tolist(this.getListAttribute('import_rt'));
  }
  public set importRt(value: string[]) {
    this._importRt = value;
  }
  public resetImportRt() {
    this._importRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRtInput() {
    return this._importRt;
  }

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // leak_target - computed: false, optional: true, required: false
  private _leakTarget = new RouterBgpVrf6LeakTargetAList(this, "leak_target", false);
  public get leakTarget() {
    return this._leakTarget;
  }
  public putLeakTarget(value: RouterBgpVrf6LeakTargetA[] | cdktf.IResolvable) {
    this._leakTarget.internalValue = value;
  }
  public resetLeakTarget() {
    this._leakTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakTargetInput() {
    return this._leakTarget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      export_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportRt),
      id: cdktf.stringToTerraform(this._id),
      import_route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importRouteMap),
      import_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importRt),
      rd: cdktf.stringToTerraform(this._rd),
      role: cdktf.stringToTerraform(this._role),
      vrf: cdktf.stringToTerraform(this._vrf),
      leak_target: cdktf.listMapper(routerBgpVrf6LeakTargetAToTerraform, true)(this._leakTarget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_rt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportRt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_route_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importRouteMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      import_rt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importRt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      leak_target: {
        value: cdktf.listMapperHcl(routerBgpVrf6LeakTargetAToHclTerraform, true)(this._leakTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrf6LeakTargetAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
