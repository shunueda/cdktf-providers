// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthClientSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dynamic client registration settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#dynamic_client_registration OauthClientSettings#dynamic_client_registration}
  */
  readonly dynamicClientRegistration?: OauthClientSettingsDynamicClientRegistration;
}
export interface OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id OauthClientSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientSettingsDynamicClientRegistrationClientCertIssuerRefToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientSettingsDynamicClientRegistrationClientCertIssuerRefToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationClientCertIssuerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id OauthClientSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRefToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRefToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id OauthClientSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroupToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroupToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OauthClientSettingsDynamicClientRegistrationOidcPolicy {
  /**
  * The JSON Web Encryption [JWE] content encryption algorithm for the ID Token.<br>AES_128_CBC_HMAC_SHA_256 - Composite AES-CBC-128 HMAC-SHA-256<br>AES_192_CBC_HMAC_SHA_384 - Composite AES-CBC-192 HMAC-SHA-384<br>AES_256_CBC_HMAC_SHA_512 - Composite AES-CBC-256 HMAC-SHA-512<br>AES_128_GCM - AES-GCM-128<br>AES_192_GCM - AES-GCM-192<br>AES_256_GCM - AES-GCM-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id_token_content_encryption_algorithm OauthClientSettings#id_token_content_encryption_algorithm}
  */
  readonly idTokenContentEncryptionAlgorithm?: string;
  /**
  * The JSON Web Encryption [JWE] encryption algorithm used to encrypt the content encryption key for the ID Token.<br>DIR - Direct Encryption with symmetric key<br>A128KW - AES-128 Key Wrap<br>A192KW - AES-192 Key Wrap<br>A256KW - AES-256 Key Wrap<br>A128GCMKW - AES-GCM-128 key encryption<br>A192GCMKW - AES-GCM-192 key encryption<br>A256GCMKW - AES-GCM-256 key encryption<br>ECDH_ES - ECDH-ES<br>ECDH_ES_A128KW - ECDH-ES with AES-128 Key Wrap<br>ECDH_ES_A192KW - ECDH-ES with AES-192 Key Wrap<br>ECDH_ES_A256KW - ECDH-ES with AES-256 Key Wrap<br>RSA_OAEP - RSAES OAEP<br>RSA_OAEP_256 - RSAES OAEP using SHA-256 and MGF1 with SHA-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id_token_encryption_algorithm OauthClientSettings#id_token_encryption_algorithm}
  */
  readonly idTokenEncryptionAlgorithm?: string;
  /**
  * The JSON Web Signature [JWS] algorithm required for the ID Token.<br>NONE - No signing algorithm<br>HS256 - HMAC using SHA-256<br>HS384 - HMAC using SHA-384<br>HS512 - HMAC using SHA-512<br>RS256 - RSA using SHA-256<br>RS384 - RSA using SHA-384<br>RS512 - RSA using SHA-512<br>ES256 - ECDSA using P256 Curve and SHA-256<br>ES384 - ECDSA using P384 Curve and SHA-384<br>ES512 - ECDSA using P521 Curve and SHA-512<br>PS256 - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256<br>PS384 - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384<br>PS512 - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512<br>A null value will represent the default algorithm which is RS256.<br>RSASSA-PSS is only supported with Thales Luna, Entrust nShield Connect or Java 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id_token_signing_algorithm OauthClientSettings#id_token_signing_algorithm}
  */
  readonly idTokenSigningAlgorithm?: string;
  /**
  * The Open ID Connect policy. A null value will represent the default policy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#policy_group OauthClientSettings#policy_group}
  */
  readonly policyGroup?: OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup;
}

export function oauthClientSettingsDynamicClientRegistrationOidcPolicyToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationOidcPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_token_content_encryption_algorithm: cdktf.stringToTerraform(struct!.idTokenContentEncryptionAlgorithm),
    id_token_encryption_algorithm: cdktf.stringToTerraform(struct!.idTokenEncryptionAlgorithm),
    id_token_signing_algorithm: cdktf.stringToTerraform(struct!.idTokenSigningAlgorithm),
    policy_group: oauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroupToTerraform(struct!.policyGroup),
  }
}


