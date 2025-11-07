// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the logging integration config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#name IntegrationLogging#name}
  */
  readonly name: string;
  /**
  * Whether or not Cyral audit logs should be forwarded to this logging integration. Declaration not supported in conjunction with `fluent_bit` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#receive_audit_logs IntegrationLogging#receive_audit_logs}
  */
  readonly receiveAuditLogs?: boolean | cdktf.IResolvable;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#cloudwatch IntegrationLogging#cloudwatch}
  */
  readonly cloudwatch?: IntegrationLoggingCloudwatch;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#datadog IntegrationLogging#datadog}
  */
  readonly datadog?: IntegrationLoggingDatadog;
  /**
  * elk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#elk IntegrationLogging#elk}
  */
  readonly elk?: IntegrationLoggingElk;
  /**
  * fluent_bit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#fluent_bit IntegrationLogging#fluent_bit}
  */
  readonly fluentBit?: IntegrationLoggingFluentBit;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#splunk IntegrationLogging#splunk}
  */
  readonly splunk?: IntegrationLoggingSplunk;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#sumo_logic IntegrationLogging#sumo_logic}
  */
  readonly sumoLogic?: IntegrationLoggingSumoLogic;
}
export interface IntegrationLoggingCloudwatch {
  /**
  * CloudWatch log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#group IntegrationLogging#group}
  */
  readonly group: string;
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#region IntegrationLogging#region}
  */
  readonly region: string;
  /**
  * CloudWatch log stream. Defaults to `cyral-sidecar` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#stream IntegrationLogging#stream}
  */
  readonly stream?: string;
}

export function integrationLoggingCloudwatchToTerraform(struct?: IntegrationLoggingCloudwatchOutputReference | IntegrationLoggingCloudwatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    region: cdktf.stringToTerraform(struct!.region),
    stream: cdktf.stringToTerraform(struct!.stream),
  }
}


export function integrationLoggingCloudwatchToHclTerraform(struct?: IntegrationLoggingCloudwatchOutputReference | IntegrationLoggingCloudwatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationLoggingCloudwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingCloudwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationLoggingCloudwatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._region = undefined;
      this._stream = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._region = value.region;
      this._stream = value.stream;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // stream - computed: false, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }
}
export interface IntegrationLoggingDatadog {
  /**
  * DataDog API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#api_key IntegrationLogging#api_key}
  */
  readonly apiKey: string;
}

