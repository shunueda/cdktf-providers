// https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BucketNotificationRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the bucket. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#bucket_id BucketNotificationRules#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#id BucketNotificationRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * notification_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#notification_rules BucketNotificationRules#notification_rules}
  */
  readonly notificationRules: BucketNotificationRulesNotificationRules[] | cdktf.IResolvable;
}
export interface BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders {
  /**
  * Name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#name BucketNotificationRules#name}
  */
  readonly name: string;
  /**
  * Value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#value BucketNotificationRules#value}
  */
  readonly value: string;
}

export function bucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersToTerraform(struct?: BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function bucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersToHclTerraform(struct?: BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersOutputReference {
    return new BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BucketNotificationRulesNotificationRulesTargetConfiguration {
  /**
  * The signing secret for use in verifying the X-Bz-Event-Notification-Signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#hmac_sha256_signing_secret BucketNotificationRules#hmac_sha256_signing_secret}
  */
  readonly hmacSha256SigningSecret?: string;
  /**
  * The type of the target configuration, currently "webhook" only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#target_type BucketNotificationRules#target_type}
  */
  readonly targetType: string;
  /**
  * The URL for the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#url BucketNotificationRules#url}
  */
  readonly url: string;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#custom_headers BucketNotificationRules#custom_headers}
  */
  readonly customHeaders?: BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders[] | cdktf.IResolvable;
}

export function bucketNotificationRulesNotificationRulesTargetConfigurationToTerraform(struct?: BucketNotificationRulesNotificationRulesTargetConfigurationOutputReference | BucketNotificationRulesNotificationRulesTargetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_sha256_signing_secret: cdktf.stringToTerraform(struct!.hmacSha256SigningSecret),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    url: cdktf.stringToTerraform(struct!.url),
    custom_headers: cdktf.listMapper(bucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersToTerraform, true)(struct!.customHeaders),
  }
}


export function bucketNotificationRulesNotificationRulesTargetConfigurationToHclTerraform(struct?: BucketNotificationRulesNotificationRulesTargetConfigurationOutputReference | BucketNotificationRulesNotificationRulesTargetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_sha256_signing_secret: {
      value: cdktf.stringToHclTerraform(struct!.hmacSha256SigningSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_headers: {
      value: cdktf.listMapperHcl(bucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersToHclTerraform, true)(struct!.customHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketNotificationRulesNotificationRulesTargetConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BucketNotificationRulesNotificationRulesTargetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacSha256SigningSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacSha256SigningSecret = this._hmacSha256SigningSecret;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._customHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketNotificationRulesNotificationRulesTargetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hmacSha256SigningSecret = undefined;
      this._targetType = undefined;
      this._url = undefined;
      this._customHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hmacSha256SigningSecret = value.hmacSha256SigningSecret;
      this._targetType = value.targetType;
      this._url = value.url;
      this._customHeaders.internalValue = value.customHeaders;
    }
  }

  // hmac_sha256_signing_secret - computed: false, optional: true, required: false
  private _hmacSha256SigningSecret?: string; 
  public get hmacSha256SigningSecret() {
    return this.getStringAttribute('hmac_sha256_signing_secret');
  }
  public set hmacSha256SigningSecret(value: string) {
    this._hmacSha256SigningSecret = value;
  }
  public resetHmacSha256SigningSecret() {
    this._hmacSha256SigningSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSha256SigningSecretInput() {
    return this._hmacSha256SigningSecret;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeadersList(this, "custom_headers", false);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: BucketNotificationRulesNotificationRulesTargetConfigurationCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }
}
export interface BucketNotificationRulesNotificationRules {
  /**
  * The list of event types for the event notification rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#event_types BucketNotificationRules#event_types}
  */
  readonly eventTypes: string[];
  /**
  * Whether the event notification rule is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#is_enabled BucketNotificationRules#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * A name for the event notification rule. The name must be unique among the bucket's notification rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#name BucketNotificationRules#name}
  */
  readonly name: string;
  /**
  * Specifies which object(s) in the bucket the event notification rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#object_name_prefix BucketNotificationRules#object_name_prefix}
  */
  readonly objectNamePrefix?: string;
  /**
  * target_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#target_configuration BucketNotificationRules#target_configuration}
  */
  readonly targetConfiguration: BucketNotificationRulesNotificationRulesTargetConfiguration;
}

export function bucketNotificationRulesNotificationRulesToTerraform(struct?: BucketNotificationRulesNotificationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTypes),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    object_name_prefix: cdktf.stringToTerraform(struct!.objectNamePrefix),
    target_configuration: bucketNotificationRulesNotificationRulesTargetConfigurationToTerraform(struct!.targetConfiguration),
  }
}


export function bucketNotificationRulesNotificationRulesToHclTerraform(struct?: BucketNotificationRulesNotificationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.objectNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_configuration: {
      value: bucketNotificationRulesNotificationRulesTargetConfigurationToHclTerraform(struct!.targetConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BucketNotificationRulesNotificationRulesTargetConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BucketNotificationRulesNotificationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BucketNotificationRulesNotificationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNamePrefix = this._objectNamePrefix;
    }
    if (this._targetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetConfiguration = this._targetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BucketNotificationRulesNotificationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventTypes = undefined;
      this._isEnabled = undefined;
      this._name = undefined;
      this._objectNamePrefix = undefined;
      this._targetConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventTypes = value.eventTypes;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._objectNamePrefix = value.objectNamePrefix;
      this._targetConfiguration.internalValue = value.targetConfiguration;
    }
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_suspended - computed: true, optional: false, required: false
  public get isSuspended() {
    return this.getBooleanAttribute('is_suspended');
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

  // object_name_prefix - computed: false, optional: true, required: false
  private _objectNamePrefix?: string; 
  public get objectNamePrefix() {
    return this.getStringAttribute('object_name_prefix');
  }
  public set objectNamePrefix(value: string) {
    this._objectNamePrefix = value;
  }
  public resetObjectNamePrefix() {
    this._objectNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNamePrefixInput() {
    return this._objectNamePrefix;
  }

  // suspension_reason - computed: true, optional: false, required: false
  public get suspensionReason() {
    return this.getStringAttribute('suspension_reason');
  }

  // target_configuration - computed: false, optional: false, required: true
  private _targetConfiguration = new BucketNotificationRulesNotificationRulesTargetConfigurationOutputReference(this, "target_configuration");
  public get targetConfiguration() {
    return this._targetConfiguration;
  }
  public putTargetConfiguration(value: BucketNotificationRulesNotificationRulesTargetConfiguration) {
    this._targetConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConfigurationInput() {
    return this._targetConfiguration.internalValue;
  }
}

export class BucketNotificationRulesNotificationRulesList extends cdktf.ComplexList {
  public internalValue? : BucketNotificationRulesNotificationRules[] | cdktf.IResolvable

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
  public get(index: number): BucketNotificationRulesNotificationRulesOutputReference {
    return new BucketNotificationRulesNotificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules b2_bucket_notification_rules}
*/
export class BucketNotificationRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b2_bucket_notification_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BucketNotificationRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BucketNotificationRules to import
  * @param importFromId The id of the existing BucketNotificationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BucketNotificationRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b2_bucket_notification_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/backblaze/b2/0.11.0/docs/resources/bucket_notification_rules b2_bucket_notification_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BucketNotificationRulesConfig
  */
  public constructor(scope: Construct, id: string, config: BucketNotificationRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'b2_bucket_notification_rules',
      terraformGeneratorMetadata: {
        providerName: 'b2',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._id = config.id;
    this._notificationRules.internalValue = config.notificationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
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

  // notification_rules - computed: false, optional: false, required: true
  private _notificationRules = new BucketNotificationRulesNotificationRulesList(this, "notification_rules", false);
  public get notificationRules() {
    return this._notificationRules;
  }
  public putNotificationRules(value: BucketNotificationRulesNotificationRules[] | cdktf.IResolvable) {
    this._notificationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRulesInput() {
    return this._notificationRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      id: cdktf.stringToTerraform(this._id),
      notification_rules: cdktf.listMapper(bucketNotificationRulesNotificationRulesToTerraform, true)(this._notificationRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
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
      notification_rules: {
        value: cdktf.listMapperHcl(bucketNotificationRulesNotificationRulesToHclTerraform, true)(this._notificationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BucketNotificationRulesNotificationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
