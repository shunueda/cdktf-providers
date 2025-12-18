// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaaWebAppAccelerationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * response_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#response_caching_policy WaaWebAppAccelerationPolicy#response_caching_policy}
  */
  readonly responseCachingPolicy?: WaaWebAppAccelerationPolicyResponseCachingPolicy;
  /**
  * response_compression_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#response_compression_policy WaaWebAppAccelerationPolicy#response_compression_policy}
  */
  readonly responseCompressionPolicy?: WaaWebAppAccelerationPolicyResponseCompressionPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#timeouts WaaWebAppAccelerationPolicy#timeouts}
  */
  readonly timeouts?: WaaWebAppAccelerationPolicyTimeouts;
}
export interface WaaWebAppAccelerationPolicyResponseCachingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}
  */
  readonly isResponseHeaderBasedCachingEnabled?: boolean | cdktf.IResolvable;
}

export function waaWebAppAccelerationPolicyResponseCachingPolicyToTerraform(struct?: WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference | WaaWebAppAccelerationPolicyResponseCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_response_header_based_caching_enabled: cdktf.booleanToTerraform(struct!.isResponseHeaderBasedCachingEnabled),
  }
}


export function waaWebAppAccelerationPolicyResponseCachingPolicyToHclTerraform(struct?: WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference | WaaWebAppAccelerationPolicyResponseCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_response_header_based_caching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isResponseHeaderBasedCachingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaaWebAppAccelerationPolicyResponseCachingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponseHeaderBasedCachingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponseHeaderBasedCachingEnabled = this._isResponseHeaderBasedCachingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaaWebAppAccelerationPolicyResponseCachingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isResponseHeaderBasedCachingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isResponseHeaderBasedCachingEnabled = value.isResponseHeaderBasedCachingEnabled;
    }
  }

  // is_response_header_based_caching_enabled - computed: true, optional: true, required: false
  private _isResponseHeaderBasedCachingEnabled?: boolean | cdktf.IResolvable; 
  public get isResponseHeaderBasedCachingEnabled() {
    return this.getBooleanAttribute('is_response_header_based_caching_enabled');
  }
  public set isResponseHeaderBasedCachingEnabled(value: boolean | cdktf.IResolvable) {
    this._isResponseHeaderBasedCachingEnabled = value;
  }
  public resetIsResponseHeaderBasedCachingEnabled() {
    this._isResponseHeaderBasedCachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponseHeaderBasedCachingEnabledInput() {
    return this._isResponseHeaderBasedCachingEnabled;
  }
}
export interface WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function waaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionToTerraform(struct?: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference | WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function waaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionToHclTerraform(struct?: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference | WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
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
}
export interface WaaWebAppAccelerationPolicyResponseCompressionPolicy {
  /**
  * gzip_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#gzip_compression WaaWebAppAccelerationPolicy#gzip_compression}
  */
  readonly gzipCompression?: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression;
}

export function waaWebAppAccelerationPolicyResponseCompressionPolicyToTerraform(struct?: WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference | WaaWebAppAccelerationPolicyResponseCompressionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gzip_compression: waaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionToTerraform(struct!.gzipCompression),
  }
}


export function waaWebAppAccelerationPolicyResponseCompressionPolicyToHclTerraform(struct?: WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference | WaaWebAppAccelerationPolicyResponseCompressionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gzip_compression: {
      value: waaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionToHclTerraform(struct!.gzipCompression),
      isBlock: true,
      type: "list",
      storageClassType: "WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaaWebAppAccelerationPolicyResponseCompressionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gzipCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipCompression = this._gzipCompression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaaWebAppAccelerationPolicyResponseCompressionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gzipCompression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gzipCompression.internalValue = value.gzipCompression;
    }
  }

  // gzip_compression - computed: false, optional: true, required: false
  private _gzipCompression = new WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(this, "gzip_compression");
  public get gzipCompression() {
    return this._gzipCompression;
  }
  public putGzipCompression(value: WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression) {
    this._gzipCompression.internalValue = value;
  }
  public resetGzipCompression() {
    this._gzipCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipCompressionInput() {
    return this._gzipCompression.internalValue;
  }
}
export interface WaaWebAppAccelerationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}
  */
  readonly update?: string;
}

export function waaWebAppAccelerationPolicyTimeoutsToTerraform(struct?: WaaWebAppAccelerationPolicyTimeouts | cdktf.IResolvable): any {
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


export function waaWebAppAccelerationPolicyTimeoutsToHclTerraform(struct?: WaaWebAppAccelerationPolicyTimeouts | cdktf.IResolvable): any {
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

export class WaaWebAppAccelerationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaaWebAppAccelerationPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WaaWebAppAccelerationPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}
*/
export class WaaWebAppAccelerationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waa_web_app_acceleration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaaWebAppAccelerationPolicy to import
  * @param importFromId The id of the existing WaaWebAppAccelerationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaaWebAppAccelerationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waa_web_app_acceleration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaaWebAppAccelerationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WaaWebAppAccelerationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waa_web_app_acceleration_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._systemTags = config.systemTags;
    this._responseCachingPolicy.internalValue = config.responseCachingPolicy;
    this._responseCompressionPolicy.internalValue = config.responseCompressionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // response_caching_policy - computed: false, optional: true, required: false
  private _responseCachingPolicy = new WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(this, "response_caching_policy");
  public get responseCachingPolicy() {
    return this._responseCachingPolicy;
  }
  public putResponseCachingPolicy(value: WaaWebAppAccelerationPolicyResponseCachingPolicy) {
    this._responseCachingPolicy.internalValue = value;
  }
  public resetResponseCachingPolicy() {
    this._responseCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCachingPolicyInput() {
    return this._responseCachingPolicy.internalValue;
  }

  // response_compression_policy - computed: false, optional: true, required: false
  private _responseCompressionPolicy = new WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(this, "response_compression_policy");
  public get responseCompressionPolicy() {
    return this._responseCompressionPolicy;
  }
  public putResponseCompressionPolicy(value: WaaWebAppAccelerationPolicyResponseCompressionPolicy) {
    this._responseCompressionPolicy.internalValue = value;
  }
  public resetResponseCompressionPolicy() {
    this._responseCompressionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCompressionPolicyInput() {
    return this._responseCompressionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WaaWebAppAccelerationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WaaWebAppAccelerationPolicyTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      response_caching_policy: waaWebAppAccelerationPolicyResponseCachingPolicyToTerraform(this._responseCachingPolicy.internalValue),
      response_compression_policy: waaWebAppAccelerationPolicyResponseCompressionPolicyToTerraform(this._responseCompressionPolicy.internalValue),
      timeouts: waaWebAppAccelerationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      response_caching_policy: {
        value: waaWebAppAccelerationPolicyResponseCachingPolicyToHclTerraform(this._responseCachingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaaWebAppAccelerationPolicyResponseCachingPolicyList",
      },
      response_compression_policy: {
        value: waaWebAppAccelerationPolicyResponseCompressionPolicyToHclTerraform(this._responseCompressionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaaWebAppAccelerationPolicyResponseCompressionPolicyList",
      },
      timeouts: {
        value: waaWebAppAccelerationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaaWebAppAccelerationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
