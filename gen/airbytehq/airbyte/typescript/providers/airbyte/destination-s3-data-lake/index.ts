// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationS3DataLakeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines the configurations required to connect to an Iceberg catalog, including warehouse location, main branch name, and catalog type specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#configuration DestinationS3DataLake#configuration}
  */
  readonly configuration: DestinationS3DataLakeConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#definition_id DestinationS3DataLake#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#name DestinationS3DataLake#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#workspace_id DestinationS3DataLake#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#additional_properties DestinationS3DataLake#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "GLUE"; must be "GLUE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#catalog_type DestinationS3DataLake#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * The Glue database name. This will ONLY be used if the `Destination Namespace` setting for the connection is set to `Destination-defined` or `Source-defined`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#database_name DestinationS3DataLake#database_name}
  */
  readonly databaseName: string;
  /**
  * The AWS Account ID associated with the Glue service used by the Iceberg catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#glue_id DestinationS3DataLake#glue_id}
  */
  readonly glueId: string;
  /**
  * The ARN of the AWS role to assume. Only usable in Airbyte Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#role_arn DestinationS3DataLake#role_arn}
  */
  readonly roleArn?: string;
}

export function destinationS3DataLakeConfigurationCatalogTypeGlueCatalogToTerraform(struct?: DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    catalog_type: cdktf.stringToTerraform(struct!.catalogType),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    glue_id: cdktf.stringToTerraform(struct!.glueId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function destinationS3DataLakeConfigurationCatalogTypeGlueCatalogToHclTerraform(struct?: DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog | cdktf.IResolvable): any {
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
    catalog_type: {
      value: cdktf.stringToHclTerraform(struct!.catalogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_id: {
      value: cdktf.stringToHclTerraform(struct!.glueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3DataLakeConfigurationCatalogTypeGlueCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._glueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueId = this._glueId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._catalogType = undefined;
      this._databaseName = undefined;
      this._glueId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._catalogType = value.catalogType;
      this._databaseName = value.databaseName;
      this._glueId = value.glueId;
      this._roleArn = value.roleArn;
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

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // glue_id - computed: false, optional: false, required: true
  private _glueId?: string; 
  public get glueId() {
    return this.getStringAttribute('glue_id');
  }
  public set glueId(value: string) {
    this._glueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get glueIdInput() {
    return this._glueId;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog {
  /**
  * Optional token for authentication with the Nessie server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#access_token DestinationS3DataLake#access_token}
  */
  readonly accessToken?: string;
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#additional_properties DestinationS3DataLake#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "NESSIE"; must be "NESSIE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#catalog_type DestinationS3DataLake#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * The Nessie namespace to be used in the Table identifier. 
  *            This will ONLY be used if the `Destination Namespace` setting for the connection is set to
  *            `Destination-defined` or `Source-defined`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#namespace DestinationS3DataLake#namespace}
  */
  readonly namespace: string;
  /**
  * The base URL of the Nessie server used to connect to the Nessie catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#server_uri DestinationS3DataLake#server_uri}
  */
  readonly serverUri: string;
}

export function destinationS3DataLakeConfigurationCatalogTypeNessieCatalogToTerraform(struct?: DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    catalog_type: cdktf.stringToTerraform(struct!.catalogType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_uri: cdktf.stringToTerraform(struct!.serverUri),
  }
}


export function destinationS3DataLakeConfigurationCatalogTypeNessieCatalogToHclTerraform(struct?: DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_type: {
      value: cdktf.stringToHclTerraform(struct!.catalogType),
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
    server_uri: {
      value: cdktf.stringToHclTerraform(struct!.serverUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3DataLakeConfigurationCatalogTypeNessieCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUri = this._serverUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._additionalProperties = undefined;
      this._catalogType = undefined;
      this._namespace = undefined;
      this._serverUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._additionalProperties = value.additionalProperties;
      this._catalogType = value.catalogType;
      this._namespace = value.namespace;
      this._serverUri = value.serverUri;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_uri - computed: false, optional: false, required: true
  private _serverUri?: string; 
  public get serverUri() {
    return this.getStringAttribute('server_uri');
  }
  public set serverUri(value: string) {
    this._serverUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUriInput() {
    return this._serverUri;
  }
}
export interface DestinationS3DataLakeConfigurationCatalogTypeRestCatalog {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#additional_properties DestinationS3DataLake#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "REST"; must be "REST"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#catalog_type DestinationS3DataLake#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * The namespace to be used in the Table identifier. 
  *            This will ONLY be used if the `Destination Namespace` setting for the connection is set to
  *            `Destination-defined` or `Source-defined`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#namespace DestinationS3DataLake#namespace}
  */
  readonly namespace: string;
  /**
  * The base URL of the Rest server used to connect to the Rest catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#server_uri DestinationS3DataLake#server_uri}
  */
  readonly serverUri: string;
}

export function destinationS3DataLakeConfigurationCatalogTypeRestCatalogToTerraform(struct?: DestinationS3DataLakeConfigurationCatalogTypeRestCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    catalog_type: cdktf.stringToTerraform(struct!.catalogType),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_uri: cdktf.stringToTerraform(struct!.serverUri),
  }
}


export function destinationS3DataLakeConfigurationCatalogTypeRestCatalogToHclTerraform(struct?: DestinationS3DataLakeConfigurationCatalogTypeRestCatalog | cdktf.IResolvable): any {
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
    catalog_type: {
      value: cdktf.stringToHclTerraform(struct!.catalogType),
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
    server_uri: {
      value: cdktf.stringToHclTerraform(struct!.serverUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3DataLakeConfigurationCatalogTypeRestCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeConfigurationCatalogTypeRestCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUri = this._serverUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeConfigurationCatalogTypeRestCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._catalogType = undefined;
      this._namespace = undefined;
      this._serverUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._catalogType = value.catalogType;
      this._namespace = value.namespace;
      this._serverUri = value.serverUri;
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

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_uri - computed: false, optional: false, required: true
  private _serverUri?: string; 
  public get serverUri() {
    return this.getStringAttribute('server_uri');
  }
  public set serverUri(value: string) {
    this._serverUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUriInput() {
    return this._serverUri;
  }
}
export interface DestinationS3DataLakeConfigurationCatalogType {
  /**
  * Configuration details for connecting to an AWS Glue-based Iceberg catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#glue_catalog DestinationS3DataLake#glue_catalog}
  */
  readonly glueCatalog?: DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog;
  /**
  * Configuration details for connecting to a Nessie-based Iceberg catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#nessie_catalog DestinationS3DataLake#nessie_catalog}
  */
  readonly nessieCatalog?: DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog;
  /**
  * Configuration details for connecting to a REST catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#rest_catalog DestinationS3DataLake#rest_catalog}
  */
  readonly restCatalog?: DestinationS3DataLakeConfigurationCatalogTypeRestCatalog;
}

export function destinationS3DataLakeConfigurationCatalogTypeToTerraform(struct?: DestinationS3DataLakeConfigurationCatalogType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glue_catalog: destinationS3DataLakeConfigurationCatalogTypeGlueCatalogToTerraform(struct!.glueCatalog),
    nessie_catalog: destinationS3DataLakeConfigurationCatalogTypeNessieCatalogToTerraform(struct!.nessieCatalog),
    rest_catalog: destinationS3DataLakeConfigurationCatalogTypeRestCatalogToTerraform(struct!.restCatalog),
  }
}


export function destinationS3DataLakeConfigurationCatalogTypeToHclTerraform(struct?: DestinationS3DataLakeConfigurationCatalogType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glue_catalog: {
      value: destinationS3DataLakeConfigurationCatalogTypeGlueCatalogToHclTerraform(struct!.glueCatalog),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog",
    },
    nessie_catalog: {
      value: destinationS3DataLakeConfigurationCatalogTypeNessieCatalogToHclTerraform(struct!.nessieCatalog),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog",
    },
    rest_catalog: {
      value: destinationS3DataLakeConfigurationCatalogTypeRestCatalogToHclTerraform(struct!.restCatalog),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3DataLakeConfigurationCatalogTypeRestCatalog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3DataLakeConfigurationCatalogTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeConfigurationCatalogType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueCatalog = this._glueCatalog?.internalValue;
    }
    if (this._nessieCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nessieCatalog = this._nessieCatalog?.internalValue;
    }
    if (this._restCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restCatalog = this._restCatalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeConfigurationCatalogType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glueCatalog.internalValue = undefined;
      this._nessieCatalog.internalValue = undefined;
      this._restCatalog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glueCatalog.internalValue = value.glueCatalog;
      this._nessieCatalog.internalValue = value.nessieCatalog;
      this._restCatalog.internalValue = value.restCatalog;
    }
  }

  // glue_catalog - computed: false, optional: true, required: false
  private _glueCatalog = new DestinationS3DataLakeConfigurationCatalogTypeGlueCatalogOutputReference(this, "glue_catalog");
  public get glueCatalog() {
    return this._glueCatalog;
  }
  public putGlueCatalog(value: DestinationS3DataLakeConfigurationCatalogTypeGlueCatalog) {
    this._glueCatalog.internalValue = value;
  }
  public resetGlueCatalog() {
    this._glueCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueCatalogInput() {
    return this._glueCatalog.internalValue;
  }

  // nessie_catalog - computed: false, optional: true, required: false
  private _nessieCatalog = new DestinationS3DataLakeConfigurationCatalogTypeNessieCatalogOutputReference(this, "nessie_catalog");
  public get nessieCatalog() {
    return this._nessieCatalog;
  }
  public putNessieCatalog(value: DestinationS3DataLakeConfigurationCatalogTypeNessieCatalog) {
    this._nessieCatalog.internalValue = value;
  }
  public resetNessieCatalog() {
    this._nessieCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nessieCatalogInput() {
    return this._nessieCatalog.internalValue;
  }

  // rest_catalog - computed: false, optional: true, required: false
  private _restCatalog = new DestinationS3DataLakeConfigurationCatalogTypeRestCatalogOutputReference(this, "rest_catalog");
  public get restCatalog() {
    return this._restCatalog;
  }
  public putRestCatalog(value: DestinationS3DataLakeConfigurationCatalogTypeRestCatalog) {
    this._restCatalog.internalValue = value;
  }
  public resetRestCatalog() {
    this._restCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restCatalogInput() {
    return this._restCatalog.internalValue;
  }
}
export interface DestinationS3DataLakeConfiguration {
  /**
  * The AWS Access Key ID with permissions for S3 and Glue operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#access_key_id DestinationS3DataLake#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Specifies the type of Iceberg catalog (e.g., NESSIE, GLUE, REST) and its associated configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#catalog_type DestinationS3DataLake#catalog_type}
  */
  readonly catalogType: DestinationS3DataLakeConfigurationCatalogType;
  /**
  * The primary or default branch name in the catalog. Most query engines will use "main" by default. See <a href="https://iceberg.apache.org/docs/latest/branching/">Iceberg documentation</a> for more information. Default: "main"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#main_branch_name DestinationS3DataLake#main_branch_name}
  */
  readonly mainBranchName?: string;
  /**
  * The name of the S3 bucket that will host the Iceberg data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#s3_bucket_name DestinationS3DataLake#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * The region of the S3 bucket. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">here</a> for all region codes. must be one of ["", "af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-gov-east-1", "us-gov-west-1", "us-west-1", "us-west-2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#s3_bucket_region DestinationS3DataLake#s3_bucket_region}
  */
  readonly s3BucketRegion: string;
  /**
  * Your S3 endpoint url. Read more <a href="https://docs.aws.amazon.com/general/latest/gr/s3.html#:~:text=Service%20endpoints-,Amazon%20S3%20endpoints,-When%20you%20use">here</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#s3_endpoint DestinationS3DataLake#s3_endpoint}
  */
  readonly s3Endpoint?: string;
  /**
  * The AWS Secret Access Key paired with the Access Key ID for AWS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#secret_access_key DestinationS3DataLake#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * The root location of the data warehouse used by the Iceberg catalog. Typically includes a bucket name and path within that bucket. For AWS Glue and Nessie, must include the storage protocol (such as "s3://" for Amazon S3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#warehouse_location DestinationS3DataLake#warehouse_location}
  */
  readonly warehouseLocation: string;
}

export function destinationS3DataLakeConfigurationToTerraform(struct?: DestinationS3DataLakeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    catalog_type: destinationS3DataLakeConfigurationCatalogTypeToTerraform(struct!.catalogType),
    main_branch_name: cdktf.stringToTerraform(struct!.mainBranchName),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_bucket_region: cdktf.stringToTerraform(struct!.s3BucketRegion),
    s3_endpoint: cdktf.stringToTerraform(struct!.s3Endpoint),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    warehouse_location: cdktf.stringToTerraform(struct!.warehouseLocation),
  }
}


export function destinationS3DataLakeConfigurationToHclTerraform(struct?: DestinationS3DataLakeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_type: {
      value: destinationS3DataLakeConfigurationCatalogTypeToHclTerraform(struct!.catalogType),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationS3DataLakeConfigurationCatalogType",
    },
    main_branch_name: {
      value: cdktf.stringToHclTerraform(struct!.mainBranchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.s3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_location: {
      value: cdktf.stringToHclTerraform(struct!.warehouseLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationS3DataLakeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._catalogType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType?.internalValue;
    }
    if (this._mainBranchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainBranchName = this._mainBranchName;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3BucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketRegion = this._s3BucketRegion;
    }
    if (this._s3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Endpoint = this._s3Endpoint;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._warehouseLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseLocation = this._warehouseLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._catalogType.internalValue = undefined;
      this._mainBranchName = undefined;
      this._s3BucketName = undefined;
      this._s3BucketRegion = undefined;
      this._s3Endpoint = undefined;
      this._secretAccessKey = undefined;
      this._warehouseLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._catalogType.internalValue = value.catalogType;
      this._mainBranchName = value.mainBranchName;
      this._s3BucketName = value.s3BucketName;
      this._s3BucketRegion = value.s3BucketRegion;
      this._s3Endpoint = value.s3Endpoint;
      this._secretAccessKey = value.secretAccessKey;
      this._warehouseLocation = value.warehouseLocation;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // catalog_type - computed: false, optional: false, required: true
  private _catalogType = new DestinationS3DataLakeConfigurationCatalogTypeOutputReference(this, "catalog_type");
  public get catalogType() {
    return this._catalogType;
  }
  public putCatalogType(value: DestinationS3DataLakeConfigurationCatalogType) {
    this._catalogType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType.internalValue;
  }

  // main_branch_name - computed: true, optional: true, required: false
  private _mainBranchName?: string; 
  public get mainBranchName() {
    return this.getStringAttribute('main_branch_name');
  }
  public set mainBranchName(value: string) {
    this._mainBranchName = value;
  }
  public resetMainBranchName() {
    this._mainBranchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainBranchNameInput() {
    return this._mainBranchName;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_bucket_region - computed: false, optional: false, required: true
  private _s3BucketRegion?: string; 
  public get s3BucketRegion() {
    return this.getStringAttribute('s3_bucket_region');
  }
  public set s3BucketRegion(value: string) {
    this._s3BucketRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketRegionInput() {
    return this._s3BucketRegion;
  }

  // s3_endpoint - computed: false, optional: true, required: false
  private _s3Endpoint?: string; 
  public get s3Endpoint() {
    return this.getStringAttribute('s3_endpoint');
  }
  public set s3Endpoint(value: string) {
    this._s3Endpoint = value;
  }
  public resetS3Endpoint() {
    this._s3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EndpointInput() {
    return this._s3Endpoint;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // warehouse_location - computed: false, optional: false, required: true
  private _warehouseLocation?: string; 
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }
  public set warehouseLocation(value: string) {
    this._warehouseLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseLocationInput() {
    return this._warehouseLocation;
  }
}
export interface DestinationS3DataLakeResourceAllocationDefault {
}

export function destinationS3DataLakeResourceAllocationDefaultToTerraform(struct?: DestinationS3DataLakeResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3DataLakeResourceAllocationDefaultToHclTerraform(struct?: DestinationS3DataLakeResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3DataLakeResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirements {
}

export function destinationS3DataLakeResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3DataLakeResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationS3DataLakeResourceAllocationJobSpecific {
}

export function destinationS3DataLakeResourceAllocationJobSpecificToTerraform(struct?: DestinationS3DataLakeResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3DataLakeResourceAllocationJobSpecificToHclTerraform(struct?: DestinationS3DataLakeResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3DataLakeResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationS3DataLakeResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationS3DataLakeResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationS3DataLakeResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationS3DataLakeResourceAllocationJobSpecificOutputReference {
    return new DestinationS3DataLakeResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationS3DataLakeResourceAllocation {
}

export function destinationS3DataLakeResourceAllocationToTerraform(struct?: DestinationS3DataLakeResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationS3DataLakeResourceAllocationToHclTerraform(struct?: DestinationS3DataLakeResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationS3DataLakeResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationS3DataLakeResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationS3DataLakeResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationS3DataLakeResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationS3DataLakeResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake airbyte_destination_s3_data_lake}
*/
export class DestinationS3DataLake extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_s3_data_lake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationS3DataLake resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationS3DataLake to import
  * @param importFromId The id of the existing DestinationS3DataLake that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationS3DataLake to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_s3_data_lake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_s3_data_lake airbyte_destination_s3_data_lake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationS3DataLakeConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationS3DataLakeConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_s3_data_lake',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationS3DataLakeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationS3DataLakeConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationS3DataLakeResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationS3DataLakeConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationS3DataLakeConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationS3DataLakeConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
