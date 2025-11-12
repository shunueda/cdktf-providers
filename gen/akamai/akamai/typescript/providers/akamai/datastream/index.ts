// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defining if stream should be active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#active Datastream#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Identifies if stream needs to collect midgress data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#collect_midgress Datastream#collect_midgress}
  */
  readonly collectMidgress?: boolean | cdktf.IResolvable;
  /**
  * Identifies the contract that has access to the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#contract_id Datastream#contract_id}
  */
  readonly contractId: string;
  /**
  * A list of data set fields selected from the associated template that the stream monitors in logs. The order of the identifiers define how the value for these fields appear in the log lines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#dataset_fields Datastream#dataset_fields}
  */
  readonly datasetFields: number[];
  /**
  * Identifies the group that has access to the product and for which the stream configuration was created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#group_id Datastream#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#id Datastream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of email addresses where the system sends notifications about activations and deactivations of the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#notification_emails Datastream#notification_emails}
  */
  readonly notificationEmails?: string[];
  /**
  * Identifies the properties monitored in the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#properties Datastream#properties}
  */
  readonly properties: string[];
  /**
  * The name of the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#stream_name Datastream#stream_name}
  */
  readonly streamName: string;
  /**
  * azure_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#azure_connector Datastream#azure_connector}
  */
  readonly azureConnector?: DatastreamAzureConnector;
  /**
  * datadog_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#datadog_connector Datastream#datadog_connector}
  */
  readonly datadogConnector?: DatastreamDatadogConnector;
  /**
  * delivery_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#delivery_configuration Datastream#delivery_configuration}
  */
  readonly deliveryConfiguration: DatastreamDeliveryConfiguration;
  /**
  * elasticsearch_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#elasticsearch_connector Datastream#elasticsearch_connector}
  */
  readonly elasticsearchConnector?: DatastreamElasticsearchConnector;
  /**
  * gcs_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#gcs_connector Datastream#gcs_connector}
  */
  readonly gcsConnector?: DatastreamGcsConnector;
  /**
  * https_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#https_connector Datastream#https_connector}
  */
  readonly httpsConnector?: DatastreamHttpsConnector;
  /**
  * loggly_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#loggly_connector Datastream#loggly_connector}
  */
  readonly logglyConnector?: DatastreamLogglyConnector;
  /**
  * new_relic_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#new_relic_connector Datastream#new_relic_connector}
  */
  readonly newRelicConnector?: DatastreamNewRelicConnector;
  /**
  * oracle_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#oracle_connector Datastream#oracle_connector}
  */
  readonly oracleConnector?: DatastreamOracleConnector;
  /**
  * s3_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#s3_connector Datastream#s3_connector}
  */
  readonly s3Connector?: DatastreamS3Connector;
  /**
  * splunk_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#splunk_connector Datastream#splunk_connector}
  */
  readonly splunkConnector?: DatastreamSplunkConnector;
  /**
  * sumologic_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#sumologic_connector Datastream#sumologic_connector}
  */
  readonly sumologicConnector?: DatastreamSumologicConnector;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#timeouts Datastream#timeouts}
  */
  readonly timeouts?: DatastreamTimeouts;
}
export interface DatastreamAzureConnector {
  /**
  * Access keys associated with Azure Storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#access_key Datastream#access_key}
  */
  readonly accessKey: string;
  /**
  * Specifies the Azure Storage account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#account_name Datastream#account_name}
  */
  readonly accountName: string;
  /**
  * Specifies the Azure Storage container name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#container_name Datastream#container_name}
  */
  readonly containerName: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The path to the folder within Azure Storage container where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#path Datastream#path}
  */
  readonly path: string;
}

