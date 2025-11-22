// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricStreamSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customer-provided stream subscription description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#description FabricStreamSubscription#description}
  */
  readonly description: string;
  /**
  * Stream subscription enabled status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#enabled FabricStreamSubscription#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Lists of events to be included/excluded on the stream subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#event_selector FabricStreamSubscription#event_selector}
  */
  readonly eventSelector?: FabricStreamSubscriptionEventSelector;
  /**
  * Lists of metrics to be included/excluded on the stream subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#metric_selector FabricStreamSubscription#metric_selector}
  */
  readonly metricSelector?: FabricStreamSubscriptionMetricSelector;
  /**
  * Customer-provided stream subscription name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#name FabricStreamSubscription#name}
  */
  readonly name: string;
  /**
  * The details of the subscriber to the Equinix Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#sink FabricStreamSubscription#sink}
  */
  readonly sink: FabricStreamSubscriptionSink;
  /**
  * The uuid of the stream that is the target of the stream subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#stream_id FabricStreamSubscription#stream_id}
  */
  readonly streamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#timeouts FabricStreamSubscription#timeouts}
  */
  readonly timeouts?: FabricStreamSubscriptionTimeouts;
  /**
  * Type of the stream subscription request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#type FabricStreamSubscription#type}
  */
  readonly type: string;
}
export interface FabricStreamSubscriptionChangeLog {
}

