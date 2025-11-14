// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightFirmwareServerConfigurationUtilityDistributableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#account_moid DataIntersightFirmwareServerConfigurationUtilityDistributable#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The bundle type of the image, as published on cisco.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#bundle_type DataIntersightFirmwareServerConfigurationUtilityDistributable#bundle_type}
  */
  readonly bundleType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#create_time DataIntersightFirmwareServerConfigurationUtilityDistributable#create_time}
  */
  readonly createTime?: string;
  /**
  * User provided description about the file. Cisco provided description for image inventoried from a Cisco repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#description DataIntersightFirmwareServerConfigurationUtilityDistributable#description}
  */
  readonly description?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#domain_group_moid DataIntersightFirmwareServerConfigurationUtilityDistributable#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * The number of times this file has been downloaded from the local repository. It is used by the repository monitoring process to determine the files that are to be evicted from the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#download_count DataIntersightFirmwareServerConfigurationUtilityDistributable#download_count}
  */
  readonly downloadCount?: number;
  /**
  * The name of the feature to which the uploaded file belongs.
  * * `System` - This indicates system initiated file uploads.
  * * `OpenAPIImport` - This indicates an OpenAPI file upload.
  * * `PartnerIntegrationImport` - This indicates a Partner-Integration Appliance user file uploads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#feature_source DataIntersightFirmwareServerConfigurationUtilityDistributable#feature_source}
  */
  readonly featureSource?: string;
  /**
  * The unique identifier for an image in a Cisco repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#guid DataIntersightFirmwareServerConfigurationUtilityDistributable#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#id DataIntersightFirmwareServerConfigurationUtilityDistributable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of image which the distributable falls into according to the component it can upgrade. For e.g.; Standalone server, Intersight managed server, UCS Managed Fabric Interconnect. The field is used in private appliance mode, where image does not have description populated from CCO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#image_type DataIntersightFirmwareServerConfigurationUtilityDistributable#image_type}
  */
  readonly imageType?: string;
  /**
  * The action to be performed on the imported file. If 'PreCache' is set, the image will be cached in Appliance. Applicable in Intersight appliance deployment. If 'Evict' is set, the cached file will be removed. Applicable in Intersight appliance deployment. If 'GeneratePreSignedUploadUrl' is set, generates pre signed URL (s) for the file to be imported into the repository. Applicable for local machine source. The URL (s) will be populated under LocalMachine file server. If 'CompleteImportProcess' is set, the ImportState is marked as 'Imported'. Applicable for local machine source. If 'Cancel' is set, the ImportState is marked as 'Failed'. Applicable for local machine source.
  * * `None` - No action should be taken on the imported file.
  * * `GeneratePreSignedUploadUrl` - Generate pre signed URL of file for importing into the repository.
  * * `GeneratePreSignedDownloadUrl` - Generate pre signed URL of file in the repository to download.
  * * `CompleteImportProcess` - Mark that the import process of the file into the repository is complete.
  * * `MarkImportFailed` - Mark to indicate that the import process of the file into the repository failed.
  * * `PreCache` - Cache the file into the Intersight Appliance.
  * * `Cancel` - The cancel import process for the file into the repository.
  * * `Extract` - The action to extract the file in the external repository.
  * * `Evict` - Evict the cached file from the Intersight Appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#import_action DataIntersightFirmwareServerConfigurationUtilityDistributable#import_action}
  */
  readonly importAction?: string;
  /**
  * The state  of this file in the repository or Appliance. The importState is updated during the import operation and as part of the repository monitoring process.
  * * `ReadyForImport` - The image is ready to be imported into the repository.
  * * `Importing` - The image is being imported into the repository.
  * * `Imported` - The image has been extracted and imported into the repository.
  * * `PendingExtraction` - Indicates that the image has been imported but not extracted in the repository.
  * * `Extracting` - Indicates that the image is being extracted into the repository.
  * * `Extracted` - Indicates that the image has been extracted into the repository.
  * * `Failed` - The image import from an external source to the repository has failed.
  * * `MetaOnly` - The image is present in an external repository.
  * * `ReadyForCache` - The image is ready to be cached into the Intersight Appliance.
  * * `Caching` - Indicates that the image is being cached into the Intersight Appliance or endpoint cache.
  * * `Cached` - Indicates that the image has been cached into the Intersight Appliance or endpoint cache.
  * * `CachingFailed` - Indicates that the image caching into the Intersight Appliance failed or endpoint cache.
  * * `Corrupted` - Indicates that the image in the local repository (or endpoint cache) has been corrupted after it was cached.
  * * `Evicted` - Indicates that the image has been evicted from the Intersight Appliance (or endpoint cache) to reclaim storage space.
  * * `Invalid` - Indicates that the corresponding distributable MO has been removed from the backend. This can be due to unpublishing of an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#import_state DataIntersightFirmwareServerConfigurationUtilityDistributable#import_state}
  */
  readonly importState?: string;
  /**
  * The time at which this image or file was imported/cached into the repositry. if the 'ImportState' is 'Imported', the time at which this image or file was imported. if the 'ImportState' is 'Cached', the time at which this image or file was cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#imported_time DataIntersightFirmwareServerConfigurationUtilityDistributable#imported_time}
  */
  readonly importedTime?: string;
  /**
  * The time at which this file was last downloaded from the local repository. It is used by the repository monitoring process to determine the files that are to be evicted from the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#last_access_time DataIntersightFirmwareServerConfigurationUtilityDistributable#last_access_time}
  */
  readonly lastAccessTime?: string;
  /**
  * The MD5 ETag for a file that is stored in Intersight repository or in the appliance cache. Warning - MD5 is currently broken and this will be migrated to SHA shortly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#md5e_tag DataIntersightFirmwareServerConfigurationUtilityDistributable#md5e_tag}
  */
  readonly md5ETag?: string;
  /**
  * The md5sum checksum of the file. This information is available for all Cisco distributed images and files imported to the local repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#md5sum DataIntersightFirmwareServerConfigurationUtilityDistributable#md5sum}
  */
  readonly md5Sum?: string;
  /**
  * The mdfid of the image provided by cisco.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#mdfid DataIntersightFirmwareServerConfigurationUtilityDistributable#mdfid}
  */
  readonly mdfid?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#mod_time DataIntersightFirmwareServerConfigurationUtilityDistributable#mod_time}
  */
  readonly modTime?: string;
  /**
  * The endpoint model for which this firmware image is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#model DataIntersightFirmwareServerConfigurationUtilityDistributable#model}
  */
  readonly model?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The name of the file. It is populated as part of the image import operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#name DataIntersightFirmwareServerConfigurationUtilityDistributable#name}
  */
  readonly name?: string;
  /**
  * Vendor provided version for the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#nr_version DataIntersightFirmwareServerConfigurationUtilityDistributable#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#owners DataIntersightFirmwareServerConfigurationUtilityDistributable#owners}
  */
  readonly owners?: string[];
  /**
  * The platform type of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#platform_type DataIntersightFirmwareServerConfigurationUtilityDistributable#platform_type}
  */
  readonly platformType?: string;
  /**
  * The build which is recommended by Cisco.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#recommended_build DataIntersightFirmwareServerConfigurationUtilityDistributable#recommended_build}
  */
  readonly recommendedBuild?: string;
  /**
  * The date on which the file was released or distributed by its vendor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#release_date DataIntersightFirmwareServerConfigurationUtilityDistributable#release_date}
  */
  readonly releaseDate?: string;
  /**
  * The url for the release notes of this image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#release_notes_url DataIntersightFirmwareServerConfigurationUtilityDistributable#release_notes_url}
  */
  readonly releaseNotesUrl?: string;
  /**
  * The sha512sum of the file. This information is available for all Cisco distributed images and files imported to the local repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#sha512sum DataIntersightFirmwareServerConfigurationUtilityDistributable#sha512sum}
  */
  readonly sha512Sum?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#shared_scope DataIntersightFirmwareServerConfigurationUtilityDistributable#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * The size (in bytes) of the file. This information is available for all Cisco distributed images and files imported to the local repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#size DataIntersightFirmwareServerConfigurationUtilityDistributable#size}
  */
  readonly size?: number;
  /**
  * The software advisory, if any, provided by the vendor for this file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#software_advisory_url DataIntersightFirmwareServerConfigurationUtilityDistributable#software_advisory_url}
  */
  readonly softwareAdvisoryUrl?: string;
  /**
  * The software type id provided by cisco.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#software_type_id DataIntersightFirmwareServerConfigurationUtilityDistributable#software_type_id}
  */
  readonly softwareTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#supported_models DataIntersightFirmwareServerConfigurationUtilityDistributable#supported_models}
  */
  readonly supportedModels?: string[];
  /**
  * The vendor or publisher of this file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#vendor DataIntersightFirmwareServerConfigurationUtilityDistributable#vendor}
  */
  readonly vendor?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#ancestors DataIntersightFirmwareServerConfigurationUtilityDistributable#ancestors}
  */
  readonly ancestors?: DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors[] | cdktf.IResolvable;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#catalog DataIntersightFirmwareServerConfigurationUtilityDistributable#catalog}
  */
  readonly catalog?: DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog;
  /**
  * component_meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#component_meta DataIntersightFirmwareServerConfigurationUtilityDistributable#component_meta}
  */
  readonly componentMeta?: DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta[] | cdktf.IResolvable;
  /**
  * distributable_metas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#distributable_metas DataIntersightFirmwareServerConfigurationUtilityDistributable#distributable_metas}
  */
  readonly distributableMetas?: DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas[] | cdktf.IResolvable;
  /**
  * nr_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#nr_source DataIntersightFirmwareServerConfigurationUtilityDistributable#nr_source}
  */
  readonly nrSource?: DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#parent DataIntersightFirmwareServerConfigurationUtilityDistributable#parent}
  */
  readonly parent?: DataIntersightFirmwareServerConfigurationUtilityDistributableParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#permission_resources DataIntersightFirmwareServerConfigurationUtilityDistributable#permission_resources}
  */
  readonly permissionResources?: DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources[] | cdktf.IResolvable;
  /**
  * release block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#release DataIntersightFirmwareServerConfigurationUtilityDistributable#release}
  */
  readonly release?: DataIntersightFirmwareServerConfigurationUtilityDistributableRelease;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#tags DataIntersightFirmwareServerConfigurationUtilityDistributable#tags}
  */
  readonly tags?: DataIntersightFirmwareServerConfigurationUtilityDistributableTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#version_context DataIntersightFirmwareServerConfigurationUtilityDistributable#version_context}
  */
  readonly versionContext?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext;
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestors {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalog {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMeta {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // alternate_packed_version - computed: true, optional: false, required: false
  public get alternatePackedVersion() {
    return this.getStringAttribute('alternate_packed_version');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // component_label - computed: true, optional: false, required: false
  public get componentLabel() {
    return this.getStringAttribute('component_label');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disruption - computed: true, optional: false, required: false
  public get disruption() {
    return this.getStringAttribute('disruption');
  }

  // image_path - computed: true, optional: false, required: false
  public get imagePath() {
    return this.getStringAttribute('image_path');
  }

  // is_oob_supported - computed: true, optional: false, required: false
  public get isOobSupported() {
    return this.getBooleanAttribute('is_oob_supported');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // oob_manageability - computed: true, optional: false, required: false
  public get oobManageability() {
    return this.getListAttribute('oob_manageability');
  }

  // packed_version - computed: true, optional: false, required: false
  public get packedVersion() {
    return this.getStringAttribute('packed_version');
  }

  // redfish_url - computed: true, optional: false, required: false
  public get redfishUrl() {
    return this.getStringAttribute('redfish_url');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetas {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSource {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParent {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResources {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsRelease {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsRelease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsRelease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitions {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinition {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTags {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // sys_tag - computed: true, optional: false, required: false
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMos {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMo {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContext {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableResults {
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableResultsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // bundle_type - computed: true, optional: false, required: false
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // component_meta - computed: true, optional: false, required: false
  private _componentMeta = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsComponentMetaList(this, "component_meta", false);
  public get componentMeta() {
    return this._componentMeta;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distributable_metas - computed: true, optional: false, required: false
  private _distributableMetas = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsDistributableMetasList(this, "distributable_metas", false);
  public get distributableMetas() {
    return this._distributableMetas;
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // download_count - computed: true, optional: false, required: false
  public get downloadCount() {
    return this.getNumberAttribute('download_count');
  }

  // feature_source - computed: true, optional: false, required: false
  public get featureSource() {
    return this.getStringAttribute('feature_source');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // import_action - computed: true, optional: false, required: false
  public get importAction() {
    return this.getStringAttribute('import_action');
  }

  // import_state - computed: true, optional: false, required: false
  public get importState() {
    return this.getStringAttribute('import_state');
  }

  // imported_time - computed: true, optional: false, required: false
  public get importedTime() {
    return this.getStringAttribute('imported_time');
  }

  // last_access_time - computed: true, optional: false, required: false
  public get lastAccessTime() {
    return this.getStringAttribute('last_access_time');
  }

  // md5e_tag - computed: true, optional: false, required: false
  public get md5ETag() {
    return this.getStringAttribute('md5e_tag');
  }

  // md5sum - computed: true, optional: false, required: false
  public get md5Sum() {
    return this.getStringAttribute('md5sum');
  }

  // mdfid - computed: true, optional: false, required: false
  public get mdfid() {
    return this.getStringAttribute('mdfid');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nr_source - computed: true, optional: false, required: false
  private _nrSource = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsNrSourceList(this, "nr_source", false);
  public get nrSource() {
    return this._nrSource;
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // platform_type - computed: true, optional: false, required: false
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }

  // recommended_build - computed: true, optional: false, required: false
  public get recommendedBuild() {
    return this.getStringAttribute('recommended_build');
  }

  // release - computed: true, optional: false, required: false
  private _release = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsReleaseList(this, "release", false);
  public get release() {
    return this._release;
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // release_notes_url - computed: true, optional: false, required: false
  public get releaseNotesUrl() {
    return this.getStringAttribute('release_notes_url');
  }

  // sha512sum - computed: true, optional: false, required: false
  public get sha512Sum() {
    return this.getStringAttribute('sha512sum');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // software_advisory_url - computed: true, optional: false, required: false
  public get softwareAdvisoryUrl() {
    return this.getStringAttribute('software_advisory_url');
  }

  // software_type_id - computed: true, optional: false, required: false
  public get softwareTypeId() {
    return this.getStringAttribute('software_type_id');
  }

  // supported_models - computed: true, optional: false, required: false
  public get supportedModels() {
    return this.getListAttribute('supported_models');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableResultsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableCatalogToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableCatalogOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableCatalogToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableCatalogOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Certain components have multiple versions packaged in the distributable. For example, the GPU component has multiple versions of the image packaged in the distributable due to a different onboard chip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#alternate_packed_version DataIntersightFirmwareServerConfigurationUtilityDistributable#alternate_packed_version}
  */
  readonly alternatePackedVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The name of the component in the compressed HSU bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#component_label DataIntersightFirmwareServerConfigurationUtilityDistributable#component_label}
  */
  readonly componentLabel?: string;
  /**
  * The type of component image within the distributable.
  * * `ALL` - This represents all the components.
  * * `ALL,HDD` - This represents all the components plus the HDDs.
  * * `Drive-U.2` - This represents the U.2 drives that are SFF/LFF drives (mostly all the drives will fall under this category).
  * * `Storage` - This represents the storage controller components.
  * * `None` - This represents none of the components.
  * * `NXOS` - This represents NXOS components.
  * * `ESU` - This represents ESU components.
  * * `IOM` - This represents IOM components.
  * * `PSU` - This represents PSU components.
  * * `CIMC` - This represents CIMC components.
  * * `BIOS` - This represents BIOS components.
  * * `PCIE` - This represents PCIE components.
  * * `Drive` - This represents Drive components.
  * * `DIMM` - This represents DIMM components.
  * * `BoardController` - This represents Board Controller components.
  * * `StorageController` - This represents Storage Controller components.
  * * `Storage-Sasexpander` - This represents Storage Sas-Expander components.
  * * `Storage-U.2` - This represents U2 Storage Controller components.
  * * `HBA` - This represents HBA components.
  * * `GPU` - This represents GPU components.
  * * `SasExpander` - This represents SasExpander components.
  * * `MSwitch` - This represents mSwitch components.
  * * `CMC` - This represents CMC components.
  * * `PSX` - This represents PSX components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#component_type DataIntersightFirmwareServerConfigurationUtilityDistributable#component_type}
  */
  readonly componentType?: string;
  /**
  * This shows the description of component image within the distributable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#description DataIntersightFirmwareServerConfigurationUtilityDistributable#description}
  */
  readonly description?: string;
  /**
  * The type of disruption on each component. For example, host reboot, automatic power cycle, and manual power cycle.
  * * `None` - Indicates that the component did not receive a disruption request.
  * * `HostReboot` - Indicates that the component received a host reboot request.
  * * `EndpointReboot` - Indicates that the component received an end point reboot request.
  * * `ManualPowerCycle` - Indicates that the component received a manual power cycle request.
  * * `AutomaticPowerCycle` - Indicates that the component received an automatic power cycle request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#disruption DataIntersightFirmwareServerConfigurationUtilityDistributable#disruption}
  */
  readonly disruption?: string;
  /**
  * This shows the path of component image within the distributable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#image_path DataIntersightFirmwareServerConfigurationUtilityDistributable#image_path}
  */
  readonly imagePath?: string;
  /**
  * If set, the component can be updated through out-of-band management, else, is updated through host service utility boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#is_oob_supported DataIntersightFirmwareServerConfigurationUtilityDistributable#is_oob_supported}
  */
  readonly isOobSupported?: boolean | cdktf.IResolvable;
  /**
  * The model of the component image in the distributable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#model DataIntersightFirmwareServerConfigurationUtilityDistributable#model}
  */
  readonly model?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#oob_manageability DataIntersightFirmwareServerConfigurationUtilityDistributable#oob_manageability}
  */
  readonly oobManageability?: string[];
  /**
  * The image version of components packaged in the distributable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#packed_version DataIntersightFirmwareServerConfigurationUtilityDistributable#packed_version}
  */
  readonly packedVersion?: string;
  /**
  * The redfish target for each component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#redfish_url DataIntersightFirmwareServerConfigurationUtilityDistributable#redfish_url}
  */
  readonly redfishUrl?: string;
  /**
  * The version of component image in the distributable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#vendor DataIntersightFirmwareServerConfigurationUtilityDistributable#vendor}
  */
  readonly vendor?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    alternate_packed_version: cdktf.stringToTerraform(struct!.alternatePackedVersion),
    class_id: cdktf.stringToTerraform(struct!.classId),
    component_label: cdktf.stringToTerraform(struct!.componentLabel),
    component_type: cdktf.stringToTerraform(struct!.componentType),
    description: cdktf.stringToTerraform(struct!.description),
    disruption: cdktf.stringToTerraform(struct!.disruption),
    image_path: cdktf.stringToTerraform(struct!.imagePath),
    is_oob_supported: cdktf.booleanToTerraform(struct!.isOobSupported),
    model: cdktf.stringToTerraform(struct!.model),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    oob_manageability: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oobManageability),
    packed_version: cdktf.stringToTerraform(struct!.packedVersion),
    redfish_url: cdktf.stringToTerraform(struct!.redfishUrl),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alternate_packed_version: {
      value: cdktf.stringToHclTerraform(struct!.alternatePackedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_label: {
      value: cdktf.stringToHclTerraform(struct!.componentLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_type: {
      value: cdktf.stringToHclTerraform(struct!.componentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disruption: {
      value: cdktf.stringToHclTerraform(struct!.disruption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_path: {
      value: cdktf.stringToHclTerraform(struct!.imagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_oob_supported: {
      value: cdktf.booleanToHclTerraform(struct!.isOobSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oob_manageability: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oobManageability),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packed_version: {
      value: cdktf.stringToHclTerraform(struct!.packedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_url: {
      value: cdktf.stringToHclTerraform(struct!.redfishUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._alternatePackedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternatePackedVersion = this._alternatePackedVersion;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._componentLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentLabel = this._componentLabel;
    }
    if (this._componentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disruption !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruption = this._disruption;
    }
    if (this._imagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePath = this._imagePath;
    }
    if (this._isOobSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOobSupported = this._isOobSupported;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._oobManageability !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobManageability = this._oobManageability;
    }
    if (this._packedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packedVersion = this._packedVersion;
    }
    if (this._redfishUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishUrl = this._redfishUrl;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._alternatePackedVersion = undefined;
      this._classId = undefined;
      this._componentLabel = undefined;
      this._componentType = undefined;
      this._description = undefined;
      this._disruption = undefined;
      this._imagePath = undefined;
      this._isOobSupported = undefined;
      this._model = undefined;
      this._objectType = undefined;
      this._oobManageability = undefined;
      this._packedVersion = undefined;
      this._redfishUrl = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._alternatePackedVersion = value.alternatePackedVersion;
      this._classId = value.classId;
      this._componentLabel = value.componentLabel;
      this._componentType = value.componentType;
      this._description = value.description;
      this._disruption = value.disruption;
      this._imagePath = value.imagePath;
      this._isOobSupported = value.isOobSupported;
      this._model = value.model;
      this._objectType = value.objectType;
      this._oobManageability = value.oobManageability;
      this._packedVersion = value.packedVersion;
      this._redfishUrl = value.redfishUrl;
      this._vendor = value.vendor;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // alternate_packed_version - computed: false, optional: true, required: false
  private _alternatePackedVersion?: string; 
  public get alternatePackedVersion() {
    return this.getStringAttribute('alternate_packed_version');
  }
  public set alternatePackedVersion(value: string) {
    this._alternatePackedVersion = value;
  }
  public resetAlternatePackedVersion() {
    this._alternatePackedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatePackedVersionInput() {
    return this._alternatePackedVersion;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // component_label - computed: false, optional: true, required: false
  private _componentLabel?: string; 
  public get componentLabel() {
    return this.getStringAttribute('component_label');
  }
  public set componentLabel(value: string) {
    this._componentLabel = value;
  }
  public resetComponentLabel() {
    this._componentLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentLabelInput() {
    return this._componentLabel;
  }

  // component_type - computed: false, optional: true, required: false
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  public resetComponentType() {
    this._componentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // description - computed: false, optional: true, required: false
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

  // disruption - computed: false, optional: true, required: false
  private _disruption?: string; 
  public get disruption() {
    return this.getStringAttribute('disruption');
  }
  public set disruption(value: string) {
    this._disruption = value;
  }
  public resetDisruption() {
    this._disruption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionInput() {
    return this._disruption;
  }

  // image_path - computed: false, optional: true, required: false
  private _imagePath?: string; 
  public get imagePath() {
    return this.getStringAttribute('image_path');
  }
  public set imagePath(value: string) {
    this._imagePath = value;
  }
  public resetImagePath() {
    this._imagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePathInput() {
    return this._imagePath;
  }

  // is_oob_supported - computed: false, optional: true, required: false
  private _isOobSupported?: boolean | cdktf.IResolvable; 
  public get isOobSupported() {
    return this.getBooleanAttribute('is_oob_supported');
  }
  public set isOobSupported(value: boolean | cdktf.IResolvable) {
    this._isOobSupported = value;
  }
  public resetIsOobSupported() {
    this._isOobSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOobSupportedInput() {
    return this._isOobSupported;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // oob_manageability - computed: false, optional: true, required: false
  private _oobManageability?: string[]; 
  public get oobManageability() {
    return this.getListAttribute('oob_manageability');
  }
  public set oobManageability(value: string[]) {
    this._oobManageability = value;
  }
  public resetOobManageability() {
    this._oobManageability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobManageabilityInput() {
    return this._oobManageability;
  }

  // packed_version - computed: false, optional: true, required: false
  private _packedVersion?: string; 
  public get packedVersion() {
    return this.getStringAttribute('packed_version');
  }
  public set packedVersion(value: string) {
    this._packedVersion = value;
  }
  public resetPackedVersion() {
    this._packedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packedVersionInput() {
    return this._packedVersion;
  }

  // redfish_url - computed: false, optional: true, required: false
  private _redfishUrl?: string; 
  public get redfishUrl() {
    return this.getStringAttribute('redfish_url');
  }
  public set redfishUrl(value: string) {
    this._redfishUrl = value;
  }
  public resetRedfishUrl() {
    this._redfishUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishUrlInput() {
    return this._redfishUrl;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  * The enum values provides the list of concrete types that can be instantiated from this abstract type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  * The enum values provides the list of concrete types that can be instantiated from this abstract type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableParentToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableParentOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableParentToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableParentOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableRelease {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableReleaseToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableReleaseOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableReleaseToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableReleaseOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableRelease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableRelease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableRelease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#key DataIntersightFirmwareServerConfigurationUtilityDistributable#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#propagated DataIntersightFirmwareServerConfigurationUtilityDistributable#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#sys_tag DataIntersightFirmwareServerConfigurationUtilityDistributable#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#type DataIntersightFirmwareServerConfigurationUtilityDistributable#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#value DataIntersightFirmwareServerConfigurationUtilityDistributable#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#ancestor_definitions DataIntersightFirmwareServerConfigurationUtilityDistributable#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#definition DataIntersightFirmwareServerConfigurationUtilityDistributable#definition}
  */
  readonly definition?: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableTagsToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableTagsToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // sys_tag - computed: false, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightFirmwareServerConfigurationUtilityDistributableTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributableTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableTagsOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosOutputReference {
    return new DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#moid DataIntersightFirmwareServerConfigurationUtilityDistributable#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#selector DataIntersightFirmwareServerConfigurationUtilityDistributable#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#additional_properties DataIntersightFirmwareServerConfigurationUtilityDistributable#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#class_id DataIntersightFirmwareServerConfigurationUtilityDistributable#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#marked_for_deletion DataIntersightFirmwareServerConfigurationUtilityDistributable#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#nr_version DataIntersightFirmwareServerConfigurationUtilityDistributable#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#object_type DataIntersightFirmwareServerConfigurationUtilityDistributable#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#timestamp DataIntersightFirmwareServerConfigurationUtilityDistributable#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#version_type DataIntersightFirmwareServerConfigurationUtilityDistributable#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#interested_mos DataIntersightFirmwareServerConfigurationUtilityDistributable#interested_mos}
  */
  readonly interestedMos?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#ref_mo DataIntersightFirmwareServerConfigurationUtilityDistributable#ref_mo}
  */
  readonly refMo?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo;
}

export function dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextToTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextToHclTerraform(struct?: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextOutputReference | DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable intersight_firmware_server_configuration_utility_distributable}
*/
export class DataIntersightFirmwareServerConfigurationUtilityDistributable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_firmware_server_configuration_utility_distributable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightFirmwareServerConfigurationUtilityDistributable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightFirmwareServerConfigurationUtilityDistributable to import
  * @param importFromId The id of the existing DataIntersightFirmwareServerConfigurationUtilityDistributable that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightFirmwareServerConfigurationUtilityDistributable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_firmware_server_configuration_utility_distributable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/firmware_server_configuration_utility_distributable intersight_firmware_server_configuration_utility_distributable} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightFirmwareServerConfigurationUtilityDistributableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightFirmwareServerConfigurationUtilityDistributableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_firmware_server_configuration_utility_distributable',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.73',
        providerVersionConstraint: '1.0.73'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._bundleType = config.bundleType;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._description = config.description;
    this._domainGroupMoid = config.domainGroupMoid;
    this._downloadCount = config.downloadCount;
    this._featureSource = config.featureSource;
    this._guid = config.guid;
    this._id = config.id;
    this._imageType = config.imageType;
    this._importAction = config.importAction;
    this._importState = config.importState;
    this._importedTime = config.importedTime;
    this._lastAccessTime = config.lastAccessTime;
    this._md5ETag = config.md5ETag;
    this._md5Sum = config.md5Sum;
    this._mdfid = config.mdfid;
    this._modTime = config.modTime;
    this._model = config.model;
    this._moid = config.moid;
    this._name = config.name;
    this._nrVersion = config.nrVersion;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._platformType = config.platformType;
    this._recommendedBuild = config.recommendedBuild;
    this._releaseDate = config.releaseDate;
    this._releaseNotesUrl = config.releaseNotesUrl;
    this._sha512Sum = config.sha512Sum;
    this._sharedScope = config.sharedScope;
    this._size = config.size;
    this._softwareAdvisoryUrl = config.softwareAdvisoryUrl;
    this._softwareTypeId = config.softwareTypeId;
    this._supportedModels = config.supportedModels;
    this._vendor = config.vendor;
    this._ancestors.internalValue = config.ancestors;
    this._catalog.internalValue = config.catalog;
    this._componentMeta.internalValue = config.componentMeta;
    this._distributableMetas.internalValue = config.distributableMetas;
    this._nrSource.internalValue = config.nrSource;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._release.internalValue = config.release;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bundle_type - computed: false, optional: true, required: false
  private _bundleType?: string; 
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }
  public set bundleType(value: string) {
    this._bundleType = value;
  }
  public resetBundleType() {
    this._bundleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleTypeInput() {
    return this._bundleType;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // description - computed: false, optional: true, required: false
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

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // download_count - computed: false, optional: true, required: false
  private _downloadCount?: number; 
  public get downloadCount() {
    return this.getNumberAttribute('download_count');
  }
  public set downloadCount(value: number) {
    this._downloadCount = value;
  }
  public resetDownloadCount() {
    this._downloadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCountInput() {
    return this._downloadCount;
  }

  // feature_source - computed: false, optional: true, required: false
  private _featureSource?: string; 
  public get featureSource() {
    return this.getStringAttribute('feature_source');
  }
  public set featureSource(value: string) {
    this._featureSource = value;
  }
  public resetFeatureSource() {
    this._featureSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSourceInput() {
    return this._featureSource;
  }

  // guid - computed: false, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // import_action - computed: false, optional: true, required: false
  private _importAction?: string; 
  public get importAction() {
    return this.getStringAttribute('import_action');
  }
  public set importAction(value: string) {
    this._importAction = value;
  }
  public resetImportAction() {
    this._importAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importActionInput() {
    return this._importAction;
  }

  // import_state - computed: false, optional: true, required: false
  private _importState?: string; 
  public get importState() {
    return this.getStringAttribute('import_state');
  }
  public set importState(value: string) {
    this._importState = value;
  }
  public resetImportState() {
    this._importState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importStateInput() {
    return this._importState;
  }

  // imported_time - computed: false, optional: true, required: false
  private _importedTime?: string; 
  public get importedTime() {
    return this.getStringAttribute('imported_time');
  }
  public set importedTime(value: string) {
    this._importedTime = value;
  }
  public resetImportedTime() {
    this._importedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedTimeInput() {
    return this._importedTime;
  }

  // last_access_time - computed: false, optional: true, required: false
  private _lastAccessTime?: string; 
  public get lastAccessTime() {
    return this.getStringAttribute('last_access_time');
  }
  public set lastAccessTime(value: string) {
    this._lastAccessTime = value;
  }
  public resetLastAccessTime() {
    this._lastAccessTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAccessTimeInput() {
    return this._lastAccessTime;
  }

  // md5e_tag - computed: false, optional: true, required: false
  private _md5ETag?: string; 
  public get md5ETag() {
    return this.getStringAttribute('md5e_tag');
  }
  public set md5ETag(value: string) {
    this._md5ETag = value;
  }
  public resetMd5ETag() {
    this._md5ETag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ETagInput() {
    return this._md5ETag;
  }

  // md5sum - computed: false, optional: true, required: false
  private _md5Sum?: string; 
  public get md5Sum() {
    return this.getStringAttribute('md5sum');
  }
  public set md5Sum(value: string) {
    this._md5Sum = value;
  }
  public resetMd5Sum() {
    this._md5Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5SumInput() {
    return this._md5Sum;
  }

  // mdfid - computed: false, optional: true, required: false
  private _mdfid?: string; 
  public get mdfid() {
    return this.getStringAttribute('mdfid');
  }
  public set mdfid(value: string) {
    this._mdfid = value;
  }
  public resetMdfid() {
    this._mdfid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdfidInput() {
    return this._mdfid;
  }

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
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

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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

  // platform_type - computed: false, optional: true, required: false
  private _platformType?: string; 
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }
  public set platformType(value: string) {
    this._platformType = value;
  }
  public resetPlatformType() {
    this._platformType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTypeInput() {
    return this._platformType;
  }

  // recommended_build - computed: false, optional: true, required: false
  private _recommendedBuild?: string; 
  public get recommendedBuild() {
    return this.getStringAttribute('recommended_build');
  }
  public set recommendedBuild(value: string) {
    this._recommendedBuild = value;
  }
  public resetRecommendedBuild() {
    this._recommendedBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedBuildInput() {
    return this._recommendedBuild;
  }

  // release_date - computed: false, optional: true, required: false
  private _releaseDate?: string; 
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }
  public set releaseDate(value: string) {
    this._releaseDate = value;
  }
  public resetReleaseDate() {
    this._releaseDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseDateInput() {
    return this._releaseDate;
  }

  // release_notes_url - computed: false, optional: true, required: false
  private _releaseNotesUrl?: string; 
  public get releaseNotesUrl() {
    return this.getStringAttribute('release_notes_url');
  }
  public set releaseNotesUrl(value: string) {
    this._releaseNotesUrl = value;
  }
  public resetReleaseNotesUrl() {
    this._releaseNotesUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesUrlInput() {
    return this._releaseNotesUrl;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightFirmwareServerConfigurationUtilityDistributableResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // sha512sum - computed: false, optional: true, required: false
  private _sha512Sum?: string; 
  public get sha512Sum() {
    return this.getStringAttribute('sha512sum');
  }
  public set sha512Sum(value: string) {
    this._sha512Sum = value;
  }
  public resetSha512Sum() {
    this._sha512Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha512SumInput() {
    return this._sha512Sum;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // software_advisory_url - computed: false, optional: true, required: false
  private _softwareAdvisoryUrl?: string; 
  public get softwareAdvisoryUrl() {
    return this.getStringAttribute('software_advisory_url');
  }
  public set softwareAdvisoryUrl(value: string) {
    this._softwareAdvisoryUrl = value;
  }
  public resetSoftwareAdvisoryUrl() {
    this._softwareAdvisoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAdvisoryUrlInput() {
    return this._softwareAdvisoryUrl;
  }

  // software_type_id - computed: false, optional: true, required: false
  private _softwareTypeId?: string; 
  public get softwareTypeId() {
    return this.getStringAttribute('software_type_id');
  }
  public set softwareTypeId(value: string) {
    this._softwareTypeId = value;
  }
  public resetSoftwareTypeId() {
    this._softwareTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTypeIdInput() {
    return this._softwareTypeId;
  }

  // supported_models - computed: false, optional: true, required: false
  private _supportedModels?: string[]; 
  public get supportedModels() {
    return this.getListAttribute('supported_models');
  }
  public set supportedModels(value: string[]) {
    this._supportedModels = value;
  }
  public resetSupportedModels() {
    this._supportedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedModelsInput() {
    return this._supportedModels;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightFirmwareServerConfigurationUtilityDistributableAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new DataIntersightFirmwareServerConfigurationUtilityDistributableCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: DataIntersightFirmwareServerConfigurationUtilityDistributableCatalog) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // component_meta - computed: false, optional: true, required: false
  private _componentMeta = new DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaList(this, "component_meta", false);
  public get componentMeta() {
    return this._componentMeta;
  }
  public putComponentMeta(value: DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMeta[] | cdktf.IResolvable) {
    this._componentMeta.internalValue = value;
  }
  public resetComponentMeta() {
    this._componentMeta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentMetaInput() {
    return this._componentMeta.internalValue;
  }

  // distributable_metas - computed: false, optional: true, required: false
  private _distributableMetas = new DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasList(this, "distributable_metas", false);
  public get distributableMetas() {
    return this._distributableMetas;
  }
  public putDistributableMetas(value: DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetas[] | cdktf.IResolvable) {
    this._distributableMetas.internalValue = value;
  }
  public resetDistributableMetas() {
    this._distributableMetas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributableMetasInput() {
    return this._distributableMetas.internalValue;
  }

  // nr_source - computed: false, optional: true, required: false
  private _nrSource = new DataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceOutputReference(this, "nr_source");
  public get nrSource() {
    return this._nrSource;
  }
  public putNrSource(value: DataIntersightFirmwareServerConfigurationUtilityDistributableNrSource) {
    this._nrSource.internalValue = value;
  }
  public resetNrSource() {
    this._nrSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrSourceInput() {
    return this._nrSource.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightFirmwareServerConfigurationUtilityDistributableParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightFirmwareServerConfigurationUtilityDistributableParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // release - computed: false, optional: true, required: false
  private _release = new DataIntersightFirmwareServerConfigurationUtilityDistributableReleaseOutputReference(this, "release");
  public get release() {
    return this._release;
  }
  public putRelease(value: DataIntersightFirmwareServerConfigurationUtilityDistributableRelease) {
    this._release.internalValue = value;
  }
  public resetRelease() {
    this._release.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightFirmwareServerConfigurationUtilityDistributableTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightFirmwareServerConfigurationUtilityDistributableTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      bundle_type: cdktf.stringToTerraform(this._bundleType),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      download_count: cdktf.numberToTerraform(this._downloadCount),
      feature_source: cdktf.stringToTerraform(this._featureSource),
      guid: cdktf.stringToTerraform(this._guid),
      id: cdktf.stringToTerraform(this._id),
      image_type: cdktf.stringToTerraform(this._imageType),
      import_action: cdktf.stringToTerraform(this._importAction),
      import_state: cdktf.stringToTerraform(this._importState),
      imported_time: cdktf.stringToTerraform(this._importedTime),
      last_access_time: cdktf.stringToTerraform(this._lastAccessTime),
      md5e_tag: cdktf.stringToTerraform(this._md5ETag),
      md5sum: cdktf.stringToTerraform(this._md5Sum),
      mdfid: cdktf.stringToTerraform(this._mdfid),
      mod_time: cdktf.stringToTerraform(this._modTime),
      model: cdktf.stringToTerraform(this._model),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      nr_version: cdktf.stringToTerraform(this._nrVersion),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      platform_type: cdktf.stringToTerraform(this._platformType),
      recommended_build: cdktf.stringToTerraform(this._recommendedBuild),
      release_date: cdktf.stringToTerraform(this._releaseDate),
      release_notes_url: cdktf.stringToTerraform(this._releaseNotesUrl),
      sha512sum: cdktf.stringToTerraform(this._sha512Sum),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      size: cdktf.numberToTerraform(this._size),
      software_advisory_url: cdktf.stringToTerraform(this._softwareAdvisoryUrl),
      software_type_id: cdktf.stringToTerraform(this._softwareTypeId),
      supported_models: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedModels),
      vendor: cdktf.stringToTerraform(this._vendor),
      ancestors: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsToTerraform, true)(this._ancestors.internalValue),
      catalog: dataIntersightFirmwareServerConfigurationUtilityDistributableCatalogToTerraform(this._catalog.internalValue),
      component_meta: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaToTerraform, true)(this._componentMeta.internalValue),
      distributable_metas: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasToTerraform, true)(this._distributableMetas.internalValue),
      nr_source: dataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceToTerraform(this._nrSource.internalValue),
      parent: dataIntersightFirmwareServerConfigurationUtilityDistributableParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      release: dataIntersightFirmwareServerConfigurationUtilityDistributableReleaseToTerraform(this._release.internalValue),
      tags: cdktf.listMapper(dataIntersightFirmwareServerConfigurationUtilityDistributableTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_type: {
        value: cdktf.stringToHclTerraform(this._bundleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_count: {
        value: cdktf.numberToHclTerraform(this._downloadCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_source: {
        value: cdktf.stringToHclTerraform(this._featureSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guid: {
        value: cdktf.stringToHclTerraform(this._guid),
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
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_action: {
        value: cdktf.stringToHclTerraform(this._importAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_state: {
        value: cdktf.stringToHclTerraform(this._importState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imported_time: {
        value: cdktf.stringToHclTerraform(this._importedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_access_time: {
        value: cdktf.stringToHclTerraform(this._lastAccessTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5e_tag: {
        value: cdktf.stringToHclTerraform(this._md5ETag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5sum: {
        value: cdktf.stringToHclTerraform(this._md5Sum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdfid: {
        value: cdktf.stringToHclTerraform(this._mdfid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nr_version: {
        value: cdktf.stringToHclTerraform(this._nrVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
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
      platform_type: {
        value: cdktf.stringToHclTerraform(this._platformType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommended_build: {
        value: cdktf.stringToHclTerraform(this._recommendedBuild),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_date: {
        value: cdktf.stringToHclTerraform(this._releaseDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_notes_url: {
        value: cdktf.stringToHclTerraform(this._releaseNotesUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sha512sum: {
        value: cdktf.stringToHclTerraform(this._sha512Sum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_advisory_url: {
        value: cdktf.stringToHclTerraform(this._softwareAdvisoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_type_id: {
        value: cdktf.stringToHclTerraform(this._softwareTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_models: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedModels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableAncestorsList",
      },
      catalog: {
        value: dataIntersightFirmwareServerConfigurationUtilityDistributableCatalogToHclTerraform(this._catalog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableCatalogList",
      },
      component_meta: {
        value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaToHclTerraform, true)(this._componentMeta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableComponentMetaList",
      },
      distributable_metas: {
        value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasToHclTerraform, true)(this._distributableMetas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableDistributableMetasList",
      },
      nr_source: {
        value: dataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceToHclTerraform(this._nrSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableNrSourceList",
      },
      parent: {
        value: dataIntersightFirmwareServerConfigurationUtilityDistributableParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributablePermissionResourcesList",
      },
      release: {
        value: dataIntersightFirmwareServerConfigurationUtilityDistributableReleaseToHclTerraform(this._release.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableReleaseList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightFirmwareServerConfigurationUtilityDistributableTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableTagsList",
      },
      version_context: {
        value: dataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFirmwareServerConfigurationUtilityDistributableVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
