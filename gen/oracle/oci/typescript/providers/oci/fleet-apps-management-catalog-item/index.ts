// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementCatalogItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#clone_catalog_item_trigger FleetAppsManagementCatalogItem#clone_catalog_item_trigger}
  */
  readonly cloneCatalogItemTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#compartment_id FleetAppsManagementCatalogItem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#config_source_type FleetAppsManagementCatalogItem#config_source_type}
  */
  readonly configSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#defined_tags FleetAppsManagementCatalogItem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#description FleetAppsManagementCatalogItem#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#display_name FleetAppsManagementCatalogItem#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#freeform_tags FleetAppsManagementCatalogItem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#id FleetAppsManagementCatalogItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#listing_id FleetAppsManagementCatalogItem#listing_id}
  */
  readonly listingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#listing_version FleetAppsManagementCatalogItem#listing_version}
  */
  readonly listingVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#package_type FleetAppsManagementCatalogItem#package_type}
  */
  readonly packageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#short_description FleetAppsManagementCatalogItem#short_description}
  */
  readonly shortDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#time_released FleetAppsManagementCatalogItem#time_released}
  */
  readonly timeReleased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#version_description FleetAppsManagementCatalogItem#version_description}
  */
  readonly versionDescription?: string;
  /**
  * catalog_source_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#catalog_source_payload FleetAppsManagementCatalogItem#catalog_source_payload}
  */
  readonly catalogSourcePayload?: FleetAppsManagementCatalogItemCatalogSourcePayload;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#timeouts FleetAppsManagementCatalogItem#timeouts}
  */
  readonly timeouts?: FleetAppsManagementCatalogItemTimeouts;
}
export interface FleetAppsManagementCatalogItemCatalogResultPayload {
}

