// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventBridgeConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#connection_name EventBridgeConnection#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#description EventBridgeConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#id EventBridgeConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * auth_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#auth_parameters EventBridgeConnection#auth_parameters}
  */
  readonly authParameters?: EventBridgeConnectionAuthParameters;
  /**
  * network_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#network_parameters EventBridgeConnection#network_parameters}
  */
  readonly networkParameters: EventBridgeConnectionNetworkParameters;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#timeouts EventBridgeConnection#timeouts}
  */
  readonly timeouts?: EventBridgeConnectionTimeouts;
}
export interface EventBridgeConnectionAuthParametersApiKeyAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#api_key_name EventBridgeConnection#api_key_name}
  */
  readonly apiKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#api_key_value EventBridgeConnection#api_key_value}
  */
  readonly apiKeyValue?: string;
}

export function eventBridgeConnectionAuthParametersApiKeyAuthParametersToTerraform(struct?: EventBridgeConnectionAuthParametersApiKeyAuthParametersOutputReference | EventBridgeConnectionAuthParametersApiKeyAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_name: cdktf.stringToTerraform(struct!.apiKeyName),
    api_key_value: cdktf.stringToTerraform(struct!.apiKeyValue),
  }
}


export function eventBridgeConnectionAuthParametersApiKeyAuthParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersApiKeyAuthParametersOutputReference | EventBridgeConnectionAuthParametersApiKeyAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_name: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_value: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBridgeConnectionAuthParametersApiKeyAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionAuthParametersApiKeyAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyName = this._apiKeyName;
    }
    if (this._apiKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyValue = this._apiKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionAuthParametersApiKeyAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyName = undefined;
      this._apiKeyValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyName = value.apiKeyName;
      this._apiKeyValue = value.apiKeyValue;
    }
  }

  // api_key_name - computed: false, optional: true, required: false
  private _apiKeyName?: string; 
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }
  public set apiKeyName(value: string) {
    this._apiKeyName = value;
  }
  public resetApiKeyName() {
    this._apiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyNameInput() {
    return this._apiKeyName;
  }

  // api_key_value - computed: false, optional: true, required: false
  private _apiKeyValue?: string; 
  public get apiKeyValue() {
    return this.getStringAttribute('api_key_value');
  }
  public set apiKeyValue(value: string) {
    this._apiKeyValue = value;
  }
  public resetApiKeyValue() {
    this._apiKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyValueInput() {
    return this._apiKeyValue;
  }
}
export interface EventBridgeConnectionAuthParametersBasicAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#password EventBridgeConnection#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#username EventBridgeConnection#username}
  */
  readonly username?: string;
}

export function eventBridgeConnectionAuthParametersBasicAuthParametersToTerraform(struct?: EventBridgeConnectionAuthParametersBasicAuthParametersOutputReference | EventBridgeConnectionAuthParametersBasicAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function eventBridgeConnectionAuthParametersBasicAuthParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersBasicAuthParametersOutputReference | EventBridgeConnectionAuthParametersBasicAuthParameters): any {
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

export class EventBridgeConnectionAuthParametersBasicAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionAuthParametersBasicAuthParameters | undefined {
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

  public set internalValue(value: EventBridgeConnectionAuthParametersBasicAuthParameters | undefined) {
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
export interface EventBridgeConnectionAuthParametersOauthParametersClientParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#client_id EventBridgeConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#client_secret EventBridgeConnection#client_secret}
  */
  readonly clientSecret?: string;
}

export function eventBridgeConnectionAuthParametersOauthParametersClientParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersClientParametersOutputReference | EventBridgeConnectionAuthParametersOauthParametersClientParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function eventBridgeConnectionAuthParametersOauthParametersClientParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersClientParametersOutputReference | EventBridgeConnectionAuthParametersOauthParametersClientParameters): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBridgeConnectionAuthParametersOauthParametersClientParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionAuthParametersOauthParametersClientParameters | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionAuthParametersOauthParametersClientParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: true, required: false
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

  // client_secret - computed: false, optional: true, required: false
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
}
export interface EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#is_value_secret EventBridgeConnection#is_value_secret}
  */
  readonly isValueSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#key EventBridgeConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#value EventBridgeConnection#value}
  */
  readonly value?: string;
}

