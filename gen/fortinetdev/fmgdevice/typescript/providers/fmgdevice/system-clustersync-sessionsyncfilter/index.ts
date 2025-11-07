// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemClustersyncSessionsyncfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#cluster_sync SystemClustersyncSessionsyncfilter#cluster_sync}
  */
  readonly clusterSync: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#device_name SystemClustersyncSessionsyncfilter#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#dstaddr SystemClustersyncSessionsyncfilter#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#dstaddr6 SystemClustersyncSessionsyncfilter#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#dstintf SystemClustersyncSessionsyncfilter#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#dynamic_sort_subtable SystemClustersyncSessionsyncfilter#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#id SystemClustersyncSessionsyncfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#srcaddr SystemClustersyncSessionsyncfilter#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#srcaddr6 SystemClustersyncSessionsyncfilter#srcaddr6}
  */
  readonly srcaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#srcintf SystemClustersyncSessionsyncfilter#srcintf}
  */
  readonly srcintf?: string;
  /**
  * custom_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#custom_service SystemClustersyncSessionsyncfilter#custom_service}
  */
  readonly customService?: SystemClustersyncSessionsyncfilterCustomService[] | cdktf.IResolvable;
}
export interface SystemClustersyncSessionsyncfilterCustomService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#dst_port_range SystemClustersyncSessionsyncfilter#dst_port_range}
  */
  readonly dstPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#id SystemClustersyncSessionsyncfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#src_port_range SystemClustersyncSessionsyncfilter#src_port_range}
  */
  readonly srcPortRange?: string;
}

export function systemClustersyncSessionsyncfilterCustomServiceToTerraform(struct?: SystemClustersyncSessionsyncfilterCustomService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port_range: cdktf.stringToTerraform(struct!.dstPortRange),
    id: cdktf.numberToTerraform(struct!.id),
    src_port_range: cdktf.stringToTerraform(struct!.srcPortRange),
  }
}


export function systemClustersyncSessionsyncfilterCustomServiceToHclTerraform(struct?: SystemClustersyncSessionsyncfilterCustomService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port_range: {
      value: cdktf.stringToHclTerraform(struct!.dstPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_range: {
      value: cdktf.stringToHclTerraform(struct!.srcPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemClustersyncSessionsyncfilterCustomServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemClustersyncSessionsyncfilterCustomService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortRange = this._dstPortRange;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRange = this._srcPortRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemClustersyncSessionsyncfilterCustomService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstPortRange = undefined;
      this._id = undefined;
      this._srcPortRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstPortRange = value.dstPortRange;
      this._id = value.id;
      this._srcPortRange = value.srcPortRange;
    }
  }

  // dst_port_range - computed: true, optional: true, required: false
  private _dstPortRange?: string; 
  public get dstPortRange() {
    return this.getStringAttribute('dst_port_range');
  }
  public set dstPortRange(value: string) {
    this._dstPortRange = value;
  }
  public resetDstPortRange() {
    this._dstPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortRangeInput() {
    return this._dstPortRange;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src_port_range - computed: true, optional: true, required: false
  private _srcPortRange?: string; 
  public get srcPortRange() {
    return this.getStringAttribute('src_port_range');
  }
  public set srcPortRange(value: string) {
    this._srcPortRange = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange;
  }
}

export class SystemClustersyncSessionsyncfilterCustomServiceList extends cdktf.ComplexList {
  public internalValue? : SystemClustersyncSessionsyncfilterCustomService[] | cdktf.IResolvable

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
  public get(index: number): SystemClustersyncSessionsyncfilterCustomServiceOutputReference {
    return new SystemClustersyncSessionsyncfilterCustomServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter fmgdevice_system_clustersync_sessionsyncfilter}
*/
export class SystemClustersyncSessionsyncfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_clustersync_sessionsyncfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemClustersyncSessionsyncfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemClustersyncSessionsyncfilter to import
  * @param importFromId The id of the existing SystemClustersyncSessionsyncfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemClustersyncSessionsyncfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_clustersync_sessionsyncfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_clustersync_sessionsyncfilter fmgdevice_system_clustersync_sessionsyncfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemClustersyncSessionsyncfilterConfig
  */
  public constructor(scope: Construct, id: string, config: SystemClustersyncSessionsyncfilterConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_clustersync_sessionsyncfilter',
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
    this._clusterSync = config.clusterSync;
    this._deviceName = config.deviceName;
    this._dstaddr = config.dstaddr;
    this._dstaddr6 = config.dstaddr6;
    this._dstintf = config.dstintf;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._srcintf = config.srcintf;
    this._customService.internalValue = config.customService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_sync - computed: false, optional: false, required: true
  private _clusterSync?: string; 
  public get clusterSync() {
    return this.getStringAttribute('cluster_sync');
  }
  public set clusterSync(value: string) {
    this._clusterSync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSyncInput() {
    return this._clusterSync;
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

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return this.getListAttribute('dstaddr');
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

  // dstaddr6 - computed: true, optional: true, required: false
  private _dstaddr6?: string; 
  public get dstaddr6() {
    return this.getStringAttribute('dstaddr6');
  }
  public set dstaddr6(value: string) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
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

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return this.getListAttribute('srcaddr');
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string; 
  public get srcaddr6() {
    return this.getStringAttribute('srcaddr6');
  }
  public set srcaddr6(value: string) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcintf - computed: false, optional: true, required: false
  private _srcintf?: string; 
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
  public set srcintf(value: string) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // custom_service - computed: false, optional: true, required: false
  private _customService = new SystemClustersyncSessionsyncfilterCustomServiceList(this, "custom_service", false);
  public get customService() {
    return this._customService;
  }
  public putCustomService(value: SystemClustersyncSessionsyncfilterCustomService[] | cdktf.IResolvable) {
    this._customService.internalValue = value;
  }
  public resetCustomService() {
    this._customService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceInput() {
    return this._customService.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_sync: cdktf.stringToTerraform(this._clusterSync),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstaddr6: cdktf.stringToTerraform(this._dstaddr6),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr6: cdktf.stringToTerraform(this._srcaddr6),
      srcintf: cdktf.stringToTerraform(this._srcintf),
      custom_service: cdktf.listMapper(systemClustersyncSessionsyncfilterCustomServiceToTerraform, true)(this._customService.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_sync: {
        value: cdktf.stringToHclTerraform(this._clusterSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dstaddr6: {
        value: cdktf.stringToHclTerraform(this._dstaddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      srcaddr6: {
        value: cdktf.stringToHclTerraform(this._srcaddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcintf: {
        value: cdktf.stringToHclTerraform(this._srcintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_service: {
        value: cdktf.listMapperHcl(systemClustersyncSessionsyncfilterCustomServiceToHclTerraform, true)(this._customService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemClustersyncSessionsyncfilterCustomServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
