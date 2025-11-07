// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationDatabricksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#configuration DestinationDatabricks#configuration}
  */
  readonly configuration: DestinationDatabricksConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#definition_id DestinationDatabricks#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#name DestinationDatabricks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#workspace_id DestinationDatabricks#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationDatabricksConfigurationAuthenticationOAuth2Recommended {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#client_id DestinationDatabricks#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#secret DestinationDatabricks#secret}
  */
  readonly secret: string;
}

export function destinationDatabricksConfigurationAuthenticationOAuth2RecommendedToTerraform(struct?: DestinationDatabricksConfigurationAuthenticationOAuth2Recommended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function destinationDatabricksConfigurationAuthenticationOAuth2RecommendedToHclTerraform(struct?: DestinationDatabricksConfigurationAuthenticationOAuth2Recommended | cdktf.IResolvable): any {
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDatabricksConfigurationAuthenticationOAuth2RecommendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksConfigurationAuthenticationOAuth2Recommended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksConfigurationAuthenticationOAuth2Recommended | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._secret = value.secret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DestinationDatabricksConfigurationAuthenticationPersonalAccessToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#personal_access_token DestinationDatabricks#personal_access_token}
  */
  readonly personalAccessToken: string;
}

export function destinationDatabricksConfigurationAuthenticationPersonalAccessTokenToTerraform(struct?: DestinationDatabricksConfigurationAuthenticationPersonalAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    personal_access_token: cdktf.stringToTerraform(struct!.personalAccessToken),
  }
}


export function destinationDatabricksConfigurationAuthenticationPersonalAccessTokenToHclTerraform(struct?: DestinationDatabricksConfigurationAuthenticationPersonalAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    personal_access_token: {
      value: cdktf.stringToHclTerraform(struct!.personalAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDatabricksConfigurationAuthenticationPersonalAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksConfigurationAuthenticationPersonalAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._personalAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalAccessToken = this._personalAccessToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksConfigurationAuthenticationPersonalAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._personalAccessToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._personalAccessToken = value.personalAccessToken;
    }
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
}
export interface DestinationDatabricksConfigurationAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#o_auth2_recommended DestinationDatabricks#o_auth2_recommended}
  */
  readonly oAuth2Recommended?: DestinationDatabricksConfigurationAuthenticationOAuth2Recommended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#personal_access_token DestinationDatabricks#personal_access_token}
  */
  readonly personalAccessToken?: DestinationDatabricksConfigurationAuthenticationPersonalAccessToken;
}

export function destinationDatabricksConfigurationAuthenticationToTerraform(struct?: DestinationDatabricksConfigurationAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    o_auth2_recommended: destinationDatabricksConfigurationAuthenticationOAuth2RecommendedToTerraform(struct!.oAuth2Recommended),
    personal_access_token: destinationDatabricksConfigurationAuthenticationPersonalAccessTokenToTerraform(struct!.personalAccessToken),
  }
}


