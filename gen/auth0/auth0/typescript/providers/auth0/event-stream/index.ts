// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of event stream destination (either 'eventbridge' or 'webhook').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#destination_type EventStream#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#id EventStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the event stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#name EventStream#name}
  */
  readonly name: string;
  /**
  * List of event types this stream is subscribed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#subscriptions EventStream#subscriptions}
  */
  readonly subscriptions: string[];
  /**
  * eventbridge_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#eventbridge_configuration EventStream#eventbridge_configuration}
  */
  readonly eventbridgeConfiguration?: EventStreamEventbridgeConfiguration;
  /**
  * webhook_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#webhook_configuration EventStream#webhook_configuration}
  */
  readonly webhookConfiguration?: EventStreamWebhookConfiguration;
}
export interface EventStreamEventbridgeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#aws_account_id EventStream#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#aws_region EventStream#aws_region}
  */
  readonly awsRegion: string;
}

export function eventStreamEventbridgeConfigurationToTerraform(struct?: EventStreamEventbridgeConfigurationOutputReference | EventStreamEventbridgeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
  }
}


export function eventStreamEventbridgeConfigurationToHclTerraform(struct?: EventStreamEventbridgeConfigurationOutputReference | EventStreamEventbridgeConfiguration): any {
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
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventStreamEventbridgeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventStreamEventbridgeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventStreamEventbridgeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountId = undefined;
      this._awsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountId = value.awsAccountId;
      this._awsRegion = value.awsRegion;
    }
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_partner_event_source - computed: true, optional: false, required: false
  public get awsPartnerEventSource() {
    return this.getStringAttribute('aws_partner_event_source');
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }
}
export interface EventStreamWebhookConfigurationWebhookAuthorization {
  /**
  * The authorization method used to secure the webhook endpoint. Can be either `basic` or `bearer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#method EventStream#method}
  */
  readonly method: string;
  /**
  * The password for `basic` authentication. Required when `method` is set to `basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#password EventStream#password}
  */
  readonly password?: string;
  /**
  * The token used for `bearer` authentication. Required when `method` is set to `bearer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#token EventStream#token}
  */
  readonly token?: string;
  /**
  * The username for `basic` authentication. Required when `method` is set to `basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#username EventStream#username}
  */
  readonly username?: string;
}

