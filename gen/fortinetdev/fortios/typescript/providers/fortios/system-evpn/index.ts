// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemEvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#arp_suppression SystemEvpn#arp_suppression}
  */
  readonly arpSuppression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#dynamic_sort_subtable SystemEvpn#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#fosid SystemEvpn#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#get_all_tables SystemEvpn#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#id SystemEvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#ip_local_learning SystemEvpn#ip_local_learning}
  */
  readonly ipLocalLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#rd SystemEvpn#rd}
  */
  readonly rd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#vdomparam SystemEvpn#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * export_rt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#export_rt SystemEvpn#export_rt}
  */
  readonly exportRt?: SystemEvpnExportRt[] | cdktf.IResolvable;
  /**
  * import_rt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#import_rt SystemEvpn#import_rt}
  */
  readonly importRt?: SystemEvpnImportRt[] | cdktf.IResolvable;
}
export interface SystemEvpnExportRt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#route_target SystemEvpn#route_target}
  */
  readonly routeTarget?: string;
}

export function systemEvpnExportRtToTerraform(struct?: SystemEvpnExportRt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
  }
}


export function systemEvpnExportRtToHclTerraform(struct?: SystemEvpnExportRt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemEvpnExportRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemEvpnExportRt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemEvpnExportRt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
    }
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }
}

export class SystemEvpnExportRtList extends cdktf.ComplexList {
  public internalValue? : SystemEvpnExportRt[] | cdktf.IResolvable

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
  public get(index: number): SystemEvpnExportRtOutputReference {
    return new SystemEvpnExportRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemEvpnImportRt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#route_target SystemEvpn#route_target}
  */
  readonly routeTarget?: string;
}

export function systemEvpnImportRtToTerraform(struct?: SystemEvpnImportRt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
  }
}


export function systemEvpnImportRtToHclTerraform(struct?: SystemEvpnImportRt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemEvpnImportRtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemEvpnImportRt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemEvpnImportRt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeTarget = value.routeTarget;
    }
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }
}

export class SystemEvpnImportRtList extends cdktf.ComplexList {
  public internalValue? : SystemEvpnImportRt[] | cdktf.IResolvable

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
  public get(index: number): SystemEvpnImportRtOutputReference {
    return new SystemEvpnImportRtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn fortios_system_evpn}
*/
export class SystemEvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_evpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemEvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemEvpn to import
  * @param importFromId The id of the existing SystemEvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemEvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_evpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_evpn fortios_system_evpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemEvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemEvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_evpn',
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
    this._arpSuppression = config.arpSuppression;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ipLocalLearning = config.ipLocalLearning;
    this._rd = config.rd;
    this._vdomparam = config.vdomparam;
    this._exportRt.internalValue = config.exportRt;
    this._importRt.internalValue = config.importRt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_suppression - computed: true, optional: true, required: false
  private _arpSuppression?: string; 
  public get arpSuppression() {
    return this.getStringAttribute('arp_suppression');
  }
  public set arpSuppression(value: string) {
    this._arpSuppression = value;
  }
  public resetArpSuppression() {
    this._arpSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSuppressionInput() {
    return this._arpSuppression;
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

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // ip_local_learning - computed: true, optional: true, required: false
  private _ipLocalLearning?: string; 
  public get ipLocalLearning() {
    return this.getStringAttribute('ip_local_learning');
  }
  public set ipLocalLearning(value: string) {
    this._ipLocalLearning = value;
  }
  public resetIpLocalLearning() {
    this._ipLocalLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLocalLearningInput() {
    return this._ipLocalLearning;
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

  // export_rt - computed: false, optional: true, required: false
  private _exportRt = new SystemEvpnExportRtList(this, "export_rt", true);
  public get exportRt() {
    return this._exportRt;
  }
  public putExportRt(value: SystemEvpnExportRt[] | cdktf.IResolvable) {
    this._exportRt.internalValue = value;
  }
  public resetExportRt() {
    this._exportRt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRtInput() {
    return this._exportRt.internalValue;
  }

  // import_rt - computed: false, optional: true, required: false
  private _importRt = new SystemEvpnImportRtList(this, "import_rt", true);
  public get importRt() {
    return this._importRt;
  }
  public putImportRt(value: SystemEvpnImportRt[] | cdktf.IResolvable) {
    this._importRt.internalValue = value;
  }
  public resetImportRt() {
    this._importRt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRtInput() {
    return this._importRt.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_suppression: cdktf.stringToTerraform(this._arpSuppression),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ip_local_learning: cdktf.stringToTerraform(this._ipLocalLearning),
      rd: cdktf.stringToTerraform(this._rd),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      export_rt: cdktf.listMapper(systemEvpnExportRtToTerraform, true)(this._exportRt.internalValue),
      import_rt: cdktf.listMapper(systemEvpnImportRtToTerraform, true)(this._importRt.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_suppression: {
        value: cdktf.stringToHclTerraform(this._arpSuppression),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ip_local_learning: {
        value: cdktf.stringToHclTerraform(this._ipLocalLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_rt: {
        value: cdktf.listMapperHcl(systemEvpnExportRtToHclTerraform, true)(this._exportRt.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemEvpnExportRtList",
      },
      import_rt: {
        value: cdktf.listMapperHcl(systemEvpnImportRtToHclTerraform, true)(this._importRt.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemEvpnImportRtList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
