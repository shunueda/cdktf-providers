// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsManagementHubSoftwareSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#advanced_repo_options OsManagementHubSoftwareSource#advanced_repo_options}
  */
  readonly advancedRepoOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#arch_type OsManagementHubSoftwareSource#arch_type}
  */
  readonly archType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#compartment_id OsManagementHubSoftwareSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#defined_tags OsManagementHubSoftwareSource#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#description OsManagementHubSoftwareSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#freeform_tags OsManagementHubSoftwareSource#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#gpg_key_url OsManagementHubSoftwareSource#gpg_key_url}
  */
  readonly gpgKeyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_auto_resolve_dependencies OsManagementHubSoftwareSource#is_auto_resolve_dependencies}
  */
  readonly isAutoResolveDependencies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_automatically_updated OsManagementHubSoftwareSource#is_automatically_updated}
  */
  readonly isAutomaticallyUpdated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_created_from_package_list OsManagementHubSoftwareSource#is_created_from_package_list}
  */
  readonly isCreatedFromPackageList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_gpg_check_enabled OsManagementHubSoftwareSource#is_gpg_check_enabled}
  */
  readonly isGpgCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_latest_content_only OsManagementHubSoftwareSource#is_latest_content_only}
  */
  readonly isLatestContentOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_mirror_sync_allowed OsManagementHubSoftwareSource#is_mirror_sync_allowed}
  */
  readonly isMirrorSyncAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#is_ssl_verify_enabled OsManagementHubSoftwareSource#is_ssl_verify_enabled}
  */
  readonly isSslVerifyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#origin_software_source_id OsManagementHubSoftwareSource#origin_software_source_id}
  */
  readonly originSoftwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#os_family OsManagementHubSoftwareSource#os_family}
  */
  readonly osFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#packages OsManagementHubSoftwareSource#packages}
  */
  readonly packages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#software_source_sub_type OsManagementHubSoftwareSource#software_source_sub_type}
  */
  readonly softwareSourceSubType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#software_source_type OsManagementHubSoftwareSource#software_source_type}
  */
  readonly softwareSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#software_source_version OsManagementHubSoftwareSource#software_source_version}
  */
  readonly softwareSourceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#url OsManagementHubSoftwareSource#url}
  */
  readonly url?: string;
  /**
  * custom_software_source_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#custom_software_source_filter OsManagementHubSoftwareSource#custom_software_source_filter}
  */
  readonly customSoftwareSourceFilter?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#timeouts OsManagementHubSoftwareSource#timeouts}
  */
  readonly timeouts?: OsManagementHubSoftwareSourceTimeouts;
  /**
  * vendor_software_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#vendor_software_sources OsManagementHubSoftwareSource#vendor_software_sources}
  */
  readonly vendorSoftwareSources?: OsManagementHubSoftwareSourceVendorSoftwareSources[] | cdktf.IResolvable;
}
export interface OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#module_name OsManagementHubSoftwareSource#module_name}
  */
  readonly moduleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#profile_name OsManagementHubSoftwareSource#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#stream_name OsManagementHubSoftwareSource#stream_name}
  */
  readonly streamName?: string;
}

export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersToTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    module_name: cdktf.stringToTerraform(struct!.moduleName),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersToHclTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._moduleName = undefined;
      this._profileName = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._moduleName = value.moduleName;
      this._profileName = value.profileName;
      this._streamName = value.streamName;
    }
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // module_name - computed: true, optional: true, required: false
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // stream_name - computed: true, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference {
    return new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#package_name OsManagementHubSoftwareSource#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#package_name_pattern OsManagementHubSoftwareSource#package_name_pattern}
  */
  readonly packageNamePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#package_version OsManagementHubSoftwareSource#package_version}
  */
  readonly packageVersion?: string;
}

export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersToTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    package_name_pattern: cdktf.stringToTerraform(struct!.packageNamePattern),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
  }
}


