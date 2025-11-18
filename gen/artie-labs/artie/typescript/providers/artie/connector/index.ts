// https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * This should be filled out if the connector type is `bigquery`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#bigquery_config Connector#bigquery_config}
  */
  readonly bigqueryConfig?: ConnectorBigqueryConfig;
  /**
  * The name of the data plane this connector is in (if applicable; this does not apply to cloud-based connectors like BigQuery and Snowflake). If this is not set, we will use the default data plane for your account. To see the full list of supported data planes on your account, click on 'New pipeline' in our UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#data_plane_name Connector#data_plane_name}
  */
  readonly dataPlaneName?: string;
  /**
  * This should be filled out if the connector type is `databricks`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#databricks_config Connector#databricks_config}
  */
  readonly databricksConfig?: ConnectorDatabricksConfig;
  /**
  * This should be filled out if the connector type is `dynamodb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#dynamodb_config Connector#dynamodb_config}
  */
  readonly dynamodbConfig?: ConnectorDynamodbConfig;
  /**
  * This should be filled out if the connector type is `gcs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#gcs_config Connector#gcs_config}
  */
  readonly gcsConfig?: ConnectorGcsConfig;
  /**
  * This should be filled out if the connector type is `mongodb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#mongodb_config Connector#mongodb_config}
  */
  readonly mongodbConfig?: ConnectorMongodbConfig;
  /**
  * This should be filled out if the connector type is `mssql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#mssql_config Connector#mssql_config}
  */
  readonly mssqlConfig?: ConnectorMssqlConfig;
  /**
  * This should be filled out if the connector type is `mysql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#mysql_config Connector#mysql_config}
  */
  readonly mysqlConfig?: ConnectorMysqlConfig;
  /**
  * An optional human-readable label for this connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#name Connector#name}
  */
  readonly name?: string;
  /**
  * This should be filled out if the connector type is `oracle`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#oracle_config Connector#oracle_config}
  */
  readonly oracleConfig?: ConnectorOracleConfig;
  /**
  * This should be filled out if the connector type is `postgresql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#postgresql_config Connector#postgresql_config}
  */
  readonly postgresqlConfig?: ConnectorPostgresqlConfig;
  /**
  * This should be filled out if the connector type is `redshift`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#redshift_config Connector#redshift_config}
  */
  readonly redshiftConfig?: ConnectorRedshiftConfig;
  /**
  * This should be filled out if the connector type is `s3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#s3_config Connector#s3_config}
  */
  readonly s3Config?: ConnectorS3Config;
  /**
  * This should be filled out if the connector type is `snowflake`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#snowflake_config Connector#snowflake_config}
  */
  readonly snowflakeConfig?: ConnectorSnowflakeConfig;
  /**
  * This can point to an `artie_ssh_tunnel` resource if you need us to use an SSH tunnel to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#ssh_tunnel_uuid Connector#ssh_tunnel_uuid}
  */
  readonly sshTunnelUuid?: string;
  /**
  * The type of connector. This must be one of the following: `bigquery`, `databricks`, `dynamodb`, `gcs`, `mongodb`, `mssql`, `mysql`, `oracle`, `postgresql`, `redshift`, `s3`, `snowflake`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#type Connector#type}
  */
  readonly type: string;
}
export interface ConnectorBigqueryConfig {
  /**
  * The credentials data for the Google Cloud service account that we should use to connect to BigQuery. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#credentials_data Connector#credentials_data}
  */
  readonly credentialsData: string;
  /**
  * The location of the BigQuery dataset. This must be either `US` or `EU`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#location Connector#location}
  */
  readonly location: string;
  /**
  * The ID of the Google Cloud project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#project_id Connector#project_id}
  */
  readonly projectId: string;
}

