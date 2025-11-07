// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCddcDedicatedHostGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups#engine DataAlicloudCddcDedicatedHostGroups#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups#id DataAlicloudCddcDedicatedHostGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups#ids DataAlicloudCddcDedicatedHostGroups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups#name_regex DataAlicloudCddcDedicatedHostGroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups#output_file DataAlicloudCddcDedicatedHostGroups#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostType {
}

export function dataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeToTerraform(struct?: DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeToHclTerraform(struct?: DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // place_holder - computed: true, optional: false, required: false
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
}

export class DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeOutputReference {
    return new DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStruct {
}

export function dataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructToTerraform(struct?: DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructToHclTerraform(struct?: DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // zone_id_list - computed: true, optional: false, required: false
  public get zoneIdList() {
    return this.getListAttribute('zone_id_list');
  }
}

export class DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructOutputReference {
    return new DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCddcDedicatedHostGroupsGroups {
}

export function dataAlicloudCddcDedicatedHostGroupsGroupsToTerraform(struct?: DataAlicloudCddcDedicatedHostGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCddcDedicatedHostGroupsGroupsToHclTerraform(struct?: DataAlicloudCddcDedicatedHostGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCddcDedicatedHostGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCddcDedicatedHostGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCddcDedicatedHostGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_policy - computed: true, optional: false, required: false
  public get allocationPolicy() {
    return this.getStringAttribute('allocation_policy');
  }

  // bastion_instance_id - computed: true, optional: false, required: false
  public get bastionInstanceId() {
    return this.getStringAttribute('bastion_instance_id');
  }

  // cpu_allocate_ration - computed: true, optional: false, required: false
  public get cpuAllocateRation() {
    return this.getNumberAttribute('cpu_allocate_ration');
  }

  // cpu_allocated_amount - computed: true, optional: false, required: false
  public get cpuAllocatedAmount() {
    return this.getNumberAttribute('cpu_allocated_amount');
  }

  // cpu_allocation_ratio - computed: true, optional: false, required: false
  public get cpuAllocationRatio() {
    return this.getNumberAttribute('cpu_allocation_ratio');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dedicated_host_count_group_by_host_type - computed: true, optional: false, required: false
  private _dedicatedHostCountGroupByHostType = new DataAlicloudCddcDedicatedHostGroupsGroupsDedicatedHostCountGroupByHostTypeList(this, "dedicated_host_count_group_by_host_type", false);
  public get dedicatedHostCountGroupByHostType() {
    return this._dedicatedHostCountGroupByHostType;
  }

  // dedicated_host_group_desc - computed: true, optional: false, required: false
  public get dedicatedHostGroupDesc() {
    return this.getStringAttribute('dedicated_host_group_desc');
  }

  // dedicated_host_group_id - computed: true, optional: false, required: false
  public get dedicatedHostGroupId() {
    return this.getStringAttribute('dedicated_host_group_id');
  }

  // deploy_type - computed: true, optional: false, required: false
  public get deployType() {
    return this.getStringAttribute('deploy_type');
  }

  // disk_allocate_ration - computed: true, optional: false, required: false
  public get diskAllocateRation() {
    return this.getNumberAttribute('disk_allocate_ration');
  }

  // disk_allocated_amount - computed: true, optional: false, required: false
  public get diskAllocatedAmount() {
    return this.getNumberAttribute('disk_allocated_amount');
  }

  // disk_allocation_ratio - computed: true, optional: false, required: false
  public get diskAllocationRatio() {
    return this.getNumberAttribute('disk_allocation_ratio');
  }

  // disk_used_amount - computed: true, optional: false, required: false
  public get diskUsedAmount() {
    return this.getNumberAttribute('disk_used_amount');
  }

  // disk_utility - computed: true, optional: false, required: false
  public get diskUtility() {
    return this.getNumberAttribute('disk_utility');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // host_number - computed: true, optional: false, required: false
  public get hostNumber() {
    return this.getNumberAttribute('host_number');
  }

  // host_replace_policy - computed: true, optional: false, required: false
  public get hostReplacePolicy() {
    return this.getStringAttribute('host_replace_policy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_number - computed: true, optional: false, required: false
  public get instanceNumber() {
    return this.getNumberAttribute('instance_number');
  }

  // mem_allocate_ration - computed: true, optional: false, required: false
  public get memAllocateRation() {
    return this.getNumberAttribute('mem_allocate_ration');
  }

  // mem_allocated_amount - computed: true, optional: false, required: false
  public get memAllocatedAmount() {
    return this.getNumberAttribute('mem_allocated_amount');
  }

  // mem_allocation_ratio - computed: true, optional: false, required: false
  public get memAllocationRatio() {
    return this.getNumberAttribute('mem_allocation_ratio');
  }

  // mem_used_amount - computed: true, optional: false, required: false
  public get memUsedAmount() {
    return this.getNumberAttribute('mem_used_amount');
  }

  // mem_utility - computed: true, optional: false, required: false
  public get memUtility() {
    return this.getNumberAttribute('mem_utility');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_id_list - computed: true, optional: false, required: false
  private _zoneIdList = new DataAlicloudCddcDedicatedHostGroupsGroupsZoneIdListStructList(this, "zone_id_list", false);
  public get zoneIdList() {
    return this._zoneIdList;
  }
}

export class DataAlicloudCddcDedicatedHostGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCddcDedicatedHostGroupsGroupsOutputReference {
    return new DataAlicloudCddcDedicatedHostGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups alicloud_cddc_dedicated_host_groups}
*/
export class DataAlicloudCddcDedicatedHostGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cddc_dedicated_host_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCddcDedicatedHostGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCddcDedicatedHostGroups to import
  * @param importFromId The id of the existing DataAlicloudCddcDedicatedHostGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCddcDedicatedHostGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cddc_dedicated_host_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cddc_dedicated_host_groups alicloud_cddc_dedicated_host_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCddcDedicatedHostGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCddcDedicatedHostGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cddc_dedicated_host_groups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engine = config.engine;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAlicloudCddcDedicatedHostGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: cdktf.stringToTerraform(this._engine),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
