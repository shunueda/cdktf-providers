// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPtsScenarioWithJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to use ascending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#ascend DataTencentcloudPtsScenarioWithJobs#ascend}
  */
  readonly ascend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#id DataTencentcloudPtsScenarioWithJobs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to ignore the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#ignore_dataset DataTencentcloudPtsScenarioWithJobs#ignore_dataset}
  */
  readonly ignoreDataset?: boolean | cdktf.IResolvable;
  /**
  * Whether to ignore the script content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#ignore_script DataTencentcloudPtsScenarioWithJobs#ignore_script}
  */
  readonly ignoreScript?: boolean | cdktf.IResolvable;
  /**
  * The field column used for ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#order_by DataTencentcloudPtsScenarioWithJobs#order_by}
  */
  readonly orderBy?: string;
  /**
  * The job owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#owner DataTencentcloudPtsScenarioWithJobs#owner}
  */
  readonly owner?: string;
  /**
  * Project ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#project_ids DataTencentcloudPtsScenarioWithJobs#project_ids}
  */
  readonly projectIds: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#result_output_file DataTencentcloudPtsScenarioWithJobs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Scenario ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#scenario_ids DataTencentcloudPtsScenarioWithJobs#scenario_ids}
  */
  readonly scenarioIds?: string[];
  /**
  * Scenario name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#scenario_name DataTencentcloudPtsScenarioWithJobs#scenario_name}
  */
  readonly scenarioName?: string;
  /**
  * Scenario type, e.g.: pts-http, pts-js, pts-trpc, pts-jmeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#scenario_type DataTencentcloudPtsScenarioWithJobs#scenario_type}
  */
  readonly scenarioType?: string;
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasets {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // head_lines - computed: true, optional: false, required: false
  public get headLines() {
    return cdktf.Fn.tolist(this.getListAttribute('head_lines'));
  }

  // header_columns - computed: true, optional: false, required: false
  public get headerColumns() {
    return cdktf.Fn.tolist(this.getListAttribute('header_columns'));
  }

  // header_in_file - computed: true, optional: false, required: false
  public get headerInFile() {
    return this.getBooleanAttribute('header_in_file');
  }

  // line_count - computed: true, optional: false, required: false
  public get lineCount() {
    return this.getNumberAttribute('line_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // split - computed: true, optional: false, required: false
  public get split() {
    return this.getBooleanAttribute('split');
  }

  // tail_lines - computed: true, optional: false, required: false
  public get tailLines() {
    return cdktf.Fn.tolist(this.getListAttribute('tail_lines'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfig {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliases {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_names - computed: true, optional: false, required: false
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfig {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // host_aliases - computed: true, optional: false, required: false
  private _hostAliases = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistribution {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStages {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // target_virtual_users - computed: true, optional: false, required: false
  public get targetVirtualUsers() {
    return this.getNumberAttribute('target_virtual_users');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrency {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // graceful_stop_seconds - computed: true, optional: false, required: false
  public get gracefulStopSeconds() {
    return this.getNumberAttribute('graceful_stop_seconds');
  }

  // iteration_count - computed: true, optional: false, required: false
  public get iterationCount() {
    return this.getNumberAttribute('iteration_count');
  }

  // max_requests_per_second - computed: true, optional: false, required: false
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getNumberAttribute('resources');
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecond {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // graceful_stop_seconds - computed: true, optional: false, required: false
  public get gracefulStopSeconds() {
    return this.getNumberAttribute('graceful_stop_seconds');
  }

  // max_requests_per_second - computed: true, optional: false, required: false
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getNumberAttribute('resources');
  }

  // start_requests_per_second - computed: true, optional: false, required: false
  public get startRequestsPerSecond() {
    return this.getNumberAttribute('start_requests_per_second');
  }

  // target_requests_per_second - computed: true, optional: false, required: false
  public get targetRequestsPerSecond() {
    return this.getNumberAttribute('target_requests_per_second');
  }

  // target_virtual_users - computed: true, optional: false, required: false
  public get targetVirtualUsers() {
    return this.getNumberAttribute('target_virtual_users');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOrigin {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // machine_number - computed: true, optional: false, required: false
  public get machineNumber() {
    return this.getNumberAttribute('machine_number');
  }

  // machine_specification - computed: true, optional: false, required: false
  public get machineSpecification() {
    return this.getStringAttribute('machine_specification');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpec {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency - computed: true, optional: false, required: false
  private _concurrency = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecConcurrencyList(this, "concurrency", false);
  public get concurrency() {
    return this._concurrency;
  }

  // requests_per_second - computed: true, optional: false, required: false
  private _requestsPerSecond = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecRequestsPerSecondList(this, "requests_per_second", false);
  public get requestsPerSecond() {
    return this._requestsPerSecond;
  }

  // script_origin - computed: true, optional: false, required: false
  private _scriptOrigin = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecScriptOriginList(this, "script_origin", false);
  public get scriptOrigin() {
    return this._scriptOrigin;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistribution {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistribution | undefined) {
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoad {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_regions_load_distribution - computed: true, optional: false, required: false
  private _geoRegionsLoadDistribution = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadGeoRegionsLoadDistributionList(this, "geo_regions_load_distribution", false);
  public get geoRegionsLoadDistribution() {
    return this._geoRegionsLoadDistribution;
  }

  // load_spec - computed: true, optional: false, required: false
  private _loadSpec = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadLoadSpecList(this, "load_spec", false);
  public get loadSpec() {
    return this._loadSpec;
  }

  // vpc_load_distribution - computed: true, optional: false, required: false
  private _vpcLoadDistribution = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadVpcLoadDistributionList(this, "vpc_load_distribution", false);
  public get vpcLoadDistribution() {
    return this._vpcLoadDistribution;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfos {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // pod_name - computed: true, optional: false, required: false
  public get podName() {
    return this.getStringAttribute('pod_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSources {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // pod_name - computed: true, optional: false, required: false
  public get podName() {
    return this.getStringAttribute('pod_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooks {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPlugins {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocols {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFiles {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScripts {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoded_content - computed: true, optional: false, required: false
  public get encodedContent() {
    return this.getStringAttribute('encoded_content');
  }

  // encoded_http_archive - computed: true, optional: false, required: false
  public get encodedHttpArchive() {
    return this.getStringAttribute('encoded_http_archive');
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // load_weight - computed: true, optional: false, required: false
  public get loadWeight() {
    return this.getNumberAttribute('load_weight');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobs {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_reason - computed: true, optional: false, required: false
  public get abortReason() {
    return this.getNumberAttribute('abort_reason');
  }

  // configs - computed: true, optional: false, required: false
  public get configs() {
    return cdktf.Fn.tolist(this.getListAttribute('configs'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cron_id - computed: true, optional: false, required: false
  public get cronId() {
    return this.getStringAttribute('cron_id');
  }

  // datasets - computed: true, optional: false, required: false
  private _datasets = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDatasetsList(this, "datasets", false);
  public get datasets() {
    return this._datasets;
  }

  // debug - computed: true, optional: false, required: false
  public get debug() {
    return this.getBooleanAttribute('debug');
  }

  // domain_name_config - computed: true, optional: false, required: false
  private _domainNameConfig = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsDomainNameConfigList(this, "domain_name_config", false);
  public get domainNameConfig() {
    return this._domainNameConfig;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error_rate - computed: true, optional: false, required: false
  public get errorRate() {
    return this.getNumberAttribute('error_rate');
  }

  // extensions - computed: true, optional: false, required: false
  public get extensions() {
    return cdktf.Fn.tolist(this.getListAttribute('extensions'));
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_owner - computed: true, optional: false, required: false
  public get jobOwner() {
    return this.getStringAttribute('job_owner');
  }

  // load - computed: true, optional: false, required: false
  private _load = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadList(this, "load", false);
  public get load() {
    return this._load;
  }

  // load_source_infos - computed: true, optional: false, required: false
  private _loadSourceInfos = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourceInfosList(this, "load_source_infos", false);
  public get loadSourceInfos() {
    return this._loadSourceInfos;
  }

  // load_sources - computed: true, optional: false, required: false
  private _loadSources = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsLoadSourcesList(this, "load_sources", false);
  public get loadSources() {
    return this._loadSources;
  }

  // max_requests_per_second - computed: true, optional: false, required: false
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }

  // max_virtual_user_count - computed: true, optional: false, required: false
  public get maxVirtualUserCount() {
    return this.getNumberAttribute('max_virtual_user_count');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // network_receive_rate - computed: true, optional: false, required: false
  public get networkReceiveRate() {
    return this.getNumberAttribute('network_receive_rate');
  }

  // network_send_rate - computed: true, optional: false, required: false
  public get networkSendRate() {
    return this.getNumberAttribute('network_send_rate');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // notification_hooks - computed: true, optional: false, required: false
  private _notificationHooks = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsNotificationHooksList(this, "notification_hooks", false);
  public get notificationHooks() {
    return this._notificationHooks;
  }

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // protocols - computed: true, optional: false, required: false
  private _protocols = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }

  // request_files - computed: true, optional: false, required: false
  private _requestFiles = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsRequestFilesList(this, "request_files", false);
  public get requestFiles() {
    return this._requestFiles;
  }

  // request_total - computed: true, optional: false, required: false
  public get requestTotal() {
    return this.getNumberAttribute('request_total');
  }

  // requests_per_second - computed: true, optional: false, required: false
  public get requestsPerSecond() {
    return this.getNumberAttribute('requests_per_second');
  }

  // response_time_average - computed: true, optional: false, required: false
  public get responseTimeAverage() {
    return this.getNumberAttribute('response_time_average');
  }

  // response_time_max - computed: true, optional: false, required: false
  public get responseTimeMax() {
    return this.getNumberAttribute('response_time_max');
  }

  // response_time_min - computed: true, optional: false, required: false
  public get responseTimeMin() {
    return this.getNumberAttribute('response_time_min');
  }

  // response_time_p90 - computed: true, optional: false, required: false
  public get responseTimeP90() {
    return this.getNumberAttribute('response_time_p90');
  }

  // response_time_p95 - computed: true, optional: false, required: false
  public get responseTimeP95() {
    return this.getNumberAttribute('response_time_p95');
  }

  // response_time_p99 - computed: true, optional: false, required: false
  public get responseTimeP99() {
    return this.getNumberAttribute('response_time_p99');
  }

  // scenario_id - computed: true, optional: false, required: false
  public get scenarioId() {
    return this.getStringAttribute('scenario_id');
  }

  // scenario_name - computed: true, optional: false, required: false
  public get scenarioName() {
    return this.getStringAttribute('scenario_name');
  }

  // scripts - computed: true, optional: false, required: false
  public get scripts() {
    return cdktf.Fn.tolist(this.getListAttribute('scripts'));
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // test_scripts - computed: true, optional: false, required: false
  private _testScripts = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsTestScriptsList(this, "test_scripts", false);
  public get testScripts() {
    return this._testScripts;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasets {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // head_lines - computed: true, optional: false, required: false
  public get headLines() {
    return cdktf.Fn.tolist(this.getListAttribute('head_lines'));
  }

  // header_columns - computed: true, optional: false, required: false
  public get headerColumns() {
    return cdktf.Fn.tolist(this.getListAttribute('header_columns'));
  }

  // header_in_file - computed: true, optional: false, required: false
  public get headerInFile() {
    return this.getBooleanAttribute('header_in_file');
  }

  // line_count - computed: true, optional: false, required: false
  public get lineCount() {
    return this.getNumberAttribute('line_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // split - computed: true, optional: false, required: false
  public get split() {
    return this.getBooleanAttribute('split');
  }

  // tail_lines - computed: true, optional: false, required: false
  public get tailLines() {
    return cdktf.Fn.tolist(this.getListAttribute('tail_lines'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfig {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliases {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_names - computed: true, optional: false, required: false
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfig {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // host_aliases - computed: true, optional: false, required: false
  private _hostAliases = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistribution {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStages {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // target_virtual_users - computed: true, optional: false, required: false
  public get targetVirtualUsers() {
    return this.getNumberAttribute('target_virtual_users');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrency {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // graceful_stop_seconds - computed: true, optional: false, required: false
  public get gracefulStopSeconds() {
    return this.getNumberAttribute('graceful_stop_seconds');
  }

  // iteration_count - computed: true, optional: false, required: false
  public get iterationCount() {
    return this.getNumberAttribute('iteration_count');
  }

  // max_requests_per_second - computed: true, optional: false, required: false
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getNumberAttribute('resources');
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecond {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // graceful_stop_seconds - computed: true, optional: false, required: false
  public get gracefulStopSeconds() {
    return this.getNumberAttribute('graceful_stop_seconds');
  }

  // max_requests_per_second - computed: true, optional: false, required: false
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getNumberAttribute('resources');
  }

  // start_requests_per_second - computed: true, optional: false, required: false
  public get startRequestsPerSecond() {
    return this.getNumberAttribute('start_requests_per_second');
  }

  // target_requests_per_second - computed: true, optional: false, required: false
  public get targetRequestsPerSecond() {
    return this.getNumberAttribute('target_requests_per_second');
  }

  // target_virtual_users - computed: true, optional: false, required: false
  public get targetVirtualUsers() {
    return this.getNumberAttribute('target_virtual_users');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOrigin {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // machine_number - computed: true, optional: false, required: false
  public get machineNumber() {
    return this.getNumberAttribute('machine_number');
  }

  // machine_specification - computed: true, optional: false, required: false
  public get machineSpecification() {
    return this.getStringAttribute('machine_specification');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpec {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency - computed: true, optional: false, required: false
  private _concurrency = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecConcurrencyList(this, "concurrency", false);
  public get concurrency() {
    return this._concurrency;
  }

  // requests_per_second - computed: true, optional: false, required: false
  private _requestsPerSecond = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecRequestsPerSecondList(this, "requests_per_second", false);
  public get requestsPerSecond() {
    return this._requestsPerSecond;
  }

  // script_origin - computed: true, optional: false, required: false
  private _scriptOrigin = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecScriptOriginList(this, "script_origin", false);
  public get scriptOrigin() {
    return this._scriptOrigin;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistribution {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistribution | undefined) {
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoad {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_regions_load_distribution - computed: true, optional: false, required: false
  private _geoRegionsLoadDistribution = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadGeoRegionsLoadDistributionList(this, "geo_regions_load_distribution", false);
  public get geoRegionsLoadDistribution() {
    return this._geoRegionsLoadDistribution;
  }

  // load_spec - computed: true, optional: false, required: false
  private _loadSpec = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadLoadSpecList(this, "load_spec", false);
  public get loadSpec() {
    return this._loadSpec;
  }

  // vpc_load_distribution - computed: true, optional: false, required: false
  private _vpcLoadDistribution = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadVpcLoadDistributionList(this, "vpc_load_distribution", false);
  public get vpcLoadDistribution() {
    return this._vpcLoadDistribution;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooks {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPlugins {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocols {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFiles {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannel {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amp_consumer_id - computed: true, optional: false, required: false
  public get ampConsumerId() {
    return this.getStringAttribute('amp_consumer_id');
  }

  // notice_id - computed: true, optional: false, required: false
  public get noticeId() {
    return this.getStringAttribute('notice_id');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilter {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_name - computed: true, optional: false, required: false
  public get labelName() {
    return this.getStringAttribute('label_name');
  }

  // label_value - computed: true, optional: false, required: false
  public get labelValue() {
    return this.getStringAttribute('label_value');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRules {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_flag - computed: true, optional: false, required: false
  public get abortFlag() {
    return this.getBooleanAttribute('abort_flag');
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // for - computed: true, optional: false, required: false
  public get for() {
    return this.getStringAttribute('for');
  }

  // label_filter - computed: true, optional: false, required: false
  private _labelFilter = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesLabelFilterList(this, "label_filter", false);
  public get labelFilter() {
    return this._labelFilter;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicy {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_channel - computed: true, optional: false, required: false
  private _alertChannel = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyAlertChannelList(this, "alert_channel", false);
  public get alertChannel() {
    return this._alertChannel;
  }

  // sla_rules - computed: true, optional: false, required: false
  private _slaRules = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicySlaRulesList(this, "sla_rules", false);
  public get slaRules() {
    return this._slaRules;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScripts {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoded_content - computed: true, optional: false, required: false
  public get encodedContent() {
    return this.getStringAttribute('encoded_content');
  }

  // encoded_http_archive - computed: true, optional: false, required: false
  public get encodedHttpArchive() {
    return this.getStringAttribute('encoded_http_archive');
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // load_weight - computed: true, optional: false, required: false
  public get loadWeight() {
    return this.getNumberAttribute('load_weight');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenario {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenario): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenario): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // configs - computed: true, optional: false, required: false
  public get configs() {
    return cdktf.Fn.tolist(this.getListAttribute('configs'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cron_id - computed: true, optional: false, required: false
  public get cronId() {
    return this.getStringAttribute('cron_id');
  }

  // datasets - computed: true, optional: false, required: false
  private _datasets = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDatasetsList(this, "datasets", false);
  public get datasets() {
    return this._datasets;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name_config - computed: true, optional: false, required: false
  private _domainNameConfig = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioDomainNameConfigList(this, "domain_name_config", false);
  public get domainNameConfig() {
    return this._domainNameConfig;
  }

  // encoded_scripts - computed: true, optional: false, required: false
  public get encodedScripts() {
    return this.getStringAttribute('encoded_scripts');
  }

  // extensions - computed: true, optional: false, required: false
  public get extensions() {
    return cdktf.Fn.tolist(this.getListAttribute('extensions'));
  }

  // load - computed: true, optional: false, required: false
  private _load = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioLoadList(this, "load", false);
  public get load() {
    return this._load;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_hooks - computed: true, optional: false, required: false
  private _notificationHooks = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioNotificationHooksList(this, "notification_hooks", false);
  public get notificationHooks() {
    return this._notificationHooks;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // protocols - computed: true, optional: false, required: false
  private _protocols = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }

  // request_files - computed: true, optional: false, required: false
  private _requestFiles = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioRequestFilesList(this, "request_files", false);
  public get requestFiles() {
    return this._requestFiles;
  }

  // scenario_id - computed: true, optional: false, required: false
  public get scenarioId() {
    return this.getStringAttribute('scenario_id');
  }

  // sla_id - computed: true, optional: false, required: false
  public get slaId() {
    return this.getStringAttribute('sla_id');
  }

  // sla_policy - computed: true, optional: false, required: false
  private _slaPolicy = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioSlaPolicyList(this, "sla_policy", false);
  public get slaPolicy() {
    return this._slaPolicy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_account_uin - computed: true, optional: false, required: false
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
  }

  // test_scripts - computed: true, optional: false, required: false
  private _testScripts = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioTestScriptsList(this, "test_scripts", false);
  public get testScripts() {
    return this._testScripts;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSet {
}

export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetToTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetToHclTerraform(struct?: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }

  // scenario - computed: true, optional: false, required: false
  private _scenario = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetScenarioList(this, "scenario", false);
  public get scenario() {
    return this._scenario;
  }
}

export class DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetOutputReference {
    return new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs tencentcloud_pts_scenario_with_jobs}
*/
export class DataTencentcloudPtsScenarioWithJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_scenario_with_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPtsScenarioWithJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPtsScenarioWithJobs to import
  * @param importFromId The id of the existing DataTencentcloudPtsScenarioWithJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPtsScenarioWithJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_scenario_with_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/pts_scenario_with_jobs tencentcloud_pts_scenario_with_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPtsScenarioWithJobsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPtsScenarioWithJobsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_scenario_with_jobs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ascend = config.ascend;
    this._id = config.id;
    this._ignoreDataset = config.ignoreDataset;
    this._ignoreScript = config.ignoreScript;
    this._orderBy = config.orderBy;
    this._owner = config.owner;
    this._projectIds = config.projectIds;
    this._resultOutputFile = config.resultOutputFile;
    this._scenarioIds = config.scenarioIds;
    this._scenarioName = config.scenarioName;
    this._scenarioType = config.scenarioType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ascend - computed: false, optional: true, required: false
  private _ascend?: boolean | cdktf.IResolvable; 
  public get ascend() {
    return this.getBooleanAttribute('ascend');
  }
  public set ascend(value: boolean | cdktf.IResolvable) {
    this._ascend = value;
  }
  public resetAscend() {
    this._ascend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascendInput() {
    return this._ascend;
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

  // ignore_dataset - computed: false, optional: true, required: false
  private _ignoreDataset?: boolean | cdktf.IResolvable; 
  public get ignoreDataset() {
    return this.getBooleanAttribute('ignore_dataset');
  }
  public set ignoreDataset(value: boolean | cdktf.IResolvable) {
    this._ignoreDataset = value;
  }
  public resetIgnoreDataset() {
    this._ignoreDataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDatasetInput() {
    return this._ignoreDataset;
  }

  // ignore_script - computed: false, optional: true, required: false
  private _ignoreScript?: boolean | cdktf.IResolvable; 
  public get ignoreScript() {
    return this.getBooleanAttribute('ignore_script');
  }
  public set ignoreScript(value: boolean | cdktf.IResolvable) {
    this._ignoreScript = value;
  }
  public resetIgnoreScript() {
    this._ignoreScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreScriptInput() {
    return this._ignoreScript;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // project_ids - computed: false, optional: false, required: true
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
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

  // scenario_ids - computed: false, optional: true, required: false
  private _scenarioIds?: string[]; 
  public get scenarioIds() {
    return cdktf.Fn.tolist(this.getListAttribute('scenario_ids'));
  }
  public set scenarioIds(value: string[]) {
    this._scenarioIds = value;
  }
  public resetScenarioIds() {
    this._scenarioIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioIdsInput() {
    return this._scenarioIds;
  }

  // scenario_name - computed: false, optional: true, required: false
  private _scenarioName?: string; 
  public get scenarioName() {
    return this.getStringAttribute('scenario_name');
  }
  public set scenarioName(value: string) {
    this._scenarioName = value;
  }
  public resetScenarioName() {
    this._scenarioName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioNameInput() {
    return this._scenarioName;
  }

  // scenario_type - computed: false, optional: true, required: false
  private _scenarioType?: string; 
  public get scenarioType() {
    return this.getStringAttribute('scenario_type');
  }
  public set scenarioType(value: string) {
    this._scenarioType = value;
  }
  public resetScenarioType() {
    this._scenarioType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenarioTypeInput() {
    return this._scenarioType;
  }

  // scenario_with_jobs_set - computed: true, optional: false, required: false
  private _scenarioWithJobsSet = new DataTencentcloudPtsScenarioWithJobsScenarioWithJobsSetList(this, "scenario_with_jobs_set", false);
  public get scenarioWithJobsSet() {
    return this._scenarioWithJobsSet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ascend: cdktf.booleanToTerraform(this._ascend),
      id: cdktf.stringToTerraform(this._id),
      ignore_dataset: cdktf.booleanToTerraform(this._ignoreDataset),
      ignore_script: cdktf.booleanToTerraform(this._ignoreScript),
      order_by: cdktf.stringToTerraform(this._orderBy),
      owner: cdktf.stringToTerraform(this._owner),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      scenario_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scenarioIds),
      scenario_name: cdktf.stringToTerraform(this._scenarioName),
      scenario_type: cdktf.stringToTerraform(this._scenarioType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ascend: {
        value: cdktf.booleanToHclTerraform(this._ascend),
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
      ignore_dataset: {
        value: cdktf.booleanToHclTerraform(this._ignoreDataset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_script: {
        value: cdktf.booleanToHclTerraform(this._ignoreScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenario_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scenarioIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scenario_name: {
        value: cdktf.stringToHclTerraform(this._scenarioName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenario_type: {
        value: cdktf.stringToHclTerraform(this._scenarioType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