export function connectorBigqueryConfigToTerraform(struct?: ConnectorBigqueryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_data: cdktf.stringToTerraform(struct!.credentialsData),
    location: cdktf.stringToTerraform(struct!.location),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function connectorBigqueryConfigToHclTerraform(struct?: ConnectorBigqueryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_data: {
      value: cdktf.stringToHclTerraform(struct!.credentialsData),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorBigqueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorBigqueryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsData !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsData = this._credentialsData;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorBigqueryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsData = undefined;
      this._location = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsData = value.credentialsData;
      this._location = value.location;
      this._projectId = value.projectId;
    }
  }

  // credentials_data - computed: false, optional: false, required: true
  private _credentialsData?: string; 
  public get credentialsData() {
    return this.getStringAttribute('credentials_data');
  }
  public set credentialsData(value: string) {
    this._credentialsData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsDataInput() {
    return this._credentialsData;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ConnectorDatabricksConfig {
  /**
  * The hostname of the Databricks cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#host Connector#host}
  */
  readonly host: string;
  /**
  * The HTTP path of the Databricks cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#http_path Connector#http_path}
  */
  readonly httpPath: string;
  /**
  * The personal access token for the service account we should use to connect to Databricks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#personal_access_token Connector#personal_access_token}
  */
  readonly personalAccessToken: string;
  /**
  * The volume of the Databricks cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#volume Connector#volume}
  */
  readonly volume: string;
}

export function connectorDatabricksConfigToTerraform(struct?: ConnectorDatabricksConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    personal_access_token: cdktf.stringToTerraform(struct!.personalAccessToken),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function connectorDatabricksConfigToHclTerraform(struct?: ConnectorDatabricksConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personal_access_token: {
      value: cdktf.stringToHclTerraform(struct!.personalAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorDatabricksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorDatabricksConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._personalAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalAccessToken = this._personalAccessToken;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorDatabricksConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpPath = undefined;
      this._personalAccessToken = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpPath = value.httpPath;
      this._personalAccessToken = value.personalAccessToken;
      this._volume = value.volume;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_path - computed: false, optional: false, required: true
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // personal_access_token - computed: false, optional: false, required: true
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }
  public set personalAccessToken(value: string) {
    this._personalAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface ConnectorDynamodbConfig {
  /**
  * The AWS Access Key ID for the service account we should use to connect to DynamoDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#access_key_id Connector#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The AWS Secret Access Key for the service account we should use to connect to DynamoDB. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#secret_access_key Connector#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * The ARN (Amazon Resource Name) of the DynamoDB Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#stream_arn Connector#stream_arn}
  */
  readonly streamArn: string;
}

export function connectorDynamodbConfigToTerraform(struct?: ConnectorDynamodbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}


export function connectorDynamodbConfigToHclTerraform(struct?: ConnectorDynamodbConfig | cdktf.IResolvable): any {
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
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorDynamodbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorDynamodbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorDynamodbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
      this._streamArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
      this._streamArn = value.streamArn;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface ConnectorGcsConfig {
  /**
  * The credentials data for the Google Cloud service account that we should use to connect to GCS. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#credentials_data Connector#credentials_data}
  */
  readonly credentialsData: string;
  /**
  * The ID of the Google Cloud project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#project_id Connector#project_id}
  */
  readonly projectId: string;
}

export function connectorGcsConfigToTerraform(struct?: ConnectorGcsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_data: cdktf.stringToTerraform(struct!.credentialsData),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function connectorGcsConfigToHclTerraform(struct?: ConnectorGcsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_data: {
      value: cdktf.stringToHclTerraform(struct!.credentialsData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorGcsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorGcsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsData !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsData = this._credentialsData;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorGcsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsData = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsData = value.credentialsData;
      this._projectId = value.projectId;
    }
  }

  // credentials_data - computed: false, optional: false, required: true
  private _credentialsData?: string; 
  public get credentialsData() {
    return this.getStringAttribute('credentials_data');
  }
  public set credentialsData(value: string) {
    this._credentialsData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsDataInput() {
    return this._credentialsData;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ConnectorMongodbConfig {
  /**
  * The connection string for the MongoDB server. This can be either SRV or standard format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#host Connector#host}
  */
  readonly host: string;
  /**
  * The password of the service account we will use to connect to the MongoDB database. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password: string;
  /**
  * The username of the service account we will use to connect to the MongoDB database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
}

export function connectorMongodbConfigToTerraform(struct?: ConnectorMongodbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectorMongodbConfigToHclTerraform(struct?: ConnectorMongodbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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

export class ConnectorMongodbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorMongodbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorMongodbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConnectorMssqlConfig {
  /**
  * The hostname of the Microsoft SQL Server. This must point to the primary host, not a read replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#host Connector#host}
  */
  readonly host: string;
  /**
  * The password of the service account. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password: string;
  /**
  * The default port for Microsoft SQL Server is 1433.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#port Connector#port}
  */
  readonly port: number;
  /**
  * The hostname of the Microsoft SQL Server that we should use to snapshot the database. This can be a read replica and will only be used if this connector is being used as a source. If not provided, we will use the `host` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#snapshot_host Connector#snapshot_host}
  */
  readonly snapshotHost?: string;
  /**
  * The username of the service account we will use to connect to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
}

export function connectorMssqlConfigToTerraform(struct?: ConnectorMssqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    snapshot_host: cdktf.stringToTerraform(struct!.snapshotHost),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectorMssqlConfigToHclTerraform(struct?: ConnectorMssqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_host: {
      value: cdktf.stringToHclTerraform(struct!.snapshotHost),
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

export class ConnectorMssqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorMssqlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._snapshotHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotHost = this._snapshotHost;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorMssqlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._snapshotHost = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._snapshotHost = value.snapshotHost;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // snapshot_host - computed: true, optional: true, required: false
  private _snapshotHost?: string; 
  public get snapshotHost() {
    return this.getStringAttribute('snapshot_host');
  }
  public set snapshotHost(value: string) {
    this._snapshotHost = value;
  }
  public resetSnapshotHost() {
    this._snapshotHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotHostInput() {
    return this._snapshotHost;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConnectorMysqlConfig {
  /**
  * The hostname of the MySQL database. This must point to the primary host, not a read replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#host Connector#host}
  */
  readonly host: string;
  /**
  * The password of the service account. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password: string;
  /**
  * The default port for MySQL is 3306.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#port Connector#port}
  */
  readonly port: number;
  /**
  * The hostname of the MySQL database that we should use to snapshot the database. This can be a read replica and will only be used if this connector is being used as a source. If not provided, we will use the `host` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#snapshot_host Connector#snapshot_host}
  */
  readonly snapshotHost?: string;
  /**
  * The username of the service account we will use to connect to the MySQL database. This service account needs enough permissions to read from the server binlogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
}

export function connectorMysqlConfigToTerraform(struct?: ConnectorMysqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    snapshot_host: cdktf.stringToTerraform(struct!.snapshotHost),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectorMysqlConfigToHclTerraform(struct?: ConnectorMysqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_host: {
      value: cdktf.stringToHclTerraform(struct!.snapshotHost),
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

export class ConnectorMysqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorMysqlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._snapshotHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotHost = this._snapshotHost;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorMysqlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._snapshotHost = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._snapshotHost = value.snapshotHost;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // snapshot_host - computed: true, optional: true, required: false
  private _snapshotHost?: string; 
  public get snapshotHost() {
    return this.getStringAttribute('snapshot_host');
  }
  public set snapshotHost(value: string) {
    this._snapshotHost = value;
  }
  public resetSnapshotHost() {
    this._snapshotHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotHostInput() {
    return this._snapshotHost;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConnectorOracleConfig {
  /**
  * The hostname of the Oracle database. This must point to the primary host, not a read replica. This database must also have `ARCHIVELOG` mode and supplemental logging enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#host Connector#host}
  */
  readonly host: string;
  /**
  * The password of the service account. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password: string;
  /**
  * The default port for Oracle is 1521.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#port Connector#port}
  */
  readonly port: number;
  /**
  * The hostname of the Oracle database that we should use to snapshot the database. This can be a read replica and will only be used if this connector is being used as a source. If not provided, we will use the `host` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#snapshot_host Connector#snapshot_host}
  */
  readonly snapshotHost?: string;
  /**
  * The username of the service account we will use to connect to the Oracle database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
}

export function connectorOracleConfigToTerraform(struct?: ConnectorOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    snapshot_host: cdktf.stringToTerraform(struct!.snapshotHost),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectorOracleConfigToHclTerraform(struct?: ConnectorOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_host: {
      value: cdktf.stringToHclTerraform(struct!.snapshotHost),
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

export class ConnectorOracleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorOracleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._snapshotHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotHost = this._snapshotHost;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorOracleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._snapshotHost = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._snapshotHost = value.snapshotHost;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // snapshot_host - computed: true, optional: true, required: false
  private _snapshotHost?: string; 
  public get snapshotHost() {
    return this.getStringAttribute('snapshot_host');
  }
  public set snapshotHost(value: string) {
    this._snapshotHost = value;
  }
  public resetSnapshotHost() {
    this._snapshotHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotHostInput() {
    return this._snapshotHost;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConnectorPostgresqlConfig {
  /**
  * The hostname of the PostgreSQL database. This can point to a read replica if you are using PostgreSQL 16 or higher, not on Amazon Aurora, and `hot_standby_feedback` is enabled; otherwise it must point to the primary host. This database must also have its `WAL_LEVEL` set to `logical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#host Connector#host}
  */
  readonly host: string;
  /**
  * The password of the service account. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password: string;
  /**
  * The default port for PostgreSQL is 5432.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#port Connector#port}
  */
  readonly port: number;
  /**
  * The hostname of the PostgreSQL database that we should use to snapshot the database. This can be a read replica and will only be used if this connector is being used as a source. If not provided, we will use the `host` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#snapshot_host Connector#snapshot_host}
  */
  readonly snapshotHost?: string;
  /**
  * The username of the service account we will use to connect to the PostgreSQL database. This service account needs enough permissions to create and read from the replication slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
}

export function connectorPostgresqlConfigToTerraform(struct?: ConnectorPostgresqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    snapshot_host: cdktf.stringToTerraform(struct!.snapshotHost),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectorPostgresqlConfigToHclTerraform(struct?: ConnectorPostgresqlConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_host: {
      value: cdktf.stringToHclTerraform(struct!.snapshotHost),
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

export class ConnectorPostgresqlConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorPostgresqlConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._snapshotHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotHost = this._snapshotHost;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorPostgresqlConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._snapshotHost = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._snapshotHost = value.snapshotHost;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // snapshot_host - computed: true, optional: true, required: false
  private _snapshotHost?: string; 
  public get snapshotHost() {
    return this.getStringAttribute('snapshot_host');
  }
  public set snapshotHost(value: string) {
    this._snapshotHost = value;
  }
  public resetSnapshotHost() {
    this._snapshotHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotHostInput() {
    return this._snapshotHost;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConnectorRedshiftConfig {
  /**
  * The endpoint URL of your Redshift cluster. This should include both the host and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#endpoint Connector#endpoint}
  */
  readonly endpoint: string;
  /**
  * The password for the service account we should use to connect to Redshift. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password: string;
  /**
  * The username of the service account we should use to connect to Redshift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
}

export function connectorRedshiftConfigToTerraform(struct?: ConnectorRedshiftConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function connectorRedshiftConfigToHclTerraform(struct?: ConnectorRedshiftConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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

export class ConnectorRedshiftConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorRedshiftConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorRedshiftConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ConnectorS3Config {
  /**
  * The AWS Access Key ID for the service account we should use to connect to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#access_key_id Connector#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The AWS region where we should store your data in S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#region Connector#region}
  */
  readonly region: string;
  /**
  * The AWS Secret Access Key for the service account we should use to connect to S3. We recommend storing this in a secret manager and referencing it via a *sensitive* Terraform variable, instead of putting it in plaintext in your Terraform config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#secret_access_key Connector#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function connectorS3ConfigToTerraform(struct?: ConnectorS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function connectorS3ConfigToHclTerraform(struct?: ConnectorS3Config | cdktf.IResolvable): any {
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorS3Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorS3Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface ConnectorSnowflakeConfig {
  /**
  * The [account identifier](https://docs.snowflake.com/user-guide/admin-account-identifier) of your Snowflake account. We recommend using this instead of `account_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#account_identifier Connector#account_identifier}
  */
  readonly accountIdentifier?: string;
  /**
  * (Legacy) The [URL](https://docs.snowflake.com/user-guide/admin-account-identifier) of your Snowflake account. We recommend using `account_identifier` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#account_url Connector#account_url}
  */
  readonly accountUrl?: string;
  /**
  * (Legacy) The password for the service account we should use to connect to Snowflake. We recommend using `private_key` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#password Connector#password}
  */
  readonly password?: string;
  /**
  * The private key for the service account we should use to connect to Snowflake. We recommend using this instead of `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#private_key Connector#private_key}
  */
  readonly privateKey?: string;
  /**
  * The username of the service account we should use to connect to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#username Connector#username}
  */
  readonly username: string;
  /**
  * The name of your Snowflake virtual data warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#virtual_dwh Connector#virtual_dwh}
  */
  readonly virtualDwh: string;
}

export function connectorSnowflakeConfigToTerraform(struct?: ConnectorSnowflakeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_identifier: cdktf.stringToTerraform(struct!.accountIdentifier),
    account_url: cdktf.stringToTerraform(struct!.accountUrl),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_dwh: cdktf.stringToTerraform(struct!.virtualDwh),
  }
}


export function connectorSnowflakeConfigToHclTerraform(struct?: ConnectorSnowflakeConfig | cdktf.IResolvable): any {
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
    account_url: {
      value: cdktf.stringToHclTerraform(struct!.accountUrl),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
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
    virtual_dwh: {
      value: cdktf.stringToHclTerraform(struct!.virtualDwh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSnowflakeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorSnowflakeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdentifier = this._accountIdentifier;
    }
    if (this._accountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUrl = this._accountUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualDwh !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDwh = this._virtualDwh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSnowflakeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdentifier = undefined;
      this._accountUrl = undefined;
      this._password = undefined;
      this._privateKey = undefined;
      this._username = undefined;
      this._virtualDwh = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdentifier = value.accountIdentifier;
      this._accountUrl = value.accountUrl;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._username = value.username;
      this._virtualDwh = value.virtualDwh;
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

  // account_url - computed: true, optional: true, required: false
  private _accountUrl?: string; 
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }
  public set accountUrl(value: string) {
    this._accountUrl = value;
  }
  public resetAccountUrl() {
    this._accountUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUrlInput() {
    return this._accountUrl;
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // virtual_dwh - computed: false, optional: false, required: true
  private _virtualDwh?: string; 
  public get virtualDwh() {
    return this.getStringAttribute('virtual_dwh');
  }
  public set virtualDwh(value: string) {
    this._virtualDwh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDwhInput() {
    return this._virtualDwh;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector artie_connector}
*/
export class Connector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artie_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connector to import
  * @param importFromId The id of the existing Connector that should be imported. Refer to the {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artie_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.1/docs/resources/connector artie_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'artie_connector',
      terraformGeneratorMetadata: {
        providerName: 'artie',
        providerVersion: '2.3.1',
        providerVersionConstraint: '2.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bigqueryConfig.internalValue = config.bigqueryConfig;
    this._dataPlaneName = config.dataPlaneName;
    this._databricksConfig.internalValue = config.databricksConfig;
    this._dynamodbConfig.internalValue = config.dynamodbConfig;
    this._gcsConfig.internalValue = config.gcsConfig;
    this._mongodbConfig.internalValue = config.mongodbConfig;
    this._mssqlConfig.internalValue = config.mssqlConfig;
    this._mysqlConfig.internalValue = config.mysqlConfig;
    this._name = config.name;
    this._oracleConfig.internalValue = config.oracleConfig;
    this._postgresqlConfig.internalValue = config.postgresqlConfig;
    this._redshiftConfig.internalValue = config.redshiftConfig;
    this._s3Config.internalValue = config.s3Config;
    this._snowflakeConfig.internalValue = config.snowflakeConfig;
    this._sshTunnelUuid = config.sshTunnelUuid;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bigquery_config - computed: false, optional: true, required: false
  private _bigqueryConfig = new ConnectorBigqueryConfigOutputReference(this, "bigquery_config");
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }
  public putBigqueryConfig(value: ConnectorBigqueryConfig) {
    this._bigqueryConfig.internalValue = value;
  }
  public resetBigqueryConfig() {
    this._bigqueryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConfigInput() {
    return this._bigqueryConfig.internalValue;
  }

  // data_plane_name - computed: true, optional: true, required: false
  private _dataPlaneName?: string; 
  public get dataPlaneName() {
    return this.getStringAttribute('data_plane_name');
  }
  public set dataPlaneName(value: string) {
    this._dataPlaneName = value;
  }
  public resetDataPlaneName() {
    this._dataPlaneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneNameInput() {
    return this._dataPlaneName;
  }

  // databricks_config - computed: false, optional: true, required: false
  private _databricksConfig = new ConnectorDatabricksConfigOutputReference(this, "databricks_config");
  public get databricksConfig() {
    return this._databricksConfig;
  }
  public putDatabricksConfig(value: ConnectorDatabricksConfig) {
    this._databricksConfig.internalValue = value;
  }
  public resetDatabricksConfig() {
    this._databricksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksConfigInput() {
    return this._databricksConfig.internalValue;
  }

  // dynamodb_config - computed: false, optional: true, required: false
  private _dynamodbConfig = new ConnectorDynamodbConfigOutputReference(this, "dynamodb_config");
  public get dynamodbConfig() {
    return this._dynamodbConfig;
  }
  public putDynamodbConfig(value: ConnectorDynamodbConfig) {
    this._dynamodbConfig.internalValue = value;
  }
  public resetDynamodbConfig() {
    this._dynamodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbConfigInput() {
    return this._dynamodbConfig.internalValue;
  }

  // gcs_config - computed: false, optional: true, required: false
  private _gcsConfig = new ConnectorGcsConfigOutputReference(this, "gcs_config");
  public get gcsConfig() {
    return this._gcsConfig;
  }
  public putGcsConfig(value: ConnectorGcsConfig) {
    this._gcsConfig.internalValue = value;
  }
  public resetGcsConfig() {
    this._gcsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsConfigInput() {
    return this._gcsConfig.internalValue;
  }

  // mongodb_config - computed: false, optional: true, required: false
  private _mongodbConfig = new ConnectorMongodbConfigOutputReference(this, "mongodb_config");
  public get mongodbConfig() {
    return this._mongodbConfig;
  }
  public putMongodbConfig(value: ConnectorMongodbConfig) {
    this._mongodbConfig.internalValue = value;
  }
  public resetMongodbConfig() {
    this._mongodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConfigInput() {
    return this._mongodbConfig.internalValue;
  }

  // mssql_config - computed: false, optional: true, required: false
  private _mssqlConfig = new ConnectorMssqlConfigOutputReference(this, "mssql_config");
  public get mssqlConfig() {
    return this._mssqlConfig;
  }
  public putMssqlConfig(value: ConnectorMssqlConfig) {
    this._mssqlConfig.internalValue = value;
  }
  public resetMssqlConfig() {
    this._mssqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlConfigInput() {
    return this._mssqlConfig.internalValue;
  }

  // mysql_config - computed: false, optional: true, required: false
  private _mysqlConfig = new ConnectorMysqlConfigOutputReference(this, "mysql_config");
  public get mysqlConfig() {
    return this._mysqlConfig;
  }
  public putMysqlConfig(value: ConnectorMysqlConfig) {
    this._mysqlConfig.internalValue = value;
  }
  public resetMysqlConfig() {
    this._mysqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConfigInput() {
    return this._mysqlConfig.internalValue;
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

  // oracle_config - computed: false, optional: true, required: false
  private _oracleConfig = new ConnectorOracleConfigOutputReference(this, "oracle_config");
  public get oracleConfig() {
    return this._oracleConfig;
  }
  public putOracleConfig(value: ConnectorOracleConfig) {
    this._oracleConfig.internalValue = value;
  }
  public resetOracleConfig() {
    this._oracleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConfigInput() {
    return this._oracleConfig.internalValue;
  }

  // postgresql_config - computed: false, optional: true, required: false
  private _postgresqlConfig = new ConnectorPostgresqlConfigOutputReference(this, "postgresql_config");
  public get postgresqlConfig() {
    return this._postgresqlConfig;
  }
  public putPostgresqlConfig(value: ConnectorPostgresqlConfig) {
    this._postgresqlConfig.internalValue = value;
  }
  public resetPostgresqlConfig() {
    this._postgresqlConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConfigInput() {
    return this._postgresqlConfig.internalValue;
  }

  // redshift_config - computed: false, optional: true, required: false
  private _redshiftConfig = new ConnectorRedshiftConfigOutputReference(this, "redshift_config");
  public get redshiftConfig() {
    return this._redshiftConfig;
  }
  public putRedshiftConfig(value: ConnectorRedshiftConfig) {
    this._redshiftConfig.internalValue = value;
  }
  public resetRedshiftConfig() {
    this._redshiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigInput() {
    return this._redshiftConfig.internalValue;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new ConnectorS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: ConnectorS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }

  // snowflake_config - computed: false, optional: true, required: false
  private _snowflakeConfig = new ConnectorSnowflakeConfigOutputReference(this, "snowflake_config");
  public get snowflakeConfig() {
    return this._snowflakeConfig;
  }
  public putSnowflakeConfig(value: ConnectorSnowflakeConfig) {
    this._snowflakeConfig.internalValue = value;
  }
  public resetSnowflakeConfig() {
    this._snowflakeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeConfigInput() {
    return this._snowflakeConfig.internalValue;
  }

  // ssh_tunnel_uuid - computed: true, optional: true, required: false
  private _sshTunnelUuid?: string; 
  public get sshTunnelUuid() {
    return this.getStringAttribute('ssh_tunnel_uuid');
  }
  public set sshTunnelUuid(value: string) {
    this._sshTunnelUuid = value;
  }
  public resetSshTunnelUuid() {
    this._sshTunnelUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnelUuidInput() {
    return this._sshTunnelUuid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bigquery_config: connectorBigqueryConfigToTerraform(this._bigqueryConfig.internalValue),
      data_plane_name: cdktf.stringToTerraform(this._dataPlaneName),
      databricks_config: connectorDatabricksConfigToTerraform(this._databricksConfig.internalValue),
      dynamodb_config: connectorDynamodbConfigToTerraform(this._dynamodbConfig.internalValue),
      gcs_config: connectorGcsConfigToTerraform(this._gcsConfig.internalValue),
      mongodb_config: connectorMongodbConfigToTerraform(this._mongodbConfig.internalValue),
      mssql_config: connectorMssqlConfigToTerraform(this._mssqlConfig.internalValue),
      mysql_config: connectorMysqlConfigToTerraform(this._mysqlConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oracle_config: connectorOracleConfigToTerraform(this._oracleConfig.internalValue),
      postgresql_config: connectorPostgresqlConfigToTerraform(this._postgresqlConfig.internalValue),
      redshift_config: connectorRedshiftConfigToTerraform(this._redshiftConfig.internalValue),
      s3_config: connectorS3ConfigToTerraform(this._s3Config.internalValue),
      snowflake_config: connectorSnowflakeConfigToTerraform(this._snowflakeConfig.internalValue),
      ssh_tunnel_uuid: cdktf.stringToTerraform(this._sshTunnelUuid),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bigquery_config: {
        value: connectorBigqueryConfigToHclTerraform(this._bigqueryConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorBigqueryConfig",
      },
      data_plane_name: {
        value: cdktf.stringToHclTerraform(this._dataPlaneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databricks_config: {
        value: connectorDatabricksConfigToHclTerraform(this._databricksConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorDatabricksConfig",
      },
      dynamodb_config: {
        value: connectorDynamodbConfigToHclTerraform(this._dynamodbConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorDynamodbConfig",
      },
      gcs_config: {
        value: connectorGcsConfigToHclTerraform(this._gcsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorGcsConfig",
      },
      mongodb_config: {
        value: connectorMongodbConfigToHclTerraform(this._mongodbConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorMongodbConfig",
      },
      mssql_config: {
        value: connectorMssqlConfigToHclTerraform(this._mssqlConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorMssqlConfig",
      },
      mysql_config: {
        value: connectorMysqlConfigToHclTerraform(this._mysqlConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorMysqlConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_config: {
        value: connectorOracleConfigToHclTerraform(this._oracleConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorOracleConfig",
      },
      postgresql_config: {
        value: connectorPostgresqlConfigToHclTerraform(this._postgresqlConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorPostgresqlConfig",
      },
      redshift_config: {
        value: connectorRedshiftConfigToHclTerraform(this._redshiftConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorRedshiftConfig",
      },
      s3_config: {
        value: connectorS3ConfigToHclTerraform(this._s3Config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorS3Config",
      },
      snowflake_config: {
        value: connectorSnowflakeConfigToHclTerraform(this._snowflakeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorSnowflakeConfig",
      },
      ssh_tunnel_uuid: {
        value: cdktf.stringToHclTerraform(this._sshTunnelUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