export function datastreamAzureConnectorToTerraform(struct?: DatastreamAzureConnectorOutputReference | DatastreamAzureConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function datastreamAzureConnectorToHclTerraform(struct?: DatastreamAzureConnectorOutputReference | DatastreamAzureConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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

export class DatastreamAzureConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamAzureConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamAzureConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accountName = undefined;
      this._containerName = undefined;
      this._displayName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accountName = value.accountName;
      this._containerName = value.containerName;
      this._displayName = value.displayName;
      this._path = value.path;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // compress_logs - computed: true, optional: false, required: false
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DatastreamDatadogConnector {
  /**
  * The API key associated with Datadog account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#auth_token Datastream#auth_token}
  */
  readonly authToken: string;
  /**
  * Indicates whether the logs should be compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#compress_logs Datastream#compress_logs}
  */
  readonly compressLogs?: boolean | cdktf.IResolvable;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The Datadog endpoint where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
  /**
  * The service of the Datadog connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#service Datastream#service}
  */
  readonly service?: string;
  /**
  * The source of the Datadog connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#source Datastream#source}
  */
  readonly source?: string;
  /**
  * The tags of the Datadog connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#tags Datastream#tags}
  */
  readonly tags?: string;
}

export function datastreamDatadogConnectorToTerraform(struct?: DatastreamDatadogConnectorOutputReference | DatastreamDatadogConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    compress_logs: cdktf.booleanToTerraform(struct!.compressLogs),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    service: cdktf.stringToTerraform(struct!.service),
    source: cdktf.stringToTerraform(struct!.source),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function datastreamDatadogConnectorToHclTerraform(struct?: DatastreamDatadogConnectorOutputReference | DatastreamDatadogConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress_logs: {
      value: cdktf.booleanToHclTerraform(struct!.compressLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamDatadogConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamDatadogConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._compressLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressLogs = this._compressLogs;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamDatadogConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
      this._compressLogs = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
      this._service = undefined;
      this._source = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
      this._compressLogs = value.compressLogs;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
      this._service = value.service;
      this._source = value.source;
      this._tags = value.tags;
    }
  }

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // compress_logs - computed: false, optional: true, required: false
  private _compressLogs?: boolean | cdktf.IResolvable; 
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
  }
  public set compressLogs(value: boolean | cdktf.IResolvable) {
    this._compressLogs = value;
  }
  public resetCompressLogs() {
    this._compressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressLogsInput() {
    return this._compressLogs;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
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
export interface DatastreamDeliveryConfigurationFrequency {
  /**
  * The time in seconds after which the system bundles log lines into a file and sends it to a destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#interval_in_secs Datastream#interval_in_secs}
  */
  readonly intervalInSecs: number;
}

export function datastreamDeliveryConfigurationFrequencyToTerraform(struct?: DatastreamDeliveryConfigurationFrequencyOutputReference | DatastreamDeliveryConfigurationFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_in_secs: cdktf.numberToTerraform(struct!.intervalInSecs),
  }
}


export function datastreamDeliveryConfigurationFrequencyToHclTerraform(struct?: DatastreamDeliveryConfigurationFrequencyOutputReference | DatastreamDeliveryConfigurationFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_in_secs: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamDeliveryConfigurationFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamDeliveryConfigurationFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSecs = this._intervalInSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamDeliveryConfigurationFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalInSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalInSecs = value.intervalInSecs;
    }
  }

  // interval_in_secs - computed: false, optional: false, required: true
  private _intervalInSecs?: number; 
  public get intervalInSecs() {
    return this.getNumberAttribute('interval_in_secs');
  }
  public set intervalInSecs(value: number) {
    this._intervalInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecsInput() {
    return this._intervalInSecs;
  }
}
export interface DatastreamDeliveryConfiguration {
  /**
  * A delimiter that you use to separate data set fields in log lines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#field_delimiter Datastream#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * The format in which logs will be received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#format Datastream#format}
  */
  readonly format: string;
  /**
  * The prefix of the log file that will be send to a destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#upload_file_prefix Datastream#upload_file_prefix}
  */
  readonly uploadFilePrefix?: string;
  /**
  * The suffix of the log file that will be send to a destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#upload_file_suffix Datastream#upload_file_suffix}
  */
  readonly uploadFileSuffix?: string;
  /**
  * frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#frequency Datastream#frequency}
  */
  readonly frequency: DatastreamDeliveryConfigurationFrequency;
}

export function datastreamDeliveryConfigurationToTerraform(struct?: DatastreamDeliveryConfigurationOutputReference | DatastreamDeliveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format: cdktf.stringToTerraform(struct!.format),
    upload_file_prefix: cdktf.stringToTerraform(struct!.uploadFilePrefix),
    upload_file_suffix: cdktf.stringToTerraform(struct!.uploadFileSuffix),
    frequency: datastreamDeliveryConfigurationFrequencyToTerraform(struct!.frequency),
  }
}


export function datastreamDeliveryConfigurationToHclTerraform(struct?: DatastreamDeliveryConfigurationOutputReference | DatastreamDeliveryConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_file_prefix: {
      value: cdktf.stringToHclTerraform(struct!.uploadFilePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_file_suffix: {
      value: cdktf.stringToHclTerraform(struct!.uploadFileSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: datastreamDeliveryConfigurationFrequencyToHclTerraform(struct!.frequency),
      isBlock: true,
      type: "set",
      storageClassType: "DatastreamDeliveryConfigurationFrequencyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamDeliveryConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamDeliveryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._uploadFilePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadFilePrefix = this._uploadFilePrefix;
    }
    if (this._uploadFileSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadFileSuffix = this._uploadFileSuffix;
    }
    if (this._frequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamDeliveryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldDelimiter = undefined;
      this._format = undefined;
      this._uploadFilePrefix = undefined;
      this._uploadFileSuffix = undefined;
      this._frequency.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldDelimiter = value.fieldDelimiter;
      this._format = value.format;
      this._uploadFilePrefix = value.uploadFilePrefix;
      this._uploadFileSuffix = value.uploadFileSuffix;
      this._frequency.internalValue = value.frequency;
    }
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // upload_file_prefix - computed: false, optional: true, required: false
  private _uploadFilePrefix?: string; 
  public get uploadFilePrefix() {
    return this.getStringAttribute('upload_file_prefix');
  }
  public set uploadFilePrefix(value: string) {
    this._uploadFilePrefix = value;
  }
  public resetUploadFilePrefix() {
    this._uploadFilePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFilePrefixInput() {
    return this._uploadFilePrefix;
  }

  // upload_file_suffix - computed: false, optional: true, required: false
  private _uploadFileSuffix?: string; 
  public get uploadFileSuffix() {
    return this.getStringAttribute('upload_file_suffix');
  }
  public set uploadFileSuffix(value: string) {
    this._uploadFileSuffix = value;
  }
  public resetUploadFileSuffix() {
    this._uploadFileSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFileSuffixInput() {
    return this._uploadFileSuffix;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency = new DatastreamDeliveryConfigurationFrequencyOutputReference(this, "frequency");
  public get frequency() {
    return this._frequency;
  }
  public putFrequency(value: DatastreamDeliveryConfigurationFrequency) {
    this._frequency.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency.internalValue;
  }
}
export interface DatastreamElasticsearchConnector {
  /**
  * The certification authority (CA) certificate used to verify the origin server's certificate. If the certificate is not signed by a well-known certification authority, enter the CA certificate in the PEM format for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#ca_cert Datastream#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The PEM-formatted digital certificate you want to authenticate requests to your destination with. If you want to use mutual authentication, you need to provide both the client certificate and the client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#client_cert Datastream#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The private key in the non-encrypted PKCS8 format you want to use to authenticate with the backend server. If you want to use mutual authentication, you need to provide both the client certificate and the client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#client_key Datastream#client_key}
  */
  readonly clientKey?: string;
  /**
  * The type of the resource passed in the request's custom header. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#content_type Datastream#content_type}
  */
  readonly contentType?: string;
  /**
  * A human-readable name for the request's custom header, containing only alphanumeric, dash, and underscore characters. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_name Datastream#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * The custom header's contents passed with the request that contains information about the client connection. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_value Datastream#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The Elasticsearch bulk endpoint URL in the https://hostname.elastic-cloud.com:9243/_bulk/ format. Set indexName in the appropriate field instead of providing it in the URL. You can use Akamaized property hostnames as endpoint URLs. See Stream logs to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
  /**
  * The index name of the Elastic cloud where you want to store log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#index_name Datastream#index_name}
  */
  readonly indexName: string;
  /**
  * The Elasticsearch basic access authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#password Datastream#password}
  */
  readonly password: string;
  /**
  * The hostname that verifies the server's certificate and matches the Subject Alternative Names (SANs) in the certificate. If not provided, DataStream fetches the hostname from the endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#tls_hostname Datastream#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * The Elasticsearch basic access authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#user_name Datastream#user_name}
  */
  readonly userName: string;
}

export function datastreamElasticsearchConnectorToTerraform(struct?: DatastreamElasticsearchConnectorOutputReference | DatastreamElasticsearchConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    password: cdktf.stringToTerraform(struct!.password),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function datastreamElasticsearchConnectorToHclTerraform(struct?: DatastreamElasticsearchConnectorOutputReference | DatastreamElasticsearchConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
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
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamElasticsearchConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamElasticsearchConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamElasticsearchConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._contentType = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
      this._indexName = undefined;
      this._password = undefined;
      this._tlsHostname = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._contentType = value.contentType;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
      this._indexName = value.indexName;
      this._password = value.password;
      this._tlsHostname = value.tlsHostname;
      this._userName = value.userName;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
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

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // m_tls - computed: true, optional: false, required: false
  public get mTls() {
    return this.getBooleanAttribute('m_tls');
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

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DatastreamGcsConnector {
  /**
  * The name of the storage bucket created in Google Cloud account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#bucket Datastream#bucket}
  */
  readonly bucket: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The path to the folder within Google Cloud bucket where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#path Datastream#path}
  */
  readonly path?: string;
  /**
  * The contents of the JSON private key generated and downloaded in Google Cloud Storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#private_key Datastream#private_key}
  */
  readonly privateKey: string;
  /**
  * The unique ID of Google Cloud project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#project_id Datastream#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the service account with the storage.object.create permission or Storage Object Creator role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#service_account_name Datastream#service_account_name}
  */
  readonly serviceAccountName: string;
}

export function datastreamGcsConnectorToTerraform(struct?: DatastreamGcsConnectorOutputReference | DatastreamGcsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    path: cdktf.stringToTerraform(struct!.path),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function datastreamGcsConnectorToHclTerraform(struct?: DatastreamGcsConnectorOutputReference | DatastreamGcsConnector): any {
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
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
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamGcsConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamGcsConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamGcsConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._displayName = undefined;
      this._path = undefined;
      this._privateKey = undefined;
      this._projectId = undefined;
      this._serviceAccountName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._displayName = value.displayName;
      this._path = value.path;
      this._privateKey = value.privateKey;
      this._projectId = value.projectId;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compress_logs - computed: true, optional: false, required: false
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
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

  // path - computed: false, optional: true, required: false
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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

  // service_account_name - computed: false, optional: false, required: true
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface DatastreamHttpsConnector {
  /**
  * Either NONE for no authentication, or BASIC for username and password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#authentication_type Datastream#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * The certification authority (CA) certificate used to verify the origin server's certificate. If the certificate is not signed by a well-known certification authority, enter the CA certificate in the PEM format for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#ca_cert Datastream#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The digital certificate in the PEM format you want to use to authenticate requests to your destination. If you want to use mutual authentication, you need to provide both the client certificate and the client key (in the PEM format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#client_cert Datastream#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The private key in the non-encrypted PKCS8 format you want to use to authenticate with the back-end server. If you want to use mutual authentication, you need to provide both the client certificate and the client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#client_key Datastream#client_key}
  */
  readonly clientKey?: string;
  /**
  * Indicates whether the logs should be compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#compress_logs Datastream#compress_logs}
  */
  readonly compressLogs?: boolean | cdktf.IResolvable;
  /**
  * Content type to pass in the log file header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#content_type Datastream#content_type}
  */
  readonly contentType?: string;
  /**
  * The name of custom header passed with the request to the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_name Datastream#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * The custom header's contents passed with the request to the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_value Datastream#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * URL where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
  /**
  * Password set for custom HTTPS endpoint for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#password Datastream#password}
  */
  readonly password?: string;
  /**
  * The hostname that verifies the server's certificate and matches the Subject Alternative Names (SANs) in the certificate. If not provided, DataStream fetches the hostname from the endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#tls_hostname Datastream#tls_hostname}
  */
  readonly tlsHostname?: string;
  /**
  * Username used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#user_name Datastream#user_name}
  */
  readonly userName?: string;
}

export function datastreamHttpsConnectorToTerraform(struct?: DatastreamHttpsConnectorOutputReference | DatastreamHttpsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    compress_logs: cdktf.booleanToTerraform(struct!.compressLogs),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function datastreamHttpsConnectorToHclTerraform(struct?: DatastreamHttpsConnectorOutputReference | DatastreamHttpsConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress_logs: {
      value: cdktf.booleanToHclTerraform(struct!.compressLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamHttpsConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamHttpsConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._compressLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressLogs = this._compressLogs;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamHttpsConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._compressLogs = undefined;
      this._contentType = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._tlsHostname = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._compressLogs = value.compressLogs;
      this._contentType = value.contentType;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._tlsHostname = value.tlsHostname;
      this._userName = value.userName;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // compress_logs - computed: false, optional: true, required: false
  private _compressLogs?: boolean | cdktf.IResolvable; 
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
  }
  public set compressLogs(value: boolean | cdktf.IResolvable) {
    this._compressLogs = value;
  }
  public resetCompressLogs() {
    this._compressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressLogsInput() {
    return this._compressLogs;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
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

  // m_tls - computed: true, optional: false, required: false
  public get mTls() {
    return this.getBooleanAttribute('m_tls');
  }

  // password - computed: false, optional: true, required: false
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

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DatastreamLogglyConnector {
  /**
  * The unique HTTP code for your Loggly bulk endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#auth_token Datastream#auth_token}
  */
  readonly authToken: string;
  /**
  * The type of the resource passed in the request's custom header. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#content_type Datastream#content_type}
  */
  readonly contentType?: string;
  /**
  * A human-readable name for the request's custom header, containing only alphanumeric, dash, and underscore characters. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_name Datastream#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * The custom header's contents passed with the request that contains information about the client connection. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_value Datastream#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The Loggly bulk endpoint URL in the https://hostname.loggly.com/bulk/ format. Set the endpoint code in the authToken field instead of providing it in the URL. You can use Akamaized property hostnames as endpoint URLs. See Stream logs to Loggly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
  /**
  * The tags you can use to segment and filter log events in Loggly. See Tags in the Loggly documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#tags Datastream#tags}
  */
  readonly tags?: string;
}

export function datastreamLogglyConnectorToTerraform(struct?: DatastreamLogglyConnectorOutputReference | DatastreamLogglyConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function datastreamLogglyConnectorToHclTerraform(struct?: DatastreamLogglyConnectorOutputReference | DatastreamLogglyConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamLogglyConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamLogglyConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamLogglyConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
      this._contentType = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
      this._contentType = value.contentType;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
      this._tags = value.tags;
    }
  }

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
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
export interface DatastreamNewRelicConnector {
  /**
  * Your Log API token for your account in New Relic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#auth_token Datastream#auth_token}
  */
  readonly authToken: string;
  /**
  * The type of the resource passed in the request's custom header. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#content_type Datastream#content_type}
  */
  readonly contentType?: string;
  /**
  * A human-readable name for the request's custom header, containing only alphanumeric, dash, and underscore characters. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_name Datastream#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * The custom header's contents passed with the request that contains information about the client connection. For details, see Additional options in the DataStream user guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_value Datastream#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * A New Relic endpoint URL you want to send your logs to. The endpoint URL should follow the https://<newrelic.com>/log/v1/ format format. See Introduction to the Log API https://docs.newrelic.com/docs/logs/log-api/introduction-log-api/ if you want to retrieve your New Relic endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
}

export function datastreamNewRelicConnectorToTerraform(struct?: DatastreamNewRelicConnectorOutputReference | DatastreamNewRelicConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function datastreamNewRelicConnectorToHclTerraform(struct?: DatastreamNewRelicConnectorOutputReference | DatastreamNewRelicConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamNewRelicConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamNewRelicConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamNewRelicConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authToken = undefined;
      this._contentType = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authToken = value.authToken;
      this._contentType = value.contentType;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
    }
  }

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
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
}
export interface DatastreamOracleConnector {
  /**
  * The access key identifier used to authenticate requests to the Oracle Cloud account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#access_key Datastream#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of the Oracle Cloud Storage bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#bucket Datastream#bucket}
  */
  readonly bucket: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The namespace of Oracle Cloud Storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#namespace Datastream#namespace}
  */
  readonly namespace: string;
  /**
  * The path to the folder within your Oracle Cloud Storage bucket where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#path Datastream#path}
  */
  readonly path: string;
  /**
  * The Oracle Cloud Storage region where bucket resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#region Datastream#region}
  */
  readonly region: string;
  /**
  * The secret access key identifier used to authenticate requests to the Oracle Cloud account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#secret_access_key Datastream#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function datastreamOracleConnectorToTerraform(struct?: DatastreamOracleConnectorOutputReference | DatastreamOracleConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function datastreamOracleConnectorToHclTerraform(struct?: DatastreamOracleConnectorOutputReference | DatastreamOracleConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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

export class DatastreamOracleConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamOracleConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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

  public set internalValue(value: DatastreamOracleConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._displayName = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._displayName = value.displayName;
      this._namespace = value.namespace;
      this._path = value.path;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compress_logs - computed: true, optional: false, required: false
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface DatastreamS3Connector {
  /**
  * The access key identifier used to authenticate requests to the Amazon S3 account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#access_key Datastream#access_key}
  */
  readonly accessKey: string;
  /**
  * The name of the Amazon S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#bucket Datastream#bucket}
  */
  readonly bucket: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The path to the folder within Amazon S3 bucket where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#path Datastream#path}
  */
  readonly path: string;
  /**
  * The AWS region where Amazon S3 bucket resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#region Datastream#region}
  */
  readonly region: string;
  /**
  * The secret access key identifier used to authenticate requests to the Amazon S3 account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#secret_access_key Datastream#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function datastreamS3ConnectorToTerraform(struct?: DatastreamS3ConnectorOutputReference | DatastreamS3Connector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function datastreamS3ConnectorToHclTerraform(struct?: DatastreamS3ConnectorOutputReference | DatastreamS3Connector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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

export class DatastreamS3ConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamS3Connector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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

  public set internalValue(value: DatastreamS3Connector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._displayName = undefined;
      this._path = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._displayName = value.displayName;
      this._path = value.path;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // compress_logs - computed: true, optional: false, required: false
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface DatastreamSplunkConnector {
  /**
  * The certification authority (CA) certificate used to verify the origin server's certificate. If the certificate is not signed by a well-known certification authority, enter the CA certificate in the PEM format for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#ca_cert Datastream#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The digital certificate in the PEM format you want to use to authenticate requests to your destination. If you want to use mutual authentication, you need to provide both the client certificate and the client key (in the PEM format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#client_cert Datastream#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The private key in the non-encrypted PKCS8 format you want to use to authenticate with the back-end server. If you want to use mutual authentication, you need to provide both the client certificate and the client key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#client_key Datastream#client_key}
  */
  readonly clientKey?: string;
  /**
  * Indicates whether the logs should be compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#compress_logs Datastream#compress_logs}
  */
  readonly compressLogs?: boolean | cdktf.IResolvable;
  /**
  * The name of custom header passed with the request to the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_name Datastream#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * The custom header's contents passed with the request to the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_value Datastream#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The raw event Splunk URL where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
  /**
  * The Event Collector token associated with Splunk account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#event_collector_token Datastream#event_collector_token}
  */
  readonly eventCollectorToken: string;
  /**
  * The hostname that verifies the server's certificate and matches the Subject Alternative Names (SANs) in the certificate. If not provided, DataStream fetches the hostname from the endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#tls_hostname Datastream#tls_hostname}
  */
  readonly tlsHostname?: string;
}

export function datastreamSplunkConnectorToTerraform(struct?: DatastreamSplunkConnectorOutputReference | DatastreamSplunkConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    compress_logs: cdktf.booleanToTerraform(struct!.compressLogs),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    event_collector_token: cdktf.stringToTerraform(struct!.eventCollectorToken),
    tls_hostname: cdktf.stringToTerraform(struct!.tlsHostname),
  }
}


export function datastreamSplunkConnectorToHclTerraform(struct?: DatastreamSplunkConnectorOutputReference | DatastreamSplunkConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress_logs: {
      value: cdktf.booleanToHclTerraform(struct!.compressLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    event_collector_token: {
      value: cdktf.stringToHclTerraform(struct!.eventCollectorToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hostname: {
      value: cdktf.stringToHclTerraform(struct!.tlsHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamSplunkConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamSplunkConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._compressLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressLogs = this._compressLogs;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._eventCollectorToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCollectorToken = this._eventCollectorToken;
    }
    if (this._tlsHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHostname = this._tlsHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamSplunkConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._compressLogs = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
      this._eventCollectorToken = undefined;
      this._tlsHostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._compressLogs = value.compressLogs;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
      this._eventCollectorToken = value.eventCollectorToken;
      this._tlsHostname = value.tlsHostname;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // compress_logs - computed: false, optional: true, required: false
  private _compressLogs?: boolean | cdktf.IResolvable; 
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
  }
  public set compressLogs(value: boolean | cdktf.IResolvable) {
    this._compressLogs = value;
  }
  public resetCompressLogs() {
    this._compressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressLogsInput() {
    return this._compressLogs;
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
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

  // event_collector_token - computed: false, optional: false, required: true
  private _eventCollectorToken?: string; 
  public get eventCollectorToken() {
    return this.getStringAttribute('event_collector_token');
  }
  public set eventCollectorToken(value: string) {
    this._eventCollectorToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCollectorTokenInput() {
    return this._eventCollectorToken;
  }

  // m_tls - computed: true, optional: false, required: false
  public get mTls() {
    return this.getBooleanAttribute('m_tls');
  }

  // tls_hostname - computed: false, optional: true, required: false
  private _tlsHostname?: string; 
  public get tlsHostname() {
    return this.getStringAttribute('tls_hostname');
  }
  public set tlsHostname(value: string) {
    this._tlsHostname = value;
  }
  public resetTlsHostname() {
    this._tlsHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostnameInput() {
    return this._tlsHostname;
  }
}
export interface DatastreamSumologicConnector {
  /**
  * The unique HTTP collector code of Sumo Logic endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#collector_code Datastream#collector_code}
  */
  readonly collectorCode: string;
  /**
  * Indicates whether the logs should be compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#compress_logs Datastream#compress_logs}
  */
  readonly compressLogs?: boolean | cdktf.IResolvable;
  /**
  * Content type to pass in the log file header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#content_type Datastream#content_type}
  */
  readonly contentType?: string;
  /**
  * The name of custom header passed with the request to the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_name Datastream#custom_header_name}
  */
  readonly customHeaderName?: string;
  /**
  * The custom header's contents passed with the request to the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#custom_header_value Datastream#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#display_name Datastream#display_name}
  */
  readonly displayName: string;
  /**
  * The Sumo Logic collection endpoint where logs will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#endpoint Datastream#endpoint}
  */
  readonly endpoint: string;
}

export function datastreamSumologicConnectorToTerraform(struct?: DatastreamSumologicConnectorOutputReference | DatastreamSumologicConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_code: cdktf.stringToTerraform(struct!.collectorCode),
    compress_logs: cdktf.booleanToTerraform(struct!.compressLogs),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    custom_header_name: cdktf.stringToTerraform(struct!.customHeaderName),
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function datastreamSumologicConnectorToHclTerraform(struct?: DatastreamSumologicConnectorOutputReference | DatastreamSumologicConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_code: {
      value: cdktf.stringToHclTerraform(struct!.collectorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress_logs: {
      value: cdktf.booleanToHclTerraform(struct!.compressLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_name: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamSumologicConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamSumologicConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorCode = this._collectorCode;
    }
    if (this._compressLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressLogs = this._compressLogs;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._customHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderName = this._customHeaderName;
    }
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamSumologicConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectorCode = undefined;
      this._compressLogs = undefined;
      this._contentType = undefined;
      this._customHeaderName = undefined;
      this._customHeaderValue = undefined;
      this._displayName = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectorCode = value.collectorCode;
      this._compressLogs = value.compressLogs;
      this._contentType = value.contentType;
      this._customHeaderName = value.customHeaderName;
      this._customHeaderValue = value.customHeaderValue;
      this._displayName = value.displayName;
      this._endpoint = value.endpoint;
    }
  }

  // collector_code - computed: false, optional: false, required: true
  private _collectorCode?: string; 
  public get collectorCode() {
    return this.getStringAttribute('collector_code');
  }
  public set collectorCode(value: string) {
    this._collectorCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorCodeInput() {
    return this._collectorCode;
  }

  // compress_logs - computed: false, optional: true, required: false
  private _compressLogs?: boolean | cdktf.IResolvable; 
  public get compressLogs() {
    return this.getBooleanAttribute('compress_logs');
  }
  public set compressLogs(value: boolean | cdktf.IResolvable) {
    this._compressLogs = value;
  }
  public resetCompressLogs() {
    this._compressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressLogsInput() {
    return this._compressLogs;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // custom_header_name - computed: false, optional: true, required: false
  private _customHeaderName?: string; 
  public get customHeaderName() {
    return this.getStringAttribute('custom_header_name');
  }
  public set customHeaderName(value: string) {
    this._customHeaderName = value;
  }
  public resetCustomHeaderName() {
    this._customHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderNameInput() {
    return this._customHeaderName;
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
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
}
export interface DatastreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#default Datastream#default}
  */
  readonly default?: string;
}

export function datastreamTimeoutsToTerraform(struct?: DatastreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function datastreamTimeoutsToHclTerraform(struct?: DatastreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatastreamTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream akamai_datastream}
*/
export class Datastream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_datastream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datastream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datastream to import
  * @param importFromId The id of the existing Datastream that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datastream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_datastream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/datastream akamai_datastream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastreamConfig
  */
  public constructor(scope: Construct, id: string, config: DatastreamConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_datastream',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._collectMidgress = config.collectMidgress;
    this._contractId = config.contractId;
    this._datasetFields = config.datasetFields;
    this._groupId = config.groupId;
    this._id = config.id;
    this._notificationEmails = config.notificationEmails;
    this._properties = config.properties;
    this._streamName = config.streamName;
    this._azureConnector.internalValue = config.azureConnector;
    this._datadogConnector.internalValue = config.datadogConnector;
    this._deliveryConfiguration.internalValue = config.deliveryConfiguration;
    this._elasticsearchConnector.internalValue = config.elasticsearchConnector;
    this._gcsConnector.internalValue = config.gcsConnector;
    this._httpsConnector.internalValue = config.httpsConnector;
    this._logglyConnector.internalValue = config.logglyConnector;
    this._newRelicConnector.internalValue = config.newRelicConnector;
    this._oracleConnector.internalValue = config.oracleConnector;
    this._s3Connector.internalValue = config.s3Connector;
    this._splunkConnector.internalValue = config.splunkConnector;
    this._sumologicConnector.internalValue = config.sumologicConnector;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // collect_midgress - computed: false, optional: true, required: false
  private _collectMidgress?: boolean | cdktf.IResolvable; 
  public get collectMidgress() {
    return this.getBooleanAttribute('collect_midgress');
  }
  public set collectMidgress(value: boolean | cdktf.IResolvable) {
    this._collectMidgress = value;
  }
  public resetCollectMidgress() {
    this._collectMidgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectMidgressInput() {
    return this._collectMidgress;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // dataset_fields - computed: false, optional: false, required: true
  private _datasetFields?: number[]; 
  public get datasetFields() {
    return this.getNumberListAttribute('dataset_fields');
  }
  public set datasetFields(value: number[]) {
    this._datasetFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetFieldsInput() {
    return this._datasetFields;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // notification_emails - computed: false, optional: true, required: false
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return this.getListAttribute('notification_emails');
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // papi_json - computed: true, optional: false, required: false
  public get papiJson() {
    return this.getStringAttribute('papi_json');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // stream_version - computed: true, optional: false, required: false
  public get streamVersion() {
    return this.getNumberAttribute('stream_version');
  }

  // azure_connector - computed: false, optional: true, required: false
  private _azureConnector = new DatastreamAzureConnectorOutputReference(this, "azure_connector");
  public get azureConnector() {
    return this._azureConnector;
  }
  public putAzureConnector(value: DatastreamAzureConnector) {
    this._azureConnector.internalValue = value;
  }
  public resetAzureConnector() {
    this._azureConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConnectorInput() {
    return this._azureConnector.internalValue;
  }

  // datadog_connector - computed: false, optional: true, required: false
  private _datadogConnector = new DatastreamDatadogConnectorOutputReference(this, "datadog_connector");
  public get datadogConnector() {
    return this._datadogConnector;
  }
  public putDatadogConnector(value: DatastreamDatadogConnector) {
    this._datadogConnector.internalValue = value;
  }
  public resetDatadogConnector() {
    this._datadogConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogConnectorInput() {
    return this._datadogConnector.internalValue;
  }

  // delivery_configuration - computed: false, optional: false, required: true
  private _deliveryConfiguration = new DatastreamDeliveryConfigurationOutputReference(this, "delivery_configuration");
  public get deliveryConfiguration() {
    return this._deliveryConfiguration;
  }
  public putDeliveryConfiguration(value: DatastreamDeliveryConfiguration) {
    this._deliveryConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryConfigurationInput() {
    return this._deliveryConfiguration.internalValue;
  }

  // elasticsearch_connector - computed: false, optional: true, required: false
  private _elasticsearchConnector = new DatastreamElasticsearchConnectorOutputReference(this, "elasticsearch_connector");
  public get elasticsearchConnector() {
    return this._elasticsearchConnector;
  }
  public putElasticsearchConnector(value: DatastreamElasticsearchConnector) {
    this._elasticsearchConnector.internalValue = value;
  }
  public resetElasticsearchConnector() {
    this._elasticsearchConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectorInput() {
    return this._elasticsearchConnector.internalValue;
  }

  // gcs_connector - computed: false, optional: true, required: false
  private _gcsConnector = new DatastreamGcsConnectorOutputReference(this, "gcs_connector");
  public get gcsConnector() {
    return this._gcsConnector;
  }
  public putGcsConnector(value: DatastreamGcsConnector) {
    this._gcsConnector.internalValue = value;
  }
  public resetGcsConnector() {
    this._gcsConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsConnectorInput() {
    return this._gcsConnector.internalValue;
  }

  // https_connector - computed: false, optional: true, required: false
  private _httpsConnector = new DatastreamHttpsConnectorOutputReference(this, "https_connector");
  public get httpsConnector() {
    return this._httpsConnector;
  }
  public putHttpsConnector(value: DatastreamHttpsConnector) {
    this._httpsConnector.internalValue = value;
  }
  public resetHttpsConnector() {
    this._httpsConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsConnectorInput() {
    return this._httpsConnector.internalValue;
  }

  // loggly_connector - computed: false, optional: true, required: false
  private _logglyConnector = new DatastreamLogglyConnectorOutputReference(this, "loggly_connector");
  public get logglyConnector() {
    return this._logglyConnector;
  }
  public putLogglyConnector(value: DatastreamLogglyConnector) {
    this._logglyConnector.internalValue = value;
  }
  public resetLogglyConnector() {
    this._logglyConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logglyConnectorInput() {
    return this._logglyConnector.internalValue;
  }

  // new_relic_connector - computed: false, optional: true, required: false
  private _newRelicConnector = new DatastreamNewRelicConnectorOutputReference(this, "new_relic_connector");
  public get newRelicConnector() {
    return this._newRelicConnector;
  }
  public putNewRelicConnector(value: DatastreamNewRelicConnector) {
    this._newRelicConnector.internalValue = value;
  }
  public resetNewRelicConnector() {
    this._newRelicConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicConnectorInput() {
    return this._newRelicConnector.internalValue;
  }

  // oracle_connector - computed: false, optional: true, required: false
  private _oracleConnector = new DatastreamOracleConnectorOutputReference(this, "oracle_connector");
  public get oracleConnector() {
    return this._oracleConnector;
  }
  public putOracleConnector(value: DatastreamOracleConnector) {
    this._oracleConnector.internalValue = value;
  }
  public resetOracleConnector() {
    this._oracleConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConnectorInput() {
    return this._oracleConnector.internalValue;
  }

  // s3_connector - computed: false, optional: true, required: false
  private _s3Connector = new DatastreamS3ConnectorOutputReference(this, "s3_connector");
  public get s3Connector() {
    return this._s3Connector;
  }
  public putS3Connector(value: DatastreamS3Connector) {
    this._s3Connector.internalValue = value;
  }
  public resetS3Connector() {
    this._s3Connector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConnectorInput() {
    return this._s3Connector.internalValue;
  }

  // splunk_connector - computed: false, optional: true, required: false
  private _splunkConnector = new DatastreamSplunkConnectorOutputReference(this, "splunk_connector");
  public get splunkConnector() {
    return this._splunkConnector;
  }
  public putSplunkConnector(value: DatastreamSplunkConnector) {
    this._splunkConnector.internalValue = value;
  }
  public resetSplunkConnector() {
    this._splunkConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkConnectorInput() {
    return this._splunkConnector.internalValue;
  }

  // sumologic_connector - computed: false, optional: true, required: false
  private _sumologicConnector = new DatastreamSumologicConnectorOutputReference(this, "sumologic_connector");
  public get sumologicConnector() {
    return this._sumologicConnector;
  }
  public putSumologicConnector(value: DatastreamSumologicConnector) {
    this._sumologicConnector.internalValue = value;
  }
  public resetSumologicConnector() {
    this._sumologicConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicConnectorInput() {
    return this._sumologicConnector.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatastreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatastreamTimeouts) {
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
      active: cdktf.booleanToTerraform(this._active),
      collect_midgress: cdktf.booleanToTerraform(this._collectMidgress),
      contract_id: cdktf.stringToTerraform(this._contractId),
      dataset_fields: cdktf.listMapper(cdktf.numberToTerraform, false)(this._datasetFields),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationEmails),
      properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._properties),
      stream_name: cdktf.stringToTerraform(this._streamName),
      azure_connector: datastreamAzureConnectorToTerraform(this._azureConnector.internalValue),
      datadog_connector: datastreamDatadogConnectorToTerraform(this._datadogConnector.internalValue),
      delivery_configuration: datastreamDeliveryConfigurationToTerraform(this._deliveryConfiguration.internalValue),
      elasticsearch_connector: datastreamElasticsearchConnectorToTerraform(this._elasticsearchConnector.internalValue),
      gcs_connector: datastreamGcsConnectorToTerraform(this._gcsConnector.internalValue),
      https_connector: datastreamHttpsConnectorToTerraform(this._httpsConnector.internalValue),
      loggly_connector: datastreamLogglyConnectorToTerraform(this._logglyConnector.internalValue),
      new_relic_connector: datastreamNewRelicConnectorToTerraform(this._newRelicConnector.internalValue),
      oracle_connector: datastreamOracleConnectorToTerraform(this._oracleConnector.internalValue),
      s3_connector: datastreamS3ConnectorToTerraform(this._s3Connector.internalValue),
      splunk_connector: datastreamSplunkConnectorToTerraform(this._splunkConnector.internalValue),
      sumologic_connector: datastreamSumologicConnectorToTerraform(this._sumologicConnector.internalValue),
      timeouts: datastreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collect_midgress: {
        value: cdktf.booleanToHclTerraform(this._collectMidgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_fields: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._datasetFields),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      notification_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._properties),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_connector: {
        value: datastreamAzureConnectorToHclTerraform(this._azureConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamAzureConnectorList",
      },
      datadog_connector: {
        value: datastreamDatadogConnectorToHclTerraform(this._datadogConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamDatadogConnectorList",
      },
      delivery_configuration: {
        value: datastreamDeliveryConfigurationToHclTerraform(this._deliveryConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamDeliveryConfigurationList",
      },
      elasticsearch_connector: {
        value: datastreamElasticsearchConnectorToHclTerraform(this._elasticsearchConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamElasticsearchConnectorList",
      },
      gcs_connector: {
        value: datastreamGcsConnectorToHclTerraform(this._gcsConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamGcsConnectorList",
      },
      https_connector: {
        value: datastreamHttpsConnectorToHclTerraform(this._httpsConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamHttpsConnectorList",
      },
      loggly_connector: {
        value: datastreamLogglyConnectorToHclTerraform(this._logglyConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamLogglyConnectorList",
      },
      new_relic_connector: {
        value: datastreamNewRelicConnectorToHclTerraform(this._newRelicConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamNewRelicConnectorList",
      },
      oracle_connector: {
        value: datastreamOracleConnectorToHclTerraform(this._oracleConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamOracleConnectorList",
      },
      s3_connector: {
        value: datastreamS3ConnectorToHclTerraform(this._s3Connector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamS3ConnectorList",
      },
      splunk_connector: {
        value: datastreamSplunkConnectorToHclTerraform(this._splunkConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamSplunkConnectorList",
      },
      sumologic_connector: {
        value: datastreamSumologicConnectorToHclTerraform(this._sumologicConnector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatastreamSumologicConnectorList",
      },
      timeouts: {
        value: datastreamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatastreamTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
