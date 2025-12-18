// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaReleasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}
  */
  readonly familyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}
  */
  readonly jreSecurityStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}
  */
  readonly releaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}
  */
  readonly releaseVersion?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#filter DataOciJmsJavaReleases#filter}
  */
  readonly filter?: DataOciJmsJavaReleasesFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts | undefined) {
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

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts | undefined) {
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

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails | undefined) {
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
  private _latestReleaseArtifacts = new DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList(this, "latest_release_artifacts", false);
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

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails | undefined) {
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

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches | undefined) {
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

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesJavaReleaseCollectionItems {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionItemsToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_content_types - computed: true, optional: false, required: false
  public get artifactContentTypes() {
    return this.getListAttribute('artifact_content_types');
  }

  // artifacts - computed: true, optional: false, required: false
  private _artifacts = new DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList(this, "artifacts", false);
  public get artifacts() {
    return this._artifacts;
  }

  // days_under_security_baseline - computed: true, optional: false, required: false
  public get daysUnderSecurityBaseline() {
    return this.getNumberAttribute('days_under_security_baseline');
  }

  // family_details - computed: true, optional: false, required: false
  private _familyDetails = new DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList(this, "family_details", false);
  public get familyDetails() {
    return this._familyDetails;
  }

  // family_version - computed: true, optional: false, required: false
  public get familyVersion() {
    return this.getStringAttribute('family_version');
  }

  // license_details - computed: true, optional: false, required: false
  private _licenseDetails = new DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList(this, "license_details", false);
  public get licenseDetails() {
    return this._licenseDetails;
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // mos_patches - computed: true, optional: false, required: false
  private _mosPatches = new DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList(this, "mos_patches", false);
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

  // release_version - computed: true, optional: false, required: false
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }

  // security_status - computed: true, optional: false, required: false
  public get securityStatus() {
    return this.getStringAttribute('security_status');
  }
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesJavaReleaseCollection {
}

export function dataOciJmsJavaReleasesJavaReleaseCollectionToTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaReleasesJavaReleaseCollectionToHclTerraform(struct?: DataOciJmsJavaReleasesJavaReleaseCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesJavaReleaseCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesJavaReleaseCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsJavaReleasesJavaReleaseCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsJavaReleasesJavaReleaseCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference {
    return new DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaReleasesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#name DataOciJmsJavaReleases#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#regex DataOciJmsJavaReleases#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#values DataOciJmsJavaReleases#values}
  */
  readonly values: string[];
}

export function dataOciJmsJavaReleasesFilterToTerraform(struct?: DataOciJmsJavaReleasesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciJmsJavaReleasesFilterToHclTerraform(struct?: DataOciJmsJavaReleasesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciJmsJavaReleasesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaReleasesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaReleasesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciJmsJavaReleasesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsJavaReleasesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsJavaReleasesFilterOutputReference {
    return new DataOciJmsJavaReleasesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases oci_jms_java_releases}
*/
export class DataOciJmsJavaReleases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_releases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsJavaReleases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsJavaReleases to import
  * @param importFromId The id of the existing DataOciJmsJavaReleases that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsJavaReleases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_releases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_releases oci_jms_java_releases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaReleasesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaReleasesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_releases',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._familyVersion = config.familyVersion;
    this._id = config.id;
    this._jreSecurityStatus = config.jreSecurityStatus;
    this._licenseType = config.licenseType;
    this._releaseType = config.releaseType;
    this._releaseVersion = config.releaseVersion;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // family_version - computed: false, optional: true, required: false
  private _familyVersion?: string; 
  public get familyVersion() {
    return this.getStringAttribute('family_version');
  }
  public set familyVersion(value: string) {
    this._familyVersion = value;
  }
  public resetFamilyVersion() {
    this._familyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyVersionInput() {
    return this._familyVersion;
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

  // java_release_collection - computed: true, optional: false, required: false
  private _javaReleaseCollection = new DataOciJmsJavaReleasesJavaReleaseCollectionList(this, "java_release_collection", false);
  public get javaReleaseCollection() {
    return this._javaReleaseCollection;
  }

  // jre_security_status - computed: false, optional: true, required: false
  private _jreSecurityStatus?: string; 
  public get jreSecurityStatus() {
    return this.getStringAttribute('jre_security_status');
  }
  public set jreSecurityStatus(value: string) {
    this._jreSecurityStatus = value;
  }
  public resetJreSecurityStatus() {
    this._jreSecurityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jreSecurityStatusInput() {
    return this._jreSecurityStatus;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // release_type - computed: false, optional: true, required: false
  private _releaseType?: string; 
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }
  public set releaseType(value: string) {
    this._releaseType = value;
  }
  public resetReleaseType() {
    this._releaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseTypeInput() {
    return this._releaseType;
  }

  // release_version - computed: false, optional: true, required: false
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  public resetReleaseVersion() {
    this._releaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsJavaReleasesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsJavaReleasesFilter[] | cdktf.IResolvable) {
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
      family_version: cdktf.stringToTerraform(this._familyVersion),
      id: cdktf.stringToTerraform(this._id),
      jre_security_status: cdktf.stringToTerraform(this._jreSecurityStatus),
      license_type: cdktf.stringToTerraform(this._licenseType),
      release_type: cdktf.stringToTerraform(this._releaseType),
      release_version: cdktf.stringToTerraform(this._releaseVersion),
      filter: cdktf.listMapper(dataOciJmsJavaReleasesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      family_version: {
        value: cdktf.stringToHclTerraform(this._familyVersion),
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
      jre_security_status: {
        value: cdktf.stringToHclTerraform(this._jreSecurityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_type: {
        value: cdktf.stringToHclTerraform(this._releaseType),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsJavaReleasesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsJavaReleasesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