export function fleetAppsManagementCatalogItemCatalogResultPayloadToTerraform(struct?: FleetAppsManagementCatalogItemCatalogResultPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fleetAppsManagementCatalogItemCatalogResultPayloadToHclTerraform(struct?: FleetAppsManagementCatalogItemCatalogResultPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FleetAppsManagementCatalogItemCatalogResultPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementCatalogItemCatalogResultPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementCatalogItemCatalogResultPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // config_result_type - computed: true, optional: false, required: false
  public get configResultType() {
    return this.getStringAttribute('config_result_type');
  }

  // configuration_source_provider_id - computed: true, optional: false, required: false
  public get configurationSourceProviderId() {
    return this.getStringAttribute('configuration_source_provider_id');
  }

  // package_url - computed: true, optional: false, required: false
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // time_expires - computed: true, optional: false, required: false
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}

export class FleetAppsManagementCatalogItemCatalogResultPayloadList extends cdktf.ComplexList {

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
  public get(index: number): FleetAppsManagementCatalogItemCatalogResultPayloadOutputReference {
    return new FleetAppsManagementCatalogItemCatalogResultPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementCatalogItemCatalogSourcePayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#access_uri FleetAppsManagementCatalogItem#access_uri}
  */
  readonly accessUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#branch_name FleetAppsManagementCatalogItem#branch_name}
  */
  readonly branchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#bucket FleetAppsManagementCatalogItem#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#config_source_type FleetAppsManagementCatalogItem#config_source_type}
  */
  readonly configSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#configuration_source_provider_id FleetAppsManagementCatalogItem#configuration_source_provider_id}
  */
  readonly configurationSourceProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#description FleetAppsManagementCatalogItem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#listing_id FleetAppsManagementCatalogItem#listing_id}
  */
  readonly listingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#long_description FleetAppsManagementCatalogItem#long_description}
  */
  readonly longDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#namespace FleetAppsManagementCatalogItem#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#object FleetAppsManagementCatalogItem#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#repository_url FleetAppsManagementCatalogItem#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#template_display_name FleetAppsManagementCatalogItem#template_display_name}
  */
  readonly templateDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#time_expires FleetAppsManagementCatalogItem#time_expires}
  */
  readonly timeExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#version FleetAppsManagementCatalogItem#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#working_directory FleetAppsManagementCatalogItem#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#zip_file_base64encoded FleetAppsManagementCatalogItem#zip_file_base64encoded}
  */
  readonly zipFileBase64Encoded?: string;
}

export function fleetAppsManagementCatalogItemCatalogSourcePayloadToTerraform(struct?: FleetAppsManagementCatalogItemCatalogSourcePayloadOutputReference | FleetAppsManagementCatalogItemCatalogSourcePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_uri: cdktf.stringToTerraform(struct!.accessUri),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    config_source_type: cdktf.stringToTerraform(struct!.configSourceType),
    configuration_source_provider_id: cdktf.stringToTerraform(struct!.configurationSourceProviderId),
    description: cdktf.stringToTerraform(struct!.description),
    listing_id: cdktf.stringToTerraform(struct!.listingId),
    long_description: cdktf.stringToTerraform(struct!.longDescription),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    template_display_name: cdktf.stringToTerraform(struct!.templateDisplayName),
    time_expires: cdktf.stringToTerraform(struct!.timeExpires),
    version: cdktf.stringToTerraform(struct!.version),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    zip_file_base64encoded: cdktf.stringToTerraform(struct!.zipFileBase64Encoded),
  }
}


export function fleetAppsManagementCatalogItemCatalogSourcePayloadToHclTerraform(struct?: FleetAppsManagementCatalogItemCatalogSourcePayloadOutputReference | FleetAppsManagementCatalogItemCatalogSourcePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_uri: {
      value: cdktf.stringToHclTerraform(struct!.accessUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_source_type: {
      value: cdktf.stringToHclTerraform(struct!.configSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_source_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.configurationSourceProviderId),
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
    listing_id: {
      value: cdktf.stringToHclTerraform(struct!.listingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_description: {
      value: cdktf.stringToHclTerraform(struct!.longDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_display_name: {
      value: cdktf.stringToHclTerraform(struct!.templateDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_expires: {
      value: cdktf.stringToHclTerraform(struct!.timeExpires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file_base64encoded: {
      value: cdktf.stringToHclTerraform(struct!.zipFileBase64Encoded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementCatalogItemCatalogSourcePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementCatalogItemCatalogSourcePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessUri = this._accessUri;
    }
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._configSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSourceType = this._configSourceType;
    }
    if (this._configurationSourceProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSourceProviderId = this._configurationSourceProviderId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._listingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listingId = this._listingId;
    }
    if (this._longDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.longDescription = this._longDescription;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    if (this._templateDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDisplayName = this._templateDisplayName;
    }
    if (this._timeExpires !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeExpires = this._timeExpires;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    if (this._zipFileBase64Encoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFileBase64Encoded = this._zipFileBase64Encoded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementCatalogItemCatalogSourcePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessUri = undefined;
      this._branchName = undefined;
      this._bucket = undefined;
      this._configSourceType = undefined;
      this._configurationSourceProviderId = undefined;
      this._description = undefined;
      this._listingId = undefined;
      this._longDescription = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._repositoryUrl = undefined;
      this._templateDisplayName = undefined;
      this._timeExpires = undefined;
      this._version = undefined;
      this._workingDirectory = undefined;
      this._zipFileBase64Encoded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessUri = value.accessUri;
      this._branchName = value.branchName;
      this._bucket = value.bucket;
      this._configSourceType = value.configSourceType;
      this._configurationSourceProviderId = value.configurationSourceProviderId;
      this._description = value.description;
      this._listingId = value.listingId;
      this._longDescription = value.longDescription;
      this._namespace = value.namespace;
      this._object = value.object;
      this._repositoryUrl = value.repositoryUrl;
      this._templateDisplayName = value.templateDisplayName;
      this._timeExpires = value.timeExpires;
      this._version = value.version;
      this._workingDirectory = value.workingDirectory;
      this._zipFileBase64Encoded = value.zipFileBase64Encoded;
    }
  }

  // access_uri - computed: true, optional: true, required: false
  private _accessUri?: string; 
  public get accessUri() {
    return this.getStringAttribute('access_uri');
  }
  public set accessUri(value: string) {
    this._accessUri = value;
  }
  public resetAccessUri() {
    this._accessUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUriInput() {
    return this._accessUri;
  }

  // branch_name - computed: true, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // config_source_type - computed: false, optional: false, required: true
  private _configSourceType?: string; 
  public get configSourceType() {
    return this.getStringAttribute('config_source_type');
  }
  public set configSourceType(value: string) {
    this._configSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configSourceTypeInput() {
    return this._configSourceType;
  }

  // configuration_source_provider_id - computed: true, optional: true, required: false
  private _configurationSourceProviderId?: string; 
  public get configurationSourceProviderId() {
    return this.getStringAttribute('configuration_source_provider_id');
  }
  public set configurationSourceProviderId(value: string) {
    this._configurationSourceProviderId = value;
  }
  public resetConfigurationSourceProviderId() {
    this._configurationSourceProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSourceProviderIdInput() {
    return this._configurationSourceProviderId;
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

  // listing_id - computed: true, optional: true, required: false
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  public resetListingId() {
    this._listingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // long_description - computed: true, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // template_display_name - computed: true, optional: true, required: false
  private _templateDisplayName?: string; 
  public get templateDisplayName() {
    return this.getStringAttribute('template_display_name');
  }
  public set templateDisplayName(value: string) {
    this._templateDisplayName = value;
  }
  public resetTemplateDisplayName() {
    this._templateDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDisplayNameInput() {
    return this._templateDisplayName;
  }

  // time_expires - computed: true, optional: true, required: false
  private _timeExpires?: string; 
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }
  public set timeExpires(value: string) {
    this._timeExpires = value;
  }
  public resetTimeExpires() {
    this._timeExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeExpiresInput() {
    return this._timeExpires;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // working_directory - computed: true, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // zip_file_base64encoded - computed: true, optional: true, required: false
  private _zipFileBase64Encoded?: string; 
  public get zipFileBase64Encoded() {
    return this.getStringAttribute('zip_file_base64encoded');
  }
  public set zipFileBase64Encoded(value: string) {
    this._zipFileBase64Encoded = value;
  }
  public resetZipFileBase64Encoded() {
    this._zipFileBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileBase64EncodedInput() {
    return this._zipFileBase64Encoded;
  }
}
export interface FleetAppsManagementCatalogItemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#create FleetAppsManagementCatalogItem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#delete FleetAppsManagementCatalogItem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#update FleetAppsManagementCatalogItem#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementCatalogItemTimeoutsToTerraform(struct?: FleetAppsManagementCatalogItemTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementCatalogItemTimeoutsToHclTerraform(struct?: FleetAppsManagementCatalogItemTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementCatalogItemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementCatalogItemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementCatalogItemTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item oci_fleet_apps_management_catalog_item}
*/
export class FleetAppsManagementCatalogItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_catalog_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementCatalogItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementCatalogItem to import
  * @param importFromId The id of the existing FleetAppsManagementCatalogItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementCatalogItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_catalog_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/fleet_apps_management_catalog_item oci_fleet_apps_management_catalog_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementCatalogItemConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementCatalogItemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_catalog_item',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloneCatalogItemTrigger = config.cloneCatalogItemTrigger;
    this._compartmentId = config.compartmentId;
    this._configSourceType = config.configSourceType;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._listingId = config.listingId;
    this._listingVersion = config.listingVersion;
    this._packageType = config.packageType;
    this._shortDescription = config.shortDescription;
    this._timeReleased = config.timeReleased;
    this._versionDescription = config.versionDescription;
    this._catalogSourcePayload.internalValue = config.catalogSourcePayload;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_result_payload - computed: true, optional: false, required: false
  private _catalogResultPayload = new FleetAppsManagementCatalogItemCatalogResultPayloadList(this, "catalog_result_payload", false);
  public get catalogResultPayload() {
    return this._catalogResultPayload;
  }

  // clone_catalog_item_trigger - computed: false, optional: true, required: false
  private _cloneCatalogItemTrigger?: number; 
  public get cloneCatalogItemTrigger() {
    return this.getNumberAttribute('clone_catalog_item_trigger');
  }
  public set cloneCatalogItemTrigger(value: number) {
    this._cloneCatalogItemTrigger = value;
  }
  public resetCloneCatalogItemTrigger() {
    this._cloneCatalogItemTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneCatalogItemTriggerInput() {
    return this._cloneCatalogItemTrigger;
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

  // config_source_type - computed: false, optional: false, required: true
  private _configSourceType?: string; 
  public get configSourceType() {
    return this.getStringAttribute('config_source_type');
  }
  public set configSourceType(value: string) {
    this._configSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configSourceTypeInput() {
    return this._configSourceType;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // listing_id - computed: true, optional: true, required: false
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  public resetListingId() {
    this._listingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // listing_version - computed: true, optional: true, required: false
  private _listingVersion?: string; 
  public get listingVersion() {
    return this.getStringAttribute('listing_version');
  }
  public set listingVersion(value: string) {
    this._listingVersion = value;
  }
  public resetListingVersion() {
    this._listingVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingVersionInput() {
    return this._listingVersion;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // short_description - computed: true, optional: true, required: false
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // should_list_public_items - computed: true, optional: false, required: false
  public get shouldListPublicItems() {
    return this.getBooleanAttribute('should_list_public_items');
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

  // time_backfill_last_checked - computed: true, optional: false, required: false
  public get timeBackfillLastChecked() {
    return this.getStringAttribute('time_backfill_last_checked');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_checked - computed: true, optional: false, required: false
  public get timeLastChecked() {
    return this.getStringAttribute('time_last_checked');
  }

  // time_released - computed: true, optional: true, required: false
  private _timeReleased?: string; 
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }
  public set timeReleased(value: string) {
    this._timeReleased = value;
  }
  public resetTimeReleased() {
    this._timeReleased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeReleasedInput() {
    return this._timeReleased;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version_description - computed: true, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // catalog_source_payload - computed: false, optional: true, required: false
  private _catalogSourcePayload = new FleetAppsManagementCatalogItemCatalogSourcePayloadOutputReference(this, "catalog_source_payload");
  public get catalogSourcePayload() {
    return this._catalogSourcePayload;
  }
  public putCatalogSourcePayload(value: FleetAppsManagementCatalogItemCatalogSourcePayload) {
    this._catalogSourcePayload.internalValue = value;
  }
  public resetCatalogSourcePayload() {
    this._catalogSourcePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogSourcePayloadInput() {
    return this._catalogSourcePayload.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementCatalogItemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementCatalogItemTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clone_catalog_item_trigger: cdktf.numberToTerraform(this._cloneCatalogItemTrigger),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      config_source_type: cdktf.stringToTerraform(this._configSourceType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      listing_id: cdktf.stringToTerraform(this._listingId),
      listing_version: cdktf.stringToTerraform(this._listingVersion),
      package_type: cdktf.stringToTerraform(this._packageType),
      short_description: cdktf.stringToTerraform(this._shortDescription),
      time_released: cdktf.stringToTerraform(this._timeReleased),
      version_description: cdktf.stringToTerraform(this._versionDescription),
      catalog_source_payload: fleetAppsManagementCatalogItemCatalogSourcePayloadToTerraform(this._catalogSourcePayload.internalValue),
      timeouts: fleetAppsManagementCatalogItemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clone_catalog_item_trigger: {
        value: cdktf.numberToHclTerraform(this._cloneCatalogItemTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_source_type: {
        value: cdktf.stringToHclTerraform(this._configSourceType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listing_id: {
        value: cdktf.stringToHclTerraform(this._listingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listing_version: {
        value: cdktf.stringToHclTerraform(this._listingVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_description: {
        value: cdktf.stringToHclTerraform(this._shortDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_released: {
        value: cdktf.stringToHclTerraform(this._timeReleased),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktf.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_source_payload: {
        value: fleetAppsManagementCatalogItemCatalogSourcePayloadToHclTerraform(this._catalogSourcePayload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementCatalogItemCatalogSourcePayloadList",
      },
      timeouts: {
        value: fleetAppsManagementCatalogItemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementCatalogItemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
