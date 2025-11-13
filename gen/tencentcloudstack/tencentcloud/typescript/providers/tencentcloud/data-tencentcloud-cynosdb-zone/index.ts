// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCynosdbZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone#id DataTencentcloudCynosdbZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is virtual zone included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone#include_virtual_zones DataTencentcloudCynosdbZone#include_virtual_zones}
  */
  readonly includeVirtualZones?: boolean | cdktf.IResolvable;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone#result_output_file DataTencentcloudCynosdbZone#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Whether to display all available zones under the region and display the permissions of each available zone of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone#show_permission DataTencentcloudCynosdbZone#show_permission}
  */
  readonly showPermission?: boolean | cdktf.IResolvable;
}
export interface DataTencentcloudCynosdbZoneRegionSetModules {
}

export function dataTencentcloudCynosdbZoneRegionSetModulesToTerraform(struct?: DataTencentcloudCynosdbZoneRegionSetModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbZoneRegionSetModulesToHclTerraform(struct?: DataTencentcloudCynosdbZoneRegionSetModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbZoneRegionSetModulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudCynosdbZoneRegionSetModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbZoneRegionSetModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_disable - computed: true, optional: false, required: false
  public get isDisable() {
    return this.getStringAttribute('is_disable');
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
}

export class DataTencentcloudCynosdbZoneRegionSetModulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbZoneRegionSetModulesOutputReference {
    return new DataTencentcloudCynosdbZoneRegionSetModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbZoneRegionSetZoneSet {
}

export function dataTencentcloudCynosdbZoneRegionSetZoneSetToTerraform(struct?: DataTencentcloudCynosdbZoneRegionSetZoneSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbZoneRegionSetZoneSetToHclTerraform(struct?: DataTencentcloudCynosdbZoneRegionSetZoneSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbZoneRegionSetZoneSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudCynosdbZoneRegionSetZoneSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbZoneRegionSetZoneSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_permission - computed: true, optional: false, required: false
  public get hasPermission() {
    return this.getBooleanAttribute('has_permission');
  }

  // is_support_normal - computed: true, optional: false, required: false
  public get isSupportNormal() {
    return this.getNumberAttribute('is_support_normal');
  }

  // is_support_serverless - computed: true, optional: false, required: false
  public get isSupportServerless() {
    return this.getNumberAttribute('is_support_serverless');
  }

  // is_whole_rdma_zone - computed: true, optional: false, required: false
  public get isWholeRdmaZone() {
    return this.getStringAttribute('is_whole_rdma_zone');
  }

  // physical_zone - computed: true, optional: false, required: false
  public get physicalZone() {
    return this.getStringAttribute('physical_zone');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }

  // zone_zh - computed: true, optional: false, required: false
  public get zoneZh() {
    return this.getStringAttribute('zone_zh');
  }
}

export class DataTencentcloudCynosdbZoneRegionSetZoneSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbZoneRegionSetZoneSetOutputReference {
    return new DataTencentcloudCynosdbZoneRegionSetZoneSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbZoneRegionSet {
}

export function dataTencentcloudCynosdbZoneRegionSetToTerraform(struct?: DataTencentcloudCynosdbZoneRegionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbZoneRegionSetToHclTerraform(struct?: DataTencentcloudCynosdbZoneRegionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbZoneRegionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudCynosdbZoneRegionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbZoneRegionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataTencentcloudCynosdbZoneRegionSetModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // region_zh - computed: true, optional: false, required: false
  public get regionZh() {
    return this.getStringAttribute('region_zh');
  }

  // zone_set - computed: true, optional: false, required: false
  private _zoneSet = new DataTencentcloudCynosdbZoneRegionSetZoneSetList(this, "zone_set", false);
  public get zoneSet() {
    return this._zoneSet;
  }
}

export class DataTencentcloudCynosdbZoneRegionSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbZoneRegionSetOutputReference {
    return new DataTencentcloudCynosdbZoneRegionSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone tencentcloud_cynosdb_zone}
*/
export class DataTencentcloudCynosdbZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCynosdbZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCynosdbZone to import
  * @param importFromId The id of the existing DataTencentcloudCynosdbZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCynosdbZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cynosdb_zone tencentcloud_cynosdb_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCynosdbZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCynosdbZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_zone',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._includeVirtualZones = config.includeVirtualZones;
    this._resultOutputFile = config.resultOutputFile;
    this._showPermission = config.showPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_virtual_zones - computed: false, optional: true, required: false
  private _includeVirtualZones?: boolean | cdktf.IResolvable; 
  public get includeVirtualZones() {
    return this.getBooleanAttribute('include_virtual_zones');
  }
  public set includeVirtualZones(value: boolean | cdktf.IResolvable) {
    this._includeVirtualZones = value;
  }
  public resetIncludeVirtualZones() {
    this._includeVirtualZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVirtualZonesInput() {
    return this._includeVirtualZones;
  }

  // region_set - computed: true, optional: false, required: false
  private _regionSet = new DataTencentcloudCynosdbZoneRegionSetList(this, "region_set", false);
  public get regionSet() {
    return this._regionSet;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // show_permission - computed: false, optional: true, required: false
  private _showPermission?: boolean | cdktf.IResolvable; 
  public get showPermission() {
    return this.getBooleanAttribute('show_permission');
  }
  public set showPermission(value: boolean | cdktf.IResolvable) {
    this._showPermission = value;
  }
  public resetShowPermission() {
    this._showPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPermissionInput() {
    return this._showPermission;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_virtual_zones: cdktf.booleanToTerraform(this._includeVirtualZones),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      show_permission: cdktf.booleanToTerraform(this._showPermission),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_virtual_zones: {
        value: cdktf.booleanToHclTerraform(this._includeVirtualZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_permission: {
        value: cdktf.booleanToHclTerraform(this._showPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
