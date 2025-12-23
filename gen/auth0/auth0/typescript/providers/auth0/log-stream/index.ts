// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only logs events matching these filters will be delivered by the stream. If omitted or empty, all events will be delivered. Filters available: `auth.ancillary.fail`, `auth.ancillary.success`, `auth.login.fail`, `auth.login.notification`, `auth.login.success`, `auth.logout.fail`, `auth.logout.success`, `auth.signup.fail`, `auth.signup.success`, `auth.silent_auth.fail`, `auth.silent_auth.success`, `auth.token_exchange.fail`, `auth.token_exchange.success`, `management.fail`, `management.success`, `system.notification`, `user.fail`, `user.notification`, `user.success`, `other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#filters LogStream#filters}
  */
  readonly filters?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#id LogStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set True for priority log streams, False for non-priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#is_priority LogStream#is_priority}
  */
  readonly isPriority?: boolean | cdktf.IResolvable;
  /**
  * Name of the log stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#name LogStream#name}
  */
  readonly name: string;
  /**
  * The optional datetime (ISO 8601) to start streaming logs from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#start_from LogStream#start_from}
  */
  readonly startFrom?: string;
  /**
  * The current status of the log stream. Options are "active", "paused", "suspended".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#status LogStream#status}
  */
  readonly status?: string;
  /**
  * Type of the log stream, which indicates the sink provider. Options include: `eventbridge`, `eventgrid`, `http`, `datadog`, `splunk`, `sumo`, `mixpanel`, `segment`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#type LogStream#type}
  */
  readonly type: string;
  /**
  * pii_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#pii_config LogStream#pii_config}
  */
  readonly piiConfig?: LogStreamPiiConfig;
  /**
  * sink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#sink LogStream#sink}
  */
  readonly sink: LogStreamSink;
}
export interface LogStreamPiiConfig {
  /**
  * The algorithm to use for PII handling. Currently, only `xxhash` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#algorithm LogStream#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#log_fields LogStream#log_fields}
  */
  readonly logFields: string[];
  /**
  * The method to use for PII handling. Options are `hash` or `mask`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#method LogStream#method}
  */
  readonly method?: string;
}

