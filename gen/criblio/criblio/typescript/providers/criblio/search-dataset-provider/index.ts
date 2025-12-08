// https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchDatasetProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_aws_provider SearchDatasetProvider#api_aws_provider}
  */
  readonly apiAwsProvider?: SearchDatasetProviderApiAwsProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_azure_data_explorer_provider SearchDatasetProvider#api_azure_data_explorer_provider}
  */
  readonly apiAzureDataExplorerProvider?: SearchDatasetProviderApiAzureDataExplorerProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_azure_provider SearchDatasetProvider#api_azure_provider}
  */
  readonly apiAzureProvider?: SearchDatasetProviderApiAzureProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_elastic_search_provider SearchDatasetProvider#api_elastic_search_provider}
  */
  readonly apiElasticSearchProvider?: SearchDatasetProviderApiElasticSearchProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_gcp_provider SearchDatasetProvider#api_gcp_provider}
  */
  readonly apiGcpProvider?: SearchDatasetProviderApiGcpProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_google_workspace_provider SearchDatasetProvider#api_google_workspace_provider}
  */
  readonly apiGoogleWorkspaceProvider?: SearchDatasetProviderApiGoogleWorkspaceProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_ms_graph_provider SearchDatasetProvider#api_ms_graph_provider}
  */
  readonly apiMsGraphProvider?: SearchDatasetProviderApiMsGraphProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_okta_provider SearchDatasetProvider#api_okta_provider}
  */
  readonly apiOktaProvider?: SearchDatasetProviderApiOktaProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_open_search_provider SearchDatasetProvider#api_open_search_provider}
  */
  readonly apiOpenSearchProvider?: SearchDatasetProviderApiOpenSearchProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_tailscale_provider SearchDatasetProvider#api_tailscale_provider}
  */
  readonly apiTailscaleProvider?: SearchDatasetProviderApiTailscaleProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_zoom_provider SearchDatasetProvider#api_zoom_provider}
  */
  readonly apiZoomProvider?: SearchDatasetProviderApiZoomProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#apihttp_provider SearchDatasetProvider#apihttp_provider}
  */
  readonly apihttpProvider?: SearchDatasetProviderApihttpProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#aws_security_lake_provider SearchDatasetProvider#aws_security_lake_provider}
  */
  readonly awsSecurityLakeProvider?: SearchDatasetProviderAwsSecurityLakeProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#azure_blob_provider SearchDatasetProvider#azure_blob_provider}
  */
  readonly azureBlobProvider?: SearchDatasetProviderAzureBlobProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#click_house_provider SearchDatasetProvider#click_house_provider}
  */
  readonly clickHouseProvider?: SearchDatasetProviderClickHouseProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#cribl_leader_provider SearchDatasetProvider#cribl_leader_provider}
  */
  readonly criblLeaderProvider?: SearchDatasetProviderCriblLeaderProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#edge_provider SearchDatasetProvider#edge_provider}
  */
  readonly edgeProvider?: SearchDatasetProviderEdgeProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#gcs_provider SearchDatasetProvider#gcs_provider}
  */
  readonly gcsProvider?: SearchDatasetProviderGcsProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#meta_provider SearchDatasetProvider#meta_provider}
  */
  readonly metaProvider?: SearchDatasetProviderMetaProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#prometheus_provider SearchDatasetProvider#prometheus_provider}
  */
  readonly prometheusProvider?: SearchDatasetProviderPrometheusProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#s3_provider SearchDatasetProvider#s3_provider}
  */
  readonly s3Provider?: SearchDatasetProviderS3Provider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#snowflake_provider SearchDatasetProvider#snowflake_provider}
  */
  readonly snowflakeProvider?: SearchDatasetProviderSnowflakeProvider;
}
export interface SearchDatasetProviderApiAwsProviderAccountConfigs {
  /**
  * ARN of the role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#assume_role_arn SearchDatasetProvider#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * External ID for role assumption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#assume_role_external_id SearchDatasetProvider#assume_role_external_id}
  */
  readonly assumeRoleExternalId?: string;
  /**
  * AWS access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#aws_api_key SearchDatasetProvider#aws_api_key}
  */
  readonly awsApiKey?: string;
  /**
  * AWS secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#aws_secret_key SearchDatasetProvider#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
}

export function searchDatasetProviderApiAwsProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiAwsProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role_arn: cdktf.stringToTerraform(struct!.assumeRoleArn),
    assume_role_external_id: cdktf.stringToTerraform(struct!.assumeRoleExternalId),
    aws_api_key: cdktf.stringToTerraform(struct!.awsApiKey),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function searchDatasetProviderApiAwsProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiAwsProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_api_key: {
      value: cdktf.stringToHclTerraform(struct!.awsApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiAwsProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiAwsProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleArn = this._assumeRoleArn;
    }
    if (this._assumeRoleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleExternalId = this._assumeRoleExternalId;
    }
    if (this._awsApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsApiKey = this._awsApiKey;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiAwsProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRoleArn = undefined;
      this._assumeRoleExternalId = undefined;
      this._awsApiKey = undefined;
      this._awsSecretKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRoleArn = value.assumeRoleArn;
      this._assumeRoleExternalId = value.assumeRoleExternalId;
      this._awsApiKey = value.awsApiKey;
      this._awsSecretKey = value.awsSecretKey;
      this._name = value.name;
    }
  }

  // assume_role_arn - computed: true, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // assume_role_external_id - computed: true, optional: true, required: false
  private _assumeRoleExternalId?: string; 
  public get assumeRoleExternalId() {
    return this.getStringAttribute('assume_role_external_id');
  }
  public set assumeRoleExternalId(value: string) {
    this._assumeRoleExternalId = value;
  }
  public resetAssumeRoleExternalId() {
    this._assumeRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleExternalIdInput() {
    return this._assumeRoleExternalId;
  }

  // aws_api_key - computed: true, optional: true, required: false
  private _awsApiKey?: string; 
  public get awsApiKey() {
    return this.getStringAttribute('aws_api_key');
  }
  public set awsApiKey(value: string) {
    this._awsApiKey = value;
  }
  public resetAwsApiKey() {
    this._awsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiKeyInput() {
    return this._awsApiKey;
  }

  // aws_secret_key - computed: true, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
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
}

export class SearchDatasetProviderApiAwsProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiAwsProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiAwsProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiAwsProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiAwsProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiAwsProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiAwsProviderToTerraform(struct?: SearchDatasetProviderApiAwsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiAwsProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiAwsProviderToHclTerraform(struct?: SearchDatasetProviderApiAwsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiAwsProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiAwsProviderAccountConfigsList",
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

export class SearchDatasetProviderApiAwsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiAwsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiAwsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiAwsProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiAwsProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiAzureDataExplorerProvider {
  /**
  * The Client ID (also known as Secret ID) of the authorized application. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_id SearchDatasetProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret of the authorized application. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_secret SearchDatasetProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Tenant ID of the authorized application. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#tenant_id SearchDatasetProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiAzureDataExplorerProviderToTerraform(struct?: SearchDatasetProviderApiAzureDataExplorerProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiAzureDataExplorerProviderToHclTerraform(struct?: SearchDatasetProviderApiAzureDataExplorerProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
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

export class SearchDatasetProviderApiAzureDataExplorerProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiAzureDataExplorerProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiAzureDataExplorerProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._description = undefined;
      this._id = undefined;
      this._tenantId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._description = value.description;
      this._id = value.id;
      this._tenantId = value.tenantId;
      this._type = value.type;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
export interface SearchDatasetProviderApiAzureProviderAccountConfigs {
  /**
  * The clientId of the service principal. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_id SearchDatasetProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret of the service principal. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_secret SearchDatasetProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
  /**
  * The ID of your Azure tenant. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#tenant_id SearchDatasetProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function searchDatasetProviderApiAzureProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiAzureProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    name: cdktf.stringToTerraform(struct!.name),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function searchDatasetProviderApiAzureProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiAzureProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiAzureProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiAzureProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiAzureProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._name = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._name = value.name;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class SearchDatasetProviderApiAzureProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiAzureProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiAzureProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiAzureProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiAzureProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiAzureProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiAzureProviderToTerraform(struct?: SearchDatasetProviderApiAzureProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiAzureProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiAzureProviderToHclTerraform(struct?: SearchDatasetProviderApiAzureProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiAzureProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiAzureProviderAccountConfigsList",
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

export class SearchDatasetProviderApiAzureProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiAzureProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiAzureProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiAzureProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiAzureProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiElasticSearchProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Elasticsearch API endpoint URL. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Elasticsearch password for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#password SearchDatasetProvider#password}
  */
  readonly password?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
  /**
  * Elasticsearch username for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#username SearchDatasetProvider#username}
  */
  readonly username?: string;
}

