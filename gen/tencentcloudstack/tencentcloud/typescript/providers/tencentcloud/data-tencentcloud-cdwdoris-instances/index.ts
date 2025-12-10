// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCdwdorisInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#id DataTencentcloudCdwdorisInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#result_output_file DataTencentcloudCdwdorisInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The name of the cluster ID for the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#search_instance_id DataTencentcloudCdwdorisInstances#search_instance_id}
  */
  readonly searchInstanceId?: string;
  /**
  * The cluster name for the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#search_instance_name DataTencentcloudCdwdorisInstances#search_instance_name}
  */
  readonly searchInstanceName?: string;
  /**
  * search_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#search_tags DataTencentcloudCdwdorisInstances#search_tags}
  */
  readonly searchTags?: DataTencentcloudCdwdorisInstancesSearchTags[] | cdktf.IResolvable;
}
export interface DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpec {
}

export function dataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecToTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // disk_desc - computed: true, optional: false, required: false
  public get diskDesc() {
    return this.getStringAttribute('disk_desc');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
}

export class DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecOutputReference {
    return new DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdwdorisInstancesInstancesListCoreSummary {
}

export function dataTencentcloudCdwdorisInstancesInstancesListCoreSummaryToTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListCoreSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwdorisInstancesInstancesListCoreSummaryToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListCoreSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesInstancesListCoreSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesInstancesListCoreSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_cbs_spec - computed: true, optional: false, required: false
  private _attachCbsSpec = new DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryAttachCbsSpecList(this, "attach_cbs_spec", false);
  public get attachCbsSpec() {
    return this._attachCbsSpec;
  }

