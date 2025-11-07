// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubSoftwareSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_source#software_source_id DataOciOsManagementHubSoftwareSource#software_source_id}
  */
  readonly softwareSourceId: string;
}
export interface DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters {
}

export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersToTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference {
    return new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters {
}

export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersToTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // package_name - computed: true, optional: false, required: false
  public get packageName() {
    return this.getStringAttribute('package_name');
  }

  // package_name_pattern - computed: true, optional: false, required: false
  public get packageNamePattern() {
    return this.getStringAttribute('package_name_pattern');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference {
    return new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters {
}

export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersToTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // package_groups - computed: true, optional: false, required: false
  public get packageGroups() {
    return this.getListAttribute('package_groups');
  }
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference {
    return new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter {
}

export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterToTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_stream_profile_filters - computed: true, optional: false, required: false
  private _moduleStreamProfileFilters = new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList(this, "module_stream_profile_filters", false);
  public get moduleStreamProfileFilters() {
    return this._moduleStreamProfileFilters;
  }

  // package_filters - computed: true, optional: false, required: false
  private _packageFilters = new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList(this, "package_filters", false);
  public get packageFilters() {
    return this._packageFilters;
  }

  // package_group_filters - computed: true, optional: false, required: false
  private _packageGroupFilters = new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList(this, "package_group_filters", false);
  public get packageGroupFilters() {
    return this._packageGroupFilters;
  }
}

export class DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference {
    return new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourceVendorSoftwareSources {
}

export function dataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesToTerraform(struct?: DataOciOsManagementHubSoftwareSourceVendorSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourceVendorSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourceVendorSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourceVendorSoftwareSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference {
    return new DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_source oci_os_management_hub_software_source}
*/
export class DataOciOsManagementHubSoftwareSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_software_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubSoftwareSource to import
  * @param importFromId The id of the existing DataOciOsManagementHubSoftwareSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubSoftwareSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_software_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_source oci_os_management_hub_software_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubSoftwareSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_software_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._softwareSourceId = config.softwareSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_repo_options - computed: true, optional: false, required: false
  public get advancedRepoOptions() {
    return this.getStringAttribute('advanced_repo_options');
  }

  // arch_type - computed: true, optional: false, required: false
  public get archType() {
    return this.getStringAttribute('arch_type');
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // availability_at_oci - computed: true, optional: false, required: false
  public get availabilityAtOci() {
    return this.getStringAttribute('availability_at_oci');
  }

  // checksum_type - computed: true, optional: false, required: false
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_software_source_filter - computed: true, optional: false, required: false
  private _customSoftwareSourceFilter = new DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList(this, "custom_software_source_filter", false);
  public get customSoftwareSourceFilter() {
    return this._customSoftwareSourceFilter;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gpg_key_fingerprint - computed: true, optional: false, required: false
  public get gpgKeyFingerprint() {
    return this.getStringAttribute('gpg_key_fingerprint');
  }

  // gpg_key_id - computed: true, optional: false, required: false
  public get gpgKeyId() {
    return this.getStringAttribute('gpg_key_id');
  }

  // gpg_key_url - computed: true, optional: false, required: false
  public get gpgKeyUrl() {
    return this.getStringAttribute('gpg_key_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_resolve_dependencies - computed: true, optional: false, required: false
  public get isAutoResolveDependencies() {
    return this.getBooleanAttribute('is_auto_resolve_dependencies');
  }

  // is_automatically_updated - computed: true, optional: false, required: false
  public get isAutomaticallyUpdated() {
    return this.getBooleanAttribute('is_automatically_updated');
  }

  // is_created_from_package_list - computed: true, optional: false, required: false
  public get isCreatedFromPackageList() {
    return this.getBooleanAttribute('is_created_from_package_list');
  }

  // is_gpg_check_enabled - computed: true, optional: false, required: false
  public get isGpgCheckEnabled() {
    return this.getBooleanAttribute('is_gpg_check_enabled');
  }

  // is_latest_content_only - computed: true, optional: false, required: false
  public get isLatestContentOnly() {
    return this.getBooleanAttribute('is_latest_content_only');
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // is_mirror_sync_allowed - computed: true, optional: false, required: false
  public get isMirrorSyncAllowed() {
    return this.getBooleanAttribute('is_mirror_sync_allowed');
  }

  // is_ssl_verify_enabled - computed: true, optional: false, required: false
  public get isSslVerifyEnabled() {
    return this.getBooleanAttribute('is_ssl_verify_enabled');
  }

  // origin_software_source_id - computed: true, optional: false, required: false
  public get originSoftwareSourceId() {
    return this.getStringAttribute('origin_software_source_id');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // package_count - computed: true, optional: false, required: false
  public get packageCount() {
    return this.getStringAttribute('package_count');
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getListAttribute('packages');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // software_source_id - computed: false, optional: false, required: true
  private _softwareSourceId?: string; 
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdInput() {
    return this._softwareSourceId;
  }

  // software_source_sub_type - computed: true, optional: false, required: false
  public get softwareSourceSubType() {
    return this.getStringAttribute('software_source_sub_type');
  }

  // software_source_type - computed: true, optional: false, required: false
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }

  // software_source_version - computed: true, optional: false, required: false
  public get softwareSourceVersion() {
    return this.getStringAttribute('software_source_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_metadata_updated - computed: true, optional: false, required: false
  public get timeMetadataUpdated() {
    return this.getStringAttribute('time_metadata_updated');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // vendor_software_sources - computed: true, optional: false, required: false
  private _vendorSoftwareSources = new DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList(this, "vendor_software_sources", false);
  public get vendorSoftwareSources() {
    return this._vendorSoftwareSources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      software_source_id: cdktf.stringToTerraform(this._softwareSourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      software_source_id: {
        value: cdktf.stringToHclTerraform(this._softwareSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