export function logStreamPiiConfigToTerraform(struct?: LogStreamPiiConfigOutputReference | LogStreamPiiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    log_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logFields),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function logStreamPiiConfigToHclTerraform(struct?: LogStreamPiiConfigOutputReference | LogStreamPiiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamPiiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogStreamPiiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._logFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFields = this._logFields;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamPiiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._logFields = undefined;
      this._method = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._logFields = value.logFields;
      this._method = value.method;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // log_fields - computed: false, optional: false, required: true
  private _logFields?: string[]; 
  public get logFields() {
    return this.getListAttribute('log_fields');
  }
  public set logFields(value: string[]) {
    this._logFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldsInput() {
    return this._logFields;
  }

  // method - computed: false, optional: true, required: false
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
}
export interface LogStreamSink {
  /**
  * The AWS Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#aws_account_id LogStream#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Name of the Partner Event Source to be used with AWS. Generally generated by Auth0 and passed to AWS, so this should be an output attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#aws_partner_event_source LogStream#aws_partner_event_source}
  */
  readonly awsPartnerEventSource?: string;
  /**
  * The region in which the EventBridge event source will be created. Possible values: `ap-east-1`, `ap-northeast-1`, `ap-northeast-2`, `ap-northeast-3`, `ap-south-1`, `ap-southeast-1`, `ap-southeast-2`, `ca-central-1`, `cn-north-1`, `cn-northwest-1`, `eu-central-1`, `eu-north-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `me-south-1`, `sa-east-1`, `us-gov-east-1`, `us-gov-west-1`, `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#aws_region LogStream#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Name of the Partner Topic to be used with Azure. Generally should not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#azure_partner_topic LogStream#azure_partner_topic}
  */
  readonly azurePartnerTopic?: string;
  /**
  * The Azure region code. Possible values: `australiacentral`, `australiaeast`, `australiasoutheast`, `brazilsouth`, `canadacentral`, `canadaeast`, `centralindia`, `centralus`, `eastasia`, `eastus`, `eastus2`, `francecentral`, `germanywestcentral`, `japaneast`, `japanwest`, `koreacentral`, `koreasouth`, `northcentralus`, `northeurope`, `norwayeast`, `southafricanorth`, `southcentralus`, `southeastasia`, `southindia`, `switzerlandnorth`, `uaenorth`, `uksouth`, `ukwest`, `westcentralus`, `westeurope`, `westindia`, `westus`, `westus2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#azure_region LogStream#azure_region}
  */
  readonly azureRegion?: string;
  /**
  * The Azure EventGrid resource group which allows you to manage all Azure assets within one subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#azure_resource_group LogStream#azure_resource_group}
  */
  readonly azureResourceGroup?: string;
  /**
  * The unique alphanumeric string that identifies your Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#azure_subscription_id LogStream#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * The Datadog API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#datadog_api_key LogStream#datadog_api_key}
  */
  readonly datadogApiKey?: string;
  /**
  * The Datadog region. Possible values: `us`, `eu`, `us3`, `us5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#datadog_region LogStream#datadog_region}
  */
  readonly datadogRegion?: string;
  /**
  * Sent in the HTTP "Authorization" header with each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#http_authorization LogStream#http_authorization}
  */
  readonly httpAuthorization?: string;
  /**
  * The format of data sent over HTTP. Options are "JSONLINES", "JSONARRAY" or "JSONOBJECT"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#http_content_format LogStream#http_content_format}
  */
  readonly httpContentFormat?: string;
  /**
  * The "Content-Type" header to send over HTTP. Common value is "application/json".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#http_content_type LogStream#http_content_type}
  */
  readonly httpContentType?: string;
  /**
  * Additional HTTP headers to be included as part of the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#http_custom_headers LogStream#http_custom_headers}
  */
  readonly httpCustomHeaders?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The HTTP endpoint to send streaming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#http_endpoint LogStream#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * The Mixpanel project ID, found on the Project Settings page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#mixpanel_project_id LogStream#mixpanel_project_id}
  */
  readonly mixpanelProjectId?: string;
  /**
  * The Mixpanel region. Options are ["us", "eu"]. EU is required for customers with EU data residency requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#mixpanel_region LogStream#mixpanel_region}
  */
  readonly mixpanelRegion?: string;
  /**
  * The Mixpanel Service Account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#mixpanel_service_account_password LogStream#mixpanel_service_account_password}
  */
  readonly mixpanelServiceAccountPassword?: string;
  /**
  * The Mixpanel Service Account username. Services Accounts can be created in the Project Settings page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#mixpanel_service_account_username LogStream#mixpanel_service_account_username}
  */
  readonly mixpanelServiceAccountUsername?: string;
  /**
  * The [Segment Write Key](https://segment.com/docs/connections/find-writekey/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#segment_write_key LogStream#segment_write_key}
  */
  readonly segmentWriteKey?: string;
  /**
  * The Splunk domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#splunk_domain LogStream#splunk_domain}
  */
  readonly splunkDomain?: string;
  /**
  * The Splunk port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#splunk_port LogStream#splunk_port}
  */
  readonly splunkPort?: string;
  /**
  * This toggle should be turned off when using self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#splunk_secure LogStream#splunk_secure}
  */
  readonly splunkSecure?: boolean | cdktf.IResolvable;
  /**
  * The Splunk access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#splunk_token LogStream#splunk_token}
  */
  readonly splunkToken?: string;
  /**
  * Generated URL for your defined HTTP source in Sumo Logic for collecting streaming data from Auth0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#sumo_source_address LogStream#sumo_source_address}
  */
  readonly sumoSourceAddress?: string;
}

export function logStreamSinkToTerraform(struct?: LogStreamSinkOutputReference | LogStreamSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    aws_partner_event_source: cdktf.stringToTerraform(struct!.awsPartnerEventSource),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    azure_partner_topic: cdktf.stringToTerraform(struct!.azurePartnerTopic),
    azure_region: cdktf.stringToTerraform(struct!.azureRegion),
    azure_resource_group: cdktf.stringToTerraform(struct!.azureResourceGroup),
    azure_subscription_id: cdktf.stringToTerraform(struct!.azureSubscriptionId),
    datadog_api_key: cdktf.stringToTerraform(struct!.datadogApiKey),
    datadog_region: cdktf.stringToTerraform(struct!.datadogRegion),
    http_authorization: cdktf.stringToTerraform(struct!.httpAuthorization),
    http_content_format: cdktf.stringToTerraform(struct!.httpContentFormat),
    http_content_type: cdktf.stringToTerraform(struct!.httpContentType),
    http_custom_headers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.httpCustomHeaders),
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    mixpanel_project_id: cdktf.stringToTerraform(struct!.mixpanelProjectId),
    mixpanel_region: cdktf.stringToTerraform(struct!.mixpanelRegion),
    mixpanel_service_account_password: cdktf.stringToTerraform(struct!.mixpanelServiceAccountPassword),
    mixpanel_service_account_username: cdktf.stringToTerraform(struct!.mixpanelServiceAccountUsername),
    segment_write_key: cdktf.stringToTerraform(struct!.segmentWriteKey),
    splunk_domain: cdktf.stringToTerraform(struct!.splunkDomain),
    splunk_port: cdktf.stringToTerraform(struct!.splunkPort),
    splunk_secure: cdktf.booleanToTerraform(struct!.splunkSecure),
    splunk_token: cdktf.stringToTerraform(struct!.splunkToken),
    sumo_source_address: cdktf.stringToTerraform(struct!.sumoSourceAddress),
  }
}


