// https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_aws_dataset SearchDataset#api_aws_dataset}
  */
  readonly apiAwsDataset?: SearchDatasetApiAwsDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_azure_data_explorer_dataset SearchDataset#api_azure_data_explorer_dataset}
  */
  readonly apiAzureDataExplorerDataset?: SearchDatasetApiAzureDataExplorerDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_azure_dataset SearchDataset#api_azure_dataset}
  */
  readonly apiAzureDataset?: SearchDatasetApiAzureDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_elastic_search_dataset SearchDataset#api_elastic_search_dataset}
  */
  readonly apiElasticSearchDataset?: SearchDatasetApiElasticSearchDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_gcp_dataset SearchDataset#api_gcp_dataset}
  */
  readonly apiGcpDataset?: SearchDatasetApiGcpDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_google_workspace_dataset SearchDataset#api_google_workspace_dataset}
  */
  readonly apiGoogleWorkspaceDataset?: SearchDatasetApiGoogleWorkspaceDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_ms_graph_dataset SearchDataset#api_ms_graph_dataset}
  */
  readonly apiMsGraphDataset?: SearchDatasetApiMsGraphDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_okta_dataset SearchDataset#api_okta_dataset}
  */
  readonly apiOktaDataset?: SearchDatasetApiOktaDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_open_search_dataset SearchDataset#api_open_search_dataset}
  */
  readonly apiOpenSearchDataset?: SearchDatasetApiOpenSearchDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_tailscale_dataset SearchDataset#api_tailscale_dataset}
  */
  readonly apiTailscaleDataset?: SearchDatasetApiTailscaleDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#api_zoom_dataset SearchDataset#api_zoom_dataset}
  */
  readonly apiZoomDataset?: SearchDatasetApiZoomDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#apihttp_dataset SearchDataset#apihttp_dataset}
  */
  readonly apihttpDataset?: SearchDatasetApihttpDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#aws_security_lake_dataset SearchDataset#aws_security_lake_dataset}
  */
  readonly awsSecurityLakeDataset?: SearchDatasetAwsSecurityLakeDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#azure_blob_dataset SearchDataset#azure_blob_dataset}
  */
  readonly azureBlobDataset?: SearchDatasetAzureBlobDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#click_house_dataset SearchDataset#click_house_dataset}
  */
  readonly clickHouseDataset?: SearchDatasetClickHouseDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#cribl_leader_dataset SearchDataset#cribl_leader_dataset}
  */
  readonly criblLeaderDataset?: SearchDatasetCriblLeaderDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#edge_dataset SearchDataset#edge_dataset}
  */
  readonly edgeDataset?: SearchDatasetEdgeDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#gcs_dataset SearchDataset#gcs_dataset}
  */
  readonly gcsDataset?: SearchDatasetGcsDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#meta_dataset SearchDataset#meta_dataset}
  */
  readonly metaDataset?: SearchDatasetMetaDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#prometheus_dataset SearchDataset#prometheus_dataset}
  */
  readonly prometheusDataset?: SearchDatasetPrometheusDataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#s3_dataset SearchDataset#s3_dataset}
  */
  readonly s3Dataset?: SearchDatasetS3Dataset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#snowflake_dataset SearchDataset#snowflake_dataset}
  */
  readonly snowflakeDataset?: SearchDatasetSnowflakeDataset;
}
export interface SearchDatasetApiAwsDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiAwsDatasetMetadataToTerraform(struct?: SearchDatasetApiAwsDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiAwsDatasetMetadataToHclTerraform(struct?: SearchDatasetApiAwsDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiAwsDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiAwsDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiAwsDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiAwsDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiAwsDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * A list of the AWS regions to query for this endpoint. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#regions SearchDataset#regions}
  */
  readonly regions?: string[];
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiAwsDatasetToTerraform(struct?: SearchDatasetApiAwsDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiAwsDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiAwsDatasetToHclTerraform(struct?: SearchDatasetApiAwsDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiAwsDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiAwsDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiAwsDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiAwsDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiAwsDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._regions = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._regions = value.regions;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiAwsDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiAwsDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiAzureDataExplorerDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiAzureDataExplorerDatasetMetadataToTerraform(struct?: SearchDatasetApiAzureDataExplorerDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiAzureDataExplorerDatasetMetadataToHclTerraform(struct?: SearchDatasetApiAzureDataExplorerDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiAzureDataExplorerDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiAzureDataExplorerDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiAzureDataExplorerDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiAzureDataExplorerDataset {
  /**
  * Azure Data Explorer cluster name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#cluster SearchDataset#cluster}
  */
  readonly cluster?: string;
  /**
  * Azure Data Explorer database name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#database SearchDataset#database}
  */
  readonly database?: string;
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location (region) of the Azure Data Explorer cluster. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#location SearchDataset#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiAzureDataExplorerDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Name of the table to query. May be a simple name (Example: logs) or a Kusto query. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#table SearchDataset#table}
  */
  readonly table?: string;
  /**
  * Optional name of the field holding the timestamp of the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#timestamp_field SearchDataset#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * Type of the data stored in the timestamp field. Default: "kusto_datetime"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#timestamp_field_contents SearchDataset#timestamp_field_contents}
  */
  readonly timestampFieldContents?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiAzureDataExplorerDatasetToTerraform(struct?: SearchDatasetApiAzureDataExplorerDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    database: cdktf.stringToTerraform(struct!.database),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    location: cdktf.stringToTerraform(struct!.location),
    metadata: searchDatasetApiAzureDataExplorerDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    table: cdktf.stringToTerraform(struct!.table),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    timestamp_field_contents: cdktf.stringToTerraform(struct!.timestampFieldContents),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiAzureDataExplorerDatasetToHclTerraform(struct?: SearchDatasetApiAzureDataExplorerDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiAzureDataExplorerDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiAzureDataExplorerDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field_contents: {
      value: cdktf.stringToHclTerraform(struct!.timestampFieldContents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiAzureDataExplorerDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiAzureDataExplorerDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._timestampFieldContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFieldContents = this._timestampFieldContents;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiAzureDataExplorerDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._database = undefined;
      this._description = undefined;
      this._id = undefined;
      this._location = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._table = undefined;
      this._timestampField = undefined;
      this._timestampFieldContents = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._database = value.database;
      this._description = value.description;
      this._id = value.id;
      this._location = value.location;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._table = value.table;
      this._timestampField = value.timestampField;
      this._timestampFieldContents = value.timestampFieldContents;
      this._type = value.type;
    }
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiAzureDataExplorerDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiAzureDataExplorerDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // timestamp_field - computed: true, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // timestamp_field_contents - computed: true, optional: true, required: false
  private _timestampFieldContents?: string; 
  public get timestampFieldContents() {
    return this.getStringAttribute('timestamp_field_contents');
  }
  public set timestampFieldContents(value: string) {
    this._timestampFieldContents = value;
  }
  public resetTimestampFieldContents() {
    this._timestampFieldContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldContentsInput() {
    return this._timestampFieldContents;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiAzureDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiAzureDatasetMetadataToTerraform(struct?: SearchDatasetApiAzureDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiAzureDatasetMetadataToHclTerraform(struct?: SearchDatasetApiAzureDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiAzureDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiAzureDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiAzureDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiAzureDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiAzureDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * A list of the subscription ids within the tenant to query with this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#subscription_ids SearchDataset#subscription_ids}
  */
  readonly subscriptionIds?: string[];
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiAzureDatasetToTerraform(struct?: SearchDatasetApiAzureDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiAzureDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscriptionIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiAzureDatasetToHclTerraform(struct?: SearchDatasetApiAzureDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiAzureDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiAzureDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscriptionIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiAzureDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiAzureDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._subscriptionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionIds = this._subscriptionIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiAzureDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._subscriptionIds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._subscriptionIds = value.subscriptionIds;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiAzureDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiAzureDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // subscription_ids - computed: true, optional: true, required: false
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiElasticSearchDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiElasticSearchDatasetMetadataToTerraform(struct?: SearchDatasetApiElasticSearchDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiElasticSearchDatasetMetadataToHclTerraform(struct?: SearchDatasetApiElasticSearchDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiElasticSearchDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiElasticSearchDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiElasticSearchDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiElasticSearchDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Elasticsearch index to search. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#index SearchDataset#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiElasticSearchDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Name of the field holding the timestamp of the event. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#timestamp_field SearchDataset#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiElasticSearchDatasetToTerraform(struct?: SearchDatasetApiElasticSearchDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    metadata: searchDatasetApiElasticSearchDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiElasticSearchDatasetToHclTerraform(struct?: SearchDatasetApiElasticSearchDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiElasticSearchDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiElasticSearchDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiElasticSearchDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiElasticSearchDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiElasticSearchDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._index = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._timestampField = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._index = value.index;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._timestampField = value.timestampField;
      this._type = value.type;
    }
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiElasticSearchDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiElasticSearchDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // timestamp_field - computed: true, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiGcpDatasetEndpointConfigs {
  /**
  * GCP endpoint. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#endpoint_name SearchDataset#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * GCP region (required for some endpoints)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#region SearchDataset#region}
  */
  readonly region?: string;
}

export function searchDatasetApiGcpDatasetEndpointConfigsToTerraform(struct?: SearchDatasetApiGcpDatasetEndpointConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function searchDatasetApiGcpDatasetEndpointConfigsToHclTerraform(struct?: SearchDatasetApiGcpDatasetEndpointConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiGcpDatasetEndpointConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetApiGcpDatasetEndpointConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiGcpDatasetEndpointConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointName = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointName = value.endpointName;
      this._region = value.region;
    }
  }

  // endpoint_name - computed: true, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SearchDatasetApiGcpDatasetEndpointConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetApiGcpDatasetEndpointConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetApiGcpDatasetEndpointConfigsOutputReference {
    return new SearchDatasetApiGcpDatasetEndpointConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetApiGcpDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiGcpDatasetMetadataToTerraform(struct?: SearchDatasetApiGcpDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiGcpDatasetMetadataToHclTerraform(struct?: SearchDatasetApiGcpDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiGcpDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiGcpDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiGcpDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiGcpDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoint configurations that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#endpoint_configs SearchDataset#endpoint_configs}
  */
  readonly endpointConfigs?: SearchDatasetApiGcpDatasetEndpointConfigs[] | cdktf.IResolvable;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiGcpDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiGcpDatasetToTerraform(struct?: SearchDatasetApiGcpDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    endpoint_configs: cdktf.listMapper(searchDatasetApiGcpDatasetEndpointConfigsToTerraform, false)(struct!.endpointConfigs),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiGcpDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiGcpDatasetToHclTerraform(struct?: SearchDatasetApiGcpDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_configs: {
      value: cdktf.listMapperHcl(searchDatasetApiGcpDatasetEndpointConfigsToHclTerraform, false)(struct!.endpointConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetApiGcpDatasetEndpointConfigsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiGcpDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiGcpDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiGcpDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiGcpDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpointConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointConfigs = this._endpointConfigs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiGcpDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endpointConfigs.internalValue = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._endpointConfigs.internalValue = value.endpointConfigs;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // endpoint_configs - computed: true, optional: true, required: false
  private _endpointConfigs = new SearchDatasetApiGcpDatasetEndpointConfigsList(this, "endpoint_configs", false);
  public get endpointConfigs() {
    return this._endpointConfigs;
  }
  public putEndpointConfigs(value: SearchDatasetApiGcpDatasetEndpointConfigs[] | cdktf.IResolvable) {
    this._endpointConfigs.internalValue = value;
  }
  public resetEndpointConfigs() {
    this._endpointConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigsInput() {
    return this._endpointConfigs.internalValue;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiGcpDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiGcpDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiGoogleWorkspaceDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiGoogleWorkspaceDatasetMetadataToTerraform(struct?: SearchDatasetApiGoogleWorkspaceDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiGoogleWorkspaceDatasetMetadataToHclTerraform(struct?: SearchDatasetApiGoogleWorkspaceDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiGoogleWorkspaceDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiGoogleWorkspaceDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiGoogleWorkspaceDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiGoogleWorkspaceDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiGoogleWorkspaceDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiGoogleWorkspaceDatasetToTerraform(struct?: SearchDatasetApiGoogleWorkspaceDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiGoogleWorkspaceDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiGoogleWorkspaceDatasetToHclTerraform(struct?: SearchDatasetApiGoogleWorkspaceDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiGoogleWorkspaceDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiGoogleWorkspaceDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiGoogleWorkspaceDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiGoogleWorkspaceDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiGoogleWorkspaceDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiGoogleWorkspaceDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiGoogleWorkspaceDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiMsGraphDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiMsGraphDatasetMetadataToTerraform(struct?: SearchDatasetApiMsGraphDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiMsGraphDatasetMetadataToHclTerraform(struct?: SearchDatasetApiMsGraphDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiMsGraphDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiMsGraphDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiMsGraphDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiMsGraphDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiMsGraphDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiMsGraphDatasetToTerraform(struct?: SearchDatasetApiMsGraphDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiMsGraphDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiMsGraphDatasetToHclTerraform(struct?: SearchDatasetApiMsGraphDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiMsGraphDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiMsGraphDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiMsGraphDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiMsGraphDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiMsGraphDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiMsGraphDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiMsGraphDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiOktaDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiOktaDatasetMetadataToTerraform(struct?: SearchDatasetApiOktaDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiOktaDatasetMetadataToHclTerraform(struct?: SearchDatasetApiOktaDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiOktaDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiOktaDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiOktaDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiOktaDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiOktaDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiOktaDatasetToTerraform(struct?: SearchDatasetApiOktaDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiOktaDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiOktaDatasetToHclTerraform(struct?: SearchDatasetApiOktaDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiOktaDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiOktaDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiOktaDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiOktaDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiOktaDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiOktaDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiOktaDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiOpenSearchDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiOpenSearchDatasetMetadataToTerraform(struct?: SearchDatasetApiOpenSearchDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiOpenSearchDatasetMetadataToHclTerraform(struct?: SearchDatasetApiOpenSearchDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiOpenSearchDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiOpenSearchDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiOpenSearchDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiOpenSearchDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the OpenSearch index to search. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#index SearchDataset#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiOpenSearchDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Name of the field holding the timestamp of the event. Default: "@timestamp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#timestamp_field SearchDataset#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiOpenSearchDatasetToTerraform(struct?: SearchDatasetApiOpenSearchDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    metadata: searchDatasetApiOpenSearchDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiOpenSearchDatasetToHclTerraform(struct?: SearchDatasetApiOpenSearchDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiOpenSearchDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiOpenSearchDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiOpenSearchDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiOpenSearchDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiOpenSearchDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._index = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._timestampField = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._index = value.index;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._timestampField = value.timestampField;
      this._type = value.type;
    }
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiOpenSearchDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiOpenSearchDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // timestamp_field - computed: true, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiTailscaleDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiTailscaleDatasetMetadataToTerraform(struct?: SearchDatasetApiTailscaleDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiTailscaleDatasetMetadataToHclTerraform(struct?: SearchDatasetApiTailscaleDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiTailscaleDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiTailscaleDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiTailscaleDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiTailscaleDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiTailscaleDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiTailscaleDatasetToTerraform(struct?: SearchDatasetApiTailscaleDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiTailscaleDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiTailscaleDatasetToHclTerraform(struct?: SearchDatasetApiTailscaleDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiTailscaleDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiTailscaleDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiTailscaleDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiTailscaleDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiTailscaleDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiTailscaleDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiTailscaleDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApiZoomDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApiZoomDatasetMetadataToTerraform(struct?: SearchDatasetApiZoomDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApiZoomDatasetMetadataToHclTerraform(struct?: SearchDatasetApiZoomDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiZoomDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiZoomDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiZoomDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApiZoomDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApiZoomDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApiZoomDatasetToTerraform(struct?: SearchDatasetApiZoomDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApiZoomDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApiZoomDatasetToHclTerraform(struct?: SearchDatasetApiZoomDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApiZoomDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApiZoomDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApiZoomDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApiZoomDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApiZoomDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApiZoomDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApiZoomDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetApihttpDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetApihttpDatasetMetadataToTerraform(struct?: SearchDatasetApihttpDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetApihttpDatasetMetadataToHclTerraform(struct?: SearchDatasetApihttpDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApihttpDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApihttpDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApihttpDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetApihttpDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A list of the endpoints that are enabled in this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enabled_endpoints SearchDataset#enabled_endpoints}
  */
  readonly enabledEndpoints?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetApihttpDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetApihttpDatasetToTerraform(struct?: SearchDatasetApihttpDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledEndpoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetApihttpDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetApihttpDatasetToHclTerraform(struct?: SearchDatasetApihttpDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetApihttpDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetApihttpDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetApihttpDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetApihttpDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEndpoints = this._enabledEndpoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetApihttpDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabledEndpoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabledEndpoints = value.enabledEndpoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // enabled_endpoints - computed: true, optional: true, required: false
  private _enabledEndpoints?: string[]; 
  public get enabledEndpoints() {
    return this.getListAttribute('enabled_endpoints');
  }
  public set enabledEndpoints(value: string[]) {
    this._enabledEndpoints = value;
  }
  public resetEnabledEndpoints() {
    this._enabledEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEndpointsInput() {
    return this._enabledEndpoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetApihttpDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetApihttpDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetAwsSecurityLakeDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetAwsSecurityLakeDatasetMetadataToTerraform(struct?: SearchDatasetAwsSecurityLakeDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetAwsSecurityLakeDatasetMetadataToHclTerraform(struct?: SearchDatasetAwsSecurityLakeDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetAwsSecurityLakeDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetAwsSecurityLakeDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetAwsSecurityLakeDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetAwsSecurityLakeDatasetSelectedBuckets {
  /**
  * S3 bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#name SearchDataset#name}
  */
  readonly name?: string;
  /**
  * AWS region where the bucket is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#region SearchDataset#region}
  */
  readonly region?: string;
}

export function searchDatasetAwsSecurityLakeDatasetSelectedBucketsToTerraform(struct?: SearchDatasetAwsSecurityLakeDatasetSelectedBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function searchDatasetAwsSecurityLakeDatasetSelectedBucketsToHclTerraform(struct?: SearchDatasetAwsSecurityLakeDatasetSelectedBuckets | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetAwsSecurityLakeDatasetSelectedBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetAwsSecurityLakeDatasetSelectedBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetAwsSecurityLakeDatasetSelectedBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._region = value.region;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SearchDatasetAwsSecurityLakeDatasetSelectedBucketsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetAwsSecurityLakeDatasetSelectedBuckets[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetAwsSecurityLakeDatasetSelectedBucketsOutputReference {
    return new SearchDatasetAwsSecurityLakeDatasetSelectedBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetAwsSecurityLakeDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetAwsSecurityLakeDatasetMetadata;
  /**
  * The templated path under which to look for data, in each folder. Default: "${vendor}/${sourceLocation}/${pathVersion}/region=${region}/accountId=${accountId}/eventDay=${_time:%Y%m%d}/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * A list of the buckets that should be searched by this dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#selected_buckets SearchDataset#selected_buckets}
  */
  readonly selectedBuckets?: SearchDatasetAwsSecurityLakeDatasetSelectedBuckets[] | cdktf.IResolvable;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetAwsSecurityLakeDatasetToTerraform(struct?: SearchDatasetAwsSecurityLakeDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetAwsSecurityLakeDatasetMetadataToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    selected_buckets: cdktf.listMapper(searchDatasetAwsSecurityLakeDatasetSelectedBucketsToTerraform, false)(struct!.selectedBuckets),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetAwsSecurityLakeDatasetToHclTerraform(struct?: SearchDatasetAwsSecurityLakeDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    metadata: {
      value: searchDatasetAwsSecurityLakeDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetAwsSecurityLakeDatasetMetadata",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_buckets: {
      value: cdktf.listMapperHcl(searchDatasetAwsSecurityLakeDatasetSelectedBucketsToHclTerraform, false)(struct!.selectedBuckets),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetAwsSecurityLakeDatasetSelectedBucketsList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetAwsSecurityLakeDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetAwsSecurityLakeDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._selectedBuckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedBuckets = this._selectedBuckets?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetAwsSecurityLakeDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._path = undefined;
      this._providerId = undefined;
      this._selectedBuckets.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._filter = value.filter;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._path = value.path;
      this._providerId = value.providerId;
      this._selectedBuckets.internalValue = value.selectedBuckets;
      this._type = value.type;
    }
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

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetAwsSecurityLakeDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetAwsSecurityLakeDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // selected_buckets - computed: true, optional: true, required: false
  private _selectedBuckets = new SearchDatasetAwsSecurityLakeDatasetSelectedBucketsList(this, "selected_buckets", false);
  public get selectedBuckets() {
    return this._selectedBuckets;
  }
  public putSelectedBuckets(value: SearchDatasetAwsSecurityLakeDatasetSelectedBuckets[] | cdktf.IResolvable) {
    this._selectedBuckets.internalValue = value;
  }
  public resetSelectedBuckets() {
    this._selectedBuckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedBucketsInput() {
    return this._selectedBuckets.internalValue;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetAzureBlobDatasetExtraPaths {
  /**
  * Name of the additional container. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#container_name SearchDataset#container_name}
  */
  readonly containerName?: string;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Path inside the additional container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
}

export function searchDatasetAzureBlobDatasetExtraPathsToTerraform(struct?: SearchDatasetAzureBlobDatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    filter: cdktf.stringToTerraform(struct!.filter),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function searchDatasetAzureBlobDatasetExtraPathsToHclTerraform(struct?: SearchDatasetAzureBlobDatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetAzureBlobDatasetExtraPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetAzureBlobDatasetExtraPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetAzureBlobDatasetExtraPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._filter = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._filter = value.filter;
      this._path = value.path;
    }
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SearchDatasetAzureBlobDatasetExtraPathsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetAzureBlobDatasetExtraPaths[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetAzureBlobDatasetExtraPathsOutputReference {
    return new SearchDatasetAzureBlobDatasetExtraPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetAzureBlobDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetAzureBlobDatasetMetadataToTerraform(struct?: SearchDatasetAzureBlobDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetAzureBlobDatasetMetadataToHclTerraform(struct?: SearchDatasetAzureBlobDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetAzureBlobDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetAzureBlobDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetAzureBlobDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetAzureBlobDataset {
  /**
  * Azure Blob Storage container name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#container_name SearchDataset#container_name}
  */
  readonly containerName?: string;
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Additional container paths that are included in this dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#extra_paths SearchDataset#extra_paths}
  */
  readonly extraPaths?: SearchDatasetAzureBlobDatasetExtraPaths[] | cdktf.IResolvable;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetAzureBlobDatasetMetadata;
  /**
  * The templated path under which to look for data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Whether to skip event time filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#skip_event_time_filter SearchDataset#skip_event_time_filter}
  */
  readonly skipEventTimeFilter?: boolean | cdktf.IResolvable;
  /**
  * Storage classes to include in the search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#storage_classes SearchDataset#storage_classes}
  */
  readonly storageClasses?: string[];
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetAzureBlobDatasetToTerraform(struct?: SearchDatasetAzureBlobDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    description: cdktf.stringToTerraform(struct!.description),
    extra_paths: cdktf.listMapper(searchDatasetAzureBlobDatasetExtraPathsToTerraform, false)(struct!.extraPaths),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetAzureBlobDatasetMetadataToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    skip_event_time_filter: cdktf.booleanToTerraform(struct!.skipEventTimeFilter),
    storage_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageClasses),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetAzureBlobDatasetToHclTerraform(struct?: SearchDatasetAzureBlobDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
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
    extra_paths: {
      value: cdktf.listMapperHcl(searchDatasetAzureBlobDatasetExtraPathsToHclTerraform, false)(struct!.extraPaths),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetAzureBlobDatasetExtraPathsList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    metadata: {
      value: searchDatasetAzureBlobDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetAzureBlobDatasetMetadata",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_event_time_filter: {
      value: cdktf.booleanToHclTerraform(struct!.skipEventTimeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetAzureBlobDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetAzureBlobDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extraPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraPaths = this._extraPaths?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._skipEventTimeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEventTimeFilter = this._skipEventTimeFilter;
    }
    if (this._storageClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetAzureBlobDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._description = undefined;
      this._extraPaths.internalValue = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._path = undefined;
      this._providerId = undefined;
      this._skipEventTimeFilter = undefined;
      this._storageClasses = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._description = value.description;
      this._extraPaths.internalValue = value.extraPaths;
      this._filter = value.filter;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._path = value.path;
      this._providerId = value.providerId;
      this._skipEventTimeFilter = value.skipEventTimeFilter;
      this._storageClasses = value.storageClasses;
      this._type = value.type;
    }
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // extra_paths - computed: true, optional: true, required: false
  private _extraPaths = new SearchDatasetAzureBlobDatasetExtraPathsList(this, "extra_paths", false);
  public get extraPaths() {
    return this._extraPaths;
  }
  public putExtraPaths(value: SearchDatasetAzureBlobDatasetExtraPaths[] | cdktf.IResolvable) {
    this._extraPaths.internalValue = value;
  }
  public resetExtraPaths() {
    this._extraPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPathsInput() {
    return this._extraPaths.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetAzureBlobDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetAzureBlobDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // skip_event_time_filter - computed: true, optional: true, required: false
  private _skipEventTimeFilter?: boolean | cdktf.IResolvable; 
  public get skipEventTimeFilter() {
    return this.getBooleanAttribute('skip_event_time_filter');
  }
  public set skipEventTimeFilter(value: boolean | cdktf.IResolvable) {
    this._skipEventTimeFilter = value;
  }
  public resetSkipEventTimeFilter() {
    this._skipEventTimeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEventTimeFilterInput() {
    return this._skipEventTimeFilter;
  }

  // storage_classes - computed: true, optional: true, required: false
  private _storageClasses?: string[]; 
  public get storageClasses() {
    return this.getListAttribute('storage_classes');
  }
  public set storageClasses(value: string[]) {
    this._storageClasses = value;
  }
  public resetStorageClasses() {
    this._storageClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetClickHouseDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetClickHouseDatasetMetadataToTerraform(struct?: SearchDatasetClickHouseDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetClickHouseDatasetMetadataToHclTerraform(struct?: SearchDatasetClickHouseDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetClickHouseDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetClickHouseDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetClickHouseDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetClickHouseDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#database SearchDataset#database}
  */
  readonly database?: string;
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetClickHouseDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * May be a simple name (Example: logs) or a SQL query (Example: select * from logs). Results will be limited to 100K for tables without sorting keys and queries. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#table SearchDataset#table}
  */
  readonly table?: string;
  /**
  * Optional name of the column holding the timestamp of the event to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#timestamp_field SearchDataset#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetClickHouseDatasetToTerraform(struct?: SearchDatasetClickHouseDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetClickHouseDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    table: cdktf.stringToTerraform(struct!.table),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetClickHouseDatasetToHclTerraform(struct?: SearchDatasetClickHouseDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetClickHouseDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetClickHouseDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetClickHouseDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetClickHouseDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetClickHouseDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._description = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._table = undefined;
      this._timestampField = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._description = value.description;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._table = value.table;
      this._timestampField = value.timestampField;
      this._type = value.type;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetClickHouseDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetClickHouseDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // timestamp_field - computed: true, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetCriblLeaderDatasetExtraPaths {
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * The directory from which to collect data. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
}

export function searchDatasetCriblLeaderDatasetExtraPathsToTerraform(struct?: SearchDatasetCriblLeaderDatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function searchDatasetCriblLeaderDatasetExtraPathsToHclTerraform(struct?: SearchDatasetCriblLeaderDatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetCriblLeaderDatasetExtraPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetCriblLeaderDatasetExtraPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetCriblLeaderDatasetExtraPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._path = value.path;
    }
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SearchDatasetCriblLeaderDatasetExtraPathsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetCriblLeaderDatasetExtraPaths[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetCriblLeaderDatasetExtraPathsOutputReference {
    return new SearchDatasetCriblLeaderDatasetExtraPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetCriblLeaderDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetCriblLeaderDatasetMetadataToTerraform(struct?: SearchDatasetCriblLeaderDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetCriblLeaderDatasetMetadataToHclTerraform(struct?: SearchDatasetCriblLeaderDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetCriblLeaderDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetCriblLeaderDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetCriblLeaderDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetCriblLeaderDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Additional paths that are included in this dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#extra_paths SearchDataset#extra_paths}
  */
  readonly extraPaths?: SearchDatasetCriblLeaderDatasetExtraPaths[] | cdktf.IResolvable;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetCriblLeaderDatasetMetadata;
  /**
  * The directory from which to collect data. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetCriblLeaderDatasetToTerraform(struct?: SearchDatasetCriblLeaderDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    extra_paths: cdktf.listMapper(searchDatasetCriblLeaderDatasetExtraPathsToTerraform, false)(struct!.extraPaths),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetCriblLeaderDatasetMetadataToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetCriblLeaderDatasetToHclTerraform(struct?: SearchDatasetCriblLeaderDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_paths: {
      value: cdktf.listMapperHcl(searchDatasetCriblLeaderDatasetExtraPathsToHclTerraform, false)(struct!.extraPaths),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetCriblLeaderDatasetExtraPathsList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    metadata: {
      value: searchDatasetCriblLeaderDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetCriblLeaderDatasetMetadata",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetCriblLeaderDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetCriblLeaderDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extraPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraPaths = this._extraPaths?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetCriblLeaderDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._extraPaths.internalValue = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._path = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._extraPaths.internalValue = value.extraPaths;
      this._filter = value.filter;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._path = value.path;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // extra_paths - computed: true, optional: true, required: false
  private _extraPaths = new SearchDatasetCriblLeaderDatasetExtraPathsList(this, "extra_paths", false);
  public get extraPaths() {
    return this._extraPaths;
  }
  public putExtraPaths(value: SearchDatasetCriblLeaderDatasetExtraPaths[] | cdktf.IResolvable) {
    this._extraPaths.internalValue = value;
  }
  public resetExtraPaths() {
    this._extraPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPathsInput() {
    return this._extraPaths.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetCriblLeaderDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetCriblLeaderDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetEdgeDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetEdgeDatasetMetadataToTerraform(struct?: SearchDatasetEdgeDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetEdgeDatasetMetadataToHclTerraform(struct?: SearchDatasetEdgeDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetEdgeDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetEdgeDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetEdgeDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetEdgeDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Fleets to query. '*' for all. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#fleets SearchDataset#fleets}
  */
  readonly fleets?: string[];
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetEdgeDatasetMetadata;
  /**
  * The directory where data will be collected. Environment variables and templating are supported. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetEdgeDatasetToTerraform(struct?: SearchDatasetEdgeDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    fleets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fleets),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetEdgeDatasetMetadataToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetEdgeDatasetToHclTerraform(struct?: SearchDatasetEdgeDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fleets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fleets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetEdgeDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetEdgeDatasetMetadata",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetEdgeDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetEdgeDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._fleets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleets = this._fleets;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetEdgeDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._fleets = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._path = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._filter = value.filter;
      this._fleets = value.fleets;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._path = value.path;
      this._providerId = value.providerId;
      this._type = value.type;
    }
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

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // fleets - computed: true, optional: true, required: false
  private _fleets?: string[]; 
  public get fleets() {
    return this.getListAttribute('fleets');
  }
  public set fleets(value: string[]) {
    this._fleets = value;
  }
  public resetFleets() {
    this._fleets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetsInput() {
    return this._fleets;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetEdgeDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetEdgeDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetGcsDatasetExtraPaths {
  /**
  * Google Cloud Storage bucket path. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#bucket SearchDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Where the extra bucket is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#region SearchDataset#region}
  */
  readonly region?: string;
}

export function searchDatasetGcsDatasetExtraPathsToTerraform(struct?: SearchDatasetGcsDatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    filter: cdktf.stringToTerraform(struct!.filter),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function searchDatasetGcsDatasetExtraPathsToHclTerraform(struct?: SearchDatasetGcsDatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetGcsDatasetExtraPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetGcsDatasetExtraPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetGcsDatasetExtraPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._filter = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._filter = value.filter;
      this._region = value.region;
    }
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

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SearchDatasetGcsDatasetExtraPathsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetGcsDatasetExtraPaths[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetGcsDatasetExtraPathsOutputReference {
    return new SearchDatasetGcsDatasetExtraPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetGcsDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetGcsDatasetMetadataToTerraform(struct?: SearchDatasetGcsDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetGcsDatasetMetadataToHclTerraform(struct?: SearchDatasetGcsDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetGcsDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetGcsDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetGcsDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetGcsDataset {
  /**
  * Google Cloud Storage bucket path. Templating is supported. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#bucket SearchDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Additional bucket paths that are included in this dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#extra_paths SearchDataset#extra_paths}
  */
  readonly extraPaths?: SearchDatasetGcsDatasetExtraPaths[] | cdktf.IResolvable;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetGcsDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Where the bucket is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#region SearchDataset#region}
  */
  readonly region?: string;
  /**
  * Whether to skip event time filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#skip_event_time_filter SearchDataset#skip_event_time_filter}
  */
  readonly skipEventTimeFilter?: boolean | cdktf.IResolvable;
  /**
  * Storage classes to include in the search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#storage_classes SearchDataset#storage_classes}
  */
  readonly storageClasses?: string[];
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetGcsDatasetToTerraform(struct?: SearchDatasetGcsDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    description: cdktf.stringToTerraform(struct!.description),
    extra_paths: cdktf.listMapper(searchDatasetGcsDatasetExtraPathsToTerraform, false)(struct!.extraPaths),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetGcsDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    region: cdktf.stringToTerraform(struct!.region),
    skip_event_time_filter: cdktf.booleanToTerraform(struct!.skipEventTimeFilter),
    storage_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageClasses),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetGcsDatasetToHclTerraform(struct?: SearchDatasetGcsDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
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
    extra_paths: {
      value: cdktf.listMapperHcl(searchDatasetGcsDatasetExtraPathsToHclTerraform, false)(struct!.extraPaths),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetGcsDatasetExtraPathsList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    metadata: {
      value: searchDatasetGcsDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetGcsDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_event_time_filter: {
      value: cdktf.booleanToHclTerraform(struct!.skipEventTimeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetGcsDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetGcsDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extraPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraPaths = this._extraPaths?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._skipEventTimeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEventTimeFilter = this._skipEventTimeFilter;
    }
    if (this._storageClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetGcsDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._description = undefined;
      this._extraPaths.internalValue = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._region = undefined;
      this._skipEventTimeFilter = undefined;
      this._storageClasses = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._description = value.description;
      this._extraPaths.internalValue = value.extraPaths;
      this._filter = value.filter;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._region = value.region;
      this._skipEventTimeFilter = value.skipEventTimeFilter;
      this._storageClasses = value.storageClasses;
      this._type = value.type;
    }
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

  // extra_paths - computed: true, optional: true, required: false
  private _extraPaths = new SearchDatasetGcsDatasetExtraPathsList(this, "extra_paths", false);
  public get extraPaths() {
    return this._extraPaths;
  }
  public putExtraPaths(value: SearchDatasetGcsDatasetExtraPaths[] | cdktf.IResolvable) {
    this._extraPaths.internalValue = value;
  }
  public resetExtraPaths() {
    this._extraPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPathsInput() {
    return this._extraPaths.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetGcsDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetGcsDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // skip_event_time_filter - computed: true, optional: true, required: false
  private _skipEventTimeFilter?: boolean | cdktf.IResolvable; 
  public get skipEventTimeFilter() {
    return this.getBooleanAttribute('skip_event_time_filter');
  }
  public set skipEventTimeFilter(value: boolean | cdktf.IResolvable) {
    this._skipEventTimeFilter = value;
  }
  public resetSkipEventTimeFilter() {
    this._skipEventTimeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEventTimeFilterInput() {
    return this._skipEventTimeFilter;
  }

  // storage_classes - computed: true, optional: true, required: false
  private _storageClasses?: string[]; 
  public get storageClasses() {
    return this.getListAttribute('storage_classes');
  }
  public set storageClasses(value: string[]) {
    this._storageClasses = value;
  }
  public resetStorageClasses() {
    this._storageClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetMetaDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetMetaDatasetMetadataToTerraform(struct?: SearchDatasetMetaDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetMetaDatasetMetadataToHclTerraform(struct?: SearchDatasetMetaDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetMetaDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetMetaDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetMetaDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetMetaDataset {
  /**
  * IDs of the datasets that are searched by default. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#datasets SearchDataset#datasets}
  */
  readonly datasets?: string[];
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetMetaDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetMetaDatasetToTerraform(struct?: SearchDatasetMetaDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datasets),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetMetaDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetMetaDatasetToHclTerraform(struct?: SearchDatasetMetaDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datasets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    metadata: {
      value: searchDatasetMetaDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetMetaDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetMetaDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetMetaDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasets !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasets = this._datasets;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetMetaDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasets = undefined;
      this._description = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasets = value.datasets;
      this._description = value.description;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._type = value.type;
    }
  }

  // datasets - computed: true, optional: true, required: false
  private _datasets?: string[]; 
  public get datasets() {
    return this.getListAttribute('datasets');
  }
  public set datasets(value: string[]) {
    this._datasets = value;
  }
  public resetDatasets() {
    this._datasets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetMetaDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetMetaDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetPrometheusDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetPrometheusDatasetMetadataToTerraform(struct?: SearchDatasetPrometheusDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetPrometheusDatasetMetadataToHclTerraform(struct?: SearchDatasetPrometheusDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetPrometheusDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetPrometheusDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetPrometheusDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetPrometheusDataset {
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Number of data points you want in each result set. Defaults to 250. Can be overridden on the query with a 'step' predicate. Default: 250
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#desired_num_data_points SearchDataset#desired_num_data_points}
  */
  readonly desiredNumDataPoints?: number;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetPrometheusDatasetMetadata;
  /**
  * Optional regular expression used to filter metric names. When defined, only metrics whose name matches this pattern will be searched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metric_name_pattern SearchDataset#metric_name_pattern}
  */
  readonly metricNamePattern?: string;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * How to calculate the "step," or time range increment per data point, for the Prometheus query request. Default: "exact"; must be one of ["exact", "nearest_unit"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#step_mode SearchDataset#step_mode}
  */
  readonly stepMode?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetPrometheusDatasetToTerraform(struct?: SearchDatasetPrometheusDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    desired_num_data_points: cdktf.numberToTerraform(struct!.desiredNumDataPoints),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetPrometheusDatasetMetadataToTerraform(struct!.metadata),
    metric_name_pattern: cdktf.stringToTerraform(struct!.metricNamePattern),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    step_mode: cdktf.stringToTerraform(struct!.stepMode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetPrometheusDatasetToHclTerraform(struct?: SearchDatasetPrometheusDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_num_data_points: {
      value: cdktf.numberToHclTerraform(struct!.desiredNumDataPoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetPrometheusDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetPrometheusDatasetMetadata",
    },
    metric_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.metricNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_mode: {
      value: cdktf.stringToHclTerraform(struct!.stepMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetPrometheusDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetPrometheusDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._desiredNumDataPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredNumDataPoints = this._desiredNumDataPoints;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._metricNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamePattern = this._metricNamePattern;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._stepMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepMode = this._stepMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetPrometheusDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._desiredNumDataPoints = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._metricNamePattern = undefined;
      this._providerId = undefined;
      this._stepMode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._desiredNumDataPoints = value.desiredNumDataPoints;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._metricNamePattern = value.metricNamePattern;
      this._providerId = value.providerId;
      this._stepMode = value.stepMode;
      this._type = value.type;
    }
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

  // desired_num_data_points - computed: true, optional: true, required: false
  private _desiredNumDataPoints?: number; 
  public get desiredNumDataPoints() {
    return this.getNumberAttribute('desired_num_data_points');
  }
  public set desiredNumDataPoints(value: number) {
    this._desiredNumDataPoints = value;
  }
  public resetDesiredNumDataPoints() {
    this._desiredNumDataPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredNumDataPointsInput() {
    return this._desiredNumDataPoints;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetPrometheusDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetPrometheusDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // metric_name_pattern - computed: true, optional: true, required: false
  private _metricNamePattern?: string; 
  public get metricNamePattern() {
    return this.getStringAttribute('metric_name_pattern');
  }
  public set metricNamePattern(value: string) {
    this._metricNamePattern = value;
  }
  public resetMetricNamePattern() {
    this._metricNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamePatternInput() {
    return this._metricNamePattern;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // step_mode - computed: true, optional: true, required: false
  private _stepMode?: string; 
  public get stepMode() {
    return this.getStringAttribute('step_mode');
  }
  public set stepMode(value: string) {
    this._stepMode = value;
  }
  public resetStepMode() {
    this._stepMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepModeInput() {
    return this._stepMode;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetS3DatasetExtraPaths {
  /**
  * Whether to automatically detect the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#auto_detect_region SearchDataset#auto_detect_region}
  */
  readonly autoDetectRegion?: boolean | cdktf.IResolvable;
  /**
  * S3 bucket name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#bucket SearchDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * The templated path under which to look for data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
  /**
  * AWS region where the bucket is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#region SearchDataset#region}
  */
  readonly region?: string;
}

export function searchDatasetS3DatasetExtraPathsToTerraform(struct?: SearchDatasetS3DatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_detect_region: cdktf.booleanToTerraform(struct!.autoDetectRegion),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    filter: cdktf.stringToTerraform(struct!.filter),
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function searchDatasetS3DatasetExtraPathsToHclTerraform(struct?: SearchDatasetS3DatasetExtraPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_detect_region: {
      value: cdktf.booleanToHclTerraform(struct!.autoDetectRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetS3DatasetExtraPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetS3DatasetExtraPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDetectRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetectRegion = this._autoDetectRegion;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetS3DatasetExtraPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDetectRegion = undefined;
      this._bucket = undefined;
      this._filter = undefined;
      this._path = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDetectRegion = value.autoDetectRegion;
      this._bucket = value.bucket;
      this._filter = value.filter;
      this._path = value.path;
      this._region = value.region;
    }
  }

  // auto_detect_region - computed: true, optional: true, required: false
  private _autoDetectRegion?: boolean | cdktf.IResolvable; 
  public get autoDetectRegion() {
    return this.getBooleanAttribute('auto_detect_region');
  }
  public set autoDetectRegion(value: boolean | cdktf.IResolvable) {
    this._autoDetectRegion = value;
  }
  public resetAutoDetectRegion() {
    this._autoDetectRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectRegionInput() {
    return this._autoDetectRegion;
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

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SearchDatasetS3DatasetExtraPathsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetS3DatasetExtraPaths[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetS3DatasetExtraPathsOutputReference {
    return new SearchDatasetS3DatasetExtraPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetS3DatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetS3DatasetMetadataToTerraform(struct?: SearchDatasetS3DatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetS3DatasetMetadataToHclTerraform(struct?: SearchDatasetS3DatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetS3DatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetS3DatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetS3DatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetS3Dataset {
  /**
  * Whether to automatically detect the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#auto_detect_region SearchDataset#auto_detect_region}
  */
  readonly autoDetectRegion?: boolean | cdktf.IResolvable;
  /**
  * S3 bucket name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#bucket SearchDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Additional bucket paths that are included in this dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#extra_paths SearchDataset#extra_paths}
  */
  readonly extraPaths?: SearchDatasetS3DatasetExtraPaths[] | cdktf.IResolvable;
  /**
  * A JavaScript filter expression to be evaluated against the provided path. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#filter SearchDataset#filter}
  */
  readonly filter?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetS3DatasetMetadata;
  /**
  * The templated path under which to look for data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#path SearchDataset#path}
  */
  readonly path?: string;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * AWS region where the bucket is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#region SearchDataset#region}
  */
  readonly region?: string;
  /**
  * Whether to skip event time filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#skip_event_time_filter SearchDataset#skip_event_time_filter}
  */
  readonly skipEventTimeFilter?: boolean | cdktf.IResolvable;
  /**
  * Storage classes to include in the search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#storage_classes SearchDataset#storage_classes}
  */
  readonly storageClasses?: string[];
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
}

export function searchDatasetS3DatasetToTerraform(struct?: SearchDatasetS3Dataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_detect_region: cdktf.booleanToTerraform(struct!.autoDetectRegion),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    description: cdktf.stringToTerraform(struct!.description),
    extra_paths: cdktf.listMapper(searchDatasetS3DatasetExtraPathsToTerraform, false)(struct!.extraPaths),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetS3DatasetMetadataToTerraform(struct!.metadata),
    path: cdktf.stringToTerraform(struct!.path),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    region: cdktf.stringToTerraform(struct!.region),
    skip_event_time_filter: cdktf.booleanToTerraform(struct!.skipEventTimeFilter),
    storage_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageClasses),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetS3DatasetToHclTerraform(struct?: SearchDatasetS3Dataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_detect_region: {
      value: cdktf.booleanToHclTerraform(struct!.autoDetectRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
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
    extra_paths: {
      value: cdktf.listMapperHcl(searchDatasetS3DatasetExtraPathsToHclTerraform, false)(struct!.extraPaths),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetS3DatasetExtraPathsList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    metadata: {
      value: searchDatasetS3DatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetS3DatasetMetadata",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_event_time_filter: {
      value: cdktf.booleanToHclTerraform(struct!.skipEventTimeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetS3DatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetS3Dataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDetectRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetectRegion = this._autoDetectRegion;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extraPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraPaths = this._extraPaths?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._skipEventTimeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEventTimeFilter = this._skipEventTimeFilter;
    }
    if (this._storageClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetS3Dataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDetectRegion = undefined;
      this._bucket = undefined;
      this._description = undefined;
      this._extraPaths.internalValue = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._path = undefined;
      this._providerId = undefined;
      this._region = undefined;
      this._skipEventTimeFilter = undefined;
      this._storageClasses = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDetectRegion = value.autoDetectRegion;
      this._bucket = value.bucket;
      this._description = value.description;
      this._extraPaths.internalValue = value.extraPaths;
      this._filter = value.filter;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._path = value.path;
      this._providerId = value.providerId;
      this._region = value.region;
      this._skipEventTimeFilter = value.skipEventTimeFilter;
      this._storageClasses = value.storageClasses;
      this._type = value.type;
    }
  }

  // auto_detect_region - computed: true, optional: true, required: false
  private _autoDetectRegion?: boolean | cdktf.IResolvable; 
  public get autoDetectRegion() {
    return this.getBooleanAttribute('auto_detect_region');
  }
  public set autoDetectRegion(value: boolean | cdktf.IResolvable) {
    this._autoDetectRegion = value;
  }
  public resetAutoDetectRegion() {
    this._autoDetectRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectRegionInput() {
    return this._autoDetectRegion;
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

  // extra_paths - computed: true, optional: true, required: false
  private _extraPaths = new SearchDatasetS3DatasetExtraPathsList(this, "extra_paths", false);
  public get extraPaths() {
    return this._extraPaths;
  }
  public putExtraPaths(value: SearchDatasetS3DatasetExtraPaths[] | cdktf.IResolvable) {
    this._extraPaths.internalValue = value;
  }
  public resetExtraPaths() {
    this._extraPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPathsInput() {
    return this._extraPaths.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetS3DatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetS3DatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // skip_event_time_filter - computed: true, optional: true, required: false
  private _skipEventTimeFilter?: boolean | cdktf.IResolvable; 
  public get skipEventTimeFilter() {
    return this.getBooleanAttribute('skip_event_time_filter');
  }
  public set skipEventTimeFilter(value: boolean | cdktf.IResolvable) {
    this._skipEventTimeFilter = value;
  }
  public resetSkipEventTimeFilter() {
    this._skipEventTimeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEventTimeFilterInput() {
    return this._skipEventTimeFilter;
  }

  // storage_classes - computed: true, optional: true, required: false
  private _storageClasses?: string[]; 
  public get storageClasses() {
    return this.getListAttribute('storage_classes');
  }
  public set storageClasses(value: string[]) {
    this._storageClasses = value;
  }
  public resetStorageClasses() {
    this._storageClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface SearchDatasetSnowflakeDatasetMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#created SearchDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#enable_acceleration SearchDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#modified SearchDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#tags SearchDataset#tags}
  */
  readonly tags?: string[];
}

export function searchDatasetSnowflakeDatasetMetadataToTerraform(struct?: SearchDatasetSnowflakeDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function searchDatasetSnowflakeDatasetMetadataToHclTerraform(struct?: SearchDatasetSnowflakeDatasetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetSnowflakeDatasetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetSnowflakeDatasetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetSnowflakeDatasetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SearchDatasetSnowflakeDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#database SearchDataset#database}
  */
  readonly database?: string;
  /**
  * Description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#description SearchDataset#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the dataset. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#id SearchDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#metadata SearchDataset#metadata}
  */
  readonly metadata?: SearchDatasetSnowflakeDatasetMetadata;
  /**
  * Dataset provider ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#provider_id SearchDataset#provider_id}
  */
  readonly providerId?: string;
  /**
  * Optional Snowflake role to use when executing the statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#role SearchDataset#role}
  */
  readonly role?: string;
  /**
  * The schema in the database that contains the table(s) to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#schema SearchDataset#schema}
  */
  readonly schema?: string;
  /**
  * May be a simple name (Example: logs) or a SQL query (Example: select * from logs). Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#table SearchDataset#table}
  */
  readonly table?: string;
  /**
  * Optional name of the column holding the timestamp of the event to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#timestamp_field SearchDataset#timestamp_field}
  */
  readonly timestampField?: string;
  /**
  * Dataset provider type, set automatically from the dataset provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#type SearchDataset#type}
  */
  readonly type?: string;
  /**
  * If not set, uses DEFAULT_WAREHOUSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#warehouse SearchDataset#warehouse}
  */
  readonly warehouse?: string;
}

export function searchDatasetSnowflakeDatasetToTerraform(struct?: SearchDatasetSnowflakeDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    metadata: searchDatasetSnowflakeDatasetMetadataToTerraform(struct!.metadata),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    role: cdktf.stringToTerraform(struct!.role),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
    timestamp_field: cdktf.stringToTerraform(struct!.timestampField),
    type: cdktf.stringToTerraform(struct!.type),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}


export function searchDatasetSnowflakeDatasetToHclTerraform(struct?: SearchDatasetSnowflakeDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: searchDatasetSnowflakeDatasetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "SearchDatasetSnowflakeDatasetMetadata",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: cdktf.stringToHclTerraform(struct!.timestampField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktf.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetSnowflakeDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetSnowflakeDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._timestampField !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetSnowflakeDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._description = undefined;
      this._id = undefined;
      this._metadata.internalValue = undefined;
      this._providerId = undefined;
      this._role = undefined;
      this._schema = undefined;
      this._table = undefined;
      this._timestampField = undefined;
      this._type = undefined;
      this._warehouse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._description = value.description;
      this._id = value.id;
      this._metadata.internalValue = value.metadata;
      this._providerId = value.providerId;
      this._role = value.role;
      this._schema = value.schema;
      this._table = value.table;
      this._timestampField = value.timestampField;
      this._type = value.type;
      this._warehouse = value.warehouse;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new SearchDatasetSnowflakeDatasetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SearchDatasetSnowflakeDatasetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // timestamp_field - computed: true, optional: true, required: false
  private _timestampField?: string; 
  public get timestampField() {
    return this.getStringAttribute('timestamp_field');
  }
  public set timestampField(value: string) {
    this._timestampField = value;
  }
  public resetTimestampField() {
    this._timestampField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField;
  }

  // type - computed: true, optional: true, required: false
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

  // warehouse - computed: true, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset criblio_search_dataset}
*/
export class SearchDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_search_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchDataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchDataset to import
  * @param importFromId The id of the existing SearchDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/search_dataset criblio_search_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchDatasetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SearchDatasetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_dataset',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.23',
        providerVersionConstraint: '1.20.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAwsDataset.internalValue = config.apiAwsDataset;
    this._apiAzureDataExplorerDataset.internalValue = config.apiAzureDataExplorerDataset;
    this._apiAzureDataset.internalValue = config.apiAzureDataset;
    this._apiElasticSearchDataset.internalValue = config.apiElasticSearchDataset;
    this._apiGcpDataset.internalValue = config.apiGcpDataset;
    this._apiGoogleWorkspaceDataset.internalValue = config.apiGoogleWorkspaceDataset;
    this._apiMsGraphDataset.internalValue = config.apiMsGraphDataset;
    this._apiOktaDataset.internalValue = config.apiOktaDataset;
    this._apiOpenSearchDataset.internalValue = config.apiOpenSearchDataset;
    this._apiTailscaleDataset.internalValue = config.apiTailscaleDataset;
    this._apiZoomDataset.internalValue = config.apiZoomDataset;
    this._apihttpDataset.internalValue = config.apihttpDataset;
    this._awsSecurityLakeDataset.internalValue = config.awsSecurityLakeDataset;
    this._azureBlobDataset.internalValue = config.azureBlobDataset;
    this._clickHouseDataset.internalValue = config.clickHouseDataset;
    this._criblLeaderDataset.internalValue = config.criblLeaderDataset;
    this._edgeDataset.internalValue = config.edgeDataset;
    this._gcsDataset.internalValue = config.gcsDataset;
    this._metaDataset.internalValue = config.metaDataset;
    this._prometheusDataset.internalValue = config.prometheusDataset;
    this._s3Dataset.internalValue = config.s3Dataset;
    this._snowflakeDataset.internalValue = config.snowflakeDataset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_aws_dataset - computed: false, optional: true, required: false
  private _apiAwsDataset = new SearchDatasetApiAwsDatasetOutputReference(this, "api_aws_dataset");
  public get apiAwsDataset() {
    return this._apiAwsDataset;
  }
  public putApiAwsDataset(value: SearchDatasetApiAwsDataset) {
    this._apiAwsDataset.internalValue = value;
  }
  public resetApiAwsDataset() {
    this._apiAwsDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAwsDatasetInput() {
    return this._apiAwsDataset.internalValue;
  }

  // api_azure_data_explorer_dataset - computed: false, optional: true, required: false
  private _apiAzureDataExplorerDataset = new SearchDatasetApiAzureDataExplorerDatasetOutputReference(this, "api_azure_data_explorer_dataset");
  public get apiAzureDataExplorerDataset() {
    return this._apiAzureDataExplorerDataset;
  }
  public putApiAzureDataExplorerDataset(value: SearchDatasetApiAzureDataExplorerDataset) {
    this._apiAzureDataExplorerDataset.internalValue = value;
  }
  public resetApiAzureDataExplorerDataset() {
    this._apiAzureDataExplorerDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAzureDataExplorerDatasetInput() {
    return this._apiAzureDataExplorerDataset.internalValue;
  }

  // api_azure_dataset - computed: false, optional: true, required: false
  private _apiAzureDataset = new SearchDatasetApiAzureDatasetOutputReference(this, "api_azure_dataset");
  public get apiAzureDataset() {
    return this._apiAzureDataset;
  }
  public putApiAzureDataset(value: SearchDatasetApiAzureDataset) {
    this._apiAzureDataset.internalValue = value;
  }
  public resetApiAzureDataset() {
    this._apiAzureDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAzureDatasetInput() {
    return this._apiAzureDataset.internalValue;
  }

  // api_elastic_search_dataset - computed: false, optional: true, required: false
  private _apiElasticSearchDataset = new SearchDatasetApiElasticSearchDatasetOutputReference(this, "api_elastic_search_dataset");
  public get apiElasticSearchDataset() {
    return this._apiElasticSearchDataset;
  }
  public putApiElasticSearchDataset(value: SearchDatasetApiElasticSearchDataset) {
    this._apiElasticSearchDataset.internalValue = value;
  }
  public resetApiElasticSearchDataset() {
    this._apiElasticSearchDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiElasticSearchDatasetInput() {
    return this._apiElasticSearchDataset.internalValue;
  }

  // api_gcp_dataset - computed: false, optional: true, required: false
  private _apiGcpDataset = new SearchDatasetApiGcpDatasetOutputReference(this, "api_gcp_dataset");
  public get apiGcpDataset() {
    return this._apiGcpDataset;
  }
  public putApiGcpDataset(value: SearchDatasetApiGcpDataset) {
    this._apiGcpDataset.internalValue = value;
  }
  public resetApiGcpDataset() {
    this._apiGcpDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGcpDatasetInput() {
    return this._apiGcpDataset.internalValue;
  }

  // api_google_workspace_dataset - computed: false, optional: true, required: false
  private _apiGoogleWorkspaceDataset = new SearchDatasetApiGoogleWorkspaceDatasetOutputReference(this, "api_google_workspace_dataset");
  public get apiGoogleWorkspaceDataset() {
    return this._apiGoogleWorkspaceDataset;
  }
  public putApiGoogleWorkspaceDataset(value: SearchDatasetApiGoogleWorkspaceDataset) {
    this._apiGoogleWorkspaceDataset.internalValue = value;
  }
  public resetApiGoogleWorkspaceDataset() {
    this._apiGoogleWorkspaceDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGoogleWorkspaceDatasetInput() {
    return this._apiGoogleWorkspaceDataset.internalValue;
  }

  // api_ms_graph_dataset - computed: false, optional: true, required: false
  private _apiMsGraphDataset = new SearchDatasetApiMsGraphDatasetOutputReference(this, "api_ms_graph_dataset");
  public get apiMsGraphDataset() {
    return this._apiMsGraphDataset;
  }
  public putApiMsGraphDataset(value: SearchDatasetApiMsGraphDataset) {
    this._apiMsGraphDataset.internalValue = value;
  }
  public resetApiMsGraphDataset() {
    this._apiMsGraphDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMsGraphDatasetInput() {
    return this._apiMsGraphDataset.internalValue;
  }

  // api_okta_dataset - computed: false, optional: true, required: false
  private _apiOktaDataset = new SearchDatasetApiOktaDatasetOutputReference(this, "api_okta_dataset");
  public get apiOktaDataset() {
    return this._apiOktaDataset;
  }
  public putApiOktaDataset(value: SearchDatasetApiOktaDataset) {
    this._apiOktaDataset.internalValue = value;
  }
  public resetApiOktaDataset() {
    this._apiOktaDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOktaDatasetInput() {
    return this._apiOktaDataset.internalValue;
  }

  // api_open_search_dataset - computed: false, optional: true, required: false
  private _apiOpenSearchDataset = new SearchDatasetApiOpenSearchDatasetOutputReference(this, "api_open_search_dataset");
  public get apiOpenSearchDataset() {
    return this._apiOpenSearchDataset;
  }
  public putApiOpenSearchDataset(value: SearchDatasetApiOpenSearchDataset) {
    this._apiOpenSearchDataset.internalValue = value;
  }
  public resetApiOpenSearchDataset() {
    this._apiOpenSearchDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOpenSearchDatasetInput() {
    return this._apiOpenSearchDataset.internalValue;
  }

  // api_tailscale_dataset - computed: false, optional: true, required: false
  private _apiTailscaleDataset = new SearchDatasetApiTailscaleDatasetOutputReference(this, "api_tailscale_dataset");
  public get apiTailscaleDataset() {
    return this._apiTailscaleDataset;
  }
  public putApiTailscaleDataset(value: SearchDatasetApiTailscaleDataset) {
    this._apiTailscaleDataset.internalValue = value;
  }
  public resetApiTailscaleDataset() {
    this._apiTailscaleDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTailscaleDatasetInput() {
    return this._apiTailscaleDataset.internalValue;
  }

  // api_zoom_dataset - computed: false, optional: true, required: false
  private _apiZoomDataset = new SearchDatasetApiZoomDatasetOutputReference(this, "api_zoom_dataset");
  public get apiZoomDataset() {
    return this._apiZoomDataset;
  }
  public putApiZoomDataset(value: SearchDatasetApiZoomDataset) {
    this._apiZoomDataset.internalValue = value;
  }
  public resetApiZoomDataset() {
    this._apiZoomDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiZoomDatasetInput() {
    return this._apiZoomDataset.internalValue;
  }

  // apihttp_dataset - computed: false, optional: true, required: false
  private _apihttpDataset = new SearchDatasetApihttpDatasetOutputReference(this, "apihttp_dataset");
  public get apihttpDataset() {
    return this._apihttpDataset;
  }
  public putApihttpDataset(value: SearchDatasetApihttpDataset) {
    this._apihttpDataset.internalValue = value;
  }
  public resetApihttpDataset() {
    this._apihttpDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apihttpDatasetInput() {
    return this._apihttpDataset.internalValue;
  }

  // aws_security_lake_dataset - computed: false, optional: true, required: false
  private _awsSecurityLakeDataset = new SearchDatasetAwsSecurityLakeDatasetOutputReference(this, "aws_security_lake_dataset");
  public get awsSecurityLakeDataset() {
    return this._awsSecurityLakeDataset;
  }
  public putAwsSecurityLakeDataset(value: SearchDatasetAwsSecurityLakeDataset) {
    this._awsSecurityLakeDataset.internalValue = value;
  }
  public resetAwsSecurityLakeDataset() {
    this._awsSecurityLakeDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityLakeDatasetInput() {
    return this._awsSecurityLakeDataset.internalValue;
  }

  // azure_blob_dataset - computed: false, optional: true, required: false
  private _azureBlobDataset = new SearchDatasetAzureBlobDatasetOutputReference(this, "azure_blob_dataset");
  public get azureBlobDataset() {
    return this._azureBlobDataset;
  }
  public putAzureBlobDataset(value: SearchDatasetAzureBlobDataset) {
    this._azureBlobDataset.internalValue = value;
  }
  public resetAzureBlobDataset() {
    this._azureBlobDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobDatasetInput() {
    return this._azureBlobDataset.internalValue;
  }

  // click_house_dataset - computed: false, optional: true, required: false
  private _clickHouseDataset = new SearchDatasetClickHouseDatasetOutputReference(this, "click_house_dataset");
  public get clickHouseDataset() {
    return this._clickHouseDataset;
  }
  public putClickHouseDataset(value: SearchDatasetClickHouseDataset) {
    this._clickHouseDataset.internalValue = value;
  }
  public resetClickHouseDataset() {
    this._clickHouseDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickHouseDatasetInput() {
    return this._clickHouseDataset.internalValue;
  }

  // cribl_leader_dataset - computed: false, optional: true, required: false
  private _criblLeaderDataset = new SearchDatasetCriblLeaderDatasetOutputReference(this, "cribl_leader_dataset");
  public get criblLeaderDataset() {
    return this._criblLeaderDataset;
  }
  public putCriblLeaderDataset(value: SearchDatasetCriblLeaderDataset) {
    this._criblLeaderDataset.internalValue = value;
  }
  public resetCriblLeaderDataset() {
    this._criblLeaderDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criblLeaderDatasetInput() {
    return this._criblLeaderDataset.internalValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edge_dataset - computed: false, optional: true, required: false
  private _edgeDataset = new SearchDatasetEdgeDatasetOutputReference(this, "edge_dataset");
  public get edgeDataset() {
    return this._edgeDataset;
  }
  public putEdgeDataset(value: SearchDatasetEdgeDataset) {
    this._edgeDataset.internalValue = value;
  }
  public resetEdgeDataset() {
    this._edgeDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeDatasetInput() {
    return this._edgeDataset.internalValue;
  }

  // gcs_dataset - computed: false, optional: true, required: false
  private _gcsDataset = new SearchDatasetGcsDatasetOutputReference(this, "gcs_dataset");
  public get gcsDataset() {
    return this._gcsDataset;
  }
  public putGcsDataset(value: SearchDatasetGcsDataset) {
    this._gcsDataset.internalValue = value;
  }
  public resetGcsDataset() {
    this._gcsDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDatasetInput() {
    return this._gcsDataset.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta_dataset - computed: false, optional: true, required: false
  private _metaDataset = new SearchDatasetMetaDatasetOutputReference(this, "meta_dataset");
  public get metaDataset() {
    return this._metaDataset;
  }
  public putMetaDataset(value: SearchDatasetMetaDataset) {
    this._metaDataset.internalValue = value;
  }
  public resetMetaDataset() {
    this._metaDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDatasetInput() {
    return this._metaDataset.internalValue;
  }

  // prometheus_dataset - computed: false, optional: true, required: false
  private _prometheusDataset = new SearchDatasetPrometheusDatasetOutputReference(this, "prometheus_dataset");
  public get prometheusDataset() {
    return this._prometheusDataset;
  }
  public putPrometheusDataset(value: SearchDatasetPrometheusDataset) {
    this._prometheusDataset.internalValue = value;
  }
  public resetPrometheusDataset() {
    this._prometheusDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusDatasetInput() {
    return this._prometheusDataset.internalValue;
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // s3_dataset - computed: false, optional: true, required: false
  private _s3Dataset = new SearchDatasetS3DatasetOutputReference(this, "s3_dataset");
  public get s3Dataset() {
    return this._s3Dataset;
  }
  public putS3Dataset(value: SearchDatasetS3Dataset) {
    this._s3Dataset.internalValue = value;
  }
  public resetS3Dataset() {
    this._s3Dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DatasetInput() {
    return this._s3Dataset.internalValue;
  }

  // snowflake_dataset - computed: false, optional: true, required: false
  private _snowflakeDataset = new SearchDatasetSnowflakeDatasetOutputReference(this, "snowflake_dataset");
  public get snowflakeDataset() {
    return this._snowflakeDataset;
  }
  public putSnowflakeDataset(value: SearchDatasetSnowflakeDataset) {
    this._snowflakeDataset.internalValue = value;
  }
  public resetSnowflakeDataset() {
    this._snowflakeDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeDatasetInput() {
    return this._snowflakeDataset.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_aws_dataset: searchDatasetApiAwsDatasetToTerraform(this._apiAwsDataset.internalValue),
      api_azure_data_explorer_dataset: searchDatasetApiAzureDataExplorerDatasetToTerraform(this._apiAzureDataExplorerDataset.internalValue),
      api_azure_dataset: searchDatasetApiAzureDatasetToTerraform(this._apiAzureDataset.internalValue),
      api_elastic_search_dataset: searchDatasetApiElasticSearchDatasetToTerraform(this._apiElasticSearchDataset.internalValue),
      api_gcp_dataset: searchDatasetApiGcpDatasetToTerraform(this._apiGcpDataset.internalValue),
      api_google_workspace_dataset: searchDatasetApiGoogleWorkspaceDatasetToTerraform(this._apiGoogleWorkspaceDataset.internalValue),
      api_ms_graph_dataset: searchDatasetApiMsGraphDatasetToTerraform(this._apiMsGraphDataset.internalValue),
      api_okta_dataset: searchDatasetApiOktaDatasetToTerraform(this._apiOktaDataset.internalValue),
      api_open_search_dataset: searchDatasetApiOpenSearchDatasetToTerraform(this._apiOpenSearchDataset.internalValue),
      api_tailscale_dataset: searchDatasetApiTailscaleDatasetToTerraform(this._apiTailscaleDataset.internalValue),
      api_zoom_dataset: searchDatasetApiZoomDatasetToTerraform(this._apiZoomDataset.internalValue),
      apihttp_dataset: searchDatasetApihttpDatasetToTerraform(this._apihttpDataset.internalValue),
      aws_security_lake_dataset: searchDatasetAwsSecurityLakeDatasetToTerraform(this._awsSecurityLakeDataset.internalValue),
      azure_blob_dataset: searchDatasetAzureBlobDatasetToTerraform(this._azureBlobDataset.internalValue),
      click_house_dataset: searchDatasetClickHouseDatasetToTerraform(this._clickHouseDataset.internalValue),
      cribl_leader_dataset: searchDatasetCriblLeaderDatasetToTerraform(this._criblLeaderDataset.internalValue),
      edge_dataset: searchDatasetEdgeDatasetToTerraform(this._edgeDataset.internalValue),
      gcs_dataset: searchDatasetGcsDatasetToTerraform(this._gcsDataset.internalValue),
      meta_dataset: searchDatasetMetaDatasetToTerraform(this._metaDataset.internalValue),
      prometheus_dataset: searchDatasetPrometheusDatasetToTerraform(this._prometheusDataset.internalValue),
      s3_dataset: searchDatasetS3DatasetToTerraform(this._s3Dataset.internalValue),
      snowflake_dataset: searchDatasetSnowflakeDatasetToTerraform(this._snowflakeDataset.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_aws_dataset: {
        value: searchDatasetApiAwsDatasetToHclTerraform(this._apiAwsDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiAwsDataset",
      },
      api_azure_data_explorer_dataset: {
        value: searchDatasetApiAzureDataExplorerDatasetToHclTerraform(this._apiAzureDataExplorerDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiAzureDataExplorerDataset",
      },
      api_azure_dataset: {
        value: searchDatasetApiAzureDatasetToHclTerraform(this._apiAzureDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiAzureDataset",
      },
      api_elastic_search_dataset: {
        value: searchDatasetApiElasticSearchDatasetToHclTerraform(this._apiElasticSearchDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiElasticSearchDataset",
      },
      api_gcp_dataset: {
        value: searchDatasetApiGcpDatasetToHclTerraform(this._apiGcpDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiGcpDataset",
      },
      api_google_workspace_dataset: {
        value: searchDatasetApiGoogleWorkspaceDatasetToHclTerraform(this._apiGoogleWorkspaceDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiGoogleWorkspaceDataset",
      },
      api_ms_graph_dataset: {
        value: searchDatasetApiMsGraphDatasetToHclTerraform(this._apiMsGraphDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiMsGraphDataset",
      },
      api_okta_dataset: {
        value: searchDatasetApiOktaDatasetToHclTerraform(this._apiOktaDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiOktaDataset",
      },
      api_open_search_dataset: {
        value: searchDatasetApiOpenSearchDatasetToHclTerraform(this._apiOpenSearchDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiOpenSearchDataset",
      },
      api_tailscale_dataset: {
        value: searchDatasetApiTailscaleDatasetToHclTerraform(this._apiTailscaleDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiTailscaleDataset",
      },
      api_zoom_dataset: {
        value: searchDatasetApiZoomDatasetToHclTerraform(this._apiZoomDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApiZoomDataset",
      },
      apihttp_dataset: {
        value: searchDatasetApihttpDatasetToHclTerraform(this._apihttpDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetApihttpDataset",
      },
      aws_security_lake_dataset: {
        value: searchDatasetAwsSecurityLakeDatasetToHclTerraform(this._awsSecurityLakeDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetAwsSecurityLakeDataset",
      },
      azure_blob_dataset: {
        value: searchDatasetAzureBlobDatasetToHclTerraform(this._azureBlobDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetAzureBlobDataset",
      },
      click_house_dataset: {
        value: searchDatasetClickHouseDatasetToHclTerraform(this._clickHouseDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetClickHouseDataset",
      },
      cribl_leader_dataset: {
        value: searchDatasetCriblLeaderDatasetToHclTerraform(this._criblLeaderDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetCriblLeaderDataset",
      },
      edge_dataset: {
        value: searchDatasetEdgeDatasetToHclTerraform(this._edgeDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetEdgeDataset",
      },
      gcs_dataset: {
        value: searchDatasetGcsDatasetToHclTerraform(this._gcsDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetGcsDataset",
      },
      meta_dataset: {
        value: searchDatasetMetaDatasetToHclTerraform(this._metaDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetMetaDataset",
      },
      prometheus_dataset: {
        value: searchDatasetPrometheusDatasetToHclTerraform(this._prometheusDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetPrometheusDataset",
      },
      s3_dataset: {
        value: searchDatasetS3DatasetToHclTerraform(this._s3Dataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetS3Dataset",
      },
      snowflake_dataset: {
        value: searchDatasetSnowflakeDatasetToHclTerraform(this._snowflakeDataset.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetSnowflakeDataset",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