export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersToHclTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.packageNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktf.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._packageNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamePattern = this._packageNamePattern;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._packageName = undefined;
      this._packageNamePattern = undefined;
      this._packageVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._packageName = value.packageName;
      this._packageNamePattern = value.packageNamePattern;
      this._packageVersion = value.packageVersion;
    }
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // package_name - computed: true, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_name_pattern - computed: true, optional: true, required: false
  private _packageNamePattern?: string; 
  public get packageNamePattern() {
    return this.getStringAttribute('package_name_pattern');
  }
  public set packageNamePattern(value: string) {
    this._packageNamePattern = value;
  }
  public resetPackageNamePattern() {
    this._packageNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamePatternInput() {
    return this._packageNamePattern;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference {
    return new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#filter_type OsManagementHubSoftwareSource#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#package_groups OsManagementHubSoftwareSource#package_groups}
  */
  readonly packageGroups?: string[];
}

export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersToTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    package_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageGroups),
  }
}


export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersToHclTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._packageGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageGroups = this._packageGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._packageGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._packageGroups = value.packageGroups;
    }
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // package_groups - computed: true, optional: true, required: false
  private _packageGroups?: string[]; 
  public get packageGroups() {
    return this.getListAttribute('package_groups');
  }
  public set packageGroups(value: string[]) {
    this._packageGroups = value;
  }
  public resetPackageGroups() {
    this._packageGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageGroupsInput() {
    return this._packageGroups;
  }
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference {
    return new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsManagementHubSoftwareSourceCustomSoftwareSourceFilter {
  /**
  * module_stream_profile_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#module_stream_profile_filters OsManagementHubSoftwareSource#module_stream_profile_filters}
  */
  readonly moduleStreamProfileFilters?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters[] | cdktf.IResolvable;
  /**
  * package_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#package_filters OsManagementHubSoftwareSource#package_filters}
  */
  readonly packageFilters?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters[] | cdktf.IResolvable;
  /**
  * package_group_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#package_group_filters OsManagementHubSoftwareSource#package_group_filters}
  */
  readonly packageGroupFilters?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters[] | cdktf.IResolvable;
}

export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterToTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference | OsManagementHubSoftwareSourceCustomSoftwareSourceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_stream_profile_filters: cdktf.listMapper(osManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersToTerraform, true)(struct!.moduleStreamProfileFilters),
    package_filters: cdktf.listMapper(osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersToTerraform, true)(struct!.packageFilters),
    package_group_filters: cdktf.listMapper(osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersToTerraform, true)(struct!.packageGroupFilters),
  }
}