export function logStreamSinkToHclTerraform(struct?: LogStreamSinkOutputReference | LogStreamSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_partner_event_source: {
      value: cdktf.stringToHclTerraform(struct!.awsPartnerEventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_partner_topic: {
      value: cdktf.stringToHclTerraform(struct!.azurePartnerTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_region: {
      value: cdktf.stringToHclTerraform(struct!.azureRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.azureResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.azureSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_api_key: {
      value: cdktf.stringToHclTerraform(struct!.datadogApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog_region: {
      value: cdktf.stringToHclTerraform(struct!.datadogRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_content_format: {
      value: cdktf.stringToHclTerraform(struct!.httpContentFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_content_type: {
      value: cdktf.stringToHclTerraform(struct!.httpContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_custom_headers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.httpCustomHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    http_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mixpanel_project_id: {
      value: cdktf.stringToHclTerraform(struct!.mixpanelProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mixpanel_region: {
      value: cdktf.stringToHclTerraform(struct!.mixpanelRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mixpanel_service_account_password: {
      value: cdktf.stringToHclTerraform(struct!.mixpanelServiceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mixpanel_service_account_username: {
      value: cdktf.stringToHclTerraform(struct!.mixpanelServiceAccountUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_write_key: {
      value: cdktf.stringToHclTerraform(struct!.segmentWriteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_domain: {
      value: cdktf.stringToHclTerraform(struct!.splunkDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_port: {
      value: cdktf.stringToHclTerraform(struct!.splunkPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_secure: {
      value: cdktf.booleanToHclTerraform(struct!.splunkSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    splunk_token: {
      value: cdktf.stringToHclTerraform(struct!.splunkToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sumo_source_address: {
      value: cdktf.stringToHclTerraform(struct!.sumoSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStreamSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogStreamSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._awsPartnerEventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPartnerEventSource = this._awsPartnerEventSource;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._azurePartnerTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePartnerTopic = this._azurePartnerTopic;
    }
    if (this._azureRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRegion = this._azureRegion;
    }
    if (this._azureResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureResourceGroup = this._azureResourceGroup;
    }
    if (this._azureSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSubscriptionId = this._azureSubscriptionId;
    }
    if (this._datadogApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey;
    }
    if (this._datadogRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogRegion = this._datadogRegion;
    }
    if (this._httpAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAuthorization = this._httpAuthorization;
    }
    if (this._httpContentFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpContentFormat = this._httpContentFormat;
    }
    if (this._httpContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpContentType = this._httpContentType;
    }
    if (this._httpCustomHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCustomHeaders = this._httpCustomHeaders;
    }
    if (this._httpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint;
    }
    if (this._mixpanelProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixpanelProjectId = this._mixpanelProjectId;
    }
    if (this._mixpanelRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixpanelRegion = this._mixpanelRegion;
    }
    if (this._mixpanelServiceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixpanelServiceAccountPassword = this._mixpanelServiceAccountPassword;
    }
    if (this._mixpanelServiceAccountUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixpanelServiceAccountUsername = this._mixpanelServiceAccountUsername;
    }
    if (this._segmentWriteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentWriteKey = this._segmentWriteKey;
    }
    if (this._splunkDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkDomain = this._splunkDomain;
    }
    if (this._splunkPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkPort = this._splunkPort;
    }
    if (this._splunkSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkSecure = this._splunkSecure;
    }
    if (this._splunkToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkToken = this._splunkToken;
    }
    if (this._sumoSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumoSourceAddress = this._sumoSourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStreamSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountId = undefined;
      this._awsPartnerEventSource = undefined;
      this._awsRegion = undefined;
      this._azurePartnerTopic = undefined;
      this._azureRegion = undefined;
      this._azureResourceGroup = undefined;
      this._azureSubscriptionId = undefined;
      this._datadogApiKey = undefined;
      this._datadogRegion = undefined;
      this._httpAuthorization = undefined;
      this._httpContentFormat = undefined;
      this._httpContentType = undefined;
      this._httpCustomHeaders = undefined;
      this._httpEndpoint = undefined;
      this._mixpanelProjectId = undefined;
      this._mixpanelRegion = undefined;
      this._mixpanelServiceAccountPassword = undefined;
      this._mixpanelServiceAccountUsername = undefined;
      this._segmentWriteKey = undefined;
      this._splunkDomain = undefined;
      this._splunkPort = undefined;
      this._splunkSecure = undefined;
      this._splunkToken = undefined;
      this._sumoSourceAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountId = value.awsAccountId;
      this._awsPartnerEventSource = value.awsPartnerEventSource;
      this._awsRegion = value.awsRegion;
      this._azurePartnerTopic = value.azurePartnerTopic;
      this._azureRegion = value.azureRegion;
      this._azureResourceGroup = value.azureResourceGroup;
      this._azureSubscriptionId = value.azureSubscriptionId;
      this._datadogApiKey = value.datadogApiKey;
      this._datadogRegion = value.datadogRegion;
      this._httpAuthorization = value.httpAuthorization;
      this._httpContentFormat = value.httpContentFormat;
      this._httpContentType = value.httpContentType;
      this._httpCustomHeaders = value.httpCustomHeaders;
      this._httpEndpoint = value.httpEndpoint;
      this._mixpanelProjectId = value.mixpanelProjectId;
      this._mixpanelRegion = value.mixpanelRegion;
      this._mixpanelServiceAccountPassword = value.mixpanelServiceAccountPassword;
      this._mixpanelServiceAccountUsername = value.mixpanelServiceAccountUsername;
      this._segmentWriteKey = value.segmentWriteKey;
      this._splunkDomain = value.splunkDomain;
      this._splunkPort = value.splunkPort;
      this._splunkSecure = value.splunkSecure;
      this._splunkToken = value.splunkToken;
      this._sumoSourceAddress = value.sumoSourceAddress;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_partner_event_source - computed: true, optional: true, required: false
  private _awsPartnerEventSource?: string; 
  public get awsPartnerEventSource() {
    return this.getStringAttribute('aws_partner_event_source');
  }
  public set awsPartnerEventSource(value: string) {
    this._awsPartnerEventSource = value;
  }
  public resetAwsPartnerEventSource() {
    this._awsPartnerEventSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPartnerEventSourceInput() {
    return this._awsPartnerEventSource;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // azure_partner_topic - computed: true, optional: true, required: false
  private _azurePartnerTopic?: string; 
  public get azurePartnerTopic() {
    return this.getStringAttribute('azure_partner_topic');
  }
  public set azurePartnerTopic(value: string) {
    this._azurePartnerTopic = value;
  }
  public resetAzurePartnerTopic() {
    this._azurePartnerTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePartnerTopicInput() {
    return this._azurePartnerTopic;
  }

  // azure_region - computed: false, optional: true, required: false
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  public resetAzureRegion() {
    this._azureRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // azure_resource_group - computed: false, optional: true, required: false
  private _azureResourceGroup?: string; 
  public get azureResourceGroup() {
    return this.getStringAttribute('azure_resource_group');
  }
  public set azureResourceGroup(value: string) {
    this._azureResourceGroup = value;
  }
  public resetAzureResourceGroup() {
    this._azureResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceGroupInput() {
    return this._azureResourceGroup;
  }

  // azure_subscription_id - computed: false, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // datadog_api_key - computed: false, optional: true, required: false
  private _datadogApiKey?: string; 
  public get datadogApiKey() {
    return this.getStringAttribute('datadog_api_key');
  }
  public set datadogApiKey(value: string) {
    this._datadogApiKey = value;
  }
  public resetDatadogApiKey() {
    this._datadogApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey;
  }

  // datadog_region - computed: false, optional: true, required: false
  private _datadogRegion?: string; 
  public get datadogRegion() {
    return this.getStringAttribute('datadog_region');
  }
  public set datadogRegion(value: string) {
    this._datadogRegion = value;
  }
  public resetDatadogRegion() {
    this._datadogRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogRegionInput() {
    return this._datadogRegion;
  }

  // http_authorization - computed: false, optional: true, required: false
  private _httpAuthorization?: string; 
  public get httpAuthorization() {
    return this.getStringAttribute('http_authorization');
  }
  public set httpAuthorization(value: string) {
    this._httpAuthorization = value;
  }
  public resetHttpAuthorization() {
    this._httpAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthorizationInput() {
    return this._httpAuthorization;
  }

  // http_content_format - computed: true, optional: true, required: false
  private _httpContentFormat?: string; 
  public get httpContentFormat() {
    return this.getStringAttribute('http_content_format');
  }
  public set httpContentFormat(value: string) {
    this._httpContentFormat = value;
  }
  public resetHttpContentFormat() {
    this._httpContentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpContentFormatInput() {
    return this._httpContentFormat;
  }

  // http_content_type - computed: false, optional: true, required: false
  private _httpContentType?: string; 
  public get httpContentType() {
    return this.getStringAttribute('http_content_type');
  }
  public set httpContentType(value: string) {
    this._httpContentType = value;
  }
  public resetHttpContentType() {
    this._httpContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpContentTypeInput() {
    return this._httpContentType;
  }

  // http_custom_headers - computed: false, optional: true, required: false
  private _httpCustomHeaders?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get httpCustomHeaders() {
    return this.interpolationForAttribute('http_custom_headers');
  }
  public set httpCustomHeaders(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._httpCustomHeaders = value;
  }
  public resetHttpCustomHeaders() {
    this._httpCustomHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCustomHeadersInput() {
    return this._httpCustomHeaders;
  }

  // http_endpoint - computed: false, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // mixpanel_project_id - computed: false, optional: true, required: false
  private _mixpanelProjectId?: string; 
  public get mixpanelProjectId() {
    return this.getStringAttribute('mixpanel_project_id');
  }
  public set mixpanelProjectId(value: string) {
    this._mixpanelProjectId = value;
  }
  public resetMixpanelProjectId() {
    this._mixpanelProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixpanelProjectIdInput() {
    return this._mixpanelProjectId;
  }

  // mixpanel_region - computed: false, optional: true, required: false
  private _mixpanelRegion?: string; 
  public get mixpanelRegion() {
    return this.getStringAttribute('mixpanel_region');
  }
  public set mixpanelRegion(value: string) {
    this._mixpanelRegion = value;
  }
  public resetMixpanelRegion() {
    this._mixpanelRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixpanelRegionInput() {
    return this._mixpanelRegion;
  }

  // mixpanel_service_account_password - computed: false, optional: true, required: false
  private _mixpanelServiceAccountPassword?: string; 
  public get mixpanelServiceAccountPassword() {
    return this.getStringAttribute('mixpanel_service_account_password');
  }
  public set mixpanelServiceAccountPassword(value: string) {
    this._mixpanelServiceAccountPassword = value;
  }
  public resetMixpanelServiceAccountPassword() {
    this._mixpanelServiceAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixpanelServiceAccountPasswordInput() {
    return this._mixpanelServiceAccountPassword;
  }

  // mixpanel_service_account_username - computed: false, optional: true, required: false
  private _mixpanelServiceAccountUsername?: string; 
  public get mixpanelServiceAccountUsername() {
    return this.getStringAttribute('mixpanel_service_account_username');
  }
  public set mixpanelServiceAccountUsername(value: string) {
    this._mixpanelServiceAccountUsername = value;
  }
  public resetMixpanelServiceAccountUsername() {
    this._mixpanelServiceAccountUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixpanelServiceAccountUsernameInput() {
    return this._mixpanelServiceAccountUsername;
  }

  // segment_write_key - computed: false, optional: true, required: false
  private _segmentWriteKey?: string; 
  public get segmentWriteKey() {
    return this.getStringAttribute('segment_write_key');
  }
  public set segmentWriteKey(value: string) {
    this._segmentWriteKey = value;
  }
  public resetSegmentWriteKey() {
    this._segmentWriteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentWriteKeyInput() {
    return this._segmentWriteKey;
  }

  // splunk_domain - computed: false, optional: true, required: false
  private _splunkDomain?: string; 
  public get splunkDomain() {
    return this.getStringAttribute('splunk_domain');
  }
  public set splunkDomain(value: string) {
    this._splunkDomain = value;
  }
  public resetSplunkDomain() {
    this._splunkDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkDomainInput() {
    return this._splunkDomain;
  }

  // splunk_port - computed: false, optional: true, required: false
  private _splunkPort?: string; 
  public get splunkPort() {
    return this.getStringAttribute('splunk_port');
  }
  public set splunkPort(value: string) {
    this._splunkPort = value;
  }
  public resetSplunkPort() {
    this._splunkPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkPortInput() {
    return this._splunkPort;
  }

  // splunk_secure - computed: false, optional: true, required: false
  private _splunkSecure?: boolean | cdktf.IResolvable; 
  public get splunkSecure() {
    return this.getBooleanAttribute('splunk_secure');
  }
  public set splunkSecure(value: boolean | cdktf.IResolvable) {
    this._splunkSecure = value;
  }
  public resetSplunkSecure() {
    this._splunkSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkSecureInput() {
    return this._splunkSecure;
  }

  // splunk_token - computed: false, optional: true, required: false
  private _splunkToken?: string; 
  public get splunkToken() {
    return this.getStringAttribute('splunk_token');
  }
  public set splunkToken(value: string) {
    this._splunkToken = value;
  }
  public resetSplunkToken() {
    this._splunkToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTokenInput() {
    return this._splunkToken;
  }

  // sumo_source_address - computed: false, optional: true, required: false
  private _sumoSourceAddress?: string; 
  public get sumoSourceAddress() {
    return this.getStringAttribute('sumo_source_address');
  }
  public set sumoSourceAddress(value: string) {
    this._sumoSourceAddress = value;
  }
  public resetSumoSourceAddress() {
    this._sumoSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoSourceAddressInput() {
    return this._sumoSourceAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream auth0_log_stream}
*/
export class LogStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_log_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStream to import
  * @param importFromId The id of the existing LogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_log_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/log_stream auth0_log_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStreamConfig
  */
  public constructor(scope: Construct, id: string, config: LogStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_log_stream',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._id = config.id;
    this._isPriority = config.isPriority;
    this._name = config.name;
    this._startFrom = config.startFrom;
    this._status = config.status;
    this._type = config.type;
    this._piiConfig.internalValue = config.piiConfig;
    this._sink.internalValue = config.sink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: true, optional: true, required: false
  private _filters?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get filters() {
    return this.interpolationForAttribute('filters');
  }
  public set filters(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // is_priority - computed: false, optional: true, required: false
  private _isPriority?: boolean | cdktf.IResolvable; 
  public get isPriority() {
    return this.getBooleanAttribute('is_priority');
  }
  public set isPriority(value: boolean | cdktf.IResolvable) {
    this._isPriority = value;
  }
  public resetIsPriority() {
    this._isPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPriorityInput() {
    return this._isPriority;
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

  // start_from - computed: false, optional: true, required: false
  private _startFrom?: string; 
  public get startFrom() {
    return this.getStringAttribute('start_from');
  }
  public set startFrom(value: string) {
    this._startFrom = value;
  }
  public resetStartFrom() {
    this._startFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startFromInput() {
    return this._startFrom;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // pii_config - computed: false, optional: true, required: false
  private _piiConfig = new LogStreamPiiConfigOutputReference(this, "pii_config");
  public get piiConfig() {
    return this._piiConfig;
  }
  public putPiiConfig(value: LogStreamPiiConfig) {
    this._piiConfig.internalValue = value;
  }
  public resetPiiConfig() {
    this._piiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiConfigInput() {
    return this._piiConfig.internalValue;
  }

  // sink - computed: false, optional: false, required: true
  private _sink = new LogStreamSinkOutputReference(this, "sink");
  public get sink() {
    return this._sink;
  }
  public putSink(value: LogStreamSink) {
    this._sink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkInput() {
    return this._sink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._filters),
      id: cdktf.stringToTerraform(this._id),
      is_priority: cdktf.booleanToTerraform(this._isPriority),
      name: cdktf.stringToTerraform(this._name),
      start_from: cdktf.stringToTerraform(this._startFrom),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      pii_config: logStreamPiiConfigToTerraform(this._piiConfig.internalValue),
      sink: logStreamSinkToTerraform(this._sink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._filters),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_priority: {
        value: cdktf.booleanToHclTerraform(this._isPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_from: {
        value: cdktf.stringToHclTerraform(this._startFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      pii_config: {
        value: logStreamPiiConfigToHclTerraform(this._piiConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogStreamPiiConfigList",
      },
      sink: {
        value: logStreamSinkToHclTerraform(this._sink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogStreamSinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
