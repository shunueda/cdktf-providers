// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCwpMachinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#id DataTencentcloudCwpMachines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Machine region. For example, ap-guangzhou and ap-shanghai.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#machine_region DataTencentcloudCwpMachines#machine_region}
  */
  readonly machineRegion: string;
  /**
  * Type of the machine's zone
  * CVM: Cloud Virtual Machine
  * BM: BMECM: Edge Computing Machine
  * LH: Lighthouse
  * Other: Hybrid Cloud Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#machine_type DataTencentcloudCwpMachines#machine_type}
  */
  readonly machineType: string;
  /**
  * ID List of Businesses to which machines belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#project_ids DataTencentcloudCwpMachines#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#result_output_file DataTencentcloudCwpMachines#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#filters DataTencentcloudCwpMachines#filters}
  */
  readonly filters?: DataTencentcloudCwpMachinesFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudCwpMachinesMachinesCloudTags {
}

export function dataTencentcloudCwpMachinesMachinesCloudTagsToTerraform(struct?: DataTencentcloudCwpMachinesMachinesCloudTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesMachinesCloudTagsToHclTerraform(struct?: DataTencentcloudCwpMachinesMachinesCloudTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesMachinesCloudTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesMachinesCloudTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesMachinesCloudTags | undefined) {
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

export class DataTencentcloudCwpMachinesMachinesCloudTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesMachinesCloudTagsOutputReference {
    return new DataTencentcloudCwpMachinesMachinesCloudTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesMachinesMachineExtraInfo {
}

export function dataTencentcloudCwpMachinesMachinesMachineExtraInfoToTerraform(struct?: DataTencentcloudCwpMachinesMachinesMachineExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesMachinesMachineExtraInfoToHclTerraform(struct?: DataTencentcloudCwpMachinesMachinesMachineExtraInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesMachinesMachineExtraInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesMachinesMachineExtraInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesMachinesMachineExtraInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getNumberAttribute('network_type');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // wan_ip - computed: true, optional: false, required: false
  public get wanIp() {
    return this.getStringAttribute('wan_ip');
  }
}

export class DataTencentcloudCwpMachinesMachinesMachineExtraInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesMachinesMachineExtraInfoOutputReference {
    return new DataTencentcloudCwpMachinesMachinesMachineExtraInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesMachinesRegionInfo {
}

export function dataTencentcloudCwpMachinesMachinesRegionInfoToTerraform(struct?: DataTencentcloudCwpMachinesMachinesRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesMachinesRegionInfoToHclTerraform(struct?: DataTencentcloudCwpMachinesMachinesRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesMachinesRegionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesMachinesRegionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesMachinesRegionInfo | undefined) {
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

export class DataTencentcloudCwpMachinesMachinesRegionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesMachinesRegionInfoOutputReference {
    return new DataTencentcloudCwpMachinesMachinesRegionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesMachinesTag {
}

export function dataTencentcloudCwpMachinesMachinesTagToTerraform(struct?: DataTencentcloudCwpMachinesMachinesTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesMachinesTagToHclTerraform(struct?: DataTencentcloudCwpMachinesMachinesTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesMachinesTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesMachinesTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesMachinesTag | undefined) {
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

export class DataTencentcloudCwpMachinesMachinesTagList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesMachinesTagOutputReference {
    return new DataTencentcloudCwpMachinesMachinesTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesMachines {
}

export function dataTencentcloudCwpMachinesMachinesToTerraform(struct?: DataTencentcloudCwpMachinesMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCwpMachinesMachinesToHclTerraform(struct?: DataTencentcloudCwpMachinesMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCwpMachinesMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCwpMachinesMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // baseline_num - computed: true, optional: false, required: false
  public get baselineNum() {
    return this.getNumberAttribute('baseline_num');
  }

  // cloud_tags - computed: true, optional: false, required: false
  private _cloudTags = new DataTencentcloudCwpMachinesMachinesCloudTagsList(this, "cloud_tags", false);
  public get cloudTags() {
    return this._cloudTags;
  }

  // cyber_attack_num - computed: true, optional: false, required: false
  public get cyberAttackNum() {
    return this.getNumberAttribute('cyber_attack_num');
  }

  // has_asset_scan - computed: true, optional: false, required: false
  public get hasAssetScan() {
    return this.getNumberAttribute('has_asset_scan');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // invasion_num - computed: true, optional: false, required: false
  public get invasionNum() {
    return this.getNumberAttribute('invasion_num');
  }

  // ip_list - computed: true, optional: false, required: false
  public get ipList() {
    return this.getStringAttribute('ip_list');
  }

  // is_added_on_the_fifteen - computed: true, optional: false, required: false
  public get isAddedOnTheFifteen() {
    return this.getNumberAttribute('is_added_on_the_fifteen');
  }

  // is_pro_version - computed: true, optional: false, required: false
  public get isProVersion() {
    return this.getBooleanAttribute('is_pro_version');
  }

  // kernel_version - computed: true, optional: false, required: false
  public get kernelVersion() {
    return this.getStringAttribute('kernel_version');
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getNumberAttribute('license_status');
  }

  // machine_extra_info - computed: true, optional: false, required: false
  private _machineExtraInfo = new DataTencentcloudCwpMachinesMachinesMachineExtraInfoList(this, "machine_extra_info", false);
  public get machineExtraInfo() {
    return this._machineExtraInfo;
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

  // machine_status - computed: true, optional: false, required: false
  public get machineStatus() {
    return this.getStringAttribute('machine_status');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // machine_wan_ip - computed: true, optional: false, required: false
  public get machineWanIp() {
    return this.getStringAttribute('machine_wan_ip');
  }

  // malware_num - computed: true, optional: false, required: false
  public get malwareNum() {
    return this.getNumberAttribute('malware_num');
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
  private _regionInfo = new DataTencentcloudCwpMachinesMachinesRegionInfoList(this, "region_info", false);
  public get regionInfo() {
    return this._regionInfo;
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // security_status - computed: true, optional: false, required: false
  public get securityStatus() {
    return this.getStringAttribute('security_status');
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataTencentcloudCwpMachinesMachinesTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vul_num - computed: true, optional: false, required: false
  public get vulNum() {
    return this.getNumberAttribute('vul_num');
  }
}

export class DataTencentcloudCwpMachinesMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCwpMachinesMachinesOutputReference {
    return new DataTencentcloudCwpMachinesMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCwpMachinesFilters {
  /**
  * Fuzzy search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#exact_match DataTencentcloudCwpMachines#exact_match}
  */
  readonly exactMatch?: boolean | cdktf.IResolvable;
  /**
  * Name of filter key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#name DataTencentcloudCwpMachines#name}
  */
  readonly name: string;
  /**
  * One or more filter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#values DataTencentcloudCwpMachines#values}
  */
  readonly values: string[];
}

export function dataTencentcloudCwpMachinesFiltersToTerraform(struct?: DataTencentcloudCwpMachinesFilters | cdktf.IResolvable): any {
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


export function dataTencentcloudCwpMachinesFiltersToHclTerraform(struct?: DataTencentcloudCwpMachinesFilters | cdktf.IResolvable): any {
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

export class DataTencentcloudCwpMachinesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCwpMachinesFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudCwpMachinesFilters | cdktf.IResolvable | undefined) {
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

export class DataTencentcloudCwpMachinesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudCwpMachinesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudCwpMachinesFiltersOutputReference {
    return new DataTencentcloudCwpMachinesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines tencentcloud_cwp_machines}
*/
export class DataTencentcloudCwpMachines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cwp_machines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCwpMachines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCwpMachines to import
  * @param importFromId The id of the existing DataTencentcloudCwpMachines that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCwpMachines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cwp_machines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/cwp_machines tencentcloud_cwp_machines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCwpMachinesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCwpMachinesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cwp_machines',
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
  private _machines = new DataTencentcloudCwpMachinesMachinesList(this, "machines", false);
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
  private _filters = new DataTencentcloudCwpMachinesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudCwpMachinesFilters[] | cdktf.IResolvable) {
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
      filters: cdktf.listMapper(dataTencentcloudCwpMachinesFiltersToTerraform, true)(this._filters.internalValue),
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
        value: cdktf.listMapperHcl(dataTencentcloudCwpMachinesFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudCwpMachinesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