export function oauthClientSettingsDynamicClientRegistrationOidcPolicyToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationOidcPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_token_content_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.idTokenContentEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.idTokenEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.idTokenSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_group: {
      value: oauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroupToHclTerraform(struct!.policyGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationOidcPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationOidcPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idTokenContentEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenContentEncryptionAlgorithm = this._idTokenContentEncryptionAlgorithm;
    }
    if (this._idTokenEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenEncryptionAlgorithm = this._idTokenEncryptionAlgorithm;
    }
    if (this._idTokenSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenSigningAlgorithm = this._idTokenSigningAlgorithm;
    }
    if (this._policyGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyGroup = this._policyGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationOidcPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idTokenContentEncryptionAlgorithm = undefined;
      this._idTokenEncryptionAlgorithm = undefined;
      this._idTokenSigningAlgorithm = undefined;
      this._policyGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idTokenContentEncryptionAlgorithm = value.idTokenContentEncryptionAlgorithm;
      this._idTokenEncryptionAlgorithm = value.idTokenEncryptionAlgorithm;
      this._idTokenSigningAlgorithm = value.idTokenSigningAlgorithm;
      this._policyGroup.internalValue = value.policyGroup;
    }
  }

  // id_token_content_encryption_algorithm - computed: false, optional: true, required: false
  private _idTokenContentEncryptionAlgorithm?: string; 
  public get idTokenContentEncryptionAlgorithm() {
    return this.getStringAttribute('id_token_content_encryption_algorithm');
  }
  public set idTokenContentEncryptionAlgorithm(value: string) {
    this._idTokenContentEncryptionAlgorithm = value;
  }
  public resetIdTokenContentEncryptionAlgorithm() {
    this._idTokenContentEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenContentEncryptionAlgorithmInput() {
    return this._idTokenContentEncryptionAlgorithm;
  }

  // id_token_encryption_algorithm - computed: false, optional: true, required: false
  private _idTokenEncryptionAlgorithm?: string; 
  public get idTokenEncryptionAlgorithm() {
    return this.getStringAttribute('id_token_encryption_algorithm');
  }
  public set idTokenEncryptionAlgorithm(value: string) {
    this._idTokenEncryptionAlgorithm = value;
  }
  public resetIdTokenEncryptionAlgorithm() {
    this._idTokenEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenEncryptionAlgorithmInput() {
    return this._idTokenEncryptionAlgorithm;
  }

  // id_token_signing_algorithm - computed: false, optional: true, required: false
  private _idTokenSigningAlgorithm?: string; 
  public get idTokenSigningAlgorithm() {
    return this.getStringAttribute('id_token_signing_algorithm');
  }
  public set idTokenSigningAlgorithm(value: string) {
    this._idTokenSigningAlgorithm = value;
  }
  public resetIdTokenSigningAlgorithm() {
    this._idTokenSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenSigningAlgorithmInput() {
    return this._idTokenSigningAlgorithm;
  }

  // policy_group - computed: false, optional: true, required: false
  private _policyGroup = new OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroupOutputReference(this, "policy_group");
  public get policyGroup() {
    return this._policyGroup;
  }
  public putPolicyGroup(value: OauthClientSettingsDynamicClientRegistrationOidcPolicyPolicyGroup) {
    this._policyGroup.internalValue = value;
  }
  public resetPolicyGroup() {
    this._policyGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupInput() {
    return this._policyGroup.internalValue;
  }
}
export interface OauthClientSettingsDynamicClientRegistrationPolicyRefs {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id OauthClientSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientSettingsDynamicClientRegistrationPolicyRefsToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationPolicyRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientSettingsDynamicClientRegistrationPolicyRefsToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationPolicyRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationPolicyRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationPolicyRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationPolicyRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class OauthClientSettingsDynamicClientRegistrationPolicyRefsList extends cdktf.ComplexList {
  public internalValue? : OauthClientSettingsDynamicClientRegistrationPolicyRefs[] | cdktf.IResolvable

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
  public get(index: number): OauthClientSettingsDynamicClientRegistrationPolicyRefsOutputReference {
    return new OauthClientSettingsDynamicClientRegistrationPolicyRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientSettingsDynamicClientRegistrationRequestPolicyRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id OauthClientSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientSettingsDynamicClientRegistrationRequestPolicyRefToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationRequestPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientSettingsDynamicClientRegistrationRequestPolicyRefToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationRequestPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationRequestPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationRequestPolicyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationRequestPolicyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#id OauthClientSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRefToTerraform(struct?: OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRefToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OauthClientSettingsDynamicClientRegistration {
  /**
  * Allow client deletion from dynamic client management. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#allow_client_delete OauthClientSettings#allow_client_delete}
  */
  readonly allowClientDelete?: boolean | cdktf.IResolvable;
  /**
  * The authorization detail types to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#allowed_authorization_detail_types OauthClientSettings#allowed_authorization_detail_types}
  */
  readonly allowedAuthorizationDetailTypes?: string[];
  /**
  * The exclusive scopes to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#allowed_exclusive_scopes OauthClientSettings#allowed_exclusive_scopes}
  */
  readonly allowedExclusiveScopes?: string[];
  /**
  * Indicates if the Activation Code Confirmation page should be bypassed if 'verification_url_complete' is used by the end user to authorize a device. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#bypass_activation_code_confirmation_override OauthClientSettings#bypass_activation_code_confirmation_override}
  */
  readonly bypassActivationCodeConfirmationOverride?: boolean | cdktf.IResolvable;
  /**
  * The minimum amount of time in seconds that the Client must wait between polling requests to the token endpoint. The default is `3` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#ciba_polling_interval OauthClientSettings#ciba_polling_interval}
  */
  readonly cibaPollingInterval?: number;
  /**
  * Determines whether CIBA signed requests are required for this client. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#ciba_require_signed_requests OauthClientSettings#ciba_require_signed_requests}
  */
  readonly cibaRequireSignedRequests?: boolean | cdktf.IResolvable;
  /**
  * Client TLS Certificate Issuer DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#client_cert_issuer_ref OauthClientSettings#client_cert_issuer_ref}
  */
  readonly clientCertIssuerRef?: OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef;
  /**
  * Client TLS Certificate Issuer Type. Options are `NONE`, `TRUST_ANY`, `CERTIFICATE`. Defaults to `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#client_cert_issuer_type OauthClientSettings#client_cert_issuer_type}
  */
  readonly clientCertIssuerType?: string;
  /**
  * The length of time in minutes that client secrets will be retained as secondary secrets after secret change. The default value is `0`, which will disable secondary client secret retention. This value will override the `client_secret_retention_period` value on the Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#client_secret_retention_period_override OauthClientSettings#client_secret_retention_period_override}
  */
  readonly clientSecretRetentionPeriodOverride?: number;
  /**
  * Use `OVERRIDE_SERVER_DEFAULT` to override the Client Secret Retention Period value on the Authorization Server Settings. `SERVER_DEFAULT` will default to the Client Secret Retention Period value on the Authorization Server Setting. Defaults to `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#client_secret_retention_period_type OauthClientSettings#client_secret_retention_period_type}
  */
  readonly clientSecretRetentionPeriodType?: string;
  /**
  * The default access token manager for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#default_access_token_manager_ref OauthClientSettings#default_access_token_manager_ref}
  */
  readonly defaultAccessTokenManagerRef?: OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef;
  /**
  * Allows an administrator to override the Device Authorization Settings set globally for the OAuth AS. Defaults to `SERVER_DEFAULT`. Options are `SERVER_DEFAULT`, `OVERRIDE_SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#device_flow_setting_type OauthClientSettings#device_flow_setting_type}
  */
  readonly deviceFlowSettingType?: string;
  /**
  * The amount of time client should wait between polling requests, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#device_polling_interval_override OauthClientSettings#device_polling_interval_override}
  */
  readonly devicePollingIntervalOverride?: number;
  /**
  * Disable registration access tokens. Local standards may mandate different registration access token requirements. If applicable, implement custom validation and enforcement rules using the DynamicClientRegistrationPlugin interface from the PingFederate SDK, configure the client registration policies (`policy_refs`), and set this property (`disable_registration_access_tokens`) to `true`. CAUTION: When the `disable_registration_access_tokens` property is set to `true`, all clients, not just the ones created using the Dynamic Client Registration protocol, are vulnerable to unrestricted retrievals, updates (including modifications to the client authentication scheme and redirect URIs), and deletes at the /as/clients.oauth2 endpoint unless one or more client registration policies are in place to protect against unauthorized attempts. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#disable_registration_access_tokens OauthClientSettings#disable_registration_access_tokens}
  */
  readonly disableRegistrationAccessTokens?: boolean | cdktf.IResolvable;
  /**
  * Enforce replay prevention. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#enforce_replay_prevention OauthClientSettings#enforce_replay_prevention}
  */
  readonly enforceReplayPrevention?: boolean | cdktf.IResolvable;
  /**
  * The initial access token to prevent unwanted client registrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#initial_access_token_scope OauthClientSettings#initial_access_token_scope}
  */
  readonly initialAccessTokenScope?: string;
  /**
  * The number of malicious actions allowed before an OAuth client is locked out. Currently, the only operation that is tracked as a malicious action is an attempt to revoke an invalid access token or refresh token. This value will override the global `MaxMaliciousActions` value on the `AccountLockingService` in the config-store. Supported in PingFederate `12.2` and newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#lockout_max_malicious_actions OauthClientSettings#lockout_max_malicious_actions}
  */
  readonly lockoutMaxMaliciousActions?: number;
  /**
  * Allows an administrator to override the Max Malicious Actions configuration set globally in AccountLockingService. Defaults to `SERVER_DEFAULT`. Supported values are `DO_NOT_LOCKOUT`, `SERVER_DEFAULT`, `OVERRIDE_SERVER_DEFAULT`. Supported in PingFederate `12.2` and newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#lockout_max_malicious_actions_type OauthClientSettings#lockout_max_malicious_actions_type}
  */
  readonly lockoutMaxMaliciousActionsType?: string;
  /**
  * Determines whether offline_access requires the prompt parameter value to be set to 'consent' or not. The value will be reset to default if the `require_offline_access_scope_to_issue_refresh_tokens` attribute is set to `SERVER_DEFAULT` or `false`. `SERVER_DEFAULT` is the default value. Options are `SERVER_DEFAULT`, `NO`, `YES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#offline_access_require_consent_prompt OauthClientSettings#offline_access_require_consent_prompt}
  */
  readonly offlineAccessRequireConsentPrompt?: string;
  /**
  * Open ID Connect Policy settings. This is included in the message only when OIDC is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#oidc_policy OauthClientSettings#oidc_policy}
  */
  readonly oidcPolicy?: OauthClientSettingsDynamicClientRegistrationOidcPolicy;
  /**
  * The `device_code` and `user_code` timeout, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#pending_authorization_timeout_override OauthClientSettings#pending_authorization_timeout_override}
  */
  readonly pendingAuthorizationTimeoutOverride?: number;
  /**
  * The persistent grant expiration time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#persistent_grant_expiration_time OauthClientSettings#persistent_grant_expiration_time}
  */
  readonly persistentGrantExpirationTime?: number;
  /**
  * The persistent grant expiration time unit. Options are `MINUTES`, `DAYS`, `HOURS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#persistent_grant_expiration_time_unit OauthClientSettings#persistent_grant_expiration_time_unit}
  */
  readonly persistentGrantExpirationTimeUnit?: string;
  /**
  * Allows an administrator to override the Persistent Grant Lifetime set globally for the OAuth AS. Defaults to `SERVER_DEFAULT`. Options are `INDEFINITE_EXPIRY`, `SERVER_DEFAULT`, `OVERRIDE_SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#persistent_grant_expiration_type OauthClientSettings#persistent_grant_expiration_type}
  */
  readonly persistentGrantExpirationType?: string;
  /**
  * The persistent grant idle timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#persistent_grant_idle_timeout OauthClientSettings#persistent_grant_idle_timeout}
  */
  readonly persistentGrantIdleTimeout?: number;
  /**
  * The persistent grant idle timeout time unit. Options are `MINUTES`, `DAYS`, `HOURS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#persistent_grant_idle_timeout_time_unit OauthClientSettings#persistent_grant_idle_timeout_time_unit}
  */
  readonly persistentGrantIdleTimeoutTimeUnit?: string;
  /**
  * Allows an administrator to override the Persistent Grant Idle Timeout set globally for the OAuth AS. Defaults to `SERVER_DEFAULT`. Options are `INDEFINITE_EXPIRY`, `SERVER_DEFAULT`, `OVERRIDE_SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#persistent_grant_idle_timeout_type OauthClientSettings#persistent_grant_idle_timeout_type}
  */
  readonly persistentGrantIdleTimeoutType?: string;
  /**
  * The client registration policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#policy_refs OauthClientSettings#policy_refs}
  */
  readonly policyRefs?: OauthClientSettingsDynamicClientRegistrationPolicyRefs[] | cdktf.IResolvable;
  /**
  * Use `ROLL` or `DONT_ROLL` to override the `roll_refresh_token_values` setting on the Authorization Server Settings. `SERVER_DEFAULT` will default to the `roll_refresh_token_values` setting on the Authorization Server Setting screen. Defaults to `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#refresh_rolling OauthClientSettings#refresh_rolling}
  */
  readonly refreshRolling?: string;
  /**
  * The grace period that a rolled refresh token remains valid in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#refresh_token_rolling_grace_period OauthClientSettings#refresh_token_rolling_grace_period}
  */
  readonly refreshTokenRollingGracePeriod?: number;
  /**
  * When set to `OVERRIDE_SERVER_DEFAULT`, it overrides the global `refresh_token_grace_period` defined in the Authorization Server Settings. The default value is `SERVER_DEFAULT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#refresh_token_rolling_grace_period_type OauthClientSettings#refresh_token_rolling_grace_period_type}
  */
  readonly refreshTokenRollingGracePeriodType?: string;
  /**
  * The minimum interval to roll refresh tokens. This value will override the `refresh_token_rolling_interval` value on the Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#refresh_token_rolling_interval OauthClientSettings#refresh_token_rolling_interval}
  */
  readonly refreshTokenRollingInterval?: number;
  /**
  * The refresh token rolling interval time unit. Defaults to `HOURS`. Options are `SECONDS`, `MINUTES`, `HOURS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#refresh_token_rolling_interval_time_unit OauthClientSettings#refresh_token_rolling_interval_time_unit}
  */
  readonly refreshTokenRollingIntervalTimeUnit?: string;
  /**
  * Use `OVERRIDE_SERVER_DEFAULT` to override the `refresh_token_rolling_interval` value on the Authorization Server Settings. `SERVER_DEFAULT` will default to the `refresh_token_rolling_interval` value on the Authorization Server Setting. Defaults to SERVER_DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#refresh_token_rolling_interval_type OauthClientSettings#refresh_token_rolling_interval_type}
  */
  readonly refreshTokenRollingIntervalType?: string;
  /**
  * The CIBA request policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#request_policy_ref OauthClientSettings#request_policy_ref}
  */
  readonly requestPolicyRef?: OauthClientSettingsDynamicClientRegistrationRequestPolicyRef;
  /**
  * Determines whether JWT Secured authorization response mode is required when initiating an authorization request. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#require_jwt_secured_authorization_response_mode OauthClientSettings#require_jwt_secured_authorization_response_mode}
  */
  readonly requireJwtSecuredAuthorizationResponseMode?: boolean | cdktf.IResolvable;
  /**
  * Determines whether offline_access scope is required to issue refresh tokens or not. 'SERVER_DEFAULT' is the default value. Options are `SERVER_DEFAULT`, `NO`, `YES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#require_offline_access_scope_to_issue_refresh_tokens OauthClientSettings#require_offline_access_scope_to_issue_refresh_tokens}
  */
  readonly requireOfflineAccessScopeToIssueRefreshTokens?: string;
  /**
  * Determines whether Proof Key for Code Exchange (PKCE) is required for the dynamically created client. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#require_proof_key_for_code_exchange OauthClientSettings#require_proof_key_for_code_exchange}
  */
  readonly requireProofKeyForCodeExchange?: boolean | cdktf.IResolvable;
  /**
  * Require signed requests. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#require_signed_requests OauthClientSettings#require_signed_requests}
  */
  readonly requireSignedRequests?: boolean | cdktf.IResolvable;
  /**
  * Restrict common scopes. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#restrict_common_scopes OauthClientSettings#restrict_common_scopes}
  */
  readonly restrictCommonScopes?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the client is restricted to using only its default access token manager. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#restrict_to_default_access_token_manager OauthClientSettings#restrict_to_default_access_token_manager}
  */
  readonly restrictToDefaultAccessTokenManager?: boolean | cdktf.IResolvable;
  /**
  * The common scopes to restrict.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#restricted_common_scopes OauthClientSettings#restricted_common_scopes}
  */
  readonly restrictedCommonScopes?: string[];
  /**
  * Temporarily retain the old client secret on client secret change. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#retain_client_secret OauthClientSettings#retain_client_secret}
  */
  readonly retainClientSecret?: boolean | cdktf.IResolvable;
  /**
  * Rotate registration access token on dynamic client management requests. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#rotate_client_secret OauthClientSettings#rotate_client_secret}
  */
  readonly rotateClientSecret?: boolean | cdktf.IResolvable;
  /**
  * Rotate client secret on dynamic client management requests. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#rotate_registration_access_token OauthClientSettings#rotate_registration_access_token}
  */
  readonly rotateRegistrationAccessToken?: boolean | cdktf.IResolvable;
  /**
  * The Token Exchange Processor policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#token_exchange_processor_policy_ref OauthClientSettings#token_exchange_processor_policy_ref}
  */
  readonly tokenExchangeProcessorPolicyRef?: OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef;
  /**
  * The URL is used as `verification_url` and `verification_url_complete` values in a Device Authorization request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#user_authorization_url_override OauthClientSettings#user_authorization_url_override}
  */
  readonly userAuthorizationUrlOverride?: string;
}

export function oauthClientSettingsDynamicClientRegistrationToTerraform(struct?: OauthClientSettingsDynamicClientRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_client_delete: cdktf.booleanToTerraform(struct!.allowClientDelete),
    allowed_authorization_detail_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAuthorizationDetailTypes),
    allowed_exclusive_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedExclusiveScopes),
    bypass_activation_code_confirmation_override: cdktf.booleanToTerraform(struct!.bypassActivationCodeConfirmationOverride),
    ciba_polling_interval: cdktf.numberToTerraform(struct!.cibaPollingInterval),
    ciba_require_signed_requests: cdktf.booleanToTerraform(struct!.cibaRequireSignedRequests),
    client_cert_issuer_ref: oauthClientSettingsDynamicClientRegistrationClientCertIssuerRefToTerraform(struct!.clientCertIssuerRef),
    client_cert_issuer_type: cdktf.stringToTerraform(struct!.clientCertIssuerType),
    client_secret_retention_period_override: cdktf.numberToTerraform(struct!.clientSecretRetentionPeriodOverride),
    client_secret_retention_period_type: cdktf.stringToTerraform(struct!.clientSecretRetentionPeriodType),
    default_access_token_manager_ref: oauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRefToTerraform(struct!.defaultAccessTokenManagerRef),
    device_flow_setting_type: cdktf.stringToTerraform(struct!.deviceFlowSettingType),
    device_polling_interval_override: cdktf.numberToTerraform(struct!.devicePollingIntervalOverride),
    disable_registration_access_tokens: cdktf.booleanToTerraform(struct!.disableRegistrationAccessTokens),
    enforce_replay_prevention: cdktf.booleanToTerraform(struct!.enforceReplayPrevention),
    initial_access_token_scope: cdktf.stringToTerraform(struct!.initialAccessTokenScope),
    lockout_max_malicious_actions: cdktf.numberToTerraform(struct!.lockoutMaxMaliciousActions),
    lockout_max_malicious_actions_type: cdktf.stringToTerraform(struct!.lockoutMaxMaliciousActionsType),
    offline_access_require_consent_prompt: cdktf.stringToTerraform(struct!.offlineAccessRequireConsentPrompt),
    oidc_policy: oauthClientSettingsDynamicClientRegistrationOidcPolicyToTerraform(struct!.oidcPolicy),
    pending_authorization_timeout_override: cdktf.numberToTerraform(struct!.pendingAuthorizationTimeoutOverride),
    persistent_grant_expiration_time: cdktf.numberToTerraform(struct!.persistentGrantExpirationTime),
    persistent_grant_expiration_time_unit: cdktf.stringToTerraform(struct!.persistentGrantExpirationTimeUnit),
    persistent_grant_expiration_type: cdktf.stringToTerraform(struct!.persistentGrantExpirationType),
    persistent_grant_idle_timeout: cdktf.numberToTerraform(struct!.persistentGrantIdleTimeout),
    persistent_grant_idle_timeout_time_unit: cdktf.stringToTerraform(struct!.persistentGrantIdleTimeoutTimeUnit),
    persistent_grant_idle_timeout_type: cdktf.stringToTerraform(struct!.persistentGrantIdleTimeoutType),
    policy_refs: cdktf.listMapper(oauthClientSettingsDynamicClientRegistrationPolicyRefsToTerraform, false)(struct!.policyRefs),
    refresh_rolling: cdktf.stringToTerraform(struct!.refreshRolling),
    refresh_token_rolling_grace_period: cdktf.numberToTerraform(struct!.refreshTokenRollingGracePeriod),
    refresh_token_rolling_grace_period_type: cdktf.stringToTerraform(struct!.refreshTokenRollingGracePeriodType),
    refresh_token_rolling_interval: cdktf.numberToTerraform(struct!.refreshTokenRollingInterval),
    refresh_token_rolling_interval_time_unit: cdktf.stringToTerraform(struct!.refreshTokenRollingIntervalTimeUnit),
    refresh_token_rolling_interval_type: cdktf.stringToTerraform(struct!.refreshTokenRollingIntervalType),
    request_policy_ref: oauthClientSettingsDynamicClientRegistrationRequestPolicyRefToTerraform(struct!.requestPolicyRef),
    require_jwt_secured_authorization_response_mode: cdktf.booleanToTerraform(struct!.requireJwtSecuredAuthorizationResponseMode),
    require_offline_access_scope_to_issue_refresh_tokens: cdktf.stringToTerraform(struct!.requireOfflineAccessScopeToIssueRefreshTokens),
    require_proof_key_for_code_exchange: cdktf.booleanToTerraform(struct!.requireProofKeyForCodeExchange),
    require_signed_requests: cdktf.booleanToTerraform(struct!.requireSignedRequests),
    restrict_common_scopes: cdktf.booleanToTerraform(struct!.restrictCommonScopes),
    restrict_to_default_access_token_manager: cdktf.booleanToTerraform(struct!.restrictToDefaultAccessTokenManager),
    restricted_common_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedCommonScopes),
    retain_client_secret: cdktf.booleanToTerraform(struct!.retainClientSecret),
    rotate_client_secret: cdktf.booleanToTerraform(struct!.rotateClientSecret),
    rotate_registration_access_token: cdktf.booleanToTerraform(struct!.rotateRegistrationAccessToken),
    token_exchange_processor_policy_ref: oauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRefToTerraform(struct!.tokenExchangeProcessorPolicyRef),
    user_authorization_url_override: cdktf.stringToTerraform(struct!.userAuthorizationUrlOverride),
  }
}


export function oauthClientSettingsDynamicClientRegistrationToHclTerraform(struct?: OauthClientSettingsDynamicClientRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_client_delete: {
      value: cdktf.booleanToHclTerraform(struct!.allowClientDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_authorization_detail_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAuthorizationDetailTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_exclusive_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedExclusiveScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bypass_activation_code_confirmation_override: {
      value: cdktf.booleanToHclTerraform(struct!.bypassActivationCodeConfirmationOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ciba_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.cibaPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ciba_require_signed_requests: {
      value: cdktf.booleanToHclTerraform(struct!.cibaRequireSignedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_cert_issuer_ref: {
      value: oauthClientSettingsDynamicClientRegistrationClientCertIssuerRefToHclTerraform(struct!.clientCertIssuerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef",
    },
    client_cert_issuer_type: {
      value: cdktf.stringToHclTerraform(struct!.clientCertIssuerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_retention_period_override: {
      value: cdktf.numberToHclTerraform(struct!.clientSecretRetentionPeriodOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_secret_retention_period_type: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretRetentionPeriodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_access_token_manager_ref: {
      value: oauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRefToHclTerraform(struct!.defaultAccessTokenManagerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef",
    },
    device_flow_setting_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceFlowSettingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_polling_interval_override: {
      value: cdktf.numberToHclTerraform(struct!.devicePollingIntervalOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_registration_access_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.disableRegistrationAccessTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_replay_prevention: {
      value: cdktf.booleanToHclTerraform(struct!.enforceReplayPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_access_token_scope: {
      value: cdktf.stringToHclTerraform(struct!.initialAccessTokenScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockout_max_malicious_actions: {
      value: cdktf.numberToHclTerraform(struct!.lockoutMaxMaliciousActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_max_malicious_actions_type: {
      value: cdktf.stringToHclTerraform(struct!.lockoutMaxMaliciousActionsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offline_access_require_consent_prompt: {
      value: cdktf.stringToHclTerraform(struct!.offlineAccessRequireConsentPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_policy: {
      value: oauthClientSettingsDynamicClientRegistrationOidcPolicyToHclTerraform(struct!.oidcPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationOidcPolicy",
    },
    pending_authorization_timeout_override: {
      value: cdktf.numberToHclTerraform(struct!.pendingAuthorizationTimeoutOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_grant_expiration_time: {
      value: cdktf.numberToHclTerraform(struct!.persistentGrantExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_grant_expiration_time_unit: {
      value: cdktf.stringToHclTerraform(struct!.persistentGrantExpirationTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_grant_expiration_type: {
      value: cdktf.stringToHclTerraform(struct!.persistentGrantExpirationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_grant_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.persistentGrantIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_grant_idle_timeout_time_unit: {
      value: cdktf.stringToHclTerraform(struct!.persistentGrantIdleTimeoutTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_grant_idle_timeout_type: {
      value: cdktf.stringToHclTerraform(struct!.persistentGrantIdleTimeoutType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_refs: {
      value: cdktf.listMapperHcl(oauthClientSettingsDynamicClientRegistrationPolicyRefsToHclTerraform, false)(struct!.policyRefs),
      isBlock: true,
      type: "list",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationPolicyRefsList",
    },
    refresh_rolling: {
      value: cdktf.stringToHclTerraform(struct!.refreshRolling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_rolling_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenRollingGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_rolling_grace_period_type: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenRollingGracePeriodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_rolling_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenRollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_rolling_interval_time_unit: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenRollingIntervalTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_rolling_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenRollingIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_policy_ref: {
      value: oauthClientSettingsDynamicClientRegistrationRequestPolicyRefToHclTerraform(struct!.requestPolicyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationRequestPolicyRef",
    },
    require_jwt_secured_authorization_response_mode: {
      value: cdktf.booleanToHclTerraform(struct!.requireJwtSecuredAuthorizationResponseMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_offline_access_scope_to_issue_refresh_tokens: {
      value: cdktf.stringToHclTerraform(struct!.requireOfflineAccessScopeToIssueRefreshTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_proof_key_for_code_exchange: {
      value: cdktf.booleanToHclTerraform(struct!.requireProofKeyForCodeExchange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_signed_requests: {
      value: cdktf.booleanToHclTerraform(struct!.requireSignedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_common_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCommonScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_to_default_access_token_manager: {
      value: cdktf.booleanToHclTerraform(struct!.restrictToDefaultAccessTokenManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_common_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedCommonScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    retain_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.retainClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotate_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.rotateClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotate_registration_access_token: {
      value: cdktf.booleanToHclTerraform(struct!.rotateRegistrationAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_exchange_processor_policy_ref: {
      value: oauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRefToHclTerraform(struct!.tokenExchangeProcessorPolicyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef",
    },
    user_authorization_url_override: {
      value: cdktf.stringToHclTerraform(struct!.userAuthorizationUrlOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientSettingsDynamicClientRegistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientSettingsDynamicClientRegistration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClientDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClientDelete = this._allowClientDelete;
    }
    if (this._allowedAuthorizationDetailTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAuthorizationDetailTypes = this._allowedAuthorizationDetailTypes;
    }
    if (this._allowedExclusiveScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExclusiveScopes = this._allowedExclusiveScopes;
    }
    if (this._bypassActivationCodeConfirmationOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassActivationCodeConfirmationOverride = this._bypassActivationCodeConfirmationOverride;
    }
    if (this._cibaPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cibaPollingInterval = this._cibaPollingInterval;
    }
    if (this._cibaRequireSignedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.cibaRequireSignedRequests = this._cibaRequireSignedRequests;
    }
    if (this._clientCertIssuerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertIssuerRef = this._clientCertIssuerRef?.internalValue;
    }
    if (this._clientCertIssuerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertIssuerType = this._clientCertIssuerType;
    }
    if (this._clientSecretRetentionPeriodOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRetentionPeriodOverride = this._clientSecretRetentionPeriodOverride;
    }
    if (this._clientSecretRetentionPeriodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretRetentionPeriodType = this._clientSecretRetentionPeriodType;
    }
    if (this._defaultAccessTokenManagerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAccessTokenManagerRef = this._defaultAccessTokenManagerRef?.internalValue;
    }
    if (this._deviceFlowSettingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFlowSettingType = this._deviceFlowSettingType;
    }
    if (this._devicePollingIntervalOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePollingIntervalOverride = this._devicePollingIntervalOverride;
    }
    if (this._disableRegistrationAccessTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRegistrationAccessTokens = this._disableRegistrationAccessTokens;
    }
    if (this._enforceReplayPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceReplayPrevention = this._enforceReplayPrevention;
    }
    if (this._initialAccessTokenScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialAccessTokenScope = this._initialAccessTokenScope;
    }
    if (this._lockoutMaxMaliciousActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutMaxMaliciousActions = this._lockoutMaxMaliciousActions;
    }
    if (this._lockoutMaxMaliciousActionsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutMaxMaliciousActionsType = this._lockoutMaxMaliciousActionsType;
    }
    if (this._offlineAccessRequireConsentPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineAccessRequireConsentPrompt = this._offlineAccessRequireConsentPrompt;
    }
    if (this._oidcPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcPolicy = this._oidcPolicy?.internalValue;
    }
    if (this._pendingAuthorizationTimeoutOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingAuthorizationTimeoutOverride = this._pendingAuthorizationTimeoutOverride;
    }
    if (this._persistentGrantExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentGrantExpirationTime = this._persistentGrantExpirationTime;
    }
    if (this._persistentGrantExpirationTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentGrantExpirationTimeUnit = this._persistentGrantExpirationTimeUnit;
    }
    if (this._persistentGrantExpirationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentGrantExpirationType = this._persistentGrantExpirationType;
    }
    if (this._persistentGrantIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentGrantIdleTimeout = this._persistentGrantIdleTimeout;
    }
    if (this._persistentGrantIdleTimeoutTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentGrantIdleTimeoutTimeUnit = this._persistentGrantIdleTimeoutTimeUnit;
    }
    if (this._persistentGrantIdleTimeoutType !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentGrantIdleTimeoutType = this._persistentGrantIdleTimeoutType;
    }
    if (this._policyRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRefs = this._policyRefs?.internalValue;
    }
    if (this._refreshRolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRolling = this._refreshRolling;
    }
    if (this._refreshTokenRollingGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingGracePeriod = this._refreshTokenRollingGracePeriod;
    }
    if (this._refreshTokenRollingGracePeriodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingGracePeriodType = this._refreshTokenRollingGracePeriodType;
    }
    if (this._refreshTokenRollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingInterval = this._refreshTokenRollingInterval;
    }
    if (this._refreshTokenRollingIntervalTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingIntervalTimeUnit = this._refreshTokenRollingIntervalTimeUnit;
    }
    if (this._refreshTokenRollingIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingIntervalType = this._refreshTokenRollingIntervalType;
    }
    if (this._requestPolicyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPolicyRef = this._requestPolicyRef?.internalValue;
    }
    if (this._requireJwtSecuredAuthorizationResponseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireJwtSecuredAuthorizationResponseMode = this._requireJwtSecuredAuthorizationResponseMode;
    }
    if (this._requireOfflineAccessScopeToIssueRefreshTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireOfflineAccessScopeToIssueRefreshTokens = this._requireOfflineAccessScopeToIssueRefreshTokens;
    }
    if (this._requireProofKeyForCodeExchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireProofKeyForCodeExchange = this._requireProofKeyForCodeExchange;
    }
    if (this._requireSignedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSignedRequests = this._requireSignedRequests;
    }
    if (this._restrictCommonScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCommonScopes = this._restrictCommonScopes;
    }
    if (this._restrictToDefaultAccessTokenManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictToDefaultAccessTokenManager = this._restrictToDefaultAccessTokenManager;
    }
    if (this._restrictedCommonScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedCommonScopes = this._restrictedCommonScopes;
    }
    if (this._retainClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainClientSecret = this._retainClientSecret;
    }
    if (this._rotateClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateClientSecret = this._rotateClientSecret;
    }
    if (this._rotateRegistrationAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotateRegistrationAccessToken = this._rotateRegistrationAccessToken;
    }
    if (this._tokenExchangeProcessorPolicyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExchangeProcessorPolicyRef = this._tokenExchangeProcessorPolicyRef?.internalValue;
    }
    if (this._userAuthorizationUrlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuthorizationUrlOverride = this._userAuthorizationUrlOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientSettingsDynamicClientRegistration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowClientDelete = undefined;
      this._allowedAuthorizationDetailTypes = undefined;
      this._allowedExclusiveScopes = undefined;
      this._bypassActivationCodeConfirmationOverride = undefined;
      this._cibaPollingInterval = undefined;
      this._cibaRequireSignedRequests = undefined;
      this._clientCertIssuerRef.internalValue = undefined;
      this._clientCertIssuerType = undefined;
      this._clientSecretRetentionPeriodOverride = undefined;
      this._clientSecretRetentionPeriodType = undefined;
      this._defaultAccessTokenManagerRef.internalValue = undefined;
      this._deviceFlowSettingType = undefined;
      this._devicePollingIntervalOverride = undefined;
      this._disableRegistrationAccessTokens = undefined;
      this._enforceReplayPrevention = undefined;
      this._initialAccessTokenScope = undefined;
      this._lockoutMaxMaliciousActions = undefined;
      this._lockoutMaxMaliciousActionsType = undefined;
      this._offlineAccessRequireConsentPrompt = undefined;
      this._oidcPolicy.internalValue = undefined;
      this._pendingAuthorizationTimeoutOverride = undefined;
      this._persistentGrantExpirationTime = undefined;
      this._persistentGrantExpirationTimeUnit = undefined;
      this._persistentGrantExpirationType = undefined;
      this._persistentGrantIdleTimeout = undefined;
      this._persistentGrantIdleTimeoutTimeUnit = undefined;
      this._persistentGrantIdleTimeoutType = undefined;
      this._policyRefs.internalValue = undefined;
      this._refreshRolling = undefined;
      this._refreshTokenRollingGracePeriod = undefined;
      this._refreshTokenRollingGracePeriodType = undefined;
      this._refreshTokenRollingInterval = undefined;
      this._refreshTokenRollingIntervalTimeUnit = undefined;
      this._refreshTokenRollingIntervalType = undefined;
      this._requestPolicyRef.internalValue = undefined;
      this._requireJwtSecuredAuthorizationResponseMode = undefined;
      this._requireOfflineAccessScopeToIssueRefreshTokens = undefined;
      this._requireProofKeyForCodeExchange = undefined;
      this._requireSignedRequests = undefined;
      this._restrictCommonScopes = undefined;
      this._restrictToDefaultAccessTokenManager = undefined;
      this._restrictedCommonScopes = undefined;
      this._retainClientSecret = undefined;
      this._rotateClientSecret = undefined;
      this._rotateRegistrationAccessToken = undefined;
      this._tokenExchangeProcessorPolicyRef.internalValue = undefined;
      this._userAuthorizationUrlOverride = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowClientDelete = value.allowClientDelete;
      this._allowedAuthorizationDetailTypes = value.allowedAuthorizationDetailTypes;
      this._allowedExclusiveScopes = value.allowedExclusiveScopes;
      this._bypassActivationCodeConfirmationOverride = value.bypassActivationCodeConfirmationOverride;
      this._cibaPollingInterval = value.cibaPollingInterval;
      this._cibaRequireSignedRequests = value.cibaRequireSignedRequests;
      this._clientCertIssuerRef.internalValue = value.clientCertIssuerRef;
      this._clientCertIssuerType = value.clientCertIssuerType;
      this._clientSecretRetentionPeriodOverride = value.clientSecretRetentionPeriodOverride;
      this._clientSecretRetentionPeriodType = value.clientSecretRetentionPeriodType;
      this._defaultAccessTokenManagerRef.internalValue = value.defaultAccessTokenManagerRef;
      this._deviceFlowSettingType = value.deviceFlowSettingType;
      this._devicePollingIntervalOverride = value.devicePollingIntervalOverride;
      this._disableRegistrationAccessTokens = value.disableRegistrationAccessTokens;
      this._enforceReplayPrevention = value.enforceReplayPrevention;
      this._initialAccessTokenScope = value.initialAccessTokenScope;
      this._lockoutMaxMaliciousActions = value.lockoutMaxMaliciousActions;
      this._lockoutMaxMaliciousActionsType = value.lockoutMaxMaliciousActionsType;
      this._offlineAccessRequireConsentPrompt = value.offlineAccessRequireConsentPrompt;
      this._oidcPolicy.internalValue = value.oidcPolicy;
      this._pendingAuthorizationTimeoutOverride = value.pendingAuthorizationTimeoutOverride;
      this._persistentGrantExpirationTime = value.persistentGrantExpirationTime;
      this._persistentGrantExpirationTimeUnit = value.persistentGrantExpirationTimeUnit;
      this._persistentGrantExpirationType = value.persistentGrantExpirationType;
      this._persistentGrantIdleTimeout = value.persistentGrantIdleTimeout;
      this._persistentGrantIdleTimeoutTimeUnit = value.persistentGrantIdleTimeoutTimeUnit;
      this._persistentGrantIdleTimeoutType = value.persistentGrantIdleTimeoutType;
      this._policyRefs.internalValue = value.policyRefs;
      this._refreshRolling = value.refreshRolling;
      this._refreshTokenRollingGracePeriod = value.refreshTokenRollingGracePeriod;
      this._refreshTokenRollingGracePeriodType = value.refreshTokenRollingGracePeriodType;
      this._refreshTokenRollingInterval = value.refreshTokenRollingInterval;
      this._refreshTokenRollingIntervalTimeUnit = value.refreshTokenRollingIntervalTimeUnit;
      this._refreshTokenRollingIntervalType = value.refreshTokenRollingIntervalType;
      this._requestPolicyRef.internalValue = value.requestPolicyRef;
      this._requireJwtSecuredAuthorizationResponseMode = value.requireJwtSecuredAuthorizationResponseMode;
      this._requireOfflineAccessScopeToIssueRefreshTokens = value.requireOfflineAccessScopeToIssueRefreshTokens;
      this._requireProofKeyForCodeExchange = value.requireProofKeyForCodeExchange;
      this._requireSignedRequests = value.requireSignedRequests;
      this._restrictCommonScopes = value.restrictCommonScopes;
      this._restrictToDefaultAccessTokenManager = value.restrictToDefaultAccessTokenManager;
      this._restrictedCommonScopes = value.restrictedCommonScopes;
      this._retainClientSecret = value.retainClientSecret;
      this._rotateClientSecret = value.rotateClientSecret;
      this._rotateRegistrationAccessToken = value.rotateRegistrationAccessToken;
      this._tokenExchangeProcessorPolicyRef.internalValue = value.tokenExchangeProcessorPolicyRef;
      this._userAuthorizationUrlOverride = value.userAuthorizationUrlOverride;
    }
  }

  // allow_client_delete - computed: true, optional: true, required: false
  private _allowClientDelete?: boolean | cdktf.IResolvable; 
  public get allowClientDelete() {
    return this.getBooleanAttribute('allow_client_delete');
  }
  public set allowClientDelete(value: boolean | cdktf.IResolvable) {
    this._allowClientDelete = value;
  }
  public resetAllowClientDelete() {
    this._allowClientDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClientDeleteInput() {
    return this._allowClientDelete;
  }

  // allowed_authorization_detail_types - computed: true, optional: true, required: false
  private _allowedAuthorizationDetailTypes?: string[]; 
  public get allowedAuthorizationDetailTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authorization_detail_types'));
  }
  public set allowedAuthorizationDetailTypes(value: string[]) {
    this._allowedAuthorizationDetailTypes = value;
  }
  public resetAllowedAuthorizationDetailTypes() {
    this._allowedAuthorizationDetailTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthorizationDetailTypesInput() {
    return this._allowedAuthorizationDetailTypes;
  }

  // allowed_exclusive_scopes - computed: true, optional: true, required: false
  private _allowedExclusiveScopes?: string[]; 
  public get allowedExclusiveScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_exclusive_scopes'));
  }
  public set allowedExclusiveScopes(value: string[]) {
    this._allowedExclusiveScopes = value;
  }
  public resetAllowedExclusiveScopes() {
    this._allowedExclusiveScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExclusiveScopesInput() {
    return this._allowedExclusiveScopes;
  }

  // bypass_activation_code_confirmation_override - computed: true, optional: true, required: false
  private _bypassActivationCodeConfirmationOverride?: boolean | cdktf.IResolvable; 
  public get bypassActivationCodeConfirmationOverride() {
    return this.getBooleanAttribute('bypass_activation_code_confirmation_override');
  }
  public set bypassActivationCodeConfirmationOverride(value: boolean | cdktf.IResolvable) {
    this._bypassActivationCodeConfirmationOverride = value;
  }
  public resetBypassActivationCodeConfirmationOverride() {
    this._bypassActivationCodeConfirmationOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassActivationCodeConfirmationOverrideInput() {
    return this._bypassActivationCodeConfirmationOverride;
  }

  // ciba_polling_interval - computed: true, optional: true, required: false
  private _cibaPollingInterval?: number; 
  public get cibaPollingInterval() {
    return this.getNumberAttribute('ciba_polling_interval');
  }
  public set cibaPollingInterval(value: number) {
    this._cibaPollingInterval = value;
  }
  public resetCibaPollingInterval() {
    this._cibaPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaPollingIntervalInput() {
    return this._cibaPollingInterval;
  }

  // ciba_require_signed_requests - computed: true, optional: true, required: false
  private _cibaRequireSignedRequests?: boolean | cdktf.IResolvable; 
  public get cibaRequireSignedRequests() {
    return this.getBooleanAttribute('ciba_require_signed_requests');
  }
  public set cibaRequireSignedRequests(value: boolean | cdktf.IResolvable) {
    this._cibaRequireSignedRequests = value;
  }
  public resetCibaRequireSignedRequests() {
    this._cibaRequireSignedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaRequireSignedRequestsInput() {
    return this._cibaRequireSignedRequests;
  }

  // client_cert_issuer_ref - computed: false, optional: true, required: false
  private _clientCertIssuerRef = new OauthClientSettingsDynamicClientRegistrationClientCertIssuerRefOutputReference(this, "client_cert_issuer_ref");
  public get clientCertIssuerRef() {
    return this._clientCertIssuerRef;
  }
  public putClientCertIssuerRef(value: OauthClientSettingsDynamicClientRegistrationClientCertIssuerRef) {
    this._clientCertIssuerRef.internalValue = value;
  }
  public resetClientCertIssuerRef() {
    this._clientCertIssuerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertIssuerRefInput() {
    return this._clientCertIssuerRef.internalValue;
  }

  // client_cert_issuer_type - computed: true, optional: true, required: false
  private _clientCertIssuerType?: string; 
  public get clientCertIssuerType() {
    return this.getStringAttribute('client_cert_issuer_type');
  }
  public set clientCertIssuerType(value: string) {
    this._clientCertIssuerType = value;
  }
  public resetClientCertIssuerType() {
    this._clientCertIssuerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertIssuerTypeInput() {
    return this._clientCertIssuerType;
  }

  // client_secret_retention_period_override - computed: false, optional: true, required: false
  private _clientSecretRetentionPeriodOverride?: number; 
  public get clientSecretRetentionPeriodOverride() {
    return this.getNumberAttribute('client_secret_retention_period_override');
  }
  public set clientSecretRetentionPeriodOverride(value: number) {
    this._clientSecretRetentionPeriodOverride = value;
  }
  public resetClientSecretRetentionPeriodOverride() {
    this._clientSecretRetentionPeriodOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRetentionPeriodOverrideInput() {
    return this._clientSecretRetentionPeriodOverride;
  }

  // client_secret_retention_period_type - computed: true, optional: true, required: false
  private _clientSecretRetentionPeriodType?: string; 
  public get clientSecretRetentionPeriodType() {
    return this.getStringAttribute('client_secret_retention_period_type');
  }
  public set clientSecretRetentionPeriodType(value: string) {
    this._clientSecretRetentionPeriodType = value;
  }
  public resetClientSecretRetentionPeriodType() {
    this._clientSecretRetentionPeriodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRetentionPeriodTypeInput() {
    return this._clientSecretRetentionPeriodType;
  }

  // default_access_token_manager_ref - computed: false, optional: true, required: false
  private _defaultAccessTokenManagerRef = new OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRefOutputReference(this, "default_access_token_manager_ref");
  public get defaultAccessTokenManagerRef() {
    return this._defaultAccessTokenManagerRef;
  }
  public putDefaultAccessTokenManagerRef(value: OauthClientSettingsDynamicClientRegistrationDefaultAccessTokenManagerRef) {
    this._defaultAccessTokenManagerRef.internalValue = value;
  }
  public resetDefaultAccessTokenManagerRef() {
    this._defaultAccessTokenManagerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessTokenManagerRefInput() {
    return this._defaultAccessTokenManagerRef.internalValue;
  }

  // device_flow_setting_type - computed: true, optional: true, required: false
  private _deviceFlowSettingType?: string; 
  public get deviceFlowSettingType() {
    return this.getStringAttribute('device_flow_setting_type');
  }
  public set deviceFlowSettingType(value: string) {
    this._deviceFlowSettingType = value;
  }
  public resetDeviceFlowSettingType() {
    this._deviceFlowSettingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFlowSettingTypeInput() {
    return this._deviceFlowSettingType;
  }

  // device_polling_interval_override - computed: false, optional: true, required: false
  private _devicePollingIntervalOverride?: number; 
  public get devicePollingIntervalOverride() {
    return this.getNumberAttribute('device_polling_interval_override');
  }
  public set devicePollingIntervalOverride(value: number) {
    this._devicePollingIntervalOverride = value;
  }
  public resetDevicePollingIntervalOverride() {
    this._devicePollingIntervalOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePollingIntervalOverrideInput() {
    return this._devicePollingIntervalOverride;
  }

  // disable_registration_access_tokens - computed: true, optional: true, required: false
  private _disableRegistrationAccessTokens?: boolean | cdktf.IResolvable; 
  public get disableRegistrationAccessTokens() {
    return this.getBooleanAttribute('disable_registration_access_tokens');
  }
  public set disableRegistrationAccessTokens(value: boolean | cdktf.IResolvable) {
    this._disableRegistrationAccessTokens = value;
  }
  public resetDisableRegistrationAccessTokens() {
    this._disableRegistrationAccessTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRegistrationAccessTokensInput() {
    return this._disableRegistrationAccessTokens;
  }

  // enforce_replay_prevention - computed: true, optional: true, required: false
  private _enforceReplayPrevention?: boolean | cdktf.IResolvable; 
  public get enforceReplayPrevention() {
    return this.getBooleanAttribute('enforce_replay_prevention');
  }
  public set enforceReplayPrevention(value: boolean | cdktf.IResolvable) {
    this._enforceReplayPrevention = value;
  }
  public resetEnforceReplayPrevention() {
    this._enforceReplayPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceReplayPreventionInput() {
    return this._enforceReplayPrevention;
  }

  // initial_access_token_scope - computed: false, optional: true, required: false
  private _initialAccessTokenScope?: string; 
  public get initialAccessTokenScope() {
    return this.getStringAttribute('initial_access_token_scope');
  }
  public set initialAccessTokenScope(value: string) {
    this._initialAccessTokenScope = value;
  }
  public resetInitialAccessTokenScope() {
    this._initialAccessTokenScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialAccessTokenScopeInput() {
    return this._initialAccessTokenScope;
  }

  // lockout_max_malicious_actions - computed: false, optional: true, required: false
  private _lockoutMaxMaliciousActions?: number; 
  public get lockoutMaxMaliciousActions() {
    return this.getNumberAttribute('lockout_max_malicious_actions');
  }
  public set lockoutMaxMaliciousActions(value: number) {
    this._lockoutMaxMaliciousActions = value;
  }
  public resetLockoutMaxMaliciousActions() {
    this._lockoutMaxMaliciousActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutMaxMaliciousActionsInput() {
    return this._lockoutMaxMaliciousActions;
  }

  // lockout_max_malicious_actions_type - computed: true, optional: true, required: false
  private _lockoutMaxMaliciousActionsType?: string; 
  public get lockoutMaxMaliciousActionsType() {
    return this.getStringAttribute('lockout_max_malicious_actions_type');
  }
  public set lockoutMaxMaliciousActionsType(value: string) {
    this._lockoutMaxMaliciousActionsType = value;
  }
  public resetLockoutMaxMaliciousActionsType() {
    this._lockoutMaxMaliciousActionsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutMaxMaliciousActionsTypeInput() {
    return this._lockoutMaxMaliciousActionsType;
  }

  // offline_access_require_consent_prompt - computed: true, optional: true, required: false
  private _offlineAccessRequireConsentPrompt?: string; 
  public get offlineAccessRequireConsentPrompt() {
    return this.getStringAttribute('offline_access_require_consent_prompt');
  }
  public set offlineAccessRequireConsentPrompt(value: string) {
    this._offlineAccessRequireConsentPrompt = value;
  }
  public resetOfflineAccessRequireConsentPrompt() {
    this._offlineAccessRequireConsentPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineAccessRequireConsentPromptInput() {
    return this._offlineAccessRequireConsentPrompt;
  }

  // oidc_policy - computed: false, optional: true, required: false
  private _oidcPolicy = new OauthClientSettingsDynamicClientRegistrationOidcPolicyOutputReference(this, "oidc_policy");
  public get oidcPolicy() {
    return this._oidcPolicy;
  }
  public putOidcPolicy(value: OauthClientSettingsDynamicClientRegistrationOidcPolicy) {
    this._oidcPolicy.internalValue = value;
  }
  public resetOidcPolicy() {
    this._oidcPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcPolicyInput() {
    return this._oidcPolicy.internalValue;
  }

  // pending_authorization_timeout_override - computed: false, optional: true, required: false
  private _pendingAuthorizationTimeoutOverride?: number; 
  public get pendingAuthorizationTimeoutOverride() {
    return this.getNumberAttribute('pending_authorization_timeout_override');
  }
  public set pendingAuthorizationTimeoutOverride(value: number) {
    this._pendingAuthorizationTimeoutOverride = value;
  }
  public resetPendingAuthorizationTimeoutOverride() {
    this._pendingAuthorizationTimeoutOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingAuthorizationTimeoutOverrideInput() {
    return this._pendingAuthorizationTimeoutOverride;
  }

  // persistent_grant_expiration_time - computed: false, optional: true, required: false
  private _persistentGrantExpirationTime?: number; 
  public get persistentGrantExpirationTime() {
    return this.getNumberAttribute('persistent_grant_expiration_time');
  }
  public set persistentGrantExpirationTime(value: number) {
    this._persistentGrantExpirationTime = value;
  }
  public resetPersistentGrantExpirationTime() {
    this._persistentGrantExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantExpirationTimeInput() {
    return this._persistentGrantExpirationTime;
  }

  // persistent_grant_expiration_time_unit - computed: false, optional: true, required: false
  private _persistentGrantExpirationTimeUnit?: string; 
  public get persistentGrantExpirationTimeUnit() {
    return this.getStringAttribute('persistent_grant_expiration_time_unit');
  }
  public set persistentGrantExpirationTimeUnit(value: string) {
    this._persistentGrantExpirationTimeUnit = value;
  }
  public resetPersistentGrantExpirationTimeUnit() {
    this._persistentGrantExpirationTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantExpirationTimeUnitInput() {
    return this._persistentGrantExpirationTimeUnit;
  }

  // persistent_grant_expiration_type - computed: true, optional: true, required: false
  private _persistentGrantExpirationType?: string; 
  public get persistentGrantExpirationType() {
    return this.getStringAttribute('persistent_grant_expiration_type');
  }
  public set persistentGrantExpirationType(value: string) {
    this._persistentGrantExpirationType = value;
  }
  public resetPersistentGrantExpirationType() {
    this._persistentGrantExpirationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantExpirationTypeInput() {
    return this._persistentGrantExpirationType;
  }

  // persistent_grant_idle_timeout - computed: false, optional: true, required: false
  private _persistentGrantIdleTimeout?: number; 
  public get persistentGrantIdleTimeout() {
    return this.getNumberAttribute('persistent_grant_idle_timeout');
  }
  public set persistentGrantIdleTimeout(value: number) {
    this._persistentGrantIdleTimeout = value;
  }
  public resetPersistentGrantIdleTimeout() {
    this._persistentGrantIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantIdleTimeoutInput() {
    return this._persistentGrantIdleTimeout;
  }

  // persistent_grant_idle_timeout_time_unit - computed: false, optional: true, required: false
  private _persistentGrantIdleTimeoutTimeUnit?: string; 
  public get persistentGrantIdleTimeoutTimeUnit() {
    return this.getStringAttribute('persistent_grant_idle_timeout_time_unit');
  }
  public set persistentGrantIdleTimeoutTimeUnit(value: string) {
    this._persistentGrantIdleTimeoutTimeUnit = value;
  }
  public resetPersistentGrantIdleTimeoutTimeUnit() {
    this._persistentGrantIdleTimeoutTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantIdleTimeoutTimeUnitInput() {
    return this._persistentGrantIdleTimeoutTimeUnit;
  }

  // persistent_grant_idle_timeout_type - computed: true, optional: true, required: false
  private _persistentGrantIdleTimeoutType?: string; 
  public get persistentGrantIdleTimeoutType() {
    return this.getStringAttribute('persistent_grant_idle_timeout_type');
  }
  public set persistentGrantIdleTimeoutType(value: string) {
    this._persistentGrantIdleTimeoutType = value;
  }
  public resetPersistentGrantIdleTimeoutType() {
    this._persistentGrantIdleTimeoutType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantIdleTimeoutTypeInput() {
    return this._persistentGrantIdleTimeoutType;
  }

  // policy_refs - computed: true, optional: true, required: false
  private _policyRefs = new OauthClientSettingsDynamicClientRegistrationPolicyRefsList(this, "policy_refs", false);
  public get policyRefs() {
    return this._policyRefs;
  }
  public putPolicyRefs(value: OauthClientSettingsDynamicClientRegistrationPolicyRefs[] | cdktf.IResolvable) {
    this._policyRefs.internalValue = value;
  }
  public resetPolicyRefs() {
    this._policyRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefsInput() {
    return this._policyRefs.internalValue;
  }

  // refresh_rolling - computed: true, optional: true, required: false
  private _refreshRolling?: string; 
  public get refreshRolling() {
    return this.getStringAttribute('refresh_rolling');
  }
  public set refreshRolling(value: string) {
    this._refreshRolling = value;
  }
  public resetRefreshRolling() {
    this._refreshRolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRollingInput() {
    return this._refreshRolling;
  }

  // refresh_token_rolling_grace_period - computed: false, optional: true, required: false
  private _refreshTokenRollingGracePeriod?: number; 
  public get refreshTokenRollingGracePeriod() {
    return this.getNumberAttribute('refresh_token_rolling_grace_period');
  }
  public set refreshTokenRollingGracePeriod(value: number) {
    this._refreshTokenRollingGracePeriod = value;
  }
  public resetRefreshTokenRollingGracePeriod() {
    this._refreshTokenRollingGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingGracePeriodInput() {
    return this._refreshTokenRollingGracePeriod;
  }

  // refresh_token_rolling_grace_period_type - computed: true, optional: true, required: false
  private _refreshTokenRollingGracePeriodType?: string; 
  public get refreshTokenRollingGracePeriodType() {
    return this.getStringAttribute('refresh_token_rolling_grace_period_type');
  }
  public set refreshTokenRollingGracePeriodType(value: string) {
    this._refreshTokenRollingGracePeriodType = value;
  }
  public resetRefreshTokenRollingGracePeriodType() {
    this._refreshTokenRollingGracePeriodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingGracePeriodTypeInput() {
    return this._refreshTokenRollingGracePeriodType;
  }

  // refresh_token_rolling_interval - computed: false, optional: true, required: false
  private _refreshTokenRollingInterval?: number; 
  public get refreshTokenRollingInterval() {
    return this.getNumberAttribute('refresh_token_rolling_interval');
  }
  public set refreshTokenRollingInterval(value: number) {
    this._refreshTokenRollingInterval = value;
  }
  public resetRefreshTokenRollingInterval() {
    this._refreshTokenRollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingIntervalInput() {
    return this._refreshTokenRollingInterval;
  }

  // refresh_token_rolling_interval_time_unit - computed: false, optional: true, required: false
  private _refreshTokenRollingIntervalTimeUnit?: string; 
  public get refreshTokenRollingIntervalTimeUnit() {
    return this.getStringAttribute('refresh_token_rolling_interval_time_unit');
  }
  public set refreshTokenRollingIntervalTimeUnit(value: string) {
    this._refreshTokenRollingIntervalTimeUnit = value;
  }
  public resetRefreshTokenRollingIntervalTimeUnit() {
    this._refreshTokenRollingIntervalTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingIntervalTimeUnitInput() {
    return this._refreshTokenRollingIntervalTimeUnit;
  }

  // refresh_token_rolling_interval_type - computed: true, optional: true, required: false
  private _refreshTokenRollingIntervalType?: string; 
  public get refreshTokenRollingIntervalType() {
    return this.getStringAttribute('refresh_token_rolling_interval_type');
  }
  public set refreshTokenRollingIntervalType(value: string) {
    this._refreshTokenRollingIntervalType = value;
  }
  public resetRefreshTokenRollingIntervalType() {
    this._refreshTokenRollingIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingIntervalTypeInput() {
    return this._refreshTokenRollingIntervalType;
  }

  // request_policy_ref - computed: false, optional: true, required: false
  private _requestPolicyRef = new OauthClientSettingsDynamicClientRegistrationRequestPolicyRefOutputReference(this, "request_policy_ref");
  public get requestPolicyRef() {
    return this._requestPolicyRef;
  }
  public putRequestPolicyRef(value: OauthClientSettingsDynamicClientRegistrationRequestPolicyRef) {
    this._requestPolicyRef.internalValue = value;
  }
  public resetRequestPolicyRef() {
    this._requestPolicyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPolicyRefInput() {
    return this._requestPolicyRef.internalValue;
  }

  // require_jwt_secured_authorization_response_mode - computed: true, optional: true, required: false
  private _requireJwtSecuredAuthorizationResponseMode?: boolean | cdktf.IResolvable; 
  public get requireJwtSecuredAuthorizationResponseMode() {
    return this.getBooleanAttribute('require_jwt_secured_authorization_response_mode');
  }
  public set requireJwtSecuredAuthorizationResponseMode(value: boolean | cdktf.IResolvable) {
    this._requireJwtSecuredAuthorizationResponseMode = value;
  }
  public resetRequireJwtSecuredAuthorizationResponseMode() {
    this._requireJwtSecuredAuthorizationResponseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireJwtSecuredAuthorizationResponseModeInput() {
    return this._requireJwtSecuredAuthorizationResponseMode;
  }

  // require_offline_access_scope_to_issue_refresh_tokens - computed: true, optional: true, required: false
  private _requireOfflineAccessScopeToIssueRefreshTokens?: string; 
  public get requireOfflineAccessScopeToIssueRefreshTokens() {
    return this.getStringAttribute('require_offline_access_scope_to_issue_refresh_tokens');
  }
  public set requireOfflineAccessScopeToIssueRefreshTokens(value: string) {
    this._requireOfflineAccessScopeToIssueRefreshTokens = value;
  }
  public resetRequireOfflineAccessScopeToIssueRefreshTokens() {
    this._requireOfflineAccessScopeToIssueRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireOfflineAccessScopeToIssueRefreshTokensInput() {
    return this._requireOfflineAccessScopeToIssueRefreshTokens;
  }

  // require_proof_key_for_code_exchange - computed: true, optional: true, required: false
  private _requireProofKeyForCodeExchange?: boolean | cdktf.IResolvable; 
  public get requireProofKeyForCodeExchange() {
    return this.getBooleanAttribute('require_proof_key_for_code_exchange');
  }
  public set requireProofKeyForCodeExchange(value: boolean | cdktf.IResolvable) {
    this._requireProofKeyForCodeExchange = value;
  }
  public resetRequireProofKeyForCodeExchange() {
    this._requireProofKeyForCodeExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireProofKeyForCodeExchangeInput() {
    return this._requireProofKeyForCodeExchange;
  }

  // require_signed_requests - computed: true, optional: true, required: false
  private _requireSignedRequests?: boolean | cdktf.IResolvable; 
  public get requireSignedRequests() {
    return this.getBooleanAttribute('require_signed_requests');
  }
  public set requireSignedRequests(value: boolean | cdktf.IResolvable) {
    this._requireSignedRequests = value;
  }
  public resetRequireSignedRequests() {
    this._requireSignedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedRequestsInput() {
    return this._requireSignedRequests;
  }

  // restrict_common_scopes - computed: true, optional: true, required: false
  private _restrictCommonScopes?: boolean | cdktf.IResolvable; 
  public get restrictCommonScopes() {
    return this.getBooleanAttribute('restrict_common_scopes');
  }
  public set restrictCommonScopes(value: boolean | cdktf.IResolvable) {
    this._restrictCommonScopes = value;
  }
  public resetRestrictCommonScopes() {
    this._restrictCommonScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCommonScopesInput() {
    return this._restrictCommonScopes;
  }

  // restrict_to_default_access_token_manager - computed: true, optional: true, required: false
  private _restrictToDefaultAccessTokenManager?: boolean | cdktf.IResolvable; 
  public get restrictToDefaultAccessTokenManager() {
    return this.getBooleanAttribute('restrict_to_default_access_token_manager');
  }
  public set restrictToDefaultAccessTokenManager(value: boolean | cdktf.IResolvable) {
    this._restrictToDefaultAccessTokenManager = value;
  }
  public resetRestrictToDefaultAccessTokenManager() {
    this._restrictToDefaultAccessTokenManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToDefaultAccessTokenManagerInput() {
    return this._restrictToDefaultAccessTokenManager;
  }

  // restricted_common_scopes - computed: true, optional: true, required: false
  private _restrictedCommonScopes?: string[]; 
  public get restrictedCommonScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_common_scopes'));
  }
  public set restrictedCommonScopes(value: string[]) {
    this._restrictedCommonScopes = value;
  }
  public resetRestrictedCommonScopes() {
    this._restrictedCommonScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedCommonScopesInput() {
    return this._restrictedCommonScopes;
  }

  // retain_client_secret - computed: true, optional: true, required: false
  private _retainClientSecret?: boolean | cdktf.IResolvable; 
  public get retainClientSecret() {
    return this.getBooleanAttribute('retain_client_secret');
  }
  public set retainClientSecret(value: boolean | cdktf.IResolvable) {
    this._retainClientSecret = value;
  }
  public resetRetainClientSecret() {
    this._retainClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainClientSecretInput() {
    return this._retainClientSecret;
  }

  // rotate_client_secret - computed: true, optional: true, required: false
  private _rotateClientSecret?: boolean | cdktf.IResolvable; 
  public get rotateClientSecret() {
    return this.getBooleanAttribute('rotate_client_secret');
  }
  public set rotateClientSecret(value: boolean | cdktf.IResolvable) {
    this._rotateClientSecret = value;
  }
  public resetRotateClientSecret() {
    this._rotateClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateClientSecretInput() {
    return this._rotateClientSecret;
  }

  // rotate_registration_access_token - computed: true, optional: true, required: false
  private _rotateRegistrationAccessToken?: boolean | cdktf.IResolvable; 
  public get rotateRegistrationAccessToken() {
    return this.getBooleanAttribute('rotate_registration_access_token');
  }
  public set rotateRegistrationAccessToken(value: boolean | cdktf.IResolvable) {
    this._rotateRegistrationAccessToken = value;
  }
  public resetRotateRegistrationAccessToken() {
    this._rotateRegistrationAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateRegistrationAccessTokenInput() {
    return this._rotateRegistrationAccessToken;
  }

  // token_exchange_processor_policy_ref - computed: false, optional: true, required: false
  private _tokenExchangeProcessorPolicyRef = new OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRefOutputReference(this, "token_exchange_processor_policy_ref");
  public get tokenExchangeProcessorPolicyRef() {
    return this._tokenExchangeProcessorPolicyRef;
  }
  public putTokenExchangeProcessorPolicyRef(value: OauthClientSettingsDynamicClientRegistrationTokenExchangeProcessorPolicyRef) {
    this._tokenExchangeProcessorPolicyRef.internalValue = value;
  }
  public resetTokenExchangeProcessorPolicyRef() {
    this._tokenExchangeProcessorPolicyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExchangeProcessorPolicyRefInput() {
    return this._tokenExchangeProcessorPolicyRef.internalValue;
  }

  // user_authorization_url_override - computed: false, optional: true, required: false
  private _userAuthorizationUrlOverride?: string; 
  public get userAuthorizationUrlOverride() {
    return this.getStringAttribute('user_authorization_url_override');
  }
  public set userAuthorizationUrlOverride(value: string) {
    this._userAuthorizationUrlOverride = value;
  }
  public resetUserAuthorizationUrlOverride() {
    this._userAuthorizationUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationUrlOverrideInput() {
    return this._userAuthorizationUrlOverride;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings pingfederate_oauth_client_settings}
*/
export class OauthClientSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_client_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthClientSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthClientSettings to import
  * @param importFromId The id of the existing OauthClientSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthClientSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_client_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_settings pingfederate_oauth_client_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthClientSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OauthClientSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_client_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicClientRegistration.internalValue = config.dynamicClientRegistration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_client_registration - computed: false, optional: true, required: false
  private _dynamicClientRegistration = new OauthClientSettingsDynamicClientRegistrationOutputReference(this, "dynamic_client_registration");
  public get dynamicClientRegistration() {
    return this._dynamicClientRegistration;
  }
  public putDynamicClientRegistration(value: OauthClientSettingsDynamicClientRegistration) {
    this._dynamicClientRegistration.internalValue = value;
  }
  public resetDynamicClientRegistration() {
    this._dynamicClientRegistration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicClientRegistrationInput() {
    return this._dynamicClientRegistration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_client_registration: oauthClientSettingsDynamicClientRegistrationToTerraform(this._dynamicClientRegistration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_client_registration: {
        value: oauthClientSettingsDynamicClientRegistrationToHclTerraform(this._dynamicClientRegistration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientSettingsDynamicClientRegistration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
