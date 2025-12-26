// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCwpMachinesSimpleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#id DataTencentcloudCwpMachinesSimple#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The area where the machine belongs,Such as: ap-guangzhou, ap-shanghai, all-regions: All server region types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#machine_region DataTencentcloudCwpMachinesSimple#machine_region}
  */
  readonly machineRegion: string;
  /**
  * Service types. -CVM: Cloud Virtual Machine; -ECM: Edge Computing Machine; -LH: Lighthouse; -Other: Mixed cloud; -ALL: All server types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#machine_type DataTencentcloudCwpMachinesSimple#machine_type}
  */
  readonly machineType: string;
  /**
  * Project id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#project_ids DataTencentcloudCwpMachinesSimple#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#result_output_file DataTencentcloudCwpMachinesSimple#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#filters DataTencentcloudCwpMachinesSimple#filters}
  */
  readonly filters?: DataTencentcloudCwpMachinesSimpleFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudCwpMachinesSimpleMachinesCloudTags {
}

export function dataTencentcloudCwpMachinesSimpleMachinesCloudTagsToTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesCloudTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesSimpleMachinesCloudTagsToHclTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesCloudTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesSimpleMachinesCloudTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesSimpleMachinesCloudTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesSimpleMachinesCloudTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudCwpMachinesSimpleMachinesCloudTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesSimpleMachinesCloudTagsOutputReference {
    return new DataTencentcloudCwpMachinesSimpleMachinesCloudTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesSimpleMachinesLicenseOrder {
}

export function dataTencentcloudCwpMachinesSimpleMachinesLicenseOrderToTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesLicenseOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesSimpleMachinesLicenseOrderToHclTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesLicenseOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesSimpleMachinesLicenseOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesSimpleMachinesLicenseOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesSimpleMachinesLicenseOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_id - computed: true, optional: false, required: false
  public get licenseId() {
    return this.getNumberAttribute('license_id');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getNumberAttribute('license_type');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataTencentcloudCwpMachinesSimpleMachinesLicenseOrderList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesSimpleMachinesLicenseOrderOutputReference {
    return new DataTencentcloudCwpMachinesSimpleMachinesLicenseOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesSimpleMachinesRegionInfo {
}

export function dataTencentcloudCwpMachinesSimpleMachinesRegionInfoToTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesSimpleMachinesRegionInfoToHclTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesSimpleMachinesRegionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesSimpleMachinesRegionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesSimpleMachinesRegionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // region_name_en - computed: true, optional: false, required: false
  public get regionNameEn() {
    return this.getStringAttribute('region_name_en');
  }
}

export class DataTencentcloudCwpMachinesSimpleMachinesRegionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesSimpleMachinesRegionInfoOutputReference {
    return new DataTencentcloudCwpMachinesSimpleMachinesRegionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesSimpleMachinesTag {
}

export function dataTencentcloudCwpMachinesSimpleMachinesTagToTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesSimpleMachinesTagToHclTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachinesTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesSimpleMachinesTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesSimpleMachinesTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesSimpleMachinesTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rid - computed: true, optional: false, required: false
  public get rid() {
    return this.getNumberAttribute('rid');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }
}

export class DataTencentcloudCwpMachinesSimpleMachinesTagList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesSimpleMachinesTagOutputReference {
    return new DataTencentcloudCwpMachinesSimpleMachinesTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesSimpleMachines {
}

export function dataTencentcloudCwpMachinesSimpleMachinesToTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesSimpleMachinesToHclTerraform(struct?: DataTencentcloudCwpMachinesSimpleMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesSimpleMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesSimpleMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesSimpleMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_tags - computed: true, optional: false, required: false
  private _cloudTags = new DataTencentcloudCwpMachinesSimpleMachinesCloudTagsList(this, "cloud_tags", false);
  public get cloudTags() {
    return this._cloudTags;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // is_pro_version - computed: true, optional: false, required: false
  public get isProVersion() {
    return this.getBooleanAttribute('is_pro_version');
  }

  // kernel_version - computed: true, optional: false, required: false
  public get kernelVersion() {
    return this.getStringAttribute('kernel_version');
  }

  // license_order - computed: true, optional: false, required: false
  private _licenseOrder = new DataTencentcloudCwpMachinesSimpleMachinesLicenseOrderList(this, "license_order", false);
  public get licenseOrder() {
    return this._licenseOrder;
  }

  // machine_ip - computed: true, optional: false, required: false
  public get machineIp() {
    return this.getStringAttribute('machine_ip');
  }

  // machine_name - computed: true, optional: false, required: false
  public get machineName() {
    return this.getStringAttribute('machine_name');
  }

  // machine_os - computed: true, optional: false, required: false
  public get machineOs() {
    return this.getStringAttribute('machine_os');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // machine_wan_ip - computed: true, optional: false, required: false
  public get machineWanIp() {
    return this.getStringAttribute('machine_wan_ip');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // protect_type - computed: true, optional: false, required: false
  public get protectType() {
    return this.getStringAttribute('protect_type');
  }

  // quuid - computed: true, optional: false, required: false
  public get quuid() {
    return this.getStringAttribute('quuid');
  }

  // region_info - computed: true, optional: false, required: false
  private _regionInfo = new DataTencentcloudCwpMachinesSimpleMachinesRegionInfoList(this, "region_info", false);
  public get regionInfo() {
    return this._regionInfo;
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataTencentcloudCwpMachinesSimpleMachinesTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataTencentcloudCwpMachinesSimpleMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesSimpleMachinesOutputReference {
    return new DataTencentcloudCwpMachinesSimpleMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesSimpleFilters {
  /**
  * exact match. true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#exact_match DataTencentcloudCwpMachinesSimple#exact_match}
  */
  readonly exactMatch?: boolean | cdktf.IResolvable;
  /**
  * Only supported Keywords, Version and TagId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#name DataTencentcloudCwpMachinesSimple#name}
  */
  readonly name: string;
  /**
  * If `name` is `Keywords`: enter keyword query; If `name` is `Version`: enter PRO_VERSION: Professional Edition | BASIC_VERSION: Basic | Flagship: Flagship | ProtectedMachines: Professional+Flagship | UnFlagship: Non Flagship | PRO_POST_PAY: Professional Edition Pay by Volume | PRO_PRE_PAY: Professional Edition Monthly Package query; If `name` is `TagId`: enter tag ID query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#values DataTencentcloudCwpMachinesSimple#values}
  */
  readonly values: string[];
}

export function dataTencentcloudCwpMachinesSimpleFiltersToTerraform(struct?: DataTencentcloudCwpMachinesSimpleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.booleanToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudCwpMachinesSimpleFiltersToHclTerraform(struct?: DataTencentcloudCwpMachinesSimpleFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.booleanToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudCwpMachinesSimpleFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesSimpleFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesSimpleFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: boolean | cdktf.IResolvable; 
  public get exactMatch() {
    return this.getBooleanAttribute('exact_match');
  }
  public set exactMatch(value: boolean | cdktf.IResolvable) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudCwpMachinesSimpleFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudCwpMachinesSimpleFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudCwpMachinesSimpleFiltersOutputReference {
    return new DataTencentcloudCwpMachinesSimpleFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple tencentcloud_cwp_machines_simple}
*/
export class DataTencentcloudCwpMachinesSimple extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cwp_machines_simple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCwpMachinesSimple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCwpMachinesSimple to import
  * @param importFromId The id of the existing DataTencentcloudCwpMachinesSimple that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCwpMachinesSimple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cwp_machines_simple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines_simple tencentcloud_cwp_machines_simple} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCwpMachinesSimpleConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCwpMachinesSimpleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cwp_machines_simple',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._machineRegion = config.machineRegion;
    this._machineType = config.machineType;
    this._projectIds = config.projectIds;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
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

  // machine_region - computed: false, optional: false, required: true
  private _machineRegion?: string; 
  public get machineRegion() {
    return this.getStringAttribute('machine_region');
  }
  public set machineRegion(value: string) {
    this._machineRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineRegionInput() {
    return this._machineRegion;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // machines - computed: true, optional: false, required: false
  private _machines = new DataTencentcloudCwpMachinesSimpleMachinesList(this, "machines", false);
  public get machines() {
    return this._machines;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: number[]; 
  public get projectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('project_ids')));
  }
  public set projectIds(value: number[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudCwpMachinesSimpleFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudCwpMachinesSimpleFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      machine_region: cdktf.stringToTerraform(this._machineRegion),
      machine_type: cdktf.stringToTerraform(this._machineType),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudCwpMachinesSimpleFiltersToTerraform, true)(this._filters.internalValue),
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
      machine_region: {
        value: cdktf.stringToHclTerraform(this._machineRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudCwpMachinesSimpleFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudCwpMachinesSimpleFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