export function fabricStreamSubscriptionChangeLogToTerraform(struct?: FabricStreamSubscriptionChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricStreamSubscriptionChangeLogToHclTerraform(struct?: FabricStreamSubscriptionChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricStreamSubscriptionChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricStreamSubscriptionChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}
export interface FabricStreamSubscriptionEventSelector {
  /**
  * List of events to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#except FabricStreamSubscription#except}
  */
  readonly except?: string[];
  /**
  * List of events to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#include FabricStreamSubscription#include}
  */
  readonly include: string[];
}

export function fabricStreamSubscriptionEventSelectorToTerraform(struct?: FabricStreamSubscriptionEventSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function fabricStreamSubscriptionEventSelectorToHclTerraform(struct?: FabricStreamSubscriptionEventSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricStreamSubscriptionEventSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionEventSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricStreamSubscriptionEventSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._except = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._except = value.except;
      this._include = value.include;
    }
  }

  // except - computed: true, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // include - computed: true, optional: false, required: true
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface FabricStreamSubscriptionMetricSelector {
  /**
  * List of metrics to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#except FabricStreamSubscription#except}
  */
  readonly except?: string[];
  /**
  * List of metrics to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#include FabricStreamSubscription#include}
  */
  readonly include: string[];
}

export function fabricStreamSubscriptionMetricSelectorToTerraform(struct?: FabricStreamSubscriptionMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function fabricStreamSubscriptionMetricSelectorToHclTerraform(struct?: FabricStreamSubscriptionMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricStreamSubscriptionMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricStreamSubscriptionMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._except = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._except = value.except;
      this._include = value.include;
    }
  }

  // except - computed: true, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // include - computed: true, optional: false, required: true
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface FabricStreamSubscriptionSinkCredential {
  /**
  * Passed as Authorization header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#access_token FabricStreamSubscription#access_token}
  */
  readonly accessToken?: string;
  /**
  * Passed as Authorization header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#api_key FabricStreamSubscription#api_key}
  */
  readonly apiKey?: string;
  /**
  * Passed as Authorization header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#integration_key FabricStreamSubscription#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Passed as Authorization header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#password FabricStreamSubscription#password}
  */
  readonly password?: string;
  /**
  * Type of the credential being passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#type FabricStreamSubscription#type}
  */
  readonly type: string;
  /**
  * Passed as Authorization header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#username FabricStreamSubscription#username}
  */
  readonly username?: string;
}

export function fabricStreamSubscriptionSinkCredentialToTerraform(struct?: FabricStreamSubscriptionSinkCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function fabricStreamSubscriptionSinkCredentialToHclTerraform(struct?: FabricStreamSubscriptionSinkCredential | cdktf.IResolvable): any {
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
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
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

export class FabricStreamSubscriptionSinkCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionSinkCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
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

  public set internalValue(value: FabricStreamSubscriptionSinkCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._apiKey = undefined;
      this._integrationKey = undefined;
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
      this._accessToken = value.accessToken;
      this._apiKey = value.apiKey;
      this._integrationKey = value.integrationKey;
      this._password = value.password;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // access_token - computed: true, optional: true, required: false
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

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // integration_key - computed: true, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
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

  // type - computed: true, optional: false, required: true
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
export interface FabricStreamSubscriptionSinkSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#application_key FabricStreamSubscription#application_key}
  */
  readonly applicationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#event_index FabricStreamSubscription#event_index}
  */
  readonly eventIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#event_uri FabricStreamSubscription#event_uri}
  */
  readonly eventUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#format FabricStreamSubscription#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#metric_index FabricStreamSubscription#metric_index}
  */
  readonly metricIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#metric_uri FabricStreamSubscription#metric_uri}
  */
  readonly metricUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#source FabricStreamSubscription#source}
  */
  readonly source?: string;
}

export function fabricStreamSubscriptionSinkSettingsToTerraform(struct?: FabricStreamSubscriptionSinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    event_index: cdktf.stringToTerraform(struct!.eventIndex),
    event_uri: cdktf.stringToTerraform(struct!.eventUri),
    format: cdktf.stringToTerraform(struct!.format),
    metric_index: cdktf.stringToTerraform(struct!.metricIndex),
    metric_uri: cdktf.stringToTerraform(struct!.metricUri),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function fabricStreamSubscriptionSinkSettingsToHclTerraform(struct?: FabricStreamSubscriptionSinkSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_index: {
      value: cdktf.stringToHclTerraform(struct!.eventIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_uri: {
      value: cdktf.stringToHclTerraform(struct!.eventUri),
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
    metric_index: {
      value: cdktf.stringToHclTerraform(struct!.metricIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_uri: {
      value: cdktf.stringToHclTerraform(struct!.metricUri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricStreamSubscriptionSinkSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionSinkSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._eventIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventIndex = this._eventIndex;
    }
    if (this._eventUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventUri = this._eventUri;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._metricIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIndex = this._metricIndex;
    }
    if (this._metricUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUri = this._metricUri;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricStreamSubscriptionSinkSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationKey = undefined;
      this._eventIndex = undefined;
      this._eventUri = undefined;
      this._format = undefined;
      this._metricIndex = undefined;
      this._metricUri = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationKey = value.applicationKey;
      this._eventIndex = value.eventIndex;
      this._eventUri = value.eventUri;
      this._format = value.format;
      this._metricIndex = value.metricIndex;
      this._metricUri = value.metricUri;
      this._source = value.source;
    }
  }

  // application_key - computed: true, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // event_index - computed: true, optional: true, required: false
  private _eventIndex?: string; 
  public get eventIndex() {
    return this.getStringAttribute('event_index');
  }
  public set eventIndex(value: string) {
    this._eventIndex = value;
  }
  public resetEventIndex() {
    this._eventIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIndexInput() {
    return this._eventIndex;
  }

  // event_uri - computed: true, optional: true, required: false
  private _eventUri?: string; 
  public get eventUri() {
    return this.getStringAttribute('event_uri');
  }
  public set eventUri(value: string) {
    this._eventUri = value;
  }
  public resetEventUri() {
    this._eventUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventUriInput() {
    return this._eventUri;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // metric_index - computed: true, optional: true, required: false
  private _metricIndex?: string; 
  public get metricIndex() {
    return this.getStringAttribute('metric_index');
  }
  public set metricIndex(value: string) {
    this._metricIndex = value;
  }
  public resetMetricIndex() {
    this._metricIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIndexInput() {
    return this._metricIndex;
  }

  // metric_uri - computed: true, optional: true, required: false
  private _metricUri?: string; 
  public get metricUri() {
    return this.getStringAttribute('metric_uri');
  }
  public set metricUri(value: string) {
    this._metricUri = value;
  }
  public resetMetricUri() {
    this._metricUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUriInput() {
    return this._metricUri;
  }

  // source - computed: true, optional: true, required: false
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
}
export interface FabricStreamSubscriptionSink {
  /**
  * Boolean switch enabling batch delivery of data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#batch_enabled FabricStreamSubscription#batch_enabled}
  */
  readonly batchEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum size of the batch delivery if enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#batch_size_max FabricStreamSubscription#batch_size_max}
  */
  readonly batchSizeMax?: number;
  /**
  * Maximum time to wait for batch delivery if enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#batch_wait_time_max FabricStreamSubscription#batch_wait_time_max}
  */
  readonly batchWaitTimeMax?: number;
  /**
  * Access details for the specified sink type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#credential FabricStreamSubscription#credential}
  */
  readonly credential?: FabricStreamSubscriptionSinkCredential;
  /**
  * Known hostname of certain data stream subscription products. Not to be confused with a variable URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#host FabricStreamSubscription#host}
  */
  readonly host?: string;
  /**
  * Stream subscription sink settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#settings FabricStreamSubscription#settings}
  */
  readonly settings?: FabricStreamSubscriptionSinkSettings;
  /**
  * Type of the subscriber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#type FabricStreamSubscription#type}
  */
  readonly type: string;
  /**
  * Publicly reachable http endpoint destination for data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#uri FabricStreamSubscription#uri}
  */
  readonly uri?: string;
}

export function fabricStreamSubscriptionSinkToTerraform(struct?: FabricStreamSubscriptionSink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_enabled: cdktf.booleanToTerraform(struct!.batchEnabled),
    batch_size_max: cdktf.numberToTerraform(struct!.batchSizeMax),
    batch_wait_time_max: cdktf.numberToTerraform(struct!.batchWaitTimeMax),
    credential: fabricStreamSubscriptionSinkCredentialToTerraform(struct!.credential),
    host: cdktf.stringToTerraform(struct!.host),
    settings: fabricStreamSubscriptionSinkSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function fabricStreamSubscriptionSinkToHclTerraform(struct?: FabricStreamSubscriptionSink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.batchEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_size_max: {
      value: cdktf.numberToHclTerraform(struct!.batchSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_wait_time_max: {
      value: cdktf.numberToHclTerraform(struct!.batchWaitTimeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credential: {
      value: fabricStreamSubscriptionSinkCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricStreamSubscriptionSinkCredential",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: fabricStreamSubscriptionSinkSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricStreamSubscriptionSinkSettings",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricStreamSubscriptionSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionSink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchEnabled = this._batchEnabled;
    }
    if (this._batchSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizeMax = this._batchSizeMax;
    }
    if (this._batchWaitTimeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchWaitTimeMax = this._batchWaitTimeMax;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricStreamSubscriptionSink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchEnabled = undefined;
      this._batchSizeMax = undefined;
      this._batchWaitTimeMax = undefined;
      this._credential.internalValue = undefined;
      this._host = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchEnabled = value.batchEnabled;
      this._batchSizeMax = value.batchSizeMax;
      this._batchWaitTimeMax = value.batchWaitTimeMax;
      this._credential.internalValue = value.credential;
      this._host = value.host;
      this._settings.internalValue = value.settings;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // batch_enabled - computed: true, optional: true, required: false
  private _batchEnabled?: boolean | cdktf.IResolvable; 
  public get batchEnabled() {
    return this.getBooleanAttribute('batch_enabled');
  }
  public set batchEnabled(value: boolean | cdktf.IResolvable) {
    this._batchEnabled = value;
  }
  public resetBatchEnabled() {
    this._batchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchEnabledInput() {
    return this._batchEnabled;
  }

  // batch_size_max - computed: true, optional: true, required: false
  private _batchSizeMax?: number; 
  public get batchSizeMax() {
    return this.getNumberAttribute('batch_size_max');
  }
  public set batchSizeMax(value: number) {
    this._batchSizeMax = value;
  }
  public resetBatchSizeMax() {
    this._batchSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeMaxInput() {
    return this._batchSizeMax;
  }

  // batch_wait_time_max - computed: true, optional: true, required: false
  private _batchWaitTimeMax?: number; 
  public get batchWaitTimeMax() {
    return this.getNumberAttribute('batch_wait_time_max');
  }
  public set batchWaitTimeMax(value: number) {
    this._batchWaitTimeMax = value;
  }
  public resetBatchWaitTimeMax() {
    this._batchWaitTimeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchWaitTimeMaxInput() {
    return this._batchWaitTimeMax;
  }

  // credential - computed: true, optional: true, required: false
  private _credential = new FabricStreamSubscriptionSinkCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: FabricStreamSubscriptionSinkCredential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new FabricStreamSubscriptionSinkSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: FabricStreamSubscriptionSinkSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface FabricStreamSubscriptionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#create FabricStreamSubscription#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#delete FabricStreamSubscription#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#read FabricStreamSubscription#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#update FabricStreamSubscription#update}
  */
  readonly update?: string;
}

export function fabricStreamSubscriptionTimeoutsToTerraform(struct?: FabricStreamSubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fabricStreamSubscriptionTimeoutsToHclTerraform(struct?: FabricStreamSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class FabricStreamSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricStreamSubscriptionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
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

  public set internalValue(value: FabricStreamSubscriptionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription equinix_fabric_stream_subscription}
*/
export class FabricStreamSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_stream_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricStreamSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricStreamSubscription to import
  * @param importFromId The id of the existing FabricStreamSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricStreamSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_stream_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_stream_subscription equinix_fabric_stream_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricStreamSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: FabricStreamSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_stream_subscription',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
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
    this._enabled = config.enabled;
    this._eventSelector.internalValue = config.eventSelector;
    this._metricSelector.internalValue = config.metricSelector;
    this._name = config.name;
    this._sink.internalValue = config.sink;
    this._streamId = config.streamId;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricStreamSubscriptionChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_selector - computed: true, optional: true, required: false
  private _eventSelector = new FabricStreamSubscriptionEventSelectorOutputReference(this, "event_selector");
  public get eventSelector() {
    return this._eventSelector;
  }
  public putEventSelector(value: FabricStreamSubscriptionEventSelector) {
    this._eventSelector.internalValue = value;
  }
  public resetEventSelector() {
    this._eventSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorInput() {
    return this._eventSelector.internalValue;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_selector - computed: true, optional: true, required: false
  private _metricSelector = new FabricStreamSubscriptionMetricSelectorOutputReference(this, "metric_selector");
  public get metricSelector() {
    return this._metricSelector;
  }
  public putMetricSelector(value: FabricStreamSubscriptionMetricSelector) {
    this._metricSelector.internalValue = value;
  }
  public resetMetricSelector() {
    this._metricSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector.internalValue;
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

  // sink - computed: false, optional: false, required: true
  private _sink = new FabricStreamSubscriptionSinkOutputReference(this, "sink");
  public get sink() {
    return this._sink;
  }
  public putSink(value: FabricStreamSubscriptionSink) {
    this._sink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkInput() {
    return this._sink.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricStreamSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricStreamSubscriptionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_selector: fabricStreamSubscriptionEventSelectorToTerraform(this._eventSelector.internalValue),
      metric_selector: fabricStreamSubscriptionMetricSelectorToTerraform(this._metricSelector.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sink: fabricStreamSubscriptionSinkToTerraform(this._sink.internalValue),
      stream_id: cdktf.stringToTerraform(this._streamId),
      timeouts: fabricStreamSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_selector: {
        value: fabricStreamSubscriptionEventSelectorToHclTerraform(this._eventSelector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricStreamSubscriptionEventSelector",
      },
      metric_selector: {
        value: fabricStreamSubscriptionMetricSelectorToHclTerraform(this._metricSelector.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricStreamSubscriptionMetricSelector",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sink: {
        value: fabricStreamSubscriptionSinkToHclTerraform(this._sink.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricStreamSubscriptionSink",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: fabricStreamSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricStreamSubscriptionTimeouts",
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
