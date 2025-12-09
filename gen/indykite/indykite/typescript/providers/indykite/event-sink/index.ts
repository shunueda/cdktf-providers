// https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventSinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your own description of the resource. Must be less than or equal to 65000 UTF-8 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#description EventSink#description}
  */
  readonly description?: string;
  /**
  * The display name for the instance. Can be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#display_name EventSink#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#id EventSink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of Location, where to create resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#location EventSink#location}
  */
  readonly location: string;
  /**
  * Unique client assigned immutable identifier. Can not be updated without creating a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#name EventSink#name}
  */
  readonly name: string;
  /**
  * providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#providers EventSink#providers}
  */
  readonly providers: EventSinkProviders[] | cdktf.IResolvable;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#routes EventSink#routes}
  */
  readonly routes: EventSinkRoutes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#timeouts EventSink#timeouts}
  */
  readonly timeouts?: EventSinkTimeouts;
}
export interface EventSinkProvidersAzureEventGrid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#access_key EventSink#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#provider_display_name EventSink#provider_display_name}
  */
  readonly providerDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#topic_endpoint EventSink#topic_endpoint}
  */
  readonly topicEndpoint: string;
}

export function eventSinkProvidersAzureEventGridToTerraform(struct?: EventSinkProvidersAzureEventGridOutputReference | EventSinkProvidersAzureEventGrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    provider_display_name: cdktf.stringToTerraform(struct!.providerDisplayName),
    topic_endpoint: cdktf.stringToTerraform(struct!.topicEndpoint),
  }
}