export function osManagementHubSoftwareSourceCustomSoftwareSourceFilterToHclTerraform(struct?: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference | OsManagementHubSoftwareSourceCustomSoftwareSourceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_stream_profile_filters: {
      value: cdktf.listMapperHcl(osManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersToHclTerraform, true)(struct!.moduleStreamProfileFilters),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList",
    },
    package_filters: {
      value: cdktf.listMapperHcl(osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersToHclTerraform, true)(struct!.packageFilters),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList",
    },
    package_group_filters: {
      value: cdktf.listMapperHcl(osManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersToHclTerraform, true)(struct!.packageGroupFilters),
      isBlock: true,
      type: "list",
      storageClassType: "OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsManagementHubSoftwareSourceCustomSoftwareSourceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleStreamProfileFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleStreamProfileFilters = this._moduleStreamProfileFilters?.internalValue;
    }
    if (this._packageFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageFilters = this._packageFilters?.internalValue;
    }
    if (this._packageGroupFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageGroupFilters = this._packageGroupFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._moduleStreamProfileFilters.internalValue = undefined;
      this._packageFilters.internalValue = undefined;
      this._packageGroupFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._moduleStreamProfileFilters.internalValue = value.moduleStreamProfileFilters;
      this._packageFilters.internalValue = value.packageFilters;
      this._packageGroupFilters.internalValue = value.packageGroupFilters;
    }
  }

  // module_stream_profile_filters - computed: false, optional: true, required: false
  private _moduleStreamProfileFilters = new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList(this, "module_stream_profile_filters", false);
  public get moduleStreamProfileFilters() {
    return this._moduleStreamProfileFilters;
  }
  public putModuleStreamProfileFilters(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters[] | cdktf.IResolvable) {
    this._moduleStreamProfileFilters.internalValue = value;
  }
  public resetModuleStreamProfileFilters() {
    this._moduleStreamProfileFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleStreamProfileFiltersInput() {
    return this._moduleStreamProfileFilters.internalValue;
  }

  // package_filters - computed: false, optional: true, required: false
  private _packageFilters = new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList(this, "package_filters", false);
  public get packageFilters() {
    return this._packageFilters;
  }
  public putPackageFilters(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters[] | cdktf.IResolvable) {
    this._packageFilters.internalValue = value;
  }
  public resetPackageFilters() {
    this._packageFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageFiltersInput() {
    return this._packageFilters.internalValue;
  }

  // package_group_filters - computed: false, optional: true, required: false
  private _packageGroupFilters = new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList(this, "package_group_filters", false);
  public get packageGroupFilters() {
    return this._packageGroupFilters;
  }
  public putPackageGroupFilters(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters[] | cdktf.IResolvable) {
    this._packageGroupFilters.internalValue = value;
  }
  public resetPackageGroupFilters() {
    this._packageGroupFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageGroupFiltersInput() {
    return this._packageGroupFilters.internalValue;
  }
}
export interface OsManagementHubSoftwareSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#create OsManagementHubSoftwareSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#delete OsManagementHubSoftwareSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#update OsManagementHubSoftwareSource#update}
  */
  readonly update?: string;
}

export function osManagementHubSoftwareSourceTimeoutsToTerraform(struct?: OsManagementHubSoftwareSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function osManagementHubSoftwareSourceTimeoutsToHclTerraform(struct?: OsManagementHubSoftwareSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsManagementHubSoftwareSourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface OsManagementHubSoftwareSourceVendorSoftwareSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#display_name OsManagementHubSoftwareSource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#id OsManagementHubSoftwareSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function osManagementHubSoftwareSourceVendorSoftwareSourcesToTerraform(struct?: OsManagementHubSoftwareSourceVendorSoftwareSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function osManagementHubSoftwareSourceVendorSoftwareSourcesToHclTerraform(struct?: OsManagementHubSoftwareSourceVendorSoftwareSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsManagementHubSoftwareSourceVendorSoftwareSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsManagementHubSoftwareSourceVendorSoftwareSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class OsManagementHubSoftwareSourceVendorSoftwareSourcesList extends cdktf.ComplexList {
  public internalValue? : OsManagementHubSoftwareSourceVendorSoftwareSources[] | cdktf.IResolvable

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
  public get(index: number): OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference {
    return new OsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source oci_os_management_hub_software_source}
*/
export class OsManagementHubSoftwareSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_software_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsManagementHubSoftwareSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsManagementHubSoftwareSource to import
  * @param importFromId The id of the existing OsManagementHubSoftwareSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsManagementHubSoftwareSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_software_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/os_management_hub_software_source oci_os_management_hub_software_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsManagementHubSoftwareSourceConfig
  */
  public constructor(scope: Construct, id: string, config: OsManagementHubSoftwareSourceConfig) {
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
    this._advancedRepoOptions = config.advancedRepoOptions;
    this._archType = config.archType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gpgKeyUrl = config.gpgKeyUrl;
    this._id = config.id;
    this._isAutoResolveDependencies = config.isAutoResolveDependencies;
    this._isAutomaticallyUpdated = config.isAutomaticallyUpdated;
    this._isCreatedFromPackageList = config.isCreatedFromPackageList;
    this._isGpgCheckEnabled = config.isGpgCheckEnabled;
    this._isLatestContentOnly = config.isLatestContentOnly;
    this._isMirrorSyncAllowed = config.isMirrorSyncAllowed;
    this._isSslVerifyEnabled = config.isSslVerifyEnabled;
    this._originSoftwareSourceId = config.originSoftwareSourceId;
    this._osFamily = config.osFamily;
    this._packages = config.packages;
    this._softwareSourceSubType = config.softwareSourceSubType;
    this._softwareSourceType = config.softwareSourceType;
    this._softwareSourceVersion = config.softwareSourceVersion;
    this._url = config.url;
    this._customSoftwareSourceFilter.internalValue = config.customSoftwareSourceFilter;
    this._timeouts.internalValue = config.timeouts;
    this._vendorSoftwareSources.internalValue = config.vendorSoftwareSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_repo_options - computed: true, optional: true, required: false
  private _advancedRepoOptions?: string; 
  public get advancedRepoOptions() {
    return this.getStringAttribute('advanced_repo_options');
  }
  public set advancedRepoOptions(value: string) {
    this._advancedRepoOptions = value;
  }
  public resetAdvancedRepoOptions() {
    this._advancedRepoOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRepoOptionsInput() {
    return this._advancedRepoOptions;
  }

  // arch_type - computed: true, optional: true, required: false
  private _archType?: string; 
  public get archType() {
    return this.getStringAttribute('arch_type');
  }
  public set archType(value: string) {
    this._archType = value;
  }
  public resetArchType() {
    this._archType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
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

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
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

  // gpg_key_url - computed: true, optional: true, required: false
  private _gpgKeyUrl?: string; 
  public get gpgKeyUrl() {
    return this.getStringAttribute('gpg_key_url');
  }
  public set gpgKeyUrl(value: string) {
    this._gpgKeyUrl = value;
  }
  public resetGpgKeyUrl() {
    this._gpgKeyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeyUrlInput() {
    return this._gpgKeyUrl;
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

  // is_auto_resolve_dependencies - computed: true, optional: true, required: false
  private _isAutoResolveDependencies?: boolean | cdktf.IResolvable; 
  public get isAutoResolveDependencies() {
    return this.getBooleanAttribute('is_auto_resolve_dependencies');
  }
  public set isAutoResolveDependencies(value: boolean | cdktf.IResolvable) {
    this._isAutoResolveDependencies = value;
  }
  public resetIsAutoResolveDependencies() {
    this._isAutoResolveDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoResolveDependenciesInput() {
    return this._isAutoResolveDependencies;
  }

  // is_automatically_updated - computed: true, optional: true, required: false
  private _isAutomaticallyUpdated?: boolean | cdktf.IResolvable; 
  public get isAutomaticallyUpdated() {
    return this.getBooleanAttribute('is_automatically_updated');
  }
  public set isAutomaticallyUpdated(value: boolean | cdktf.IResolvable) {
    this._isAutomaticallyUpdated = value;
  }
  public resetIsAutomaticallyUpdated() {
    this._isAutomaticallyUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutomaticallyUpdatedInput() {
    return this._isAutomaticallyUpdated;
  }

  // is_created_from_package_list - computed: true, optional: true, required: false
  private _isCreatedFromPackageList?: boolean | cdktf.IResolvable; 
  public get isCreatedFromPackageList() {
    return this.getBooleanAttribute('is_created_from_package_list');
  }
  public set isCreatedFromPackageList(value: boolean | cdktf.IResolvable) {
    this._isCreatedFromPackageList = value;
  }
  public resetIsCreatedFromPackageList() {
    this._isCreatedFromPackageList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCreatedFromPackageListInput() {
    return this._isCreatedFromPackageList;
  }

  // is_gpg_check_enabled - computed: true, optional: true, required: false
  private _isGpgCheckEnabled?: boolean | cdktf.IResolvable; 
  public get isGpgCheckEnabled() {
    return this.getBooleanAttribute('is_gpg_check_enabled');
  }
  public set isGpgCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._isGpgCheckEnabled = value;
  }
  public resetIsGpgCheckEnabled() {
    this._isGpgCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGpgCheckEnabledInput() {
    return this._isGpgCheckEnabled;
  }

  // is_latest_content_only - computed: true, optional: true, required: false
  private _isLatestContentOnly?: boolean | cdktf.IResolvable; 
  public get isLatestContentOnly() {
    return this.getBooleanAttribute('is_latest_content_only');
  }
  public set isLatestContentOnly(value: boolean | cdktf.IResolvable) {
    this._isLatestContentOnly = value;
  }
  public resetIsLatestContentOnly() {
    this._isLatestContentOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLatestContentOnlyInput() {
    return this._isLatestContentOnly;
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // is_mirror_sync_allowed - computed: true, optional: true, required: false
  private _isMirrorSyncAllowed?: boolean | cdktf.IResolvable; 
  public get isMirrorSyncAllowed() {
    return this.getBooleanAttribute('is_mirror_sync_allowed');
  }
  public set isMirrorSyncAllowed(value: boolean | cdktf.IResolvable) {
    this._isMirrorSyncAllowed = value;
  }
  public resetIsMirrorSyncAllowed() {
    this._isMirrorSyncAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMirrorSyncAllowedInput() {
    return this._isMirrorSyncAllowed;
  }

  // is_ssl_verify_enabled - computed: true, optional: true, required: false
  private _isSslVerifyEnabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyEnabled() {
    return this.getBooleanAttribute('is_ssl_verify_enabled');
  }
  public set isSslVerifyEnabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyEnabled = value;
  }
  public resetIsSslVerifyEnabled() {
    this._isSslVerifyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyEnabledInput() {
    return this._isSslVerifyEnabled;
  }

  // origin_software_source_id - computed: true, optional: true, required: false
  private _originSoftwareSourceId?: string; 
  public get originSoftwareSourceId() {
    return this.getStringAttribute('origin_software_source_id');
  }
  public set originSoftwareSourceId(value: string) {
    this._originSoftwareSourceId = value;
  }
  public resetOriginSoftwareSourceId() {
    this._originSoftwareSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSoftwareSourceIdInput() {
    return this._originSoftwareSourceId;
  }

  // os_family - computed: true, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // package_count - computed: true, optional: false, required: false
  public get packageCount() {
    return this.getStringAttribute('package_count');
  }

  // packages - computed: true, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // software_source_sub_type - computed: true, optional: true, required: false
  private _softwareSourceSubType?: string; 
  public get softwareSourceSubType() {
    return this.getStringAttribute('software_source_sub_type');
  }
  public set softwareSourceSubType(value: string) {
    this._softwareSourceSubType = value;
  }
  public resetSoftwareSourceSubType() {
    this._softwareSourceSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceSubTypeInput() {
    return this._softwareSourceSubType;
  }

  // software_source_type - computed: false, optional: false, required: true
  private _softwareSourceType?: string; 
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }
  public set softwareSourceType(value: string) {
    this._softwareSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceTypeInput() {
    return this._softwareSourceType;
  }

  // software_source_version - computed: true, optional: true, required: false
  private _softwareSourceVersion?: string; 
  public get softwareSourceVersion() {
    return this.getStringAttribute('software_source_version');
  }
  public set softwareSourceVersion(value: string) {
    this._softwareSourceVersion = value;
  }
  public resetSoftwareSourceVersion() {
    this._softwareSourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceVersionInput() {
    return this._softwareSourceVersion;
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // custom_software_source_filter - computed: false, optional: true, required: false
  private _customSoftwareSourceFilter = new OsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference(this, "custom_software_source_filter");
  public get customSoftwareSourceFilter() {
    return this._customSoftwareSourceFilter;
  }
  public putCustomSoftwareSourceFilter(value: OsManagementHubSoftwareSourceCustomSoftwareSourceFilter) {
    this._customSoftwareSourceFilter.internalValue = value;
  }
  public resetCustomSoftwareSourceFilter() {
    this._customSoftwareSourceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSoftwareSourceFilterInput() {
    return this._customSoftwareSourceFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsManagementHubSoftwareSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsManagementHubSoftwareSourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vendor_software_sources - computed: false, optional: true, required: false
  private _vendorSoftwareSources = new OsManagementHubSoftwareSourceVendorSoftwareSourcesList(this, "vendor_software_sources", false);
  public get vendorSoftwareSources() {
    return this._vendorSoftwareSources;
  }
  public putVendorSoftwareSources(value: OsManagementHubSoftwareSourceVendorSoftwareSources[] | cdktf.IResolvable) {
    this._vendorSoftwareSources.internalValue = value;
  }
  public resetVendorSoftwareSources() {
    this._vendorSoftwareSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSoftwareSourcesInput() {
    return this._vendorSoftwareSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_repo_options: cdktf.stringToTerraform(this._advancedRepoOptions),
      arch_type: cdktf.stringToTerraform(this._archType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gpg_key_url: cdktf.stringToTerraform(this._gpgKeyUrl),
      id: cdktf.stringToTerraform(this._id),
      is_auto_resolve_dependencies: cdktf.booleanToTerraform(this._isAutoResolveDependencies),
      is_automatically_updated: cdktf.booleanToTerraform(this._isAutomaticallyUpdated),
      is_created_from_package_list: cdktf.booleanToTerraform(this._isCreatedFromPackageList),
      is_gpg_check_enabled: cdktf.booleanToTerraform(this._isGpgCheckEnabled),
      is_latest_content_only: cdktf.booleanToTerraform(this._isLatestContentOnly),
      is_mirror_sync_allowed: cdktf.booleanToTerraform(this._isMirrorSyncAllowed),
      is_ssl_verify_enabled: cdktf.booleanToTerraform(this._isSslVerifyEnabled),
      origin_software_source_id: cdktf.stringToTerraform(this._originSoftwareSourceId),
      os_family: cdktf.stringToTerraform(this._osFamily),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
      software_source_sub_type: cdktf.stringToTerraform(this._softwareSourceSubType),
      software_source_type: cdktf.stringToTerraform(this._softwareSourceType),
      software_source_version: cdktf.stringToTerraform(this._softwareSourceVersion),
      url: cdktf.stringToTerraform(this._url),
      custom_software_source_filter: osManagementHubSoftwareSourceCustomSoftwareSourceFilterToTerraform(this._customSoftwareSourceFilter.internalValue),
      timeouts: osManagementHubSoftwareSourceTimeoutsToTerraform(this._timeouts.internalValue),
      vendor_software_sources: cdktf.listMapper(osManagementHubSoftwareSourceVendorSoftwareSourcesToTerraform, true)(this._vendorSoftwareSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_repo_options: {
        value: cdktf.stringToHclTerraform(this._advancedRepoOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch_type: {
        value: cdktf.stringToHclTerraform(this._archType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gpg_key_url: {
        value: cdktf.stringToHclTerraform(this._gpgKeyUrl),
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
      is_auto_resolve_dependencies: {
        value: cdktf.booleanToHclTerraform(this._isAutoResolveDependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_automatically_updated: {
        value: cdktf.booleanToHclTerraform(this._isAutomaticallyUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_created_from_package_list: {
        value: cdktf.booleanToHclTerraform(this._isCreatedFromPackageList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_gpg_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._isGpgCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_latest_content_only: {
        value: cdktf.booleanToHclTerraform(this._isLatestContentOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mirror_sync_allowed: {
        value: cdktf.booleanToHclTerraform(this._isMirrorSyncAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ssl_verify_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSslVerifyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin_software_source_id: {
        value: cdktf.stringToHclTerraform(this._originSoftwareSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_family: {
        value: cdktf.stringToHclTerraform(this._osFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_source_sub_type: {
        value: cdktf.stringToHclTerraform(this._softwareSourceSubType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_source_type: {
        value: cdktf.stringToHclTerraform(this._softwareSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_source_version: {
        value: cdktf.stringToHclTerraform(this._softwareSourceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_software_source_filter: {
        value: osManagementHubSoftwareSourceCustomSoftwareSourceFilterToHclTerraform(this._customSoftwareSourceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubSoftwareSourceCustomSoftwareSourceFilterList",
      },
      timeouts: {
        value: osManagementHubSoftwareSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsManagementHubSoftwareSourceTimeouts",
      },
      vendor_software_sources: {
        value: cdktf.listMapperHcl(osManagementHubSoftwareSourceVendorSoftwareSourcesToHclTerraform, true)(this._vendorSoftwareSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsManagementHubSoftwareSourceVendorSoftwareSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