export function integrationLoggingDatadogToTerraform(struct?: IntegrationLoggingDatadogOutputReference | IntegrationLoggingDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function integrationLoggingDatadogToHclTerraform(struct?: IntegrationLoggingDatadogOutputReference | IntegrationLoggingDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationLoggingDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationLoggingDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface IntegrationLoggingElkEsCredentials {
  /**
  * Elasticsearch password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#password IntegrationLogging#password}
  */
  readonly password: string;
  /**
  * Elasticsearch username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#username IntegrationLogging#username}
  */
  readonly username: string;
}

export function integrationLoggingElkEsCredentialsToTerraform(struct?: IntegrationLoggingElkEsCredentialsOutputReference | IntegrationLoggingElkEsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function integrationLoggingElkEsCredentialsToHclTerraform(struct?: IntegrationLoggingElkEsCredentialsOutputReference | IntegrationLoggingElkEsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IntegrationLoggingElkEsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingElkEsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IntegrationLoggingElkEsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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
export interface IntegrationLoggingElk {
  /**
  * Elasticsearch URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#es_url IntegrationLogging#es_url}
  */
  readonly esUrl: string;
  /**
  * Kibana URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#kibana_url IntegrationLogging#kibana_url}
  */
  readonly kibanaUrl?: string;
  /**
  * es_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#es_credentials IntegrationLogging#es_credentials}
  */
  readonly esCredentials?: IntegrationLoggingElkEsCredentials;
}

export function integrationLoggingElkToTerraform(struct?: IntegrationLoggingElkOutputReference | IntegrationLoggingElk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    es_url: cdktf.stringToTerraform(struct!.esUrl),
    kibana_url: cdktf.stringToTerraform(struct!.kibanaUrl),
    es_credentials: integrationLoggingElkEsCredentialsToTerraform(struct!.esCredentials),
  }
}


export function integrationLoggingElkToHclTerraform(struct?: IntegrationLoggingElkOutputReference | IntegrationLoggingElk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    es_url: {
      value: cdktf.stringToHclTerraform(struct!.esUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kibana_url: {
      value: cdktf.stringToHclTerraform(struct!.kibanaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    es_credentials: {
      value: integrationLoggingElkEsCredentialsToHclTerraform(struct!.esCredentials),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationLoggingElkEsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationLoggingElkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingElk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.esUrl = this._esUrl;
    }
    if (this._kibanaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.kibanaUrl = this._kibanaUrl;
    }
    if (this._esCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esCredentials = this._esCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationLoggingElk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._esUrl = undefined;
      this._kibanaUrl = undefined;
      this._esCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._esUrl = value.esUrl;
      this._kibanaUrl = value.kibanaUrl;
      this._esCredentials.internalValue = value.esCredentials;
    }
  }

  // es_url - computed: false, optional: false, required: true
  private _esUrl?: string; 
  public get esUrl() {
    return this.getStringAttribute('es_url');
  }
  public set esUrl(value: string) {
    this._esUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esUrlInput() {
    return this._esUrl;
  }

  // kibana_url - computed: false, optional: true, required: false
  private _kibanaUrl?: string; 
  public get kibanaUrl() {
    return this.getStringAttribute('kibana_url');
  }
  public set kibanaUrl(value: string) {
    this._kibanaUrl = value;
  }
  public resetKibanaUrl() {
    this._kibanaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaUrlInput() {
    return this._kibanaUrl;
  }

  // es_credentials - computed: false, optional: true, required: false
  private _esCredentials = new IntegrationLoggingElkEsCredentialsOutputReference(this, "es_credentials");
  public get esCredentials() {
    return this._esCredentials;
  }
  public putEsCredentials(value: IntegrationLoggingElkEsCredentials) {
    this._esCredentials.internalValue = value;
  }
  public resetEsCredentials() {
    this._esCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esCredentialsInput() {
    return this._esCredentials.internalValue;
  }
}
export interface IntegrationLoggingFluentBit {
  /**
  * Fluent Bit configuration, in 'classic mode' INI format. For more details, see: https://docs.fluentbit.io/manual/administration/configuring-fluent-bit/classic-mode/configuration-file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#config IntegrationLogging#config}
  */
  readonly config: string;
  /**
  * Whether to validate the Fluent Bit config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#skip_validate IntegrationLogging#skip_validate}
  */
  readonly skipValidate?: boolean | cdktf.IResolvable;
}

export function integrationLoggingFluentBitToTerraform(struct?: IntegrationLoggingFluentBitOutputReference | IntegrationLoggingFluentBit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    skip_validate: cdktf.booleanToTerraform(struct!.skipValidate),
  }
}


export function integrationLoggingFluentBitToHclTerraform(struct?: IntegrationLoggingFluentBitOutputReference | IntegrationLoggingFluentBit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_validate: {
      value: cdktf.booleanToHclTerraform(struct!.skipValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationLoggingFluentBitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingFluentBit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._skipValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipValidate = this._skipValidate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationLoggingFluentBit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config = undefined;
      this._skipValidate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config = value.config;
      this._skipValidate = value.skipValidate;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // skip_validate - computed: false, optional: true, required: false
  private _skipValidate?: boolean | cdktf.IResolvable; 
  public get skipValidate() {
    return this.getBooleanAttribute('skip_validate');
  }
  public set skipValidate(value: boolean | cdktf.IResolvable) {
    this._skipValidate = value;
  }
  public resetSkipValidate() {
    this._skipValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidateInput() {
    return this._skipValidate;
  }
}
export interface IntegrationLoggingSplunk {
  /**
  * Splunk access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#access_token IntegrationLogging#access_token}
  */
  readonly accessToken: string;
  /**
  * Splunk HTTP Event Collector (HEC) port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#hec_port IntegrationLogging#hec_port}
  */
  readonly hecPort: string;
  /**
  * Splunk hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#hostname IntegrationLogging#hostname}
  */
  readonly hostname: string;
  /**
  * Splunk index which logs should be indexed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#index IntegrationLogging#index}
  */
  readonly index?: string;
  /**
  * Whether or not to use TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#use_tls IntegrationLogging#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

export function integrationLoggingSplunkToTerraform(struct?: IntegrationLoggingSplunkOutputReference | IntegrationLoggingSplunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    hec_port: cdktf.stringToTerraform(struct!.hecPort),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    index: cdktf.stringToTerraform(struct!.index),
    use_tls: cdktf.booleanToTerraform(struct!.useTls),
  }
}


export function integrationLoggingSplunkToHclTerraform(struct?: IntegrationLoggingSplunkOutputReference | IntegrationLoggingSplunk): any {
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
    hec_port: {
      value: cdktf.stringToHclTerraform(struct!.hecPort),
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
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationLoggingSplunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._hecPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecPort = this._hecPort;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._useTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationLoggingSplunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._hecPort = undefined;
      this._hostname = undefined;
      this._index = undefined;
      this._useTls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._hecPort = value.hecPort;
      this._hostname = value.hostname;
      this._index = value.index;
      this._useTls = value.useTls;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // hec_port - computed: false, optional: false, required: true
  private _hecPort?: string; 
  public get hecPort() {
    return this.getStringAttribute('hec_port');
  }
  public set hecPort(value: string) {
    this._hecPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecPortInput() {
    return this._hecPort;
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

  // index - computed: false, optional: true, required: false
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

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }
}
export interface IntegrationLoggingSumoLogic {
  /**
  * Sumo Logic HTTP collector address. A full URL is expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#address IntegrationLogging#address}
  */
  readonly address: string;
}

export function integrationLoggingSumoLogicToTerraform(struct?: IntegrationLoggingSumoLogicOutputReference | IntegrationLoggingSumoLogic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function integrationLoggingSumoLogicToHclTerraform(struct?: IntegrationLoggingSumoLogicOutputReference | IntegrationLoggingSumoLogic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationLoggingSumoLogicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationLoggingSumoLogic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationLoggingSumoLogic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging cyral_integration_logging}
*/
export class IntegrationLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationLogging to import
  * @param importFromId The id of the existing IntegrationLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_logging cyral_integration_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_logging',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._receiveAuditLogs = config.receiveAuditLogs;
    this._cloudwatch.internalValue = config.cloudwatch;
    this._datadog.internalValue = config.datadog;
    this._elk.internalValue = config.elk;
    this._fluentBit.internalValue = config.fluentBit;
    this._splunk.internalValue = config.splunk;
    this._sumoLogic.internalValue = config.sumoLogic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // receive_audit_logs - computed: false, optional: true, required: false
  private _receiveAuditLogs?: boolean | cdktf.IResolvable; 
  public get receiveAuditLogs() {
    return this.getBooleanAttribute('receive_audit_logs');
  }
  public set receiveAuditLogs(value: boolean | cdktf.IResolvable) {
    this._receiveAuditLogs = value;
  }
  public resetReceiveAuditLogs() {
    this._receiveAuditLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveAuditLogsInput() {
    return this._receiveAuditLogs;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new IntegrationLoggingCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: IntegrationLoggingCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new IntegrationLoggingDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: IntegrationLoggingDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // elk - computed: false, optional: true, required: false
  private _elk = new IntegrationLoggingElkOutputReference(this, "elk");
  public get elk() {
    return this._elk;
  }
  public putElk(value: IntegrationLoggingElk) {
    this._elk.internalValue = value;
  }
  public resetElk() {
    this._elk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elkInput() {
    return this._elk.internalValue;
  }

  // fluent_bit - computed: false, optional: true, required: false
  private _fluentBit = new IntegrationLoggingFluentBitOutputReference(this, "fluent_bit");
  public get fluentBit() {
    return this._fluentBit;
  }
  public putFluentBit(value: IntegrationLoggingFluentBit) {
    this._fluentBit.internalValue = value;
  }
  public resetFluentBit() {
    this._fluentBit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentBitInput() {
    return this._fluentBit.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new IntegrationLoggingSplunkOutputReference(this, "splunk");
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: IntegrationLoggingSplunk) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // sumo_logic - computed: false, optional: true, required: false
  private _sumoLogic = new IntegrationLoggingSumoLogicOutputReference(this, "sumo_logic");
  public get sumoLogic() {
    return this._sumoLogic;
  }
  public putSumoLogic(value: IntegrationLoggingSumoLogic) {
    this._sumoLogic.internalValue = value;
  }
  public resetSumoLogic() {
    this._sumoLogic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicInput() {
    return this._sumoLogic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      receive_audit_logs: cdktf.booleanToTerraform(this._receiveAuditLogs),
      cloudwatch: integrationLoggingCloudwatchToTerraform(this._cloudwatch.internalValue),
      datadog: integrationLoggingDatadogToTerraform(this._datadog.internalValue),
      elk: integrationLoggingElkToTerraform(this._elk.internalValue),
      fluent_bit: integrationLoggingFluentBitToTerraform(this._fluentBit.internalValue),
      splunk: integrationLoggingSplunkToTerraform(this._splunk.internalValue),
      sumo_logic: integrationLoggingSumoLogicToTerraform(this._sumoLogic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_audit_logs: {
        value: cdktf.booleanToHclTerraform(this._receiveAuditLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudwatch: {
        value: integrationLoggingCloudwatchToHclTerraform(this._cloudwatch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationLoggingCloudwatchList",
      },
      datadog: {
        value: integrationLoggingDatadogToHclTerraform(this._datadog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationLoggingDatadogList",
      },
      elk: {
        value: integrationLoggingElkToHclTerraform(this._elk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationLoggingElkList",
      },
      fluent_bit: {
        value: integrationLoggingFluentBitToHclTerraform(this._fluentBit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationLoggingFluentBitList",
      },
      splunk: {
        value: integrationLoggingSplunkToHclTerraform(this._splunk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationLoggingSplunkList",
      },
      sumo_logic: {
        value: integrationLoggingSumoLogicToHclTerraform(this._sumoLogic.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationLoggingSumoLogicList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
