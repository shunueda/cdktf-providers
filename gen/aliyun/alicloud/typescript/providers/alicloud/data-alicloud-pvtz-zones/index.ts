// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudPvtzZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#enable_details DataAlicloudPvtzZones#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#id DataAlicloudPvtzZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#ids DataAlicloudPvtzZones#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#keyword DataAlicloudPvtzZones#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#lang DataAlicloudPvtzZones#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#name_regex DataAlicloudPvtzZones#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#output_file DataAlicloudPvtzZones#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#query_region_id DataAlicloudPvtzZones#query_region_id}
  */
  readonly queryRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#query_vpc_id DataAlicloudPvtzZones#query_vpc_id}
  */
  readonly queryVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#resource_group_id DataAlicloudPvtzZones#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#search_mode DataAlicloudPvtzZones#search_mode}
  */
  readonly searchMode?: string;
}
export interface DataAlicloudPvtzZonesZonesBindVpcs {
}

export function dataAlicloudPvtzZonesZonesBindVpcsToTerraform(struct?: DataAlicloudPvtzZonesZonesBindVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudPvtzZonesZonesBindVpcsToHclTerraform(struct?: DataAlicloudPvtzZonesZonesBindVpcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudPvtzZonesZonesBindVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudPvtzZonesZonesBindVpcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudPvtzZonesZonesBindVpcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
}

export class DataAlicloudPvtzZonesZonesBindVpcsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudPvtzZonesZonesBindVpcsOutputReference {
    return new DataAlicloudPvtzZonesZonesBindVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudPvtzZonesZones {
}

export function dataAlicloudPvtzZonesZonesToTerraform(struct?: DataAlicloudPvtzZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudPvtzZonesZonesToHclTerraform(struct?: DataAlicloudPvtzZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudPvtzZonesZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudPvtzZonesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudPvtzZonesZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_vpcs - computed: true, optional: false, required: false
  private _bindVpcs = new DataAlicloudPvtzZonesZonesBindVpcsList(this, "bind_vpcs", false);
  public get bindVpcs() {
    return this._bindVpcs;
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getNumberAttribute('create_timestamp');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_ptr - computed: true, optional: false, required: false
  public get isPtr() {
    return this.getBooleanAttribute('is_ptr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // proxy_pattern - computed: true, optional: false, required: false
  public get proxyPattern() {
    return this.getStringAttribute('proxy_pattern');
  }

  // record_count - computed: true, optional: false, required: false
  public get recordCount() {
    return this.getNumberAttribute('record_count');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // slave_dns - computed: true, optional: false, required: false
  public get slaveDns() {
    return this.getBooleanAttribute('slave_dns');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // update_timestamp - computed: true, optional: false, required: false
  public get updateTimestamp() {
    return this.getNumberAttribute('update_timestamp');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class DataAlicloudPvtzZonesZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudPvtzZonesZonesOutputReference {
    return new DataAlicloudPvtzZonesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones alicloud_pvtz_zones}
*/
export class DataAlicloudPvtzZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_pvtz_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudPvtzZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudPvtzZones to import
  * @param importFromId The id of the existing DataAlicloudPvtzZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudPvtzZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_pvtz_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/pvtz_zones alicloud_pvtz_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudPvtzZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudPvtzZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_pvtz_zones',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._keyword = config.keyword;
    this._lang = config.lang;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._queryRegionId = config.queryRegionId;
    this._queryVpcId = config.queryVpcId;
    this._resourceGroupId = config.resourceGroupId;
    this._searchMode = config.searchMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // query_region_id - computed: false, optional: true, required: false
  private _queryRegionId?: string; 
  public get queryRegionId() {
    return this.getStringAttribute('query_region_id');
  }
  public set queryRegionId(value: string) {
    this._queryRegionId = value;
  }
  public resetQueryRegionId() {
    this._queryRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRegionIdInput() {
    return this._queryRegionId;
  }

  // query_vpc_id - computed: false, optional: true, required: false
  private _queryVpcId?: string; 
  public get queryVpcId() {
    return this.getStringAttribute('query_vpc_id');
  }
  public set queryVpcId(value: string) {
    this._queryVpcId = value;
  }
  public resetQueryVpcId() {
    this._queryVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryVpcIdInput() {
    return this._queryVpcId;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // search_mode - computed: false, optional: true, required: false
  private _searchMode?: string; 
  public get searchMode() {
    return this.getStringAttribute('search_mode');
  }
  public set searchMode(value: string) {
    this._searchMode = value;
  }
  public resetSearchMode() {
    this._searchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchModeInput() {
    return this._searchMode;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataAlicloudPvtzZonesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      keyword: cdktf.stringToTerraform(this._keyword),
      lang: cdktf.stringToTerraform(this._lang),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      query_region_id: cdktf.stringToTerraform(this._queryRegionId),
      query_vpc_id: cdktf.stringToTerraform(this._queryVpcId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      search_mode: cdktf.stringToTerraform(this._searchMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_region_id: {
        value: cdktf.stringToHclTerraform(this._queryRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_vpc_id: {
        value: cdktf.stringToHclTerraform(this._queryVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_mode: {
        value: cdktf.stringToHclTerraform(this._searchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
