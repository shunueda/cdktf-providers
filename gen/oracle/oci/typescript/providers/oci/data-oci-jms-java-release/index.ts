// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_java_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_java_release#id DataOciJmsJavaRelease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_java_release#release_version DataOciJmsJavaRelease#release_version}
  */
  readonly releaseVersion: string;
}
export interface DataOciJmsJavaReleaseArtifacts {
}

export function dataOciJmsJavaReleaseArtifactsToTerraform(struct?: DataOciJmsJavaReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleaseArtifactsToHclTerraform(struct?: DataOciJmsJavaReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleaseArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleaseArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleaseArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_file_size_in_bytes - computed: true, optional: false, required: false
  public get approximateFileSizeInBytes() {
    return this.getStringAttribute('approximate_file_size_in_bytes');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // artifact_content_type - computed: true, optional: false, required: false
  public get artifactContentType() {
    return this.getStringAttribute('artifact_content_type');
  }

  // artifact_description - computed: true, optional: false, required: false
  public get artifactDescription() {
    return this.getStringAttribute('artifact_description');
  }

  // artifact_file_name - computed: true, optional: false, required: false
  public get artifactFileName() {
    return this.getStringAttribute('artifact_file_name');
  }

  // artifact_id - computed: true, optional: false, required: false
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }

  // download_url - computed: true, optional: false, required: false
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_type_detail - computed: true, optional: false, required: false
  public get packageTypeDetail() {
    return this.getStringAttribute('package_type_detail');
  }

  // script_checksum_url - computed: true, optional: false, required: false
  public get scriptChecksumUrl() {
    return this.getStringAttribute('script_checksum_url');
  }

  // script_download_url - computed: true, optional: false, required: false
  public get scriptDownloadUrl() {
    return this.getStringAttribute('script_download_url');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataOciJmsJavaReleaseArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleaseArtifactsOutputReference {
    return new DataOciJmsJavaReleaseArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifacts {
}

export function dataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsToTerraform(struct?: DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsToHclTerraform(struct?: DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_file_size_in_bytes - computed: true, optional: false, required: false
  public get approximateFileSizeInBytes() {
    return this.getStringAttribute('approximate_file_size_in_bytes');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // artifact_content_type - computed: true, optional: false, required: false
  public get artifactContentType() {
    return this.getStringAttribute('artifact_content_type');
  }

  // artifact_description - computed: true, optional: false, required: false
  public get artifactDescription() {
    return this.getStringAttribute('artifact_description');
  }

  // artifact_file_name - computed: true, optional: false, required: false
  public get artifactFileName() {
    return this.getStringAttribute('artifact_file_name');
  }

  // artifact_id - computed: true, optional: false, required: false
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }

  // download_url - computed: true, optional: false, required: false
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_type_detail - computed: true, optional: false, required: false
  public get packageTypeDetail() {
    return this.getStringAttribute('package_type_detail');
  }

  // script_checksum_url - computed: true, optional: false, required: false
  public get scriptChecksumUrl() {
    return this.getStringAttribute('script_checksum_url');
  }

  // script_download_url - computed: true, optional: false, required: false
  public get scriptDownloadUrl() {
    return this.getStringAttribute('script_download_url');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsOutputReference {
    return new DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleaseFamilyDetails {
}

export function dataOciJmsJavaReleaseFamilyDetailsToTerraform(struct?: DataOciJmsJavaReleaseFamilyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleaseFamilyDetailsToHclTerraform(struct?: DataOciJmsJavaReleaseFamilyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleaseFamilyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleaseFamilyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleaseFamilyDetails | undefined) {
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

  // doc_url - computed: true, optional: false, required: false
  public get docUrl() {
    return this.getStringAttribute('doc_url');
  }

  // end_of_support_life_date - computed: true, optional: false, required: false
  public get endOfSupportLifeDate() {
    return this.getStringAttribute('end_of_support_life_date');
  }

  // family_version - computed: true, optional: false, required: false
  public get familyVersion() {
    return this.getStringAttribute('family_version');
  }

  // is_supported_version - computed: true, optional: false, required: false
  public get isSupportedVersion() {
    return this.getBooleanAttribute('is_supported_version');
  }

  // latest_release_artifacts - computed: true, optional: false, required: false
  private _latestReleaseArtifacts = new DataOciJmsJavaReleaseFamilyDetailsLatestReleaseArtifactsList(this, "latest_release_artifacts", false);
  public get latestReleaseArtifacts() {
    return this._latestReleaseArtifacts;
  }

  // latest_release_version - computed: true, optional: false, required: false
  public get latestReleaseVersion() {
    return this.getStringAttribute('latest_release_version');
  }

  // license_types - computed: true, optional: false, required: false
  public get licenseTypes() {
    return this.getListAttribute('license_types');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // support_type - computed: true, optional: false, required: false
  public get supportType() {
    return this.getStringAttribute('support_type');
  }
}

export class DataOciJmsJavaReleaseFamilyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleaseFamilyDetailsOutputReference {
    return new DataOciJmsJavaReleaseFamilyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleaseLicenseDetails {
}

export function dataOciJmsJavaReleaseLicenseDetailsToTerraform(struct?: DataOciJmsJavaReleaseLicenseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleaseLicenseDetailsToHclTerraform(struct?: DataOciJmsJavaReleaseLicenseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleaseLicenseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleaseLicenseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleaseLicenseDetails | undefined) {
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

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // license_url - computed: true, optional: false, required: false
  public get licenseUrl() {
    return this.getStringAttribute('license_url');
  }
}

export class DataOciJmsJavaReleaseLicenseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleaseLicenseDetailsOutputReference {
    return new DataOciJmsJavaReleaseLicenseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleaseMosPatches {
}

export function dataOciJmsJavaReleaseMosPatchesToTerraform(struct?: DataOciJmsJavaReleaseMosPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleaseMosPatchesToHclTerraform(struct?: DataOciJmsJavaReleaseMosPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleaseMosPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleaseMosPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleaseMosPatches | undefined) {
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

  // patch_url - computed: true, optional: false, required: false
  public get patchUrl() {
    return this.getStringAttribute('patch_url');
  }
}

export class DataOciJmsJavaReleaseMosPatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleaseMosPatchesOutputReference {
    return new DataOciJmsJavaReleaseMosPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_java_release oci_jms_java_release}
*/
export class DataOciJmsJavaRelease extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsJavaRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsJavaRelease to import
  * @param importFromId The id of the existing DataOciJmsJavaRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_java_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsJavaRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_java_release oci_jms_java_release} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_release',
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
    this._id = config.id;
    this._releaseVersion = config.releaseVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_content_types - computed: true, optional: false, required: false
  public get artifactContentTypes() {
    return this.getListAttribute('artifact_content_types');
  }

  // artifacts - computed: true, optional: false, required: false
  private _artifacts = new DataOciJmsJavaReleaseArtifactsList(this, "artifacts", false);
  public get artifacts() {
    return this._artifacts;
  }

  // days_under_security_baseline - computed: true, optional: false, required: false
  public get daysUnderSecurityBaseline() {
    return this.getNumberAttribute('days_under_security_baseline');
  }

  // family_details - computed: true, optional: false, required: false
  private _familyDetails = new DataOciJmsJavaReleaseFamilyDetailsList(this, "family_details", false);
  public get familyDetails() {
    return this._familyDetails;
  }

  // family_version - computed: true, optional: false, required: false
  public get familyVersion() {
    return this.getStringAttribute('family_version');
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

  // license_details - computed: true, optional: false, required: false
  private _licenseDetails = new DataOciJmsJavaReleaseLicenseDetailsList(this, "license_details", false);
  public get licenseDetails() {
    return this._licenseDetails;
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // mos_patches - computed: true, optional: false, required: false
  private _mosPatches = new DataOciJmsJavaReleaseMosPatchesList(this, "mos_patches", false);
  public get mosPatches() {
    return this._mosPatches;
  }

  // parent_release_version - computed: true, optional: false, required: false
  public get parentReleaseVersion() {
    return this.getStringAttribute('parent_release_version');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // release_notes_url - computed: true, optional: false, required: false
  public get releaseNotesUrl() {
    return this.getStringAttribute('release_notes_url');
  }

  // release_type - computed: true, optional: false, required: false
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }

  // release_version - computed: false, optional: false, required: true
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
  }

  // security_status - computed: true, optional: false, required: false
  public get securityStatus() {
    return this.getStringAttribute('security_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      release_version: cdktf.stringToTerraform(this._releaseVersion),
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
      release_version: {
        value: cdktf.stringToHclTerraform(this._releaseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