export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.stringToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.stringToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: string; 
  public get isValueSecret() {
    return this.getStringAttribute('is_value_secret');
  }
  public set isValueSecret(value: string) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersList extends cdktf.ComplexList {
  public internalValue? : EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters[] | cdktf.IResolvable

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
  public get(index: number): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersOutputReference {
    return new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#is_value_secret EventBridgeConnection#is_value_secret}
  */
  readonly isValueSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#key EventBridgeConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#value EventBridgeConnection#value}
  */
  readonly value?: string;
}

export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.stringToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.stringToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: string; 
  public get isValueSecret() {
    return this.getStringAttribute('is_value_secret');
  }
  public set isValueSecret(value: string) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersList extends cdktf.ComplexList {
  public internalValue? : EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters[] | cdktf.IResolvable

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
  public get(index: number): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersOutputReference {
    return new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#is_value_secret EventBridgeConnection#is_value_secret}
  */
  readonly isValueSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#key EventBridgeConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#value EventBridgeConnection#value}
  */
  readonly value?: string;
}

export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.stringToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.stringToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: string; 
  public get isValueSecret() {
    return this.getStringAttribute('is_value_secret');
  }
  public set isValueSecret(value: string) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersList extends cdktf.ComplexList {
  public internalValue? : EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters[] | cdktf.IResolvable

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
  public get(index: number): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersOutputReference {
    return new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters {
  /**
  * body_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#body_parameters EventBridgeConnection#body_parameters}
  */
  readonly bodyParameters?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters[] | cdktf.IResolvable;
  /**
  * header_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#header_parameters EventBridgeConnection#header_parameters}
  */
  readonly headerParameters?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters[] | cdktf.IResolvable;
  /**
  * query_string_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#query_string_parameters EventBridgeConnection#query_string_parameters}
  */
  readonly queryStringParameters?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters[] | cdktf.IResolvable;
}

export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersOutputReference | EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_parameters: cdktf.listMapper(eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersToTerraform, true)(struct!.bodyParameters),
    header_parameters: cdktf.listMapper(eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersToTerraform, true)(struct!.headerParameters),
    query_string_parameters: cdktf.listMapper(eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersToTerraform, true)(struct!.queryStringParameters),
  }
}


export function eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersOutputReference | EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_parameters: {
      value: cdktf.listMapperHcl(eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersToHclTerraform, true)(struct!.bodyParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersList",
    },
    header_parameters: {
      value: cdktf.listMapperHcl(eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersToHclTerraform, true)(struct!.headerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersList",
    },
    query_string_parameters: {
      value: cdktf.listMapperHcl(eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersToHclTerraform, true)(struct!.queryStringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyParameters = this._bodyParameters?.internalValue;
    }
    if (this._headerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters?.internalValue;
    }
    if (this._queryStringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyParameters.internalValue = undefined;
      this._headerParameters.internalValue = undefined;
      this._queryStringParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyParameters.internalValue = value.bodyParameters;
      this._headerParameters.internalValue = value.headerParameters;
      this._queryStringParameters.internalValue = value.queryStringParameters;
    }
  }

  // body_parameters - computed: false, optional: true, required: false
  private _bodyParameters = new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParametersList(this, "body_parameters", false);
  public get bodyParameters() {
    return this._bodyParameters;
  }
  public putBodyParameters(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersBodyParameters[] | cdktf.IResolvable) {
    this._bodyParameters.internalValue = value;
  }
  public resetBodyParameters() {
    this._bodyParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyParametersInput() {
    return this._bodyParameters.internalValue;
  }

  // header_parameters - computed: false, optional: true, required: false
  private _headerParameters = new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParametersList(this, "header_parameters", false);
  public get headerParameters() {
    return this._headerParameters;
  }
  public putHeaderParameters(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersHeaderParameters[] | cdktf.IResolvable) {
    this._headerParameters.internalValue = value;
  }
  public resetHeaderParameters() {
    this._headerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters.internalValue;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters = new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParametersList(this, "query_string_parameters", false);
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
  public putQueryStringParameters(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersQueryStringParameters[] | cdktf.IResolvable) {
    this._queryStringParameters.internalValue = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters.internalValue;
  }
}
export interface EventBridgeConnectionAuthParametersOauthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#authorization_endpoint EventBridgeConnection#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#http_method EventBridgeConnection#http_method}
  */
  readonly httpMethod?: string;
  /**
  * client_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#client_parameters EventBridgeConnection#client_parameters}
  */
  readonly clientParameters?: EventBridgeConnectionAuthParametersOauthParametersClientParameters;
  /**
  * oauth_http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#oauth_http_parameters EventBridgeConnection#oauth_http_parameters}
  */
  readonly oauthHttpParameters?: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters;
}

export function eventBridgeConnectionAuthParametersOauthParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOutputReference | EventBridgeConnectionAuthParametersOauthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    client_parameters: eventBridgeConnectionAuthParametersOauthParametersClientParametersToTerraform(struct!.clientParameters),
    oauth_http_parameters: eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersToTerraform(struct!.oauthHttpParameters),
  }
}


export function eventBridgeConnectionAuthParametersOauthParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOauthParametersOutputReference | EventBridgeConnectionAuthParametersOauthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_parameters: {
      value: eventBridgeConnectionAuthParametersOauthParametersClientParametersToHclTerraform(struct!.clientParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersOauthParametersClientParametersList",
    },
    oauth_http_parameters: {
      value: eventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersToHclTerraform(struct!.oauthHttpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBridgeConnectionAuthParametersOauthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionAuthParametersOauthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._clientParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientParameters = this._clientParameters?.internalValue;
    }
    if (this._oauthHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthHttpParameters = this._oauthHttpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionAuthParametersOauthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationEndpoint = undefined;
      this._httpMethod = undefined;
      this._clientParameters.internalValue = undefined;
      this._oauthHttpParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._httpMethod = value.httpMethod;
      this._clientParameters.internalValue = value.clientParameters;
      this._oauthHttpParameters.internalValue = value.oauthHttpParameters;
    }
  }

  // authorization_endpoint - computed: false, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // client_parameters - computed: false, optional: true, required: false
  private _clientParameters = new EventBridgeConnectionAuthParametersOauthParametersClientParametersOutputReference(this, "client_parameters");
  public get clientParameters() {
    return this._clientParameters;
  }
  public putClientParameters(value: EventBridgeConnectionAuthParametersOauthParametersClientParameters) {
    this._clientParameters.internalValue = value;
  }
  public resetClientParameters() {
    this._clientParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientParametersInput() {
    return this._clientParameters.internalValue;
  }

  // oauth_http_parameters - computed: false, optional: true, required: false
  private _oauthHttpParameters = new EventBridgeConnectionAuthParametersOauthParametersOauthHttpParametersOutputReference(this, "oauth_http_parameters");
  public get oauthHttpParameters() {
    return this._oauthHttpParameters;
  }
  public putOauthHttpParameters(value: EventBridgeConnectionAuthParametersOauthParametersOauthHttpParameters) {
    this._oauthHttpParameters.internalValue = value;
  }
  public resetOauthHttpParameters() {
    this._oauthHttpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthHttpParametersInput() {
    return this._oauthHttpParameters.internalValue;
  }
}
export interface EventBridgeConnectionAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#authorization_type EventBridgeConnection#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * api_key_auth_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#api_key_auth_parameters EventBridgeConnection#api_key_auth_parameters}
  */
  readonly apiKeyAuthParameters?: EventBridgeConnectionAuthParametersApiKeyAuthParameters;
  /**
  * basic_auth_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#basic_auth_parameters EventBridgeConnection#basic_auth_parameters}
  */
  readonly basicAuthParameters?: EventBridgeConnectionAuthParametersBasicAuthParameters;
  /**
  * oauth_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#oauth_parameters EventBridgeConnection#oauth_parameters}
  */
  readonly oauthParameters?: EventBridgeConnectionAuthParametersOauthParameters;
}

export function eventBridgeConnectionAuthParametersToTerraform(struct?: EventBridgeConnectionAuthParametersOutputReference | EventBridgeConnectionAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_type: cdktf.stringToTerraform(struct!.authorizationType),
    api_key_auth_parameters: eventBridgeConnectionAuthParametersApiKeyAuthParametersToTerraform(struct!.apiKeyAuthParameters),
    basic_auth_parameters: eventBridgeConnectionAuthParametersBasicAuthParametersToTerraform(struct!.basicAuthParameters),
    oauth_parameters: eventBridgeConnectionAuthParametersOauthParametersToTerraform(struct!.oauthParameters),
  }
}


export function eventBridgeConnectionAuthParametersToHclTerraform(struct?: EventBridgeConnectionAuthParametersOutputReference | EventBridgeConnectionAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_type: {
      value: cdktf.stringToHclTerraform(struct!.authorizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_auth_parameters: {
      value: eventBridgeConnectionAuthParametersApiKeyAuthParametersToHclTerraform(struct!.apiKeyAuthParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersApiKeyAuthParametersList",
    },
    basic_auth_parameters: {
      value: eventBridgeConnectionAuthParametersBasicAuthParametersToHclTerraform(struct!.basicAuthParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersBasicAuthParametersList",
    },
    oauth_parameters: {
      value: eventBridgeConnectionAuthParametersOauthParametersToHclTerraform(struct!.oauthParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventBridgeConnectionAuthParametersOauthParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBridgeConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationType = this._authorizationType;
    }
    if (this._apiKeyAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuthParameters = this._apiKeyAuthParameters?.internalValue;
    }
    if (this._basicAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthParameters = this._basicAuthParameters?.internalValue;
    }
    if (this._oauthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthParameters = this._oauthParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationType = undefined;
      this._apiKeyAuthParameters.internalValue = undefined;
      this._basicAuthParameters.internalValue = undefined;
      this._oauthParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationType = value.authorizationType;
      this._apiKeyAuthParameters.internalValue = value.apiKeyAuthParameters;
      this._basicAuthParameters.internalValue = value.basicAuthParameters;
      this._oauthParameters.internalValue = value.oauthParameters;
    }
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // api_key_auth_parameters - computed: false, optional: true, required: false
  private _apiKeyAuthParameters = new EventBridgeConnectionAuthParametersApiKeyAuthParametersOutputReference(this, "api_key_auth_parameters");
  public get apiKeyAuthParameters() {
    return this._apiKeyAuthParameters;
  }
  public putApiKeyAuthParameters(value: EventBridgeConnectionAuthParametersApiKeyAuthParameters) {
    this._apiKeyAuthParameters.internalValue = value;
  }
  public resetApiKeyAuthParameters() {
    this._apiKeyAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthParametersInput() {
    return this._apiKeyAuthParameters.internalValue;
  }

  // basic_auth_parameters - computed: false, optional: true, required: false
  private _basicAuthParameters = new EventBridgeConnectionAuthParametersBasicAuthParametersOutputReference(this, "basic_auth_parameters");
  public get basicAuthParameters() {
    return this._basicAuthParameters;
  }
  public putBasicAuthParameters(value: EventBridgeConnectionAuthParametersBasicAuthParameters) {
    this._basicAuthParameters.internalValue = value;
  }
  public resetBasicAuthParameters() {
    this._basicAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthParametersInput() {
    return this._basicAuthParameters.internalValue;
  }

  // oauth_parameters - computed: false, optional: true, required: false
  private _oauthParameters = new EventBridgeConnectionAuthParametersOauthParametersOutputReference(this, "oauth_parameters");
  public get oauthParameters() {
    return this._oauthParameters;
  }
  public putOauthParameters(value: EventBridgeConnectionAuthParametersOauthParameters) {
    this._oauthParameters.internalValue = value;
  }
  public resetOauthParameters() {
    this._oauthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthParametersInput() {
    return this._oauthParameters.internalValue;
  }
}
export interface EventBridgeConnectionNetworkParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#network_type EventBridgeConnection#network_type}
  */
  readonly networkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#security_group_id EventBridgeConnection#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#vpc_id EventBridgeConnection#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#vswitche_id EventBridgeConnection#vswitche_id}
  */
  readonly vswitcheId?: string;
}

export function eventBridgeConnectionNetworkParametersToTerraform(struct?: EventBridgeConnectionNetworkParametersOutputReference | EventBridgeConnectionNetworkParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_type: cdktf.stringToTerraform(struct!.networkType),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitche_id: cdktf.stringToTerraform(struct!.vswitcheId),
  }
}


export function eventBridgeConnectionNetworkParametersToHclTerraform(struct?: EventBridgeConnectionNetworkParametersOutputReference | EventBridgeConnectionNetworkParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitche_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitcheId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBridgeConnectionNetworkParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventBridgeConnectionNetworkParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitcheId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitcheId = this._vswitcheId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionNetworkParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkType = undefined;
      this._securityGroupId = undefined;
      this._vpcId = undefined;
      this._vswitcheId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkType = value.networkType;
      this._securityGroupId = value.securityGroupId;
      this._vpcId = value.vpcId;
      this._vswitcheId = value.vswitcheId;
    }
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitche_id - computed: false, optional: true, required: false
  private _vswitcheId?: string; 
  public get vswitcheId() {
    return this.getStringAttribute('vswitche_id');
  }
  public set vswitcheId(value: string) {
    this._vswitcheId = value;
  }
  public resetVswitcheId() {
    this._vswitcheId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitcheIdInput() {
    return this._vswitcheId;
  }
}
export interface EventBridgeConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#create EventBridgeConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#delete EventBridgeConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#update EventBridgeConnection#update}
  */
  readonly update?: string;
}

export function eventBridgeConnectionTimeoutsToTerraform(struct?: EventBridgeConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function eventBridgeConnectionTimeoutsToHclTerraform(struct?: EventBridgeConnectionTimeouts | cdktf.IResolvable): any {
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

export class EventBridgeConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventBridgeConnectionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBridgeConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection alicloud_event_bridge_connection}
*/
export class EventBridgeConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_event_bridge_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventBridgeConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventBridgeConnection to import
  * @param importFromId The id of the existing EventBridgeConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventBridgeConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_event_bridge_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/event_bridge_connection alicloud_event_bridge_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventBridgeConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: EventBridgeConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_event_bridge_connection',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionName = config.connectionName;
    this._description = config.description;
    this._id = config.id;
    this._authParameters.internalValue = config.authParameters;
    this._networkParameters.internalValue = config.networkParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // auth_parameters - computed: false, optional: true, required: false
  private _authParameters = new EventBridgeConnectionAuthParametersOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }
  public putAuthParameters(value: EventBridgeConnectionAuthParameters) {
    this._authParameters.internalValue = value;
  }
  public resetAuthParameters() {
    this._authParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParametersInput() {
    return this._authParameters.internalValue;
  }

  // network_parameters - computed: false, optional: false, required: true
  private _networkParameters = new EventBridgeConnectionNetworkParametersOutputReference(this, "network_parameters");
  public get networkParameters() {
    return this._networkParameters;
  }
  public putNetworkParameters(value: EventBridgeConnectionNetworkParameters) {
    this._networkParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkParametersInput() {
    return this._networkParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventBridgeConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventBridgeConnectionTimeouts) {
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
      connection_name: cdktf.stringToTerraform(this._connectionName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      auth_parameters: eventBridgeConnectionAuthParametersToTerraform(this._authParameters.internalValue),
      network_parameters: eventBridgeConnectionNetworkParametersToTerraform(this._networkParameters.internalValue),
      timeouts: eventBridgeConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      auth_parameters: {
        value: eventBridgeConnectionAuthParametersToHclTerraform(this._authParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventBridgeConnectionAuthParametersList",
      },
      network_parameters: {
        value: eventBridgeConnectionNetworkParametersToHclTerraform(this._networkParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventBridgeConnectionNetworkParametersList",
      },
      timeouts: {
        value: eventBridgeConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventBridgeConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
