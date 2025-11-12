// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaServicesStreamCdnConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}
  */
  readonly distributionChannelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}
  */
  readonly config: MediaServicesStreamCdnConfigConfigA;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}
  */
  readonly locks?: MediaServicesStreamCdnConfigLocks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}
  */
  readonly timeouts?: MediaServicesStreamCdnConfigTimeouts;
}
export interface MediaServicesStreamCdnConfigConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}
  */
  readonly edgeHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}
  */
  readonly edgePathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}
  */
  readonly edgeTokenKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}
  */
  readonly edgeTokenSalt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}
  */
  readonly isEdgeTokenAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}
  */
  readonly originAuthSecretKeyA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}
  */
  readonly originAuthSecretKeyB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}
  */
  readonly originAuthSecretKeyNonceA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}
  */
  readonly originAuthSecretKeyNonceB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}
  */
  readonly originAuthSignEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}
  */
  readonly originAuthSignType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}
  */
  readonly type: string;
}

export function mediaServicesStreamCdnConfigConfigAToTerraform(struct?: MediaServicesStreamCdnConfigConfigAOutputReference | MediaServicesStreamCdnConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_hostname: cdktf.stringToTerraform(struct!.edgeHostname),
    edge_path_prefix: cdktf.stringToTerraform(struct!.edgePathPrefix),
    edge_token_key: cdktf.stringToTerraform(struct!.edgeTokenKey),
    edge_token_salt: cdktf.stringToTerraform(struct!.edgeTokenSalt),
    is_edge_token_auth: cdktf.booleanToTerraform(struct!.isEdgeTokenAuth),
    origin_auth_secret_key_a: cdktf.stringToTerraform(struct!.originAuthSecretKeyA),
    origin_auth_secret_key_b: cdktf.stringToTerraform(struct!.originAuthSecretKeyB),
    origin_auth_secret_key_nonce_a: cdktf.stringToTerraform(struct!.originAuthSecretKeyNonceA),
    origin_auth_secret_key_nonce_b: cdktf.stringToTerraform(struct!.originAuthSecretKeyNonceB),
    origin_auth_sign_encryption: cdktf.stringToTerraform(struct!.originAuthSignEncryption),
    origin_auth_sign_type: cdktf.stringToTerraform(struct!.originAuthSignType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mediaServicesStreamCdnConfigConfigAToHclTerraform(struct?: MediaServicesStreamCdnConfigConfigAOutputReference | MediaServicesStreamCdnConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_hostname: {
      value: cdktf.stringToHclTerraform(struct!.edgeHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.edgePathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_token_key: {
      value: cdktf.stringToHclTerraform(struct!.edgeTokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_token_salt: {
      value: cdktf.stringToHclTerraform(struct!.edgeTokenSalt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_edge_token_auth: {
      value: cdktf.booleanToHclTerraform(struct!.isEdgeTokenAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_auth_secret_key_a: {
      value: cdktf.stringToHclTerraform(struct!.originAuthSecretKeyA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_auth_secret_key_b: {
      value: cdktf.stringToHclTerraform(struct!.originAuthSecretKeyB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_auth_secret_key_nonce_a: {
      value: cdktf.stringToHclTerraform(struct!.originAuthSecretKeyNonceA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_auth_secret_key_nonce_b: {
      value: cdktf.stringToHclTerraform(struct!.originAuthSecretKeyNonceB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_auth_sign_encryption: {
      value: cdktf.stringToHclTerraform(struct!.originAuthSignEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_auth_sign_type: {
      value: cdktf.stringToHclTerraform(struct!.originAuthSignType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaServicesStreamCdnConfigConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesStreamCdnConfigConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeHostname = this._edgeHostname;
    }
    if (this._edgePathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgePathPrefix = this._edgePathPrefix;
    }
    if (this._edgeTokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeTokenKey = this._edgeTokenKey;
    }
    if (this._edgeTokenSalt !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeTokenSalt = this._edgeTokenSalt;
    }
    if (this._isEdgeTokenAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEdgeTokenAuth = this._isEdgeTokenAuth;
    }
    if (this._originAuthSecretKeyA !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAuthSecretKeyA = this._originAuthSecretKeyA;
    }
    if (this._originAuthSecretKeyB !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAuthSecretKeyB = this._originAuthSecretKeyB;
    }
    if (this._originAuthSecretKeyNonceA !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAuthSecretKeyNonceA = this._originAuthSecretKeyNonceA;
    }
    if (this._originAuthSecretKeyNonceB !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAuthSecretKeyNonceB = this._originAuthSecretKeyNonceB;
    }
    if (this._originAuthSignEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAuthSignEncryption = this._originAuthSignEncryption;
    }
    if (this._originAuthSignType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAuthSignType = this._originAuthSignType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesStreamCdnConfigConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edgeHostname = undefined;
      this._edgePathPrefix = undefined;
      this._edgeTokenKey = undefined;
      this._edgeTokenSalt = undefined;
      this._isEdgeTokenAuth = undefined;
      this._originAuthSecretKeyA = undefined;
      this._originAuthSecretKeyB = undefined;
      this._originAuthSecretKeyNonceA = undefined;
      this._originAuthSecretKeyNonceB = undefined;
      this._originAuthSignEncryption = undefined;
      this._originAuthSignType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edgeHostname = value.edgeHostname;
      this._edgePathPrefix = value.edgePathPrefix;
      this._edgeTokenKey = value.edgeTokenKey;
      this._edgeTokenSalt = value.edgeTokenSalt;
      this._isEdgeTokenAuth = value.isEdgeTokenAuth;
      this._originAuthSecretKeyA = value.originAuthSecretKeyA;
      this._originAuthSecretKeyB = value.originAuthSecretKeyB;
      this._originAuthSecretKeyNonceA = value.originAuthSecretKeyNonceA;
      this._originAuthSecretKeyNonceB = value.originAuthSecretKeyNonceB;
      this._originAuthSignEncryption = value.originAuthSignEncryption;
      this._originAuthSignType = value.originAuthSignType;
      this._type = value.type;
    }
  }

  // edge_hostname - computed: true, optional: true, required: false
  private _edgeHostname?: string; 
  public get edgeHostname() {
    return this.getStringAttribute('edge_hostname');
  }
  public set edgeHostname(value: string) {
    this._edgeHostname = value;
  }
  public resetEdgeHostname() {
    this._edgeHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeHostnameInput() {
    return this._edgeHostname;
  }

  // edge_path_prefix - computed: true, optional: true, required: false
  private _edgePathPrefix?: string; 
  public get edgePathPrefix() {
    return this.getStringAttribute('edge_path_prefix');
  }
  public set edgePathPrefix(value: string) {
    this._edgePathPrefix = value;
  }
  public resetEdgePathPrefix() {
    this._edgePathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgePathPrefixInput() {
    return this._edgePathPrefix;
  }

  // edge_token_key - computed: true, optional: true, required: false
  private _edgeTokenKey?: string; 
  public get edgeTokenKey() {
    return this.getStringAttribute('edge_token_key');
  }
  public set edgeTokenKey(value: string) {
    this._edgeTokenKey = value;
  }
  public resetEdgeTokenKey() {
    this._edgeTokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTokenKeyInput() {
    return this._edgeTokenKey;
  }

  // edge_token_salt - computed: true, optional: true, required: false
  private _edgeTokenSalt?: string; 
  public get edgeTokenSalt() {
    return this.getStringAttribute('edge_token_salt');
  }
  public set edgeTokenSalt(value: string) {
    this._edgeTokenSalt = value;
  }
  public resetEdgeTokenSalt() {
    this._edgeTokenSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTokenSaltInput() {
    return this._edgeTokenSalt;
  }

  // is_edge_token_auth - computed: true, optional: true, required: false
  private _isEdgeTokenAuth?: boolean | cdktf.IResolvable; 
  public get isEdgeTokenAuth() {
    return this.getBooleanAttribute('is_edge_token_auth');
  }
  public set isEdgeTokenAuth(value: boolean | cdktf.IResolvable) {
    this._isEdgeTokenAuth = value;
  }
  public resetIsEdgeTokenAuth() {
    this._isEdgeTokenAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEdgeTokenAuthInput() {
    return this._isEdgeTokenAuth;
  }

  // origin_auth_secret_key_a - computed: true, optional: true, required: false
  private _originAuthSecretKeyA?: string; 
  public get originAuthSecretKeyA() {
    return this.getStringAttribute('origin_auth_secret_key_a');
  }
  public set originAuthSecretKeyA(value: string) {
    this._originAuthSecretKeyA = value;
  }
  public resetOriginAuthSecretKeyA() {
    this._originAuthSecretKeyA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAuthSecretKeyAInput() {
    return this._originAuthSecretKeyA;
  }

  // origin_auth_secret_key_b - computed: true, optional: true, required: false
  private _originAuthSecretKeyB?: string; 
  public get originAuthSecretKeyB() {
    return this.getStringAttribute('origin_auth_secret_key_b');
  }
  public set originAuthSecretKeyB(value: string) {
    this._originAuthSecretKeyB = value;
  }
  public resetOriginAuthSecretKeyB() {
    this._originAuthSecretKeyB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAuthSecretKeyBInput() {
    return this._originAuthSecretKeyB;
  }

  // origin_auth_secret_key_nonce_a - computed: true, optional: true, required: false
  private _originAuthSecretKeyNonceA?: string; 
  public get originAuthSecretKeyNonceA() {
    return this.getStringAttribute('origin_auth_secret_key_nonce_a');
  }
  public set originAuthSecretKeyNonceA(value: string) {
    this._originAuthSecretKeyNonceA = value;
  }
  public resetOriginAuthSecretKeyNonceA() {
    this._originAuthSecretKeyNonceA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAuthSecretKeyNonceAInput() {
    return this._originAuthSecretKeyNonceA;
  }

  // origin_auth_secret_key_nonce_b - computed: true, optional: true, required: false
  private _originAuthSecretKeyNonceB?: string; 
  public get originAuthSecretKeyNonceB() {
    return this.getStringAttribute('origin_auth_secret_key_nonce_b');
  }
  public set originAuthSecretKeyNonceB(value: string) {
    this._originAuthSecretKeyNonceB = value;
  }
  public resetOriginAuthSecretKeyNonceB() {
    this._originAuthSecretKeyNonceB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAuthSecretKeyNonceBInput() {
    return this._originAuthSecretKeyNonceB;
  }

  // origin_auth_sign_encryption - computed: true, optional: true, required: false
  private _originAuthSignEncryption?: string; 
  public get originAuthSignEncryption() {
    return this.getStringAttribute('origin_auth_sign_encryption');
  }
  public set originAuthSignEncryption(value: string) {
    this._originAuthSignEncryption = value;
  }
  public resetOriginAuthSignEncryption() {
    this._originAuthSignEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAuthSignEncryptionInput() {
    return this._originAuthSignEncryption;
  }

  // origin_auth_sign_type - computed: true, optional: true, required: false
  private _originAuthSignType?: string; 
  public get originAuthSignType() {
    return this.getStringAttribute('origin_auth_sign_type');
  }
  public set originAuthSignType(value: string) {
    this._originAuthSignType = value;
  }
  public resetOriginAuthSignType() {
    this._originAuthSignType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAuthSignTypeInput() {
    return this._originAuthSignType;
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
}
export interface MediaServicesStreamCdnConfigLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}
  */
  readonly type: string;
}

export function mediaServicesStreamCdnConfigLocksToTerraform(struct?: MediaServicesStreamCdnConfigLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mediaServicesStreamCdnConfigLocksToHclTerraform(struct?: MediaServicesStreamCdnConfigLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaServicesStreamCdnConfigLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaServicesStreamCdnConfigLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesStreamCdnConfigLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
  }

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

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
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
}

export class MediaServicesStreamCdnConfigLocksList extends cdktf.ComplexList {
  public internalValue? : MediaServicesStreamCdnConfigLocks[] | cdktf.IResolvable

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
  public get(index: number): MediaServicesStreamCdnConfigLocksOutputReference {
    return new MediaServicesStreamCdnConfigLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaServicesStreamCdnConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}
  */
  readonly update?: string;
}

export function mediaServicesStreamCdnConfigTimeoutsToTerraform(struct?: MediaServicesStreamCdnConfigTimeouts | cdktf.IResolvable): any {
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


export function mediaServicesStreamCdnConfigTimeoutsToHclTerraform(struct?: MediaServicesStreamCdnConfigTimeouts | cdktf.IResolvable): any {
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

export class MediaServicesStreamCdnConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaServicesStreamCdnConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaServicesStreamCdnConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}
*/
export class MediaServicesStreamCdnConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_stream_cdn_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaServicesStreamCdnConfig to import
  * @param importFromId The id of the existing MediaServicesStreamCdnConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaServicesStreamCdnConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_media_services_stream_cdn_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaServicesStreamCdnConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MediaServicesStreamCdnConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_media_services_stream_cdn_config',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._distributionChannelId = config.distributionChannelId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._isLockOverride = config.isLockOverride;
    this._config.internalValue = config.config;
    this._locks.internalValue = config.locks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // distribution_channel_id - computed: false, optional: false, required: true
  private _distributionChannelId?: string; 
  public get distributionChannelId() {
    return this.getStringAttribute('distribution_channel_id');
  }
  public set distributionChannelId(value: string) {
    this._distributionChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionChannelIdInput() {
    return this._distributionChannelId;
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

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
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

  // config - computed: false, optional: false, required: true
  private _config = new MediaServicesStreamCdnConfigConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MediaServicesStreamCdnConfigConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new MediaServicesStreamCdnConfigLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: MediaServicesStreamCdnConfigLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaServicesStreamCdnConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaServicesStreamCdnConfigTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      distribution_channel_id: cdktf.stringToTerraform(this._distributionChannelId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      config: mediaServicesStreamCdnConfigConfigAToTerraform(this._config.internalValue),
      locks: cdktf.listMapper(mediaServicesStreamCdnConfigLocksToTerraform, true)(this._locks.internalValue),
      timeouts: mediaServicesStreamCdnConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      distribution_channel_id: {
        value: cdktf.stringToHclTerraform(this._distributionChannelId),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config: {
        value: mediaServicesStreamCdnConfigConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaServicesStreamCdnConfigConfigAList",
      },
      locks: {
        value: cdktf.listMapperHcl(mediaServicesStreamCdnConfigLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaServicesStreamCdnConfigLocksList",
      },
      timeouts: {
        value: mediaServicesStreamCdnConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaServicesStreamCdnConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
