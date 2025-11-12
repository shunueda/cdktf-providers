// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexFirmwareRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#filter DataPowerflexFirmwareRepository#filter}
  */
  readonly filter?: DataPowerflexFirmwareRepositoryFilter;
}
export interface DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponents {
}

export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsToTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsToHclTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // dell_version - computed: true, optional: false, required: false
  public get dellVersion() {
    return this.getStringAttribute('dell_version');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // firmware_repo_name - computed: true, optional: false, required: false
  public get firmwareRepoName() {
    return this.getStringAttribute('firmware_repo_name');
  }

  // hash_md5 - computed: true, optional: false, required: false
  public get hashMd5() {
    return this.getStringAttribute('hash_md5');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // original_component_id - computed: true, optional: false, required: false
  public get originalComponentId() {
    return this.getStringAttribute('original_component_id');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // vendor_version - computed: true, optional: false, required: false
  public get vendorVersion() {
    return this.getStringAttribute('vendor_version');
  }
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsOutputReference {
    return new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundles {
}

export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesToTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesToHclTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_date - computed: true, optional: false, required: false
  public get bundleDate() {
    return this.getStringAttribute('bundle_date');
  }

  // bundle_type - computed: true, optional: false, required: false
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // fw_repository_id - computed: true, optional: false, required: false
  public get fwRepositoryId() {
    return this.getStringAttribute('fw_repository_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesSoftwareComponentsList(this, "software_components", false);
  public get softwareComponents() {
    return this._softwareComponents;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_bundle - computed: true, optional: false, required: false
  public get userBundle() {
    return this.getBooleanAttribute('user_bundle');
  }

  // user_bundle_path - computed: true, optional: false, required: false
  public get userBundlePath() {
    return this.getStringAttribute('user_bundle_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesOutputReference {
    return new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponents {
}

export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsToTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsToHclTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // dell_version - computed: true, optional: false, required: false
  public get dellVersion() {
    return this.getStringAttribute('dell_version');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // firmware_repo_name - computed: true, optional: false, required: false
  public get firmwareRepoName() {
    return this.getStringAttribute('firmware_repo_name');
  }

  // hash_md5 - computed: true, optional: false, required: false
  public get hashMd5() {
    return this.getStringAttribute('hash_md5');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // original_component_id - computed: true, optional: false, required: false
  public get originalComponentId() {
    return this.getStringAttribute('original_component_id');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // vendor_version - computed: true, optional: false, required: false
  public get vendorVersion() {
    return this.getStringAttribute('vendor_version');
  }
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsOutputReference {
    return new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFirmwareRepositoryFirmwareRepositoryDetails {
}

export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsToTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsToHclTerraform(struct?: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFirmwareRepositoryFirmwareRepositoryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_count - computed: true, optional: false, required: false
  public get bundleCount() {
    return this.getNumberAttribute('bundle_count');
  }

  // component_count - computed: true, optional: false, required: false
  public get componentCount() {
    return this.getNumberAttribute('component_count');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // default_catalog - computed: true, optional: false, required: false
  public get defaultCatalog() {
    return this.getBooleanAttribute('default_catalog');
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // download_progress - computed: true, optional: false, required: false
  public get downloadProgress() {
    return this.getNumberAttribute('download_progress');
  }

  // download_status - computed: true, optional: false, required: false
  public get downloadStatus() {
    return this.getStringAttribute('download_status');
  }

  // embedded - computed: true, optional: false, required: false
  public get embedded() {
    return this.getBooleanAttribute('embedded');
  }

  // extract_progress - computed: true, optional: false, required: false
  public get extractProgress() {
    return this.getNumberAttribute('extract_progress');
  }

  // file_size_in_gigabytes - computed: true, optional: false, required: false
  public get fileSizeInGigabytes() {
    return this.getNumberAttribute('file_size_in_gigabytes');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // minimal - computed: true, optional: false, required: false
  public get minimal() {
    return this.getBooleanAttribute('minimal');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // rcmapproved - computed: true, optional: false, required: false
  public get rcmapproved() {
    return this.getBooleanAttribute('rcmapproved');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // software_bundles - computed: true, optional: false, required: false
  private _softwareBundles = new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareBundlesList(this, "software_bundles", false);
  public get softwareBundles() {
    return this._softwareBundles;
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsSoftwareComponentsList(this, "software_components", false);
  public get softwareComponents() {
    return this._softwareComponents;
  }

  // source_location - computed: true, optional: false, required: false
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_bundle_count - computed: true, optional: false, required: false
  public get userBundleCount() {
    return this.getNumberAttribute('user_bundle_count');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsOutputReference {
    return new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexFirmwareRepositoryFilter {
  /**
  * List of bundle_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#bundle_count DataPowerflexFirmwareRepository#bundle_count}
  */
  readonly bundleCount?: number[];
  /**
  * List of component_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#component_count DataPowerflexFirmwareRepository#component_count}
  */
  readonly componentCount?: number[];
  /**
  * List of created_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#created_by DataPowerflexFirmwareRepository#created_by}
  */
  readonly createdBy?: string[];
  /**
  * List of created_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#created_date DataPowerflexFirmwareRepository#created_date}
  */
  readonly createdDate?: string[];
  /**
  * Value for custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#custom DataPowerflexFirmwareRepository#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Value for default_catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#default_catalog DataPowerflexFirmwareRepository#default_catalog}
  */
  readonly defaultCatalog?: boolean | cdktf.IResolvable;
  /**
  * List of disk_location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#disk_location DataPowerflexFirmwareRepository#disk_location}
  */
  readonly diskLocation?: string[];
  /**
  * List of download_progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#download_progress DataPowerflexFirmwareRepository#download_progress}
  */
  readonly downloadProgress?: number[];
  /**
  * List of download_status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#download_status DataPowerflexFirmwareRepository#download_status}
  */
  readonly downloadStatus?: string[];
  /**
  * Value for embedded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#embedded DataPowerflexFirmwareRepository#embedded}
  */
  readonly embedded?: boolean | cdktf.IResolvable;
  /**
  * List of extract_progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#extract_progress DataPowerflexFirmwareRepository#extract_progress}
  */
  readonly extractProgress?: number[];
  /**
  * List of filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#filename DataPowerflexFirmwareRepository#filename}
  */
  readonly filename?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#id DataPowerflexFirmwareRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of job_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#job_id DataPowerflexFirmwareRepository#job_id}
  */
  readonly jobId?: string[];
  /**
  * Value for minimal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#minimal DataPowerflexFirmwareRepository#minimal}
  */
  readonly minimal?: boolean | cdktf.IResolvable;
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#name DataPowerflexFirmwareRepository#name}
  */
  readonly name?: string[];
  /**
  * Value for needs_attention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#needs_attention DataPowerflexFirmwareRepository#needs_attention}
  */
  readonly needsAttention?: boolean | cdktf.IResolvable;
  /**
  * Value for rcmapproved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#rcmapproved DataPowerflexFirmwareRepository#rcmapproved}
  */
  readonly rcmapproved?: boolean | cdktf.IResolvable;
  /**
  * List of signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#signature DataPowerflexFirmwareRepository#signature}
  */
  readonly signature?: string[];
  /**
  * List of source_location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#source_location DataPowerflexFirmwareRepository#source_location}
  */
  readonly sourceLocation?: string[];
  /**
  * List of source_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#source_type DataPowerflexFirmwareRepository#source_type}
  */
  readonly sourceType?: string[];
  /**
  * List of state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#state DataPowerflexFirmwareRepository#state}
  */
  readonly state?: string[];
  /**
  * List of updated_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#updated_by DataPowerflexFirmwareRepository#updated_by}
  */
  readonly updatedBy?: string[];
  /**
  * List of updated_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#updated_date DataPowerflexFirmwareRepository#updated_date}
  */
  readonly updatedDate?: string[];
  /**
  * List of user_bundle_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#user_bundle_count DataPowerflexFirmwareRepository#user_bundle_count}
  */
  readonly userBundleCount?: number[];
  /**
  * List of username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#username DataPowerflexFirmwareRepository#username}
  */
  readonly username?: string[];
}

export function dataPowerflexFirmwareRepositoryFilterToTerraform(struct?: DataPowerflexFirmwareRepositoryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.bundleCount),
    component_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.componentCount),
    created_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdBy),
    created_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdDate),
    custom: cdktf.booleanToTerraform(struct!.custom),
    default_catalog: cdktf.booleanToTerraform(struct!.defaultCatalog),
    disk_location: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskLocation),
    download_progress: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.downloadProgress),
    download_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.downloadStatus),
    embedded: cdktf.booleanToTerraform(struct!.embedded),
    extract_progress: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.extractProgress),
    filename: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filename),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    job_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jobId),
    minimal: cdktf.booleanToTerraform(struct!.minimal),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    needs_attention: cdktf.booleanToTerraform(struct!.needsAttention),
    rcmapproved: cdktf.booleanToTerraform(struct!.rcmapproved),
    signature: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signature),
    source_location: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLocation),
    source_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceType),
    state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.state),
    updated_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedBy),
    updated_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedDate),
    user_bundle_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.userBundleCount),
    username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.username),
  }
}


export function dataPowerflexFirmwareRepositoryFilterToHclTerraform(struct?: DataPowerflexFirmwareRepositoryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.bundleCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    component_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.componentCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    created_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    created_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom: {
      value: cdktf.booleanToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_location: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskLocation),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    download_progress: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.downloadProgress),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    download_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.downloadStatus),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    embedded: {
      value: cdktf.booleanToHclTerraform(struct!.embedded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extract_progress: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.extractProgress),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    filename: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filename),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    job_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jobId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    minimal: {
      value: cdktf.booleanToHclTerraform(struct!.minimal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    needs_attention: {
      value: cdktf.booleanToHclTerraform(struct!.needsAttention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rcmapproved: {
      value: cdktf.booleanToHclTerraform(struct!.rcmapproved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signature: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signature),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_location: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLocation),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.state),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    updated_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    updated_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_bundle_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.userBundleCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.username),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexFirmwareRepositoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexFirmwareRepositoryFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleCount = this._bundleCount;
    }
    if (this._componentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentCount = this._componentCount;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdDate = this._createdDate;
    }
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._defaultCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCatalog = this._defaultCatalog;
    }
    if (this._diskLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskLocation = this._diskLocation;
    }
    if (this._downloadProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadProgress = this._downloadProgress;
    }
    if (this._downloadStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadStatus = this._downloadStatus;
    }
    if (this._embedded !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedded = this._embedded;
    }
    if (this._extractProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractProgress = this._extractProgress;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._minimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimal = this._minimal;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._needsAttention !== undefined) {
      hasAnyValues = true;
      internalValueResult.needsAttention = this._needsAttention;
    }
    if (this._rcmapproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcmapproved = this._rcmapproved;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._sourceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocation = this._sourceLocation;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._updatedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedDate = this._updatedDate;
    }
    if (this._userBundleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBundleCount = this._userBundleCount;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexFirmwareRepositoryFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleCount = undefined;
      this._componentCount = undefined;
      this._createdBy = undefined;
      this._createdDate = undefined;
      this._custom = undefined;
      this._defaultCatalog = undefined;
      this._diskLocation = undefined;
      this._downloadProgress = undefined;
      this._downloadStatus = undefined;
      this._embedded = undefined;
      this._extractProgress = undefined;
      this._filename = undefined;
      this._id = undefined;
      this._jobId = undefined;
      this._minimal = undefined;
      this._name = undefined;
      this._needsAttention = undefined;
      this._rcmapproved = undefined;
      this._signature = undefined;
      this._sourceLocation = undefined;
      this._sourceType = undefined;
      this._state = undefined;
      this._updatedBy = undefined;
      this._updatedDate = undefined;
      this._userBundleCount = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleCount = value.bundleCount;
      this._componentCount = value.componentCount;
      this._createdBy = value.createdBy;
      this._createdDate = value.createdDate;
      this._custom = value.custom;
      this._defaultCatalog = value.defaultCatalog;
      this._diskLocation = value.diskLocation;
      this._downloadProgress = value.downloadProgress;
      this._downloadStatus = value.downloadStatus;
      this._embedded = value.embedded;
      this._extractProgress = value.extractProgress;
      this._filename = value.filename;
      this._id = value.id;
      this._jobId = value.jobId;
      this._minimal = value.minimal;
      this._name = value.name;
      this._needsAttention = value.needsAttention;
      this._rcmapproved = value.rcmapproved;
      this._signature = value.signature;
      this._sourceLocation = value.sourceLocation;
      this._sourceType = value.sourceType;
      this._state = value.state;
      this._updatedBy = value.updatedBy;
      this._updatedDate = value.updatedDate;
      this._userBundleCount = value.userBundleCount;
      this._username = value.username;
    }
  }

  // bundle_count - computed: false, optional: true, required: false
  private _bundleCount?: number[]; 
  public get bundleCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('bundle_count')));
  }
  public set bundleCount(value: number[]) {
    this._bundleCount = value;
  }
  public resetBundleCount() {
    this._bundleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleCountInput() {
    return this._bundleCount;
  }

  // component_count - computed: false, optional: true, required: false
  private _componentCount?: number[]; 
  public get componentCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('component_count')));
  }
  public set componentCount(value: number[]) {
    this._componentCount = value;
  }
  public resetComponentCount() {
    this._componentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentCountInput() {
    return this._componentCount;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string[]; 
  public get createdBy() {
    return cdktf.Fn.tolist(this.getListAttribute('created_by'));
  }
  public set createdBy(value: string[]) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_date - computed: false, optional: true, required: false
  private _createdDate?: string[]; 
  public get createdDate() {
    return cdktf.Fn.tolist(this.getListAttribute('created_date'));
  }
  public set createdDate(value: string[]) {
    this._createdDate = value;
  }
  public resetCreatedDate() {
    this._createdDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdDateInput() {
    return this._createdDate;
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // default_catalog - computed: false, optional: true, required: false
  private _defaultCatalog?: boolean | cdktf.IResolvable; 
  public get defaultCatalog() {
    return this.getBooleanAttribute('default_catalog');
  }
  public set defaultCatalog(value: boolean | cdktf.IResolvable) {
    this._defaultCatalog = value;
  }
  public resetDefaultCatalog() {
    this._defaultCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCatalogInput() {
    return this._defaultCatalog;
  }

  // disk_location - computed: false, optional: true, required: false
  private _diskLocation?: string[]; 
  public get diskLocation() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_location'));
  }
  public set diskLocation(value: string[]) {
    this._diskLocation = value;
  }
  public resetDiskLocation() {
    this._diskLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLocationInput() {
    return this._diskLocation;
  }

  // download_progress - computed: false, optional: true, required: false
  private _downloadProgress?: number[]; 
  public get downloadProgress() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('download_progress')));
  }
  public set downloadProgress(value: number[]) {
    this._downloadProgress = value;
  }
  public resetDownloadProgress() {
    this._downloadProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadProgressInput() {
    return this._downloadProgress;
  }

  // download_status - computed: false, optional: true, required: false
  private _downloadStatus?: string[]; 
  public get downloadStatus() {
    return cdktf.Fn.tolist(this.getListAttribute('download_status'));
  }
  public set downloadStatus(value: string[]) {
    this._downloadStatus = value;
  }
  public resetDownloadStatus() {
    this._downloadStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadStatusInput() {
    return this._downloadStatus;
  }

  // embedded - computed: false, optional: true, required: false
  private _embedded?: boolean | cdktf.IResolvable; 
  public get embedded() {
    return this.getBooleanAttribute('embedded');
  }
  public set embedded(value: boolean | cdktf.IResolvable) {
    this._embedded = value;
  }
  public resetEmbedded() {
    this._embedded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedInput() {
    return this._embedded;
  }

  // extract_progress - computed: false, optional: true, required: false
  private _extractProgress?: number[]; 
  public get extractProgress() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('extract_progress')));
  }
  public set extractProgress(value: number[]) {
    this._extractProgress = value;
  }
  public resetExtractProgress() {
    this._extractProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractProgressInput() {
    return this._extractProgress;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string[]; 
  public get filename() {
    return cdktf.Fn.tolist(this.getListAttribute('filename'));
  }
  public set filename(value: string[]) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // job_id - computed: false, optional: true, required: false
  private _jobId?: string[]; 
  public get jobId() {
    return cdktf.Fn.tolist(this.getListAttribute('job_id'));
  }
  public set jobId(value: string[]) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // minimal - computed: false, optional: true, required: false
  private _minimal?: boolean | cdktf.IResolvable; 
  public get minimal() {
    return this.getBooleanAttribute('minimal');
  }
  public set minimal(value: boolean | cdktf.IResolvable) {
    this._minimal = value;
  }
  public resetMinimal() {
    this._minimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalInput() {
    return this._minimal;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // needs_attention - computed: false, optional: true, required: false
  private _needsAttention?: boolean | cdktf.IResolvable; 
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }
  public set needsAttention(value: boolean | cdktf.IResolvable) {
    this._needsAttention = value;
  }
  public resetNeedsAttention() {
    this._needsAttention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needsAttentionInput() {
    return this._needsAttention;
  }

  // rcmapproved - computed: false, optional: true, required: false
  private _rcmapproved?: boolean | cdktf.IResolvable; 
  public get rcmapproved() {
    return this.getBooleanAttribute('rcmapproved');
  }
  public set rcmapproved(value: boolean | cdktf.IResolvable) {
    this._rcmapproved = value;
  }
  public resetRcmapproved() {
    this._rcmapproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcmapprovedInput() {
    return this._rcmapproved;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string[]; 
  public get signature() {
    return cdktf.Fn.tolist(this.getListAttribute('signature'));
  }
  public set signature(value: string[]) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // source_location - computed: false, optional: true, required: false
  private _sourceLocation?: string[]; 
  public get sourceLocation() {
    return cdktf.Fn.tolist(this.getListAttribute('source_location'));
  }
  public set sourceLocation(value: string[]) {
    this._sourceLocation = value;
  }
  public resetSourceLocation() {
    this._sourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string[]; 
  public get sourceType() {
    return cdktf.Fn.tolist(this.getListAttribute('source_type'));
  }
  public set sourceType(value: string[]) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return cdktf.Fn.tolist(this.getListAttribute('state'));
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string[]; 
  public get updatedBy() {
    return cdktf.Fn.tolist(this.getListAttribute('updated_by'));
  }
  public set updatedBy(value: string[]) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // updated_date - computed: false, optional: true, required: false
  private _updatedDate?: string[]; 
  public get updatedDate() {
    return cdktf.Fn.tolist(this.getListAttribute('updated_date'));
  }
  public set updatedDate(value: string[]) {
    this._updatedDate = value;
  }
  public resetUpdatedDate() {
    this._updatedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedDateInput() {
    return this._updatedDate;
  }

  // user_bundle_count - computed: false, optional: true, required: false
  private _userBundleCount?: number[]; 
  public get userBundleCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_bundle_count')));
  }
  public set userBundleCount(value: number[]) {
    this._userBundleCount = value;
  }
  public resetUserBundleCount() {
    this._userBundleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBundleCountInput() {
    return this._userBundleCount;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string[]; 
  public get username() {
    return cdktf.Fn.tolist(this.getListAttribute('username'));
  }
  public set username(value: string[]) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository powerflex_firmware_repository}
*/
export class DataPowerflexFirmwareRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_firmware_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexFirmwareRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexFirmwareRepository to import
  * @param importFromId The id of the existing DataPowerflexFirmwareRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexFirmwareRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_firmware_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/firmware_repository powerflex_firmware_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexFirmwareRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexFirmwareRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_firmware_repository',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firmware_repository_details - computed: true, optional: false, required: false
  private _firmwareRepositoryDetails = new DataPowerflexFirmwareRepositoryFirmwareRepositoryDetailsList(this, "firmware_repository_details", false);
  public get firmwareRepositoryDetails() {
    return this._firmwareRepositoryDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexFirmwareRepositoryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexFirmwareRepositoryFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexFirmwareRepositoryFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexFirmwareRepositoryFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexFirmwareRepositoryFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
