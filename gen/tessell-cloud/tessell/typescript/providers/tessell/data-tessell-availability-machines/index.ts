// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTessellAvailabilityMachinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availaility Machine's engine-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#engine_type DataTessellAvailabilityMachines#engine_type}
  */
  readonly engineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#id DataTessellAvailabilityMachines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load ACL information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#load_acls DataTessellAvailabilityMachines#load_acls}
  */
  readonly loadAcls?: boolean | cdktf.IResolvable;
  /**
  * Name of the Availability Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#name DataTessellAvailabilityMachines#name}
  */
  readonly name?: string;
  /**
  * List of Email Addresses for entity or resource owners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#owners DataTessellAvailabilityMachines#owners}
  */
  readonly owners?: string[];
  /**
  * status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#status DataTessellAvailabilityMachines#status}
  */
  readonly status?: string;
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_backup_downloads - computed: true, optional: false, required: false
  public get allowBackupDownloads() {
    return this.getBooleanAttribute('allow_backup_downloads');
  }

  // allow_backup_downloads_for_all_users - computed: true, optional: false, required: false
  public get allowBackupDownloadsForAllUsers() {
    return this.getBooleanAttribute('allow_backup_downloads_for_all_users');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegions {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailability {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_vault_cloud_resource_id - computed: true, optional: false, required: false
  public get keyVaultCloudResourceId() {
    return this.getStringAttribute('key_vault_cloud_resource_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_id - computed: true, optional: false, required: false
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }

  // azure_net_app_name - computed: true, optional: false, required: false
  public get azureNetAppName() {
    return this.getStringAttribute('azure_net_app_name');
  }

  // capacity_pool_id - computed: true, optional: false, required: false
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }

  // capacity_pool_name - computed: true, optional: false, required: false
  public get capacityPoolName() {
    return this.getStringAttribute('capacity_pool_name');
  }

  // delegated_subnet_id - computed: true, optional: false, required: false
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }

  // delegated_subnet_name - computed: true, optional: false, required: false
  public get delegatedSubnetName() {
    return this.getStringAttribute('delegated_subnet_name');
  }

  // encryption_key_info - computed: true, optional: false, required: false
  private _encryptionKeyInfo = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
  public get encryptionKeyInfo() {
    return this._encryptionKeyInfo;
  }

  // network_features - computed: true, optional: false, required: false
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_name - computed: true, optional: false, required: false
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }

  // svm_id - computed: true, optional: false, required: false
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptions {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cpu_options - computed: true, optional: false, required: false
  private _awsCpuOptions = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // infrastructure_id - computed: true, optional: false, required: false
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }

  // infrastructure_name - computed: true, optional: false, required: false
  public get infrastructureName() {
    return this.getStringAttribute('infrastructure_name');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // vm_cluster_id - computed: true, optional: false, required: false
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // vm_cluster_name - computed: true, optional: false, required: false
  public get vmClusterName() {
    return this.getStringAttribute('vm_cluster_name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exadata_config - computed: true, optional: false, required: false
  private _exadataConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigExadataConfigList(this, "exadata_config", false);
  public get exadataConfig() {
    return this._exadataConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectString {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_descriptor - computed: true, optional: false, required: false
  public get connectDescriptor() {
    return this.getStringAttribute('connect_descriptor');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // master_user - computed: true, optional: false, required: false
  public get masterUser() {
    return this.getStringAttribute('master_user');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode - computed: true, optional: false, required: false
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfiguration {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsights {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // monitoring_deployment_id - computed: true, optional: false, required: false
  public get monitoringDeploymentId() {
    return this.getStringAttribute('monitoring_deployment_id');
  }

  // perf_insights_enabled - computed: true, optional: false, required: false
  public get perfInsightsEnabled() {
    return this.getBooleanAttribute('perf_insights_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // perf_insights - computed: true, optional: false, required: false
  private _perfInsights = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigPerfInsightsList(this, "perf_insights", false);
  public get perfInsights() {
    return this._perfInsights;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfile {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_vault_cloud_resource_id - computed: true, optional: false, required: false
  public get keyVaultCloudResourceId() {
    return this.getStringAttribute('key_vault_cloud_resource_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_id - computed: true, optional: false, required: false
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }

  // azure_net_app_name - computed: true, optional: false, required: false
  public get azureNetAppName() {
    return this.getStringAttribute('azure_net_app_name');
  }

  // capacity_pool_id - computed: true, optional: false, required: false
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }

  // capacity_pool_name - computed: true, optional: false, required: false
  public get capacityPoolName() {
    return this.getStringAttribute('capacity_pool_name');
  }

  // delegated_subnet_id - computed: true, optional: false, required: false
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }

  // delegated_subnet_name - computed: true, optional: false, required: false
  public get delegatedSubnetName() {
    return this.getStringAttribute('delegated_subnet_name');
  }

  // encryption_key_info - computed: true, optional: false, required: false
  private _encryptionKeyInfo = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
  public get encryptionKeyInfo() {
    return this._encryptionKeyInfo;
  }

  // network_features - computed: true, optional: false, required: false
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_name - computed: true, optional: false, required: false
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }

  // svm_id - computed: true, optional: false, required: false
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgress {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // submitted_at - computed: true, optional: false, required: false
  public get submittedAt() {
    return this.getStringAttribute('submitted_at');
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new cdktf.StringMap(this, "update_info");
  public get updateInfo() {
    return this._updateInfo;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstances {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage_config - computed: true, optional: false, required: false
  private _archiveStorageConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_infra_config - computed: true, optional: false, required: false
  private _awsInfraConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // compute_config - computed: true, optional: false, required: false
  private _computeConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesComputeConfigList(this, "compute_config", false);
  public get computeConfig() {
    return this._computeConfig;
  }

  // compute_id - computed: true, optional: false, required: false
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }

  // compute_name - computed: true, optional: false, required: false
  public get computeName() {
    return this.getStringAttribute('compute_name');
  }

  // compute_type - computed: true, optional: false, required: false
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }

  // connect_string - computed: true, optional: false, required: false
  private _connectString = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesConnectStringList(this, "connect_string", false);
  public get connectString() {
    return this._connectString;
  }

  // data_volume_iops - computed: true, optional: false, required: false
  public get dataVolumeIops() {
    return this.getNumberAttribute('data_volume_iops');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // enable_perf_insights - computed: true, optional: false, required: false
  public get enablePerfInsights() {
    return this.getBooleanAttribute('enable_perf_insights');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // engine_configuration - computed: true, optional: false, required: false
  private _engineConfiguration = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesEngineConfigurationList(this, "engine_configuration", false);
  public get engineConfiguration() {
    return this._engineConfiguration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getStringAttribute('instance_group_id');
  }

  // instance_group_name - computed: true, optional: false, required: false
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }

  // last_started_at - computed: true, optional: false, required: false
  public get lastStartedAt() {
    return this.getStringAttribute('last_started_at');
  }

  // last_stopped_at - computed: true, optional: false, required: false
  public get lastStoppedAt() {
    return this.getStringAttribute('last_stopped_at');
  }

  // monitoring_config - computed: true, optional: false, required: false
  private _monitoringConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesMonitoringConfigList(this, "monitoring_config", false);
  public get monitoringConfig() {
    return this._monitoringConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameter_profile - computed: true, optional: false, required: false
  private _parameterProfile = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesParameterProfileList(this, "parameter_profile", false);
  public get parameterProfile() {
    return this._parameterProfile;
  }

  // private_subnet - computed: true, optional: false, required: false
  public get privateSubnet() {
    return this.getStringAttribute('private_subnet');
  }

  // public_subnet - computed: true, optional: false, required: false
  public get publicSubnet() {
    return this.getStringAttribute('public_subnet');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // software_image - computed: true, optional: false, required: false
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }

  // software_image_version - computed: true, optional: false, required: false
  public get softwareImageVersion() {
    return this.getStringAttribute('software_image_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updates_in_progress - computed: true, optional: false, required: false
  private _updatesInProgress = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesClones {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesClonesToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesClones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesClones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesClones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clone_info - computed: true, optional: false, required: false
  private _cloneInfo = new cdktf.StringMap(this, "clone_info");
  public get cloneInfo() {
    return this._cloneInfo;
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesCloudAvailabilityList(this, "cloud_availability", false);
  public get cloudAvailability() {
    return this._cloudAvailability;
  }

  // compute_type - computed: true, optional: false, required: false
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesClonesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesClonesOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesClonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegions {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailability {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManual {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_at - computed: true, optional: false, required: false
  public get sharedAt() {
    return this.getStringAttribute('shared_at');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContent {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated - computed: true, optional: false, required: false
  public get automated() {
    return this.getBooleanAttribute('automated');
  }

  // manual - computed: true, optional: false, required: false
  private _manual = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManual {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_at - computed: true, optional: false, required: false
  public get sharedAt() {
    return this.getStringAttribute('shared_at');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContent {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated - computed: true, optional: false, required: false
  public get automated() {
    return this.getBooleanAttribute('automated');
  }

  // manual - computed: true, optional: false, required: false
  private _manual = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomated {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sanitization_schedule_id - computed: true, optional: false, required: false
  public get sanitizationScheduleId() {
    return this.getStringAttribute('sanitization_schedule_id');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManual {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_at - computed: true, optional: false, required: false
  public get sharedAt() {
    return this.getStringAttribute('shared_at');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContent {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated - computed: true, optional: false, required: false
  private _automated = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentAutomatedList(this, "automated", false);
  public get automated() {
    return this._automated;
  }

  // manual - computed: true, optional: false, required: false
  private _manual = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfo {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_is_content - computed: true, optional: false, required: false
  private _asIsContent = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoAsIsContentList(this, "as_is_content", false);
  public get asIsContent() {
    return this._asIsContent;
  }

  // backup_content - computed: true, optional: false, required: false
  private _backupContent = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoBackupContentList(this, "backup_content", false);
  public get backupContent() {
    return this._backupContent;
  }

  // sanitized_content - computed: true, optional: false, required: false
  private _sanitizedContent = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoSanitizedContentList(this, "sanitized_content", false);
  public get sanitizedContent() {
    return this._sanitizedContent;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_backups - computed: true, optional: false, required: false
  public get dailyBackups() {
    return this.getNumberAttribute('daily_backups');
  }

  // pitr - computed: true, optional: false, required: false
  public get pitr() {
    return this.getNumberAttribute('pitr');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKey {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_region_and_key - computed: true, optional: false, required: false
  private _cloudRegionAndKey = new cdktf.StringMap(this, "cloud_region_and_key");
  public get cloudRegionAndKey() {
    return this._cloudRegionAndKey;
  }

  // subscription_name - computed: true, optional: false, required: false
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesDaps {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesDapsToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesDaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesDaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesDaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_machine_id - computed: true, optional: false, required: false
  public get availabilityMachineId() {
    return this.getStringAttribute('availability_machine_id');
  }

  // content_info - computed: true, optional: false, required: false
  private _contentInfo = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsContentInfoList(this, "content_info", false);
  public get contentInfo() {
    return this._contentInfo;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // data_access_config - computed: true, optional: false, required: false
  private _dataAccessConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsDataAccessConfigList(this, "data_access_config", false);
  public get dataAccessConfig() {
    return this._dataAccessConfig;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logged_in_user_role - computed: true, optional: false, required: false
  public get loggedInUserRole() {
    return this.getStringAttribute('logged_in_user_role');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscriptions_cloud_locations_and_key - computed: true, optional: false, required: false
  private _subscriptionsCloudLocationsAndKey = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsSubscriptionsCloudLocationsAndKeyList(this, "subscriptions_cloud_locations_and_key", false);
  public get subscriptionsCloudLocationsAndKey() {
    return this._subscriptionsCloudLocationsAndKey;
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesDapsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesDapsOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesDapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backups_per_day - computed: true, optional: false, required: false
  public get backupsPerDay() {
    return this.getNumberAttribute('backups_per_day');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dates - computed: true, optional: false, required: false
  public get dates() {
    return this.getNumberListAttribute('dates');
  }

  // last_day_of_month - computed: true, optional: false, required: false
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dates - computed: true, optional: false, required: false
  public get dates() {
    return this.getNumberListAttribute('dates');
  }

  // last_day_of_month - computed: true, optional: false, required: false
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getListAttribute('months');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dates - computed: true, optional: false, required: false
  public get dates() {
    return this.getNumberListAttribute('dates');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getStringAttribute('month');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }

  // month_specific_schedule - computed: true, optional: false, required: false
  private _monthSpecificSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start_time - computed: true, optional: false, required: false
  private _backupStartTime = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeList(this, "backup_start_time", false);
  public get backupStartTime() {
    return this._backupStartTime;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }

  // monthly_schedule - computed: true, optional: false, required: false
  private _monthlySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicy {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicy | undefined) {
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

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTime {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicy {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start_time - computed: true, optional: false, required: false
  private _backupStartTime = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeList(this, "backup_start_time", false);
  public get backupStartTime() {
    return this._backupStartTime;
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_policy - computed: true, optional: false, required: false
  private _customPolicy = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigCustomPolicyList(this, "custom_policy", false);
  public get customPolicy() {
    return this._customPolicy;
  }

  // full_backup_schedule - computed: true, optional: false, required: false
  private _fullBackupSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigFullBackupScheduleList(this, "full_backup_schedule", false);
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }

  // standard_policy - computed: true, optional: false, required: false
  private _standardPolicy = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigStandardPolicyList(this, "standard_policy", false);
  public get standardPolicy() {
    return this._standardPolicy;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTime {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backups_per_day - computed: true, optional: false, required: false
  public get backupsPerDay() {
    return this.getNumberAttribute('backups_per_day');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dates - computed: true, optional: false, required: false
  public get dates() {
    return this.getNumberListAttribute('dates');
  }

  // last_day_of_month - computed: true, optional: false, required: false
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dates - computed: true, optional: false, required: false
  public get dates() {
    return this.getNumberListAttribute('dates');
  }

  // last_day_of_month - computed: true, optional: false, required: false
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getListAttribute('months');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dates - computed: true, optional: false, required: false
  public get dates() {
    return this.getNumberListAttribute('dates');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getStringAttribute('month');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }

  // month_specific_schedule - computed: true, optional: false, required: false
  private _monthSpecificSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start_time - computed: true, optional: false, required: false
  private _backupStartTime = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleBackupStartTimeList(this, "backup_start_time", false);
  public get backupStartTime() {
    return this._backupStartTime;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }

  // monthly_schedule - computed: true, optional: false, required: false
  private _monthlySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicy {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicy | undefined) {
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

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTime {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getListAttribute('days');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupSchedule {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTime {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicy {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_transaction_logs - computed: true, optional: false, required: false
  public get includeTransactionLogs() {
    return this.getBooleanAttribute('include_transaction_logs');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // snapshot_start_time - computed: true, optional: false, required: false
  private _snapshotStartTime = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicySnapshotStartTimeList(this, "snapshot_start_time", false);
  public get snapshotStartTime() {
    return this._snapshotStartTime;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicy {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_rpo_config - computed: true, optional: false, required: false
  private _backupRpoConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyBackupRpoConfigList(this, "backup_rpo_config", false);
  public get backupRpoConfig() {
    return this._backupRpoConfig;
  }

  // custom_policy - computed: true, optional: false, required: false
  private _customPolicy = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyCustomPolicyList(this, "custom_policy", false);
  public get customPolicy() {
    return this._customPolicy;
  }

  // enable_auto_backup - computed: true, optional: false, required: false
  public get enableAutoBackup() {
    return this.getBooleanAttribute('enable_auto_backup');
  }

  // enable_auto_snapshot - computed: true, optional: false, required: false
  public get enableAutoSnapshot() {
    return this.getBooleanAttribute('enable_auto_snapshot');
  }

  // full_backup_schedule - computed: true, optional: false, required: false
  private _fullBackupSchedule = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyFullBackupScheduleList(this, "full_backup_schedule", false);
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }

  // include_transaction_logs - computed: true, optional: false, required: false
  public get includeTransactionLogs() {
    return this.getBooleanAttribute('include_transaction_logs');
  }

  // standard_policy - computed: true, optional: false, required: false
  private _standardPolicy = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyStandardPolicyList(this, "standard_policy", false);
  public get standardPolicy() {
    return this._standardPolicy;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsers {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_id - computed: true, optional: false, required: false
  public get emailId() {
    return this.getStringAttribute('email_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesSharedWith {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesSharedWithToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesSharedWithToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurations {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_features - computed: true, optional: false, required: false
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_id - computed: true, optional: false, required: false
  public get azureNetAppId() {
    return this.getStringAttribute('azure_net_app_id');
  }

  // capacity_pool_id - computed: true, optional: false, required: false
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // svm_id - computed: true, optional: false, required: false
  public get svmId() {
    return this.getStringAttribute('svm_id');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfig {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachinesTopology {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesTopologyToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesTopologyToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachinesTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachinesTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachinesTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesTopologyOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachinesAvailabilityMachines {
}

export function dataTessellAvailabilityMachinesAvailabilityMachinesToTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachinesAvailabilityMachinesToHclTerraform(struct?: DataTessellAvailabilityMachinesAvailabilityMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachinesAvailabilityMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachinesAvailabilityMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_download_config - computed: true, optional: false, required: false
  private _backupDownloadConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesBackupDownloadConfigList(this, "backup_download_config", false);
  public get backupDownloadConfig() {
    return this._backupDownloadConfig;
  }

  // clones - computed: true, optional: false, required: false
  private _clones = new DataTessellAvailabilityMachinesAvailabilityMachinesClonesList(this, "clones", false);
  public get clones() {
    return this._clones;
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DataTessellAvailabilityMachinesAvailabilityMachinesCloudAvailabilityList(this, "cloud_availability", false);
  public get cloudAvailability() {
    return this._cloudAvailability;
  }

  // daps - computed: true, optional: false, required: false
  private _daps = new DataTessellAvailabilityMachinesAvailabilityMachinesDapsList(this, "daps", false);
  public get daps() {
    return this._daps;
  }

  // data_ingestion_status - computed: true, optional: false, required: false
  public get dataIngestionStatus() {
    return this.getStringAttribute('data_ingestion_status');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logged_in_user_role - computed: true, optional: false, required: false
  public get loggedInUserRole() {
    return this.getStringAttribute('logged_in_user_role');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // rpo_policy - computed: true, optional: false, required: false
  private _rpoPolicy = new DataTessellAvailabilityMachinesAvailabilityMachinesRpoPolicyList(this, "rpo_policy", false);
  public get rpoPolicy() {
    return this._rpoPolicy;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // shared_with - computed: true, optional: false, required: false
  private _sharedWith = new DataTessellAvailabilityMachinesAvailabilityMachinesSharedWithList(this, "shared_with", false);
  public get sharedWith() {
    return this._sharedWith;
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataTessellAvailabilityMachinesAvailabilityMachinesStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }

  // topology - computed: true, optional: false, required: false
  private _topology = new DataTessellAvailabilityMachinesAvailabilityMachinesTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }

  // tsm - computed: true, optional: false, required: false
  public get tsm() {
    return this.getBooleanAttribute('tsm');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataTessellAvailabilityMachinesAvailabilityMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachinesAvailabilityMachinesOutputReference {
    return new DataTessellAvailabilityMachinesAvailabilityMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines tessell_availability_machines}
*/
export class DataTessellAvailabilityMachines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_availability_machines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTessellAvailabilityMachines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTessellAvailabilityMachines to import
  * @param importFromId The id of the existing DataTessellAvailabilityMachines that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTessellAvailabilityMachines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_availability_machines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machines tessell_availability_machines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTessellAvailabilityMachinesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTessellAvailabilityMachinesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tessell_availability_machines',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.27',
        providerVersionConstraint: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineType = config.engineType;
    this._id = config.id;
    this._loadAcls = config.loadAcls;
    this._name = config.name;
    this._owners = config.owners;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_machines - computed: true, optional: false, required: false
  private _availabilityMachines = new DataTessellAvailabilityMachinesAvailabilityMachinesList(this, "availability_machines", false);
  public get availabilityMachines() {
    return this._availabilityMachines;
  }

  // engine_type - computed: false, optional: true, required: false
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  public resetEngineType() {
    this._engineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
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

  // load_acls - computed: false, optional: true, required: false
  private _loadAcls?: boolean | cdktf.IResolvable; 
  public get loadAcls() {
    return this.getBooleanAttribute('load_acls');
  }
  public set loadAcls(value: boolean | cdktf.IResolvable) {
    this._loadAcls = value;
  }
  public resetLoadAcls() {
    this._loadAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadAclsInput() {
    return this._loadAcls;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_type: cdktf.stringToTerraform(this._engineType),
      id: cdktf.stringToTerraform(this._id),
      load_acls: cdktf.booleanToTerraform(this._loadAcls),
      name: cdktf.stringToTerraform(this._name),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
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
      load_acls: {
        value: cdktf.booleanToHclTerraform(this._loadAcls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