export function destinationDatabricksConfigurationAuthenticationToHclTerraform(struct?: DestinationDatabricksConfigurationAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    o_auth2_recommended: {
      value: destinationDatabricksConfigurationAuthenticationOAuth2RecommendedToHclTerraform(struct!.oAuth2Recommended),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDatabricksConfigurationAuthenticationOAuth2Recommended",
    },
    personal_access_token: {
      value: destinationDatabricksConfigurationAuthenticationPersonalAccessTokenToHclTerraform(struct!.personalAccessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDatabricksConfigurationAuthenticationPersonalAccessToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDatabricksConfigurationAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksConfigurationAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuth2Recommended?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth2Recommended = this._oAuth2Recommended?.internalValue;
    }
    if (this._personalAccessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalAccessToken = this._personalAccessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksConfigurationAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuth2Recommended.internalValue = undefined;
      this._personalAccessToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuth2Recommended.internalValue = value.oAuth2Recommended;
      this._personalAccessToken.internalValue = value.personalAccessToken;
    }
  }

  // o_auth2_recommended - computed: false, optional: true, required: false
  private _oAuth2Recommended = new DestinationDatabricksConfigurationAuthenticationOAuth2RecommendedOutputReference(this, "o_auth2_recommended");
  public get oAuth2Recommended() {
    return this._oAuth2Recommended;
  }
  public putOAuth2Recommended(value: DestinationDatabricksConfigurationAuthenticationOAuth2Recommended) {
    this._oAuth2Recommended.internalValue = value;
  }
  public resetOAuth2Recommended() {
    this._oAuth2Recommended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth2RecommendedInput() {
    return this._oAuth2Recommended.internalValue;
  }

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken = new DestinationDatabricksConfigurationAuthenticationPersonalAccessTokenOutputReference(this, "personal_access_token");
  public get personalAccessToken() {
    return this._personalAccessToken;
  }
  public putPersonalAccessToken(value: DestinationDatabricksConfigurationAuthenticationPersonalAccessToken) {
    this._personalAccessToken.internalValue = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken.internalValue;
  }
}
export interface DestinationDatabricksConfiguration {
  /**
  * You must agree to the Databricks JDBC Driver <a href="https://databricks.com/jdbc-odbc-driver-license">Terms & Conditions</a> to use this connector. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#accept_terms DestinationDatabricks#accept_terms}
  */
  readonly acceptTerms?: boolean | cdktf.IResolvable;
  /**
  * Authentication mechanism for Staging files and running queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#authentication DestinationDatabricks#authentication}
  */
  readonly authentication: DestinationDatabricksConfigurationAuthentication;
  /**
  * The name of the unity catalog for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#database DestinationDatabricks#database}
  */
  readonly database: string;
  /**
  * Databricks Cluster Server Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#hostname DestinationDatabricks#hostname}
  */
  readonly hostname: string;
  /**
  * Databricks Cluster HTTP Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#http_path DestinationDatabricks#http_path}
  */
  readonly httpPath: string;
  /**
  * Databricks Cluster Port. Default: "443"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#port DestinationDatabricks#port}
  */
  readonly port?: string;
  /**
  * Default to 'true'. Switch it to 'false' for debugging purpose. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#purge_staging_data DestinationDatabricks#purge_staging_data}
  */
  readonly purgeStagingData?: boolean | cdktf.IResolvable;
  /**
  * The schema to write raw tables into (default: airbyte_internal). Default: "airbyte_internal"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#raw_schema_override DestinationDatabricks#raw_schema_override}
  */
  readonly rawSchemaOverride?: string;
  /**
  * The default schema tables are written. If not specified otherwise, the "default" will be used. Default: "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#schema DestinationDatabricks#schema}
  */
  readonly schema?: string;
}

export function destinationDatabricksConfigurationToTerraform(struct?: DestinationDatabricksConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_terms: cdktf.booleanToTerraform(struct!.acceptTerms),
    authentication: destinationDatabricksConfigurationAuthenticationToTerraform(struct!.authentication),
    database: cdktf.stringToTerraform(struct!.database),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    port: cdktf.stringToTerraform(struct!.port),
    purge_staging_data: cdktf.booleanToTerraform(struct!.purgeStagingData),
    raw_schema_override: cdktf.stringToTerraform(struct!.rawSchemaOverride),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function destinationDatabricksConfigurationToHclTerraform(struct?: DestinationDatabricksConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_terms: {
      value: cdktf.booleanToHclTerraform(struct!.acceptTerms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication: {
      value: destinationDatabricksConfigurationAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationDatabricksConfigurationAuthentication",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purge_staging_data: {
      value: cdktf.booleanToHclTerraform(struct!.purgeStagingData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    raw_schema_override: {
      value: cdktf.stringToHclTerraform(struct!.rawSchemaOverride),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationDatabricksConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptTerms !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptTerms = this._acceptTerms;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._purgeStagingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeStagingData = this._purgeStagingData;
    }
    if (this._rawSchemaOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawSchemaOverride = this._rawSchemaOverride;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptTerms = undefined;
      this._authentication.internalValue = undefined;
      this._database = undefined;
      this._hostname = undefined;
      this._httpPath = undefined;
      this._port = undefined;
      this._purgeStagingData = undefined;
      this._rawSchemaOverride = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptTerms = value.acceptTerms;
      this._authentication.internalValue = value.authentication;
      this._database = value.database;
      this._hostname = value.hostname;
      this._httpPath = value.httpPath;
      this._port = value.port;
      this._purgeStagingData = value.purgeStagingData;
      this._rawSchemaOverride = value.rawSchemaOverride;
      this._schema = value.schema;
    }
  }

  // accept_terms - computed: true, optional: true, required: false
  private _acceptTerms?: boolean | cdktf.IResolvable; 
  public get acceptTerms() {
    return this.getBooleanAttribute('accept_terms');
  }
  public set acceptTerms(value: boolean | cdktf.IResolvable) {
    this._acceptTerms = value;
  }
  public resetAcceptTerms() {
    this._acceptTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptTermsInput() {
    return this._acceptTerms;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new DestinationDatabricksConfigurationAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DestinationDatabricksConfigurationAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // purge_staging_data - computed: true, optional: true, required: false
  private _purgeStagingData?: boolean | cdktf.IResolvable; 
  public get purgeStagingData() {
    return this.getBooleanAttribute('purge_staging_data');
  }
  public set purgeStagingData(value: boolean | cdktf.IResolvable) {
    this._purgeStagingData = value;
  }
  public resetPurgeStagingData() {
    this._purgeStagingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeStagingDataInput() {
    return this._purgeStagingData;
  }

  // raw_schema_override - computed: true, optional: true, required: false
  private _rawSchemaOverride?: string; 
  public get rawSchemaOverride() {
    return this.getStringAttribute('raw_schema_override');
  }
  public set rawSchemaOverride(value: string) {
    this._rawSchemaOverride = value;
  }
  public resetRawSchemaOverride() {
    this._rawSchemaOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawSchemaOverrideInput() {
    return this._rawSchemaOverride;
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
}
export interface DestinationDatabricksResourceAllocationDefault {
}

export function destinationDatabricksResourceAllocationDefaultToTerraform(struct?: DestinationDatabricksResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDatabricksResourceAllocationDefaultToHclTerraform(struct?: DestinationDatabricksResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDatabricksResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksResourceAllocationDefault | undefined) {
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
export interface DestinationDatabricksResourceAllocationJobSpecificResourceRequirements {
}

export function destinationDatabricksResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationDatabricksResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDatabricksResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationDatabricksResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDatabricksResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationDatabricksResourceAllocationJobSpecific {
}

export function destinationDatabricksResourceAllocationJobSpecificToTerraform(struct?: DestinationDatabricksResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDatabricksResourceAllocationJobSpecificToHclTerraform(struct?: DestinationDatabricksResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDatabricksResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationDatabricksResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationDatabricksResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationDatabricksResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationDatabricksResourceAllocationJobSpecificOutputReference {
    return new DestinationDatabricksResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationDatabricksResourceAllocation {
}

export function destinationDatabricksResourceAllocationToTerraform(struct?: DestinationDatabricksResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationDatabricksResourceAllocationToHclTerraform(struct?: DestinationDatabricksResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationDatabricksResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationDatabricksResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationDatabricksResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationDatabricksResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationDatabricksResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks airbyte_destination_databricks}
*/
export class DestinationDatabricks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_databricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationDatabricks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationDatabricks to import
  * @param importFromId The id of the existing DestinationDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationDatabricks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_databricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_databricks airbyte_destination_databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationDatabricksConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_databricks',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
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
  private _configuration = new DestinationDatabricksConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationDatabricksConfiguration) {
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
  private _resourceAllocation = new DestinationDatabricksResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationDatabricksConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationDatabricksConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationDatabricksConfiguration",
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
