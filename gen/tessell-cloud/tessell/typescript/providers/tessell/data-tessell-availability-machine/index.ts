// https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTessellAvailabilityMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Availability Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machine#id DataTessellAvailabilityMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataTessellAvailabilityMachineBackupDownloadConfig {
}

export function dataTessellAvailabilityMachineBackupDownloadConfigToTerraform(struct?: DataTessellAvailabilityMachineBackupDownloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineBackupDownloadConfigToHclTerraform(struct?: DataTessellAvailabilityMachineBackupDownloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineBackupDownloadConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineBackupDownloadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineBackupDownloadConfig | undefined) {
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

export class DataTessellAvailabilityMachineBackupDownloadConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineBackupDownloadConfigOutputReference {
    return new DataTessellAvailabilityMachineBackupDownloadConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesCloudAvailabilityRegions {
}

export function dataTessellAvailabilityMachineClonesCloudAvailabilityRegionsToTerraform(struct?: DataTessellAvailabilityMachineClonesCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellAvailabilityMachineClonesCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesCloudAvailabilityRegions | undefined) {
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

export class DataTessellAvailabilityMachineClonesCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesCloudAvailabilityRegionsOutputReference {
    return new DataTessellAvailabilityMachineClonesCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesCloudAvailability {
}

export function dataTessellAvailabilityMachineClonesCloudAvailabilityToTerraform(struct?: DataTessellAvailabilityMachineClonesCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesCloudAvailabilityToHclTerraform(struct?: DataTessellAvailabilityMachineClonesCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesCloudAvailability | undefined) {
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
  private _regions = new DataTessellAvailabilityMachineClonesCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellAvailabilityMachineClonesCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesCloudAvailabilityOutputReference {
    return new DataTessellAvailabilityMachineClonesCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfig | undefined) {
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
  private _encryptionKeyInfo = new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
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

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfig | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptions {
}

export function dataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptions | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesAwsInfraConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesAwsInfraConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesAwsInfraConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesAwsInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesAwsInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesAwsInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cpu_options - computed: true, optional: false, required: false
  private _awsCpuOptions = new DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigAwsCpuOptionsList(this, "aws_cpu_options", false);
  public get awsCpuOptions() {
    return this._awsCpuOptions;
  }
}

export class DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfig | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesComputeConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesComputeConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesComputeConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesComputeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesComputeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exadata_config - computed: true, optional: false, required: false
  private _exadataConfig = new DataTessellAvailabilityMachineClonesInstancesComputeConfigExadataConfigList(this, "exadata_config", false);
  public get exadataConfig() {
    return this._exadataConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachineClonesInstancesComputeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesComputeConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesComputeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesConnectString {
}

export function dataTessellAvailabilityMachineClonesInstancesConnectStringToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesConnectStringToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesConnectString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesConnectStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesConnectString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesConnectString | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesConnectStringList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesConnectStringOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesConnectStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfig | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesEngineConfiguration {
}

export function dataTessellAvailabilityMachineClonesInstancesEngineConfigurationToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesEngineConfigurationToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesEngineConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesEngineConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesEngineConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oracle_config - computed: true, optional: false, required: false
  private _oracleConfig = new DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOracleConfigList(this, "oracle_config", false);
  public get oracleConfig() {
    return this._oracleConfig;
  }
}

export class DataTessellAvailabilityMachineClonesInstancesEngineConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesEngineConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsights {
}

export function dataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsights | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesMonitoringConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesMonitoringConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesMonitoringConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesMonitoringConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // perf_insights - computed: true, optional: false, required: false
  private _perfInsights = new DataTessellAvailabilityMachineClonesInstancesMonitoringConfigPerfInsightsList(this, "perf_insights", false);
  public get perfInsights() {
    return this._perfInsights;
  }
}

export class DataTessellAvailabilityMachineClonesInstancesMonitoringConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesMonitoringConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesMonitoringConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesParameterProfile {
}

export function dataTessellAvailabilityMachineClonesInstancesParameterProfileToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesParameterProfileToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesParameterProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesParameterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesParameterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesParameterProfile | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesParameterProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesParameterProfileOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesParameterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo {
}

export function dataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfo | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfig | undefined) {
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
  private _encryptionKeyInfo = new DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigEncryptionKeyInfoList(this, "encryption_key_info", false);
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

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfig | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesStorageConfig {
}

export function dataTessellAvailabilityMachineClonesInstancesStorageConfigToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesStorageConfigToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellAvailabilityMachineClonesInstancesStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellAvailabilityMachineClonesInstancesStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachineClonesInstancesStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesStorageConfigOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstancesUpdatesInProgress {
}

export function dataTessellAvailabilityMachineClonesInstancesUpdatesInProgressToTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesUpdatesInProgressToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstancesUpdatesInProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesUpdatesInProgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstancesUpdatesInProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstancesUpdatesInProgress | undefined) {
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

export class DataTessellAvailabilityMachineClonesInstancesUpdatesInProgressList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesUpdatesInProgressOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesUpdatesInProgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClonesInstances {
}

export function dataTessellAvailabilityMachineClonesInstancesToTerraform(struct?: DataTessellAvailabilityMachineClonesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesInstancesToHclTerraform(struct?: DataTessellAvailabilityMachineClonesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClonesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClonesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_storage_config - computed: true, optional: false, required: false
  private _archiveStorageConfig = new DataTessellAvailabilityMachineClonesInstancesArchiveStorageConfigList(this, "archive_storage_config", false);
  public get archiveStorageConfig() {
    return this._archiveStorageConfig;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // aws_infra_config - computed: true, optional: false, required: false
  private _awsInfraConfig = new DataTessellAvailabilityMachineClonesInstancesAwsInfraConfigList(this, "aws_infra_config", false);
  public get awsInfraConfig() {
    return this._awsInfraConfig;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // compute_config - computed: true, optional: false, required: false
  private _computeConfig = new DataTessellAvailabilityMachineClonesInstancesComputeConfigList(this, "compute_config", false);
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
  private _connectString = new DataTessellAvailabilityMachineClonesInstancesConnectStringList(this, "connect_string", false);
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
  private _engineConfiguration = new DataTessellAvailabilityMachineClonesInstancesEngineConfigurationList(this, "engine_configuration", false);
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
  private _monitoringConfig = new DataTessellAvailabilityMachineClonesInstancesMonitoringConfigList(this, "monitoring_config", false);
  public get monitoringConfig() {
    return this._monitoringConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameter_profile - computed: true, optional: false, required: false
  private _parameterProfile = new DataTessellAvailabilityMachineClonesInstancesParameterProfileList(this, "parameter_profile", false);
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
  private _storageConfig = new DataTessellAvailabilityMachineClonesInstancesStorageConfigList(this, "storage_config", false);
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
  private _updatesInProgress = new DataTessellAvailabilityMachineClonesInstancesUpdatesInProgressList(this, "updates_in_progress", false);
  public get updatesInProgress() {
    return this._updatesInProgress;
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
}

export class DataTessellAvailabilityMachineClonesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesInstancesOutputReference {
    return new DataTessellAvailabilityMachineClonesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineClones {
}

export function dataTessellAvailabilityMachineClonesToTerraform(struct?: DataTessellAvailabilityMachineClones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineClonesToHclTerraform(struct?: DataTessellAvailabilityMachineClones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineClonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineClones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineClones | undefined) {
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
  private _cloudAvailability = new DataTessellAvailabilityMachineClonesCloudAvailabilityList(this, "cloud_availability", false);
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
  private _instances = new DataTessellAvailabilityMachineClonesInstancesList(this, "instances", false);
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

export class DataTessellAvailabilityMachineClonesList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineClonesOutputReference {
    return new DataTessellAvailabilityMachineClonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineCloudAvailabilityRegions {
}

export function dataTessellAvailabilityMachineCloudAvailabilityRegionsToTerraform(struct?: DataTessellAvailabilityMachineCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineCloudAvailabilityRegionsToHclTerraform(struct?: DataTessellAvailabilityMachineCloudAvailabilityRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineCloudAvailabilityRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineCloudAvailabilityRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineCloudAvailabilityRegions | undefined) {
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

export class DataTessellAvailabilityMachineCloudAvailabilityRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineCloudAvailabilityRegionsOutputReference {
    return new DataTessellAvailabilityMachineCloudAvailabilityRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineCloudAvailability {
}

export function dataTessellAvailabilityMachineCloudAvailabilityToTerraform(struct?: DataTessellAvailabilityMachineCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineCloudAvailabilityToHclTerraform(struct?: DataTessellAvailabilityMachineCloudAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineCloudAvailabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineCloudAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineCloudAvailability | undefined) {
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
  private _regions = new DataTessellAvailabilityMachineCloudAvailabilityRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
}

export class DataTessellAvailabilityMachineCloudAvailabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineCloudAvailabilityOutputReference {
    return new DataTessellAvailabilityMachineCloudAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoAsIsContentManual {
}

export function dataTessellAvailabilityMachineDapsContentInfoAsIsContentManualToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoAsIsContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoAsIsContentManualToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoAsIsContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoAsIsContentManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoAsIsContentManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoAsIsContentManual | undefined) {
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

export class DataTessellAvailabilityMachineDapsContentInfoAsIsContentManualList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoAsIsContentManualOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoAsIsContentManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoAsIsContent {
}

export function dataTessellAvailabilityMachineDapsContentInfoAsIsContentToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoAsIsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoAsIsContentToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoAsIsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoAsIsContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoAsIsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoAsIsContent | undefined) {
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
  private _manual = new DataTessellAvailabilityMachineDapsContentInfoAsIsContentManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
}

export class DataTessellAvailabilityMachineDapsContentInfoAsIsContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoAsIsContentOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoAsIsContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoBackupContentManual {
}

export function dataTessellAvailabilityMachineDapsContentInfoBackupContentManualToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoBackupContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoBackupContentManualToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoBackupContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoBackupContentManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoBackupContentManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoBackupContentManual | undefined) {
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

export class DataTessellAvailabilityMachineDapsContentInfoBackupContentManualList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoBackupContentManualOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoBackupContentManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoBackupContent {
}

export function dataTessellAvailabilityMachineDapsContentInfoBackupContentToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoBackupContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoBackupContentToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoBackupContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoBackupContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoBackupContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoBackupContent | undefined) {
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
  private _manual = new DataTessellAvailabilityMachineDapsContentInfoBackupContentManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
}

export class DataTessellAvailabilityMachineDapsContentInfoBackupContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoBackupContentOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoBackupContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomated {
}

export function dataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomated | undefined) {
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

export class DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManual {
}

export function dataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManual | undefined) {
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

export class DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfoSanitizedContent {
}

export function dataTessellAvailabilityMachineDapsContentInfoSanitizedContentToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoSanitizedContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoSanitizedContentToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfoSanitizedContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoSanitizedContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfoSanitizedContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfoSanitizedContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated - computed: true, optional: false, required: false
  private _automated = new DataTessellAvailabilityMachineDapsContentInfoSanitizedContentAutomatedList(this, "automated", false);
  public get automated() {
    return this._automated;
  }

  // manual - computed: true, optional: false, required: false
  private _manual = new DataTessellAvailabilityMachineDapsContentInfoSanitizedContentManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
}

export class DataTessellAvailabilityMachineDapsContentInfoSanitizedContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoSanitizedContentOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoSanitizedContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsContentInfo {
}

export function dataTessellAvailabilityMachineDapsContentInfoToTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsContentInfoToHclTerraform(struct?: DataTessellAvailabilityMachineDapsContentInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsContentInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsContentInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsContentInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_is_content - computed: true, optional: false, required: false
  private _asIsContent = new DataTessellAvailabilityMachineDapsContentInfoAsIsContentList(this, "as_is_content", false);
  public get asIsContent() {
    return this._asIsContent;
  }

  // backup_content - computed: true, optional: false, required: false
  private _backupContent = new DataTessellAvailabilityMachineDapsContentInfoBackupContentList(this, "backup_content", false);
  public get backupContent() {
    return this._backupContent;
  }

  // sanitized_content - computed: true, optional: false, required: false
  private _sanitizedContent = new DataTessellAvailabilityMachineDapsContentInfoSanitizedContentList(this, "sanitized_content", false);
  public get sanitizedContent() {
    return this._sanitizedContent;
  }
}

export class DataTessellAvailabilityMachineDapsContentInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsContentInfoOutputReference {
    return new DataTessellAvailabilityMachineDapsContentInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsDataAccessConfig {
}

export function dataTessellAvailabilityMachineDapsDataAccessConfigToTerraform(struct?: DataTessellAvailabilityMachineDapsDataAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsDataAccessConfigToHclTerraform(struct?: DataTessellAvailabilityMachineDapsDataAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsDataAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsDataAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsDataAccessConfig | undefined) {
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

export class DataTessellAvailabilityMachineDapsDataAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsDataAccessConfigOutputReference {
    return new DataTessellAvailabilityMachineDapsDataAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKey {
}

export function dataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyToTerraform(struct?: DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyToHclTerraform(struct?: DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKey | undefined) {
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

export class DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyOutputReference {
    return new DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineDaps {
}

export function dataTessellAvailabilityMachineDapsToTerraform(struct?: DataTessellAvailabilityMachineDaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineDapsToHclTerraform(struct?: DataTessellAvailabilityMachineDaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineDapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineDaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineDaps | undefined) {
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
  private _contentInfo = new DataTessellAvailabilityMachineDapsContentInfoList(this, "content_info", false);
  public get contentInfo() {
    return this._contentInfo;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // data_access_config - computed: true, optional: false, required: false
  private _dataAccessConfig = new DataTessellAvailabilityMachineDapsDataAccessConfigList(this, "data_access_config", false);
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
  private _subscriptionsCloudLocationsAndKey = new DataTessellAvailabilityMachineDapsSubscriptionsCloudLocationsAndKeyList(this, "subscriptions_cloud_locations_and_key", false);
  public get subscriptionsCloudLocationsAndKey() {
    return this._subscriptionsCloudLocationsAndKey;
  }

  // tessell_service_id - computed: true, optional: false, required: false
  public get tessellServiceId() {
    return this.getStringAttribute('tessell_service_id');
  }
}

export class DataTessellAvailabilityMachineDapsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineDapsOutputReference {
    return new DataTessellAvailabilityMachineDapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTime | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailySchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklySchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }

  // month_specific_schedule - computed: true, optional: false, required: false
  private _monthSpecificSchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start_time - computed: true, optional: false, required: false
  private _backupStartTime = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleBackupStartTimeList(this, "backup_start_time", false);
  public get backupStartTime() {
    return this._backupStartTime;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }

  // monthly_schedule - computed: true, optional: false, required: false
  private _monthlySchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicy {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicy | undefined) {
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
  private _schedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTime {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTime | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklySchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTime | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicy {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start_time - computed: true, optional: false, required: false
  private _backupStartTime = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyBackupStartTimeList(this, "backup_start_time", false);
  public get backupStartTime() {
    return this._backupStartTime;
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyBackupRpoConfig {
}

export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyBackupRpoConfigToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyBackupRpoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_policy - computed: true, optional: false, required: false
  private _customPolicy = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigCustomPolicyList(this, "custom_policy", false);
  public get customPolicy() {
    return this._customPolicy;
  }

  // full_backup_schedule - computed: true, optional: false, required: false
  private _fullBackupSchedule = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigFullBackupScheduleList(this, "full_backup_schedule", false);
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }

  // standard_policy - computed: true, optional: false, required: false
  private _standardPolicy = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigStandardPolicyList(this, "standard_policy", false);
  public get standardPolicy() {
    return this._standardPolicy;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTime {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTime | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailySchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonSchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklySchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonSchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificSchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_schedule - computed: true, optional: false, required: false
  private _commonSchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleCommonScheduleList(this, "common_schedule", false);
  public get commonSchedule() {
    return this._commonSchedule;
  }

  // month_specific_schedule - computed: true, optional: false, required: false
  private _monthSpecificSchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleMonthSpecificScheduleList(this, "month_specific_schedule", false);
  public get monthSpecificSchedule() {
    return this._monthSpecificSchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_start_time - computed: true, optional: false, required: false
  private _backupStartTime = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleBackupStartTimeList(this, "backup_start_time", false);
  public get backupStartTime() {
    return this._backupStartTime;
  }

  // daily_schedule - computed: true, optional: false, required: false
  private _dailySchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }

  // monthly_schedule - computed: true, optional: false, required: false
  private _monthlySchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }

  // yearly_schedule - computed: true, optional: false, required: false
  private _yearlySchedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleYearlyScheduleList(this, "yearly_schedule", false);
  public get yearlySchedule() {
    return this._yearlySchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyCustomPolicy {
}

export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyCustomPolicyToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyCustomPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyCustomPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyCustomPolicy | undefined) {
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
  private _schedule = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyCustomPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyCustomPolicyOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyCustomPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTime {
}

export function dataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTime | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklySchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklySchedule | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyFullBackupSchedule {
}

export function dataTessellAvailabilityMachineRpoPolicyFullBackupScheduleToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyFullBackupScheduleToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyFullBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyFullBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyFullBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  private _weeklySchedule = new DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTime {
}

export function dataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTime | undefined) {
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

export class DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicyStandardPolicy {
}

export function dataTessellAvailabilityMachineRpoPolicyStandardPolicyToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyStandardPolicyToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicyStandardPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyStandardPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicyStandardPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicyStandardPolicy | undefined) {
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
  private _snapshotStartTime = new DataTessellAvailabilityMachineRpoPolicyStandardPolicySnapshotStartTimeList(this, "snapshot_start_time", false);
  public get snapshotStartTime() {
    return this._snapshotStartTime;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyStandardPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyStandardPolicyOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyStandardPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineRpoPolicy {
}

export function dataTessellAvailabilityMachineRpoPolicyToTerraform(struct?: DataTessellAvailabilityMachineRpoPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineRpoPolicyToHclTerraform(struct?: DataTessellAvailabilityMachineRpoPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineRpoPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineRpoPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineRpoPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_rpo_config - computed: true, optional: false, required: false
  private _backupRpoConfig = new DataTessellAvailabilityMachineRpoPolicyBackupRpoConfigList(this, "backup_rpo_config", false);
  public get backupRpoConfig() {
    return this._backupRpoConfig;
  }

  // custom_policy - computed: true, optional: false, required: false
  private _customPolicy = new DataTessellAvailabilityMachineRpoPolicyCustomPolicyList(this, "custom_policy", false);
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
  private _fullBackupSchedule = new DataTessellAvailabilityMachineRpoPolicyFullBackupScheduleList(this, "full_backup_schedule", false);
  public get fullBackupSchedule() {
    return this._fullBackupSchedule;
  }

  // include_transaction_logs - computed: true, optional: false, required: false
  public get includeTransactionLogs() {
    return this.getBooleanAttribute('include_transaction_logs');
  }

  // standard_policy - computed: true, optional: false, required: false
  private _standardPolicy = new DataTessellAvailabilityMachineRpoPolicyStandardPolicyList(this, "standard_policy", false);
  public get standardPolicy() {
    return this._standardPolicy;
  }
}

export class DataTessellAvailabilityMachineRpoPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineRpoPolicyOutputReference {
    return new DataTessellAvailabilityMachineRpoPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineSharedWithUsers {
}

export function dataTessellAvailabilityMachineSharedWithUsersToTerraform(struct?: DataTessellAvailabilityMachineSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineSharedWithUsersToHclTerraform(struct?: DataTessellAvailabilityMachineSharedWithUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineSharedWithUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineSharedWithUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineSharedWithUsers | undefined) {
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

export class DataTessellAvailabilityMachineSharedWithUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineSharedWithUsersOutputReference {
    return new DataTessellAvailabilityMachineSharedWithUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineSharedWith {
}

export function dataTessellAvailabilityMachineSharedWithToTerraform(struct?: DataTessellAvailabilityMachineSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineSharedWithToHclTerraform(struct?: DataTessellAvailabilityMachineSharedWith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineSharedWithOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineSharedWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineSharedWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataTessellAvailabilityMachineSharedWithUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}

export class DataTessellAvailabilityMachineSharedWithList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineSharedWithOutputReference {
    return new DataTessellAvailabilityMachineSharedWithOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurations {
}

export function dataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsToTerraform(struct?: DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsToHclTerraform(struct?: DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurations | undefined) {
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

export class DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsOutputReference {
    return new DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineStorageConfigAzureNetAppConfig {
}

export function dataTessellAvailabilityMachineStorageConfigAzureNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachineStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineStorageConfigAzureNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachineStorageConfigAzureNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineStorageConfigAzureNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineStorageConfigAzureNetAppConfig | undefined) {
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
  private _configurations = new DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
}

export class DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineStorageConfigFsxNetAppConfig {
}

export function dataTessellAvailabilityMachineStorageConfigFsxNetAppConfigToTerraform(struct?: DataTessellAvailabilityMachineStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineStorageConfigFsxNetAppConfigToHclTerraform(struct?: DataTessellAvailabilityMachineStorageConfigFsxNetAppConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineStorageConfigFsxNetAppConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineStorageConfigFsxNetAppConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineStorageConfigFsxNetAppConfig | undefined) {
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

export class DataTessellAvailabilityMachineStorageConfigFsxNetAppConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineStorageConfigFsxNetAppConfigOutputReference {
    return new DataTessellAvailabilityMachineStorageConfigFsxNetAppConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineStorageConfig {
}

export function dataTessellAvailabilityMachineStorageConfigToTerraform(struct?: DataTessellAvailabilityMachineStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineStorageConfigToHclTerraform(struct?: DataTessellAvailabilityMachineStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_net_app_config - computed: true, optional: false, required: false
  private _azureNetAppConfig = new DataTessellAvailabilityMachineStorageConfigAzureNetAppConfigList(this, "azure_net_app_config", false);
  public get azureNetAppConfig() {
    return this._azureNetAppConfig;
  }

  // fsx_net_app_config - computed: true, optional: false, required: false
  private _fsxNetAppConfig = new DataTessellAvailabilityMachineStorageConfigFsxNetAppConfigList(this, "fsx_net_app_config", false);
  public get fsxNetAppConfig() {
    return this._fsxNetAppConfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTessellAvailabilityMachineStorageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineStorageConfigOutputReference {
    return new DataTessellAvailabilityMachineStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTessellAvailabilityMachineTopology {
}

export function dataTessellAvailabilityMachineTopologyToTerraform(struct?: DataTessellAvailabilityMachineTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTessellAvailabilityMachineTopologyToHclTerraform(struct?: DataTessellAvailabilityMachineTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTessellAvailabilityMachineTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTessellAvailabilityMachineTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTessellAvailabilityMachineTopology | undefined) {
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

export class DataTessellAvailabilityMachineTopologyList extends cdktf.ComplexList {

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
  public get(index: number): DataTessellAvailabilityMachineTopologyOutputReference {
    return new DataTessellAvailabilityMachineTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machine tessell_availability_machine}
*/
export class DataTessellAvailabilityMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tessell_availability_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTessellAvailabilityMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTessellAvailabilityMachine to import
  * @param importFromId The id of the existing DataTessellAvailabilityMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTessellAvailabilityMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tessell_availability_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tessell-cloud/tessell/0.0.27/docs/data-sources/availability_machine tessell_availability_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTessellAvailabilityMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataTessellAvailabilityMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'tessell_availability_machine',
      terraformGeneratorMetadata: {
        providerName: 'tessell',
        providerVersion: '0.0.27'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_download_config - computed: true, optional: false, required: false
  private _backupDownloadConfig = new DataTessellAvailabilityMachineBackupDownloadConfigList(this, "backup_download_config", false);
  public get backupDownloadConfig() {
    return this._backupDownloadConfig;
  }

  // clones - computed: true, optional: false, required: false
  private _clones = new DataTessellAvailabilityMachineClonesList(this, "clones", false);
  public get clones() {
    return this._clones;
  }

  // cloud_availability - computed: true, optional: false, required: false
  private _cloudAvailability = new DataTessellAvailabilityMachineCloudAvailabilityList(this, "cloud_availability", false);
  public get cloudAvailability() {
    return this._cloudAvailability;
  }

  // daps - computed: true, optional: false, required: false
  private _daps = new DataTessellAvailabilityMachineDapsList(this, "daps", false);
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _rpoPolicy = new DataTessellAvailabilityMachineRpoPolicyList(this, "rpo_policy", false);
  public get rpoPolicy() {
    return this._rpoPolicy;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // shared_with - computed: true, optional: false, required: false
  private _sharedWith = new DataTessellAvailabilityMachineSharedWithList(this, "shared_with", false);
  public get sharedWith() {
    return this._sharedWith;
  }

  // storage_config - computed: true, optional: false, required: false
  private _storageConfig = new DataTessellAvailabilityMachineStorageConfigList(this, "storage_config", false);
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
  private _topology = new DataTessellAvailabilityMachineTopologyList(this, "topology", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