export function eventStreamWebhookConfigurationWebhookAuthorizationToTerraform(struct?: EventStreamWebhookConfigurationWebhookAuthorizationOutputReference | EventStreamWebhookConfigurationWebhookAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function eventStreamWebhookConfigurationWebhookAuthorizationToHclTerraform(struct?: EventStreamWebhookConfigurationWebhookAuthorizationOutputReference | EventStreamWebhookConfigurationWebhookAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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

export class EventStreamWebhookConfigurationWebhookAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventStreamWebhookConfigurationWebhookAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventStreamWebhookConfigurationWebhookAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._password = undefined;
      this._token = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._password = value.password;
      this._token = value.token;
      this._username = value.username;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // token - computed: false, optional: true, required: false
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

  // username - computed: false, optional: true, required: false
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
export interface EventStreamWebhookConfiguration {
  /**
  * The HTTPS endpoint that will receive the webhook events. Must be a valid, publicly accessible URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#webhook_endpoint EventStream#webhook_endpoint}
  */
  readonly webhookEndpoint: string;
  /**
  * webhook_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#webhook_authorization EventStream#webhook_authorization}
  */
  readonly webhookAuthorization: EventStreamWebhookConfigurationWebhookAuthorization;
}

export function eventStreamWebhookConfigurationToTerraform(struct?: EventStreamWebhookConfigurationOutputReference | EventStreamWebhookConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_endpoint: cdktf.stringToTerraform(struct!.webhookEndpoint),
    webhook_authorization: eventStreamWebhookConfigurationWebhookAuthorizationToTerraform(struct!.webhookAuthorization),
  }
}


export function eventStreamWebhookConfigurationToHclTerraform(struct?: EventStreamWebhookConfigurationOutputReference | EventStreamWebhookConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.webhookEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_authorization: {
      value: eventStreamWebhookConfigurationWebhookAuthorizationToHclTerraform(struct!.webhookAuthorization),
      isBlock: true,
      type: "list",
      storageClassType: "EventStreamWebhookConfigurationWebhookAuthorizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventStreamWebhookConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventStreamWebhookConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookEndpoint = this._webhookEndpoint;
    }
    if (this._webhookAuthorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookAuthorization = this._webhookAuthorization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventStreamWebhookConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookEndpoint = undefined;
      this._webhookAuthorization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookEndpoint = value.webhookEndpoint;
      this._webhookAuthorization.internalValue = value.webhookAuthorization;
    }
  }

  // webhook_endpoint - computed: false, optional: false, required: true
  private _webhookEndpoint?: string; 
  public get webhookEndpoint() {
    return this.getStringAttribute('webhook_endpoint');
  }
  public set webhookEndpoint(value: string) {
    this._webhookEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEndpointInput() {
    return this._webhookEndpoint;
  }

  // webhook_authorization - computed: false, optional: false, required: true
  private _webhookAuthorization = new EventStreamWebhookConfigurationWebhookAuthorizationOutputReference(this, "webhook_authorization");
  public get webhookAuthorization() {
    return this._webhookAuthorization;
  }
  public putWebhookAuthorization(value: EventStreamWebhookConfigurationWebhookAuthorization) {
    this._webhookAuthorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookAuthorizationInput() {
    return this._webhookAuthorization.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream auth0_event_stream}
*/
export class EventStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_event_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventStream to import
  * @param importFromId The id of the existing EventStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_event_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/event_stream auth0_event_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventStreamConfig
  */
  public constructor(scope: Construct, id: string, config: EventStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_event_stream',
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
    this._destinationType = config.destinationType;
    this._id = config.id;
    this._name = config.name;
    this._subscriptions = config.subscriptions;
    this._eventbridgeConfiguration.internalValue = config.eventbridgeConfiguration;
    this._webhookConfiguration.internalValue = config.webhookConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscriptions - computed: false, optional: false, required: true
  private _subscriptions?: string[]; 
  public get subscriptions() {
    return this.getListAttribute('subscriptions');
  }
  public set subscriptions(value: string[]) {
    this._subscriptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // eventbridge_configuration - computed: false, optional: true, required: false
  private _eventbridgeConfiguration = new EventStreamEventbridgeConfigurationOutputReference(this, "eventbridge_configuration");
  public get eventbridgeConfiguration() {
    return this._eventbridgeConfiguration;
  }
  public putEventbridgeConfiguration(value: EventStreamEventbridgeConfiguration) {
    this._eventbridgeConfiguration.internalValue = value;
  }
  public resetEventbridgeConfiguration() {
    this._eventbridgeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventbridgeConfigurationInput() {
    return this._eventbridgeConfiguration.internalValue;
  }

  // webhook_configuration - computed: false, optional: true, required: false
  private _webhookConfiguration = new EventStreamWebhookConfigurationOutputReference(this, "webhook_configuration");
  public get webhookConfiguration() {
    return this._webhookConfiguration;
  }
  public putWebhookConfiguration(value: EventStreamWebhookConfiguration) {
    this._webhookConfiguration.internalValue = value;
  }
  public resetWebhookConfiguration() {
    this._webhookConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigurationInput() {
    return this._webhookConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_type: cdktf.stringToTerraform(this._destinationType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptions),
      eventbridge_configuration: eventStreamEventbridgeConfigurationToTerraform(this._eventbridgeConfiguration.internalValue),
      webhook_configuration: eventStreamWebhookConfigurationToTerraform(this._webhookConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriptions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      eventbridge_configuration: {
        value: eventStreamEventbridgeConfigurationToHclTerraform(this._eventbridgeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventStreamEventbridgeConfigurationList",
      },
      webhook_configuration: {
        value: eventStreamWebhookConfigurationToHclTerraform(this._webhookConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventStreamWebhookConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
