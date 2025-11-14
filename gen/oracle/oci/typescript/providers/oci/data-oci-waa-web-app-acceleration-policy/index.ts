// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWaaWebAppAccelerationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}
  */
  readonly webAppAccelerationPolicyId: string;
}
export interface DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy {
}

export function dataOciWaaWebAppAccelerationPolicyResponseCachingPolicyToTerraform(struct?: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaaWebAppAccelerationPolicyResponseCachingPolicyToHclTerraform(struct?: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_response_header_based_caching_enabled - computed: true, optional: false, required: false
  public get isResponseHeaderBasedCachingEnabled() {
    return this.getBooleanAttribute('is_response_header_based_caching_enabled');
  }
}

export class DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference {
    return new DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression {
}

export function dataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionToTerraform(struct?: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionToHclTerraform(struct?: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference {
    return new DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy {
}

export function dataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyToTerraform(struct?: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyToHclTerraform(struct?: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gzip_compression - computed: true, optional: false, required: false
  private _gzipCompression = new DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList(this, "gzip_compression", false);
  public get gzipCompression() {
    return this._gzipCompression;
  }
}

export class DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference {
    return new DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}
*/
export class DataOciWaaWebAppAccelerationPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waa_web_app_acceleration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicy to import
  * @param importFromId The id of the existing DataOciWaaWebAppAccelerationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waa_web_app_acceleration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWaaWebAppAccelerationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWaaWebAppAccelerationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waa_web_app_acceleration_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._webAppAccelerationPolicyId = config.webAppAccelerationPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // response_caching_policy - computed: true, optional: false, required: false
  private _responseCachingPolicy = new DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList(this, "response_caching_policy", false);
  public get responseCachingPolicy() {
    return this._responseCachingPolicy;
  }

  // response_compression_policy - computed: true, optional: false, required: false
  private _responseCompressionPolicy = new DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList(this, "response_compression_policy", false);
  public get responseCompressionPolicy() {
    return this._responseCompressionPolicy;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
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

  // web_app_acceleration_policy_id - computed: false, optional: false, required: true
  private _webAppAccelerationPolicyId?: string; 
  public get webAppAccelerationPolicyId() {
    return this.getStringAttribute('web_app_acceleration_policy_id');
  }
  public set webAppAccelerationPolicyId(value: string) {
    this._webAppAccelerationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppAccelerationPolicyIdInput() {
    return this._webAppAccelerationPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      web_app_acceleration_policy_id: cdktf.stringToTerraform(this._webAppAccelerationPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      web_app_acceleration_policy_id: {
        value: cdktf.stringToHclTerraform(this._webAppAccelerationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