export function searchDatasetProviderApiElasticSearchProviderToTerraform(struct?: SearchDatasetProviderApiElasticSearchProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function searchDatasetProviderApiElasticSearchProviderToHclTerraform(struct?: SearchDatasetProviderApiElasticSearchProvider | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiElasticSearchProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiElasticSearchProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiElasticSearchProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._password = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._password = value.password;
      this._type = value.type;
      this._username = value.username;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
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
export interface SearchDatasetProviderApiGcpProviderAccountConfigs {
  /**
  * Account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
  /**
  * JSON blob downloaded from the Google Cloud Console, containing creds for a service account. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#service_account_credentials SearchDatasetProvider#service_account_credentials}
  */
  readonly serviceAccountCredentials?: string;
}

export function searchDatasetProviderApiGcpProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiGcpProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_account_credentials: cdktf.stringToTerraform(struct!.serviceAccountCredentials),
  }
}


export function searchDatasetProviderApiGcpProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiGcpProviderAccountConfigs | cdktf.IResolvable): any {
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
    service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiGcpProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiGcpProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiGcpProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceAccountCredentials = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceAccountCredentials = value.serviceAccountCredentials;
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

  // service_account_credentials - computed: true, optional: true, required: false
  private _serviceAccountCredentials?: string; 
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
  public set serviceAccountCredentials(value: string) {
    this._serviceAccountCredentials = value;
  }
  public resetServiceAccountCredentials() {
    this._serviceAccountCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials;
  }
}

export class SearchDatasetProviderApiGcpProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiGcpProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiGcpProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiGcpProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiGcpProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiGcpProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiGcpProviderToTerraform(struct?: SearchDatasetProviderApiGcpProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiGcpProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiGcpProviderToHclTerraform(struct?: SearchDatasetProviderApiGcpProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiGcpProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiGcpProviderAccountConfigsList",
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

export class SearchDatasetProviderApiGcpProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiGcpProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiGcpProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiGcpProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiGcpProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
  /**
  * Contents of Google Cloud service account credentials (JSON keys) file. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#service_account_credentials SearchDatasetProvider#service_account_credentials}
  */
  readonly serviceAccountCredentials?: string;
  /**
  * Email matching Google service account of the authorized principal whose role this integration is assuming. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#subject SearchDatasetProvider#subject}
  */
  readonly subject?: string;
}

export function searchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_account_credentials: cdktf.stringToTerraform(struct!.serviceAccountCredentials),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function searchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs | cdktf.IResolvable): any {
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
    service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceAccountCredentials = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceAccountCredentials = value.serviceAccountCredentials;
      this._subject = value.subject;
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

  // service_account_credentials - computed: true, optional: true, required: false
  private _serviceAccountCredentials?: string; 
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
  public set serviceAccountCredentials(value: string) {
    this._serviceAccountCredentials = value;
  }
  public resetServiceAccountCredentials() {
    this._serviceAccountCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiGoogleWorkspaceProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiGoogleWorkspaceProviderToTerraform(struct?: SearchDatasetProviderApiGoogleWorkspaceProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiGoogleWorkspaceProviderToHclTerraform(struct?: SearchDatasetProviderApiGoogleWorkspaceProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsList",
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

export class SearchDatasetProviderApiGoogleWorkspaceProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiGoogleWorkspaceProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiGoogleWorkspaceProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiGoogleWorkspaceProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiMsGraphProviderAccountConfigs {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_id SearchDatasetProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_secret SearchDatasetProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Azure account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#tenant_id SearchDatasetProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function searchDatasetProviderApiMsGraphProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiMsGraphProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    name: cdktf.stringToTerraform(struct!.name),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function searchDatasetProviderApiMsGraphProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiMsGraphProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiMsGraphProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiMsGraphProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiMsGraphProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._name = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._name = value.name;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class SearchDatasetProviderApiMsGraphProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiMsGraphProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiMsGraphProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiMsGraphProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiMsGraphProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiMsGraphProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiMsGraphProviderToTerraform(struct?: SearchDatasetProviderApiMsGraphProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiMsGraphProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiMsGraphProviderToHclTerraform(struct?: SearchDatasetProviderApiMsGraphProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiMsGraphProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiMsGraphProviderAccountConfigsList",
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

export class SearchDatasetProviderApiMsGraphProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiMsGraphProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiMsGraphProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiMsGraphProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiMsGraphProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiOktaProviderAccountConfigs {
  /**
  * API token for authorizing requests. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#api_token SearchDatasetProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * URL for the subdomain of your organization. Example: subdomain.okta.com. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#domain_endpoint SearchDatasetProvider#domain_endpoint}
  */
  readonly domainEndpoint?: string;
  /**
  * Okta account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
}

export function searchDatasetProviderApiOktaProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiOktaProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    domain_endpoint: cdktf.stringToTerraform(struct!.domainEndpoint),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function searchDatasetProviderApiOktaProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiOktaProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.domainEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiOktaProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiOktaProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._domainEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEndpoint = this._domainEndpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiOktaProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._domainEndpoint = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._domainEndpoint = value.domainEndpoint;
      this._name = value.name;
    }
  }

  // api_token - computed: true, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // domain_endpoint - computed: true, optional: true, required: false
  private _domainEndpoint?: string; 
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }
  public set domainEndpoint(value: string) {
    this._domainEndpoint = value;
  }
  public resetDomainEndpoint() {
    this._domainEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointInput() {
    return this._domainEndpoint;
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
}

export class SearchDatasetProviderApiOktaProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiOktaProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiOktaProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiOktaProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiOktaProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiOktaProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiOktaProviderToTerraform(struct?: SearchDatasetProviderApiOktaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiOktaProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiOktaProviderToHclTerraform(struct?: SearchDatasetProviderApiOktaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiOktaProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiOktaProviderAccountConfigsList",
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

export class SearchDatasetProviderApiOktaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiOktaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiOktaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiOktaProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiOktaProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiOpenSearchProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * OpenSearch API endpoint URL. Example: https://opensearch.mycompany.com. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OpenSearch password for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#password SearchDatasetProvider#password}
  */
  readonly password?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
  /**
  * OpenSearch username for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#username SearchDatasetProvider#username}
  */
  readonly username?: string;
}

export function searchDatasetProviderApiOpenSearchProviderToTerraform(struct?: SearchDatasetProviderApiOpenSearchProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function searchDatasetProviderApiOpenSearchProviderToHclTerraform(struct?: SearchDatasetProviderApiOpenSearchProvider | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiOpenSearchProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiOpenSearchProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiOpenSearchProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._password = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._password = value.password;
      this._type = value.type;
      this._username = value.username;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
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
export interface SearchDatasetProviderApiTailscaleProviderAccountConfigs {
  /**
  * Client ID string. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_id SearchDatasetProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret string. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_secret SearchDatasetProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Tailscale account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
}

export function searchDatasetProviderApiTailscaleProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiTailscaleProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function searchDatasetProviderApiTailscaleProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiTailscaleProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiTailscaleProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiTailscaleProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiTailscaleProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._name = value.name;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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
}

export class SearchDatasetProviderApiTailscaleProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiTailscaleProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiTailscaleProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiTailscaleProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiTailscaleProvider {
  /**
  * A list of account configuration. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiTailscaleProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiTailscaleProviderToTerraform(struct?: SearchDatasetProviderApiTailscaleProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiTailscaleProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiTailscaleProviderToHclTerraform(struct?: SearchDatasetProviderApiTailscaleProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiTailscaleProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiTailscaleProviderAccountConfigsList",
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

export class SearchDatasetProviderApiTailscaleProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiTailscaleProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiTailscaleProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiTailscaleProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiTailscaleProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApiZoomProviderAccountConfigs {
  /**
  * Zoom account ID. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_id SearchDatasetProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Client ID string. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_id SearchDatasetProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret string. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_secret SearchDatasetProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Zoom account name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
}

export function searchDatasetProviderApiZoomProviderAccountConfigsToTerraform(struct?: SearchDatasetProviderApiZoomProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function searchDatasetProviderApiZoomProviderAccountConfigsToHclTerraform(struct?: SearchDatasetProviderApiZoomProviderAccountConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApiZoomProviderAccountConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApiZoomProviderAccountConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiZoomProviderAccountConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._name = value.name;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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
}

export class SearchDatasetProviderApiZoomProviderAccountConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApiZoomProviderAccountConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApiZoomProviderAccountConfigsOutputReference {
    return new SearchDatasetProviderApiZoomProviderAccountConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApiZoomProvider {
  /**
  * A list of account configurations. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_configs SearchDatasetProvider#account_configs}
  */
  readonly accountConfigs?: SearchDatasetProviderApiZoomProviderAccountConfigs[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApiZoomProviderToTerraform(struct?: SearchDatasetProviderApiZoomProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_configs: cdktf.listMapper(searchDatasetProviderApiZoomProviderAccountConfigsToTerraform, false)(struct!.accountConfigs),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApiZoomProviderToHclTerraform(struct?: SearchDatasetProviderApiZoomProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderApiZoomProviderAccountConfigsToHclTerraform, false)(struct!.accountConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApiZoomProviderAccountConfigsList",
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

export class SearchDatasetProviderApiZoomProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApiZoomProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountConfigs = this._accountConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApiZoomProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountConfigs.internalValue = value.accountConfigs;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // account_configs - computed: true, optional: true, required: false
  private _accountConfigs = new SearchDatasetProviderApiZoomProviderAccountConfigsList(this, "account_configs", false);
  public get accountConfigs() {
    return this._accountConfigs;
  }
  public putAccountConfigs(value: SearchDatasetProviderApiZoomProviderAccountConfigs[] | cdktf.IResolvable) {
    this._accountConfigs.internalValue = value;
  }
  public resetAccountConfigs() {
    this._accountConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountConfigsInput() {
    return this._accountConfigs.internalValue;
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
export interface SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders {
  /**
  * Header name. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
  /**
  * Header value. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#value SearchDatasetProvider#value}
  */
  readonly value?: string;
}

export function searchDatasetProviderApihttpProviderAvailableEndpointsHeadersToTerraform(struct?: SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function searchDatasetProviderApihttpProviderAvailableEndpointsHeadersToHclTerraform(struct?: SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApihttpProviderAvailableEndpointsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: true, optional: true, required: false
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
}

export class SearchDatasetProviderApihttpProviderAvailableEndpointsHeadersList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApihttpProviderAvailableEndpointsHeadersOutputReference {
    return new SearchDatasetProviderApihttpProviderAvailableEndpointsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApihttpProviderAvailableEndpoints {
  /**
  * Within the response JSON, name of the field or array element to pull results from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#data_field SearchDatasetProvider#data_field}
  */
  readonly dataField?: string;
  /**
  * Optional headers for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#headers SearchDatasetProvider#headers}
  */
  readonly headers?: SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders[] | cdktf.IResolvable;
  /**
  * Method for the endpoint. Default: "GET"; must be one of ["GET", "POST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#method SearchDatasetProvider#method}
  */
  readonly method?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#name SearchDatasetProvider#name}
  */
  readonly name?: string;
  /**
  * The URL for this endpoint. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#url SearchDatasetProvider#url}
  */
  readonly url?: string;
}

export function searchDatasetProviderApihttpProviderAvailableEndpointsToTerraform(struct?: SearchDatasetProviderApihttpProviderAvailableEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_field: cdktf.stringToTerraform(struct!.dataField),
    headers: cdktf.listMapper(searchDatasetProviderApihttpProviderAvailableEndpointsHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function searchDatasetProviderApihttpProviderAvailableEndpointsToHclTerraform(struct?: SearchDatasetProviderApihttpProviderAvailableEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_field: {
      value: cdktf.stringToHclTerraform(struct!.dataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(searchDatasetProviderApihttpProviderAvailableEndpointsHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApihttpProviderAvailableEndpointsHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderApihttpProviderAvailableEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderApihttpProviderAvailableEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataField = this._dataField;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApihttpProviderAvailableEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataField = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataField = value.dataField;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._name = value.name;
      this._url = value.url;
    }
  }

  // data_field - computed: true, optional: true, required: false
  private _dataField?: string; 
  public get dataField() {
    return this.getStringAttribute('data_field');
  }
  public set dataField(value: string) {
    this._dataField = value;
  }
  public resetDataField() {
    this._dataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFieldInput() {
    return this._dataField;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new SearchDatasetProviderApihttpProviderAvailableEndpointsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SearchDatasetProviderApihttpProviderAvailableEndpointsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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
}

export class SearchDatasetProviderApihttpProviderAvailableEndpointsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderApihttpProviderAvailableEndpoints[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderApihttpProviderAvailableEndpointsOutputReference {
    return new SearchDatasetProviderApihttpProviderAvailableEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderApihttpProvider {
  /**
  * The authentication method for API calls. Default: "none"; must be one of ["none", "basic", "login", "oauth"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#authentication_method SearchDatasetProvider#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * A list of the available endpoints for this provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#available_endpoints SearchDatasetProvider#available_endpoints}
  */
  readonly availableEndpoints?: SearchDatasetProviderApihttpProviderAvailableEndpoints[] | cdktf.IResolvable;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderApihttpProviderToTerraform(struct?: SearchDatasetProviderApihttpProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    available_endpoints: cdktf.listMapper(searchDatasetProviderApihttpProviderAvailableEndpointsToTerraform, false)(struct!.availableEndpoints),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderApihttpProviderToHclTerraform(struct?: SearchDatasetProviderApihttpProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    available_endpoints: {
      value: cdktf.listMapperHcl(searchDatasetProviderApihttpProviderAvailableEndpointsToHclTerraform, false)(struct!.availableEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderApihttpProviderAvailableEndpointsList",
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

export class SearchDatasetProviderApihttpProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderApihttpProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._availableEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableEndpoints = this._availableEndpoints?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderApihttpProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMethod = undefined;
      this._availableEndpoints.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMethod = value.authenticationMethod;
      this._availableEndpoints.internalValue = value.availableEndpoints;
      this._description = value.description;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // available_endpoints - computed: true, optional: true, required: false
  private _availableEndpoints = new SearchDatasetProviderApihttpProviderAvailableEndpointsList(this, "available_endpoints", false);
  public get availableEndpoints() {
    return this._availableEndpoints;
  }
  public putAvailableEndpoints(value: SearchDatasetProviderApihttpProviderAvailableEndpoints[] | cdktf.IResolvable) {
    this._availableEndpoints.internalValue = value;
  }
  public resetAvailableEndpoints() {
    this._availableEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableEndpointsInput() {
    return this._availableEndpoints.internalValue;
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
export interface SearchDatasetProviderAwsSecurityLakeProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderAwsSecurityLakeProviderToTerraform(struct?: SearchDatasetProviderAwsSecurityLakeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderAwsSecurityLakeProviderToHclTerraform(struct?: SearchDatasetProviderAwsSecurityLakeProvider | cdktf.IResolvable): any {
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

export class SearchDatasetProviderAwsSecurityLakeProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderAwsSecurityLakeProvider | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderAwsSecurityLakeProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
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
export interface SearchDatasetProviderAzureBlobProviderSasConfigs {
  /**
  * Container-specific Blob SAS URL. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#blob_sas_url SearchDatasetProvider#blob_sas_url}
  */
  readonly blobSasUrl?: string;
  /**
  * Name of the Azure Blob Storage container. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#container_name SearchDatasetProvider#container_name}
  */
  readonly containerName?: string;
}

export function searchDatasetProviderAzureBlobProviderSasConfigsToTerraform(struct?: SearchDatasetProviderAzureBlobProviderSasConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_sas_url: cdktf.stringToTerraform(struct!.blobSasUrl),
    container_name: cdktf.stringToTerraform(struct!.containerName),
  }
}


export function searchDatasetProviderAzureBlobProviderSasConfigsToHclTerraform(struct?: SearchDatasetProviderAzureBlobProviderSasConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_sas_url: {
      value: cdktf.stringToHclTerraform(struct!.blobSasUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderAzureBlobProviderSasConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SearchDatasetProviderAzureBlobProviderSasConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobSasUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobSasUrl = this._blobSasUrl;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderAzureBlobProviderSasConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blobSasUrl = undefined;
      this._containerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blobSasUrl = value.blobSasUrl;
      this._containerName = value.containerName;
    }
  }

  // blob_sas_url - computed: true, optional: true, required: false
  private _blobSasUrl?: string; 
  public get blobSasUrl() {
    return this.getStringAttribute('blob_sas_url');
  }
  public set blobSasUrl(value: string) {
    this._blobSasUrl = value;
  }
  public resetBlobSasUrl() {
    this._blobSasUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobSasUrlInput() {
    return this._blobSasUrl;
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
}

export class SearchDatasetProviderAzureBlobProviderSasConfigsList extends cdktf.ComplexList {
  public internalValue? : SearchDatasetProviderAzureBlobProviderSasConfigs[] | cdktf.IResolvable

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
  public get(index: number): SearchDatasetProviderAzureBlobProviderSasConfigsOutputReference {
    return new SearchDatasetProviderAzureBlobProviderSasConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SearchDatasetProviderAzureBlobProvider {
  /**
  * Azure Storage authentication method. Default: "connection_string"; must be one of ["connection_string", "blob_sas_url", "client_secret"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#authentication_method SearchDatasetProvider#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Azure AD application client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_id SearchDatasetProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure AD application client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#client_secret SearchDatasetProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Storage account connection string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#connection_string SearchDatasetProvider#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Primary region in which the storage account is located. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#location SearchDatasetProvider#location}
  */
  readonly location?: string;
  /**
  * A list of container-specific SAS configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#sas_configs SearchDatasetProvider#sas_configs}
  */
  readonly sasConfigs?: SearchDatasetProviderAzureBlobProviderSasConfigs[] | cdktf.IResolvable;
  /**
  * The name of your Azure storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#storage_account_name SearchDatasetProvider#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Azure AD tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#tenant_id SearchDatasetProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderAzureBlobProviderToTerraform(struct?: SearchDatasetProviderAzureBlobProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    location: cdktf.stringToTerraform(struct!.location),
    sas_configs: cdktf.listMapper(searchDatasetProviderAzureBlobProviderSasConfigsToTerraform, false)(struct!.sasConfigs),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderAzureBlobProviderToHclTerraform(struct?: SearchDatasetProviderAzureBlobProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
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
    sas_configs: {
      value: cdktf.listMapperHcl(searchDatasetProviderAzureBlobProviderSasConfigsToHclTerraform, false)(struct!.sasConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "SearchDatasetProviderAzureBlobProviderSasConfigsList",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
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

export class SearchDatasetProviderAzureBlobProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderAzureBlobProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
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
    if (this._sasConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasConfigs = this._sasConfigs?.internalValue;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderAzureBlobProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMethod = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectionString = undefined;
      this._description = undefined;
      this._id = undefined;
      this._location = undefined;
      this._sasConfigs.internalValue = undefined;
      this._storageAccountName = undefined;
      this._tenantId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMethod = value.authenticationMethod;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectionString = value.connectionString;
      this._description = value.description;
      this._id = value.id;
      this._location = value.location;
      this._sasConfigs.internalValue = value.sasConfigs;
      this._storageAccountName = value.storageAccountName;
      this._tenantId = value.tenantId;
      this._type = value.type;
    }
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
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

  // sas_configs - computed: true, optional: true, required: false
  private _sasConfigs = new SearchDatasetProviderAzureBlobProviderSasConfigsList(this, "sas_configs", false);
  public get sasConfigs() {
    return this._sasConfigs;
  }
  public putSasConfigs(value: SearchDatasetProviderAzureBlobProviderSasConfigs[] | cdktf.IResolvable) {
    this._sasConfigs.internalValue = value;
  }
  public resetSasConfigs() {
    this._sasConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasConfigsInput() {
    return this._sasConfigs.internalValue;
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
export interface SearchDatasetProviderClickHouseProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * URL to ClickHouse server with HTTP interface enabled. Ideally should be HTTPS over port 8443. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ClickHouse user password for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#password SearchDatasetProvider#password}
  */
  readonly password?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
  /**
  * The ClickHouse username for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#username SearchDatasetProvider#username}
  */
  readonly username?: string;
}

export function searchDatasetProviderClickHouseProviderToTerraform(struct?: SearchDatasetProviderClickHouseProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function searchDatasetProviderClickHouseProviderToHclTerraform(struct?: SearchDatasetProviderClickHouseProvider | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderClickHouseProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderClickHouseProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderClickHouseProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._password = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._password = value.password;
      this._type = value.type;
      this._username = value.username;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
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
export interface SearchDatasetProviderCriblLeaderProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderCriblLeaderProviderToTerraform(struct?: SearchDatasetProviderCriblLeaderProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderCriblLeaderProviderToHclTerraform(struct?: SearchDatasetProviderCriblLeaderProvider | cdktf.IResolvable): any {
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

export class SearchDatasetProviderCriblLeaderProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderCriblLeaderProvider | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderCriblLeaderProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
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
export interface SearchDatasetProviderEdgeProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderEdgeProviderToTerraform(struct?: SearchDatasetProviderEdgeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderEdgeProviderToHclTerraform(struct?: SearchDatasetProviderEdgeProvider | cdktf.IResolvable): any {
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

export class SearchDatasetProviderEdgeProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderEdgeProvider | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderEdgeProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
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
export interface SearchDatasetProviderGcsProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Google Cloud Storage service endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Contents of Google Cloud service account credentials (JSON keys) file. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#service_account_credentials SearchDatasetProvider#service_account_credentials}
  */
  readonly serviceAccountCredentials?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderGcsProviderToTerraform(struct?: SearchDatasetProviderGcsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    service_account_credentials: cdktf.stringToTerraform(struct!.serviceAccountCredentials),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderGcsProviderToHclTerraform(struct?: SearchDatasetProviderGcsProvider | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentials),
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

export class SearchDatasetProviderGcsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderGcsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._serviceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderGcsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._serviceAccountCredentials = undefined;
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
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._serviceAccountCredentials = value.serviceAccountCredentials;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // service_account_credentials - computed: true, optional: true, required: false
  private _serviceAccountCredentials?: string; 
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
  public set serviceAccountCredentials(value: string) {
    this._serviceAccountCredentials = value;
  }
  public resetServiceAccountCredentials() {
    this._serviceAccountCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials;
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
export interface SearchDatasetProviderMetaProvider {
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderMetaProviderToTerraform(struct?: SearchDatasetProviderMetaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderMetaProviderToHclTerraform(struct?: SearchDatasetProviderMetaProvider | cdktf.IResolvable): any {
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

export class SearchDatasetProviderMetaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderMetaProvider | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderMetaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
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
export interface SearchDatasetProviderPrometheusProvider {
  /**
  * Default: "none"; must be one of ["none", "basic", "token"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#auth_type SearchDatasetProvider#auth_type}
  */
  readonly authType?: string;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Prometheus API endpoint URL. Example: https://prometheus.goats.biz. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of concurrent API requests. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#max_concurrency SearchDatasetProvider#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Basic auth password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#password SearchDatasetProvider#password}
  */
  readonly password?: string;
  /**
  * Bearer token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#token SearchDatasetProvider#token}
  */
  readonly token?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
  /**
  * Basic auth username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#username SearchDatasetProvider#username}
  */
  readonly username?: string;
}

export function searchDatasetProviderPrometheusProviderToTerraform(struct?: SearchDatasetProviderPrometheusProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function searchDatasetProviderPrometheusProviderToHclTerraform(struct?: SearchDatasetProviderPrometheusProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderPrometheusProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderPrometheusProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderPrometheusProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._maxConcurrency = undefined;
      this._password = undefined;
      this._token = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._maxConcurrency = value.maxConcurrency;
      this._password = value.password;
      this._token = value.token;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
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
export interface SearchDatasetProviderS3Provider {
  /**
  * ARN of the role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#assume_role_arn SearchDatasetProvider#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * External ID for role assumption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#assume_role_external_id SearchDatasetProvider#assume_role_external_id}
  */
  readonly assumeRoleExternalId?: string;
  /**
  * AWS access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#aws_api_key SearchDatasetProvider#aws_api_key}
  */
  readonly awsApiKey?: string;
  /**
  * AWS authentication method. must be one of ["auto", "manual"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#aws_authentication_method SearchDatasetProvider#aws_authentication_method}
  */
  readonly awsAuthenticationMethod?: string;
  /**
  * AWS secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#aws_secret_key SearchDatasetProvider#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * S3 bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#bucket SearchDatasetProvider#bucket}
  */
  readonly bucket?: string;
  /**
  * Suggested bucket path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#bucket_path_suggestion SearchDatasetProvider#bucket_path_suggestion}
  */
  readonly bucketPathSuggestion?: string;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Whether to enable ABAC source-ip tagging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#enable_abac_tagging SearchDatasetProvider#enable_abac_tagging}
  */
  readonly enableAbacTagging?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable role assumption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#enable_assume_role SearchDatasetProvider#enable_assume_role}
  */
  readonly enableAssumeRole?: boolean | cdktf.IResolvable;
  /**
  * S3 endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#region SearchDatasetProvider#region}
  */
  readonly region?: string;
  /**
  * Whether to reject unauthorized requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#reject_unauthorized SearchDatasetProvider#reject_unauthorized}
  */
  readonly rejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * Reuse existing S3 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#reuse_connections SearchDatasetProvider#reuse_connections}
  */
  readonly reuseConnections?: boolean | cdktf.IResolvable;
  /**
  * AWS session token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#session_token SearchDatasetProvider#session_token}
  */
  readonly sessionToken?: string;
  /**
  * AWS signature version. Not Null; must be one of ["v2", "v4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#signature_version SearchDatasetProvider#signature_version}
  */
  readonly signatureVersion?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
}

export function searchDatasetProviderS3ProviderToTerraform(struct?: SearchDatasetProviderS3Provider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role_arn: cdktf.stringToTerraform(struct!.assumeRoleArn),
    assume_role_external_id: cdktf.stringToTerraform(struct!.assumeRoleExternalId),
    aws_api_key: cdktf.stringToTerraform(struct!.awsApiKey),
    aws_authentication_method: cdktf.stringToTerraform(struct!.awsAuthenticationMethod),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_path_suggestion: cdktf.stringToTerraform(struct!.bucketPathSuggestion),
    description: cdktf.stringToTerraform(struct!.description),
    enable_abac_tagging: cdktf.booleanToTerraform(struct!.enableAbacTagging),
    enable_assume_role: cdktf.booleanToTerraform(struct!.enableAssumeRole),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
    reject_unauthorized: cdktf.booleanToTerraform(struct!.rejectUnauthorized),
    reuse_connections: cdktf.booleanToTerraform(struct!.reuseConnections),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
    signature_version: cdktf.stringToTerraform(struct!.signatureVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function searchDatasetProviderS3ProviderToHclTerraform(struct?: SearchDatasetProviderS3Provider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_api_key: {
      value: cdktf.stringToHclTerraform(struct!.awsApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.awsAuthenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
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
    bucket_path_suggestion: {
      value: cdktf.stringToHclTerraform(struct!.bucketPathSuggestion),
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
    enable_abac_tagging: {
      value: cdktf.booleanToHclTerraform(struct!.enableAbacTagging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_assume_role: {
      value: cdktf.booleanToHclTerraform(struct!.enableAssumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reuse_connections: {
      value: cdktf.booleanToHclTerraform(struct!.reuseConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_version: {
      value: cdktf.stringToHclTerraform(struct!.signatureVersion),
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

export class SearchDatasetProviderS3ProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderS3Provider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleArn = this._assumeRoleArn;
    }
    if (this._assumeRoleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleExternalId = this._assumeRoleExternalId;
    }
    if (this._awsApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsApiKey = this._awsApiKey;
    }
    if (this._awsAuthenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthenticationMethod = this._awsAuthenticationMethod;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketPathSuggestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPathSuggestion = this._bucketPathSuggestion;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableAbacTagging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAbacTagging = this._enableAbacTagging;
    }
    if (this._enableAssumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAssumeRole = this._enableAssumeRole;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._rejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnauthorized = this._rejectUnauthorized;
    }
    if (this._reuseConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseConnections = this._reuseConnections;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._signatureVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureVersion = this._signatureVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderS3Provider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRoleArn = undefined;
      this._assumeRoleExternalId = undefined;
      this._awsApiKey = undefined;
      this._awsAuthenticationMethod = undefined;
      this._awsSecretKey = undefined;
      this._bucket = undefined;
      this._bucketPathSuggestion = undefined;
      this._description = undefined;
      this._enableAbacTagging = undefined;
      this._enableAssumeRole = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._region = undefined;
      this._rejectUnauthorized = undefined;
      this._reuseConnections = undefined;
      this._sessionToken = undefined;
      this._signatureVersion = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRoleArn = value.assumeRoleArn;
      this._assumeRoleExternalId = value.assumeRoleExternalId;
      this._awsApiKey = value.awsApiKey;
      this._awsAuthenticationMethod = value.awsAuthenticationMethod;
      this._awsSecretKey = value.awsSecretKey;
      this._bucket = value.bucket;
      this._bucketPathSuggestion = value.bucketPathSuggestion;
      this._description = value.description;
      this._enableAbacTagging = value.enableAbacTagging;
      this._enableAssumeRole = value.enableAssumeRole;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._region = value.region;
      this._rejectUnauthorized = value.rejectUnauthorized;
      this._reuseConnections = value.reuseConnections;
      this._sessionToken = value.sessionToken;
      this._signatureVersion = value.signatureVersion;
      this._type = value.type;
    }
  }

  // assume_role_arn - computed: true, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // assume_role_external_id - computed: true, optional: true, required: false
  private _assumeRoleExternalId?: string; 
  public get assumeRoleExternalId() {
    return this.getStringAttribute('assume_role_external_id');
  }
  public set assumeRoleExternalId(value: string) {
    this._assumeRoleExternalId = value;
  }
  public resetAssumeRoleExternalId() {
    this._assumeRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleExternalIdInput() {
    return this._assumeRoleExternalId;
  }

  // aws_api_key - computed: true, optional: true, required: false
  private _awsApiKey?: string; 
  public get awsApiKey() {
    return this.getStringAttribute('aws_api_key');
  }
  public set awsApiKey(value: string) {
    this._awsApiKey = value;
  }
  public resetAwsApiKey() {
    this._awsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiKeyInput() {
    return this._awsApiKey;
  }

  // aws_authentication_method - computed: true, optional: true, required: false
  private _awsAuthenticationMethod?: string; 
  public get awsAuthenticationMethod() {
    return this.getStringAttribute('aws_authentication_method');
  }
  public set awsAuthenticationMethod(value: string) {
    this._awsAuthenticationMethod = value;
  }
  public resetAwsAuthenticationMethod() {
    this._awsAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthenticationMethodInput() {
    return this._awsAuthenticationMethod;
  }

  // aws_secret_key - computed: true, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
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

  // bucket_path_suggestion - computed: true, optional: true, required: false
  private _bucketPathSuggestion?: string; 
  public get bucketPathSuggestion() {
    return this.getStringAttribute('bucket_path_suggestion');
  }
  public set bucketPathSuggestion(value: string) {
    this._bucketPathSuggestion = value;
  }
  public resetBucketPathSuggestion() {
    this._bucketPathSuggestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathSuggestionInput() {
    return this._bucketPathSuggestion;
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

  // enable_abac_tagging - computed: true, optional: true, required: false
  private _enableAbacTagging?: boolean | cdktf.IResolvable; 
  public get enableAbacTagging() {
    return this.getBooleanAttribute('enable_abac_tagging');
  }
  public set enableAbacTagging(value: boolean | cdktf.IResolvable) {
    this._enableAbacTagging = value;
  }
  public resetEnableAbacTagging() {
    this._enableAbacTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAbacTaggingInput() {
    return this._enableAbacTagging;
  }

  // enable_assume_role - computed: true, optional: true, required: false
  private _enableAssumeRole?: boolean | cdktf.IResolvable; 
  public get enableAssumeRole() {
    return this.getBooleanAttribute('enable_assume_role');
  }
  public set enableAssumeRole(value: boolean | cdktf.IResolvable) {
    this._enableAssumeRole = value;
  }
  public resetEnableAssumeRole() {
    this._enableAssumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAssumeRoleInput() {
    return this._enableAssumeRole;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // reject_unauthorized - computed: true, optional: true, required: false
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  public resetRejectUnauthorized() {
    this._rejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }

  // reuse_connections - computed: true, optional: true, required: false
  private _reuseConnections?: boolean | cdktf.IResolvable; 
  public get reuseConnections() {
    return this.getBooleanAttribute('reuse_connections');
  }
  public set reuseConnections(value: boolean | cdktf.IResolvable) {
    this._reuseConnections = value;
  }
  public resetReuseConnections() {
    this._reuseConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseConnectionsInput() {
    return this._reuseConnections;
  }

  // session_token - computed: true, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // signature_version - computed: true, optional: true, required: false
  private _signatureVersion?: string; 
  public get signatureVersion() {
    return this.getStringAttribute('signature_version');
  }
  public set signatureVersion(value: string) {
    this._signatureVersion = value;
  }
  public resetSignatureVersion() {
    this._signatureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureVersionInput() {
    return this._signatureVersion;
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
export interface SearchDatasetProviderSnowflakeProvider {
  /**
  * The Snowflake account identifier, in the format <orgname>-<account_name>. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#account_identifier SearchDatasetProvider#account_identifier}
  */
  readonly accountIdentifier?: string;
  /**
  * Description of the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#description SearchDatasetProvider#description}
  */
  readonly description?: string;
  /**
  * Optional endpoint to override default REST API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#endpoint SearchDatasetProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique identifier for the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#id SearchDatasetProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total number of concurrent executors for processing Snowflake partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#max_concurrency SearchDatasetProvider#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * The key password for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#passphrase SearchDatasetProvider#passphrase}
  */
  readonly passphrase?: string;
  /**
  * The private key string out of the key file, from the pair of keys generated for authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#priv_key SearchDatasetProvider#priv_key}
  */
  readonly privKey?: string;
  /**
  * Type of the provider. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#type SearchDatasetProvider#type}
  */
  readonly type?: string;
  /**
  * The Snowflake user for key pair authentication. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#username SearchDatasetProvider#username}
  */
  readonly username?: string;
}

export function searchDatasetProviderSnowflakeProviderToTerraform(struct?: SearchDatasetProviderSnowflakeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_identifier: cdktf.stringToTerraform(struct!.accountIdentifier),
    description: cdktf.stringToTerraform(struct!.description),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    priv_key: cdktf.stringToTerraform(struct!.privKey),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function searchDatasetProviderSnowflakeProviderToHclTerraform(struct?: SearchDatasetProviderSnowflakeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_identifier: {
      value: cdktf.stringToHclTerraform(struct!.accountIdentifier),
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_key: {
      value: cdktf.stringToHclTerraform(struct!.privKey),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchDatasetProviderSnowflakeProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchDatasetProviderSnowflakeProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdentifier = this._accountIdentifier;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._privKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privKey = this._privKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchDatasetProviderSnowflakeProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdentifier = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._maxConcurrency = undefined;
      this._passphrase = undefined;
      this._privKey = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdentifier = value.accountIdentifier;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._maxConcurrency = value.maxConcurrency;
      this._passphrase = value.passphrase;
      this._privKey = value.privKey;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // account_identifier - computed: true, optional: true, required: false
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  public resetAccountIdentifier() {
    this._accountIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // priv_key - computed: true, optional: true, required: false
  private _privKey?: string; 
  public get privKey() {
    return this.getStringAttribute('priv_key');
  }
  public set privKey(value: string) {
    this._privKey = value;
  }
  public resetPrivKey() {
    this._privKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privKeyInput() {
    return this._privKey;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
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
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider criblio_search_dataset_provider}
*/
export class SearchDatasetProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_search_dataset_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchDatasetProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchDatasetProvider to import
  * @param importFromId The id of the existing SearchDatasetProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchDatasetProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_search_dataset_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/search_dataset_provider criblio_search_dataset_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchDatasetProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SearchDatasetProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'criblio_search_dataset_provider',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.48',
        providerVersionConstraint: '1.20.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAwsProvider.internalValue = config.apiAwsProvider;
    this._apiAzureDataExplorerProvider.internalValue = config.apiAzureDataExplorerProvider;
    this._apiAzureProvider.internalValue = config.apiAzureProvider;
    this._apiElasticSearchProvider.internalValue = config.apiElasticSearchProvider;
    this._apiGcpProvider.internalValue = config.apiGcpProvider;
    this._apiGoogleWorkspaceProvider.internalValue = config.apiGoogleWorkspaceProvider;
    this._apiMsGraphProvider.internalValue = config.apiMsGraphProvider;
    this._apiOktaProvider.internalValue = config.apiOktaProvider;
    this._apiOpenSearchProvider.internalValue = config.apiOpenSearchProvider;
    this._apiTailscaleProvider.internalValue = config.apiTailscaleProvider;
    this._apiZoomProvider.internalValue = config.apiZoomProvider;
    this._apihttpProvider.internalValue = config.apihttpProvider;
    this._awsSecurityLakeProvider.internalValue = config.awsSecurityLakeProvider;
    this._azureBlobProvider.internalValue = config.azureBlobProvider;
    this._clickHouseProvider.internalValue = config.clickHouseProvider;
    this._criblLeaderProvider.internalValue = config.criblLeaderProvider;
    this._edgeProvider.internalValue = config.edgeProvider;
    this._gcsProvider.internalValue = config.gcsProvider;
    this._metaProvider.internalValue = config.metaProvider;
    this._prometheusProvider.internalValue = config.prometheusProvider;
    this._s3Provider.internalValue = config.s3Provider;
    this._snowflakeProvider.internalValue = config.snowflakeProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_aws_provider - computed: false, optional: true, required: false
  private _apiAwsProvider = new SearchDatasetProviderApiAwsProviderOutputReference(this, "api_aws_provider");
  public get apiAwsProvider() {
    return this._apiAwsProvider;
  }
  public putApiAwsProvider(value: SearchDatasetProviderApiAwsProvider) {
    this._apiAwsProvider.internalValue = value;
  }
  public resetApiAwsProvider() {
    this._apiAwsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAwsProviderInput() {
    return this._apiAwsProvider.internalValue;
  }

  // api_azure_data_explorer_provider - computed: false, optional: true, required: false
  private _apiAzureDataExplorerProvider = new SearchDatasetProviderApiAzureDataExplorerProviderOutputReference(this, "api_azure_data_explorer_provider");
  public get apiAzureDataExplorerProvider() {
    return this._apiAzureDataExplorerProvider;
  }
  public putApiAzureDataExplorerProvider(value: SearchDatasetProviderApiAzureDataExplorerProvider) {
    this._apiAzureDataExplorerProvider.internalValue = value;
  }
  public resetApiAzureDataExplorerProvider() {
    this._apiAzureDataExplorerProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAzureDataExplorerProviderInput() {
    return this._apiAzureDataExplorerProvider.internalValue;
  }

  // api_azure_provider - computed: false, optional: true, required: false
  private _apiAzureProvider = new SearchDatasetProviderApiAzureProviderOutputReference(this, "api_azure_provider");
  public get apiAzureProvider() {
    return this._apiAzureProvider;
  }
  public putApiAzureProvider(value: SearchDatasetProviderApiAzureProvider) {
    this._apiAzureProvider.internalValue = value;
  }
  public resetApiAzureProvider() {
    this._apiAzureProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAzureProviderInput() {
    return this._apiAzureProvider.internalValue;
  }

  // api_elastic_search_provider - computed: false, optional: true, required: false
  private _apiElasticSearchProvider = new SearchDatasetProviderApiElasticSearchProviderOutputReference(this, "api_elastic_search_provider");
  public get apiElasticSearchProvider() {
    return this._apiElasticSearchProvider;
  }
  public putApiElasticSearchProvider(value: SearchDatasetProviderApiElasticSearchProvider) {
    this._apiElasticSearchProvider.internalValue = value;
  }
  public resetApiElasticSearchProvider() {
    this._apiElasticSearchProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiElasticSearchProviderInput() {
    return this._apiElasticSearchProvider.internalValue;
  }

  // api_gcp_provider - computed: false, optional: true, required: false
  private _apiGcpProvider = new SearchDatasetProviderApiGcpProviderOutputReference(this, "api_gcp_provider");
  public get apiGcpProvider() {
    return this._apiGcpProvider;
  }
  public putApiGcpProvider(value: SearchDatasetProviderApiGcpProvider) {
    this._apiGcpProvider.internalValue = value;
  }
  public resetApiGcpProvider() {
    this._apiGcpProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGcpProviderInput() {
    return this._apiGcpProvider.internalValue;
  }

  // api_google_workspace_provider - computed: false, optional: true, required: false
  private _apiGoogleWorkspaceProvider = new SearchDatasetProviderApiGoogleWorkspaceProviderOutputReference(this, "api_google_workspace_provider");
  public get apiGoogleWorkspaceProvider() {
    return this._apiGoogleWorkspaceProvider;
  }
  public putApiGoogleWorkspaceProvider(value: SearchDatasetProviderApiGoogleWorkspaceProvider) {
    this._apiGoogleWorkspaceProvider.internalValue = value;
  }
  public resetApiGoogleWorkspaceProvider() {
    this._apiGoogleWorkspaceProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGoogleWorkspaceProviderInput() {
    return this._apiGoogleWorkspaceProvider.internalValue;
  }

  // api_ms_graph_provider - computed: false, optional: true, required: false
  private _apiMsGraphProvider = new SearchDatasetProviderApiMsGraphProviderOutputReference(this, "api_ms_graph_provider");
  public get apiMsGraphProvider() {
    return this._apiMsGraphProvider;
  }
  public putApiMsGraphProvider(value: SearchDatasetProviderApiMsGraphProvider) {
    this._apiMsGraphProvider.internalValue = value;
  }
  public resetApiMsGraphProvider() {
    this._apiMsGraphProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMsGraphProviderInput() {
    return this._apiMsGraphProvider.internalValue;
  }

  // api_okta_provider - computed: false, optional: true, required: false
  private _apiOktaProvider = new SearchDatasetProviderApiOktaProviderOutputReference(this, "api_okta_provider");
  public get apiOktaProvider() {
    return this._apiOktaProvider;
  }
  public putApiOktaProvider(value: SearchDatasetProviderApiOktaProvider) {
    this._apiOktaProvider.internalValue = value;
  }
  public resetApiOktaProvider() {
    this._apiOktaProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOktaProviderInput() {
    return this._apiOktaProvider.internalValue;
  }

  // api_open_search_provider - computed: false, optional: true, required: false
  private _apiOpenSearchProvider = new SearchDatasetProviderApiOpenSearchProviderOutputReference(this, "api_open_search_provider");
  public get apiOpenSearchProvider() {
    return this._apiOpenSearchProvider;
  }
  public putApiOpenSearchProvider(value: SearchDatasetProviderApiOpenSearchProvider) {
    this._apiOpenSearchProvider.internalValue = value;
  }
  public resetApiOpenSearchProvider() {
    this._apiOpenSearchProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOpenSearchProviderInput() {
    return this._apiOpenSearchProvider.internalValue;
  }

  // api_tailscale_provider - computed: false, optional: true, required: false
  private _apiTailscaleProvider = new SearchDatasetProviderApiTailscaleProviderOutputReference(this, "api_tailscale_provider");
  public get apiTailscaleProvider() {
    return this._apiTailscaleProvider;
  }
  public putApiTailscaleProvider(value: SearchDatasetProviderApiTailscaleProvider) {
    this._apiTailscaleProvider.internalValue = value;
  }
  public resetApiTailscaleProvider() {
    this._apiTailscaleProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTailscaleProviderInput() {
    return this._apiTailscaleProvider.internalValue;
  }

  // api_zoom_provider - computed: false, optional: true, required: false
  private _apiZoomProvider = new SearchDatasetProviderApiZoomProviderOutputReference(this, "api_zoom_provider");
  public get apiZoomProvider() {
    return this._apiZoomProvider;
  }
  public putApiZoomProvider(value: SearchDatasetProviderApiZoomProvider) {
    this._apiZoomProvider.internalValue = value;
  }
  public resetApiZoomProvider() {
    this._apiZoomProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiZoomProviderInput() {
    return this._apiZoomProvider.internalValue;
  }

  // apihttp_provider - computed: false, optional: true, required: false
  private _apihttpProvider = new SearchDatasetProviderApihttpProviderOutputReference(this, "apihttp_provider");
  public get apihttpProvider() {
    return this._apihttpProvider;
  }
  public putApihttpProvider(value: SearchDatasetProviderApihttpProvider) {
    this._apihttpProvider.internalValue = value;
  }
  public resetApihttpProvider() {
    this._apihttpProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apihttpProviderInput() {
    return this._apihttpProvider.internalValue;
  }

  // aws_security_lake_provider - computed: false, optional: true, required: false
  private _awsSecurityLakeProvider = new SearchDatasetProviderAwsSecurityLakeProviderOutputReference(this, "aws_security_lake_provider");
  public get awsSecurityLakeProvider() {
    return this._awsSecurityLakeProvider;
  }
  public putAwsSecurityLakeProvider(value: SearchDatasetProviderAwsSecurityLakeProvider) {
    this._awsSecurityLakeProvider.internalValue = value;
  }
  public resetAwsSecurityLakeProvider() {
    this._awsSecurityLakeProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityLakeProviderInput() {
    return this._awsSecurityLakeProvider.internalValue;
  }

  // azure_blob_provider - computed: false, optional: true, required: false
  private _azureBlobProvider = new SearchDatasetProviderAzureBlobProviderOutputReference(this, "azure_blob_provider");
  public get azureBlobProvider() {
    return this._azureBlobProvider;
  }
  public putAzureBlobProvider(value: SearchDatasetProviderAzureBlobProvider) {
    this._azureBlobProvider.internalValue = value;
  }
  public resetAzureBlobProvider() {
    this._azureBlobProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobProviderInput() {
    return this._azureBlobProvider.internalValue;
  }

  // click_house_provider - computed: false, optional: true, required: false
  private _clickHouseProvider = new SearchDatasetProviderClickHouseProviderOutputReference(this, "click_house_provider");
  public get clickHouseProvider() {
    return this._clickHouseProvider;
  }
  public putClickHouseProvider(value: SearchDatasetProviderClickHouseProvider) {
    this._clickHouseProvider.internalValue = value;
  }
  public resetClickHouseProvider() {
    this._clickHouseProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickHouseProviderInput() {
    return this._clickHouseProvider.internalValue;
  }

  // cribl_leader_provider - computed: false, optional: true, required: false
  private _criblLeaderProvider = new SearchDatasetProviderCriblLeaderProviderOutputReference(this, "cribl_leader_provider");
  public get criblLeaderProvider() {
    return this._criblLeaderProvider;
  }
  public putCriblLeaderProvider(value: SearchDatasetProviderCriblLeaderProvider) {
    this._criblLeaderProvider.internalValue = value;
  }
  public resetCriblLeaderProvider() {
    this._criblLeaderProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criblLeaderProviderInput() {
    return this._criblLeaderProvider.internalValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edge_provider - computed: false, optional: true, required: false
  private _edgeProvider = new SearchDatasetProviderEdgeProviderOutputReference(this, "edge_provider");
  public get edgeProvider() {
    return this._edgeProvider;
  }
  public putEdgeProvider(value: SearchDatasetProviderEdgeProvider) {
    this._edgeProvider.internalValue = value;
  }
  public resetEdgeProvider() {
    this._edgeProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeProviderInput() {
    return this._edgeProvider.internalValue;
  }

  // gcs_provider - computed: false, optional: true, required: false
  private _gcsProvider = new SearchDatasetProviderGcsProviderOutputReference(this, "gcs_provider");
  public get gcsProvider() {
    return this._gcsProvider;
  }
  public putGcsProvider(value: SearchDatasetProviderGcsProvider) {
    this._gcsProvider.internalValue = value;
  }
  public resetGcsProvider() {
    this._gcsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsProviderInput() {
    return this._gcsProvider.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta_provider - computed: false, optional: true, required: false
  private _metaProvider = new SearchDatasetProviderMetaProviderOutputReference(this, "meta_provider");
  public get metaProvider() {
    return this._metaProvider;
  }
  public putMetaProvider(value: SearchDatasetProviderMetaProvider) {
    this._metaProvider.internalValue = value;
  }
  public resetMetaProvider() {
    this._metaProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaProviderInput() {
    return this._metaProvider.internalValue;
  }

  // prometheus_provider - computed: false, optional: true, required: false
  private _prometheusProvider = new SearchDatasetProviderPrometheusProviderOutputReference(this, "prometheus_provider");
  public get prometheusProvider() {
    return this._prometheusProvider;
  }
  public putPrometheusProvider(value: SearchDatasetProviderPrometheusProvider) {
    this._prometheusProvider.internalValue = value;
  }
  public resetPrometheusProvider() {
    this._prometheusProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusProviderInput() {
    return this._prometheusProvider.internalValue;
  }

  // s3_provider - computed: false, optional: true, required: false
  private _s3Provider = new SearchDatasetProviderS3ProviderOutputReference(this, "s3_provider");
  public get s3Provider() {
    return this._s3Provider;
  }
  public putS3Provider(value: SearchDatasetProviderS3Provider) {
    this._s3Provider.internalValue = value;
  }
  public resetS3Provider() {
    this._s3Provider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ProviderInput() {
    return this._s3Provider.internalValue;
  }

  // snowflake_provider - computed: false, optional: true, required: false
  private _snowflakeProvider = new SearchDatasetProviderSnowflakeProviderOutputReference(this, "snowflake_provider");
  public get snowflakeProvider() {
    return this._snowflakeProvider;
  }
  public putSnowflakeProvider(value: SearchDatasetProviderSnowflakeProvider) {
    this._snowflakeProvider.internalValue = value;
  }
  public resetSnowflakeProvider() {
    this._snowflakeProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeProviderInput() {
    return this._snowflakeProvider.internalValue;
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
      api_aws_provider: searchDatasetProviderApiAwsProviderToTerraform(this._apiAwsProvider.internalValue),
      api_azure_data_explorer_provider: searchDatasetProviderApiAzureDataExplorerProviderToTerraform(this._apiAzureDataExplorerProvider.internalValue),
      api_azure_provider: searchDatasetProviderApiAzureProviderToTerraform(this._apiAzureProvider.internalValue),
      api_elastic_search_provider: searchDatasetProviderApiElasticSearchProviderToTerraform(this._apiElasticSearchProvider.internalValue),
      api_gcp_provider: searchDatasetProviderApiGcpProviderToTerraform(this._apiGcpProvider.internalValue),
      api_google_workspace_provider: searchDatasetProviderApiGoogleWorkspaceProviderToTerraform(this._apiGoogleWorkspaceProvider.internalValue),
      api_ms_graph_provider: searchDatasetProviderApiMsGraphProviderToTerraform(this._apiMsGraphProvider.internalValue),
      api_okta_provider: searchDatasetProviderApiOktaProviderToTerraform(this._apiOktaProvider.internalValue),
      api_open_search_provider: searchDatasetProviderApiOpenSearchProviderToTerraform(this._apiOpenSearchProvider.internalValue),
      api_tailscale_provider: searchDatasetProviderApiTailscaleProviderToTerraform(this._apiTailscaleProvider.internalValue),
      api_zoom_provider: searchDatasetProviderApiZoomProviderToTerraform(this._apiZoomProvider.internalValue),
      apihttp_provider: searchDatasetProviderApihttpProviderToTerraform(this._apihttpProvider.internalValue),
      aws_security_lake_provider: searchDatasetProviderAwsSecurityLakeProviderToTerraform(this._awsSecurityLakeProvider.internalValue),
      azure_blob_provider: searchDatasetProviderAzureBlobProviderToTerraform(this._azureBlobProvider.internalValue),
      click_house_provider: searchDatasetProviderClickHouseProviderToTerraform(this._clickHouseProvider.internalValue),
      cribl_leader_provider: searchDatasetProviderCriblLeaderProviderToTerraform(this._criblLeaderProvider.internalValue),
      edge_provider: searchDatasetProviderEdgeProviderToTerraform(this._edgeProvider.internalValue),
      gcs_provider: searchDatasetProviderGcsProviderToTerraform(this._gcsProvider.internalValue),
      meta_provider: searchDatasetProviderMetaProviderToTerraform(this._metaProvider.internalValue),
      prometheus_provider: searchDatasetProviderPrometheusProviderToTerraform(this._prometheusProvider.internalValue),
      s3_provider: searchDatasetProviderS3ProviderToTerraform(this._s3Provider.internalValue),
      snowflake_provider: searchDatasetProviderSnowflakeProviderToTerraform(this._snowflakeProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_aws_provider: {
        value: searchDatasetProviderApiAwsProviderToHclTerraform(this._apiAwsProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiAwsProvider",
      },
      api_azure_data_explorer_provider: {
        value: searchDatasetProviderApiAzureDataExplorerProviderToHclTerraform(this._apiAzureDataExplorerProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiAzureDataExplorerProvider",
      },
      api_azure_provider: {
        value: searchDatasetProviderApiAzureProviderToHclTerraform(this._apiAzureProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiAzureProvider",
      },
      api_elastic_search_provider: {
        value: searchDatasetProviderApiElasticSearchProviderToHclTerraform(this._apiElasticSearchProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiElasticSearchProvider",
      },
      api_gcp_provider: {
        value: searchDatasetProviderApiGcpProviderToHclTerraform(this._apiGcpProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiGcpProvider",
      },
      api_google_workspace_provider: {
        value: searchDatasetProviderApiGoogleWorkspaceProviderToHclTerraform(this._apiGoogleWorkspaceProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiGoogleWorkspaceProvider",
      },
      api_ms_graph_provider: {
        value: searchDatasetProviderApiMsGraphProviderToHclTerraform(this._apiMsGraphProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiMsGraphProvider",
      },
      api_okta_provider: {
        value: searchDatasetProviderApiOktaProviderToHclTerraform(this._apiOktaProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiOktaProvider",
      },
      api_open_search_provider: {
        value: searchDatasetProviderApiOpenSearchProviderToHclTerraform(this._apiOpenSearchProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiOpenSearchProvider",
      },
      api_tailscale_provider: {
        value: searchDatasetProviderApiTailscaleProviderToHclTerraform(this._apiTailscaleProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiTailscaleProvider",
      },
      api_zoom_provider: {
        value: searchDatasetProviderApiZoomProviderToHclTerraform(this._apiZoomProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApiZoomProvider",
      },
      apihttp_provider: {
        value: searchDatasetProviderApihttpProviderToHclTerraform(this._apihttpProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderApihttpProvider",
      },
      aws_security_lake_provider: {
        value: searchDatasetProviderAwsSecurityLakeProviderToHclTerraform(this._awsSecurityLakeProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderAwsSecurityLakeProvider",
      },
      azure_blob_provider: {
        value: searchDatasetProviderAzureBlobProviderToHclTerraform(this._azureBlobProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderAzureBlobProvider",
      },
      click_house_provider: {
        value: searchDatasetProviderClickHouseProviderToHclTerraform(this._clickHouseProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderClickHouseProvider",
      },
      cribl_leader_provider: {
        value: searchDatasetProviderCriblLeaderProviderToHclTerraform(this._criblLeaderProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderCriblLeaderProvider",
      },
      edge_provider: {
        value: searchDatasetProviderEdgeProviderToHclTerraform(this._edgeProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderEdgeProvider",
      },
      gcs_provider: {
        value: searchDatasetProviderGcsProviderToHclTerraform(this._gcsProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderGcsProvider",
      },
      meta_provider: {
        value: searchDatasetProviderMetaProviderToHclTerraform(this._metaProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderMetaProvider",
      },
      prometheus_provider: {
        value: searchDatasetProviderPrometheusProviderToHclTerraform(this._prometheusProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderPrometheusProvider",
      },
      s3_provider: {
        value: searchDatasetProviderS3ProviderToHclTerraform(this._s3Provider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderS3Provider",
      },
      snowflake_provider: {
        value: searchDatasetProviderSnowflakeProviderToHclTerraform(this._snowflakeProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchDatasetProviderSnowflakeProvider",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