  // core - computed: true, optional: false, required: false
  public get core() {
    return this.getNumberAttribute('core');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // disk_desc - computed: true, optional: false, required: false
  public get diskDesc() {
    return this.getStringAttribute('disk_desc');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getNumberAttribute('encrypt');
  }

  // max_disk_size - computed: true, optional: false, required: false
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // node_size - computed: true, optional: false, required: false
  public get nodeSize() {
    return this.getNumberAttribute('node_size');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // spec_core - computed: true, optional: false, required: false
  public get specCore() {
    return this.getNumberAttribute('spec_core');
  }

  // spec_memory - computed: true, optional: false, required: false
  public get specMemory() {
    return this.getNumberAttribute('spec_memory');
  }

  // sub_product_type - computed: true, optional: false, required: false
  public get subProductType() {
    return this.getStringAttribute('sub_product_type');
  }
}

export class DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryOutputReference {
    return new DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpec {
}

export function dataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecToTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // disk_desc - computed: true, optional: false, required: false
  public get diskDesc() {
    return this.getStringAttribute('disk_desc');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
}

export class DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecOutputReference {
    return new DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdwdorisInstancesInstancesListMasterSummary {
}

export function dataTencentcloudCdwdorisInstancesInstancesListMasterSummaryToTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListMasterSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwdorisInstancesInstancesListMasterSummaryToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListMasterSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesInstancesListMasterSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesInstancesListMasterSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_cbs_spec - computed: true, optional: false, required: false
  private _attachCbsSpec = new DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryAttachCbsSpecList(this, "attach_cbs_spec", false);
  public get attachCbsSpec() {
    return this._attachCbsSpec;
  }

  // core - computed: true, optional: false, required: false
  public get core() {
    return this.getNumberAttribute('core');
  }

  // disk - computed: true, optional: false, required: false
  public get disk() {
    return this.getNumberAttribute('disk');
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // disk_desc - computed: true, optional: false, required: false
  public get diskDesc() {
    return this.getStringAttribute('disk_desc');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getNumberAttribute('encrypt');
  }

  // max_disk_size - computed: true, optional: false, required: false
  public get maxDiskSize() {
    return this.getNumberAttribute('max_disk_size');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // node_size - computed: true, optional: false, required: false
  public get nodeSize() {
    return this.getNumberAttribute('node_size');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // spec_core - computed: true, optional: false, required: false
  public get specCore() {
    return this.getNumberAttribute('spec_core');
  }

  // spec_memory - computed: true, optional: false, required: false
  public get specMemory() {
    return this.getNumberAttribute('spec_memory');
  }

  // sub_product_type - computed: true, optional: false, required: false
  public get subProductType() {
    return this.getStringAttribute('sub_product_type');
  }
}

export class DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryOutputReference {
    return new DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdwdorisInstancesInstancesListTags {
}

export function dataTencentcloudCdwdorisInstancesInstancesListTagsToTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwdorisInstancesInstancesListTagsToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwdorisInstancesInstancesListTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesInstancesListTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesInstancesListTags | undefined) {
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

export class DataTencentcloudCdwdorisInstancesInstancesListTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwdorisInstancesInstancesListTagsOutputReference {
    return new DataTencentcloudCdwdorisInstancesInstancesListTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdwdorisInstancesInstancesListStruct {
}

export function dataTencentcloudCdwdorisInstancesInstancesListStructToTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCdwdorisInstancesInstancesListStructToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesInstancesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCdwdorisInstancesInstancesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesInstancesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesInstancesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_info - computed: true, optional: false, required: false
  public get accessInfo() {
    return this.getStringAttribute('access_info');
  }

  // bind_s_gs - computed: true, optional: false, required: false
  public get bindSGs() {
    return cdktf.Fn.tolist(this.getListAttribute('bind_s_gs'));
  }

  // build_version - computed: true, optional: false, required: false
  public get buildVersion() {
    return this.getStringAttribute('build_version');
  }

  // can_attach_cbs - computed: true, optional: false, required: false
  public get canAttachCbs() {
    return this.getBooleanAttribute('can_attach_cbs');
  }

  // case_sensitive - computed: true, optional: false, required: false
  public get caseSensitive() {
    return this.getNumberAttribute('case_sensitive');
  }

  // characteristic - computed: true, optional: false, required: false
  public get characteristic() {
    return cdktf.Fn.tolist(this.getListAttribute('characteristic'));
  }

  // cls_log_set_id - computed: true, optional: false, required: false
  public get clsLogSetId() {
    return this.getStringAttribute('cls_log_set_id');
  }

  // cls_topic_id - computed: true, optional: false, required: false
  public get clsTopicId() {
    return this.getStringAttribute('cls_topic_id');
  }

  // components - computed: true, optional: false, required: false
  public get components() {
    return this.getStringAttribute('components');
  }

  // cool_down_bucket - computed: true, optional: false, required: false
  public get coolDownBucket() {
    return this.getStringAttribute('cool_down_bucket');
  }

  // core_summary - computed: true, optional: false, required: false
  private _coreSummary = new DataTencentcloudCdwdorisInstancesInstancesListCoreSummaryList(this, "core_summary", false);
  public get coreSummary() {
    return this._coreSummary;
  }

  // cos_bucket_name - computed: true, optional: false, required: false
  public get cosBucketName() {
    return this.getStringAttribute('cos_bucket_name');
  }

  // cos_move_factor - computed: true, optional: false, required: false
  public get cosMoveFactor() {
    return this.getNumberAttribute('cos_move_factor');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eip - computed: true, optional: false, required: false
  public get eip() {
    return this.getStringAttribute('eip');
  }

  // enable_cool_down - computed: true, optional: false, required: false
  public get enableCoolDown() {
    return this.getNumberAttribute('enable_cool_down');
  }

  // enable_multi_zones - computed: true, optional: false, required: false
  public get enableMultiZones() {
    return this.getBooleanAttribute('enable_multi_zones');
  }

  // enable_xml_config - computed: true, optional: false, required: false
  public get enableXmlConfig() {
    return this.getNumberAttribute('enable_xml_config');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // flow_msg - computed: true, optional: false, required: false
  public get flowMsg() {
    return this.getStringAttribute('flow_msg');
  }

  // grace_shutdown_wait_seconds - computed: true, optional: false, required: false
  public get graceShutdownWaitSeconds() {
    return this.getStringAttribute('grace_shutdown_wait_seconds');
  }

  // ha - computed: true, optional: false, required: false
  public get ha() {
    return this.getStringAttribute('ha');
  }

  // ha_type - computed: true, optional: false, required: false
  public get haType() {
    return this.getNumberAttribute('ha_type');
  }

  // has_cls_topic - computed: true, optional: false, required: false
  public get hasClsTopic() {
    return this.getBooleanAttribute('has_cls_topic');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_white_s_gs - computed: true, optional: false, required: false
  public get isWhiteSGs() {
    return this.getBooleanAttribute('is_white_s_gs');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // master_summary - computed: true, optional: false, required: false
  private _masterSummary = new DataTencentcloudCdwdorisInstancesInstancesListMasterSummaryList(this, "master_summary", false);
  public get masterSummary() {
    return this._masterSummary;
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
  }

  // pay_mode - computed: true, optional: false, required: false
  public get payMode() {
    return this.getStringAttribute('pay_mode');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_desc - computed: true, optional: false, required: false
  public get regionDesc() {
    return this.getStringAttribute('region_desc');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getBooleanAttribute('renew_flag');
  }

  // restart_timeout - computed: true, optional: false, required: false
  public get restartTimeout() {
    return this.getStringAttribute('restart_timeout');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudCdwdorisInstancesInstancesListTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // user_network_infos - computed: true, optional: false, required: false
  public get userNetworkInfos() {
    return this.getStringAttribute('user_network_infos');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // zone_desc - computed: true, optional: false, required: false
  public get zoneDesc() {
    return this.getStringAttribute('zone_desc');
  }
}

export class DataTencentcloudCdwdorisInstancesInstancesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCdwdorisInstancesInstancesListStructOutputReference {
    return new DataTencentcloudCdwdorisInstancesInstancesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCdwdorisInstancesSearchTags {
  /**
  * 1 means only the tag key is entered without a value, and 0 means both the key and the value are entered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#all_value DataTencentcloudCdwdorisInstances#all_value}
  */
  readonly allValue?: number;
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#tag_key DataTencentcloudCdwdorisInstances#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#tag_value DataTencentcloudCdwdorisInstances#tag_value}
  */
  readonly tagValue?: string;
}

export function dataTencentcloudCdwdorisInstancesSearchTagsToTerraform(struct?: DataTencentcloudCdwdorisInstancesSearchTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_value: cdktf.numberToTerraform(struct!.allValue),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dataTencentcloudCdwdorisInstancesSearchTagsToHclTerraform(struct?: DataTencentcloudCdwdorisInstancesSearchTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_value: {
      value: cdktf.numberToHclTerraform(struct!.allValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudCdwdorisInstancesSearchTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCdwdorisInstancesSearchTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allValue = this._allValue;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCdwdorisInstancesSearchTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allValue = value.allValue;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // all_value - computed: false, optional: true, required: false
  private _allValue?: number; 
  public get allValue() {
    return this.getNumberAttribute('all_value');
  }
  public set allValue(value: number) {
    this._allValue = value;
  }
  public resetAllValue() {
    this._allValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allValueInput() {
    return this._allValue;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DataTencentcloudCdwdorisInstancesSearchTagsList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudCdwdorisInstancesSearchTags[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudCdwdorisInstancesSearchTagsOutputReference {
    return new DataTencentcloudCdwdorisInstancesSearchTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances tencentcloud_cdwdoris_instances}
*/
export class DataTencentcloudCdwdorisInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdwdoris_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCdwdorisInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCdwdorisInstances to import
  * @param importFromId The id of the existing DataTencentcloudCdwdorisInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCdwdorisInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdwdoris_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/cdwdoris_instances tencentcloud_cdwdoris_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCdwdorisInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCdwdorisInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdwdoris_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._resultOutputFile = config.resultOutputFile;
    this._searchInstanceId = config.searchInstanceId;
    this._searchInstanceName = config.searchInstanceName;
    this._searchTags.internalValue = config.searchTags;
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

  // instances_list - computed: true, optional: false, required: false
  private _instancesList = new DataTencentcloudCdwdorisInstancesInstancesListStructList(this, "instances_list", false);
  public get instancesList() {
    return this._instancesList;
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

  // search_instance_id - computed: false, optional: true, required: false
  private _searchInstanceId?: string; 
  public get searchInstanceId() {
    return this.getStringAttribute('search_instance_id');
  }
  public set searchInstanceId(value: string) {
    this._searchInstanceId = value;
  }
  public resetSearchInstanceId() {
    this._searchInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInstanceIdInput() {
    return this._searchInstanceId;
  }

  // search_instance_name - computed: false, optional: true, required: false
  private _searchInstanceName?: string; 
  public get searchInstanceName() {
    return this.getStringAttribute('search_instance_name');
  }
  public set searchInstanceName(value: string) {
    this._searchInstanceName = value;
  }
  public resetSearchInstanceName() {
    this._searchInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInstanceNameInput() {
    return this._searchInstanceName;
  }

  // search_tags - computed: false, optional: true, required: false
  private _searchTags = new DataTencentcloudCdwdorisInstancesSearchTagsList(this, "search_tags", false);
  public get searchTags() {
    return this._searchTags;
  }
  public putSearchTags(value: DataTencentcloudCdwdorisInstancesSearchTags[] | cdktf.IResolvable) {
    this._searchTags.internalValue = value;
  }
  public resetSearchTags() {
    this._searchTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTagsInput() {
    return this._searchTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_instance_id: cdktf.stringToTerraform(this._searchInstanceId),
      search_instance_name: cdktf.stringToTerraform(this._searchInstanceName),
      search_tags: cdktf.listMapper(dataTencentcloudCdwdorisInstancesSearchTagsToTerraform, true)(this._searchTags.internalValue),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_instance_id: {
        value: cdktf.stringToHclTerraform(this._searchInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_instance_name: {
        value: cdktf.stringToHclTerraform(this._searchInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_tags: {
        value: cdktf.listMapperHcl(dataTencentcloudCdwdorisInstancesSearchTagsToHclTerraform, true)(this._searchTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudCdwdorisInstancesSearchTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