export function eventSinkProvidersAzureEventGridToHclTerraform(struct?: EventSinkProvidersAzureEventGridOutputReference | EventSinkProvidersAzureEventGrid): any {
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
    provider_display_name: {
      value: cdktf.stringToHclTerraform(struct!.providerDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.topicEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSinkProvidersAzureEventGridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventSinkProvidersAzureEventGrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._providerDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerDisplayName = this._providerDisplayName;
    }
    if (this._topicEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicEndpoint = this._topicEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkProvidersAzureEventGrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._providerDisplayName = undefined;
      this._topicEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._providerDisplayName = value.providerDisplayName;
      this._topicEndpoint = value.topicEndpoint;
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

  // last_error - computed: true, optional: false, required: false
  public get lastError() {
    return this.getStringAttribute('last_error');
  }

  // provider_display_name - computed: false, optional: true, required: false
  private _providerDisplayName?: string; 
  public get providerDisplayName() {
    return this.getStringAttribute('provider_display_name');
  }
  public set providerDisplayName(value: string) {
    this._providerDisplayName = value;
  }
  public resetProviderDisplayName() {
    this._providerDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDisplayNameInput() {
    return this._providerDisplayName;
  }

  // topic_endpoint - computed: false, optional: false, required: true
  private _topicEndpoint?: string; 
  public get topicEndpoint() {
    return this.getStringAttribute('topic_endpoint');
  }
  public set topicEndpoint(value: string) {
    this._topicEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicEndpointInput() {
    return this._topicEndpoint;
  }
}
export interface EventSinkProvidersAzureServiceBus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#connection_string EventSink#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#provider_display_name EventSink#provider_display_name}
  */
  readonly providerDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#queue_or_topic_name EventSink#queue_or_topic_name}
  */
  readonly queueOrTopicName: string;
}

export function eventSinkProvidersAzureServiceBusToTerraform(struct?: EventSinkProvidersAzureServiceBusOutputReference | EventSinkProvidersAzureServiceBus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    provider_display_name: cdktf.stringToTerraform(struct!.providerDisplayName),
    queue_or_topic_name: cdktf.stringToTerraform(struct!.queueOrTopicName),
  }
}


export function eventSinkProvidersAzureServiceBusToHclTerraform(struct?: EventSinkProvidersAzureServiceBusOutputReference | EventSinkProvidersAzureServiceBus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_display_name: {
      value: cdktf.stringToHclTerraform(struct!.providerDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_or_topic_name: {
      value: cdktf.stringToHclTerraform(struct!.queueOrTopicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSinkProvidersAzureServiceBusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventSinkProvidersAzureServiceBus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._providerDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerDisplayName = this._providerDisplayName;
    }
    if (this._queueOrTopicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueOrTopicName = this._queueOrTopicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkProvidersAzureServiceBus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionString = undefined;
      this._providerDisplayName = undefined;
      this._queueOrTopicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionString = value.connectionString;
      this._providerDisplayName = value.providerDisplayName;
      this._queueOrTopicName = value.queueOrTopicName;
    }
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // last_error - computed: true, optional: false, required: false
  public get lastError() {
    return this.getStringAttribute('last_error');
  }

  // provider_display_name - computed: false, optional: true, required: false
  private _providerDisplayName?: string; 
  public get providerDisplayName() {
    return this.getStringAttribute('provider_display_name');
  }
  public set providerDisplayName(value: string) {
    this._providerDisplayName = value;
  }
  public resetProviderDisplayName() {
    this._providerDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDisplayNameInput() {
    return this._providerDisplayName;
  }

  // queue_or_topic_name - computed: false, optional: false, required: true
  private _queueOrTopicName?: string; 
  public get queueOrTopicName() {
    return this.getStringAttribute('queue_or_topic_name');
  }
  public set queueOrTopicName(value: string) {
    this._queueOrTopicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueOrTopicNameInput() {
    return this._queueOrTopicName;
  }
}
export interface EventSinkProvidersKafka {
  /**
  * Brokers specify Kafka destinations to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#brokers EventSink#brokers}
  */
  readonly brokers: string[];
  /**
  * Disable TLS for communication. Highly NOT RECOMMENDED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#disable_tls EventSink#disable_tls}
  */
  readonly disableTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#password EventSink#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#provider_display_name EventSink#provider_display_name}
  */
  readonly providerDisplayName?: string;
  /**
  * Skip TLS certificate verification. NOT RECOMMENDED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#tls_skip_verify EventSink#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#topic EventSink#topic}
  */
  readonly topic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#username EventSink#username}
  */
  readonly username: string;
}

export function eventSinkProvidersKafkaToTerraform(struct?: EventSinkProvidersKafkaOutputReference | EventSinkProvidersKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brokers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokers),
    disable_tls: cdktf.booleanToTerraform(struct!.disableTls),
    password: cdktf.stringToTerraform(struct!.password),
    provider_display_name: cdktf.stringToTerraform(struct!.providerDisplayName),
    tls_skip_verify: cdktf.booleanToTerraform(struct!.tlsSkipVerify),
    topic: cdktf.stringToTerraform(struct!.topic),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function eventSinkProvidersKafkaToHclTerraform(struct?: EventSinkProvidersKafkaOutputReference | EventSinkProvidersKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brokers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.disableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_display_name: {
      value: cdktf.stringToHclTerraform(struct!.providerDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
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

export class EventSinkProvidersKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventSinkProvidersKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokers = this._brokers;
    }
    if (this._disableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTls = this._disableTls;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._providerDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerDisplayName = this._providerDisplayName;
    }
    if (this._tlsSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSkipVerify = this._tlsSkipVerify;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkProvidersKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokers = undefined;
      this._disableTls = undefined;
      this._password = undefined;
      this._providerDisplayName = undefined;
      this._tlsSkipVerify = undefined;
      this._topic = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokers = value.brokers;
      this._disableTls = value.disableTls;
      this._password = value.password;
      this._providerDisplayName = value.providerDisplayName;
      this._tlsSkipVerify = value.tlsSkipVerify;
      this._topic = value.topic;
      this._username = value.username;
    }
  }

  // brokers - computed: false, optional: false, required: true
  private _brokers?: string[]; 
  public get brokers() {
    return this.getListAttribute('brokers');
  }
  public set brokers(value: string[]) {
    this._brokers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // disable_tls - computed: false, optional: true, required: false
  private _disableTls?: boolean | cdktf.IResolvable; 
  public get disableTls() {
    return this.getBooleanAttribute('disable_tls');
  }
  public set disableTls(value: boolean | cdktf.IResolvable) {
    this._disableTls = value;
  }
  public resetDisableTls() {
    this._disableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsInput() {
    return this._disableTls;
  }

  // last_error - computed: true, optional: false, required: false
  public get lastError() {
    return this.getStringAttribute('last_error');
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

  // provider_display_name - computed: false, optional: true, required: false
  private _providerDisplayName?: string; 
  public get providerDisplayName() {
    return this.getStringAttribute('provider_display_name');
  }
  public set providerDisplayName(value: string) {
    this._providerDisplayName = value;
  }
  public resetProviderDisplayName() {
    this._providerDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDisplayNameInput() {
    return this._providerDisplayName;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this.getBooleanAttribute('tls_skip_verify');
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
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
export interface EventSinkProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#provider_name EventSink#provider_name}
  */
  readonly providerName: string;
  /**
  * azure_event_grid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#azure_event_grid EventSink#azure_event_grid}
  */
  readonly azureEventGrid?: EventSinkProvidersAzureEventGrid;
  /**
  * azure_service_bus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#azure_service_bus EventSink#azure_service_bus}
  */
  readonly azureServiceBus?: EventSinkProvidersAzureServiceBus;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#kafka EventSink#kafka}
  */
  readonly kafka?: EventSinkProvidersKafka;
}

export function eventSinkProvidersToTerraform(struct?: EventSinkProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    azure_event_grid: eventSinkProvidersAzureEventGridToTerraform(struct!.azureEventGrid),
    azure_service_bus: eventSinkProvidersAzureServiceBusToTerraform(struct!.azureServiceBus),
    kafka: eventSinkProvidersKafkaToTerraform(struct!.kafka),
  }
}


export function eventSinkProvidersToHclTerraform(struct?: EventSinkProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_event_grid: {
      value: eventSinkProvidersAzureEventGridToHclTerraform(struct!.azureEventGrid),
      isBlock: true,
      type: "list",
      storageClassType: "EventSinkProvidersAzureEventGridList",
    },
    azure_service_bus: {
      value: eventSinkProvidersAzureServiceBusToHclTerraform(struct!.azureServiceBus),
      isBlock: true,
      type: "list",
      storageClassType: "EventSinkProvidersAzureServiceBusList",
    },
    kafka: {
      value: eventSinkProvidersKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "EventSinkProvidersKafkaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSinkProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSinkProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._azureEventGrid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEventGrid = this._azureEventGrid?.internalValue;
    }
    if (this._azureServiceBus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureServiceBus = this._azureServiceBus?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerName = undefined;
      this._azureEventGrid.internalValue = undefined;
      this._azureServiceBus.internalValue = undefined;
      this._kafka.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerName = value.providerName;
      this._azureEventGrid.internalValue = value.azureEventGrid;
      this._azureServiceBus.internalValue = value.azureServiceBus;
      this._kafka.internalValue = value.kafka;
    }
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // azure_event_grid - computed: false, optional: true, required: false
  private _azureEventGrid = new EventSinkProvidersAzureEventGridOutputReference(this, "azure_event_grid");
  public get azureEventGrid() {
    return this._azureEventGrid;
  }
  public putAzureEventGrid(value: EventSinkProvidersAzureEventGrid) {
    this._azureEventGrid.internalValue = value;
  }
  public resetAzureEventGrid() {
    this._azureEventGrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEventGridInput() {
    return this._azureEventGrid.internalValue;
  }

  // azure_service_bus - computed: false, optional: true, required: false
  private _azureServiceBus = new EventSinkProvidersAzureServiceBusOutputReference(this, "azure_service_bus");
  public get azureServiceBus() {
    return this._azureServiceBus;
  }
  public putAzureServiceBus(value: EventSinkProvidersAzureServiceBus) {
    this._azureServiceBus.internalValue = value;
  }
  public resetAzureServiceBus() {
    this._azureServiceBus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServiceBusInput() {
    return this._azureServiceBus.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new EventSinkProvidersKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: EventSinkProvidersKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }
}

export class EventSinkProvidersList extends cdktf.ComplexList {
  public internalValue? : EventSinkProviders[] | cdktf.IResolvable

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
  public get(index: number): EventSinkProvidersOutputReference {
    return new EventSinkProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSinkRoutesKeysValuesFilterKeyValuePairs {
  /**
  * Key for the ingest eventType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#key EventSink#key}
  */
  readonly key: string;
  /**
  * Value for the ingest eventType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#value EventSink#value}
  */
  readonly value: string;
}

export function eventSinkRoutesKeysValuesFilterKeyValuePairsToTerraform(struct?: EventSinkRoutesKeysValuesFilterKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventSinkRoutesKeysValuesFilterKeyValuePairsToHclTerraform(struct?: EventSinkRoutesKeysValuesFilterKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class EventSinkRoutesKeysValuesFilterKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSinkRoutesKeysValuesFilterKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkRoutesKeysValuesFilterKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EventSinkRoutesKeysValuesFilterKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : EventSinkRoutesKeysValuesFilterKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): EventSinkRoutesKeysValuesFilterKeyValuePairsOutputReference {
    return new EventSinkRoutesKeysValuesFilterKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSinkRoutesKeysValuesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#event_type EventSink#event_type}
  */
  readonly eventType: string;
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#key_value_pairs EventSink#key_value_pairs}
  */
  readonly keyValuePairs?: EventSinkRoutesKeysValuesFilterKeyValuePairs[] | cdktf.IResolvable;
}

export function eventSinkRoutesKeysValuesFilterToTerraform(struct?: EventSinkRoutesKeysValuesFilterOutputReference | EventSinkRoutesKeysValuesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    key_value_pairs: cdktf.listMapper(eventSinkRoutesKeysValuesFilterKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function eventSinkRoutesKeysValuesFilterToHclTerraform(struct?: EventSinkRoutesKeysValuesFilterOutputReference | EventSinkRoutesKeysValuesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value_pairs: {
      value: cdktf.listMapperHcl(eventSinkRoutesKeysValuesFilterKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "EventSinkRoutesKeysValuesFilterKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSinkRoutesKeysValuesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventSinkRoutesKeysValuesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkRoutesKeysValuesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new EventSinkRoutesKeysValuesFilterKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: EventSinkRoutesKeysValuesFilterKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}
export interface EventSinkRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#provider_id EventSink#provider_id}
  */
  readonly providerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#route_display_name EventSink#route_display_name}
  */
  readonly routeDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#route_id EventSink#route_id}
  */
  readonly routeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#stop_processing EventSink#stop_processing}
  */
  readonly stopProcessing?: boolean | cdktf.IResolvable;
  /**
  * keys_values_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#keys_values_filter EventSink#keys_values_filter}
  */
  readonly keysValuesFilter?: EventSinkRoutesKeysValuesFilter;
}

export function eventSinkRoutesToTerraform(struct?: EventSinkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    route_display_name: cdktf.stringToTerraform(struct!.routeDisplayName),
    route_id: cdktf.stringToTerraform(struct!.routeId),
    stop_processing: cdktf.booleanToTerraform(struct!.stopProcessing),
    keys_values_filter: eventSinkRoutesKeysValuesFilterToTerraform(struct!.keysValuesFilter),
  }
}


export function eventSinkRoutesToHclTerraform(struct?: EventSinkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_display_name: {
      value: cdktf.stringToHclTerraform(struct!.routeDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_id: {
      value: cdktf.stringToHclTerraform(struct!.routeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_processing: {
      value: cdktf.booleanToHclTerraform(struct!.stopProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys_values_filter: {
      value: eventSinkRoutesKeysValuesFilterToHclTerraform(struct!.keysValuesFilter),
      isBlock: true,
      type: "list",
      storageClassType: "EventSinkRoutesKeysValuesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventSinkRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSinkRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._routeDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDisplayName = this._routeDisplayName;
    }
    if (this._routeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeId = this._routeId;
    }
    if (this._stopProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopProcessing = this._stopProcessing;
    }
    if (this._keysValuesFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysValuesFilter = this._keysValuesFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerId = undefined;
      this._routeDisplayName = undefined;
      this._routeId = undefined;
      this._stopProcessing = undefined;
      this._keysValuesFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerId = value.providerId;
      this._routeDisplayName = value.routeDisplayName;
      this._routeId = value.routeId;
      this._stopProcessing = value.stopProcessing;
      this._keysValuesFilter.internalValue = value.keysValuesFilter;
    }
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // route_display_name - computed: false, optional: true, required: false
  private _routeDisplayName?: string; 
  public get routeDisplayName() {
    return this.getStringAttribute('route_display_name');
  }
  public set routeDisplayName(value: string) {
    this._routeDisplayName = value;
  }
  public resetRouteDisplayName() {
    this._routeDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDisplayNameInput() {
    return this._routeDisplayName;
  }

  // route_id - computed: false, optional: true, required: false
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  public resetRouteId() {
    this._routeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // stop_processing - computed: false, optional: true, required: false
  private _stopProcessing?: boolean | cdktf.IResolvable; 
  public get stopProcessing() {
    return this.getBooleanAttribute('stop_processing');
  }
  public set stopProcessing(value: boolean | cdktf.IResolvable) {
    this._stopProcessing = value;
  }
  public resetStopProcessing() {
    this._stopProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopProcessingInput() {
    return this._stopProcessing;
  }

  // keys_values_filter - computed: false, optional: true, required: false
  private _keysValuesFilter = new EventSinkRoutesKeysValuesFilterOutputReference(this, "keys_values_filter");
  public get keysValuesFilter() {
    return this._keysValuesFilter;
  }
  public putKeysValuesFilter(value: EventSinkRoutesKeysValuesFilter) {
    this._keysValuesFilter.internalValue = value;
  }
  public resetKeysValuesFilter() {
    this._keysValuesFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysValuesFilterInput() {
    return this._keysValuesFilter.internalValue;
  }
}

export class EventSinkRoutesList extends cdktf.ComplexList {
  public internalValue? : EventSinkRoutes[] | cdktf.IResolvable

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
  public get(index: number): EventSinkRoutesOutputReference {
    return new EventSinkRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventSinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#create EventSink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#default EventSink#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#delete EventSink#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#read EventSink#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#update EventSink#update}
  */
  readonly update?: string;
}

export function eventSinkTimeoutsToTerraform(struct?: EventSinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function eventSinkTimeoutsToHclTerraform(struct?: EventSinkTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class EventSinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventSinkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSinkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink indykite_event_sink}
*/
export class EventSink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "indykite_event_sink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventSink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventSink to import
  * @param importFromId The id of the existing EventSink that should be imported. Refer to the {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventSink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "indykite_event_sink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/indykite/indykite/0.29.0/docs/resources/event_sink indykite_event_sink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventSinkConfig
  */
  public constructor(scope: Construct, id: string, config: EventSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'indykite_event_sink',
      terraformGeneratorMetadata: {
        providerName: 'indykite',
        providerVersion: '0.29.0',
        providerVersionConstraint: '0.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._providers.internalValue = config.providers;
    this._routes.internalValue = config.routes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_space_id - computed: true, optional: false, required: false
  public get appSpaceId() {
    return this.getStringAttribute('app_space_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // providers - computed: false, optional: false, required: true
  private _providers = new EventSinkProvidersList(this, "providers", false);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: EventSinkProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new EventSinkRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: EventSinkRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventSinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventSinkTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      providers: cdktf.listMapper(eventSinkProvidersToTerraform, true)(this._providers.internalValue),
      routes: cdktf.listMapper(eventSinkRoutesToTerraform, true)(this._routes.internalValue),
      timeouts: eventSinkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      providers: {
        value: cdktf.listMapperHcl(eventSinkProvidersToHclTerraform, true)(this._providers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventSinkProvidersList",
      },
      routes: {
        value: cdktf.listMapperHcl(eventSinkRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventSinkRoutesList",
      },
      timeouts: {
        value: eventSinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventSinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
