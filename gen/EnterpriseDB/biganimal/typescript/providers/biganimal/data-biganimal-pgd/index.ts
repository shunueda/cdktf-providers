// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBiganimalPgdConfig extends cdktf.TerraformMetaArguments {
  /**
  * cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#cluster_name DataBiganimalPgd#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Show the most recent cluster when there are multiple clusters with the same name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#most_recent DataBiganimalPgd#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * BigAnimal Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#project_id DataBiganimalPgd#project_id}
  */
  readonly projectId: string;
  /**
  * show tags associated with this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#tags DataBiganimalPgd#tags}
  */
  readonly tags?: DataBiganimalPgdTags[] | cdktf.IResolvable;
}
export interface DataBiganimalPgdDataGroupsAllowedIpRanges {
}

export function dataBiganimalPgdDataGroupsAllowedIpRangesToTerraform(struct?: DataBiganimalPgdDataGroupsAllowedIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsAllowedIpRangesToHclTerraform(struct?: DataBiganimalPgdDataGroupsAllowedIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsAllowedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalPgdDataGroupsAllowedIpRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsAllowedIpRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DataBiganimalPgdDataGroupsAllowedIpRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataBiganimalPgdDataGroupsAllowedIpRangesOutputReference {
    return new DataBiganimalPgdDataGroupsAllowedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalPgdDataGroupsCloudProvider {
}

export function dataBiganimalPgdDataGroupsCloudProviderToTerraform(struct?: DataBiganimalPgdDataGroupsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsCloudProviderToHclTerraform(struct?: DataBiganimalPgdDataGroupsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider_id - computed: true, optional: false, required: false
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
}
export interface DataBiganimalPgdDataGroupsClusterArchitecture {
}

export function dataBiganimalPgdDataGroupsClusterArchitectureToTerraform(struct?: DataBiganimalPgdDataGroupsClusterArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsClusterArchitectureToHclTerraform(struct?: DataBiganimalPgdDataGroupsClusterArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsClusterArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsClusterArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsClusterArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_architecture_id - computed: true, optional: false, required: false
  public get clusterArchitectureId() {
    return this.getStringAttribute('cluster_architecture_id');
  }

  // cluster_architecture_name - computed: true, optional: false, required: false
  public get clusterArchitectureName() {
    return this.getStringAttribute('cluster_architecture_name');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // witness_nodes - computed: true, optional: false, required: false
  public get witnessNodes() {
    return this.getNumberAttribute('witness_nodes');
  }
}
export interface DataBiganimalPgdDataGroupsInstanceType {
}

export function dataBiganimalPgdDataGroupsInstanceTypeToTerraform(struct?: DataBiganimalPgdDataGroupsInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsInstanceTypeToHclTerraform(struct?: DataBiganimalPgdDataGroupsInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsInstanceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsInstanceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type_id - computed: true, optional: false, required: false
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
}
export interface DataBiganimalPgdDataGroupsMaintenanceWindow {
}

export function dataBiganimalPgdDataGroupsMaintenanceWindowToTerraform(struct?: DataBiganimalPgdDataGroupsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsMaintenanceWindowToHclTerraform(struct?: DataBiganimalPgdDataGroupsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // start_day - computed: true, optional: false, required: false
  public get startDay() {
    return this.getNumberAttribute('start_day');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataBiganimalPgdDataGroupsPgConfig {
}

export function dataBiganimalPgdDataGroupsPgConfigToTerraform(struct?: DataBiganimalPgdDataGroupsPgConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsPgConfigToHclTerraform(struct?: DataBiganimalPgdDataGroupsPgConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsPgConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalPgdDataGroupsPgConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsPgConfig | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataBiganimalPgdDataGroupsPgConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataBiganimalPgdDataGroupsPgConfigOutputReference {
    return new DataBiganimalPgdDataGroupsPgConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalPgdDataGroupsPgType {
}

export function dataBiganimalPgdDataGroupsPgTypeToTerraform(struct?: DataBiganimalPgdDataGroupsPgType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsPgTypeToHclTerraform(struct?: DataBiganimalPgdDataGroupsPgType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsPgTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsPgType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsPgType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pg_type_id - computed: true, optional: false, required: false
  public get pgTypeId() {
    return this.getStringAttribute('pg_type_id');
  }
}
export interface DataBiganimalPgdDataGroupsPgVersion {
}

export function dataBiganimalPgdDataGroupsPgVersionToTerraform(struct?: DataBiganimalPgdDataGroupsPgVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsPgVersionToHclTerraform(struct?: DataBiganimalPgdDataGroupsPgVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsPgVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsPgVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsPgVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pg_version_id - computed: true, optional: false, required: false
  public get pgVersionId() {
    return this.getStringAttribute('pg_version_id');
  }
}
export interface DataBiganimalPgdDataGroupsRegion {
}

export function dataBiganimalPgdDataGroupsRegionToTerraform(struct?: DataBiganimalPgdDataGroupsRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdDataGroupsRegionToHclTerraform(struct?: DataBiganimalPgdDataGroupsRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdDataGroupsRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsRegion | undefined) {
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
}
export interface DataBiganimalPgdDataGroupsStorage {
  /**
  * Volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#volume_type DataBiganimalPgd#volume_type}
  */
  readonly volumeType: string;
}

export function dataBiganimalPgdDataGroupsStorageToTerraform(struct?: DataBiganimalPgdDataGroupsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataBiganimalPgdDataGroupsStorageToHclTerraform(struct?: DataBiganimalPgdDataGroupsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalPgdDataGroupsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getStringAttribute('iops');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getStringAttribute('throughput');
  }

  // volume_properties - computed: true, optional: false, required: false
  public get volumeProperties() {
    return this.getStringAttribute('volume_properties');
  }

  // volume_type - computed: true, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface DataBiganimalPgdDataGroupsWalStorage {
  /**
  * IOPS for the selected volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#iops DataBiganimalPgd#iops}
  */
  readonly iops?: string;
  /**
  * Size of the volume. It can be set to different values depending on your volume type and properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#size DataBiganimalPgd#size}
  */
  readonly size: string;
  /**
  * Throughput is automatically calculated by BigAnimal based on the IOPS input if it's not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#throughput DataBiganimalPgd#throughput}
  */
  readonly throughput?: string;
  /**
  * Volume properties in accordance with the selected volume type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#volume_properties DataBiganimalPgd#volume_properties}
  */
  readonly volumeProperties: string;
  /**
  * Volume type. For Azure: "azurepremiumstorage" or "ultradisk". For AWS: "gp3", "io2", or "io2-block-express". For Google Cloud: only "pd-ssd".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#volume_type DataBiganimalPgd#volume_type}
  */
  readonly volumeType: string;
}

export function dataBiganimalPgdDataGroupsWalStorageToTerraform(struct?: DataBiganimalPgdDataGroupsWalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.stringToTerraform(struct!.iops),
    size: cdktf.stringToTerraform(struct!.size),
    throughput: cdktf.stringToTerraform(struct!.throughput),
    volume_properties: cdktf.stringToTerraform(struct!.volumeProperties),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataBiganimalPgdDataGroupsWalStorageToHclTerraform(struct?: DataBiganimalPgdDataGroupsWalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.stringToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.stringToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_properties: {
      value: cdktf.stringToHclTerraform(struct!.volumeProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalPgdDataGroupsWalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdDataGroupsWalStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeProperties = this._volumeProperties;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroupsWalStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._throughput = undefined;
      this._volumeProperties = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._throughput = value.throughput;
      this._volumeProperties = value.volumeProperties;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: string; 
  public get iops() {
    return this.getStringAttribute('iops');
  }
  public set iops(value: string) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size - computed: true, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_properties - computed: true, optional: false, required: true
  private _volumeProperties?: string; 
  public get volumeProperties() {
    return this.getStringAttribute('volume_properties');
  }
  public set volumeProperties(value: string) {
    this._volumeProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePropertiesInput() {
    return this._volumeProperties;
  }

  // volume_type - computed: true, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface DataBiganimalPgdDataGroups {
  /**
  * Backup schedule time in 24 hour cron expression format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#backup_schedule_time DataBiganimalPgd#backup_schedule_time}
  */
  readonly backupScheduleTime?: string;
  /**
  * Use a separate storage volume for Write-Ahead Logs (Recommended for high write workloads)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#wal_storage DataBiganimalPgd#wal_storage}
  */
  readonly walStorage?: DataBiganimalPgdDataGroupsWalStorage;
}

export function dataBiganimalPgdDataGroupsToTerraform(struct?: DataBiganimalPgdDataGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_schedule_time: cdktf.stringToTerraform(struct!.backupScheduleTime),
    wal_storage: dataBiganimalPgdDataGroupsWalStorageToTerraform(struct!.walStorage),
  }
}


export function dataBiganimalPgdDataGroupsToHclTerraform(struct?: DataBiganimalPgdDataGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_schedule_time: {
      value: cdktf.stringToHclTerraform(struct!.backupScheduleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_storage: {
      value: dataBiganimalPgdDataGroupsWalStorageToHclTerraform(struct!.walStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBiganimalPgdDataGroupsWalStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalPgdDataGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalPgdDataGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupScheduleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupScheduleTime = this._backupScheduleTime;
    }
    if (this._walStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.walStorage = this._walStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdDataGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupScheduleTime = undefined;
      this._walStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupScheduleTime = value.backupScheduleTime;
      this._walStorage.internalValue = value.walStorage;
    }
  }

  // allowed_ip_ranges - computed: true, optional: false, required: false
  private _allowedIpRanges = new DataBiganimalPgdDataGroupsAllowedIpRangesList(this, "allowed_ip_ranges", true);
  public get allowedIpRanges() {
    return this._allowedIpRanges;
  }

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }

  // backup_schedule_time - computed: true, optional: true, required: false
  private _backupScheduleTime?: string; 
  public get backupScheduleTime() {
    return this.getStringAttribute('backup_schedule_time');
  }
  public set backupScheduleTime(value: string) {
    this._backupScheduleTime = value;
  }
  public resetBackupScheduleTime() {
    this._backupScheduleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleTimeInput() {
    return this._backupScheduleTime;
  }

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataBiganimalPgdDataGroupsCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }

  // cluster_architecture - computed: true, optional: false, required: false
  private _clusterArchitecture = new DataBiganimalPgdDataGroupsClusterArchitectureOutputReference(this, "cluster_architecture");
  public get clusterArchitecture() {
    return this._clusterArchitecture;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csp_auth - computed: true, optional: false, required: false
  public get cspAuth() {
    return this.getBooleanAttribute('csp_auth');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // instance_type - computed: true, optional: false, required: false
  private _instanceType = new DataBiganimalPgdDataGroupsInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataBiganimalPgdDataGroupsMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // pe_allowed_principal_ids - computed: true, optional: false, required: false
  public get peAllowedPrincipalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('pe_allowed_principal_ids'));
  }

  // pg_config - computed: true, optional: false, required: false
  private _pgConfig = new DataBiganimalPgdDataGroupsPgConfigList(this, "pg_config", true);
  public get pgConfig() {
    return this._pgConfig;
  }

  // pg_type - computed: true, optional: false, required: false
  private _pgType = new DataBiganimalPgdDataGroupsPgTypeOutputReference(this, "pg_type");
  public get pgType() {
    return this._pgType;
  }

  // pg_version - computed: true, optional: false, required: false
  private _pgVersion = new DataBiganimalPgdDataGroupsPgVersionOutputReference(this, "pg_version");
  public get pgVersion() {
    return this._pgVersion;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // private_link_service_alias - computed: true, optional: false, required: false
  public get privateLinkServiceAlias() {
    return this.getStringAttribute('private_link_service_alias');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // private_networking - computed: true, optional: false, required: false
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }

  // read_only_connections - computed: true, optional: false, required: false
  public get readOnlyConnections() {
    return this.getBooleanAttribute('read_only_connections');
  }

  // region - computed: true, optional: false, required: false
  private _region = new DataBiganimalPgdDataGroupsRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }

  // resizing_pvc - computed: true, optional: false, required: false
  public get resizingPvc() {
    return cdktf.Fn.tolist(this.getListAttribute('resizing_pvc'));
  }

  // ro_connection_uri - computed: true, optional: false, required: false
  public get roConnectionUri() {
    return cdktf.Fn.tolist(this.getListAttribute('ro_connection_uri'));
  }

  // service_account_ids - computed: true, optional: false, required: false
  public get serviceAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_ids'));
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataBiganimalPgdDataGroupsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }

  // wal_storage - computed: true, optional: true, required: false
  private _walStorage = new DataBiganimalPgdDataGroupsWalStorageOutputReference(this, "wal_storage");
  public get walStorage() {
    return this._walStorage;
  }
  public putWalStorage(value: DataBiganimalPgdDataGroupsWalStorage) {
    this._walStorage.internalValue = value;
  }
  public resetWalStorage() {
    this._walStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walStorageInput() {
    return this._walStorage.internalValue;
  }
}

export class DataBiganimalPgdDataGroupsList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalPgdDataGroups[] | cdktf.IResolvable

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
  public get(index: number): DataBiganimalPgdDataGroupsOutputReference {
    return new DataBiganimalPgdDataGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalPgdTags {
}

export function dataBiganimalPgdTagsToTerraform(struct?: DataBiganimalPgdTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdTagsToHclTerraform(struct?: DataBiganimalPgdTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalPgdTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}

export class DataBiganimalPgdTagsList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalPgdTags[] | cdktf.IResolvable

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
  public get(index: number): DataBiganimalPgdTagsOutputReference {
    return new DataBiganimalPgdTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalPgdWitnessGroupsCloudProvider {
}

export function dataBiganimalPgdWitnessGroupsCloudProviderToTerraform(struct?: DataBiganimalPgdWitnessGroupsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsCloudProviderToHclTerraform(struct?: DataBiganimalPgdWitnessGroupsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdWitnessGroupsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroupsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider_id - computed: true, optional: false, required: false
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
}
export interface DataBiganimalPgdWitnessGroupsClusterArchitecture {
}

export function dataBiganimalPgdWitnessGroupsClusterArchitectureToTerraform(struct?: DataBiganimalPgdWitnessGroupsClusterArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsClusterArchitectureToHclTerraform(struct?: DataBiganimalPgdWitnessGroupsClusterArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsClusterArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdWitnessGroupsClusterArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroupsClusterArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_architecture_id - computed: true, optional: false, required: false
  public get clusterArchitectureId() {
    return this.getStringAttribute('cluster_architecture_id');
  }

  // cluster_architecture_name - computed: true, optional: false, required: false
  public get clusterArchitectureName() {
    return this.getStringAttribute('cluster_architecture_name');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // witness_nodes - computed: true, optional: false, required: false
  public get witnessNodes() {
    return this.getNumberAttribute('witness_nodes');
  }
}
export interface DataBiganimalPgdWitnessGroupsInstanceType {
}

export function dataBiganimalPgdWitnessGroupsInstanceTypeToTerraform(struct?: DataBiganimalPgdWitnessGroupsInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsInstanceTypeToHclTerraform(struct?: DataBiganimalPgdWitnessGroupsInstanceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdWitnessGroupsInstanceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroupsInstanceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type_id - computed: true, optional: false, required: false
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }
}
export interface DataBiganimalPgdWitnessGroupsMaintenanceWindow {
}

export function dataBiganimalPgdWitnessGroupsMaintenanceWindowToTerraform(struct?: DataBiganimalPgdWitnessGroupsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsMaintenanceWindowToHclTerraform(struct?: DataBiganimalPgdWitnessGroupsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdWitnessGroupsMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroupsMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // start_day - computed: true, optional: false, required: false
  public get startDay() {
    return this.getNumberAttribute('start_day');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataBiganimalPgdWitnessGroupsRegion {
}

export function dataBiganimalPgdWitnessGroupsRegionToTerraform(struct?: DataBiganimalPgdWitnessGroupsRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsRegionToHclTerraform(struct?: DataBiganimalPgdWitnessGroupsRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdWitnessGroupsRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroupsRegion | undefined) {
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
}
export interface DataBiganimalPgdWitnessGroupsStorage {
}

export function dataBiganimalPgdWitnessGroupsStorageToTerraform(struct?: DataBiganimalPgdWitnessGroupsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsStorageToHclTerraform(struct?: DataBiganimalPgdWitnessGroupsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBiganimalPgdWitnessGroupsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroupsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getStringAttribute('iops');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getStringAttribute('throughput');
  }

  // volume_properties - computed: true, optional: false, required: false
  public get volumeProperties() {
    return this.getStringAttribute('volume_properties');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataBiganimalPgdWitnessGroups {
}

export function dataBiganimalPgdWitnessGroupsToTerraform(struct?: DataBiganimalPgdWitnessGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalPgdWitnessGroupsToHclTerraform(struct?: DataBiganimalPgdWitnessGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalPgdWitnessGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalPgdWitnessGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalPgdWitnessGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataBiganimalPgdWitnessGroupsCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }

  // cluster_architecture - computed: true, optional: false, required: false
  private _clusterArchitecture = new DataBiganimalPgdWitnessGroupsClusterArchitectureOutputReference(this, "cluster_architecture");
  public get clusterArchitecture() {
    return this._clusterArchitecture;
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // instance_type - computed: true, optional: false, required: false
  private _instanceType = new DataBiganimalPgdWitnessGroupsInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataBiganimalPgdWitnessGroupsMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // region - computed: true, optional: false, required: false
  private _region = new DataBiganimalPgdWitnessGroupsRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataBiganimalPgdWitnessGroupsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
}

export class DataBiganimalPgdWitnessGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataBiganimalPgdWitnessGroupsOutputReference {
    return new DataBiganimalPgdWitnessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd biganimal_pgd}
*/
export class DataBiganimalPgd extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_pgd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBiganimalPgd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBiganimalPgd to import
  * @param importFromId The id of the existing DataBiganimalPgd that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBiganimalPgd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_pgd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/pgd biganimal_pgd} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBiganimalPgdConfig
  */
  public constructor(scope: Construct, id: string, config: DataBiganimalPgdConfig) {
    super(scope, id, {
      terraformResourceType: 'biganimal_pgd',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._mostRecent = config.mostRecent;
    this._projectId = config.projectId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // data_groups - computed: true, optional: false, required: false
  private _dataGroups = new DataBiganimalPgdDataGroupsList(this, "data_groups", true);
  public get dataGroups() {
    return this._dataGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DataBiganimalPgdTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataBiganimalPgdTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // witness_groups - computed: true, optional: false, required: false
  private _witnessGroups = new DataBiganimalPgdWitnessGroupsList(this, "witness_groups", true);
  public get witnessGroups() {
    return this._witnessGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(dataBiganimalPgdTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(dataBiganimalPgdTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataBiganimalPgdTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
